import * as dotenv from "dotenv";
dotenv.config();

const DB_CLIENT = process.env.DB_CLIENT_SQL;
const DB_HOST = process.env.DB_HOST_SQL;
const DB_PORT = Number(process.env.DB_PORT_SQL);
const DB_USER = process.env.DB_USER_SQL;
const DB_NAME = process.env.DB_NAME_SQL;

const connection = {
    client: `${DB_CLIENT}`,
    connection: {
        host:`${DB_HOST}`,
        port: `${DB_PORT}`,
        user: `${DB_USER}`,
        database: `${DB_NAME}`,
    },
};

export default connection;
