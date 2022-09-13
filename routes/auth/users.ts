import { HandlerContext, Handlers } from "$fresh/server.ts";
import { authService } from "../../services/index.service.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return new Response(
      JSON.stringify({ "data": authService.getSession() ?? "No Login Yet" }),
      {
        status: 201,
        statusText: "Created",
      },
    );
  },
};
