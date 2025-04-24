import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import songData from '../../data/songData';

export default function SongDetail() {
    const { ext } = useParams();
    const song = songData.find((index) => index.pathExt == ext)

    return (
        <>
            <Container fluid className='px-3 logo-bg'>
                <Row className="gx-4"> {/* gx adds horizontal gutter spacing */}
                    {/* Song Info Section */}
                    <Col sm="12" md="6" className="mb-4 mt-0 sans-font-reg">
                        <h2 className='serif-font'>{song.songTitle}</h2>
                        <h4 className=''>{song.composerFirst} {song.composerLast}</h4>
                        <h5>{song.songParts}{song.accompDescr}</h5>

                    </Col>

                    {/* Image Preview Section */}
                    <Col sm="12" md="6" className="d-flex justify-content-center align-items-start">
                        <img
                            src={song.imagePath}
                            alt={song.imageAlt}
                            className="img-fluid shadow border mb-4"
                            style={{ maxWidth: "100%", height: "auto", maxHeight: "80vh" }}
                        />
                    </Col>
                </Row>
            </Container>

        </>
    )
};