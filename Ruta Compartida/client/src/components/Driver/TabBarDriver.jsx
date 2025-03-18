import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/main.css';

const TabBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Datos de las paginas con las rutas 
  const tabs = [
    {
      path: "/Driver/Index",
      name: "Your Rides",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#880000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      path: "/Driver/Notifications",
      name: "Notifications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#880000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      path: "/Driver/Inbox",
      name: "Inbox",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#880000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      path: "/Profile/Profile",
      name: "Profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#880000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
          <circle cx="12" cy="10" r="3"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
    }
  ];

  // Función para saber en que pagina estas
  const isActive = (path) => {
    // Verificar si encuentra en la misma ruta 
    if (currentPath === path) {
      return true;
    }
    
    // Para checar cada ruta
    if (path === '/Driver/Index') {
      return (currentPath === '/Driver/Index' || 
              currentPath.includes('/Create_Ride/'));
    }
    
    if (path === '/Profile/Profile') {
      return currentPath.includes('/Profile/');
    }
    
    if (path === '/Driver/Notifications') {
      return currentPath === '/Driver/Notifications';
    }
    
    if (path === '/Driver/Inbox') {
      return currentPath === '/Driver/Inbox';
    }
    
    return false;
  };

  return (
    <nav className="navigation-tab">
      {tabs.map((tab) => (
        <div 
          key={tab.path}
          className={`navigation-tab-item ${isActive(tab.path) ? 'active' : ''}`}
        >
          <Link to={tab.path} className="navigation-tab-link">
            <span className="navigation-tab__icon">
              {tab.icon}
            </span>
            <span className="navigation-tab__txt">{tab.name}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default TabBar;