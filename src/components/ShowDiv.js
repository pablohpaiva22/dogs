import React from "react";

const ShowDiv = () => {
  const element = React.useRef();
  const [confirm, setConfirm] = React.useState(false);

  React.useEffect(() => {
    const displayProperty = window
      .getComputedStyle(element.current)
      .getPropertyValue("display");

    if (displayProperty !== "flex") {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, []);

  return (
    <>
      <div ref={element}>Conteúdo 1</div>

      {confirm && <div>Conteúdo 2</div>}
    </>
  );
};

export default ShowDiv;
