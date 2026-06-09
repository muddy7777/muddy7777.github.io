import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://muddy7777.github.io',
  integrations: [
    starlight({
      title: '方的 LLM 与 Agent 知识库',
      description: '沉淀个人使用 LLM、Agent、Skill、MCP 和 Prompt 的方法论与实践。',
      locales: {
        root: {
          label: '中文',
          lang: 'zh-CN',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/muddy7777/muddy7777.github.io',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/muddy7777/muddy7777.github.io/edit/main/',
      },
      sidebar: [
        { label: '总览', link: '/' },
        {
          label: '文章',
          items: [
            { slug: 'articles' },
            { slug: 'agent' },
            { slug: 'agent/context-packs' },
            { slug: 'guides/agent-reading-protocol' },
            { slug: 'guides/github-pages-astro-workflow' },
            { slug: 'cases/agent-run-log-template' },
          ],
        },
        {
          label: 'Prompts',
          items: [
            { slug: 'prompts' },
            { slug: 'prompts/agent-task-brief' },
            { slug: 'prompts/code-review' },
            { slug: 'prompts/research-brief' },
          ],
        },
        {
          label: 'Skill',
          items: [
            { slug: 'skills' },
            { slug: 'skills/codex-skills' },
            { slug: 'skills/skill-card-template' },
          ],
        },
        {
          label: 'MCP',
          items: [
            { slug: 'mcp' },
            { slug: 'mcp/mcp-server-card-template' },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
