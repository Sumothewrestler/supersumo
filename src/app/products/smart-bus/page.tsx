'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Link from 'next/link';
import {
  MapPinIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  BellIcon,
  TruckIcon,
  PhoneIcon,
  ArrowLeftIcon,
  CheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function SmartBusPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      title: "GPS Tracking",
      description: "Real-time location tracking with accurate GPS coordinates and route monitoring.",
      icon: <MapPinIcon className="w-8 h-8" />,
      details: ["Live Location", "Route History", "Speed Monitoring", "Geofencing", "Emergency Alerts"]
    },
    {
      title: "Route Management",
      description: "Intelligent route planning and optimization for efficient transportation.",
      icon: <TruckIcon className="w-8 h-8" />,
      details: ["Route Optimization", "Stop Management", "Time Scheduling", "Multiple Routes", "Route Analytics"]
    },
    {
      title: "Parent Alerts",
      description: "Instant notifications to parents about pickup, drop-off, and delays.",
      icon: <BellIcon className="w-8 h-8" />,
      details: ["SMS Notifications", "App Notifications", "Email Updates", "Delay Alerts", "Emergency Notifications"]
    },
    {
      title: "Driver App",
      description: "Dedicated mobile app for drivers with navigation and student management.",
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      details: ["Navigation Support", "Student List", "Attendance Marking", "Emergency Button", "Communication Portal"]
    },
    {
      title: "Safety Monitoring",
      description: "Comprehensive safety features including speed monitoring and emergency protocols.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      details: ["Speed Alerts", "Emergency Protocol", "Student Safety", "Driver Monitoring", "Incident Reporting"]
    },
    {
      title: "Analytics Dashboard",
      description: "Detailed analytics and reporting for fleet management and optimization.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      details: ["Fleet Analytics", "Performance Reports", "Cost Analysis", "Route Efficiency", "Usage Statistics"]
    }
  ];

  const benefits = [
    "Enhanced student safety",
    "Real-time parent notifications",
    "Optimized transportation costs",
    "Improved route efficiency",
    "Emergency response system",
    "Driver performance monitoring",
    "Fuel cost optimization",
    "Complete transparency"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-950 dark:to-green-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeftIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              SS
            </div>
            <span className="font-bold text-xl text-slate-800 dark:text-white">SuperSumo</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <MapPinIcon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
              Smart Bus
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Advanced School Bus Tracking & Management System
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl"
              >
                Try Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>

          {/* Map visualization placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-slate-800 dark:to-green-900 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl">
                <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-green-900 rounded-xl flex items-center justify-center relative">
                  <span className="text-slate-500 dark:text-slate-400 text-lg">Live Map Interface Placeholder</span>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    🚌 Bus #101 - On Route
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-green-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 dark:text-green-400 mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {feature.description}
                </p>

                <ul className="space-y-1">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      <span className="text-slate-600 dark:text-slate-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Why Schools Choose Smart Bus
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                >
                  <CheckIcon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Start Your Smart Journey
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Experience the future of school transportation management
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 justify-center shadow-2xl"
              >
                <PhoneIcon className="w-6 h-6" />
                Request Demo
              </motion.button>
            </div>

            <Link 
              href="/"
              className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-2 justify-center"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}