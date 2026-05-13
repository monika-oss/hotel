import { useState, useEffect } from "react";
import "./PackageDetail.css";
import Navbar from "./components/Navbar";
import {
  FiMapPin, FiCheckCircle, FiChevronLeft,
  FiStar, FiClock, FiHome, FiTruck, FiCoffee, FiUser,
  FiMessageCircle, FiHeart, FiShare2, FiShield, FiPhone, FiCamera,
  FiTag, FiArrowRight, FiUsers, FiPhoneCall, FiRefreshCw, FiHeadphones,
  FiMessageSquare, FiChevronRight, FiChevronDown, FiCalendar
} from "react-icons/fi";

import roomImg from "./assets/images/room.png";
import foodImg from "./assets/images/food.png";
import beachImg from "./assets/images/beach.png";
import poolImg from "./assets/images/pool.png";

const PackageDetail = ({ pkg, onBack }) => {
  const [mainImage, setMainImage] = useState(pkg.image);
  const [thumbnails, setThumbnails] = useState([roomImg, foodImg, beachImg, poolImg]);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset images if pkg changes
    setMainImage(pkg.image);
    setThumbnails([roomImg, foodImg, beachImg, poolImg]);
  }, [pkg]);

  if (!pkg) return null;

  const handleImageSwap = (index) => {
    const newThumbnails = [...thumbnails];
    const oldMain = mainImage;
    const newMain = thumbnails[index];
    
    newThumbnails[index] = oldMain;
    
    setMainImage(newMain);
    setThumbnails(newThumbnails);
  };

  // Calculate Date limits for the date picker (min: today, max: 6 months from today)
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  const maxDateObj = new Date(today);
  maxDateObj.setMonth(maxDateObj.getMonth() + 6);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  return (
    <div className="detail-page">
      <Navbar />

      {/* ── Top Bar (Back button + Actions) ── */}
      <div className="detail-topbar">
        <div className="detail-topbar-inner">
          <button onClick={onBack} className="detail-back-btn">
            <FiChevronLeft size={16} /> Explore All Packages
          </button>
          
          <div className="detail-topbar-actions">
            <button className="d-action-btn">
              <FiShare2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Image Grid ── */}
      <div className="detail-img-section">
        <div className="detail-img-inner">
          <div className="detail-img-grid">
            <div className="d-img-main">
              <img src={mainImage} alt={pkg.title} />
              <span className="d-img-badge">{pkg.badge}</span>
              
              <div className="detail-img-actions">
                {/* Heart moved to title area, keeping container for potential future overlay needs or just removing if empty */}
              </div>
            </div>
            <div className="d-img-sub-grid">
              {thumbnails.map((img, i) => (
                <div 
                  key={i} 
                  className="d-img-sub-cell"
                  onMouseEnter={() => handleImageSwap(i)}
                >
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
              <div className="d-header-title-flex">
                <h1 className="d-header-title">{pkg.title}</h1>
                <button
                  className={`d-title-wishlist-btn ${wishlisted ? "wishlisted" : ""}`}
                  onClick={() => setWishlisted(!wishlisted)}
                >
                  <FiHeart fill={wishlisted ? "#ef4444" : "none"} color={wishlisted ? "#ef4444" : "currentColor"} size={22} />
                </button>
              </div>
                <div className="d-header-meta">
                  <span className="d-meta-pill"><FiClock size={14} /> {pkg.badge}</span>
                  <span className="d-meta-pill"><FiMapPin size={14} /> {pkg.location.split(",")[0]}</span>
                  <span className="d-meta-pill"><FiStar size={14} fill="#eab308" color="#eab308" /> {pkg.rating} Rating</span>
                </div>
              </div>

              <div className="d-grid-two">
                <div className="d-card">
                  <h3 className="d-card-title">The Story</h3>
                  <p className="d-story-text">
                    Step into the timeless charm of Pondicherry's French Quarter, where colonial architecture,
                    vibrant streets, and serene beaches create a perfect blend of culture and relaxation.
                  </p>
                </div>
                <div className="d-card">
                  <h3 className="d-card-title">What's Included</h3>
                  <div className="d-tags-grid">
                    <span className="d-tag-mini"><FiHome size={18} /> Stay</span>
                    <span className="d-tag-mini"><FiCoffee size={18} /> Meals</span>
                    <span className="d-tag-mini"><FiCamera size={18} /> Tours</span>
                    <span className="d-tag-mini"><FiTruck size={18} /> Transport</span>
                  </div>
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
              <div className="d-booking-sidebar-card">
                {/* Header Section */}
                <div className="d-booking-header-navy">
                  <p className="d-header-small-text">Experience starts from</p>
                  <h2 className="d-header-price-main">₹{pkg.price.toLocaleString()}</h2>
                  <p className="d-header-small-text opacity-70">Per person</p>
                  <div className="d-discount-badge-yellow">
                    {pkg.discount}% OFF
                  </div>
                </div>

                {/* Main Content */}
                <div className="d-booking-body-content">
                  <div className="d-date-guest-box">
                    <div className="d-form-field">
                      <label>CHECK IN</label>
                      <div className="d-field-value">
                        <span>dd-mm-yyyy</span>
                        <FiCalendar />
                      </div>
                    </div>
                    <div className="d-field-sep"></div>
                    <div className="d-form-field">
                      <label>GUESTS</label>
                      <div className="d-field-value">
                        <span className="font-bold">2 Adults</span>
                        <FiChevronDown />
                      </div>
                    </div>
                  </div>

                  <button className="d-btn-book-now-orange">
                    Inquire & Book Now <FiArrowRight size={20} />
                  </button>
                  
                  <button className="d-btn-call-expert-blue">
                    <FiPhone size={18} /> Call an Expert
                  </button>

                  <div className="d-trust-badges-row">
                    <div className="d-trust-badge">
                      <div className="d-badge-icon-circle"><FiCheckCircle /></div>
                      <span className="d-badge-label">Verified Properties</span>
                    </div>
                    <div className="d-trust-badge">
                      <div className="d-badge-icon-circle"><FiRefreshCw /></div>
                      <span className="d-badge-label">Flexible Cancellation</span>
                    </div>
                    <div className="d-trust-badge">
                      <div className="d-badge-icon-circle"><FiHeadphones /></div>
                      <span className="d-badge-label">24/7 Support</span>
                    </div>
                  </div>

                  <div className="d-expert-chat-widget">
                    <div className="d-chat-widget-icon">
                      <FiMessageSquare size={20} />
                    </div>
                    <div className="d-chat-widget-text">
                      <h4>Chat with an Expert</h4>
                      <p>Get personalized assistance for your journey.</p>
                    </div>
                    <button className="d-chat-widget-arrow">
                      <FiChevronRight />
                    </button>
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
