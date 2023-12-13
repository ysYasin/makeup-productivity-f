import { AiOutlinePlusSquare } from "react-icons/ai";
import StickyModal from "./StickyModal";
import { useState } from "react";

const StickyWall = () => {
  const [stickyNotes, setStickyNotes] = useState([]);
  const handleStickyNOte = () => {};
  //
  console.log(stickyNotes);
  return (
    <div className="w-full">
      <header className="py-5 border-b w-full ">
        <h1 className="text-5xl suger font-medium">sticky wall</h1>
      </header>

      <div id="cards" className="m-3 flex gap-3 flex-wrap">
        {stickyNotes.map((item, index) => (
          <div
            key={index}
            className={`w-[250px] h-[200px] p-5 overflow-y-scroll scrollbar-thin `}
            style={{ background: item.color }}
          >
            <p className="block">{item.details}</p>
            {item.olList ? (
              <ol className="list-decimal mt-2 mx-auto">
                <li>{item.olList}</li>
              </ol>
            ) : (
              <></>
            )}
            {item.ulList ? (
              <ol className="list-disc mt-2 mx-auto">
                <li>{item.ulList}</li>
              </ol>
            ) : (
              <></>
            )}
          </div>
        ))}
        {/* add button  */}
        <div className="w-[250px] h-[200px] flex items-center justify-center bg-emerald-300">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <AiOutlinePlusSquare className="text-7xl text-white" />
          </button>
        </div>
      </div>

      <StickyModal
        stickyNotes={stickyNotes}
        setStickyNotes={setStickyNotes}
        handleStickyNOte={handleStickyNOte}
      />
    </div>
  );
};

export default StickyWall;
