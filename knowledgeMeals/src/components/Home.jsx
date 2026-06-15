function Home({ notes }) {

  const randomNote =
    notes.length > 0
      ? notes[Math.floor(Math.random() * notes.length)]
      : null;

  return (
    <section id="home">

      <h2>🍽️ 오늘의 추천 메뉴</h2>

      {randomNote && (
        <div className="today-card">
          <h3>{randomNote.title}</h3>

          <p>
            📚 {randomNote.subject}
          </p>

          <p>
            {randomNote.content}
          </p>

          <span>
            #{randomNote.tag}
          </span>
        </div>
      )}

      <h2>📖 과목별 학습 현황</h2>

      <div className="subject-grid">
        <div className="subject-card">
          <h3>📚 총 노트</h3>
          <p>{notes.length}개</p>
        </div>

        <div className="subject-card">
          <h3>🏷️ 과목 수</h3>
          <p>
            {
              [...new Set(
                notes.map(
                  (note) => note.subject
                )
              )].length
            }개
          </p>
        </div>

        <div className="subject-card">
          <h3>🔥 최근 학습</h3>
          <p>
            {
              notes.length > 0
                ? notes[notes.length - 1]
                    .subject
                : "-"
            }
          </p>
        </div>
      </div>

    </section>
  );
}

export default Home;