import { Card, CardImg, CardText, CardImgOverlay, CardTitle, CardLink, Col } from 'reactstrap';

//Project cards
export default function Songs(props) {
    return (
        <>
            {props.songData.map(detail => (
                <Col key={detail.id}>
                    <Card inverse className='m-3 card-hover'>
                        <CardImg
                            alt={detail.imageAlt}
                            src={detail.imagePath}
                            className='w-100 h-auto screenshot'
                        />
                        <div className='container p-3'>
                            <CardImgOverlay className="overlay">
                                <div className='row'>
                                    <CardLink href={detail.purchaseLink} className='col text-decoration-none'>
                                        <CardTitle tag="h5" className='text-black fw-bold fs-6 spectral p-3 hidden-link'>
                                            {detail.songTitle}
                                        </CardTitle>
                                    </CardLink>
                                </div>
                                <div className='row'>
                                    <CardText className='text-dark h-75 card-text'>{detail.songSubtitle}</CardText>
                                </div>
                            </CardImgOverlay>
                        </div>

                    </Card>
                </Col>
            ))}
        </>
    )
};