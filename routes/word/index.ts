import { HandlerContext, Handlers } from "$fresh/server.ts";
import { wordService } from "@/services/index.service.ts";
import { AddWordDTO } from "@/utils/dto/add_word.dto.ts";

export const handler: Handlers = {
  async POST(req: Request, _ctx: HandlerContext) {
    const word: AddWordDTO = await req.json();
    await wordService.addWord(word);
    try {
      return new Response(
        JSON.stringify({ "message": "added" }),
        {
          status: 201,
          statusText: "Created",
        },
      );
    } catch (error) {
      console.error(error.message);
      return new Response(JSON.stringify({ "error": error.message }), {
        status: 400,
        statusText: "Bad Request",
      });
    }
  },
};
