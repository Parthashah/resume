/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import feather from 'feather-icons'

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink key={link.url} href={link.url} dangerouslySetInnerHTML={{
              __html: feather.icons[link.name].toSvg()
            }}></TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks
