import AppDataSource from './db/connect';

AppDataSource.initialize()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('initialize');
  })
  .catch((err) => {
    console.error('error', err);
  });
