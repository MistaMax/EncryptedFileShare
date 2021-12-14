import React from "react";
import { Redirect } from "react-router";

class FileUpload extends React.Component{

    constructor(props){
        super(props);
        this.state = {input: {}, redirect: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(event){
        if(event.target == undefined)return;
        let input=this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({input});
    }

    handleSubmit(event){
        event.preventDefault();
        let res=this.validate();
        if(!res)alert("Incorrect username or password");
        else{
            this.setState({redirect: true});
        }
    }

    validate(event){
        let input = this.state.input;
        return true;
    }

    render(){
        const { redirect } = this.state;
        if(redirect){
            return(<Redirect to="/profile"></Redirect>);
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    File Upload
                </label>
            </form>
        );
    }
}

export default FileUpload;