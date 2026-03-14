import { NavLink } from "react-router-dom"
import { navItems } from "./utils/data"
import avatar from "/images/my-avatar.png"

const Layout = ({ children }) => {
  return (
    <section className="mt-10 mx-10">
      <div className="container mx-auto">
        <div className="flex gap-6 flex-col xl:flex-row">

          <aside className="xl:w-1/4 my-bg-primary border border-gray-700 rounded-2xl px-6 py-6">
            <div className="flex gap-6 xl:flex-col xl:items-center">
              <div className="my-bg-tertiary rounded-3xl p-3 overflow-hidden xl:w-full flex justify-center">
                <div className="overflow-hidden my-bg-tertiary rounded-3xl flex justify-center">
                  <img src={avatar} alt="Avatar of Bhushan Patil" className="w-32 h-32 object-cover rounded-2xl" />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div>
                  <h1 className="text-2xl xl:text-center">Bhushan Patil</h1>
                  <div className="flex xl:justify-center">
                    <p className="text-xs my-bg-secondary py-2 rounded-lg mt-3 px-3">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="mt-2 space-y-2 text-xs text-gray-300">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wide text-gray-400">Email</span>
                    <a
                      href="mailto:sharewithbhushan@gmail.com"
                      className="break-all hover:text-accent transition-colors"
                    >
                      sharewithbhushan@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wide text-gray-400">Phone</span>
                    <a
                      href="tel:+919265827402"
                      className="hover:text-accent transition-colors"
                    >
                      +91 92658 27402
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="xl:w-3/4 mb-20 xl:mb-0 border border-gray-700 rounded-2xl px-10 px-3 py-10 my-bg-primary overflow-hidden relative">
            <nav className="fixed left-0 w-screen xl:w-auto bottom-0 xl:bottom-auto xl:left-auto xl:absolute xl:top-0 xl:-right-2  my-bg-secondary py-5 px-10 rounded-t rounded-2xl">
              <ul className="flex gap-5 md:gap-10 justify-center xl:justify-start">
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