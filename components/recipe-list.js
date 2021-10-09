import styles from '../styles/recipe-list.module.css'
import RecipePreview from './recipe-preview'

export default function RecipeList({ recipes }) {
  return (
    <section className={styles.recipeList}>
      {recipes.map(( recipe ) => (
        <RecipePreview
          key={recipe.node._meta.uid}
          recipe={recipe.node}
        />
      ))}
    </section>
  )
}
