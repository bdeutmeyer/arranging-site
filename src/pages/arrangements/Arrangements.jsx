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
        <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
          <Col>
            <Sort onSortChange={handleSortChange} />
          </Col>
          <Col>
            <Filter onFilterChange={handleFilterChange} />
          </Col>
        </Row>
        <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
          <Songs songData={finalSongList} onSongClick={handleSongClick} />
        </Row>
      </Container>
    </>
  );
}



// old version that was a partial, working on filtering displaying correctly, but currently does not:

// import { useState } from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Songs from './Songs'
// // import SongDetail from './SongDetail';
// import Sort from './Sort';
// import songData from '../../data/songData';
// import Filter from './Filter';

// //Arrangements catalog page
// export default function Arrangements() {
//     const [selectedSong, setSelectedSong] = useState(null);

//     const handleSongClick = (songId) => {
//         setSelectedSong(songId);
//     };


//     return (
//         <>
//             <h2>Arrangements</h2>
//             <Container fluid>
//                 <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
//                     <Col>
//                         <Sort />
//                     </Col>
//                     <Col>
//                         <Filter />
//                     </Col>
//                 </Row>
//                 <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
//                     <Songs songData={songData} onSongClick={handleSongClick} />
//                 </Row>





//             </Container>
//         </>
//     );
// };


// import { useState } from 'react';
// import { sortSongs, filterSongs } from './songHelpers';
// import songData from './songData';

// const SongList = () => {
//   const [selectedComposers, setSelectedComposers] = useState([]);
//   const [selectedVoices, setSelectedVoices] = useState([]);
//   const [sortProperty, setSortProperty] = useState('');

//   // Handle checkbox selection
//   const handleCheckboxChange = (value, setState) => {
//     setState((prev) =>
//       prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
//     );
//   };

//   // Apply filtering based on checkboxes (includes only the selected options)
//   let displayedSongs = filterSongs({
//     composerLast: selectedComposers,
//     voiceType: selectedVoices,
//   });

//   // Apply sorting if selected
//   if (sortProperty) {
//     displayedSongs = sortSongs(sortProperty).filter(song => displayedSongs.includes(song));
//   }

//   return (
//     <div>
//       <h3>Filter by Composer:</h3>
//       {['Beethoven', 'Mozart', 'Bach'].map(composer => (
//         <label key={composer}>
//           <input
//             type="checkbox"
//             value={composer}
//             checked={selectedComposers.includes(composer)}
//             onChange={() => handleCheckboxChange(composer, setSelectedComposers)}
//           />
//           {composer}
//         </label>
//       ))}

//       <h3>Filter by Voice Type:</h3>
//       {['Treble', 'Bass', 'Mixed'].map(voice => (
//         <label key={voice}>
//           <input
//             type="checkbox"
//             value={voice}
//             checked={selectedVoices.includes(voice)}
//             onChange={() => handleCheckboxChange(voice, setSelectedVoices)}
//           />
//           {voice}
//         </label>
//       ))}

//       <h3>Sort By:</h3>
//       <select onChange={(e) => setSortProperty(e.target.value)} value={sortProperty}>
//         <option value="">No Sorting</option>
//         <option value="composerLast">Sort by Composer</option>
//         <option value="songTitle">Sort by Title</option>
//         <option value="releaseDate">Sort by Release Date</option>
//       </select>

//       <ul>
//         {displayedSongs.map((song, index) => (
//           <li key={index}>
//             {song.songTitle} by {song.composerLast} ({song.voiceType})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SongList;
