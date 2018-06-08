import { createSelector } from "reselect";
import getPresenceFilter from "./getPresenceFilter";
import getAnimals from "./getAnimals";

export default createSelector (getPresenceFilter, getAnimals, (presenceFilter, animals) => {
  /*console.log(presenceFilter)*/
  if(presenceFilter === "present") {
    return animals.filter(animal => animal.present);
  }
  if (presenceFilter === "absent") {
    /*console.log(animals)*/
    return animals.filter(animal => !animal.present);
  }
   return animals;
 });
