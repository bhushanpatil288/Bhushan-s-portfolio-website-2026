import Layout from "../Layout"
import RenderAboutCards from "../components/AboutComponents/RenderAboutCards"
import PageHeading from "../components/PageHeading"
import PageSubHeading from "../components/pageSubHeading"

const About = () => {
  return (
    <Layout>
      <PageHeading title="About Me" />
      <p className="text-sm text-gray-300 leading-relaxed mt-8">I am a passionate and results-oriented professional with a strong foundation in Full Stack web development With 1 years of experience, I have honed my skills in MERN stack and have a proven track record of delivering high-quality work that exceeds expectations. I am a quick learner, a team player, and I am always eager to take on new challenges and grow professionally.</p>
      <p className="text-sm text-gray-300 leading-relaxed mt-8">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>

      <div className="mt-10">
        <PageSubHeading title="What I'm Doing" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <RenderAboutCards />
        </div>
      </div>
    </Layout>
  )
}

export default About