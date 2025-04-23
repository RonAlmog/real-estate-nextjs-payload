import * as migration_20250423_143317_add_cats from './20250423_143317_add_cats';

export const migrations = [
  {
    up: migration_20250423_143317_add_cats.up,
    down: migration_20250423_143317_add_cats.down,
    name: '20250423_143317_add_cats'
  },
];
