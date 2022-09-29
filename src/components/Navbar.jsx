import AvatarImg from '../images/avatar.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img src={AvatarImg} alt="User" />
        <span>
          User Name
          <small>Online</small>
        </span>
      </div>
      <button>Sign Out</button>
    </div>
  )
}

export default Navbar