import { collection, addDoc } from 'firebase/firestore';
import db from './setupFirebase';

export async function addToDb(data) {
  try {
    const finalData = {
      submitTime: new Date(),
      answers: data,
      machineDetails: window?.navigator?.userAgent,
    };
    const docRef = await addDoc(collection(db, 'userData'), finalData);
    return finalData;
  } catch (e) {
    console.log('Error happened');
    console.log(e);
  }
}
