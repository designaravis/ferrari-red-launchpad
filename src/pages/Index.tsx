import { useEffect, useState } from "react";
import LogoScroll from "@/components/LogoScroll";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WebServices from '@/components/WebServices'; // Import the new section
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { BlogCard } from "@/components/BlogCard"; 
import { client, urlFor } from "@/lib/contentful"; 

const Index = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          order: ['-sys.createdAt'],
          limit: 3
        });
        
        const formattedPosts = response.items.map((item: any) => ({
          title: item.fields.title,
          slug: item.fields.slug,
          date: item.fields.date || item.sys.createdAt,
          excerpt: item.fields.excerpt || "Read our latest agency update...",
          mainImage: item.fields.mainImage
        }));
        
        setLatestPosts(formattedPosts as any);
      } catch (error) {
        console.error("Contentful fetch error:", error);
      }
    };
    fetchLatest();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WebServices />
      <ServicesSection />
      <PortfolioSection />
      <LogoScroll />
      
      {/* BLOG SECTION: Shows above Footer */}
      <section id="blog" className="py-20 max-w-7xl mx-auto px-4 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-10 text-red-600">Latest Updates</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post: any) => (
            <BlogCard 
              key={post.slug}
              title={post.title}
              date={new Date(post.date).toLocaleDateString()}
              image={post.mainImage ? urlFor(post.mainImage).url() : "/placeholder.jpg"}
              slug={post.slug}
              excerpt={post.excerpt || "Read our latest agency update..."}
              category="Daily News"
            />
          ))}
        </div>
        
        {/* If no posts are found, show a placeholder message */}
        {latestPosts.length === 0 && (
          <p className="text-gray-500 text-center py-10">No recent updates found.</p>
        )}
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
