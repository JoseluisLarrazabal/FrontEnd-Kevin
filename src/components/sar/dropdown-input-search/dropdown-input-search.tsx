import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import '../guard-management/guard-management.css'; 
import './dropdown-input-search.css'
import '../search-bar-styles.css'
import { IoClose } from 'react-icons/io5';

interface Option {
  value: string;
  label: string;
}

interface DropdownInputSearchProps {
  label?: string;
  options: Option[];
  onOptionSelect?: (option: Option) => void;
}

interface DropdownInputSearchHandle {
  clear: () => void;
}

const DropdownInputSearch = forwardRef<DropdownInputSearchHandle, DropdownInputSearchProps>(({ label = 'Seleccione una opción', options, onOptionSelect }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (options.length > 0) {
      setIsOpen(!isOpen);
    }    
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect!(option);
  };

  const handleClearOptionClick = () => {
    setSelectedOption(null);
    onOptionSelect!({value: '', label: ''});
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useImperativeHandle(ref, () => ({
    clear: handleClearOptionClick,
  }));

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-Input-search" ref={selectRef}>
        <div className='sar-search-bar-item'>
        <div className="selected-option sar-search-input" >
                <p onClick={() => setIsOpen(!isOpen)} title={selectedOption ? selectedOption.label : label} >{selectedOption ? selectedOption.label : label}</p>
                {selectedOption&&<IoClose className='dropdown-Input-search-icon' onClick={handleClearOptionClick} />}
          </div>
            <button className="sar-search-button" onClick={handleIconClick}>
              <FaChevronDown />
            </button>
        </div>      
        {isOpen && (
            <div className="options">
            {options.map(option => (
                <div key={option.value} className="option" onClick={() => handleOptionClick(option)} >
                  {option.label}
                </div>
            ))}
            </div>
        )}
    </div>
  );
});

export default DropdownInputSearch;