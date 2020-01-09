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
       console.log("running");
       await fetch(aboutMd).then(r => r.text()).then(text => this.setState({md: text}));
    }

    render() {
        return (
            <div>
                <div align="center">
                    <Router>
                    <h1> TL;DR: Download my CV <Link to="/public/simontenggrenCV.pdf" target="_blank" download> here </Link></h1>
                    </Router>
                    <h1 className="big"> About </h1>
                </div>
                <div align="center">
                    <ReactMarkdown source={this.state.md} />
                </div>
            </div>
        );
    }
}
