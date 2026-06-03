import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  return (
    <>
      <Header />
      {data.map((post) => (
        <Entry key={post.id} {...post} />
      ))}
    </>
  );
}
