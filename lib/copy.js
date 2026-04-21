// lib/copy.js — Vsa vidna besedilna vsebina ciljne strani (landing page). 
// Vse spremembe besedila se izvajajo tukaj.

export const copy = {
  metadata: {
    title: "365 zdravih receptov — Brez sladkorja in glutena",
    description:
      "1000 receptov brez sladkorja in glutena za 365 dni. Jejte brez slabe vesti, brez kompliciranja in brez omejitev. Posebna ponudba: 9,90 € + 8 daril.",
    lang: "sl",
  },

  hero: {
    banner: "PONUDBA VELJA LE ŠE DANES!",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dni okusnih receptov brez sladkorja in glutena za obroke brez slabe vesti!",
    bullets: [
      "Poskrbite za bolj zdrave in okusne obroke, ne da bi se pri tem odrekli okusu",
      "BREZ KOMPLICIRANJA",
      "BREZ OMEJITEV",
      "BREZ SLABE VESTI",
    ],
    cta: "ŽELIM JESTI BREZ SLABE VESTI",
    kicker: "365 dni · 1000 receptov",
    imageAlt: "Knjiga z recepti za 365 dni brez sladkorja in glutena",
    trustChips: [
      { icon: "⭐", text: "Več kot 5.000 družin" },
      { icon: "🎁", text: "8 bonus daril" },
      { icon: "🛡️", text: "Danes 75 % popusta" },
    ],
  },

  story: {
    headlinePre: "Sladkor je tihi sovražnik,",
    headlineHighlight: "ki uničuje vaše zdravje",
    intro:
      "Prisoten je v hrani, ki jo uživate vsak dan, skrit v izdelkih, ki se zdijo povsem neškodljivi.",
    problemsLead:
      "To so glavne težave, ki jih povzroča sladkor, in kako morda v tem trenutku vplivajo na vas:",
    problems: [
      "Stalna utrujenost in nepojasnjena izčrpanost",
      "Pridobivanje teže in kopičenje maščobe na trebuhu",
      "Hormonsko in presnovno neravnovesje",
      "Tveganje za kronične bolezni (sladkorna bolezen, visok krvni tlak, debelost itd.)",
      "Nenadna nihanja razpoloženja in tesnoba",
      "Pospešeno staranje",
      "Odvisnost od hrane in zasvojenost",
    ],
    solutionHeadline:
      "Končno preprosta in učinkovita rešitev, s katero boste preoblikovali svojo prehrano, ne da bi se morali odreči tistemu, kar imate radi.",
    solutionBadge: "Rešitev",
  },

  benefits: {
    stepsHeadline: "Za vašo preobrazbo so dovolj le 3 koraki",
    steps: [
      {
        number: "1",
        title: "Sledite jedilniku brez slabe vesti",
        desc: "Pridobite dostop do popolnega jedilnika z recepti za vsak dan v letu – popolnoma brez sladkorja in glutena. Nobenega načrtovanja več!",
      },
      {
        number: "2",
        title: "Pripravite preproste in okusne jedi",
        desc: "Sledite preprostim navodilom v receptih in ustvarite neverjetne jedi, ki bodo spremenile vašo prehrano.",
      },
      {
        number: "3",
        title: "Občutite preobrazbo",
        desc: "Z upoštevanjem receptov boste kmalu občutili razliko v svojem telesu in zdravju: več energije, nadzor nad telesno težo in manjše tveganje za bolezni.",
      },
    ],
    ctaMid: "ŽELIM JESTI BREZ SLABE VESTI",
    headline: "ODKRIJTE PREDNOSTI, KI BODO SPREMENILE VAŠE ŽIVLJENJE",
    items: [
      {
        icon: "HeartPulse",
        title: "Uravnavanje krvnega sladkorja",
        desc: "Izboljšajte raven krvnega sladkorja in zmanjšajte tveganje za sladkorno bolezen s hranljivimi in okusnimi recepti.",
      },
      {
        icon: "Utensils",
        title: "Prehranska svoboda",
        desc: "Uživajte v neustavljivih jedeh brez slabe vesti in zgradite pozitiven odnos do hrane.",
      },
      {
        icon: "CalendarDays",
        title: "Vsakodnevna pestrost",
        desc: "Z 1000 recepti imate na voljo novo izbiro za prav vsak dan v letu.",
      },
      {
        icon: "Timer",
        title: "Praktičnost v kuhinji",
        desc: "Pripravite okusne jedi v 30 minutah ali manj, s čimer boste prihranili čas in se znebili vsakodnevnega stresa.",
      },
      {
        icon: "GraduationCap",
        title: "Prehranska vzgoja",
        desc: "Naučite se zavestno izbirati hrano in zgradite zdrave navade za vse življenje.",
      },
      {
        icon: "Scale",
        title: "Nadzor nad telesno težo",
        desc: "Ohranite zdravo telesno težo z recepti, ki nasitijo in nahranijo, ne da bi pri tem žrtvovali okus.",
      },
    ],
  },

  features: {
    headline: "Pripravljeni jedilniki za 365 dni – 1 za vsak dan v letu",
    subheadline: "Vodili vas bomo na vsakem koraku do zdrave prehrane",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Zajtrki in malice",
        desc: "Recepti za zajtrke, kakršnih še NISTE videli. Hitra priprava s praktičnimi in dostopnimi sestavinami!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Kosila in večerje",
        desc: "Postrezite najrazličnejše in najokusnejše jedi za vsak dan ali posebne priložnosti! Pripravljene iz dostopnih sestavin, ki jih že imate doma.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Sladice in prigrizki",
        desc: "ŠTEVILNE možnosti za sladice brez glutena in sladkorja, da si boste lahko pripravili dobrote brez slabe vesti.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Omake in namazi",
        desc: "Omake in kreme, ki bodo vašim jedem dodale neverjeten okus – hitro in enostavno!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdrave juhe in kremne juhe",
        desc: "Juhe, kremne juhe in osnove – vse pripravljeno s hranljivimi sestavinami in skrbno izbranimi začimbami.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternative moki",
        desc: "Vse je brez glutena in z nizkim glikemičnim indeksom, tako da lahko brez skrbi pečete torte, kruh in pecivo.",
      },
    ],
    ctaMid: "ŽELIM JESTI BREZ SLABE VESTI",
    badgesHeadline: "Najokusnejše jedi v različicah",
    badges: ["BREZ SLADKORJA", "BREZ GLUTENA", "NIZKOKALORIČNO", "BREZ LAKTOZE"],
    audienceHeadline: "»Hrana brez slabe vesti« je kot nalašč za vas, če:",
    audience: [
      {
        title: "Imate prehranske omejitve:",
        desc: "Posamezniki, ki se morajo izogibati sladkorju in glutenu iz zdravstvenih razlogov, kot so sladkorna bolezen ali intolerance.",
      },
      {
        title: "Želite zdravo družino:",
        desc: "Starši, ki želijo svojim otrokom zagotoviti hranljive in okusne obroke ter spodbujati zdrave navade že od malih nog.",
      },
      {
        title: "Sledite zdravemu življenjskemu slogu:",
        desc: "Osebe, ki sledijo določenim načinom prehranjevanja – LCHF, paleo ali veganski prehrani – in iščejo recepte, ki ustrezajo tem smernicam.",
      },
      {
        title: "Želite nadzorovati svojo telesno težo:",
        desc: "Tisti, ki želijo shujšati ali ohraniti telesno težo in potrebujejo recepte, ki nasitijo, a hkrati pomagajo pri nadzoru kalorij.",
      },
    ],
  },

  testimonials: {
    headline: "Poglejte si mnenja tistih, ki že uporabljajo naše recepte",
    cta: "ŽELIM JESTI BREZ SLABE VESTI",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Samo povedati vam želim, da je ta knjiga receptov pravi blagoslov. S tremi majhnimi otroki mi vedno primanjkuje časa in to, da imam toliko receptov na enem mestu, mi je vse skupaj zelo olajšalo. Zdaj doma jemo okusno in zdravo 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Kakšna odlična knjiga receptov! Odkar so mi diagnosticirali intoleranco na gluten, sem mislila, da ne bom mogla več uživati v hrani, a z vašimi recepti lahko jem brez skrbi. Hvala, ker ste mi tako olajšali življenje! 🙏",
        time: "19:57",
      },
      {
        text: "Rada bi se vam zahvalila, ker so ti recepti spremenili moje življenje. Sem diabetičarka in vedno mi je bilo težko najti okusne ter zdrave alternative. Zdaj v vsakem obroku uživam brez strahu. Resnična hvala! 🙏",
        time: "19:49",
      },
      {
        text: "Tisočkrat hvala za recepte! Obožujem sladko in vedno sem imela težave s sladkorjem, vaši recepti pa so mi dali okusne in enostavne alternative za pripravo.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Prejšnje",
    nextLabel: "Naslednje",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdrav recept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdrav recept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdrav recept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdrav recept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdrav recept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdrav recept 6" },
    ],
  },

  bonuses: {
    badge: "Posebej za vas, ker ste prišli do sem",
    headline: "ČE DANES KUPITE 1000 RECEPTOV, PREJMETE 8 EKSKLUZIVNIH DARIL 🎁",
    valueLabel: "Vrednost:",
    freeLabel: "BREZPLAČNO",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "DARILO 1", title: "Recepti za sladice brez sladkorja", value: "11,00 €" },
      { image: "/bonuses/bono-2.webp", tag: "DARILO 2", title: "Recepti za omake in namaze", value: "7,80 €" },
      { image: "/bonuses/bono-3.webp", tag: "DARILO 3", title: "Recepti za juhe in kremne juhe", value: "6,20 €" },
      { image: "/bonuses/bono-4.webp", tag: "DARILO 4", title: "Recepti z brezglutenskimi mokami", value: "4,46 €" },
      { image: "/bonuses/bono-5.webp", tag: "DARILO 5", title: "Recepti za kruh brez glutena", value: "9,41 €" },
      { image: "/bonuses/bono-6.webp", tag: "DARILO 6", title: "Recepti za zdrave tortilje", value: "9,41 €" },
      { image: "/bonuses/bono-7.webp", tag: "DARILO 7", title: "Zdrave pice", value: "9,41 €" },
      { image: "/bonuses/bono-8.webp", tag: "DARILO 8", title: "500 okusnih receptov, ustvarjenih za diabetike", value: "9,41 €" },
    ],
    totalLabel: "Vse, kar boste prejeli, je vredno več kot 40 €",
    footer: "Vendar danes ne boste plačali tega zneska... čeprav je vredno vsakega centa.",
  },

  finalCta: {
    preHeadline: "Vaša celotna investicija za 1000 receptov in vse bonuse...",
    urgencyTop: "Časovno omejena ponudba!",
    subUrgency:
      "Ne zamudite priložnosti, da si zagotovite knjigo receptov s 75-odstotnim popustom. Preoblikujte svoje zdravje zdaj z našim popolnim jedilnikom za 365 dni.",
    headline: "365 DNI RECEPTOV BREZ SLADKORJA IN GLUTENA + DODATNI BONUSI",
    bundleList: [
      "1000 receptov brez sladkorja in glutena",
      "Bonus 1: Recepti za sladice brez sladkorja",
      "Bonus 2: Recepti za omake in namaze",
      "Bonus 3: Recepti za juhe in kremne juhe",
      "Bonus 4: Recepti z brezglutenskimi mokami",
      "Bonus 5: Recepti za kruh brez glutena",
      "Bonus 6: Recepti za zdrave tortilje",
      "Bonus 7: Zdrave pice",
      "Bonus 8: 500 okusnih receptov za diabetike",
    ],
    guaranteeText:
      "Pozor: Če ste oseba, ki resnično želi poskrbeti za svoje zdravje ali zdravje svoje družine, vam lahko naši recepti brez sladkorja in glutena zagotovo pomagajo že danes. Ne zamudite te priložnosti!",
    regularPriceLabel: "OD:",
    regularPrice: "40,00 €",
    urgencyText: "PONUDBA VELJA LE ŠE DANES!",
    offerPrice: "9,90 €",
    bottomUrgency: "Zadnja prosta mesta",
    discountBadge: "75 % POPUSTA",
    button: "DA, ŽELIM RECEPTE + BONUSE TAKOJ ZDAJ",
    trustRow: "🔒 100 % varno plačilo • ⚡ Takojšen dostop • ✅ Doživljenjska garancija",
    imageAlt: "365 zdravih receptov + 8 bonusov",
  },

  faq: {
    authorHeadline: "Kdo je Maja Kovač?",
    authorBio:
      "Maja Kovač je strokovnjakinja za zdravo prehrano, ki s svojim inovativnim jedilnikom »Hrana brez slabe vesti« spreminja navade. Z bogatimi izkušnjami kot nutricionistka deli 1000 preprostih in dostopnih receptov, ustvarjenih, da vas podprejo na vsakem koraku vaše poti do bolj zdravega življenja. Kot diplomirana dietetičarka združuje strokovno znanje s praktičnim pristopom ter ponuja okusne in uravnotežene recepte, prilagojene različnim potrebam, skupaj z dragocenimi nasveti, ki vam bodo pomagali uživati v hrani brez omejitev ali obžalovanja.",
    authorRole: "Nutricionistka",
    authorImageAlt: "Maja Kovač — Nutricionistka",
    worksHeadline: "KAJ RESNIČNO DELUJE?",
    doesntWork: [
      "JESTI MALO IN STRADATI",
      "SLEDITI ZAPLETENIM DIETAM",
      "ODREKATI SE TISTEMU, KAR IMATE RADI",
    ],
    worksText:
      "Tisto, kar resnično deluje, je načrtovana prehrana z enostavnimi in praktičnimi recepti, brez sladkorja in glutena. Z našim 365-dnevnim jedilnikom vam ne bo treba več skrbeti za frustrirajoče ali omejevalne diete.",
    headline: "Pogosta vprašanja",
    subheadline: "Odgovori na najpogostejša vprašanja",
    items: [
      { q: "KAKO BOM PREJEL/A RECEPTE?", a: "Vso vsebino boste prejeli na svoj e-poštni naslov." },
      { q: "ALI LAHKO DOSTOPAM PREK TELEFONA?", a: "Da, prek telefona, tablice ali računalnika." },
      { q: "IMATE VPRAŠANJA?", a: "Da, med celotnim procesom mi lahko neposredno zastavite vsa svoja vprašanja." },
      { q: "KAKO DOLGO BOM IMEL/A DOSTOP?", a: "Dostop do celotne vsebine je doživljenjski." },
    ],
  },

  closing: {
    kicker: "ZADNJA PRILOŽNOST! ⚡ Ta ponudba kmalu poteče",
    headline:
      "Preoblikujte svoje zdravje zdaj z našim popolnim jedilnikom za 365 dni.",
    subheadline:
      "1000 receptov brez sladkorja in glutena + 8 bonus daril. Vse to za ceno enega obroka.",
    regularPrice: "40,00 €",
    offerPrice: "9,90 €",
    ctaLabel: "DA, ŽELIM RECEPTE + BONUSE TAKOJ ZDAJ",
    trustRow:
      "🔒 100 % varno plačilo • ⚡ Takojšen in doživljenjski dostop • ✅ Zadnja prosta mesta",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Vse pravice pridržane. Preberite našo Politiko zasebnosti.",
  },
};