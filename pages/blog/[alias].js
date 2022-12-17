import Head from "next/head"
import Link from "next/link"

export default function Blog({ alias }) {
  return (
    <>
      <Head>
        <title>{alias}</title>
      </Head>

      <h1 className="text-5xl font-bold">{alias}</h1>
      <Link href="/" className="text-blue-500 hover:underline">
        Strona główna
      </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        aperiam, adipisci error maxime commodi dicta. In blanditiis tenetur
        ipsum eos ab vero earum facere mollitia. Inventore dolore a fugit
        possimus.
      </p>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { alias: "lorem" } }, { params: { alias: "ipsum" } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { alias } = params
  return {
    props: { alias },
  }
}
