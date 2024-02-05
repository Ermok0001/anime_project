import img1 from './img_pages/fe46cd3579db01f7abda71562fbba652.jpg'
import img_gitHub from './img_pages/github.png'
import img_gmial from './img_pages/gmail.png'
import img_instagram from './img_pages/instagram.webp'
import img_facebook from './img_pages/img_facebook.webp'

export function AboutPage(){
    return <div className="About"> 
    <div className='Title_About'>
    <h1>About Me</h1>
    <p>Welcome to my Anime Portal</p>
    </div>
    <div className='Other_Info'>
        <img src={img1}></img>
        <div className='My_Info'>
        <h1>Creative Production</h1>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla iure quam natus facere corporis repudiandae at esse aliquam, labore doloribus harum sit illum ad. Commodi corrupti sit asperiores blanditiis.</p>
        <h4>Contact Me:</h4>
        <div className='logotype'>
        <img src={img_gitHub}></img>
        <img src={img_gmial}></img>
        <img src={img_instagram}></img>
        <img src={img_facebook}></img>
        </div>
    </div>
    </div>
    </div>
}