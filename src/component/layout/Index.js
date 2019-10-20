import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Barnav from './Barnav';
import Section from './Section';






class Layout extends Component {
    render(){
        return(
            <div className="MainCont">
            <Header/>
            <Barnav/>
            <Aside/>
            <Section/>
            <Footer/>
            </div>
        );
    } 
}

export default Layout 