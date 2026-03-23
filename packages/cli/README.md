# cli-huangshuheng 🚀

一个功能强大的命令行脚手架工具，旨在帮助开发者快速初始化和管理项目。

## 📦 安装

推荐使用全局安装，以便在任何地方使用 `hsh` 命令：

```bash
# 使用 npm
npm install -g cli-huangshuheng

# 或者使用 pnpm
pnpm add -g cli-huangshuheng
```

## 🛠️ 使用方法

安装完成后，你可以直接在终端输入 `hsh` 查看所有可用命令。

### 1. 创建项目

快速从本地或远程模板初始化一个新项目。

```bash
hsh create my-project
```

运行后，你将进入交互式选择界面：
- **选择框架**：React, Vue, Angular
- **选择模板源**：
  - **Local**: 使用脚手架内置的本地模板。
  - **Remote**: 从 GitHub 远程仓库实时下载最新模板。

你也可以直接指定模板：
```bash
hsh create my-project --template react
```

### 2. 构建项目

在项目根目录下运行，执行构建流程：

```bash
hsh build
```

### 3. 启动开发服务

```bash
hsh serve
```

### 4. 预览项目

```bash
hsh preview
```

### 5. 其他命令

- **打招呼**：`hsh greet`
- **查看信息**：`hsh info`
- **查看帮助**：`hsh --help`
- **查看版本**：`hsh --version`

## 🌟 特性

- **多框架支持**：内置 React/Vue 等多种流行框架模板。
- **远程下载**：集成 `giget`，支持从 GitHub 动态获取最新模板。
- **优雅的 UI**：使用 `consola` 和 `picocolors` 提供精美的日志输出和交互体验。
- **TypeScript 开发**：核心逻辑完全由 TypeScript 编写，稳定且易于维护。

## 📄 开源协议

[ISC License](LICENSE)
