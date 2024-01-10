import { Container, SkeletonCircle, VStack, SkeletonText, Flex, Skeleton } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import { useState, useEffect } from "react"

const FeedPosts = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=> {
      setIsLoading(false)
    },2000)
  },[])
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
    {!isLoading && (
      <>
        <FeedPost img='/img1.png' username='asaprogrammer_' avatar='img1.png'/>
        <FeedPost img='/img2.png' username='josh' avatar='img2.png' />
        <FeedPost img='/img3.png' username='janedoe' avatar='img3.png' />
        <FeedPost img='/img4.png' username='johndoe' avatar='img4.png' />
      </>
    )}
    </Container>
  )
}

export default FeedPosts