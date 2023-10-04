import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  FaAngleDoubleLeft,
  FaHome,
  FaBook,
  FaRocket,
  FaUser
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const menuItemStyle = (item) => ({
    backgroundColor: hoveredItem === item ? 'black' : 'transparent',
    zIndex: hoveredItem === item ? 4 : 2
  });

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
          zIndex: 9999,  // Adjusted zIndex to make sure it's above other elements
          color: 'gold'
        }}
      >
        <Menu iconShape="circle" rootStyles={{ color: 'gold' }}>
          <div onClick={handleCollapsedChange} style={{ cursor: 'pointer', width: '100%' }}>
            <MenuItem
              icon={<FaAngleDoubleLeft />}
              style={menuItemStyle('close')}
              onMouseEnter={() => setHoveredItem('close')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {!collapsed && 'Close'}
            </MenuItem>
          </div>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem
              icon={<FaHome />}
              style={menuItemStyle('home')}
              onMouseEnter={() => setHoveredItem('home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Home
            </MenuItem>
          </Link>
          <Link to="/documentation" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem
              icon={<FaBook />}
              style={menuItemStyle('documentation')}
              onMouseEnter={() => setHoveredItem('documentation')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Documentation
            </MenuItem>
          </Link>
          <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem
              icon={<FaRocket />}
              style={menuItemStyle('features')}
              onMouseEnter={() => setHoveredItem('features')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Features
            </MenuItem>
          </Link>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem
              icon={<FaUser />}
              style={menuItemStyle('contact-us')}
              onMouseEnter={() => setHoveredItem('contact-us')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {collapsed ? '' : 'Contact Us'}
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
      <div style={{ marginLeft: collapsed ? '80px' : '200px' }}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AppSidebar;

