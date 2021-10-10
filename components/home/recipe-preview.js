import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import styles from '../../styles/home/recipe-preview.module.css'

export default function RecipePreview({ recipe }) {
  return (
    <article className={styles.preview}>
      <div className={styles.coverImage} style={{backgroundImage: "url(" + recipe.picture.url + ")"}}></div>
      <h2>{recipe.name[0].text}</h2>
      <RichText render={recipe.description} />
      <Link href={`/recipes/${recipe._meta.uid}`}>
        <a className={styles.link}>
          <span>Read more</span>
        </a>
      </Link>
    </article>
  )
}
