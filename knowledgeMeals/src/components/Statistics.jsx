function Statistics({ notes }) {
  const subjects = {};

  notes.forEach((note) => {
    subjects[note.subject] =
      (subjects[note.subject] || 0) + 1;
  });

  return (
    <section id="stats">
      <h2>📊 학습 식단 분석</h2>

      {Object.entries(subjects).map(
        ([subject, count]) => (
          <div className="stat-card" key={subject}>
            <div className="stat-header">
              <span>{subject}</span>
              <span>{count}개</span>
            </div>

            <div className="bar">
              <div
                className="fill"
                style={{
                  width: `${count * 15}%`
                }}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
}
export default Statistics;