import "./dropdown.css";

const DetailsMenu = () => {
  return <></>;
};

const Dropdown = () => {
  return (
    <>
      <details className="details-option">
        <summary className=" btn-link" role="button">
          <span className="txt-inner-opt">Spoken Language:</span>
          <span className="text-bold">Any</span>
        </summary>
        <section className="option-select-dropdown">
            <div></div>
            <div></div>
        </section>
      </details>
    </>
  );
};

export default Dropdown;
