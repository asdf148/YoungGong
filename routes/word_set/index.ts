import {
  HandlerContext,
  Handlers,
} from "https://deno.land/x/fresh@1.1.0/server.ts";
import { wordSetService } from "@/services/index.service.ts";
import { AddWordSetDTO } from "@/utils/dto/add_word_set.dto.ts";
import errorHandler from "@/utils/error.handler.ts";
import { PostgrestError } from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index.d.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const wordSet: AddWordSetDTO = await req.json();
    const error: PostgrestError | null = await wordSetService.addWordSet(
      wordSet,
    );
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
