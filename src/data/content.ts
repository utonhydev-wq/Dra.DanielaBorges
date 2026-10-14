export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  caption: string;
}

export const SITE_DATA = {
  name: "Dra. Daniela Borges",
  title: "Dra. Daniela Borges | Site Oficial",
  logoUrl: "https://i.postimg.cc/PJ7p10fB/Logo-melhor.jpg",
  aboutImageUrl: "https://i.postimg.cc/cCs8ssKh/dradanielaborges-1740775046-3578202895963023791-1324285564.jpg",
  
  links: {
    instagram: "https://www.instagram.com/dradanielaborges/",
    instagramHandle: "@dradanielaborges",
    whatsappNumber: "5581996071917",
    whatsappRaw: "https://wa.me/5581996071917",
    whatsappDefaultMessage: "Olá, Dra. Daniela Borges! Acessei seu site e gostaria de entrar em contato.",
    whatsappUrl: "https://wa.me/5581996071917?text=Ol%C3%A1%2C%20Dra.%20Daniela%20Borges!%20Acessei%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato.",
    location: "https://share.google/UXpVmsb71uZ6VTBM9",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJU0Lgpg_hqgcRxwnX8kMSUGU",
  },

  hero: {
    title: "Dra. Daniela Borges",
    presentation: "Uma história construída com sensibilidade, autenticidade e o compromisso de fazer a diferença na vida das pessoas.",
    complementary: "Conheça minha história, acompanhe meu trabalho e entre em contato.",
  },

  about: {
    title: "Quem é a Dra. Daniela Borges?",
    paragraphs: [
      "Sou Daniela Borges: Daniela por batismo, Borges por amor e escolha.",
      "Filha da classe média dos anos 70, cresci em um tempo em que as palavras nem sempre encontravam ouvidos dispostos a escutar. Minha mãe, assistente social, me ensinou a olhar o mundo com empatia e pensamento crítico, mesmo em meio a um sistema que insistia em calar vozes femininas. Meu pai, amante da música clássica, era presença rara, mas deixou em mim um eco de sensibilidade.",
      "Desde cedo, entendi que a verdadeira riqueza está no ser, não no ter. Aprendi a acolher, a confiar em Deus e a acreditar que cada pessoa carrega uma história que merece respeito. Minha missão é fazer a diferença na vida das pessoas, mesmo que isso incomode quem não compreende a entrega genuína."
    ],
    highlightQuote: "A verdadeira riqueza está no ser, não no ter."
  },

  gallery: [
    {
      id: 1,
      url: "https://i.postimg.cc/76NftpBk/dradanielaborges-1761692758-3753673379871050746-1324285564.jpg",
      alt: "Fotografia 1 - Dra. Daniela Borges",
      caption: "Momentos e reflexões compartilhados com sensibilidade."
    },
    {
      id: 2,
      url: "https://i.postimg.cc/wMf3gDYg/dradanielaborges-1787068349-3966539234298578809-1324285564.webp",
      alt: "Fotografia 2 - Dra. Daniela Borges",
      caption: "Compromisso com o cuidado e a autenticidade."
    },
    {
      id: 3,
      url: "https://i.postimg.cc/L65nvQjR/dradanielaborges-1789735385-3988911950188650730-1324285564.webp",
      alt: "Fotografia 3 - Dra. Daniela Borges",
      caption: "Sensibilidade para ouvir cada história."
    },
    {
      id: 4,
      url: "https://i.postimg.cc/jd1C16hW/dradanielaborges-1790023567-3991329396844945178-1324285564.webp",
      alt: "Fotografia 4 - Dra. Daniela Borges",
      caption: "Presença e dedicação em cada detalhe."
    },
    {
      id: 5,
      url: "https://i.postimg.cc/LsK59HwS/dradanielaborges-1780616785-3912419607965148950-1324285564.webp",
      alt: "Fotografia 5 - Dra. Daniela Borges",
      caption: "Fazer a diferença com entrega genuína."
    }
  ] as GalleryItem[],

  instagramSection: {
    title: "Acompanhe meu trabalho",
    text: "Convido você a conhecer mais sobre minha trajetória, minhas reflexões e os conteúdos que compartilho.",
    buttonLabel: "Acessar Instagram"
  },

  reviewSection: {
    title: "Sua opinião é importante",
    text: "Se você já conhece meu trabalho, sua avaliação é muito importante. Reserve um momento para compartilhar sua experiência.",
    buttonLabel: "Avaliar no Google"
  },

  locationSection: {
    title: "Onde me encontrar",
    text: "Consulte minha localização e confira como chegar.",
    buttonLabel: "Ver localização no Google Maps"
  },

  contactSection: {
    title: "Vamos conversar?",
    text: "Entre em contato pelo WhatsApp para tirar suas dúvidas e conversar diretamente comigo.",
    buttonLabel: "Conversar pelo WhatsApp"
  }
};
