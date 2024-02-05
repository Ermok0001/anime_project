import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDpQW-C0A_OND4f7bk6jpbgaEJZw43zlKQ",
  authDomain: "my-anime-project-a978e.firebaseapp.com",
  projectId: "my-anime-project-a978e",
  storageBucket: "my-anime-project-a978e.appspot.com",
  messagingSenderId: "195761531002",
  appId: "1:195761531002:web:94e904e72e8f4e232473c3",
  measurementId: "G-54K5NWVYDW"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)


const analytics = getAnalytics(app);

export function ContactsPage(){

    const [nameForm,setnameFrom] = useState()
    const [mailFRom,setmailFrom] = useState()
    const [commForm, setcommFrom] = useState()
   async function handleSubmit(e){
        e.preventDefault();
        const docref = await addDoc(collection(firestore, 'Comments'),{
            name: nameForm,
            email: mailFRom,
            comments: commForm
        })
        alert(`Document  ${docref.id}`)
    }
    return <div className="Contacts_info">
        <div>
    <h1>Contacts Us</h1>
    <p>if you have any guestions or suggestion, feel free to reach aut to me</p>
    </div>
    <div className="form">
        <form onSubmit={(e)=>{
            handleSubmit(e)
        }}>
            <input value={nameForm} onChange={(e)=>{
                setnameFrom(e.target.value)
            }} placeholder="Your Name"></input>
            <input value={mailFRom} onChange={(e)=>{
                setmailFrom(e.target.value)
            }} placeholder="Your Email"></input>
            <input value={commForm} onChange={(e)=>{
                setcommFrom(e.target.value)
            }} className="Comments" placeholder="Comments"></input>
            <button>Submit</button>
        </form>
    </div>
    </div>
}