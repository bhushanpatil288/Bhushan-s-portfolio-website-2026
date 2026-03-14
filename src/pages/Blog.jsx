import { useState } from "react"
import Layout from "../Layout"
import PageHeading from "../components/PageHeading"
import PageSubHeading from "../components/pageSubHeading"

const posts = [
  {
    id: "react-component-thinking",
    title: "Thinking in Components with React",
    date: "Feb 2026",
    tag: "React Fundamentals",
    excerpt:
      "How I break down real-world UI into small, reusable React components that stay easy to reason about.",
    content: [
      "When starting a React project, I always begin by drawing boxes around sections of the UI. Each box usually becomes a component.",
      "I think about three things: (1) what data this component needs, (2) where that data should live, and (3) which components can be reused elsewhere.",
      "This mindset keeps my portfolio projects like the one you’re viewing now more maintainable, predictable, and easy to extend.",
    ],
  },
  {
    id: "react-state-management-basics",
    title: "State Management Basics in React",
    date: "Jan 2026",
    tag: "State & Props",
    excerpt:
      "A practical view of when to keep state local, when to lift it up, and how I avoid prop drilling in small–medium projects.",
    content: [
      "In my smaller React apps, I prefer to keep state as close as possible to where it’s used.",
      "When multiple components need the same data, I lift the state up to the nearest common parent and pass it down via props.",
      "For this portfolio, centralized configuration like the projects constants keeps my UI data-driven while state remains simple.",
    ],
  },
  {
    id: "react-hooks-daily-usage",
    title: "React Hooks I Use Every Day",
    date: "Dec 2025",
    tag: "Hooks",
    excerpt:
      "useState, useEffect, and a few patterns that keep my logic clean without over-engineering the app.",
    content: [
      "useState is my go-to for UI state such as toggling modals, controlling inputs, and managing filters.",
      "useEffect is especially useful when I need to synchronize the UI with an external system like localStorage or an API.",
      "I also like to extract small custom hooks when a piece of logic is reused in more than one place.",
    ],
  },
  {
    id: "react-ui-data-driven",
    title: "Building Data-Driven React UIs",
    date: "Nov 2025",
    tag: "Best Practices",
    excerpt:
      "Why I prefer configuration objects (like my project list) over hardcoding content inside components.",
    content: [
      "This portfolio uses centralized configuration for projects and services. The components simply render the data.",
      "This makes it easy to add new projects or update copy without touching the presentation logic.",
      "It’s a simple pattern, but it gives me a lot of flexibility and keeps my JSX lean.",
    ],
  },
  {
    id: "react-performance-basics",
    title: "React Performance Basics for Small Apps",
    date: "Oct 2025",
    tag: "Performance",
    excerpt:
      "Simple habits I follow to keep small React apps snappy without premature optimization.",
    content: [
      "I start with clean renders: avoid unnecessary re-renders by structuring components sensibly and passing only what’s needed.",
      "Using React DevTools helps me see which components are rendering too often.",
      "Only when I notice real performance issues do I reach for memoization and splitting large components.",
    ],
  },
]

const Blog = () => {
  const [activePost, setActivePost] = useState(null)

  return (
    <Layout>
      <PageHeading title="Blog" />

      <p className="text-sm text-gray-300 leading-relaxed mt-6">
        I like to document what I learn while building React and JavaScript projects.
        These short notes capture how I think about components, state, and building
        maintainable UIs.
      </p>

      <div className="mt-10">
        <PageSubHeading title="Latest Articles" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="my-bg-secondary rounded-2xl p-5 border border-gray-700 hover:border-accent transition-colors flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {post.date}
                </span>
              </div>

              <p className="text-xs uppercase tracking-wide text-gray-400">
                {post.tag}
              </p>

              <p className="text-sm text-gray-300 line-clamp-3">{post.excerpt}</p>

              <button
                type="button"
                onClick={() => setActivePost(post)}
                className="mt-2 self-start text-xs px-3 py-2 rounded-lg my-bg-primary border border-accent text-accent hover:bg-accent hover:text-black transition-colors"
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>

      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="my-bg-primary w-full max-w-2xl mx-4 rounded-2xl border border-gray-700 shadow-2xl max-h-[80vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-700">
              <div>
                <h2 className="text-xl font-semibold">{activePost.title}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {activePost.date} • {activePost.tag}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                Close
              </button>
            </div>

            <div className="px-6 py-4 overflow-y-auto space-y-4 text-sm text-gray-200">
              {activePost.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Blog