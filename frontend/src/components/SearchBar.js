import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = "Search...", onChange }) => {
    return (
        <div className="dashboard-search-container">
            <Search className="dashboard-search-icon" size={18} />
            <input
                type="text"
                className="dashboard-search-input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
