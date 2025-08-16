# 🚀 Counter App Project

### ✨ Project Objective
This project is a simple, interactive counter application built with React to demonstrate core concepts like state management (`useState`), event handling, and conditional rendering.

### 📝 Brief Description
This app allows users to increment, decrement, and reset a counter. It includes features like setting custom step sizes, enabling/disabling negative values, and disabling buttons when upper or lower bounds are reached. The state is also persisted using local storage.

### 🔗 GitHub Repository Link
[Your GitHub Repository Link Here]

### 🌐 Live Demo Link
[Your Live Demo Link Here]

### 🛠️ Technologies Used
- **React**: For building the user interface.
- **JavaScript**: For the application's logic.
- **HTML**: For the page structure.
- **CSS**: For styling the application.

### ⚙️ How to Run the App Locally
1.  **Clone the repository:**
    ```bash
    git clone [Your GitHub Repository Link Here]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd counter-app
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Run the app in development mode:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

### 🚨 Challenges Faced & Solutions
- **Challenge:** Understanding how `useState` and event handlers work together.
- **Solution:** I practiced by creating simple functions that call the state-setting function (`setCount`) directly inside the `onClick` event, which helped in grasping the concept of state updates.
- **Challenge:** Persisting state after a page refresh.
- **Solution:** I used the `useEffect` hook to store the state in `localStorage` and read from `localStorage` to set the initial state.

### 📸 Screenshots


### 🎥 Demo Video
[Optional: Your Demo Video Link Here]

### ✅ Feature List
- Displays the current counter value.
- Buttons to Increment, Decrement, and Reset the counter.
- Upper and lower bounds for the counter (`100` and `-10` or `0`).
- Buttons are disabled when bounds are reached.
- User can input a custom step size.
- Option to toggle negative value allowance.
- **Bonus:** Dynamic CSS styling based on the counter's state.
- **Bonus:** State persistence using `localStorage`.