import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'reactstrap';
import BDLogo from '../assets/logos/BDLogo.svg';

export default function WelcomeHeader() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container fluid className='text-center pt-5 page-header'>
      {isMobile ? (
        // Mobile layout
        <Row className='align-items-center'>
          <Col xs="8" className="text-start ps-4">
            <h1 className='serif-font'>Beth Deutmeyer</h1>
            <h5 className='sans-font-reg'>Arranger | Teacher | Singer</h5>
          </Col>
          <Col xs="4" className="text-end pe-4">
            <img src={BDLogo} alt="BD Logo" style={{ height: '80px' }} />
          </Col>
        </Row>
      ) : (
        // Desktop layout
        <Row className='align-items-center'>
          <Col xs="5" md="5">
            <h1 className='serif-font text-start ps-5'>Beth Deutmeyer</h1>
          </Col>
          <Col xs="2" md="2" className="text-center">
            <img src={BDLogo} alt="BD Logo" style={{ height: '100px' }} />
          </Col>
          <Col xs="5" md="5">
            <h5 className='sans-font-reg text-end pe-5'>Arranger | Teacher | Singer</h5>
          </Col>
        </Row>
      )}
    </Container>
  );
};