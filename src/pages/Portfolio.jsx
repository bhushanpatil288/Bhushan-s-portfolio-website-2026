import Layout from "../Layout"
import PageHeading from "../components/PageHeading"
import PageSubHeading from "../components/pageSubHeading"
import { allProjects } from "../constants/projects"

const Portfolio = () => {
  return (
    <Layout>
      <PageHeading title="Portfolio" />

      <p className="text-sm text-gray-300 leading-relaxed mt-6">
        A collection of my personal, academic, and experimental projects. Each project
        helped me practice real-world problem solving, polish my fundamentals, and learn
        new tools in the JavaScript and React ecosystem.
      </p>

      <div className="mt-10">
        <PageSubHeading title="All Projects" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <article
              key={project.id}
              className="my-bg-secondary rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="text-xs my-bg-primary px-2 py-1 rounded-lg text-gray-300">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-wide text-gray-400">
                  {project.type} &bull; {project.status}
                </p>

                <p className="text-sm text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs my-bg-primary px-2 py-1 rounded-md text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-2 rounded-lg my-bg-primary text-accent border border-accent hover:bg-accent hover:text-black transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-2 rounded-lg my-bg-primary text-gray-200 border border-gray-600 hover:border-accent transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio