import React, { Component } from 'react';
import Herobanner from './Herobanner';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import Count from './Count';
import Ourwork from './Ourwork';
import Ourclients from './Ourclients';

class Main extends Component {
    render() {
        return (
            <div className="cv-content">
                <Herobanner />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <Contact />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <Service />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <About />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <Count />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <Ourwork />
                <section class="container"><div class="row-wrapper-x"></div></section>
                <Ourclients />
                <section class="container"><div class="row-wrapper-x"></div></section>
            </div>
        );
    }
}

export default Main;
