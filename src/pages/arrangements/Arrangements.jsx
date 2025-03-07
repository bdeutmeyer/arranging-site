import { Container, Row } from 'reactstrap';
import Songs from './Songs'
import songData from '../../data/songData';

//Portfolio page
export default function Arrangements() {
    return (
        <>
        <h2>Arrangements</h2>
            <Container fluid>
                <Row lg="3" md="2" sm="1" xs="1" className='d-flex justify-content-around p-2 bg-dark pt-4 pb-4'>
                    <Songs songData={songData} />
                </Row>
            </Container>
        </>
    );
};