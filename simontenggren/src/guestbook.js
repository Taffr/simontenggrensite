import React, {Component} from 'react';
import axios from 'axios';
export default class Repos extends Component {

    constructor(props) {
        const url = 'http://localhost:8080';
        super(props);
        axios.get(url + '/posts').then(r => console.log(r));
        axios({
            method: "POST",
            url: url + '/posts',
            data: {
                test: "Hello there!",
                another: "General Kenobi!"
            }
        });
    }

    render() {
        return (
            <div align='center'>
                <h1 className="big"> GUESTBOOK </h1>
            </div>
        );
    }
}
