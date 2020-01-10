import React, {Component} from 'react';
import axios from 'axios';
export default class Repos extends Component {

    constructor(props) {
        super(props);
        fetch('http://locahost:8080/ping').then(r => console.log(r));

    }

    render() {
        return (
            <div align='center'>
                <h1 className="big"> GUESTBOOK </h1>
            </div>
        );
    }
}
