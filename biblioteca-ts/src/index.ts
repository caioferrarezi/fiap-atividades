// express server
import express from 'express';
import booksRouter from './routes/BooksRouter';
import publishersRouter from './routes/PublishersRouter';

const app = express();

app.use(express.json());
app.use(booksRouter);
app.use(publishersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
