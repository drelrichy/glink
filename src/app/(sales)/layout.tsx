import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'sell page',
  description: "Displays sell page",
}

export default function SalesLayout({
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
