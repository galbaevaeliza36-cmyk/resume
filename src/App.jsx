import './App.css';

function App() {
  return (
    <div className="resume">

      {/* Левая колонка */}
      <aside className="sidebar">

        <div className="avatar">
          ЭГ
        </div>

        <h1>Галбаева Элиза</h1>

        <p className="job-title">
          Студентка IT-специальности
        </p>

        <div className="sidebar-section">
          <h2>КОНТАКТЫ</h2>

          <p>📍 Бишкек, Кыргызстан</p>
          <p>📧 eliza@example.com</p>
          <p>
            💻 GitHub:{' '}
            <a
              href="https://github.com/galbaevaeliza36-cmyk"
              target="_blank"
              rel="noreferrer"
            >
              Мой профиль
            </a>
          </p>
        </div>

        <div className="sidebar-section">
          <h2>НАВЫКИ</h2>

          <ul>
            <li>HTML и CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h2>ЯЗЫКИ</h2>

          <p>Русский</p>
          <p>Кыргызский</p>
          <p>Немецкий — A2</p>
          <p>Английский</p>
        </div>

      </aside>

      {/* Правая колонка */}
      <main className="content">

        <section>
          <h2>ОБО МНЕ</h2>

          <p>
            Я студентка IT-специальности, интересуюсь
            программированием, веб-разработкой и современными
            технологиями. Изучаю новые инструменты,
            развиваю технические навыки и создаю собственные
            проекты. Стремлюсь применять полученные знания
            для решения практических задач.
          </p>
        </section>

        <section>
          <h2>ОБРАЗОВАНИЕ</h2>

          <div className="resume-item">
            <h3>Информационные технологии</h3>

            <p className="date">
              2025 — настоящее время
            </p>

            <p>
              Изучение программирования, баз данных,
              алгоритмов и разработки программного обеспечения.
            </p>
          </div>
        </section>

        <section>
          <h2>МОИ ПРОЕКТЫ</h2>

          <div className="resume-item">
            <h3>Анализ популярности имён</h3>

            <p>
              Приложение для анализа популярности имён
              по годам с использованием Python, обработки
              данных и визуализации результатов.
            </p>

            <span className="tag">Python</span>
            <span className="tag">Pandas</span>
            <span className="tag">SQLite</span>
          </div>

          <div className="resume-item">
            <h3>Персональное веб-резюме</h3>

            <p>
              Персональный сайт на React и CSS
              для представления образования, навыков,
              проектов и контактной информации.
            </p>

            <span className="tag">React</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>
        </section>

        <section>
          <h2>МОЯ ЦЕЛЬ</h2>

          <p>
            Моя цель — стать профессиональным разработчиком
            программного обеспечения, постоянно развиваться
            в IT и создавать полезные приложения,
            которые упрощают повседневную жизнь людей.
          </p>
        </section>

        <button
          className="print-button"
          onClick={() => window.print()}
        >
          Скачать резюме в PDF
        </button>

      </main>

    </div>
  );
}

export default App;