import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category?: string;
  image?: string; 
};

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug, category, image }) => {
  return (
    <motion.article 
      /* 1. Added Hover Lift and Scale Animation */
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-zinc-100 flex flex-col"
    >
      {/* Image Section - Smooth Zoom on Hover */}
      <Link to={`/blog/${slug}`} className="block h-64 overflow-hidden">
        {image && (
          <motion.img 
            src={image} 
            alt={title} 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover" 
          />
        )}
      </Link>
      
      {/* Content Section - Solid Ferrari Red background */}
      <div className="p-8 bg-red-600 text-white flex-grow flex flex-col justify-between transition-colors duration-500 group-hover:bg-red-700">
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-90">
              {category || "Daily News"}
            </span>
            <span className="text-white/70 text-xs font-medium">{date}</span>
          </div>
          
          <Link to={`/blog/${slug}`}>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">
              {title}
            </h3>
          </Link>
          
          <p className="text-white/80 leading-relaxed mb-8 line-clamp-3 italic">
            {excerpt}
          </p>
        </div>

        {/* Read Article - Icon moves smoothly on hover */}
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white pt-6 border-t border-white/20 group/btn"
        >
          <span className="relative overflow-hidden">
            Read Article 
          </span>
          <motion.div
            animate={{ x: 0 }}
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.article>
  );
};