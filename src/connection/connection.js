import pg from "pg";

const {Pool} = pg;
const connection = new Pool({
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '1234',
    database: 'testes'

});

export {connection};