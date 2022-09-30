import {RiAttachment2, RiCameraLensLine, RiSendPlane2Fill} from 'react-icons/ri'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <input type="file" className='hide' id="fileUpload"/>
        <label htmlFor="fileUpload">
          <RiAttachment2 className='icon attach'/>
        </label>
        <RiCameraLensLine className='icon camera'/>
        <RiSendPlane2Fill className='icon send-btn'/>
      </div>
    </div>
  )
}

export default Input