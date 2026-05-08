import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiSubstack } from "react-icons/si";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Using rss2json to fetch and parse the Substack RSS feed
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://tejasssuthrave.substack.com/feed`
        );
        const data = await response.json();

        if (data.status === "ok") {
          // Map the RSS items to our article format
          const formattedArticles = data.items.slice(0, 3).map((item) => {
            // Extract a summary from the content (strip HTML)
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = item.content || item.description;
            
            // Extract the first image if thumbnail is missing
            let extractedImage = item.thumbnail;
            if (!extractedImage) {
              const img = tempDiv.querySelector("img");
              if (img) extractedImage = img.src;
            }

            const plainText = (tempDiv.textContent || tempDiv.innerText || "").replace(/\s+/g, ' ').trim();
            
            // Refine summary: Get first two sentences for a more engaging lead
            const sentences = plainText.match(/[^.!?]+[.!?]+/g) || [plainText];
            let refinedSummary = sentences.slice(0, 2).join(' ');
            
            // Fallback if no sentences detected or too short
            if (refinedSummary.length < 50 && plainText.length > 50) {
              refinedSummary = plainText.substring(0, 120) + "...";
            }

            return {
              title: item.title,
              summary: refinedSummary,
              date: new Date(item.pubDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              readTime: "5 min read", // Substack doesn't provide this in RSS, defaulting
              link: item.link,
              // Use the extracted image or a fallback tech image
              image: extractedImage || `https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop`,
            };
          });
          setArticles(formattedArticles);
        } else {
          throw new Error("Failed to fetch articles");
        }
      } catch (err) {
        console.error("Error fetching Substack articles:", err);
        setError("Could not load latest articles. Please check back later.");
        // Fallback to some default data if fetch fails
        setArticles([
          {
            title: "Demystifying Cloud Infrastructure",
            summary: "Explore the core components of modern cloud environments and how to build scalable systems. Learn to navigate the complexities of AWS and Linux administration with ease.",
            date: "Recent",
            readTime: "5 min read",
            link: "https://tejasssuthrave.substack.com/",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
          },
          {
            title: "The Future of AI Development",
            summary: "Discover how prompt engineering and machine learning are transforming the software development landscape. Stay ahead of the curve with insights into intelligent system design.",
            date: "Recent",
            readTime: "4 min read",
            link: "https://tejasssuthrave.substack.com/",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section
      id="articles"
      className="trend-section relative font-sans flex flex-col justify-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-indigo-900 via-purple-900 to-slate-900 opacity-20 blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-20">
          <div className="mb-4 tech-label tech-text-accent flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
            06 // Writing
            <span className="w-8 h-[1px] bg-indigo-400/50"></span>
          </div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase text-center flex flex-wrap justify-center items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SiSubstack className="text-[#FF6719]" /> Technical Articles
          </motion.h2>
          <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg font-mono tracking-wide text-center max-w-2xl">
            Insights, tutorials, and deep dives into Linux, Cloud, and Python development.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="trend-card group flex flex-col h-full hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Image Header */}
                <div className="w-full h-48 sm:h-56 overflow-hidden relative border-b border-[var(--border-color)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] to-transparent z-10" />
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%] group-hover:grayscale-0" 
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-20">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-center justify-between mb-4 text-xs font-mono text-[var(--accent-light)]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8 flex-1">
                    {article.summary}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-mono text-[var(--accent)] group-hover:text-[var(--accent-light)] transition-colors">
                    Read on Substack <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://substack.com/@tejasssuthrave"
            target="_blank"
            rel="noopener noreferrer"
            className="trend-button"
          >
            <SiSubstack className="text-xl" />
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}

