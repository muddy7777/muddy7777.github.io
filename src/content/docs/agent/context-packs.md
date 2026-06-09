---
title: 上下文包设计
description: 把分散笔记整理成 agent 可直接使用的任务上下文。
---

上下文包用于把一类任务的背景、约束、偏好和验收标准压缩成一份 agent 可读取的说明。它比单条 prompt 更稳定，也比整站抓取更省上下文。

## 推荐结构

```md
# 上下文包名称

## 适用任务

## 默认目标

## 输入材料

## 工作流程

## 约束

## 输出格式

## 验收标准

## 相关页面
```

## 常用上下文包

| 名称 | 适用场景 | 关联内容 |
| --- | --- | --- |
| coding-context | 编程、调试、重构、代码审查 | Skills、Prompts、Guides |
| research-context | 文献检索、研究设计、论文写作 | Research prompts、Academic skills |
| docs-context | 写文档、沉淀教程、更新知识库 | Guides、Cases |
| ops-context | 配置 MCP、部署站点、排查工具链 | MCP、部署指南 |

## 给 agent 的调用方式

```text
请先读取 https://muddy7777.github.io/llms.txt。
本次任务属于 coding-context，请优先读取与代码审查、实现、验证相关的页面。
如果上下文不足，再读取 llms-full.txt，但只使用与当前任务相关的信息。
```

## 维护建议

- 每个上下文包保持在一次 LLM 读取能消化的长度。
- 把长期稳定的原则放进上下文包，把短期变化的工具版本放进单独页面。
- 每次真实任务结束后，只把可复用的部分合并回来。

