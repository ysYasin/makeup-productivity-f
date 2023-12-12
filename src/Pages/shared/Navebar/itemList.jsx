import React, { useState } from "react";
import { IoIosTrash } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [showNewItem, setShowNewItem] = useState(false); // Show input or not
  const [currentColor, setCurrentColor] = useState("rgb(147 51 234)"); // set current color
  const [newItemText, setNewItemText] = useState("");

  const handleAddItem = () => {
    if (newItemText.trim() === "") {
      alert("Please enter a valid item text.");
      return;
    }

    const newItem = {
      text: newItemText,
      color: currentColor,
    };
    console.log(newItemText);
    setItems([...items, newItem]);
    setNewItemText("");
    setShowNewItem(false);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleCurentColor = (clr) => {
    setCurrentColor(clr);
  };

  return (
    <div className="my-5">
      <h3 className="text-2xl font-bold">List</h3>
      <ul className="mb-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-center">
            <div
              style={{ background: item.color }}
              className="w-[10px] h-[10px]"
            ></div>{" "}
            {item.text}
            <button onClick={() => handleRemoveItem(index)}>
              <IoIosTrash className="text-rose-500" />
            </button>
          </li>
        ))}
      </ul>
      <div
        className={`w-9/12 overflow-hidden flex flex-col items-center gap-3 border-dashed border  ${
          showNewItem ? "block" : "hidden"
        } mty-5`}
      >
        <div>
          <input
            type="text"
            className="px-3 py-2 rounded-md border border-slate-600 w-[200px] outline-none"
            placeholder="Enter new item"
            onChange={(e) => setNewItemText(e.target.value)}
          />
        </div>
        <div className={`justify-center flex gap-2 p-4 bg-slate-200 `}>
          <div
            className={`
            w-[20px]
             h-[20px]
              cursor-pointer
               bg-purple-600
               ${
                 currentColor === "rgb(147 51 234)"
                   ? "border-2 border-slate-400"
                   : ""
               }`}
            onClick={() => handleCurentColor("rgb(147 51 234)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-rose-600  ${
              currentColor === "rgb(225 29 72)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(225 29 72)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-green-500 ${
              currentColor === "rgb(34 197 94)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(34 197 94)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-yellow-400  ${
              currentColor === "rgb(250 204 21)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(250 204 21)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-blue-400 ${
              currentColor === "rgb(96 165 250)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(96 165 250)")}
          ></div>

          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-lime-300 ${
              currentColor === "rgb(190 242 100)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(190 242 100)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-fuchsia-500 ${
              currentColor === "rgb(217 70 239)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(217 70 239)")}
          ></div>
          <div
            className={`w-[20px] h-[20px] cursor-pointer bg-pink-500 ${
              currentColor === "rgb(236 72 153)"
                ? "border-2 border-slate-400"
                : ""
            }`}
            onClick={() => handleCurentColor("rgb(236 72 153)")}
          ></div>
        </div>
        <button
          className="mt-2 py-2 px-5 rounded-md font-medium bg-emerald-400"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
      <p
        onClick={() => setShowNewItem(true)}
        className={`cursor-pointer items-center flex gap-3 ${
          !showNewItem ? "block" : "hidden"
        }`}
      >
        <FaPlus />
        Add new items
      </p>
    </div>
  );
};

export default DynamicList;
