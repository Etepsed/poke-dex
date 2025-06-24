import style from "@/styles/PokeDex.module.css";
import Slot_Pokemon from "@/components/Slot_Pokemon";
import Head from "next/head";

export async function getStaticProps() {
  const maxPokemons = 270;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function Page({ pokemons }) {
  return (
    <div className={style.page}>
      <Head>
        <title>Pokédex - Pokémons</title>
        <meta
          name="description"
          content="A Pokédex tem todos os Pokémons com detalhes completos."
        />
        <meta property="og:title" content="Pokédex - Pokémons" />
        <meta
          property="og:description"
          content="Todos os Pokémons estão aqui na Pokédex."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="keywords"
          content="Pokédex, Pokémon, Lista de Pokémons, PokeAPI"
        />
      </Head>
      <h1 className={style.title}>Pokemons</h1>
      <div className={style.hub}>
        {pokemons.map((pokemon) => (
          <Slot_Pokemon
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            id={pokemon.id}
            name={capitalizar(pokemon.name)}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}
