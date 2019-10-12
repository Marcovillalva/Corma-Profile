import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Barnav from './Barnav';
import Section from './Section';





class Layout extends Component {
    render(){
        return(
            <div>
            <Header/>
            <Footer/>
            <Barnav/>
            <Aside/>
            <Section/>
            </div>
        );
    } 
}

export default Layout 