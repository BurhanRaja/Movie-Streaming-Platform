import { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({children}) {
  return (
    <section className="overflow-hidden">
      <Navbar />
        {children}
      <Footer />
    </section>
  )
}

export default Layout
