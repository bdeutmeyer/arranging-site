import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Songs from './Songs';
import Sort from './Sort';
import Filter from './Filter';
import songData from '../../data/songData';

export default function Arrangements() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [filteredSongs, setFilteredSongs] = useState(songData); // Starts unfiltered
  const [sortOption, setSortOption] = useState(null); // Track current sort choice

  const handleSongClick = (songId) => {
    setSelectedSong(songId);
  };

  const handleFilterChange = (filtered) => {
    setFilteredSongs(filtered);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Apply sorting to the filtered data
  const getSortedSongs = () => {
    if (!sortOption) return filteredSongs;
  
    const sorted = [...filteredSongs].sort((a, b) => {
      if (sortOption === 'composerLast') {
        return a.composerLast.localeCompare(b.composerLast);
      }
      if (sortOption === 'songTitle') {
        return a.songTitle.localeCompare(b.songTitle);
      }
      if (sortOption === 'releaseDate') {
        // Newest to Oldest
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      }
      return 0;
    });
  
    return sorted;
  };
  

  const finalSongList = getSortedSongs();

  return (
    <>
      <h2>Arrangements</h2>
      <Container fluid>
        {/* <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
          <Col>
            <Sort onSortChange={handleSortChange} />
          </Col>
          <Col>
            <Filter onFilterChange={handleFilterChange} />
          </Col>
        </Row> */}
        <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
          <Songs songData={finalSongList} onSongClick={handleSongClick} />
        </Row>
      </Container>
    </>
  );
};