import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavebarTags = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [showNewTag, setShowNewTag] = useState(false);

  const handleAddTag = (e) => {
    e.preventDefault();

    if (e.keyCode === 13) {
      if (inputValue.trim() === "") {
        toast.warn("Please enter a tag name", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      setTags([...tags, inputValue]);
      setInputValue("");
      setShowNewTag(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-mono">tags</h3>
      <div>
        {tags.map((tag, index) => (
          <p
            key={index}
            onClick={() => setTags(tags.filter((t) => t !== tag))}
            className="inline-block me-2 items-center bg-red-200 capitalize my-3 font-medium rounded-md px-3 py-1 gap-2 cursor-pointer"
          >
            {tag}
          </p>
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowNewTag(true);
          }}
          className={`text-sm items-center capitalize font-medium rounded-md px-3 py-1 gap-2 cursor-pointer ${
            !showNewTag ? "inline-block" : "hidden"
          } ${tags.length < 3 ? "inline-block" : "hidden"}`}
        >
          <FaPlus className="inline-block text-center" /> add tag
        </button>
        <input
          type="text"
          className={`w-4/12 outline-none border border-slate-400 ${
            tags.length < 3 ? "inline-block" : "hidden"
          } ${showNewTag ? "inline-block" : "hidden"}`}
          value={inputValue}
          placeholder="+ Add Tag"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleAddTag}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default NavebarTags;
