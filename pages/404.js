import style from "@/styles/Page404.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function page404() {
  const numeroAleatorio = Math.floor(Math.random() * 250) + 1;
  return (
    <div className={style.page}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        ></link>
      </Head>
      <div className={style.contener}>
        <h1>PÁGINA NÃO ENCONTRADA </h1>

        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numeroAleatorio}.png`}
          alt={"404"}
          width={456} // ou o tamanho desejado
          height={456} // idem
        />
        <Link href="/">Volta para Home</Link>
        <div className={style.hub}>
          <a className={style.itemhub} href="https://github.com/Etepsed">
            <i class="fa-brands fa-github"></i>
          </a>
          <a className={style.itemhub} href="https://etepsed.com/">
            <i class="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
