import { HandlerContext, Handlers } from "$fresh/server.ts";
import { wordService } from "@/services/index.service.ts";
import { AddWordDTO } from "@/utils/dto/add_word.dto.ts";
import { PostgrestError } from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index";
import errorHandler from "../../utils/error.handler.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const word: AddWordDTO = await req.json();
    const error: PostgrestError | null = await wordService.addWord(word);
    errorHandler(error);
    return error
      ? new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      })
      : new Response(
        JSON.stringify({ "message": "added" }),
        {
          status: 201,
          statusText: "Created",
        },
      );
  },
};
