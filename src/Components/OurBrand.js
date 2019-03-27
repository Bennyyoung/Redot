import React from 'react';
import { Grid, Cell } from 'react-mdl';
import '../Styles/Components/OurBrand.css';
import pepsi_logo from './images/pepsi_logo.png';
import dangote from './images/dangote.png';
import air_peace_logo from './images/air_peace_logo.jpg';
import purchase_9ja from './images/purchase_9ja.png';
import coca_cola from './images/coca_cola.png';
import cu_logo from './images/cu_logo.jpg';
import mobile_tailor from './images/mobile_tailor.jpg';
import cut_24 from './images/cut_24.png';

const OurBrand = () => {
    return (
        <div>
            <div>
                <h1 style={{textAlign: 'center', fontFamily: 'Helvetica', fontWeight: 'bold'}}>Our Brands</h1>
                    <div>

                        <div style={{float: 'left'}}>
                            <img style={{width: '450px', height: '400px', padding: '0px 90px 5px 5px' }} src="data:image/jpeg;base64,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"/>

                        </div>
                    <div style={{textAlign: '20px'}}>

                        <p style={{fontSize: '20px', textAlign: '10px'}}>
                            Our lead consultant did intensive brand analysis and digital strategy<br /><br />
                            for a pepsi Ad campaign launched in ubharan Africa.
                        </p><br /><br /><br />

                        <p style={{fontSize: '20px', textAlign: '10px'}}>
                            Additionally a brand audit was conaucted on their social media<br /><br />
                            platforms and recommendations to increase online engagements.
                        </p>
                    </div>
                </div>
                
                    <div className="bran_image_classes">
                        <Grid className="demo-grid-ruler" style={{background: 'grey', clear: 'left', margin: 'auto'}}>
                            <h3 style={{color: 'white', clear: 'left'}}>Brands We've worked with...</h3>

                            <Cell col={2} phone={4} tablet={4}><img src={pepsi_logo} alt="image" style={{height: '90px', width: '130px'}}/></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={dangote} alt="image"  style={{height: '70px', width: '110px'}}/></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={air_peace_logo} alt="image"  style={{height: '100px', width: '100px'}}/></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={purchase_9ja} alt="image"   style={{height: '240px', width: '290px'}}/></Cell>
                        
                            <Cell col={2} phone={4} tablet={4}><img src={cu_logo} alt="image" style={{height: '100px', width: '150px'}} /></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={coca_cola} alt="image" style={{height: '50px', width: '90px', paddingLeft: '10px'}} /></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={mobile_tailor} alt="image"  style={{height: '150px', width: '150px', paddingBottom: '30px'}}/></Cell>
                            <Cell col={2} phone={4} tablet={4}><img src={cut_24} alt="image"  style={{height: '110px', width: '110px', marginLeft: '60px'}}/></Cell>

                        </Grid>
             </div>
           


            </div>
            


            

        </div>
        
    )
}

export default OurBrand;