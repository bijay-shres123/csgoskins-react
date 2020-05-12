import React, { Component } from 'react';
import Banner from './Banner'
import Footer from '../Footer'
import PaymentMethods from './PaymentMethods'
import styled from 'styled-components';

class IndexHome extends Component {
    render() {
        return (
            <div>
                <Banner />
                
                <PaymentMethods/>
                <Footer/>
            </div>
        )
    };
}

export default IndexHome
