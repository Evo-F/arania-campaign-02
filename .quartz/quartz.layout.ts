import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Backlinks()
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode()
  ],
  left: [],
  right: [
    Component.DesktopOnly(Component.TableOfContents())
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
	Component.ArticleTitle(), 
	Component.ContentMeta()
  ],
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode()
  ],
  left: [],
  right: []
}