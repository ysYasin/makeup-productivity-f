import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const PaceTask = ({ todos, updateBar, setUpdateBar }) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div
            onClick={() => setUpdateBar(!updateBar)}
            key={i}
            className="py-2 border-b w-full cursor-pointer flex items-center justify-between pe-10"
          >
            <div>
              <div className="flex gap-4 items-center">
                <input type="checkbox" className=" read-only:" />
                <h1 className="text-lg font-medium">{todo.headline}</h1>
              </div>
              <div className="flex gap-4 items-center">
                {todo.date !== "select" ? (
                  <h3 className="text-md font-medium items-center mt-2 flex gap-1">
                    <FaRegCalendarAlt />
                    {todo?.date}
                  </h3>
                ) : (
                  ""
                )}
                {todo.list !== "select date" ? (
                  <h3 className="text-md font-medium items-center mt-2 flex gap-1">
                    <div className={`h-[14px] w-[14px] bg-rose-500`}></div>
                    {todo?.list}
                  </h3>
                ) : (
                  ""
                )}
                {todo.tag !== "select" ? (
                  <button className="text-md font-medium mt-2 bg-green-400 px-3 py-1 rounded-md">
                    {todo?.list}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <FaChevronRight className="text-3xl" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaceTask;
