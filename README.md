# 🎉 Angular 19 Event Management App

This is a modern **Angular 19** app that provides a simple solution to manage events. It includes features like adding new events, viewing a list of events, and organizing events by category. The app communicates with a backend API to fetch and add events.

Deployed Link: https://angular-event-app.vercel.app/

## 🚀 Features

- **Event Creation**: Add new events with details like name, category, and description.
- **Event List**: View a list of events with details.
- **Event Categories**: Organize events by their categories (e.g., Party, Conference, Workshop).
- **Server-Side Rendering**: Supports efficient server-side rendering with `HttpClient` using `fetch` API for better performance.
- **Responsive Design**: Fully responsive design to work across all devices.
- **Reactive Forms**: For adding events with input validation.

## 🛠️ Technologies Used

- **Angular 19**: Latest version of Angular for building dynamic web applications.
- **Angular Router**: For navigation between different pages (Home, News, Events, Add Event).
- **HttpClient**: For API communication (GET and POST requests).
- **Reactive Forms**: To handle user input for adding events with validation.
- **CSS**: Custom styles for a clean and modern UI.

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/2025-Winter-ITE-5425-IRA/quiz-4-RushitJetani.git
cd quiz-4-RushitJetani
```

### 2. Install Dependencies

Ensure you have **Node.js** and **npm** installed, then run:

```bash
npm install
```

### 3. Serve the App

Start the development server:

```bash
ng serve
```

The app will be available at **`http://localhost:4200`**.

### 4. Build for Production

To build the project for production:

```bash
ng build --prod
```

This will generate a `dist/` folder with the production-ready build.

---

## 📑 Pages and Features

### **Home Page**

- **Welcome message** and overview of the app features.
- **Call to action** to start adding new events.

### **News Page**

- Placeholder for **news and updates** about the event system.
- You can expand this page by adding dynamic news or content.

### **Events Page**

- Displays a **list of events** fetched from the API.
- Each event is displayed using the **Event Detail Component**.
- The events are fetched via a `GET` request from the API endpoint: `https://product-app-74q6.onrender.com/events`.

### **Add Event Page**

- Provides a **reactive form** to add a new event.
- Input fields include: `Event Name`, `Event Detail`, and `Event Category`.
- Form validation ensures that all fields are filled before submission.

## 🛠️ API Endpoints

### **GET** `/events`

Fetches all events from the backend API.

### **POST** `/events`

Adds a new event. The body should contain the following fields:
- `name` (string): The event name.
- `detail` (string): A short description of the event.
- `category` (string): The event category (e.g., Party, Conference).

## 🧑‍💻 Development Setup

### Running the Project Locally

1. Clone the repo and install dependencies.
2. Run the development server using:

   ```bash
   ng serve
   ```

3. Open your browser and visit `http://localhost:4200`.

---

