import "./App.css";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5516991428360";

const produtos = [
  {
    categoria: "Bolos",
    items: [
      {
        nome: "Bolo de Chocolate",
        desc: "Recheado com ganache e coberto com raspas de chocolate belga",
        preco: "R$ 95,00",
        tag: "Mais Pedido",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Bolo Red Velvet",
        desc: "Massa aveludada vermelha com cobertura de cream cheese artesanal",
        preco: "R$ 105,00",
        tag: "",
        imagem: "https://images.unsplash.com/photo-1616260887771-310191528b8c?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Bolo de Cenoura",
        desc: "Tradicional bolo de cenoura com calda de chocolate meio amargo",
        preco: "R$ 75,00",
        tag: "",
        imagem: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Bolo de Limão Siciliano",
        desc: "Massa fofinha com curd de limão e merengue tostado",
        preco: "R$ 98,00",
        tag: "Novidade",
        imagem: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&auto=format&fit=crop&q=80"
      },
    ],
  },
  {
    categoria: "Doces",
    items: [
      {
        nome: "Docinhos Gourmet (Cento)",
        desc: "Deliciosos brigadeiros e beijinhos gourmet enrolados com carinho e ingredientes nobres.",
        preco: "R$ 150,00",
        tag: "Sucesso",
        imagem: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Brigadeiro Gourmet",
        desc: "12 unidades com coberturas variadas: chocolate belga, pistache e morango.",
        preco: "R$ 42,00",
        tag: "Favorito",
        imagem: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Trufa de Chocolate",
        desc: "Recheio cremoso de ganache com casca de chocolate 70% cacau.",
        preco: "R$ 55,00",
        tag: "",
        imagem: "https://images.unsplash.com/photo-1548907040-4d42b52145ca?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Beijinho de Coco",
        desc: "12 unidades com coco fresco ralado na hora e cravo da índia.",
        preco: "R$ 38,00",
        tag: "",
        imagem: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Caixinha de Trufas",
        desc: "Mix especial com 16 trufas sortidas em embalagem de presente.",
        preco: "R$ 78,00",
        tag: "Presente",
        imagem: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&auto=format&fit=crop&q=80"
      },
    ],
  },
  {
    categoria: "Salgados",
    items: [
      {
        nome: "Salgados Fritos (Cento)",
        desc: "Deliciosos salgadinhos fritos na hora. Sabores: Coxinha, Bolinha, Mini Salsicha, Risole, Pastelzinho e Quibe.",
        preco: "R$ 80,00",
        tag: "Mais Vendidos",
        imagem: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Espetinho de Frango",
        desc: "Deliciosos espetinhos temperados com carinho (cento, pedido mínimo a partir de 50 unidades).",
        preco: "R$ 120,00",
        tag: "Novidade",
        imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Mini Pizza (Cento)",
        desc: "Mini pizzas assadas, massa macia e recheio caprichado (pedido mínimo a partir de 50 unidades).",
        preco: "R$ 130,00",
        tag: "Assados",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Empadinhas (Cento)",
        desc: "Empadinhas assadas tradicionais com massa leve que derrete na boca (pedido mínimo a partir de 50 unidades).",
        preco: "R$ 130,00",
        tag: "Assados",
        imagem: "https://images.unsplash.com/photo-1608219990949-e424ac134f18?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Enroladinho (p/ Queijo) (Cento)",
        desc: "Enroladinhos assados super macios recheados com queijo (pedido mínimo a partir de 50 unidades).",
        preco: "R$ 110,00",
        tag: "Assados",
        imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Esfirra (Cento)",
        desc: "Esfihas assadas tradicionais super macias e temperadas (pedido mínimo a partir de 50 unidades).",
        preco: "R$ 110,00",
        tag: "Assados",
        imagem: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Batata Recheada",
        desc: "Super cremosa e recheada na hora. Escolha o sabor: Frango c/ Catupiry, Presunto e Queijo, ou À Bolonhesa.",
        preco: "R$ 25,00",
        tag: "Sucesso",
        imagem: "https://images.unsplash.com/photo-1599321955726-e048426fc9ad?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Pastel de Feira (Salgado)",
        desc: "Pastel frito super sequinho. Sabores: Carne e Queijo, Pizza, Presunto e Queijo, Frango c/ Catupiry, ou Queijo.",
        preco: "R$ 10,00",
        tag: "Popular",
        imagem: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Pastel de Feira (Doce)",
        desc: "Pastel doce frito super recheado. Sabores: Romeu e Julieta, Doce de Leite, ou Brigadeiro.",
        preco: "R$ 11,00",
        tag: "Doce",
        imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80"
      },
    ],
  },
  {
    categoria: "Kits Festa",
    items: [
      {
        nome: "Kit Festa 1",
        desc: "Ideal para 6 pessoas. Inclui: 1 Bolo redondo artesanal, 15 Docinhos gourmet e 50 Salgadinhos fritos/assados.",
        preco: "R$ 160,00",
        tag: "Para 6 Pessoas",
        imagem: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Kit Festa 2",
        desc: "Ideal para 10 pessoas. Inclui: 1 Bolo redondo artesanal, 20 Docinhos gourmet e 100 Salgadinhos fritos/assados.",
        preco: "R$ 280,00",
        tag: "Recomendado",
        imagem: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Kit Festa 3",
        desc: "Ideal para 15 pessoas. Inclui: 1 Bolo artesanal, 30 Docinhos gourmet e 150 Salgadinhos fritos/assados.",
        preco: "R$ 325,00",
        tag: "Mais Pedido",
        imagem: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80"
      },
      {
        nome: "Kit Festa 4",
        desc: "Ideal para 25 pessoas. Inclui: 1 Bolo artesanal, 50 Docinhos gourmet e 250 Salgadinhos fritos/assados.",
        preco: "R$ 410,00",
        tag: "Completo",
        imagem: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80"
      },
    ],
  },
];

