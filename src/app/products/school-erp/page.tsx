'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Link from 'next/link';
import {
  AcademicCapIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
  CheckIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

export default function SchoolERPPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      title: "Student Management",
      description: "Comprehensive student profiles, admission records, academic history, and progress tracking.",
      icon: <UserGroupIcon className="w-8 h-8" />,
      details: ["Student Profiles", "Admission Management", "Academic Records", "Progress Reports", "Behavioral Tracking"]
    },
    {
      title: "Fee Management",
      description: "Automated fee collection, payment tracking, receipts, and financial reporting.",
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      details: ["Online Payments", "Fee Structure", "Payment History", "Financial Reports", "Late Fee Management"]
    },
    {
      title: "Academic Records",
      description: "Grade management, report cards, examination scheduling, and academic analytics.",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      details: ["Grade Management", "Report Cards", "Exam Scheduling", "Academic Analytics", "Certificate Generation"]
    },
    {
      title: "Staff Portal",
      description: "Teacher dashboard, class management, lesson planning, and communication tools.",
      icon: <AcademicCapIcon className="w-8 h-8" />,
      details: ["Teacher Dashboard", "Class Management", "Lesson Plans", "Communication", "Performance Analytics"]
    },
    {
      title: "Parent Portal",
      description: "Real-time access to student progress, attendance, fees, and school communications.",
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      details: ["Student Progress", "Attendance View", "Fee Status", "School Updates", "Teacher Communication"]
    },
    {
      title: "Administration",
      description: "Complete school administration with timetables, resources, and operational management.",
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      details: ["Timetable Management", "Resource Planning", "Staff Management", "Inventory Control", "Reports & Analytics"]
    }
  ];

  const benefits = [
    "Streamlined administrative processes",
    "Improved parent-teacher communication",
    "Real-time academic tracking",
    "Automated fee management",
    "Enhanced data security",
    "Mobile-responsive design",
    "Cloud-based accessibility",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-950 dark:to-blue-950">
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
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <AcademicCapIcon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
              School ERP
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Complete School Management System for Modern Educational Institutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>

          {/* Screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-blue-900 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg mx-4 px-4 py-1 text-center text-sm text-slate-600 dark:text-slate-400">
                    SuperSumo School ERP Dashboard
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-blue-900 rounded-xl flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400 text-lg">Dashboard Screenshot Placeholder</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Comprehensive Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Everything you need to manage your educational institution efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-blue-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your School Operations
            </h2>
            
            <p className="text-xl mb-12 opacity-90">
              Join hundreds of schools that have revolutionized their management with our ERP system
            </p>

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
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Transform your school management today with SuperSumo School ERP
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 justify-center shadow-2xl"
              >
                <PhoneIcon className="w-6 h-6" />
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <EnvelopeIcon className="w-6 h-6" />
                Contact Sales
              </motion.button>
            </div>

            <Link 
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 justify-center"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}