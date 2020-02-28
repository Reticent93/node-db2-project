const express = require('express');
const helmet = require('helmet');
const carRouter = require('./cars/cars-router');

const server = express();
const port = 8080;

server.use(helmet());
server.use(express.json());

server.use('/cars', carRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'something went wrong'
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
