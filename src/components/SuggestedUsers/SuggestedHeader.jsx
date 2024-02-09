import { Avatar, Flex, Box, Text } from "@chakra-ui/react"
import useLogout from "../../hooks/useLogout"
// import { Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  const {handleLogout,isLoggingout, } = useLogout();
  return (
    <Flex justifyContent={'space-between'} alignItems={"center"} w={'full'}>
        <Flex gap={4}>
            <Avatar src="./profilepic.png"/>
            <Text alignSelf={'center'} fontWeight={'bold'} fontSize={12}>asaprogrammer_</Text>
        </Flex>
        <Box 
        onClick={handleLogout}
        color={'blue.500'} 
        cursor={'pointer'}
        textDecoration={'none'}
        _hover={{color:'white'}}
        fontWeight={'bold'}
        fontSize={14} >
            Log out
        </Box>
    </Flex>
  )
}

export default SuggestedHeader