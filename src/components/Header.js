import Proptypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="py-6 flex justify-between">
      <h1 className="text-white text-5xl text-center font-bold">{title}</h1>

      <Button text={showAdd ? "Close" : "Add"} color="black" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
