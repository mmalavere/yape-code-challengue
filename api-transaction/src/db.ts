import {createConnection} from 'typeorm'
import {Transaction} from './Entities/Transaction'
import './config'
import { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOST, DB_DATABASE } from './config';

export const connectDB = async () => {        

    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: DB_HOST,
        database: DB_DATABASE,
        entities: [Transaction],
        synchronize: false,
        ssl: false
    })
}