# Book Management System

This is a simple Book Management System built using React.
The project allows users to add, update, search, and delete books easily through a clean user interface.

The application was created as a React assignment project and uses a mock API for storing book data.

-----

## Features

* Add new books
* Edit existing books
* Delete books
* Search and filter books
* Responsive user interface
* API integration using Axios

---

## Technologies Used

* React JS
* JavaScript
* CSS
* Axios
* JSON Server / MockAPI

---

## How to Run the Project

### 1. Install Dependencies

```bash id="kgvfrh"
npm install
```

### 2. Start the React Application

```bash id="7kv50o"
npm start
```

The app will run at:

```text id="x7q5zn"
http://localhost:3000
```

---

## Mock API Setup

If using JSON Server, run:

```bash id="srdnln"
npx json-server --watch db.json --port 5000
```

API URL:

```text id="xtj7oi"
http://localhost:5000/books
```

---

## Project Structure

src/
 ┣ components/
 ┃ ┣ BookForm.js
 ┃ ┣ BookList.js
 ┃ ┣ SearchFilter.js
 ┃ ┗ Loader.js
 ┣ services/
 ┃ ┗ api.js
 ┣ App.js
 ┣ App.css
 ┗ index.js
```

---

## Author

Developed by Navneet Kumar.
