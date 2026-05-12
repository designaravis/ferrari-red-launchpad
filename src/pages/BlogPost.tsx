import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "@/lib/contentful";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
  }, [slug]);

  if (!post) return <div className="bg-background text-foreground min-h-screen pt-32 text-center">Loading Article...</div>;

  return (
    <div className="bg-background text-foreground min-h-screen">
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
        <div className="prose prose-red max-w-none">
          {post.body && documentToReactComponents(post.body)}
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;