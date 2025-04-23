import React, { useState, useEffect } from 'react';
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Input,
  Label,
  FormGroup,
  Badge
} from 'reactstrap';
import songData from '../../data/songData';
import { filterSongs } from '../../utils/helpers';

export default function Filter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  // Filters are directly managed here
  const [filters, setFilters] = useState({
    category: {
      treble: false,
      bass: false,
      mixed: false
    },
    accompaniment: {
      aCappella: false,
      pianoOnly: false,
      otherInst: false
    }
  });
  

  const toggle = () => setIsOpen(!isOpen);

  // Reset filters to default (all false)
  const clearFilters = () => {
    setFilters({
      category: { treble: false, bass: false, mixed: false },
      accompaniment: { aCappella: false, pianoOnly: false, otherInst: false }
    });
  };

  // Update the filter when a checkbox is clicked
  const handleCheckboxChange = (keyName, id, checked) => {
    setFilters(prev => ({
      ...prev,
      [keyName]: {
        ...prev[keyName],
        [id]: checked
      }
    }));
  };

  useEffect(() => {
    const filtered = filterSongs(songData, filters);
    onFilterChange?.(filtered);
  }, [filters]);

  return (
    <>
      <Button onClick={toggle}>Filter</Button>
      <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
        <OffcanvasHeader toggle={toggle}>Filter</OffcanvasHeader>
        <OffcanvasBody>
          <strong>Filter by voicing</strong>
            <FormGroup check>
              <Input
                type="checkbox"
                id='treble'
                checked={filters.category.treble}
                onChange={(e) =>
                    handleCheckboxChange('category', 'treble', e.target.checked)
                  }
                  
              />
              <Label check htmlFor='treble'>Treble clef voices</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                id='bass'
                checked={filters.category.bass}
                onChange={(e) =>
                    handleCheckboxChange('category', 'bass', e.target.checked)
                  }
              />
    
              <Label check htmlFor='bass'>Bass clef voices</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                id='mixed'
                checked={filters.category.mixed}
                onChange={(e) =>
                    handleCheckboxChange('category', 'mixed', e.target.checked)
                  }
                  
              />
              <Label check htmlFor='mixed'>Mixed voices</Label>
            </FormGroup>

          {/* <strong className="mt-3">Filter by accompaniment</strong>
          {Object.keys(filters.accompaniment).map(label => (
            <FormGroup check key={label}>
              <Input
                type="checkbox"
                id={`accompaniment-${label}`}
                checked={filters.accompaniment[label]}
                onChange={(e) =>
                  handleCheckboxChange('accompaniment', label, e.target.checked)
                }
              />
              <Label check htmlFor={`accompaniment-${label}`}>{label}</Label>
            </FormGroup>
          ))}

          <Button color="danger" onClick={clearFilters}>
            Clear All Filters
          </Button> */}
        </OffcanvasBody>
      </Offcanvas>

      {/* Display active filters as chips/tags */}
      <div className="filter-chips mt-3">
        {Object.entries(filters).map(([category, options]) =>
          Object.entries(options)
            .filter(([label, isChecked]) => isChecked)
            .map(([label]) => (
              <Badge
                key={label}
                color="info"
                className="mr-2 mb-2"
                onClick={() => handleCheckboxChange(category, label, false)} // Remove filter
                style={{ cursor: 'pointer' }}
              >
                {label} <span className="ml-2">&times;</span>
              </Badge>
            ))
        )}
      </div>
    </>
  );
};