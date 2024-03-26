import React, { useEffect, useState } from "react";
import { db } from "./Firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

export default function Result() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "name"));
        const userData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    getUsersData();
  }, []);

  const createUser = async () => {
    try {
      await addDoc(collection(db, "name"), { username: name });
      setName(""); // Clear input field after adding user
      window.location.reload();
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "name", id));
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <div>
      <div className="text-dark">
        <h1 className=" w-screen text-center mt-8 text-4xl font-bold">
          React with FireBase
        </h1>
        <p className="w-screen text-center mt-5">
          Fill in the Details to Upload Data to the DataBase
        </p>
        <div className="text-center mt-16">
          <span>Enter your Name : </span>
          <input
            className="mx-4 text-black"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br />
          <button
            onClick={createUser}
            className="bg-slate-700 m-4 p-2 w-20 rounded-md"
          >
            Upload
          </button>
        </div>
      </div>
      <div className="text-dark mt-20 mx-6">
        <h3 className="text-xl">Users:</h3>
        <div className="grid grid-cols-2">
          {users.map((user) => {
            return (
              <div key={user.id} className="hover:animate-pulse m-4 bg-gray-600 w-1/4 rounded-md p-2">
                <p className="w-auto text-center">{user.username}</p>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete User
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
