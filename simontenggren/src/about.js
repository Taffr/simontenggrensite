import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import aboutMd from './about.md';
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
            <div className="barMargin">
            <div align="center">
            <div className="aboutImages">
            <img className="aboutImg" src="./Images/me.jpg" alt="It is I."/>
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
