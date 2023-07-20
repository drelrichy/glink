import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Profile',
  description: "Displays user profile",
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
