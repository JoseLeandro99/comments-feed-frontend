import React, { Component } from 'react';

import './styles.css';

import api from '../../services/api';

class Create extends Component {

    state = {
        author: '',
        title: '',
        content: '',
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    createPub = async (event) => {
        event.preventDefault();

        const { author, title, content} = this.state;

        await api.post('/pubs', {
            author, title, content
        });

        document.location.href = "/";
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.createPub} method="POST">
                    <strong>Nova publicação</strong>
                    <div>
                        <input
                            name="author"
                            type="text"
                            placeholder="Autor.."
                            onChange={this.handleChange}
                            required
                        />
    
                        <input
                            name="title"
                            type="text"
                            placeholder="Titulo.."
                            onChange={this.handleChange}
                            required
                        />
    
                        <textarea
                            name="content"
                            rows="5"
                            placeholder="publicação"
                            onChange={this.handleChange}
                            required>
                        </textarea>
                        
                        <button type="submit">Publicar</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default Create;