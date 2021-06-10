import "./button.css";

const InputButton = ({ customClass, children }: any) => {
  return (
    <>
      <button
        type="button"
        className={`btn btn-sm ${
          customClass === undefined || null ? "" : customClass
        }`}
        aria-label="Unstar this repository"
        title="Star"
      >
        {children}
      </button>
    </>
  );
};

export default InputButton;
