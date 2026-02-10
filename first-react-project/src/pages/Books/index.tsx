import Layout from "../Layout";
import { getCategories, getBooks, getAuthorById } from "../../services/localStorageHelper";
import type { Book } from "../../types/bookType";
import type { Category } from "../../types/categoryType";
import './style.css'
import { useState } from "react";

const Books = () => {
  const categories: Category[] = getCategories() || [];
  const books: Book[] = getBooks() || [];

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredBooks = selectedCategories.length
    ? books.filter(book => selectedCategories.includes(book.categoryId))
    : books;

  return (
    <Layout title="Books">
      <div className="categories">
        {categories.map(category => (
          <label key={category.id} className="category-item">
            <input 
              type="checkbox" 
              checked={selectedCategories.includes(category.id)}
              onChange={() => toggleCategory(category.id)}            
            />
            {category.name}
          </label>
        ))}
      </div>
      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-img" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{getAuthorById(book.authorId)}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      


    </Layout>
  );
};

export default Books;

