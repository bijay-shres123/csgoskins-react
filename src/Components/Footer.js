import React, {Component} from 'react';
import Img from '../Images/logo-bw.png'
import styled from 'styled-components'

class Footer extends Component{
    render(){
        return(
            <Wrapper>
                <div className="row justify-content-center">
                    <div className = "col-md-3">
                        <img src = {Img} style={{width:120}}></img>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>How it works</li>
                            <li>Bonus</li>
                            <li>FAQ</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>One Pager</li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li>Giveaway</li>
                            <li>Partnership</li>
                            <li>Instant cash</li>
                            <li>100% Secure</li>
                            <li>No hidden fees</li>
                            <li>Blog</li>
                           
                            
                        </ul>
                    </div>

                </div>
                <div className= "bottom_footer container">
                    
<p>Copyright © . All rights reserved. Suntechsoft Corp Limited GX11 1AA 5, address: Secretary's Lane, Gibraltar
Powered by Steam, a registered trademark of Valve Corporation. Valve, the Valve logo, the Steam logo, the logos and arts of CS:GO, Dota 2, Team Fortress 2, PUBG, H1Z1, along with all other registered trademarked logos, in-game items, and arts on Skins.Cash are the property of their respective owners. Skins.Cash is in no way affiliated with or endorsed by Valve Corporation. </p>
                </div>
            </Wrapper>
        )
    }
}

export default Footer;

const Wrapper = styled.section`{
    ul{
        color:#fff;
    }
    li{
        list-style:none;
        font-size:18px;
    }
    .bottom_footer{
        font-size: 10px;
        font-weight: 200;
        line-height: 18px;
        font-style: normal;
        text-align: center;
        color: #37445a;
        border-top: 1px solid #37445a;
    }
}`