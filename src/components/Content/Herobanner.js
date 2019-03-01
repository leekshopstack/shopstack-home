import React, { Component } from 'react';

class Herobanner extends Component {
    render() {
        return (
            <section className="parallax-sec  dark  blox aligncenter page-title-x full-container" style={{background: 'url("http://www.shopstack.asia:80/wp-content/uploads/2015/12/home_banner-1.png") 50% -65.7px / cover no-repeat rgb(253, 224, 88)'}} data-stellar-background-ratio="0.7">
                <div className="max-overlay" style={{backgroundColor: ''}}></div>
                <div data-stellar-ratio={1} className="wpb_row vc_row-fluid " style={{top: '0px'}}>
                    <div className="container">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner vc_custom_1454326965925">
                                <div className="wpb_wrapper">
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space4" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                    <hr className="vertical-space5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Herobanner;
