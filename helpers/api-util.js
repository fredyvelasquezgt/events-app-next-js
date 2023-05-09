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
}


export async function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }