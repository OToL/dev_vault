# Project Overview

This is "The Dev Vault" - a static website built with Eleventy (11ty) that serves as a curated collection of development tools, bookmarks, and runbooks. 
The project's tenets are ...
- Keep the tech tack as simple as possible
- Easily add next sections
- Easily add content (new bookmark, run book, etc.)

"The Dev Vault" is created & maintained by someone not familiar with webdevelopment.

# Build Commands

```bash
# Build the site for production
npm run build

# Start development server with live reload
npm run serve

# Install dependencies
npm install
```

# Site Architecture

## Content Structure
- **Bookmarks** (`bookmarks/*.md`): Individual markdown files with frontmatter containing title, URL, and tags
- **Runbooks** (`runbooks/*.md`): Technical documentation and procedures with frontmatter and markdown content
- **Tools** (`data/tools.json`): JSON file containing development tools and utilities data

## Template System
- **Layouts**: Located in `includes/` directory
  - `main_section.njk`: Layout template for main pages such as Home, Bookmarks, Run Books, etc.
  - `runbook.njk`: Runbook-specific layout which will be re-use in the future for other purpose e.g. blog entries
- **Frontend Assets**:
  - `css/`: Modular CSS files for different components (cards, filters, navigation, etc.)
  - `js/`: JavaScript modules for homepage functionality and bookmark configuration

## Build Process
- Eleventy processes markdown files and generates static HTML in `_site/`
- Custom transform fixes relative image paths for runbooks (converts `../images/` to `/images/`) in order for the image links to work when used by the local webserver or Obsidian
- Post-build hook generates JSON data files (`bookmarks.json`, `runbooks-count.json`, `bookmarks-count.json`)
- Collections are created for runbooks and bookmarks, sorted by date

## Frontmatter Patterns
**Bookmarks:**
```yaml
---
title: Article Title
url: https://example.com
tags: [category, type, favorite]
---
```

**Runbooks:**
```yaml
---
layout: runbook.njk
title: Procedure Name
date: 2025-01-15
---
```

## Content Workflow
1. Add new bookmarks as numbered markdown files in `bookmarks/` (e.g., `0014_bookmark.md`)
2. Add new runbooks in `runbooks/` directory
3. Build process automatically generates counts and data files for frontend consumption
4. Deploy triggers on pushes to master branch via GitHub Actions

# Development Notes
- Site uses Nunjucks templating engine
- Images should be placed in `images/` directory
- The site is configured for production builds with `ELEVENTY_ENV=production`
- No existing test framework - manual testing via development server

# Test Environments

- local: localhost:8080/
- github: https://otol.github.io/dev_vault/

# Github

- depot: https://github.com/OToL/dev_vault
- actions: https://github.com/OToL/dev_vault/actions
- deployments: https://github.com/OToL/dev_vault/deployments
