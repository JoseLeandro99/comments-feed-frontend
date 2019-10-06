import React from 'react';

import './styles.css';

function Pub(props) {
    return (
        <div className="pub">
            <header>
                <strong>{props.author}</strong>
                <span>{props.date}</span>
            </header>
            <section>
                <strong>{props.title}</strong>
                <p>{props.content}</p>
            </section>
        </div>
    );
}

export default Pub;