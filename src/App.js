import './App.css';
import React from 'react';
import {AiOutlinePicture,AiOutlineDown,AiOutlineSmile,AiOutlineAlignLeft,AiOutlineFileGif ,AiOutlineTwitter, AiTwotoneStar, AiOutlineSearch} from 'react-icons/ai';
import {BiHomeCircle,BiHash, BiBell} from 'react-icons/bi';
import {MdMailOutline,MdBookmarkBorder} from 'react-icons/md';
import {FaEllipsisH,FaRetweet,FaRegComment,FaRegHeart,FaUserCircle} from 'react-icons/fa';
import {BsCardText,BsGear,BsUpload} from 'react-icons/bs';

function App() {
  return (
    <div className="App">
    <div className="Main">
    <div className="Sidebar_Area">
      <div className="Twitter">
        <AiOutlineTwitter color="#1DA1F2" fontSize="2.3rem"/>
      </div>
      <div className="Icons">
        <BiHomeCircle color="#1DA1F2" fontSize="2rem"/>
        <div>Home</div>
        </div>
        <div className="Icons">
        <BiHash color="#1DA1F2" fontSize="2rem"/>
        <div>Explore</div>
        </div>
        <div className="Icons">
        <BiBell color="#1DA1F2" fontSize="2rem"/>
        <div>Notifications</div>
        </div>
        <div className="Icons">
        <MdMailOutline color="#1DA1F2" fontSize="2rem"/>
        <div>Messages</div>
        </div>
        <div className="Icons">
        <MdBookmarkBorder color="#1DA1F2" fontSize="2rem"/>
        <div>Bookmarks</div>
        </div>
        <div className="Icons">
        <BsCardText color="#1DA1F2" fontSize="2rem"/>
        <div>Lists</div>
        </div>
        <div className="Icons">
        <FaUserCircle color="#1DA1F2" fontSize="2rem"/>
        <div>Profiles</div>
        </div>
        <div className="Icons">
        <FaEllipsisH color="#1DA1F2" fontSize="2rem"/>
        <div>More</div>
        </div>
        <div className="Icons">
          <button className='btn'>Tweet</button>
        </div>
    </div>
    <div className="Main_Area">
      <div className="Home">
        <div className="home">
          Home
        </div>
        <div className="Star_icon">
          <AiTwotoneStar color="#1DA1F2" fontSize="2rem"/>
          </div>
        </div>
        <br></br>
        <div className="post">
          <div className="Add_Text">
            <div className="Profile">
              <img src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000" alt="dp" style={{height:"35px",width:"35px",borderRadius:"50%"}} />
            </div>
            <input type="Post" placeholder="What's Happening ?" />
          </div>
          <div className="btns">
          <div className="Icon">
            <div className="Btns_icon">
              <AiOutlinePicture fontSize="1.5rem" color="#1DA1F2" />
            </div>
            <div className="Btns_icon">
              <AiOutlineFileGif fontSize="1.5rem" color="#1DA1F2" />
            </div>
            <div className="Btns_icon">
              <AiOutlineAlignLeft fontSize="1.5rem" color="#1DA1F2" />
            </div>
            <div className="Btns_icon">
              <AiOutlineSmile fontSize="1.5rem" color="#1DA1F2" />
            </div>
            </div>
          <div className="Tweets">
            <button className="btns-create">
              Tweets
            </button>
          </div>
        </div>
        </div>
        <div className="posted_area">
        <div className="Profile">
        <div className="User_detail">
          <img src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000" alt="logo" style={{height:"30px",width:"30px",borderRadius:"50%"}} />
          <div className="User-name">Akshat Aggarwal</div>
          <div className="User-id">akshat_2012</div>
        </div>
        <div className="dropdown">
          <AiOutlineDown fontSize="1rem" />
        </div>
          </div>
          
          <div className="Quotes">
              Hey Twitter!
            </div> 
            <br></br>
            <div className="Profile_image">
              <img src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg?w=2000" alt="Profile-Picture" style={{width:"100%",height:"23rem",objectFit:"fill"}} />
            </div>  
            <div className="Comment_section">
            <div className="Comment">
              <FaRegComment fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <FaRetweet fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <FaRegHeart fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <BsUpload fontSize="1.4rem" />
            </div> 
            </div> 
        </div>
        <div className="posted_area">
        <div className="Profile">
        <div className="User_detail">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="logo" style={{height:"30px",width:"30px",borderRadius:"50%"}} />
          <div className="User-name">Cristiano</div>
          <div className="User-id">cris_07</div>
        </div>
        <div className="dropdown">
          <AiOutlineDown fontSize="1rem" />
        </div>
          </div>
          
          <div className="Quotes">
              Reached 700 Club goals!
            </div> 
            <br></br>
            <div className="Profile_image">
              <img src="https://imageio.forbes.com/specials-images/imageserve//62aa51710c3e65f16ed3b373/0x0.jpg?format=jpg&crop=1928,1314,x217,y0,safe&width=1200" alt="Profile-Picture" style={{width:"100%",height:"23rem",objectFit:"fill"}} />
            </div>  
            <div className="Comment_section">
            <div className="Comment">
              <FaRegComment fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <FaRetweet fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <FaRegHeart fontSize="1.4rem" />
            </div> 
            <div className="Comment">
              <BsUpload fontSize="1.4rem" />
            </div> 
            </div> 
        </div>
      </div>
    <div className="Left_Sidebar_Area">
      <div className="Search">
        <AiOutlineSearch fontSize="1.5 rem" color="#1DA1F2" style={{borderRadius:"50%"}} />
        <div className="Search_input">
          <input type="Search" placeholder="Search Twitter" />
        </div>
      </div>
      <br></br>
      <div className="Container">
        <div className="Trends">
          <div className="Trends_new">
            Trends for you
          </div>
        <div className="Setting_icon">
          <BsGear fontSize="1.5rem" color="#1DA1F2" />
        </div>
      </div>
      <div className="Trend_world">
        <div className="Tren_show">
          Trending worldwide
        </div>
        <div className="Tag">
        <a href="https://twitter.com/search?q=%23breakingnews">#BreakingNews</a>
        </div>
        <div className="Tweet_people">
          125k
        </div>
        <div className="Tweets">
          6784 people are tweeting this
        </div>
      </div>
      <div className="Trend_world">
        <div className="Tren_show">
          Trending worldwide
        </div>
        <div className="Tag">
          <a href="https://twitter.com/Cristiano">#RonaldoFc</a>
        </div>
        <div className="Tweet_people">
          600k
        </div>
        <div className="Tweets">
          50k people are tweeting this
        </div>
      </div>
      <div className="Trend_world">
        <div className="Tren_show">
          Trending worldwide
        </div>
        <div className="Tag">
        <a href="https://twitter.com/search?q=%23BALLONDOR">#BallonDor</a>
        </div>
        <div className="Tweet_people">
          550k
        </div>
        <div className="Tweets">
          46k people are tweeting this
        </div>
      </div>
      <br></br>
    <div className="See_more">
      See More
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;

