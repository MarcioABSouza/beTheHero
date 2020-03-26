import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history=  useHistory()
    const ongId = localStorage.getItem('ongId')
   

   async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try{
           await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile')

        }catch(e){
            alert('Erro ao cadastrar. Tente novamente.')
        }

    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be The Hero"></img>
                    
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o seu caso detalhadamente para encontrar o heroi.</p>

                    <Link className="backLink" to="/profile">
                        <FiArrowLeft size={16} color="e02041"/>
                        Voltar 
                    </Link>
                
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    ></input>

                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    ></textarea>

                    <input placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    ></input>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}