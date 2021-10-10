import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import styles from '../../styles/recipe/recipe-detail.module.css'

export default function RecipeDetail({ recipe }) {
  const duration = [...Array(recipe.duration)]
  const budget = [...Array(recipe.budget)]
  const difficulty = [...Array(recipe.difficulty)]
  return (
    <section className={styles.detail}>
      <RichText render={recipe.name} />
      <span>
        Duration:&nbsp;
        {duration.map(_=>"🕒")}
      </span>
      <span>
        &nbsp;&nbsp;Budget:&nbsp;
        {budget.map(_=>"💰")}
      </span>
      <span>
        &nbsp;&nbsp;Difficulty:&nbsp;
        {difficulty.map(_=>"😓")}
      </span>
      <RichText render={recipe.description} />
      <div className={styles.image} style={{backgroundImage: "url(" + recipe.picture.url + ")"}}></div>
      <article className={styles.chef}>
        <Image
          width={50}
          height={50}
          alt={`foto of the chef`}
          className={styles.imageChef}
          src={recipe.chef.picture.url}
        />
        <span className={styles.chefName}>By {recipe.chef.name}</span>
      </article>
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
