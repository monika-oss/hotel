import React, { useState } from 'react';
import { FiX, FiMapPin, FiCalendar, FiUsers, FiBriefcase, FiTarget, FiCoffee, FiInfo, FiCheck, FiChevronLeft } from 'react-icons/fi';
import { MdOutlineHotel, MdOutlineLocalActivity, MdRestaurant } from 'react-icons/md';
import { THEME, formatCurrency } from './config';
import RequestSuccessModal from './components/RequestSuccessModal';
import './CustomizePackage.css';

const CustomizePackage = ({ onBack, onNavigateToRequests }) => {
  const [formData, setFormData] = useState({
    destination: 'Mahabalipuram',
    placesToVisit: 'hgfhhfgh',
    startDate: '2025-05-24',
    endDate: '2025-05-27',
    numDays: '4 Nights / 5 Days',
    guests: 1,
    hotelPreference: 'Budget',
    activities: ['Auroville & Matrimandir', 'French Quarter Walk', 'Paradise Beach', 'Candle Light Dinner'],
    mealPreference: 'Breakfast Only',
    specialRequirements: ''
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleActivityToggle = (activity) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  return (
    <div className="cp-page-wrapper">
      <div className="cp-container">
        {/* Main Content Area */}
        <div className="cp-main-content">
          <header className="cp-header">
            <button className="cp-back-btn" onClick={onBack}>
              <FiChevronLeft size={20} /> Back to Packages
            </button>
            <h1>Customize Your Package</h1>
            <p>Tell us your preferences and we'll create a perfect trip for you.</p>
          </header>

          <div className="cp-scroll-area">
            {/* Section: Destination & Preferences */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <FiMapPin className="cp-icon" style={{ color: THEME.colors.primary }} /> Destination & Preferences
              </h2>
              <div className="cp-row">
                <div className="cp-field">
                  <label>Destination</label>
                  <div className="cp-input-wrapper">
                    <FiMapPin className="cp-input-icon" />
                    <select 
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    >
                      <option>Pondicherry</option>
                      <option>Mahabalipuram</option>
                      <option>Both</option>
                    </select>
                  </div>
                </div>
                <div className="cp-field flex-2">
                  <label>Places You Want to Visit</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Auroville, Paradise Beach, White Town"
                    value={formData.placesToVisit}
                    onChange={(e) => setFormData({...formData, placesToVisit: e.target.value})}
                  />
                </div>
              </div>
            </section>

            {/* Section: Travel Details */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <FiCalendar className="cp-icon" style={{ color: THEME.colors.primary }} /> Travel Details
              </h2>
              <div className="cp-row grid-4">
                <div className="cp-field">
                  <label>Start Date</label>
                  <div className="cp-input-wrapper">
                    <FiCalendar className="cp-input-icon" />
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="cp-field">
                  <label>End Date</label>
                  <div className="cp-input-wrapper">
                    <FiCalendar className="cp-input-icon" />
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="cp-field">
                  <label>Number of Days</label>
                  <select 
                    value={formData.numDays}
                    onChange={(e) => setFormData({...formData, numDays: e.target.value})}
                  >
                    <option>3 Nights / 4 Days</option>
                    <option>4 Nights / 5 Days</option>
                    <option>5 Nights / 6 Days</option>
                  </select>
                </div>
                <div className="cp-field">
                  <label>Guests</label>
                  <div className="cp-input-wrapper">
                    <FiUsers className="cp-input-icon" />
                    <input 
                      type="number" 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Hotel Preference */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <MdOutlineHotel className="cp-icon" style={{ color: THEME.colors.primary }} /> Hotel Preference
              </h2>
              <div className="cp-card-group">
                {[
                  { id: 'Budget', label: 'Budget', desc: 'Comfortable & Affordable' },
                  { id: 'Standard', label: 'Standard', desc: 'Best Value for Money' },
                  { id: 'Luxury', label: 'Luxury', desc: 'Premium Experience' }
                ].map((option) => (
                  <div 
                    key={option.id}
                    className={`cp-pref-card ${formData.hotelPreference === option.id ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, hotelPreference: option.id})}
                  >
                    <div className="cp-card-icon">
                      <MdOutlineHotel />
                    </div>
                    <div className="cp-card-text">
                      <h3>{option.label}</h3>
                      <p>{option.desc}</p>
                    </div>
                    {formData.hotelPreference === option.id && (
                      <div className="cp-card-check">
                        <FiCheck size={12} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Activities */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <MdOutlineLocalActivity className="cp-icon" style={{ color: THEME.colors.primary }} /> Activities <span className="cp-subtitle">(Select all that interest you)</span>
              </h2>
              <div className="cp-tag-group">
                {[
                  'Auroville & Matrimandir', 'French Quarter Walk', 'Paradise Beach', 
                  'Scuba Diving', 'Kayaking', 'Candle Light Dinner', 'Heritage Tour'
                ].map((activity) => (
                  <label key={activity} className={`cp-tag ${formData.activities.includes(activity) ? 'active' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={formData.activities.includes(activity)}
                      onChange={() => handleActivityToggle(activity)}
                    />
                    {activity}
                  </label>
                ))}
              </div>
            </section>

            {/* Section: Meal Preference */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <MdRestaurant className="cp-icon" style={{ color: THEME.colors.primary }} /> Meal Preference
              </h2>
              <div className="cp-radio-group">
                {['Breakfast Only', 'Half Board (Breakfast + Dinner)', 'Full Board (All Meals)'].map((meal) => (
                  <label key={meal} className="cp-radio-label">
                    <input 
                      type="radio" 
                      name="meal" 
                      value={meal}
                      checked={formData.mealPreference === meal}
                      onChange={(e) => setFormData({...formData, mealPreference: e.target.value})}
                    />
                    <span>{meal}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Section: Special Requirements */}
            <section className="cp-section">
              <h2 className="cp-section-title" style={{ color: THEME.colors.primary }}>
                <FiInfo className="cp-icon" style={{ color: THEME.colors.primary }} /> Special Requirements
              </h2>
              <textarea 
                placeholder="Any special requests? (e.g., Honeymoon setup, Early check-in, Veg food, etc.)"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
              ></textarea>
            </section>

            <footer className="cp-footer-actions">
                <button className="cp-reset-btn" onClick={() => setFormData({
                  destination: 'Pondicherry',
                  placesToVisit: '',
                  startDate: '',
                  endDate: '',
                  numDays: '3 Nights / 4 Days',
                  guests: 1,
                  hotelPreference: 'Standard',
                  activities: [],
                  mealPreference: 'Breakfast Only',
                  specialRequirements: ''
                })}>Reset</button>
                <button 
                  className="cp-submit-btn" 
                  style={{ backgroundColor: THEME.colors.accent }}
                  onClick={() => setIsSuccessModalOpen(true)}
                >
                  Submit Request
                </button>
            </footer>
          </div>
        </div>

        {/* Success Modal */}
        <RequestSuccessModal 
          isOpen={isSuccessModalOpen} 
          onClose={() => setIsSuccessModalOpen(false)}
          referenceId="PKG1023"
          onViewRequests={() => {
            setIsSuccessModalOpen(false);
            onNavigateToRequests();
          }}
          onGoHome={() => {
            setIsSuccessModalOpen(false);
            onBack(); // Go back to packages/home
          }}
        />

        {/* Sidebar Summary */}
        <aside className="cp-sidebar">
          <div className="cp-summary-card">
            <h3 style={{ color: THEME.colors.primary }}>Your Summary</h3>
            <ul className="cp-summary-list">
              <li>
                <div className="cp-summary-item">
                  <FiMapPin className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Destination</span>
                    <span className="value">{formData.destination}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <FiCalendar className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Dates</span>
                    <span className="value">{formData.startDate} - {formData.endDate}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <FiCalendar className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Duration</span>
                    <span className="value">{formData.numDays}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <FiUsers className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Guests</span>
                    <span className="value">{formData.guests} Adults</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <MdOutlineHotel className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Hotel Preference</span>
                    <span className="value">{formData.hotelPreference}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <MdOutlineLocalActivity className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Activities</span>
                    <span className="value">{formData.activities.length} Selected</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cp-summary-item">
                  <MdRestaurant className="cp-summary-icon" />
                  <div className="cp-summary-info">
                    <span className="label">Meal Preference</span>
                    <span className="value">{formData.mealPreference}</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cp-price-box">
              <span className="price-label">Estimated Price</span>
              <div className="cp-price-value" style={{ color: THEME.colors.primary }}>
                {formatCurrency(18999)} /-
              </div>
              <span className="price-per">Per Person</span>
            </div>

            <div className="cp-badge">
              <div className="cp-badge-icon"><FiCheck /></div>
              <div className="cp-badge-text">
                <strong>No Hidden charges</strong>
                <span>100% transparent pricing</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CustomizePackage;
