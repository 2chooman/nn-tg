const {
  HashRouter,
  Routes,
  Route,
  Link,
  useNavigate
} = ReactRouterDOM;

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Найдите юриста за 1 минуту</h1>
        <Link to="/categories" className="btn">Подобрать юриста</Link>
        <div className="checkbox">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent">Мне 18+ и я резидент РФ</label>
        </div>
      </div>
    </div>
  );
}

function Categories() {
  const navigate = useNavigate();
  return (
    <div className="categories-page">
      <h1>Выберите категорию</h1>
      <div className="categories">
        <button className="selected"><span role="img" aria-label="Кражи" className="icon">🚨</span>Кражи</button>
        <button><span role="img" aria-label="Наркотики" className="icon">💊</span>Наркотики</button>
        <button><span role="img" aria-label="Мошенничество" className="icon">💳</span>Мошенничество</button>
        <button><span role="img" aria-label="ДТП" className="icon">🚗</span>ДТП</button>
        <button><span role="img" aria-label="Экономика" className="icon">💰</span>Экономика</button>
        <button><span role="img" aria-label="Хулиганство" className="icon">⚠️</span>Хулиганство</button>
      </div>
      <div className="footer">
        <button className="btn" onClick={() => navigate('/search')}>Показать юристов</button>
      </div>
    </div>
  );
}

function Search() {
  const navigate = useNavigate();
  return (
    <div className="search-page">
      <div className="card">
        <h1>Настройка поиска</h1>
        <div className="field">
          <label htmlFor="city">Город</label>
          <div className="input-group">
            <span className="icon" role="img" aria-label="Город">📍</span>
            <input id="city" placeholder="Введите город" />
          </div>
        </div>
        <div className="field">
          <label>Диапазон цены</label>
          <div className="range-group">
            <input type="number" placeholder="От" />
            <input type="number" placeholder="До ₽" />
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="with-fee" />
          <label htmlFor="with-fee">Показывать юристов с гонораром</label>
        </div>
        <button className="btn" onClick={() => navigate('/list')}>Показать 124 юриста</button>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="list-page">
      <div className="container">
        <h1>Юристы</h1>
        <div className="subtitle">Кражи · Москва</div>
        <div className="card">
          <ul className="list">
            <li className="item">
              <div className="avatar" />
              <div className="info">
                <p className="name">Анна Козлова</p>
                <p className="role">Адвокат по кражам</p>
                <div className="status"><span className="status-dot" /><span>online</span></div>
              </div>
              <a href="#" className="btn-chat">Чат</a>
            </li>
            <li className="item">
              <div className="avatar" />
              <div className="info">
                <p className="name">Сергей Новиков</p>
                <p className="role">Адвокат по кражам</p>
                <div className="status"><span className="status-dot" /><span>от 3 000 ₽/час</span></div>
              </div>
              <a href="#" className="btn-chat">Чат</a>
            </li>
            <li className="item">
              <div className="avatar" />
              <div className="info">
                <p className="name">Дмитрий Смирнов</p>
                <p className="role">Адвокат по кражам</p>
                <div className="status"><span className="status-dot" /><span>от 4 000 ₽/час</span></div>
              </div>
              <a href="#" className="btn-chat">Чат</a>
            </li>
            <li className="item">
              <div className="avatar" />
              <div className="info">
                <p className="name">Elena Morozova</p>
                <p className="role">Адвокат по кражам</p>
                <div className="status"><span className="status-dot" /><span>от 3 000 ₽/час</span></div>
              </div>
              <a href="#" className="btn-chat">Чат</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
