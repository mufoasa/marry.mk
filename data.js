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
  capacity: 1000+,
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
  id: "hotel-ambasador-ohrid",
  name: {
    en: "Hotel Ambasador",
    sq: "Hotel Ambasador",
    mk: "Хотел Амбасадор",
    tr: "Hotel Ambasador"
  },
  description: {
    en: "Hotel Ambasador in Ohrid offers a modern and attractive venue for weddings, celebrations, and events, featuring comfortable rooms, a restaurant, and conference facilities, situated 5 km from the town center and 2 km from Ohrid Airport.",
    sq: "Hotel Ambasador në Ohër ofron një vend modern dhe tërheqës për dasma, festime dhe ngjarje, me dhoma komode, restorant dhe facilitete konferencash, i vendosur 5 km nga qendra e qytetit dhe 2 km nga Aeroporti i Ohrit.",
    mk: "Хотел Амбасадор во Охрид нуди модерен и атрактивен простор за свадби, прослави и настани, со удобни соби, ресторан и конференциски капацитети, сместен 5 км од центарот на градот и 2 км од Аеродромот Охрид.",
    tr: "Ohrid'deki Hotel Ambasador, modern ve çekici bir düğün, kutlama ve etkinlik mekanı sunmaktadır; konforlu odalar, restoran ve konferans olanakları ile şehir merkezine 5 km ve Ohrid Havaalanı'na 2 km mesafededir."
  },
  city: "Ohrid",
  capacity: 150,
  address: "Podmolje, Ohrid, North Macedonia",
  image: "https://i.imgur.com/x4dL0xD.png",
  gallery: [
    "https://www.hotelambasador.mk/weddings?pgid=m3eah4sz-14cb8ac4-3ae0-44cc-9d52-0070d81f6248",
    "https://www.hotelambasador.mk/weddings?pgid=m3eah4sz-66f2950e-a3d8-4e05-acdc-2dcaf9115ea4",
    "https://www.hotelambasador.mk/weddings?pgid=m3eah4sz-d95265e0-a634-46b0-8655-667054f3cb58",
    "https://www.hotelambasador.mk/weddings?pgid=m3eah4sz-1b2c33d0-5e77-45bf-9c8f-272246440f1f"
  ],
  category: "Wedding Hall",
  phone: "+389 46 282 020",
  email: "hotelambasador@t.mk",
  website: "https://www.hotelambasador.mk",
  lat: 41.164193,
  lng: 20.751313
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
  id: "hotel-kocarev-ohrid",
  name: {
    en: "Hotel Kocarev",
    sq: "Hotel Kocarev",
    mk: "Хотел Кочарев",
    tr: "Hotel Kocarev"
  },
  description: {
    en: "Hotel Kocarev in Ohrid offers a comfortable and modern venue for weddings, celebrations, and events with elegant rooms, a seasonal outdoor pool, and a restaurant serving traditional and international cuisine.",
    sq: "Hotel Kocarev në Ohër ofron një vend të rehatshëm dhe modern për dasma, festime dhe ngjarje me dhoma elegante, pishinë të jashtme sezonal dhe restorant që ofron kuzhinë tradicionale dhe ndërkombëtare.",
    mk: "Хотел Кочарев во Охрид нуди удобен и модерен простор за свадби, прослави и настани со елегантни соби, сезонски отворен базен и ресторан кој служи традиционална и интернационална кујна.",
    tr: "Ohrid'deki Hotel Kocarev, zarif odalar, mevsimlik açık havuz ve geleneksel ve uluslararası mutfak sunan restoran ile düğünler, kutlamalar ve etkinlikler için konforlu ve modern bir mekan sunar."
  },
  city: "Ohrid",
  capacity: 340,
  address: "Sv. Erazmo bb, Ohrid 6000, North Macedonia",
  image: "http://hotelkocarev.mk/wp-content/uploads/2012/07/114829661.jpg",
  gallery: [
    "http://hotelkocarev.mk/wp-content/uploads/2012/07/114829661.jpg",
    "http://hotelkocarev.mk/wp-content/uploads/2012/07/114830261.jpg"
  ],
  category: "Hotel",
  phone: "+389 46 260 004",
  email: "hotelkocarev@gmail.com",
  lat: 41.108,
  lng: 20.798,
  website: "http://hotelkocarev.mk"
},
{
  id: "balux-bitola",
  name: {
    en: "Balux",
    sq: "Balux",
    mk: "Балукс",
    tr: "Balux"
  },
  description: {
    en: "Balux in Bitola is an elegant venue offering a modern and stylish space perfect for weddings, celebrations, and special events.",
    sq: "Balux në Manastir është një vend elegant që ofron hapësirë moderne dhe stil, ideale për dasma, festime dhe ngjarje të veçanta.",
    mk: "Балукс во Битола е елегантен простор кој нуди модерен и стилски амбиент, совршен за свадби, прослави и специјални настани.",
    tr: "Bitola’daki Balux, düğünler, kutlamalar ve özel etkinlikler için modern ve şık bir mekan sunar."
  },
  city: "Bitola",
  capacity: 300,
  address: "Улица Шералти бб, Bitola, North Macedonia",
  image: "https://i.imgur.com/AEacu5K.jpeg",
  gallery: [
    "https://i.imgur.com/AEacu5K.jpeg",
    "https://i.imgur.com/5dJiHdf.jpeg",
    "https://i.imgur.com/04E2GZt.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 75 237 556",
  email: "bkmilenium@yahoo.com",
  lat: 41.031,
  lng: 21.332
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
  id: "despinas-wedding-venue-ohrid",
  name: {
    en: "Despinas Wedding Venue",
    sq: "Despinas Wedding Venue",
    mk: "Свадбена Сала Деспинас",
    tr: "Despinas Wedding Venue"
  },
  description: {
    en: "Despinas Wedding Venue in Ohrid offers an elegant and cozy venue for weddings, celebrations, and special events, with attentive service and a welcoming atmosphere.",
    sq: "Despinas Wedding Venue në Ohër ofron një vend elegant dhe të rehatshëm për dasma, festime dhe ngjarje të veçanta, me shërbim të kujdesshëm dhe atmosferë mikpritëse.",
    mk: "Свадбена Сала Деспинас во Охрид нуди елегантен и комфорен простор за свадби, прослави и специјални настани, со внимателна услуга и пријатна атмосфера.",
    tr: "Ohrid'deki Despinas Wedding Venue, düğünler, kutlamalar ve özel etkinlikler için şık ve samimi bir mekan sunar; özenli hizmet ve sıcak bir atmosfer ile."
  },
  city: "Ohrid",
  capacity: 180,
  address: "Naum Ohridski 10v, Ohrid, North Macedonia",
  image: "https://i.imgur.com/H7VuR16.jpeg",
  gallery: [
    "https://i.imgur.com/H7VuR16.jpeg",
    "https://i.imgur.com/qjb34i8.jpeg",
    "https://i.imgur.com/8Tnipkx.jpeg",
    "https://i.imgur.com/oMIBxMc.jpeg",
    "https://i.imgur.com/qCaJQvM.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 74 233 898",
  email: "RestoranDespina@yahoo.com",
  lat: 41.114,
  lng: 20.797
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
  id: "restaurant-villa-molika-bitola",
  name: {
    en: "Restaurant Villa Molika",
    sq: "Restoranti Villa Molika",
    mk: "Ресторан Вила Молика",
    tr: "Restoran Villa Molika"
  },
  description: {
    en: "Restaurant Villa Molika in Bitola offers a cozy and elegant atmosphere surrounded by nature, ideal for weddings, family gatherings, and special celebrations.",
    sq: "Restoranti Villa Molika në Manastir ofron një atmosferë të ngrohtë dhe elegante, e rrethuar nga natyra — ideale për dasma, mbledhje familjare dhe festa të veçanta.",
    mk: "Ресторан Вила Молика во Битола нуди пријатна и елегантна атмосфера опкружена со природа, идеална за свадби, семејни собири и специјални прослави.",
    tr: "Bitola’daki Villa Molika Restoran, doğayla çevrili samimi ve zarif atmosferiyle düğünler, aile toplantıları ve özel kutlamalar için idealdir."
  },
  city: "Bitola",
  capacity: 250,
  address: "Bitola, North Macedonia",
  image: "https://i.imgur.com/bgwTj1i.jpeg",
  gallery: [
    "https://i.imgur.com/bgwTj1i.jpeg",
    "https://i.imgur.com/HctOlS8.jpeg",
    "https://i.imgur.com/z46M6SP.jpeg",
    "https://i.imgur.com/jRBUOxg.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 75 943 624",
  email: "info@villamolika.mk",
  lat: 41.031,
  lng: 21.332,
  instagram: "@villamolika",
  website: "https://villamolika.mk"
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
  id: "hotel-lav-kumanovo",
  name: {
    en: "Hotel Lav",
    sq: "Hotel Lav",
    mk: "Хотел Лав",
    tr: "Hotel Lav"
  },
  description: {
    en: "Hotel Lav in Kumanovo offers comfortable accommodations with amenities such as free Wi-Fi, a swimming pool, and a bar/lounge. It's ideal for travelers and small celebrations.",
    sq: "Hotel Lav në Kumanovë ofron akomodim komod me kushte si Wi-Fi falas, pishinë dhe bar/lounge. Është i përshtatshëm për udhëtarë dhe festa të vogla.",
    mk: "Хотел Лав во Куманово нуди удобни сместувачки капацитети со услуги како бесплатен Wi-Fi, базен и бар/лаунџ. Идеален е за патници и мали прослави.",
    tr: "Kumanovo'daki Hotel Lav, ücretsiz Wi-Fi, yüzme havuzu ve bar/lounge gibi olanaklarla konforlu konaklama sunar. Seyahat edenler ve küçük kutlamalar için idealdir."
  },
  city: "Kumanovo",
  capacity: 150,
  address: "Železnička 13, Kumanovo, North Macedonia",
  image: "https://i.imgur.com/wcyt23l.jpeg",
  gallery: [
    "https://i.imgur.com/wcyt23l.jpeg",
    "https://i.imgur.com/PMArEaM.jpeg",
    "https://i.imgur.com/49Ijm35.jpeg"
  ],
  category: "Hotel",
  phone: "+389 31 413 999",
  email: "hotel-lav@kumanovo.mk",
  website: "https://zk.mk/hotel-lav?lang=en",
  lat: 42.1361,
  lng: 21.7172
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
  id: "bella-dona-kumanovo",
  name: {
    en: "Bella Dona",
    sq: "Bella Dona",
    mk: "Бела Дона",
    tr: "Bella Dona"
  },
  description: {
    en: "Bella Dona in Kumanovo is a stylish venue suitable for weddings, celebrations, and private events, offering elegant decor and attentive service.",
    sq: "Bella Dona në Kumanovë është një vend i stilizuar i përshtatshëm për dasma, festime dhe ngjarje private, duke ofruar dekor elegant dhe shërbim të kujdesshëm.",
    mk: "Бела Дона во Куманово е стилски простор погоден за свадби, прослави и приватни настани, нудејќи елегантен декор и внимателна услуга.",
    tr: "Kumanovo'daki Bella Dona, düğünler, kutlamalar ve özel etkinlikler için şık bir mekandır; zarif dekor ve özenli hizmet sunmaktadır."
  },
  city: "Kumanovo",
  capacity: 150,
  address: "Varazdinska, Kumanovo, North Macedonia",
  image: "https://i.imgur.com/mEtWJE5.jpeg",
  gallery: [
    "https://i.imgur.com/mEtWJE5.jpeg",
    "https://i.imgur.com/sPQ7xlI.jpeg",
    "https://i.imgur.com/21vMRJC.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 78 355 560",
  email: "",
  lat: 42.134,
  lng: 21.727
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
  id: "baron-summer-garden-bitola",
  name: {
    en: "Baron Summer Garden",
    sq: "Baron Summer Garden",
    mk: "Барон Саммер Гарден",
    tr: "Baron Summer Garden"
  },
  description: {
    en: "Baron Summer Garden in Bitola offers a beautiful outdoor and indoor space perfect for weddings, parties, and special events with modern decor and a stylish atmosphere.",
    sq: "Baron Summer Garden në Manastir ofron hapësira të bukura të brendshme dhe të jashtme, ideale për dasma, festa dhe ngjarje të veçanta me dekor modern dhe atmosferë të stilizuar.",
    mk: "Барон Саммер Гарден во Битола нуди прекрасен отворен и затворен простор, совршен за свадби, забави и специјални настани со модерен декор и стилска атмосфера.",
    tr: "Bitola’daki Baron Summer Garden, modern dekor ve şık atmosferi ile düğünler, partiler ve özel etkinlikler için mükemmel iç ve dış mekan sunar."
  },
  city: "Bitola",
  capacity: 350,
  address: "Широк Сокак ББ, Олимписки Базен, Bitola, North Macedonia",
  image: "https://i.imgur.com/uaT95YO.jpeg",
  gallery: [
    "https://i.imgur.com/uaT95YO.jpeg",
    "https://i.imgur.com/52dbgIo.jpeg",
    "https://i.imgur.com/MQiRHsv.jpeg",
    "https://i.imgur.com/sI7eMqd.jpeg",
    "https://i.imgur.com/JUuZrBS.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 891 293",
  email: "info@baronsummergarden.mk",
  lat: 41.033,
  lng: 21.339
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
  id: "hotel-epinal-skopje",
  name: {
    en: "Hotel Epinal",
    sq: "Hotel Epinal",
    mk: "Хотел Епинал",
    tr: "Hotel Epinal"
  },
  description: {
    en: "Hotel Epinal in Skopje offers a luxurious wedding and event venue with elegant interiors, premium catering, and professional service for unforgettable celebrations.",
    sq: "Hotel Epinal në Shkup ofron një vend luksoz për dasma dhe ngjarje me brendësi elegante, catering premium dhe shërbim profesional për festime të paharrueshme.",
    mk: "Хотел Епинал во Скопје нуди луксузна свадбена и настанска сала со елегантен ентериер, премиум кетеринг и професионална услуга за незаборавни прослави.",
    tr: "Üsküp'teki Hotel Epinal, zarif iç mekanları, premium ikramları ve profesyonel hizmetiyle unutulmaz düğün ve etkinlikler için lüks bir mekan sunmaktadır."
  },
  city: "Skopje",
  capacity: 350,
  address: "Skopje, North Macedonia",
  image: "https://www.hotelepinal.com/assets/images/wedding-hall/4.jpg",
  gallery: [
    "https://www.hotelepinal.com/assets/images/wedding-hall/4.jpg",
    "https://www.hotelepinal.com/assets/wedding-hall-hero-3dCqt2ik.jpg",
    "https://www.hotelepinal.com/assets/images/wedding-hall/1.jpg",
    "https://www.hotelepinal.com/assets/images/wedding-hall/3.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 2 123 4567",
  email: "info@hotelepinal.com",
  lat: 41.9981,
  lng: 21.4254,
  instagram: "@hotelepinal",
  website: "https://www.hotelepinal.com"
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
  id: "restaurant-centar-prilep",
  name: {
    en: "Restaurant Centar",
    sq: "Restoranti Centar",
    mk: "Ресторан Центар",
    tr: "Restoran Centar"
  },
  description: {
    en: "Restaurant Centar in Prilep offers a modern and elegant space for weddings, celebrations, and special events with exquisite cuisine and professional service.",
    sq: "Restoranti Centar në Prilep ofron një hapësirë moderne dhe elegante për dasma, festime dhe ngjarje të veçanta me kuzhinë të shkëlqyer dhe shërbim profesional.",
    mk: "Ресторан Центар во Прилеп нуди модерен и елегантен простор за свадби, прослави и специјални настани со извонредна кујна и професионална услуга.",
    tr: "Prilep'teki Restaurant Centar, modern ve şık bir mekan sunar; düğünler, kutlamalar ve özel etkinlikler için lezzetli mutfak ve profesyonel hizmet ile ideal."
  },
  city: "Prilep",
  capacity: 200,
  address: "Маршал Тито 37, Prilep, North Macedonia",
  image: "https://i.imgur.com/X5iHuqW.jpeg",
  gallery: [
    "https://i.imgur.com/X5iHuqW.jpeg",
    "https://i.imgur.com/P991w97.jpeg",
    "https://i.imgur.com/BGn9oLg.jpeg",
    "https://i.imgur.com/nP9fQLr.jpeg",
    "https://i.imgur.com/dZGkWVW.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 75 123 456",
  email: "info@restaurantcentar.mk",
  lat: 41.349,
  lng: 21.554
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
  id: "la-casa-grande-exclusive-prilep",
  name: {
    en: "La Casa Grande Exclusive",
    sq: "La Casa Grande Exclusive",
    mk: "La Casa Grande Exclusive",
    tr: "La Casa Grande Exclusive"
  },
  description: {
    en: "La Casa Grande Exclusive in Prilep offers a luxurious and elegant venue for weddings, celebrations, and special events with stylish decor and top-tier service.",
    sq: "La Casa Grande Exclusive në Prilep ofron një vend luksoz dhe elegant për dasma, festime dhe ngjarje të veçanta me dekor stil dhe shërbim të shkëlqyer.",
    mk: "La Casa Grande Exclusive во Прилеп нуди луксузен и елегантен простор за свадби, прослави и специјални настани со стилски декор и врвна услуга.",
    tr: "Prilep'teki La Casa Grande Exclusive, şık dekor ve yüksek kaliteli hizmetle düğünler, kutlamalar ve özel etkinlikler için lüks ve zarif bir mekan sunar."
  },
  city: "Prilep",
  capacity: 300,
  address: "Ul. Aleksandar Makedonski, Prilep, North Macedonia",
  image: "https://i.imgur.com/x5UX9UH.jpeg",
  gallery: [
    "https://i.imgur.com/x5UX9UH.jpeg",
    "https://i.imgur.com/b84k6st.jpeg",
    "https://i.imgur.com/qSYN0cv.jpeg",
    "https://i.imgur.com/6Ougt01.jpeg",
    "https://i.imgur.com/qZqxIrQ.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 77 997 744",
  email: "info@lacasagrande.mk",
  lat: 41.347,
  lng: 21.555
},
  {
  id: "diamond-wedding-house-ilinden",
  name: {
    en: "Diamond Wedding House",
    sq: "Diamond Wedding House",
    mk: "Diamond Wedding House",
    tr: "Diamond Wedding House"
  },
  description: {
    en: "Your wedding story starts here 🤍. Diamond Wedding House in Ilinden offers elegant settings with a capacity for up to 550 guests and parking for 150 vehicles.",
    sq: "Historia juaj e dasmës fillon këtu 🤍. Diamond Wedding House në Ilinden ofron ambiente elegante me kapacitet deri në 550 mysafirë dhe parkim për 150 automjete.",
    mk: "Вашата свадбена приказна започнува тука 🤍. Diamond Wedding House во Илинден нуди елегантна атмосфера со капацитет до 550 гости и паркинг за 150 возила.",
    tr: "Düğün hikayeniz burada başlıyor 🤍. Ilinden'deki Diamond Wedding House, 550 konuğa kadar kapasite ve 150 araçlık otopark ile şık bir mekan sunuyor."
  },
  city: "Skopje",
  capacity: 550,
  address: "Ilinden, North Macedonia",
  image: "https://i.imgur.com/iYDNAZx.jpeg",
  gallery: [
    "https://i.imgur.com/iYDNAZx.jpeg",
    "https://i.imgur.com/oYOaObx.jpeg",
    "https://i.imgur.com/VBu1im3.jpeg",
    "https://i.imgur.com/xrTfsaB.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 76 212 992",
  email: "diamond.weddinghouse@gmail.com",
  lat: 41.995, 
  lng: 21.551
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
  id: "restoran-glamour-bitola",
  name: {
    en: "Restoran Glamour",
    sq: "Restoranti Glamour",
    mk: "Ресторан Гламур",
    tr: "Restoran Glamour"
  },
  description: {
    en: "Creating unforgettable experiences for every occasion. Modern design and exquisite flavors. Book your table or event now!",
    sq: "Krijojmë përvoja të paharrueshme për çdo rast. Dizajn modern dhe shije të shkëlqyera. Rezervoni tavolinën ose ngjarjen tuaj tani!",
    mk: "Создаваме незаборавни доживувања за секоја прилика. Модерен дизајн и извонредни вкусови. Резервирајте маса или настан веднаш!",
    tr: "Her özel durum için unutulmaz deneyimler yaratıyoruz. Modern tasarım ve mükemmel lezzetler. Masanızı veya etkinliğinizi şimdi rezerve edin!"
  },
  city: "Bitola",
  capacity: 150,
  address: "Glamour, Bitola, North Macedonia",
  image: "https://i.imgur.com/a9qXvAy.jpeg",
  gallery: [
    "https://i.imgur.com/a9qXvAy.jpeg",
    "https://i.imgur.com/m2LO2XS.jpeg",
    "https://i.imgur.com/8Z4XxWd.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 47 255 110",
  email: "glamurbk@yahoo.com",
  lat: 41.032,
  lng: 21.340,
  instagram: "@restaurantglamour.mk",
  website: "https://restaurantglamour.com"
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
  id: "palace-kumanovo",
  name: {
    en: "Palace",
    sq: "Palace",
    mk: "Палас",
    tr: "Palace"
  },
  description: {
    en: "Palace in Kumanovo offers a sophisticated venue for weddings, celebrations, and events with elegant interiors, attentive service, and a welcoming atmosphere.",
    sq: "Palace në Kumanovë ofron një vend të sofistikuar për dasma, festime dhe ngjarje me enterier elegant, shërbim të kujdesshëm dhe atmosferë mikpritëse.",
    mk: "Палас во Куманово нуди софистициран простор за свадби, прослави и настани со елегантен ентериер, внимателна услуга и пријатна атмосфера.",
    tr: "Kumanovo'daki Palace, düğünler, kutlamalar ve etkinlikler için zarif iç mekanlar, özenli hizmet ve sıcak bir atmosfer sunar."
  },
  city: "Kumanovo",
  capacity: 200,
  address: "Улица 1204, Kumanovo, North Macedonia",
  image: "https://i.imgur.com/NrlXHD0.jpeg",
  gallery: [
    "https://i.imgur.com/NrlXHD0.jpeg",
    "https://i.imgur.com/CcqVjSM.jpeg",
    "https://i.imgur.com/qXJ2RKB.jpeg",
    "https://i.imgur.com/Sig4Nrf.jpeg",
    "https://i.imgur.com/PPTx5Gf.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 78 441 780",
  email: "restoranpalace@yahoo.com",
  lat: 42.135,
  lng: 21.719
},
  {
  id: "etno-vila-sv-nikola-prilep",
  name: {
    en: "Etno-Vila Sv. Nikola",
    sq: "Etno-Vila Sv. Nikola",
    mk: "Етно-Вила Св. Никола",
    tr: "Etno-Vila Sv. Nikola"
  },
  description: {
    en: "Etno-Vila Sv. Nikola in Prilep offers a charming traditional-style venue, perfect for weddings, celebrations, and intimate gatherings, surrounded by a cozy and authentic atmosphere.",
    sq: "Etno-Vila Sv. Nikola në Prilep ofron një vend me stil tradicional, i përshtatshëm për dasma, festime dhe mbledhje intime, i rrethuar nga një atmosferë komode dhe autentike.",
    mk: "Етно-Вила Св. Никола во Прилеп нуди шармантен традиционален простор, идеален за свадби, прослави и интимни собири, опкружен со пријатна и автентична атмосфера.",
    tr: "Prilep'teki Etno-Vila Sv. Nikola, düğünler, kutlamalar ve samimi buluşmalar için rahat ve otantik bir atmosferle çevrili, geleneksel tarzda şirin bir mekan sunar."
  },
  city: "Prilep",
  capacity: 120,
  address: "41.391212724280344, 21.600760698494796, Prilep, North Macedonia",
  image: "https://i.imgur.com/OWq0ig3.jpeg",
  gallery: [
    "https://i.imgur.com/OWq0ig3.jpeg",
    "https://i.imgur.com/K8yzWgk.jpeg",
    "https://i.imgur.com/izrwgTy.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 78 407 041",
  email: "vlatkostojanoski80@gmail.com",
  lat: 41.391213,
  lng: 21.600761
},
  {
  id: "dvorec-restaurant-skopje",
  name: {
    en: "Dvorec Restaurant",
    sq: "Restoranti Dvorec",
    mk: "Ресторан Дворец",
    tr: "Dvorec Restoran"
  },
  description: {
    en: "Dvorec Restaurant in Skopje offers an elegant dining and event experience with modern decor, perfect for weddings, celebrations, and corporate events.",
    sq: "Restoranti Dvorec në Shkup ofron një përvojë elegante ngrënieje dhe ngjarjesh me dekor modern, i përshtatshëm për dasma, festime dhe ngjarje korporative.",
    mk: "Ресторан Дворец во Скопје нуди елегантно искуство во јадењето и настаните со модерен декор, идеално за свадби, прослави и корпоративни настани.",
    tr: "Skopje'deki Dvorec Restoran, modern dekor ile şık yemek ve etkinlik deneyimi sunar; düğünler, kutlamalar ve kurumsal etkinlikler için idealdir."
  },
  city: "Skopje",
  capacity: 300,
  address: "Skopje, North Macedonia",
  image: "https://i.imgur.com/fyuUXsH.jpeg",
  gallery: [
    "https://i.imgur.com/fyuUXsH.jpeg",
    "https://i.imgur.com/9Ep58kt.jpeg",
    "https://i.imgur.com/qFkKUEs.jpeg",
    "https://i.imgur.com/1VwzjA5.jpeg",
    "https://i.imgur.com/93xxIAN.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 70 123 789",
  email: "info@dvorec.mk",
  lat: 41.9981,
  lng: 21.4254
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
  id: "grand-remi-kumanovo",
  name: {
    en: "Grand Remi",
    sq: "Grand Remi",
    mk: "Гранд Реми",
    tr: "Grand Remi"
  },
  description: {
    en: "Grand Remi in Kumanovo is an elegant venue for weddings, celebrations, and events, offering stylish interiors, attentive service, and a welcoming atmosphere for guests.",
    sq: "Grand Remi në Kumanovë është një vend elegant për dasma, festime dhe ngjarje, duke ofruar enterier stilizuar, shërbim të kujdesshëm dhe atmosferë mikpritëse për mysafirët.",
    mk: "Гранд Реми во Куманово е елегантен простор за свадби, прослави и настани, нудејќи стилски ентериер, внимателна услуга и пријатна атмосфера за гостите.",
    tr: "Kumanovo'daki Grand Remi, düğünler, kutlamalar ve etkinlikler için şık iç mekanlar, özenli hizmet ve misafirler için sıcak bir atmosfer sunar."
  },
  city: "Kumanovo",
  capacity: 250,
  address: "Industriska BB, Kumanovo, North Macedonia",
  image: "https://i.imgur.com/ctqBlrJ.jpeg",
  gallery: [
    "https://i.imgur.com/ctqBlrJ.jpeg",
    "https://i.imgur.com/bVCClFH.jpeg",
    "https://i.imgur.com/SQpFXcK.jpeg",
    "https://i.imgur.com/aUxWbfi.jpeg",
    "https://i.imgur.com/S9pWjUQ.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 211 392",
  email: "",
  lat: 42.136,
  lng: 21.717
},
{
  id: "restaurant-elite-gostivar",
  name: {
    en: "Restaurant Elite",
    sq: "Restaurant Elite",
    mk: "Ресторант Елите",
    tr: "Restaurant Elite"
  },
  description: {
    en: "Restaurant Elite in Gostivar offers a modern and elegant venue for weddings, celebrations, and private events, with stylish interiors and attentive service.",
    sq: "Restaurant Elite në Gostivar ofron një vend modern dhe elegant për dasma, festime dhe ngjarje private, me enterier stilizuar dhe shërbim të kujdesshëm.",
    mk: "Ресторант Елите во Гостивар нуди модерен и елегантен простор за свадби, прослави и приватни настани, со стилски ентериер и внимателна услуга.",
    tr: "Gostivar'daki Restaurant Elite, düğünler, kutlamalar ve özel etkinlikler için modern ve şık bir mekan sunar; şık iç mekanlar ve özenli hizmet ile."
  },
  city: "Gostivar",
  capacity: 150,
  address: "Cajle, North Macedonia",
  image: "https://i.imgur.com/SNpXmHz.jpeg",
  gallery: [
    "https://i.imgur.com/SNpXmHz.jpeg",
    "https://i.imgur.com/rg8Ch8M.jpeg",
    "https://i.imgur.com/nv0Uptn.jpeg",
    "https://i.imgur.com/kYzbk2E.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 71 925 000",
  email: "",
  lat: 41.792,
  lng: 20.911
},
{
  id: "gardenia-veles",
  name: {
    en: "Gardenia",
    sq: "Gardenia",
    mk: "Гардениа",
    tr: "Gardenia"
  },
  description: {
    en: "Gardenia in Veles offers an elegant venue for weddings, celebrations, and events with stylish interiors, comfortable spaces, and attentive service.",
    sq: "Gardenia në Veles ofron një vend elegant për dasma, festime dhe ngjarje me enterier stilizuar, hapësira komode dhe shërbim të kujdesshëm.",
    mk: "Гардениа во Велес нуди елегантен простор за свадби, прослави и настани со стилски ентериер, удобни простории и внимателна услуга.",
    tr: "Veles'teki Gardenia, düğünler, kutlamalar ve etkinlikler için şık iç mekanlar, konforlu alanlar ve özenli hizmet sunar."
  },
  city: "Veles",
  capacity: 200,
  address: "Akademik Pencho Davchev 75, Veles, North Macedonia",
  image: "https://www.hotelgardenia.mk/Websites/122/Images/Temp/1a7d1887-6ce6-41ac-8038-b14fdd149e1e/8B7F2268-09CB-0E5C-526D-0E7E5495CA6C.jpg",
  gallery: [
    "https://www.hotelgardenia.mk/Websites/122/Images/Temp/1a7d1887-6ce6-41ac-8038-b14fdd149e1e/8B7F2268-09CB-0E5C-526D-0E7E5495CA6C.jpg",
    "https://www.hotelgardenia.mk/Websites/122/Images/Temp/1a7d1887-6ce6-41ac-8038-b14fdd149e1e/5B56910F-4AC7-96BD-F8B3-BC455AEAB6D4.jpg",
    "https://www.hotelgardenia.mk/Websites/122/Images/Temp/1a7d1887-6ce6-41ac-8038-b14fdd149e1e/A9A8B520-C959-EF4E-656C-A5D044D933E4.jpg",
    "https://www.hotelgardenia.mk/Websites/122/Images/Temp/1a7d1887-6ce6-41ac-8038-b14fdd149e1e/689DC1E2-C020-DC23-3B83-7AB3C7E6A8BF.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 43 224 464",
  email: "",
  website: "https://hotelgardenia.mk",
  lat: 41.716,
  lng: 21.775
},
  {
  id: "ag‑na‑skopje",
  name: {
    en: "AG & NA",
    sq: "AG & NA",
    mk: "АГ & НА",
    tr: "AG & NA",
  },
  description: {
    en: "Elegant wedding hall in Skopje with refined decor and excellent service, ideal for memorable celebrations.",
    sq: "Sallë dasmash elegante në Shkup me dekor të rafinuar dhe shërbim të shkëlqyer, ideale për festime të paharrueshme.",
    mk: "Елегантна свадбена сала во Скопје со префинет декор и одлична услуга, идеална за незаборавни прослави.",
    tr: "Mekan zarif düğün salonu Üsküp'te, seçkin dekoru ve mükemmel hizmetiyle unutulmaz kutlamalar için ideal.",
  },
  city: "Skopje",
  capacity: 250,
  address: "Skopje, North Macedonia",
  image: "https://i.imgur.com/Fkwkrjt.jpeg",
  gallery: [
    "https://i.imgur.com/Fkwkrjt.jpeg",
    "https://i.imgur.com/RDXm9TO.jpeg",
    "https://i.imgur.com/goYchua.jpeg",
    "https://i.imgur.com/TzceYuS.jpeg",
    "https://i.imgur.com/xlhikfp.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 987 654",
  email: "info@agna.mk",
  lat: 41.999,
  lng: 21.44,
  instagram: "@ag_na_skopje",
  website: "https://agna-skopje.mk"
},
{
  id: "hotel-izgrev-stip",
  name: {
    en: "Hotel Izgrev",
    sq: "Hotel Izgrev",
    mk: "Хотел Изгрев",
    tr: "Hotel Izgrev"
  },
  description: {
    en: "Hotel Izgrev in Štip offers a modern venue for weddings, events, and private celebrations with comfortable accommodations, elegant interiors, and attentive service.",
    sq: "Hotel Izgrev në Shtip ofron një vend modern për dasma, ngjarje dhe festa private me akomodim të rehatshëm, enterier elegant dhe shërbim të kujdesshëm.",
    mk: "Хотел Изгрев во Штип нуди модерен простор за свадби, настани и приватни прослави со удобен смештај, елегантен ентериер и внимателна услуга.",
    tr: "Ştip'teki Hotel Izgrev, konforlu konaklama, şık iç mekanlar ve özenli hizmet ile düğünler, etkinlikler ve özel kutlamalar için modern bir mekan sunmaktadır."
  },
  city: "Stip",
  capacity: 200,
  address: "Velko Vlahovik br.1, Štip, North Macedonia",
  image: "https://i.imgur.com/jxJVZ2S.jpeg",
  gallery: [
    "https://i.imgur.com/jxJVZ2S.jpeg",
    "https://i.imgur.com/t1rmZtu.jpeg",
    "https://i.imgur.com/sVFeunq.jpeg",
    "https://i.imgur.com/BBu5rFU.jpeg",
    "https://i.imgur.com/StHmE2G.jpeg"
  ],
  category: "Hotel",
  phone: "+389 78 322 698",
  email: "hotel.izgrev@gmail.com",
  website: "https://hotelizgrev.mk",
  lat: 41.743,
  lng: 22.203
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
  id: "7even-weddings-stip",
  name: {
    en: "7Even Weddings & Events",
    sq: "7Even Weddings & Events",
    mk: "7Even Свадби и Настани",
    tr: "7Even Weddings & Events"
  },
  description: {
    en: "7Even Weddings & Events in Štip offers a modern and versatile venue for weddings, celebrations, and private events, with stylish decor and attentive service.",
    sq: "7Even Weddings & Events në Shtip ofron një vend modern dhe të shumëanshëm për dasma, festime dhe ngjarje private, me dekor stilizuar dhe shërbim të kujdesshëm.",
    mk: "7Even Свадби и Настани во Штип нуди модерен и разновиден простор за свадби, прослави и приватни настани, со стилски декор и внимателна услуга.",
    tr: "Ştip'teki 7Even Weddings & Events, düğünler, kutlamalar ve özel etkinlikler için modern ve çok yönlü bir mekan sunar; şık dekor ve özenli hizmet ile."
  },
  city: "Stip",
  capacity: 180,
  address: "5та Партиска Конференција 32A, Štip, North Macedonia",
  image: "https://i.imgur.com/7GMSqoL.jpeg",
  gallery: [
    "https://i.imgur.com/7GMSqoL.jpeg",
    "https://i.imgur.com/ijQ1fvm.jpeg",
    "https://i.imgur.com/40yVlTo.jpeg",
    "https://i.imgur.com/aKOWqps.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 210 481",
  email: "info@7even.mk",
  instagram: "7evenweddingsandev",
  lat: 41.746,
  lng: 22.201
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
  id: "astibo-stip",
  name: {
    en: "Astibo",
    sq: "Astibo",
    mk: "Астиbo",
    tr: "Astibo"
  },
  description: {
    en: "Astibo in Štip offers a modern and elegant venue for weddings, celebrations, and private events, featuring stylish interiors and attentive service.",
    sq: "Astibo në Shtip ofron një vend modern dhe elegant për dasma, festime dhe ngjarje private, me enterier stilizuar dhe shërbim të kujdesshëm.",
    mk: "Астиbo во Штип нуди модерен и елегантен простор за свадби, прослави и приватни настани, со стилски ентериер и внимателна услуга.",
    tr: "Ştip'teki Astibo, düğünler, kutlamalar ve özel etkinlikler için modern ve şık bir mekan sunar; stil sahibi iç mekanlar ve özenli hizmet ile."
  },
  city: "Stip",
  capacity: 150,
  address: "Гоце Делчев бр. 42, Štip, North Macedonia",
  image: "https://i.imgur.com/SB746E7.jpeg",
  gallery: [
    "https://i.imgur.com/SB746E7.jpeg",
    "https://i.imgur.com/XyQZFX7.jpeg",
    "https://i.imgur.com/9P2Y4Ij.jpeg",
    "https://i.imgur.com/kwwOM54.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 78 737 424",
  email: "Info@astibobasic.com.mk",
  website: "https://astiboplaza.mk",
  lat: 41.746,
  lng: 22.201
},
  {
  id: "hotel-sirius-strumica",
  name: {
    en: "Hotel Sirius",
    sq: "Hotel Sirius",
    mk: "Хотел Сириус",
    tr: "Hotel Sirius"
  },
  description: {
    en: "Hotel Sirius in Strumica offers a luxurious wedding and event venue with modern interiors, professional service, and premium facilities for unforgettable celebrations.",
    sq: "Hotel Sirius në Strumicë ofron një vend luksoz për dasma dhe ngjarje me brendësi moderne, shërbim profesional dhe objekte premium për festime të paharrueshme.",
    mk: "Хотел Сириус во Струмица нуди луксузна свадбена и настанска сала со модерен ентериер, професионална услуга и премиум капацитети за незаборавни прослави.",
    tr: "Strumica'daki Hotel Sirius, modern iç mekanları, profesyonel hizmeti ve premium tesisleri ile unutulmaz düğün ve etkinlikler için lüks bir mekan sunar."
  },
  city: "Strumica",
  capacity: 300,
  address: "Strumica, North Macedonia",
  image: "https://www.hotelsirius.com.mk/assets/images/home-1/5.webp",
  gallery: [
    "https://www.hotelsirius.com.mk/assets/images/home-1/5.webp",
    "https://www.hotelsirius.com.mk/assets/images/home-1/5DS.webp",
    "https://www.hotelsirius.com.mk/assets/images/home-1/Crystal%201.jpg",
    "https://www.hotelsirius.com.mk/assets/images/home-1/CRYSTAL%202.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 34 123 456",
  email: "info@hotelsirius.com.mk",
  lat: 41.437,
  lng: 22.645,
  instagram: "@hotelsirius",
  website: "https://www.hotelsirius.com.mk"
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
  id: "hotel-berovic-skopje",
  name: {
    en: "Hotel Berović",
    sq: "Hotel Berović",
    mk: "Хотел Беровиќ",
    tr: "Hotel Berović",
  },
  description: {
    en: "Elegant wedding venue in Studeničani, Skopje, offering refined decor and exceptional service for unforgettable celebrations.",
    sq: "Sallë dasmash elegante në Studeniçani, Shkup, që ofron dekor të rafinuar dhe shërbim të jashtëzakonshëm për festime të paharrueshme.",
    mk: "Елегантна свадбена сала во Студеничани, Скопје, со префинет декор и извонредна услуга за незаборавни прослави.",
    tr: "Üsküp'te Studeniçani'de bulunan zarif bir düğün salonu; seçkin dekoru ve mükemmel hizmetiyle unutulmaz kutlamalar için ideal.",
  },
  city: "Skopje",
  capacity: 300,
  address: "ul. 8 B.B, Studeničani, Skopje, North Macedonia",
  image: "https://i.imgur.com/tHaT0Hz.jpeg",
  gallery: [
    "https://i.imgur.com/tHaT0Hz.jpeg",
    "https://i.imgur.com/yGXLFz4.jpeg",
    "https://i.imgur.com/BsTShqg.jpeg",
    "https://i.imgur.com/V1KSvNy.jpeg",
    "https://i.imgur.com/QMdLT0B.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 205 002",
  email: "info@hotelberovic.mk",
  lat: 41.9981,
  lng: 21.4254,
  instagram: "@hotelberovic",
  website: "https://hotelberovic.mk",
},
{
  id: "panorama-strumica",
  name: {
    en: "Panorama",
    sq: "Panorama",
    mk: "Панорама",
    tr: "Panorama"
  },
  description: {
    en: "Panorama in Mokrino, Strumica offers a scenic venue perfect for weddings, celebrations, and special events with stunning views and a cozy atmosphere.",
    sq: "Panorama në Mokrino, Strumicë ofron një vend me pamje mahnitëse, ideal për dasma, festime dhe ngjarje të veçanta me atmosferë të ngrohtë.",
    mk: "Панорама во Мокрино, Струмица нуди прекрасен простор со поглед, идеален за свадби, прослави и специјални настани со пријатна атмосфера.",
    tr: "Mokrino, Strumica'daki Panorama, muhteşem manzaralar ve samimi bir atmosfer ile düğünler, kutlamalar ve özel etkinlikler için mükemmel bir mekan sunar."
  },
  city: "Strumica",
  capacity: 250,
  address: "Mokrino, North Macedonia",
  image: "https://i.imgur.com/n6g1Mf8.jpeg",
  gallery: [
    "https://i.imgur.com/n6g1Mf8.jpeg",
    "https://i.imgur.com/ceZLTJx.jpeg",
    "https://i.imgur.com/hbi1kyj.jpeg",
    "https://i.imgur.com/H19JxoP.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 700 776",
  email: "panoramamokrino@gmail.com",
  lat: 41.430,
  lng: 22.650,
  website: "https://panoramamokrino.blogspot.com"
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
  id: "atk-premium-club-skopje",
  name: {
    en: "ATK Premium Club",
    sq: "ATK Premium Club",
    mk: "АТК Премиум Клуб",
    tr: "ATK Premium Club",
  },
  description: {
    en: "Luxurious event and wedding venue in Skopje offering an elegant atmosphere, premium catering, and exceptional service for every occasion.",
    sq: "Sallë luksoze ngjarjesh dhe dasmash në Shkup që ofron ambient elegant, catering premium dhe shërbim të jashtëzakonshëm për çdo rast.",
    mk: "Луксузна сала за настани и свадби во Скопје со елегантна атмосфера, премиум кетеринг и извонредна услуга за секоја пригода.",
    tr: "Üsküp'te bulunan lüks etkinlik ve düğün salonu; zarif atmosferi, premium ikramları ve kusursuz hizmetiyle her türlü organizasyon için idealdir.",
  },
  city: "Skopje",
  capacity: 400,
  address: "Skopje, North Macedonia",
  image: "https://www.atk.mk/wp-content/uploads/2024/11/nastani-1-1024x681.jpg",
  gallery: [
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-6-1024x681.jpg",
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-1-1024x681.jpg",
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-2-1024x681.jpg",
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-3-1024x681.jpg",
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-4-1024x681.jpg",
    "https://www.atk.mk/wp-content/uploads/2024/11/nastani-5-1024x681.jpg"
  ],
  category: "Wedding Hall",
  phone: "+389 70 555 888",
  email: "info@atk.mk",
  lat: 41.9981,
  lng: 21.4254,
  instagram: "@atk_premium_club",
  website: "https://www.atk.mk",
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
  id: "tsar-samuil-strumica",
  name: {
    en: "Tsar Samuil",
    sq: "Tsar Samuil",
    mk: "Цар Самуил",
    tr: "Tsar Samuil"
  },
  description: {
    en: "Tsar Samuil in Strumica (Bansko) offers a luxurious venue for weddings, celebrations, and special events, combining elegant decor, premium services, and a stylish atmosphere.",
    sq: "Tsar Samuil në Strumicë (Bansko) ofron një vend luksoz për dasma, festime dhe ngjarje të veçanta, duke kombinuar dekor elegant, shërbime premium dhe atmosferë stil.",
    mk: "Цар Самуил во Струмица (Банско) нуди луксузен простор за свадби, прослави и специјални настани, со комбинација на елегантен декор, премиум услуги и стилска атмосфера.",
    tr: "Strumica (Bansko)'daki Tsar Samuil, düğünler, kutlamalar ve özel etkinlikler için zarif dekor, premium hizmetler ve şık bir atmosfer sunan lüks bir mekandır."
  },
  city: "Strumica",
  capacity: 300,
  address: "Bansko, Strumica, North Macedonia",
  image: "https://i.imgur.com/05BcLZk.jpeg",
  gallery: [
    "https://i.imgur.com/05BcLZk.jpeg",
    "https://i.imgur.com/rk2h3hR.png",
    "https://i.imgur.com/czQ2p43.jpeg",
    "https://i.imgur.com/EFeLKHB.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 72 211 011",
  email: "contact@carsamuil.com",
  lat: 41.480,
  lng: 22.015,
  instagram: "@tsar_samuil_",
  website: "https://carsamuil.com"
},
{
  id: "villa-park-strumica",
  name: {
    en: "Villa Park",
    sq: "Villa Park",
    mk: "Вила Парк",
    tr: "Villa Park"
  },
  description: {
    en: "Villa Park in Strumica offers a stylish and comfortable venue for weddings, celebrations, and special events, combining elegant decor with professional service.",
    sq: "Villa Park në Strumicë ofron një vend të stilizuar dhe të rehatshëm për dasma, festime dhe ngjarje të veçanta, duke kombinuar dekor elegant me shërbim profesional.",
    mk: "Вила Парк во Струмица нуди стилски и комфорен простор за свадби, прослави и специјални настани, со комбинација на елегантен декор и професионална услуга.",
    tr: "Strumica’daki Villa Park, şık dekor ve profesyonel hizmet ile düğünler, kutlamalar ve özel etkinlikler için konforlu bir mekan sunar."
  },
  city: "Strumica",
  capacity: 200,
  address: "Blagoj Jankov Mucheto br.5, Strumica, North Macedonia",
  image: "https://i.imgur.com/a1JV0T1.jpeg",
  gallery: [
    "https://i.imgur.com/a1JV0T1.jpeg"
  ],
  category: "Wedding Hall",
  phone: "+389 71 305 635",
  email: "info@villapark.mk",
  lat: 41.437,
  lng: 22.650,
  website: "https://villaparkhotel.mk"
},
  {
  id: "bon-bon-restaurant-skopje",
  name: {
    en: "Bon Bon Restaurant",
    sq: "Restoranti Bon Bon",
    mk: "Ресторан Бон Бон",
    tr: "Bon Bon Restoran"
  },
  description: {
    en: "Bon Bon Restaurant in Skopje offers a refined dining experience with a blend of traditional Macedonian and international cuisines, set in a modern and elegant ambiance.",
    sq: "Restoranti Bon Bon në Shkup ofron një përvojë të rafinuar ngrënieje me një përzierje të kuzhinës tradicionale maqedonase dhe ndërkombëtare, në një atmosferë moderne dhe elegante.",
    mk: "Ресторан Бон Бон во Скопје нуди изискано искуство во јадењето со мешавина на традиционална македонска и меѓународна кујна, поставено во модерна и елегантна атмосфера.",
    tr: "Skopje'deki Bon Bon Restoran, modern ve şık bir atmosferde geleneksel Makedon ve uluslararası mutfakların harmanlandığı zarif bir yemek deneyimi sunmaktadır."
  },
  city: "Skopje",
  capacity: 200,
  address: "Aleksandar Urdarevski 33, Skopje, North Macedonia",
  image: "https://i.imgur.com/27BzmKc.jpeg",
  gallery: [
    "https://i.imgur.com/27BzmKc.jpeg",
    "https://i.imgur.com/iB3Uh2Y.jpeg",
    "https://i.imgur.com/SgJrLto.jpeg"
  ],
  category: "Restaurant",
  phone: "+389 2 264 2903",
  email: "info@bonbonrestaurant.mk",
  lat: 41.9981,
  lng: 21.4254
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
  },
  // Tetovo - Salons
{
  id: "tetovo-salon-coming-soon",
  name: {
    en: "Salon Coming Soon",
    sq: "Salon Vjen Së Shpejti",
    mk: "Салон Скоро",
    tr: "Kuaför Yakında"
  },
  city: "Tetovo",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Photographers
{
  id: "tetovo-photographer-coming-soon",
  name: {
    en: "Photographer Coming Soon",
    sq: "Fotograf Vjen Së Shpejti",
    mk: "Фотограф Скоро",
    tr: "Fotoğrafçı Yakında"
  },
  city: "Tetovo",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Decorators
{
  id: "tetovo-decorator-coming-soon",
  name: {
    en: "Decorator Coming Soon",
    sq: "Dekorues Vjen Së Shpejti",
    mk: "Декоратор Скоро",
    tr: "Dekoratör Yakında"
  },
  city: "Tetovo",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Music & DJ
{
  id: "tetovo-music-coming-soon",
  name: {
    en: "Music / DJ Coming Soon",
    sq: "Muzikë / DJ Vjen Së Shpejti",
    mk: "Музика / DJ Скоро",
    tr: "Müzik / DJ Yakında"
  },
  city: "Tetovo",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Wedding Dresses
{
  id: "tetovo-dress-coming-soon",
  name: {
    en: "Wedding Dress Coming Soon",
    sq: "Fustan Nuse Vjen Së Shpejti",
    mk: "Булчинска Фустан Скоро",
    tr: "Gelinlik Yakında"
  },
  city: "Tetovo",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Cakes
{
  id: "tetovo-cake-coming-soon",
  name: {
    en: "Cake Coming Soon",
    sq: "Tortë Vjen Së Shpejti",
    mk: "Торта Скоро",
    tr: "Pasta Yakında"
  },
  city: "Tetovo",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Tetovo - Florists
{
  id: "tetovo-florist-coming-soon",
  name: {
    en: "Florist Coming Soon",
    sq: "Florist Vjen Së Shpejti",
    mk: "Цвеќар Скоро",
    tr: "Çiçekçi Yakında"
  },
  city: "Tetovo",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Skopje - Salons
{
  id: "skopje-salon-coming-soon",
  name: {
    en: "Salon Coming Soon",
    sq: "Salon Vjen Së Shpejti",
    mk: "Салон Скоро",
    tr: "Kuaför Yakında"
  },
  city: "Skopje",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Photographers
{
  id: "skopje-photographer-coming-soon",
  name: {
    en: "Photographer Coming Soon",
    sq: "Fotograf Vjen Së Shpejti",
    mk: "Фотограф Скоро",
    tr: "Fotoğrafçı Yakında"
  },
  city: "Skopje",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Decorators
{
  id: "skopje-decorator-coming-soon",
  name: {
    en: "Decorator Coming Soon",
    sq: "Dekorues Vjen Së Shpejti",
    mk: "Декоратор Скоро",
    tr: "Dekoratör Yakında"
  },
  city: "Skopje",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Music & DJ
{
  id: "skopje-music-coming-soon",
  name: {
    en: "Music / DJ Coming Soon",
    sq: "Muzikë / DJ Vjen Së Shpejti",
    mk: "Музика / DJ Скоро",
    tr: "Müzik / DJ Yakında"
  },
  city: "Skopje",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Wedding Dresses
{
  id: "skopje-dress-coming-soon",
  name: {
    en: "Wedding Dress Coming Soon",
    sq: "Fustan Nuse Vjen Së Shpejti",
    mk: "Булчинска Фустан Скоро",
    tr: "Gelinlik Yakında"
  },
  city: "Skopje",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Cakes
{
  id: "skopje-cake-coming-soon",
  name: {
    en: "Cake Coming Soon",
    sq: "Tortë Vjen Së Shpejti",
    mk: "Торта Скоро",
    tr: "Pasta Yakında"
  },
  city: "Skopje",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Skopje - Florists
{
  id: "skopje-florist-coming-soon",
  name: {
    en: "Florist Coming Soon",
    sq: "Florist Vjen Së Shpejti",
    mk: "Цвеќар Скоро",
    tr: "Çiçekçi Yakında"
  },
  city: "Skopje",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Gostivar - Salons
{
  id: "gostivar-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Photographers
{
  id: "gostivar-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Decorators
{
  id: "gostivar-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Music & DJ
{
  id: "gostivar-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Wedding Dresses
{
  id: "gostivar-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Cakes
{
  id: "gostivar-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gostivar - Florists
{
  id: "gostivar-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gostivar",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Ohrid - Salons
{
  id: "ohrid-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Photographers
{
  id: "ohrid-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Decorators
{
  id: "ohrid-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Music & DJ
{
  id: "ohrid-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Wedding Dresses
{
  id: "ohrid-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Cakes
{
  id: "ohrid-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Ohrid - Florists
{
  id: "ohrid-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Ohrid",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Struga - Salons
{
  id: "struga-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Photographers
{
  id: "struga-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Decorators
{
  id: "struga-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Music & DJ
{
  id: "struga-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Wedding Dresses
{
  id: "struga-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Cakes
{
  id: "struga-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Struga - Florists
{
  id: "struga-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Struga",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Bitola - Salons
{
  id: "bitola-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Photographers
{
  id: "bitola-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Decorators
{
  id: "bitola-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Music & DJ
{
  id: "bitola-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Wedding Dresses
{
  id: "bitola-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Cakes
{
  id: "bitola-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Bitola - Florists
{
  id: "bitola-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Bitola",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Gevgelija - Salons
{
  id: "gevgelija-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Photographers
{
  id: "gevgelija-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Decorators
{
  id: "gevgelija-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Music & DJ
{
  id: "gevgelija-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Wedding Dresses
{
  id: "gevgelija-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Cakes
{
  id: "gevgelija-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Gevgelija - Florists
{
  id: "gevgelija-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Gevgelija",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Kumanovo - Salons
{
  id: "kumanovo-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Photographers
{
  id: "kumanovo-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Decorators
{
  id: "kumanovo-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Music & DJ
{
  id: "kumanovo-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Wedding Dresses
{
  id: "kumanovo-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Cakes
{
  id: "kumanovo-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Kumanovo - Florists
{
  id: "kumanovo-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Kumanovo",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Prilep - Salons
{
  id: "prilep-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Photographers
{
  id: "prilep-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Decorators
{
  id: "prilep-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Music & DJ
{
  id: "prilep-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Wedding Dresses
{
  id: "prilep-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Cakes
{
  id: "prilep-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Prilep - Florists
{
  id: "prilep-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Prilep",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Stip - Salons
{
  id: "stip-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Photographers
{
  id: "stip-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Decorators
{
  id: "stip-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Music & DJ
{
  id: "stip-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Wedding Dresses
{
  id: "stip-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Cakes
{
  id: "stip-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Stip - Florists
{
  id: "stip-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Stip",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Veles - Salons
{
  id: "veles-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Photographers
{
  id: "veles-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Decorators
{
  id: "veles-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Music & DJ
{
  id: "veles-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Wedding Dresses
{
  id: "veles-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Cakes
{
  id: "veles-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Veles - Florists
{
  id: "veles-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Veles",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},
// Strumica - Salons
{
  id: "strumica-salon-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Salon",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Photographers
{
  id: "strumica-photographer-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Photographer",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Decorators
{
  id: "strumica-decorator-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Decorator",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Music & DJ
{
  id: "strumica-music-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Music",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Wedding Dresses
{
  id: "strumica-dress-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Dress",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Cakes
{
  id: "strumica-cake-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Cake",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
},

// Strumica - Florists
{
  id: "strumica-florist-coming-soon",
  name: {
    en: "Coming Soon",
    sq: "Se Shpejti",
    mk: "Na Skoro",
    tr: "Yakında"
  },
  city: "Strumica",
  category: "Florist",
  image: "https://i.imgur.com/x4dL0xD.png",
  phone: "Coming Soon!",
  email: "Coming Soon!",
  address: "Coming Soon!",
  website: "Coming Soon!"
}
]

window.venuesData = venuesData
window.servicesData = servicesData
