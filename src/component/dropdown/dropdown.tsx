import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DEVELOPERS } from "../../routes/constant";
import "./dropdown.css";
const Dropdown = (props: any) => {
  console.log("props,", props);

  const [filteredArray, setfilteredArray] = useState(props.data);

  useEffect(() => {
    setfilteredArray(props.data);
  }, [props.data]);
  const handleInput = (e: any) => {
    if (props.flag === null || props.flag === undefined) {
      const filter = props.data.filter((element: any) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setfilteredArray(filter);
      return;
    }
    const filter = props.data.filter((element: any) =>
      element.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilteredArray(filter);
  };
  return (
    <>
      <details className="details-option">
        <summary className=" btn-link" role="button">
          <span className="txt-inner-opt">{props.headerText || "Any"}:</span>
          <span className="text-bold">{props.boldText}</span>
        </summary>
        <section className="option-select-dropdown">
          <div className="option-select-header">{props.searchTitle}</div>
          {props.withInput && (
            <div className="option-select-item-search">
              <input
                type="text"
                onInput={handleInput}
                placeholder={props.inputPlaceholder}
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
                      props.flag?.length > 2
                        ? `?${
                            props.time === "Any" || props.time === undefined
                              ? ""
                              : `since=${props.time}`
                          }&spoken_language=${item.urlParam}`
                        : props.type === "date"
                        ? `?${
                            props?.spokenLang.includes("Any") ||
                            !props.spokenLang
                              ? ""
                              : `spoken_language=${props.spokenLang}`
                          }&since=${item}`
                        : props.type === "pro-lang"
                        ? `${
                            props?.path?.includes(DEVELOPERS)
                              ? `/developers${
                                  props?.proLang.includes("Any") ||
                                  !props.proLang
                                    ? ""
                                    : `/${props?.proLang}`
                                }?${
                                  props.time === "Any" ||
                                  props.time === undefined
                                    ? ""
                                    : `&since=${props.time}`
                                }${
                                  props.spokenLang === "Any" ||
                                  props.spokenLang === undefined
                                    ? ""
                                    : `&spoken_language=${props.spokenLang}`
                                }`
                              : `/developers/${props.proLang}?${
                                  props.time === "Any" ||
                                  props.time === undefined
                                    ? ""
                                    : `&since=${props.time}`
                                }${
                                  props.spokenLang === "Any" ||
                                  props.spokenLang === undefined
                                    ? ""
                                    : `&spoken_language=${props.spokenLang}`
                                }`
                          }`
                        : ""
                    }`}
                    key={index}
                    className="option-select-item"
                  >
                    {`${props.flag?.length > 2 ? item.name : item}`}
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
