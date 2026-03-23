// ../../node_modules/.pnpm/tsup@8.5.1_jiti@2.6.1_typescript@5.9.3_yaml@2.8.2/node_modules/tsup/assets/esm_shims.js
import path from "path";
import { fileURLToPath } from "url";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/cli.ts
import { program as program2 } from "commander";

// src/utils/logger.ts
import { createConsola } from "consola";
var logger = createConsola();

// src/commands/base/create.ts
import picocolors from "picocolors";

// src/utils/loadTemplate.ts
import { copy } from "fs-extra";
import { join } from "path";
import { downloadTemplate } from "giget";
var loadLocalTemplate = async (params) => {
  copy(
    join(__dirname, `../templates/template-${params.templateName}`),
    `${process.cwd()}/${params.projectName}`
  );
};
var loadRemoteTemplate = async (params) => {
  const { dir } = await downloadTemplate(
    // giget 尝试解压文件 所以链接必须是一个压缩包的地址
    // 改用gh前缀 会触发专门的api去下载 .tar.gz 存档
    "gh:huangshuheng0405/javascript#main",
    {
      dir: `${process.cwd()}/.temp`,
      force: true
      // 确保 .temp 目录中存在之前下载失败的残留文件 会被强制覆盖 保证下载环境干净
    }
  );
  await copy(dir, `${process.cwd()}/${params.projectName}`);
};
var loadTemplate = async (params) => {
  const { local } = params;
  if (local) {
    await loadLocalTemplate(params);
  } else {
    await loadRemoteTemplate(params);
  }
};

// src/commands/base/create.ts
import prompts from "prompts";
function create(program3) {
  return program3.createCommand("create").description("create project").arguments("<name>").option("-t, --template <template>", "template name").action(async (projectName, options) => {
    logger.log("\u521B\u5EFA\u9879\u76EE");
    logger.info(
      `create projects, name:${projectName}, ${JSON.stringify(options)}`
    );
    let { template } = options;
    if (!template) {
      const { framework } = await prompts({
        type: "select",
        name: "framework",
        message: "please select a framework",
        choices: [
          { title: "react", value: "react" },
          { title: "vue", value: "vue" },
          { title: "angular", value: "angular" }
        ]
      });
      template = framework;
    }
    const { source } = await prompts({
      type: "select",
      name: "source",
      message: "please select local or remote template",
      choices: [
        { title: "local", value: "local" },
        { title: "remote", value: "remote" }
      ]
    });
    if (!source) return;
    logger.info(picocolors.bgCyan(`create ${template} project`));
    loadTemplate({
      projectName,
      templateName: template,
      local: source === "local"
    });
  });
}

// src/commands/registerCommand.ts
import { program } from "commander";
function registerCommand(fn1) {
  program.addCommand(fn1(program));
}

// package.json
var package_default = {
  name: "cli-huangshuheng",
  version: "1.0.2",
  description: "",
  main: "index.js",
  module: "index.js",
  types: "index.d.ts",
  files: [
    "bin",
    "dist"
  ],
  bin: {
    hsh: "bin/miaoma"
  },
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    "publish-npm": "npm publish --access public"
  },
  keywords: [],
  author: "",
  license: "ISC",
  type: "module",
  dependencies: {
    "@types/node": "^25.5.0",
    commander: "^14.0.3",
    consola: "^3.4.2",
    "fs-extra": "^11.3.4",
    giget: "^3.1.2",
    picocolors: "^1.1.1",
    prompts: "^2.4.2",
    typescript: "^5.9.3"
  }
};

// src/commands/base/info.ts
import picocolors2 from "picocolors";
function info(program3) {
  return program3.createCommand("info").description("show info").action(() => {
    logger.info("Using consola 3.0.0");
    logger.start("Building project...");
    logger.warn("A new version of consola is available: 3.0.1");
    logger.success("Project built!");
    logger.box("huangshuheng");
    logger.log(picocolors2.bgGreen(`Product: hsh CLI v${package_default.version}`));
    logger.log(picocolors2.green(`Author: hsh`));
    logger.log(picocolors2.underline(`License: ${package_default.license}`));
  });
}

// src/commands/base/serve.ts
import { spawn } from "child_process";
function serve(program3) {
  return program3.createCommand("serve").description("serve project").action(() => {
    logger.log("\u542F\u52A8\u9879\u76EE");
    const command = "npm";
    const params = ["run", "dev"];
    const child = spawn(command, params, {
      stdio: "inherit",
      shell: process.platform === "win32"
      // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
    });
    child.on("close", (code) => {
      logger.log(`\u5B50\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801L: ${code}`);
    });
  });
}

// src/commands/base/build.ts
import { spawn as spawn2 } from "child_process";
function build(program3) {
  return program3.createCommand("build").description("build project").action(() => {
    logger.info("build projects");
    const command = "npm";
    const params = ["run", "build"];
    const child = spawn2(command, params, {
      stdio: "inherit",
      shell: process.platform === "win32"
      // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
    });
    child.on("close", (code) => {
      logger.log(`\u5B50\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801\uFF1A${code}`);
    });
  });
}

// src/commands/base/greet.ts
import prompts2 from "prompts";
function greet(program3) {
  return program3.createCommand("greet").description("greet user").action(async () => {
    const { name } = await prompts2({
      type: "text",
      name: "name",
      message: "What is your name?"
    });
    const { age } = await prompts2({
      type: "number",
      name: "age",
      message: "What is your age?"
    });
    const { hobby } = await prompts2({
      type: "select",
      name: "hobby",
      message: "What is your hobby?",
      choices: [
        { title: "Reading", value: "reading" },
        { title: "Traveling", value: "traveling" },
        { title: "Coding", value: "coding" }
      ]
    });
    const genderRefs = await prompts2({
      type: "select",
      name: "gender",
      message: "What is your gender?",
      choices: [
        { title: "nan", value: "nan" },
        { title: "nu", value: "nv" }
      ]
    });
    logger.log(
      `hello ${name}, you are ${age} years old, and your hobby is ${hobby}, your gender is ${genderRefs.gender}`
    );
  });
}

// src/commands/base/preview.ts
import { spawn as spawn3 } from "child_process";
function preview(program3) {
  return program3.createCommand("preview").description("preview project").action(() => {
    logger.info("preview projects");
    const command = "npm";
    const params = ["run", "preview"];
    const child = spawn3(command, params, {
      stdio: "inherit",
      shell: process.platform === "win32"
      // 在 windows 系统下开启 shell 模式以正确识别 npm.cmd
    });
    child.on("close", (code) => {
      logger.log(`\u5B50\u8FDB\u7A0B\u9000\u51FA\uFF0C\u9000\u51FA\u7801\uFF1A${code}`);
    });
  });
}

// src/commands/index.ts
registerCommand(create);
registerCommand(info);
registerCommand(serve);
registerCommand(build);
registerCommand(greet);
registerCommand(preview);

// src/cli.ts
program2.version("0.0.1").name("hsh");
var run = (args) => {
  program2.parse(args);
};

// src/index.ts
var defineConfig = () => {
};
var runCLI = () => {
  run(process.argv);
};
export {
  defineConfig,
  runCLI
};
