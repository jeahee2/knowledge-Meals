import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Statistics from "./components/Statistics";

function App() {
  const [page, setPage] = useState("home");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const sampleNotes = [
    {
      id: 2,
      subject: "영어",
      title: "관계대명사",
      content: "who, which, that 사용법",
      tag: "문법",
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
      subject: "국어",
      title: "현대소설",
      content: "시점과 서술 방식 정리",
      tag: "문학",
    },
  ];

  // 처음 실행 시 LocalStorage 불러오기
  useEffect(() => {
    const savedNotes = localStorage.getItem(
      "knowledgeMeals_notes"
    );

    if (
      savedNotes &&
      JSON.parse(savedNotes).length > 0
    ) {
      setNotes(JSON.parse(savedNotes));
    } else {
      setNotes(sampleNotes);
    }
  }, []);

  // notes 변경 시 저장
  useEffect(() => {
    localStorage.setItem(
      "knowledgeMeals_notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.subject
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.tag
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="menu-buttons">
        <button
          onClick={() => setPage("home")}
        >
          🏠 홈
        </button>

        <button
          onClick={() => setPage("write")}
        >
          📝 지식 추가하기
        </button>

        <button
          onClick={() => setPage("stats")}
        >
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

          <NoteList
            notes={filteredNotes}
            deleteNote={deleteNote}
          />
        </>
      )}

      {page === "write" && (
        <NoteForm
          addNote={addNote}
          goHome={() => setPage("home")}
        />
      )}

      {page === "stats" && (
        <Statistics notes={notes} />
      )}
    </>
  );
}

export default App;