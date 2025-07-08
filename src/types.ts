export interface CursorFollowOptions {
  /**
   * The easing factor for the mouse follower animation
   * @default 0.1
   */
  easingFactor?: number;
  /**
   * The update interval for the mouse follower animation
   * @default 15
   */
  updateInterval?: number;
  /**
   * The size (width and height) of the mouse follower element
   * @default 14
   */
  size?: number;
  /**
   * The color of the mouse follower element
   * @default "#fff"
   */
  color?: string;
  /**
   * The border radius of the mouse follower element
   * @default "100%"
   */
  borderRadius?: string;
  /**
   * The z-index of the mouse follower element
   * @default 9999
   */
  zIndex?: number;
  /**
   * Whether to hide the cursor
   * @default true
   */
  hideCursor?: boolean;
  /**
   * The duration for the fade in/out
   * @default 200
   */
  fadeDuration?: number;
  /**
   * The distance for the fade in/out
   * @default 10
   */
  fadeDistance?: number;
}
