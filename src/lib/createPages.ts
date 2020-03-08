/* eslint-disable no-unused-vars */
import { CreatePagesArgs } from "gatsby";
import path from "path";
import { Query } from "../../types/graphql-types";

export async function createPages({ actions, graphql }: CreatePagesArgs) {
	const { createPage } = actions;

	const { data, errors } = await graphql<Query>(`
		{
			allMarkdownRemark {
				edges {
					node {
						html
						frontmatter {
							title
							path
						}
					}
				}
			}
		}
	`);

	if (errors) {
		throw errors;
	}

	data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: String(node.frontmatter.path),
			context: {
				html: node.html,
				title: String(node.frontmatter.title)
			},
			component: path.resolve(__dirname, "../templates/PostTemplate.tsx")
		});
	});
}
