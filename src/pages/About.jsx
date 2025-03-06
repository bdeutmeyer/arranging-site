import { Link } from 'react-router-dom'
// import headshot from '../assets/images/Beth.jpg'

//About Me page
export default function About() {
    return (
        <>
            <h3 className='m-4 fw-bold'>About Me</h3>
            <hr />
            <br />
            <div>
            {/* <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3 rounded shadow" width="15%"/> */}
            <p className="text-start">Beth Deutmeyer is...</p>     
            </div>
       <br />
       <br />
        </>
    );
};