import { useState } from "react";

function NoteForm({ addNote, goHome }) {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !subject.trim() ||
      !title.trim() ||
      !content.trim() ||
      !tag.trim()
    ) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    const newNote = {
      id: Date.now(),
      subject,
      title,
      content,
      tag,
    };

    addNote(newNote);

    alert("🍽️ 메뉴가 저장되었습니다!");

    setSubject("");
    setTitle("");
    setContent("");
    setTag("");

    goHome();
  };

  return (
    <section>
      <h2>📝 지식 추가하기</h2>

      <form
        className="note-form-card"
        onSubmit={handleSubmit}
      >
        <label>📚 과목</label>

        <input
          type="text"
          placeholder="예) 수학"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <label>🍱 메뉴 이름 (제목)</label>

        <input
          type="text"
          placeholder="예) 삼각함수"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <label>📖 학습 내용</label>

        <textarea
          rows="6"
          placeholder="오늘 배운 내용을 입력하세요"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <label>🏷️ 태그</label>

        <input
          type="text"
          placeholder="예) React, 문법, 생명"
          value={tag}
          onChange={(e) =>
            setTag(e.target.value)
          }
        />

        <button
          type="submit"
          className="save-btn"
        >
          🍽️ 메뉴 저장하기
        </button>
      </form>
    </section>
  );
}

export default NoteForm;