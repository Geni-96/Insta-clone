import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react';

const Login = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password: '',
        });
  return (
    <>
        <Input placeholder='Email' type='email' size={'sm'} fontSize={14} value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})}/>
        <Input placeholder='Password' type='password' size={'sm'} fontSize={14} value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
        <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}>Login</Button>
    </>
  )
}

export default Login