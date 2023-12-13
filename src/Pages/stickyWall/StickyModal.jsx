import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const StickyModal = ({ handleStickyNOte, stickyNotes, setStickyNotes }) => {
  const [curentValue, setCurentValue] = useState("");
  const [ulLists, setUlLists] = useState([]);
  const [OlLists, setOlLists] = useState([]);
  const [addList, setAddList] = useState(false);

  const handleListItem = (event) => {
    event.preventDefault();

    if (addList) {
      setUlLists([...ulLists, curentValue]);
      setCurentValue("");
      document.querySelector("#lists").value = "";
    }
    setAddList(true);
  };
  const handleOlListItem = (event) => {
    event.preventDefault();

    if (addList) {
      setOlLists([...OlLists, curentValue]);
      setCurentValue("");
      document.querySelector("#lists2").value = "";
    }

    setAddList(true);
  };

  handleStickyNOte = (e) => {
    e.preventDefault();
    const form = e.target;
    const details = e.target.details.value;
    const color = e.target.color.value;
    const olList = OlLists;
    const ulList = ulLists;
    const newSticky = { details, color, olList, ulList };
    setStickyNotes([...stickyNotes, newSticky]);
    form.reset();
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box relative">
          {/*  onSubmit={handleTodoSubmite} */}
          <form onSubmit={handleStickyNOte}>
            <textarea
              name="details"
              placeholder="Add details mb-3"
              className="textarea resize-none textarea-bordered textarea-lg w-full max-w-xs"
            ></textarea>
            <div className="flex gap-10 items-center my-3">
              <h3 className="text-lg font-medium">Unorderd List</h3>
              <div>
                <ul className="list-disc">
                  {!addList ||
                    ulLists.map((item, index) => (
                      <li className="liLists" key={index}>
                        {item}
                      </li>
                    ))}
                </ul>
                <div className={`${ulLists.length >= 5 ? "hidden" : "block"}`}>
                  <input
                    id="lists"
                    name="lists"
                    type="text"
                    defaultValue={curentValue}
                    onChange={(e) => {
                      setCurentValue(e.target.value);
                    }}
                    placeholder="Write task headline"
                    className={`outline-none w-[100px] border border-slate-300 rounded-md my-3 px-2 py-2 max-w-xs ${
                      addList ? "inline-block" : "hidden"
                    }`}
                  />
                  <button className="btn btn-sm" onClick={handleListItem}>
                    {" "}
                    Add list
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-10 items-center my-3">
              <h3 className="text-lg font-medium">Unorderd List</h3>
              <div>
                <ul className="list-decimal">
                  {!addList ||
                    OlLists.map((item, index) => (
                      <li className="olLists" key={index}>
                        {item}
                      </li>
                    ))}
                </ul>
                <div className={`${OlLists.length >= 5 ? "hidden" : "block"}`}>
                  <input
                    id="lists2"
                    name="lists"
                    type="text"
                    defaultValue={curentValue}
                    onChange={(e) => {
                      setCurentValue(e.target.value);
                    }}
                    placeholder="Write task headline"
                    className={`outline-none w-[100px] border border-slate-300 rounded-md my-3 px-2 py-2 max-w-xs ${
                      addList ? "inline-block" : "hidden"
                    }`}
                  />
                  <button className="btn btn-sm" onClick={handleOlListItem}>
                    {" "}
                    Add list
                  </button>
                </div>
              </div>
            </div>
            <input type="color" name="color" />
            <button
              type="submit"
              className="btn ms-auto block my-3 bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="modal-action absolute top-10 right-2/3 -z-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-rose-600 border-rose-600">
              <FaPlus className="transform rotate-45" />
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default StickyModal;
