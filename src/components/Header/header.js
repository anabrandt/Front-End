import { Link } from "react-router-dom";
import './header.css';
import Logo from '../../assets/img/Logo.png';
import Harmonia from '../../components/Harmonia/harmonia'

export default function Cabecalho() {
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="header">

      <nav className="nav-header">
        <div className="logo">
          <img src={Logo} alt="Logo Doracorde" />
        </div>
        <Link to="/">Home</Link>
        <a href="#instrumentos" onClick={(e) => handleNavClick(e, 'instrumentos')}>Instrumentos</a>
        <a href="#plano" onClick={(e) => handleNavClick(e, 'plano')}>Planos</a>
        <a href="#depoimento" onClick={(e) => handleNavClick(e, 'depoimento')}>Depoimentos</a>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <div className="buttons">
          <button className="login">
            <a href="/login" className="login">
              Entrar
            </a>
          </button>
          <a href="/cadastro" className="cadastro">
            <button className="start-now">
              Comece agora
            </button>
          </a>
        </div>
      </nav>
      <Harmonia />
    </header>
  );
}
