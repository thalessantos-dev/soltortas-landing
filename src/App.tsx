import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="navbar-right">
          <nav className="menu">
            <a href="#" className="active">Início</a>
            <a href="#">Produtos</a>
            <a href="#">Contato</a>
          </nav>
          <div className="search-box">
            <input type="text" placeholder="Buscar produto" />
            <button aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#f28b8b" strokeWidth="2"/>
                <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="#f28b8b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 100"
        width="100%"
        height="100"
        preserveAspectRatio="none"
      >
        <path
          d="M -65.6 41 C -25.6 41 -25.6 86 14.4 86 C 54.4 86 54.4 30 94.4 30 C 134.4 30 134.4 35 174.4 35 C 214.4 35 214.4 17 254.4 17 C 294.4 17 294.4 70 334.4 70 C 374.4 70 374.4 34 414.4 34 C 454.4 34 454.4 40 494.4 40 C 534.4 40 534.4 13 574.4 13 C 614.4 13 614.4 60 654.4 60 C 694.4 60 694.4 8 734.4 8 C 774.4 8 774.4 46 814.4 46 C 854.4 46 854.4 0 894.4 0 C 934.4 0 934.4 16 974.4 16 C 1014.4 16 1014.4 12 1054.4 12 C 1094.4 12 1094.4 74 1134.4 74 C 1174.4 74 1174.4 32 1214.4 32 C 1254.4 32 1254.4 93 1294.4 93 L 1280 0 L 0 0 Z"
          fill="#5a2d0c"
        ></path>
      </svg>

      {/* Banner Hero */}
      <section style={{
        background: "#f7d645", // amarelo solicitado
        padding: "3rem 1rem",
        color: "#3b1d1d",
        textAlign: "center"
      }}>
        <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>Bem-vindo à loja da Sol!! 🍬</h1>
        <p style={{fontSize: "1.2rem", maxWidth: 600, margin: "0 auto"}}>
          Aqui você encontra os chocolates mais deliciosos, derretendo só de olhar!
        </p>
        <a href="#produtos" style={{
          display: "inline-block",
          marginTop: "2rem",
          background: "#5a2d0c",
          color: "#fff",
          padding: "0.8rem 2rem",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem"
        }}>Ver produtos</a>
      </section>

      {/* Sobre */}
      <section style={{
        background: "#f7d645", // amarelo solicitado
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h2 style={{color: "#5a2d0c"}}>Sobre a Sol Tortas</h2>
        <p style={{maxWidth: 700, margin: "1rem auto", color: "#3b1d1d"}}>
          Somos apaixonados por doces! Produzimos chocolates, tortas e sobremesas artesanais com ingredientes selecionados e muito carinho. Experimente e sinta o sabor da felicidade em cada pedaço.
        </p>
        <img src="/doces.png" alt="Doces" style={{maxWidth: 300, width: "100%", borderRadius: 20, marginTop: 20}} />
      </section>

      {/* Produtos em destaque */}
      <section id="produtos" style={{
        background: "#f7d645", // amarelo solicitado
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h2 style={{color: "#5a2d0c"}}>Destaques</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          <div style={{
            background: "#fff8f6",
            borderRadius: 16,
            padding: "1.5rem",
            width: 250,
            boxShadow: "0 2px 8px #0001"
          }}>
            <img src="/produto1.png" alt="Brigadeiro Gourmet" style={{width: "100%", borderRadius: 12}} />
            <h3 style={{color: "#5a2d0c", margin: "1rem 0 0.5rem"}}>Brigadeiro Gourmet</h3>
            <p style={{color: "#3b1d1d"}}>Cremoso, feito com chocolate belga.</p>
          </div>
          <div style={{
            background: "#fff8f6",
            borderRadius: 16,
            padding: "1.5rem",
            width: 250,
            boxShadow: "0 2px 8px #0001"
          }}>
            <img src="/produto2.png" alt="Torta de Limão" style={{width: "100%", borderRadius: 12}} />
            <h3 style={{color: "#5a2d0c", margin: "1rem 0 0.5rem"}}>Torta de Limão</h3>
            <p style={{color: "#3b1d1d"}}>Equilíbrio perfeito entre doce e cítrico.</p>
          </div>
          <div style={{
            background: "#fff8f6",
            borderRadius: 16,
            padding: "1.5rem",
            width: 250,
            boxShadow: "0 2px 8px #0001"
          }}>
            <img src="/produto3.png" alt="Bolo de Chocolate" style={{width: "100%", borderRadius: 12}} />
            <h3 style={{color: "#5a2d0c", margin: "1rem 0 0.5rem"}}>Bolo de Chocolate</h3>
            <p style={{color: "#3b1d1d"}}>Massa fofinha e cobertura irresistível.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section style={{
        background: "#f28b8b",
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h2 style={{color: "#fff"}}>O que dizem nossos clientes</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "1.5rem",
            width: 300,
            color: "#5a2d0c",
            boxShadow: "0 2px 8px #0001"
          }}>
            <p>“Os melhores doces da cidade! Atendimento maravilhoso.”</p>
            <strong>- Ana Paula</strong>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "1.5rem",
            width: 300,
            color: "#5a2d0c",
            boxShadow: "0 2px 8px #0001"
          }}>
            <p>“A torta de limão é simplesmente perfeita, recomendo!”</p>
            <strong>- João Pedro</strong>
          </div>
          <div style={{
            background: "#fff",
            borderRadius: 16,
            padding: "1.5rem",
            width: 300,
            color: "#5a2d0c",
            boxShadow: "0 2px 8px #0001"
          }}>
            <p>“Entrega rápida e tudo fresquinho. Virei cliente fiel!”</p>
            <strong>- Camila Souza</strong>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer style={{
        background: "#5a2d0c",
        color: "#fff",
        textAlign: "center",
        padding: "2rem 1rem"
      }}>
        <p>&copy; {new Date().getFullYear()} Sol Tortas. Todos os direitos reservados.</p>
        <p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color: "#f28b8b", textDecoration: "none", marginRight: 10}}>Instagram</a>
          <a href="https://wa.me/5516999998888" target="_blank" rel="noopener noreferrer" style={{color: "#f28b8b", textDecoration: "none"}}>WhatsApp</a>
        </p>
      </footer>

      <a
        href="https://wa.me/5516999998888"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
