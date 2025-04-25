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
            <div className='logo-bg'>
                {/* <img src={headshot} alt="Beth Deutmeyer headshot" className="float-start me-3 rounded shadow" width="15%"/> */}
                <p className="text-start sans-font-reg px-4 px-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit nulla maxime! Praesentium odio unde corporis id facere reiciendis rerum sequi deleniti veniam? Esse adipisci animi officia? Eius, a facilis?</p>
                <p className="text-start sans-font-reg px-4 px-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit nulla maxime! Praesentium odio unde corporis id facere reiciendis rerum sequi deleniti veniam? Esse adipisci animi officia? Eius, a facilis?</p>
            </div>
        </>

    );
};