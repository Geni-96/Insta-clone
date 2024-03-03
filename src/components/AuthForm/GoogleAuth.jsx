import { Flex, Image, Text } from '@chakra-ui/react'
import useShowToast from '../../hooks/useShowToast'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import { firestore, auth } from '../../firebase/firebase';
import useAuthStore from '../../store/authStore';

const GoogleAuth = ({prefix}) => {
  const showToast = useShowToast();
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
        const newUser = await signInWithGoogle();
        if(!newUser && error){
          showToast("Error!", error.message, 'error')
          return
        }
        const userRef = doc(firestore,"users", newUser.user.uid);
        const userSnap = await getDoc(userRef);

        if(userSnap.exists()){
          //login
          const userDoc = userSnap.data();
          localStorage.setItem("user-info", JSON.stringify(userDoc));
          loginUser(userDoc);
        }

        else{
          const userDoc = {
            uid: newUser.user.uid,
            email:newUser.user.email,
            username:newUser.user.email.split("@")[0],
            fullname:newUser.user.displayName,
            profilePicURL:newUser.user.photoURL,
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
        showToast("Error!", error.message, 'error')
        return
    }
  }
  return (
    <>
        <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'} onClick={handleGoogleAuth}>
            <Image src='/google.png' w={5} alt="Google logo" />
            <Text mx='2' color={'blue.500'}>{prefix} with Google</Text>
        </Flex>
    </>
  )
}

export default GoogleAuth