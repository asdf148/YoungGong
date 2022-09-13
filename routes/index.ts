import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    // ctx.
    return await ctx.render(null);
  },
};
