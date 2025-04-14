import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function Sort({ direction, onSortChange, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null); // Track selected sort option

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSort = (sortKey) => {
    setSelectedSort(sortKey);  // Set the selected sort
    if (onSortChange) {
      onSortChange(sortKey);
    }
  };

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Sort</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Sort by...</DropdownItem>
          <DropdownItem divider />
          
          {/* Apply 'active' class to the selected sort item */}
          <DropdownItem 
            onClick={() => handleSort('releaseDate')}
            className={selectedSort === 'releaseDate' ? 'active' : ''}
          >
            Newest to Oldest
          </DropdownItem>
          <DropdownItem 
            onClick={() => handleSort('composerLast')}
            className={selectedSort === 'composerLast' ? 'active' : ''}
          >
            Alphabetical by Composer
          </DropdownItem>
          <DropdownItem 
            onClick={() => handleSort('songTitle')}
            className={selectedSort === 'songTitle' ? 'active' : ''}
          >
            Alphabetical by Title
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

Sort.propTypes = {
  direction: PropTypes.string,
  onSortChange: PropTypes.func,
};




// import React, { useState } from 'react';
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import PropTypes from 'prop-types';
// import { sortSongs } from '../../utils/helpers';

// export default function Sort({ direction, ...args }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);

//   const sortedByTitle = sortSongs('songTitle');

//   const sortedByReleaseDate = sortSongs('releaseDate');

//   const sortedByComposer = sortSongs('composerLast');



//   // console.log(sortedByTitle, sortedByReleaseDate, sortedByComposer);

//   return (
//     <>
//       <div className="d-flex p-5">
//         <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
//           <DropdownToggle caret>Sort</DropdownToggle>
//           <DropdownMenu {...args}>
//             <DropdownItem header>Sort by...</DropdownItem>
//             {/* <DropdownItem>Some Action</DropdownItem>
//             <DropdownItem text>Dropdown Item Text</DropdownItem> */}
//             {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
//             <DropdownItem divider />
//             <DropdownItem id="recentFirst">Newest to Oldest</DropdownItem>
//             <DropdownItem id="alphaComp">Alphabetical by Composer</DropdownItem>
//             <DropdownItem id="alphaTitle">Alphabetical by Title</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//     </>

//   );
// }

// Sort.propTypes = {
//   direction: PropTypes.string,
// };