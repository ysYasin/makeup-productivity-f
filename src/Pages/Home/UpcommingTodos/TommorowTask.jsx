import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import UpdateAndDeletTask from "../Home/UpdateAndDeletTask";
import PaceTask from "../../shared/PlaceTask/PaceTask";

const TommorowTask = () => {
  const [updateBar, setUpdateBar] = useState(false);
  const [Tommorowtodos, setTommorowTodos] = useState([]);
  const handleTommorowTodoSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const headline = form.headLine.value;
    const details = form.details.value;
    const list = form.list.value;
    const date = form.date.value;
    const tag = form.tag.value;
    const newToDo = { headline, details, tag, date, list };

    setTommorowTodos([...Tommorowtodos, newToDo]);
  };

  return (
    <div className="w-full">
      <header className="py-5 border-b w-full ">
        <h1 className="text-5xl suger font-medium">Tomorrow</h1>
      </header>
      <div className="flex w-full">
        <div className="flex-grow">
          <div className="w-full">
            <button
              className="flex rounded-md my-4 gap-2 text-md w-full border border-slate-300 py-2 px-3 items-center"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FaPlus /> Add New Task
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box relative">
                <form onSubmit={handleTommorowTodoSubmite}>
                  <input
                    name="headLine"
                    type="text"
                    placeholder="Write task headline"
                    className="outline-none border border-slate-300 rounded-md my-3 px-2 py-2  w-full max-w-xs"
                  />
                  <textarea
                    name="details"
                    placeholder="Add details mb-3"
                    className="textarea resize-none textarea-bordered textarea-lg w-full max-w-xs"
                  ></textarea>
                  <div className="flex gap-5 items-center my-3">
                    <h3 className="text-lg font-medium">List</h3>
                    <select
                      name="list"
                      className="select select-bordered select-sm max-w-xs"
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option>Personal</option>
                      <option>Work</option>
                      <option>List 1</option>
                    </select>
                  </div>
                  <div className="flex gap-5 items-center my-3">
                    <h3 className="text-md font-medium">Deu Date</h3>
                    <select
                      name="date"
                      className="select select-bordered select-sm max-w-xs"
                    >
                      <option disabled selected>
                        select date
                      </option>
                      <option>12-24-23</option>
                      <option>next</option>
                      <option>next xxl 1</option>
                    </select>
                  </div>

                  <div className="flex gap-5 items-center my-3">
                    <h3 className="text-md font-medium">select tags</h3>
                    <select
                      name="tag"
                      className="select select-bordered select-sm max-w-xs"
                    >
                      <option disabled selected>
                        select date
                      </option>
                      <option>Tag1</option>
                      <option>Tag2</option>
                      <option>Tag3 1</option>
                    </select>
                  </div>
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

          <PaceTask
            todos={Tommorowtodos}
            updateBar={updateBar}
            setUpdateBar={setUpdateBar}
          ></PaceTask>
        </div>

        <div
          id="sideEdite"
          className={`w-[350px] ${updateBar ? "inline-block" : "hidden"}`}
        >
          <UpdateAndDeletTask />
        </div>
      </div>
    </div>
  );
};

export default TommorowTask;
