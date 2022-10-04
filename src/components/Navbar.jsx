import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Web <strong>Chat</strong>
      </div>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export default Navbar