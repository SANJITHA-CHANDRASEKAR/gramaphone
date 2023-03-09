import {React} from 'react';
import megam from '../songs/kadhal.mpeg';
import annal from '../songs/annul.mpeg';
import nall from '../songs/NallaiAllai.mp3';
import mugil from '../songs/Kurumugil.mp3';
import play from '../pic/playpas.jpeg';
import { Link } from 'react-router-dom';

function Song(){

const Fun=()=>{
  const aud=document.getElementById("son");

    if(aud.paused){
       aud.play();
      }
    else{
        aud.pause();        
     }
}

const Fun2=()=>{
  const aud=document.getElementById("son2");     
    if(aud.paused){
       aud.play();
      }
    else{
        aud.pause();        
     }
}

const Fun3=()=>{
  const aud=document.getElementById("son3");     
    if(aud.paused){
       aud.play();
      }
    else{
        aud.pause();        
     }
}

const Fun4=()=>{
  const aud=document.getElementById("son4");     
    if(aud.paused){
       aud.play();
      }
    else{
        aud.pause();        
     }
}


return(
<>
  
  <audio   id="son" src={megam} />
  <audio   id="son2" src={annal} />
  <audio   id="son3" src={nall}/>
  <audio   id="son4" src={mugil}/>
  <div className="song1">
    <p style={{ marginLeft: 20 }}>1.KADHAL EN KAVIYE</p>
    <img
     
      style={{ marginLeft: 100 }}
      src={play}
      alt="play"
      onClick={Fun}
    />
  </div>
  <div className="song2">
    <p style={{ marginLeft: 20 }}>2.ANNAL MELE</p>
    <img
      style={{ marginLeft: 150 }}
      src={play}
      alt="play"
      onClick={Fun2}
    />
  </div>
  <div className="song3">
    <p style={{ marginLeft: 30 }}>3.NALLAI ALLAI</p>
    <img
      style={{ marginLeft: 140 }}
      src={play}
      alt="play"
      onClick={Fun3}
    />
  </div>
  <div className="song3">
    <p style={{ marginLeft: 30 }}>4.KURUMUGIL</p>
    <img
      style={{ marginLeft: 150 }}
      src={play}
      alt="play"
      onClick={Fun4}
    />
  </div>
  <button className="downbut"><Link to="/subscribe" className="but">DOWNLOAD</Link></button>
</>
);

}

export default Song;