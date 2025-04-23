import { Link } from 'react-router-dom'
// import headshot from '../assets/images/Beth.jpg'

//About Me page
export default function About() {
    return (
        <>
            <div className='page-header'>
                <h1 className='m-4 serif-font'>About Beth</h1>
            </div>
            <hr />
            <br />
            <div>
                {/* <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3 rounded shadow" width="15%"/> */}
                <p className="text-start">Beth Deutmeyer is...</p>
            </div>
        </>

    );
};