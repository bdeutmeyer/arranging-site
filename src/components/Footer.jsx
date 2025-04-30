import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'reactstrap';
import liLogo from '../assets/logos/liLogo.png';
import fbLogo from '../assets/logos/fbLogo.png';
import jwpLogo from '../assets/logos/jwpLogo.png';
import bskyLogo from '../assets/logos/bskyLogo.svg';
import ytLogo from '../assets/logos/ytLogo.jpeg';

export default function Footer() {

    return (
        <Container fluid id="footer" className="py-3">
                    <hr />
                    <Row className="justify-content-between px-5">
                        <Col xs="auto">
                            <a href="https://bsky.app/profile/bethdeut.bsky.social">
                                <img src={bskyLogo} alt="BlueSky profile" className="footer-icon" />
                            </a>
                        </Col>
                        <Col xs="auto">
                            <a href="https://www.linkedin.com/in/beth-deutmeyer-4b0b73238">
                                <img src={liLogo} alt="LinkedIn profile" className="footer-icon" />
                            </a>
                        </Col>
                        <Col xs="auto">
                            <a href="">
                                <img src={fbLogo} alt="Facebook profile" className="footer-icon" />
                            </a>
                        </Col>
                        <Col xs="auto">
                            <a href="https://www.youtube.com/@BethDeutmeyer">
                                <img src={ytLogo} alt="YouTube channel" className="footer-icon" />
                            </a>
                        </Col>
                    </Row>
        </Container>
    );
};