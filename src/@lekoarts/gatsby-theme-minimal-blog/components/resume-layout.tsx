import React from 'react'
import Layout from './layout';
import { Flex } from '@theme-ui/components';
import { jsx, Heading, Link as TLink } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import { Link } from "gatsby"
import SEO from "./seo"
import resume from "../../../../static/downloads/resume.pdf"

type LayoutProps = { children: React.ReactNode; className?: string }

const ResumeLayout = ({ children, className }: LayoutProps) => {
    const { basePath } = useMinimalBlogConfig()
    return (
        <Layout>
            <SEO title="Resume" />
            <Flex sx={{ alignItems: `center`, justifyContent: `flex-end`, flexFlow: `wrap`, width: '90%' }}>
                <TLink as={Link} sx={{ variant: `links.secondary` }} href={resume} target="_blank">
                    Download
                </TLink>
            </Flex>
            {children}
        </Layout>
    )
}

export default ResumeLayout