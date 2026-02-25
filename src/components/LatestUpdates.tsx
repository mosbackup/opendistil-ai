import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

const LatestUpdates = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blog/posts.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data.slice(0, 2)))
      .catch(console.error);
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gradient-white">Latest Updates</h2>
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bento-card group flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
