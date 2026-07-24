import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the AIRC Research Intelligence presentation", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /AIRC Research Intelligence/);
  assert.match(html, /Dalla ricerca alla/);
  assert.match(html, /OPPORTUNITÀ/);
  assert.match(html, /Funding Opportunities/);
  assert.match(html, /Jarvis/);
});

test("renders the interactive AIRC demo", async () => {
  const response = await render("/demo");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Research Mission Control/);
  assert.match(html, /SCENARIO DEMO/);
  assert.match(html, /Bandi &amp; funding/);
  assert.match(html, /Fondazione AIRC/);
  assert.match(html, /Jarvis/);
});
