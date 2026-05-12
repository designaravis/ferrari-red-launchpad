import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { client, urlFor } from "@/lib/contentful"; 

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          order: ['-sys.createdAt']
        });
        
        const formattedPosts = response.items.map((item: any) => ({
          title: item.fields.title,
          slug: item.fields.slug,
          date: item.fields.date || item.sys.createdAt,
          excerpt: item.fields.excerpt || "Click to read our latest agency update...",
          mainImage: item.fields.mainImage
        }));
        
        setPosts(formattedPosts as any);
      } catch (error) {
        console.error("Contentful fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-32">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Daily Updates
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our latest insights on high-performance digital strategy and SEO.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <BlogCard 
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt || "Click to read our latest agency update..."}
                date={new Date(post.date).toLocaleDateString()}
                // Uses the urlFor tool to transform Sanity images
                image={post.mainImage ? urlFor(post.mainImage).url() : "/placeholder-blog.jpg"}
                slug={post.slug}
                category="SEO Strategy"
              />
            ))}
          </div>
        )}
        
        {!loading && posts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No updates posted yet. Check back tomorrow!
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
