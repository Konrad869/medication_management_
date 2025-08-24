Medication Manager – Your everyday support in staying healthy In today’s busy world, it’s easy to forget to take medications, supplements, or vitamins on time. This can be especially challenging for people with chronic illnesses, seniors, or anyone managing multiple prescriptions. Missed doses, mix-ups, and lack of treatment tracking are common problems. Medication Manager is a simple and intuitive app that solves these issues. With it, you can: Keep all your medications organized in one place Set personalized schedules and reminders so you never miss a dose Receive notifications exactly when it’s time to take your medication Mark medications as “taken” and maintain a clear history of your intake Add notes to share with your doctor or pharmacist The app makes daily health management easier, giving you peace of mind and confidence that your treatment is on track.

## Features

- Add, edit, and delete medications
- Set medication schedules and dosages
- View medication history
- Simple and intuitive user interface
- Responsive design

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later) or yarn
- Angular CLI (v20 or later)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:3000`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`

## Project Structure

```
medication-management/
├── backend/               # Node.js/Express backend
│   ├── node_modules/      # Backend dependencies
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies and scripts
│
└── frontend/              # Angular frontend
    ├── src/
    │   ├── app/          # Application components and services
    │   ├── assets/       # Static assets
    │   └── styles.scss   # Global styles
    └── angular.json      # Angular configuration
```

## Available Scripts

### Backend
- `npm run dev` - Start the development server with nodemon
- `npm start` - Start the production server
- `npm test` - Run tests (to be implemented)

### Frontend
- `ng serve` - Start the development server
- `ng build` - Build the application for production
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests

## Testing

### Backend Tests
To run the backend tests:
```bash
cd backend
npm test
```

### Frontend Tests
To run the frontend tests:
```bash
cd frontend
ng test
```

## Deployment

### Backend
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

### Frontend
1. Build the application for production:
   ```bash
   ng build --configuration production
   ```
2. Deploy the contents of the `dist/frontend` directory to your web server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Angular Material for the UI components
- RxJS for reactive programming
- Express for the backend server
