import { useState } from "react"
import {
  Container,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react"
import Layout from "./Layout"
import { supabase } from "@lib/clients/supabase"

const Auth = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async email => {
    try {
      setLoading(true)
      const { user, error } = await supabase.auth.signIn({ email })
      if (error) throw error
      console.log("user", user)
      alert("Check your email for the login link")
    } catch (error) {
      console.log("Error thrown:", error.message)
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <Container
        pt="20vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          as="form"
          flex={1}
          direction="column"
          border="1px solid"
          borderColor="gray.300"
          borderRadius={4}
          p={8}
          onSubmit={e => {
            e.preventDefault()
            handleSubmit(email)
          }}
        >
          <Heading>Log In</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={loading}
            loadingText="Attempting login"
          >
            Submit
          </Button>
        </Stack>
      </Container>
    </Layout>
  )
}

export default Auth
