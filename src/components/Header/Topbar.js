import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return (
        <section className="top-bar">
            <div className="container">
                <div className="top-links lftflot"><a href="#">Call : (+66) 86-613-2807</a></div>
                <div className="top-links rgtflot">
                    <div className="socialfollow">
                        <a target="_blank" href="https://www.facebook.com/shopstack/" className="facebook">
                            <i className="fa-facebook"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/shopstack-company/" className="linkedin">
                            <i className="fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Topbar;
