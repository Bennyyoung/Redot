import React from 'react';
import { Grid, Cell } from 'react-mdl';
import '../Styles/Components/Home.css';
import image1 from './images/im1.jpg';
import image2 from './images/im2.jpg';
import image3 from './images/im3.jpg';
import image4 from './images/im4.jpg';
import image5 from './images/im5.jpg';
import image6 from './images/im6.jpg';
import image7 from './images/im7.jpg';
import image8 from './images/im8.jpg';
import image9 from './images/im9.jpg';
import image10 from './images/im10.jpg';
import image11 from './images/im11.jpg';
// import SideBar from './SideBar';

const Home = () => (
    <div style={{padding:'15px'}}>
                <div style={{textAlign:'center', padding:'30px', fontFamily:'serif'}}>
                    <span style={{fontWeight:'bold', fontSize: '1.5em'}}>We are Redot</span><br />
                    <span>We are the <span style={{fontWeight:'bold'}}>soul engine</span> of brands</span><br />
                    <span>We hook their audience from start to finish</span><br />
                </div>
                
                <div style={{justifyContent: 'space-between', float: 'left'}}> 
                    <Grid className="demo-grid-1">
                        <Cell col={6} phone={4} className="img_classes"><img src={image3} alt="image"  /></Cell>

                        <Cell col={6} phone={4} className="img_classes"><img src={image4} alt="image" /></Cell>
                        <Cell col={12} phone={6} className="img_classes"><img src={image5} alt="image" /></Cell>
                        <Cell col={12} phone={6} className="img_classes"><img src={image6} alt="image" /></Cell>

                        <Cell col={6} phone={4} className="img_classes"><img src={image7} alt="image" /></Cell>
                        <Cell col={6} phone={4} className="img_classes"><img src={image8} alt="image" /></Cell>
                        <Cell col={6} phone={4} className="img_classes"><img src={image9} alt="image" /></Cell>
                        <Cell col={6} phone={4} className="img_classes"><img src={image10} alt="image"  /></Cell>
                        <Cell col={12} phone={6} className="img_classes" style={{marginTop: '10px'}}><img src={image11} alt="image" style={{width: '100%', height: '99%', paddingTop: 'px', margin:'auto'}} /></Cell>
                        
                    </Grid>                  
                </div>
        </div>
)

export default Home;