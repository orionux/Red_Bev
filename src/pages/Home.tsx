import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users, Globe } from 'lucide-react';
import { newsEvents } from '../data/mockData';
import { NEWS_CATEGORIES } from '../helpers/enums';
import heroBg from "../assets/group-bg.jpg"
import product1 from "../assets/products/MAX BOTTLES-01.png"
import product2 from "../assets/products/MAX BOTTLES-02.png"
import product4 from "../assets/products/MAX BOTTLES-04.png"
import product5 from "../assets/products/MAX BOTTLES-05.png"
import product6 from "../assets/products/MAX BOTTLES-06.png"
import product7 from "../assets/products/MAX BOTTLES-07.png"

const products = [
  {
    id: 1,
    name: "Red Cream Soda",
    // category: "Fruit Juices",
    price: "$4.99",
    image: product1,
    description: "Velvety smooth with a nostalgic vanilla twist, Red Cream Soda delivers a creamy burst of indulgence. Perfect for those who like their fizz with flair."
  },
  {
    id: 2,
    name: "Red Orange",
    // category: "Energy Drinks",
    price: "$3.49",
    image: product2,
    description: "Zesty and refreshing, Red Orange explodes with citrus sunshine in every sip. A bold pick me up that’s anything but ordinary."
  },
  {
    id: 4,
    name: "Red Cola",
    // category: "Smoothies",
    price: "$5.99",
    image: product4,
    description: "Rich, bold, and unmistakably Red this cola hits with deep caramel notes and a crisp finish. A timeless taste with a modern edge."
  },
  {
    id: 5,
    name: "Red Prite",
    // category: "Fruit Juices",
    price: "$6.49",
    image: product5,
    description: "Lime-lemon sparkle with a punch of attitude, Red Prite is the ultimate thirst quencher. Light, lively, and always on point."
  },
  {
    id: 6,
    name: "Red Ginger Beer",
    // category: "Coffee",
    price: "$4.49",
    image: product6,
    description: "Spicy, snappy, and full of bite—Red Ginger Beer brings the heat with every gulp. A fiery twist on your fizzy fix"
  }
  ,
  {
    id: 6,
    name: "Red Nexta",
    // category: "Coffee",
    price: "$4.49",
    image: product7,
    description: "A bold fusion of energy and flavor, Red Nexta powers you up with every sip. It’s the next level soda for those who never hit pause."
  }
];

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  const [articles, setArticles] = useState<any>([])
  // const [loading, setLoading] = useState(false);

  const getArticles = async () => {
    // setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_CONVEX_URL}/articles?companyId=${import.meta.env.VITE_COMPANY_ID}&count=3`
      );
      const data = await res.json();
      setArticles(data.output);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);


  type NewsCategoryKey = keyof typeof NEWS_CATEGORIES;



  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-gray-50 z-10"></div>

        <div className="relative z-20 w-full container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="inline-block mb-6 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-300 uppercase"
            >
              The Standard of Refreshment
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[1.05]"
            >
              Taste the Moment,
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 via-white to-white">
                {' '}Live
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee1e23] to-[#d4a574]">
                {" "}Better.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed pt-8 pb-6"
            >
              Discover our refreshing collection of beverages, crafted to deliver bold flavors, great taste, and an enjoyable experience in every sip.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8"
            >
              <Link
                to="/products"
                className="group relative flex items-center justify-center px-10 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all bg-[#ee1e23] rounded-full overflow-hidden hover:scale-105 shadow-[0_0_40px_-10px_rgba(238,30,35,0.5)] border border-transparent"
              >
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Explore Products
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="group flex items-center justify-center px-10 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all rounded-full border border-white/30 hover:bg-white hover:text-black hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-red-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Why Choose Red Beverages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We're committed to delivering exceptional quality and sustainable practices
              in every bottle we produce.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Leaf,
                title: "100% Refreshing Taste",
                description: "Enjoy a refreshing beverage experience with great flavor in every sip."
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized for excellence in taste and quality by industry experts worldwide."
              },
              {
                icon: Users,
                title: "Community First",
                description: "Supporting local communities and sustainable farming practices globally."
              },
              {
                icon: Globe,
                title: "Eco-Friendly",
                description: "Committed to sustainable packaging and carbon-neutral manufacturing processes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl hover:shadow-2xl border border-white transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ee1e23] to-[#d4a574] rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-8 transform rotate-3 hover:rotate-6 transition-transform">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Discover our most popular Beverages, crafted with care and passion for exceptional taste.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group bg-gray-50 rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 border border-gray-100/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative aspect-square mb-8 overflow-hidden rounded-[1.5rem] flex items-center justify-center bg-white shadow-sm border border-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-auto h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                  />
                </div>
                <div className="relative z-10 text-center px-2">
                  {/* <span className="inline-block px-4 py-1.5 bg-red-50 text-[#ee1e23] rounded-full text-xs font-bold tracking-wider mb-4 border border-red-100">
                    {product.category || 'BEST SELLER'}
                  </span> */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#ee1e23] transition-colors">{product.name}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/products"
              className="group inline-flex items-center px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-[#ee1e23] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              View All Products
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 rounded-t-[3rem]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Stay updated with our latest product launches, sustainability initiatives, and community events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((news: any, index: number) => (
              <motion.article
                key={news.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-gray-900 rounded-full text-xs font-bold tracking-wider shadow-sm">
                      {NEWS_CATEGORIES[news.category as NewsCategoryKey]?.label || 'Updates'}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-[#ee1e23] mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {news.date ? new Date(news.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Recent'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ee1e23] transition-colors">{news.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{news.excerpt}</p>
                  <Link
                    to={`/news/${news._id}`}
                    className="inline-flex items-center text-gray-900 font-bold hover:text-[#ee1e23] transition-colors mt-auto group/link"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/news"
              className="inline-flex items-center px-10 py-4 bg-white text-gray-900 border-2 border-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View All News
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;