import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import { NEWS_CATEGORIES } from '../helpers/enums';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  interface Article {
    _id: string;
    _creationTime: number;
    category: number;
    companyId: string;
    content: string;
    createdAt: number;
    date: string;
    excerpt: string;
    extraImages: string[];
    imageUrl: string;
    isHidden: boolean;
    links: { label: string; url: string }[];
    title: string;
    updatedAt: number;
  }

  const [article, setArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  const getArticle = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_CONVEX_URL}/article?companyId=${import.meta.env.VITE_COMPANY_ID}&articleId=${id}`
      );
      const data = await res.json();
      console.log(data.output)
      setArticle(data.output);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticle();
  }, [id]);

  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_CONVEX_URL}/articles?companyId=${import.meta.env.VITE_COMPANY_ID}&count=3`
      );
      const data = await res.json();
      setArticles(data.output);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#d4a574]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 bg-[#ee1e23] text-white rounded-full hover:bg-[#c41e1e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  type NewsCategoryKey = keyof typeof NEWS_CATEGORIES;

  // Helper for Bento Grid classes to ensure gap-free layout
  const getGridClass = (index: number) => {
    // Optimized Bento Pattern (Repeat of 6) to fill a 4-column grid gap-free
    // [Big 2x2] [Small] [Small] -> Row 1 (Cols: 2+1+1=4)
    // [Big continues] [Small] [Small] -> Row 2 (Cols: 2+1+1=4)
    // Actually, "dense" flow handles backfilling.
    // We just need to ensure we don't have impossible shapes.
    // 2x2 is the only special shape.

    // Pattern: 
    // Index 0: Big (2x2)
    // Index 5: Big (2x2)
    // This leaves 4 items (1,2,3,4) to fill the space next to item 0?
    // If Item 0 is 2x2 (Cols 1-2, Rows 1-2)
    // Item 1: 1x1 (Col 3, Row 1)
    // Item 2: 1x1 (Col 4, Row 1)
    // Item 3: 1x1 (Col 3, Row 2)
    // Item 4: 1x1 (Col 4, Row 2)
    // Perfect 2x2 block next to it.
    // So if we make every 5th item BIG, we consume 1 item + 4 items = 5 items.
    // BUT 2x2 takes 4 cells. + 4 small items = 8 cells.
    // A 4-column grid means 2 rows.
    // So 5 items fill 2 rows perfectly?
    // Item 0 (4 cells) + Item 1 (1) + Item 2 (1) + Item 3 (1) + Item 4 (1) = 8 cells.
    // 4 cols * 2 rows = 8 cells.
    // YES. logic holds.

    if (index % 5 === 0) return "md:col-span-2 md:row-span-2 min-h-[400px]";
    return "md:col-span-1 md:row-span-1 min-h-[200px]";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-[#ee1e23] selection:text-white">
      {/* Immersive Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            />
          </motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Link
              to="/news"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-full mr-3 group-hover:bg-white/20 transition-all">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wide">Back to News</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-[#d4a574] text-white rounded-full text-sm font-bold tracking-wide shadow-lg shadow-[#d4a574]/20">
                {NEWS_CATEGORIES[article.category as NewsCategoryKey]?.label}
              </span>
              <div className="flex items-center text-gray-100 bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Content - Floating Card Style */}
      <section className="relative z-10 -mt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden ring-1 ring-gray-100/50"
            >

              <div className="p-8 md:p-16">
                {/* Excerpt */}
                <p className="text-2xl md:text-3xl text-gray-500 font-light mb-12 leading-relaxed border-l-4 border-[#ee1e23] pl-6 italic">
                  {article.excerpt}
                </p>

                {/* Body Content */}
                <div className="prose prose-lg md:prose-xl max-w-none text-gray-800 leading-8 mb-16">
                  <p className="whitespace-pre-wrap">{article.content}</p>
                </div>

                {/* External Links - Resource Cards */}


                {/* Bento Grid Gallery */}
                {article.extraImages && article.extraImages.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                      <span className="w-1 h-8 bg-[#d4a574] rounded-full mr-3"></span>
                      Image Gallery
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:grid-auto-flow-dense">
                      {article.extraImages.map((img, index) => {
                        const gridClass = getGridClass(index);

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            className={`relative rounded-xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 ${gridClass}`}
                          >
                            <img
                              src={img}
                              alt={`Gallery image ${index + 1}`}
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {article.links && article.links.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-1 h-8 bg-[#ee1e23] rounded-full mr-3"></span>
                      Related Links
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {article.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all group border border-gray-100 relative overflow-hidden"
                        >
                          {/* <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ArrowRight className="w-24 h-24 -rotate-45" />
                          </div> */}
                          <div className="p-3 bg-red-100/50 text-[#ee1e23] rounded-xl mr-5 group-hover:scale-110 transition-transform z-10">
                            <ArrowRight className="w-6 h-6 -rotate-45" />
                          </div>
                          <div className="z-10 min-w-0">
                            <span className="block font-bold text-gray-900 text-lg mb-1">{link.label}</span>
                            <span className="text-sm text-gray-500 truncate block font-mono bg-white/50 px-2 py-0.5 rounded w-fit max-w-full">
                              {link.url.replace(/^https?:\/\//, '')}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}


                {/* Footer / Share */}
                <div className="border-t border-gray-100 pt-10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Tag className="w-5 h-5" />
                    <span className="font-medium">Filed under:</span>
                    <span className="text-gray-900 font-semibold">
                      {NEWS_CATEGORIES[article.category as NewsCategoryKey]?.label}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all font-semibold ${copied
                      ? 'bg-green-500 text-white'
                      : 'bg-[#ee1e23]/10 text-[#ee1e23] hover:bg-[#ee1e23] hover:text-white'
                      }`}
                  >
                    {copied ? (
                      <>
                        <Share2 className="w-5 h-5" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-5 h-5" />
                        <span>Share Article</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Articles - Refined */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Continue Reading</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#d4a574] to-[#ee1e23] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item, index) => (
              <motion.article
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 animate-fade-in">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-sm font-bold text-gray-900 rounded-lg shadow-sm">
                      {NEWS_CATEGORIES[item.category as NewsCategoryKey]?.label}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-3">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ee1e23] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    to={`/news/${item._id}`}
                    className="inline-flex items-center text-[#ee1e23] font-bold hover:gap-2 transition-all"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;