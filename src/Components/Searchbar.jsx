import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-center ">
    <div className="relative w-100 mb-5">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
        className="w-full pl-10 pr-3 py-2 border rounded-lg"
      />
    </div>
    </div>
  );
};

export default Searchbar;