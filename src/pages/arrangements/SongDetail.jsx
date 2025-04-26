import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import songData from '../../data/songData';


export default function SongDetail() {
    const { ext } = useParams();
    const song = songData.find((index) => index.pathExt == ext);

    return (
        <>
            <Container className="logo-bg">
                <Row className="gx-4 px-3 mt-4"> {/* Horizontal & top spacing */}



                    {/* Need to put in price/purchase info. also need footer with socials. also have conditional for upcoming on this page and on arrangements page (and welcome? redundant there */}


                    {/* Song Info Section */}
                    <Col xs="12" md="6" className="my-3 sans-font-reg">
                        <h2 className="serif-font">{song.songTitle}</h2>
                        {song.songSubtitle ? (
                            <h4>{song.songSubtitle}</h4>
                        ) : (<></>)}
                        <h4>{song.composerFirst} {song.composerLast}</h4>
                        <hr />
                        <br />
                        <h5>{song.songParts}{song.accompDescr}</h5>

                        <h5>Range:</h5>
                        <ul className="list-unstyled" style={{ fontFamily: 'Arial' }}>
                            {Object.entries(song.range).map(([part, notes]) => (
                                <li key={part} className='ps-4 ranges'>
                                    {part.replace(/(\w+)(\d)/, (_, voice, number) =>
                                        `${voice.charAt(0).toUpperCase() + voice.slice(1)} ${number}`
                                    )}: {notes.split(/([♭♯♮𝄪𝄫])/).map((char, i) =>
                                        ['♭', '♯', '♮', '𝄪', '𝄫'].includes(char) ? (
                                            <span key={i} className='font-monospace'>{char}</span>
                                        ) : (
                                            <React.Fragment key={i}>{char}</React.Fragment>
                                        )
                                    )}

                                </li>
                            ))}
                        </ul>
                        <h5>Available for purchase via <a href={song.purchaseLink} className='text-black'>{song.purchaseSite}</a></h5>
                        <h5>Price: {song.price}</h5>
                    </Col>

                    {/* Image Section */}
                    <Col xs="12" md="6" className="d-flex justify-content-start align-items-end my-3">
                        <img
                            src={song.imagePath}
                            alt={song.imageAlt}
                            className="img-fluid shadow border"
                            style={{ maxWidth: "100%", height: "auto", maxHeight: "75vh" }}
                        />
                    </Col>

                </Row>
            </Container>
        </>
    );
}
