import React, { useState } from 'react'
import { storage } from './firebase';

function Appstorage() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "value",
      snapshot => { },
      error => {
        console.log(error)
      },
      () => {
        storage.ref("images").child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            setUrl(url)
          })
      }
    )
  }

  return (
    <div>
      <h1>up file</h1>
      <progress value='5' max='100'></progress>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>upload</button>
    </div>
  )
}

export default Appstorage
