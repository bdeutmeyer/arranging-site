import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardTitle, CardSubtitle, CardLink, CardBody, Row, Col } from 'reactstrap';
import React, { useState } from 'react';

//Project cards
export default function Songs({ songData, onSongClick }) {
    return (
        <>
            {songData.map(song => (
                <Col key={song.id} onClick={() => onSongClick(song.id)}>
                    <Link to={`/arrangements/${song.pathExt}`} className='text-decoration-none'>
                    <Card className="songcard-link shadow sans-font-reg m-2 mb-4">
                                    <Row className="g-0"> {/* "g-0" removes gutter spacing between cols */}
                                        <Col xs="6">
                                            <CardImg
                                                src={song.imagePath}
                                                alt={song.imageAlt}
                                                className="img-fluid rounded-start shadow"
                                            />
                                        </Col>
                                        <Col xs="6">
                                            <CardBody className='ps-4'>
                                                <CardTitle tag="h5" className='rounded'>{song.songTitle}</CardTitle>
                                                {song.songSubtitle ? (
                                                    <CardText>{song.songSubtitle}</CardText>
                                                ) : (<></>)}
                                                <CardSubtitle>{song.composerFirst} {song.composerLast}</CardSubtitle>
                                                <hr />
                                                <CardText>{song.songParts}{song.accompDescr}</CardText>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                    </Link>

                </Col>
            ))}
        </>
    )
};