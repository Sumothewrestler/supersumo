'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Link from 'next/link';
import {
  StarIcon,
  AcademicCapIcon,
  ChartBarIcon,
  TrophyIcon,
  ArrowLeftIcon,
  CheckIcon,
  PlayIcon,
  BookOpenIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function SumoKidsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      title: "Interactive Lessons",
      description: "Engaging, multimedia-rich lessons that make learning fun and effective for young minds.",
      icon: <PlayIcon className="w-8 h-8" />,
      details: ["Video Lessons", "Interactive Quizzes", "Audio Stories", "Visual Learning", "Hands-on Activities"]
    },
    {
      title: "Progress Tracking",
      description: "Comprehensive progress monitoring to track each child's learning journey and milestones.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      details: ["Learning Analytics", "Milestone Tracking", "Skill Assessment", "Progress Reports", "Achievement Badges"]
    },
    {
      title: "Gamification",
      description: "Game-based learning elements that motivate children and enhance engagement.",
      icon: <TrophyIcon className="w-8 h-8" />,
      details: ["Reward System", "Learning Games", "Challenges", "Leaderboards", "Virtual Rewards"]
    },
    {
      title: "Parent Dashboard",
      description: "Comprehensive parent portal to monitor child's progress and engage in their learning.",
      icon: <UserGroupIcon className="w-8 h-8" />,
      details: ["Progress Overview", "Activity Reports", "Communication Tools", "Learning Resources", "Homework Tracking"]
    },
    {
      title: "Assessment Tools",
      description: "Age-appropriate assessment methods to evaluate and guide learning development.",
      icon: <BookOpenIcon className="w-8 h-8" />,
      details: ["Skill Assessment", "Adaptive Testing", "Learning Path", "Competency Mapping", "Personalized Feedback"]
    },
    {
      title: "Content Library",
      description: "Rich library of educational content tailored for different age groups and learning styles.",
      icon: <AcademicCapIcon className="w-8 h-8" />,
      details: ["Age-Appropriate Content", "Multiple Subjects", "Learning Styles", "Cultural Relevance", "Regular Updates"]
    }
  ];

  const benefits = [
    "Improved learning outcomes",
    "Enhanced student engagement",
    "Personalized learning paths",
    "Parent involvement tools",
    "Safe learning environment",
    "Multi-device accessibility",
    "Offline learning support",
    "Regular content updates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-950 dark:to-purple-950">
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
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <StarIcon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Sumo Kids
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Interactive Learning Platform for Young Learners
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* App interface placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-slate-800 dark:to-purple-900 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl">
                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900 rounded-xl flex items-center justify-center relative">
                  <span className="text-slate-500 dark:text-slate-400 text-lg">Interactive Learning Interface</span>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">⭐</div>
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">🎯</div>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Learning Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Designed specifically for young learners with engaging, interactive content
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Learning Benefits
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
                  <StarIcon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
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
              Give Your Child the Best Start
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Join thousands of families using Sumo Kids for enhanced learning
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 justify-center shadow-2xl"
              >
                <StarIcon className="w-6 h-6" />
                Start Free Trial
              </motion.button>
            </div>

            <Link 
              href="/"
              className="text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-2 justify-center"
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