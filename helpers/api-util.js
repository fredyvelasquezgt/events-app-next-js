//funcion que me permite fetchear toda mi info desde firbase
export function getAllEvents() {

}


export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }