import Alert from "./Alert";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

function Layout({ children, head }) {
  return (
    <>
      <Head>
        <title>{head}</title>
      </Head>
      <section className="overflow-hidden">
        <Alert message={"Hello World"} />
        <Navbar />
        <div className="mt-24">{children}</div>
        <Footer />
      </section>
    </>
  );
}

export default Layout;
