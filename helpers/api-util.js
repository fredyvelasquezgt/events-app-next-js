//funcion que me permite fetchear toda mi info desde firbase
export async  function getAllEvents() {
  fetch('https://nextjs-course-40c91-default-rtdb.firebaseio.com/events.json');
}


export async function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }