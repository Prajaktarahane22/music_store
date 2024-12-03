import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MusicList() {
  const navigate = useNavigate();
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    fetchMusics();
  }, []);

  const fetchMusics = () => {
    axios.get('http://localhost:8000/musics')
      .then(response => {
        setMusics(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the music data!', error);
      });
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/musics/${id}`)
      .then(() => {
        fetchMusics();
      })
      .catch(error => {
        console.log('There was an error deleting the music data!', error);
      });
  }

  // Inline styles
  const containerStyle = {
    marginTop: '20px',
  };

  const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const videoStyle = {
    width: '100%',
  };

  const buttonStyle = {
    margin: '5px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2>Music List</h2>
      <div className="row">
        {musics.map(music => (
          <div className="col-md-4 mb-4" key={music.id}>
            <div className="card" style={cardStyle}>
              <video controls style={videoStyle}>
                <source src={music.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{music.name}</h5>
                <p className="card-text">{music.description}</p>
                <div>
                  <button className="btn btn-warning" style={buttonStyle} onClick={() => navigate(`/update-music/${music.id}`)}>Update</button>
                  <button className="btn btn-danger" style={buttonStyle} onClick={() => handleDelete(music.id)}>DELETE</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicList;
