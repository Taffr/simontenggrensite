import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';
import cvMd from "./cv.md";
import Typography from '@material-ui/core/Typography';
export default class CV extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentWillMount() {
        await fetch(cvMd).then(r => r.text())
                .then(text => this.setState({md:text}));
    }
    render() {
        return (
            <div>
                <div align="center">
                    <Typography variant="h5">
                        <Link to={process.env.PUBLIC_URL + "/simontenggren-CV.pdf"} target="_blank" download>PDF version </Link>
                    </Typography>   
                </div>
                <div className="mdText">
                    <ReactMarkdown
                        className="textBox"
                        source={this.state.md}
                        escapeHtml={false}
                    />
                </div>
            </div>
        );
    }
}
