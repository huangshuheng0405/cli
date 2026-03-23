# cli-demo 🚀

这是一个基于 **pnpm workspace** 和 **Turbo** 构建的 Monorepo 命令行脚手架项目。

## 📂 项目结构

```text
cli-demo/
├── packages/
│   ├── cli/        # 核心命令行工具 (hsh)
│   ├── core/       # 核心业务逻辑
│   └── shared/     # 通用工具函数
├── cspell.config.yaml # 拼写检查配置
├── eslint.config.mjs  # 代码校验配置
├── turbo.json         # Turbo 构建编排配置
└── pnpm-workspace.yaml # pnpm 工作区配置
```

## 🛠️ 核心技术栈

- **包管理器**: [pnpm](https://pnpm.io/)
- **Monorepo 管理**: [Turbo](https://turbo.build/)
- **CLI 构建**: [Commander.js](https://github.com/tj/commander.js), [tsup](https://tsup.egoist.dev/)
- **交互式问答**: [prompts](https://github.com/terkelg/prompts)
- **模板下载**: [giget](https://github.com/unjs/giget)
- **代码规范**: [ESLint](https://eslint.org/), [cspell](https://cspell.org/)
- **Git 规范**: [Husky](https://typicode.github.io/husky/), [Commitlint](https://commitlint.js.org/)

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 本地开发

启动 `cli` 包的监听模式：

```bash
pnpm dev
```

### 3. 项目构建

一键构建所有包：

```bash
pnpm build
```

### 4. 发布到 NPM

```bash
pnpm publish:npm
```

## 📝 脚本说明

- `pnpm lint:es`: 执行 ESLint 代码检查。
- `pnpm lint:spell`: 执行 cspell 拼写检查。
- `pnpm commit`: 交互式 Git 提交（遵循约定式提交规范）。

## 📄 开源协议

[ISC License](LICENSE)
