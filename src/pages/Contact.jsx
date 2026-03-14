import Layout from "../Layout"
import PageHeading from "../components/PageHeading"
import PageSubHeading from "../components/pageSubHeading"

const Contact = () => {
  return (
    <Layout>
      <PageHeading title="Contact Me" />

      <p className="text-sm text-gray-300 leading-relaxed mt-6">
        I&apos;m open to frontend, full stack roles, freelance work, and collaboration on
        interesting React or JavaScript projects. Feel free to reach out using the
        details below.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <PageSubHeading title="Contact Details" />
          <div className="mt-6 space-y-4 text-sm text-gray-200">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
              <a
                href="mailto:sharewithbhushan@gmail.com"
                className="text-accent hover:underline break-all"
              >
                sharewithbhushan@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
              <a
                href="tel:+919265827402"
                className="hover:text-accent transition-colors"
              >
                +91 92658 27402
              </a>
            </div>
          </div>
        </div>

        <div>
          <PageSubHeading title="Quick Message" />
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name</label>
              <input
                type="text"
                className="w-full my-bg-secondary border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full my-bg-secondary border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Message</label>
              <textarea
                className="w-full my-bg-secondary border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-accent min-h-[120px]"
                placeholder="Write a short message..."
              />
            </div>

            <button
              type="submit"
              className="text-xs px-4 py-2 rounded-lg my-bg-secondary border border-accent text-accent hover:bg-accent hover:text-black transition-colors"
            >
              Send (opens your email client)
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact