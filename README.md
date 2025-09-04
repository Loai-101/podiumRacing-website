# Podium Racing Website

A modern React-based website for Podium Racing, featuring a responsive design and clean architecture.

## Features

- **Modern React 18** with functional components and hooks
- **React Router** for navigation
- **Responsive Design** that works on all devices
- **Clean CSS Architecture** with separate CSS files for each component
- **Professional UI/UX** with modern styling and animations

## Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Header component folder
│   │   ├── Header.js   # Navigation header
│   │   └── Header.css  # Header styles
│   ├── Home/           # Home page component folder
│   │   ├── Home.js     # Home page component
│   │   └── Home.css    # Home page styles
│   ├── Coaches/        # Coaches page component folder
│   │   ├── Coaches.js  # Coaches page component
│   │   └── Coaches.css # Coaches page styles
│   ├── Athletes/       # Athletes page component folder
│   │   ├── Athletes.js # Athletes page component
│   │   └── Athletes.css # Athletes page styles
│   ├── About/          # About page component folder
│   │   ├── About.js    # About page component
│   │   └── About.css   # About page styles
│   └── Footer/         # Footer component folder
│       ├── Footer.js   # Footer component
│       └── Footer.css  # Footer styles
├── App.js              # Main App component
├── App.css             # App-level styles
├── index.js            # Application entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:
```bash
npm run build
```

The build files will be created in the `build` folder.

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Creates a production build
- `npm test` - Runs the test suite
- `npm run eject` - Ejects from Create React App (not recommended)

## Styling Approach

This project follows a component-based CSS architecture:

- Each component has its own CSS file
- Global styles are in `src/index.css`
- App-level styles are in `src/App.css`
- Component-specific styles are in separate files (e.g., `Header.css`, `Home.css`)
- No inline styles are used in JSX files
- Clear, descriptive class names are used throughout

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Create React App** - Build tool and development environment
- **CSS3** - Styling with modern features like Grid and Flexbox

## Browser Support

The website is designed to work on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style and structure
2. Keep CSS in separate files with clear class names
3. Ensure responsive design works on all screen sizes
4. Test your changes before submitting

## License

This project is licensed under the ISC License.
