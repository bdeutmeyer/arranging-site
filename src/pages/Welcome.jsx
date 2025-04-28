import { Container, Row, Col, Card, CardBody, CardText, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { Link } from 'react-router-dom';
import songData from "../data/songData";
import WelcomeHeader from '../components/WelcomeHeader';
import Contact from './Contact';

export default function Welcome() {
    const newestSong = [...songData]
        .filter(song => song.releaseDate)
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

    const upcomingSong = songData.find(song => song.upcoming);

    return (
        <>
            <WelcomeHeader />
            <hr />
            <br />
            {/* Main page content */}
            <Container fluid="md" className='logo-bg px-3 px-md-6'>
                <Row className="mb-5">

                    {/* What's New card */}
                    <Col md="6" className="mb-4">
                        <h3 className="text-center serif-font">What's New</h3>
                        {newestSong && (
                            <Link to={`/arrangements/${newestSong.pathExt}`} className="text-decoration-none">
                                <Card className="songcard-link shadow sans-font-reg">
                                    <Row className="g-0"> {/* "g-0" removes gutter spacing between cols */}
                                        <Col xs="6">
                                            <CardImg
                                                src={newestSong.imagePath}
                                                alt={newestSong.imageAlt}
                                                className="img-fluid rounded-start shadow"
                                            />
                                        </Col>
                                        <Col xs="6">
                                            <CardBody className='ps-4'>
                                                <CardTitle tag="h5" className='rounded'>{newestSong.songTitle}</CardTitle>
                                                {newestSong.songSubtitle ? (
                                                    <CardText>{newestSong.songSubtitle}</CardText>
                                                ) : (<></>)}
                                                <CardSubtitle>{newestSong.composerFirst} {newestSong.composerLast}</CardSubtitle>
                                                <hr />
                                                <CardText>{newestSong.songParts}{newestSong.accompDescr}</CardText>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        )}
                    </Col>

                    {/* In the Works card */}
                    <Col md="6" className="mb-4">
                        <h3 className="text-center serif-font">In the Works</h3>
                        {upcomingSong && (
                            <Link to={`/arrangements/${upcomingSong.pathExt}`} className="text-decoration-none">
                                <Card className="songcard-link shadow sans-font-reg">
                                    <Row className="g-0"> {/* "g-0" removes gutter spacing between cols */}
                                        <Col xs="6">
                                            <CardImg
                                                src={upcomingSong.imagePath}
                                                alt={upcomingSong.imageAlt}
                                                className="img-fluid rounded-start shadow"
                                            />
                                        </Col>
                                        <Col xs="6">
                                            <CardBody className='ps-4'>
                                                <CardTitle tag="h5" className='rounded'>{upcomingSong.songTitle}</CardTitle>
                                                {upcomingSong.songSubtitle ? (
                                                    <CardText>{upcomingSong.songSubtitle}</CardText>
                                                ) : (<></>)}
                                                <CardSubtitle>{upcomingSong.composerFirst} {upcomingSong.composerLast}</CardSubtitle>
                                                <hr />
                                                <CardText>{upcomingSong.songParts}{upcomingSong.accompDescr}</CardText>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        )}
                    </Col>
                </Row>

                {/* Contact Section */}
                <hr />
                <Contact withBackground={false} />
            </Container>
        </>
    );
}; 