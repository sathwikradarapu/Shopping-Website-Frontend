import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { inputActions } from "../store/inputSlice";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const inputEntered = useRef("");

  const handleFunctionality = () => {
    const name = inputEntered.current.value; // Use the correct ref variable
    dispatch(inputActions.setInputValue(name)); // Dispatch the updated value
  };

  return (
    <>
      <header className="header-container">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="../images/logo.png"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/home&living">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for Products with Brand Names..."
            onChange={handleFunctionality} // Handle the input change
            ref={inputEntered} // Bind the input to the ref
          />
        </div>
        <div className="action_bar">
          <Link
            to="/bag"
            className="action_container"
            style={{ color: "black", textDecoration: "none" }}
          >
            <FaShoppingCart className="bag-icon" style={{ color: "black" }} />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
