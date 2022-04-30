const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = '/api/user';
        this.authPath = '/api/auth';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection.sync({ alter: true })
            .then(() => console.log('Database working!!!'))
            .catch((error) => console.log(error));;
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }))

        // parse application/json
        this.app.use(bodyParser.json())

    }

    routes() {

        this.app.use(this.userPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}




module.exports = Server;
