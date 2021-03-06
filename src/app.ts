import express from 'express';
import morgan from 'morgan';
import bodyParser from "body-parser";
import router from './routes/routes';


const app = express();

//configuracion
app.set('port', process.env.PORT || 2000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', ' Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/**
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//rutas
app.use('/api', router);

export default app;