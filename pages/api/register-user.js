import { supabase } from "@lib/clients/supabase"

const regiserUser = async (req, res) => {
  const { email, password } = req.body
  let { user, error } = await supabase.auth.signUp({ email, password })

  if (error) return res.status(401).json({ error: error.message })

  return res.status(200).json({ user })
}

export default registerUser
