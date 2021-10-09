import Layout from '../components/layout'
import Head from 'next/head'
import { getAllRecipes } from '../lib/api'

export default function Index({ recipes }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Pin My Recipe | Recipes</title>
        </Head>
        <main>
          <p>Recipes</p>
        {recipes.map((recipe) => (
          <p key={post.id}>{recipe.name}</p>
        ))}
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps({ previewData }) {
  const allRecipes = await getAllRecipes(previewData)
  return {
    props: { allRecipes },
  }
}