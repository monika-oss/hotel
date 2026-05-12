import React from 'react';
import { FiArrowLeft, FiClock, FiMapPin, FiCalendar, FiExternalLink, FiSearch, FiCheckCircle, FiAlertCircle, FiTag } from 'react-icons/fi';
import { THEME, formatCurrency } from './config';
import './MyRequests.css';

const MyRequests = ({ onBack }) => {
  const requests = [
    {
      id: 'PKG1023',
      destination: 'Mahabalipuram',
      date: '24 May - 27 May 2025',
      status: 'Pending',
      requestedOn: '12 May 2026',
      price: 18999
    },
    {
      id: 'PKG1018',
      destination: 'Pondicherry French Riviera',
      date: '10 June - 14 June 2025',
      status: 'Completed',
      requestedOn: '05 May 2026',
      price: 12499
    }
  ];

  const stats = [
    { label: 'Total Requests', value: 2, icon: <FiTag />, color: THEME.colors.primary },
    { label: 'In Progress', value: 1, icon: <FiClock />, color: THEME.colors.accent },
    { label: 'Confirmed', value: 1, icon: <FiCheckCircle />, color: THEME.colors.success },
  ];

  const getStatusInfo = (status) => {
    switch (status) {
      case 'Pending': return { color: THEME.colors.accent, icon: <FiClock />, text: 'Request Received' };
      case 'Completed': return { color: THEME.colors.success, icon: <FiCheckCircle />, text: 'Trip Confirmed' };
      case 'Cancelled': return { color: THEME.colors.error, icon: <FiAlertCircle />, text: 'Cancelled' };
      default: return { color: '#64748b', icon: <FiClock />, text: status };
    }
  };

  return (
    <div className="mr-page" style={{ backgroundColor: THEME.colors.background }}>
      <div className="mr-container">
        <div className="mr-main-card">
          <header className="mr-header">
          <div className="mr-header-top">
            <button className="mr-back-btn" onClick={onBack}>
              <FiArrowLeft /> Back to Exploration
            </button>
            <div className="mr-user-badge">
              <div className="avatar">JD</div>
              <span>John Doe</span>
            </div>
          </div>
          <h1 style={{ color: THEME.colors.primary }}>My Trip Requests</h1>
          <p>Track the status of your customized holiday packages in real-time.</p>
        </header>

        <div className="mr-stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="mr-stat-card">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mr-controls">
          <div className="mr-search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search by ID or Destination..." />
          </div>
          <div className="mr-filter-tabs">
            {['All', 'Pending', 'Confirmed', 'Cancelled'].map(tab => (
              <button key={tab} className={`mr-tab ${tab === 'All' ? 'active' : ''}`}>{tab}</button>
            ))}
          </div>
        </div>

        <div className="mr-list">
          {requests.map((req) => {
            const statusInfo = getStatusInfo(req.status);
            return (
              <div key={req.id} className="mr-card">
                <div className="mr-card-main">
                  <div className="mr-card-left">
                    <div className="mr-id-row">
                      <span className="mr-id-badge">#{req.id}</span>
                      <span className="mr-date-tag">Requested on {req.requestedOn}</span>
                    </div>
                    <h3 className="mr-dest-title">{req.destination}</h3>
                    <div className="mr-meta-grid">
                      <div className="mr-meta-item">
                        <FiCalendar className="icon" />
                        <div className="text">
                          <span className="label">Travel Dates</span>
                          <span className="val">{req.date}</span>
                        </div>
                      </div>
                      <div className="mr-meta-item">
                        <FiMapPin className="icon" />
                        <div className="text">
                          <span className="label">Location</span>
                          <span className="val">Puducherry & Surroundings</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mr-card-right">
                    <div 
                      className="mr-status-badge" 
                      style={{ backgroundColor: `${statusInfo.color}15`, color: statusInfo.color }}
                    >
                      {statusInfo.icon}
                      <span>{statusInfo.text}</span>
                    </div>
                    <div className="mr-price-block">
                      <span className="label">Estimated Price</span>
                      <div className="price-val" style={{ color: THEME.colors.primary }}>
                        {formatCurrency(req.price)}
                      </div>
                      <span className="per-person">Per Person</span>
                    </div>
                  </div>
                </div>

                <div className="mr-card-footer">
                  <div className="mr-footer-msg">
                    <FiClock className="icon" />
                    <span>{req.status === 'Pending' ? 'Our expert is reviewing your plan.' : 'Your booking is finalized.'}</span>
                  </div>
                  <div className="mr-footer-actions">
                    <button className="mr-btn mr-btn-outline">Download Summary</button>
                    <button className="mr-btn mr-btn-primary" style={{ backgroundColor: THEME.colors.primary }}>
                      View Details <FiExternalLink />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
