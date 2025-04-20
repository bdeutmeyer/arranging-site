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
            <div>
                <h1 className='text-center pt-4'>
                    Contact Me
                </h1>
                <h4 className='text-center px-4'>
                    Comments? Questions? Requests? Submit them below.
                </h4>
                <hr className='mb-0 pb-0' />
                <p className='text-center mt-0 pt-0'><small><cite>All fields required</cite></small></p>
            </div>

            {/* Conditionally render based on form submission */}
            {submitted ? (
                <div className="text-center">
                    <h2>Thank you for contacting me!</h2>
                    <p>I'll get back to you as soon as possible.</p>
                </div>
            ) : (
                <Container fluid="md" className="px-3 px-md-6">
                    <Form className='pb-4' onSubmit={handleSubmit}>
                        <Row>
                            <Col md="6" className="mb-md-3 mb-1">
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

                            <Col md="6" className="mb-md-3 mb-1">
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
                            <Col md="12" className="mb-md-3 mb-1">
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
                                <Button type="submit" color="primary" className="w-100">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )}
        </>
    );
}






// import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

// export default function Contact() {
//     return (
//         <>
//             <div>
//                 <h1 className='text-center pt-4'>
//                     Contact Me
//                 </h1>
//                 <h4 className='text-center'>
//                     Comments? Questions? Requests? Submit them below.
//                 </h4>
//                 <hr />
//             </div>
//             <Form className='p-4'>
//                 <FormGroup>
//                     <Label for="userName">
//                         Name
//                     </Label>
//                     <Input
//                         id="userName"
//                         name="name"
//                         placeholder="ex. First Last"
//                         type="text"
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="userEmail">
//                         Email
//                     </Label>
//                     <Input
//                         id="userEmail"
//                         name="email"
//                         placeholder="ex. biggestfan@email.com"
//                         type="email"
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="textBox">
//                         Message
//                     </Label>
//                     <Input
//                         id="textBox"
//                         name="text"
//                         placeholder="ex. You are my favorite arranger EVER! I can't wait to buy your entire catalog!"
//                         type="textarea"
//                     />
//                 </FormGroup>
//                 <Button>
//                     Submit
//                 </Button>
//             </Form>
//         </>
//     );
// }