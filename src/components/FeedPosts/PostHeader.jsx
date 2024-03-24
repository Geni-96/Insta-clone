import { Avatar, Flex, Box, Text, SkeletonCircle, Skeleton, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import useFollowUser from "../../hooks/useFollowUser"


const PostHeader = ({ post, creatorProfile }) => {
  
  const {isUpdating,isFollowing,handleFollowUser} = useFollowUser(post.createdBy)
     
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} my={2}>
        <Flex alignItems={"center"} gap={2}>
            {creatorProfile ? (
                <Link to={`/${creatorProfile?.username}`}>
                    <Avatar src={creatorProfile?.profilePicURL} alt='user profile pic' size={"sm"} />
                </Link>
            ):(
                <SkeletonCircle size='10' />
            )}
            
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                {creatorProfile ? (
                    <Link to={`/${creatorProfile?.username}`}>
                        {creatorProfile?.username}
                    </Link>
                ):(
                    <Skeleton w={"100px"} h={"10px"} />
                )}
                
                <Box color={"gray.500"}>
                    •1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Button color={'blue.500'}
            bg={"transparent"}
            fontSize={12}
            size={'xs'}
            fontWeight={'bold'}
            _hover={{color:'white'}}
            transition={'0.2s ease-in-out'}
            onClick={handleFollowUser}
            isLoading={isUpdating}>
                {isFollowing? "UnFollow":"Follow"}
            </Button>
        </Box>
    </Flex>
  )
}

export default PostHeader