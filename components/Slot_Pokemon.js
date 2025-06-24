// import style from "@/styles/Slot.module.css";
// import Image from "next/image";
// import Link from "next/link";
// export default function Slot({ img, name, id }) {
//   return (
//     <div className={style.slot}>
//       <img src={img} alt="" srcset="" />
//       <h2>{name}</h2>
//       <Link href={`/${id}`}>Sobre</Link>
//     </div>
//   );
// }
import style from "@/styles/Slot.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Slot({ img, name, id }) {
  return (
    <div className={style.slot}>
      <Image
        src={img}
        alt={name}
        width={240} // ou o tamanho desejado
        height={240} // idem
      />
      <h2>{name}</h2>
      <Link href={`/${id}`}>Sobre</Link>
    </div>
  );
}
