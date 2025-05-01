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
                        <p>Beth Deutmeyer is a voice teacher, singer, and arranger based in central Iowa. Although she feels she has been incredibly productive in general lately, she is currently overthinking how to write this About page. For now, just know that she has three voice degrees (BM Iowa State University, MM and DMA University of Nebraska-Lincoln), two kids, and one husband. Also a dog, but saying that before would have ruined the 3-2-1 structure of that last sentence, wouldn't it?!</p>
                        <p>Alongside some pro-level--or at least mostly adequate--momming, Beth has cobbled together one heck of a freelance music career as a private studio teacher + occasional adjunct voice instructor + choral accompanist + now choral arranger. She also crochets, likes to cook tasty food, built this website herself (ooooh, fancy!) and is a NYTimes word game devotee.</p>
                        <p>Despite what you may think based on the pictures to the right, Beth does not look like her initials-and-eighth-note logo. She does look like a human person, as you will see once she manages to take photos of herself and update this page. So hang in there, friends; better and more complete page content coming soonish!</p>
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