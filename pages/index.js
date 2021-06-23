import { useState, useEffect } from "react"
import { Heading } from "@chakra-ui/react"
import Layout from "@components/Layout"
import Auth from "@components/Auth"
import { supabase } from "@lib/clients/supabase"

export default function Home() {
  const [session, setSession] = useState(null)
  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const onSaveComplete = () => {
    console.log("complete.")
  }

  return <Layout>{!session ? <Auth /> : <Heading>Hello.</Heading>}</Layout>
}
