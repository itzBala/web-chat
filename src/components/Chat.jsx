import Messages from './Messages'
import Input from './Input'

import AvatarImg from '../images/avatar.png'

import {BsFillCameraVideoFill} from 'react-icons/bs'
import {ImUserPlus} from 'react-icons/im'
import {FiMoreVertical} from 'react-icons/fi'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatWith">
          <img src={AvatarImg} alt="Friend" />
          <span>
            User Name
            <small>Online</small>
          </span>
        </div>
        <div className="chatOptions">
          <BsFillCameraVideoFill className='chatIcon'/>
          <ImUserPlus className='chatIcon'/>
          <FiMoreVertical className='chatIcon'/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat