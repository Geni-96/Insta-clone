import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink} from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={"center"} w={'full'}>
        <Flex gap={4}>
            <Avatar src="./profilepic.png"/>
            <Text alignSelf={'center'} fontWeight={'bold'} fontSize={12}>asaprogrammer_</Text>
        </Flex>
        <Link to="/auth" as={RouterLink} 
        color={'blue.500'} 
        cursor={'pointer'}
        textDecoration={'none'}
        _hover={{color:'white'}}
        fontWeight={'bold'}
        fontSize={14} >
            Log out
        </Link>
    </Flex>
  )
}

export default SuggestedHeader