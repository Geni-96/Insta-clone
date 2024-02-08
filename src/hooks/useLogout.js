// import { useSignOut } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase/firebase';
// import useShowToast from './useShowToast';
// import useAuthStore from '../store/authStore';


// const useLogout = () => {
//     const [signOut, isLoggingout, error] = useSignOut(auth);
//     const toast = useShowToast();
//     const loginUser = useAuthStore(state => state.login)
//     const logoutUser  = useAuthStore(state => state.logout);
//     const handleLogout = async () => {
//         try {
//             await signOut();
//             logoutUser();
//             localStorage.removeItem('user-info');
//             console.log('loggedout')
//             return
//         } catch (error) {
//             toast("Error!",error.message,'error')
//         }
        
//     }
//   return {handleLogout,isLoggingout,error}
// }

// export default useLogout;