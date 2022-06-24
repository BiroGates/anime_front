import React from 'react'
import { useState } from 'react'
import { inserirAnime } from '../../api/animeApi';
import { Link } from 'react-router-dom';

export default function Inserir() {
    const [text, setText] = useState('');

    async function inserir() {
        if(!text.trim()){
            alert('Digite um texto valido!');
        }else{
            const resposta = await inserirAnime(text);
            setText('');
            alert('Anime cadastrado com sucesso!');
        }
    }

    return (
    <div className='main'>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick={inserir}> INSERIR </button>
        <Link to='/'> VOLTAR </Link>
    </div>
  )
}
