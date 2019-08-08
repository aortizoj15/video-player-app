import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  handleChange = (e: any) => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  handleSubmit = () => {
    const {searchTerm} = this.state;
  }

  render() {
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label='Search...' onChange={this.handleChange}></TextField>
        </form>
      </Paper>
    );
  }
}

export default SearchBar;