import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const projectRoot = process.cwd();
const ignoreDirs = new Set(["node_modules", "dist", "build", ".git"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (ignoreDirs.has(entry.name)) continue;
      results.push(...(await walk(path.join(dir, entry.name))));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".tsx")) {
      results.push(path.join(dir, entry.name));
    }
  }

  return results;
}

function transpileTsxToJsx(sourceText, fileName) {
  const { outputText } = ts.transpileModule(sourceText, {
    fileName,
    compilerOptions: {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.Preserve,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
      sourceMap: false,
      inlineSourceMap: false,
      removeComments: false,
      alwaysStrict: false,
      verbatimModuleSyntax: true,
    },
    reportDiagnostics: false,
  });

  return outputText;
}

async function convertFile(tsxPath) {
  const sourceText = await fs.readFile(tsxPath, "utf8");
  const jsxText = transpileTsxToJsx(sourceText, tsxPath);
  const jsxPath = tsxPath.replace(/\.tsx$/i, ".jsx");

  await fs.writeFile(jsxPath, jsxText, "utf8");
  await fs.unlink(tsxPath);

  return { tsxPath, jsxPath };
}

async function main() {
  const tsxFiles = await walk(projectRoot);
  const conversions = [];

  for (const tsxFile of tsxFiles) {
    conversions.push(await convertFile(tsxFile));
  }

  // Print a short summary for convenience.
  console.log(`Converted ${conversions.length} file(s):`);
  for (const { jsxPath } of conversions) {
    console.log(`- ${path.relative(projectRoot, jsxPath)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
