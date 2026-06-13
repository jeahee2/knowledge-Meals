import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Statistics from "./components/Statistics";

function App() {
  const [page, setPage] = useState("home");

  const [notes, setNotes] = useState([
    {
      id: 1,
      subject: "수학",
      title: "삼각함수",
      content: "sin, cos, tan 개념 정리",
      tag: "수학",
    },
    {
      id: 2,
      subject: "영어",
      title: "관계대명사",
      content: "who, which, that 사용법",
      tag: "영어",
    },
    {
      id: 3,
      subject: "과학",
      title: "광합성",
      content: "식물이 빛을 이용해 에너지를 생성",
      tag: "생명",
    },
    {
      id: 4,
      subject: "수학",
      title: "미분",
      content: "함수의 변화율 계산",
      tag: "수학",
    },
  ]);

  const [search, setSearch] = useState("");

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase()) ||
      note.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="menu-buttons">
        <button onClick={() => setPage("home")}>
          🏠 홈
        </button>

        <button onClick={() => setPage("write")}>
          📝 지식 추가하기
        </button>

        <button onClick={() => setPage("stats")}>
          📊 학습 분석
        </button>
      </div>

      {page === "home" && (
        <>
          <Home notes={notes} />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <NoteList notes={filteredNotes} />
        </>
      )}

      {page === "write" && (
        <NoteForm addNote={addNote} />
      )}

      {page === "stats" && (
        <Statistics notes={notes} />
      )}
    </>
  );
}

export default App;