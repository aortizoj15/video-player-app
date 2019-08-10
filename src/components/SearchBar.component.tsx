import React, { Component } from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends Component<any> {
  state = {
    searchTerm: '',
  }

  handleChange = (e: any) => {
    this.setState({
      searchTerm: e.target.value,
    })
  }

  handleSubmit = (e: any) => {
    const {searchTerm} = this.state;
    const {onFormSubmit} = this.props;

    onFormSubmit(searchTerm);
    e.preventDefault();
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