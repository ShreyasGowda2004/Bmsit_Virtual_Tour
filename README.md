# College VR Tour

A professional 360-degree virtual reality tour of our college campus.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Place your 360-degree images in the `static_assets` folder:
- Name your images as `scene1.jpg`, `scene2.jpg`, etc. (up to scene16.jpg)
- Make sure the images are in equirectangular format for proper 360-degree viewing

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:8081`

## Features

- 360-degree panoramic views of 16 different locations
- Interactive hotspots for navigation between scenes
- Scene counter to track progress
- Smooth transitions between scenes
- Mobile and desktop compatible

## Project Structure

```
college-vr-tour/
├── src/
│   ├── components/
│   │   ├── Scene.js
│   │   └── VRTour.js
│   ├── assets/
│   └── utils/
├── static_assets/
│   ├── scene1.jpg
│   ├── scene2.jpg
│   └── ...
├── index.js
└── package.json
```

## Customization

To customize hotspot positions for each scene, edit the `hotspotPositions` object in `src/components/Scene.js`.

## Requirements

- Node.js 12 or higher
- Modern web browser with WebGL support
- 360-degree images in equirectangular format 