import Image from 'next/image'

//components
import Header from '@/components/Header'
import CreateAdv from '@/components/createAdv'
import PostAdv from '@/components/postAdv'

export default function Home() {
  return (
    <main className=" min-h-screen px-24">
      <Header />
      <PostAdv/>
      <CreateAdv/>
    </main>
  )
}
