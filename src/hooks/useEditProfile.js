import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast'
import useUserProfileStore from '../store/userProfileStore'
import {getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, firestore } from '../firebase/firebase';
import { useState } from 'react';

const useEditProfile = () => {
  const [isUpdating,setIsUpdating] = useState(false)
  const showToast = useShowToast()
  const authUser = useAuthStore((state)=>state.user)
  const setAuthUser = useAuthStore((state)=>state.setUser)
  const setUserProfile = useUserProfileStore((state)=>state.setUserProfile)

  const editProfile = async(inputs,selectedFile) =>{
    if(isUpdating || !authUser) return
    setIsUpdating(true)
    const storageRef = ref(storage,`profilePics/${authUser.uid}`)
    const dataRef = doc(firestore,"users",authUser.uid)
    let URL =""
    try {
        if(selectedFile){
            await uploadString(storageRef,selectedFile,'data_url')
            URL = await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
        }
        const updatedUser = {
            ...authUser,
            profilePicURL: URL || authUser.profilePicURL,
            username: inputs.username || authUser.username,
            fullname: inputs.fullname || authUser.fullname,
            bio: inputs.bio || authUser.bio,
        }
        await updateDoc(dataRef, updatedUser)
        localStorage.setItem("user-info",JSON.stringify(updatedUser))
        setAuthUser(updatedUser)
        setUserProfile(updatedUser)
        showToast("Success","Profile edited successfully",'success')
    } catch (error) {
        showToast("Error",error.message,'error')
    }
  }
  return {editProfile,isUpdating}
}

export default useEditProfile