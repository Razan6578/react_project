import type { Book } from "../types/bookType";
import type { Category } from "../types/categoryType";

export function saveToLocalStorage(key: string, value: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
}
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