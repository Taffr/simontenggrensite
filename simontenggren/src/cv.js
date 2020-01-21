import React, {Component} from 'react';
import Pdf from 'react-native-pdf';

export default class CV extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Pdf source="../public/simontenggren-CV.pdf" />
            </div>
        );
    }
}
