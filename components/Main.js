import style from "@/styles/Main.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <div className={style.container}>{children}</div>
      <Footer />
    </>
  );
}
