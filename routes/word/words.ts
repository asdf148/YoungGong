import { HandlerContext, Handlers } from "$fresh/server.ts";
import { wordService } from "@/services/index.service.ts";

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    return new Response(
      JSON.stringify({ data: await wordService.getAllWord() }),
      {
        status: 200,
        statusText: "Ok",
      },
    );
  },
};
