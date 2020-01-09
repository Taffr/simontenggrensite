import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class Repos extends Component {

    constructor(props) {
        super(props);
        this.state = {repos: []};
    }

    async componentDidMount() {
        await this.fetchData();
    }

    async fetchData(){
        let resp = await axios.get('http://api.github.com/users/Taff3r/repos');
        await this.promisedSetState(resp.data);
    }

    promisedSetState(toBeSet){
        return new Promise((resolve) => {
            this.setState({repos: toBeSet}, () => {
                resolve();
            });
        });
    }

    makeCard(repoInfo) {
        return <h1> {repoInfo.name} </h1>
    }

    render() {
        let cards = this.state.repos.map(o => this.makeCard(o));
        console.log(cards);
        return (
            <div align='center'>
                <h1> Repos </h1>
                {cards}
            </div>
        );
    }
}
