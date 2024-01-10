import { Avatar, Flex, Text, VStack, Button } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({avatar, name, followers}) => {
    const [isFollowed,setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={'space-between'} w={'full'} py={2}>
        <Flex gap={4}>
            <Avatar src={avatar}/>
            <VStack alignItems={'start'}>
                <Text fontSize={14} alignSelf={'center'} fontWeight={'bold'}>{name}</Text>
                <Text fontWeight={'bold'} color={'gray.500'} fontSize={12}>{followers} followers</Text>
            </VStack>
        </Flex>
        <Button alignSelf={'center'}
        color={'blue.500'} 
        cursor={'pointer'} 
        _hover={{color:'white'}} 
        fontWeight={'bold'} 
        fontSize={14}
        onClick={() => {setIsFollowed(!isFollowed)}}
        bg={'transparent'}>
            {isFollowed ? "UnFollow" : "Follow"}
        </Button>
    </Flex>
  )
}

export default SuggestedUser