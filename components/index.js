import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer/footer.jsx';
import Header from './header/header.jsx';
import Sidebar from './partials/sidebar.jsx';
import Main from './main.jsx';

/*
 * Rendering for the Footer, Header, Sidebar
 * Possible to add more specific components
 */
ReactDOM.render(<Footer/>, footer);
ReactDOM.render(<Header/>, header);
ReactDOM.render(<Sidebar/>, sidebar);
ReactDOM.render(<Main/>, main);
