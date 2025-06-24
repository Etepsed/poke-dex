import Link from "next/link";
import style from "@/styles/NavBar.module.css";

export default function Navbar() {
  return (
    <>
      <ul className={style.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </>
  );
}
