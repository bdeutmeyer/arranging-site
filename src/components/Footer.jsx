import { Container, Row, Col } from 'reactstrap';
import liLogo from '../assets/logos/liLogo.png';
import fbLogo from '../assets/logos/fbLogo.png';
import jwpLogo from '../assets/logos/jwpLogo.png';
import BDLogo from '../assets/logos/BDLogo.svg';
import bskyLogo from '../assets/logos/bskyLogo.svg';
import ytLogo from '../assets/logos/ytLogo.jpeg';

function Footer() {
    return (
        <Container fluid id="footer" className="shadow py-3 bg-light sans-font-reg">
            <Row className="justify-content-between px-5">
                <Col xs="auto">
                    <a href="">
                        <img src={bskyLogo} alt="BlueSky profile" style={{ height: '30px' }} />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="">
                        <img src={liLogo} alt="LinkedIn profile" style={{ height: '30px' }} />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="">
                        <img src={fbLogo} alt="Facebook profile" style={{ height: '30px' }} />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="">
                        <img src={ytLogo} alt="YouTube channel" style={{ height: '30px' }} />
                    </a>
                </Col>
                <Col xs="auto">
                    <a href="">
                        <img src={jwpLogo} alt="JWPepper profile" style={{ height: '30px' }} />
                    </a>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center mb-2 text-center">
                <Col xs="auto">
                    <a href="/">
                        <img src={BDLogo} alt="BD logo" style={{ height: '30px' }} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;


// https://bsky.app/profile/bethdeut.bsky.social
// https://www.linkedin.com/in/beth-deutmeyer-4b0b73238