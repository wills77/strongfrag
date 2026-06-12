import { Product, Testimonial, FaqItem } from './types';

export const PRODUCTS_DATA: Product[] = [
  // PARFUMS HOMME
  {
    id: 'h1',
    name: 'Royal Elixir',
    category: 'homme',
    description: 'Une fragrance magistrale et enveloppante, conçue pour l’homme d’influence. Un accord captivant alliant la fraîcheur vive des agrumes de Calabre aux profondeurs mystiques du bois d’oud et du cuir précieux.',
    notes: {
      head: ['Bergamote sauvage', 'Pamplemousse', 'Poivre rose'],
      heart: ['Absolu de Jasmin', 'Note de Cuir', 'Cardamome'],
      base: ['Bois d’Oud', 'Santal d’Australie', 'Ambre gris', 'Patchouli']
    },
    duration: '24h Sillage Exceptionnel',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    price: '185 €',
    rating: 4.9,
    isNew: true
  },
  {
    id: 'h2',
    name: 'Noir Absolu',
    category: 'homme',
    description: 'Une immersion dans la nuit noire de l’Orient. Un parfum texturé, sombre et sophistiqué, jouant sur le contraste saisissant entre la cardamome givrée, la fumée d’encens précieux et de riches facettes résineuses.',
    notes: {
      head: ['Gingembre noir', 'Cardamome givrée', 'Citron caviar'],
      heart: ['Encens d’Oman', 'Géranium d’Égypte', 'Muscade'],
      base: ['Cèdre noir', 'Tabac blond', 'Vétiver de Haïti', 'Gousse de Vanille']
    },
    duration: '18h Tenue Intense',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
    price: '160 €',
    rating: 4.8
  },
  {
    id: 'h3',
    name: 'Cuir Sauvage',
    category: 'homme',
    description: 'L’incarnation de la liberté sauvage et de l’élégance rebelle. Un accord cuir chaud et boisé, adouci par de délicats embruns marins et une fraîcheur aromatique de lavande noble.',
    notes: {
      head: ['Notes marines', 'Menthe poivrée', 'Mandarine d’Italie'],
      heart: ['Lavande de Provence', 'Sauge sclarée', 'Feuille de violette'],
      base: ['Cuir absolu', "Cèdre de l'Atlas", 'Gris Ambre', 'Mousse de chêne']
    },
    duration: '16h Présenceaffirmée',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
    price: '150 €',
    rating: 4.7
  },

  // PARFUMS FEMME
  {
    id: 'f1',
    name: 'Santal Impérial',
    category: 'femme',
    description: 'Un poème olfactif d’un raffinement infini. Le mariage velouté du bois de santal crémeux avec un bouquet spectaculaire de roses de Damas, sublimé par la douceur sensuelle de la gousse de vanille bourbon.',
    notes: {
      head: ['Mandarine verte', 'Poire Williams', 'Pêche blanche'],
      heart: ['Rose de Damas', 'Absolu de Jasmin Sambac', 'Fleur d’oranger'],
      base: ['Bois de Santal crémeux', 'Vanille Bourbon', 'Muscs blancs', 'Ambre noble']
    },
    duration: '20h Sillage Velouté',
    image: 'https://images.unsplash.com/photo-1588405748373-122b2321bc31?auto=format&fit=crop&q=80&w=800',
    price: '190 €',
    rating: 4.9,
    isNew: true
  },
  {
    id: 'f2',
    name: 'Lumière d’Or',
    category: 'femme',
    description: 'Un parfum rayonnant, telle une parure d’or pur sous le soleil de la Riviera. Une explosion florale joyeuse, enveloppée dans un cocon poudré enrichi de notes de musc précieux et d’iris impérial.',
    notes: {
      head: ['Bergamote dorée', 'Fleur de citronnier', 'Néroli captivant'],
      heart: ['Orchidée dorée', 'Iris de Florence', 'Ylang-Ylang'],
      base: ['Fève Tonka', 'Ambre solaire', 'Benjoin de Siam', 'Musc poudré']
    },
    duration: '18h Tenue Rayonnante',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    price: '175 €',
    rating: 4.8
  },
  {
    id: 'f3',
    name: 'Opéra Rose',
    category: 'femme',
    description: 'Un hommage théâtral et passionné à la reine des fleurs. Une rose moderne, mystérieuse et audacieuse, drapée d’un accord fruité de fruits noirs et intensifiée par le caractère boisé envoûtant du patchouli originel.',
    notes: {
      head: ['Cassis sauvage', 'Framboise noire', 'Safran'],
      heart: ['Rose de Grasse', 'Pivoine rouge', 'Lilas'],
      base: ['Patchouli indonésien', 'Fumée de bois d’Oud', 'Gousse de vanille', 'Muscs russes']
    },
    duration: '22h Sillage Théâtral',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800',
    price: '210 €',
    rating: 5.0,
    isNew: true
  },

  // HUILES DOUCES PARFUMÉES
  {
    id: 'o1',
    name: 'L’Élixir de Soie',
    category: 'huile',
    description: 'Une huile sèche divinement soyeuse qui fusionne instantanément avec l’épiderme. Elle hydrate en profondeur tout en laissant un sillage exquis et réconfortant de boutons de roses blanches et d’amande douce.',
    composition: 'Huile d’argan biologique, huile d’amande douce pressée à froid, absolute de rose blanche de Grasse, vitamine E naturelle.',
    benefits: ['Hydratation longue durée 48h', 'Éviter les tiraillements de la peau', 'Texture sèche non-grasse au toucher satiné', 'Sublime et prolonge le bronzage'],
    usage: 'Appliquez quelques gouttes chauffées au creux des mains sur le corps, les pointes des cheveux ou le décolleté après le bain pour un sillage sensuel.',
    notes: {
      head: ['Fleur d’Amandier', 'Nectar de Pêche'],
      heart: ['Rose Blanche céleste', 'Héliotrope poudré'],
      base: ['Muscs soyeux', 'Bois de cèdre doux', 'Lait de coco']
    },
    duration: '24h Hydratation et Parfum',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    price: '95 €',
    rating: 4.9,
    isNew: true
  },
  {
    id: 'o2',
    name: 'Ambre Céleste',
    category: 'huile',
    description: 'Une huile corporelle majestueuse aux reflets dorés subtils qui capte la lumière. Infusée de notes chaudes d’ambre solaire et de vanille, elle procure un sentiment de bien-être absolu et de détente sacrée.',
    composition: 'Huile de jojoba bio, huile de sésame sésamoline, extrait d’ambre naturel, gousse de vanille de Madagascar macérée.',
    benefits: ['Sublimation cutanée immédiate', 'Propriétés relaxantes de l’aromathérapie', 'Brillance satinée délicate', 'Parfumage intense d’exception'],
    usage: 'Massez délicatement par mouvements circulaires sur les zones de pulsation : cou, poignets, tempes et buste pour diffuser la chaleur olfactive.',
    notes: {
      head: ['Notes ensoleillées', 'Fleur de tiaré'],
      heart: ['Baume d’Ambre', 'Fève tonka torréfiée'],
      base: ['Vanille noire absolue', 'Benjoin de Sumatra', 'Santal lacté']
    },
    duration: '12h Voile Parfumé Chaleureux',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
    price: '110 €',
    rating: 4.8
  },
  {
    id: 'o3',
    name: 'Nectar de Jasmin',
    category: 'huile',
    description: 'La quintessence de l’éveil sensoriel. Ce nectar précieux à l’extrait pur de jasmin grandiflorum nourrit intensément les cheveux et le corps en déposant un voile floral blanc hautement addictif.',
    composition: 'Huile d’avocat régénératrice, huile de macadamia protectrice, distillat pur de jasmin nocturne, tocophérol.',
    benefits: ['Nutrition intense des cheveux secs', 'Lisse le grain de peau', 'Sillage romantique envoûtant', 'Antioxydant puissant protégeant la peau'],
    usage: 'Idéal en huile de massage divine ou en finition sur les longueurs de cheveux humides pour sceller l’hydratation avec élégance.',
    notes: {
      head: ['Néroli de Grasse', 'Mandarine verte'],
      heart: ['Jasmin Grandiflorum', 'Fleur de gardénia'],
      base: ['Ambrette douce', 'Musc de soie', 'Racine d’iris']
    },
    duration: '14h Éclat Divin',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
    price: '105 €',
    rating: 4.9
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Éléonore de Montagu',
    role: 'Cliente Prestige (Neuilly-sur-Seine)',
    rating: 5,
    comment: 'Une révélation absolue. Le parfum Santal Impérial transcende tout ce que j’ai pu porter. La tenue est divine, et son sillage velouté suscite des compliments quotidiens. StrongFrag réinvente la haute parfumerie.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    favoriteFragrance: 'Santal Impérial'
  },
  {
    id: 't2',
    name: 'Charles-Hadrien Laurent',
    role: 'Amateur de Haute Parfumerie (Lyon)',
    rating: 5,
    comment: 'Royal Elixir possède une puissance et un charisme rares. Le mélange d’oud mystique et d’agrumes calabrais est d’une complexité inouïe. La bouteille sculpturale trône à merveille dans mon dressing.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    favoriteFragrance: 'Royal Elixir'
  },
  {
    id: 't3',
    name: 'Amandine Valois',
    role: 'Influenceuse Beauté & Luxe (Paris)',
    rating: 5,
    comment: 'L’Élixir de Soie est mon secret de beauté quotidien. C’est la première huile sèche qui parfume réellement comme un grand jus de créateur avec une texture satinée incomparable. Une pure merveille sensorielle.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    favoriteFragrance: 'L’Élixir de Soie'
  }
];

