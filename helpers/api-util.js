//funcion que me permite fetchear toda mi info desde firbase
export async  function getAllEvents() {

}


export async function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }