import { Plus } from 'lucide-react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Define a type for the events
interface Event {
  date: Date;
  type: 'meeting' | 'appointment' | 'consultation' | 'surgery';
  description: string;
}

// Sample event data with event types
const events: Event[] = [
  {
    date: new Date(2024, 8, 1),
    type: 'meeting',
    description: 'Team meeting at 10 AM',
  },
  {
    date: new Date(2024, 8, 5),
    type: 'appointment',
    description: 'Mr. Oloye full body check up',
  },
  {
    date: new Date(2024, 8, 10),
    type: 'consultation',
    description: 'Consultation with Dr. Ayo',
  },
  {
    date: new Date(2024, 8, 10),
    type: 'meeting',
    description: "Doctor's meeting",
  },
  {
    date: new Date(2024, 8, 15),
    type: 'consultation',
    description: "John's birthday",
  },
  {
    date: new Date(2024, 8, 20),
    type: 'surgery',
    description: 'Appendix surgery',
  },
];

// Map of event types to colors
const eventColors: Record<Event['type'], string> = {
  consultation: '#5A9EED',
  appointment: '#3B82F6',
  meeting: '#F59E0B',
  surgery: '#EF4444',
};

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Function to check if a date has events and return the corresponding dots
  const renderEventDots = (date: Date): JSX.Element | null => {
    const dayEvents = events.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );

    return dayEvents.length > 0 ? (
      <div className="flex justify-center items-center gap-[1px]">
        {dayEvents.map((event, index) => (
          <span
            key={index}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: eventColors[event.type] }}
          ></span>
        ))}
      </div>
    ) : null;
  };

  // Function to get events for the selected date
  const getEventsForSelectedDate = (): Event[] => {
    return events.filter(
      (event) =>
        event.date.getFullYear() === selectedDate.getFullYear() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getDate() === selectedDate.getDate()
    );
  };

  return (
    <div className="text-sm py-2">
      {/* Left: Calendar */}
      <div className="flex items-center justify-between px-4">
        <span className="text-muted-foreground">Calendar</span>
        <span>View tasks</span>
      </div>
      <div className="flex justify-between w-full gap-3">
        <Calendar
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'narrow' })
          }
          onChange={(date: Date) => setSelectedDate(date)}
          value={selectedDate}
          tileContent={({ date, view }: any) =>
            view === 'month' && renderEventDots(date)
          }
          className="flex-1"
        />
        <div className="flex flex-col pr-2">
          <ul className="space-y-2 my-auto">
            {Object.keys(eventColors).map((eventType) => (
              <li key={eventType} className="flex items-center">
                <span
                  className="w-1.5 h-1.5 rounded-full mr-2"
                  style={{
                    backgroundColor: eventColors[eventType as Event['type']],
                  }}
                ></span>{' '}
                {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
              </li>
            ))}
          </ul>
          <button
            className="flex items-center p-2 gap-2 text-sm font-medium rounded-md bg-secondary"
            // onClick={onClick}
          >
            <Plus size={18} />
            <span className="hidden sm:block">Add new</span>
          </button>
          {/* <CustomButton label="Add new" icon={} /> */}
        </div>
      </div>

      {getEventsForSelectedDate().length === 0 ? (
        <p className="px-2 text-xs text-center text-[#666666]">
          No events for this day.
        </p>
      ) : (
        <ul className="px-2">
          {getEventsForSelectedDate().map((event, index) => (
            <li key={index} className="inline-flex items-center mr-2">
              <span
                className="w-1.5 h-1.5 rounded-full mr-0.5"
                style={{ backgroundColor: eventColors[event.type] }}
              ></span>
              <span className="px-1.5 rounded-sm bg-[#EBEBEB] text-[10px] text-[#666666]">
                {event.description}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
