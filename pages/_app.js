import AlertState from "../context/AlertState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AlertState>
      <Component {...pageProps} />
    </AlertState>
  );
}

export default MyApp;
