//About Me page
import { Container, Row, Col } from 'reactstrap';
import photo1 from '../assets/images/beth1.jpg'
import photo2 from '../assets/images/beth2.jpg'
import photo3 from '../assets/images/beth3.jpg'
import photo4 from '../assets/images/beth4.jpg'

export default function About() {
    const photoArray = [photo1, photo2, photo3, photo4];
    return (
        <>
            <div className='page-header'>
                <h1 className='m-4 serif-font'>About</h1>
            </div>
            <hr />
            <br />
            <Container className="logo-bg sans-font-reg">
                <Row className="align-items-start">

                    {/* Text Column */}
                    <Col md="9" className='px-5'>
                        <p>Beth Deutmeyer is a voice teacher, singer, and arranger based in central Iowa. She has three voice degrees (BM Iowa State University, MM and DMA University of Nebraska-Lincoln), two kids, and one husband. She also has a dog, but saying that before would have ruined the 3-2-1 structure of that last sentence.</p>
                        <p>Alongside some expert--or at least mostly adequate--momming, Beth has cobbled together one heck of a freelance music career as a voice instructor + choral accompanist + choral arranger. She also crochets, likes to cook tasty food, rides tandem bicycles with her family, built this website herself (ooooh, fancy!), and is a NYTimes word game devotee.</p>
                        <p>Beth is always up for new projects and opportunities, so if there is a piece you wish existed in the voicing you need, please contact her!</p>
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