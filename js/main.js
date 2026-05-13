const translations = {
  pt: {
    'nav.services':         'Serviços',
    'nav.portfolio':        'Portfólio',
    'nav.contact':          'Contato',
    'hero.label':           'Tech Lead · Data Scientist · Consultor',
    'hero.tagline':         'Transformando dados e tecnologia em resultados reais para o seu negócio.',
    'hero.cta':             'Entre em contato',
    'about.title':          'Sobre',
    'about.p1':             'Tech Lead com background em Engenharia Mecânica e transição consolidada para Engenharia de Software e Data Science. Mais de 5 anos de experiência em desenvolvimento de produtos digitais, arquitetura de soluções em cloud (AWS, GCP, Azure) e liderança técnica de equipes.',
    'about.p2':             'Combina visão de negócio com execução técnica — da prototipagem com IA generativa à gestão de pipelines de CI/CD e infraestrutura em produção.',
    'services.title':       'Serviços',
    'services.cloud.title': 'Arquitetura em Cloud',
    'services.cloud.desc':  'Projetos multi-cloud (AWS, GCP, Azure) com foco em escalabilidade, otimização de custos e segurança em produção.',
    'services.data.title':  'Dados & Machine Learning',
    'services.data.desc':   'Pipelines de dados em larga escala, modelos preditivos e dashboards acionáveis para suporte à tomada de decisão.',
    'services.ai.title':    'IA Generativa',
    'services.ai.desc':     'Prototipagem e implementação de soluções com LLMs, acelerando ciclos de validação e criando vantagem competitiva.',
    'services.lead.title':  'Liderança Técnica',
    'services.lead.desc':   'Definição de arquitetura, padrões de código, CI/CD e capacitação de equipes de desenvolvimento de alto desempenho.',
    'portfolio.title':      'Portfólio',
    'portfolio.p1.tag':     'IA & Automação',
    'portfolio.p1.title':   'Hub de Conhecimento em Engenharia',
    'portfolio.p1.desc':    'Sistema capaz de processar dezenas de projetos de engenharia elétrica em minutos, consolidando documentação e acelerando análises técnicas.',
    'portfolio.p1.metric':  'custo de mão de obra',
    'portfolio.p2.tag':     'Atendimento ao Cliente',
    'portfolio.p2.title':   'Interface de Atendimento Aumentado',
    'portfolio.p2.desc':    'Solução conversacional com IA que aumentou a retenção em 1° nível e reduziu drasticamente a necessidade de operadores humanos em fluxos padronizados.',
    'portfolio.p2.metric':  'alocação de operadores',
    'portfolio.p3.tag':     'Cloud & Dados',
    'portfolio.p3.title':   'Migração Cloud AWS → GCP',
    'portfolio.p3.desc':    'Migração completa de infraestrutura de dados processando 20M+ registros diários, mantendo alta disponibilidade ao longo de todo o processo.',
    'portfolio.p3.metric':  'uptime em produção',
    'contact.title':        'Contato',
    'contact.subtitle':     'Vamos conversar sobre seu próximo projeto.',
    'footer.rights':        'Todos os direitos reservados',
  },
  en: {
    'nav.services':         'Services',
    'nav.portfolio':        'Portfolio',
    'nav.contact':          'Contact',
    'hero.label':           'Tech Lead · Data Scientist · Consultant',
    'hero.tagline':         'Turning data and technology into real results for your business.',
    'hero.cta':             'Get in touch',
    'about.title':          'About',
    'about.p1':             'Tech Lead with a Mechanical Engineering background and a consolidated transition into Software Engineering and Data Science. Over 5 years of experience in digital product development, cloud solution architecture (AWS, GCP, Azure), and technical team leadership.',
    'about.p2':             'Combines business vision with hands-on execution — from generative AI prototyping to CI/CD pipeline management and production infrastructure.',
    'services.title':       'Services',
    'services.cloud.title': 'Cloud Architecture',
    'services.cloud.desc':  'Multi-cloud projects (AWS, GCP, Azure) focused on scalability, cost optimization, and production security.',
    'services.data.title':  'Data & Machine Learning',
    'services.data.desc':   'Large-scale data pipelines, predictive models, and actionable dashboards to support data-driven decisions.',
    'services.ai.title':    'Generative AI',
    'services.ai.desc':     'Prototyping and deploying LLM-based solutions to accelerate product validation cycles and build competitive advantage.',
    'services.lead.title':  'Technical Leadership',
    'services.lead.desc':   'Architecture definition, code standards, CI/CD pipelines, and enablement of high-performance development teams.',
    'portfolio.title':      'Portfolio',
    'portfolio.p1.tag':     'AI & Automation',
    'portfolio.p1.title':   'Engineering Knowledge Hub',
    'portfolio.p1.desc':    'System capable of processing dozens of electrical engineering projects in minutes, consolidating documentation and accelerating technical analysis.',
    'portfolio.p1.metric':  'labor cost reduction',
    'portfolio.p2.tag':     'Customer Service',
    'portfolio.p2.title':   'Augmented Service Interface',
    'portfolio.p2.desc':    'AI-powered conversational solution that increased first-level retention and dramatically reduced the need for human operators in standardized flows.',
    'portfolio.p2.metric':  'operator allocation reduction',
    'portfolio.p3.tag':     'Cloud & Data',
    'portfolio.p3.title':   'Cloud Migration AWS → GCP',
    'portfolio.p3.desc':    'Full data infrastructure migration processing 20M+ daily records while maintaining high availability throughout the entire process.',
    'portfolio.p3.metric':  'production uptime',
    'contact.title':        'Contact',
    'contact.subtitle':     "Let's talk about your next project.",
    'footer.rights':        'All rights reserved',
  }
};

let currentLang = 'pt';

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langToggle').textContent = lang === 'pt' ? 'EN' : 'PT';
  currentLang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
});

// Mobile nav
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });
