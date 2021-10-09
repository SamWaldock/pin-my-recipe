import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getRecipe, getAllRecipeUids } from '../../lib/api'

export default function Recipe({ recipe }) {
  const router = useRouter()
  if (!router.isFallback && recipe == null) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>
          {recipe.name[0].text} | Pin My Recipe
        </title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps({ params, previewData }) {
  const data = await getRecipe(params.uid, previewData)
  return {
    props: {
      recipe: data?.recipe ?? null
    },
  }
}

export async function getStaticPaths() {
  const allRecipes = await getAllRecipeUids()
  return {
    paths: allRecipes?.map(({ node }) => `/recipes/${node._meta.uid}`) || [],
    fallback: false,
  }
}
