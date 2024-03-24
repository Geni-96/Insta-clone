import { Container, SkeletonCircle, VStack, Text, Flex, Skeleton } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useState, useEffect } from "react"
import useGetFeedPosts from "../../hooks/useGetFeedPosts"

const FeedPosts = () => {
  const {isLoading,posts} = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
    {isLoading && [0,1,2,3].map((_,idx) => (
      <VStack key={idx} alignItems={'flex-start'} gap={2} mb={6}>
        <Flex alignItems={'center'} gap={2}>
          <SkeletonCircle size={10} />
          <Skeleton height='20px' width='200px'/>
        </Flex>
        <Skeleton height='600px' width='500px' my={2}/>
        <Skeleton height='60px' width='500px'/>
      </VStack>
    ))}
    {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
    {!isLoading && posts.length === 0 && (
      <>
        <Text fontSize={'md'} color={'red.400'}>
          Damn! Looks like you don't have any friends. Go ahead and make some!
        </Text>
      </>
    )}
    </Container>
  )
}

export default FeedPosts