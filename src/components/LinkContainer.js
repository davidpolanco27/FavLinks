import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {Links: []}
  }

  handleRemove = (index) => {
    const newLinks = this.state.Links.filter((ele, ind) => ind !== index);
    this.setState({Links: newLinks})
  }

  handleSubmit = (favLink) => {
    console.log('YURRRRR')
    this.setState({Links: [...this.state.Links, favLink]})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData = {this.state.Links} removeLink = {this.handleRemove} />

        <br />

        {/* <h3>Add New</h3>
        <h5>Name</h5>
        <input type = "text"/>
        <h5>URL</h5>
        <input type = "text"/> */}
        <Form addNew = {this.handleSubmit} /> 
      </div>
    )
  }
}

export default LinkContainer;