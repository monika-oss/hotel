/**
 * TourPackages.jsx
 * Tour Packages Page — Puducherry & Mahabalipuram
 * Uses config.js design tokens: THEME, TYPOGRAPHY, APP_CONFIG, formatCurrency
 */

import { useState } from "react";
import "./Tour_Packages.css";
import Navbar from "./components/Navbar";
import FilterDrawer from "./components/FilterDrawer";
import {
  FiMapPin, FiCalendar, FiUsers, FiSearch, FiRefreshCw,
  FiHeart, FiChevronRight, FiChevronLeft, FiList, FiGrid,
  FiStar, FiHome, FiTruck, FiCoffee, FiWind,
  FiAnchor, FiSunrise, FiNavigation, FiUser,
  FiCheck, FiCamera, FiLayers, FiX, FiTag
} from "react-icons/fi";
import { MdFilterListAlt } from "react-icons/md";

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

  // When drawer opens, we now rely on FilterDrawer's internal pending state
  const handleApplyFilters = (newFilters) => {
    setDestination(newFilters.destination);
    setDuration(newFilters.duration);
    setStars(newFilters.stars);
    setPropertyTypes(newFilters.propertyTypes);
    setInclusions(newFilters.inclusions);
    setGroupSize(newFilters.groupSize);
    setBudget(newFilters.budget);
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
      <Navbar />

      {/* ── Hero Bar (Breadcrumb outside, Content in Card) ── */}
      <div className="hero-bar-container">
        <div className="hero-bar-card">
          <h1>Holiday Packages</h1>
          <p>Explore our best curated holiday packages to amazing destinations across Puducherry and Mahabalipuram.</p>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="main-layout">
        {/* ── Filters Sidebar (Separate Component) ── */}
        <FilterDrawer
          isOpen={showFilterDrawer}
          onClose={() => setShowFilterDrawer(false)}
          onApply={handleApplyFilters}
          initialFilters={{
            destination,
            duration,
            stars,
            propertyTypes,
            inclusions,
            groupSize,
            budget
          }}
          maxGuestsPerRoom={APP_CONFIG.maxGuestsPerRoom}
        />

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
      <button className="floating-filter-btn" onClick={() => setShowFilterDrawer(true)}>
        <MdFilterListAlt size={20} /> Filters
      </button>

    </div>
  );
}