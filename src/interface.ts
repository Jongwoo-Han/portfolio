/* eslint-disable no-unused-vars */
import { ReplaceComponentRendererArgs } from "gatsby";

export type ITemplateProps<T> = ReplaceComponentRendererArgs["props"] & {
	pageContext: {
		isCreatedByStatefulCreatePages: boolean;
	} & T;
};
