import { Flex, Avatar, VStack, Text, SkeletonCircle, Skeleton, Link } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'
import { timeAgo } from '../../utils/timeAgo';

const Comment = ({comment}) => {
  const { isLoading, userProfile, setUserProfile } = useGetUserProfileById(comment.createdBy);
  if(isLoading) return <CommentSkeleton />;
  return (
    <Flex>
        <Link to={`${userProfile.username}`}>
          <Avatar src={userProfile.profilePicURL} size={'sm'} alt='profilepic' marginRight={2}></Avatar>
        </Link>
        <VStack alignItems={'start'} gap={1}>
            <Flex alignItems={'center'} gap={1}>
              <Link to={`${userProfile.username}`}>
                <Text fontWeight={'bold'} fontSize={12}>{userProfile.username}</Text>
              </Link>
              <Text fontSize={12} ml={2}>{comment.comment}</Text>
            </Flex>
            <Text color={'whiteAlpha.700'} fontSize={12}>{timeAgo(comment.createdAt)}</Text>
        </VStack>
    </Flex>
  )
}

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={'full'} alignItems={'center'}>
      <SkeletonCircle h={10} w={10} />
      <Flex gap={1} flexDir={'column'}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  )
}