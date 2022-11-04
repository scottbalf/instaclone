import './App.css';
import Box from './components/box';
import {useState, useEffect} from 'react';

function App() {

    useEffect(() => {
    fetchImages();
    }, [])


    const [user, setUser] = useState();
    const [age, setAge] = useState();
    const [photos, setPhotos] = useState([]);

    const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
    }

    return (
    <div className="App">
        {/* {array.map((item, index) => {
        return (
            <div>
            <Box name={item.name} age={item.age}/>
            </div>
      )})} */}

      {/* <img src="https://picsum.photos/v2/list" alt="a random photo from lorem picsum"/> */}

      {/* <button onClick={(event) => fetchImages()}>Fetch the images!</button> */}

        {photos.map((item, index) => {
        return (
            <div>
            <img src={item.download_url} width="200px"/>
            <h2>{item.author}</h2>
            </div>
        )
        })}
    </div>)}