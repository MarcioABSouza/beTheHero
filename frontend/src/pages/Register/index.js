import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault()

       const data = {
            name,
            email, 
            whatsapp,
            city,
            uf
        };

        try{
        const response = await api.post('ongs', data)

        alert(`Seu ID de acesso ${response.data.id}`)
        history.push('/');

        }catch(err){
            alert('Erro ao cadastrar, tente novamente')
        }
    }






    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be The Hero"></img>
                    
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e faça com que  pessoas a descubram que podem ajudar!</p>

                    <Link className="backLink" to="/">
                        <FiArrowLeft size={16} color="e02041"/>
                        Back
                    </Link>
                
                </section>

                <form onSubmit={handleRegister}>
                    
                    <input placeholder="Nome da ONG"
                            value={name}
                            onChange={e => setName(e.target.value)}>
                    </input>


                    <input type="email" placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}>  
                    </input>


                    <input placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}>  
                    </input>
                    
                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}>
                        </input>

                        <input placeholder="UF" style={{ width: 80}}
                        value={uf}
                        onChange={e => setUF(e.target.value)}>
                        </input>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}