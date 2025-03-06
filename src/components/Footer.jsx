import { useState } from 'react'
// import 'animate.css'
// import ghLogo from '../assets/logos/github-mark.svg'
// import liLogo from '../assets/logos/linkedin-icon.png'

// Footer will contain social media links (LinkedIn, BlueSky, Facebook), and IF I have a profile anywhere else like JW Pepper or Hal Leonard, it will have those too. ALSO YOUTUBE. "Let's connect"


//Footer section
function Footer() {
    // const [ghLogoHover, setGhLogoHover] = useState(false);
    // const [liLogoHover, setLiLogoHover] = useState(false);
    return (
        <>
            {/* <div id="footer" className='container-fluid footer-section shadow p-2'>
                <div className='row d-flex justify-content-center'>
                    <div className='col col-2' onMouseEnter={() => setGhLogoHover(true)} onMouseLeave={() => setGhLogoHover(false)}>
                        <a href="https://github.com/bdeutmeyer">
                            <img src={ghLogo} alt="Link to GitHub profile" width="30%" className={`${ghLogoHover ? 'animate__animated animate__pulse' : ''}`} />
                        </a>
                    </div>
                    <div className='col col-2' onMouseEnter={() => setLiLogoHover(true)} onMouseLeave={() => setLiLogoHover(false)}>
                        <a href="https://www.linkedin.com/in/beth-deutmeyer-4b0b73238">
                            <img src={liLogo} alt="Link to LinkedIn profile" width="30%" className={`${liLogoHover ? 'animate__animated animate__pulse' : ''}`} />
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Footer;