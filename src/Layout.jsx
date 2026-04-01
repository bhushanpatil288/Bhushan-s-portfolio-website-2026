import { NavLink } from "react-router-dom"
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiTimeLine,
  RiDownloadLine,
  RiLinkedinFill,
  RiTwitterXLine,
  RiInstagramLine,
  RiGithubFill,
  RiWhatsappLine,
} from "@remixicon/react"
import { navItems } from "./utils/data"
import avatar from "/images/my-avatar.png"

const RESUME_URL = "/Mr._Bhushan_Ghansham_Patil_FlowCV_Resume_2026-03-11.pdf"

const contactRows = [
  {
    id: "email",
    label: "Email",
    icon: RiMailLine,
    content: (
      <a
        href="mailto:sharewithbhushan@gmail.com"
        className="text-sm text-white break-all hover:text-[var(--accent)] transition-colors"
      >
        sharewithbhushan@gmail.com
      </a>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    icon: RiPhoneLine,
    content: (
      <a
        href="tel:+919265827402"
        className="text-sm text-white hover:text-[var(--accent)] transition-colors"
      >
        +91 92658 27402
      </a>
    ),
  },
  {
    id: "location",
    label: "Location",
    icon: RiMapPinLine,
    content: <span className="text-sm text-white">Gujarat, India</span>,
  },
  {
    id: "timezone",
    label: "Timezone",
    icon: RiTimeLine,
    content: <span className="text-sm text-white">IST (UTC+5:30)</span>,
  },
]

const socialLinks = [
  { icon: RiLinkedinFill, href: "https://www.linkedin.com/", label: "LinkedIn" },
  { icon: RiTwitterXLine, href: "https://twitter.com/", label: "Twitter" },
  { icon: RiInstagramLine, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: RiGithubFill, href: "https://github.com/bhushanpatil288", label: "GitHub" },
  { icon: RiWhatsappLine, href: "https://wa.me/919265827402", label: "WhatsApp" },
]

const Layout = ({ children }) => {
  return (
    <section className="mt-3 md:mt-10 mx-3 md:mx-10 pb-6 xl:pb-0">
      <div className="container mx-auto max-w-7xl">
        <div className="flex gap-6 flex-col xl:flex-row xl:items-start">
          <aside className="w-full xl:w-[28%] xl:max-w-sm shrink-0 my-bg-primary border border-gray-700/80 rounded-[28px] px-5 py-7 shadow-lg shadow-black/20">
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-[22px] p-2.5 my-bg-tertiary/80 ring-1 ring-white/5">
                <div className="overflow-hidden rounded-[18px] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]">
                  <img
                    src={avatar}
                    alt="Bhushan Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h1 className="mt-5 text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Bhushan Patil
              </h1>
              <span
                className="mt-3 block h-0.5 w-10 rounded-full bg-[var(--accent)]"
                aria-hidden
              />
              <p className="mt-4 inline-flex text-[11px] sm:text-xs my-bg-secondary text-gray-400 py-2 px-4 rounded-full border border-gray-700/60">
                Full Stack Developer
              </p>
            </div>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-600/80 to-transparent" />

            {/* Contact list */}
            <ul className="space-y-5">
              {contactRows.map((row) => {
                const Icon = row.icon
                return (
                  <li key={row.id} className="flex gap-3.5 items-start">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl my-bg-secondary flex items-center justify-center border border-[var(--accent)]/35 text-[var(--accent)] shadow-inner"
                      aria-hidden
                    >
                      <Icon size={20} strokeWidth={0.5} />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-gray-500 font-medium">
                        {row.label}
                      </p>
                      <div className="mt-0.5">{row.content}</div>
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* Social */}
            <div className="mt-7 pt-5 border-t border-gray-700/60">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {socialLinks.map(({ icon: SocialIcon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl my-bg-secondary border border-gray-600/70 flex items-center justify-center text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors"
                    aria-label={label}
                  >
                    <SocialIcon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <a
              href={RESUME_URL}
              download
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[var(--accent)] to-[#e8b84a] shadow-[0_4px_24px_rgba(253,197,99,0.35)] hover:shadow-[0_6px_28px_rgba(253,197,99,0.45)] hover:brightness-105 transition-all"
            >
              <RiDownloadLine size={20} />
              Download Resume
            </a>
          </aside>

          <div className="xl:flex-1 min-w-0 mb-20 xl:mb-0 border border-gray-700 rounded-2xl px-4 sm:px-8 md:px-10 py-10 my-bg-primary overflow-hidden relative">
            <nav className="fixed left-0 w-screen xl:w-auto bottom-0 xl:bottom-auto xl:left-auto xl:absolute xl:top-0 xl:-right-2 my-bg-secondary py-5 px-4 sm:px-10 rounded-t rounded-2xl z-10 border-t xl:border border-gray-700/80 xl:border-gray-700">
              <ul className="flex gap-3 sm:gap-6 md:gap-10 justify-center xl:justify-start text-xs sm:text-sm md:text-base flex-wrap">
                {navItems.map((item, i) => {
                  return (
                    <li key={i}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "navActive" : "text-gray-400 hover:text-white transition-colors"
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="pt-14 xl:pt-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
