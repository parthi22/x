import React from 'react'
import Head from 'next/head'

const SiteHead = (props) => {
  const { title, description, keywords, metatags } = props
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="Author" content="Caleb I. Lucas" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        src="/static/link/to/icon"
        rel="shortcut icon"
        type="image/x-icon"
      />
      {metatags()}
      <title> {title} </title>
    </Head>
  )
}

export default SiteHead
