---
title: 方的 LLM 与 Agent 知识库
description: 面向个人复盘和 agent 读取的结构化知识库。
---

这是我的 LLM 与 Agent 使用知识库。它不是个人博客，而是一个长期维护的操作手册：记录我常用的 skill、MCP、prompt、上下文包、教程和真实任务复盘。

## 快速入口

| 入口 | 用途 |
| --- | --- |
| [Agent 入口](/agent/) | 给 agent 的读取顺序、任务路由和站点使用原则 |
| [Skills](/skills/) | 常用 skill 的触发场景、输入输出和验证方式 |
| [MCP](/mcp/) | MCP server、工具能力、权限边界和安全注意事项 |
| [Prompts](/prompts/) | 可复用 prompt 模板、变量和验收标准 |
| [Guides](/guides/) | 如何维护、部署、读取和复盘这套知识库 |
| [Cases](/cases/) | 真实 agent 任务记录和可复用经验 |

## Agent 可读入口

让 agent 优先读取：

```text
https://muddy7777.github.io/llms.txt
```

如果需要完整核心上下文，再读取：

```text
https://muddy7777.github.io/llms-full.txt
```

机器可读文件：

| 文件 | 用途 |
| --- | --- |
| `/llms.txt` | 站点索引和推荐读取顺序 |
| `/llms-full.txt` | 核心内容合并版 |
| `/data/index.json` | 页面、类型和标签索引 |
| `/raw/` | 低噪声 Markdown 模板 |

## 维护原则

- 先沉淀稳定工作流，再沉淀单次灵感。
- 每个页面都尽量写清楚适用场景、不适用场景、输入、输出和验证方式。
- Prompt 不追求长，追求任务边界清晰。
- 涉及密钥、私有路径、账号、token 的内容不放公开页面。

