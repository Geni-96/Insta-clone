import { Avatar, Flex, Text, Button } from "@chakra-ui/react"
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
// import { Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  const {handleLogout,isLoggingout, } = useLogout();
  const authUser = useAuthStore(state => state.user);

  if(!authUser) return null;

  return (
    <Flex justifyContent={'space-between'} alignItems={"center"} w={'full'}>
        <Flex gap={4} alignItems={'center'}>
          <Link to={`${authUser.username}`}>
            <Avatar size={'md'} src={authUser.profilePicURL}/>
          </Link>
          <Link to={`${authUser.username}`}>
            <Text fontWeight={'bold'} fontSize={12}>{authUser.username}</Text>
          </Link>
        </Flex>
        <Button
        size={'xs'} 
        background={'transparent'}
        onClick={handleLogout}
        color={'blue.500'} 
        cursor={'pointer'}
        _hover={{color:'white'}}
        fontWeight={'bold'}
        fontSize={14} >
            Log out
        </Button>
    </Flex>
  )
}

export default SuggestedHeader