const app = require('./App');
const InitAdapterPg = require('./AdapterPg');

const bootstrap = () => {
  InitAdapterPg();
  app.listen(3001, () => {
    console.log(`Server has started at http://localhost:${3001}`);
  });
};

bootstrap();
