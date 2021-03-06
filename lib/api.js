import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllRecipes(previewData) {
  const data = await fetchAPI(`
    query {
      allRecipes {
        edges {
          node {
            name
            picture
            description
            duration
            budget
            difficulty
            ingredients
            method
            chef {
              ...on Chef {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data.allRecipes.edges
}

export async function getAllRecipeUids() {
  const data = await fetchAPI(`
    query {
      allRecipes {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allRecipes?.edges
}

export async function getRecipe(uid, previewData) {
  const data = await fetchAPI(`
    query recipeByUid($uid: String!, $lang: String!) {
      recipe(uid: $uid, lang: $lang) {
        name
        picture
        description
        duration
        budget
        difficulty
        ingredients
        method
        chef {
          ...on Chef {
            name
            picture
          }
        }
        _meta {
          uid
        }
      }
    }
  `,
    {
      previewData,
      variables: {
        uid,
        lang: API_LOCALE,
      },
    }
  )

  return data
}