import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardImg, CardText, CardImgOverlay, CardTitle, CardLink, Col } from 'reactstrap';
import songData from '../../data/songData';

export default function SongDetail() {
    const { ext } = useParams();
    const song = songData.find((index) => index.pathExt == ext)

    return (
        <>
            <div className='page-header'>
                <h2 className='serif-font'>{song.songTitle}</h2>
                <h4 className='sans-font-reg'>{song.composerFirst} {song.composerLast}</h4>
            </div>

            <hr />
            <br />
            <Container fluid className='p-0'>
                <Card>
                    <CardTitle>
                    </CardTitle>
                    <CardImg>

                    </CardImg>
                    <CardText>

                    </CardText>
                </Card>
            </Container>
        </>
    )
};