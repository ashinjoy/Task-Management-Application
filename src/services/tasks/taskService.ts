import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { fireStore } from "../../config/firebase/firebase";
import { ITaskForm } from "../../interface/inferface";

export const createTaskService = async (
  formData: ITaskForm
): Promise<unknown> => {
  try {
    const response = await addDoc(collection(fireStore, "tasks"), formData);
    console.log(formData)
    const docs = await getDoc(response);
    if (docs.exists()) {
      const data = docs.data();
      return {
        title: data.title,
        description: data.description,
        category: data.category,
        dueDate: data.dueDate.toDate().toDateString(),
        taskStatus: data.taskStatus,
      };
    } else {
      throw new Error("document doesnt exist");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTaskService = async (uid): Promise<any[]> => {
  try {
    console.log(uid)
    const response = await getDocs(query(collection(fireStore, "tasks"),where("uid","==",uid)));
    const data = [];
    response.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const filterTaskService = async (filter) => {
  try {
    const matchQuery = query(
      collection(fireStore, "tasks"),
      where("uid", "==", filter?.uid),
      where("category", "==", filter?.category)
    );
    const response = await getDocs(matchQuery);
    const data = [];
    response.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const batchDeleteTaskService = async (filter) => {
  try {
    for (const docs of filter) {
      await deleteDoc(doc(fireStore, "tasks", docs));
    }
    return true
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const batchTaskCompleteService = async(filter)=>{
  try {
    for(const docs of filter){
      await updateDoc(doc(fireStore,"tasks",docs),{
        taskStatus:"COMPLETED"
      })
    }
    return true
  } catch (error) {
    console.error(error);
    throw error
  }
}
