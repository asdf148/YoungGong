import {
  HandlerContext,
  Handlers,
} from "https://deno.land/x/fresh@1.1.0/server.ts";
import { wordSetService } from "@/services/index.service.ts";
import { AddWordSetDTO } from "@/utils/dto/add_word_set.dto.ts";
import errorHandler from "@/utils/error.handler.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const wordSet: AddWordSetDTO = await req.json();
    await wordSetService.addWordSet(wordSet);
    try {
      return new Response(
        JSON.stringify({ "message": "added" }),
        {
          status: 201,
          statusText: "Created",
        },
      );
    } catch (error) {
      errorHandler(error);
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 4000,
        statusText: "Bad Request",
      });
    }
  },
};
