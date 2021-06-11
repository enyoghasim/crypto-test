import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVELOPERS } from "../../routes/constant";
import "./dropdown.css";
const Dropdown = ({
  headerText,
  data,
  searchTitle,
  inputPlaceholder,
  flag,
  withInput = true,
  type = "",
  proLang = "Any",
  spokenLang = "Any",
  time = "Any",
  match,
  boldText
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
          <span className="text-bold">{boldText}</span>
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
                  <Link
                    to={`${
                      flag?.length > 2
                        ? `?${
                            time === "Any" || time === undefined
                              ? ""
                              : `since=${time}`
                          }&spoken_language=${item.urlParam}`
                        : type === "date"
                        ? `?${
                            spokenLang === "Any" || spokenLang === undefined
                              ? ""
                              : `spoken_language=${spokenLang}`
                          }&since=${item}`
                        : type === "pro-lang"
                        ? `${
                            match.path.includes(DEVELOPERS)
                              ? `/developers${
                                  proLang === "Any" || proLang === undefined
                                    ? ""
                                    : `/${proLang}`
                                }?${
                                  time === "Any" || time === undefined
                                    ? ""
                                    : `&since=${time}`
                                }${
                                  spokenLang === "Any" ||
                                  spokenLang === undefined
                                    ? ""
                                    : `&spoken_language=${spokenLang}`
                                }`
                              : `/developers/${proLang}?${
                                  time === "Any" || time === undefined
                                    ? ""
                                    : `&since=${time}`
                                }${
                                  spokenLang === "Any" ||
                                  spokenLang === undefined
                                    ? ""
                                    : `&spoken_language=${spokenLang}`
                                }`
                          }`
                        : ""
                    }`}
                    key={index}
                    className="option-select-item"
                  >
                    {`${flag?.length > 2 ? item.name : item}`}
                  </Link>
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
