import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "@/lib/contentful";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': slug,
          limit: 1
        });
        
        if (response.items.length > 0) {
          setPost(response.items[0].fields);
        }
      } catch (error) {
        console.error("Error fetching Contentful post:", error);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <div className="bg-background text-foreground min-h-screen pt-32 text-center">Loading Article...</div>;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/#blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        <article>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            {post.title}
          </motion.h1>

          {post.mainImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video mb-12 overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src={urlFor(post.mainImage).url()} 
                className="w-full h-full object-cover" 
                alt={post.title} 
              />
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg md:prose-xl prose-red max-w-none dark:prose-invert"
          >
            {post.body && documentToReactComponents(post.body)}
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;