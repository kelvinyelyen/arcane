import { Client, Account, ID } from "appwrite"

export const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string)

const account = new Account(client)

export const handleGoogle = () => {
  try {
    const response = account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard", // Success URL
      "http://localhost:3000" // Failure URL
    )
    console.log(response)
  } catch (error) {
    console.error("Failed to create OAuth session:", error)
  }
}

export const createMagicURLSession = async (email: string) => {
  try {
    const response = await account.createMagicURLSession(
      ID.unique(),
      email,
      "http://localhost:3000/dashboard" // Redirect URL
    )
    return response
  } catch (error) {
    throw error
  }
}

export const handleMagicURLLogin = async (userId: string, secret: string) => {
  try {
    const user = await account.updateMagicURLSession(userId, secret)
    return user
  } catch (error) {
    throw error
  }
}

export async function isLoggedIn(): Promise<boolean> {
  try {
    const data = await getCurrentUser()
    return Boolean(data)
  } catch (error) {
    console.error("isLoggedIn error:", error)
  }

  return false
}

export async function getCurrentUser() {
  try {
    return account.get()
  } catch (error) {
    console.error("getCurrentUser error:", error)
  }
  return null
}