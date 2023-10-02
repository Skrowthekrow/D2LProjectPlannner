import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaHome,
  FaBook,
  FaRocket,
  FaUser
} from 'react-icons/fa';

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',  // Makes the entire area clickable
    width: '100%'
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        width={collapsed ? '80px' : '200px'}
        collapsed={collapsed}
        toggled={true}
        breakPoint="md"
        onToggle={handleCollapsedChange}
        backgroundColor="rgba(0, 0, 0, 0.7)"
        rootStyles={{
          position: 'fixed',
          height: '100%',
          zIndex: 999,
          color: 'gold'
        }}
      >
        <Menu iconShape="circle" rootStyles={{ color: 'gold' }}>
          <MenuItem icon={collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />} onClick={handleCollapsedChange}>
            {!collapsed && 'Close'}
          </MenuItem>
          <Link to="/home" style={linkStyle}><MenuItem icon={<FaHome />}>Home</MenuItem></Link>
          <Link to="/documentation" style={linkStyle}><MenuItem icon={<FaBook />}>Documentation</MenuItem></Link>
          <Link to="/features" style={linkStyle}><MenuItem icon={<FaRocket />}>Features</MenuItem></Link>
          <Link to="/contact-us" style={linkStyle}><MenuItem icon={<FaUser />}>{collapsed ? '' : 'Contact Us'}</MenuItem></Link>
        </Menu>
      </Sidebar>
      <div style={{ marginLeft: collapsed ? '80px' : '200px' }}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AppSidebar;
