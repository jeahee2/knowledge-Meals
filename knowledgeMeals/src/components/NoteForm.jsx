import { useState } from "react";

function NoteForm({ addNote }) {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNote({
      id: Date.now(),
      subject,
      title,
      content,
      tag,
    });

    setSubject("");
    setTitle("");
    setContent("");
    setTag("");
  };

  return (
    <section id="write">
      <h2>📝 지식 추가하기</h2>

      <div className="note-form-card">
        <form onSubmit={handleSubmit}>

          <label>📚 과목</label>
          <input
            type="text"
            placeholder="예) 수학"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label>🍽️ 메뉴 이름</label>
          <input
            type="text"
            placeholder="예) 삼각함수 정리"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>📖 학습 내용</label>
          <textarea
            rows="6"
            placeholder="오늘 배운 내용을 적어보세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label>🏷️ 태그</label>
          <input
            type="text"
            placeholder="React, JavaScript"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />

          <button className="save-btn">
            🍴 메뉴 저장하기
          </button>

        </form>
      </div>
    </section>
  );
}

export default NoteForm;