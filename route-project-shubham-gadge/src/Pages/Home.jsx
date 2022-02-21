import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom'
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import '../CSS/Home.css'

export const Home = () => {
    let navigate = useNavigate();

    const slideImages = [
        'https://media.istockphoto.com/photos/home-caregiver-helping-a-senior-man-standing-up-at-home-picture-id1313001485?b=1&k=20&m=1313001485&s=170667a&w=0&h=gf59mcgLFPf5_y2OVC_B2Drfgkq2nvG18IN-rgBDQ1s=',
        'https://media.istockphoto.com/photos/caregiver-assist-senior-woman-at-home-picture-id1296176562?b=1&k=20&m=1296176562&s=170667a&w=0&h=gHya2Ee_SnnfngzSvzRra93uSlb7xG76apicnILHvIw=',
        'https://media.istockphoto.com/photos/doctor-in-hospital-background-with-copy-space-picture-id914490884?k=20&m=914490884&s=612x612&w=0&h=MPSRpGNtZVj7Q6NS4HfOVj7VdrMAFWSfdT_ZlQdJeps=',
    ];

    const properties = {
        canSwipe: false,
        autoPlay: true,
        prevArrow: <div className='left-arrow arrows'>
            <NavigateBefore style={{ color: 'black', fontSize: 35 }} />
        </div>,
        nextArrow: <div className='right-arrow arrows'>
            <NavigateNext style={{ color: 'black', fontSize: 35 }} />
        </div>
    }

    return (
        <div className='homeContainer'>
            <div className='sliderContainer'>
                <Slide easing="ease" {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slideImages[0]})` }}>
                            <p className="homeTitle">B-GRADE LEATHER + OLD STOCK</p>
                            <p className='homeSubTitle'>The Sample Sale</p>
                            <button className='btn' onClick={() => navigate("/products")}>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slideImages[1]})` }}>
                            <p className="homeTitle">B-GRADE LEATHER + OLD STOCK</p>
                            <p className='homeSubTitle'>The Sample Sale</p>
                            <button className='btn' onClick={() => navigate("/products")}>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slideImages[2]})` }}>
                            <p className="homeTitle">B-GRADE LEATHER + OLD STOCK</p>
                            <p className='homeSubTitle'>The Sample Sale</p>
                            <button className='btn' onClick={() => navigate("/products")}>SHOP NOW</button>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
