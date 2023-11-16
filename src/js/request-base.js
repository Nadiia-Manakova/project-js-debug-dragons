import axios from "axios";

const BASE_URL = "https://books-backend.p.goit.global/books/";

export async function getTopBooks() {
  const url = `${BASE_URL}top-books`;
  const response = await axios.get(url);
 
  return response.data;
}

const BASE_URL_CATALOG = "https://books-backend.p.goit.global/books/";

export async function getTopCategory(attributeValue) {
  
  const url = `${BASE_URL_CATALOG}category?category=${attributeValue}`;
  const response = await axios.get(url);
  
  return response.data;
}

export async function getCategoryList() {
  const url = `${BASE_URL}category-list`;
  const response = await axios.get(url);

  return response;
}
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';
export async function getBooksId(bookId) {
  const { data } = await axios(bookId);
  console.log(data);
  return data;
}