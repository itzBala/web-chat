import AddAvatarImg from '../images/add-avatar.png'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Web Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="file" id="fileUpload" className="hide"/>
                <label htmlFor="fileUpload">
                    <img src={AddAvatarImg} alt="Add Avatar" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register