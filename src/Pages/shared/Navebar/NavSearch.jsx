import { IoSearchOutline } from "react-icons/io5";

const NavSearch = () => {
  return (
    <div className="relative">
      <input type="text" className="input ps-5 w-fit" placeholder="search..." />
      <button className="absolute top-4 left-1">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default NavSearch;
