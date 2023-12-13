import { useState } from "react";
import CalenderWraper from "./CalenderWraper";

export default function Calender(props) {
  const date = new Date().toString().split(" ").splice(1, 3).join("-");
  const [today, setToday] = useState(date);

  return (
    <div className="w-full">
      <header className="py-5 border-b w-full ">
        <h1 className="text-5xl suger font-medium text text-emerald-900">
          {today}
        </h1>
      </header>
      <CalenderWraper />
    </div>
  );
}
