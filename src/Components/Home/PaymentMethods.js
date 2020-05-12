import React, {Component} from 'react';
import styled from 'styled-components';
import esewa from '../../Images/esewa.png';
import khalti from '../../Images/khalti.png'
import cellpay from '../../Images/cellpay.png'
import connect from '../../Images/connect.png'
import imepay from '../../Images/imepay.png'

class PaymentMethods extends Component{
    render(){
        return(
             <Wrapper>
                <div className="row justify-content-center ">
                    <div className ="logo-box">
                        <img src={esewa} style={{ width:140 , height: 100}} />
                    </div>
                    <div className ="logo-box">
                    <img src={khalti} style={{ width:140 , height: 100}} />
                    </div>
                    <div className ="logo-box">
                    <img src={cellpay} style={{ width:140 , height: 100}} />
                    </div>
                    <div className ="logo-box">
                        <img src={imepay} style={{ width:140 , height: 100}} />
                    </div>
                    <div className ="logo-box">
                        <img src={connect} style={{ width:140 , height: 100}} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default PaymentMethods;

const Wrapper = styled.section`{
    margin:20px 0px;
   
    .logo-box{
        
        width:10%;
        height:150px;
        margin: 2px 10px;
        overflow: hidden;
    }
}`