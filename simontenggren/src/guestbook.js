import React, {Component} from 'react';
import axios from 'axios';
export default class Guestbook extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
        let body = {
            poster : "Simon Tenggren",
            title : "TestTitle",
            body  : "Some body of the post",
            email : "simon.tenggren@gmail.com"
        };
        //axios.post(url + '/posts', body);
    }

    async UNSAFE_componentWillMount(){
        const url = 'http://localhost:8080';
        let posts = [];
        await axios.get(url + '/posts').then(r => posts = r.data);
        await this.promisedSetState(posts);
        console.log(this.state);
    }
    
    promisedSetState(toBeSet) {
        return new Promise((resolve) => {
            this.setState({posts: toBeSet}, () => {
                resolve();
            });
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
