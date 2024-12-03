import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMusic() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      video: '',
      name: '',
      description: ''
    },
    validationSchema: Yup.object({
      video: Yup.string().required('Video URL is required'),
      name: Yup.string().min(5, 'Name must be at least 5 characters').required('Name is required'),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: (values) => {
      axios.post('http://localhost:8000/musics', values)
        .then(response => {
          navigate('/music-list');
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa'
    },
    formContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      width: '100%',
      maxWidth: '600px'
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#007bff'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.25rem',
      border: '1px solid #ced4da'
    },
    error: {
      color: '#dc3545',
      marginTop: '0.5rem'
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
      marginTop: '1rem'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Add Music</h2>
        <form onSubmit={formik.handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="video" style={styles.label}>Video URL</label>
            <input
              id="video"
              name="video"
              type="text"
              style={styles.input}
              value={formik.values.video}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.video && formik.errors.video ? <div style={styles.error}>{formik.errors.video}</div> : null}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              style={styles.input}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? <div style={styles.error}>{formik.errors.name}</div> : null}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>Description</label>
            <input
              id="description"
              name="description"
              type="text"
              style={styles.input}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? <div style={styles.error}>{formik.errors.description}</div> : null}
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Add Music
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMusic;
