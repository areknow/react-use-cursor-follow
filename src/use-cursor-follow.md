## Basic usage

```jsx static
import { useCursorFollow } from "react-use-cursor-follow";

const App = () => {
  useCursorFollow(options);

  return (...);
}
```

## Customization

Use the controls below to experiment with the cursor settings on this page

```jsx
function InteractiveDemo() {
  const [easingFactor, setEasingFactor] = React.useState(0.1);
  const [updateInterval, setUpdateInterval] = React.useState(15);
  const [size, setSize] = React.useState(14);
  const [color, setColor] = React.useState("#ff6b6b");
  const [borderRadius, setBorderRadius] = React.useState("100%");
  const [hideCursor, setHideCursor] = React.useState(true);
  const [fadeDuration, setFadeDuration] = React.useState(200);
  const [fadeDistance, setFadeDistance] = React.useState(10);

  useCursorFollow({
    easingFactor,
    updateInterval,
    size,
    color,
    borderRadius,
    hideCursor,
    fadeDuration,
    fadeDistance,
  });

  return (
    <div
      style={{
        padding: "1.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ margin: "0 0 1.5rem 0", color: "#333" }}>
        🎛️ Control Panel
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {/* Size */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            📏 Size: {size}px
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Width and height of the cursor element
          </div>
        </div>

        {/* Color */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            🎨 Color
          </label>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                width: "50px",
                height: "40px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                flex: 1,
                padding: "0.5rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "0.9rem",
              }}
              placeholder="#ff6b6b"
            />
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Color of the cursor element (hex, rgb, or named colors)
          </div>
        </div>

        {/* Easing Factor */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            🐌 Easing Factor: {easingFactor.toFixed(2)}
          </label>
          <input
            type="range"
            min="0.01"
            max="0.5"
            step="0.01"
            value={easingFactor}
            onChange={(e) => setEasingFactor(parseFloat(e.target.value))}
            style={{ width: "100%" }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Lower = Smoother, Higher = Snappier
          </div>
        </div>

        {/* Update Interval */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            ⏱️ Update Interval: {updateInterval}ms
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={updateInterval}
            onChange={(e) => setUpdateInterval(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Lower = Smoother animation, Higher = Better performance
          </div>
        </div>

        {/* Fade Duration */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            🌅 Fade Duration: {fadeDuration}ms
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={fadeDuration}
            onChange={(e) => setFadeDuration(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Duration of fade in/out transitions
          </div>
        </div>

        {/* Fade Distance */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            📏 Fade Distance: {fadeDistance}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={fadeDistance}
            onChange={(e) => setFadeDistance(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Distance from edges where fading starts
          </div>
        </div>
      </div>
    </div>
  );
}

<InteractiveDemo />;
```
