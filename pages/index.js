import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Strona główna</title>
      </Head>

      <main>
        <h1 className="text-5xl font-bold">Hello World!</h1>
        <Link href="/podstrona" className="text-blue-500 hover:underline">
          Podstrona
        </Link>
      </main>
    </>
  )
}
