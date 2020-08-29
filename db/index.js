const { Pool } = require('pg');
const {
  user,
  host,
  database,
  password,
  port,
} = require('../secrets/dbconfiguration');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

module.exports = pool;
