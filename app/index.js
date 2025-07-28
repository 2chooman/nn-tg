import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';

const categories = [
  { icon: '🚨', label: 'Кражи', selected: true },
  { icon: '💊', label: 'Наркотики' },
  { icon: '💳', label: 'Мошенничество' },
  { icon: '🚗', label: 'ДТП' },
  { icon: '💰', label: 'Экономика' },
  { icon: '⚠️', label: 'Хулиганство' },
];

const lawyers = [
  { name: 'Анна Козлова', role: 'Адвокат по кражам', status: 'online' },
  { name: 'Сергей Новиков', role: 'Адвокат по кражам', status: 'от 3 000 ₽/час' },
  { name: 'Дмитрий Смирнов', role: 'Адвокат по кражам', status: 'от 4 000 ₽/час' },
  { name: 'Elena Morozova', role: 'Адвокат по кражам', status: 'от 3 000 ₽/час' },
];

function CategoryButton({ icon, label, selected }) {
  return (
    <button className={selected ? 'selected' : ''}>
      <span role="img" aria-label={label} className="icon">
        {icon}
      </span>
      {label}
    </button>
  );
}

function LawyerItem({ name, role, status }) {
  return (
    <li className="item">
      <div className="avatar" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="role">{role}</p>
        <div className="status">
          <span className="status-dot" />
          <span>{status}</span>
        </div>
      </div>
      <a href="#" className="btn-chat">
        Чат
      </a>
    </li>
  );
}

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
        {categories.map((c) => (
          <CategoryButton key={c.label} {...c} />
        ))}
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
            {lawyers.map((l) => (
              <LawyerItem key={l.name} {...l} />
            ))}
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
