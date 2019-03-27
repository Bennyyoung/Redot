import React from 'react';
import '../Styles/Components/Foot.css'
import { Footer, FooterLinkList, FooterSection, FooterDropDownSection,  }  from 'react-mdl';
class Foot extends React.Component {
    render () {
        return (
            <div className="stick_to_bottom">
                <Footer size="mega" style={{backgroundColor: 'light-grey'}}>
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Nigeria">
                            <FooterLinkList>
                                <li>Road 4</li>
                                <li>West End estate</li>
                                <li>lekki Lagos</li><br />
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom">
                        <FooterLinkList>
                        <p>&copy; Redot Agency</p>
                            <li><a href="https://www.instagram.com/redot.agency/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/RedotAgency">facebook</a></li>
                            <li><a href="https://www.twitter.com/RedotAgency">Twitter</a></li>
                                        
                        </FooterLinkList>
                    </FooterSection>
                </Footer>   
            </div>
        )
    }
}

export default Foot;