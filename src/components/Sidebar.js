import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  FaAngleDoubleLeft,
  FaHome,
  FaBook,
  FaRocket,
  FaUser
} from 'react-icons/fa';

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(true); // Set initial state to true to have it closed
  const [hoveredItem, setHoveredItem] = useState(null); // Keep track of the hovered item

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const menuItemStyle = (item) => ({
    backgroundColor: hoveredItem === item ? 'rgba(30, 30, 30, 0.7)' : 'transparent',
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
          zIndex: 2,
          color: 'gold'
        }}
      >
        <Menu iconShape="circle" rootStyles={{ color: 'gold' }}>
          <MenuItem
            icon={<FaAngleDoubleLeft />}
            style={{ ...menuItemStyle('close'), zIndex: 3 }}
            onMouseEnter={() => setHoveredItem('close')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleCollapsedChange}
          >
            {!collapsed && ''}
          </MenuItem>
          <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem 
              icon={<FaHome />}
              style={menuItemStyle('home')}
              onMouseEnter={() => setHoveredItem('home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Home
            </MenuItem>
          </a>
          <a href="#documentation" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem 
              icon={<FaBook />}
              style={menuItemStyle('documentation')}
              onMouseEnter={() => setHoveredItem('documentation')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Documentation
            </MenuItem>
          </a>
          <a href="#features" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem 
              icon={<FaRocket />}
              style={menuItemStyle('features')}
              onMouseEnter={() => setHoveredItem('features')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Features
            </MenuItem>
          </a>
          <a href="#contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem 
              icon={<FaUser />}
              style={menuItemStyle('contact-us')}
              onMouseEnter={() => setHoveredItem('contact-us')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {collapsed ? '' : 'Contact Us'}
            </MenuItem>
          </a>
        </Menu>
      </Sidebar>
      <div style={{ marginLeft: collapsed ? '80px' : '200px' }}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AppSidebar;
