import React,{Component} from 'react';
import Img from '../../Images/back-side.jpg'
import styled from 'styled-components';

class Banner extends Component{
    render(){
        return(
            <Wrapper> 
               <div className = "row banner-text justify-content-center">
                   <div className="col-md-4 sign_in_title">
                    <h3>Sign in via Steam. Choose and sell CS:GO skins. Get cash.</h3>
                        <div className = "steam-button-lg">
                            <button className="btn btn-lg steam-button ">GET CASH NOW</button>
                        </div>
                   </div>
                   
               </div>
            </Wrapper>
        )
    }
}

export default Banner;

const Wrapper =  styled.section`{
    background-image: url(${Img});
    background-size:cover;
    background-repeat:none;
    height:600px;

    .banner-text{
        color:#fff;
        font-size: 42px;
        font-weight: 500;
    }
    .sign_in_title{
       
        margin-top: 160px;
        
    }
    h3{
        font-size: 30px;
    }
    .steam-button{
        position: relative;
        
        display: block;
        width: 390px;
        height: 66px;
        margin: 52px auto 67px;
        padding: 12px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        background-color: #0de5a0;
        color: #1e2224;
        border: none;
        border-radius: 5px;
        -webkit-box-shadow: 0 0 6px 0 #4fb274;
        box-shadow: 0 0 6px 0 #4fb274;
    }
}`