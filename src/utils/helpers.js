//Reactstrap: dropdown for sort, offcanvas checkboxes for filters

import songData from "../data/songData";

export const sortSongs = (property) => {
    return [...songData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  };

export function filterSongs(songData, filters) {
  return songData.filter(song => {
      // For each filter category (e.g., voicing, accompaniment)
      return Object.entries(filters).every(([category, options]) => {
        const activeOptions = Object.entries(options)
          .filter(([_, isChecked]) => isChecked)
          .map(([label]) => label.toLowerCase());
  
        // If no filters selected in this category, skip filtering it
        if (activeOptions.length === 0) return true;
  
        // Get the value in the song data to match against
        let songField = '';
        if (category === 'voicing') songField = song.songPartsDescr?.toLowerCase() || '';
        if (category === 'accompaniment') songField = song.accompaniment?.toLowerCase() || '';
  
        // Must match *at least one* selected option in this category
        return activeOptions.some(opt => songField.includes(opt));
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
