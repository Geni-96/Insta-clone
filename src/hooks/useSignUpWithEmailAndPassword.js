import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase'
import useShowToast from './useShowToast';
import { doc, setDoc } from 'firebase/firestore';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            showToast('Error','Please fill all required fields','error');
            return;
        }
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                showToast('Error',error.message,'error');
                return;
            }
            if (newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    username:inputs.username,
                    email:inputs.email,
                    fullname:inputs.fullname,
                    profilePicURL:"",
                    bio:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore,'users',newUser.user.uid),userDoc);
                localStorage.setItem('user-info',JSON.stringify(userDoc));
                console.log(newUser,userDoc)
                }
            
        }
        catch(error){
            showToast('Error',error.message,'error');
        }
    }
  return {loading,error,signup}
}

export default useSignUpWithEmailAndPassword;