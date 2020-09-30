import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios
            .get('http://localhost:8000/api/')
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                     <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                     </div>
                ))}
            </div>
        );
    }
}

export default App;