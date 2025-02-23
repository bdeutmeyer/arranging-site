import { Link } from 'react-router-dom'
// import headshot from '../assets/images/Beth.jpg'

//About Me page
export default function Welcome() {
    return (
        <>
            <h3 className='m-4 fw-bold'>About Me</h3>
            <hr />
            <br />
            <div>
            {/* <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3 rounded shadow" width="15%"/> */}
            <p className='text-start'>Welcome!</p>
            <p className="text-start">I am an experienced teacher and accomplished musician with additional training in web development. After limiting myself to part-time work for several years in order to raise my children at home, I am looking to expand my career. Responsible, highly educated, and versatile, I am eager to branch out into new arenas, further my skills, and leverage my abilities in interesting and challenging ways!</p>     
            </div>
       <br />
       <br />
        </>
    );
};