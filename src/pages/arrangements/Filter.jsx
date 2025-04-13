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
    voicing: {
      'treble clef voices': false,
      'bass clef voices': false,
      'mixed voices': false
    },
    accompaniment: {
      'a cappella': false,
      'piano only': false,
      'other instruments': false
    }
  });

  const toggle = () => setIsOpen(!isOpen);

  // Reset filters to default (all false)
  const clearFilters = () => {
    setFilters({
      voicing: { 'treble clef voices': false, 'bass clef voices': false, 'mixed voices': false },
      accompaniment: { 'a cappella': false, 'piano only': false, 'other instruments': false }
    });
  };

  // Update the filter when a checkbox is clicked
  const handleCheckboxChange = (category, label, checked) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [label]: checked
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
          {Object.keys(filters.voicing).map(label => (
            <FormGroup check key={label}>
              <Input
                type="checkbox"
                id={`voicing-${label}`}
                checked={filters.voicing[label]}
                onChange={(e) =>
                  handleCheckboxChange('voicing', label, e.target.checked)
                }
              />
              <Label check htmlFor={`voicing-${label}`}>{label}</Label>
            </FormGroup>
          ))}

          <strong className="mt-3">Filter by accompaniment</strong>
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
          </Button>
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
}




// chatGPT version with no clear all filters or active filter chips

// import React, { useState, useEffect } from 'react';
// import {
//   Button,
//   Offcanvas,
//   OffcanvasHeader,
//   OffcanvasBody,
//   Input,
//   Label,
//   FormGroup
// } from 'reactstrap';
// import songData from '../../data/songData';
// import { filterSongs } from '../../utils/helpers';

// export default function Filter({ onFilterChange }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const [filters, setFilters] = useState({
//     voicing: {
//       'treble clef voices': false,
//       'bass clef voices': false,
//       'mixed voices': false
//     },
//     accompaniment: {
//       'a cappella': false,
//       'piano only': false,
//       'other instruments': false
//     }
//   });

//   const toggle = () => setIsOpen(!isOpen);

//   const handleCheckboxChange = (category, label, checked) => {
//     setFilters(prev => ({
//       ...prev,
//       [category]: {
//         ...prev[category],
//         [label]: checked
//       }
//     }));
//   };

//   useEffect(() => {
//     const filtered = filterSongs(songData, filters);
//     onFilterChange?.(filtered);
//   }, [filters]);

//   return (
//     <>
//       <Button onClick={toggle}>Filter</Button>
//       <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
//         <OffcanvasHeader toggle={toggle}>Filter</OffcanvasHeader>
//         <OffcanvasBody>
//           <strong>Filter by voicing</strong>
//           {Object.keys(filters.voicing).map(label => (
//             <FormGroup check key={label}>
//               <Input
//                 type="checkbox"
//                 id={`voicing-${label}`}
//                 checked={filters.voicing[label]}
//                 onChange={(e) =>
//                   handleCheckboxChange('voicing', label, e.target.checked)
//                 }
//               />
//               <Label check htmlFor={`voicing-${label}`}>{label}</Label>
//             </FormGroup>
//           ))}

//           <strong className="mt-3">Filter by accompaniment</strong>
//           {Object.keys(filters.accompaniment).map(label => (
//             <FormGroup check key={label}>
//               <Input
//                 type="checkbox"
//                 id={`accompaniment-${label}`}
//                 checked={filters.accompaniment[label]}
//                 onChange={(e) =>
//                   handleCheckboxChange('accompaniment', label, e.target.checked)
//                 }
//               />
//               <Label check htmlFor={`accompaniment-${label}`}>{label}</Label>
//             </FormGroup>
//           ))}
//         </OffcanvasBody>
//       </Offcanvas>
//     </>
//   );
// }



//WIP version before chatGPT:

// import React, { useState } from 'react';
// import {
//     Button,
//     Offcanvas,
//     OffcanvasHeader,
//     OffcanvasBody,
//     Input,
//     Label,
//     FormGroup
// } from 'reactstrap';
// // import PropTypes from 'prop-types';
// import { filterSongs } from '../../utils/helpers';

// export default function Filter() {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     // const filteredByParts = filterSongs('songPartsDescr', 'Mixed')

//     // const filteredByComposer = filterSongs('composerLast', 'Beethoven');

//     return (
//         <>
//             <div>
//                 <Button onClick={toggle}>
//                     Filter
//                 </Button>
//                 <Offcanvas isOpen={isOpen} toggle={toggle} direction="end">
//                     <OffcanvasHeader toggle={toggle}>
//                         Filter
//                     </OffcanvasHeader>
//                     <OffcanvasBody>
//                         <strong>
//                             Filter by voicing
//                         </strong>
//                         <FormGroup check>
//                             <Input type="checkbox" id="filterTreble"
//                                 onChange={(e) => handleCheckboxChange(e.target.checked, 'treble clef voices')}
//                             />
//                             {' '}
//                             <Label check htmlFor='treble'>
//                                 Treble clef voices
//                             </Label>
//                         </FormGroup>
//                         <FormGroup check>
//                             <Input type="checkbox" />
//                             {' '}
//                             <Label check>
//                                 Bass clef voices
//                             </Label>
//                         </FormGroup>
//                         <FormGroup check>
//                             <Input type="checkbox" />
//                             {' '}
//                             <Label check>
//                                 Mixed voices
//                             </Label>
//                         </FormGroup>
//                         <strong>
//                             Filter by accompaniment
//                         </strong>
//                         <FormGroup check>
//                             <Input type="checkbox" />
//                             {' '}
//                             <Label check>
//                                 A cappella
//                             </Label>
//                         </FormGroup>
//                         <FormGroup check>
//                             <Input type="checkbox" />
//                             {' '}
//                             <Label check>
//                                 Piano only
//                             </Label>
//                         </FormGroup>
//                         <FormGroup check>
//                             <Input type="checkbox" />
//                             {' '}
//                             <Label check>
//                                 Other instruments
//                             </Label>
//                         </FormGroup>
                        {/* <Input type="checkbox" />
              {' '}
              <Label check>
                2-part
              </Label>
              <Input type="checkbox" />
              {' '}
              <Label check>
                3-part
              </Label>
              <Input type="checkbox" />
              {' '}
              <Label check>
                4 parts or more
              </Label> */}

                    {/* </OffcanvasBody>
                </Offcanvas>
            </div>

        </>
    )

}; */}

