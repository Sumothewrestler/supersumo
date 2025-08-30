'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Link from 'next/link';
import {
  RocketLaunchIcon,
  UserGroupIcon,
  ClockIcon,
  ChartBarIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckIcon,
  CogIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ArrowLeftIcon,
  BuildingOfficeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function Sumo360Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const modules = [
    {
      title: "Staff Management",
      description: "Complete employee lifecycle management from hiring to performance evaluation.",
      icon: <UserGroupIcon className="w-8 h-8" />,
      features: ["Employee Profiles", "Hiring Process", "Performance Reviews", "Role Management", "Department Structure"]
    },
    {
      title: "Staff Attendance",
      description: "Advanced attendance tracking with biometric integration and real-time monitoring.",
      icon: <ClockIcon className="w-8 h-8" />,
      features: ["Biometric Integration", "Real-time Tracking", "Leave Management", "Overtime Calculation", "Attendance Reports"]
    },
    {
      title: "Staff Accounts",
      description: "Comprehensive payroll and accounting system for staff compensation management.",
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      features: ["Payroll Processing", "Salary Structure", "Tax Calculations", "Bonus Management", "Financial Reports"]
    },
    {
      title: "Customer Management",
      description: "360-degree customer relationship management with detailed interaction history.",
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      features: ["Customer Profiles", "Interaction History", "Contact Management", "Customer Segmentation", "Relationship Tracking"]
    },
    {
      title: "Enquiry Management",
      description: "Streamlined lead and enquiry management system with automated follow-ups.",
      icon: <DocumentTextIcon className="w-8 h-8" />,
      features: ["Lead Capture", "Enquiry Tracking", "Automated Follow-ups", "Conversion Analytics", "Source Tracking"]
    },
    {
      title: "Auto Sales Invoice to WhatsApp",
      description: "Automated invoice generation and delivery directly to customers via WhatsApp.",
      icon: <PhoneIcon className="w-8 h-8" />,
      features: ["Auto Invoice Generation", "WhatsApp Integration", "Payment Links", "Invoice Templates", "Delivery Tracking"]
    },
    {
      title: "WhatsApp Reminders",
      description: "Automated reminder system for payments, appointments, and important notifications.",
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      features: ["Payment Reminders", "Appointment Alerts", "Custom Messages", "Scheduled Notifications", "Delivery Reports"]
    },
    {
      title: "Staff & Overall Task Management",
      description: "Comprehensive task and project management with team collaboration features.",
      icon: <CheckIcon className="w-8 h-8" />,
      features: ["Task Assignment", "Progress Tracking", "Team Collaboration", "Deadline Management", "Performance Metrics"]
    },
    {
      title: "Accounts",
      description: "Full-featured accounting system with financial reporting and compliance tools.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      features: ["Financial Reporting", "Tax Compliance", "Budget Management", "Expense Tracking", "Profit Analysis"]
    },
    {
      title: "Stock Inventory",
      description: "Advanced inventory management with real-time tracking and automated reorder points.",
      icon: <CogIcon className="w-8 h-8" />,
      features: ["Real-time Tracking", "Automated Reordering", "Supplier Management", "Stock Reports", "Barcode Integration"]
    }
  ];

  const benefits = [
    "Unified business management",
    "Real-time analytics",
    "Automated workflows",
    "WhatsApp integration",
    "Multi-location support",
    "Mobile accessibility",
    "Cloud-based security",
    "24/7 support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
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
            <motion.div
              animate={{ 
                background: [
                  "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                  "linear-gradient(45deg, #8B5CF6, #06B6D4)",
                  "linear-gradient(45deg, #06B6D4, #3B82F6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8"
            >
              <RocketLaunchIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Sumo360
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Complete Business Management Platform - Everything You Need in One Solution
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Book Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-blue-900 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg mx-4 px-4 py-1 text-center text-sm text-slate-600 dark:text-slate-400">
                    Sumo360 Business Dashboard
                  </div>
                </div>
                <div className="h-96 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900 rounded-xl flex items-center justify-center relative">
                  <span className="text-slate-500 dark:text-slate-400 text-lg">Comprehensive Business Dashboard</span>
                  <div className="absolute top-4 right-4 grid grid-cols-2 gap-2">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs">Sales ↗️</div>
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Tasks ✓</div>
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Staff 👥</div>
                    <div className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Stock 📦</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              10 Powerful Modules
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Integrated business management tools that work seamlessly together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  {module.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {module.description}
                </p>

                <ul className="space-y-1">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Highlight */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WhatsApp Integration
            </h2>
            
            <p className="text-xl mb-12 opacity-90">
              Seamlessly integrate with WhatsApp for automated communications and better customer engagement
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <PhoneIcon className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Auto Invoicing</h3>
                <p className="opacity-90">Automatically send invoices to customers via WhatsApp</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <ClockIcon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Reminders</h3>
                <p className="opacity-90">Automated payment and appointment reminders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <UserGroupIcon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                <p className="opacity-90">Direct customer communication and support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Why Businesses Choose Sumo360
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-blue-900 rounded-xl shadow-lg"
              >
                <CheckIcon className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <span className="font-semibold text-slate-800 dark:text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Flexible Pricing Plans
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹9,999",
                period: "/month",
                features: ["Up to 5 users", "Basic modules", "Email support", "Mobile app"]
              },
              {
                name: "Professional",
                price: "₹19,999",
                period: "/month",
                features: ["Up to 25 users", "All modules", "WhatsApp integration", "Priority support"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: ["Unlimited users", "Custom integrations", "Dedicated support", "On-premise option"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-800 dark:text-white">{plan.price}</span>
                  <span className="text-slate-600 dark:text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  } transition-all duration-300`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
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
              Transform Your Business Today
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Join hundreds of businesses that have revolutionized their operations with Sumo360
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 justify-center shadow-2xl"
              >
                <RocketLaunchIcon className="w-6 h-6" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}