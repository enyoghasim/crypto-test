import { useEffect, useState } from "react";
import "./dropdown.css";
const Dropdown = ({
  headerText,
  data,
  searchTitle,
  inputPlaceholder,
  flag,
  withInput = true
}: any) => {
  const [filteredArray, setfilteredArray] = useState(data);

  useEffect(() => {
    setfilteredArray(data);
  }, [data]);
  const handleInput = (e: any) => {
    if (flag === null || flag === undefined) {
      const filter = data.filter((element: any) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setfilteredArray(filter);
      return;
    }
    const filter = data.filter((element: any) =>
      element.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredArray(filter);
  };
  return (
    <>
      <details className="details-option">
        <summary className=" btn-link" role="button">
          <span className="txt-inner-opt">{headerText}:</span>
          <span className="text-bold">Any</span>
        </summary>
        <section className="option-select-dropdown">
          <div className="option-select-header">{searchTitle}</div>
          {withInput && (
            <div className="option-select-item-search">
              <input
                type="text"
                onInput={handleInput}
                placeholder={inputPlaceholder}
                className="search-drop-down"
              />
            </div>
          )}
          <div className="select-menu-list">
            {filteredArray?.length ? (
              filteredArray?.map((item: any, index: any) => {
                return (
                  <div key={index} className="option-select-item">
                    {`${flag?.length > 2 ? item.name : item}`}
                  </div>
                );
              })
            ) : (
              <div className="warn-text">PLEASE NO ITEM AVAILABLE</div>
            )}
          </div>
        </section>
      </details>
    </>
  );
};

export default Dropdown;
