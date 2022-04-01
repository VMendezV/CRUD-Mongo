import {connect} from 'mongoose';
import { MONGODB_URI } from '../config';

// Conexion a la database

(async () => {
    try {
        const db = await connect(MONGODB_URI);
        console.log("base de datos conectada a", db.connection.name);
    } catch (error) {
        console.error(error);
    }
   })();