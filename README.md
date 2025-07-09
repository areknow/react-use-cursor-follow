# React Use Cursor Follow

A lightweight React hook that creates a smooth, customizable animated cursor element that follows your mouse movement. Perfect for creating modern, interactive user experiences with custom cursor effects.

[![npm version](https://img.shields.io/npm/v/react-use-cursor-follow.svg)](https://www.npmjs.com/package/react-use-cursor-follow)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Documentation-blue)](https://areknow.github.io/react-use-cursor-follow/)

[Documentation guide](https://areknow.github.io/react-use-cursor-follow/)
[CodeSandbox Demo](https://codesandbox.io/p/sandbox/zxfz8h)

## Overview

React Use Cursor Follow provides a performant way to create custom cursor effects that smoothly follow mouse movement. The hook creates a floating element that trails behind your cursor with customizable easing, size, color, and behavior options.

### Key Features

- 🎯 Smooth cursor following with customizable easing
- 🎨 Fully customizable appearance (color, size, shape)
- ⚡ Optimized performance with configurable update intervals
- 🌅 Smart fade effects near viewport edges
- 👁️ Optional default cursor hiding
- 🔧 TypeScript support with comprehensive type definitions
- 📱 Responsive and works across all screen sizes
- 🎪 Automatic cleanup and memory management

## Installation

```bash
npm install react-use-cursor-follow
```

or

```bash
yarn add react-use-cursor-follow
```

## Quick Start

```tsx
import { useCursorFollow } from "react-use-cursor-follow";

function App() {
  useCursorFollow({ color: "red" });

  return (
    <div>
      <h1>Move your mouse around!</h1>
      <p>You'll see a custom red cursor following your mouse.</p>
    </div>
  );
}
```

## Hook API

### Options

| Option           | Type      | Default  | Description                                  |
| ---------------- | --------- | -------- | -------------------------------------------- |
| `easingFactor`   | `number`  | `0.1`    | Easing factor for smooth movement (0.01-0.5) |
| `updateInterval` | `number`  | `15`     | Update interval in milliseconds (5-50)       |
| `size`           | `number`  | `14`     | Size of the cursor element in pixels (5-50)  |
| `color`          | `string`  | `"#fff"` | Color of the cursor element                  |
| `borderRadius`   | `string`  | `"100%"` | Border radius for shape customization        |
| `zIndex`         | `number`  | `9999`   | Z-index for stacking order                   |
| `hideCursor`     | `boolean` | `true`   | Whether to hide the default browser cursor   |
| `fadeDuration`   | `number`  | `200`    | Fade transition duration in milliseconds     |
| `fadeDistance`   | `number`  | `10`     | Distance from edges where fading starts      |

## Browser Support

The hook utilizes modern web APIs including:

- `requestAnimationFrame` for smooth animations
- CSS transitions for fade effects
- Standard DOM event handling
- CSS positioning and transforms

Ensure your target browsers support these features or include appropriate polyfills.

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Build the package:
   ```bash
   npm run build
   ```

### Documentation

View the interactive documentation and examples:

```bash
npm run styleguide
```

### Publishing Process

Before publishing a new version, ensure you complete the following checklist:

- [ ] All tests pass (`npm test`)
- [ ] Code is linted (`npm run lint`)
- [ ] TypeScript compilation succeeds (`npm run typecheck`)
- [ ] Documentation is up to date
- [ ] Version number is appropriate for changes (following semver)
- [ ] Git working directory is clean

#### Testing the Package Locally

Before publishing to npm, it's recommended to test the package locally:

1. Create a test package:

   ```bash
   npm pack --dry-run  # List the files that will be included
   npm pack           # Create the tarball
   ```

2. Test in another project:

   ```bash
   cd ../your-test-project
   npm install ../react-use-cursor-follow/react-use-cursor-follow-x.y.z.tgz
   ```

3. Verify the package works as expected in your test project

#### Publishing Steps

1. Update the version:

   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

2. Build and publish:

   ```bash
   npm run build
   npm publish
   ```

3. Push changes and tags:
   ```bash
   git push && git push --tags
   ```

## License

MIT © [areknow](https://github.com/areknow)
