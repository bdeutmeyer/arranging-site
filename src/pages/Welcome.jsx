import { Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import songData from "../data/songData";

export default function Welcome() {
    const newestSong = [...songData]
        .filter(song => song.releaseDate)
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

    const upcomingSong = songData.find(song => song.upcoming);

    return (
        <>
            <h1 className='m-4 fw-bold'>FirstName LastName</h1>
            <h2 className="text-start">Arranger | Teacher | Singer</h2> 
            <hr />
            <br />

            {/* Song Cards */}
            <Row className="mb-5">
                <Col md="6" className="mb-4">
                    <h4 className="text-center">What's New</h4>
                    {newestSong && (
                        <Link to={`/arrangements/${newestSong.pathExt}`} className="text-decoration-none">
                            <Card inverse className="card-hover">
                                <CardImg
                                    alt={newestSong.imageAlt}
                                    src={newestSong.imagePath}
                                    className="w-100"
                                />
                                <CardImgOverlay>
                                    <CardTitle tag="h5" className=" p-2 rounded">
                                        {newestSong.songTitle}
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Link>
                    )}
                </Col>

                <Col md="6" className="mb-4">
                    <h4 className="text-center">In the works</h4>
                    {upcomingSong && (
                        <Link to={`/arrangements/${upcomingSong.pathExt}`} className="text-decoration-none">
                            <Card inverse className="card-hover">
                                <CardImg
                                    alt={upcomingSong.imageAlt}
                                    src={upcomingSong.imagePath}
                                    className="w-100"
                                />
                                <CardImgOverlay>
                                    <CardTitle tag="h5" className="p-2 rounded">
                                        {upcomingSong.songTitle}
                                    </CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </Link>
                    )}
                </Col>
            </Row>

            {/* Contact Section */}
            <Row>
                <Col>
                    <h4 className="text-center">Contact</h4> 
                    <h6 className="text-center">Have a question or want to make a request? Get in touch below.</h6>
                    <Card className="p-4">
                        <p>Contact form here. Reactstrap Form eventually, backend functionality through Netlify</p>
                    </Card>
                </Col>
            </Row>
        </>
    );
}




// import { useState } from 'react';
// import { Card, CardImg, CardImgOverlay } from 'reactstrap';
// import songData from "../data/songData";

// export default function Welcome() {
//     const [selectedSong, setSelectedSong] = useState(null);

//     const handleSongClick = (songId) => {
//         setSelectedSong(songId);
//       };

    

//     return (
//         <>
//         {/* Need hero photo */}
//             <h1 className='m-4 fw-bold'>FirstName LastName</h1>
//             <h2 className="text-start">Arranger | Teacher | Singer</h2> 
//             <hr />
//             <br />
//             <div>
//                 <h4 className="text-start">What's New</h4>
//                 <Card>
//                 <p>Future card with image and overlay here. Maybe carousel through a few eventually?</p>
//                 </Card>   
//             </div>
//             <div>
//                 <h4 className="text-start">In the works</h4>
//                 <Card>
//                     <p>Single card here with title, voicing, and blurb</p>
//                 </Card> 
//             </div>
//             <div>
//                 <h4 className="text-start">Contact</h4> 
//                 <h6 className="text-start">Have a question or want to make a request? Get in touch below.</h6>
//                 <Card>
//                     <p>Contact form here. Reactstrap Form eventually, backend functionality through Netlify</p>
//                 </Card>
//             </div>
//         </>
//     );
// };