import Layout from "../Layout";
import { getCategories, getBooks } from "../../services/localStorageHelper";
import type { Book } from "../../types/bookType";
import type { Category } from "../../types/categoryType";
import './style.css'

const Books = () => {
  const categories: Category[] = getCategories() || [];
  const books: Book[] = getBooks() || [];

  return (
    <Layout title="Books">
      <div className="categories">
        {categories.map(category => (
          <label key={category.id} className="category-item">
            <input type="checkbox" />
            {category.name}
          </label>
        ))}
      </div>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-img" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.authorId}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
      


    </Layout>
  );
};

export default Books;

