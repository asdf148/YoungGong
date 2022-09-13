export default function WordList(words: any) {
  return (
    <>
      <div>
        {words.map((word: any) => <WordCard word={word} />)}
      </div>
    </>
  );
}

function WordCard(word: any) {
  return (
    <>
      <div>
        <p>{word.english}</p>
        <p>{word.mean}</p>
        <p>{word.hint}</p>
      </div>
    </>
  );
}
