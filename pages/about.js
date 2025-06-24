import style from "@/styles/About.module.css";
import Head from "next/head";
import Image from "next/image";
export default function About() {
  return (
    <div className={style.page}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        ></link>
      </Head>
      <div className={style.contener}>
        <div className={style.profile}>
          <Image
            src="https://github.com/Etepsed.png"
            alt="Etepsed avatar"
            width={180} // ajuste o tamanho conforme necessário
            height={180}
            className={style.avatar} // se quiser aplicar estilos
          />
          <h2>
            <a className={style.nome} href="https://github.com/Etepsed">
              Etepsed
            </a>
          </h2>
          <div className={style.hub}>
            <a className={style.itemhub} href="https://github.com/Etepsed">
              <i class="fa-brands fa-github"></i>
            </a>
            <a className={style.itemhub} href="https://etepsed.com/">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>

        <div className={style.tech}>
          <div className={style.texto}>
            <p>Este site foi desenvolvido em 2025 com fins educativos.</p>
          </div>
          <b>Tecnologias utilizadas:</b>
          <br />
          <br />

          <div className={style.tech}>
            <p>
              <b>Next.js</b> como framework principal
            </p>
          </div>
          <br />
          <p>
            <b>APIs:</b>
          </p>

          <div className={style.api}>
            <p>API de imagens dos Pokémon:</p>
            <a href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/">
              https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/
            </a>
            <p>API de dados dos Pokémon:</p>
            <a href="https://pokeapi.co/api/v2/pokemon/">
              https://pokeapi.co/api/v2/pokemon/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
