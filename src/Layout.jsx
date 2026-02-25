import { NavLink } from "react-router-dom"
import { navItems } from "./utils/data"
import avatar from "/images/my-avatar.png"

const Layout = ({ children }) => {
  return (
    <section className="mt-10 mx-10">
      <div className="container mx-auto">
        <div className="flex gap-6 flex-col xl:flex-row">

          <aside className="xl:w-1/4 px-3 py-2 my-bg-primary border border-gray-700 rounded-2xl px-5 py-5">
            <div className="flex gap-8 xl:flex-col">
              <div className="my-bg-tertiary rounded-3xl p-3 overflow-hidden xl:mx-12 xl:flex xl:justify-center">
                <div className="overflow-hidden y-bg-tertiary rounded-3xlflex justify-center">
                  <img src={avatar} alt="" className="w-30 scale-140" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl xl:text-center">Bhushan Patil</h1>
                <div className="flex xl:justify-center">
                  <p className="text-xs my-bg-secondary py-2 rounded-lg mt-3 px-3">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="xl:w-3/4 border border-gray-700 rounded-2xl px-10 px-3 py-10 my-bg-primary overflow-hidden relative">
            <nav className="fixed left-0 w-screen xl:w-auto bottom-0 xl:bottom-auto xl:left-auto xl:absolute xl:top-0 xl:-right-2  my-bg-secondary py-5 px-10 rounded-t rounded-2xl">
              <ul className="flex gap-10 justify-center xl:justify-start">
                {navItems.map((item, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={item.path}
                        className={({ isActive, isPending }) =>
                          isActive ? "navActive" : ""
                        }
                      > {item.title} </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div>
              {children}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Layout