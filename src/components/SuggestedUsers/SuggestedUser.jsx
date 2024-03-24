import { Avatar, Flex, Text, VStack, Button } from "@chakra-ui/react"
import useFollowUser from "../../hooks/useFollowUser"
import useAuthStore from "../../store/authStore"

const SuggestedUser = ({user,setUser}) => {
    const {isUpdating,isFollowing,handleFollowUser} = useFollowUser(user.uid);
    const authUser = useAuthStore((state) =>  state.user)

    const onFollowUser = async () =>{
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing ? user.followers.filter((follower)=> follower.uid !==authUser.uid)
                    : [...user.followers, authUser],
        })
    }
  return (
    <Flex justifyContent={'space-between'} w={'full'} py={2}>
        <Flex gap={4}>
            <Avatar src={user.profilePicURL}/>
            <VStack alignItems={'start'}>
                <Text fontSize={14} alignSelf={'center'} fontWeight={'bold'}>{user.fullname}</Text>
                <Text fontWeight={'bold'} color={'gray.500'} fontSize={12}>{user.followers.length} followers</Text>
            </VStack>
        </Flex>
        {authUser.uid !== user.uid && (
            <Button alignSelf={'center'}
                color={'blue.500'} 
                cursor={'pointer'} 
                _hover={{color:'white'}} 
                fontWeight={'bold'} 
                fontSize={14}
                onClick={onFollowUser}
                bg={'transparent'}
                isLoading={isUpdating}>
                    {isFollowing ? "UnFollow" : "Follow"}
            </Button>
        )}
    </Flex>
  )
}

export default SuggestedUser