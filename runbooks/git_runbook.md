---
layout: runbook.njk
title: Git basic commands & workflows
date: 2025-01-15
---

<div class="blog-content">

# Concpets

## Terms

- dddd

- origin: Term generally used to identify the main remote depot. 
		It could be specified via 'git remote add \<name\> \<url>' 
- workspace: Local copy of the data from a local branch (branch from local depot) i.e. what the user/filesystem is seeing
- fetch: Operation which is getting changes from the remote depot to the local depot (all possible branches which you are tracking) but do not apply them to the local branches
        After changes have been fetched, they but be 'merged' to the local branch to be visible in the 'workspace'
- stash: Something similar to P4 shelve but local changes are reverted

## Clarifications

- branches are usually specified using the target depot identifier e.g. origin/stable, local/stable, etc.

## Depots Interactions

![](git_commands_depot.png "git depots flow")

# Depot Initialisation

## Existing Local Data

1. Create a depot in Github
2. Initialise the local directory as a git depot
    ```
    git init
    ```
3. Stage all local files
    ```
    git add .
    ```
4. Commit staged files to local depot
    ```
    git commit -m "Initial Commit"
    ```
5. Tell git there is a remote depot named 'origin' located at \<url\>
    ```
    git remote add origin <url>
    ```
6. Push all committed local changes from the local branch named 'master' to 'origin' remote depot
    ```
    git push -u origin master
    ```
   If the branch does not existing on 'origin' depot, it is created.
   '-u' parameter creates an 'upstream' dependency between the specific local and remote banch i.e. all future 'git push/pull/etc' will be automatically done with 'origin'
   This has to be established for any new branch

## Existing remote depot

```
git clone <url>

-- Get all referenced submodules
git clone --recurse-submodules <url>
```

# Basic Operations

```
-- Stage changes before submit to local depot
git add .

-- Commit staged changes to local depot
git commit -m "submit message"

-- Push to remote depot
git push

-- Fetch latest changes from the remote depot and apply them to the workspace
git pull

-- List current workspace changes
git status

-- List commits to the depot
git log
```

# Sub Modules

## Add a sub-module

```
-- "dest path" is optional, if not specified name of the depot will be used
-- This operation will add a .gitmodules
git submodule add <url> <dest path>

-- destination depot/branch can be specified e.g. git push origin master
git push
```

## Clone a depot and get submodules at the same time

```
git clone --recurse-submodules <url>
```

## Initialize and get submodules post clone

```
git submodule init 
git submodule update

-- or
git submodule update --init --recursive
```

## Update all sub-modules

```
-- Update only subpmodules
-- The name of the sub-module(s) to update can be specified as parameter
git submodule update --remote

-- Update the main depot plus the submodules
git pull --recurse-submodules

-- Get changes from the remote depot to the local depot & workspace and 'fetch' sub-modules info (i.e. get the sub-modules changes to the local depot, but do not apply them to the workspace)
git pull
git submodule update
```

Alternatively, you can go the submodule and perform standar pulling:
```
git pull

-- or

git fetch
git merge
```

The recursive sub-modules pull can be automatic via git option:
```
> git config --global submodule.recurse true
```

# Ignore Depot files

There are 2 ways of doing it ...
* locally: '.ignore' file at the root of the git depot 
* globally: 'ignore' file in user's git config folder (~/.config/git/)


</div>
