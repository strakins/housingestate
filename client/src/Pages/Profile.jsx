import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../firebase";

const Profile = () => {

  const imgRef = useRef();
  const { currentUser } = useSelector(state => state.user);
  const [file, setFile] = useState(undefined);
  const [filepercent, setFilePercentage] = useState(0);
  const [ fileUploadError, setFileUploadError ] = useState(null);
  const [ formData, setFormData ] = useState({})


  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file])

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      });
      (error) => {
        setFileUploadError(true)
      };
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then ( 
          (downloadUrl) => {
            setFormData({ ...formData, avatar: downloadUrl})
          }
        )
      }
  }


  return (
    <section className="text-white p-4 max-w-lg mx-auto">
      <h1 className="text-center py-8 text-2xl font-semibold tracking-[3px]">Profile</h1>  
      <form className="flex flex-col gap-4">
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} ref={imgRef} 
          hidden 
          accept="image/*" 
        />
        <img src={currentUser.avatar} onClick={() => imgRef.current.click()} alt="profile-photo" className="w-24 self-center h-24  cursor-pointer object-cover rounded-full" />
        <input type="text" id="username" placeholder='Username'className="p-3 border rounded-lg placeholder:text-black"  />
        <input type="email" id="email" placeholder="Email" className="p-3 border rounded-lg placeholder:text-black"  />
        <input type="text" id="password" placeholder='password' className="p-3 border rounded-lg placeholder:text-black"  />
        <button className="bg-green-600 p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-60">Update </button>
      </form>
      <div className="flex justify-between text-red-500 text-lg mt-5 ">
        <p className="cursor-pointer">Delete Account</p>
        <p className="cursor-pointer">Sign Out</p>
      </div>
      
    </section>
  )
}

export default Profile