import * as dotenv from "dotenv";
dotenv.config();

const DB_CLIENT = process.env.DB_CLIENT_SQL || "mysql"
const DB_HOST = process.env.DB_HOST_SQL || "localhost";
const DB_PORT = Number(process.env.DB_PORT_SQL) || 3306
const DB_USER = process.env.DB_USER_SQL || "root"
const DB_NAME = process.env.DB_NAME_SQL || "bd_productos"

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
