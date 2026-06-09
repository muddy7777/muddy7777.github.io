---
title: Codex 常用 Skills 清单
description: 个人使用 Codex 时最常复用的一组 skill 类型和触发方式。
---

这页记录我在 Codex 中常用的 skill 类型。它不是固定配置文件，而是帮助自己和 agent 快速判断“这类任务应该走哪条工作流”。

## 开发与验证

| Skill | 适用场景 | 注意点 |
| --- | --- | --- |
| browser control | 本地网页预览、点击、截图、交互验证 | 前端改动后要真实打开页面检查 |
| jupyter-notebook | 创建或编辑实验 notebook | 保持 notebook 可运行、结构清晰 |
| plugin-creator | 创建 Codex 插件 | 只在确实要扩展插件能力时使用 |
| skill-creator | 创建或更新 skill | 要写清楚触发条件和验证流程 |

## 内容与文件

| Skill | 适用场景 | 注意点 |
| --- | --- | --- |
| documents | Word、docx、文档排版和审阅 | 需要渲染检查页面效果 |
| spreadsheets | xlsx、csv、表格分析和图表 | 注意公式、格式和重算 |
| presentations | PPTX、幻灯片和演示稿 | 需要渲染检查版式 |
| pdf | PDF 阅读、生成、版式检查 | 优先做页面渲染验证 |
| imagegen | 生成或编辑位图视觉素材 | 不用于更适合 SVG/CSS 的图标系统 |

## 研究与写作

| Skill | 适用场景 | 注意点 |
| --- | --- | --- |
| literature-search | 找论文、做阅读列表、比较方法 | 优先来源可靠、记录 DOI/arXiv |
| academic-research-suite | 深度研究、系统综述、论文流程 | 适合大任务，不要为小问题过度启用 |
| scientific-writing | 摘要、引言、方法、实验、结论润色 | 保持 claims 精确，不虚构引用 |
| research-paper-workflow | 实验计划、论文里程碑、审稿回复 | 适合端到端研究项目 |

## 产品与安全

| Skill | 适用场景 | 注意点 |
| --- | --- | --- |
| openai-docs | OpenAI API、模型、Codex 使用问题 | 优先官方文档，信息可能变化时要核查 |
| security-best-practices | 明确要求安全最佳实践或安全审查 | 只覆盖支持语言和框架 |
| security-threat-model | 明确要求威胁建模 | 输出资产、边界、攻击路径和缓解措施 |

## 选择规则

1. 用户明确点名 skill 时，优先使用该 skill。
2. 任务明显匹配 skill 描述时，使用最小必要 skill 集合。
3. 如果只是普通实现或调试，先读代码库，不要机械套 skill。
4. 涉及当前事实、产品能力、法律、医疗、财务或高风险信息时，先核查来源。

