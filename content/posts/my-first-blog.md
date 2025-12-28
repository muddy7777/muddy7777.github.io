+++
date = '2025-12-28T15:07:16+08:00'
draft = false
title = '使用hugo构建个人技术博客'
+++

这篇文章记录我从 0 到 1 用 **Hugo** 搭建个人技术博客的完整流程：安装、创建站点、选择主题、写文章、本地预览，以及部署到 GitHub Pages。


## 为什么选择 Hugo

- **速度快**：静态生成，构建和加载都很快。
- **写作友好**：Markdown 写文章，目录清晰。
- **生态成熟**：主题丰富，搜索、标签、归档等能力现成。
- **易部署**：生成的是纯静态文件，GitHub Pages / Cloudflare Pages / 任意静态托管都能用。

## 准备工作

你需要：

- Git（用于拉取主题、部署）
- Hugo（建议安装 Extended 版本，主题常用到 SCSS）

### 安装 Hugo（Windows）

如果你使用 Scoop：

```powershell
scoop install hugo-extended
hugo version
```

如果你使用 Chocolatey：

```powershell
choco install hugo-extended -y
hugo version
```

安装完成后，确认能看到版本号输出即可。

## 创建站点

在任意目录执行：

```powershell
hugo new site my-tech-blog
cd my-tech-blog
```

Hugo 站点常见目录说明：

- `content/`：文章内容（Markdown）
- `themes/`：主题
- `static/`：静态资源（图片、favicon 等），会原样复制到站点根目录
- `assets/`：需要 Hugo 管道处理的资源（如 SCSS）
- `layouts/`：自定义模板（覆盖/扩展主题）

## 安装与启用主题（PaperMod 示例）

PaperMod 是一个简洁、性能优秀、功能齐全的 Hugo 主题。常见安装方式有两种：Git 子模块或直接拷贝主题目录。

### 方式 1：Git 子模块（推荐）

```powershell
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/hugo-PaperMod
```

### 方式 2：直接下载/拷贝

把主题仓库解压后放到 `themes/hugo-PaperMod`。

### 启用主题

在站点配置（`hugo.toml` 或 `config.toml`）中设置主题：

```toml
theme = "hugo-PaperMod"
```

> 你的仓库里已经存在 `themes/hugo-PaperMod/`，说明主题已就绪，只要确认配置里启用了即可。

## 基础配置（hugo.toml）

下面给一份“够用且常见”的配置片段（按需取用/合并到你的 `hugo.toml`）：

```toml
baseURL = "https://<your-name>.github.io/<repo>/" # GitHub Pages 子路径时需要包含 repo
languageCode = "zh-cn"
title = "我的技术博客"
theme = "hugo-PaperMod"

[params]
	description = "记录技术与思考"
	defaultTheme = "auto"     # auto / light / dark
	ShowReadingTime = true
	ShowShareButtons = true
	ShowCodeCopyButtons = true
	ShowBreadCrumbs = true
	ShowPostNavLinks = true
	ShowToc = true
	TocOpen = true

[[menu.main]]
	name = "归档"
	url = "archives/"
	weight = 10
[[menu.main]]
	name = "标签"
	url = "tags/"
	weight = 20
```

关键点：

- **baseURL**：如果用 GitHub Pages 且仓库不是 `username.github.io` 这种根站点，一般是 `https://username.github.io/repo/`。
- **语言**：`languageCode = "zh-cn"`。
- **params**：PaperMod 的常用开关基本都在这里。

## 写第一篇文章

用 Hugo 创建文章：

```powershell
hugo new posts/my-first-blog.md
```

你会得到类似这样的 front matter：

```toml
+++
date = '2025-12-28T15:07:16+08:00'
draft = true
title = '使用hugo构建个人技术博客'
+++
```

写完准备发布时，把 `draft = true` 改成 `false`。

### Markdown 写作建议

1. 统一使用二级标题 `##` 作为主结构。
2. 代码块用三反引号并标注语言（如 `powershell`、`bash`、`toml`）。
3. 图片建议放到 `static/images/`，引用时用 `/images/xxx.png`。

示例（代码块 + 提示块）：

```md
## 一个小示例

```powershell
hugo server -D
```

> `-D` 会把草稿也渲染出来，写作期很方便。
```

## 本地预览

在站点根目录运行：

```powershell
hugo server -D
```

然后打开 `http://localhost:1313/` 即可预览。

常用参数：

- `-D`：包含草稿（draft）
- `--bind 0.0.0.0`：局域网访问（比如手机预览）
- `--disableFastRender`：调试渲染问题时使用

## 生成静态站点（构建）

```powershell
hugo
```

默认会输出到 `public/` 目录。你仓库里已经有 `public/`，通常这是本地构建产物：

- 如果你用 **GitHub Actions** 部署，一般不需要把 `public/` 提交进仓库（由 CI 构建再发布）。
- 如果你用传统方式（手动构建后推送到 `gh-pages` 分支），可能会用到 `public/`。

建议二选一，坚持一种流程即可。

## 部署到 GitHub Pages（推荐：GitHub Actions）

思路：把源码放在 `main` 分支，通过 Actions 自动构建并发布到 Pages。

大致步骤：

1. 在 GitHub 仓库 Settings → Pages 里，选择 “GitHub Actions”。
2. 添加 Hugo 的工作流（`.github/workflows/hugo.yml`）。
3. 推送代码后自动发布。

一个简化版工作流示例（供参考）：

```yml
name: Deploy Hugo site to Pages

on:
	push:
		branches:
			- main

permissions:
	contents: read
	pages: write
	id-token: write

concurrency:
	group: "pages"
	cancel-in-progress: true

jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
				with:
					submodules: true
					fetch-depth: 0
			- name: Setup Hugo
				uses: peaceiris/actions-hugo@v3
				with:
					hugo-version: 'latest'
					extended: true
			- name: Build
				run: hugo --minify
			- name: Upload artifact
				uses: actions/upload-pages-artifact@v3
				with:
					path: ./public

	deploy:
		needs: build
		runs-on: ubuntu-latest
		environment:
			name: github-pages
			url: ${{ steps.deployment.outputs.page_url }}
		steps:
			- name: Deploy to GitHub Pages
				id: deployment
				uses: actions/deploy-pages@v4
```

> 如果你使用了主题子模块，务必在 checkout 时设置 `submodules: true`。

## 常见问题（FAQ）

### 1）页面样式丢失 / 资源 404

大概率是 `baseURL` 设置不对。GitHub Pages 的仓库站点通常需要：

```toml
baseURL = "https://username.github.io/repo/"
```

### 2）文章不显示

- `draft = true` 的文章默认不发布；预览时用 `hugo server -D`。
- 确认文章在 `content/posts/` 或主题期望的内容目录下。

### 3）中文显示/分词问题

Hugo 主题对中文的阅读时间、摘要等处理在不同主题里略有差异。优先看主题文档里 `summaryLength`、`hasCJKLanguage` 等配置项。

## 写在最后

搭好博客只是开始，更重要的是形成稳定的输出节奏：

- 每篇文章聚焦一个问题
- 给出可复现的命令、配置和结论
- 持续迭代自己的知识库


