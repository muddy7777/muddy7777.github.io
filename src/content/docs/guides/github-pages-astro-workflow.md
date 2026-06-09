---
title: GitHub Pages 与 Astro 更新流程
description: 当前仓库的本地写作、构建和发布流程。
---

本站使用 Astro Starlight，通过 GitHub Actions 部署到 GitHub Pages。

## 本地写作流程

```bash
git pull
npm install
npm run dev
```

新增页面时，把 Markdown 放到 `src/content/docs/` 下对应栏目。

## 构建验证

```bash
npm run build
```

构建成功后会输出到 `dist/`。这个目录不需要提交。

## 部署流程

```bash
git status
git add .
git commit -m "Update LLM agent knowledge base"
git push
```

GitHub Actions 会运行 Astro 构建，并把 `dist/` 作为 Pages artifact 发布。

## GitHub Pages 设置

在 GitHub 仓库设置中确认：

- Settings -> Pages -> Build and deployment -> Source 选择 GitHub Actions。
- 默认分支是 `main`。
- 当前根站点 URL 是 `https://muddy7777.github.io/`。

## 注意事项

- 不要把私密配置写入公开仓库。
- 修改导航时更新 `astro.config.mjs` 中的 `sidebar`。
- 修改 agent 入口时同步更新 `public/llms.txt`、`public/llms-full.txt` 或 `public/data/index.json`。

