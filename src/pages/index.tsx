/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.css";
import { Query } from "../../types/graphql-types";

const LatestPostListQuery = graphql`
	query LatestPostListQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			edges {
				node {
					excerpt(truncate: true, pruneLength: 20)
					frontmatter {
						title
						path
						date(formatString: "MMM D")
						author
					}
					id
				}
			}
		}
	}
`;

const IndexPage: React.FC = () => {
	const data = useStaticQuery<Query>(LatestPostListQuery);

	return (
		<Layout>
			<SEO title="Home" />
			<ul className="content-ul">
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<div key={node.id}>
						<p className="content-log content-item">
							<strong>{node.frontmatter.author}</strong> created a post{" "}
							<strong>
								<Link to={node.frontmatter.path} className="content-link">
									{node.frontmatter.title}
								</Link>
							</strong>{" "}
							at {node.frontmatter.date}
						</p>
						<li className="content-li">
							<h4 className="content-title">
								<Link to={node.frontmatter.path} className="content-link">
									{node.frontmatter.title}
								</Link>
							</h4>
							<p className="content-item">{node.excerpt}</p>
							<small className="content-item">
								{" "}
								Updated {node.frontmatter.date}
							</small>
						</li>
						<hr color="#d1d5da" className="content-hr" />
					</div>
				))}
			</ul>
		</Layout>
	);
};

export default IndexPage;
