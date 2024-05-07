import { Get, Router } from "@fartlabs/rtx";
import { KarniID, KarniProjects } from "./components/mod.ts";

const router = (
  <Router default={() => new Response("Not found", { status: 404 })}>
    <Get
      pattern="/"
      handle={() =>
        Response.json(<KarniID />)}
    />
    <Get
      pattern="/projects"
      handle={() => Response.json(<KarniProjects />)}
    />
  </Router>
);

Deno.serve((request) => router.fetch(request));
