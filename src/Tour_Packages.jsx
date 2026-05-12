/**
 * TourPackages.jsx
 * Tour Packages Page — Puducherry & Mahabalipuram
 * Uses config.js design tokens: THEME, TYPOGRAPHY, APP_CONFIG, formatCurrency
 */

import { useState } from "react";
import "./Tour_Packages.css";
import {
  FiMapPin, FiCalendar, FiUsers, FiSearch, FiRefreshCw,
  FiHeart, FiChevronRight, FiChevronLeft, FiList, FiGrid,
  FiStar, FiHome, FiTruck, FiCoffee, FiWind,
  FiAnchor, FiSunrise, FiNavigation, FiUser,
  FiCheck, FiCamera, FiLayers, FiX, FiTag
} from "react-icons/fi";
import { MdFilterListAlt } from "react-icons/md";
import { Drawer } from "antd";

import puducherryImg from "./assets/images/puducherry.png";
import mahabalipuramImg from "./assets/images/mahabalipuram.png";
import comboImg from "./assets/images/combo.png";
import aurovilleImg from "./assets/images/auroville.png";

// ─── Config tokens ────────────────────────────────────────────────────────────
const THEME = {
  colors: {
    primary: "#1e3a8a",
    accent: "#eab308",
    error: "#ef4444",
  },
};

const APP_CONFIG = {
  maxGuestsPerRoom: 8,
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    id: 1,
    title: "Puducherry French Riviera",
    location: "White Town, Promenade Beach, Auroville",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    groupSize: "2-10 People",
    groupSizeKey: "2-5",
    theme: "Beach Town",
    themeKey: "beach",
    propertyType: "Heritage",
    hotelStars: 4,
    themeIcon: <FiAnchor />,
    rating: 4.8,
    reviews: 142,
    price: 9999,
    discount: 23,
    badge: "3N / 4D",
    badgeColor: "badge-bestseller",
    photos: 22,
    tags: ["Accommodation", "Breakfast & Dinner", "Sightseeing", "Transport"],
    description: "Experience the charm of Pondicherry with your loved one. Perfect beaches, cafes & romantic vibes.",
    image: puducherryImg,
    destination: "puducherry",
  },
  {
    id: 2,
    title: "Mahabalipuram Shore Temple Trail",
    location: "Shore Temple, Five Rathas, Arjuna's Penance",
    duration: "3 Days / 2 Nights",
    daysCount: 3,
    groupSize: "2-10 People",
    groupSizeKey: "2-5",
    theme: "Heritage",
    themeKey: "heritage",
    propertyType: "Resort",
    hotelStars: 3,
    themeIcon: <FiHome />,
    rating: 4.7,
    reviews: 98,
    price: 7499,
    discount: 21,
    badge: "2N / 3D",
    badgeColor: "badge-bestseller",
    photos: 18,
    tags: ["Accommodation", "Breakfast & Dinner", "Sightseeing", "Transport"],
    description: "Explore the ancient Shore Temple and Five Rathas. A perfect blend of history and coastal beauty.",
    image: mahabalipuramImg,
    destination: "mahabalipuram",
  },
  {
    id: 3,
    title: "Pondy & Mahabalipuram Combo",
    location: "Puducherry, Mahabalipuram, ECR Road",
    duration: "5 Days / 4 Nights",
    daysCount: 5,
    groupSize: "2-10 People",
    groupSizeKey: "6-10",
    theme: "Coastal Drive",
    themeKey: "beach",
    propertyType: "Resort",
    hotelStars: 5,
    themeIcon: <FiNavigation />,
    rating: 4.5,
    reviews: 76,
    price: 13499,
    discount: 21,
    badge: "4N / 5D",
    badgeColor: "badge-bestseller",
    photos: 16,
    tags: ["Accommodation", "Breakfast & Dinner", "Sightseeing", "Transport"],
    description: "The best of both worlds. Explore French colonies and ancient stone carvings in one trip.",
    image: comboImg,
    destination: "both",
  },
  {
    id: 4,
    title: "Auroville & Rock Sculptures Tour",
    location: "Auroville, Mahabalipuram, Kanchipuram",
    duration: "4 Days / 3 Nights",
    daysCount: 4,
    groupSize: "2-10 People",
    groupSizeKey: "2-5",
    theme: "Culture & Nature",
    themeKey: "nature",
    propertyType: "Villa",
    hotelStars: 4,
    themeIcon: <FiSunrise />,
    rating: 4.4,
    reviews: 63,
    price: 10499,
    discount: 22,
    badge: "3N / 4D",
    badgeColor: "badge-bestseller",
    photos: 14,
    tags: ["Accommodation", "Breakfast & Dinner", "Sightseeing", "Transport"],
    description: "Spiritual journey through Auroville combined with the artistic rock sculptures of Mahabalipuram.",
    image: aurovilleImg,
    destination: "both",
  },
];

