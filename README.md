# 🌦️ Weather App

A modern, responsive weather dashboard built with React and Tailwind CSS. This application provides real-time weather updates and a 5-day forecast using the OpenWeather API.

---

## Live Demo

🔗 **Live Demo:** [https://your-vercel-app-link.vercel.app](https://weather-app-7zdr.vercel.app/)

---

## Features

* Search weather by city name
* Real-time weather data
* Dark / Light mode with persistence
* Loading and error handling
* Toast notifications for API errors
* Custom weather icons
* Responsive design

---

## Tech Stack

* React (Vite)
* Axios
* Context API
* Custom Hooks
* React Toastify
* Tailwind CSS
* OpenWeather API

---

## Project Structure

```bash
src/
├── assets/          # Images, icons
├── components/      # UI components
├── context/         # Context API (Theme)
├── hooks/           # Custom hooks
├── services/        # API services
├── utils/           # Helper functions
├── constants/       # Constants & mappings
├── App.jsx
└── main.jsx
```

## Architecture Overview

* **Services Layer:** Handles all API requests
* **Custom Hooks:** Manages business logic and state
* **Context API:** Global theme management (dark/light)
* **Components:** Focused on UI rendering only

---

**Developed by Naveed Ahmed**
