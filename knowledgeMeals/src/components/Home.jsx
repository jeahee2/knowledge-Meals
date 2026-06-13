function Home() {
  return (
    <section id="home">
      <h2>🍽️ 오늘의 추천 메뉴</h2>

      <div className="today-card">
        <h3>⚛️ React useState</h3>

        <p>
          상태를 관리하는 Hook
        </p>
      </div>

      <div className="subject-grid">

        <div className="subject-card">
          <h3>수학</h3>
          <p>12개 노트</p>
        </div>

        <div className="subject-card">
          <h3>영어</h3>
          <p>8개 노트</p>
        </div>

        <div className="subject-card">
          <h3>과학</h3>
          <p>5개 노트</p>
        </div>

      </div>
    </section>
  );
}
export default Home;