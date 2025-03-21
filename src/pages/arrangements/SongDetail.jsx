import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardImg, CardText, CardImgOverlay, CardTitle, CardLink, Col } from 'reactstrap';
import songData from '../../data/songData';

export default function SongDetail() {
    const { ext } = useParams();
    const song = songData.find((index) => index.pathExt == ext)
    console.log(song);

    return (
        <>
    <Container>
        <Card>
            <CardTitle>
                {/* {console.log(song)} */}
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