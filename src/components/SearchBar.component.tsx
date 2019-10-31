import React, { useState, useEffect } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }: any) => {
  // const SearchBar = ({ onFormSubmit }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    onFormSubmit('Super Mario Bros');
  }, []);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') onFormSubmit(searchTerm);
  };

  return (
    <Paper>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      ></TextField>
    </Paper>
  );
};

export default SearchBar;
