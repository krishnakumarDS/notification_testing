# Dot Com Infoway Website

A modern, responsive website for Dot Com Infoway built with Vite and React.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 18 with modern hooks
- 🎨 Beautiful, modern UI design
- 📱 Fully responsive design
- 🔔 OneSignal push notifications integrated
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## OneSignal Integration

The website includes OneSignal SDK for push notifications. The SDK is loaded in the `index.html` file and initialized with the provided app ID.

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties, Flexbox, Grid)
- OneSignal SDK

## License

© 2024 Dot Com Infoway. All rights reserved.

