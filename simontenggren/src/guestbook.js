import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl'; 
import Button from '@material-ui/core/Button';

export default class Guestbook extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
        let body = {
            poster : "Simon Tenggren",
            title : "TestTitle",
            body  : "Some body of the post",
            email : "simon.tenggren@gmail.com"
        };
    }

    async UNSAFE_componentWillMount(){
        const url = 'http://localhost:8080';
        let posts = [];
        await axios.get(url + '/posts').then(r => posts = r.data);
        await this.promisedSetState(posts);
        console.log(this.state);
    }

    async post(){
        const url = 'http://localhost:8080';
        let body = {
            poster: "",
            title: "",
            body: "",
            email: ""
        };
        console.log("hello");
        //axios.post(url + '/posts', body);
    }
    
    promisedSetState(toBeSet) {
        return new Promise((resolve) => {
            this.setState({posts: toBeSet}, () => {
                resolve();
            });
        });
    }

    render() {
        return (
            <div align='center'>
                <h1 className="big"> GUESTBOOK </h1>
                <div>
                    <FormGroup justify="center" align="center" onSubmit="post()">
                        <Grid className="formFields" alignItems="center" container>
                                <Grid item xs={1}>
                                    <TextField
                                        floatingLabelText="Title"
                                        required
                                        name="title"
                                        label="Title"
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        floatingLabelText="E-mail"
                                        required
                                        name="email"
                                        label="E-mail"
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        floatingLabelText="Name"
                                        required
                                        name="name"
                                        label="Name"
                                    />
                                </Grid>
                       
                        </Grid>
                        <Grid spacing={1} className="formBody" alignItems="center" container>
                            <Grid item xs={5} alignItems="stretch">
                                <TextField 
                                    multiline
                                    required
                                    fullWidth
                                    name="body"
                                    floatingLabelText="Message"
                                    label="Message"
                                />
                            </Grid>
                        </Grid> 
                        <div className="submitButton">
                            <Button className ="butSub" variant="outlined" color="primary">
                                <p> Submit </p>
                            </Button>
                        </div>
                    </FormGroup>
                </div>
            </div>
        );
    }
}
