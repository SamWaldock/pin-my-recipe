import Layout from '../components/layout'
import Head from 'next/head'
import Wallpaper from '../components/home/wallpaper'
import RecipeList from '../components/home/recipe-list'
import { getAllRecipes } from '../lib/api'

export default function Index({ recipes }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Pin My Recipe | Recipes</title>
        </Head>
        <Wallpaper />
        {recipes.length > 0 && <RecipeList recipes={recipes} />}
      </Layout>
    </>
  )
}

export async function getServerSideProps({ previewData }) {
  const recipes = await getAllRecipes(previewData)
  return {
    props: { recipes },
  }
}