const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    //Foi criada uma função para cada método, facilitando a abstração
    async index(request, response){
        const ongs = await connection('ongs').select('*');  
        response.json(ongs)
    },

    async create(request, response){
        //Desestruturar o retorno em variáveis
        const {name, email, whatsapp, city,uf} = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        console.log(`Ong: ${name} 
        Email: ${email} 
        Whats ${whatsapp} 
        Cidade: ${city} 
        Estado: ${uf} 
        ID: ${id}`);
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        response.json({id})
    }
}