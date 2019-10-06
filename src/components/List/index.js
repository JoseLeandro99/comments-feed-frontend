import React, { useState, useEffect } from 'react';

import './styles.css';

import Pub from '../Pub';

import api from '../../services/api';

function List() {

    const [pubs,setPubs] = useState([]);

    async function getPubs() {
        const response = await api.get('/pubs');
        setPubs(response.data);
    }

    useEffect(() => {
        getPubs();
    }, []);

    return (
        <div className="container">
            {pubs.map(pub => (
                <Pub
                    key={pub._id}
                    author={pub.author}
                    title={pub.title}
                    content={pub.content}
                    date={pub.date}
                />
            ))}
        </div>
    );
}

export default List;