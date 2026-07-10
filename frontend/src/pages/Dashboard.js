import React, { useContext } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { AuthContext } from '../context/AuthContext';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: <DollarSign size={20} />,
      positive: true
    },
    {
      title: "Active Users",
      value: "+2350",
      change: "+180.1% from last month",
      icon: <Users size={20} />,
      positive: true
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: <CreditCard size={20} />,
      positive: true
    },
    {
      title: "Active Now",
      value: "+573",
      change: "-4% since last hour",
      icon: <Activity size={20} />,
      positive: false
    }
  ];

  return (
    <DashboardLayout>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Welcome back, {user?.name?.split(' ')[0] || 'Admin'}!
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Here is what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <DashboardCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            positive={stat.positive}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Placeholder for future charts/tables */}
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-tertiary)'
      }}>
        <p>Main Chart Area / Recent Activity Table goes here</p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