export const FAQs_DATA: FaqItem[] = [
  {
    id: 'q1',
    question: 'Quelle est la durée de tenue et d’intensité de vos parfums ?',
    answer: 'Tous les parfums StrongFrag sont élaborés à un taux de concentration exceptionnel en "Extrait de Parfum" (entre 20% et 30% d’huiles essentielles pures), garantissant une tenue remarquable de 16 à plus de 24 heures selon la texture cutanée, accompagnée d’un sillage mémorable sans être envahissant.'
  },
  {
    id: 'q2',
    question: 'Quels sont vos engagements de livraison et d’expédition ?',
    answer: 'Nous expédions nos créations dans le monde entier. Pour la France et l’Europe, nous proposons une livraison de prestige sécurisée (sous 48h à 72h ouvrés) offerte dès 120 € d’achat. Chaque commande est emballée à la main dans un coffret luxueux écologique orné de lettres dorées, contenant des échantillons offerts pour tester l’ensemble de notre gamme.'
  },
  {
    id: 'q3',
    question: 'Comment utiliser et combiner vos Huiles Douces Parfumées ?',
    answer: 'Nos Huiles Douces Parfumées sont multi-usages. Formulées à base d’ingrédients 100% végétaux pressés à froid (Argan, Jojoba, Amande douce, Avocat), elles hydratent et parfument délicatement le corps et les cheveux. Pour une expérience sensorielle poussée à son paroxysme, appliquez d’abord l’huile sèche sur vos zones de pulsation chaude, puis vaporisez votre extrait de parfum StrongFrag complémentaire. C’est le secret d’un sillage éternel.'
  },
  {
    id: 'q4',
    question: 'Où vos fragrances sont-elles conçues et fabriquées ?',
    answer: 'Toutes les fragrances de la collection StrongFrag sont scrupuleusement conçues à Grasse, berceau de la haute parfumerie mondiale, en collaboration avec les plus grands maîtres parfumeurs. Nos matières premières naturelles d’exception (rose de Damas, jasmin Sambac d’Italie, vétiver de Haïti) sont issues de filières éthiques, responsables et d’une pureté absolue.'
  },
  {
    id: 'q5',
    question: 'Comment conserver de manière optimale mes flacons StrongFrag ?',
    answer: 'Afin d’en préserver la puissance et la subtilité des molécules olfactives, nous recommandons de stocker vos précieux flacons à l’abri des variations brusques de température, de l’humidité constante (évitez les éclairages directs persistants de la salle de bain) et idéalement à température ambiante douce. Notre verre sculpté foncé filtre particulièrement bien la lumière naturelle.'
  }
];
