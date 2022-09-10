import { HandlerContext, Handlers } from "$fresh/server.ts";
import { AuthService } from "../../services/auth.service.ts";
import { client } from "../../utils/database/database.ts";
import { UserRepository } from "../../utils/repositories/user.repository.ts";

const authService: AuthService = new AuthService(new UserRepository(client));

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return await ctx.render(null);
  },
  async POST(req: Request, _ctx: HandlerContext) {
    const user = await req.json();
    try {
      const joinedUser = await authService.joinUser(user);
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
