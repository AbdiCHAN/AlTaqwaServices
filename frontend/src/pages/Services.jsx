import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";

export default function Services() {
  return (
    <>
      <NavBar />

      <main className="services-page">
        {/* HERO SECTION */}
        <section className="services-hero container">
          <div className="services-hero-grid">
            <div
              className="services-hero-image"
              style={{
                backgroundImage:
                  'url("https://via.placeholder.com/800x450")',
              }}
            />

            <div className="services-hero-content">
              <h1>
                Our Services & <span>Heritage</span>
              </h1>
              <p>
                We blend centuries of tradition with modern luxury to provide a
                spiritual journey that is as seamless as it is sacred.
              </p>
              <button className="primary-btn">Explore Our Services</button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-list container">
          <div className="section-header">
            <h2>Premium Umrah & Hajj Services</h2>
            <div className="divider" />
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🪪</div>
              <h3>Visa Assistance</h3>
              <p>
                Navigate international regulations with ease. Our team handles
                documentation and scheduling for your peace of mind.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">🕌</div>
              <h3>Spiritual Guides</h3>
              <p>
                Travel with experienced scholars who guide you through every
                ritual with clarity and devotion.
              </p>
            </div>

            <div className="service-card">
              <div className="icon">🚗</div>
              <h3>Luxury Transport</h3>
              <p>
                Comfortable private transport between Jeddah, Makkah, and
                Madinah with premium amenities.
              </p>
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="story-section">
          <div className="container story-grid">
            <div
              className="story-image"
              style={{
                backgroundImage:
                  'url("https://via.placeholder.com/600x600")',
              }}
            />

            <div className="story-content">
              <h2>Our Story</h2>
              <blockquote>
                “Since 1984, we have been guardians of a sacred journey —
                ensuring every pilgrim returns with peace and light.”
              </blockquote>

              <p>
                Founded on integrity and devotion, we started as a small family
                service and grew into a trusted global leader in spiritual
                travel.
              </p>

              <div className="stats">
                <div>
                  <strong>40+</strong>
                  <span>Years of Trust</span>
                </div>
                <div>
                  <strong>150k</strong>
                  <span>Pilgrims Served</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
