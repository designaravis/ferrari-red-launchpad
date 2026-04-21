import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { client, urlFor } from "@/lib/sanity"; 

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Advanced query to get formatted dates and clean text
        const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
          title,
          "slug": slug.current,
          "date": publishedAt,
          "excerpt": array::join(body[0].children[].text, ""),
          mainImage
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-32">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
            Daily Updates
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
