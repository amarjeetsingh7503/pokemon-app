import React from 'react';

export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search Pokemon"
      value={search}
      onChange={onSearchChange}
    />
  );
};


