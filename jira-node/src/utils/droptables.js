import { createTables, dropTables } from './queryFunctions';

(async () => {
  await dropTables();
})();
