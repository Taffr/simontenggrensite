import React, {Component} from 'react';
import axios from 'axios';
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
        let age = this.getAgeColor(repoInfo.pushed_at);
        let language = "";
        if (repoInfo.language){
            language = <Typography className="language"> Main language: {repoInfo.language} </Typography>;
        }
        return (
            <div className="Card">
            <a href={repoInfo.html_url} className="links" target="_blank" rel="noopener noreferrer">
            <Card variant="outlined">  
                <CardContent  width="15%">
                    <Typography className="Card-title" gutterBottom>
                        {repoInfo.name}
                    </Typography>
                    <Typography className="Card-body" gutterBottom>
                        {repoInfo.description}
                    </Typography>
                    {language}
                    <Typography className={age}>
                        Last update: {repoInfo.pushed_at.split("T")[0]} 
                    </Typography>
                </CardContent>
                <CardActions className="linkButton">
                    <IconButton className="linkButton" href={repoInfo.html_url} variant="contained">
                        <LinkIcon className="linkText"/>
                    </IconButton>
                </CardActions>
            </Card>
            </a>
            </div>
        ); 
    }

    getAgeColor(updateString) {
        const today = new Date();
        const updated = Date.parse(updateString);
        const diffDays = Math.ceil(Math.abs(updated - today) / (1000 * 60 * 60 * 24));
        if (diffDays >= 365){
            return "old";
        } else if(diffDays >= 182){
            return "mid";
        }else{
            return "new";
        }
                    
    }

    render() {
        let cards = this.state.repos.sort((f,s) => {
            if (f.pushed_at < s.pushed_at)
                return 1;
            else if(f.pushed_at > s.pushed_at)
                return -1;
            return 0;
        }).map(o => this.makeCard(o));
        return (
            <div align='center'>
                <h1 className="big"> REPOS </h1>
                {cards}
            </div>
        );
    }
}
