const data = [
    {
        id: "1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg/1920px-Trevi_Fountain%2C_Rome%2C_Italy_2_-_May_2007.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Trevi+%C3%87e%C5%9Fmesi/@41.9010373,12.4810843,17z/data=!3m1!4b1!4m5!3m4!1s0x132f6053278340d5:0xf676f1e1cc02bbb6!8m2!3d41.9009325!4d12.483313",
        destination: "Fontana Di Trevi",
        date: "24 July, 2018 - 20 September, 2018",
        info: "The 'Fontana di Trevi', or the Trevi Fountain is perhaps the most famous fountain in the world and definitely in Rome. The baroque fountain on the Piazza di Trevi square was initially designed by Bernini for Pope Clemens XII. However, it was not built until 50 years later after a (less expensive) redesign by the architect Nicola Salvi. Construction lasted from 1732 to 1762. The fountain's fame is in part the result of the many films that featured the Trevi Fountain, including La Dolce Vita, Angels and Demons, The Lizzie McGuire Movie and Roman Holiday."
    },
    {
        id: "2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Kolezyum/@41.8902142,12.4900422,17z/data=!3m1!4b1!4m5!3m4!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309",
        destination: "Colosseum",
        date: "24 July, 2018 - 20 September, 2018",
        info: "Flavian emperor Vespasian had this amphitheatre that could accommodate 65,000 spectators built in the year 72 CE. Construction of the Colosseum took eight years and was financed with plunder taken from Jerusalem. The Colosseum, also called the Amphitheatrum Flavium, was opened by emperor Titus with games and festivities that lasted 100 days and cost the lives of 5,000 animals. Emperor Domitian, Titus' successor, later expanded the amphitheatre with an extra storey and a number of spaces underneath the Colosseum. This made the Colosseum of Rome the largest amphitheatre in Roman history, and it is considered one of the seven wonders of the world."
    },
    {
        id: "3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/20190406-DSC5193_Panteon.jpg/1920px-20190406-DSC5193_Panteon.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Panteon/@41.8986148,12.4746842,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
        destination: "Pantheon",
        date: "24 July, 2018 - 20 September, 2018",
        info: "The Pantheon is one of the most recognisable Roman buildings in Rome's city centre. Construction of the Pantheon Rome started in 27 BCE on the order of Marcus Agrippa. It is one of the few buildings from ancient Rome that has stayed completely intact. The current temple and characteristic round dome were not built until the 2nd century, under emperor Hadrian, after Agrippa's building was damaged by a large fire in 80 CE and again in 110 when it was struck by lightning. The façade shows the following text in bronze, ‘M.AGRIPPA.L.F.COS.TERTIUM.FECIT’. It means, ‘Marcus Agrippa, son of Lucius, third-time consul, has built this’. Interestingly, this text was added during the rule of emperor Hadrian."
    },
    {
        id: "4",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/1920px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Aziz+Petrus+Bazilikas%C4%B1/@41.9021707,12.451748,17z/data=!3m1!4b1!4m5!3m4!1s0x132f6061b7149b59:0x724bf077cd875283!8m2!3d41.9021667!4d12.4539367",
        destination: "St. Peter’s Basilica in Rome",
        date: "24 July, 2018 - 20 September, 2018",
        info: "The ‘Basilica di San Pietro in Vaticano’ was built between 1506 and 1626 on the site of a church dating from the time of emperor Constantine the Great (324). According to tradition, this church contained the grave of Peter. Because building St. Peters Basilica took so long, several designers worked on it, including Bramante, Raphael, Antonio del Sangallo, Michelangelo, and Carlo Maderno. Many of the decorations in the Basilica are the work of Gian Lorenzo Bernini. One of the most impressive aspects of the Basilica are its dimensions – 136 metres high and 186x123 metres wide."
    },
    {
        id: "5",
        img: "https://www.tripsavvy.com/thmb/iFxXrwX0vFohJUzqcVDTSkHSdLA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-125834407-5930dffc3df78c08ab574afa.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Vatikan+M%C3%BCzeleri/@41.9064917,12.4491566,17z/data=!3m1!4b1!4m5!3m4!1s0x132f6063839bc129:0xcfe0eca0526416b6!8m2!3d41.9064878!4d12.4536413",
        destination: "Vatican Museums",
        date: "24 July, 2018 - 20 September, 2018",
        info: "The Vatican Museums (‘I Museu Vaticani’) are some of the largest museums in the world with an enormous collection that varies from ancient Roman and Egyptian artefacts, religious objects, beautifully painted rooms and even modern art. The 26 different museums of the Vatican are housed in a complex of multiple Apostolic palaces, and are by far the most popular museum destination in Rome, in part because of the famous Sistine Chapel. During your visit, you will marvel at the many art treasures that the popes have collected in 54 halls since the 16th century."
    },
    {
        id: "6",
        img: "https://cdn.britannica.com/77/187677-138-73F32D16/buildings-Rome-Roman-Forum.jpg?w=800&h=450&c=crop",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Roma+Forumu/@41.8924663,12.4831363,17z/data=!3m1!4b1!4m5!3m4!1s0x132f61b383a9cdef:0xfa914007c0ec7de6!8m2!3d41.8924623!4d12.485325",
        destination: "Roman Forum Romanum",
        date: "24 July, 2018 - 20 September, 2018",
        info: "It was not until the 19th century that excavations of the centre of the Roman empire at the base of the Capitol finally began. During the reign of emperor Augustus (27 BCE – 14 CE), ancient Rome was already home to over a million Romans, and the Forum Romanum was the political, legal and religious centre of the Roman Empire."
    },
    {
        id: "7",
        img: "https://www.italia.it/content/dam/tdh/en/destinations/lazio/roma/piazza-navona/media/20220411145513-piazza-navona-dalla-fontana-del-nettuno-roma-lazio-shutterstock-788995654.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Piazza+Navona,+00186+Roma+RM,+%C4%B0talya/@41.8991368,12.4711034,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604ffb562893:0x5c425ce8ce05efb!8m2!3d41.8991328!4d12.4732921",
        destination: "Piazza Navona Rome",
        date: "24 July, 2018 - 20 September, 2018",
        info: "Piazza Navona is one of the most beautiful and famous squares in the centre of Rome. In 86 CE, emperor Domitian commissioned this square with its unique, elongated shape. This shape is the result of its original function as the stadium for athletics competitions (Circus Agonalis) with stands for 20,000 spectators. Pope Innocent even organised so-called ‘water games’ during the hot summer months, for which the whole square was put under water. After the fall of the Roman Empire, houses were built where the stands used to be, but the long athletics field remained free of buildings and would later become Piazza Navona."
    },
    {
        id: "8",
        img: "https://media.cntraveler.com/photos/603fc707b6e78d139fb895e1/master/pass/Uffizi%20Museum-2C1GR6T-2.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Uffizi/@43.7677894,11.2508261,17z/data=!3m1!4b1!4m5!3m4!1s0x132a54008dc59081:0xcddeb7c89bf0c4cd!8m2!3d43.7677856!4d11.2553108",
        destination: "Uffizi Gallery",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The Palazzo degli Uffizi is one of the most famous and oldest museums in the world and this beautiful Uffizi Museum can be found in Florence Italy. The Uffizi used to be a palace owned by the Medici banking family. The palace is located next to the Palazzo Vecchio and had a function for the government. The Uffizi was built between 1560-1580 by order of Grand Duke Cosimo I de Medici by Giorgio Vasari to house the administrative and legal offices of Florence. Cosimo's son, Francesco, first turned the upper floor of the palace into an art gallery. After this, this collection was more and more enriched into the large museum it is today."
    },
    {
        id: "9",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Florence_Duomo_from_Michelangelo_hill.jpg/1280px-Florence_Duomo_from_Michelangelo_hill.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Floransa+Katedrali/@43.7731489,11.2537715,17z/data=!3m1!4b1!4m5!3m4!1s0x132a5403bfe22ff5:0x5591438487aaf1f5!8m2!3d43.773145!4d11.2559602",
        destination: "Duomo, the Florence cathedral",
        date: "9 August, 2021 - 16 August, 2021",
        info: "When you google Florence you will always come across a picture of the Cathedral of Florence with its bell tower. The Duomo or the Santa Maria del Fiore is the symbol of Firenze and stands out in the Florentine skyline. The Duomo is the fourth largest cathedral in Europe and is located in the historic center of Florence in the Piazza del Duomo. Other buildings worth visiting on this square are the baptistery church opposite the cathedral, the Baptistery, the tower next to the Duomo, the Campanile, and the Museo dell’Opera del Duomo."
    },
    {
        id: "10",
        img: "https://www.italia.it/content/dam/tdh/en/destinations/toscana/firenze/palazzo-vecchio/media/20220524160648-piazza-signoria-firenze-toscana-shutterstock-720848656.jpg.transform/w_850/h_500/image.jpeg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Vecchio+Saray%C4%B1/@43.7693051,11.2539622,17z/data=!3m1!4b1!4m5!3m4!1s0x132a5400e57893f9:0xe4e22be754c65787!8m2!3d43.7693012!4d11.2561509",
        destination: "Palazzo Vecchio Florence",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The Palazzo Vecchio has always been one of the most important palaces of Florence, as it used to serve as a government building, where Florence's political power was seated. Today the palace is still the city hall of Florence, but the palace also serves as a museum where part of the Medici art collection is displayed."
    },
    {
        id: "11",
        img: "https://www.italiandualcitizenship.net/wp-content/uploads/2019/02/History-and-resources-of-the-Ponte-Vecchio.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Ponte+Vecchio/@43.7679289,11.2509548,17z/data=!3m1!4b1!4m5!3m4!1s0x132a56aaa2dcb667:0x40310ae830e702e8!8m2!3d43.767925!4d11.2531435",
        destination: "Ponte Vecchio - Bridge in Florence",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The most striking and oldest bridge in Florence still in existence is the Ponte Vecchio, literally: the old bridge. The Ponte Vecchio was designed by a student of Giotto, Taddeo Gaddi and was finished in 1345. The Ponte Vecchio is known for the many shops on and around the bridge, which used to be the domain of blacksmiths, tanners and butchers. They used the Arno river in Florence as a landfill. However, Duke Fernandino made sure they left because they caused too much noise and stench. They were replaced by jewelers and goldsmiths, who could also pay a higher rent."
    },
    {
        id: "12",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/37/David_by_Michelangelo_in_The_Gallery_of_the_Accademia_di_Belle_Arti.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Galleria+dell'Accademia/@43.7768184,11.2564537,17z/data=!3m1!4b1!4m5!3m4!1s0x132a558cbc91b927:0x6d4cf7aefa41a2c7!8m2!3d43.7767729!4d11.2587437",
        destination: "Accademia Gallery Florence",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The most famous statue in Florence is by far the David by Michelangelo. The statue was first placed in the Piazza della Signoria , but to protect it from the weather, David was transferred to the Galleria dell'Accademia in Florence. There is only a replica left on the piazza. The statue at the city's vantage point, Piazzale Michelangelo, is also just a copy of the real statue. But in the Galleria you will not only find the original David; You can also find artists such as Botticelli and Del Sarto."
    },
    {
        id: "13",
        img: "https://cdn.enjoytravel.com/img/travel-news/its-the-lowest-point-in-venice.jpg",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Piazza+San+Marco,+Firenze+FI,+%C4%B0talya/@43.7768184,11.2564537,17z/data=!4m5!3m4!1s0x132a541b5d55a899:0xfadb5139f44412d9!8m2!3d43.7780799!4d11.2587219",
        destination: "Piazza San Marco",
        date: "9 August, 2021 - 16 August, 2021",
        info: "Piazza San Marco often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza (the Square). All other urban spaces in the city (except the Piazzetta and the Piazzale Roma) are called campi (fields). The Piazzetta (little Piazza/Square) is an extension of the Piazza towards San Marco basin in its southeast corner (see plan). The two spaces together form the social, religious and political centre of Venice and are commonly considered together."
    },
    {
        id: "14",
        img: "https://duomo.shbcdn.com/blobs/variants/a/c/8/e/ac8e3797-d691-420b-9b49-0d851f3ca9c3_xl.jpg?_636840242257777638",
        country: "Italy",
        gps: "https://www.google.com/maps/place/Duomo+di+Milano/@45.4641013,9.1874418,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c6aec34636a1:0xab7f4e27101a2e13!8m2!3d45.4640976!4d9.1919265",
        destination: "Duomo",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The symbol of Milan. This grand cathedral towers over the city with its countless white marble spires."
    },
    {
        id: "15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Parliament_of_Hungary_November_2017.jpg/1200px-Parliament_of_Hungary_November_2017.jpg",
        country: "Hungary",
        gps: "https://www.google.com/maps/place/Macaristan+Parlamento+Binas%C4%B1/@47.5071246,19.0434803,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc1046d4a33d:0x342122b8ff8f0f6e!8m2!3d47.507121!4d19.045669",
        destination: "Parliament",
        date: "9 August, 2021 - 16 August, 2021",
        info: "The Hungarian Parliament, richly decorated both inside and out, was inspired by the Houses of Parliament in London, thus it was designed in Neo-Gothic style, although it also bears Renaissance and Baroque stylistic flourishes. The third largest parliament in the world, it was built on the 1000th anniversary of the foundation of the state of Hungary."
    },
    {
        id: "16",
        img: "https://images.placesonline.com/photos/424012709210226_Vienna_1652367460.jpg?quality=80&w=700",
        country: "Austria",
        gps: "https://www.google.com/maps/place/Aziz+Stephan+Katedrali/@48.208415,16.371282,17z/data=!3m2!4b1!5s0x476d079f9dbbb573:0x1d6dc1f6c15851df!4m5!3m4!1s0x476d079f223feccf:0x179757f3fadc3159!8m2!3d48.2084114!4d16.3734707",
        destination: "Duomo di Vienna",
        date: "18 August, 2021 - 21 August, 2021",
        info: "St. Stephen's Cathedral (German: Stephansdom) is the mother church of the Roman Catholic Archdiocese of Vienna and the seat of the Archbishop of Vienna, Christoph Cardinal Schönborn, OP. The current Romanesque and Gothic form of the cathedral, seen today in the Stephansplatz, was largely initiated by Duke Rudolf IV (1339–1365) and stands on the ruins of two earlier churches, the first a parish church consecrated in 1147. The most important religious building in Vienna, St. Stephen's Cathedral has borne witness to many important events in Habsburg and Austrian history and has, with its multi-coloured tile roof, become one of the city's most recognizable symbols."
    },
    {
        id: "17",
        img: "https://www.diocese-porto.pt/media/1629/39174325381_b708ab6237_o.jpg",
        country: "Portugal",
        gps: "https://www.google.com/maps/place/Porto+Cathedral/@41.1447111,-8.6192844,16z/data=!4m10!1m2!2m1!1sS%C3%A9+Catedral+do+Porto!3m6!1s0xd2464e13991ebb9:0x4a1cccaea07537e9!8m2!3d41.1428531!4d-8.6111165!15sChVTw6kgQ2F0ZWRyYWwgZG8gUG9ydG9aFyIVc8OpIGNhdGVkcmFsIGRvIHBvcnRvkgEJY2F0aGVkcmFsmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5OZWpkSWRXOVJSUkFC4AEA!16zL20vMGZoZHNw",
        destination: "Sé Catedral do Porto",
        date: "27 July, 2021 - 9 August, 2021",
        info: "Porto Cathedral, like the first band of city walls, was born in the 12th century by initiative of its first bishop, D. Hugo. The temple is also known as the church of Santa Maria do Porto, de Nossa Senhora do Porto da Eterna Salvação or Nossa Senhora da Vandoma  – which attests to the importance the Marian cult has. "
    },
    {
        id: "18",
        img: "https://s7a5n8m2.stackpathcdn.com/wp-content/uploads/2019/03/arco-da-rua-augusta-praca-comercio.jpg",
        country: "Portugal",
        gps: "https://www.google.com/maps/place/R.+Augusta,+Lisboa,+Portekiz/@38.7106,-9.1398373,17z/data=!3m1!4b1!4m5!3m4!1s0xd19347903cb1ee9:0x3f2dabffd6194d93!8m2!3d38.7105958!4d-9.1376486",
        destination: "Arco da Rua Augusta",
        date: "27 July, 2021 - 9 August, 2021",
        info: "The Rua Augusta Arch (Portuguese: Arco da Rua Augusta) is a stone, triumphal arch-like, historical building and visitor attraction in Lisbon, Portugal, on the Praça do Comércio. It was built to commemorate the city's reconstruction after the 1755 earthquake. It has six columns (some 11 m high) and is adorned with statues of various historical figures. Significant height from the arch crown to the cornice imparts an appearance of heaviness to the structure. The associated space is filled with the coat of arms of Portugal. The allegorical group at the top, made by French sculptor Célestin Anatole Calmels, represents Glory rewarding Valor and Genius."
    }
]

export default data