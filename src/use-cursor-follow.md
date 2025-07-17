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
  const [color, setColor] = React.useState(0);
  const [borderRadius, setBorderRadius] = React.useState("100%");
  const [hideCursor, setHideCursor] = React.useState(true);
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [fadeDuration, setFadeDuration] = React.useState(200);
  const [fadeDistance, setFadeDistance] = React.useState(10);

  useCursorFollow({
    isEnabled,
    easingFactor,
    updateInterval,
    size,
    color: `hsl(${color}, 70%, 60%)`,
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
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{
              width: "100%",
              background:
                "linear-gradient(to right, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080, #ff0000)",
              height: "8px",
              borderRadius: "4px",
              outline: "none",
              WebkitAppearance: "none",
              cursor: "pointer",
            }}
          />
          <style>{`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: hsl(${color}, 70%, 60%);
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: hsl(${color}, 70%, 60%);
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              cursor: pointer;
            }
          `}</style>
          <div
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "0.25rem",
            }}
          >
            Hue value for the cursor element (0-360 degrees)
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

        {/* Hide Cursor */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            👁️ Hide Cursor: {hideCursor ? "Yes" : "No"}
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={hideCursor}
              onChange={(e) => setHideCursor(e.target.checked)}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginLeft: "5px",
              }}
            >
              Hide the default browser cursor
            </div>
          </label>
        </div>

        {/* Hide Cursor */}
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              color: "#555",
            }}
          >
            ⚡️ Enable hook: {isEnabled ? "Yes" : "No"}
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={(e) => setIsEnabled(e.target.checked)}
              style={{
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginLeft: "5px",
              }}
            >
              Enable the cursor follow hook
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

<InteractiveDemo />;
```
