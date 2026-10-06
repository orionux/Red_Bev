import React from 'react';
import { motion } from 'framer-motion';
// import { products } from '../data/mockData';

import product1 from "../assets/products/Cream.png"
import product2 from "../assets/products/Orange.png"
import product4 from "../assets/products/MAX BOTTLES-04.png"
import product5 from "../assets/products/Soda.png"
import product6 from "../assets/products/ginger.png"
import product7 from "../assets/products/Nexta.png"

const products = [
  {
    id: 1,
    name: "Red Orange",
    // category: "Energy Drinks",
    price: "$3.49",
    image: product2,
    description: "Zesty and refreshing, Max Orange explodes with citrus sunshine in every sip. A bold pick me up that’s anything but ordinary."
  },
  {
    id: 2,
    name: "Red Nexta",
    // category: "Coffee",
    price: "$4.49",
    image: product7,
    description: "A bold fusion of energy and flavor, Red Nexta powers you up with every sip. It’s the next level soda for those who never hit pause."
  },
  {
    id: 3,
    name: "Red Cream Soda",
    // category: "Fruit Juices",
    price: "$4.99",
    image: product1,
    description: "Velvety smooth with a nostalgic vanilla twist, Red Cream Soda delivers a creamy burst of indulgence. Perfect for those who like their fizz with flair."
  },/*
   {
    id: 4,
    name: "Red Cola",
    // category: "Smoothies",
    price: "$5.99",
    image: product4,
    description: "Rich, bold, and unmistakably Red this cola hits with deep caramel notes and a crisp finish. A timeless taste with a modern edge."
  },*/
  {
    id: 5,
    name: "Red Ginger Beer",
    // category: "Coffee",
    price: "$4.49",
    image: product6,
    description: "Spicy, snappy, and full of bite—Red Ginger Beer brings the heat with every gulp. A fiery twist on your fizzy fix"
  }
  ,

 
  {
    id: 6,
    name: "Red Prite",
    // category: "Fruit Juices",
    price: "$6.49",
    image: product5,
    description: "Lime-lemon sparkle with a punch of attitude, Red Prite is the ultimate thirst quencher. Light, lively, and always on point."
  },
  
];

const Products: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('All');

  // const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // const filteredProducts = products.filter(product => {
  //   const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });



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
            Our Product Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Explore our complete collection of refreshing beverages, bringing together distinctive flavors and an enjoyable taste experience for every occasion.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              /> */}
            </div>

            {/* Category Filter */}
            {/* <div className="flex items-center space-x-4">
              <Filter className="text-gray-600 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            // className="flex wrap gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-200"
              >
                <div className="relative  overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-100 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {/* <span className="px-3 py-1 bg-[#662D91] rounded-full text-sm font-medium">
                                   {product.category}
                                 </span> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    {/* <span className="text-2xl font-bold text-[#662D91]">{product.price}</span> */}
                    {/* <button className="px-6 py-2 bg-gradient-to-r from-[#0C4DA2]/90 to-[#662D91]/90 text-white rounded-full hover:from-[#0C4DA2] hover:to-[#662D91] transition-all duration-300 transform hover:scale-105">
                                   Learn More
                                 </button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {products.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </motion.div>
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Contact our team for custom orders or to learn more about our upcoming product releases.
            </p>
            <button className="px-8 py-4 bg-white text-[#ee1e23] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;