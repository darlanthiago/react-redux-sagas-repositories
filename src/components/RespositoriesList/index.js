import React from 'react';

import './styles.css';
import { useSelector } from 'react-redux';

export default function RespositoriesList() {

    const repos = useSelector(state => state.repositories);

    return (
        <div className="respositories-container">
            <ul>
                {
                    repos.map(repo => (
                        <li key={repo.id}>
                            <div className="card-title">
                                <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                                <strong>{repo.owner.login}</strong>
                                <span>{repo.language}</span>
                            </div>
                            <div className="card-body">
                                <strong>Nome do repositório: {repo.full_name}</strong>
                                <span>{repo.description}</span>
                            </div>
                            <div className="card-footer">
                                <hr />
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Acessar projeto</a>
                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}
