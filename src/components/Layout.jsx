import React from 'react';

import 'normalize.css'; // npm package
import '../assets/css/main.css';

function Layout({ children }) {
  return <div className="layout__children">{children}</div>;
}

export default Layout;
