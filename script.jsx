const { useState } = React;

function Localizacao() {
  return (
    <div className="page">
      <h2>📍 Localização dos Pontos de Carregamento</h2>

      <div className="descricao-localizacao">
        <p>
          O sistema permite localizar estações de carregamento em diferentes
          regiões da cidade, facilitando o acesso dos usuários aos pontos de
          recarga.
        </p>
      </div>

      <div className="mapa">
        <div className="rua rua1">Av. Duque de Caxias</div>
        <div className="rua rua2">Rua Paraná</div>
        <div className="rua rua3">Av. Brasil</div>
        <div className="rua rua4">Rua Pedro Taques</div>
        <div className="rua rua5">Av. 7 de Setembro</div>

        <div className="ponto ponto1">⚡</div>
        <div className="ponto ponto2">⚡</div>
        <div className="ponto ponto3">⚡</div>
        <div className="ponto ponto4">⚡</div>
      </div>
    </div>
  );
}

function Monitoramento() {
  return (
    <div className="page">
      <h2>📱 Monitoramento Inteligente</h2>

      <div className="monitoramento-container">
        <div className="status-card">
          <h3>⚡ Status em Tempo Real</h3>
          <p>Todos os pontos de carregamento são exibidos em um mapa interativo.
            Ao selecionar uma estação, o usuário pode consultar informações
            como endereço, potência disponível e tempo médio de espera.</p>
        </div>

        <div className="status-card">
          <h3>📅 Sistema de Reserva</h3>
          <p>Para evitar filas e deslocamentos desnecessários, o aplicativo
            oferece um sistema de reserva. O usuário escolhe uma estação
            disponível, seleciona um horário e garante sua vaga para
            carregamento.</p>
        </div>

        <div className="status-card">
          <h3>🔔 Notificações</h3>
          <p>O sistema envia alertas quando a reserva estiver próxima do horário
            agendado, quando o carregamento for concluído ou caso ocorra alguma
            alteração na disponibilidade da estação.</p>
        </div>
      </div>

      <div className="fluxo-monitoramento">
        <h3>Fluxo de Uso</h3>

        <div className="fluxo">
          <div className="etapa">1️⃣ Abrir App</div>
          <div className="seta">➡️</div>
          <div className="etapa">2️⃣ Escolher Estação</div>
          <div className="seta">➡️</div>
          <div className="etapa">3️⃣ Reservar</div>
          <div className="seta">➡️</div>
          <div className="etapa">4️⃣ Recarregar</div>
        </div>
      </div>
    </div>
  );
}

function Sustentabilidade() {
  return (
    <div className="page">
      <h2>🌱 Sustentabilidade</h2>

      <div className="monitoramento-container">
        <div className="status-card">
          <h3>♻️ Energia Limpa</h3>
          <p>Os pontos de recarga são projetados para utilizar fontes de energia
            renováveis, como solar e eólica, reduzindo a dependência de
            combustíveis fósseis e diminuindo os impactos ambientais.</p>
        </div>

        <div className="status-card">
          <h3>🚗 Mobilidade Sustentável</h3>
          <p>A expansão da infraestrutura de carregamento incentiva o uso de
            veículos elétricos, contribuindo para a redução da emissão de gases
            poluentes e melhorando a qualidade do ar nas cidades.</p>
        </div>

        <div className="status-card">
          <h3>🌍 Menos Emissões</h3>
          <p> Ao substituir veículos movidos a combustíveis tradicionais por
            veículos elétricos, é possível reduzir significativamente a emissão
            de dióxido de carbono (CO₂), colaborando para o combate às mudanças
            climáticas.</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      <header className="hero">
        <h1>⚡ ChargeHub</h1>
        <p>Rede Inteligente de Carregamento</p>
      </header>

      <nav className="menu">
        <button onClick={() => setPagina("home")}>Início</button>
        <button onClick={() => setPagina("localizacao")}>Localização</button>
        <button onClick={() => setPagina("monitoramento")}>Monitoramento</button>
        <button onClick={() => setPagina("sustentabilidade")}>Sustentabilidade</button>
      </nav>

      {pagina === "home" && (
        <div className="cards">
          <div className="card">
            <h3>📍 Localização</h3>
            <p>Encontre pontos de carregamento.</p>
          </div>

          <div className="card">
            <h3>📱 Monitoramento</h3>
            <p>Acompanhe o status das estações.</p>
          </div>

          <div className="card">
            <h3>🌱 Sustentabilidade</h3>
            <p>Promova energia limpa e mobilidade verde.</p>
          </div>
        </div>
      )}

      {pagina === "localizacao" && <Localizacao />}
      {pagina === "monitoramento" && <Monitoramento />}
      {pagina === "sustentabilidade" && <Sustentabilidade />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);