import app from './app';
import config from './config';
import AppDataSource from './db/connect';

(async () => {
  try {
    await AppDataSource.initialize();
    // eslint-disable-next-line no-console
    console.log('start');
    app.listen(config.port, () => {
    // eslint-disable-next-line no-console
      console.log(`app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('error:', error);
  }
})();
