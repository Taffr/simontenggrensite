import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {SocialIcon} from 'react-social-icons'; 

export default class Home extends Component {
    makeLinkCard(text, link) {
        return (
            <div className="linkCard">
                <a href={link} className="links" target="_blank" rel="noopener noreferrer">
                    <Card variant="outlined">  
                        <CardContent className="linkIcon">
                            <SocialIcon url={link}/>
                        </CardContent>
                        <div className="linkCard-text">
                            <CardContent >
                                {text}
                            </CardContent>
                        </div>
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
