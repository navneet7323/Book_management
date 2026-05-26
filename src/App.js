import React, { useEffect, useState } from "react";
import "./styles/App.css";
import API from "./services/api";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import Loader from "./components/Loader";

import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem("bms_auth") === "1";
    } catch {
      return false;
    }
  });

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  // Fetch books
  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await API.get("/books");

      setBooks(response.data);
    } catch (error) {
      console.log("Error fetching books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add Book
  const addBook = async (book) => {
    try {
      const response = await API.post("/books", book);

      setBooks([...books, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Update Book
  const updateBook = async (updatedBook) => {
    try {
      await API.put(`/books/${updatedBook.id}`, updatedBook);

      setBooks(
        books.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
      );

      setEditingBook(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Book
  const deleteBook = async (id) => {
    try {
      await API.delete(`/books/${id}`);

      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Search + Filter
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = genre === "All" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  if (!isAuthenticated) {
    return (
      <Login
        onLogin={() => {
          setIsAuthenticated(true);
          try {
            localStorage.setItem("bms_auth", "1");
          } catch {}
        }}
      />
    );
  }

  return (
    <div className="container">
      <div className="app-header">
        <h1>📚 Book Management System</h1>

        <button
          type="button"
          className="logout-button"
          onClick={() => {
            setIsAuthenticated(false);
            try {
              localStorage.removeItem("bms_auth");
            } catch {}
          }}
        >
          Logout
        </button>
      </div>

      <BookForm
        addBook={addBook}
        editingBook={editingBook}
        updateBook={updateBook}
      />

      <div className="filters">
        <SearchBar setSearch={setSearch} />

        <GenreFilter setGenre={setGenre} />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <BookList
          books={filteredBooks}
          onEdit={setEditingBook}
          onDelete={deleteBook}
        />
      )}
    </div>
  );
}

export default App;
