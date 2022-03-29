// combine pre rendering with client side data fetching

import { useRouter } from "next/router";
import { useState } from "react";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push(`/events?category=sports`, undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.category}</p>
          <p>{event.date}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=sports` : ``;
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

// import { useState } from "react";

// const EventList = ({ eventList }) => {
//   const [events, setEvents] = useState(eventList);

//   const fetchSportsEvents = async () => {
//     const response = await fetch(
//       `http://localhost:4000/events?category=sports`
//     );
//     const data = await response.json();
//     setEvents(data);
//   };
//   return (
//     <>
//       <button onClick={fetchSportsEvents}>Sports Events</button>
//       <h1>List of events</h1>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h2>{event.title}</h2>
//           <p>{event.description}</p>
//           <p>{event.category}</p>
//           <p>{event.date}</p>
//           <hr />
//         </div>
//       ))}
//     </>
//   );
// };

// export default EventList;

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:4000/events`);
//   const data = await response.json();

//   return {
//     props: {
//       eventList: data,
//     },
//   };
// }
