import { Application, Router } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import typeDefs from "./types.ts";
import resolvers from "./resolvers.ts";

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: typeDefs,
  resolvers: resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log(
  `Server running at http://localhost:${
    config().PORT
  }\nGraphQL Playground http://localhost:${config().PORT}/graphql`
);

await app.listen({ port: parseInt(config().PORT) });
