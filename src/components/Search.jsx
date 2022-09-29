import AvatarImg from '../images/avatar-bw.png'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search..."/>
      </div>

      <div className="userChat">
        <img src={AvatarImg} alt="" />
        <div className="userCharInfo">
          <span>No Name</span>
          <p>Hello</p>
        </div>
        <span className='lastChatTime'>5:44 pm</span>
      </div>
      
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