import Layout from "../Layout"
import PageHeading from "../components/PageHeading"

const Resume = () => {
  const resumeUrl = "/Bhushan_Ghansham_Patil_Resume_2026-03-31.pdf"

  return (
    <Layout>
      <PageHeading title="Resume" />

      <p className="text-sm text-gray-300 leading-relaxed mt-6">
        Here is my latest resume outlining my experience, skills, and education. You can
        view it directly below or download a copy.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-4 py-2 rounded-lg my-bg-secondary border border-accent text-accent hover:bg-accent hover:text-black transition-colors"
        >
          Open in New Tab
        </a>
        <a
          href={resumeUrl}
          download
          className="text-xs px-4 py-2 rounded-lg my-bg-secondary border border-gray-600 text-gray-200 hover:border-accent transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 h-[480px] my-bg-secondary rounded-xl overflow-hidden border border-gray-700">
        <iframe
          src={resumeUrl}
          title="Bhushan Patil Resume"
          className="w-full h-full"
        />
      </div>
    </Layout>
  )
}

export default Resume