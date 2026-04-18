import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react"; // Run: npm install @portabletext/react

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      // Fetches the specific post matching the URL slug
      const query = `*[_type == "post" && slug.current == $slug][0]`;
      const data = await client.fetch(query, { slug });
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div className="bg-black text-white min-h-screen pt-32 text-center">Loading Article...</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
        {post.mainImage && (
          <img 
            src={urlFor(post.mainImage).url()} 
            className="w-full h-[400px] object-cover rounded-xl mb-12" 
            alt={post.title} 
          />
        )}
        <div className="prose prose-invert prose-red max-w-none">
          {/* This renders the body text you typed in Sanity */}
          <PortableText value={post.body} />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;