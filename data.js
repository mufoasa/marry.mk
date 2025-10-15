// Sample venue data with multilingual support
const venuesData = [
 {
  id: "ahengu-sopi-tetovo",
  name: {
    en: "Ahengu & Sopi",
    sq: "Ahengu & Sopi",
    mk: "Ахенгу и Сопи",
    tr: "Ahengu & Sopi",
  },
  description: {
    en: "Elegant wedding venue in Tetovo offering a modern interior and professional service for all occasions.",
    sq: "Sallë dasmash elegante në Tetovë që ofron enterier modern dhe shërbim profesional për çdo rast.",
    mk: "Елегантна свадбена сала во Тетово со модерен ентериер и професионална услуга за сите пригоди.",
    tr: "Tetova'da modern iç mekana ve profesyonel hizmet sunan zarif düğün salonu.",
  },
  city: "Tetovo",
  capacity: 300,
  address: "Brveniçki pat p.n., Tetovë",
  image: "https://i.imgur.com/4skrnk0.jpeg",
  gallery: [
    "https://i.imgur.com/4skrnk0.jpeg",
    "https://i.imgur.com/DPt4xup.jpeg",
    "https://i.imgur.com/tzZzRVH.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 123 456",
  email: "info@ahengusopi.mk",
  lat: 42.006,
  lng: 21.15,
  instagram: "@ahengu_sopi",
  website: "https://ahengusopi.mk",
},
{
  id: "euphoria-bitola",
  name: {
    en: "Euphoria Wedding & Event Center",
    sq: "Euphoria Qendër për Dasma dhe Ngjarje",
    mk: "Еуфорија Свадбен и Настански Центар",
    tr: "Euphoria Düğün ve Etkinlik Merkezi"
  },
  description: {
    en: "Euphoria is a premier wedding and event venue in Bitola, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Euphoria është një vend i shquar për dasma dhe ngjarje në Bitolë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Еуфорија е водечка свадбена и настанска сала во Битола, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Euphoria, Bitola'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
  },
  city: "Bitola",
  capacity: 400,
  address: "11-ta Makedonska Divizija 25, Bitola 7000, North Macedonia",
  image: "https://i.imgur.com/NNO1L1J.jpeg",
  gallery: [
    "https://i.imgur.com/NNO1L1J.jpeg",
    "https://i.imgur.com/yVI7STn.jpeg",
    "https://i.imgur.com/z0HRs0o.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 75 207 321",
  email: "info@euphoria.mk",
  lat: 41.028,
  lng: 21.317,
  instagram: "@euphoria_wedding_event_center",
  website: "https://euphoria.mk",
},
{
  id: "nobel-palace-tetovo",
  name: {
    en: "Nobel Palace",
    sq: "Nobel Palace",
    mk: "Нобел Палас",
    tr: "Nobel Sarayı",
  },
  description: {
    en: "Prestigious wedding venue in Tetovo offering elegant decor and professional services.",
    sq: "Vendi i shquar për dasma në Tetovë me dekor elegant dhe shërbime profesionale.",
    mk: "Престижна свадбена сала во Тетово со елегантен декор и професионални услуги.",
    tr: "Tetova'da zarif dekor ve profesyonel hizmet sunan prestijli düğün salonu.",
  },
  city: "Tetovo",
  capacity: 500,
  address: "Zona Industriale Saraqinë, Tetovë",
  image: "https://i.imgur.com/6ejv18t.jpeg",
  gallery: [
    "https://i.imgur.com/6ejv18t.jpeg",
    "https://i.imgur.com/5AiUY8E.jpeg",
    "https://i.imgur.com/llLDSPX.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 123 468",
  email: "info@nobelpalace.mk",
  lat: 42.005,
  lng: 21.15,
  instagram: "@nobel_palace_tetovo",
  website: "https://nobelpalace.mk",
},
{
  id: "romansa-gevgelija",
  name: {
    en: "Romansa Wedding Hall",
    sq: "Salla Romansa",
    mk: "Романса Сала",
    tr: "Romansa Düğün Salonu",
  },
  description: {
    en: "Elegant wedding hall with modern amenities and beautiful decor. Perfect for your special day with capacity for up to 300 guests.",
    sq: "Sallë elegante dasme me komoditet moderne dhe dekor të bukur. Perfekte për ditën tuaj të veçantë me kapacitet deri në 300 mysafirë.",
    mk: "Елегантна свадбена сала со модерни погодности и убав декор. Совршена за вашиот посебен ден со капацитет до 300 гости.",
    tr: "Modern olanaklara ve güzel dekora sahip zarif düğün salonu. 300 misafir kapasitesiyle özel gününüz için mükemmel.",
  },
  city: "Gevgelija",
  capacity: 300,
  address: "Boulevard Marshal Tito 45",
  image: "https://i.imgur.com/Oi7MTpl.jpeg",
  gallery: [
    "https://i.imgur.com/wxrDZ3U.jpeg",
    "https://i.imgur.com/cZxplbF.jpeg",
    "https://i.imgur.com/Pt3h9Kw.jpeg",
  ],
  category: "Wedding Hall",
  phone: "+389 70 234 567",
  email: "info@romansa.mk",
  lat: 41.1392,
  lng: 22.5089,
  instagram: "@romansa_gevgelija",
  website: "https://romansa.mk",
}, 
{
  id: "ragusa-skopje",
  name: {
    en: "Ragusa",
    sq: "Ragusa",
    mk: "Рагуса",
    tr: "Ragusa"
  },
  description: {
    en: "Ragusa 360 is a rooftop restaurant in Skopje offering luxurious decor, panoramic views, and excellent cuisine. A perfect place for weddings and events.",
    sq: "Ragusa 360 është restorant rooftop në Shkup që ofron dekor luksoz, pamje panoramike, dhe kuzhinë të shkëlqyer. Vendi ideal për dasma dhe evente.",
    mk: "Ragusa 360 е ресторанот на покривот во Скопје со луксузен декор, панорамски поглед и одлична кујна. Совршено место за свадби и настани.",
    tr: "Ragusa 360, Üsküp’te çatı restorantı olarak lüks dekor, panoramik manzaralar ve mükemmel mutfak sunuyor. Düğünler ve etkinlikler için ideal bir mekan."
  },
  city: "Skopje",
  capacity: 450,
  address: "Ss Cyril & Methodius 1/1/6-3, Skopje 1000, North Macedonia",
  image: "https://i.imgur.com/mT1otlT.jpeg",
  gallery: [
    "https://i.imgur.com/mT1otlT.jpeg",
    "https://i.imgur.com/M5miTa5.jpeg",
    "https://i.imgur.com/1eB4yk3.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 75 398 919",
  email: "info@ragusa360.com",
  lat: 41.98952,
  lng: 21.43201,
  instagram: "@ragusa360",
  website: "https://ragusa360.com",
},
{
  id: "aleksandar-palace-skopje",
  name: {
    en: "Aleksandar Palace",
    sq: "Aleksandar Palace",
    mk: "Александар Палас",
    tr: "Aleksandar Palace"
  },
  description: {
    en: "Aleksandar Palace is a premier wedding and event venue in Skopje, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Aleksandar Palace është një vend i shquar për dasma dhe ngjarje në Shkup, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Александар Палас е водечка свадбена и настанска сала во Скопје, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Aleksandar Palace, Skopje'de şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
  },
  city: "Skopje",
  capacity: 1500,
  address: "Bul. 8-mi Septemvri br. 15, Skopje 1000, North Macedonia",
  image: "https://aleksandarpalace.com.mk/wp-content/uploads/2025/03/IMG_9336.jpeg",
  gallery: [
    "https://aleksandarpalace.com.mk/wp-content/uploads/2025/03/IMG_9336.jpeg",
    "https://aleksandarpalace.com.mk/wp-content/uploads/2025/03/svadba-1-scaled.jpg",
    "https://aleksandarpalace.com.mk/wp-content/uploads/2025/03/svadba4-pozadina-1-scaled.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 (2) 3092 392",
  email: "info@aleksandarpalace.com.mk",
  lat: 41.998,
  lng: 21.433,
  instagram: "@aleksandarpalace",
  website: "https://aleksandarpalace.com.mk",
},
{
  id: "kristal-palace-prilep",
  name: {
    en: "Kristal Palace",
    sq: "Kristal Palace",
    mk: "Кристал Палас",
    tr: "Kristal Palace"
  },
  description: {
    en: "Kristal Palace is a premier wedding and event venue in Prilep, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Kristal Palace është një vend i shquar për dasma dhe ngjarje në Prilep, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Кристал Палас е водечка свадбена и настанска сала во Прилеп, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Kristal Palace, Prilep'te şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir düğün ve etkinlik mekanıdır."
  },
  city: "Prilep",
  capacity: 400,
  address: "Lenin 184, 7500 Prilep, North Macedonia",
  image: "https://www.kp.mk/sites/default/files/2019-08/DSC_0268.jpg",
  gallery: [
    "https://www.kp.mk/sites/default/files/2019-08/DSC_0268.jpg",
    "https://www.kp.mk/sites/default/files/2019-08/DSC_0225.jpg",
    "https://www.kp.mk/sites/default/files/2019-08/DSC_0238-HDR.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 48 418 000",
  email: "happy@kp.mk",
  lat: 41.345,
  lng: 21.554,
  instagram: "@kristal_palace_prilep",
  website: "https://kp.mk",
},
{
  id: "restaurant-amor-skopje",
  name: {
    en: "Restoran Amor",
    sq: "Restoran Amor",
    mk: "Ресторан Амор",
    tr: "Restoran Amor"
  },
  description: {
    en: "Restoran Amor is a luxurious wedding venue in Skopje offering a spacious hall, elegant interior, and romantic ambiance, perfect for weddings and large events.",
    sq: "Restoran Amor është një vend i luksit për dasma në Shkup që ofron një sallë të madhe, interior elegant dhe atmosferë romantike, ideale për dasma dhe ngjarje të mëdha.",
    mk: "Ресторан Амор е луксузен свадбен простор во Скопје со пространа сала, елегантен ентериер и романтична атмосфера, совршен за свадби и големи настани.",
    tr: "Restoran Amor, Üsküp'te geniş bir salon, zarif iç mekan ve romantik atmosfer sunan lüks bir düğün mekanıdır, düğünler ve büyük etkinlikler için idealdir."
  },
  city: "Skopje",
  capacity: 500,
  address: "Boris Trajkovski 210, Skopje 1000",
  image: "https://i.imgur.com/oVJFoCQ.jpeg",
  gallery: [
    "https://i.imgur.com/oVJFoCQ.jpeg",
    "https://i.imgur.com/6a3CE4z.jpeg",
    "https://i.imgur.com/vpFwqgL.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 72 244 582",
  email: "info@restoranamor.mk",
  lat: 41.9935,
  lng: 21.4333,
  instagram: "@restoran_amor",
  website: "https://restoranamor.mk",
},
{
  id: "haybori-tetovo",
  name: {
    en: "Haybori",
    sq: "Haybori",
    mk: "Хајбори",
    tr: "Haybori"
  },
  description: {
    en: "Modern wedding hall with customizable decor and professional lighting.",
    sq: "Sallë moderne dasmash me dekor të personalizueshëm dhe ndriçim profesional.",
    mk: "Модерна свадбена сала со персонализиран декор и професионално осветлување.",
    tr: "Özelleştirilebilir dekor ve profesyonel aydınlatmaya sahip modern bir düğün salonu."
  },
  city: "Tetovo",
  capacity: 400,
  address: "Fsh. Pallçisht, Tetovo",
  image: "https://i.imgur.com/1Jf0fSy.jpeg",
  gallery: [
    "https://i.imgur.com/1Jf0fSy.jpeg",
    "https://i.imgur.com/raEeCtb.jpeg",
    "https://i.imgur.com/ltunb53.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 75 489 611",
  email: "info@haybori.com",
  lat: 41.9902,
  lng: 21.0713,
  instagram: "@haybori",
  website: "https://haybori.com",
},
{
  id: "glorius-hotel-veles",
  name: {
    en: "Glorius Hotel",
    sq: "Hoteli Glorius",
    mk: "Хотел Глориус",
    tr: "Glorius Otel"
  },
  description: {
    en: "Glorius Hotel in Veles offers a luxurious experience with modern accommodations, a seasonal outdoor pool, restaurant & bar, and event spaces. Located by Lake Mladost, it's ideal for weddings, conferences, and leisure stays.",
    sq: "Hoteli Glorius në Veles ofron një përvojë luksoze me akomodim modern, pishinë të jashtme sezonal, restorant dhe bar, si dhe hapësira për ngjarje. I vendosur pranë Liqenit Mladost, është ideal për dasma, konferenca dhe qëndrime për pushime.",
    mk: "Хотел Глориус во Велес нуди луксузно искуство со модерни сместувачки капацитети, сезонски отворен базен, ресторан и бар, како и простори за настани. Сместен покрај Лиенот Младост, идеален е за свадби, конференции и одмори.",
    tr: "Veles'teki Glorius Otel, modern konaklama, mevsimlik açık havuz, restoran ve bar, etkinlik alanları ile lüks bir deneyim sunmaktadır. Mladost Gölü kıyısında bulunan otel, düğünler, konferanslar ve tatil konaklamaları için idealdir."
  },
  city: "Veles",
  capacity: 250,
  address: "Lake Mladost, Veles 1400, North Macedonia",
  image: "https://glorius.mk/wp-content/uploads/2022/11/IMG_20221023_180928.jpg",
  gallery: [
    "https://glorius.mk/wp-content/uploads/2022/11/IMG_20221023_180928.jpg",
    "https://glorius.mk/wp-content/uploads/2022/11/IMG_20220506_134317.jpg",
    "https://glorius.mk/wp-content/uploads/2022/11/IMG_20210802_174627.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 608 608",
  email: "info@glorius.mk",
  lat: 41.718,
  lng: 21.777,
  instagram: "@hotel_glorius",
  website: "https://glorius.mk",
},
{
  id: "kapri-bitola",
  name: {
    en: "Hotel & Restaurant Kapri",
    sq: "Hotel & Restorant Kapri",
    mk: "Хотел & Ресторант Капри",
    tr: "Hotel & Restoran Kapri"
  },
  description: {
    en: "Hotel & Restaurant Kapri is a premier wedding and event venue in Bitola, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Hotel & Restorant Kapri është një vend i shquar për dasma dhe ngjarje në Bitolë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Хотел & Ресторант Капри е водечка свадбена и настанска сала во Битола, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Hotel & Restoran Kapri, Bitola'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
  },
  city: "Bitola",
  capacity: 400,
  address: "11-та Македонска Дивизија бр.1, Bitola 7000, North Macedonia",
  image: "https://kapri.com.mk/images/b794e5b51c6fa9ffd51af52aaeaf695231b17237.jpg",
  gallery: [
    "https://kapri.com.mk/images/b794e5b51c6fa9ffd51af52aaeaf695231b17237.jpg",
    "https://kapri.com.mk/images/a83a8efe73166fcd91f9da18c8f53e1cd9f35ee3.jpg",
    "https://kapri.com.mk/images/8af2de20868bc4d1e9201b11e7d654ebe4e4756c.JPG"
  ],
  category: "Wedding Hall",
  phone: "+389 76 479 382",
  email: "hotelkapri@kapri.com.mk",
  lat: 41.028,
  lng: 21.317,
  instagram: "@hotelkapri",
  website: "https://kapri.com.mk",
},
{
  id: "nb-palace-tetovo",
  name: {
    en: "NB Palace",
    sq: "NB Palace",
    mk: "НБ Палас",
    tr: "NB Sarayı"
  },
  description: {
    en: "Elegant wedding venue featuring a royal hall, exceptional cuisine, and an unforgettable atmosphere.",
    sq: "Sallë dasmash elegante me një sallë mbretërore, kuzhinë të jashtëzakonshme dhe atmosferë të paharrueshme.",
    mk: "Елегантна свадбена сала со кралска сала, извонредна кујна и незаборавна атмосфера.",
    tr: "Kraliyet salonu, olağanüstü mutfak ve unutulmaz atmosferaya sahip şık bir düğün mekanı."
  },
  city: "Tetovo",
  capacity: 500,
  address: "Skopski Pat 9, Tetovo, North Macedonia",
  image: "https://i.imgur.com/lrIfxRS.jpeg",
  gallery: [
    "https://i.imgur.com/lrIfxRS.jpeg",
    "https://i.imgur.com/F8PFbr0.jpeg",
    "https://i.imgur.com/VQlDz5W.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 72 321 017",
  email: "nbpalace1@gmail.com",
  lat: 41.9861,
  lng: 21.1056,
  instagram: "@nb.palace",
  website: "https://www.instagram.com/nb.palace/",
},
{
  id: "cherry-orchard-skopje",
  name: {
    en: "Cherry Orchard",
    sq: "Kopshti i Qershive",
    mk: "Црешова Градина",
    tr: "Kiraz Bahçesi"
  },
  description: {
    en: "Cherry Orchard is a charming and idyllic event venue in Skopje, offering lush garden surroundings and elegant event setups.",
    sq: "Cherry Orchard është një vend idilik dhe tërheqës në Shkup, që ofron ambiente kopshtore të gjelbëruara dhe dekorime elegante për evente.",
    mk: "Cherry Orchard е шармантно и идилично место во Скопје, со зелени градински амбиенти и елегантни поставки за настани.",
    tr: "Cherry Orchard, Üsküp’te yeşil bahçe ortamı ve zarif etkinlik düzenleri sunan çekici bir mekandır."
  },
  city: "Skopje",
  capacity: 350,
  address: "Ulica 5, br. 71a, Skopje",
  image: "https://i.imgur.com/18Nh0xN.jpeg",
  gallery: [
    "https://i.imgur.com/18Nh0xN.jpeg",
    "https://i.imgur.com/0YqXzIA.jpeg",
    "https://i.imgur.com/awAKdZ9.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 78 370 747",
  email: "info@cherryorchard.mk",
  lat: 41.995,
  lng: 21.433,
  instagram: "@_cherryorchard",
  website: "https://facebook.com/cherryorchardmk",
},
{
  id: "vavilon-bitola",
  name: {
    en: "Restoran Vavilon",
    sq: "Restorant Vavilon",
    mk: "Ресторан Вавилон",
    tr: "Restoran Vavilon"
  },
  description: {
    en: "Restoran Vavilon is a premier wedding and event venue in Bitola, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Restorant Vavilon është një vend i shquar për dasma dhe ngjarje në Bitolë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Ресторан Вавилон е водечка свадбена и настанска сала во Битола, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Restoran Vavilon, Bitola'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir düğün ve etkinlik mekanıdır."
  },
  city: "Bitola",
  capacity: 800,
  address: "Ivo Lola Ribar 24, Bitola 7000, North Macedonia",
  image: "https://i.imgur.com/moEet03.jpeg",
  gallery: [
    "https://i.imgur.com/moEet03.jpeg",
    "https://i.imgur.com/5dNhZw3.jpeg",
    "https://i.imgur.com/y3n7ZQv.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 207 268",
  email: "info@vavilon.mk",
  lat: 41.028,
  lng: 21.317,
  instagram: "@vavilonrestoran",
  website: "https://vavilon.mk",
},
{
  id: "hotel-romantique-veles",
  name: {
    en: "Hotel Romantique",
    sq: "Hoteli Romantique",
    mk: "Хотел Романтик",
    tr: "Romantique Otel"
  },
  description: {
    en: "Hotel Romantique in Veles offers a luxurious experience with modern accommodations, a seasonal outdoor pool, restaurant & bar, and event spaces. Located by Lake Veles, it's ideal for weddings, conferences, and leisure stays.",
    sq: "Hoteli Romantique në Veles ofron një përvojë luksoze me akomodim modern, pishinë të jashtme sezonal, restorant dhe bar, si dhe hapësira për ngjarje. I vendosur pranë Liqenit të Velesit, është ideal për dasma, konferenca dhe qëndrime për pushime.",
    mk: "Хотел Романтик во Велес нуди луксузно искуство со модерни сместувачки капацитети, сезонски отворен базен, ресторан и бар, како и простори за настани. Сместен покрај Лиенот Велес, идеален е за свадби, конференции и одмори.",
    tr: "Veles'teki Romantique Otel, modern konaklama, mevsimlik açık havuz, restoran ve bar, etkinlik alanları ile lüks bir deneyim sunmaktadır. Veles Gölü kıyısında bulunan otel, düğünler, konferanslar ve tatil konaklamaları için idealdir."
  },
  city: "Veles",
  capacity: 350,
  address: "Lake Veles, Veles 1400, North Macedonia",
  image: "https://www.hotelromantique.com/assets/rest7.jpg",
  gallery: [
    "https://www.hotelromantique.com/assets/rest7.jpg",
    "https://www.hotelromantique.com/assets/rest2.jpg",
    "https://www.hotelromantique.com/assets/rest5.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 43 212 999",
  email: "info@hotelromantik.com.mk",
  lat: 41.718,
  lng: 21.777,
  instagram: "@romantiquehotel",
  website: "https://www.hotelromantique.com.mk",
},
{
  id: "dy-fazana",
  name: {
    en: "Dy Fazana",
    sq: "Dy Fazana",
    mk: "Ду Фазана",
    tr: "Dy Fazana"
  },
  description: {
    en: "Spacious wedding venue in Tetovo with elegant interiors and versatile spaces.",
    sq: "Ambient i gjerë për dasma në Tetovë me enterier elegant dhe hapësira të ndryshme.",
    mk: "Просторна свадбена сала во Тетово со елегантен ентериер и разновидни простори.",
    tr: "Tetovo'da geniş düğün mekanı, şık iç mekan ve çok amaçlı alanlarla."
  },
  city: "Tetovo",
  capacity: 500,
  address: "Zona Industriale Zelinë, Tetovo",
  image: "https://i.imgur.com/j98qnmP.jpeg",
  gallery: [
    "https://i.imgur.com/j98qnmP.jpeg",
    "https://i.imgur.com/HqrJOPA.jpeg",
    "https://i.imgur.com/KHz9pA8.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+38970789012",
  email: "info@dyfazana.mk",
  lat: 42.007,
  lng: 21.148,
  instagram: "@dyfazana_tetovo",
  website: "https://dyfazana.mk",
},
{
  id: "restaurant-labunishta-struga",
  name: {
    en: "Restaurant Labunishta",
    sq: "Restorant Labunishta",
    mk: "Ресторан Лабуништа",
    tr: "Restoran Labunishta"
  },
  description: {
    en: "Restaurant Labunishta in Struga offers a blend of traditional Macedonian and Mediterranean cuisine, perfect for weddings, family gatherings, and celebrations.",
    sq: "Restorant Labunishta në Strugë ofron një përzierje të kuzhinës tradicionale maqedonase dhe mesdhetare, perfekt për dasma, darka familjare dhe festa.",
    mk: "Ресторан Лабуништа во Струга нуди мешавина од традиционална македонска и медитеранска кујна, идеален за свадби, семејни вечери и прослави.",
    tr: "Struga'daki Restaurant Labunishta, düğünler, aile yemekleri ve kutlamalar için mükemmel, geleneksel Makedon ve Akdeniz mutfağının birleşimini sunuyor."
  },
  city: "Struga",
  capacity: 420,
  address: "Rr. e Labunishtës, Labunishta / Struga",
  image: "https://i.imgur.com/uDhHBSB.jpeg",
  gallery: [
    "https://i.imgur.com/uDhHBSB.jpeg",
    "https://i.imgur.com/domxZtl.jpeg",
    "https://i.imgur.com/1nMXDzB.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 555 321",
  email: "info@restaurantlabunishta.mk",
  lat: 41.247,
  lng: 20.615,
  instagram: "@restaurantlabunishta",
  website: "https://restaurantlabunishta.mk",
},
{
  id: "elita-kamjan",
  name: {
    en: "Elita Kamjan",
    sq: "Elita Kamjan",
    mk: "Елита Камјан",
    tr: "Elita Kamjan"
  },
  description: {
    en: "Elegant venue in Kamenjan with modern facilities and a welcoming ambiance.",
    sq: "Ambient elegant në Kamenjan me pajisje moderne dhe atmosferë mikpritëse.",
    mk: "Елегантна сала во Камјан со модерни удобности и пријатна атмосфера.",
    tr: "Kamenjan'da modern olanaklar ve sıcak bir ambiyansa sahip zarif mekan."
  },
  city: "Tetovo",
  capacity: 450,
  address: "f. Kamenjan, Tetovo",
  image: "https://i.imgur.com/a0wXIKz.jpeg",
  gallery: [
    "https://i.imgur.com/a0wXIKz.jpeg",
    "https://i.imgur.com/axLGjCN.jpeg",
    "https://i.imgur.com/m8eFFF5.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+38970123456",
  email: "info@elitakamjan.mk",
  lat: 42.005,
  lng: 21.152,
  instagram: "@elitakamjan",
  website: "https://elitakamjan.mk",
},
{
  id: "grand-premier-bitola",
  name: {
    en: "Grand Premier",
    sq: "Grand Premier",
    mk: "Гранд Премиер",
    tr: "Grand Premier"
  },
  description: {
    en: "Grand Premier is a premier wedding and event venue in Bitola, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
    sq: "Grand Premier është një vend i shquar për dasma dhe ngjarje në Bitolë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
    mk: "Grand Premier е водечка свадбена и настанска сала во Битола, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
    tr: "Grand Premier, Bitola'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
  },
  city: "Bitola",
  capacity: 800,
  address: "Dovledzhik b.b., Bitola 7000, North Macedonia",
  image: "https://i.imgur.com/RKRm12y.jpeg",
  gallery: [
    "https://i.imgur.com/RKRm12y.jpeg",
    "https://i.imgur.com/0jybcl7.jpeg",
    "https://i.imgur.com/lJLajos.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 47 202060",
  email: "info@grandpremier.mk",
  lat: 41.021,
  lng: 21.331,
  instagram: "@grand_premier_bitola",
  website: "https://grandpremier.mk",
},
{
  id: "restorant-park-skopje",
  name: {
    en: "Restorant Park",
    sq: "Restorant Park",
    mk: "Рестора́н Парк",
    tr: "Restoran Park"
  },
  description: {
    en: "Restorant Park is a wedding & event restaurant in the heart of Skopje’s City Park, known for its elegant interiors, excellent service, and capacity for large gatherings.",
    sq: "Restorant Park është restorant për dasma dhe evente në zemër të Parkut të qytetit të Shkupit, i njohur për enterier elegant, shërbim të shkëlqyer dhe kapacitet për festa të mëdha.",
    mk: "Рестора́н Парк е свадбен ресторан и за настани во срцето на Градскиот парк во Скопје, познат по елегантен ентериер, одлична услуга и капацитет за големи прослави.",
    tr: "Restoran Park, Üsküp’ün Kent Parkı’nın kalbinde düğün ve etkinlik restoranı olarak bilinir; şık iç mekanı, mükemmel servisi ve büyük davetlere hizmet kapasitesiyle ünlüdür."
  },
  city: "Skopje",
  capacity: 350,
  address: "Ulica Kej 13 Noemvri 4a, Skopje",
  image: "https://www.park.mk/storage/app/media/park2025_gallery/v-3/2.jpg",
  gallery: [
    "https://www.park.mk/storage/app/media/park2025_gallery/v-3/2.jpg",
    "https://www.park.mk/storage/app/media/park2025_gallery/v-3/12.jpg",
    "https://www.park.mk/storage/app/media/park2025_gallery/v-3/30.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 72 226 123",
  email: "info@park.mk",
  lat: 41.996,
  lng: 21.438,
  instagram: "@restoranpark_skopje",
  website: "https://park.mk",
},
{
  id: "gold-planet-kamenjane",
  name: {
    en: "Gold Planet",
    sq: "Gold Planet",
    mk: "Gold Planet",
    tr: "Gold Planet"
  },
  description: {
    en: "Luxurious wedding venue in Kamenjane with golden accents and opulent decor.",
    sq: "Ambient luksoz për dasma në Kamenjane me detaje të arta dhe dekor të pasur.",
    mk: "Луксузна свадбена сала во Камјан со златни акценти и раскошен декор.",
    tr: "Kamenjane'da altın detaylara ve lüks dekorasyona sahip zarif düğün mekanı."
  },
  city: "Tetovo",
  capacity: 800,
  address: "Kamenjane 101 BB, Tetovo",
  image: "https://i.imgur.com/06sO1Cz.jpeg",
  gallery: [
    "https://i.imgur.com/06sO1Cz.jpeg",
    "https://i.imgur.com/C9aJaGv.jpeg",
    "https://i.imgur.com/5z4ypml.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 582 014",
  email: "info@restaurantplanet.mk",
  lat: 41.949,
  lng: 20.944,
  instagram: "@restaurantplanet_goldplanet",
  website: "https://restaurantplanet.mk",
},
  {
    id: "palace-prilep",
    name: {
      en: "Imperial Palace",
      sq: "Pallati Imperial",
      mk: "Империјал Палас",
      tr: "İmparatorluk Sarayı",
    },
    description: {
      en: "Majestic venue with royal ambiance and exceptional service. Features include grand entrance and VIP lounge.",
      sq: "Vend madhështor me atmosferë mbretërore dhe shërbim të jashtëzakonshëm. Përfshin hyrje të madhe dhe sallë VIP.",
      mk: "Величествен простор со кралска амбиента и исклучителна услуга. Вклучува голем влез и VIP салон.",
      tr: "Kraliyet ambiyansı ve olağanüstü hizmetiyle görkemli mekan. Büyük giriş ve VIP salonu içerir.",
    },
    city: "Prilep",
    capacity: 320,
    address: "Marksova 89",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c2b0?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
    ],
    category: "Wedding Hall",
    phone: "+389 70 901 234",
    email: "info@imperialpalace.mk",
    lat: 41.3453,
    lng: 21.5547,
  },
   {
    id: "bela-voda-berovo",
    name: {
      en: "Bela Voda Tourist Complex",
      sq: "Kompleksi Turistik Bela Voda",
      mk: "Туристички Комплекс Бела Вода",
      tr: "Bela Voda Turist Kompleksi"
    },
    description: {
      en: "Bela Voda Tourist Complex is a serene eco-retreat nestled in the Maleševo mountains, offering cozy bungalows, traditional Macedonian cuisine, and a peaceful ambiance for nature enthusiasts and families.",
      sq: "Kompleksi Turistik Bela Voda është një strehë e qetë ekologjike e vendosur në malet e Maleševës, duke ofruar bungalove të rehatshme, kuzhinë tradicionale maqedonase dhe një atmosferë paqësore për adhuruesit e natyrës dhe familjet.",
      mk: "Туристички Комплекс Бела Вода е мирен еко-одморалиште сместено во планините на Малешево, кое нуди удобни бунгалови, традиционална македонска кујна и мирна атмосфера за љубителите на природата и семејствата.",
      tr: "Bela Voda Turist Kompleksi, Maleševo dağlarında yer alan sakin bir ekotatil köyüdür ve doğa severler ve aileler için konforlu bungalovlar, geleneksel Makedon mutfağı ve huzurlu bir atmosfer sunmaktadır."
    },
    city: "Berovo",
    capacity: 100,
    address: "Naselba Suvi Laki 4, Berovo Bela Voda, Dvoriste, North Macedonia",
    image: "https://i.imgur.com/3Bvfb0Z.jpeg",
    gallery: [
      "https://i.imgur.com/3Bvfb0Z.jpeg",
      "https://i.imgur.com/ynfcNuK.jpeg",
      "https://i.imgur.com/bXTH09p.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 608 608",
    email: "kompleksbelavoda2015@gmail.com",
    lat: 41.489,
    lng: 22.898
  },
  {
    id: "restorant-arra-tetovo",
    name: {
      en: "Restorant Arra",
      sq: "Restorant Arra",
      mk: "Ресторант Арра",
      tr: "Restoran Arra"
    },
    description: {
      en: "Elegant venue in Tetovo offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant në Tetovë që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна сала во Тетово која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Tetova'da modern iç mekanlar ve geniş banket salonları sunan şık bir mekan."
    },
    city: "Tetovo",
    capacity: 300,
    address: "Van Vardarska 13, Tetovo",
    image: "https://i.imgur.com/qNwGuwr.jpeg",
    gallery: [
      "https://i.imgur.com/qNwGuwr.jpeg",
      "https://i.imgur.com/0CImsqI.jpeg",
      "https://i.imgur.com/ubAkfuF.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 240 518",
    email: "info@restaurantarra.mk",
    lat: 41.9906,
    lng: 21.2761
  },
  {
    id: "swiss-palace-tetovo",
    name: {
      en: "Swiss Palace",
      sq: "Swiss Palace",
      mk: "Швајцарија Палас",
      tr: "İsviçre Sarayı"
    },
    description: {
      en: "Elegant venue in Tetovo offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant në Tetovë që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна сала во Тетово која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Tetova'da modern iç mekanlar ve geniş banket salonları sunan şık bir mekan."
    },
    city: "Tetovo",
    capacity: 350,
    address: "Pat za Brvenica, Tetovo",
    image: "https://i.imgur.com/ucqcVaR.jpeg",
    gallery: [
      "https://i.imgur.com/ucqcVaR.jpeg",
      "https://i.imgur.com/KuD7puq.jpeg",
      "https://i.imgur.com/7ZSJ0R9.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 655 666",
    email: "info@swisspalace.mk",
    lat: 41.989,
    lng: 21.278
  },
  {
    id: "restorant-inxhi-tetovo",
    name: {
      en: "Restorant Inxhi",
      sq: "Restorant Inxhi",
      mk: "Ресторант Инџи",
      tr: "Restoran Inxhi"
    },
    description: {
      en: "Cozy family-style restaurant in Tetovo offering a warm atmosphere and traditional cuisine.",
      sq: "Restorant i ngrohtë familjar në Tetovë që ofron atmosferë të ngrohtë dhe kuzhinë tradicionale.",
      mk: "Топол ресторан за семејни настани во Тетово кој нуди топла атмосфера и традиционална кујна.",
      tr: "Tetova'da sıcak bir atmosfer ve geleneksel mutfak sunan samimi bir aile restoranı."
    },
    city: "Tetovo",
    capacity: 250,
    address: "Rruga Industriale, Tetovë 1200",
    image: "https://i.imgur.com/q4Vy2ak.jpeg",
    gallery: [
      "https://i.imgur.com/q4Vy2ak.jpeg",
      "https://i.imgur.com/YC2PFm6.jpeg",
      "https://i.imgur.com/06fo8Jd.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 72 244 443",
    email: "info@restorantinxhi.mk",
    lat: 41.9914,
    lng: 21.2769
  },
  {
    id: "restorant-bella-vista-gostivar",
    name: {
      en: "Bella Vista",
      sq: "Bella Vista",
      mk: "Белла Виста",
      tr: "Bella Vista"
    },
    description: {
      en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Gostivar",
    capacity: 400,
    address: "Magjistralja Tetovë–Gostivar, Negotino, Gostivar 1230",
    image: "https://i.imgur.com/NmnuMYm.jpeg",
    gallery: [
      "https://i.imgur.com/NmnuMYm.jpeg",
      "https://i.imgur.com/RliwCtx.jpeg",
      "https://i.imgur.com/uf4Gwln.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 979 977",
    email: "info@bellavistagostivar.mk",
    lat: 41.553,
    lng: 20.935
  },
  {
    id: "restorant-arena-gostivar",
    name: {
      en: "Restorant Arena De Luxe",
      sq: "Restorant Arena De Luxe",
      mk: "Ресторант Арена Де Лукс",
      tr: "Arena De Luxe Restoranı"
    },
    description: {
      en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Gostivar",
    capacity: 400,
    address: "Mlaki, Gostivar 1230",
    image: "https://i.imgur.com/syfB8Ox.jpeg",
    gallery: [
      "https://i.imgur.com/syfB8Ox.jpeg",
      "https://i.imgur.com/udDHUQo.jpeg",
      "https://i.imgur.com/O0BECjy.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 890 183",
    email: "info@restorantarena.mk",
    lat: 41.553,
    lng: 20.935
  },
  {
    id: "nita-palace-skopje",
    name: {
      en: "Nita Palace",
      sq: "Nita Palace",
      mk: "Нита Палаце",
      tr: "Nita Palace"
    },
    description: {
      en: "Nita Palace is a grand restaurant and event venue in Skopje, located in Vizbegovo, offering elegant décor and large capacity for weddings and events.",
      sq: "Nita Palace është një restorant dhe ambient për evente madhështore në Shkup, në Vizbegovo, që ofron dekor elegant dhe kapacitet të madh për dasma dhe ngjarje.",
      mk: "Нита Палаце е голем ресторан и простор за настани во Скопје, во Визбегово, со елегантен ентериер и голем капацитет за свадби и настани.",
      tr: "Nita Palace, Üsküp’te Vizbegovo bölgesinde büyük kapasitesi ve zarif dekoru ile düğün & etkinlikler için seçkin bir mekan."
    },
    city: "Skopje",
    capacity: 400,
    address: "Vizbegovo b.b., Skopje 1000, North Macedonia",
    image: "https://i.imgur.com/jjla69n.jpeg",
    gallery: [
      "https://i.imgur.com/jjla69n.jpeg",
      "https://i.imgur.com/WnG5wDa.jpeg",
      "https://i.imgur.com/Dl66DJF.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 75 410 915",
    email: "info@nitapalace.mk",
    lat: 42.04089,
    lng: 21.41056
  },
  {
    id: "restaurant-arcus-kumanovo",
    name: {
      en: "Restaurant Arcus",
      sq: "Restorant Arcus",
      mk: "Ресторант Аркус",
      tr: "Restoran Arcus"
    },
    description: {
      en: "Restaurant Arcus in Kumanovo is a stylish and elegant venue offering a refined culinary experience and great atmosphere for dinners, events, or casual gathering.",
      sq: "Restoranti Arcus në Kumanovë është një vend elegant që ofron eksperiencë kulinarie të rafinuar dhe atmosferë të shkëlqyer për darka, evente ose takime të thjeshta.",
      mk: "Ресторант Аркус во Куманово е стилски и елегантен простор кој нуди префинето кулинарско искуство и одлична атмосфера за вечери, настани или пријателски средби.",
      tr: "Restaurant Arcus, Kumanova’da şık ve zarif bir mekandır; akşam yemekleri, etkinlikler veya arkadaş toplantıları için kaliteli bir atmosfer ve seçkin mutfak sunar."
    },
    city: "Kumanovo",
    capacity: 300,
    address: "11-ti Oktomvri 98, Kumanovo 1300",
    image: "https://i.imgur.com/BJFyfTV.jpeg",
    gallery: [
      "https://i.imgur.com/BJFyfTV.jpeg",
      "https://i.imgur.com/JovrWwF.jpeg",
      "https://i.imgur.com/02T8p4Q.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 71 208 191",
    email: "info@arcus-isfa.com",
    lat: 42.135,
    lng: 21.724
  },
  {
    id: "new-albis-gostivar",
    name: {
      en: "New Albis",
      sq: "New Albis",
      mk: "Нови Албис",
      tr: "Yeni Albis"
    },
    description: {
      en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Gostivar",
    capacity: 400,
    address: "Dutlok, Gostivar 1230",
    image: "https://i.imgur.com/V1HxCX0.jpeg",
    gallery: [
      "https://i.imgur.com/V1HxCX0.jpeg",
      "https://i.imgur.com/CftZySJ.jpeg",
      "https://i.imgur.com/UUN61JN.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 78 229 091",
    email: "info@newalbis.mk",
    lat: 41.553,
    lng: 20.935
  },
  {
    id: "ragusa360-rooftop-skopje",
    name: {
      en: "Ragusa360 Rooftop",
      sq: "Ragusa360 Rooftop",
      mk: "Рагуза360 Роофтоп",
      tr: "Ragusa360 Rooftop"
    },
    description: {
      en: "A premier rooftop event center in Skopje offering stunning views, modern design and excellent service. Ideal for weddings, corporate events and upscale gatherings.",
      sq: "Qendër kryesore në kulm në Shkup që ofron pamje mbresëlënëse, dizajn modern dhe shërbim të shkëlqyer. E përshtatshme për dasma, evente korporative dhe mbrëmje luksoze.",
      mk: "Премиум честит центар на покривот во Скопје со прекрасен поглед, модерен дизајн и одлична услуга. Идеален за свадби, корпоративни настани и луксузни прослави.",
      tr: "Üsküp’te çarpıcı manzaralar, modern tasarım ve mükemmel hizmet sunan bir çatı etkinlik merkezi. Düğünler, kurumsal etkinlikler ve lüks davetler için ideal."
    },
    city: "Skopje",
    capacity: 300,
    address: "Sv. Kiril i Metodij 1/1/6-3, Skopje",
    image: "https://www.ragusa360.com/storage/app/uploads/public/648/860/43c/64886043c98f2731176409.jpg",
    gallery: [
      "https://www.ragusa360.com/storage/app/uploads/public/648/860/43c/64886043c98f2731176409.jpg",
      "https://www.ragusa360.com/storage/app/uploads/public/648/9b8/3f2/6489b83f24287454233295.jpeg",
      "https://www.ragusa360.com/storage/app/uploads/public/648/9b8/464/6489b8464c53d131151512.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 75 398 919",
    email: "info@ragusa360.com",
    lat: 41.9898,
    lng: 21.43138
  },
  {
    id: "restorant-luxor-gostivar",
    name: { en: "Restorant Luxor", sq: "Restorant Luxor", mk: "Ресторант Луксор", tr: "Restoran Luxor" },
    description: { en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.", sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.", mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.", tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı." },
    city: "Gostivar",
    capacity: 350,
    address: "Sedek Kostoski b.b., Gostivar",
    image: "https://i.imgur.com/KazQEM8.jpeg",
    gallery: ["https://i.imgur.com/KazQEM8.jpeg","https://i.imgur.com/jUakquS.jpeg"],
    category: "Wedding Hall",
    phone: "+389 70 588 816",
    email: "info@luxorgostivar.mk",
    lat: 41.539,
    lng: 20.878
  },
  {
    id: "planet-kamenjane",
    name: { en: "Planet", sq: "Planet", mk: "Планет", tr: "Planet" },
    description: { en: "Elegant wedding venue in Kamenjane with modern design and excellent facilities.", sq: "Ambient elegant për dasma në Kamenjane me dizajn modern dhe pajisje të shkëlqyera.", mk: "Елегантна свадбена сала во Камјан со модерен дизајн и одлични удобности.", tr: "Kamenjane'da modern tasarıma ve mükemmel olanaklara sahip zarif düğün mekanı." },
    city: "Tetovo",
    capacity: 350,
    address: "Kamenjane 101 BB, Tetovo",
    image: "https://i.imgur.com/FWctaq5.jpeg",
    gallery: ["https://i.imgur.com/FWctaq5.jpeg","https://i.imgur.com/r5JBOB2.jpeg","https://i.imgur.com/FvQITpP.jpeg"],
    category: "Wedding Hall",
    phone: "+389 70 582 014",
    email: "info@restaurantplanet.mk",
    lat: 41.949,
    lng: 20.944
  },
  {
    id: "prestige-struga",
    name: { en: "Prestige Struga", sq: "Prestige Struga", mk: "Престиж Струга", tr: "Prestige Struga" },
    description: { en: "Hotel and restaurant venue in Struga with elegant interiors and a restaurant on-site. Ideal for weddings and large gatherings.", sq: "Hotel me restorant në Strugë me enterier elegant dhe restorant në vend. Ideal për dasma dhe tubime të mëdha.", mk: "Хотел со ресторан во Струга со елегантен ентериер и ресторан во објектот. Идеален за свадби и големи собири.", tr: "Struga'da restoran içeren otel olanakları ile şık bir mekan. Düğünler ve büyük toplantılar için ideal." },
    city: "Struga",
    capacity: 300,
    address: "Magjistralna Pat Struge-Ohrid, Struga",
    image: "https://i.imgur.com/oeEOwHA.jpeg",
    gallery: ["https://i.imgur.com/oeEOwHA.jpeg","https://i.imgur.com/SPsNdZI.jpeg","https://i.imgur.com/yk0X420.jpeg"],
    category: "Wedding Hall",
    phone: "+389 46 522 600",
    email: "info@prestigestruga.mk",
    lat: 41.117,
    lng: 20.661
  },
  {
    id: "mont-blanc-gostivar",
    name: { en: "Mont Blanc", sq: "Mont Blanc", mk: "Мон Бланк", tr: "Mont Blanc" },
    description: { en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.", sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.", mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.", tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı." },
    city: "Gostivar",
    capacity: 350,
    address: "Dolna Banjica, 2 km from center, Gostivar",
    image: "https://i.imgur.com/YykJxu4.png",
    gallery: ["https://i.imgur.com/YykJxu4.png","https://i.imgur.com/J7jVUTH.png","https://i.imgur.com/hwR6QkB.png"],
    category: "Wedding Hall",
    phone: "+389 70 215 040",
    email: "info@montblan.mk",
    lat: 41.7964,
    lng: 20.8844
  },
  {
    id: "romansa-prilep",
    name: { en: "Restaurant Romansa", sq: "Restorant Romansa", mk: "Ресторант Романса", tr: "Restoran Romansa" },
    description: { en: "Restaurant Romansa is a premier wedding and event venue in Prilep, offering elegant decor, exceptional service, and a versatile space for various celebrations.", sq: "Restorant Romansa është një vend i shquar për dasma dhe ngjarje në Prilep, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.", mk: "Ресторант Романса е водечка свадбена и настанска сала во Прилеп, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.", tr: "Restoran Romansa, Prilep'te şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır." },
    city: "Prilep",
    capacity: 300,
    address: "106, Novo Lagovo, Prilep 7515, North Macedonia",
    image: "https://i.imgur.com/nnLNt1A.jpeg",
    gallery: ["https://i.imgur.com/nnLNt1A.jpeg","https://i.imgur.com/KeAd2Wd.jpeg","https://i.imgur.com/Tq6oiQp.jpeg"],
    category: "Wedding Hall",
    phone: "+389 76 334 777",
    email: "info@romansa.mk",
    lat: 41.315,
    lng: 21.517
  },
  {
    id: "new-mivera-gostivar",
    name: { en: "New Mivera", sq: "New Mivera", mk: "Њу Мивера", tr: "New Mivera" },
    description: { en: "Modern wedding venue in Gostivar offering elegant interiors and spacious banquet facilities.", sq: "Ambient modern për dasma në Gostivar që ofron enterier elegant dhe hapësira të gjera për bankete.", mk: "Модерна свадбена сала во Гостивар која нуди елегантен ентериер и пространи банкетски капацитети.", tr: "Gostivar'da modern bir düğün mekanı, şık iç mekanlar ve geniş banket salonları sunuyor." },
    city: "Gostivar",
    capacity: 350,
    address: "s. Debresh, Gostivar",
    image: "https://i.imgur.com/Jc15s6k.jpeg",
    gallery: ["https://i.imgur.com/Jc15s6k.jpeg","https://i.imgur.com/T9fqIPF.jpeg","https://i.imgur.com/SNsHJfe.jpeg"],
    category: "Wedding Hall",
    phone: "+389 71 378 950",
    email: "info@mivera.mk",
    lat: 41.792,
    lng: 20.926
  },
   {
    id: "restorant-sajgija-gostivar",
    name: {
      en: "Restorant Sajgija",
      sq: "Restorant Sajgija",
      mk: "Ресторант Сајгија",
      tr: "Restoran Sajgija"
    },
    description: {
      en: "Elegant wedding venue in Gostivar offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Gostivar që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Гостивар која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Gostivar",
    capacity: 350,
    address: "Индустриска зона бб, Gostivar",
    image: "https://i.imgur.com/XwWW6W1.jpeg",
    gallery: [
      "https://i.imgur.com/XwWW6W1.jpeg",
      "https://i.imgur.com/S1Rc9R9.jpeg",
      "https://i.imgur.com/dFk6HYn.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 378 290",
    email: "info@sajgija.mk",
    lat: 41.538,
    lng: 20.878
  },
  {
    id: "restaurant-lux-struga",
    name: {
      en: "Restaurant Lux",
      sq: "Restorant Lux",
      mk: "Ресторант Лукс",
      tr: "Restoran Lux"
    },
    description: {
      en: "Elegant wedding venue in Struga offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Strugë që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Струга која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Struga'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Struga",
    capacity: 350,
    address: "Selo Veleshta, Struga",
    image: "https://i.imgur.com/ALNuHvA.jpeg",
    gallery: [
      "https://i.imgur.com/ALNuHvA.jpeg",
      "https://i.imgur.com/VEZm2IM.jpeg",
      "https://i.imgur.com/UGrJ6GG.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 870 555",
    email: "info@luxstruga.mk",
    lat: 41.105,
    lng: 20.743
  },
  {
    id: "royal-park-strumica",
    name: {
      en: "Royal Park",
      sq: "Royal Park",
      mk: "Ројал Парк",
      tr: "Royal Park"
    },
    description: {
      en: "Royal Park is a premier wedding and event venue in Strumica, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
      sq: "Royal Park është një vend i shquar për dasma dhe ngjarje në Strumicë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
      mk: "Ројал Парк е водечка свадбена и настанска сала во Струмица, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
      tr: "Royal Park, Strumica'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
    },
    city: "Strumica",
    capacity: 300,
    address: "Industriska zona Sever b.b., Strumica 2400, North Macedonia",
    image: "https://i.imgur.com/OMnMJ8P.jpeg",
    gallery: [
      "https://i.imgur.com/OMnMJ8P.jpeg",
      "https://i.imgur.com/aAEfbH0.jpeg",
      "https://i.imgur.com/klbprSR.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 71 214 945",
    email: "napoleon.strumica@yahoo.com",
    lat: 41.440,
    lng: 22.640
  },
  {
    id: "restaurant-sydney-gostivar",
    name: {
      en: "Restaurant Sydney",
      sq: "Restorant Sydney",
      mk: "Ресторант Сиднеј",
      tr: "Restoran Sydney"
    },
    description: {
      en: "Modern wedding venue in Gostivar offering elegant interiors and spacious banquet facilities.",
      sq: "Ambient modern për dasma në Gostivar që ofron enterier elegant dhe hapësira të gjera për bankete.",
      mk: "Модерна свадбена сала во Гостивар која нуди елегантен ентериер и пространи банкетски капацитети.",
      tr: "Gostivar'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Gostivar",
    capacity: 350,
    address: "Lagja Mllaki, Debresh, Gostivar",
    image: "https://i.imgur.com/jWiFEjn.jpeg",
    gallery: [
      "https://i.imgur.com/jWiFEjn.jpeg",
      "https://i.imgur.com/SiQZpXd.jpeg",
      "https://i.imgur.com/Vxrq4qP.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 71 818 777",
    email: "info@restaurantsydney.mk",
    lat: 41.792,
    lng: 20.926
  },
  {
    id: "restorant-shqiponja-kerçovë",
    name: {
      en: "Restorant Shqiponja",
      sq: "Restorant Shqiponja",
      mk: "Ресторант Шипонија",
      tr: "Restoran Shqiponja"
    },
    description: {
      en: "Elegant wedding venue in Kërçovë offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Kërçovë që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Керчова која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Kërçovë'de modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Kicevo",
    capacity: 350,
    address: "Arangel, Kërçovë",
    image: "https://i.imgur.com/LSD239V.jpeg",
    gallery: [
      "https://i.imgur.com/LSD239V.jpeg",
      "https://i.imgur.com/wUgat7J.jpeg",
      "https://i.imgur.com/PFZPgu2.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 750 200",
    email: "info@shqiponja.mk",
    lat: 41.538,
    lng: 20.878
  },
  {
    id: "new-palace-kumanovo",
    name: {
      en: "New Palace",
      sq: "New Palace",
      mk: "Нови Палас",
      tr: "New Palace"
    },
    description: {
      en: "New Palace is a premier wedding and event venue in Kumanovo, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
      sq: "New Palace është një vend i shquar për dasma dhe ngjarje në Kumanovë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
      mk: "New Palace е водечка свадбена и настанска сала во Куманово, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
      tr: "New Palace, Kumanova'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
    },
    city: "Kumanovo",
    capacity: 500,
    address: "Kumanovo, North Macedonia",
    image: "https://i.imgur.com/CTm1GyL.jpeg",
    gallery: [
      "https://i.imgur.com/CTm1GyL.jpeg",
      "https://i.imgur.com/UZ81uZ9.jpeg",
      "https://i.imgur.com/yGpNAhe.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 72 616 311",
    email: "info@newpalace.mk",
    lat: 42.133,
    lng: 21.717
  },
  {
    id: "restaurant-blero-kumanovo",
    name: { en: "Restaurant Blero", sq: "Restorant Blero", mk: "Ресторант Блеро", tr: "Restoran Blero" },
    description: { en: "Restaurant Blero is a welcoming venue in Kumanovo, offering cozy interiors and a warm atmosphere, perfect for family gatherings and events.", sq: "Restoranti Blero është një vend mikpritës në Kumanovë, që ofron interior të rehatshëm dhe atmosferë të ngrohtë, perfekt për takime familjare dhe evente.", mk: "Ресторант Блеро е пријатен простор во Куманово, со удобен ентериер и топла атмосфера, совршен за семејни дружби и настани.", tr: "Restoran Blero, Kumanova’da sıcak bir atmosfer ve rahat iç mekan sunan dostane bir mekandır; aile toplantıları ve etkinlikler için idealdir." },
    city: "Kumanovo",
    capacity: 200,
    address: "Otlja 1315, Kumanovë, North Macedonia",
    image: "https://i.imgur.com/yMryDGq.jpeg",
    gallery: ["https://i.imgur.com/yMryDGq.jpeg","https://i.imgur.com/TWa8npn.jpeg","https://i.imgur.com/YOu7Zx4.jpeg"],
    category: "Wedding Hall",
    phone: "Unknown",
    email: "info@restoranblero.mk",
    lat: 42.13899,
    lng: 21.59628
  },
  {
    id: "restorant-dardania-kicevo",
    name: {
      en: "Restorant Dardania",
      sq: "Restorant Dardania",
      mk: "Ресторант Дарданија",
      tr: "Restoran Dardania"
    },
    description: {
      en: "Elegant wedding venue in Kičevo offering modern interiors and spacious banquet facilities.",
      sq: "Ambient elegant për dasma në Kičevo që ofron enterier modern dhe hapësira të gjera për bankete.",
      mk: "Елегантна свадбена сала во Кичево која нуди модерен ентериер и пространи банкетски капацитети.",
      tr: "Kičevo'da modern iç mekanlar ve geniş banket salonları sunan şık bir düğün mekanı."
    },
    city: "Kicevo",
    capacity: 350,
    address: "Nad Pashino 39, Kičevo",
    image: "https://i.imgur.com/h7ywZ4t.jpeg",
    gallery: [
      "https://i.imgur.com/h7ywZ4t.jpeg",
      "https://i.imgur.com/INB5gho.jpeg",
      "https://i.imgur.com/KQ4KgDE.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 78 328 296",
    email: "info@dardaniabalkan.mk",
    lat: 41.5131,
    lng: 20.9478
  },
  {
    id: "golden-palace-kumanovo",
    name: {
      en: "Golden Palace",
      sq: "Golden Palace",
      mk: "Голден Палас",
      tr: "Golden Palace"
    },
    description: {
      en: "Golden Palace is a premier wedding and event venue in Kumanovo, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
      sq: "Golden Palace është një vend i shquar për dasma dhe ngjarje në Kumanovë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
      mk: "Golden Palace е водечка свадбена и настанска сала во Куманово, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
      tr: "Golden Palace, Kumanova'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
    },
    city: "Kumanovo",
    capacity: 400,
    address: "Industriska zona 10-v, Kumanovo 1300, North Macedonia",
    image: "https://i.imgur.com/AB7Jome.jpeg",
    gallery: [
      "https://i.imgur.com/AB7Jome.jpeg",
      "https://i.imgur.com/JK3yHVd.jpeg",
      "https://i.imgur.com/j7htL77.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 71 665 362",
    email: "info@goldenpalace.mk",
    lat: 42.124,
    lng: 21.721
  },
  {
    id: "vila-jovana-prilep",
    name: {
      en: "Vila Jovana",
      sq: "Vila Jovana",
      mk: "Вила Јована",
      tr: "Vila Jovana"
    },
    description: {
      en: "Vila Jovana is a charming wedding and event venue in Prilep, offering rustic elegance, personalized service, and a picturesque setting for various celebrations.",
      sq: "Vila Jovana është një vend i shquar për dasma dhe ngjarje në Prilep, duke ofruar elegancë rustike, shërbim të personalizuar dhe një mjedis piktoresk për festa të ndryshme.",
      mk: "Вила Јована е шармантна свадбена и настанска сала во Прилеп, која нуди рустичен елеганција, персонализирана услуга и живописна околина за различни прослави.",
      tr: "Vila Jovana, Prilep'te rustik zarafet, kişiye özel hizmet ve çeşitli kutlamalar için pitoresk bir ortam sunan şirin bir düğün ve etkinlik mekanıdır."
    },
    city: "Prilep",
    capacity: 200,
    address: "Prilep, North Macedonia",
    image: "https://i.imgur.com/VeJUYCM.jpeg",
    gallery: [
      "https://i.imgur.com/VeJUYCM.jpeg",
      "https://i.imgur.com/Xd4YPI8.jpeg",
      "https://i.imgur.com/3ln25EX.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 70 318 060",
    email: "info@vilajovana.mk",
    lat: 41.345,
    lng: 21.554
  },
  {
    id: "miss-stone-strumica",
    name: {
      en: "Miss Stone",
      sq: "Miss Stone",
      mk: "Мис Стоун",
      tr: "Miss Stone"
    },
    description: {
      en: "Miss Stone is a modern wedding and event venue in Strumica, offering stylish interiors, elegant decor, and professional lighting for various celebrations.",
      sq: "Miss Stone është një vend modern për dasma dhe ngjarje në Strumicë, duke ofruar ambiente stilistike, dekor elegant dhe ndriçim profesional për festa të ndryshme.",
      mk: "Мис Стоун е модерен свадбен и настански простор во Струмица, кој нуди стилски ентериери, елегантен декор и професионално осветлување за различни прослави.",
      tr: "Miss Stone, Strumica'da şık iç mekanlar, zarif dekor ve profesyonel aydınlatma sunan modern bir düğün ve etkinlik mekanıdır."
    },
    city: "Strumica",
    capacity: 200,
    address: "Regionalen Pat Strumica – Radovis, 2400 Strumica, North Macedonia",
    image: "https://i.imgur.com/cZxplbF.jpeg",
    gallery: [
      "https://i.imgur.com/cZxplbF.jpeg",
      "https://i.imgur.com/wxrDZ3U.jpeg",
      "https://i.imgur.com/Oi7MTpl.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 78 495 360",
    email: "info@missstone.mk",
    lat: 41.438,
    lng: 22.640
  },
 
  {
    id: "exclusive-bastion-kumanovo",
    name: {
      en: "Exclusive Bastion",
      sq: "Exclusive Bastion",
      mk: "Ексклузив Бастион",
      tr: "Exclusive Bastion"
    },
    description: {
      en: "Ekslusiv Bastion is a premier wedding and event venue in Kumanovo, offering elegant decor, exceptional service, and a versatile space for various celebrations.",
      sq: "Ekskluziv Bastion është një vend i shquar për dasma dhe ngjarje në Kumanovë, duke ofruar dekor elegant, shërbim të jashtëzakonshëm dhe një hapësirë të shumëllojshme për festa të ndryshme.",
      mk: "Ексклузив Бастион е водечка свадбена и настанска сала во Куманово, која нуди елегантен декор, исклучителна услуга и разновиден простор за различни прослави.",
      tr: "Ekslusiv Bastion, Kumanova'da şık dekor, olağanüstü hizmet ve çeşitli kutlamalar için çok yönlü bir alan sunan önde gelen bir düğün ve etkinlik mekanıdır."
    },
    city: "Kumanovo",
    capacity: 400,
    address: "Biljanovska 43, Kumanovo 1300, North Macedonia",
    image: "https://i.imgur.com/piNI8Pw.jpeg",
    gallery: [
      "https://i.imgur.com/piNI8Pw.jpeg",
      "https://i.imgur.com/yVKUzAe.jpeg",
      "https://i.imgur.com/gk3ScbQ.jpeg"
    ],
    category: "Wedding Hall",
    phone: "+389 31 411 141",
    email: "exclusivebastion@gmail.com",
    lat: 42.12385,
    lng: 21.72197
  }
]

// Sample services data
const servicesData = [
   {
    id: "studio-pranvera-tetovo",
    name: {
      en: "Studio Pranvera",
      sq: "Studio Pranvera",
      mk: "Студио Пранвера",
      tr: "Studio Pranvera"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/XKeJpQE.jpeg",
    phone: "+389 70 808 938",
    email: "info.studiopranvera@gmail.com"
  },
  {
    id: "studio-minolta-tetovo",
    name: {
      en: "Studio Minolta",
      sq: "Studio Minolta",
      mk: "Студио Минолта",
      tr: "Studio Minolta"
    },
    city: "Tetovo",
    category: "Photographer",
    image: "https://i.imgur.com/Oo3uRw8.jpeg",
    phone: "+389 70 45 46 47",
    email: "N/A",
    address: "St. Ilindenska 148, Tetovo - Macedonia"
  },
  {
    id: "sweet-cakes",
    name: {
      en: "Sweet Dreams Cakes",
      sq: "Torta Sweet Dreams",
      mk: "Слатки Соништа Торти",
      tr: "Tatlı Rüyalar Pastaları",
    },
    city: "Ohrid",
    category: "Cake",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon!",
    email: "Coming Soon!",
  },
  {
    id: "studio-besa-tetovo",
    name: {
      en: "Studio Besa",
      sq: "Salloni Besa",
      mk: "Студио Беса",
      tr: "Studio Besa"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/cM3gXOf.png",
    phone: "+389 71 231 000",
    email: "N/A" 
  },
  {
    id: "arsae-events-tetovo",
    name: {
      en: "Arsa Events",
      sq: "Arsa Events",
      mk: "Арса Ивентс",
      tr: "Arsa Events"
    },
    city: "Tetovo",
    category: "Decorator",
    image: "https://i.imgur.com/Xhx2U68.jpeg",
    phone: "+389 70 631 658",
    email: "N/A"
  },
  {
    id: "studio-anisa-tetovo",
    name: {
      en: "Studio Anisa",
      sq: "Studio Anisa",
      mk: "Студио Аниса",
      tr: "Studio Anisa"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/ZU49JMe.jpeg",
    phone: "+389 70 341 500",
    email: "N/A"
  },
  {
    id: "glam-event-tetovo",
    name: {
      en: "Glam Event",
      sq: "Glam Event",
      mk: "Глам Ивент",
      tr: "Glam Event"
    },
    city: "Tetovo",
    category: "Decorator",
    image: "https://i.imgur.com/RMgFkTr.jpeg",
    phone: "N/A",
    email: "N/A"
  },
  {
    id: "floral-dreams",
    name: {
      en: "Floral Dreams",
      sq: "Ëndrra Lulesh",
      mk: "Цветни Соништа",
      tr: "Çiçek Rüyaları",
    },
    city: "Skopje",
    category: "Florist",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon",
    email: "Coming Soon",
  },
  {
    id: "ms-beauty-center-tetovo",
    name: {
      en: "MS Beauty Center",
      sq: "MS Beauty Center",
      mk: "МС Бјути Центар",
      tr: "MS Beauty Center"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/y0f8dCA.jpeg",
    phone: "+389 71 713 074",
    email: "N/A",
    address: "Gjoce Stojcevski 52, Tetovo"
  },
  {
    id: "dv-photo-studio-tetovo",
    name: {
      en: "DV Photo Studio",
      sq: "DV Photo Studio",
      mk: "DV Фото Студио",
      tr: "DV Photo Studio"
    },
    city: "Tetovo",
    category: "Photographer",
    image: "https://i.imgur.com/vfkcnSf.jpeg",
    phone: "N/A",
    email: "N/A"
  },
  {
    id: "adea-events-tetovo",
    name: {
      en: "Adea Events",
      sq: "Adea Events",
      mk: "Адеа Ивентс",
      tr: "Adea Events"
    },
    city: "Tetovo",
    category: "Decorator",
    image: "https://i.imgur.com/BctD34l.jpeg",
    phone: "N/A",
    email: "N/A"
  },

  {
    id: "studio-anida-tetovo",
    name: {
      en: "Studio Anida",
      sq: "Studio Anida",
      mk: "Студио Анида",
      tr: "Studio Anida"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://cdn-idhah.nitrocdn.com/vlZllcheQfWdjjXMxTRFMqrZsPmjBtpg/assets/images/optimized/rev-a73952b/studioanida.mk/wp-content/uploads/2022/03/Ilioska-2-scaled.jpg",
    phone: "+389 71 435 149",
    email: "info@studioanida.mk"
  },
  {
    id: "fortesa-beaute",
    name: {
      en: "Fortesa Beaute",
      sq: "Fortesa Beaute",
      mk: "Фортеса Боте",
      tr: "Fortesa Beaute"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/6c1kZwJ.jpeg",
    phone: "+389 71 877 716",
    email: "N/A"
  },
  {
    id: "studio-nikoni-tetovo",
    name: {
      en: "Studio Nikoni",
      sq: "Studio Nikoni",
      mk: "Студио Никони",
      tr: "Studio Nikoni"
    },
    city: "Tetovo",
    category: "Photographer",
    image: "https://i.imgur.com/PVAhvmt.jpeg",
    phone: "+389 71 527 892",
    email: "studionikoni@gmail.com"
  },
  {
    id: "salon-mimi-tetovo",
    name: {
      en: "Salon Mimi",
      sq: "Salon Mimi",
      mk: "Салон Мими",
      tr: "Salon Mimi"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/ImE8lrq.jpeg",
    phone: "N/A",
    email: "N/A"
  },
  {
    id: "dj-beats",
    name: {
      en: "DJ Beats Entertainment",
      sq: "DJ Beats Argëtim",
      mk: "DJ Beats Забава",
      tr: "DJ Beats Eğlence",
    },
    city: "Skopje",
    category: "Music",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon!",
    email: "Coming Soon!",
  },
  {
    id: "lola-decor-tetovo",
    name: {
      en: "Lola Decor",
      sq: "Lola Decor",
      mk: "Лола Декор",
      tr: "Lola Decor"
    },
    city: "Tetovo",
    category: "Decorator",
    image: "https://i.imgur.com/rFDBwi9.jpeg",
    phone: "N/A",
    email: "N/A"
  },
  {
    id: "duo-beauty-tetovo",
    name: {
      en: "Duo Beauty",
      sq: "Duo Beauty",
      mk: "Дуо Бјути",
      tr: "Duo Beauty"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/VuAeLDK.jpeg",
    phone: "+389 76 203 871",
    email: "N/A"
  },
    {
    id: "makeup-artist",
    name: {
      en: "Glamour Makeup Studio",
      sq: "Studio Glamour",
      mk: "Гламур Шминка Студио",
      tr: "Glamour Makyaj Stüdyosu",
    },
    city: "Gostivar",
    category: "Salon",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon!",
    email: "Coming Soon!",
  },
  {
    id: "foto-daci-tetovo",
    name: {
      en: "Foto Daci",
      sq: "Foto Daci",
      mk: "Фото Дачи",
      tr: "Foto Daci"
    },
    city: "Tetovo",
    category: "Photographer",
    image: "https://i.imgur.com/1yTMQYr.jpeg",
    phone: "+389 71 232 098",
    email: "fotodaci@gmail.com",
    address: "Ilindenska 85, Tetovo, North Macedonia",
    website: "https://pixmig.com"
  },
  {
    id: "miranda-hair-salon-tetovo",
    name: {
      en: "Miranda Hair Salon",
      sq: "Miranda Hair Salon",
      mk: "Миранда Хеир Салон",
      tr: "Miranda Hair Salon"
    },
    city: "Tetovo",
    category: "Salon",
    image: "https://i.imgur.com/rPCUgWx.jpeg",
    phone: "+389 70 626 897",
    email: "N/A"
  },
  {
    id: "bridal-boutique",
    name: {
      en: "Bridal Boutique",
      sq: "Butiku i Nuses",
      mk: "Булчински Бутик",
      tr: "Gelin Butiği",
    },
    city: "Skopje",
    category: "Dress",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon!",
    email: "Coming Soon!",
  },

  {
    id: "elegant-decor",
    name: {
      en: "Elegant Decorations",
      sq: "Dekorime Elegante",
      mk: "Елегантни Декорации",
      tr: "Zarif Dekorasyonlar",
    },
    city: "Bitola",
    category: "Decorator",
    image: "https://i.imgur.com/x4dL0xD.png",
    phone: "Coming Soon!",
    email: "Coming Soon!",
  }
]

window.venuesData = venuesData
window.servicesData = servicesData
