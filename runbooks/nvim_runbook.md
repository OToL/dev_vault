---
layout: runbook.njk
title: Neovim Runbook
date: 2026-06-06
---

# Setup

- Package managers
    - Windows - Chocolatery
    - MacOs - Brew
- Nvim Installation
    - [Standalone Installer](https://github.com/neovim/neovim/releases)
    - Package manager
- Dependencies
    - [Git](https://git-scm.com/)
    - [NodeJS](https://nodejs.org/) - Debug Adapter Protocols
    - [CMake](https://cmake.org/) - Telescope's fzf-native
    - ripgrep - via Package Manager
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)

# Misc

## Insert Mode

- ctrl+v \<key\>: Display the actual key

# Grep

- \<leader\>sg: Telescope workspace grep
- [Telescope] Ctrl+i: Search in specific file (--iglob)

# Quick Fix

- Quick fix command:
    - cdo \<cmd\>: apply a command to each quick fix line
    - cfdo \<cmd\>: apply a command to once per file of the quick fix entries
- \<qfix cmd\> \<cmd1\> | \<cmd2\> | ... : chain commands for each cdo/cfdo execution
    ```
    :cdo s/aa/bb/g | update | bd
    ```
