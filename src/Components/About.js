import React from 'react';
import '../Styles/Components/About.css';
import lady_on_yellow from './images/lady_on_yellow.jpg';


class About extends React.Component {
    render () {
        return (
            <div>

            
            <div style={{background: 'black', height: '1180px', paddingTop: '0.1px'}}>
                <div style={{float: 'left'}} className="girl_on_yellow">
                <img style={{width: '415px', height: '900px', padding: '0px 40px 5px 5px' }} src={lady_on_yellow}/>

                </div>
                <div>
                    <h1 style={{color: 'yellow', fontWeight:'bold', fontSize: '20px'}}>ABOUT US</h1>
                    <p style={{fontSize: '2.5vw', textAlign: '10px', color: 'white'}}>
                        Redot is a creative agency(Branding & Marketing) set up <br /> 
                        to help brands reach their audience on an emotional level.<br /><br />

                        We are masters at storytelling, the soul engine of brands, <br /> 
                        We hook their audience from start to finish.<br /><br />
                        Just like our name, we aim to make every brand stand out like <br /> 
                        a red dot on a white sheet.<br /><br />
                        Welcome to Redot agency!
                    </p>
                </div>


                
                </div>
                
            </div>

        )
    }
}

export default About
