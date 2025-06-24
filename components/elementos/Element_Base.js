import style from "@/styles/elementos/elemento_base.module.css";

export default function Base_elements({ children }) {
  return (
    <div className={style.elements}>
      <b>{children}</b>
    </div>
  );
}
