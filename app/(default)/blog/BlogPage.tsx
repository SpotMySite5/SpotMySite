type TocItem = {
  title?: string;
  paragraphs?: string[];
};

type Blog = {
  id: string;
  title: string;
  date: string;
  image?: string;
  imageCaption?: string;
  url: string;
  excerpt?: string;
  // content can be either plain text or a structured object with optional title and table-of-contents
  content?: { title?: string; paragraphs?: string[]; toc?: TocItem[] };
  contentHtml?: string; // preferred: safe HTML (server sanitized)
  author?: string;
};

export default function BlogPage({ blog }: { blog: Blog }) {
  const formattedDate = blog.date
    ? new Date(`${blog.date}T00:00:00`).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  // fetch data based on slug
  // can be DB, API, file, etc.

  return (
    <article className="mt-20 blog_sec max-lg:p-12 max-md:p-8 max-lg:pt-0">
      <div className="blog__container px-4 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {formattedDate}
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-(family-name:--font-service) font-bold text-gray-900">
            {blog?.content?.title}
          </h1>
          {blog.excerpt && (
            <p className="mt-4 text-lg text-gray-700">{blog.excerpt}</p>
          )}
        </header>

        {blog.image && (
          <figure className="mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded-lg shadow-lg object-cover max-h-[520px] mx-auto"
            />
            {blog.imageCaption && (
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                {blog.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="prose letter__article prose-lg max-w-none mx-auto text-gray-800">
          {/* Prefer contentHtml (server-sanitized). Fallback to plain content. */}
          {blog.contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
          ) : blog.content ? (
            <>
              {blog.content.paragraphs &&
                blog.content.paragraphs.map((para, j) => (
                  <p key={`para--${j}`} className="leading-relaxed">
                    {para}
                  </p>
                ))}

              {blog.content.toc && blog.content.toc.length
                ? blog.content.toc.map((p, i) => (
                    <div key={`toc-${i}`}>
                      {p.title && <h3>{p.title}</h3>}
                      {p.paragraphs &&
                        p.paragraphs.map((para, j) => (
                          <p key={`para-${i}-${j}`} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                    </div>
                  ))
                : null}

              {!blog.content.paragraphs &&
                !(blog.content.toc && blog.content.toc.length) && (
                  <p>Error loading blog content...</p>
                )}
            </>
          ) : (
            <p>Error loading blog content...</p>
          )}
        </div>

        <footer className="mt-12 pt-6 text-center text-sm text-gray-600">
          {blog.author && (
            <div className="mb-2">
              By <strong>{blog.author}</strong>
            </div>
          )}
          <a href="/blog" className="text-primary-600 hover:underline">
            ← Back to Newsroom
          </a>
        </footer>
      </div>
    </article>
  );
}
