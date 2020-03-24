const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()


///GET - LISTAR ONGS
routes.get('/ongs', OngController.index)

///POST - INSERIR ONG
routes.post('/ongs', OngController.create)

/// GET - LISTAR CASOS/INCIDENT
routes.get('/incidents', IncidentController.index)

///POST - INSERIR CASO/INCIDENT
routes.post('/incidents', IncidentController.create)

///DELETE - DELETAR CASO/INCIDENT
routes.delete('/incidents/:id', IncidentController.delete)

//GET - LISTAR CASOS DE ONG ESPECÌFICA
routes.get('/profile', ProfileController.index);

//POST - LOGIN
routes.post('/sessions', SessionController.create);


module.exports = routes;