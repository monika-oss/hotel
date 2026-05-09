import { useState, useEffect } from "react";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaStar, FaChevronRight, FaRegHeart, FaRegCalendarAlt, FaUserFriends,
  FaUmbrellaBeach, FaHotel, FaLeaf, FaWater, FaGem, FaBuilding, FaPlaceOfWorship,
  FaCheckCircle, FaTag, FaHeadset, FaUndo, FaLock, FaCoffee, FaShip, FaUsers
} from "react-icons/fa";
import { THEME, APP_CONFIG, formatCurrency } from "./config";

// ── DATA ─────────────────────────────────────────────────────────────
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
  { title: "Weekend Escape Pondicherry", desc: "Flat 30% OFF on all bookings", badge: "30% OFF", location: "Pondicherry" },
  { title: "Beach Resort Offer Mahabalipuram", desc: "Free Breakfast on bookings above ₹5000", badge: "FREE BFAST", location: "Mahabalipuram" },
  { title: "Long Stay Special", desc: "Stay 3 Nights & Get 40% OFF", badge: "40% OFF", location: "All Locations" },
];

const WHY_US = [
  { icon: <FaCheckCircle />, title: "Verified Hotels", desc: "Handpicked & verified hotels for a safe stay." },
  { icon: <FaTag />, title: "Best Price Guarantee", desc: "We ensure you get the best price every time." },
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Our customer support team is always here." },
  { icon: <FaUndo />, title: "Free Cancellation", desc: "Cancel your booking free of charge." },
  { icon: <FaLock />, title: "Secure Payments", desc: "Your payments are safe and encrypted." },
];

const EXPLORE_CATS = [
  { name: "Beaches", desc: "Explore beautiful beaches", icon: <FaUmbrellaBeach /> },
  { name: "Cafes & Culture", desc: "Experience local cafes & culture", icon: <FaCoffee /> },
  { name: "Water Activities", desc: "Enjoy exciting water activities", icon: <FaShip /> },
  { name: "Heritage Places", desc: "Visit historic & iconic heritage spots", icon: <FaPlaceOfWorship /> },
  { name: "Couple Packages", desc: "Romantic getaways for couples", icon: <FaRegHeart /> },
  { name: "Family Resorts", desc: "Perfect stays for families", icon: <FaUsers /> },
];

