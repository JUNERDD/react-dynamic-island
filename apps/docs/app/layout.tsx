import React from 'react'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import themeConfig from '../theme.config'
import '@/styles/globals.css'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'React Dynamic Island',
  description: 'Documentation for React Dynamic Island'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  const { logo, project, chat, footer, docsRepositoryBase } = themeConfig

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className="min-h-screen flex flex-col">
        <Layout
          pageMap={pageMap}
          docsRepositoryBase={docsRepositoryBase}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          navbar={<Navbar logo={logo} projectLink={project?.link} chatLink={chat?.link} />}
          footer={footer?.text ? <Footer>{footer.text}</Footer> : undefined}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
