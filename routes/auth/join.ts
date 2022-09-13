import { HandlerContext, Handlers } from "$fresh/server.ts";
import { authService } from "@/services/index.service.ts";
import { JoinUserDTO } from "@/utils/dto/join_user.dto.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const user: JoinUserDTO = await req.json();
    try {
      const joinedUser = await authService.userJoin(user);
      return new Response(JSON.stringify({ "data": joinedUser ?? "failed" }), {
        status: 201,
        statusText: "Created",
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};
