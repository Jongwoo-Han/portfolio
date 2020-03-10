/* eslint-disable no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Grid } from "@material-ui/core";

import Header from "./header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<Container className="pt-1" maxWidth="xl">
				<Grid item md={8}>
					{children}
				</Grid>
			</Container>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
