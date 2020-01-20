import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import {SocialIcon} from 'react-social-icons'; 

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    makeLinkCard(text, link) {
        return (
            <div className="linkCard">
                <a href={link} className="linkCard-text" target="_blank">
                    <Card variant="outlined">  
                        <CardContent className="linkIcon">
                            <SocialIcon url={link}/>
                        </CardContent>
                        <CardContent>
                            {text}
                        </CardContent>
                    </Card>
                </a>
            </div>
        ); 
    }

    render() {
        let cards = [['LinkedIn', 'https://linkedin.com/in/simon-tenggren-b30b01143/'], ['GitHub', 'https://github.com/Taff3r'], ['YouTube', 'http://youtube.com'], ['Instagram', 'https://www.instagram.com/simontenggren/']].map(a => this.makeLinkCard(a[0], a[1]));
        return (
            <div>
                <div className='grid2x2'>
                    {cards}
                </div>
            </div> 
        );
    }
}