// ── MAIN COMPONENT ───────────────────────────────────────────────────
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#FFFFFF", color: "#1A202C", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
        
        .btn-accent {
          background: ${THEME.colors.accent}; color: #fff; border: none;
          padding: 12px 24px; border-radius: 4px; font-weight: 700;
          cursor: pointer; transition: 0.3s; font-size: 14px;
        }
        .btn-accent:hover { background: ${THEME.colors.accentHover}; transform: translateY(-2px); }

        .btn-outline-white {
          background: none; border: 1.5px solid #fff; color: #fff;
          padding: 10px 20px; border-radius: 4px; font-weight: 600;
          cursor: pointer; transition: 0.3s; font-size: 14px;
        }
        .btn-outline-white:hover { background: #fff; color: ${THEME.colors.primary}; }

        .btn-outline-navy {
          background: none; border: 1.5px solid ${THEME.colors.primary}; color: ${THEME.colors.primary};
          padding: 10px 20px; border-radius: 4px; font-weight: 600;
          cursor: pointer; transition: 0.3s; font-size: 14px;
        }
        .btn-outline-navy:hover { background: ${THEME.colors.primary}; color: #fff; }

        .card {
          background: #fff; border: 1px solid #E2E8F0; border-radius: 8px;
          overflow: hidden; transition: 0.3s; position: relative;
        }
        .card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.06); }

        .nav-link {
          color: #fff; text-decoration: none; font-weight: 500; font-size: 15px;
          transition: 0.2s; position: relative; padding-bottom: 5px; opacity: 0.9;
        }
        .nav-link:hover { opacity: 1; color: ${THEME.colors.accent}; }
        .nav-link.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2.5px;
          background: ${THEME.colors.accent}; border-radius: 10px;
        }

        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-up { animation: slideUp 0.6s ease-out forwards; }
      `}</style>

      {/* ── TOPBAR ── */}
      <div style={{ background: THEME.colors.accent, height: "5px", width: "100%" }} />
      
      {/* ── HEADER ── */}
      <header style={{ 
        background: THEME.colors.primaryDark, 
        position: scrolled ? "fixed" : "relative",
        top: 0, left: 0, right: 0, zIndex: 1000,
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.2)" : "none",
        transition: "0.4s",
        borderBottom: `1px solid rgba(255,255,255,0.05)`
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: scrolled ? "70px" : "90px" }}>
          <div style={{ cursor: "pointer" }}>
            <div style={{ fontWeight: 900, fontSize: 24, color: "#fff", lineHeight: 1, letterSpacing: -0.5 }}>
              SRB <span style={{ color: THEME.colors.accent }}>LUXURY</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>Hotels • Resorts • Stays</div>
          </div>
          
          <div style={{ display: "flex", gap: 35 }}>
            {NAV_LINKS.map((l, i) => (
              <a key={l} href="#" className={`nav-link ${i === 0 ? "active" : ""}`} style={{ fontSize: 14, fontWeight: 600 }}>{l}</a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: 13 }}>
              <FaPhone size={12} style={{ color: THEME.colors.accent }} /> {APP_CONFIG.supportPhone}
            </div>
            <button className="btn-accent" style={{ padding: "10px 20px", borderRadius: "50px" }}>Login / Sign Up</button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ 
        background: `linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.1)), url('/pondicherry_promenade_1778130287507.png') center/cover`,
        height: "550px", display: "flex", alignItems: "center"
      }}>
        <div className="container" style={{ width: "100%" }}>
          <div className="animate-up" style={{ maxWidth: 600 }}>
            <h1 style={{ fontSize: "64px", fontWeight: 800, color: THEME.colors.primary, lineHeight: 1.1 }}>Find Your <br /><span style={{ color: THEME.colors.secondary }}>Perfect Stay</span></h1>
            <p style={{ fontSize: "20px", color: "#475569", marginTop: 20, fontWeight: 500 }}>Premium hotels and resorts in Pondicherry & Mahabalipuram</p>
          </div>
        </div>
      </section>

      {/* ── SEARCH BOX ── */}
      <div className="container">
        <div style={{
          background: "#fff", padding: "25px", borderRadius: "12px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          border: "1px solid #E2E8F0",
          marginTop: "-60px", position: "relative", zIndex: 10
        }} className="animate-up">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr auto", gap: 20, alignItems: "end" }}>
            <div style={{ textAlign: "left" }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: THEME.colors.primary, textTransform: "uppercase", marginBottom: 10, display: "block" }}>Destination</label>
              <div style={{ position: "relative" }}>
                <FaMapMarkerAlt style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#718096" }} />
                <input placeholder="Search city or hotel" style={{ padding: "14px 14px 14px 40px", borderRadius: "6px", border: "1.5px solid #E2E8F0", width: "100%", outline: "none", fontSize: 14 }} />
              </div>
            </div>
            {["Check-in", "Check-out"].map(label => (
              <div key={label}>
                <label style={{ fontSize: 12, fontWeight: 700, color: THEME.colors.primary, textTransform: "uppercase", marginBottom: 10, display: "block" }}>{label}</label>
                <div style={{ position: "relative" }}>
                  <FaRegCalendarAlt style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#718096" }} />
                  <input type="date" style={{ padding: "14px 14px 14px 40px", borderRadius: "6px", border: "1.5px solid #E2E8F0", width: "100%", outline: "none", fontSize: 14 }} />
                </div>
              </div>
            ))}
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: THEME.colors.primary, textTransform: "uppercase", marginBottom: 10, display: "block" }}>Guests & Rooms</label>
              <div style={{ position: "relative" }}>
                <FaUserFriends style={{ position: "absolute", left: 15, top: "50%", transform: "translateY(-50%)", color: "#718096" }} />
                <select style={{ padding: "14px 14px 14px 40px", borderRadius: "6px", border: "1.5px solid #E2E8F0", width: "100%", outline: "none", fontSize: 14, background: "#fff" }}>
                  <option>2 Adults, 0 Children, 1 Room</option>
                  <option>1 Adult, 0 Children, 1 Room</option>
                </select>
              </div>
            </div>
            <button className="btn-accent" style={{ height: "48px", display: "flex", alignItems: "center", gap: 10 }}>
              <FaSearch /> Search Hotels
            </button>
          </div>
        </div>
      </div>

      {/* ── POPULAR DESTINATIONS ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: THEME.colors.primary }}>Popular Destinations</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: THEME.colors.primary, fontWeight: 700, cursor: "pointer" }}>
              View All <FaChevronRight size={12} />
            </div>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }}>
            {DESTINATIONS.map(d => (
              <div key={d.name} className="card" style={{ textAlign: "center" }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={d.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: THEME.colors.primary, marginBottom: 8 }}>{d.name}</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, color: "#718096", fontSize: 13 }}>
                    <FaHotel size={12} /> {d.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP RATED HOTELS ── */}
      <section style={{ padding: "100px 0", background: "#F4F7FA" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: THEME.colors.primary }}>Top Rated Hotels & Resorts</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: THEME.colors.primary, fontWeight: 700, cursor: "pointer" }}>
              View All <FaChevronRight size={12} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
            {HOTELS.map(h => (
              <div key={h.name} className="card">
                <div style={{ height: 220, position: "relative" }}>
                  <img src={h.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 15, left: 15, background: THEME.colors.primary, color: "#fff", padding: "4px 10px", borderRadius: "4px", fontSize: 12, fontWeights: 700, display: "flex", alignItems: "center", gap: 5 }}><FaStar size={12} color={THEME.colors.accent} /> {h.rating}</div>
                  <button style={{ position: "absolute", top: 15, right: 15, background: "rgba(255,255,255,0.9)", border: "none", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <FaRegHeart color={THEME.colors.primary} />
                  </button>
                </div>
                <div style={{ padding: "25px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{h.name}</h3>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(5)].map((_, i) => <FaStar key={i} size={12} color={i < h.stars ? THEME.colors.accent : "#E2E8F0"} />)}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#718096", fontSize: 14, marginBottom: 20 }}>
                    <FaMapMarkerAlt size={12} /> {h.city}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "1px solid #E2E8F0" }}>
                    <div>
                      <span style={{ fontSize: 22, fontWeight: 800, color: THEME.colors.primary }}>{formatCurrency(h.price)}</span>
                      <span style={{ fontSize: 12, color: "#718096" }}> / night</span>
                    </div>
                    <button className="btn-outline-navy" style={{ padding: "8px 16px" }}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEALS & OFFERS ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, color: THEME.colors.primary, marginBottom: 8 }}>Deals & Offers</h2>
          <p style={{ color: "#718096", fontSize: 16, marginBottom: 40 }}>Exclusive offers for your next coastal getaway</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30 }}>
            {DEALS.map(d => (
              <div key={d.title} className="card" style={{ padding: "30px", background: THEME.colors.primary, color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "220px" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: THEME.colors.accent, textTransform: "uppercase", marginBottom: 10 }}>{d.location}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{d.title}</h3>
                  <div style={{ fontSize: 24, fontWeight: 900, color: THEME.colors.accent }}>{d.badge}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 25 }}>
                  <p style={{ fontSize: 13, opacity: 0.8 }}>{d.desc}</p>
                  <button className="btn-accent" style={{ padding: "8px 16px" }}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "100px 0", background: THEME.colors.primaryDark }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 60 }}>Why Choose Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {WHY_US.map(w => (
              <div key={w.title} style={{ textAlign: "center", color: "#fff" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: THEME.colors.accent, fontSize: 28 }}>
                  {w.icon}
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{w.title}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: THEME.colors.primaryDark, color: "#fff", padding: "100px 0 40px", borderTop: `1px solid ${THEME.colors.accent}` }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.2fr", gap: 50, marginBottom: 80 }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 24, color: "#fff", letterSpacing: -0.5 }}>SRB <span style={{ color: THEME.colors.accent }}>LUXURY</span></div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 25, marginTop: 5 }}>Hotels • Resorts • Stays</div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>The gold standard of coastal hospitality. Discover curated stays across Pondicherry & Mahabalipuram.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
                {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                  <div key={i} style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "0.3s" }}>
                    <Icon size={13} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, color: THEME.colors.accent, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 25 }}>Quick Links</h4>
              {NAV_LINKS.slice(0, 5).map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 15 }}>{l}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontWeight: 800, color: THEME.colors.accent, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 25 }}>Destinations</h4>
              {["Pondicherry", "White Town", "Auroville", "Mahabalipuram", "ECR Resorts"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 15 }}>{l}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontWeight: 800, color: THEME.colors.accent, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 25 }}>Support</h4>
              {["Help Center", "Privacy Policy", "Terms of Use", "Cancellation", "FAQ"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: 15 }}>{l}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontWeight: 800, color: THEME.colors.accent, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 25 }}>Connect</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  <FaPhone size={12} style={{ color: THEME.colors.accent }} /> {APP_CONFIG.supportPhone}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  <FaEnvelope size={12} style={{ color: THEME.colors.accent }} /> {APP_CONFIG.supportEmail}
                </div>
                <div style={{ display: "flex", alignItems: "start", gap: 12, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  <FaMapMarkerAlt size={12} style={{ color: THEME.colors.accent, marginTop: 4 }} /> 
                  123, Beach Road, White Town,<br />Pondicherry - 605001
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            <div>© 2026 SRB LUXURY TRAVELS. ALL RIGHTS RESERVED.</div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {["VISA", "MASTERCARD", "PAYTM", "UPI"].map(p => (
                <span key={p} style={{ letterSpacing: 1, fontWeight: 700, fontSize: 10 }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
