import { useEffect, useState ,useRef} from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";
const Chat=()=>{
  const[open,setOpen]=useState(false);
  const[text,setText]=useState("");
  const endRef=useRef(null);
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  },[]);
   const handleEmoji=(e)=>{
     setText(prev=>prev+e.emoji);
     setOpen(false)
   };
    return(
        <div className="chat" >
       <div className="top">
       <div className="user">
        <img src="./avatar1.png" alt="" />
        <div className="texts">
            <span>Bharti Kumari</span>
            <p>Hii my name is Bharti Kumari .I am a software development student</p>
        </div>
       </div>
       <div className="icons">
        <img src="./phone.png"/>
        <img src="./video.png"/>
        <img src="./info.png"/>
       </div>
       </div>
       <div className="center">
        <div className="message">
          <img src="./avatar1.png" alt=""/>
          <div className="texts">
          <p> what about you? Please introduce yourself.
            I am exicted know about you</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <p>Hey ,I am Kittu .I am from Patna.
            Currently I am pursing Btech from
          Nalanda college of engineering.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar1.png" alt=""/>
          <div className="texts">
          <p>ohh nice .Where are you from</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
          <p>I am from araria district.</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar1.png" alt=""/>
          <div className="texts">
          <p> It pleasure to know about you .Can you send your pic?</p>
          <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="./bharti.jpg"/>
          <p> yeah sure ,here it is. </p>
          <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}>

        </div>
       </div>
       <div className="bottom">
       <div className="icons">
       <img src="./img.png"/> 
       <img src="./camera.png"/>
       <img src="./mic.png"/>
        </div>
       <input type="text"  placeholder="Type a message..."
       value={text}
        onChange={(e)=>setText(e.target.value)}
       />
        <div className="emoji">
         <img src="./emoji.png" 
            onClick={()=>setOpen(prev=>!prev)}
         />
         <div className="picker">
         <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
         </div>
        </div>
        <button className="sendButton">Send</button>
       </div>

        </div>
    )
}
export default Chat;