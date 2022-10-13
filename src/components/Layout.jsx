import React from 'react';

import 'normalize.css'; // npm package
import '../assets/css/main.css';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__children">{children}</div>
    </div>
  );
}

export default Layout;
