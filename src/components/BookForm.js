import React, { useEffect, useState } from "react";

function BookForm({ addBook, editingBook, updateBook }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.genre || !form.year) {
      alert("Please fill all fields");
      return;
    }

    if (editingBook) {
      updateBook(form);
    } else {
      addBook(form);
    }

    setForm({
      title: "",
      author: "",
      genre: "",
      year: "",
    });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Title"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Author"
        value={form.author}
        onChange={(e) =>
          setForm({
            ...form,
            author: e.target.value,
          })
        }
      />

      <select
        className="filter"
        value={form.genre}
        onChange={(e) =>
          setForm({
            ...form,
            genre: e.target.value,
          })
        }
      >
        <option value="">Select Genre</option>
        <option value="Programming">Programming</option>
        <option value="Fiction">Fiction</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Self Help">Self Help</option>
        <option value="Education">Education</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Biography">Biography</option>
        <option value="Technology">Technology</option>
      </select>

      <input
        type="number"
        placeholder="Publication Year"
        value={form.year}
        onChange={(e) =>
          setForm({
            ...form,
            year: e.target.value,
          })
        }
      />

      <button type="submit">{editingBook ? "Update Book" : "Add Book"}</button>
    </form>
  );
}

export default BookForm;
