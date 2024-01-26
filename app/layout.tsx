"use client"

import React, { useEffect, useState } from "react"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { isLoggedIn, getCurrentUser } from "@/appwrite/appwrite"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [authStatus, setAuthStatus] = useState(false)

  useEffect(() => {
    isLoggedIn().then(setAuthStatus)
  }, [])

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
