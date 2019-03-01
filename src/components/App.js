import React, { Component } from 'react';
import Topbar from './Header/Topbar';
import Header from './Header/Header';
import Main from './Content/Main';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div id="wrap" className="colorskin-2 dark-submenu">
                <Topbar />
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
