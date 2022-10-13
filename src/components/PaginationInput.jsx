import { useContext, useEffect, useRef, useState } from "react";

function PaginationInput({ context }) {
  const buttonRef = useRef();
  const inputRef = useRef();
  const [number, setNumber] = useState();
  const { changeCurrentPage } = useContext(context);

  useEffect(() => {
    const closeInputOnBlur = (e) => {
      if (!e.target?.classList.contains("pagination__input")) {
        buttonRef?.current?.classList.remove("hidden");
        inputRef?.current?.classList.add("hidden");
      }
    };
    document.addEventListener("click", closeInputOnBlur);
    return () => {
      document.removeEventListener("click", closeInputOnBlur);
    };
  }, []);

  const toggleInput = () => {
    buttonRef?.current.classList.toggle("hidden");
    inputRef?.current.classList.toggle("hidden");
    inputRef?.current?.focus();
    inputRef.current.value = "";
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeCurrentPage(number);
    toggleInput();
  };

  return (
    <>
      {/* ... button */}
      <button
        className="pagination__input w-8 h-8 leading-8 text-center rounded bg-dark hover:bg-darker"
        ref={buttonRef}
        onClick={toggleInput}
      >
        ...
      </button>

      {/* input form */}
      <form onSubmit={onSubmit}>
        <input
          className="hidden pagination__input h-8 w-10 leading-8 px-1 text-center rounded focus:outline-none text-black"
          ref={inputRef}
          type="number"
          min='1'
          max='500'
          onChange={(e) => setNumber(+e.target.value)}
        />
      </form>
    </>
  );
}

export default PaginationInput;
