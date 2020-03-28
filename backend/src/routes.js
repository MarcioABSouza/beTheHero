const express = require('express');

const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()


///GET - LISTAR ONGS
routes.get('/ongs', OngController.index)

///POST - INSERIR ONG
routes.post('/ongs', celebrate({
//VALIDAÇÂO COM CELEBRATE
[Segments.BODY]: Joi.object().keys({
    name : Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(9).max(11), 
    city: Joi.string().required(),
    uf : Joi.string().required().length(2)
})


}), OngController.create)

/// GET - LISTAR CASOS/INCIDENT
routes.get('/incidents', IncidentController.index)



///POST - INSERIR CASO/INCIDENT
routes.post('/incidents', celebrate({


    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(), 
    
    [Segments.BODY]: Joi.object().keys({
        title : Joi.string().required().min(5).max(40),
        description: Joi.string().required().min(15),
        value: Joi.number().required()
    })

 }), IncidentController.create)


///DELETE - DELETAR CASO/INCIDENT
routes.delete('/incidents/:id', IncidentController.delete)

//GET - LISTAR CASOS DE ONG ESPECÌFICA
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

//POST - LOGIN
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object({
        id: Joi.string().required().min(8).max(8)
    })
}), SessionController.create);


module.exports = routes;