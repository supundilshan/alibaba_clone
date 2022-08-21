import { blue } from '@mui/material/colors';
import React , { useState, useRef, useEffect } from 'react';
import { AutoSuggest } from 'react-autosuggestions';
import {Data} from './header/SearchingData';
import SearchIcon from '@mui/icons-material/Search';

import "./header/STYLES/SearchBarStyles.css";

const SearchBar = () => {
  var click = false;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [value, setValue] = useState("");
  const [clickindicater, setClickIndicater] = useState(0);

  /**
 * Hook that alerts clicks outside of the passed ref
 */
 function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickIndicater((prevState) => 0)
      }
      else{ 
        setClickIndicater((prevState) => 1)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
      <div className="search-container" ref={wrapperRef}>
        <div className="search-inner">
          <input className='search-input' type="text" value={value} onChange={onChange} />
          <button  onClick={() => onSearch(value)}> <SearchIcon/> <p>Search</p> </button>
        </div>
        <div className="dropdown" ref={wrapperRef}>
          {Data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const productName = item.product_name.toLowerCase();
              return (
                searchTerm &&
                productName.includes(searchTerm) &&
                productName !== searchTerm && clickindicater
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div onClick={() => onSearch(item.product_name)} className="dropdown-row" key={item.product_name} >
                {item.product_name}
              </div>
            ))}
        </div>
        <div className="dropdown" ref={wrapperRef}>
          {Data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const productName = item.product_name.toLowerCase();
              return (
                !searchTerm && clickindicater
              );
            })
            // .slice(0, 1)
            .map((item) => (
              <div>
                History here
              </div>
            ))}
        </div>

      </div>
  );
}

export default SearchBar;