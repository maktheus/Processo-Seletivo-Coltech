const express = require('express');
const multer = require('multer');
const Uploadconfig = require('./config/upload'); 


const SessionController = require('./controllers/SessionController');
const DeleteController = require('./controllers/DeleteController');
const SpotController = require('./controllers/SessionSpot');
const DashbordController = require('./controllers/DashbordController');
const UpdateController = require('./controllers/UpdateController');
const LikeControlle = require('./controllers/LikeControlle');

const routes = express.Router();
const upload  = multer(Uploadconfig);

//Email
routes.post('/sessions', SessionController.store);

//Arquivo
routes.post('/Spots',upload.single('arquivo') ,SpotController.store);

//Listagem
routes.get('/dashboard', DashbordController.show);


//Delete
routes.delete('/Spots/:id', DeleteController.destroy);

//Update
routes.put('/Spots/:id',upload.single('arquivo'), UpdateController.update);

//like
routes.post('/Spots/:spot_id/like', LikeControlle.store);

//lesslike
routes.post('/Spots/:spot_id/likeless', LikeControlle.less);

//git
const GitfinderController = require('./Git_Controllers/GitfinderController');


//listagem
routes.get('/Show', GitfinderController.git);


module.exports = routes;