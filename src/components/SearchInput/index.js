import React from 'react';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { GoSearch } from 'react-icons/go';

import { addRepoRequest } from '../../store/modules/repositories/actions';
import './styles.css';

export default function SearchInput() {

    const dispatch = useDispatch();

    const [newRepo, setNewRepo] = useState('');

    function handleAddRepo() {

        dispatch(addRepoRequest(newRepo));
        setNewRepo('');
    }

    return (
        <>
            <div className="title">
                <h1>Busque por algum repositório do GitHub</h1>
            </div>

            <div className="search-container">

                <input type="text" onChange={e => setNewRepo(e.target.value)} value={newRepo} placeholder="Para buscar um repositório digite o usuario/nome_do_repositório" />
                <button type="button" onClick={handleAddRepo}><GoSearch size={16} color="#57606f" /></button>

            </div>
        </>
    );
}
