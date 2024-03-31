// express server
import express from 'express';
import booksRouter from './routes/BooksRouter';

const app = express();

app.use(express.json());
app.use(booksRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
