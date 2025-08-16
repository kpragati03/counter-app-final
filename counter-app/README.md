# 🚀 Counter App Project

### ✨ Project Objective
This project is a simple, interactive counter application built with React to demonstrate core concepts like state management (`useState`), event handling, and conditional rendering.

### 📝 Brief Description
This app allows users to increment, decrement, and reset a counter. It includes features like setting custom step sizes, enabling/disabling negative values, and disabling buttons when upper or lower bounds are reached. The state is also persisted using local storage.

### 🔗 GitHub Repository Link
https://github.com/kpragati03/counter-app

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
    git clone [https://github.com/kpragati03/counter-app](https://github.com/kpragati03/counter-app)
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
- **1. Default State**
  ![Default State](default%20page.png)
- **2. Upper Bound**
  ![Upper Bound](upper%20bound.png)
- **3. Lower Bound**
  ![Lower Bound](lower%20bound.png)
- **4. Negative Values**
  ![Negative Values](allow%20negative%20values.png)

### ⌨️ Sample Input & Output
- **Increment button click:** When the `Increment` button is clicked, the counter value increases by the current step size (default is 1).
- **Step size change:** The user can enter a custom step size (e.g., 5). When the `Increment` or `Decrement` button is clicked, the counter value changes by 5.
- **Upper/Lower Bound:**
  - When the counter reaches `100`, the `Increment` button is automatically disabled.
  - When the counter reaches `-10`, the `Decrement` button is automatically disabled.

### ✅ Feature List
- Displays the current counter value.
- Buttons to Increment, Decrement, and Reset the counter.
- Upper and lower bounds for the counter (`100` and `-10` or `0`).
- Buttons are disabled when bounds are reached.
- User can input a custom step size.
- Option to toggle negative value allowance.
- **Bonus:** Dynamic CSS styling based on the counter's state.
- **Bonus:** State persistence using `localStorage`.