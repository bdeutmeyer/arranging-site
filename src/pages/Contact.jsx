import { Form, FormGroup, Input, Label, Button, Row, Col, Container } from 'reactstrap';

export default function Contact({ withBackground = true }) {

    const FormContent = (
        <>
            <p className='text-center mt-0 pt-0 text-secondary'><small><cite>All fields required</cite></small></p>
            <Form name="contact" method="POST" action="/thank-you" className='pb-4 px-3 px-md-6'>
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>

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
                            <Label for="messageBox" className='text-black'>Message</Label>
                            <Input
                                id="messageBox"
                                name="message"
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
        </>
    );

    return (
        <>
            <div className='text-center pt-5 serif-font page-header'>
                <h1>Contact</h1>
                <h5 className='sans-font-reg px-4'>Comments? Questions? Requests? Submit them below.</h5>
            </div>
            <hr className="mb-0 pb-0" />

            {withBackground ? (
                <Container fluid="md" className="logo-bg sans-font-reg">
                    {FormContent}
                </Container>
            ) : (
                <Container fluid="md" className="sans-font-reg">
                    {FormContent}
                </Container>
            )}
        </>
    );
};