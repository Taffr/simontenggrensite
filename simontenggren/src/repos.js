import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

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
        return (
            <div className="Card">
            <Card variant="outlined">  
                <CardContent  width="15%">
                    <Typography className="Card-title" gutterBottom>
                        {repoInfo.name}
                    </Typography>
                    <Typography className="Card-body" gutterBottom>
                        {repoInfo.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className="linkButton">
                    <IconButton className="linkButton" href={repoInfo.html_url} variant="contained">
                        <LinkIcon className="linkText"/>
                        <p className="linkText"> View on GitHub </p>
                    </IconButton>
                </CardActions>
            </Card>
            </div>
        );
    }

    render() {
        let cards = this.state.repos.map(o => this.makeCard(o));
        return (
            <div align='center'>
                <h1 className="big"> Repos </h1>
                {cards}
            </div>
        );
    }
}
