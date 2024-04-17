import { useEffect, useState } from 'react';
import './app.css';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
//import * as faceapi from '../face-api.js'

function App(){
    const [file,setFile] = useState();
    const [image,setImage]= useState();

    useEffect(() =>{
        const getImage=() =>{
            const img =new Image()
            img.src=URL.createObjectURL(file);
            img.onload=() =>{
            setImage({
                url:img.src,
                width: img.width,
                height: img.height,

            });
        };
        };
        file && getImage();
        //file && console.log(URL.createObjectURL(file))
    },[file]);

   

    return (<div >
        <Navbar />
        {image ? (<NewPost image={image} />) : (
        <div className='newPostCard'>
            <div className="addPost">
                <img 
                    src="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=''
                    className='avatar'
                />
                <div className='postForm'>
                    <input 
                        type='text'
                        placeholder="What's on your mind?"
                        className='postInput'
                    />
                    <label htmlFor='file'>
                        <img 
                            className='addImg'
                            src="https://cdn-icons-png.flaticon.com/128/4131/4131800.png"
                            alt=""
                        />
                        <img 
                            className='addImg'
                            src="https://cdn-icons-png.flaticon.com/128/854/854878.png"
                            alt=""
                        />
                        <img 
                            className='addImg'
                            src="https://cdn-icons-png.flaticon.com/128/11530/11530463.png"
                            alt=""
                        />
                        <button>Send</button>
                    </label>
                    <input 
                    onChange={(e) => setFile(e.target.files[0])}
                    id='file' style={{display:"none"}} type='file'/>
                    
                </div>
            </div>
        </div>
        )}
    </div>);
}

export default App;

/*<img 
        crossOrigin='anonymos'
        ref={imgRef}
        src="https://images.pexels.com/photos/10638077/pexels-photo-10638077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
        width="400"
        height="500"
        />
        <canvas 
        ref={canvasRef}
        width="400"
        height="500"></canvas>
        */