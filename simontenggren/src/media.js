import React, {Component} from 'react';
import axios from 'axios';
import secrets from './secrets.js';

export default class Media extends Component {

    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillMount(){
        console.log(secrets);
    }

    render() {
        return (
            <div align='center'>
                <h1 className="big"> Media </h1>
            </div>
        );
    }
}
