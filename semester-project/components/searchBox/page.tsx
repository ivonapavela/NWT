import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBoxProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faSearch} style={{ marginRight: '-30px', color: 'white', zIndex: '10'}} />
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{
          width: '300px',
          height: '40px',  
          borderRadius: '20px',  
          background: 'rgb(var(--main-color-rgb))',
          padding: '5px 10px',  
          color: 'white',
          border: 'none',  
          outline: 'none', 
          paddingLeft: '40px',
        }}
      />
    </div>
  );
};

export default SearchBox;
