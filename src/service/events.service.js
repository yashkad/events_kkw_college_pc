import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../firebase/firebase";

const collectionName = "events_new";
const yashRef = collection(db, collectionName);
// const yashRef = collection(db, "events");

class EventService {
  addEvent = (newEvent) => {
    return addDoc(yashRef, newEvent);
  };

  updateEvent = (id, updatedEvent) => {
    const eventDoc = doc(db, collectionName, id);
    return updateDoc(eventDoc, updatedEvent);
  };

  deleteEvent = (id) => {
    const eventDoc = doc(db, collectionName, id);
    return deleteDoc(eventDoc);
  };

  getAllEvents = () => {
    return getDocs(yashRef);
  };

  getEvent = (id) => {
    const eventDoc = doc(db, collectionName, id);
    return getDoc(eventDoc);
  };
}

export default new EventService();
