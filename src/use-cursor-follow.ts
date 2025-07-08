import { useEffect, useRef } from "react";

import { CursorFollowOptions } from "./types";

const FADE_TIMEOUT = 100; // Timeout in ms to fully fade when mouse stops moving

/**
 * @visibleName useCursorFollow
 */
const useCursorFollow = (props?: CursorFollowOptions) => {
  const {
    easingFactor = 0.1,
    updateInterval = 15,
    size = 14,
    color = "#fff",
    borderRadius = "100%",
    zIndex = 9999,
    hideCursor = true,
    fadeDuration = 200,
    fadeDistance = 10,
  } = props ?? {};
  const mousePos = useRef({ x: -1, y: -1 });
  const elementPos = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initializedRef = useRef(false);
  const opacityRef = useRef(1);
  const lastMouseMoveRef = useRef(Date.now());

  useEffect(() => {
    // Hide the cursor if enabled
    if (hideCursor) {
      document.documentElement.style.cursor = "none";
    }

    // Create the cursor element
    const cursorElement = document.createElement("div");
    cursorElement.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: ${borderRadius};
        pointer-events: none;
        z-index: ${zIndex};
        transition: opacity ${fadeDuration}ms ease-in-out;
        opacity: 1;
        left: 0px;
        top: 0px;
        transform: translate(-50%, -50%);
      `;

    document.body.appendChild(cursorElement);
    elementRef.current = cursorElement;

    // Calculate opacity based on distance from viewport edges
    const calculateOpacity = (x: number, y: number) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate distance from each edge
      const distanceFromLeft = x;
      const distanceFromRight = viewportWidth - x;
      const distanceFromTop = y;
      const distanceFromBottom = viewportHeight - y;

      // Find the minimum distance to any edge
      const minDistance = Math.min(
        distanceFromLeft,
        distanceFromRight,
        distanceFromTop,
        distanceFromBottom
      );

      // If within fade distance, calculate opacity
      if (minDistance < fadeDistance) {
        return Math.max(0, minDistance / fadeDistance);
      }

      return 1;
    };

    // Function to fully fade out the cursor
    const fullyFadeOut = () => {
      if (elementRef.current && opacityRef.current > 0) {
        opacityRef.current = 0;
        elementRef.current.style.opacity = "0";
      }
    };

    // Function to check if mouse has stopped moving and fade out if needed
    const checkMouseActivity = () => {
      const now = Date.now();
      const timeSinceLastMove = now - lastMouseMoveRef.current;

      if (timeSinceLastMove > FADE_TIMEOUT) {
        // Only fade out if mouse is outside viewport or very close to edges
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Check if mouse is outside viewport or within a small margin of the edges
        const isOutsideOrNearEdge =
          mousePos.current.x < -10 ||
          mousePos.current.x > viewportWidth + 10 ||
          mousePos.current.y < -10 ||
          mousePos.current.y > viewportHeight + 10;

        if (isOutsideOrNearEdge) {
          fullyFadeOut();
        }
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      lastMouseMoveRef.current = Date.now();

      // Clear any existing fade timeout
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      // Calculate and apply opacity
      const newOpacity = calculateOpacity(e.clientX, e.clientY);
      if (
        elementRef.current &&
        Math.abs(newOpacity - opacityRef.current) > 0.01
      ) {
        opacityRef.current = newOpacity;
        elementRef.current.style.opacity = newOpacity.toString();
      }

      // Set new timeout to check for mouse inactivity
      fadeTimeoutRef.current = setTimeout(checkMouseActivity, FADE_TIMEOUT);
    };

    // Mouse leave handler - immediate fade out when mouse leaves document
    const handleMouseLeave = () => {
      fullyFadeOut();
      // Clear the timeout since we've already faded out
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };

    // Mouse enter handler - ensure cursor is visible when mouse returns
    const handleMouseEnter = () => {
      lastMouseMoveRef.current = Date.now();
      // Reset timeout to check for inactivity
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      fadeTimeoutRef.current = setTimeout(checkMouseActivity, FADE_TIMEOUT);
    };

    // Position update function
    const positionUpdate = () => {
      if (
        elementRef.current &&
        mousePos.current.x !== -1 &&
        mousePos.current.y !== -1
      ) {
        const rect = elementRef.current.getBoundingClientRect();

        // Initialize position on first run
        if (!initializedRef.current) {
          elementPos.current = { x: mousePos.current.x, y: mousePos.current.y };
          elementRef.current.style.left = mousePos.current.x + "px";
          elementRef.current.style.top = mousePos.current.y + "px";
          initializedRef.current = true;
          return;
        }

        // Use center of element for calculations
        const x_box = rect.left + rect.width / 2;
        const y_box = rect.top + rect.height / 2;

        const newLeft = x_box + easingFactor * (mousePos.current.x - x_box);
        const newTop = y_box + easingFactor * (mousePos.current.y - y_box);

        elementPos.current = { x: newLeft, y: newTop };

        // Update DOM directly
        elementRef.current.style.left = newLeft + "px";
        elementRef.current.style.top = newTop + "px";
      }
    };

    // Start tracking
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    intervalRef.current = setInterval(positionUpdate, updateInterval);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      if (elementRef.current) {
        document.body.removeChild(elementRef.current);
      }
    };
  }, [
    easingFactor,
    updateInterval,
    size,
    color,
    borderRadius,
    zIndex,
    hideCursor,
    fadeDuration,
    fadeDistance,
  ]);

  return null;
};

export default useCursorFollow;
