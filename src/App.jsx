import { useState, useEffect, useRef } from "react";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFacebookF, FaInstagram, FaYoutube, 
  FaHotel, FaUmbrellaBeach, FaLeaf, FaWater, FaGem, FaCheck, FaTag, FaHeadset, 
  FaUndo, FaLock, FaCoffee, FaHeart, FaUsers, FaStar, FaBuilding, FaShip, FaUtensils, FaGift, FaSun,
  FaPlaceOfWorship, FaArrowRight, FaCalendarAlt, FaUserFriends, FaChevronRight, FaChevronLeft
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ── NAVY & GOLD THEME ───────────────────────────────────────────────
const THEME = {
  colors: {
    navy: "#002b5b",
    navyDark: "#001f42",
    gold: "#fbbf24", // Vibrant Gold/Yellow
    goldDark: "#d97706",
    white: "#ffffff",
    bg: "#fcfcfc",
    text: "#1e293b",
    textLight: "#64748b",
    border: "#e2e8f0",
  },
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

// ── Data (from App.jsx) ──────────────────────────────────────────────
const NAV_LINKS = ["Home", "Hotels", "Rooms", "Offers", "About Us", "Contact Us"];

const DESTINATIONS = [
  { name: "Pondicherry Beach Resorts", count: "200+ Hotels", icon: <FaUmbrellaBeach />, image: "/paradise_beach_pondicherry_1778129673394.png" },
  { name: "White Town Hotels", count: "150+ Hotels", icon: <FaBuilding />, image: "/pondicherry_french_quarter_1778129640175.png" },
  { name: "Auroville Stays", count: "120+ Hotels", icon: <FaLeaf />, image: "/auroville_matrimandir_1778129656161.png" },
  { name: "Mahabalipuram Beach Resorts", count: "180+ Hotels", icon: <FaWater />, image: "/mahabalipuram_luxury_resort_1778130306285.png" },
  { name: "ECR Luxury Resorts", count: "160+ Hotels", icon: <FaGem />, image: "/luxury_hotel_pondicherry_exterior_1778130866428.png" },
  { name: "Temple View Hotels", count: "100+ Hotels", icon: <FaPlaceOfWorship />, image: "/mahabalipuram_shore_temple_1778130236041.png" },
];

const HOTELS = [
  { name: "Ocean Breeze Resort", city: "Pondicherry", rating: 4.7, price: 4999, stars: 5, image: "/luxury_hotel_pondicherry_exterior_1778130866428.png" },
  { name: "White Town Residency", city: "Pondicherry", rating: 4.6, price: 3499, stars: 4, image: "/pondicherry_french_quarter_1778129640175.png" },
  { name: "Bay View Stay", city: "Pondicherry", rating: 4.5, price: 4299, stars: 4, image: "/mahabalipuram_luxury_resort_1778130306285.png" },
  { name: "Auro Beach Resort", city: "Pondicherry", rating: 4.7, price: 4299, stars: 5, image: "/paradise_beach_pondicherry_1778129673394.png" },
  { name: "Shore Temple Resort", city: "Mahabalipuram", rating: 4.8, price: 4799, stars: 5, image: "/mahabalipuram_shore_temple_1778130236041.png" },
  { name: "Sea Rock Resort", city: "Mahabalipuram", rating: 4.5, price: 3999, stars: 4, image: "/mahabalipuram_five_rathas_1778130252048.png" },
];

const DEALS = [
  { title: "Weekend Escape", desc: "Flat 30% OFF on all bookings", badge: "30% OFF", icon: <FaSun /> },
  { title: "Resort Offer", desc: "Free Breakfast on bookings above ₹5000", badge: "FREE BFAST", icon: <FaUtensils /> },
  { title: "Stay 3 Get 40%", desc: "Stay 3 Nights & Get 40% OFF", badge: "40% OFF", icon: <FaGift /> },
];

const WHY_US = [
  { icon: <FaCheck />, title: "Verified Hotels", desc: "Handpicked hotels for a safe stay." },
  { icon: <FaTag />, title: "Best Price", desc: "We ensure you get the best value." },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Support team is always here." },
  { icon: <FaUndo />, title: "Free Cancellation", desc: "Cancel booking free of charge." },
];

// ── Main Component ────────────────────────────────────────────────────
export default function SRBNavyGoldUI() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: THEME.colors.bg, color: THEME.colors.text, fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700;900&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .btn-gold {
          background: ${THEME.colors.gold}; color: ${THEME.colors.navy}; border: none;
          padding: 14px 28px; border-radius: 6px; font-weight: 700;
          cursor: pointer; transition: 0.3s; font-size: 14px;
        }
        .btn-gold:hover { background: ${THEME.colors.goldDark}; color: #fff; transform: translateY(-2px); }

        .btn-navy {
          background: ${THEME.colors.navy}; color: #fff; border: none;
          padding: 14px 28px; border-radius: 6px; font-weight: 700;
          cursor: pointer; transition: 0.3s; font-size: 14px;
        }
        .btn-navy:hover { background: ${THEME.colors.navyDark}; transform: translateY(-2px); }

        .card-lux {
          background: #fff; border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05); transition: 0.4s;
          border: 1px solid ${THEME.colors.border};
        }
        .card-lux:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: ${THEME.colors.gold}; }

        .search-box {
          background: #fff; padding: 30px; border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;
          align-items: end; border: 1px solid ${THEME.colors.border};
        }

        .nav-link {
          color: ${scrolled ? THEME.colors.navy : '#fff'}; text-decoration: none;
          font-weight: 600; font-size: 14px; transition: 0.3s;
        }
        .nav-link:hover { color: ${THEME.colors.gold}; }

        .tag-lux {
          color: ${THEME.colors.goldDark}; font-weight: 800; letter-spacing: 2px;
          font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 10px;
        }
      `}</style>

      {/* ── HEADER ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        padding: scrolled ? "15px 5%" : "25px 5%",
        transition: "0.4s", 
        borderBottom: scrolled ? `1px solid ${THEME.colors.border}` : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none"
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 28, color: scrolled ? THEME.colors.navy : "#fff", letterSpacing: 1, cursor: "pointer" }}>
            SRB<span style={{ color: THEME.colors.gold }}>LUXURY</span>
          </div>
          <div style={{ display: "flex", gap: 35, alignItems: "center" }}>
            {NAV_LINKS.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
          </div>
          <button className="btn-gold" style={{ boxShadow: "0 4px 15px rgba(251, 191, 36, 0.3)" }}>Reserve Now</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        height: "90vh", background: `${THEME.colors.navy} url('/pondicherry_promenade_1778130287507.png') center/cover no-repeat`,
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
        backgroundBlendMode: "overlay", color: "#fff", textAlign: "center"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,43,91,0.6), rgba(0,43,91,0.3))" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 5%", width: "100%" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <span className="tag-lux" style={{ color: THEME.colors.gold, fontSize: 14, fontWeight: 700, marginBottom: 15 }}>Experience Perfection</span>
            <h1 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "clamp(48px, 8vw, 82px)", 
              fontWeight: 900, 
              marginBottom: 25, 
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>
              The Gold Standard of <br /> Coastal Hospitality
            </h1>
            <p style={{ 
              fontSize: 20, 
              opacity: 0.95, 
              maxWidth: 700, 
              margin: "0 auto 50px", 
              lineHeight: 1.6,
              textShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}>
              Discover premium hotels and resorts curated for the discerning traveler in Pondicherry & Mahabalipuram.
            </p>
            
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="search-box" style={{ 
                gridTemplateColumns: "repeat(4, 1fr) auto",
                padding: "20px 30px",
                borderRadius: "12px"
              }}>
                {["Location", "Check In", "Check Out", "Guests"].map((label, i) => (
                  <div key={label} style={{ textAlign: "left" }}>
                    <label style={{ fontSize: 11, fontWeight: 800, color: THEME.colors.textLight, textTransform: "uppercase", marginBottom: 8, display: "block" }}>{label}</label>
                    <input 
                      placeholder={i === 0 ? "Where to?" : ""} 
                      type={label.includes("Check") ? "date" : "text"} 
                      style={{ 
                        padding: "12px", 
                        borderRadius: "6px", 
                        border: `1.5px solid ${THEME.colors.border}`, 
                        width: "100%", 
                        outline: "none",
                        fontSize: 14,
                        color: THEME.colors.text
                      }} 
                    />
                  </div>
                ))}
                <button className="btn-navy" style={{ height: "46px", padding: "0 30px", display: "flex", alignItems: "center", gap: 10 }}>
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="tag-lux">The Collection</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: THEME.colors.navy }}>Popular Destinations</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
          {DESTINATIONS.slice(0, 6).map((d, i) => (
            <div key={d.name} className="card-lux">
              <div style={{ height: 280, overflow: "hidden" }}>
                <img src={d.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div style={{ padding: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: THEME.colors.navy }}>{d.name}</h3>
                  <p style={{ color: THEME.colors.textLight, fontSize: 14 }}>{d.count} Properties</p>
                </div>
                <div style={{ color: THEME.colors.gold, fontSize: 24 }}>{d.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOTELS ── */}
      <section style={{ padding: "100px 5%", background: "#f8f9fa" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 50 }}>
          <div>
            <span className="tag-lux">Featured Stays</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: THEME.colors.navy }}>Top Rated Hotels</h2>
          </div>
          <button style={{ background: "none", border: `1.5px solid ${THEME.colors.navy}`, color: THEME.colors.navy, padding: "10px 24px", borderRadius: 6, fontWeight: 700, cursor: "pointer" }}>View All Hotels</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
          {HOTELS.slice(0, 3).map((h, i) => (
            <div key={h.name} className="card-lux">
              <div style={{ height: 240, overflow: "hidden" }}>
                <img src={h.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
              </div>
              <div style={{ padding: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: THEME.colors.navy }}>{h.name}</h3>
                  <div style={{ color: THEME.colors.gold }}>★ {h.rating}</div>
                </div>
                <div style={{ color: THEME.colors.textLight, fontSize: 14, marginBottom: 25 }}><FaMapMarkerAlt /> {h.city}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: `1px solid ${THEME.colors.border}` }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: THEME.colors.navy }}>{formatCurrency(h.price)}</div>
                  <button className="btn-gold" style={{ padding: "8px 16px", fontSize: 12 }}>Book Room</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: THEME.colors.navy, color: "#fff", padding: "80px 5% 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 60, marginBottom: 60 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 24, color: THEME.colors.gold, marginBottom: 25 }}>SRB LUXURY</div>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>The definitive standard for luxury travel in South India. Curated experiences since 2010.</p>
            <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
              <FaFacebookF /> <FaInstagram /> <FaXTwitter /> <FaYoutube />
            </div>
          </div>
          <div>
            <h4 style={{ color: THEME.colors.gold, marginBottom: 25, fontSize: 14, letterSpacing: 2 }}>DISCOVER</h4>
            {NAV_LINKS.slice(0, 4).map(l => <div key={l} style={{ marginBottom: 12, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{l}</div>)}
          </div>
          <div>
            <h4 style={{ color: THEME.colors.gold, marginBottom: 25, fontSize: 14, letterSpacing: 2 }}>SUPPORT</h4>
            {["Contact Us", "Privacy Policy", "Terms of Use", "FAQ"].map(l => <div key={l} style={{ marginBottom: 12, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{l}</div>)}
          </div>
          <div>
            <h4 style={{ color: THEME.colors.gold, marginBottom: 25, fontSize: 14, letterSpacing: 2 }}>OFFICE</h4>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.8 }}>
              123 Beach Road, White Town<br />
              Pondicherry - 605001<br />
              +91 9876543210
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 40, color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
          © 2026 SRB LUXURY TRAVELS. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
