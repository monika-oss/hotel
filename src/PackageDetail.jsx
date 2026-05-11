import { useState, useEffect } from "react";
import "./PackageDetail.css";
import {
  FiMapPin, FiCheckCircle, FiChevronLeft,
  FiStar, FiClock, FiHome, FiTruck, FiCoffee, FiUser,
  FiMessageCircle, FiHeart, FiShare2, FiShield, FiPhone
} from "react-icons/fi";

import roomImg from "./assets/images/room.png";
import foodImg from "./assets/images/food.png";
import beachImg from "./assets/images/beach.png";
import poolImg from "./assets/images/pool.png";

const PackageDetail = ({ pkg, onBack }) => {
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pkg) return null;

  const supportingImages = [roomImg, foodImg, beachImg, poolImg];

  // Calculate Date limits for the date picker (min: today, max: 6 months from today)
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDateObj = new Date(today);
  maxDateObj.setMonth(maxDateObj.getMonth() + 6);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  return (
    <div className="detail-page">

      {/* ── Top Bar ── */}
      <div className="detail-topbar">
        <div className="detail-topbar-inner">
          <button onClick={onBack} className="detail-back-btn">
            <FiChevronLeft size={16} /> Explore All Packages
          </button>
          
          <div className="detail-topbar-actions">
            <button
              className={`d-action-btn ${wishlisted ? "wishlisted" : ""}`}
              onClick={() => setWishlisted(!wishlisted)}
            >
              <FiHeart fill={wishlisted ? "#ef4444" : "none"} color={wishlisted ? "#ef4444" : "#fff"} size={16} />
            </button>
            <button className="d-action-btn">
              <FiShare2 size={16} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Image Grid ── */}
      <div className="detail-img-section">
        <div className="detail-img-inner">
          <div className="d-top-breadcrumb">
            Home &rsaquo; Packages &rsaquo; <span>{pkg.title}</span>
          </div>
          <div className="detail-img-grid">
            <div className="d-img-main">
              <img src={pkg.image} alt={pkg.title} />
              <span className="d-img-badge">{pkg.badge}</span>
            </div>
            <div className="d-img-sub-grid">
              {supportingImages.map((img, i) => (
                <div key={i} className="d-img-sub-cell">
                  <img src={img} alt={`Detail ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Body ── */}
      <div className="detail-body">
        <div className="detail-body-inner">
          <div className="detail-two-col">

            {/* Left Column */}
            <div className="detail-left">

              {/* Title & Meta Header */}
              <div className="d-header-card">
                <h1 className="d-header-title">{pkg.title}</h1>
                <div className="d-header-meta">
                  <span className="d-meta-pill"><FiClock size={14} /> {pkg.badge}</span>
                  <span className="d-meta-pill"><FiMapPin size={14} /> {pkg.location.split(",")[0]}</span>
                  <span className="d-meta-pill"><FiStar size={14} fill="#eab308" color="#eab308" /> {pkg.rating} Rating</span>
                </div>
              </div>

              {/* Story */}
              <div className="d-card">
                <h3 className="d-card-title">The Story</h3>
                <p className="d-story-text">
                  Step into the timeless charm of Pondicherry's French Quarter, where colonial architecture,
                  vibrant streets, and serene beaches create a perfect blend of culture, relaxation, and indulgence.
                  Experience the soul of the coast through this hand-picked journey.
                </p>
              </div>

              {/* Tags */}
              <div className="d-card">
                <h3 className="d-card-title">What's Included</h3>
                <div className="d-tags">
                  {pkg.tags.map((tag) => (
                    <span key={tag} className="d-tag"><FiCheckCircle size={13} /> {tag}</span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="d-card">
                <h3 className="d-card-title">Highlights</h3>
                <div className="d-highlights-grid">
                  {[
                    { icon: <FiHome />, title: "Heritage Stays", desc: "Stay in handpicked heritage properties with colonial charm." },
                    { icon: <FiTruck />, title: "Private Transfers", desc: "Enjoy seamless and comfortable private pick-up & drop." },
                    { icon: <FiCoffee />, title: "Fine Dining", desc: "Savor curated culinary experiences and local flavors." },
                    { icon: <FiUser />, title: "Expert Guides", desc: "Explore with knowledgeable local guides." },
                  ].map((h) => (
                    <div key={h.title} className="d-highlight-item">
                      <div className="d-h-icon">{h.icon}</div>
                      <div>
                        <h4 className="d-h-title">{h.title}</h4>
                        <p className="d-h-desc">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="d-card">
                <h3 className="d-card-title">Day-by-Day Itinerary</h3>
                <div className="d-timeline">
                  {[
                    { day: "Day 01", title: "Arrival & Heritage Walk", desc: "Arrive in Pondicherry and check-in to your heritage stay. Explore the French Quarter, visit Aurobindo Ashram and relax at the Promenade Beach in the evening." },
                    { day: "Day 02", title: "Cultural Exploration & Local Flavors", desc: "Visit Auroville, explore local art galleries and boutiques. Enjoy a curated dining experience and soak in the coastal vibes." },
                    { day: "Day 03", title: "Leisure Morning & Departure", desc: "Enjoy a leisurely breakfast, some last-minute shopping, and depart with beautiful memories." },
                  ].map((item, i) => (
                    <div key={i} className="d-t-item">
                      <div className="d-t-dot"></div>
                      <div className="d-t-content">
                        <span className="d-t-day">{item.day}</span>
                        <h4 className="d-t-title">{item.title}</h4>
                        <p className="d-t-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="detail-right">
              <div className="d-sidebar-card">
                <div className="d-price-block">
                  <p className="d-price-label">Experience starts from</p>
                  <div className="d-price-amount">₹{pkg.price.toLocaleString()}</div>
                  <p className="d-price-per">Per person &nbsp;·&nbsp;
                    <span className="d-price-discount">{pkg.discount}% OFF</span>
                  </p>
                </div>

                <div className="d-date-row">
                  <div className="d-date-field">
                    <label className="d-field-label" htmlFor="checkin-date">Check In</label>
                    <input 
                      type="date" 
                      id="checkin-date" 
                      className="d-date-input" 
                      min={minDate}
                      max={maxDate}
                    />
                  </div>
                  <div className="d-date-divider"></div>
                  <div className="d-date-field">
                    <label className="d-field-label" htmlFor="guest-select">Guests</label>
                    <select id="guest-select" className="d-guest-select" defaultValue="2 Adults">
                      <option value="1 Adult">1 Adult</option>
                      <option value="2 Adults">2 Adults</option>
                      <option value="3 Adults">3 Adults</option>
                      <option value="4 Adults">4 Adults</option>
                      <option value="Family">Family (2A + 2C)</option>
                    </select>
                  </div>
                </div>

                <button className="d-book-btn">Inquire &amp; Book Now</button>
                <button className="d-call-btn"><FiPhone size={14} /> Call an Expert</button>

                <div className="d-trust-list">
                  <div className="d-trust-item"><FiCheckCircle size={15} /> Verified Properties</div>
                  <div className="d-trust-item"><FiShield size={15} /> Flexible Cancellation</div>
                  <div className="d-trust-item"><FiClock size={15} /> 24/7 Support</div>
                </div>

                <div className="d-chat-box">
                  <div className="d-chat-text">
                    <h5>Chat with an Expert</h5>
                    <p>Get personalized assistance for your journey.</p>
                  </div>
                  <div className="d-chat-icon">
                    <FiMessageCircle size={20} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
