import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { Alert, AlertIcon } from '@chakra-ui/react';

const Login = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password: '',
        });
    const {loading,error, handleLogin} = useLogin()
  return (
    <>
        <Input placeholder='Email' type='email' size={'sm'} fontSize={14} value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})}/>
        <Input placeholder='Password' type='password' size={'sm'} fontSize={14} value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
        {error && 
        (<Alert status='error' fontSize={13} p={2} borderRadius={4}>
        <AlertIcon fontSize={12} />
          {error.message}
        </Alert>)}
        <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} 
        isLoading = {loading}
        onClick = {() => handleLogin(inputs)}>Login</Button>
    </>
  )
}

export default Login