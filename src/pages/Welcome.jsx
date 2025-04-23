import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import songData from "../data/songData";

export default function Welcome() {
    const newestSong = [...songData]
        .filter(song => song.releaseDate)
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

    const upcomingSong = songData.find(song => song.upcoming);

    // State to track form submission
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission (for now, just toggle the submitted state)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setSubmitted(true);  // Set submitted to true, to show the thank you message
    };

    return (
        <>
            {/* Hero section */}
            <div className='text-center pt-5 page-header'>
                        <h1 className='serif-font'>FirstName LastName</h1>
                        <h5 className='sans-font-reg px-4'>Arranger | Teacher | Singer</h5>
                    </div>

            <hr />
            <br />

            {/* Main page content */}
            <Container fluid="md" className='logo-bg px-3 px-md-6'>
                <Row className="mb-5">

                    {/* What's New card */}
                    <Col md="6" className="mb-4">
                        <h4 className="text-center serif-font">What's New</h4>
                        {newestSong && (
                            <Link to={`/arrangements/${newestSong.pathExt}`} className="text-decoration-none">
                                <Card inverse className="card-hover">
                                    <CardImg
                                        alt={newestSong.imageAlt}
                                        src={newestSong.imagePath}
                                        className=""
                                    />
                                    <CardImgOverlay>
                                        <CardTitle tag="h5" className=" p-2 rounded">
                                            {newestSong.songTitle}
                                        </CardTitle>
                                    </CardImgOverlay>
                                </Card>
                            </Link>
                        )}
                    </Col>

                    {/* In the Works card */}
                    <Col md="6" className="mb-4">
                        <h4 className="text-center serif-font">In the Works</h4>
                        {upcomingSong && (
                            <Link to={`/arrangements/${upcomingSong.pathExt}`} className="text-decoration-none">
                                <Card inverse className="card-hover">
                                    <CardImg
                                        alt={upcomingSong.imageAlt}
                                        src={upcomingSong.imagePath}
                                        className=""
                                    />
                                    <CardImgOverlay>
                                        <CardTitle tag="h5" className="p-2 rounded">
                                            {upcomingSong.songTitle}
                                        </CardTitle>
                                    </CardImgOverlay>
                                </Card>
                            </Link>
                        )}
                    </Col>
                </Row>

                {/* Contact Section */}
                <hr />
                {submitted ? (
                    <div className="text-center sans-font-reg">
                        <h2>Thank you for contacting me!</h2>
                        <p>I'll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <div>
                        <Row>
                            <Col>
                                <h3 className="text-center serif-font">Contact</h3>
                                <h6 className="text-center sans-font-reg">Have a question or want to make a request? Get in touch below.</h6>
                            </Col>
                        </Row>

                        <p className='text-center mt-0 pt-0'><small><cite>All fields required</cite></small></p>
                        <Form className='pb-4' onSubmit={handleSubmit}>
                            <Row>
                                <Col md="6" className="mb-md-3 mb-1 sans-font-reg">
                                    <FormGroup>
                                        <Label for="userName">
                                            Name
                                        </Label>
                                        <Input
                                            id="userName"
                                            name="name"
                                            placeholder="ex. First Last"
                                            type="text"
                                            required
                                        />
                                    </FormGroup>
                                </Col>

                                <Col md="6" className="mb-md-3 mb-1 sans-font-reg">
                                    <FormGroup>
                                        <Label for="userEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="userEmail"
                                            name="email"
                                            placeholder="ex. biggestfan@email.com"
                                            type="email"
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="12" className="mb-md-3 mb-1 sans-font-reg">
                                    <FormGroup>
                                        <Label for="textBox">Message</Label>
                                        <Input
                                            id="textBox"
                                            name="text"
                                            placeholder="ex. You are my favorite arranger EVER! I can't wait to buy your entire catalog!"
                                            type="textarea"
                                            required
                                            style={{ minHeight: "150px" }} // makes it a couple rows taller
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="12" className="d-grid">
                                    <Button type="submit" color="dark" className="w-100">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
            </Container>
        </>
    );
};