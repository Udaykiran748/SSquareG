import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import '../styles/dashboard.css';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-header">
          <div className="home-logo-box" style={{ width: '32px', height: '32px', fontSize: '0.9rem', borderRadius: '8px' }}>
            S2G
          </div>
          <span className="home-brand-name" style={{ fontSize: '1.2rem' }}>S Square G Tech Solutions</span>
        </div>

        <nav className="dashboard-nav">
          <Link to="/dashboard" className={`dashboard-nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link to="/users" className="dashboard-nav-item">
            <Users size={20} />
            Users
          </Link>
          <Link to="/settings" className="dashboard-nav-item">
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <div className="dashboard-sidebar-footer">
          <button className="dashboard-logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="dashboard-header-title">
            {location.pathname === '/dashboard' ? 'Overview' : 'Dashboard'}
          </div>
          
          <SearchBar placeholder="Search globally..." />
          
          <div className="dashboard-profile">
            <div className="dashboard-profile-info">
              <div className="dashboard-profile-name">{user?.name || 'Admin User'}</div>
              <div className="dashboard-profile-role">Administrator</div>
            </div>
            <div className="dashboard-avatar">
              {getInitials(user?.name)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
