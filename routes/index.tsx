import Layout from "../components/Layout.tsx";
import WordList from "../islands/word_list.tsx";

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>단어 목록</h2>
        <WordList />
        <h2>단어장 목록</h2>
      </div>
    </Layout>
  );
}
