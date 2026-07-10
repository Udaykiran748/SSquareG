import React from 'react';

const DashboardCard = ({ title, value, change, icon, positive, delay = 0 }) => {
  return (
    <div 
      className="stat-card animate-fade-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        <span className="stat-card-icon">{icon}</span>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className={`stat-card-change ${positive ? 'positive' : 'negative'}`}>
        {change}
      </div>
    </div>
  );
};

export default DashboardCard;
