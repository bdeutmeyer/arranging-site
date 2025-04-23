import { Form, FormGroup, Input, Label, Button, Row, Col, Container } from 'reactstrap';
import { useState } from 'react';

export default function Contact() {
    // State to track form submission
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission (for now, just toggle the submitted state)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setSubmitted(true);  // Set submitted to true, to show the thank you message
    };

    return (
        <>

            {/* Conditionally render based on form submission */}
            {submitted ? (
                <div className="text-center logo-bg sans-font-reg">
                    <h2>Thank you for contacting me!</h2>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            ) : (
                <>
                    <div className='text-center pt-5 serif-font page-header'>
                        <h1>Contact Me</h1>
                        <h5 className='sans-font-reg px-4'>Comments? Questions? Requests? Submit them below.</h5>
                    </div>
                    <hr className="mb-0 pb-0" />
                    <Container fluid="md" className="logo-bg sans-font-reg">

                        <p className='text-center mt-0 pt-0 text-secondary'><small><cite>All fields required</cite></small></p>
                    <Form className='pb-4 px-3 px-md-6' onSubmit={handleSubmit}>
                        <Row>
                            <Col md="6" className="mb-md-3 mb-1">
                                <FormGroup>
                                    <Label for="userName" className='text-black'>
                                        Name
                                    </Label>
                                    <Input
                                        id="userName"
                                        name="name"
                                        placeholder="ex. First Last"
                                        type="text"
                                        className='border border-dark shadow'
                                        required
                                    />
                                </FormGroup>
                            </Col>

                            <Col md="6" className="mb-md-3 mb-1">
                                <FormGroup>
                                    <Label for="userEmail" className='text-black'>
                                        Email
                                    </Label>
                                    <Input
                                        id="userEmail"
                                        name="email"
                                        placeholder="ex. biggestfan@email.com"
                                        type="email"
                                        className='border border-dark shadow'
                                        required
                                        
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" className="mb-md-3 mb-1">
                                <FormGroup>
                                    <Label for="textBox" className='text-black'>Message</Label>
                                    <Input
                                        id="textBox"
                                        name="text"
                                        placeholder="ex. You are my favorite arranger EVER! I can't wait to buy your entire catalog!"
                                        type="textarea"
                                        style={{ minHeight: "150px" }}
                                        className='border border-dark shadow' // makes it a couple rows taller
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" className="d-grid">
                                <Button type="submit" color="dark" className="w-100 shadow">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                </>
            )}
        </>
    );
};