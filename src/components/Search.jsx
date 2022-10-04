import { useState, useContext } from 'react'
import { collection, query, where, setDoc, doc, updateDoc, serverTimestamp, getDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';
import AvatarImg from '../images/avatar-bw.png'

const Search = () => {
  const {currentUser} = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", username));
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });      
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = e => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            name: user.name,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            name: currentUser.name,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        });
      }
    } catch (error) {

    }

    setUser(null);
    setUsername("");
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search..." onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} value={username}/>
      </div>

      {err && <span>User not found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userCharInfo">
          <span>{user.name}</span>
          <p>{user.email}</p>
        </div>
        <span className='lastChatTime'>5:44 pm</span>
      </div>}
      
      <div className="userChat">
        <img src={AvatarImg} alt="" />
        <div className="userCharInfo">
          <span>Friend</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a.</p>
        </div>
        <span className='lastChatTime'>Today</span>
      </div>
      
      <div className="userChat">
        <img src={AvatarImg} alt="" />
        <div className="userCharInfo">
          <span>New Name</span>
          <p>Amet consectetur dolor sit.</p>
        </div>
        <span className='lastChatTime'>Yesterday</span>
      </div>
      
      <div className="userChat">
        <img src={AvatarImg} alt="" />
        <div className="userCharInfo">
          <span>Older Man</span>
          <p>Ipsum dolor sit amet consectetur.</p>
        </div>
        <span className='lastChatTime'>11/03/2016</span>
      </div>
    </div>
  )
}

export default Search