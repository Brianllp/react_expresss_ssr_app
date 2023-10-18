import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

const App: React.FC = () => {
  interface Book {
    id: string;
    title: string;
    url: string;
    detail: string;
    review: string;
    reviewer: string;
  }

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/public/books`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="home-wrapper">
      <h1>Book Review List</h1>
      <ul className="review-list">
        {books.map((book: Book) => (
          <li key={book.id} className="review-list__item">
            本のタイトル: {book.title}
            <br />
            本のURL: {book.url}
            <br />
            本の詳細: {book.detail}
            <br />
            レビュー内容: {book.review}
            <br />
            レビュアー: {book.reviewer}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
