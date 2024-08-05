# Todo List App

A simple Todo List application built with React. This app allows users to manage tasks with functionalities to add, edit, delete, and mark tasks as complete. The tasks are stored in the browser's local storage, so they persist across page reloads.

![![Todo List App Screenshot]](intro-react/react-first-app/src/assets/img/todo-list.png)


## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Toggle task completion status
- Persist tasks using local storage

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:GiovanniTY/intro-react.git
   
2. **Navigate to the project directory: **
   ```bash
   cd react-intro

3. **Install dependencies:**
    ```bash
    npm install

## Usage

1. **Start the development server:**
   ```bash
   npm start
2. **Open your browser and navigate to:**
   ```bash
   http://localhost:5173


## File Structure

- **`src/App.jsx`**: Main component that handles the state and logic for adding, editing, deleting, and toggling tasks. Manages local storage integration.
- **`src/assets/composants/TaskForm.jsx`**: Component responsible for rendering the form to add new tasks.
- **`src/assets/composants/TaskList.jsx`**: Component responsible for rendering the list of tasks with options to edit, delete, and toggle completion.

## Code Overview

### App.jsx

Manages the main state of the todo list and handles interactions such as adding, editing, deleting, and toggling tasks. It also manages the integration with local storage to persist data.

### TaskForm.jsx

Provides an input field and a button to add new tasks. It uses a ref to access the input element directly and passes the task data up to the parent component.

### TaskList.jsx

Renders the list of tasks. Provides UI elements to edit, delete, and toggle the completion status of tasks. Allows for inline editing of tasks.

## Contributing

Feel free to submit issues, feature requests, or pull requests. Contributions are welcome!




