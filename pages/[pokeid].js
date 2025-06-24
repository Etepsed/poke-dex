import style from "@/styles/pokemon.module.css";
import Element_Base from "@/components/elementos/Element_Base.js";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export async function getStaticPaths() {
  const maxPokemons = 270;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokeid: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.pokeid;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function pokemon({ pokemon }) {
  return (
    <div className={style.page}>
      <Head>
        <title>Pokédex - {capitalizar(pokemon.name)} </title>
        <meta
          name="description"
          content={`Pokémon ${pokemon.name} com detalhes completos.`}
        />
        <meta property="og:title" content="Pokédex - Pokémons" />
        <meta
          property="og:description"
          content={`Principais informações do Pokémon ${pokemon.name}`}
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="keywords"
          content={`Pokédex, Pokémon, Lista de Pokémons, PokeAPI,${
            pokemon.name
          },${capitalizar(pokemon.name)}`}
        />
      </Head>
      <div className={style.contener}>
        <div className={style.part1}>
          <Link href="/" className={style.voltar}>
            Voltar
          </Link>

          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            width={456} // ou o tamanho desejado
            height={456} // idem
          />
          <div className={style.ImgFundo}></div>
        </div>

        <div className={style.part2}>
          <div>
            <h1>{capitalizar(pokemon.name)}</h1>
            <h2>Elementos:</h2>
            <div className={style.HubElements}>
              {pokemon.types.map((item, index) => (
                <Element_Base key={index}>{item.type.name}</Element_Base>
              ))}
            </div>
          </div>
          <h2>Descrição:</h2>
          <p>
            O Pokémon {capitalizar(pokemon.name)} tem {pokemon.height * 10}{" "}
            centímetros de altura, pesa {pokemon.weight / 10} quilos. Suas
            principais habilidades:{" "}
            {pokemon.abilities.map((ab, index) => (
              <strong key={index}>
                {ab.ability.name}
                {index < pokemon.abilities.length - 1 ? ", " : "."}
              </strong>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
