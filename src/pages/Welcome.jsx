import { Link } from 'react-router-dom'
// import headshot from '../assets/images/Beth.jpg'
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
// import { sortAlphaTitle } from '../utils/helpers';

//About Me page
export default function Welcome() {
    // const sortAlphaTitle = () => {
    //     // const titles = songData.songTitle;
    //     // console.log(titles);
    //     console.log("hello")
    // };
    // {sortAlphaTitle}
    return (
        <>
        {/* Need hero photo */}
            <h1 className='m-4 fw-bold'>Beth Deutmeyer</h1>
            <h2 className="text-start">Arranger | Teacher | Singer</h2> 
            <hr />
            <br />
            <div>
            {/* <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3 rounded shadow" width="15%"/> */}
                <h4 className="text-start">What's New</h4>
                <Card>
                <p>Future card with image and overlay here. Probably map through a few eventually?</p>
                </Card>   
            </div>
            <div>
                <h4 className="text-start">In the works</h4>
                <Card>
                    <p>Single card here with title, voicing, and blurb</p>
                </Card> 
            </div>
            <div>
                <h4 className="text-start">Contact Beth</h4> 
                <h6 className="text-start">Have a question or want to make a request? Get in touch with Beth below.</h6>
                <Card>
                    <p>Contact form here. Reactstrap Form eventually</p>
                </Card>
            </div>


       <br />
       <br />
        </>
    );
};