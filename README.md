# 📊 Productivity & Analytics Admin Dashboard

A professional, modern admin dashboard built with React, Material UI, and React Bootstrap. This frontend-only application provides a comprehensive interface for tracking tasks, team productivity, and performance analytics.

![Dashboard Preview](public/screenshots/Screenshot 2026-01-21 132342.png)

## ✨ Features

### 🟢 Dashboard Page
- **KPI Cards**: Real-time metrics for Tasks Done, Pending Tasks, Efficiency, and Team Members
- **Interactive Charts**: Weekly task completion visualization with Recharts
- **Recent Activity Feed**: Live updates on team activities

### 🟢 Task Management UI
- **Task Table**: Comprehensive view with status chips and priority indicators
- **Smart Filtering**: Filter tasks by status (All, Pending, In Progress, Completed)
- **Add/Edit Modal**: Seamless task creation and editing experience
- **Delete Functionality**: Quick task removal with confirmation

### 🟢 Team Overview
- **Team Member Cards**: Visual representation of each team member
- **Performance Metrics**: Tasks completed and efficiency scores
- **Status Indicators**: Online, Away, and Offline status tracking
- **Team Summary**: Aggregate statistics for the entire team

### 🟢 Analytics & Insights
- **Productivity Trends**: 6-month productivity and efficiency tracking
- **Weekly Performance**: Day-by-day task completion analysis
- **Monthly Comparison**: Side-by-side productivity vs efficiency metrics
- **Trend Indicators**: Visual arrows showing improvements or declines

### 🟢 Settings Page
- **Theme Toggle**: Switch between light and dark mode
- **Notification Preferences**: Customize email, push, and reminder settings
- **Profile Management**: Update personal information
- **Account Controls**: Account deletion and data reset options

### 🟢 UI Polish
- **Light/Dark Mode**: Complete theme support with Material UI theming
- **Skeleton Loaders**: Smooth loading states for better UX
- **Empty States**: Helpful messages when no data is available
- **Tooltips**: Contextual help throughout the application
- **Responsive Design**: Mobile-friendly layout with Bootstrap Grid

## 🛠 Tech Stack

- **React 18** - UI library
- **Material UI (MUI) 5** - Component library and theming
- **React Bootstrap** - Layout and responsive utilities
- **Recharts** - Data visualization
- **React Router** - Navigation and routing

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MaterialUI
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── Common/
│   │   ├── KPICard.js          # Reusable KPI metric card
│   │   ├── SkeletonLoader.js   # Loading state components
│   │   └── EmptyState.js       # Empty state component
│   └── Layout/
│       ├── Sidebar.js          # Navigation sidebar
│       ├── Navbar.js           # Top navigation bar
│       └── MainLayout.js       # Main layout wrapper
├── context/
│   └── ThemeContext.js         # Theme management (light/dark mode)
├── data/
│   └── dummyData.js            # Static mock data
├── pages/
│   ├── Dashboard.js            # Main dashboard page
│   ├── Tasks.js                # Task management page
│   ├── Team.js                 # Team overview page
│   ├── Analytics.js            # Analytics and insights page
│   └── Settings.js             # Settings page
├── App.js                      # Main app component with routing
└── index.js                    # Entry point
```

## 🎨 Key Features Implementation

### Theme Management
The app uses Material UI's theme provider with a custom context for seamless theme switching between light and dark modes.

### State Management
Local state management with React hooks (useState, useEffect) for component-level state.

### Data Visualization
Recharts library is used for all charts and graphs, providing responsive and interactive data visualizations.

### Responsive Design
The layout adapts to different screen sizes using Material UI's Grid system and React Bootstrap's responsive utilities.

## 📊 Sample Data

The application uses static dummy data defined in `src/data/dummyData.js`. This includes:
- Task list with various statuses and priorities
- Team member information with performance metrics
- Weekly and monthly productivity statistics
- Recent activity logs

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## 🎯 Future Enhancements

- [ ] Backend integration with real API
- [ ] User authentication and authorization
- [ ] Real-time updates with WebSockets
- [ ] Export functionality for reports
- [ ] Advanced filtering and search
- [ ] Customizable dashboard widgets
- [ ] Data export (CSV, PDF)
- [ ] Email notifications integration

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

This is a frontend-only project designed to showcase modern React development practices and UI/UX design. All data is static and for demonstration purposes.

## 🙏 Acknowledgments

- Material UI for the excellent component library
- Recharts for beautiful data visualizations
- React Bootstrap for responsive utilities

---

Built with ❤️ using React and Material UI