const depoimentos = [
  { nome: "Ana Paula", texto: "Os melhores doces da cidade! Atendimento maravilhoso, fiz meu pedido e chegou tudo perfeito. Super recomendo! 🎂", estrelas: 5, tempo: "há 2 semanas", cor: "#f28b3a" },
  { nome: "João Pedro", texto: "A torta de limão é simplesmente perfeita. Não consigo pedir de outro lugar! A massa é leve e o recheio tem o ponto certo de acidez.", estrelas: 5, tempo: "há 1 mês", cor: "#4285f4" },
  { nome: "Camila Souza", texto: "Entrega rápida e tudo fresquinho. Virei cliente fiel desde o primeiro pedido! Os brigadeiros gourmet são incríveis.", estrelas: 5, tempo: "há 3 semanas", cor: "#34a853" },
];

function abrirWhatsapp(produto: string, preco: string) {
  const mensagem = encodeURIComponent(
    `Olá Sol! Tudo bem? Gostaria de pedir:\n\n🍰 *${produto}* — ${preco}\n\nPoderia me dar mais informações?`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`, "_blank");
}

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className={`navbar ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <img src="/soltlogo.png" alt="Sol Tortas" />
          </a>
          <nav className={`nav-menu ${menuAberto ? "aberto" : ""}`}>
            <a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a>
            <a href="#produtos" onClick={() => setMenuAberto(false)}>Produtos</a>
            <a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a>
            <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onClick={() => setMenuAberto(false)}
            >
              Fazer Pedido
            </a>
          </nav>
          <button className="hamburger" onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-bg">
          <div className="hero-circle c1"></div>
          <div className="hero-circle c2"></div>
          <div className="hero-circle c3"></div>
          <div className="choco-drip">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="drip" style={{ animationDelay: `${i * 0.3}s`, left: `${i * 8.5}%` }}></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">🍫 Feito com carinho artesanal</div>
          <h1>
            Doces que fazem<br />
            <span className="hero-destaque">o coração sorrir</span>
          </h1>
          <p>Bolos, doces e salgados artesanais com ingredientes selecionados. Cada mordida é uma experiência única feita especialmente para você. ✨</p>
          <div className="hero-actions">
            <a href="#produtos" className="btn-primary">Ver Cardápio</a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido na Sol Tortas.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <img src="/whatsapp.png" alt="" className="btn-wpp-icon" />
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>500+</strong><span>Clientes felizes</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>3 anos</strong><span>De experiência</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>100%</strong><span>Artesanal</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-wrapper">
            <img src="/solt.png" alt="Produtos Sol Tortas" className="hero-img" />
            <div className="hero-img-glow"></div>
          </div>
          <div className="floating-tag tag1">🎂 Bolos</div>
          <div className="floating-tag tag2">🍬 Doces</div>
          <div className="floating-tag tag3">🥐 Salgados</div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff9ee" />
          </svg>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="produtos-section" id="produtos">
        {/* Elementos decorativos de fundo */}
        <div className="produtos-bg">
          {/* Formas geométricas limpas e nítidas */}
          <div className="produtos-circle c1"></div>
          <div className="produtos-circle c2"></div>
          <div className="produtos-circle c3"></div>
          <div className="produtos-circle c4"></div>

          {/* Desenhos vetoriais de confeitaria (Linhas nítidas) */}
          <div className="produtos-desenho d-sol">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinecap="round">
              <circle cx="50" cy="50" r="20" />
              <line x1="50" y1="10" x2="50" y2="20" />
              <line x1="50" y1="80" x2="50" y2="90" />
              <line x1="10" y1="50" x2="20" y2="50" />
              <line x1="80" y1="50" x2="90" y2="50" />
              <line x1="22" y1="22" x2="29" y2="29" />
              <line x1="71" y1="71" x2="78" y2="78" />
              <line x1="22" y1="78" x2="29" y2="71" />
              <line x1="71" y1="29" x2="78" y2="22" />
            </svg>
          </div>

          <div className="produtos-desenho d-torta">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
              <path d="M 20,70 L 80,70 L 65,30 L 20,30 Z" />
              <line x1="20" y1="50" x2="73" y2="50" />
              <path d="M 65,30 C 60,33 55,30 50,33 C 45,30 40,33 35,30 C 30,33 25,30 20,30" />
              <circle cx="45" cy="22" r="5" fill="rgba(90, 45, 12, 0.08)" />
            </svg>
          </div>

          <div className="produtos-desenho d-fouet">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinecap="round">
              <line x1="30" y1="70" x2="45" y2="55" />
              <circle cx="28" cy="72" r="3" />
              <path d="M 45,55 C 55,40 70,45 80,25 C 75,15 50,40 45,55" />
              <path d="M 45,55 C 60,45 65,35 75,20 C 65,10 45,35 45,55" />
              <path d="M 45,55 C 50,50 60,30 65,15 C 55,10 40,40 45,55" />
            </svg>
          </div>

          <div className="produtos-desenho d-rolo">
            <svg width="90" height="80" viewBox="0 0 120 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
              <rect x="30" y="38" width="60" height="24" rx="3" />
              <path d="M 30,50 L 15,50 M 15,46 L 15,54" />
              <path d="M 90,50 L 105,50 M 105,46 L 105,54" />
            </svg>
          </div>

          <div className="produtos-desenho d-estrela1">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="rgba(90, 45, 12, 0.08)">
              <path d="M 20,5 Q 20,20 35,20 Q 20,20 20,35 Q 20,20 5,20 Q 20,20 20,5 Z" />
            </svg>
          </div>

          <div className="produtos-desenho d-estrela2">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="rgba(90, 45, 12, 0.08)">
              <path d="M 20,5 Q 20,20 35,20 Q 20,20 20,35 Q 20,20 5,20 Q 20,20 20,5 Z" />
            </svg>
          </div>
        </div>

        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Nosso Cardápio</span>
            <h2>Escolha seus favoritos</h2>
            <p>Tudo feito fresquinho com ingredientes de qualidade. Clique em "Pedir" para ir direto ao WhatsApp!</p>
          </div>
          <div className="categorias-tabs">
            {produtos.map((cat, i) => (
              <button key={i} className={`cat-tab ${categoriaAtiva === i ? "ativa" : ""}`} onClick={() => setCategoriaAtiva(i)}>
                {cat.categoria}
              </button>
            ))}
          </div>
          <div className="produtos-grid">
            {produtos[categoriaAtiva].items.map((p, i) => (
              <div key={i} className="produto-card">
                {p.tag && <span className="produto-tag">{p.tag}</span>}
                <div className="produto-img-wrapper">
                  <img src={p.imagem} alt={p.nome} className="produto-img" loading="lazy" />
                </div>
                <h3>{p.nome}</h3>
                <p>{p.desc}</p>
                <div className="produto-footer">
                  <strong className="produto-preco">{p.preco}</strong>
                  <button className="btn-pedir" onClick={() => abrirWhatsapp(p.nome, p.preco)}>
                    Pedir agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre-section" id="sobre">
        <div className="sobre-bg-shape"></div>
        <div className="section-container sobre-inner">
          <div className="sobre-img-side">
            <div className="sobre-img-frame">
              <img src="/sol-icon.png" alt="Mascote Sol Tortas" className="sobre-mascote" />
              <div className="sobre-badge">
                <span>💛</span>
                <div>
                  <strong>Feito com amor</strong>
                  <small>Batatais, SP</small>
                </div>
              </div>
            </div>
          </div>
          <div className="sobre-texto">
            <span className="section-tag">Nossa história</span>
            <h2>Sobre a Sol Tortas</h2>
            <p>A Sol Tortas nasceu da paixão por criar doces artesanais que trazem conforto, alegria e aquele gostinho de <em>"feito com carinho"</em>.</p>
            <p>Trabalhamos com salgados, bolos e sobremesas feitas com ingredientes de qualidade, direto para a sua mesa com todo o cuidado que você merece.</p>
            <p>Cada pedido é especial para nós. Seja para aniversário, evento ou para adoçar o seu dia a dia — estamos aqui para tornar cada momento mais doce. 💛</p>
            <div className="sobre-features">
              <div className="feature">
                <span>🌾</span>
                <div><strong>Ingredientes frescos</strong><small>Selecionados diariamente</small></div>
              </div>
              <div className="feature">
                <span>🤝</span>
                <div><strong>Atendimento personalizado</strong><small>Cada pedido é único</small></div>
              </div>
              <div className="feature">
                <span>🚗</span>
                <div><strong>Entrega local</strong><small>Batatais e região</small></div>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a Sol Tortas.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com a Sol
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos-section">
        {/* Onda de transição no topo */}
        <div className="depoimentos-wave-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path d="M0,0 C480,50 960,10 1440,45 L1440,0 L0,0 Z" fill="var(--amarelo-claro)" />
          </svg>
        </div>

        {/* Elementos decorativos de fundo */}
        <div className="depoimentos-bg">
          {/* Formas geométricas limpas e nítidas */}
          <div className="depoimentos-circle c1"></div>
          <div className="depoimentos-circle c2"></div>
          <div className="depoimentos-circle c3"></div>
          <div className="depoimentos-circle c4"></div>

          {/* Desenhos vetoriais de confeitaria (Linhas nítidas) */}
          <div className="depoimentos-desenho d-sol">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinecap="round">
              <circle cx="50" cy="50" r="20" />
              <line x1="50" y1="10" x2="50" y2="20" />
              <line x1="50" y1="80" x2="50" y2="90" />
              <line x1="10" y1="50" x2="20" y2="50" />
              <line x1="80" y1="50" x2="90" y2="50" />
              <line x1="22" y1="22" x2="29" y2="29" />
              <line x1="71" y1="71" x2="78" y2="78" />
              <line x1="22" y1="78" x2="29" y2="71" />
              <line x1="71" y1="29" x2="78" y2="22" />
            </svg>
          </div>

          <div className="depoimentos-desenho d-torta">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
              <path d="M 20,70 L 80,70 L 65,30 L 20,30 Z" />
              <line x1="20" y1="50" x2="73" y2="50" />
              <path d="M 65,30 C 60,33 55,30 50,33 C 45,30 40,33 35,30 C 30,33 25,30 20,30" />
              <circle cx="45" cy="22" r="5" fill="rgba(90, 45, 12, 0.08)" />
            </svg>
          </div>

          <div className="depoimentos-desenho d-fouet">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinecap="round">
              <line x1="30" y1="70" x2="45" y2="55" />
              <circle cx="28" cy="72" r="3" />
              <path d="M 45,55 C 55,40 70,45 80,25 C 75,15 50,40 45,55" />
              <path d="M 45,55 C 60,45 65,35 75,20 C 65,10 45,35 45,55" />
              <path d="M 45,55 C 50,50 60,30 65,15 C 55,10 40,40 45,55" />
            </svg>
          </div>

          <div className="depoimentos-desenho d-rolo">
            <svg width="90" height="80" viewBox="0 0 120 100" fill="none" stroke="rgba(90, 45, 12, 0.08)" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
              <rect x="30" y="38" width="60" height="24" rx="3" />
              <path d="M 30,50 L 15,50 M 15,46 L 15,54" />
              <path d="M 90,50 L 105,50 M 105,46 L 105,54" />
            </svg>
          </div>

          <div className="depoimentos-desenho d-estrela1">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="rgba(90, 45, 12, 0.08)">
              <path d="M 20,5 Q 20,20 35,20 Q 20,20 20,35 Q 20,20 5,20 Q 20,20 20,5 Z" />
            </svg>
          </div>

          <div className="depoimentos-desenho d-estrela2">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="rgba(90, 45, 12, 0.08)">
              <path d="M 20,5 Q 20,20 35,20 Q 20,20 20,35 Q 20,20 5,20 Q 20,20 20,5 Z" />
            </svg>
          </div>
        </div>

        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Avaliações</span>
            <h2>O que dizem nossos clientes</h2>
          </div>

          {/* Badge Google Rating */}
          <div className="google-rating-badge">
            <div className="google-rating-left">
              <svg className="google-logo-svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <div className="google-rating-number">4,5</div>
              <div className="google-stars-row">
                <span className="google-stars-big">★★★★★</span>
              </div>
              <div className="google-rating-label">Baseado em avaliações do Google</div>
            </div>
            <a
              href="https://share.google/55QTAeUDH0vIWfN4b"
              target="_blank"
              rel="noopener noreferrer"
              className="google-rating-btn"
            >
              Ver no Google
            </a>
          </div>

          <div className="depoimentos-grid">
            {depoimentos.map((d, i) => (
              <div key={i} className="depoimento-card google-card">
                <div className="google-card-header">
                  <div className="autor-avatar" style={{ background: d.cor }}>{d.nome[0]}</div>
                  <div className="google-card-info">
                    <strong>{d.nome}</strong>
                    <span className="google-card-tempo">{d.tempo}</span>
                  </div>
                  <svg className="google-icon-small" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                  </svg>
                </div>
                <div className="estrelas google-stars">{"★".repeat(d.estrelas)}</div>
                <p>"{d.texto}"</p>
              </div>
            ))}
          </div>

          <div className="google-cta-row">
            <a
              href="https://share.google/55QTAeUDH0vIWfN4b"
              target="_blank"
              rel="noopener noreferrer"
              className="google-avaliar-btn"
            >
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              Deixe sua avaliação no Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section" id="contato">
        <div className="cta-bg">
          <div className="cta-circle c1"></div>
          <div className="cta-circle c2"></div>
        </div>
        <div className="section-container cta-inner">
          <h2>Pronto para pedir?</h2>
          <p>Entre em contato pelo WhatsApp e garanta seu pedido fresquinho! Atendemos Batatais e região.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Quero fazer um pedido na Sol Tortas.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-grande"
          >
            <img src="/whatsapp.png" alt="" />
            Fazer pedido agora
          </a>
          <p className="cta-tel">Ou ligue: <a href="tel:+551637616633">(16) 3761-6633</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        {/* Corpo do footer */}
        <div className="footer-body">
          <div className="footer-brand-block">
            <img src="/soltlogo.png" alt="Sol Tortas" className="footer-logo" />
            <p className="footer-tagline">Carinho em forma de doce, feito<br />artesanalmente em Batatais, SP.</p>
            <div className="footer-map-wrapper">
              <iframe
                title="Localização Sol Tortas"
                src="https://maps.google.com/maps?q=Rua+Carlos+Roberto+Galetti,+99,+Batatais,+SP,+Brasil&output=embed&hl=pt-BR&z=16"
                width="100%"
                height="190"
                style={{ border: 0, borderRadius: '14px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="footer-map-label">📍 Rua Carlos Roberto Galetti, 99 — Batatais, SP</p>
            </div>
          </div>

          <div className="footer-contacts-block">
            <h4 className="footer-block-title">Fale com a gente</h4>
            <div className="footer-contact-links">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item wpp"
              >
                <span className="fci-icon">
                  <img src="/whatsapp.png" alt="WhatsApp" />
                </span>
                <span className="fci-label">
                  <strong>WhatsApp</strong>
                  <small>(16) 99142-8360</small>
                </span>
              </a>

              <a
                href="https://instagram.com/sol_tortas"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item insta"
              >
                <span className="fci-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </span>
                <span className="fci-label">
                  <strong>Instagram</strong>
                  <small>@sol_tortas</small>
                </span>
              </a>

              <a
                href="tel:+551637616633"
                className="footer-contact-item tel"
              >
                <span className="fci-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="fci-label">
                  <strong>Telefone</strong>
                  <small>(16) 3761-6633</small>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="footer-bottom">
          <div className="section-container footer-bottom-inner">
            <p>© {new Date().getFullYear()} Sol Tortas — Todos os direitos reservados.</p>
            <p>Feito com ❤️ por <a href="#" target="_blank" rel="noopener noreferrer">Thales Santos</a></p>
          </div>
        </div>

      </footer>

      {/* WhatsApp flutuante */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
}
