import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()
    const loginUser = useAuthStore(state=>state.login)
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
            showToast("Error!","Please fill all required fields",'error')
            return
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if (!newUser && error){
                showToast("Error!",error.message,'error')
                return
            }
            if (newUser){
                const userDoc = {
                    uid: newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullname:inputs.fullname,
                    profilePicURL:"",
                    bio:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error!",error.message,'error')
            return
        }
    }
  return {loading,error,signup}
}

export default useSignUpWithEmailAndPassword;