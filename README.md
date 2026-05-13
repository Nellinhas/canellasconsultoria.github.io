# Canellas Consultoria em Tecnologia

Site de apresentação profissional da Canellas Consultoria em Tecnologia, hospedado no GitHub Pages.

## Stack

- HTML, CSS e JavaScript puros — sem framework, sem build step
- Deploy direto via GitHub Pages (`main` branch)
- Domínio customizado configurável via arquivo `CNAME`

## Estrutura

```
index.html        # página única com todas as seções
css/style.css     # estilos e variáveis de design
js/main.js        # alternância PT/EN, nav mobile, comportamento de scroll
svg/              # ícones da stack tecnológica e logo da marca
  logo.svg        # marca: dois hexágonos interligados, gradiente azul → teal
  amazonwebservices.svg
  apachespark.svg
  googlecloud.svg
  microsoftazure.svg
  postgresql.svg
  powerbi.svg
  python.svg
  scikitlearn.svg
  servicenow.svg
assets/           # imagens adicionais (reservado)
CNAME             # domínio customizado (preencher quando disponível)
```

## Seções

- **Hero** — nome, título e call to action
- **Sobre** — resumo profissional e marquee animado com logos da stack
- **Serviços** — Arquitetura em Cloud, Dados & ML, IA Generativa, Liderança Técnica
- **Portfólio** — projetos com resultados mensuráveis
- **Contato** — e-mail, telefone e localização

## Logo

A marca é gerada em SVG puro (`svg/logo.svg`): dois hexágonos interligados com gradiente `#1565C0 → #26A69A` e nós internos circulares, reproduzindo o símbolo da Canellas Consultoria em Tecnologia. O mesmo arquivo é usado como favicon (SVG escalável) e no navbar ao lado do nome da empresa.

## Idiomas

Suporte bilíngue (PT-BR / EN) via toggle no navbar, sem reload de página.

## Deploy

Push para `main` → GitHub Pages publica automaticamente em `canellasconsultoria.github.io`.  
Para domínio customizado: preencher `CNAME` e configurar o registro DNS apontando para `canellasconsultoria.github.io`.
