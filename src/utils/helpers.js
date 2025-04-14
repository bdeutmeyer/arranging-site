//Reactstrap: dropdown for sort, offcanvas checkboxes for filters

import songData from "../data/songData";

export const sortSongs = (property) => {
  return [...songData].sort((a, b) => {
    if (property === 'releaseDate') {
      // Newest to oldest
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    }

    // For alphabetical string sorting
    const aValue = a[property]?.toLowerCase?.() || '';
    const bValue = b[property]?.toLowerCase?.() || '';
    
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
};



  export function filterSongs(songData, filters) {
    return songData.filter(song => {
      return Object.entries(filters).every(([keyName, options]) => {
        const activeOptions = Object.entries(options)
          .filter(([_, isChecked]) => isChecked)
          .map(([id]) => id.toLowerCase());
  
        if (activeOptions.length === 0) return true;
  
        let songField = '';
        if (keyName === 'category') songField = song.category?.toLowerCase() || '';
        if (keyName === 'accompaniment') songField = song.accompaniment?.toLowerCase() || '';
  
        // Match exact values since song.category is now 'treble', 'bass', or 'mixed'
        return activeOptions.includes(songField);
      });
    });
  }
  
  
  
  


  // export const filterSongs = (filters) => {
  //   return songData.filter(song =>
  //     Object.entries(filters).some(([key, values]) =>
  //       values.length === 0 || values.includes(song[key])
  //     )
  //   );
  // };
  

// export function sortAlphaTitle () {
//     const titles = [songData.songTitle];
//     console.log(titles);
// };

// export function sortAlphaComp () {

// };

// export function sortNewestFirst () {

// };

// export function sortOldestFirst () {

// };

// export function filterBCOnly () {

// };

// export function filterTCOnly () {

// };

// export function filterMixedOnly () {

// };
