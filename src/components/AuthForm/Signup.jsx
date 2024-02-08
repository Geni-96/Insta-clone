import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputGroup, InputRightElement,Input, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const Signup = () => {
    const [isShowPassword,setIsShowPassword] = useState(false)
    const [inputs, setInputs] = useState({
        username: "",
        fullname: "",
        email:"",
        password: '',
      });
    const { loading,error,signup } = useSignUpWithEmailAndPassword();
  return (
    <>
        <Input placeholder='Username' type='text' size={'sm'} fontSize={14} value={inputs.username} onChange={(e) => setInputs({...inputs,username:e.target.value})}/>
        <Input placeholder='Fullname' type='text' size={'sm'} fontSize={14} value={inputs.fullname} onChange={(e) => setInputs({...inputs,fullname:e.target.value})}/>
        <Input placeholder='Email' type='email' size={'sm'} fontSize={14} value={inputs.email} onChange={(e) => setInputs({...inputs,email:e.target.value})}/>
        <InputGroup>
            <Input placeholder='Password' size={'sm'} type={isShowPassword ? 'text':'password'} fontSize={14} value={inputs.password} onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
            <InputRightElement>
                <Button varaint='ghost' size={'sm'} onClick={() => setIsShowPassword(!isShowPassword)}>
                    {isShowPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
            </InputRightElement>
        </InputGroup>
        {error && 
        (<Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>)}
        <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} 
        isLoading={loading}
        onClick={() => signup(inputs)}
        >Signup</Button>
    </>
  )
}

export default Signup