# ChargeHub ⚡

## Sobre o Projeto

O **ChargeHub** é um protótipo de plataforma voltada para a mobilidade elétrica, desenvolvido com foco na localização e gestão de estações de carregamento para veículos elétricos.

A proposta do sistema é demonstrar como tecnologias digitais podem contribuir para a expansão da infraestrutura de recarga, oferecendo uma experiência intuitiva para usuários que dependem de pontos de carregamento em seu dia a dia.

Além da localização de estações, o projeto apresenta conceitos de monitoramento inteligente e sustentabilidade, reforçando a importância da adoção de energias limpas e soluções voltadas para cidades inteligentes.

---

## Objetivos

- Facilitar a visualização de estações de carregamento.
- Demonstrar conceitos de monitoramento inteligente.
- Incentivar o uso de veículos elétricos.
- Promover práticas sustentáveis.
- Servir como base para futuras implementações com backend e integração de serviços reais.

---

## Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- React 18
- ReactDOM 18
- Babel Standalone

---

## Estrutura do Projeto

```text
ChargeHub/
│
├── index.html
├── script.jsx
└── style.css
```

### index.html

Arquivo responsável pela estrutura principal da aplicação e carregamento das bibliotecas React.

### script.jsx

Contém toda a lógica da aplicação e os componentes responsáveis pela navegação entre as páginas.

### style.css

Responsável pela identidade visual, responsividade, animações e estilização da interface.

---

## Funcionalidades

### Página Inicial

Apresenta uma visão geral da plataforma e seus principais benefícios.

### Localização de Estações

Exibe um mapa ilustrativo contendo pontos de carregamento distribuídos pela cidade.

### Monitoramento Inteligente

Demonstra funcionalidades como:

- Disponibilidade das estações;
- Sistema de reservas;
- Notificações de carregamento;
- Monitoramento em tempo real.

### Sustentabilidade

Apresenta informações sobre:

- Energia limpa;
- Redução da emissão de poluentes;
- Benefícios ambientais da mobilidade elétrica.

---

## Arquitetura da Aplicação

```text
┌─────────────────────┐
│      index.html     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│        App          │
└──────────┬──────────┘
           │
 ┌─────────┼─────────┐
 ▼         ▼         ▼
Localização Monitor. Sustent.
```

---

## Fluxo de Navegação

```text
Início
   │
   ├── Localização
   │
   ├── Monitoramento
   │
   └── Sustentabilidade
```

---

## Requisitos Funcionais

- Exibir informações sobre a plataforma.
- Permitir navegação entre páginas.
- Apresentar estações de carregamento.
- Exibir conceitos de monitoramento inteligente.
- Disponibilizar conteúdo relacionado à sustentabilidade.

---

## Requisitos Não Funcionais

- Interface responsiva.
- Navegação intuitiva.
- Compatibilidade com navegadores modernos.
- Carregamento rápido da aplicação.

---

## Melhorias Futuras

- Integração com APIs de mapas.
- Geolocalização em tempo real.
- Cadastro e autenticação de usuários.
- Sistema real de reservas.
- Integração com banco de dados.
- Dashboard administrativo.
- Histórico de carregamentos.
- Aplicação mobile.

---

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/Pedrao29072005/ChargeHub.git
```

2. Acesse a pasta do projeto:

```bash
cd ChargeHub
```

3. Abra o arquivo `index.html` em seu navegador.

---

## Status do Projeto

🚧 Em desenvolvimento — atualmente disponível como protótipo front-end para demonstração de conceito.

---

## Autores
Eduardo Tasim
Pedro Henrique Mansano Franzin
Gabriel Darienzo
João Pedro Cardnes
Leonardo Balbino
Lucas Lazarino

Desenvolvido como projeto acadêmico voltado para mobilidade elétrica, monitoramento inteligente e sustentabilidade.