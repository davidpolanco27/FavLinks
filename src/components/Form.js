import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.setState({name: "", URL: ""})

        this.handleChange = this.handleChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        
        /*
            TODO - set initial state for link name and URL 
        */
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        if (event.target.id === "link"){
            this.setState({name: event.target.value});
        }else{
        this.setState({URL: event.target.value});
        }
    }

    onFormSubmit = (event) => {
        //console.log("onFormSubmit", this.props)
        // to prevent page reload on form submit
        event.preventDefault();
        let newFavLink = {name: this.state.name, URL: this.state.URL};
        this.props.addNew(newFavLink);
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
        return(
            <form>
                <label for="link">Name : </label>
                <input type="text" id="link" onChange={(event) =>this.handleChange(event)}/>      
                <label for="url">URL : </label>
                <input type="text" id="url" onChange={(event) =>this.handleChange(event)}/>
                <button type="submit" onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;