const NAV_LINKS = ["Home", "Destinations", "Tour Packages", "Offers", "About Us", "Contact Us"];

const TAG_ICONS = {
  "Accommodation": <FiLayers size={14} />,
  "Breakfast & Dinner": <FiCoffee size={14} />,
  "Sightseeing": <FiCamera size={14} />,
  "Transport": <FiNavigation size={14} />,
  "Candle Light Dinner": <FiWind size={14} />,
};

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="star-rating-stars" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          size={13}
          fill={i < full || (i === full && half) ? THEME.colors.accent : "none"}
          stroke={i < full || (i === full && half) ? THEME.colors.accent : "#cbd5e1"}
        />
      ))}
    </span>
  );
};

// ─── Package Card ─────────────────────────────────────────────────────────────
const PackageCard = ({ pkg, wishlisted, onWishlist, onViewDetails }) => {
  return (
    <div className="pkg-card grid-card">
      {/* Image Block */}
      <div className="pkg-img-block">
        <img src={pkg.image} alt={pkg.title} className="pkg-main-img" />
        <span className={`pkg-badge ${pkg.badgeColor}`}>{pkg.badge}</span>
        <button
          onClick={() => onWishlist(pkg.id)}
          className={`pkg-wishlist-btn-floating ${wishlisted ? "wishlisted" : ""}`}
        >
          <FiHeart fill={wishlisted ? THEME.colors.error : "none"} />
        </button>
        <span className="pkg-photo-count"><FiCamera size={12} /> {pkg.photos} Photos</span>
      </div>

      {/* Content Body */}
      <div className="pkg-body">
        <h2 className="pkg-title">{pkg.title}</h2>
        <div className="pkg-subtitle">
          <span className="pkg-loc-text" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FiMapPin size={14} /> {pkg.location.split(",")[0]}
          </span>
          <span className="pkg-sep">|</span>
          <span className="pkg-theme-text">{pkg.theme}</span>
        </div>

        <div className="pkg-amenities-row">
          <div className="amenity-cell">
            <FiHome />
            <span>Stay</span>
          </div>
          <div className="amenity-cell">
            <FiCoffee />
            <span>Breakfast & Dinner</span>
          </div>
          <div className="amenity-cell">
            <FiCamera />
            <span>Sightseeing</span>
          </div>
          <div className="amenity-cell">
            <FiNavigation />
            <span>Transport</span>
          </div>
        </div>

        <div className="pkg-rating-row">
          <StarRating rating={pkg.rating} />
          <span className="pkg-rating-num">{pkg.rating}</span>
          <span className="pkg-sep">|</span>
          <span className="pkg-reviews-count">{pkg.reviews} Reviews</span>
        </div>
      </div>

      {/* Footer / Price */}
      <div className="pkg-footer">
        <div className="pkg-price-info">
          <span className="price-from">From</span>
          <div className="price-amount">
            <span className="currency">₹</span>
            <span className="value">{pkg.price.toLocaleString()}</span>
          </div>
          <span className="price-unit">/ Per Person</span>
        </div>

        {pkg.discount > 0 && (
          <div className="pkg-discount-pill">
            <FiTag size={12} /> {pkg.discount}% OFF
          </div>
        )}

        <button className="view-details-btn-yellow" onClick={() => onViewDetails(pkg)}>
          View Details <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function TourPackages({ onNavigate, onViewDetails, handleOpenCustomize }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // ─── Filter States (Active) ───
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("any");
  const [stars, setStars] = useState({ 5: true, 4: true, 3: false, 2: false, 1: false });
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [inclusions, setInclusions] = useState([]);
  const [groupSize, setGroupSize] = useState("any");
  const [budget, setBudget] = useState(50000);

  // ─── Filter States (Pending/Draft) ───
  const [pDestination, setPDestination] = useState(destination);
  const [pDuration, setPDuration] = useState(duration);
  const [pStars, setPStars] = useState(stars);
  const [pPropertyTypes, setPPropertyTypes] = useState(propertyTypes);
  const [pInclusions, setPInclusions] = useState(inclusions);
  const [pGroupSize, setPGroupSize] = useState(groupSize);
  const [pBudget, setPBudget] = useState(budget);

  // When drawer opens, sync pending states with active states
  const openFilters = () => {
    setPDestination(destination);
    setPDuration(duration);
    setPStars(stars);
    setPPropertyTypes(propertyTypes);
    setPInclusions(inclusions);
    setPGroupSize(groupSize);
    setPBudget(budget);
    setShowFilterDrawer(true);
  };

  const applyFilters = () => {
    setDestination(pDestination);
    setDuration(pDuration);
    setStars(pStars);
    setPropertyTypes(pPropertyTypes);
    setPInclusions(inclusions);
    setGroupSize(pGroupSize);
    setBudget(pBudget);
    setShowFilterDrawer(false);
  };

  const toggleWishlist = (id) =>
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const filtered = PACKAGES.filter((p) => {
    // Search
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());

    // Destination
    const matchDest =
      destination === "all" ||
      p.destination === destination ||
      (destination === "both" && p.destination === "both");

    // Duration
    const matchDuration =
      duration === "any" ||
      (duration === "1-2" && p.daysCount <= 2) ||
      (duration === "3-4" && p.daysCount >= 3 && p.daysCount <= 4) ||
      (duration === "5-6" && p.daysCount >= 5 && p.daysCount <= 6) ||
      (duration === "7+" && p.daysCount >= 7);

    // Budget
    const matchBudget = p.price <= budget;

    // Hotel Stars
    const matchStars = stars[p.hotelStars] === true;

    // Property Type
    const matchProperty = propertyTypes.length === 0 || propertyTypes.includes(p.propertyType);

    // Inclusions
    const matchInclusions = inclusions.length === 0 || inclusions.every((inc) => p.tags.includes(inc));

    // Group Size
    const matchGroup =
      groupSize === "any" ||
      (groupSize === "solo" && p.groupSizeKey === "solo") ||
      (groupSize === "2-5" && p.groupSizeKey === "2-5") ||
      (groupSize === "6-10" && p.groupSizeKey === "6-10") ||
      (groupSize === "10+" && p.groupSizeKey === "10+");

    // Theme
    const matchTheme = true;

    return matchSearch && matchDest && matchDuration && matchBudget && matchStars && matchProperty && matchInclusions && matchGroup && matchTheme;
  }).sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "popular":
        return b.reviews - a.reviews;
      case "latest":
      default:
        return b.id - a.id;
    }
  });

  return (
    <div className="tour-page">

      {/* ── Hero Bar (Breadcrumb outside, Content in Card) ── */}
      <div className="hero-bar-container">
        <div className="breadcrumb outer-breadcrumb">
          Home <span className="sep">/</span> <span className="active">Packages</span>
        </div>
        <div className="hero-bar-card">
          <h1>Holiday Packages</h1>
          <p>Explore our best curated holiday packages to amazing destinations across Puducherry and Mahabalipuram.</p>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="main-layout">
        {/* ── Filters Sidebar (Antd Drawer) ── */}
        <Drawer
          title={
            <div className="filter-drawer-header">
              <MdFilterListAlt size={22} color="#1e3a8a" />
              <span>Filters</span>
            </div>
          }
          placement="right"
          onClose={() => setShowFilterDrawer(false)}
          open={showFilterDrawer}
          width={350}
          className="custom-antd-drawer"
          extra={
            <button
              className="filter-reset-link"
              onClick={() => {
                setPDestination("all");
                setPDuration("any");
                setPStars({ 5: true, 4: true, 3: false, 2: false, 1: false });
                setPPropertyTypes([]);
                setPInclusions([]);
                setPGroupSize("any");
                setPBudget(50000);
              }}
            >
              Reset All
            </button>
          }
        >
          <div className="filter-card">
            {/* Destination */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiMapPin size={16} /> Destination
              </label>
              <select
                className="filter-select"
                value={pDestination}
                onChange={(e) => setPDestination(e.target.value)}
              >
                <option value="all">All Destinations</option>
                <option value="puducherry">Puducherry</option>
                <option value="mahabalipuram">Mahabalipuram</option>
                <option value="both">Both Destinations</option>
              </select>
            </div>

            {/* Duration */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiCalendar size={16} /> Duration
              </label>
              <select
                className="filter-select"
                value={pDuration}
                onChange={(e) => setPDuration(e.target.value)}
              >
                <option value="any">Any Duration</option>
                <option value="1-2">1-2 Days</option>
                <option value="3-4">3-4 Days</option>
                <option value="5-6">5-6 Days</option>
                <option value="7+">7+ Days</option>
              </select>
            </div>

            {/* Budget */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiTag size={16} /> Budget (Per Person)
              </label>
              <input
                type="range"
                min={1000}
                max={50000}
                value={pBudget}
                onChange={(e) => setPBudget(Number(e.target.value))}
                className="filter-range"
              />
              <div className="price-inputs">
                <div className="price-input-wrapper">
                  <span className="price-label">Min</span>
                  <div className="price-box">₹1,000</div>
                </div>
                <div className="price-input-wrapper">
                  <span className="price-label">Max</span>
                  <div className="price-box highlight">₹{pBudget.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Hotel Category */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiStar size={16} /> Hotel Rating
              </label>
              <div className="filter-options-grid">
                {[5, 4, 3, 2, 1].map((s) => (
                  <label key={s} className="star-check-label">
                    <input
                      type="checkbox"
                      checked={pStars[s]}
                      onChange={() => setPStars((prev) => ({ ...prev, [s]: !prev[s] }))}
                    />
                    <span className="stars">{"★".repeat(s)}</span>
                    <span>{s} Star</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiHome size={16} /> Property Type
              </label>
              <div className="filter-options-grid">
                {["Resort", "Heritage", "Villa", "Homestay"].map((type) => (
                  <label key={type} className="star-check-label">
                    <input
                      type="checkbox"
                      checked={pPropertyTypes.includes(type)}
                      onChange={() => setPPropertyTypes((prev) =>
                        prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
                      )}
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiCoffee size={16} /> What's Included
              </label>
              <div className="filter-options-grid">
                {["Breakfast & Dinner", "Transport", "Sightseeing", "Accommodation"].map((inc) => (
                  <label key={inc} className="star-check-label">
                    <input
                      type="checkbox"
                      checked={pInclusions.includes(inc)}
                      onChange={() => setPInclusions((prev) =>
                        prev.includes(inc) ? prev.filter(i => i !== inc) : [...prev, inc]
                      )}
                    />
                    <span>{inc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Group Size */}
            <div className="filter-group">
              <label className="filter-group-label">
                <FiUsers size={12} /> Group Size
              </label>
              <select
                className="filter-select"
                value={pGroupSize}
                onChange={(e) => setPGroupSize(e.target.value)}
              >
                <option value="any">Any Group Size</option>
                <option value="solo">Solo</option>
                <option value="2-5">2-5 People</option>
                <option value="6-10">6-10 People</option>
                <option value="10+">10+ People (max {APP_CONFIG.maxGuestsPerRoom}/room)</option>
              </select>
            </div>


            <button className="apply-btn" onClick={applyFilters}>Apply Filters</button>
          </div>


        </Drawer>

        {/* ── Listings ── */}
        <section className="listings-section">
          {/* Top Bar */}
          <div className="listings-topbar">
            <p className="listings-count">
              <span>{filtered.length} Holiday Packages</span> Found
            </p>
            <div className="topbar-right">
              <div className="search-bar">
                <FiSearch size={14} />
                <input
                  type="text"
                  placeholder="Search holiday packages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                className="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">Latest Added</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="listings-container grid">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">🔍</span>
                <p>No packages found</p>
                <p>Try adjusting your search or filters</p>
              </div>
            ) : (
              filtered.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  wishlisted={wishlist.includes(pkg.id)}
                  onWishlist={toggleWishlist}
                  onViewDetails={onViewDetails}
                />
              ))
            )}
          </div>

          {/* ── Customize Promo Card Banner ── */}
          <div className="custom-promo-card promo-banner">
            <div className="promo-content-left">
              <div className="promo-icon">✨</div>
              <div className="promo-text">
                <h3>Want a Custom Trip?</h3>
                <p>Tell us your preferences and our experts will craft the perfect itinerary for you.</p>
              </div>
            </div>
            <button className="promo-btn" onClick={handleOpenCustomize}>
              Customize Package
            </button>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <p className="pagination-info">
              Showing 1 to {filtered.length} of {filtered.length} packages
            </p>
            <div className="pagination-btns">
              <button className="page-btn"><FiChevronLeft size={14} /></button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`page-btn ${currentPage === n ? "active" : ""}`}
                >
                  {n}
                </button>
              ))}
              <span className="page-dots">...</span>
              <button className="page-btn">6</button>
              <button className="page-btn"><FiChevronRight size={14} /></button>
            </div>
          </div>
        </section>
      </div>

      {/* ── Floating Filter Button ── */}
      <button className="floating-filter-btn" onClick={openFilters}>
        <MdFilterListAlt size={20} /> Filters
      </button>

    </div>
  );
}