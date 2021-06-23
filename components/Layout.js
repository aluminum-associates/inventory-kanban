import { Flex, Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" w="100%" minH="100vh">
      <Box flex={1}>{children}</Box>
    </Flex>
  )
}

export default Layout
