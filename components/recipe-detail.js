import Image from 'next/image'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import styles from '../styles/recipe-detail.module.css'

export default function RecipeDetail({ recipe }) {
  return (
    <section className={styles.detail}>
      <RichText render={recipe.name} />
      <RichText render={recipe.description} />
      <div className={styles.image} style={{backgroundImage: "url(" + recipe.picture.url + ")"}}></div>
      <article>
        <h2>Ingredients</h2>
        <RichText render={recipe.ingredients} />
      </article>
      <article>
        <h2>Method</h2>
        <RichText render={recipe.method} />
      </article>
    </section>
  )
}
