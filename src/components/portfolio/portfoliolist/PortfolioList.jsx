import "./PortfolioList.scss";

export default function PortfolioList({ active, id, title, setSelected }) {
  return (
    <div>
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => {
          setSelected(id);
        }}
      >
        {title}
      </li>
     
    </div>
  );
}
