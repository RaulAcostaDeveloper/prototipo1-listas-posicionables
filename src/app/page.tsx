import Link from "next/link";


export default function Home() {
  return (
    <main>
      <p>/page.tsx</p>
      <Link href={'/routes/main'} >go to /routes/main</Link>
    </main>
  )
}
