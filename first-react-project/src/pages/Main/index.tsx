import Layout from "../Layout";
import authors from "../../fixtures/Authors.json"
import books from "../../fixtures/Books.json"
import categories from "../../fixtures/Categories.json"
import { saveToLocalStorage } from "../../services/localStorageHelper";

const Main = () =>{

  saveToLocalStorage("authors", authors)
  saveToLocalStorage("categories", categories)
  saveToLocalStorage("books", books)

  return (
    <Layout title = "Main">
        <p>Заглушка сторінки Main</p>
    </Layout>
  );
};


export default Main;
