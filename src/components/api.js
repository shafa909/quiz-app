import axios from 'axios';
const baseURL = 'https://eok9ha49itquif.m.pipedream.net';

export const getQuestions = async () => {
  return axios
    .get(baseURL)
    .then((response) => {})
    .catch(() => {
      // acuatlly I got error while fetching api that provided by sauce lab,
      // so I created some question set from json file that exist in shared test git repo.
      const randomNumber = Math.floor(Math.random() * 21);
      return questionList[randomNumber];
    });
};

const questionList = [
  [
    {
      answerSha1: '7d94bcd89230e0b7091297d0a967f5fe01e65eeb',
      question: 'A \'Boomer" Is The Male Of Which Animal?',
    },
    {
      answerSha1: 'dbd37b4747566d79112b764001f3521b33a3c351',
      category: 'Music',
      question: "Which British recording artist released the studio album 'The Dreaming'?",
    },
    {
      answerSha1: 'dbd37b4747566d79112b764001f3521b33a3c351',
      question:
        "Which British recording artist, singer, songwriter, musician and record producer released the studio album 'The Red Shoes'?",
    },
    {
      answerSha1: '935282ecb559832b59e05fa4ea558e8d1a1d84aa',
      question: 'Nur-Sultan is the capital city of which country?',
    },
    {
      answerSha1: '12d378cc2f785c057d9ea5cb5b5a20ac18d69616',
      question: "Which actor has starred in films including The Matrix and Bram Stoker's Dracula?",
    },
  ],
  [
    {
      answerSha1: '534e992dd7be5dc77b95d86bd6cee0a9adce5fdb',
      question: 'The country of Denmark is on which continent?',
    },
    {
      answerSha1: '534e992dd7be5dc77b95d86bd6cee0a9adce5fdb',
      question: 'The country of Monaco is on which continent?',
    },
    {
      answerSha1: 'd5a63c95d431e19e371bfa1b7eb0d6aeef5cc7ea',
      question: 'What is Omnology the study of?',
    },
    {
      answerSha1: '19a92d04f6ee2ead20a017b7e8df03464f980c6b',
      question: "Which pasta's name means 'Butterflies'?",
    },
    {
      answerSha1: '4441d677dcdf20ee21fe0fc33c9f7258f2df8d13',

      question: "Which film contains the character 'Marge Gunderson'?",
    },
  ],

  [
    {
      answerSha1: 'b1d5781111d84f7b3fe45a0852e59758cd7a87e5',
      question: 'What Is The Value Of The Letter Q In Scrabble',
    },
    {
      answerSha1: 'b1d5781111d84f7b3fe45a0852e59758cd7a87e5',
      question: 'How many cores does the Intel i7-6950X have?',
    },
    {
      answerSha1: 'e3cbba8883fe746c6e35783c9404b4bc0c7ee9eb',
      question:
        'According to the International System of Units, how many bytes are in a kilobyte of RAM?',
    },
    {
      answerSha1: 'b27585828a675f5acfef052dd1a8cf0c6c1ee4b0',
      question: 'How many kilobytes in one gigabyte (in decimal)?',
    },
    {
      answerSha1: '128351137a9c47206c4507dcf2e6fbeeca3a9079',
      question: 'How many bytes are in a single Kibibyte?',
    },
  ],
  [
    {
      answerSha1: 'bfaa88aba7ad0663aae1244f56060fdac109bdfa',
      question: 'The Average Woman Has 9 Pints Of Blood, How Much Has The Average Man',
    },
    {
      answerSha1: '7b52009b64fd0a2a49e6d8a939753077792b0554',
      question:
        'Introduced in 46 BC by Julius Caesar, how many months was the Julian calendar divided into?',
    },
    {
      answerSha1: 'dbd4c50902ae857a9873ef474f7ee1a1260934a9',
      question: 'How long is an IPv6 address?',
    },
    {
      answerSha1: '80f4744b624046be42b6077e8ba7316b316d0894',
      question: 'In What Year Was The French Declaration Of The Rights Of Man?',
    },
    {
      answerSha1: '1ba3277e3f03964bfbeb6a7b99a7d2667f3a1d94',
      question: 'When was the first blood bank opened?',
    },
  ],
  [
    {
      answerSha1: '0adf295d5cc6266a9dfe2f4a8b32b199ba046b46',
      question: 'In which year was The Wizard of Oz released?',
    },
    {
      answerSha1: '1f927f440f0d4981ebc6b80725f69a0fcd4bd15c',
      question: 'In which year was Citizen Kane released?',
    },
    {
      answerSha1: 'f2779feb3682526b35eb6a642e38b67d68c654e4',
      question: 'In what year of WW II did Russia declare war on Japan?',
    },
    {
      answerSha1: 'f2779feb3682526b35eb6a642e38b67d68c654e4',
      question: 'In which year was the end of WWII?',
    },
    {
      answerSha1: 'e2154fea5da2dd0d1732ff30931723c2973003a0',
      question: 'What is the boiling point of water in Farenheit?',
    },
  ],
  [
    {
      answerSha1: 'd435a6cdd786300dff204ee7c2ef942d3e9034e2',
      question:
        'How many bits make up the significand portion of a single precision floating point number?',
    },
    {
      answerSha1: '4d134bc072212ace2df385dae143139da74ec0ef',
      question:
        'How many days will it be before an analogue clock losing 30 minutes a day shows the right time again?',
    },
    {
      answerSha1: '4d134bc072212ace2df385dae143139da74ec0ef',
      question: 'How Many Draughts Are On The Board At The Start Of A Game?',
    },
    {
      answerSha1: 'dd7c1a3d9d5627da9aea5415e3d07202bfb5925e',
      question: 'How many values can a single byte represent?',
    },
    {
      answerSha1: '77de68daecd823babbb58edb1c8e14d7106e83bb',
      question: 'How many astronauts manned each Apollo flight?',
    },
  ],
  [
    {
      answerSha1: '92cfceb39d57d914ed8b14d0e37643de0797ae56',
      question:
        'According To "The Hitchhikers Guide To The Galaxy" what number is the answer to everything?',
    },
    {
      answerSha1: 'c1dfd96eea8cc2b62785275bca38ac261256e278',
      question:
        'What Do The Lyrics In The 1st Line Of The Elvis Presley Song “Blue Suede Shoes” Add Up To?',
    },
    {
      answerSha1: '902ba3cda1883801594b6e1b452790cc53948fda',
      question: 'What Do The Opposite Sides Of A Standard Dice Always Total?',
    },
    {
      answerSha1: 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f',
      question: 'What amount of bits commonly equals one byte?',
    },
    {
      answerSha1: 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f',
      question: "How many fighters are playable in 'Street Fighter II'?",
    },
  ],
  [
    {
      answerSha1: '78af877fb8ade029545f2c05490bc237e8bc19b7',
      question: 'What Did My True Love Give To Me On The Ninth Day Of Christmas?',
    },
    {
      answerSha1: 'f8440097dce724d8592b46527237947bb5c4b552',
      question: 'What is the word for a group of mules?',
    },
    {
      answerSha1: '139cbc70c2b23b40205accd9e5ddd668a446e03d',
      question: 'What is a male skunk known as?',
    },
    {
      answerSha1: '84c077b505a070d7fdb4d35003edf4fc1a9c4d96',
      question: 'What is the word for a group of bucks?',
    },
    {
      answerSha1: '6a29103bb287699c197e013b7125a56b0b176546',
      question: 'What is the word for a male weasel?',
    },
    {
      answerSha1: '9c92262cf056e9e617e4a0f4dfc238e89c4ca55e',
      question: 'A male rhinoceros is known as what?',
    },
  ],
  [
    {
      answerSha1: '9c92262cf056e9e617e4a0f4dfc238e89c4ca55e',
      question: 'A male walrus is known as what?',
    },
    {
      answerSha1: '68df13e9f7df5f9a57ee3e78fe1d944aaa0152a0',
      question: 'What is the word for a young rabbit?',
    },
    {
      answerSha1: '14e60d90afddbfc11e76e9e4284a4d7884d9c199',
      question: 'What is the word for a young bird?',
    },
    {
      answerSha1: '5f14c3f8a53b33963d57a9d09c845c3db344cf8c',
      question: 'What would you call a male swan?',
    },
    {
      answerSha1: 'd7e7d0fca29966d9ce3e061303b57709bb75a41f',
      question: 'What is a female hippopotamus known as?',
    },
    {
      answerSha1: 'd7e7d0fca29966d9ce3e061303b57709bb75a41f',
      question: 'What is a female whale known as?',
    },
  ],
  [
    {
      answerSha1: '810d1b386cfc9a8840cb55dc547e30a820ca23c8',
      question: 'What Was A Ballista?',
    },
    {
      answerSha1: '8d1af47a10d95e93eb9fe96e77d42ba45337397c',
      question: 'What is a female panda known as?',
    },
    {
      answerSha1: '9fb0cf4e535092c4cc9ee7a3b39c6ddafd0bed18',
      question: 'What is a baby spider known as?',
    },
    {
      answerSha1: '490f4f43fcde1d383864f0ab8d6e5f24390da189',
      question: 'What is the word for a group of gnats?',
    },
    {
      answerSha1: '8f9f02158aa3d23c827aeb88c5f0d574d6d25a64',
      question: 'What is the word for a male eagle?',
    },
  ],
  [
    {
      answerSha1: 'd6f8cdd522e4013ea482c6dfb3154c086b627eec',
      question: 'Which Is The Largest State In America',
    },
    {
      answerSha1: '68c05b14345d7894bb7cc9a7d8e05d97e6b504b2',
      question: 'Where would you find the city of Algiers?',
    },
    {
      answerSha1: 'e275b603b3dd716f58a2787f1c4c67d825aee6b4',
      question: "Which band includes 'Jerry Cantrell'?",
    },
    {
      answerSha1: '4ada7ce27ef0044c7761929842dfe43e41563590',

      question: "Which author wrote 'New Selected Stories'?",
    },
    {
      answerSha1: '4ada7ce27ef0044c7761929842dfe43e41563590',
      question: "Which author wrote 'The Moons of Jupiter'?",
    },
  ],
  [
    {
      answerSha1: 'ec933ff107fcd8b4a294687913884d1f6831f333',
      question: "What drink is an almond liqueur that comes from the Italian word for 'bitter'?",
    },
    {
      answerSha1: '1e17fd881ebaa6394ae8a8f6c7f8ef171a52aca8',
      question:
        'Which internet company began life as an online bookstore called &#039;Cadabra&#039;?',
    },
    {
      answerSha1: '60e3cf9d66fe3bb702f98f9de4843de9d85908d2',
      question: 'Which film won the Academy Award for Best Picture in 1999?',
    },
    {
      answerSha1: 'ea41cab0da3e23649a75faa42ed6a774eb59934f',
      question: 'What sort weapon was used by Jack Torrance in The Shining?',
    },
    {
      answerSha1: 'ce2d4a6e5ebce4d6f08048c6ce9215de105ff820',
      question: 'Which Famous Artist Was Shot And Wounded By Valeria Solanis In 1968?',
    },
  ],
  [
    {
      answerSha1: 'b4b181b86d0b5aaa0f5f363f6b8f2996756ebaff',
      question: 'What is the capital city of Saint Kitts and Nevis?',
    },
    {
      answerSha1: '34e6f2ac5d7c6e0c29aef43982cb67a656b1f366',
      question: 'What Is Tofu Also Known As?',
    },
    {
      answerSha1: 'f85803414607c408e60e02c46ced51233113c87f',
      question: "Which English-Australian pop group released the song 'To Love Somebody'?",
    },
    {
      answerSha1: '478f54aa9791d3b9e1ff63cc0fbb67c945cba822',
      question: 'What is Coleopterology the study of?',
    },
    {
      answerSha1: 'aaaa209cd672af09f930f573fd91d2701e45cd8b',
      question: "Which film contains the character 'Chance the Gardener'?",
    },
  ],
  [
    {
      answerSha1: 'bc85844ebeb428aa23e8d822d800df18e32fff13',
      question:
        "Which musician has famously performed over 3,000 shows in their 'Never Ending Tour'?",
    },
    {
      answerSha1: 'd3810d4f84e83b51882245f41ac6efb5c2ac6599',
      question: 'Who was the founder of Live Aid?',
    },
    {
      answerSha1: '6092a032351d76d6aace89d4467bac17e09b52ce',
      question: 'In which US city is Beacon Street?',
    },
    {
      answerSha1: '1f67f6952c506b2384feefa1a208bf78ac7bb8e1',
      question:
        "In The Movie 'Interview With The Vampire' Who Played The Vampire Being Interviewed?",
    },
    {
      answerSha1: '8b9248a4e0b64bbccf82e7723a3734279bf9bbc4',
      question: 'Meningitis affects the _________.',
    },
    {
      answerSha1: '80c48f98c687b84762de5f1a4a187e6f8b8678a2',
      question: 'What type of instrument is a trombone?',
    },
    {
      answerSha1: '90d014520eed41efb06dc1736acb362a613988ee',
      question: 'Which country hosted the 2014 FIFA World Cup?',
    },
    {
      answerSha1: '90d014520eed41efb06dc1736acb362a613988ee',
      question: 'Which country won the 1958 FIFA World Cup, hosted in Sweden?',
    },
  ],
  [
    {
      answerSha1: 'b5a58586e409523d835e67c39f73cc81b696277d',
      question: 'Chablis comes from which French wine region?',
    },
    {
      answerSha1: '32166a2246ae10b08fd391cd8b038ed2b52c171e',
      question: 'Ouagadougou is the capital of ______?',
    },
    {
      answerSha1: '05d1ce01dc52e88bf61286994837c82c8fa5089e',
      question: 'Savoy And Late Flat Dutch Are Both Varieties Of Which Vegetable?',
    },
    {
      answerSha1: 'e03dc4c55b5cc0d05f0f38b46022ccfdc91ff949',
      question: 'Where was the Rosetta Stone found?',
    },
    {
      answerSha1: '6c7a31c96fbe160ab07fb1a5632f9c6649055c5e',
      question: 'What did the Romans call Scotland?',
    },
    {
      answerSha1: 'e37b030af5fad71e3e0e99b0edc463cfdd2d8931',
      question: 'Which US state exports the most wine?',
    },
    {
      answerSha1: 'a32b9f3c01cbf6c70db903bb271068b045205196',
      question: "Which US President had the first name 'Calvin'?",
    },
  ],
  [
    {
      answerSha1: '2051339b9ed81b92267a767b02a5f72cd2a35e4a',
      question: 'At the time of Julius Caesar, who was the ruler of Egypt?',
    },
    {
      answerSha1: '006de2972cdaf87e53a91040b65780c3dbf91f02',
      question: 'Who Invented The ZX80, The First Widely Available Personal Computer?',
    },
    {
      answerSha1: '006de2972cdaf87e53a91040b65780c3dbf91f02',
      question: 'Who Invented the worlds first electronic pocket calculator in 1972?',
    },
    {
      answerSha1: '0c4f232eb0a40d7816972b7702c851b5b2c0fa8a',
      question: 'Which Significant Did Dr John Pemberton Of Atlanta Georgia Invent In 1886?',
    },
    {
      answerSha1: '09f836894fc1fe9af6f429fc24dcccc2e6847fe0',
      question:
        "Name the movie that matches the following plot summary: 'An aspiring musician enters the Land of the Dead to find his great-great-grandfather.'",
    },
    {
      answerSha1: 'a358292b9553f5df856b13ff841a10ecabc280d6',
      question:
        'What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?',
    },
    {
      answerSha1: 'ffd4002ff99e67af4432834c68e58c45f11e3d58',
      question: 'Which country is associated with the drink aguardiente?',
    },
  ],
  [
    {
      answerSha1: '315eb81055a713d92493d373e04bc7f522eaab81',
      question: "Which musician released the song 'Let's Dance'?",
    },
    {
      answerSha1: '315eb81055a713d92493d373e04bc7f522eaab81',
      question: "Who released the iconic album 'Ziggy Stardust'?",
    },
    {
      answerSha1: 'f281cc9db370b94a9946a6ed6a2eceb3736fff8a',
      question: "Which word is defined as 'a morbid fear of dinner parties'?",
    },
    {
      answerSha1: 'dd561b8eaa1ba0992e3e681ab46b32fa785bc71d',
      question: 'The Airline Danair Is Based Where?',
    },
    {
      answerSha1: 'cf4c4eafb26f8e7ffe0edeb00e18a02472f6aaf6',
      question: 'The C programming language was created by this American computer scientist. ',
    },
    {
      answerSha1: '88550f693e2a50fc9a29f11fcf20426e2f24916b',
      question: 'What is the capital of Colorado? ',
    },
  ],
  [
    {
      answerSha1: 'c81b92e061c79c1c266b2aa08077d23012ffa14c',
      question: "Which American progressive metal band released the studio album 'Octavarium'?",
    },
    {
      answerSha1: '4565014cdc6b876c4531bbae8a5d2377946beaa1',
      question: 'What is Oneirology the study of?',
    },
    {
      answerSha1: '343f3c167e645a64666f815adfcd26b41f68d20a',
      question: 'Who performed the theme song to the James Bond film A View to a Kill?',
    },
    {
      answerSha1: '343f3c167e645a64666f815adfcd26b41f68d20a',
      question: "Who Had An 80's Hit With The Song 'Is There Something I Should Know'?",
    },
    {
      answerSha1: '9a61077b4618cddade1df30e97697a8d9366ca51',
      question:
        "Which actor has had roles in films including Lemony Snicket's A Series of Unfortunate Events and Kramer vs. Kramer?",
    },
    {
      answerSha1: '0aa7a65144d75f8b66ad8980173b5bc078bbed30',
      question: "What nationality is the lager producer, `grolsch'?",
    },
    {
      answerSha1: 'd0a65436a81128b4fac0f27a75b9a15cfd6f07c9',

      question: "'Witchy Woman' was a hit for which rock group in the 1970's?",
    },
  ],
  [
    {
      answerSha1: '36a7ac9bd13edc65df386d0a809abc6268b30a1a',
      question: 'Which American state\'s name is Spanish for "flowered" or "flowery land"?',
    },
    {
      answerSha1: 'd8f7e9c783be82328ffc2f348b0f257b671c1107',
      question: 'What is Rheology the study of?',
    },
    {
      answerSha1: '4d61744f34c1d30b148e5eb76286c9aae2680f6e',
      question: 'What is the meaning of the name of the constellation Equuleus?',
    },
    {
      answerSha1: '2d27b62c597ec858f6e7b54e7e58525e6a95e6d8',
      question: 'With which sport is Pele associated?',
    },
    {
      answerSha1: '2d27b62c597ec858f6e7b54e7e58525e6a95e6d8',
      question: 'With which sport is Wayne Rooney associated?',
    },
    {
      answerSha1: '6a47a016861a7e8ee58ba4e9ec145f3a8988de86',
      question: "What do people mean when type the letters 'FTW' in a message on the internet?",
    },
    {
      answerSha1: '73ce3df5c0ed4d9bf9894ca96fa13a6ff8a1611d',
      question: "Which author wrote 'Dune novel series'?",
    },
  ],
  [
    {
      answerSha1: '44be75076a0261585aff65e9e3ea53c37bace6c2',
      question: 'What is fungology the study of?',
    },
    {
      answerSha1: 'f9d07d08a60e26f7f09f40ebf7e04640a8d90992',
      question: 'Libreville is the capital city of which country?',
    },
    {
      answerSha1: 'e1c8a4c0b726c45b44230d351030b613193b4d99',
      question: 'What is the capital city of Botswana?',
    },
    {
      answerSha1: '118b01a64b090e195536d60b48bf3df983a5380a',
      question: 'Cows Come In Herds, What Do Geese Come In?',
    },
    {
      answerSha1: '33ebcf737b6921f9628a7e92bfb1ea3fc8537ae9',
      question: 'This organ is a small pouch that stores bile.',
    },
    {
      answerSha1: '50c30acabb6cdfc8528d8b908b7aab574f8438e8',
      question:
        'Dutch computer scientist Mark Overmars is known for creating which game development engine?',
    },
  ],
  [
    {
      answerSha1: 'f4a6f822140e6c3f0abf1595807da36306b3a2f0',
      question: 'Who Released The 70\'s Album Entitled "Blue"?',
    },
    {
      answerSha1: '6d3b6650e7ba479cb362565021a92f01557a7f8c',
      question: "Which author wrote 'Heart of Darkness'?",
    },
    {
      answerSha1: 'd38eb97372bcd3e43cbb6fc02fb9784cd9aea8b3',
      question:
        'Which actor has had starring roles in films including Guardians of the Galaxy and No Country for Old Men?',
    },
    {
      answerSha1: 'b05301e79dc7855e86af51e06fc72313908970d2',
      question: "Which author wrote 'Sophie's World'?",
    },
    {
      answerSha1: '2176e23167491f59d34a718ce8301e8f82a52754',
      question: "Which author wrote 'The Mysterious Island'?",
    },
    {
      answerSha1: '2176e23167491f59d34a718ce8301e8f82a52754',
      question: "Which author wrote 'Twenty Thousand Leagues Under the Sea'?",
    },
    {
      answerSha1: 'a34968f5fc1130d5a425084511ae4557310eb963',
      question: "Which actress has featured in films including Ocean's Eleven and Pretty Woman?",
    },
  ],
];
