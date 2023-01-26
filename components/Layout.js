import Alert from "./Alert";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (

      <section className="overflow-hidden">
        <Alert message={"Hello World"} />
        <Navbar />
        <div className="mt-24">{children}</div>
        <Footer />
      </section>
  );
}

export default Layout;
