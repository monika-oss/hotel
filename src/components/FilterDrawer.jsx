import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import {
  FiMapPin, FiCalendar, FiTag, FiStar,
  FiHome, FiCoffee, FiUsers
} from "react-icons/fi";

/**
 * FilterDrawer Component
 * Extracted from Tour_Packages.jsx for better modularity.
 * Handles internal pending state and applies changes on confirmation.
 */
export default function FilterDrawer({
  isOpen,
  onClose,
  onApply,
  initialFilters,
  maxGuestsPerRoom = 8
}) {
  // ─── Pending States (Drafts) ───────────────────────────────────────────────
  const [pDestination, setPDestination] = useState("all");
  const [pDuration, setPDuration] = useState("any");
  const [pStars, setPStars] = useState({ 5: true, 4: true, 3: false, 2: false, 1: false });
  const [pPropertyTypes, setPPropertyTypes] = useState([]);
  const [pInclusions, setPInclusions] = useState([]);
  const [pGroupSize, setPGroupSize] = useState("any");
  const [pBudget, setPBudget] = useState(50000);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Track window width for responsive drawer width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync pending states with current active filters whenever drawer opens
  useEffect(() => {
    if (isOpen && initialFilters) {
      setPDestination(initialFilters.destination || "all");
      setPDuration(initialFilters.duration || "any");
      setPStars(initialFilters.stars || { 5: true, 4: true, 3: false, 2: false, 1: false });
      setPPropertyTypes(initialFilters.propertyTypes || []);
      setPInclusions(initialFilters.inclusions || []);
      setPGroupSize(initialFilters.groupSize || "any");
      setPBudget(initialFilters.budget || 50000);
    }
  }, [isOpen, initialFilters]);

  const handleReset = () => {
    setPDestination("all");
    setPDuration("any");
    setPStars({ 5: true, 4: true, 3: false, 2: false, 1: false });
    setPPropertyTypes([]);
    setPInclusions([]);
    setPGroupSize("any");
    setPBudget(50000);
  };

  const handleApply = () => {
    onApply({
      destination: pDestination,
      duration: pDuration,
      stars: pStars,
      propertyTypes: pPropertyTypes,
      inclusions: pInclusions,
      groupSize: pGroupSize,
      budget: pBudget,
    });
  };

  return (
    <Drawer
      title={
        <div className="filter-drawer-header">
          <span>Filters</span>
        </div>
      }
      placement="right"
      onClose={onClose}
      open={isOpen}
      width={windowWidth < 600 ? "100%" : 350}
      className="custom-antd-drawer"
      extra={
        <button className="filter-reset-link" onClick={handleReset}>
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
            <option value="10+">10+ People (max {maxGuestsPerRoom}/room)</option>
          </select>
        </div>

        <button className="apply-btn" onClick={handleApply}>
          Apply Filters
        </button>
      </div>
    </Drawer>
  );
}
