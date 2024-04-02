// express server
import express from 'express';
import { createBooksRouter } from './routes/BooksRouter';
import { createPublishersRouter } from './routes/PublishersRouter';
import { PgPromiseAdapter } from './database/PgPromiseAdapter';
import { BookRepositoryDatabase } from './repositories/BookRepositoryDatabase';
import { PublisherRepositoryDatabase } from './repositories/PublisherRepositoryDatabase';

const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.POSTGRES_DATABASE_URL!;
const connection = new PgPromiseAdapter(dbUrl);
const bookRepository = new BookRepositoryDatabase(connection);
const publisherRepository = new PublisherRepositoryDatabase(connection);

app.use(express.json());
app.use(createBooksRouter(bookRepository));
app.use(createPublishersRouter(publisherRepository));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
