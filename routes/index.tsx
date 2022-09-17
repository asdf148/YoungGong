import Layout from "@/components/Layout.tsx";
import WordList from "@/islands/WordList.tsx";
import { Word } from "@/utils/database/models/word.ts";
import {
  HandlerContext,
  Handlers,
  PageProps,
} from "https://deno.land/x/fresh@1.1.0/server.ts";
import { wordService } from "@/services/index.service.ts";

interface mainData {
  words: Array<Word>;
  word_sets: any;
}

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    return ctx.render({
      words: await wordService.getAllWord(),
      word_sets: null,
    });
  },
};

export default function Home({ data }: PageProps<mainData>) {
  return (
    <Layout>
      <div class="max-w-5xl m-auto">
        <h1 class="text-left">단어 목록</h1>
        <WordList
          words={data.words}
        />
        <h2 class="text-left">단어장 목록</h2>
      </div>
    </Layout>
  );
}
