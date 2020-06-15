import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { InView } from 'react-intersection-observer'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

function SlideShow(props) {
	const project = props.project;
	const [index, setIndex] = useState(0);
	const { allFile } = useStaticQuery(
		graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
	);

	let filtered = allFile.edges.filter((edge) => {
		return (edge.node.name.includes(project) === true) ;
	})

	//Minus 1 for array offset from 0
	const length = filtered.length - 1
	const handleNext = () =>
		index === length ? setIndex(0) : setIndex(index + 1)
	const handlePrevious = () =>
		index === 0 ? setIndex(length) : setIndex(index - 1)
	const { node } = filtered[index]

	const toggleView = (inView) => {
		console.log(inView);
	}

	return (
		<InView onChange={(inView, entry) => toggleView(inView)}>
		<div>
			<div>
				<Img
					fluid={node.childImageSharp.fluid}
					key={node.id}
					alt={node.name.replace(/-/g, " ").substring(2)}
				/>
			</div>
			<div>
				<button onClick={() => handlePrevious()}>Previous</button>
				<button onClick={() => handleNext()}>Next</button>
			</div>
			</div>
		</InView>
	)
}
export default SlideShow
