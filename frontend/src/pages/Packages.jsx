import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Packages.css";
import PackageDetails from "./PackageDetails";


export default function Packages() {
  return (
    <div className="packages-page flex flex-col min-h-screen">
      <NavBar />

      <main className="max-w-[1440px] mx-auto w-full px-10 pt-32 pb-16 flex-1">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a href="#" className="text-emerald-dark text-sm font-medium hover:underline">Home</a>
          <span className="text-gray-300 text-sm font-medium">/</span>
          <span className="text-black text-sm font-medium">Our Pilgrimage Packages</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-black text-5xl font-extrabold">Our Pilgrimage Packages</h1>
          <p className="text-black text-lg opacity-80 max-w-2xl">
            Discover our curated spiritual journeys designed for comfort and devotion. Premium services for your ultimate spiritual experience.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar Filters */}
          <aside className="w-72 flex-shrink-0">
            <div className="filters-container sticky top-28 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="filters-header bg-emerald-dark text-white p-4 rounded-xl flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Filters</h3>
                  <span className="material-symbols-outlined text-gold">tune</span>
                </div>
                <p className="text-emerald-light/70 text-xs">Refine your search results</p>
              </div>

              <div className="filters">
                {/* Budget */}
                <div className="filter-group pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-dark mb-2">
                    <span className="material-symbols-outlined text-gold !text-xl">payments</span>
                    <p className="text-black text-sm font-bold">Budget Range</p>
                  </div>
                  <div className="space-y-2 px-1">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary h-4 w-4"/>
                      <span className="text-sm text-black">Economy ($1k - $3k)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary h-4 w-4"/>
                      <span className="text-sm text-black">Premium ($3k - $7k)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary h-4 w-4"/>
                      <span className="text-sm text-black">VIP ($7k+)</span>
                    </label>
                  </div>
                </div>

                {/* Duration */}
                <div className="filter-group pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-dark mb-2">
                    <span className="material-symbols-outlined text-gold !text-xl">schedule</span>
                    <p className="text-black text-sm font-bold">Duration</p>
                  </div>
                  <div className="space-y-2 px-1">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary h-4 w-4"/>
                      <span className="text-sm text-black">7 - 10 Days</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary h-4 w-4"/>
                      <span className="text-sm text-black">14 - 21 Days</span>
                    </label>
                  </div>
                </div>

                <button className="apply-btn mt-4">Apply Filters</button>
              </div>
            </div>
          </aside>

          {/* Packages Grid */}
          <section className="packages-grid flex-1 grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Package Cards */}
            <div className="package-card group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold/30 shadow-md hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="badge absolute top-4 left-4 bg-emerald-dark px-4 py-1.5 rounded-full text-[10px] text-white font-bold border border-gold/30">Most Popular</div>
                <div className="package-image w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                     style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfBrGNP-wctMQFdWcXDclxi_fPu3YVN6QAES1hs7XEf_FfxfLd80e5_7hhUCkpU5o6DKRLywnLoJ_8NaqAl4a3WF536T2GWMbJ3oWKiKOyODuOK5KOjQJnT4xzB-u7S_MX_91Y15OpCrRbcdSSrXywi12ZEWhd7NDbRJcUsGVEvhNFfVMwdmP1MH-G5pebW4yibhMmpgeYr13YB4ftiWQCALTxvit-iGCuCFNLg1UoSjnFZ5u4_EczVwgAJGdZga-RTXxlhQOBRQKP')`}}></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Elite Umrah February</h3>
                  <span className="price bg-emerald-dark text-white px-3 py-1 rounded-lg font-extrabold text-lg border-b-2 border-gold">$4,250</span>
                </div>
                <p className="text-sm mb-6">Experience spiritual fulfillment with our meticulously planned 14-day package featuring luxury stays in Makkah and Madinah.</p>
                <div className="flex gap-3">
                  <button className="primary-btn flex-1">View Details</button>
                  <button className="outline-btn"><span className="material-symbols-outlined">compare_arrows</span></button>
                </div>
              </div>
            </div>

            {/* Repeat more cards similarly... */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
