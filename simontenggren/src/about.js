import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import aboutMd from './about.md';
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default class About extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    async componentWillMount() {
       await fetch(aboutMd).then(r => r.text()).then(text => this.setState({md: text}));
    }

    render() {
        return (
            <div>
                <div align="center">
                    <Router>
                    <h1> TL;DR: Download my CV <Link to={process.env.PUBLIC_URL + "/simontenggren-CV.pdf"} target="_blank" download> here </Link></h1>
                    </Router>
                    <h1 className="big"> ABOUT </h1>
                </div>
                <div align="center">
                    <div className="aboutImages">
                        <img className="aboutImg" src="./Images/trygga.jpg"/>
                        <img className="aboutImg" src="./Images/prague.jpeg"/>
                    </div>
                    <div className="mdText">
                        <ReactMarkdown
                            className="textBox"
                            source={this.state.md}
                            escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
