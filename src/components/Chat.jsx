import {TbVideo} from 'react-icons/tb'
import {FiUserPlus} from 'react-icons/fi'
import {CgMore} from 'react-icons/cg'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Friend</span>
        <div className="chatIcons">
          <TbVideo/>
          <FiUserPlus/>
          <CgMore/>
        </div>
      </div>
    </div>
  )
}

export default Chat