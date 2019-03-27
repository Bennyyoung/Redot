import React from 'react';
import { Layout, Header, Navigation, Content, Drawer, HeaderRow } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import '../Styles/Components/Head.css';
import three_ladies from './images/three_ladies.jpg';
var sectionStyle = {
    backgroundImage: `url(${three_ladies})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}


class Head extends React.Component {
    render () {
        return (
            <div style={{height: '600px', position: 'relative'}}>
                <Layout 
                    fixedHeader
                    style={sectionStyle}>

                    <Header 
                        transparent 
                        title={
                                <span style={{fontSize: '30px', fontWeight: 'bold'}}>
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <small>Redot <br />AGENCY</small><br /><br /><br /><br /><br /><br /><br /><br />A <span style={{color: 'aqua'}}>CREATIVE AGENCY</span><br /><br />
                                    PACKAGING EMOTIONS<br /><br />
                                    FOR BRANDS
                                </span>
                               }>
                            <Navigation className="hover_over_link">
                                <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>HOME</NavLink>
                                <NavLink to="/our_brand" activeClassName="is-active" exact={true} style={{color: 'black', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>OUR BRANDS</NavLink>
                                <NavLink to="/about_us" activeClassName="is-active" exact={true} style={{color: 'black', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>ABOUT US</NavLink>
                            </Navigation>
                        
                    </Header>

                    <Drawer title="Redot AGENCY" style={{height: '600px'}}>
                        <Navigation className="hover_over_link">
                            <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black'}}>HOME</NavLink>
                            <NavLink to="/our_brand" activeClassName="is-active" exact={true} style={{color: 'black'}}>OUR BRANDS</NavLink>
                            <NavLink to="/about_us" activeClassName="is-active" exact={true} style={{color: 'black'}}>ABOUT US</NavLink>


                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
                
            </div>
        );
    }
}

export default Head;