import { Word } from "@/utils/database/models/word.ts";

export default function WordList({ words }: {
  words: Array<Word>;
}) {
  return (
    <>
      <div class="flex my-5 justify-center overflow-auto whitespace-nowrap">
        {words.map((word: Word) => <WordCard word={word} />)}
      </div>
    </>
  );
}

function WordCard({ word }: {
  word: Word;
}) {
  return (
    <>
      <div class="mx-3 border-2 border-solid border-black rounded-md text-justify">
        <p class="mx-3 mt-2">{word.english}</p>
        <p class="mx-3">{word.mean}</p>
        <p class="mx-3 mb-2">{word.hint}</p>
      </div>
    </>
  );
}
