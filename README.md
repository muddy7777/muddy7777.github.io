# 方的 LLM 与 Agent 知识库

这是一个基于 Astro Starlight 的个人知识库，不再沿用博客式 Hugo 结构。

目标：

- 面向自己：沉淀 LLM、Agent、Skill、MCP、Prompt、教程和案例。
- 面向 agent：提供 `/llms.txt`、`/llms-full.txt`、`/raw/` 和 `/data/index.json` 作为可读取入口。

## 本地开发

```bash
npm install
npm run dev
```

打开 `http://localhost:4321/`。

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`，GitHub Actions 会在 push 到 `main` 后自动部署到 GitHub Pages。

## Agent 入口

让 agent 优先读取：

```text
https://muddy7777.github.io/llms.txt
```

需要完整核心上下文时再读取：

```text
https://muddy7777.github.io/llms-full.txt
```

