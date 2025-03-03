# Pomodoro Timer Landing Page

A comprehensive React-based landing page for the Pomodoro Timer mobile application. This project showcases the app's features, provides download options, and includes multilingual support.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multilingual Support**: Translations for English, French, Arabic, German, Italian, and Spanish
- **Interactive UI**: Modern, user-friendly interface with smooth animations
- **Form Handling**: Download form with validation and submission handling
- **Video Integration**: Embedded video demonstration of the app
- **Comprehensive Documentation**: Detailed documentation of all components and features

## Project Structure

```
pomodoro-landing-page/
├── public/
│   └── tomato-icon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── locales/
│   │   ├── en.json
│   │   ├── fr.json
│   │   ├── ar.json
│   │   ├── de.json
│   │   ├── it.json
│   │   └── es.json
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DownloadPage.jsx
│   │   └── SuccessPage.jsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── HomePage.css
│   │   ├── FeaturesPage.css
│   │   ├── AboutPage.css
│   │   ├── ContactPage.css
│   │   ├── DownloadPage.css
│   │   └── SuccessPage.css
│   ├── App.jsx
│   ├── i18n.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **React Router**: For navigation between pages
- **i18next**: Internationalization framework
- **React Hook Form**: For form validation and handling
- **Axios**: HTTP client for API requests
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pomodoro-landing-page.git
cd pomodoro-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Internationalization

The application supports multiple languages:

- English (default)
- French
- Arabic
- German
- Italian
- Spanish

Language files are located in the `src/locales` directory. To add a new language:

1. Create a new JSON file in the `src/locales` directory (e.g., `ja.json` for Japanese)
2. Copy the structure from an existing language file and translate the content
3. Add the new language to the language selector in `src/components/Header.jsx`

## Form Submission

The download form in `DownloadPage.jsx` is set up to collect user information. In a production environment, you would:

1. Create a backend API endpoint to receive the form data
2. Configure the form to submit to your Google Sheet or database
3. Update the form submission logic in `DownloadPage.jsx`

## Customization

### Colors and Styling

The main color scheme and styling variables are defined in `src/styles/index.css`. You can modify these variables to match your brand colors.

### Content

Update the content in the language files (`src/locales/*.json`) to customize the text throughout the application.

## Deployment

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the compiled assets that can be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.