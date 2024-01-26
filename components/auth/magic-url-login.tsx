import { account, ID } from "@/app/appwrite"

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
