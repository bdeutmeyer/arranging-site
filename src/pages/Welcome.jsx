import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import songData from "../data/songData";
import BDLogo from "../assets/logos/BDLogo.svg";

export default function Welcome() {
    const newestSong = [...songData]
        .filter(song => song.releaseDate)
        .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

    const upcomingSong = songData.find(song => song.upcoming);

    return (
        <>
            <Container fluid className='p-5 text-end'>
                <Row className="align-items-center text-md-start">
                    <Col md="6">
                        <h1 className="fw-bold">FirstName LastName</h1>
                    </Col>
                    <Col md="6">
                        <h2>Arranger | Teacher | Singer</h2>
                    </Col>
                </Row>
            </Container>

            <hr />
            <br />
            <Container className='logo-bg'>
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
                                        className=""
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
                                        className=""
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
            </Container>

        </>
    );
};

//New container with logo background and responsive layout of h1 and h2
{/* <Container fluid className="logo-bg p-5">
  {/* Title Row */}
//   <Row className="align-items-center mb-4 text-center text-md-start">
//     <Col md="6">
//       <h1 className="fw-bold">FirstName LastName</h1>
//     </Col>
//     <Col md="6">
//       <h2>Arranger | Teacher | Singer</h2>
//     </Col>
//   </Row>

//   <hr className="mb-5" />

{/* Song Cards */ }
//   <Row className="mb-5">
//     <Col md="6" className="mb-4">
//       <h4 className="text-center">What's New</h4>
//       {newestSong && (
//         <Link to={`/arrangements/${newestSong.pathExt}`} className="text-decoration-none">
//           <Card inverse className="card-hover">
//             <CardImg alt={newestSong.imageAlt} src={newestSong.imagePath} />
//             <CardImgOverlay>
//               <CardTitle tag="h5" className="p-2 rounded">
//                 {newestSong.songTitle}
//               </CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </Link>
//       )}
//     </Col>

//     <Col md="6" className="mb-4">
//       <h4 className="text-center">In the works</h4>
//       {upcomingSong && (
//         <Link to={`/arrangements/${upcomingSong.pathExt}`} className="text-decoration-none">
//           <Card inverse className="card-hover">
//             <CardImg alt={upcomingSong.imageAlt} src={upcomingSong.imagePath} />
//             <CardImgOverlay>
//               <CardTitle tag="h5" className="p-2 rounded">
//                 {upcomingSong.songTitle}
//               </CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </Link>
//       )}
//     </Col>
//   </Row>

{/* Contact Section */ }
//   <Row>
//     <Col>
//       <h4 className="text-center">Contact</h4>
//       <h6 className="text-center">Have a question or want to make a request? Get in touch below.</h6>
//       <Card className="p-4">
//         <p>Contact form here. Reactstrap Form eventually, backend functionality through Netlify</p>
//       </Card>
//     </Col>
//   </Row>
// </Container> 
