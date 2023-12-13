import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const CalenderWraper = (props) => {
  const myEventsList = [
    {
      start: new Date(2023, 0, 1, 10, 0), // event start time
      end: new Date(2023, 0, 1, 12, 0), // event end time
      title: "Meeting with Client", // event title
      description: "Discuss project details with the client.", // event description (optional)
      location: "123 Main St, City", // event location (optional)
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalenderWraper;
