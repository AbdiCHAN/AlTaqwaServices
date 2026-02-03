import React from "react";
import "./PackageDetails.css";
import NavBar from "../components/Navbar";

export default function PackageDetails() {
  return (
    <div className="package-details-page relative flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap bg-emerald-deep px-10 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect fill="white" width="48" height="48" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-xl font-display font-bold">Deluxe Umrah</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link-active" href="#">Packages</a>
            <a className="nav-link" href="#">Hotels</a>
            <a className="nav-link" href="#">About Us</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <div className="hidden lg:flex items-center bg-white/10 rounded-lg px-3 h-10 border border-white/20">
            <span className="material-symbols-outlined text-primary text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search packages"
              className="bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/50"
            />
          </div>
          <button className="btn-primary px-6 py-2 rounded-lg font-bold text-sm tracking-wide">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 py-4">
          <a className="breadcrumb-link" href="#">Home</a>
          <span className="breadcrumb-separator">/</span>
          <a className="breadcrumb-link" href="#">Packages</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Deluxe Umrah Detail</span>
        </div>

        {/* Package Header */}
        <div className="flex flex-wrap justify-between items-end gap-6 py-6">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="package-title">Deluxe Umrah Package</h1>
            <p className="package-subtitle">
              A spiritual journey of a lifetime with premium 5-star comfort and guided tours.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="package-btn brochure-btn">
              <span className="material-symbols-outlined">download</span>
              Brochure
            </button>
            <button className="package-btn share-btn">
              <span className="material-symbols-outlined">share</span>
              Share Package
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <div className="flex-1 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
              <div
                className="gallery-img md:col-span-2 md:row-span-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmxtSI3QPWhKiq-8hsNpUa_R7QAfaw202B62u_L1p3YiNJBENAXYJ4ZEj7Or1oKPStQEcdy8I42HTZ4qekIexeXV7k_MnpYrqwHHh0DU0ZNO3YsEFkRkOCzHw_HQ1IW4aePsJPIzyo1x0df4u7xkRZYttcMkHz-iB-netUlA1Ij-OglM2KrnULTCT5u7c9OUbOmtM6aIuxJvVX1hbR6MEnF9mLfyoopeG463qDKzOx_h88fCG64nPIokwsTpY1TAmEbGZPs1mM4iUw")',
                }}
              />
              <div
                className="gallery-img md:col-span-2"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4_YqbMsiTiGuCvqP-FZXK2FKjai4WuJgEqmFpFQ6Tj2gG5obeRG3KKZ9MZ7rta1wgMBu0GvklDkjeGh-PZMyp0qgLl0OfWdWH4NDRF77YSECQyKI68dmyTw_aoRr9h0oyUqyO0cwVlqXb_tjEtuue_gA8q5sKO7V4PLZsfhaM987Eb9Q9RsOu07MhNWcshei259jzsR8hAWiJyZ7fAIBy6gz1E-k3IuPXTV-o42MYBTDscP1FX7tvLaZqOSZsBSE1udS5sG5sh4HM")',
                }}
              />
              <div
                className="gallery-img"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6QH0GmEhoc3xOc0GG_WyowkqDPaCX49NlW78vNWW2S_7iIiJn1D7rGM2cUjWo72hvMBZn-nVHy7FCRQfC2bTBI1DEiOYkqtwR5Z4SWDUmPWvrEyxyBxMiUbxs650rf4zjvp_9sM2GO8cQkOhMVI44ls-VtXDuOjCntnuOAmVSyDErUiBsqU6kzj8WNTFjGkxRs6hILzJyUQUO0ThGScVdAfpGerarOtU5u7hHxmsR2cgo6MgCUJgTCRD06SxYpssLttPJmO3mZ__b")',
                }}
              />
              <div
                className="gallery-img group relative cursor-pointer"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1ubxUkR8OmL8FrqW6e9Q-pvBVxkZaNDvPb5Fz56TcCZ-Jo16JENg7tFpDXqY9OZJtvwsR6ZA6qL5Ik_vGo-P_ZE9N_OByGJJJG-8rG4p0SeKHVMt8CQfngOB7TUDhWv81l9V7GASTn6LdkJq7nZVlLvizDq0kbB9gHgJDSAxoleT7W8PD_9BgKPS4X1xNRRfkWzPI43quLgOiUmCMwLlKIoowkfdmOMej80gBgEKWXPV6HxJQJabSFJ4blWUng5iyd1JfdihPQuOW")',
                }}
              >
                <div className="gallery-overlay">
                  <span className="gallery-overlay-text">+12 Photos</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="package-tabs flex flex-col bg-white border border-emerald-deep/10 rounded-2xl shadow-sm">
              <div className="tabs flex border-b border-emerald-deep/10 px-6 gap-8 overflow-x-auto">
                <a className="tab tab-active" href="#">Itinerary</a>
                <a className="tab" href="#">Hotels</a>
                <a className="tab" href="#">Inclusions</a>
              </div>
              <div className="p-8">
                {/* Itinerary steps */}
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="step flex gap-6 relative">
                    <div className="step-marker flex flex-col items-center">
                      <div className="step-number">1</div>
                      <div className="step-line"></div>
                    </div>
                    <div className="step-content pb-8">
                      <h3>Arrival in Jeddah & Transfer to Makkah</h3>
                      <p>Upon arrival at King Abdulaziz International Airport, you will be met by our representative and transferred to your 5-star hotel in Makkah in a private luxury GMC.</p>
                      <div className="step-tags flex gap-4">
                        <span className="tag-dinner">Dinner Included</span>
                        <span className="tag-vip">VIP Transport</span>
                      </div>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="step flex gap-6 relative">
                    <div className="step-marker flex flex-col items-center">
                      <div className="step-number">2</div>
                      <div className="step-line"></div>
                    </div>
                    <div className="step-content pb-8">
                      <h3>Umrah Performance & Spiritual Guidance</h3>
                      <p>Guided Umrah performance with a certified scholar. Experience the Tawaf and Sa'i with priority access assistance where applicable.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="step flex gap-6 relative">
                    <div className="step-marker flex flex-col items-center">
                      <div className="step-number step-number-alt">3</div>
                    </div>
                    <div className="step-content">
                      <h3>Makkah Ziyarat</h3>
                      <p>Visit historical sites including Jabal al-Nour, Jabal Thawr, and the Plains of Arafat in private air-conditioned comfort.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[380px]">
            <div className="sidebar sticky top-28 bg-white border border-emerald-deep/10 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-emerald-deep/[0.02] border-b border-emerald-deep/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-emerald-deep/60 text-xs font-bold uppercase tracking-widest">Starting from</span>
                  <span className="bg-gold/20 text-gold text-[10px] px-2 py-0.5 rounded font-bold uppercase">Best Value</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gold font-display">$4,250</span>
                  <span className="text-emerald-deep/40 text-sm">/ person</span>
                </div>
              </div>
              {/* Booking form */}
              <div className="p-6 space-y-6">
                {/* Travel dates */}
                <label className="block">
                  <span className="text-xs font-bold text-emerald-deep/60 uppercase tracking-wider mb-2 block">Travel Dates</span>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-emerald-deep/60">calendar_month</span>
                    <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-emerald-deep/10 rounded-xl focus:ring-primary focus:border-primary text-sm font-medium">
                      <option>October 12 - October 24, 2023</option>
                      <option>November 05 - November 17, 2023</option>
                      <option>December 15 - December 27, 2023</option>
                    </select>
                  </div>
                </label>
                {/* Occupancy */}
                <label className="block">
                  <span className="text-xs font-bold text-emerald-deep/60 uppercase tracking-wider mb-2 block">Occupancy</span>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="occupancy-btn active">
                      <span className="material-symbols-outlined text-[18px]">person</span> Double
                    </button>
                    <button className="occupancy-btn">
                      <span className="material-symbols-outlined text-[18px]">group</span> Triple
                    </button>
                  </div>
                </label>

                {/* Price summary */}
                <div className="price-summary bg-emerald-deep/[0.02] p-4 rounded-xl border border-emerald-deep/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-deep/60">Package Total</span>
                    <span className="font-bold">$4,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-deep/60">Taxes & Fees</span>
                    <span className="font-bold">$185</span>
                  </div>
                  <div className="pt-2 border-t border-emerald-deep/10 flex justify-between items-center">
                    <span className="font-bold">Total Price</span>
                    <span className="text-xl font-black text-emerald-deep">$4,435</span>
                  </div>
                </div>

                <button className="w-full btn-primary py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-2">
                  Book Now <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-[11px] text-center text-emerald-deep/40 font-medium">
                  No credit card required for initial reservation. Guaranteed 5-star service.
                </p>
              </div>

              <div className="p-4 bg-gray-50 flex items-center justify-center gap-6 border-t border-emerald-deep/5">
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-deep/40">
                  <span className="material-symbols-outlined text-sm">verified_user</span> 100% SECURE
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-deep/40">
                  <span className="material-symbols-outlined text-sm">headset_mic</span> 24/7 SUPPORT
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Included Section */}
        <section className="mt-16 py-12 border-t border-emerald-deep/10">
          <h2 className="included-title">What's Included in the Deluxe Experience?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="included-card">
              <span className="material-symbols-outlined">hotel</span>
              <h4>5-Star Accommodations</h4>
              <p>Stay in the closest 5-star hotels to the Haram in Makkah and Masjid Nabawi in Medina.</p>
            </div>
            <div className="included-card">
              <span className="material-symbols-outlined">directions_car</span>
              <h4>Private Luxury Transport</h4>
              <p>Personal GMC Yukon or similar luxury vehicles for all transfers and local ziyarats.</p>
            </div>
            <div className="included-card">
              <span className="material-symbols-outlined">clinical_notes</span>
              <h4>Visa & Insurance</h4>
              <p>Complete Umrah visa processing including comprehensive health insurance coverage.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-deep border-t border-white/10 py-16 mt-20">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 text-primary mb-6">
              <div className="size-6">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-display text-white">Deluxe Umrah</h2>
            </div>
            <p className="text-white/60 max-w-sm mb-6">
              Providing luxury spiritual journeys since 1998. Committed to excellence in every step of your sacred pilgrimage.
            </p>
            <div className="flex gap-4">
              <a className="social-btn" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="social-btn" href="#"><span className="material-symbols-outlined">mail</span></a>
            </div>
          </div>
          <div>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Our Packages</a></li>
              <li><a href="#">Hotel Guide</a></li>
              <li><a href="#">Umrah Guide</a></li>
              <li><a href="#">Visa Services</a></li>
            </ul>
          </div>
          <div>
            <h5 className="footer-title">Support</h5>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30">
          © 2023 Deluxe Umrah Travels. All rights reserved. Registered under Saudi Ministry of Hajj & Umrah.
        </div>
      </footer>
    </div>
  );
}
