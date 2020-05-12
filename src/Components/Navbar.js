import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../Images/logo.png'

class Navbar extends Component{
    render(){
        return(
            <Wrapper>
            
            <nav className="navbar navbar-expand-lg navbar-css">
            <div className="container">
                <NavLink to="/" exact  activeClassName='is-active' className= "navbar-brand styledLink ">
                    <img src = {logo} style={{width:120}}></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    
                    
                    
                    </ul>
                
                    <ul className="navbar-nav ">
                        <li className="nav-item active link-arranger link-arranger">
                        <NavLink to="/" exact  activeClassName='is-active' className= "styledLink ">
                            Home
                        </NavLink>
                        </li>
                        <li className="nav-item link-arranger">
                            <NavLink to="/blogs" exact  activeClassName='is-active' className= "styledLink ">
                            Blogs
                            </NavLink>
                        </li><li className="nav-item link-arranger">
                            <NavLink to="/about" exact  activeClassName='is-active' className= "styledLink ">
                            About
                            </NavLink>
                        </li><li className="nav-item link-arranger">
                            <NavLink to="/contact" exact  activeClassName='is-active' className= "styledLink ">
                            Contact
                            </NavLink>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav ">
                    <li className="nav-item link-arranger">
                            <button className= "btn button-steam">STEAM LOGIN</button>
                        </li>
                    </ul>
                </div>
                </div >
            </nav>
            
            </Wrapper>
        )
    }
}

export default Navbar;

const Wrapper = styled.section`
    .navbar-css{
        background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    }
    .styledLink{
        text-decoration: none;
        color :white !IMPORTANT;
        
        &:hover{
           
        }
    }
    .is-active{
        color:red;
       
    }
    .link-arranger{
        padding: 10px;
    }
    .button-steam{
        width: 185px;
        margin: 0 16px 0 20px;
        padding: 9px 0;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        background-color: #0de5a0;
        color: #1e2224;
        border: none;
        border-radius: 4px;
    }
    
`