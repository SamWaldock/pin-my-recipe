import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default function RecipePreview({ recipe }) {
  return (
    <Link href={`/recipes/${recipe._meta.uid}`}>
      <a className="hover:underline">
        <RichText render={recipe.name} />
      </a>
    </Link>
  )
}
