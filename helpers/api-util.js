//funcion que me permite fetchear toda mi info desde firbase
export async  function getAllEvents() {
  const response = await fetch('https://nextjs-course-40c91-default-rtdb.firebaseio.com/events.json');
  const data = await response.json()

  const events = []

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    })
  }
  return events;
}


export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
  }

  export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
  }

  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }