import type {Category} from "../types/categoryType.ts";
import type {Book, BookWithAuthor} from "../types/bookType.ts";
import type {Author} from "../types/authorType.ts";
import type { User } from "../types/userType.ts";

function getFromLocalStorage<T>(key: string):T | null
{
    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value) as T;
        }
    } catch (error) {
        console.error("Error getting from localStorage", error);
    }
    return null;
}
export function saveToLocalStorage<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage", error);
    }
}
export function removeFromLocalStorage(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage", error);
    }
}
export function getCategories(): Category[] | null
{
    return getFromLocalStorage<Category[]>("categories")
}

export function getBooks(): Book[] | null
{
    return getFromLocalStorage<Book[]>("books")
}

export function getAuthors(): Author[] | null
{
    return getFromLocalStorage<Author[]>("authors")
}

export function getAuthorById(authorId: number): string | null {
  const authors = getFromLocalStorage<Author[]>("authors");
  if (authors) {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : null;
  }
  return null;
}

export function getBooksWithAuthor(): BookWithAuthor[] | null {
  const books = getBooks();
  const authors = getAuthors();

    if (books && authors) {
        return books.map(book => {
            const author = authors.find(a => a.id === book.authorId);
            return {
                ...book,
                authorName: author ? author.name : null
            };
        });
    }
    return null;
}

export function saveUser(user: User){
    const users = getFromLocalStorage<User[]>('users') || [];
    users.push(user);

    saveToLocalStorage<User[]>('users', users);
}

export function saveCurrentUserToken(token: string){
    saveToLocalStorage<string>('currentUserToken', token);
}

export function loginUser(email: string, password: string): boolean {
  const users = getFromLocalStorage<User[]>('users');
  if (users) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      saveCurrentUserToken(user.token);
      return true;
    }
  }
  return false;
}

export function checkToken(): boolean {
    let res = false;
    const savedToken = getFromLocalStorage<string>('currentUserToken');
    const users = getFromLocalStorage<User[]>('users') || [];

    console.log("Saved Token:", savedToken);
    console.log("Users:", users);
    users.forEach((user, value) => {
        if (user.token === savedToken) {
            res =  true;
        }
    });

    
    return res;
}


export function logoutUser(): void {
  removeFromLocalStorage('currentUserToken');
}
