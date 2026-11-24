import { spawn, execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2] || "gate";
const skillDir = path.resolve(".agents/skills/design-taste-frontend");
const url = "http://127.0.0.1:3000/";

async function waitForServer(timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Next.js server did not respond in time");
}

function runNode(scriptRel, args) {
  const full = path.join(skillDir, scriptRel);
  console.log(`\n=== Running ${scriptRel} ${args.join(" ")} ===`);
  try {
    execFileSync(process.execPath, [full, ...args], { stdio: "inherit" });
    return 0;
  } catch (err) {
    return typeof err?.status === "number" ? err.status : 1;
  }
}

const nextBin = path.resolve("node_modules/next/dist/bin/next");
const server = spawn(process.execPath, [nextBin, "start", "-H", "127.0.0.1", "-p", "3000"], {
  stdio: ["ignore", "pipe", "pipe"],
});

let exitCode = 0;
try {
  await waitForServer();
  console.log("Server ready at", url);

  if (mode === "gate") {
    exitCode = runNode("scripts/gate.mjs", [
      url,
      "--kind",
      "software",
      "--category",
      "páginas web, aplicaciones e invitaciones digitales",
      "--primary",
      "Cotizar proyecto",
    ]);
  } else if (mode === "shoot") {
    fs.mkdirSync(".taste-skill/shots", { recursive: true });
    const c1 = runNode("scripts/shoot.mjs", [
      "--url",
      url,
      "--w",
      "1440",
      "--out",
      ".taste-skill/shots/1440.png",
    ]);
    const c2 = runNode("scripts/shoot.mjs", [
      "--url",
      url,
      "--w",
      "390",
      "--out",
      ".taste-skill/shots/390.png",
    ]);
    const c3 = runNode("scripts/perf.mjs", [url]);
    exitCode = c1 || c2 || c3;
  } else if (mode === "layout") {
    fs.mkdirSync(".taste-skill/layout-shots", { recursive: true });
    exitCode = runNode("assets/layout/check.mjs", [
      "--url",
      url,
      "--sizes",
      "1440x900,1024x768,768x1024,390x844",
      "--shots",
      ".taste-skill/layout-shots",
    ]);
  }
} finally {
  server.kill("SIGTERM");
}

process.exit(exitCode);
