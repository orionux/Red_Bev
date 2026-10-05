import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';
// import { directors } from '../data/mockData';
import chairman from "../assets/ruwan-thilina.jpeg"
import companyPic from "../assets/group-bg.jpg"
// import hrManager from "../assets/Tharindu Samanakkody.jpeg"
import ceo from "../assets/ceo.jpeg"
// import companyConsultation from "../assets/Company consultation.jpeg"
import gangaDarshani from "../assets/ganga_darshani.jpeg"
import yameeraGallage from "../assets/yameera-gallage.jpeg"
import manukaDilshara from "../assets/Manuka dilshara.jpeg"
import shamithShiran from "../assets/shamithShiran.jpeg"
import samarakkodi from "../assets/T.P.Samanakkody.jpeg"

// import chairman from "../assets/ruwan-thilina.jpeg"
// "sample comment here for make vercel actticate "

export const directors = [
  {
    id: 1,
    name: "Mr. Ruwan Thilina",
    position: "MD",
    image: chairman,
    bio: "Oversees the strategic direction and governance of the company. Ensures long-term goals align with organizational values."
  },
  {
    id: 1.1,
    name: "Mrs. Ganga Darshani",
    position: "Director",
    image: gangaDarshani,
    bio: "Oversees the strategic direction and governance of the company. Ensures long-term goals align with organizational values."
  },
  // {
  //   id: 2,
  //   name: "Mr. Tharindu Samanakkody",
  //   position: "HR Manager",
  //   image: hrManager,
  //   bio: "Manages recruitment, employee relations, and HR policies. Focuses on building a strong and motivated workforce."
  // },
  {
    id: 3,
    name: "Mr. Thimesh Silva",
    position: "CEO",
    image: ceo,
    bio: "Leads overall operations and business strategy. Responsible for driving growth and organizational performance."
  },
  {
    id: 4,
    name: "Mr.Yameera Gallage",
    position: "GSM",
    image: yameeraGallage,
    bio: "Leads overall operations and business strategy. Responsible for driving growth and organizational performance."
  },
  {
    id: 4.1,
    name: "Shamith shiran",
    position: "Assistant Purchasing Manager",
    image: shamithShiran,
    bio: "Leads overall operations and business strategy. Responsible for driving growth and organizational performance."
  },
  {
    id: 4.2,
    name: "Manuka dilshara",
    position: "Accounts Executive",
    image: manukaDilshara,
    bio: "Leads overall operations and business strategy. Responsible for driving growth and organizational performance."
  },
  {
    id: 4.3,
    name: "T.P.Samanakkody",
    position: "HR Executive",
    image: samarakkodi,
    bio: "Leads overall operations and business strategy. Responsible for driving growth and organizational performance."
  },
  // {
  //   id: 4,
  //   name: "Mr. Amaranayake",
  //   position: "Company consultation",
  //   image: companyConsultation,
  //   bio: "Provides expert advice on business processes and planning. Supports decision-making across departments."
  // }
];

const About: React.FC = () => {

  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, directors.length));
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#ee1e23] to-[#d4a574]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Red Beverages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Crafting premium Beverages with passion, sustainability, and innovation
            for over a decade.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To craft high-quality beverages that refresh, nourish, and inspire everyday living. We are committed to using natural ingredients while promoting sustainability and creating products people can trust and enjoy."
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To grow into a globally recognized beverage brand that stands for authenticity, innovation, and responsible practices—delivering excellence in every sip."
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "We prioritize quality in everything we create, embrace sustainable practices to protect our planet, and believe in building strong connections with our community. Integrity, innovation, and transparency shape how we work and grow."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#ee1e23] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Red Beverages began with a simple idea—to create drinks that bring people together through bold flavor, quality, and trust. What started as a small initiative driven by passion and creativity quickly evolved into a growing brand focused on delivering refreshing experiences with every bottle.
                </p>
                <p>
                  From the early days, we committed ourselves to using carefully selected ingredients, maintaining high standards, and building meaningful relationships with our customers and partners. Our journey has been shaped by dedication, innovation, and a desire to make every sip memorable.
                </p>
                <p>
                  Today, Red Beverages continues to expand its reach, serving communities with products that combine great taste and reliability. As we grow, we remain rooted in our values—continuously improving, embracing new ideas, and striving to make a positive impact in everything we do.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={companyPic}
                alt="Red Beverages - story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Quality Standards",
                stat: "ISO 22000",
                description: "HACCP, GMP Certified"
              },
              {
                icon: Users,
                title: "Happy Customers",
                stat: "2M+",
                description: "Satisfied customers islandwide who trust our products daily"
              },
              {
                icon: Globe,
                title: "",
                stat: "Diverse Product Range",
                description: "A variety of refreshing beverages crafted for different tastes and occasions"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ee1e23] to-[#d4a574] rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders driving Red Beverages's mission forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h3>
                  <p className="text-[#ee1e23] font-medium mb-4">{director.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{director.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="hidden py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders driving Red Beverages's mission forward.
            </p>
          </motion.div>

          {/* Grid of directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
            {directors.slice(0, visibleCount).map((director, index) => (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h3>
                  <p className="text-[#ee1e23] font-medium mb-4">{director.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{director.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < directors.length && (
            <div className="text-center mt-12">
              <button
                onClick={showMore}
                className="px-6 py-3 bg-[#c41e1e] text-white font-semibold rounded-xl hover:bg-[#a31818] transition-all duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ee1e23] to-[#d4a574]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Be part of our mission to create a more sustainable and delicious future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#ee1e23] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Careers
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;