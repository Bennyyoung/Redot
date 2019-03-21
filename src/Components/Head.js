import React from 'react';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import '../Styles/Components/Head.css';

class Head extends React.Component {
    render () {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout 
                    title="image"
                    style={{background: 'url(https://images.unsplash.com/photo-1469210537992-30c8c8abef12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover'}}>

                    <Header transparent title="Redot AGENCY" style={{color: 'white'}}>
                        <Navigation className="hover_over_link">
                            <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>HOME</NavLink>
                        </Navigation>
                    </Header>

                    <Drawer title="Redot AGENCY" style={{height: '300px'}}>
                        <Navigation className="hover_over_link">
                            <NavLink to="/" activeClassName="is-active" exact={true} style={{color: 'black'}}>HOME</NavLink>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
                
            </div>
        );
    }
}

export default Head;