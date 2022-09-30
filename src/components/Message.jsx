import AvatarImg from '../images/avatar.png'
import AttachedImg from '../images/attachment.jpg'

const Message = () => {
  return (
    <div className="message mine">
      <div className="messageInfo">
        <img src={AvatarImg} alt="Friend" />
        <div className="messageContent">
          <img src={AttachedImg} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error labore reprehenderit soluta eius modi culpa natus ipsa, velit tempora eos ipsum quis maxime neque quaerat?</p>
          <span>Just now</span>
        </div>
      </div>
    </div>
  )
}

export default Message