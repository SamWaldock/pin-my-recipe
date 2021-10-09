import { RichText } from 'prismic-reactjs'

export default function RecipePreview({ recipe }) {
  return (
    <RichText render={recipe.name} />
  )
}
