import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  uploadBytesResumable,
  deleteObject
} from "firebase/storage";
import { v4 as uuid } from "uuid";

const storage = getStorage();

class ImageService {
  uploadImage = async (file, folderName) => {
    const name = `/${folderName ? folderName : "posts"}/${uuid()}`;

    const storageRef = ref(storage, name);

    // const uploadTask = uploadBytesResumable(storageRef, file[0]);
    // const [imgUrl, setImgUrl] = useState("");
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     console.log("File uploaded : ", snapshot);
    //   },
    //   (e) => {
    //     console.log(e);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       console.log(url);
    //       setImgUrl(url);
    //     });
    //   }
    // );

    return uploadBytes(storageRef, file[0]).then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      this.downloadImage(name);
    });
  };

  downloadImage = (path) => {
    const pathReference = ref(storage, path);
    const [imgUrl, setImgUrl] = useState("");
    getDownloadURL(pathReference)
      .then((url) => {
        console.log("url : \n\n", url);
        setImgUrl(url);
        return url;
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };

  getImages = () => { };

  getImage = () => { };

  deleteImage = (location) => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, location);

    deleteObject(desertRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  }
}

export default new ImageService();
