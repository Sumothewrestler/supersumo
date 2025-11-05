'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AOS from 'aos';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRightIcon, 
  StarIcon, 
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  ClockIcon,
  RocketLaunchIcon,
  SparklesIcon,
  LightBulbIcon,
  BoltIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import { 
  Code2, 
  Smartphone, 
  GraduationCap, 
  Cloud 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom hook for detecting mobile devices
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

// Mobile-optimized component
function MobileView() {
  const [activeTab, setActiveTab] = useState('home');
  const [isTabChanging, setIsTabChanging] = useState(false);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    setIsTabChanging(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setIsTabChanging(false);
    }, 150);
  };

  const superProducts = [
    {
      name: "Super School",
      tagline: "School ERP System",
      description: "Complete educational ecosystem for school management with AI-powered analytics.",
      gradient: "from-blue-500 to-purple-500",
      icon: <AcademicCapIcon className="w-6 h-6" />,
      href: "/products/school-erp",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      name: "Super Bus",
      tagline: "Smart Bus Tracking", 
      description: "Real-time GPS tracking and safety management for school transportation.",
      gradient: "from-green-500 to-emerald-500",
      icon: <MapPinIcon className="w-6 h-6" />,
      href: "/products/smart-bus",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      name: "Super Round",
      tagline: "College Placement Platform",
      description: "Aptitude, Mock Interview, HR Interview, AI Resume Analyzer, Group Discussion. Building Confidence & Professional English for student job readiness.",
      gradient: "from-purple-500 to-pink-500",
      icon: <GraduationCap className="w-6 h-6" />,
      href: "https://superround.in",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      name: "Super Staff",
      tagline: "Staff Management System",
      description: "1. Automatic Attendance (Geofence/Biometric) 2. Payroll Management 3. Task Management - Complete workforce solution.",
      gradient: "from-orange-500 to-red-500", 
      icon: <UserGroupIcon className="w-6 h-6" />,
      href: "https://superstaff.in",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  const superServices = [
    {
      name: "Customized Software",
      description: "Tailored software solutions built for your specific business needs at affordable cost.",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      name: "Android & iOS Apps", 
      description: "Native mobile applications for Android and iOS platforms, delivered fast and cost-effective.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50", 
      textColor: "text-purple-600"
    },
    {
      name: "Websites",
      description: "Modern, responsive websites that drive results. Fast development, affordable pricing.",
      icon: <GlobeAltIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white pb-20 font-sans">
      {/* Mobile Header - Enhanced */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        <div className="flex items-center justify-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-500/20">
              <Image
                src="/supersumo-logo.png"
                alt="SuperSumo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-black text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SuperSumo</span>
              <div className="text-xs text-slate-400 font-medium">Digital Innovation</div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
        <div className="px-2 py-1">
          <div className="flex justify-around items-center">
            <button
              onClick={() => handleTabChange('home')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'home' 
                  ? 'text-blue-400 bg-blue-500/10 shadow-lg transform scale-105' 
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeTab === 'home' ? 'scale-110' : ''}`}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 ${activeTab === 'home' ? 'text-blue-400' : ''}`}>Home</span>
              {activeTab === 'home' && <div className="w-1 h-1 bg-blue-400 rounded-full mt-1"></div>}
            </button>
            
            <button
              onClick={() => handleTabChange('super-products')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'super-products' 
                  ? 'text-purple-400 bg-purple-500/10 shadow-lg transform scale-105' 
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeTab === 'super-products' ? 'scale-110' : ''}`}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 ${activeTab === 'super-products' ? 'text-purple-400' : ''}`}>Products</span>
              {activeTab === 'super-products' && <div className="w-1 h-1 bg-purple-400 rounded-full mt-1"></div>}
            </button>
            
            <button
              onClick={() => handleTabChange('super-services')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'super-services' 
                  ? 'text-green-400 bg-green-500/10 shadow-lg transform scale-105' 
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeTab === 'super-services' ? 'scale-110' : ''}`}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 ${activeTab === 'super-services' ? 'text-green-400' : ''}`}>Services</span>
              {activeTab === 'super-services' && <div className="w-1 h-1 bg-green-400 rounded-full mt-1"></div>}
            </button>
            
            <button
              onClick={() => handleTabChange('our-clients')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'our-clients' 
                  ? 'text-orange-400 bg-orange-500/10 shadow-lg transform scale-105' 
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeTab === 'our-clients' ? 'scale-110' : ''}`}>
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className={`text-xs font-semibold transition-all duration-300 ${activeTab === 'our-clients' ? 'text-orange-400' : ''}`}>Clients</span>
              {activeTab === 'our-clients' && <div className="w-1 h-1 bg-orange-400 rounded-full mt-1"></div>}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Based on Active Tab with Loading States */}
      <div className="pt-20 px-4">
        <div className={`transition-opacity duration-300 ${isTabChanging ? 'opacity-0' : 'opacity-100'}`}>
          {activeTab === 'home' && (
            <div className="space-y-8">
              {/* Enhanced Hero Section */}
              <section className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-blue-500/30">
                  <Image
                    src="/supersumo-logo.png"
                    alt="SuperSumo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  SuperSumo
                </h1>
                
                <p className="text-lg text-slate-300 mb-3 font-medium">Digital Innovation Platform</p>
                <p className="text-sm text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                  Transforming schools and businesses with cutting-edge software solutions
                </p>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <RocketLaunchIcon className="w-6 h-6" />
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </section>

              {/* Enhanced What We Do Section */}
              <section className="py-8">
                <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  What We Do
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Super Products", icon: <CogIcon className="w-7 h-7" />, color: "from-blue-500 to-cyan-500", desc: "Innovative solutions" },
                    { name: "Super Services", icon: <BuildingOfficeIcon className="w-7 h-7" />, color: "from-purple-500 to-pink-500", desc: "Custom development" },
                    { name: "Innovation", icon: <LightBulbIcon className="w-7 h-7" />, color: "from-green-500 to-emerald-500", desc: "Cutting-edge tech" },
                    { name: "Excellence", icon: <StarIcon className="w-7 h-7" />, color: "from-orange-500 to-red-500", desc: "Quality assured" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] group"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-base mb-1 text-center">{item.name}</h3>
                      <p className="text-xs text-slate-400 text-center">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Enhanced Contact Section */}
              <section className="py-8">
                <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                
                <div className="space-y-4">
                  {[
                    { icon: <PhoneIcon className="w-6 h-6" />, label: "Call Us", value: "814 815 9801", href: "tel:8148159801", color: "from-green-500 to-emerald-500" },
                    { icon: <EnvelopeIcon className="w-6 h-6" />, label: "Email Us", value: "support@supersumo.in", href: "mailto:support@supersumo.in", color: "from-blue-500 to-cyan-500" },
                    { icon: <MapPinIcon className="w-6 h-6" />, label: "Visit Us", value: "Karaikudi, Tamil Nadu", href: "#", color: "from-purple-500 to-pink-500" }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-5 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] active:scale-98 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base">{contact.label}</h3>
                        <p className="text-slate-400 text-sm">{contact.value}</p>
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </section>
            </div>
          )}

        {activeTab === 'super-products' && (
          <div className="space-y-8">
            <div className="text-center py-8">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Super Products
              </h2>
              <p className="text-slate-400 text-sm">Innovative solutions for modern challenges</p>
            </div>
            
            <div className="space-y-5">
              {superProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-black text-xl mb-1">{product.name}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${product.bgColor} ${product.textColor}`}>
                            {product.tagline}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">{product.description}</p>
                      
                      {product.href.startsWith('http') ? (
                        <a 
                          href={product.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          <span>Visit {product.name}</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link 
                          href={product.href}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          <span>Learn More</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'super-services' && (
          <div className="space-y-8">
            <div className="text-center py-8">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Super Services
              </h2>
              <p className="text-slate-400 text-sm">Fast, affordable, and quality-assured solutions</p>
            </div>
            
            <div className="space-y-5">
              {superServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] group text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-black text-2xl mb-3">{service.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${service.bgColor} ${service.textColor}`}>
                    Professional Grade
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-black mb-6 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Why Choose Our Services?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Fast Delivery", icon: "⚡", color: "from-yellow-500 to-orange-500" },
                  { name: "Affordable Cost", icon: "💰", color: "from-green-500 to-emerald-500" },
                  { name: "Quality Assured", icon: "✅", color: "from-blue-500 to-cyan-500" },
                  { name: "24/7 Support", icon: "🛟", color: "from-purple-500 to-pink-500" }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] group text-center"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <p className="text-sm font-bold text-white">{feature.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'our-clients' && (
          <div className="space-y-8">
            <div className="text-center py-8">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Our Clients
              </h2>
              <p className="text-slate-400 text-sm">Trusted by leading organizations worldwide</p>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                <span>🏆</span>
                <span>200+ Organizations</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] h-24 group"
                >
                  <Image
                    src={`/logo_cus_${num}.png`}
                    alt={`Customer ${num}`}
                    width={90}
                    height={45}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] h-24 w-36 group">
                <Image
                  src="/logo_cus_5.png"
                  alt="Customer 5"
                  width={90}
                  height={45}
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform"
                />
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-black mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Industry Leaders
              </h3>
              
              <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                {[
                  { name: "Schools & Educational Institutions", icon: "🎓", color: "from-blue-500 to-cyan-500" },
                  { name: "Healthcare Organizations", icon: "🏥", color: "from-green-500 to-emerald-500" },
                  { name: "Business Enterprises", icon: "🏢", color: "from-purple-500 to-pink-500" },
                  { name: "Government Agencies", icon: "🏛️", color: "from-orange-500 to-red-500" }
                ].map((clientType, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.06] group flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${clientType.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg">{clientType.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-base text-white">{clientType.name}</p>
                      <p className="text-xs text-slate-400">Industry Partners</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center py-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span>🚀</span>
                <span>Join Our Success Stories</span>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/50 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg overflow-hidden">
              <Image
                src="/supersumo-logo.png"
                alt="SuperSumo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold">SuperSumo</span>
          </div>
          <p className="text-slate-500 text-sm">© 2024 SuperSumo. Crafted with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

// Desktop component (existing design)
function DesktopView() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -500]);

  useEffect(() => {
    setIsLoaded(true);
    
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Advanced GSAP Animations
    if (heroRef.current) {
      const tl = gsap.timeline();
      
      // Staggered text animation
      tl.from('.hero-char', { 
        duration: 0.8, 
        y: 100, 
        opacity: 0, 
        stagger: 0.05,
        ease: 'power4.out'
      })
      .from('.hero-tagline', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('.hero-description', { 
        duration: 0.8, 
        y: 30, 
        opacity: 0, 
        ease: 'power3.out' 
      }, '-=0.3')
      .from('.hero-buttons', { 
        duration: 0.8, 
        y: 30, 
        opacity: 0, 
        scale: 0.9,
        ease: 'power2.out' 
      }, '-=0.2')
      .from('.floating-cards', { 
        duration: 1, 
        y: 100, 
        opacity: 0, 
        stagger: 0.1,
        ease: 'power3.out' 
      }, '-=0.5');
    }

    // Particle animation
    gsap.to('.particle', {
      y: -1000,
      opacity: 0,
      duration: 15,
      stagger: {
        each: 2,
        repeat: -1
      },
      ease: 'none'
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const schoolProducts = [
    {
      name: "School ERP",
      tagline: "Complete Educational Ecosystem",
      description: "Revolutionary school management platform that transforms administrative complexity into seamless digital experiences.",
      features: ["AI-Powered Analytics", "Real-time Insights", "Parent Engagement", "Academic Excellence", "Digital Transformation"],
      icon: <AcademicCapIcon className="w-16 h-16" />,
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      link: "/products/school-erp",
      stats: { schools: "200+", students: "50K+", satisfaction: "99%" }
    },
    {
      name: "Smart Bus",
      tagline: "Next-Gen School Transportation",
      description: "AI-powered transportation management with real-time tracking, predictive maintenance, and safety-first design.",
      features: ["GPS Precision", "AI Route Optimization", "Safety Protocols", "Parent Peace of Mind", "Real-time Updates"],
      icon: <MapPinIcon className="w-16 h-16" />,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      link: "/products/smart-bus",
      stats: { buses: "1000+", routes: "5K+", safety: "100%" }
    },
    {
      name: "Sumo Kids",
      tagline: "Future of Child Learning",
      description: "Immersive learning experiences powered by AI, gamification, and adaptive learning technologies.",
      features: ["AI Adaptive Learning", "Immersive Content", "Progress Intelligence", "Parent Partnership", "Joy in Learning"],
      icon: <StarIcon className="w-16 h-16" />,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      link: "/products/sumo-kids",
      stats: { children: "25K+", lessons: "10K+", engagement: "95%" }
    },
    {
      name: "Book Sumo",
      tagline: "Hotel Booking & Management Software",
      description: "Comprehensive hotel management platform for walk-ins, advance bookings, and real-time room status tracking with detailed guest analytics.",
      features: ["Room Status Management", "Guest History Tracking", "Booking Intelligence", "Real-time Analytics", "Contact Management"],
      icon: <BuildingOfficeIcon className="w-16 h-16" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      link: "https://booksumo.vercel.app",
      stats: { hotels: "150+", bookings: "25K+", efficiency: "98%" }
    }
  ];

  const sumo360Features = [
    { name: "Staff Management", icon: <UserGroupIcon className="w-8 h-8" />, color: "bg-blue-500" },
    { name: "Smart Attendance", icon: <ClockIcon className="w-8 h-8" />, color: "bg-green-500" },
    { name: "Financial Control", icon: <ChartBarIcon className="w-8 h-8" />, color: "bg-purple-500" },
    { name: "Customer 360°", icon: <EyeIcon className="w-8 h-8" />, color: "bg-cyan-500" },
    { name: "Lead Intelligence", icon: <LightBulbIcon className="w-8 h-8" />, color: "bg-yellow-500" },
    { name: "WhatsApp Automation", icon: <BoltIcon className="w-8 h-8" />, color: "bg-emerald-500" },
    { name: "Smart Reminders", icon: <SparklesIcon className="w-8 h-8" />, color: "bg-pink-500" },
    { name: "Task Orchestration", icon: <CogIcon className="w-8 h-8" />, color: "bg-indigo-500" },
    { name: "Advanced Analytics", icon: <ChartBarIcon className="w-8 h-8" />, color: "bg-red-500" },
    { name: "Inventory Intelligence", icon: <GlobeAltIcon className="w-8 h-8" />, color: "bg-orange-500" }
  ];


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top Left Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed top-6 left-6 z-50"
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/supersumo-logo.png"
            alt="SuperSumo Logo"
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3"
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/supersumo-logo.png"
                alt="SuperSumo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-lg text-white">SuperSumo</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Particle Background */}
      {isLoaded && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `100%`,
                animationDelay: `${(i * 0.4) % 20}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)`
        }}
      />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Geometric Background Elements */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-96 h-96 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-80 h-80 border border-purple-500/20 rounded-full"
          />
          
        </motion.div>

        <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              delay: 0.5 
            }}
            className="mb-12"
          >
            <div className="w-24 h-24 mx-auto relative">
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                    "linear-gradient(45deg, #8B5CF6, #06B6D4)", 
                    "linear-gradient(45deg, #06B6D4, #10B981)",
                    "linear-gradient(45deg, #10B981, #3B82F6)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full h-full rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl"
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  SS
                </motion.span>
              </motion.div>
              
              {/* Orbital rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full scale-125"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-purple-500/20 rounded-full scale-150"
              />
            </div>
          </motion.div>

          {/* Hero Title with Individual Character Animation */}
          <div className="mb-8">
            <motion.h1 className="text-7xl md:text-9xl font-black mb-4">
              {"SuperSumo".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="hero-char inline-block bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                  style={{ 
                    backgroundSize: '400% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          <motion.h2 className="hero-tagline text-2xl md:text-4xl font-bold mb-8 text-slate-300">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionizing Digital Experiences
            </span>
          </motion.h2>

          <motion.p className="hero-description text-lg md:text-xl text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            We craft extraordinary software solutions that transform schools into digital powerhouses and 
            businesses into market leaders. Experience the future of technology today.
          </motion.p>

          {/* CTA Buttons with Advanced Animations */}
          <motion.div className="hero-buttons flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl">
                <RocketLaunchIcon className="w-6 h-6" />
                Launch Your Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.div>
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <button className="relative border-2 border-white/30 backdrop-blur-xl text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:border-white/60 transition-all">
                <EyeIcon className="w-6 h-6" />
                Watch Magic Happen
              </button>
            </motion.div>
          </motion.div>

          {/* Service Cards */}
          <div className="floating-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Custom Software", 
                icon: <Code2 className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Mobile App", 
                icon: <Smartphone className="w-8 h-8" />,
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                title: "School Solutions", 
                icon: <GraduationCap className="w-8 h-8" />,
                gradient: "from-green-500 to-emerald-500"
              },
              { 
                title: "SaaS Products", 
                icon: <Cloud className="w-8 h-8" />,
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-500 group"
                style={{ perspective: '1000px' }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{service.title}</h3>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Discover More</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Revolutionary Products Showcase */}
      <section id="products" className="py-32 px-4 relative overflow-hidden">
        {/* Dynamic Cosmic Background */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 90% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />

          {/* Floating Orbs */}
          {isLoaded && [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-xl opacity-40"
              style={{
                width: `${60 + (i * 3.7) % 40}px`,
                height: `${60 + (i * 3.7) % 40}px`,
                left: `${(i * 8.2) % 100}%`,
                top: `${(i * 6.7) % 100}%`,
                background: i % 3 === 0 ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)' : 
                           i % 3 === 1 ? 'linear-gradient(45deg, #8B5CF6, #06B6D4)' : 
                           'linear-gradient(45deg, #06B6D4, #10B981)'
              }}
              animate={{
                x: [0, (i * 2.3) % 100 - 50, 0],
                y: [0, (i * 1.8) % 80 - 40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 20 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}


          {/* Particle System */}
          {isLoaded && [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${(i * 4.1) % 100}%`,
                top: `${100 + (i * 2.3) % 20}%`
              }}
              animate={{
                y: [-20, -window.innerHeight - 100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 8 + (i * 0.3),
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-black mb-8"
              animate={{
                background: [
                  "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                  "linear-gradient(45deg, #8B5CF6, #06B6D4)",
                  "linear-gradient(45deg, #06B6D4, #10B981)",
                  "linear-gradient(45deg, #10B981, #3B82F6)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              Revolutionary Products
            </motion.h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              Experience the next generation of educational and business technology
            </p>
          </motion.div>

          <div className="space-y-32">
            {schoolProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Product Info */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black mb-2">{product.name}</h3>
                      <p className="text-xl text-blue-400 font-semibold">{product.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8 mb-8">
                    {Object.entries(product.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-sm text-slate-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {product.link.startsWith('http') ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`group bg-gradient-to-r ${product.gradient} text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl`}
                      >
                        <SparklesIcon className="w-6 h-6" />
                        Experience {product.name}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </a>
                  ) : (
                    <Link href={product.link}>
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`group bg-gradient-to-r ${product.gradient} text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl`}
                      >
                        <SparklesIcon className="w-6 h-6" />
                        Experience {product.name}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRightIcon className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </Link>
                  )}
                </motion.div>

                {/* Product Mockup */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className="relative group">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`relative bg-gradient-to-br ${product.gradient} rounded-3xl p-8 shadow-2xl`}
                      style={{ perspective: '1000px' }}
                    >
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <div className="flex-1 bg-white/20 rounded-lg mx-4 px-4 py-1 text-center text-sm">
                            {product.name} Dashboard
                          </div>
                        </div>
                        <div className="h-64 bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                          <Image
                            src={`/products/${product.name === 'School ERP' ? 'school_erp.png' : product.name === 'Smart Bus' ? 'smart_bus.png' : product.name === 'Book Sumo' ? 'book_sumo.png' : 'sumokids.png'}`}
                            alt={`${product.name} Interface`}
                            width={400}
                            height={250}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating elements around mockup */}
                    <motion.div
                      animate={{ 
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-lg opacity-80"
                    />
                    <motion.div
                      animate={{ 
                        y: [10, -10, 10],
                        rotate: [360, 180, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sumo360 - The Ultimate Business Platform */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <motion.h2 
                className="text-7xl md:text-9xl font-black"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                    "linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4)",
                    "linear-gradient(45deg, #EC4899, #06B6D4, #10B981)",
                    "linear-gradient(45deg, #06B6D4, #10B981, #3B82F6)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                Sumo360°
              </motion.h2>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              The Ultimate Business Intelligence Platform
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-12"
            >
              Harness the power of AI, automation, and analytics in one revolutionary platform that adapts to your business needs.
            </motion.p>
          </motion.div>

          {/* Interactive Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {sumo360Features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:shadow-2xl`}
                >
                  {feature.icon}
                </motion.div>
                
                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.name}
                </h4>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Central CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <Link href="/products/sumo360">
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 80px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
                <button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-16 py-6 rounded-full font-black text-xl flex items-center gap-4 shadow-2xl">
                  <FireIcon className="w-8 h-8" />
                  Unleash Sumo360 Power
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="w-6 h-6" />
                  </motion.div>
                </button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Unified Services, Trusted By, and Contact Section */}
      <div className="relative">
        {/* Unified Background with Floating Particles */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 90% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />

          {/* Floating Orbs */}
          {isLoaded && [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-xl opacity-40"
              style={{
                width: `${60 + (i * 3.7) % 40}px`,
                height: `${60 + (i * 3.7) % 40}px`,
                left: `${(i * 8.2) % 100}%`,
                top: `${(i * 6.7) % 100}%`,
                background: i % 3 === 0 ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)' : 
                           i % 3 === 1 ? 'linear-gradient(45deg, #8B5CF6, #06B6D4)' : 
                           'linear-gradient(45deg, #06B6D4, #10B981)'
              }}
              animate={{
                x: [0, (i * 2.3) % 100 - 50, 0],
                y: [0, (i * 1.8) % 80 - 40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 20 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}

          {/* Particle System */}
          {isLoaded && [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${(i * 4.1) % 100}%`,
                top: `${100 + (i * 2.3) % 20}%`
              }}
              animate={{
                y: [-20, -window.innerHeight - 100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 8 + (i * 0.3),
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>

      {/* Services - Creative Layout */}
      <section id="services" className="py-32 px-4 relative">
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Custom Craftsmanship
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
              Bespoke software solutions engineered for your unique vision
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Applications",
                subtitle: "Next-Gen Digital Experiences",
                description: "Cutting-edge web applications built with modern frameworks, optimized for performance, and designed for the future.",
                icon: <GlobeAltIcon className="w-12 h-12" />,
                color: "from-blue-500 to-cyan-500",
                tech: ["React", "Next.js", "TypeScript", "AI Integration"]
              },
              {
                title: "Enterprise Solutions",
                subtitle: "Scalable Business Ecosystems", 
                description: "Enterprise-grade platforms that grow with your business, featuring robust security and seamless integrations.",
                icon: <BuildingOfficeIcon className="w-12 h-12" />,
                color: "from-purple-500 to-pink-500",
                tech: ["Microservices", "Cloud Native", "Security First", "Global Scale"]
              },
              {
                title: "Mobile Experiences",
                subtitle: "Cross-Platform Excellence",
                description: "Native-quality mobile applications that deliver exceptional user experiences across all devices and platforms.",
                icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
                color: "from-green-500 to-emerald-500",
                tech: ["React Native", "Flutter", "iOS", "Android"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 100
                }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg font-semibold text-purple-400 mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, idx) => (
                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-3xl`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logo Carousel */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Sumo Kids Theme Background - Dark with Blue/Purple Floating Dots */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 90% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />

          {/* Floating Orbs */}
          {isLoaded && [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-xl opacity-40"
              style={{
                width: `${60 + (i * 3.7) % 40}px`,
                height: `${60 + (i * 3.7) % 40}px`,
                left: `${(i * 8.2) % 100}%`,
                top: `${(i * 6.7) % 100}%`,
                background: i % 3 === 0 ? 'linear-gradient(45deg, #3B82F6, #8B5CF6)' : 
                           i % 3 === 1 ? 'linear-gradient(45deg, #8B5CF6, #06B6D4)' : 
                           'linear-gradient(45deg, #06B6D4, #10B981)'
              }}
              animate={{
                x: [0, (i * 2.3) % 100 - 50, 0],
                y: [0, (i * 1.8) % 80 - 40, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 20 + (i * 0.5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}

          {/* Particle System */}
          {isLoaded && [...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${(i * 4.1) % 100}%`,
                top: `${100 + (i * 2.3) % 20}%`
              }}
              animate={{
                y: [-20, -window.innerHeight - 100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 8 + (i * 0.3),
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Trusted by
            </h2>
          </motion.div>

          {/* Continuous Scrolling Logo Carousel */}
          <div className="relative">
            {/* Scrolling Container */}
            <div className="flex space-x-16 animate-scroll">
              {/* First Set of Logos */}
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={`first-${num}`}
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4"
                >
                  <Image
                    src={`/logo_cus_${num}.png`}
                    alt={`Customer ${num}`}
                    width={144}
                    height={72}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={`second-${num}`}
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4"
                >
                  <Image
                    src={`/logo_cus_${num}.png`}
                    alt={`Customer ${num}`}
                    width={144}
                    height={72}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}

              {/* Third Set for Extra Smooth Loop */}
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={`third-${num}`}
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-4"
                >
                  <Image
                    src={`/logo_cus_${num}.png`}
                    alt={`Customer ${num}`}
                    width={144}
                    height={72}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact - Interactive Section */}
      <section id="contact" className="py-32 px-4 relative">
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl font-black mb-8"
              animate={{
                background: [
                  "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  "linear-gradient(45deg, #4ECDC4, #45B7D1)",
                  "linear-gradient(45deg, #45B7D1, #FFA07A)",
                  "linear-gradient(45deg, #FFA07A, #FF6B6B)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              Ready to Transform?
            </motion.h2>
            
            {/* Awesome Contact Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { 
                  icon: <PhoneIcon className="w-12 h-12" />, 
                  label: "Call", 
                  value: "814 815 9801", 
                  color: "from-green-500 to-emerald-500",
                  href: "tel:8148159801"
                },
                { 
                  icon: <EnvelopeIcon className="w-12 h-12" />, 
                  label: "Email", 
                  value: "support@supersumo.in", 
                  color: "from-blue-500 to-cyan-500",
                  href: "mailto:support@supersumo.in"
                },
                { 
                  icon: <MapPinIcon className="w-12 h-12" />, 
                  label: "Visit", 
                  value: "No. 84, Rasi Tower, Karuppar Kovil Main Road, Prabhu Nagar, Karaikudi - 630 002", 
                  color: "from-purple-500 to-pink-500",
                  href: "#"
                }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    z: 100,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer block"
                  style={{ perspective: '1000px' }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-20 rounded-3xl blur-xl`}
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className={`w-24 h-24 bg-gradient-to-br ${contact.color} rounded-3xl flex items-center justify-center text-white mb-6 mx-auto shadow-2xl relative overflow-hidden`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      animate={{
                        x: [-100, 100],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10"
                    >
                      {contact.icon}
                    </motion.div>
                  </motion.div>

                  <motion.h4 
                    className="font-black text-2xl mb-3 group-hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {contact.label}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {contact.value}
                  </motion.p>


                  {/* Floating particles around contact cards */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Footer with Animated Elements */}
      <footer className="relative py-20 px-4 bg-gradient-to-br from-slate-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12 mb-12"
          >
            {/* Brand Column */}
            <div className="col-span-2">
              <motion.div 
                className="flex items-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold">
                  SS
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SuperSumo
                </span>
              </motion.div>
              <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
                Pioneering the future of digital transformation through innovative software solutions that empower organizations worldwide.
              </p>
              
              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold">
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-slate-400 text-sm">Trusted by 500+ organizations</span>
              </div>
            </div>
            
            {/* Products Column */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-blue-400">Products</h4>
              <ul className="space-y-3">
                {[
                  { name: "School ERP", href: "/products/school-erp" },
                  { name: "Smart Bus", href: "/products/smart-bus" },
                  { name: "Sumo Kids", href: "/products/sumo-kids" },
                  { name: "Book Sumo", href: "https://booksumo.vercel.app" },
                  { name: "Sumo360", href: "/products/sumo360" }
                ].map((product, index) => (
                  <motion.li
                    key={product.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {product.href.startsWith('http') ? (
                      <a 
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                      >
                        <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {product.name}
                      </a>
                    ) : (
                      <Link 
                        href={product.href} 
                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                      >
                        <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {product.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Services Column */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-purple-400">Services</h4>
              <ul className="space-y-3 text-slate-400">
                {["Custom Development", "AI Integration", "Digital Transformation", "Technical Consulting", "24/7 Support"].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/10 pt-8 text-center"
          >
            <p className="text-slate-500">
              &copy; 2024 SuperSumo. Crafted with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-red-500"
              >
                ❤️
              </motion.span>
              {' '}for the future of technology.
            </p>
          </motion.div>
        </div>

        {/* Footer floating elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
      </footer>

      {/* Loading Animation Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold"
            >
              SS
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main component with responsive switching
export default function Home() {
  const isMobile = useIsMobile();
  
  // Show mobile view for screens smaller than 768px
  if (isMobile) {
    return <MobileView />;
  }
  
  // Show desktop view for larger screens
  return <DesktopView />;
}