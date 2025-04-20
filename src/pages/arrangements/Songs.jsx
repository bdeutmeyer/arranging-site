import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardImgOverlay, CardTitle, CardLink, Col } from 'reactstrap';
import React, { useState } from 'react';

//Project cards
export default function Songs({ songData, onSongClick }) {
    return (
        <>
            {songData.map(song => (
                <Col key={song.id} onClick={() => onSongClick(song.id)}>
                    <Link to={`/arrangements/${song.pathExt}`}>
                    <Card inverse className='m-3 card-hover'>
                        <CardTitle className='bg-dark'>
                            {song.songTitle}
                        </CardTitle>
                        {/* <CardImg
                            alt={detail.imageAlt}
                            src={detail.imagePath}
                            className='w-100 h-auto screenshot'
                        />
                        <div className='container p-3'>
                            <CardImgOverlay className="overlay">
                                <div className='row'>
                                    <CardLink href={detail.purchaseLink} className='col text-decoration-none'>
                                        <CardTitle tag="h5" className='text-black fw-bold fs-6 spectral p-3 hidden-link'>
                                            {detail.songTitle}
                                        </CardTitle>
                                    </CardLink>
                                </div>
                                <div className='row'>
                                    <CardText className='text-dark h-75 card-text'>{detail.songSubtitle}</CardText>
                                </div>
                            </CardImgOverlay> */}
                        {/* </div> */}

                    </Card>
                    </Link>

                </Col>
            ))}
        </>
    )
};