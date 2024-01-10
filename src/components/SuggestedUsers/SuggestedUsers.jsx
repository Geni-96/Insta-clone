import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import { Button, Flex, Text, VStack, Link } from "@chakra-ui/react"

const SuggestedUsers = () => {
  return (
    <VStack mt={8}>
        <SuggestedHeader />
        <Flex justifyContent={'space-between'} w={'full'} my={2}>
            <Text color={'gray.500'} fontWeight={'bold'} fontSize={14}>Suggested for you</Text>
            <Button variant='link' background={'transparent'} fontSize={13} cursor={'pointer'}>See All</Button>
        </Flex>
        <SuggestedUser name='Dan Abrahmov' avatar='https://bit.ly/dan-abramov' followers={537}/>
        <SuggestedUser name='Ryan Florence' avatar='https://bit.ly/ryan-florence' followers={1392} />
        <SuggestedUser name='Christian Nwamba' avatar='https://bit.ly/code-beast' followers={678} />
        <Text color='gray.500' justifyContent={'start'} w={'full'} fontSize={14} mt={4}>© 2023 Built By{" "}
            <Link href="https://geni-96.github.io/">Gnaneswari Lolugu</Link>
        </Text>
    </VStack>
  )
}

export default SuggestedUsers