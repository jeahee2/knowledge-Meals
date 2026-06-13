function NoteList({ notes }) {
  return (
    <section>
      <h2 className="note-list-title">
        📚 노트 목록
      </h2>

      {notes.length === 0 ? (
        <div className="empty-note">
          아직 작성된 노트가 없습니다.
        </div>
      ) : (
        notes.map((note) => (
          <div
            className="note-card"
            key={note.id}
          >
            <h3>{note.title}</h3>

            <div className="note-subject">
              📖 {note.subject}
            </div>

            <p className="note-content">
              {note.content}
            </p>

            <div className="note-tag">
              🏷️ {note.tag}
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default NoteList;