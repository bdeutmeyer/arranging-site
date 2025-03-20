import { useState } from 'react';
import { Container, Row } from 'reactstrap';
import Songs from './Songs'
import SongDetail from './SongDetail';
// import Modals from './Modals'
import songData from '../../data/songData';

//Arrangements catalog page
export default function Arrangements() {
    const [selectedSong, setSelectedSong] = useState(null);

    const handleSongClick = (songId) => {
            setSelectedSong(songId);
          };


    return (
        <>
        <h2>Arrangements</h2>
            <Container fluid>
                {/* <SongDetail selectedSong={selectedSong} songDetails={songData}/> */}
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
                <Songs songData={songData} onSongClick={handleSongClick}/>
            </Row>



                

            </Container>
        </>
    );
};