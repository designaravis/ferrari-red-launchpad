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
import { client, urlFor } from "@/lib/sanity"; 

const Index = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        // This query fetches the 3 most recent posts for the home page
        const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
          title,
          "slug": slug.current, 
          "date": publishedAt,
          "excerpt": array::join(body[0].children[].text, ""),
          mainImage
        }`;
        const data = await client.fetch(query);
        setLatestPosts(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
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