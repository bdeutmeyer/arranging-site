import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { sortSongs } from '../../utils/helpers';

export default function Sort({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const sortedByTitle = sortSongs('songTitle');

  const sortedByReleaseDate = sortSongs('releaseDate');

  const sortedByComposer = sortSongs('composerLast');



  // console.log(sortedByTitle, sortedByReleaseDate, sortedByComposer);

  return (
    <>
      <div className="d-flex p-5">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle caret>Sort</DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem header>Sort by...</DropdownItem>
            {/* <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem> */}
            {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem id="recentFirst">Newest to Oldest</DropdownItem>
            <DropdownItem id="alphaComp">Alphabetical by Composer</DropdownItem>
            <DropdownItem id="alphaTitle">Alphabetical by Title</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>

  );
}

Sort.propTypes = {
  direction: PropTypes.string,
};