import "./dropdown.css";

// const DetailsMenu = () => {
//   return <></>;
// };

const Dropdown = () => {
  return (
    <>
      <details className="details-option">
        <summary className=" btn-link" role="button">
          <span className="txt-inner-opt">Spoken Language:</span>
          <span className="text-bold">Any</span>
        </summary>
        <section className="option-select-dropdown">
          <div className="option-select-item">Afar</div>
          <div className="option-select-item-search">
            <input
              type="text"
              placeholder="Filter spoken languages"
              className="search-drop-down"
            />
          </div>
          <div className="select-menu-list">
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Anhar</div>
            <div className="option-select-item">Arabic</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Anhar</div>
            <div className="option-select-item">Arabic</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
            <div className="option-select-item">Argonose</div>
            <div className="option-select-item">Afar</div>
          </div>
        </section>
      </details>
    </>
  );
};

export default Dropdown;
