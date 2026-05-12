import React, { useState } from 'react';
import { FiX, FiMapPin, FiCalendar, FiUsers, FiBriefcase, FiTarget, FiCoffee, FiInfo, FiCheck } from 'react-icons/fi';
import { MdOutlineHotel, MdOutlineLocalActivity, MdRestaurant } from 'react-icons/md';
import './CustomizePackageModal.css';

const CustomizePackageModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    destination: 'Pondicherry',
    placesToVisit: '',
    startDate: '2025-05-24',
    endDate: '2025-05-27',
    numDays: '3 Nights / 4 Days',
    guests: 2,
    hotelPreference: 'Standard',
    activities: ['Auroville & Matrimandir', 'French Quarter Walk', 'Paradise Beach', 'Candle Light Dinner'],
    mealPreference: 'Breakfast Only',
    specialRequirements: ''
  });

  if (!isOpen) return null;

  const handleActivityToggle = (activity) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  return (
    <div className="cpm-overlay">
      <div className="cpm-container">
        <button className="cpm-close" onClick={onClose}>
          <FiX size={24} />
        </button>

        <div className="cpm-main-content">
          <header className="cpm-header">
            <h1>Customize Your Package</h1>
            <p>Tell us your preferences and we'll create a perfect trip for you.</p>
          </header>

          <div className="cpm-scroll-area">
            {/* Section: Destination & Preferences */}
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <FiMapPin className="cpm-icon" /> Destination & Preferences
              </h2>
              <div className="cpm-row">
                <div className="cpm-field">
                  <label>Destination</label>
                  <div className="cpm-input-wrapper">
                    <FiMapPin className="cpm-input-icon" />
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
                <div className="cpm-field flex-2">
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
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <FiCalendar className="cpm-icon" /> Travel Details
              </h2>
              <div className="cpm-row grid-4">
                <div className="cpm-field">
                  <label>Start Date</label>
                  <div className="cpm-input-wrapper">
                    <FiCalendar className="cpm-input-icon" />
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="cpm-field">
                  <label>End Date</label>
                  <div className="cpm-input-wrapper">
                    <FiCalendar className="cpm-input-icon" />
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="cpm-field">
                  <label>Number of Days</label>
                  <select 
                    value={formData.numDays}
                    onChange={(e) => setFormData({...formData, numDays: e.target.value})}
                  >
                    <option>2 Nights / 3 Days</option>
                    <option>3 Nights / 4 Days</option>
                    <option>4 Nights / 5 Days</option>
                  </select>
                </div>
                <div className="cpm-field">
                  <label>Guests</label>
                  <div className="cpm-input-wrapper">
                    <FiUsers className="cpm-input-icon" />
                    <input 
                      type="number" 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Hotel Preference */}
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <MdOutlineHotel className="cpm-icon" /> Hotel Preference
              </h2>
              <div className="cpm-card-group">
                {[
                  { id: 'Budget', label: 'Budget', desc: 'Comfortable & Affordable', icon: <MdOutlineHotel /> },
                  { id: 'Standard', label: 'Standard', desc: 'Best Value for Money', icon: <MdOutlineHotel /> },
                  { id: 'Luxury', label: 'Luxury', desc: 'Premium Experience', icon: <MdOutlineHotel /> }
                ].map((option) => (
                  <div 
                    key={option.id}
                    className={`cpm-pref-card ${formData.hotelPreference === option.id ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, hotelPreference: option.id})}
                  >
                    <div className="cpm-card-icon">
                      {option.icon}
                    </div>
                    <div className="cpm-card-text">
                      <h3>{option.label}</h3>
                      <p>{option.desc}</p>
                    </div>
                    {formData.hotelPreference === option.id && (
                      <div className="cpm-card-check">
                        <FiCheck size={12} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Activities */}
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <MdOutlineLocalActivity className="cpm-icon" /> Activities <span className="cpm-subtitle">(Select all that interest you)</span>
              </h2>
              <div className="cpm-tag-group">
                {[
                  'Auroville & Matrimandir', 'French Quarter Walk', 'Paradise Beach', 
                  'Scuba Diving', 'Kayaking', 'Candle Light Dinner', 'Heritage Tour'
                ].map((activity) => (
                  <label key={activity} className={`cpm-tag ${formData.activities.includes(activity) ? 'active' : ''}`}>
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
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <MdRestaurant className="cpm-icon" /> Meal Preference
              </h2>
              <div className="cpm-radio-group">
                {['Breakfast Only', 'Half Board (Breakfast + Dinner)', 'Full Board (All Meals)'].map((meal) => (
                  <label key={meal} className="cpm-radio-label">
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
            <section className="cpm-section">
              <h2 className="cpm-section-title">
                <FiInfo className="cpm-icon" /> Special Requirements
              </h2>
              <textarea 
                placeholder="Any special requests? (e.g., Honeymoon setup, Early check-in, Veg food, etc.)"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({...formData, specialRequirements: e.target.value})}
              ></textarea>
            </section>
          </div>

          <footer className="cpm-footer">
            <button className="cpm-reset-btn" onClick={() => setFormData({
              destination: 'Pondicherry',
              placesToVisit: '',
              startDate: '',
              endDate: '',
              numDays: '',
              guests: 1,
              hotelPreference: 'Standard',
              activities: [],
              mealPreference: 'Breakfast Only',
              specialRequirements: ''
            })}>Reset</button>
            <button className="cpm-submit-btn">Submit Request</button>
          </footer>
        </div>

        {/* Sidebar Summary */}
        <aside className="cpm-sidebar">
          <div className="cpm-summary-card">
            <h3>Your Summary</h3>
            <ul className="cpm-summary-list">
              <li>
                <div className="cpm-summary-item">
                  <FiMapPin className="cpm-summary-icon" />
                  <div>
                    <span className="label">Destination</span>
                    <span className="value">{formData.destination}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <FiCalendar className="cpm-summary-icon" />
                  <div>
                    <span className="label">Dates</span>
                    <span className="value">{formData.startDate} - {formData.endDate}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <FiCalendar className="cpm-summary-icon" />
                  <div>
                    <span className="label">Duration</span>
                    <span className="value">{formData.numDays}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <FiUsers className="cpm-summary-icon" />
                  <div>
                    <span className="label">Guests</span>
                    <span className="value">{formData.guests} Adults</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <MdOutlineHotel className="cpm-summary-icon" />
                  <div>
                    <span className="label">Hotel Preference</span>
                    <span className="value">{formData.hotelPreference}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <MdOutlineLocalActivity className="cpm-summary-icon" />
                  <div>
                    <span className="label">Activities</span>
                    <span className="value">{formData.activities.length} Selected</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="cpm-summary-item">
                  <MdRestaurant className="cpm-summary-icon" />
                  <div>
                    <span className="label">Meal Preference</span>
                    <span className="value">{formData.mealPreference}</span>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cpm-price-box">
              <span className="price-label">Estimated Price</span>
              <div className="price-value">₹18,999 /-</div>
              <span className="price-per">Per Person</span>
              <p className="price-note">* Final price may vary based on availability.</p>
            </div>

            <div className="cpm-badge">
              <div className="cpm-badge-icon"><FiCheck /></div>
              <div className="cpm-badge-text">
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

export default CustomizePackageModal;
