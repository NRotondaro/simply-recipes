import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"

const RecipeTemplate = ({ data }) => {
  const { title, cookTime, content, prepTime, servings, image } =
    data.contentfulRecipe
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
          </section>
          <section className="recipe-content">
            <h2>{title}</h2>
            <p>{}</p>
            <div className="recipe-icons"></div>
            <p className="recipe-tags">
              Tags:{" "}
              {tags.map((tag, index) => {
                return (
                  <Link to={`/${tag}`} key={index}>
                    {tag}
                  </Link>
                )
              })}
            </p>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate