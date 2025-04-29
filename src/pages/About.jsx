//About Me page
import { Container, Row, Col } from 'reactstrap';
import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.png'
import photo3 from '../assets/images/photo3.png'
import photo4 from '../assets/images/photo4.png'

export default function About() {
    const photoArray = [photo1, photo2, photo3, photo4];
    return (
        <>
            <div className='page-header'>
                <h1 className='m-4 serif-font'>About Beth</h1>
            </div>
            <hr />
            <br />
            <Container className="logo-bg sans-font-reg">
                <Row className="align-items-start">

                    {/* Text Column */}
                    <Col md="9" className='px-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at quam vel sapien placerat posuere.</p>
                        <p>Fusce sed lorem nec nulla viverra varius. Suspendisse potenti. Morbi tincidunt dolor nec quam congue, vel hendrerit velit pretium.</p>
                        <p>Donec eget lorem ac metus fringilla posuere. Aliquam erat volutpat. Cras sed nunc leo.</p>
                    </Col>

                    {/* Photo Strip Column */}
                    <Col md="3" className="d-flex justify-content-center">
                        <div className="photo-strip shadow">
                            {photoArray.map((photo, index) => (
                                <img
                                    key={index}
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    className="photo-strip-img"
                                />
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
};