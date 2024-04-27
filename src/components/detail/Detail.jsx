import "./detail.css"
const Detail=()=>{
    return(
        <div className="detail" >
         <div className="user">
           <img  src="./avatar1.png"/> 
           <h2>Bharti Kumari</h2>
           <p>Hii My name is Bharti Kumari</p>
           </div>
           <div className="info">
            <div className="option">
              <div className="title">
               <span> Chat Setting</span>
               <img src="./arrowUp.png"/>
              </div>
            </div>
            <div className="option">
              <div className="title">
               <span> Privecy& help</span>
               <img src="./arrowUp.png"/>
              </div>
            </div>
            <div className="option">
              <div className="title">
               <span>Shared photos</span>
               <img src="./arrowDown.png"/>
              </div>
              <div className="photos">
                 <div className="photoItem">
                 <div className="photoDetail">
                 <img src="./bharti.jpg" alt=""/>
                 <span>photo_2024_2.png</span>
                 </div>
                 <img src="./download.png" className="icon"/>
                 </div>
               </div>
               </div>
               <div className="option">
              <div className="title">
               <span> Shared Files</span>
               <img src="./arrowUp.png"/>
              </div>
            </div>
            <button>Block User</button>
            <button className="logout">Logout</button>
            </div>
           
          </div>
    )    
}
export default Detail;