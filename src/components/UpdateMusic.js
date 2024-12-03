import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UpdateMusic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [musics, setMusics] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/musics/${id}`)
      .then(response => {
        setMusics(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the music data!', error);
      });
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      video: musics?.video || '',
      name: musics?.name || '',
      description: musics?.description || ''
    },
    validationSchema: Yup.object({
      video: Yup.string().required('Video URL is required'),
      name: Yup.string().min(5, 'Name must be at least 5 characters').required('Name is required')
    }),
    onSubmit: (values) => {
      axios.put(`http://localhost:8000/musics/${id}`, values)
        .then(response => {
          navigate('/music-list');
        })
        .catch(error => {
          console.log('Error updating music:', error);
        });
    }
  });

  if (!musics) return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;

  // Inline styles
  const containerStyle = {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const formGroupStyle = {
    marginBottom: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.25rem',
    border: '1px solid #ced4da',
    boxSizing: 'border-box'
  };

  const errorStyle = {
    color: 'red',
    marginTop: '0.25rem'
  };

  const buttonStyle = {
    padding: '0.375rem 0.75rem',
    borderRadius: '0.25rem',
    border: 'none',
    color: 'white',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%'
  };

  return (
    <div style={containerStyle}>
      <h2>Update Music</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor='video' style={labelStyle}>Video URL</label>
          <input
            id='video'
            name='video'
            type='text'
            style={inputStyle}
            value={formik.values.video}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.video && formik.errors.video ? (
            <div style={errorStyle}>{formik.errors.video}</div>
          ) : null}
        </div>
        <div style={formGroupStyle}>
          <label htmlFor='name' style={labelStyle}>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            style={inputStyle}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={errorStyle}>{formik.errors.name}</div>
          ) : null}
        </div>
        <div style={formGroupStyle}>
          <label htmlFor='description' style={labelStyle}>Description</label>
          <input
            id='description'
            name='description'
            type='text'
            style={inputStyle}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div style={errorStyle}>{formik.errors.description}</div>
          ) : null}
        </div>
        <button type='submit' style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default UpdateMusic;
