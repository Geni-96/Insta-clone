import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { Button, Flex, Text, VStack, Link } from "@chakra-ui/react"


const SuggestedUsers = () => {
  const {isLoading, suggestedUsers} = useGetSuggestedUsers();

  if(isLoading) return null;

  return (
    <VStack mt={8}>
        <SuggestedHeader />
        {suggestedUsers.length !==0 && (
          <Flex justifyContent={'space-between'} w={'full'} my={2}>
            <Text color={'gray.500'} fontWeight={'bold'} fontSize={14}>Suggested for you</Text>
            <Button variant='link' background={'transparent'} fontSize={13} cursor={'pointer'}>See All</Button>
          </Flex>
        )}
        {suggestedUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} />
        ))}
        <Text color='gray.500' justifyContent={'start'} w={'full'} fontSize={14} mt={4}>© 2023 Built By{" "}
            <Link href="https://geni-96.github.io/">Gnaneswari Lolugu</Link>
        </Text>
    </VStack>
  )
}

export default SuggestedUsers