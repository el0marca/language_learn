const initialState = {
  sentences: [
    [{
        id: 1,
        sntc: 'O, orada işləyir',
        tr: 'He works there',
        ch: 'He works here study there'
      },
      {
        id: 2,
        sntc: 'Mən bunu bilirəm',
        tr: 'I know it',
        ch: 'I know knows this understand it'
      },
      {
        id: 3,
        sntc: 'Biz orada işləyirik',
        tr: 'We work there',
        ch: 'I go We school work works there'
      },
      {
        id: 4,
        sntc: 'O, bunu bilir',
        tr: 'She knows it',
        ch: 'She knows likes it You know'
      },
      {
        id: 5,
        sntc: 'Mən bu ölkədə yaşayıram',
        tr: 'I live in this country',
        ch: 'I live We city in this country'
      },
      {
        id: 6,
        sntc: 'O, bunu başa düşür',
        tr: 'He understands it',
        ch: 'He understands know They it'
      },
      {
        id: 7,
        sntc: 'Mən bunu görürəm',
        tr: 'I see it',
        ch: 'I see it know knows He sees'
      },
      {
        id: 8,
        sntc: 'Mən bunu çox yaxşı başa düşürəm',
        tr: 'I understand it very well',
        ch: 'I understand He like it very well'
      },
      {
        id: 9,
        sntc: 'O, bunu istəyir',
        tr: 'He wants it',
        ch: 'He wants understand We know it'
      },
      {
        id: 10,
        sntc: 'O, orada işləyir',
        tr: 'She works there',
        ch: 'She study work works there'
      }
    ],
    [{
        id: 11,
        sntc: 'Mənim maşınım var',
        tr: 'I have a car',
        ch: 'I have We house an a car cars'
      },
      {
        id: 12,
        sntc: 'O, bu səhvi görür',
        tr: 'He sees this mistake',
        ch: 'He We look sees this mistake'
      },
      {
        id: 13,
        sntc: 'Mən özümü xoşbəxt hiss edirəm',
        tr: 'I feel happy',
        ch: 'I feel know knows good We happy'
      },
      {
        id: 14,
        sntc: 'O, daha çox təcrübə keçmək istəyir',
        tr: 'She wants more practice',
        ch: 'She wants I more like practice'
      },
      {
        id: 15,
        sntc: 'Mən də orada işləyirəm',
        tr: 'I also work there',
        ch: 'I also work study here there'
      },
      {
        id: 16,
        sntc: 'Bu marağlı gəlir',
        tr: 'It seems interesting',
        ch: 'It He seems looks interesting'
      },
      {
        id: 17,
        sntc: 'Bu tez-tez baş verir',
        tr: 'It happens often',
        ch: 'It happens looks sometimes often'
      },
      {
        id: 18,
        sntc: 'Onun böyük evi var',
        tr: 'She has a big house',
        ch: 'She has a big an car We house'
      },
      {
        id: 19,
        sntc: 'Mən bu şəhərdə yaşayıram',
        tr: 'I live in this city',
        ch: 'I live We country in this city'
      },
      {
        id: 20,
        sntc: 'Mən daha çox təcrübə keçmək istəyirəm',
        tr: 'I want more practice',
        ch: 'I We like want more practice'
      }
    ],
    [{
        id: 21,
        sntc: 'Mən parka getmək istəyirəm',
        tr: 'I want to go to the park',
        ch: 'I You want school to go to the park'
      },
      {
        id: 22,
        sntc: 'Onun dollarları var',
        tr: 'She has dollars',
        ch: 'She has dollars dollar We have'
      },
      {
        id: 23,
        sntc: 'Onun təklifləri var',
        tr: 'She has offers',
        ch: 'She has I offers offer money'
      },
      {
        id: 24,
        sntc: 'O, İngilis dilini öyrənməyə çalışır',
        tr: 'He tries to learn English',
        ch: 'He We tries try study to learn English'
      },
      {
        id: 25,
        sntc: 'Mən onun etdiyi hər şeyi bilmək istəyirəm',
        tr: 'I want to know everything he does',
        ch: 'I want feel to know like everything he does'
      },
      {
        id: 26,
        sntc: 'O, tez-tez kinoteatra gedir',
        tr: 'She often goes to the cinema',
        ch: 'She often this I go goes to the cinema'
      },
      {
        id: 27,
        sntc: 'Sən bunu bilirsən',
        tr: 'You know it',
        ch: 'You We know knows understand it'
      },
      {
        id: 28,
        sntc: 'Mən onun etdiyi hər şeyi bilmək istəyirəm',
        tr: 'I want to know everything she does',
        ch: 'I want like need to know everything she does'
      },
      {
        id: 29,
        sntc: 'O, mənə kömək etməyə çalışır',
        tr: 'He tries to help me',
        ch: 'He tries We wants try to help me'
      },
      {
        id: 30,
        sntc: 'Mənim təklifim var',
        tr: 'I have an offer',
        ch: 'I have has You offers an offer'
      }
    ],
    [{
        id: 31,
        sntc: 'Bu dərslər mənə kömək edir',
        tr: 'These lessons help me',
        ch: 'These this like lessons help helps me'
      },
      {
        id: 32,
        sntc: 'Mənim dostum bunu etməyə cəhd edir',
        tr: 'My friend tries to do it',
        ch: 'My Your girlfriend friend friends tries to do it'
      },
      {
        id: 33,
        sntc: 'İdeyanız çox maraqlı gəlir',
        tr: 'Your idea seems very interesting',
        ch: 'Your You My idea look seems very interesting'
      },
      {
        id: 34,
        sntc: 'Mənim atam adətən bütün məlumatları yoxlayır',
        tr: 'My father usually checks all the information',
        ch: 'My father usually always know mother checks all the information'
      },
      {
        id: 35,
        sntc: 'Mənim dostumun maşını var',
        tr: 'My friend has a car',
        ch: 'My friend you have Your has a car'
      },
      {
        id: 36,
        sntc: 'Onun şirkəti var',
        tr: 'She has a company',
        ch: 'She We have has a company'
      },
      {
        id: 37,
        sntc: 'Bizim anamız da eyni fikirdədir',
        tr: 'Our mother thinks the same',
        ch: 'Our We think mother know thinks the same'
      },
      {
        id: 38,
        sntc: 'Bu dərslər çox faydalı görünür',
        tr: 'These lessons seem very useful',
        ch: 'These this study lessons seem seems very useful'
      },
      {
        id: 39,
        sntc: 'Həmin təklif maraqlı gəlir',
        tr: 'That offer seems interesting',
        ch: 'That this like offer seems seem interesting'
      },
      {
        id: 40,
        sntc: 'Bu şirkətin pulu var',
        tr: 'This company has money',
        ch: 'This that company have has money many'
      }
    ],
    [{
        id: 41,
        sntc: 'Mənim bacım var',
        tr: 'I have a sister',
        ch: 'I have We has brother a an sister'
      },
      {
        id: 42,
        sntc: 'O, bunu bilir',
        tr: 'She knows it',
        ch: 'She I understand know understands knows it'
      },
      {
        id: 43,
        sntc: 'Mənim bacım bu yerdə yaşayır',
        tr: 'My sister lives in this place',
        ch: 'My Your works sister lives live in this place'
      },
      {
        id: 44,
        sntc: 'Sən İngilis dilində çox yaxşı danışırsan',
        tr: 'You speak English very well',
        ch: 'You I speak speaks know read English very well'
      },
      {
        id: 45,
        sntc: 'O, mənə kömək edir',
        tr: 'She helps me',
        ch: 'She We helps know my help you me'
      },
      {
        id: 46,
        sntc: 'O, bunu istəyir',
        tr: 'He wants it',
        ch: 'He wants want We know knows it'
      },
      {
        id: 47,
        sntc: 'Mənim qardaşım da eyni fikirdədir',
        tr: 'My brother thinks the same',
        ch: 'My brother father thinks think seem the same'
      },
      {
        id: 48,
        sntc: 'O, sənin üçün darıxır',
        tr: 'He misses you',
        ch: 'He I know misses miss you'
      },
      {
        id: 49,
        sntc: 'Onun pişiyi var',
        tr: 'She has a cat',
        ch: 'She have has an a want cat'
      },
      {
        id: 50,
        sntc: 'O, İngilis dilində kitablar oxuyur',
        tr: 'She reads English books',
        ch: 'She speak I reads book English books'
      }
    ],
    [{
        id: 51,
        sntc: 'Mən yaxşı iş sahibi olmaq istəyirəm',
        tr: 'I want to have a good job',
        ch: 'I want that an to have a good job'
      },
      {
        id: 52,
        sntc: 'Mən İngilis dilində sərbəst və düzgün danışmaq istəyirəm',
        tr: 'I want to speak English fluently and correctly',
        ch: 'I want to read an speak English fluently and correctly'
      },
      {
        id: 53,
        sntc: 'Mən İngilis dilimi təkmilləşdirmək istəyirəm',
        tr: 'I want to improve my English',
        ch: 'I want to this We improve my English'
      },
      {
        id: 54,
        sntc: 'Mənim dostum xaricdə yaşamaq istəyir',
        tr: 'My friend wants to live abroad',
        ch: 'My friend They friends wants to live abroad'
      },
      {
        id: 55,
        sntc: 'Mən xaricə getmək istəyirəm',
        tr: 'I want to go abroad',
        ch: 'I want to go city They abroad'
      },
      {
        id: 56,
        sntc: 'O, İngilis dilini bilmək istəyir',
        tr: 'He wants to know English',
        ch: 'He wants to know I read English'
      },
      {
        id: 57,
        sntc: 'Mən başqa yerə getmək istəyirəm',
        tr: 'I want to go to another place',
        ch: 'I want to go to other there another place'
      },
      {
        id: 58,
        sntc: 'Mən İngilis dilində düzgün danışmaq istəyirəm',
        tr: 'I want to speak English correctly',
        ch: 'I want to speak understand He English correctly'
      },
      {
        id: 59,
        sntc: 'Mənim valideynlərim başqa yerdə yaşamaq istəyirlər',
        tr: 'My parents want to live in another place',
        ch: 'My parents parent life want to live in another place'
      },
      {
        id: 60,
        sntc: 'Mən sənə təşəkkür etmək istəyirəm',
        tr: 'I want to thank you',
        ch: 'I want to thanks them thank you'
      }
    ],
    [{
        id: 61,
        sntc: 'Bu üsul xoşuma gəlir',
        tr: 'I like this method',
        ch: 'I like want this methods method'
      },
      {
        id: 62,
        sntc: 'Mən bu yeri həqiqətən xoşlayıram',
        tr: 'I really like this place',
        ch: 'I really likes that like this place'
      },
      {
        id: 63,
        sntc: 'O da bu dərsi beyənir',
        tr: 'He also likes this lesson',
        ch: 'He also like that likes this lesson'
      },
      {
        id: 64,
        sntc: 'O, həkim olmaq istərdi',
        tr: 'She would like to become a doctor',
        ch: 'She would want I like to become a doctor'
      },
      {
        id: 65,
        sntc: 'Mən xaricə getmək istərdim',
        tr: 'I would like to go abroad',
        ch: 'I would want country like to go abroad'
      },
      {
        id: 66,
        sntc: 'Sənin fikrin xoşuma gəlir',
        tr: 'I like your idea',
        ch: 'I like our your idea ideas'
      },
      {
        id: 67,
        sntc: 'Mən biznesmen olmaq istərdim',
        tr: 'I would like to become a businessman',
        ch: 'I would like likes to become an a businessman businessmans'
      },
      {
        id: 68,
        sntc: 'O, başqa bir yerə getmək istərdi',
        tr: 'He would like to go to another place',
        ch: 'He would like come that to go to another place'
      },
      {
        id: 69,
        sntc: 'Mən bilirəm onlar bunu xoşlayırlar',
        tr: 'I know they like it',
        ch: 'I know they understand We like it'
      },
      {
        id: 70,
        sntc: 'Biz də bunu etməyi xoşlayırıq',
        tr: 'We also like to do it',
        ch: 'We also always want like to do it'
      }
    ],
    [{
        id: 71,
        sntc: 'O, yaxşı iş tapmaq istəmir',
        tr: 'She doesn’t want to find a good job',
        ch: 'She doesn’t don’t I want to find an a good job'
      },
      {
        id: 72,
        sntc: 'O, bunu etməyə çalışmır',
        tr: 'He doesn’t try to do it',
        ch: 'He doesn’t I tries try to do it'
      },
      {
        id: 73,
        sntc: 'Mən bu ölkədə yaşamaq istəmirəm',
        tr: 'I don’t want to live in this country',
        ch: 'I don’t like lives want to live in this country'
      },
      {
        id: 74,
        sntc: 'Mən belə düşünmürəm',
        tr: 'I don’t think so',
        ch: 'I don’t doesn’t think thinks that so'
      },
      {
        id: 75,
        sntc: 'Mən orada oxumaq istəmirəm',
        tr: 'I don’t want to study there',
        ch: 'I don’t doesn’t like live want to study there'
      },
      {
        id: 76,
        sntc: 'Bu faydalı görünmür',
        tr: 'It doesn’t seem useful',
        ch: 'It doesn’t don’t useless seem useful'
      },
      {
        id: 77,
        sntc: 'Mən bu barədə düşünmək istəmirəm',
        tr: 'I don’t want to think about it',
        ch: 'I don’t want understamd that to think about it'
      },
      {
        id: 78,
        sntc: 'Mən bu adamları başa düşmürəm',
        tr: 'I don’t understand these people',
        ch: 'I don’t understand We person these people'
      },
      {
        id: 79,
        sntc: 'Mən bunu müzakirə etmək istəmirəm',
        tr: 'I don’t want to discuss it',
        ch: 'I don’t want this idea to discuss it'
      },
      {
        id: 80,
        sntc: 'Onun maşını yoxdur',
        tr: 'She doesn’t have a car',
        ch: 'She doesn’t has an have I a car'
      }
    ],
    [{
        id: 81,
        sntc: 'Mənim bacım bu müəllimi tanımır',
        tr: "My sister doesn't know this teacher",
        ch: "My sister don't want doesn't know this teacher"
      },
      {
        id: 82,
        sntc: 'Mənim qardaşım bunu sonradan etmək istəmir',
        tr: 'My brother doesn’t want to do it later',
        ch: 'My brother doesn’t don’t like want to do it later'
      },
      {
        id: 83,
        sntc: 'Onların şirkəti bunu etməyə çalışmır',
        tr: 'Their company doesn’t try to do it',
        ch: 'Their company doesn’t don’t try tries to do it'
      },
      {
        id: 84,
        sntc: 'Mənim dostum orada oxumaq istəmir',
        tr: 'My friend doesn’t want to study there',
        ch: 'My friend doesn’t speak this want to study there'
      },
      {
        id: 85,
        sntc: 'Bizim müəllimimiz bunu istəmir',
        tr: 'Our teacher doesn’t want it',
        ch: 'Our teacher teachers like doesn’t want it'
      },
      {
        id: 86,
        sntc: 'Bu təklif o qədər də maraqlı gəlmir',
        tr: 'This offer doesn’t seem so interesting',
        ch: 'This offer offers seems doesn’t seem so interesting'
      },
      {
        id: 87,
        sntc: 'Onların valideynləri özlərini xoşbəxt hiss etmirlər',
        tr: 'Their parents don’t feel happy',
        ch: 'Their parents don’t feels happiness feel happy'
      },
      {
        id: 88,
        sntc: 'O, düşünür ki, pul insanlara xoşbəxtlik gətirmir',
        tr: 'He thinks money doesn’t bring people happiness',
        ch: 'He thinks think money doesn’t bring happy people happiness'
      },
      {
        id: 89,
        sntc: 'Mənim qardaşım mənimlə razı deyil',
        tr: 'My brother doesn’t agree with me',
        ch: 'My brother doesn’t don’t us agree with me'
      },
      {
        id: 90,
        sntc: 'Onun gəliri böyük görünmür',
        tr: "It's profit doesn’t seem big",
        ch: "It's profit money don’t doesn’t seem big"
      }
    ],
    [{
        id: 91,
        sntc: 'Bizə həqiqətən bunu anlamaq lazımdır',
        tr: 'We really need to understand it',
        ch: 'We really need want I to understand it'
      },
      {
        id: 92,
        sntc: 'Sənin məsləhətinə ehtiyacım var',
        tr: 'I need your advice',
        ch: 'I need would his like your advice'
      },
      {
        id: 93,
        sntc: 'Sənə bu qaydanı yadda saxlamaq lazımdır',
        tr: 'You need to remember this rule',
        ch: 'You need He to remember this rule these rules'
      },
      {
        id: 94,
        sntc: 'Mənə daha çox pul istəyirəm',
        tr: 'I want more money',
        ch: 'I need We less want more money'
      },
      {
        id: 95,
        sntc: 'O, sizin köməyinizə ehtiyac duyur',
        tr: 'She needs your help',
        ch: 'She needs need my your help'
      },
      {
        id: 96,
        sntc: 'Məncə, sənə daha az işləmək lazımdır',
        tr: 'I think you need to work less',
        ch: 'I think help you need to work works less'
      },
      {
        id: 97,
        sntc: 'Mənim dostuma indicə sənin məsləhətin lazımdır',
        tr: 'My friend needs your advice right now',
        ch: 'My friend friends needs your you advice right now'
      },
      {
        id: 98,
        sntc: 'Biz həqiqətən bunu anlayırıq',
        tr: 'We really understand it',
        ch: 'We really know understand that it'
      },
      {
        id: 99,
        sntc: 'Mənim həqiqətən daha çox pula ehtiyacım var',
        tr: 'I really need more money',
        ch: 'I really need needs want more money'
      },
      {
        id: 100,
        sntc: 'O, anasına zəng etmək istəyir',
        tr: 'She wants to call mother',
        ch: 'She wants needs say to call mother'
      }
    ],
    [{
        id: 101,
        sntc: 'Sən nəticələrini yaxşılaşdırmağa çalışırsan?',
        tr: 'Do you try to improve your results?',
        ch: 'Do you try tries like to improve your results'
      },
      {
        id: 102,
        sntc: 'Sənin boş vaxtın var?',
        tr: 'Do you have free time?',
        ch: 'Do you have need fluently free time'
      },
      {
        id: 103,
        sntc: 'Mən səhv edirəm?',
        tr: 'Do I make mistake?',
        ch: 'Do I We makes make mistake'
      },
      {
        id: 104,
        sntc: 'Sən bunu xatırlayırsan?',
        tr: 'Do you remember it?',
        ch: 'Do you remember your remembers it'
      },
      {
        id: 105,
        sntc: 'Sənin bu problemdən xəbərin var?',
        tr: 'Do you know about this problem?',
        ch: 'Do you know knows about this that problem'
      },
      {
        id: 106,
        sntc: 'Onlara kömək lazımdır?',
        tr: 'Do they need help?',
        ch: 'Do you they know we need help'
      },
      {
        id: 107,
        sntc: 'Sən bu yeri tez-tez ziyarət edirsən?',
        tr: 'Do you often visit this place?',
        ch: 'Do you often always come visit this place'
      },
      {
        id: 108,
        sntc: 'Mənim məsləhətimə ehtiyacın var?',
        tr: 'Do you need my advice?',
        ch: 'Do you need me needs my advice'
      },
      {
        id: 109,
        sntc: 'Onlar bu qərarı dəstəkləyirlər?',
        tr: 'Do they support this decision?',
        ch: 'Do they their support supports this decision'
      },
      {
        id: 110,
        sntc: 'Sən ona tez-tez zəng edirsən?',
        tr: 'Do you often call him?',
        ch: 'Do you often sometimes calls call him'
      }
    ],
    [{
        id: 111,
        sntc: 'O, onun sözlərinə məhəl qoymur?',
        tr: 'Does he ignore her words?',
        ch: 'Does he ignore ignores him her words'
      },
      {
        id: 112,
        sntc: 'Bu qəribə görünür?',
        tr: 'Does it look strange?',
        ch: 'Does it look looks that strange'
      },
      {
        id: 113,
        sntc: 'O, bunu tez-tez eşidir?',
        tr: 'Does she often hear it?',
        ch: 'Does she often always her hear it'
      },
      {
        id: 114,
        sntc: 'O, hərdən buna məhəl qoymur?',
        tr: 'Does she ignore it sometimes?',
        ch: 'Does she ignore ignores it its sometimes'
      },
      {
        id: 115,
        sntc: 'Bu sizə kömək edir?',
        tr: 'Does it help you?',
        ch: 'Does it ignores your help you'
      },
      {
        id: 116,
        sntc: 'O, bütün bu qaydaları xatırlayır?',
        tr: 'Does he remember all these rules',
        ch: 'Does he remember remembers all everything these rules'
      },
      {
        id: 117,
        sntc: 'O, bunu həmişə deyir?',
        tr: 'Does she always says it?',
        ch: 'Does she always tell often says it'
      },
      {
        id: 118,
        sntc: 'O, bundan tez-tez istifadə edir?',
        tr: 'Does he often use it?',
        ch: 'Does he often useless this use it'
      },
      {
        id: 119,
        sntc: 'O, həmişə İngiliscə danışır?',
        tr: 'Does she always speak English?',
        ch: 'Does she always tell often speak English'
      },
      {
        id: 120,
        sntc: 'Bu peşə onun xoşuna gəlir?',
        tr: 'Does she like this profession?',
        ch: 'Does she likes that like this profession'
      }
    ],
    [{
        id: 121,
        sntc: 'Sənin dostun səninlə razıdır?',
        tr: 'Does your friend agree with you?',
        ch: 'Does your friend friends agree agrees with you'
      },
      {
        id: 122,
        sntc: 'Sənin valideynlərin bunu başa düşür?',
        tr: 'Do your parents understand it?',
        ch: 'Do your parents parent understand know it'
      },
      {
        id: 123,
        sntc: 'Bu sınaq çox asan gəlir?',
        tr: 'Does this test seem very easy?',
        ch: 'Does this test tests seem much very easy'
      },
      {
        id: 124,
        sntc: 'Sənin dostların səninlə razıdırlar?',
        tr: 'Do your friends agree with you?',
        ch: 'Do your friends friend agree agrees with you'
      },
      {
        id: 125,
        sntc: 'Bu nəticə səni motivasiya edir?',
        tr: 'Does this result motivate you?',
        ch: 'Does this result results motivate motivates you'
      },
      {
        id: 126,
        sntc: 'Sənin dostun həmişə sənə dəstək olur?',
        tr: 'Does your friend always support you?',
        ch: 'Does your friend friends always support often you'
      },
      {
        id: 127,
        sntc: 'Bu məlumat əhəmiyyətsiz görünür?',
        tr: 'Does this information seem unimportant?',
        ch: 'Does this that seems information seem unimportant'
      },
      {
        id: 128,
        sntc: 'Sənin dostların əla nəticələr göstərirlər?',
        tr: 'Do your friends show excellent results?',
        ch: 'Do your friends friend look good show excellent results'
      },
      {
        id: 129,
        sntc: 'Bu insan çox yaxşı görünür?',
        tr: 'Does this person seem very good?',
        ch: 'Does this that people person seem very good'
      },
      {
        id: 130,
        sntc: 'O tələbə səhvlərə yol verir?',
        tr: 'Does that student make mistakes?',
        ch: 'Does that student students do make mistakes'
      }
    ],
    [{
        id: 131,
        sntc: 'Pul onu maraqlandırmır',
        tr: "Money doesn't interest her",
        ch: "Money doesn't interest interests he her"
      },
      {
        id: 132,
        sntc: 'Pul onu maraqlandırır?',
        tr: 'Does money interest her?',
        ch: 'Does money interest we hers her'
      },
      {
        id: 133,
        sntc: 'Bu vaxtdan-vaxta baş verir',
        tr: 'It happens from time to time',
        ch: 'It happens happen from time by to time'
      },
      {
        id: 134,
        sntc: 'Bu vaxtdan-vaxta baş verir?',
        tr: 'Does it happens from time to time?',
        ch: 'Does it happens happen Do from time to time'
      },
      {
        id: 135,
        sntc: 'Onlar bunu dəyişməyə çalışırlar',
        tr: 'They try to change it',
        ch: 'They try tries to change changes it'
      },
      {
        id: 136,
        sntc: 'Onlar bunu dəyişməyə çalışırlar?',
        tr: 'Do they try to change it?',
        ch: 'Do they their try to change changes it'
      },
      {
        id: 137,
        sntc: 'O, bizimlə razı deyil',
        tr: "He doesn't agree with us",
        ch: "He doesn't agree agrees by with us"
      },
      {
        id: 138,
        sntc: 'O, bizimlə razıdır?',
        tr: 'Does he agree with us?',
        ch: 'Does he Do agree with them us'
      },
      {
        id: 139,
        sntc: 'O, bu yeri beyənir',
        tr: 'She likes this place',
        ch: 'She likes We like that this place'
      },
      {
        id: 140,
        sntc: 'O, bu yeri beyənir?',
        tr: 'Does she like this place?',
        ch: 'Does she like likes that this place'
      }
    ],
    [{
        id: 141,
        sntc: 'Sən ora necə gedirsən?',
        tr: 'How do you get there?',
        ch: 'How do you your does get there'
      },
      {
        id: 142,
        sntc: 'Sən adətən evə necə çatırsan?',
        tr: 'How do you usually get home?',
        ch: 'How do you usually often does get home'
      },
      {
        id: 143,
        sntc: 'Sən özünü nə zaman xoşbəxt hiss edirsən',
        tr: 'When do you feel happy?',
        ch: 'When do does he you feel happy'
      },
      {
        id: 144,
        sntc: 'Sən burada nəyi bəyənirsən?',
        tr: 'What do you like here?',
        ch: 'What do you your likes like here'
      },
      {
        id: 145,
        sntc: 'Sən hansı İngilis kitablarını oxuyursan?',
        tr: 'What English books do you read?',
        ch: 'What English books book does do you read'
      },
      {
        id: 146,
        sntc: 'Sən niyə ondan asılısan?',
        tr: 'Why do you depend on him?',
        ch: 'Why do you depend depends he on him'
      },
      {
        id: 147,
        sntc: 'Bunu adətən kim yoxlayır?',
        tr: 'Who usually checks it?',
        ch: 'Who usually checks check this it'
      },
      {
        id: 148,
        sntc: 'İşə kim gedir?',
        tr: 'Who goes to work?',
        ch: 'Who goes go by come to work'
      },
      {
        id: 149,
        sntc: 'Bu səhvi kim görür?',
        tr: 'Who sees this mistake?',
        ch: 'Who sees this that see mistake'
      },
      {
        id: 150,
        sntc: 'Sən adətən orada kimi görürsən?',
        tr: 'Who do you usually see there?',
        ch: 'Who do you your sees usually see there'
      }
    ],
    [{
        id: 151,
        sntc: 'Niyə bu onu maraqlandırır?',
        tr: 'Why does it interest him?',
        ch: 'Why does do this it interest him'
      },
      {
        id: 152,
        sntc: 'O, yaddaşını necə məşq etdirir?',
        tr: 'How does he train his memory?',
        ch: 'How does do he train trains he his memory'
      },
      {
        id: 153,
        sntc: 'O, adətən boş vaxtını necə keçirir?',
        tr: 'How does she usually spend her free time?',
        ch: 'How does do we he she usually spend her free time'
      },
      {
        id: 154,
        sntc: 'O, harada işləyir?',
        tr: 'Where does she work?',
        ch: 'Where does do we live she work'
      },
      {
        id: 155,
        sntc: 'Onun neçə dolları var?',
        tr: 'How many dollars does he have?',
        ch: 'How many much dollar dollars does he have'
      },
      {
        id: 156,
        sntc: 'O, bu problemləri necə həll edir?',
        tr: 'How does he solve these problems?',
        ch: 'How does do you this he solve these problems'
      },
      {
        id: 157,
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does she want to add?',
        ch: 'What does do we like she want to add'
      },
      {
        id: 158,
        sntc: 'O, kimi sevir?',
        tr: 'Who does he love?',
        ch: 'Who does do he her like love'
      },
      {
        id: 159,
        sntc: 'O, nə qədər pul ödəyir?',
        tr: 'How much money does he pay?',
        ch: 'How much many do money does he pay'
      },
      {
        id: 160,
        sntc: 'O, adətən nə deyir?',
        tr: 'What does she usually say?',
        ch: 'What does do we always she usually say'
      }
    ],
    [{
        id: 161,
        sntc: 'Onun oğlunun işə çatmağı nə qədər vaxt çəkir?',
        tr: 'How long does it take his son to get to work?',
        ch: 'How long much do does it take his son to get to work'
      },
      {
        id: 162,
        sntc: 'Onun müəllimi nə cür nümunələr göstərir?',
        tr: 'What kind of examples does his teacher give?',
        ch: 'What kind this example of examples does his teacher give'
      },
      {
        id: 163,
        sntc: 'Sənin valideynlərin harada işləyir?',
        tr: 'Where do your parents work?',
        ch: 'Where do your you parents work works'
      },
      {
        id: 164,
        sntc: 'Sənin atan işə nə vaxt gəlir?',
        tr: 'What time does your father come to work?',
        ch: 'What time does your you father come to work works'
      },
      {
        id: 165,
        sntc: 'Bu nə zaman baş verir?',
        tr: 'When does it happen?',
        ch: 'When often does it happens happen'
      },
      {
        id: 166,
        sntc: 'Sənin dostunun ora çatmağı nə qədər vaxt çəkir?',
        tr: 'How long does it take your friend to get there?',
        ch: 'How long does do it take takes your friend to get there'
      },
      {
        id: 167,
        sntc: 'Sənin müdirin adətən nə vəd edir?',
        tr: 'What does your boss usually promise?',
        ch: 'What does your you boss usually promise promises'
      },
      {
        id: 168,
        sntc: 'Bu hadisə nə qədər tez-tez baş verir?',
        tr: 'How often does this event happen?',
        ch: 'How often does this these event happen happens'
      },
      {
        id: 169,
        sntc: 'Niyə bu fikir belə maraqlı görünür?',
        tr: 'Why does this idea seem so interest?',
        ch: 'Why does this idea ideas seem seems so interest'
      },
      {
        id: 170,
        sntc: 'Sənin müəllimin müntəzəm olaraq nə qədər sənə bunları deyir?',
        tr: 'How regularly does your teacher tell you these things?',
        ch: 'How regularly does your you teacher tell tells you these things'
      }
    ],
    [{
        id: 171,
        sntc: 'O, bunu bilmir',
        tr: "He doesn't know it",
        ch: "He doesn't know knows this it"
      },
      {
        id: 172,
        sntc: 'Faydasız görünən nədir?',
        tr: 'What seems useless?',
        ch: 'What seems seem useful How useless'
      },
      {
        id: 173,
        sntc: 'Bizim kifayət qədər təcrübəmiz var?',
        tr: 'Do we have enough practice?',
        ch: 'Do we have has Does enough usually practice'
      },
      {
        id: 174,
        sntc: 'O, səni indi görmək istəyir',
        tr: 'She wants to see you right now',
        ch: 'She wants Does say to want see you right now'
      },
      {
        id: 175,
        sntc: 'Mən xoşbəxt olmaq istəyirəm',
        tr: 'I want to be happy',
        ch: 'I want wants We to He be happy'
      },
      {
        id: 176,
        sntc: 'Onun maşını var',
        tr: 'She has a car',
        ch: 'She has have I an a car'
      },
      {
        id: 177,
        sntc: 'O, xaricdə yaşamaq istəyir?',
        tr: 'Does he want to live abroad?',
        ch: 'Does he want wants lives to live abroad'
      },
      {
        id: 178,
        sntc: 'Sən adətən nə sifariş edirsən?',
        tr: 'What do you usually order?',
        ch: 'What do you your usually often order'
      },
      {
        id: 179,
        sntc: 'O, çox səylə işləyir',
        tr: 'He works very hard',
        ch: 'He works also lives I very hard'
      },
      {
        id: 180,
        sntc: 'Onun hansı İngilis kitabları var?',
        tr: 'What English books does he have?',
        ch: 'What English books book How do does he have'
      }
    ],
    [{
        id: 181,
        sntc: 'O, bunu necə izah edir?',
        tr: 'How does she explain it?',
        ch: 'How does do I she explain it its'
      },
      {
        id: 182,
        sntc: 'Onlar işə gedirlər',
        tr: 'They go to work',
        ch: 'They go goes this to work'
      },
      {
        id: 183,
        sntc: 'Bu bizdən asılıdır',
        tr: 'It depends on us',
        ch: 'It depends depend with on us'
      },
      {
        id: 184,
        sntc: 'Nəyə görə valideynləriniz sizinlə razılaşmır?',
        tr: 'Why do your parent disagree with you?',
        ch: 'Why do your parent you parents disagree with you'
      },
      {
        id: 185,
        sntc: 'O, özünü çox xoşbəxt hiss edir',
        tr: 'She feels so happy',
        ch: 'She feels feel so happy happen'
      },
      {
        id: 186,
        sntc: 'O, hansı içkiyə üstünlük verir?',
        tr: 'Which drink does he prefer?',
        ch: 'Which drink does do he prefer prefers'
      },
      {
        id: 187,
        sntc: 'Bu mənə kömək edir',
        tr: 'It helps me',
        ch: 'It helps help my This me'
      },
      {
        id: 188,
        sntc: 'Mənə İngilis dilində heç bir səhv etmədən danışmaq lazımdır',
        tr: 'I need to speak English without any mistakes',
        ch: 'I need to speak speaks English without any mistakes mistake'
      },
      {
        id: 189,
        sntc: 'O, müxtəlif kinolara baxır',
        tr: 'She watches different movies',
        ch: 'She watches different differents video movies'
      },
      {
        id: 190,
        sntc: 'Sən tez-tez musiqiyə qulaq asırsan?',
        tr: 'Do you often listen to music?',
        ch: 'Do you often Does listen to music song'
      }
    ],
    [{
        id: 191,
        sntc: 'Bu mənə kömək etmir',
        tr: "It doesn't help me",
        ch: "It doesn't help helps my me"
      },
      {
        id: 192,
        sntc: 'Mən kompüter oyunları oynamaq istəmirəm',
        tr: "I don't want to play computer games",
        ch: "I don't want wants to play plays computer games"
      },
      {
        id: 193,
        sntc: 'Mənim məsləhətimə ehtiyacın var?',
        tr: 'Do you need my advice?',
        ch: 'Do you need needs Does he me my advice'
      },
      {
        id: 194,
        sntc: 'Sən hər şeyi xatırlayırsan?',
        tr: 'Do you remember everything?',
        ch: 'Do you your remember remembers everything'
      },
      {
        id: 195,
        sntc: 'Sənin nə qədər pulun var?',
        tr: 'How much money do you have?',
        ch: 'How much money many has does do you have'
      },
      {
        id: 196,
        sntc: 'Onlar bu qərarı dəstəkləyirlər?',
        tr: 'Do they support this decision?',
        ch: 'Do they their these support this decision'
      },
      {
        id: 197,
        sntc: 'Səni kim dəstəkləyir?',
        tr: 'Who supports you?',
        ch: 'Who supports you your support'
      },
      {
        id: 198,
        sntc: 'Mən səninlə razı deyiləm',
        tr: "I don't agree with you",
        ch: "I don't agree want with you your"
      },
      {
        id: 199,
        sntc: 'O, həqiqətən bunu xatırlayır',
        tr: 'He really remembers it',
        ch: 'He really remembers remember this it'
      },
      {
        id: 200,
        sntc: 'Mən sənə təşəkkür etmək istəyirəm',
        tr: 'I want to thank you',
        ch: 'I want to thank thanks your you'
      }
    ],
    [{
        id: 201,
        sntc: 'Mənim dostlarım bunu etməyə çalışır',
        tr: 'My friends try to do it',
        ch: 'My friends friend try want to do it'
      },
      {
        id: 202,
        sntc: 'Biz İngilis dilində danışırıq',
        tr: 'We speak English',
        ch: 'We speak tell say talk English'
      },
      {
        id: 203,
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does she want to add?',
        ch: 'What does do we need she want to add'
      },
      {
        id: 204,
        sntc: 'Səni cəlb edən nədir?',
        tr: 'What attracts you?',
        ch: 'What attracts like more Who you'
      },
      {
        id: 205,
        sntc: 'Səni nə ruhlandırır?',
        tr: 'What inspires you?',
        ch: 'What inspires Where you he you'
      },
      {
        id: 206,
        sntc: 'Sənin anan ona bütün həqiqəti deyir?',
        tr: 'Does your mother tell him all the truth?',
        ch: 'Does your mother mothers tell him all the this truth'
      },
      {
        id: 207,
        sntc: 'Mənə bu problemi həll etmək lazımdır',
        tr: 'I need to solve this problem',
        ch: 'I need want to solve this problem problems'
      },
      {
        id: 208,
        sntc: 'Bizə nəyi dəyişmək lazımdır?',
        tr: 'What do we need to change?',
        ch: 'What do we need problems want to change'
      },
      {
        id: 209,
        sntc: 'O, yaddaşını necə məşq etdirir?',
        tr: 'How does he train his memory?',
        ch: 'How does do her he train his memory'
      },
      {
        id: 210,
        sntc: 'O dərs darıxdırıcı görünür?',
        tr: 'Does that lesson seem boring?',
        ch: 'Does that this lesson lessons seem boring'
      }
    ],
    [{
        id: 211,
        sntc: 'Bunu kim bilir?',
        tr: 'Who knows it?',
        ch: 'Who knows know What this it'
      },
      {
        id: 212,
        sntc: 'Mən qrammatikamı yaxşılaşdırmaq istəyirəm',
        tr: 'I want to improve my grammar',
        ch: 'I want wants always this to improve my grammar'
      },
      {
        id: 213,
        sntc: 'O, bunu tez-tez deyir?',
        tr: 'Does he often say it?',
        ch: 'Does he often tell this say it'
      },
      {
        id: 214,
        sntc: 'Siz tez-tez buranı ziyarət edirsiniz?',
        tr: 'Do you often visit this place?',
        ch: 'Do you your there often always visit this place'
      },
      {
        id: 215,
        sntc: 'Mən xaricə getmək istərdim',
        tr: 'I would like to go abroad',
        ch: 'I would want there live like to go abroad'
      },
      {
        id: 216,
        sntc: 'Onlar parlaq nəticələr göstərirlər',
        tr: 'They show brilliant results',
        ch: 'They show shows We brilliant look results'
      },
      {
        id: 217,
        sntc: 'Sən bunu həmişə edirsən?',
        tr: 'Do you always do it?',
        ch: 'Do you often want always this do it'
      },
      {
        id: 218,
        sntc: 'O, sənə nə məsləhət verir?',
        tr: 'What advice does she give you?',
        ch: 'What advice does do take she give you'
      },
      {
        id: 219,
        sntc: 'Onu orada nə cəlb edir?',
        tr: 'What attracts him there?',
        ch: 'What attracts him he this Why there'
      },
      {
        id: 220,
        sntc: 'O, adətən nə deyir?',
        tr: 'What does he usually say?',
        ch: 'What does he usually tell well do say'
      }
    ],
    [{
        id: 221,
        sntc: 'Bu çox çətindir',
        tr: "It's so difficult",
        ch: "It's so a It easy difficult"
      },
      {
        id: 222,
        sntc: 'Bu yaxşıdır',
        tr: "It's good",
        ch: "It's bad good It great"
      },
      {
        id: 223,
        sntc: 'O, əmindir',
        tr: "She's sure",
        ch: "She's sure They're good serious"
      },
      {
        id: 224,
        sntc: 'Bu çox yaxşıdır',
        tr: "It's so good",
        ch: "It's so This bad good"
      },
      {
        id: 225,
        sntc: 'Biz parkdayıq',
        tr: "We're in the park",
        ch: "We're in the this parks park"
      },
      {
        id: 226,
        sntc: 'O, onun arvadıdır',
        tr: "She's his wife",
        ch: "She's his husband wife"
      },
      {
        id: 227,
        sntc: 'Bu çox vacibdir',
        tr: "It's so important",
        ch: "It's so important That unimportant"
      },
      {
        id: 228,
        sntc: 'O, çox kasıbdır',
        tr: "He's very poor",
        ch: "He's very poor rich good"
      },
      {
        id: 229,
        sntc: 'Biz dostuq',
        tr: "We're friends",
        ch: "We're friends happy friend I'm"
      },
      {
        id: 230,
        sntc: 'O, məktəbdədir',
        tr: "He's at school",
        ch: "He's at school I'm museum on"
      }
    ],
    [{
        id: 231,
        sntc: 'Bu vacib bir şeydir',
        tr: "It's an important thing",
        ch: "It's an important like thing things"
      },
      {
        id: 232,
        sntc: 'Sən xoşbəxt insansan',
        tr: "You're a happy person",
        ch: "You're a happy happiness good person"
      },
      {
        id: 233,
        sntc: 'Mən hazıram',
        tr: "I'm ready",
        ch: "I'm ready need He's already"
      },
      {
        id: 234,
        sntc: 'O, soldadır',
        tr: "He's on the left",
        ch: "He's on the left at this right"
      },
      {
        id: 235,
        sntc: 'Bu asandır',
        tr: "It's simple",
        ch: "It's simple an hard very"
      },
      {
        id: 236,
        sntc: 'Bu çox bahalıdır',
        tr: "It's too expensive",
        ch: "It's too expensive less many cost"
      },
      {
        id: 237,
        sntc: 'Bu qeyri-mümkündür',
        tr: "It's impossible",
        ch: "It's impossible This very possible"
      },
      {
        id: 238,
        sntc: 'O, tənbəl tələbədir',
        tr: "He's a lazy student",
        ch: "He's a lazy student an very school"
      },
      {
        id: 239,
        sntc: 'Soyuqdur',
        tr: "It's cold",
        ch: "It's bad sunny cold"
      },
      {
        id: 240,
        sntc: 'Bu çox yaxşı qərardır',
        tr: "It's a very good decision",
        ch: "It's a very an important good gold decision"
      }
    ],
    [{
        id: 241,
        sntc: 'Bu, elə çətin vəziyyətdir',
        tr: "It's such a difficult situation",
        ch: "It's such a difficult situation simple easy"
      },
      {
        id: 242,
        sntc: 'Bu asan tapşırıqdır',
        tr: "It's an easy exercise",
        ch: "It's an easy good exercise exercises"
      },
      {
        id: 243,
        sntc: 'Bu elə çətin imtahandır',
        tr: "It's such a difficult exam",
        ch: "It's such a difficult simple so exam exams"
      },
      {
        id: 244,
        sntc: 'O, belə qəribə insandır',
        tr: "He's such a strange person",
        ch: "He's such a strange person so people an"
      },
      {
        id: 245,
        sntc: 'O, peşəkar müəllimdir',
        tr: "He's a professional teacher",
        ch: "He's a professional teacher an teacher"
      },
      {
        id: 246,
        sntc: 'Çox gözəl yerdir',
        tr: "It's such a beautiful place",
        ch: "It's such a beautiful so place here an"
      },
      {
        id: 247,
        sntc: 'O, çox xeyirxahdır',
        tr: "She's so kind",
        ch: "She's so kind woman such a person"
      },
      {
        id: 248,
        sntc: 'O, rəssamdır',
        tr: "He's an artist",
        ch: "It's simple very an artist"
      },
      {
        id: 249,
        sntc: 'O, gözəl qızdır',
        tr: "She's a beautiful girl",
        ch: "She's a beautiful girl girls an"
      },
      {
        id: 250,
        sntc: 'Bu elə asan sınaqdır',
        tr: "It's such an easy test",
        ch: "It's such an easy test a so tests"
      }
    ],
    [{
        id: 251,
        sntc: 'Suallar çox asandır',
        tr: 'The questions are very easy',
        ch: 'The questions are is These very easy'
      },
      {
        id: 252,
        sntc: 'Onun iyirmi yaşı var',
        tr: 'He is twenty',
        ch: 'He is twenty are I am two'
      },
      {
        id: 253,
        sntc: 'Mən əminəm ki, sən dünyanın ən yaxşı müəllimisən',
        tr: "I'm sure you're the best teacher in the world",
        ch: "I'm sure you're the this best teacher word in the world"
      },
      {
        id: 254,
        sntc: 'Mənim qardaşımın on altı yaşı var',
        tr: 'My brother is sixteen',
        ch: 'My brother is sixteen seventeen are me'
      },
      {
        id: 255,
        sntc: 'Tələbələr hazırdır',
        tr: 'The students are ready',
        ch: 'The students student are ready is this'
      },
      {
        id: 256,
        sntc: 'Onun oğlu zooparkdadır',
        tr: 'His son is in the zoo',
        ch: 'His son is daugther in the zoo are at'
      },
      {
        id: 257,
        sntc: 'Bu gün küləklidir',
        tr: 'It is windy today',
        ch: 'It is today windy that tomorrow days'
      },
      {
        id: 258,
        sntc: 'Bizim menecer çox peşəkardır',
        tr: 'Our manager is very professional',
        ch: 'Our manager is are many very professional'
      },
      {
        id: 259,
        sntc: 'Bu söz mənim üçün yenidir',
        tr: 'This word is new for me',
        ch: 'This word is new for my world me'
      },
      {
        id: 260,
        sntc: 'Bu şirkət çox zəngindir',
        tr: 'This company is very rich',
        ch: 'This company is that many very rich'
      }
    ],
    [{
        id: 261,
        sntc: 'Bu böyük səhv deyil',
        tr: "It isn't a big mistake",
        ch: "It isn't a big small mistake an bag"
      },
      {
        id: 262,
        sntc: 'Mən evli deyiləm',
        tr: "I'm not married",
        ch: "I'm not yes my already married"
      },
      {
        id: 263,
        sntc: 'Biz kədərli deyilik. Biz xoşbəxtik',
        tr: "We aren't sad. We're happy",
        ch: "We aren't They angry sad. We're is happy"
      },
      {
        id: 264,
        sntc: 'Onlar bir yerdə deyillər',
        tr: "They aren't together",
        ch: "They aren't this always We together"
      },
      {
        id: 265,
        sntc: 'O, şəhərdə deyil.',
        tr: "He isn't in the city",
        ch: "He isn't in on this country the city"
      },
      {
        id: 266,
        sntc: 'Soyuq deyil. İstidir',
        tr: "It isn't cold. It's warm",
        ch: "It isn't cold. It's is sunny rainy warm"
      },
      {
        id: 267,
        sntc: 'O, məşğul deyil. O, azaddır',
        tr: "He isn't busy. He's free",
        ch: "He isn't busy. He's second We second free"
      },
      {
        id: 268,
        sntc: 'Bu uzaq deyil. Yaxındadır',
        tr: "It isn't far. It's near",
        ch: "It isn't far. It's there always I near"
      },
      {
        id: 269,
        sntc: 'Bu yaxşı qərar deyil',
        tr: "It isn't a good decision",
        ch: "It isn't a a He good perfectly decision"
      },
      {
        id: 270,
        sntc: 'Bu böyük səhv deyil',
        tr: "It isn't a big mistake",
        ch: "It isn't a big small mistake mistakes"
      }
    ],
    [{
        id: 271,
        sntc: 'Bu onun öz mənzilidir?',
        tr: 'Is it his own flat?',
        ch: 'Is it his own he Are they flat'
      },
      {
        id: 272,
        sntc: 'O, öz mənzilindədir?',
        tr: 'Is he in his own flat?',
        ch: 'Is he in his you our her own flat'
      },
      {
        id: 273,
        sntc: 'O, tənbəl oğlandır?',
        tr: 'Is he a lazy boy?',
        ch: 'Is he a lazy boy boys such'
      },
      {
        id: 274,
        sntc: 'Bu gülməli videodur?',
        tr: 'Is it a funny video?',
        ch: 'Is it a funny video very videos'
      },
      {
        id: 275,
        sntc: 'Bu böyük uğurdur?',
        tr: 'Is it a big success?',
        ch: 'Is it a big an he bad success'
      },
      {
        id: 276,
        sntc: 'Bu, onun öz evidir?',
        tr: 'Is it her own house?',
        ch: 'Is it her Are We own town house'
      },
      {
        id: 277,
        sntc: 'O, binadadır?',
        tr: 'Is he in the building?',
        ch: 'Is he Are they in the street building'
      },
      {
        id: 278,
        sntc: 'Universitet sağdadır?',
        tr: 'Is the university on the right?',
        ch: 'Is the university in this left on the right'
      },
      {
        id: 279,
        sntc: 'Burada soyuqdur?',
        tr: 'Is it cold here?',
        ch: 'Is it That Are cold here'
      },
      {
        id: 280,
        sntc: 'Onlar uzaqdadırlar?',
        tr: 'Are they far?',
        ch: 'Are they near Is he far'
      }
    ],
    [{
        id: 281,
        sntc: 'Məqalə çox məlumatlıdır?',
        tr: 'Is the article very informative?',
        ch: 'Is the article this like very informative'
      },
      {
        id: 282,
        sntc: 'Bu müğənni populyardır?',
        tr: 'Is this singer popular?',
        ch: 'Is this singer song that popular'
      },
      {
        id: 283,
        sntc: 'Oyun darıxdırıcıdır?',
        tr: 'Is the game boring?',
        ch: 'Is the game games this boring'
      },
      {
        id: 284,
        sntc: 'Sənin anan dizaynerdir?',
        tr: 'Is your mother a designer?',
        ch: 'Is your mother mothers an a designer'
      },
      {
        id: 285,
        sntc: 'Otel bahalıdır?',
        tr: 'Is the hotel expensive?',
        ch: 'Is the these much hotel expensive'
      },
      {
        id: 286,
        sntc: 'Bu xəbər vacibdir?',
        tr: 'Is this news important?',
        ch: 'Is this news new Are important'
      },
      {
        id: 287,
        sntc: 'Bu qadın çox müdrikdir?',
        tr: 'Is this woman very wise?',
        ch: 'Is this woman women that very wise'
      },
      {
        id: 288,
        sntc: 'Problemlər böyükdür?',
        tr: 'Are the problems big?',
        ch: 'Are Is the problems problem big'
      },
      {
        id: 289,
        sntc: 'Pişik bu otaqdadır?',
        tr: 'Is the cat in this room?',
        ch: 'Is the Are dog at cat in this room'
      },
      {
        id: 290,
        sntc: 'Məqalə İngilis dilindədir?',
        tr: 'Is the article in English?',
        ch: 'Is the these article at in English'
      }
    ],
    [{
        id: 291,
        sntc: 'Sənin cibində nə var?',
        tr: 'What is in your pocket?',
        ch: 'What is in your you are pocket'
      },
      {
        id: 292,
        sntc: 'Sən nə vaxt məşğulsan?',
        tr: 'When are you busy?',
        ch: 'When are you your bag busy'
      },
      {
        id: 293,
        sntc: 'Bu nə dərəcədə maraqlıdır?',
        tr: 'How interesting is it?',
        ch: 'How interesting are this is it'
      },
      {
        id: 294,
        sntc: 'Bu nə qədər uzaqdır?',
        tr: 'How far is it?',
        ch: 'How far is it this long'
      },
      {
        id: 295,
        sntc: 'Sən niyə burdasan?',
        tr: 'Why are you here?',
        ch: 'Why are is hope you here'
      },
      {
        id: 296,
        sntc: 'Kim səhvdir?',
        tr: 'Who is wrong?',
        ch: 'Who is are mistake wrong'
      },
      {
        id: 297,
        sntc: 'Sən niyə belə xoşbəxtsən?',
        tr: 'Why are you so happy?',
        ch: 'Why are you your is so happy'
      },
      {
        id: 298,
        sntc: 'Bu sizin üçün nə dərəcədə vacibdir?',
        tr: 'How important is it for you?',
        ch: 'How important is are by it for you'
      },
      {
        id: 299,
        sntc: 'Saat neçədir?',
        tr: 'What time is it?',
        ch: 'What time How is it'
      },
      {
        id: 300,
        sntc: 'Mən belə şeyləri xoşlamıram',
        tr: 'I don’t like such things',
        ch: 'I don’t like such so want things'
      }
    ],
    [{
        id: 301,
        sntc: 'O adamlar kimlərdir?',
        tr: 'Who are those people?',
        ch: 'Who are these person those people'
      },
      {
        id: 302,
        sntc: 'Dərs nə dərəcədə effektivdir?',
        tr: 'How effective is the lesson?',
        ch: 'How effective are these is the lesson'
      },
      {
        id: 303,
        sntc: 'Sənin müəllimin haradadır?',
        tr: 'Where is your teacher?',
        ch: 'Where is your you are teacher'
      },
      {
        id: 304,
        sntc: 'O şəxs kimdir?',
        tr: 'Who is that person?',
        ch: 'Who is that this people person'
      },
      {
        id: 305,
        sntc: 'Uşaqlar haradadır?',
        tr: 'Where are the children?',
        ch: 'Where are is this the children'
      },
      {
        id: 306,
        sntc: 'Sınaq nə qədər çətindir?',
        tr: 'How difficult is the test?',
        ch: 'How difficult much are is the test'
      },
      {
        id: 307,
        sntc: 'Sənin atanın neçə yaşı var?',
        tr: 'How old is your father?',
        ch: 'How old much are is your father'
      },
      {
        id: 308,
        sntc: 'Sənin atanın adı nədir?',
        tr: "What's your father's name?",
        ch: "What's your you names father's name"
      },
      {
        id: 309,
        sntc: 'Bu maşın necədir?',
        tr: 'How is this car?',
        ch: 'How is this that cat car'
      },
      {
        id: 310,
        sntc: 'Təklif nə dərəcədə maraqlıdır?',
        tr: 'How interesting is the offer?',
        ch: 'How interesting long are is this the offer'
      }
    ],
    [{
        id: 311,
        sntc: 'Bu nəticə məni qane etmir',
        tr: "I'm not satisfied with this result",
        ch: "I'm not satisfied with their like this result"
      },
      {
        id: 312,
        sntc: 'Kompüter neçəyədir?',
        tr: 'How much is the computer?',
        ch: 'How much many these is the computer'
      },
      {
        id: 313,
        sntc: 'Onların cavabı sizi qane edir?',
        tr: 'Are you satisfied with their answer?',
        ch: 'Are you satisfied with us agree their answer'
      },
      {
        id: 314,
        sntc: 'Mənim yaddaşım pisdi',
        tr: 'My memory is bad',
        ch: 'My memory is remember good bad'
      },
      {
        id: 315,
        sntc: 'O, azad deyil. O, çox məşğuldur.',
        tr: "She isn't free. She's very busy.",
        ch: "She isn't free. She's many very busy."
      },
      {
        id: 316,
        sntc: 'Bu ucuzdur',
        tr: 'It is cheap',
        ch: 'It is easy are cheap'
      },
      {
        id: 317,
        sntc: 'Bu cins neçəyədir?',
        tr: 'How much are these jeans?',
        ch: 'How much are these this the is jeans'
      },
      {
        id: 318,
        sntc: 'Niyə bu məşqlər belə çətindir?',
        tr: 'Why are these exercises so difficult?',
        ch: 'Why are these exercises exercise such so difficult'
      },
      {
        id: 319,
        sntc: 'Mən tənbələm?',
        tr: 'Am I lazy?',
        ch: 'Am he Is I ready lazy'
      },
      {
        id: 320,
        sntc: 'Bu təhlükəlidir?',
        tr: 'Is it dangerous?',
        ch: 'Is it difficult he dangerous'
      }
    ],
    [{
        id: 321,
        sntc: 'Oğlan evdədir?',
        tr: 'Is the boy at home?',
        ch: 'Is the boy girl on street at home'
      },
      {
        id: 322,
        sntc: 'Bu mətn sadədir?',
        tr: 'Is this text simple?',
        ch: 'Is this test text sentence simple'
      },
      {
        id: 323,
        sntc: 'Niyə belə xoşbəxtsən?',
        tr: 'Why are you so happy?',
        ch: 'Why are you your such so happy'
      },
      {
        id: 324,
        sntc: 'Orada kim var?',
        tr: 'Who is there?',
        ch: 'Who is he here here there'
      },
      {
        id: 325,
        sntc: 'O, tənbəl oğlandır?',
        tr: 'Is he a lazy boy?',
        ch: 'Is he here an a lazy boy'
      },
      {
        id: 326,
        sntc: 'Mən azadam',
        tr: 'I am free',
        ch: 'I is am always well free'
      },
      {
        id: 327,
        sntc: 'Otaqda kim var?',
        tr: 'Who is in the room?',
        ch: 'Who is in house this the room'
      },
      {
        id: 328,
        sntc: 'Bu daha pisdir?',
        tr: 'Is it worse?',
        ch: 'Is it better bad worse'
      },
      {
        id: 329,
        sntc: 'Sən xoşbəxt insansan',
        tr: 'You are a happy person',
        ch: 'You are a an happy person people'
      },
      {
        id: 330,
        sntc: 'Bu çox bahalı soyuducudur',
        tr: "It's a very expensive refrigerator",
        ch: "It's a an very expensive thing refrigerator"
      }
    ],
    [{
        id: 331,
        sntc: 'Sənin qardaşın evdədir?',
        tr: 'Is your brother at home?',
        ch: 'Is your brother at on you home'
      },
      {
        id: 332,
        sntc: 'Sən həqiqətən yorğunsan?',
        tr: 'Are you really tired?',
        ch: 'Are you your Is very really tired'
      },
      {
        id: 333,
        sntc: 'Bu maşın neçəyədir?',
        tr: 'How much is this car?',
        ch: 'How much is this those cars car'
      },
      {
        id: 334,
        sntc: 'Bu yüksək səviyyə deyil',
        tr: "It isn't a high level",
        ch: "It isn't much an a high level"
      },
      {
        id: 335,
        sntc: 'Bütün bu dərslər pulsuzdur',
        tr: 'All these lessons are free',
        ch: 'All these lesson this lessons are free'
      },
      {
        id: 336,
        sntc: 'Onun oğlunun neçə yaşı var?',
        tr: 'How old is his son?',
        ch: 'How old is far he his son'
      },
      {
        id: 337,
        sntc: 'Sənin dostunun adı nədir?',
        tr: "What's your friend's name?",
        ch: "What's your friend you friend's name"
      },
      {
        id: 338,
        sntc: 'Onlar işdədirlər',
        tr: 'They are at work',
        ch: 'They are at on school work'
      },
      {
        id: 339,
        sntc: 'Bu yaxşı ədəbdir',
        tr: "It's a good manner",
        ch: "It's a good many decision an manner"
      },
      {
        id: 340,
        sntc: 'Birinci yerdə kim var?',
        tr: 'Who is in the first place?',
        ch: 'Who is in the this second first place'
      }
    ],
    [{
        id: 341,
        sntc: 'Mən xaricdə oxumağı sevirəm',
        tr: 'I like studying abroad',
        ch: 'I like studying live would abroad'
      },
      {
        id: 342,
        sntc: 'O soyuducu bahalı deyil',
        tr: "That refrigerator doesn't cost much",
        ch: "That refrigerator doesn't don't freezer cost much"
      },
      {
        id: 343,
        sntc: 'Bu maşın bahalıdır',
        tr: 'This car costs a lot',
        ch: 'This car cost costs things a lot'
      },
      {
        id: 344,
        sntc: 'O, İngilis dili üçün daha çox vaxt tapmağa çalışır',
        tr: 'He tries to find more time for English',
        ch: 'He tries to find many try by more time for English'
      },
      {
        id: 345,
        sntc: 'Bu klinika elə də yaxşı deyil',
        tr: "This clinic isn't so good",
        ch: "This clinic isn't so far good"
      },
      {
        id: 346,
        sntc: 'Biz həmişə bu işi vaxtında bitiririk',
        tr: 'We always finish this work on time',
        ch: 'We always finish this work on at often time'
      },
      {
        id: 347,
        sntc: 'Bu dərslərin sadəliyi xoşuma gəlir',
        tr: 'I like the simplicity of these lessons',
        ch: 'I like the simplicity lesson of this by these lessons'
      },
      {
        id: 348,
        sntc: 'Bu adətən yazda baş verir',
        tr: 'It usually happens in spring',
        ch: 'It usually happens in on summer spring'
      },
      {
        id: 349,
        sntc: 'Mən bunu edə bilərəm',
        tr: 'I may do it',
        ch: 'I may do need does it'
      },
      {
        id: 350,
        sntc: 'Sən tez-tez idman zalına gedirsən?',
        tr: 'Do you often go to the gym?',
        ch: 'Do you often go to that always the gym'
      }
    ],
    [{
        id: 351,
        sntc: 'O, İngilis dilində oxuyur',
        tr: 'She reads in English',
        ch: 'She reads in speak English at read'
      },
      {
        id: 352,
        sntc: 'O, onun sözlərinə məhəl qoymur?',
        tr: 'Does he ignore her words?',
        ch: 'Does he ignore word he her words'
      },
      {
        id: 353,
        sntc: 'Mən bunu mükəmməl dərk edirəm',
        tr: 'I perfectly realize it',
        ch: 'I perfectly realize it this method'
      },
      {
        id: 354,
        sntc: 'Sən xoşbəxt insansan',
        tr: "You're a happy person",
        ch: "You're a happy person people an"
      },
      {
        id: 355,
        sntc: 'Karandaş masamın üstündə deyil',
        tr: "The pencil isn't on my desk",
        ch: "The pencil isn't on my desk table me pen"
      },
      {
        id: 356,
        sntc: 'Mənə bunu gələn ilə qədər bitirmək lazımdır',
        tr: 'I need to finish it by next year',
        ch: 'I need to finish it by next year second for'
      },
      {
        id: 357,
        sntc: 'Bu, dünyanın ən uzun çayıdır',
        tr: "It's the longest river in the world",
        ch: "It's the longest river in the world at this"
      },
      {
        id: 358,
        sntc: 'Sənə bunu yazmaq lazımdır?',
        tr: 'Do you need to write it down?',
        ch: 'Do you need needs to write it down read'
      },
      {
        id: 359,
        sntc: 'Mən evdəyəm',
        tr: "I'm at home",
        ch: "I'm at home work the"
      },
      {
        id: 360,
        sntc: 'Sən bu barədə nə düşünürsən?',
        tr: 'What do you think about it?',
        ch: 'What do you think about it this your'
      }
    ],
    [{
        id: 361,
        sntc: 'O, İngiltərədəndir?',
        tr: 'Is he from England?',
        ch: 'Is he from England by Spain her'
      },
      {
        id: 362,
        sntc: 'Bu kimi narahat edir?',
        tr: 'Who does it worry?',
        ch: 'Who does it worry worries this'
      },
      {
        id: 363,
        sntc: 'O, mənim həmkarım deyil',
        tr: "He isn't my colleague",
        ch: "He isn't my colleague friend me We"
      },
      {
        id: 364,
        sntc: 'Bu dərslər elə effektlidir',
        tr: 'These lessons are so effective',
        ch: 'These lessons are so effective is This'
      },
      {
        id: 365,
        sntc: 'O, hərdən ağlayır',
        tr: 'She sometimes cries',
        ch: 'She sometimes cries cry always'
      },
      {
        id: 366,
        sntc: 'Mən sənə heyranam',
        tr: 'I admire you',
        ch: 'I admire you your like'
      },
      {
        id: 367,
        sntc: 'İdman zalına nə qədər tez-tez gedirsən?',
        tr: 'How often do you go to the gym?',
        ch: 'How often do you go to the gym this does'
      },
      {
        id: 368,
        sntc: 'Bu həmin cümlədir',
        tr: "It's the same sentence",
        ch: "It's the same sentence words only"
      },
      {
        id: 369,
        sntc: 'Bu elə vacib görüşdür',
        tr: "It's such an important meeting",
        ch: "It's such an important meeting meet a"
      },
      {
        id: 370,
        sntc: 'Sənin dostun indi tənhadır?',
        tr: 'Is your friend alone now?',
        ch: 'Is your friend alone now new you'
      }
    ],
    [{
        id: 371,
        sntc: 'O, orada yaşayır?',
        tr: 'Does he live there?',
        ch: 'Does he live there here this you'
      },
      {
        id: 372,
        sntc: 'Bizim cəmiyyətimiz bütün həqiqəti bilmək istəyir',
        tr: 'Our community wants to know all the truth',
        ch: 'Our community wants to know need must all the truth'
      },
      {
        id: 373,
        sntc: 'O, səyahət etməyi çox sevir',
        tr: "He's fond of traveling",
        ch: "He's fond of traveling travel I by"
      },
      {
        id: 374,
        sntc: 'Sevgi çox gözəl hissdir',
        tr: 'Love is a wonderful feeling',
        ch: 'Love is a wonderful feeling feel an'
      },
      {
        id: 375,
        sntc: 'Mən adətən səhər saat 9-da işə gedirəm',
        tr: "I usually go to work at 9 o'clock in the morning",
        ch: "I usually go to work at 9 o'clock in at school the morning"
      },
      {
        id: 376,
        sntc: 'Kompüter neçəyədir?',
        tr: 'How much is the computer?',
        ch: 'How much is the this many computer'
      },
      {
        id: 377,
        sntc: 'Hava limanı yaxındır?',
        tr: 'Is the airport near?',
        ch: 'Is the airport near far Are'
      },
      {
        id: 378,
        sntc: 'Sənin yoldaşının işi nədir?',
        tr: "What's your husband's job?",
        ch: "What's your husband's husband you job"
      },
      {
        id: 379,
        sntc: 'O, boşanıb',
        tr: "He's divorced",
        ch: "He's divorced split They"
      },
      {
        id: 380,
        sntc: 'Bizə bütün həqiqəti bilmək lazımdır',
        tr: "We need to know all the truth",
        ch: "We need to know all the information understand truth"
      }
    ],
    [{
        id: 381,
        sntc: 'Bu dərslərin sadəliyi sayəsində mən onları çox sevirəm',
        tr: 'I’m fond of these lessons thanks to their simplicity',
        ch: 'I’m fond of these lessons enjoy thanks to their simplicity'
      },
      {
        id: 382,
        sntc: 'Mənə İngilis dilində sərbəst danışmaq lazımdır',
        tr: 'I need to speak English fluently',
        ch: 'I need needs to speak English speaks He fluently'
      },
      {
        id: 383,
        sntc: 'Bu vaxt mənim üçün heç münasib deyil',
        tr: "This time isn't convenient for me at all",
        ch: "This time The isn't convenient by my for me at all"
      },
      {
        id: 384,
        sntc: 'Bu strategiya xoşuma gəlir',
        tr: 'I like this strategy',
        ch: 'I like this strategy those would'
      },
      {
        id: 385,
        sntc: 'Mən bunu yazmaq istəmirəm',
        tr: "I don't want to write it down",
        ch: "I don't want to write read reads it down"
      },
      {
        id: 386,
        sntc: 'Kişilər çox kobuddurlar',
        tr: 'The men are very rude',
        ch: 'The men are very is rude really'
      },
      {
        id: 387,
        sntc: 'Mən adətən günortadan sonra ora gedirəm',
        tr: 'I usually go there in the afternoon',
        ch: 'I usually go there in at evening this the afternoon'
      },
      {
        id: 388,
        sntc: 'Mən başqa ölkələrdən olan adamlarla ünsiyyət qurmaq istərdim',
        tr: "I'd like to communicate with people from other countries",
        ch: "I'd like to communicate with person people from other another countries"
      },
      {
        id: 389,
        sntc: 'Musiqi həddən artıq gurdur',
        tr: "Music is too loud",
        ch: "Music is too loud here there near"
      },
      {
        id: 390,
        sntc: 'Mən həmişə erkən qalxıram',
        tr: 'I always get up early',
        ch: 'I always get up early fast of'
      }
    ],
    [{
        id: 391,
        sntc: 'O, bunu dərk edir',
        tr: 'He realizes it',
        ch: 'He realizes it this problem'
      },
      {
        id: 392,
        sntc: 'Mən bizneslə məşğul oluram',
        tr: 'I do business',
        ch: 'I do business make well'
      },
      {
        id: 393,
        sntc: 'Mən səyahət etməyi xoşlayıram',
        tr: 'I like traveling',
        ch: 'I like traveling travel He'
      },
      {
        id: 394,
        sntc: 'Mən başqa kitab oxumaq istəyirəm',
        tr: 'I want to read another book',
        ch: 'I want to read ready other another book'
      },
      {
        id: 395,
        sntc: 'Biz bunu deyə bilərik',
        tr: 'We might say it',
        ch: 'We might to say tell our it'
      },
      {
        id: 396,
        sntc: 'O, adətən İngilis dilində çox sürətli danışır',
        tr: 'She usually speak English very fast',
        ch: 'She usually speak tell slow English very fast'
      },
      {
        id: 397,
        sntc: 'Mən bu problem haqqında danışmağı xoşlamıram',
        tr: 'I don’t like to talk about this problem',
        ch: 'I don’t like to talk tell of about this the problem'
      },
      {
        id: 398,
        sntc: 'Biz bunu edə bilərik',
        tr: 'We can do it',
        ch: 'We can do does this it'
      },
      {
        id: 399,
        sntc: 'Mən bunu vaxtında etməliyəm',
        tr: 'I must do it on time',
        ch: 'I must do does timer it on time'
      },
      {
        id: 400,
        sntc: 'Bu video daha uzundur',
        tr: 'This video is longer',
        ch: 'This video videos is much longer'
      }
    ],
    [{
        id: 401,
        sntc: 'Bu həddən artıq çətindir',
        tr: "It's too difficult",
        ch: "It's too easy simle difficult"
      },
      {
        id: 402,
        sntc: 'Mən gərək bunu edim',
        tr: 'I should do it',
        ch: 'I should do must can it'
      },
      {
        id: 403,
        sntc: 'Sən kimi dəstəkləyirsən?',
        tr: 'Who do you support?',
        ch: 'Who What do you support'
      },
      {
        id: 404,
        sntc: 'Bu turist haradandır?',
        tr: 'Where is this tourist from?',
        ch: 'Where is this are tourist from'
      },
      {
        id: 405,
        sntc: 'Sən bunu edə bilərsən?',
        tr: 'Can you do it?',
        ch: 'Can you do must need it'
      },
      {
        id: 406,
        sntc: 'Bu çox böyük uğurdur',
        tr: "It's a very big success",
        ch: "It's a very big small an success"
      },
      {
        id: 407,
        sntc: 'O, İngilis dilini tədris edir?',
        tr: 'Does she teach English?',
        ch: 'Does she teach Spanish learn Do English'
      },
      {
        id: 408,
        sntc: 'Oyun darıxdırıcıdır?',
        tr: 'Is the game boring?',
        ch: 'Is the this play game boring'
      },
      {
        id: 409,
        sntc: 'Bu böyük problemdir?',
        tr: 'Is it a big problem?',
        ch: 'Is it a big small an problem'
      },
      {
        id: 410,
        sntc: 'Sənin bacının adı nədir?',
        tr: "What's your sister's name?",
        ch: "What's your you Who's sister's name"
      }
    ],
    [{
        id: 411,
        sntc: 'O, hansı kanallara baxır?',
        tr: 'What channels does he watch?',
        ch: 'What channels do you look does he watch'
      },
      {
        id: 412,
        sntc: 'Bu tələbələr parlaq nəticələr göstərirlər',
        tr: 'These students show brilliant results',
        ch: 'These students boys friends show brilliant results'
      },
      {
        id: 413,
        sntc: 'Bu qız çox boyludur',
        tr: 'This girl is very tall',
        ch: 'This girl boy short are is very tall'
      },
      {
        id: 414,
        sntc: 'Sənin qardaşın özünü necə hiss edir?',
        tr: 'How does your brother feel?',
        ch: 'How does do you feels your brother feel'
      },
      {
        id: 415,
        sntc: 'O, bu səhvləri düzəltməlidir',
        tr: 'She needs to correct these mistakes',
        ch: 'She needs can may to correct these mistakes'
      },
      {
        id: 416,
        sntc: 'Yaxşı fikirdir',
        tr: "It's a good idea",
        ch: "It's a an great good idea"
      },
      {
        id: 417,
        sntc: 'Mən İngilis dilində qabaqcıl səviyyəyə malik olmaq istəyirəm',
        tr: 'I want to have an Advanced level in English',
        ch: 'I want to need must have an Advanced level in English'
      },
      {
        id: 418,
        sntc: 'Mən bunu vaxtında edə bilərəm',
        tr: "I might do it on time",
        ch: "I might do does need it on time"
      },
      {
        id: 419,
        sntc: 'Bu cüt şalvar neçəyədir?',
        tr: 'How much is this pair of trousers?',
        ch: 'How much shoes are is this pair of trousers'
      },
      {
        id: 420,
        sntc: 'Bizim anamız da eyni düşünür',
        tr: 'Our mother thinks the same',
        ch: 'Our mother thinks know understands the same'
      }
    ],
    [{
        id: 421,
        sntc: 'Sən mənimlə razısan?',
        tr: 'Do you agree with me?',
        ch: 'Do you agree them know like with me'
      },
      {
        id: 422,
        sntc: 'O, daha çox pul istəyir',
        tr: 'He wants more money',
        ch: 'He wants like needs more money'
      },
      {
        id: 423,
        sntc: 'Bu dərs sadədir',
        tr: "This lesson is simple",
        ch: "This lesson party phrase are is simple"
      },
      {
        id: 424,
        sntc: 'Bu sınaq ne dərəcədə çətindir?',
        tr: 'How difficult is this test?',
        ch: 'How difficult is exam usefull this test'
      },
      {
        id: 425,
        sntc: 'Mənim dostum evdədir',
        tr: 'My friend is at home',
        ch: 'My friend are street is at home'
      },
      {
        id: 426,
        sntc: 'Sənin evində kim var?',
        tr: "Who's in your house?",
        ch: "Who's in your my are house"
      },
      {
        id: 427,
        sntc: 'Mən bu dərsləri İngilis dilimi təkmilləşdirmək üçün öyrənməliyəm',
        tr: 'I must learn these lessons to improve my English',
        ch: 'I must need learn these lessons to improve my English'
      },
      {
        id: 428,
        sntc: 'Mən sizə necə kömək edə bilərəm?',
        tr: 'How can I help you',
        ch: 'How can I help need Must you'
      },
      {
        id: 429,
        sntc: 'O, şəhərdə deyil',
        tr: "He isn't in the city",
        ch: "He isn't in the country aren't city"
      },
      {
        id: 430,
        sntc: 'O, başqa yerdədir',
        tr: "He's in another place",
        ch: "He's in other another place"
      }
    ],
    [{
        id: 431,
        sntc: 'Mən şanslıyam?',
        tr: 'Am I lucky?',
        ch: 'Am I angry busy lucky'
      },
      {
        id: 432,
        sntc: 'Bizim müəllimlərimiz haradadır?',
        tr: 'Where are our teachers?',
        ch: 'Where are our sisters your is teachers'
      },
      {
        id: 433,
        sntc: 'Bu sınaq çox asan gəlir?',
        tr: 'Does this test seem very easy?',
        ch: 'Does this test seems hard seem very easy'
      },
      {
        id: 434,
        sntc: 'Mən onun sadəliyini görürəm',
        tr: 'I see its simplicity',
        ch: 'I see its sees look simplicity'
      },
      {
        id: 435,
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does she want to add?',
        ch: 'What does she need should want to add'
      },
      {
        id: 436,
        sntc: 'Bu fikir xoşuma gəlir',
        tr: 'I like this idea',
        ch: 'I like this these want You idea'
      },
      {
        id: 437,
        sntc: 'O, səni sevir',
        tr: 'He loves you',
        ch: 'He loves likes looks at you'
      },
      {
        id: 438,
        sntc: 'Bu maşın xoşuma gəlir',
        tr: 'I like this car',
        ch: 'I like this these live car'
      },
      {
        id: 439,
        sntc: 'Biz o dərslərdən zövq alırıq',
        tr: 'We enjoy those lesson',
        ch: 'We enjoy like those this lesson'
      },
      {
        id: 440,
        sntc: 'Ona daha çox pul lazımdır',
        tr: 'He needs more money',
        ch: 'He needs want must more money'
      }
    ],
    [{
        id: 441,
        sntc: 'Bu zarafat heç gülməli deyil',
        tr: "This joke isn't funny at all",
        ch: "This joke aren't These isn't funny at all"
      },
      {
        id: 442,
        sntc: 'O, həqiqətən də həyatını dəyişmək istəyir',
        tr: 'He really wants to change his life',
        ch: 'He really wants want our changes to change his life'
      },
      {
        id: 443,
        sntc: 'Bu ən yaxşı seçimdir',
        tr: "It's the best choice",
        ch: "It's worst this the best choice"
      },
      {
        id: 444,
        sntc: 'Nə qədər səhviniz var?',
        tr: 'How many mistakes do you have?',
        ch: 'How many problems does mistake mistakes do you have'
      },
      {
        id: 445,
        sntc: 'Biz ən yaxşı tələbələrik?',
        tr: 'Are we the best students?',
        ch: 'Are we our excelent a the best students'
      },
      {
        id: 446,
        sntc: 'Mən yaxşı maşın istəyirəm',
        tr: 'I want a good car',
        ch: 'I want a good an cars car'
      },
      {
        id: 447,
        sntc: 'Mənim dostum və mən baharda orada yaşayırıq',
        tr: 'My friend and I live there in spring',
        ch: 'My friend and We here autumn I live there in spring'
      },
      {
        id: 448,
        sntc: 'O, hamamda deyil',
        tr: "He isn't in the bathroom",
        ch: "He isn't I am not in the bathroom"
      },
      {
        id: 449,
        sntc: 'Mən bunu xatırlayıram',
        tr: 'I remember it',
        ch: 'I remember know understand it'
      },
      {
        id: 450,
        sntc: 'Mən bu şəhəri çox bəyənirəm',
        tr: 'I like this city a lot',
        ch: 'I like country house this city a lot'
      }
    ],
    [{
        id: 451,
        sntc: 'Sənin anan ona bütün həqiqəti söyləmək istəyir?',
        tr: 'Does your mother want to tell him all the truth?',
        ch: 'Does your mother need lie want to tell him all the truth'
      },
      {
        id: 452,
        sntc: 'Mən o ölkəni çox bəyənirəm',
        tr: 'I like that country a lot',
        ch: 'I like city these that country a lot'
      },
      {
        id: 453,
        sntc: 'Sən nə qədər tez-tez zooparka gedirsən?',
        tr: 'How often do you go to the zoo?',
        ch: 'How often much does come do you go to the zoo'
      },
      {
        id: 454,
        sntc: 'O, hərdən parka gedir',
        tr: 'She sometimes goes to the park',
        ch: 'She often always sometimes goes to the park'
      },
      {
        id: 455,
        sntc: 'O, imtahana hazır deyil',
        tr: "He isn't ready for the exam",
        ch: "He isn't alone I ready for this the exam"
      },
      {
        id: 456,
        sntc: 'Həmin qadınlar müəllimdir',
        tr: 'Those women are teachers',
        ch: 'Those women men is teach are teachers'
      },
      {
        id: 457,
        sntc: 'Bu həddən artıq bahalıdır',
        tr: "It's too expensive",
        ch: "It's too little many expensive"
      },
      {
        id: 458,
        sntc: 'Siz kitabxanadasınız?',
        tr: 'Are you in the library?',
        ch: 'Are you we Is he these in the library'
      },
      {
        id: 459,
        sntc: 'Kim bu səhvləri görür?',
        tr: 'Who sees these mistakes?',
        ch: 'Who sees see those mistake these mistakes'
      },
      {
        id: 460,
        sntc: 'Bu izahat aydındır',
        tr: 'This explanation is clear',
        ch: 'This explanation are unclear is clear'
      }
    ],
    [{
        id: 461,
        sntc: 'O, bütün bu qaydaları xatırlayır?',
        tr: 'Does he remember all these rules?',
        ch: 'Does he remember all the you rule these rules'
      },
      {
        id: 462,
        sntc: 'Biz onu xatırlayırıq',
        tr: 'We remember it',
        ch: 'We remembers know need remember it'
      },
      {
        id: 463,
        sntc: 'O, belə düşünür',
        tr: 'He thinks so',
        ch: 'He I know understand thinks so'
      },
      {
        id: 464,
        sntc: 'Bu gərək bu dərsləri öyrənim',
        tr: 'I should learn these lessons',
        ch: 'I should can learn these lesson rules lessons'
      },
      {
        id: 465,
        sntc: 'O, bunu edə bilər',
        tr: 'She may do it',
        ch: 'She may should must do it'
      },
      {
        id: 466,
        sntc: 'Ən yaxın dostunun adı nədir?',
        tr: "What's your best friend's name?",
        ch: "What's your best need Who's names friend's name"
      },
      {
        id: 467,
        sntc: 'Mən belə şeyləri xoşlamıram',
        tr: 'I don’t like such things',
        ch: 'I don’t like thing so need such things'
      },
      {
        id: 468,
        sntc: 'Mən bunu etməkdən zövq alıram',
        tr: 'I enjoy doing it',
        ch: 'I enjoy do to doing it'
      },
      {
        id: 469,
        sntc: 'İkinci yerdə kimdir?',
        tr: 'Who is in the second place?',
        ch: 'Who is are first here in the second place'
      },
      {
        id: 470,
        sntc: 'O, tətildədir',
        tr: "She's on holiday",
        ch: "She's this event month on holiday"
      }
    ],
    [{
        id: 471,
        sntc: 'Mən bu sahədə mütəxəssis deyiləm',
        tr: "I'm not a specialist in this area",
        ch: "I'm not an street also a specialist in this area"
      },
      {
        id: 472,
        sntc: 'O kitab daha çox maraqlıdır',
        tr: 'That book is much more interesting',
        ch: 'That book useful useless is much more interesting'
      },
      {
        id: 473,
        sntc: 'Onlar ayrı yaşayırlar?',
        tr: 'Do they live separately?',
        ch: 'Do they we together alone live separately'
      },
      {
        id: 474,
        sntc: 'O, qışda səyahət etməyi xoşlayır',
        tr: 'He likes travelling in winter',
        ch: 'He likes summer spring travel travelling in winter'
      },
      {
        id: 475,
        sntc: 'Onlar pessimist deyillər',
        tr: "They aren't pessimistic",
        ch: "They aren't isn't optimistic pessimistic"
      },
      {
        id: 476,
        sntc: 'Sən adətən kimə zəng edirsən?',
        tr: 'Who do you usually call?',
        ch: 'Who do you always does usually call'
      },
      {
        id: 477,
        sntc: 'Xəbər qəribədir',
        tr: 'The news is strange',
        ch: 'The news is are This strange'
      },
      {
        id: 478,
        sntc: 'Bəzi insanlar belə deyir',
        tr: 'Some people say so',
        ch: 'Some people such tell say so'
      },
      {
        id: 479,
        sntc: 'Sən nə etmək istəyirsən?',
        tr: 'What do you want to do?',
        ch: 'What do you does wants want to do'
      },
      {
        id: 480,
        sntc: 'Mən yaddaşımı daha çox məşq etdirməliyəm',
        tr: 'I must train my memory more',
        ch: 'I must to exercise train my memory more'
      }
    ],
    [{
        id: 481,
        sntc: 'Bu çox maraqlı fikirdir',
        tr: "It's a very interesting idea",
        ch: "It's a an useless hopeless very interesting idea"
      },
      {
        id: 482,
        sntc: 'Bu görüş vacibdir?',
        tr: 'Is this meeting important?',
        ch: 'Is this look Does meeting seem important'
      },
      {
        id: 483,
        sntc: 'Siz bir-birinizi tanıyırsınız?',
        tr: 'Do you know each other?',
        ch: 'Do you know each other'
      },
      {
        id: 484,
        sntc: 'Mənim qardaşım var',
        tr: 'I have a brother',
        ch: 'I have a has an sister brother'
      },
      {
        id: 485,
        sntc: 'Siz bilirsiz ki, biz İngilis dilini addım-addım öyrənirik',
        tr: 'You know that we learn English step by step',
        ch: 'You know that we learn English learns step by step'
      },
      {
        id: 486,
        sntc: 'Bu qərar çox yaxşıdır',
        tr: "This decision is very good",
        ch: "This decision are bad badly is very good"
      },
      {
        id: 487,
        sntc: 'Onların fikri çox maraqlı gəlir',
        tr: 'Their idea seems very interesting',
        ch: 'Their idea ideas seem seems very interesting'
      },
      {
        id: 488,
        sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
        tr: 'Do all the students know the meaning of this expression?',
        ch: 'Do all the students understand must know the meaning of this expression'
      },
      {
        id: 489,
        sntc: 'Sizi nə maraqlandırır?',
        tr: 'What interests you?',
        ch: 'What Who interesting interests you'
      },
      {
        id: 490,
        sntc: 'Sənin nə vaxt boş vaxtın var?',
        tr: 'When do you have free time?',
        ch: 'When do does she you have free time'
      }
    ],
    [{
        id: 491,
        sntc: 'O, bu evdə yaşayır',
        tr: 'He lives in this house',
        ch: 'He lives live that in this house'
      },
      {
        id: 492,
        sntc: 'O dərslər darıxdırıcıdır?',
        tr: 'Are those lessons boring?',
        ch: 'Are those this lessons lesson seem boring'
      },
      {
        id: 493,
        sntc: 'O, çox boyludur',
        tr: "He's so tall",
        ch: "He's small short so tall"
      },
      {
        id: 494,
        sntc: 'Sənin dostunun on doqquz yaşı var?',
        tr: 'Is your friend nineteen?',
        ch: 'Is your my sister Are friend nineteen'
      },
      {
        id: 495,
        sntc: 'Mən bunu gələn ilə qədər etməliyəm',
        tr: 'I must do it by next year',
        ch: 'I need must to do it by next year'
      },
      {
        id: 496,
        sntc: 'Bu tapşırıq nə dərəcədə çətindir?',
        tr: 'How difficult is this exercise?',
        ch: 'How difficult is this exercise'
      },
      {
        id: 497,
        sntc: 'Mənim müdirim bütün sənədləri oxuyur',
        tr: 'My boss reads all the documents',
        ch: 'My boss writes an reads all the documents'
      },
      {
        id: 498,
        sntc: 'Sənin müdiriniz niyə onu tənqid edir?',
        tr: 'Why does your boss criticize him?',
        ch: 'Why does your boss criticize you What do him'
      },
      {
        id: 499,
        sntc: 'Sən birinci yerdə deyilsən. Sən ikinci yerdəsən',
        tr: "You aren't in the first place. You're in the second place",
        ch: "You aren't in the third first We place. You're in the second place"
      },
      {
        id: 500,
        sntc: 'Bu şeylər çox vacibdir',
        tr: 'These things are very important',
        ch: 'These things is usefull are very important'
      }
    ],
    [{
        id: 501,
        sntc: 'Biz pulu qənayət edəcik',
        tr: "We'll save money",
        ch: "We'll save return give money"
      },
      {
        id: 502,
        sntc: 'Nəticəniz sizi qane edəcək',
        tr: "You'll be satisfied with your result",
        ch: "You'll be are happy satisfied with your result"
      },
      {
        id: 503,
        sntc: 'O, bunu mənə izah edəcək',
        tr: "He'll explain it to me",
        ch: "He'll tell us explain it to me"
      },
      {
        id: 504,
        sntc: 'Bu gec-tez baş verecək',
        tr: "It'll happen sooner or later",
        ch: "It'll happen happens soon sooner or later"
      },
      {
        id: 505,
        sntc: 'Onların seçimi olacaq',
        tr: "They'll have a choice",
        ch: "They'll has an chance have a choice"
      },
      {
        id: 506,
        sntc: 'O, onunla evlənəcək',
        tr: "He'll marry her",
        ch: "He'll she husband marry her"
      },
      {
        id: 507,
        sntc: 'Mən bunu təmir edəcəm',
        tr: "I'll repair it",
        ch: "I'll repair prevent these it"
      },
      {
        id: 508,
        sntc: 'O, sənin məsləhətinə əməl edəcək',
        tr: "She'll follow your advice",
        ch: "She'll ask next reay follow your advice"
      },
      {
        id: 509,
        sntc: 'Bu səni şoka salacaq',
        tr: "It'll shock you",
        ch: "It'll surprise afraid shock you"
      },
      {
        id: 510,
        sntc: 'Bu sizi çox təəccübləndirəcək',
        tr: "It'll surprise you greatly",
        ch: "It'll shock often again surprise you greatly"
      }
    ],
    [{
        id: 511,
        sntc: 'Bu tədbirlər satışlarımızı stimullaşdıracaq',
        tr: 'These measures will stimulate our sales',
        ch: 'These measures will stimulates costs stimulate our sales'
      },
      {
        id: 512,
        sntc: 'Həyat onu cəzalandıracaq',
        tr: 'Life will punish him',
        ch: 'Life will catch he punish him'
      },
      {
        id: 513,
        sntc: 'Mənim dostum və mən İngilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English',
        ch: 'My friend times many and I will devote more free time to English'
      },
      {
        id: 514,
        sntc: 'Şagirdlər çox vaxt bu sözləri səhv salır',
        tr: 'Students often confuse these words',
        ch: 'Students often always this confuse these words'
      },
      {
        id: 515,
        sntc: 'Bu sözlər fərqli məna daşıyırlar',
        tr: 'These words have a different meaning',
        ch: 'These words has an have a different meaning'
      },
      {
        id: 516,
        sntc: 'Bu bilik kifayət qədər çox olacaq',
        tr: 'This knowledge will be more than enough',
        ch: 'This knowledge are much will be more than enough'
      },
      {
        id: 517,
        sntc: 'Onun qardaşı buna görə peşman olacaq',
        tr: 'His brother will regret it',
        ch: 'His brother this fact will regret it'
      },
      {
        id: 518,
        sntc: 'Həyat ona dərs verəcək',
        tr: 'Life will teach him a lesson',
        ch: 'Life will an give teach him a lesson'
      },
      {
        id: 519,
        sntc: 'Onun qardaşı davranışına görə üzr istəyəcək',
        tr: 'His brother will apologize for his behaviour',
        ch: 'His brother rude sister will apologize for his behaviour'
      },
      {
        id: 520,
        sntc: 'Əminəm ki, oğlanlar özlərini daha yaxşı aparacaqlar',
        tr: "I'm sure the boys will behave better",
        ch: "I'm sure girls a the boys will behave better"
      }
    ],
    [{
        id: 521,
        sntc: 'O, bu faktı inkar etməyəcək',
        tr: "She won't deny this fact",
        ch: "She won't that decision deny this fact"
      },
      {
        id: 522,
        sntc: 'Bu pul kifayət etməyəcək',
        tr: "This money won't be enough",
        ch: "This money will more won't be enough"
      },
      {
        id: 523,
        sntc: 'Mən bu müsabiqədə iştirak etməyəcəm',
        tr: "I won't take part in this contest",
        ch: "I won't will these take part in this contest"
      },
      {
        id: 524,
        sntc: 'Onlar artıq bir yerdə olmayacaqlar',
        tr: "They won't be together any longer",
        ch: "They won't be together separately will any longer"
      },
      {
        id: 525,
        sntc: 'Bu ən yaxşı seçim olmayacaq',
        tr: "It won't be the best choice",
        ch: "It won't worst decision be the best choice"
      },
      {
        id: 526,
        sntc: 'O, bütün pulunu sərmayə qoymayacaq',
        tr: "He won't invest all his money",
        ch: "He won't save keep invest all his money"
      },
      {
        id: 527,
        sntc: 'O, buna reaksiya verməyəcək',
        tr: "She won't react to it",
        ch: "She won't refuse forget react to it"
      },
      {
        id: 528,
        sntc: 'Bu, qanuni olmayacaq',
        tr: "It won't be legal",
        ch: "It won't illegal law be legal"
      },
      {
        id: 529,
        sntc: 'Mən onun sözünü kəsmərəm',
        tr: 'I won’t interrupt him',
        ch: 'I won’t influence take interrupt him'
      },
      {
        id: 530,
        sntc: 'Sən buna təsir etməyəcəksən',
        tr: "You won't influence it",
        ch: "You won't will interrupt influence it"
      }
    ],
    [{
        id: 531,
        sntc: 'Bu yanaşma kifayət qədər yenilikçi olmayacaq',
        tr: "This approach won't be innovative enough",
        ch: "This approach won't be innovative useful informative enough"
      },
      {
        id: 532,
        sntc: 'Bu addım kifayət qədər radikal olmayacaq',
        tr: "This step won't be radical enough",
        ch: "This step good well won't be radical enough"
      },
      {
        id: 533,
        sntc: 'O dərslər kifayət qədər yaxşı deyil',
        tr: "Those lessons aren't good enough",
        ch: "Those lessons lesson isn't aren't good enough"
      },
      {
        id: 534,
        sntc: 'Mənim valideynlərim buna təkid etməyəcəklər',
        tr: "My parents won't insist on it",
        ch: "My parents influnce real won't insist on it"
      },
      {
        id: 535,
        sntc: 'Sabah günəşli olmayacaq',
        tr: "It won't be sunny tomorrow",
        ch: "It day yesterday won't be sunny tomorrow"
      },
      {
        id: 536,
        sntc: 'O, belə tez hər şeyi xatırlamayacaq',
        tr: "He won't remember everything so quickly",
        ch: "He won't understand know remember everything so quickly"
      },
      {
        id: 537,
        sntc: 'Mənim qardaşım və mən artıq bunu sifariş verməyəcik',
        tr: "My brother and I won't order it anymore",
        ch: "My brother more buy and I won't order it anymore"
      },
      {
        id: 538,
        sntc: 'Bu yeganə doğru cavab olmayacaq',
        tr: "It won't be the only right answer",
        ch: "It won't ask will be the only right answer"
      },
      {
        id: 539,
        sntc: 'Məncə, bu musiqiçi populyar olmayacaq',
        tr: "I think this musician won't become popular",
        ch: "I think this that actor stay musician won't become popular"
      },
      {
        id: 540,
        sntc: 'Bu gün kim yoxdur?',
        tr: 'Who is absent today?',
        ch: 'Who is are busy absent today'
      }
    ],
    [{
        id: 541,
        sntc: 'Biz İngilis dilində düzgün danışacağıq?',
        tr: 'Will we speak English correctly?',
        ch: 'Will we tell right speak English correctly'
      },
      {
        id: 542,
        sntc: 'Sabah azad olacaqsan?',
        tr: 'Will you be free tomorrow?',
        ch: 'Will you busy yesterday be free tomorrow'
      },
      {
        id: 543,
        sntc: 'Bu dərs nə dərəcədə effektlidir?',
        tr: 'How effective is the lesson?',
        ch: 'How effective these lessons is the lesson'
      },
      {
        id: 544,
        sntc: 'Onlar gələn həftə məşğul olacaqlar?',
        tr: 'Will they be busy next week?',
        ch: 'Will this month they be busy next week'
      },
      {
        id: 545,
        sntc: 'O, həmin yerdə olacaq?',
        tr: 'Will he be in the same place?',
        ch: 'Will you are he be in the same place'
      },
      {
        id: 546,
        sntc: 'O, çox gözəldir',
        tr: "She's very beautiful",
        ch: "She's many clever smart very beautiful"
      },
      {
        id: 547,
        sntc: 'Sən bunu axşam bişirəcəksən?',
        tr: 'Will you cook it in the evening?',
        ch: 'Will you morning not cook it in the evening'
      },
      {
        id: 548,
        sntc: 'Sən birigün onu görəcəksən?',
        tr: 'Will you see him the day after tomorrow?',
        ch: 'Will yesterday look you see him the day after tomorrow'
      },
      {
        id: 549,
        sntc: 'Onun üçün darıxacaqsan?',
        tr: 'Will you miss her?',
        ch: 'Will lazy need you miss her'
      },
      {
        id: 550,
        sntc: 'Məqalə elə maraqlıdır?',
        tr: 'Is the article so interesting?',
        ch: 'Is the article these text really so interesting'
      }
    ],
    [{
        id: 551,
        sntc: 'Mən İngilis dilində düzgün və avtomatik danışacam?',
        tr: 'Will I speak English correctly and automatically?',
        ch: 'Will I speak right talk English correctly and automatically'
      },
      {
        id: 552,
        sntc: 'Bu, həftənin əvvəlində mümkün olacaq?',
        tr: 'Will it be possible at the beginning of this week?',
        ch: 'Will it be possible month summer at the beginning of this week'
      },
      {
        id: 553,
        sntc: 'Pul mənim cibimdədir',
        tr: "The money is in my pocket",
        ch: "The money are your bag is in my pocket"
      },
      {
        id: 554,
        sntc: 'Görüş iki saatdan çox davam edəcək?',
        tr: 'Will the meeting last for more than two hours?',
        ch: 'Will the meeting last for more than two hours'
      },
      {
        id: 555,
        sntc: 'Sən birigün onu görəcəksən?',
        tr: 'Will you see him the day after tomorrow?',
        ch: 'Will you yesterday before see him the day after tomorrow'
      },
      {
        id: 556,
        sntc: 'O, həmin yerdə olacaq?',
        tr: 'Will she be in the same place?',
        ch: 'Will she one places be in the same place'
      },
      {
        id: 557,
        sntc: 'Sən niyə belə qəmlisən?',
        tr: 'Why are you so sad?',
        ch: 'Why are you so such funny sad'
      },
      {
        id: 558,
        sntc: 'Ad gününü qeyd edəcəksən?',
        tr: 'Will you celebrate your birthday?',
        ch: 'Will you make dream celebrate your birthday'
      },
      {
        id: 559,
        sntc: 'Sən onun üçün darıxacaqsan?',
        tr: 'Will you miss her?',
        ch: 'Will you your parents miss her'
      },
      {
        id: 560,
        sntc: 'Gələn həftə sərbəst olacaqsan?',
        tr: 'Will you be free next week?',
        ch: 'Will you be free winter left next week'
      }
    ],
    [{
        id: 561,
        sntc: 'Buna nə qədər pul xərcləyəcəksən?',
        tr: 'How much money will you spend on it?',
        ch: 'How much money will save costs you spend on it'
      },
      {
        id: 562,
        sntc: 'Sən o yerə necə çatacaqsan?',
        tr: 'How will you get to that place?',
        ch: 'How will come believe you get to that place'
      },
      {
        id: 563,
        sntc: 'Mən bu əşyanı əldə edə bilərəm',
        tr: "I'll manage to get this thing",
        ch: "I'll manage finish need to get this thing"
      },
      {
        id: 564,
        sntc: 'Hansı tövsiyəyə əməl edəcəksən?',
        tr: 'Which recommendation will you follow?',
        ch: 'Which recommendation should keep will you follow'
      },
      {
        id: 565,
        sntc: 'Orada müntəzəm olaraq nə qədər məşq edəcəksən?',
        tr: 'How regularly will you train there?',
        ch: 'How regularly will like those you train there'
      },
      {
        id: 566,
        sntc: 'Kimin velosipedini götürəcəksən?',
        tr: 'Whose bike will you take?',
        ch: 'Whose bike give eat will you take'
      },
      {
        id: 567,
        sntc: 'Mən bu problemi həll edə biləcəyəm?',
        tr: 'Will I be able to solve this problem?',
        ch: 'Will I read state be able to solve this problem'
      },
      {
        id: 568,
        sntc: 'Mən bu problemi həll edə biləcəm',
        tr: "I'll be able to solve this problem",
        ch: "I'll be account dear able to solve this problem"
      },
      {
        id: 569,
        sntc: 'Onlar bunu harada istehsal edəcəklər?',
        tr: 'Where will they produce it?',
        ch: 'Where will we save allow they produce it'
      },
      {
        id: 570,
        sntc: 'Bu kinoya kim baxacaq?',
        tr: 'Who will watch this movie?',
        ch: 'Who will look What watch this movie'
      }
    ],
    [{
        id: 571,
        sntc: 'Mən İngilis dilini öyrənməyə böyük zövqlə davam edəcəyəm',
        tr: "I'll continue learning English with great pleasure",
        ch: "I'll continue study many learning English with great pleasure"
      },
      {
        id: 572,
        sntc: 'Sən niyə ora uçacaqsan?',
        tr: 'Why will you fly there?',
        ch: 'Why will we What you fly there'
      },
      {
        id: 573,
        sntc: 'Konfrans harada baş tutacaq?',
        tr: 'Where will the conference take place?',
        ch: 'Where will these contest the conference take place'
      },
      {
        id: 574,
        sntc: 'Mən burada işləməyə başlayacam',
        tr: "I'll start working here",
        ch: "I'll start job in this working here"
      },
      {
        id: 575,
        sntc: 'Sənin yoldaşın onlara nə qədər pul borclu olacaq?',
        tr: 'How much money will your husband owe them?',
        ch: 'How much money many will your husband owe them'
      },
      {
        id: 576,
        sntc: 'Sən nə vaxta qədər olmayacaqsan?',
        tr: 'How long will you be away?',
        ch: 'How long will you here at home be away'
      },
      {
        id: 577,
        sntc: 'Bu hadisə harada baş tutacaq?',
        tr: 'Where will this event take place?',
        ch: 'Where will this story magazine event take place'
      },
      {
        id: 578,
        sntc: 'Sənin dostların müntəzəm olaraq hansı kanallara baxacaqlar?',
        tr: 'What channels will your friends watch on a regular basis?',
        ch: 'What channels friend will your friends watch on a regular basis'
      },
      {
        id: 579,
        sntc: 'Sənin dostun bu problemi necə həll edəcək?',
        tr: 'How will your friend manage to solve this problem?',
        ch: 'How will regret your friend manage to solve this problem'
      },
      {
        id: 580,
        sntc: 'Ümid edirəm ki, müəllimimiz bundan sonra da bizə dərs deyəcək',
        tr: 'I hope our teacher will continue teaching us',
        ch: 'I hope teach we our teacher will continue teaching us'
      }
    ],
    [{
        id: 581,
        sntc: 'Nə baş verəcək?',
        tr: 'What will happen?',
        ch: 'What Who agree here will happen'
      },
      {
        id: 582,
        sntc: 'İşçilər bu cür hesabatları nə qədər davamlı edəcəklər?',
        tr: 'How regularly will the workers make this kind of reports?',
        ch: 'How regularly will the much workers make this kind of reports'
      },
      {
        id: 583,
        sntc: 'Bunu İngilis dilinə tərcümə etmək lazım olacaq',
        tr: "It'll be necessary to translate it into English",
        ch: "It'll be necessary must to translate it into English"
      },
      {
        id: 584,
        sntc: 'Mən çalışacağam bunu deməyim',
        tr: 'I’ll try not to say it',
        ch: 'I’ll try tell need not to say it'
      },
      {
        id: 585,
        sntc: 'Bu asan olacaq',
        tr: "It'll be easy",
        ch: "It'll useful kind be easy"
      },
      {
        id: 586,
        sntc: 'Biz bunu edə bilərik',
        tr: 'We might do it',
        ch: 'We might does need do it'
      },
      {
        id: 587,
        sntc: 'Niyə sən bizimlə razı deyilsən',
        tr: 'Why do you disagree with us?',
        ch: 'Why do you agree me disagree with us'
      },
      {
        id: 588,
        sntc: 'Uşaqlar başqa yerə gedəcək',
        tr: 'The children will go to another place',
        ch: 'The children come other will go to another place'
      },
      {
        id: 589,
        sntc: 'Mən İngilis dilini addım-addım öyrənəcəm',
        tr: "I'll learn English step by step",
        ch: "I'll learn know decide English step by step"
      },
      {
        id: 590,
        sntc: 'Mən bunu daha yaxşı edə biləcəyəm',
        tr: "I'll manage to do it better",
        ch: "I'll manage worse good to do it better"
      }
    ],
    [{
        id: 591,
        sntc: 'Mən İngiliscə heç bir səhv etmədən danışacam',
        tr: "I'll speak English without any mistakes at all",
        ch: "I'll speak tell English without any mistakes at all"
      },
      {
        id: 592,
        sntc: 'Mən bunu daha çox boş vaxtım olmaq üçün edəcəyəm',
        tr: 'I’ll do it to have more free time',
        ch: 'I’ll do it has less to have more free time'
      },
      {
        id: 593,
        sntc: 'O, bu pulu mənə borclu olacaq',
        tr: 'He’ll owe me this money',
        ch: 'He’ll owe me owes pay this money'
      },
      {
        id: 594,
        sntc: 'Onun yoldaşı onun üçün darıxacaq?',
        tr: 'Will his wife miss him?',
        ch: 'Will his wife misses friend miss him'
      },
      {
        id: 595,
        sntc: 'Sən tezliklə yorulacaqsan',
        tr: 'You’ll get tired soon',
        ch: 'You’ll often again get tired soon'
      },
      {
        id: 596,
        sntc: 'Mən bunu daha çox pul qazanmaq üçün edəcəm',
        tr: 'I’ll do it to earn more money',
        ch: 'I’ll do it to earn more less pay money'
      },
      {
        id: 597,
        sntc: 'Niyə sən başqa yerə uçacaqsan?',
        tr: 'Why will you fly to another place?',
        ch: 'Why will other places you fly to another place'
      },
      {
        id: 598,
        sntc: 'Tələbə nəticəni necə yaxşılaşdıra biləcək?',
        tr: 'How will the student be able to improve the result?',
        ch: 'How will must the student be able to improve the result'
      },
      {
        id: 599,
        sntc: 'Siz bu restorana gedəcəksiniz?',
        tr: 'Will you go to this restaurant?',
        ch: 'Will fly away you go to this restaurant'
      },
      {
        id: 600,
        sntc: 'Niyə sənin həmkarların bununla maraqlanacaq?',
        tr: 'Why will your colleagues be interested in it?',
        ch: 'Why will your friends colleagues be interested in it'
      }
    ],
    [{
        id: 601,
        sntc: 'Onlar nə edə biləcəklər?',
        tr: 'What will they be able to do?',
        ch: 'What will Why agree they be able to do'
      },
      {
        id: 602,
        sntc: 'Mən bunu etməkdən imtina edəcəm',
        tr: 'I’ll refuse to do it',
        ch: 'I’ll refuse ready need to do it'
      },
      {
        id: 603,
        sntc: 'Bu, mütləq o demək deyil ki, o, bir ilə İngilis dilini öyrənəcək',
        tr: "It doesn't necessarily mean that he’ll learn English in a year",
        ch: "It doesn't necessarily mean that he’ll learn English in a year"
      },
      {
        id: 604,
        sntc: 'Nə vaxt azad olacaqsan?',
        tr: 'When will you be free?',
        ch: 'When will easy way you be free'
      },
      {
        id: 605,
        sntc: 'Onun fikirləri çox maraqlı görünür',
        tr: 'Their ideas seem very interesting',
        ch: 'Their ideas seems all seem very interesting'
      },
      {
        id: 606,
        sntc: 'Onlar bunu harada istehsal edəcəklər?',
        tr: 'Where will they produce it?',
        ch: 'Where will does we they produce it'
      },
      {
        id: 607,
        sntc: 'Mən daha ora getməyəcəm',
        tr: "I won't go there anymore",
        ch: "I won't go here come there anymore"
      },
      {
        id: 608,
        sntc: 'Məncə, təkəri yenidən icad etməyə ehtiyacımız yoxdur',
        tr: "I think we don't need reinvent the wheel",
        ch: "I think we make us don't need reinvent the wheel"
      },
      {
        id: 609,
        sntc: 'Bu tədbirlər satışlarımızı stimullaşdıracaq',
        tr: 'These measures will stimulate our sales',
        ch: 'These measures costs pay will stimulate our sales'
      },
      {
        id: 610,
        sntc: 'O, bu faktı inkar etməyəcək',
        tr: "She won't deny this fact",
        ch: "She won't these measures deny this fact"
      }
    ],
    [{
        id: 611,
        sntc: 'Biz bundan şikayət etmərik',
        tr: "We won't complain about it",
        ch: "We won't these costs complain about it"
      },
      {
        id: 612,
        sntc: 'Bu, yeganə doğru cavab olmayacaq',
        tr: "It won't be the only right answer",
        ch: "It won't twice ask be the only right answer"
      },
      {
        id: 613,
        sntc: 'Mən bilirəm ki, onun maaşı az olacaq',
        tr: 'I know he’ll have a low salary',
        ch: 'I know he’ll high have a low salary'
      },
      {
        id: 614,
        sntc: 'Mən çalışacağam, bunu ona deməyi unutmayım',
        tr: 'I’ll try not to forget to tell him it',
        ch: 'I’ll try leave not to forget to tell him it'
      },
      {
        id: 615,
        sntc: 'Onlar gələn həftə məşğul olacaqlar?',
        tr: 'Will they be busy next week?',
        ch: 'Will they free month be busy next week'
      },
      {
        id: 616,
        sntc: 'İşçilər bu təşəbbüsü dəstəkləməyəcəklər',
        tr: "The employees won't support this initiative",
        ch: "The employees agree won't support this initiative"
      },
      {
        id: 617,
        sntc: 'Bu, mütəmadi olaraq baş verəcək',
        tr: "It'll happen on a regular basis",
        ch: "It'll happen event on a regular basis"
      },
      {
        id: 618,
        sntc: 'Bu imtahana hazırlaşmağı tezliklə bitirəcəyəm',
        tr: 'I’ll finish preparing for this exam soon',
        ch: 'I’ll start finish preparing for this exam soon'
      },
      {
        id: 619,
        sntc: 'Mən çalışacağam bunu xatırlatmayım',
        tr: 'I’ll try not to mention it',
        ch: 'I’ll try must need not to mention it'
      },
      {
        id: 620,
        sntc: 'Bu münaqişəni kim həll edəcək?',
        tr: 'Who will resolve this conflict?',
        ch: 'Who will these avoid resolve this conflict'
      }
    ],
    [{
        id: 621,
        sntc: 'Onlar sizinlə razılaşmayacaqlar',
        tr: 'They’ll disagree with you',
        ch: 'They’ll fed up disagree with you'
      },
      {
        id: 622,
        sntc: 'Onun boş vaxtı olacaq',
        tr: 'He’ll have free time',
        ch: 'He’ll must afraid have free time'
      },
      {
        id: 623,
        sntc: 'Lüğətdə bu sözə nə vaxt baxarsınız?',
        tr: 'When will you look up this word in a dictionary?',
        ch: 'When will we you look up this word in a dictionary'
      },
      {
        id: 624,
        sntc: 'Bu pul kifayət edər?',
        tr: 'Will this money be enough?',
        ch: 'Will this these wallet money be enough'
      },
      {
        id: 625,
        sntc: 'Mən bunu birigün yenə deyəcəm',
        tr: 'I’ll say it again the day after tomorrow',
        ch: 'I’ll say yesterday it again the day after tomorrow'
      },
      {
        id: 626,
        sntc: 'Sən bunu sonda görəcəksən',
        tr: 'You’ll see it in the end',
        ch: 'You’ll see look it in the end'
      },
      {
        id: 627,
        sntc: 'Mən İngilis dilini savadlı dil daşıyıcılar kimi biləcəyəm?',
        tr: 'Will I know English like an educated native speaker?',
        ch: 'Will I know English like an a educated native speaker'
      },
      {
        id: 628,
        sntc: 'Digər insanlar indi sizə kömək etməyəcək',
        tr: "Other people won't help you now",
        ch: "Other people new helps won't help you now"
      },
      {
        id: 629,
        sntc: 'Bizə bəzi radikal tədbirlər lazım olacaq',
        tr: 'We’ll need some radical measures',
        ch: 'We’ll need some same way radical measures'
      },
      {
        id: 630,
        sntc: 'Kim tezliklə evdən çıxacaq?',
        tr: 'Who will leave home soon?',
        ch: 'Who will often come leave home soon'
      }
    ],
    [{
        id: 631,
        sntc: 'Bu, təxminən iki saat davam edəcək?',
        tr: 'Will it last for about two hours?',
        ch: 'Will it three weeks last for about two hours'
      },
      {
        id: 632,
        sntc: 'Bu, bizim əsas layihəmiz olacaq',
        tr: "It'll be our main project",
        ch: "It'll most important be our main project"
      },
      {
        id: 633,
        sntc: 'Mənim tələffüzüm daha da yaxşı olacaq',
        tr: 'My pronunciation will become much better',
        ch: 'My pronunciation devote good will become much better'
      },
      {
        id: 634,
        sntc: 'O, bunu mənə izah edəcək',
        tr: 'He’ll explain it to me',
        ch: 'He’ll tell explode explain it to me'
      },
      {
        id: 635,
        sntc: 'Onlar bu yerə necə çatacaqlar?',
        tr: 'How will they get to this place?',
        ch: 'How will take near they get to this place'
      },
      {
        id: 636,
        sntc: 'Bu onun nöqteyi-nəzərini dəyişməyəcək',
        tr: "It won't change his point of view",
        ch: "It won't changes look change his point of view"
      },
      {
        id: 637,
        sntc: 'Mən bu problemi həll edə biləcəm',
        tr: 'I’ll be able to solve this problem',
        ch: 'I’ll must could be able to solve this problem'
      },
      {
        id: 638,
        sntc: 'Tələbələr buna gülməyəcəklər',
        tr: 'The students won’t laugh at it',
        ch: 'The classmates will students won’t laugh at it'
      },
      {
        id: 639,
        sntc: 'Mənim valideynlərim buna təkid etməyəcəklər',
        tr: "My parents won't insist on it",
        ch: "My parents delay influence won't insist on it"
      },
      {
        id: 640,
        sntc: 'Bunu hamı bilir',
        tr: 'Everyone knows it',
        ch: 'Everyone Everything needs knows it'
      }
    ],
    [{
        id: 641,
        sntc: 'Mən çalışacağam, bu bağlamanı ona göndərməyə unutmayım',
        tr: 'I’ll try not to forget to send him this parcel',
        ch: 'I’ll try not to message forget to send him this parcel'
      },
      {
        id: 642,
        sntc: 'Bu qanuni olmayacaq',
        tr: "It won't be legal",
        ch: "It will law won't be legal"
      },
      {
        id: 643,
        sntc: 'Sabah azad olacaqsan?',
        tr: 'Will you be free tomorrow?',
        ch: 'Will busy yesterday you be free tomorrow'
      },
      {
        id: 644,
        sntc: 'Belə qəribə cavabın səbəbi nədir?',
        tr: "What's the reason for such a strange answer?",
        ch: "What's the reason decision an for such a strange answer"
      },
      {
        id: 645,
        sntc: 'Sən onu nə vaxt görəcəksən?',
        tr: 'What time will you see him?',
        ch: 'What How look time will you see him'
      },
      {
        id: 646,
        sntc: 'Sən bunu görüşün əvvəlində görəcəksən',
        tr: 'You’ll see it at the beginning of the meeting',
        ch: 'You’ll see it at the end beginning of the meeting'
      },
      {
        id: 647,
        sntc: 'O, bu dərsləri bəyənəcək',
        tr: 'He’ll like these lessons',
        ch: 'He’ll teach likes like these lessons'
      },
      {
        id: 648,
        sntc: 'Mən İngilis dilini çox intensiv şəkildə öyrənməyə başlayacam',
        tr: 'I’ll start learning English very intensively',
        ch: 'I’ll finish learn start learning English very intensively'
      },
      {
        id: 649,
        sntc: 'Bu hadisə nə vaxt baş tutacaq?',
        tr: 'What time will this event take place?',
        ch: 'What time Who will this event take place'
      },
      {
        id: 650,
        sntc: 'Bu fakt, onların bu problemə münasibətini dəyişəcək?',
        tr: 'Will this fact change their attitude to this problem?',
        ch: 'Will this fact those change their attitude to this problem'
      }
    ],
    [{
        id: 651,
        sntc: 'Mən bu nümunələri daxil etdim',
        tr: 'I included these examples',
        ch: 'I included influenced that these examples'
      },
      {
        id: 652,
        sntc: 'Sən mənə çox kömək etdin',
        tr: 'You helped me a lot',
        ch: 'You helped could me a lot'
      },
      {
        id: 653,
        sntc: 'Mən həmin işi əldə etməyə çalışdım, lakin uğur qazana bilmədim',
        tr: 'I tried to get that job but without success',
        ch: 'I tried ready to get that job but without success'
      },
      {
        id: 654,
        sntc: 'Biz orada yaşamağa başladıq',
        tr: 'We started living there',
        ch: 'We finished these started living there'
      },
      {
        id: 655,
        sntc: 'O, döndü və ona gülümsədi',
        tr: 'He turned and smiled at her',
        ch: 'He turned looked and smiled at her'
      },
      {
        id: 656,
        sntc: 'Onlar bizə bir-iki sual verdilər',
        tr: 'They asked us a couple of questions',
        ch: 'They asked smiled at us a couple of questions'
      },
      {
        id: 657,
        sntc: 'O, həqiqətən bu yeri bəyənmişdi',
        tr: 'She really liked this place',
        ch: 'She really here liked this place'
      },
      {
        id: 658,
        sntc: 'O, ona bir-iki sual verdi',
        tr: 'He asked her a couple of questions',
        ch: 'He asked me two her a couple of questions'
      },
      {
        id: 659,
        sntc: 'O, iki il əvvəl İngilis dilini öyrənməyə başladı',
        tr: 'She started learning English three years ago',
        ch: 'She started learning study two English three years ago'
      },
      {
        id: 660,
        sntc: 'Bu, mənim başıma gəlmişdi',
        tr: 'It happened to me',
        ch: 'It happened us upset to me'
      }
    ],
    [{
        id: 661,
        sntc: 'Bu mənim fikrimi dəyişdi',
        tr: 'It changed my opinion',
        ch: 'It miss fed changed my opinion'
      },
      {
        id: 662,
        sntc: 'Biz bu qaydaları tekrarladıq',
        tr: 'We revised these rules',
        ch: 'We revised measures this these rules'
      },
      {
        id: 663,
        sntc: 'Bunu necə edim yadıma düşdü',
        tr: 'I remembered how to do it',
        ch: 'I remembered what does how to do it'
      },
      {
        id: 664,
        sntc: 'Mən çox vacib bir şeyi əlavə etdim',
        tr: 'I added one very important thing',
        ch: 'I added one very important thing'
      },
      {
        id: 665,
        sntc: 'Mən pəncərəni açdım',
        tr: 'I opened the window',
        ch: 'I closed door opened the window'
      },
      {
        id: 666,
        sntc: 'Onlar bizə xüsusi bir şey təklif etdilər',
        tr: 'They offered us something special',
        ch: 'They ordered useless offered us something special'
      },
      {
        id: 667,
        sntc: 'Bu mənim nöqteyi-nəzərimi dəyişdi',
        tr: 'It changed my point of view',
        ch: 'It look after changed my point of view'
      },
      {
        id: 668,
        sntc: 'Biz çox vaxt onları gözləyirdik',
        tr: 'We often waited for them',
        ch: 'We always missed often waited for them'
      },
      {
        id: 669,
        sntc: 'Onlar ən yaxşı şərait təmin etdilər',
        tr: 'They provided the best conditions',
        ch: 'They provided worst give the best conditions'
      },
      {
        id: 670,
        sntc: 'Mən qapını açdım',
        tr: 'I opened the door',
        ch: 'I opened closed window the door'
      }
    ],
    [{
        id: 671,
        sntc: 'Onlar birdən-birə peyda oldular',
        tr: 'They appeared suddenly',
        ch: 'They showed sometimes appeared suddenly'
      },
      {
        id: 672,
        sntc: 'Mən bunu etməmək qərarına gəldim',
        tr: 'I decided not to do it',
        ch: 'I decided does order not to do it'
      },
      {
        id: 673,
        sntc: 'O, bunu bizə izah etdi',
        tr: 'He explained it to us',
        ch: 'He explained showed it to us'
      },
      {
        id: 674,
        sntc: 'Mən qayıtdım',
        tr: 'I returned',
        ch: 'I across He come returned'
      },
      {
        id: 675,
        sntc: 'Mən güclü qabaqcıl səviyyəyə çatdım',
        tr: 'I reached a strong Advanced level',
        ch: 'I reached a an high strong Advanced level'
      },
      {
        id: 676,
        sntc: 'Bu suala cavab verdim',
        tr: 'I answered this question',
        ch: 'I answered asked We this question'
      },
      {
        id: 677,
        sntc: 'O, bunun üçün pul ödəməkdən imtina etdi',
        tr: 'He refused to pay for it',
        ch: 'He refused regretted to pay for it'
      },
      {
        id: 678,
        sntc: 'Mən çox vaxt online olaraq paltar sifariş edirdim',
        tr: 'I often ordered clothes online',
        ch: 'I often always shoes ordered clothes online'
      },
      {
        id: 679,
        sntc: 'Biz, adətən, orada pivə sifariş edirdik',
        tr: 'We usually ordered tea there',
        ch: 'We usually offered ordered milk tea there'
      },
      {
        id: 680,
        sntc: 'O, çox dadlı tort bişirdi',
        tr: 'She cooked a very tasty cake',
        ch: 'She cooked an smell a very tasty cake'
      }
    ],
    [{
        id: 681,
        sntc: 'O, daha çox pul borc götürdü',
        tr: 'He borrowed more money',
        ch: 'He borrowed owe big more money'
      },
      {
        id: 682,
        sntc: 'O, bu biznesi idarə edib',
        tr: 'He managed this business',
        ch: 'He managed resolve that this business'
      },
      {
        id: 683,
        sntc: 'Məm qrammatikamı xeyli yaxşılaşdırmağı bacardım',
        tr: 'I managed to improve my grammar greatly',
        ch: 'I managed to impress improve my grammar greatly'
      },
      {
        id: 684,
        sntc: 'Biz bu münaqişəni həll etdik',
        tr: 'We resolved this conflict',
        ch: 'We resolved accident this conflict'
      },
      {
        id: 685,
        sntc: 'Onlar bu qəza ilə bağlı bizə məlumat verdilər',
        tr: 'They informed us of this accident',
        ch: 'They informed intend event us of this accident'
      },
      {
        id: 686,
        sntc: 'Mən İngilis dilində təcrübə keçdim',
        tr: 'I practiced English',
        ch: 'I practiced learn study English'
      },
      {
        id: 687,
        sntc: 'O, əllərini yudu',
        tr: 'He washed his hands',
        ch: 'He washed eyes legs his hands'
      },
      {
        id: 688,
        sntc: 'Mən orada park etmişdim',
        tr: 'I parked there',
        ch: 'I parked stay go there'
      },
      {
        id: 689,
        sntc: 'Polis həmin cinayətkarı həbs etdi',
        tr: 'The police arrested that criminal',
        ch: 'The police caugth arrested that criminal'
      },
      {
        id: 690,
        sntc: 'O, Allaha dua etdi',
        tr: 'He prayed to God',
        ch: 'He prayed blessed to God'
      }
    ],
    [{
        id: 691,
        sntc: 'Mən bu dərsi bir dəfə də təkrarladım',
        tr: 'I revised this lesson one more time',
        ch: 'I revised these lessons this lesson one more time'
      },
      {
        id: 692,
        sntc: 'O, mənimlə qismən razılaşdı',
        tr: 'She partly agreed with me',
        ch: 'She partly absolutely disagreed agreed with me'
      },
      {
        id: 693,
        sntc: 'Mən fikirlərimi ifadə etdim',
        tr: 'I expressed my ideas',
        ch: 'I expressed idea think my ideas'
      },
      {
        id: 694,
        sntc: 'Mən qrammatikamı yaxşılaşdırmağı bacardım',
        tr: 'I managed to improve my grammar',
        ch: 'I managed to listening improve my grammar'
      },
      {
        id: 695,
        sntc: 'Mən söz verdim ki, bunu edəcəm',
        tr: 'I promised to do it',
        ch: 'I promised missed delay to do it'
      },
      {
        id: 696,
        sntc: 'Bu, dərhal bizim diqqətimizi cəlb etdi',
        tr: 'It attracted our attention immediately',
        ch: 'It attracted also after our attention immediately'
      },
      {
        id: 697,
        sntc: 'O, səhər və axşam dua edirdi',
        tr: 'He prayed in the morning and in the evening',
        ch: 'He prayed often in the morning and in the evening'
      },
      {
        id: 698,
        sntc: 'Mən bu tətbiqdəki bütün dərsləri tekrarladım',
        tr: 'I revised all the lessons in this app',
        ch: 'I revised teach all the lessons in this app'
      },
      {
        id: 699,
        sntc: 'Biz hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed everyone many everything very thoroughly'
      },
      {
        id: 700,
        sntc: 'Biz hər gün onun kompüterindən istifadə edirdik',
        tr: 'We used his computer every day',
        ch: 'We used his each computer every day'
      }
    ],
    [{
        id: 701,
        sntc: 'O, kitabını nəşr etdi',
        tr: 'He published his book',
        ch: 'He published amazed my his book'
      },
      {
        id: 702,
        sntc: 'Mən pul israf etməməyə qərar verdim',
        tr: 'I decided not to waste money',
        ch: 'I decided think spend not to waste money'
      },
      {
        id: 703,
        sntc: 'O, onun xarici görünüşünü təsvir etdi',
        tr: 'He described her appearance',
        ch: 'He described look this her appearance'
      },
      {
        id: 704,
        sntc: 'O, ona, onları müdafiə etməsini əmr etdi',
        tr: 'He ordered him to defend them',
        ch: 'He ordered asked him to defend them'
      },
      {
        id: 705,
        sntc: 'O, sonradan buna görə peşman oldu',
        tr: 'He regretted it later',
        ch: 'He regretted apologized it later'
      },
      {
        id: 706,
        sntc: 'Mən bu sənədi saxladım',
        tr: 'I saved this document',
        ch: 'I saved this give text document'
      },
      {
        id: 707,
        sntc: 'Oğlan onun sözünü kəsdi',
        tr: 'The boy interrupted her',
        ch: 'The boy delay interrupted her'
      },
      {
        id: 708,
        sntc: 'Mənə bunu bilmək lazım idi',
        tr: 'I needed to know it',
        ch: 'I needed wanted to know it'
      },
      {
        id: 709,
        sntc: 'Biz çox böyük problemlə üzləşdik',
        tr: 'We faced a very big problem',
        ch: 'We faced an small a very big problem'
      },
      {
        id: 710,
        sntc: 'O, doğru cavabı tapdı',
        tr: 'She guessed the right answer',
        ch: 'She guessed wrong the right answer'
      }
    ],
    [{
        id: 711,
        sntc: 'Mən biliklərimi səninlə bölüşdüm',
        tr: 'I shared my knowledge with you',
        ch: 'I shared my thinks knowledge with you'
      },
      {
        id: 712,
        sntc: 'O, bu vəziyyəti təsvir etdi',
        tr: 'She described this situation',
        ch: 'She described appearance this situation'
      },
      {
        id: 713,
        sntc: 'O, həmin şansı əldən verdi',
        tr: 'She missed that chance',
        ch: 'She missed buss that chance'
      },
      {
        id: 714,
        sntc: 'O, bu qərarı dəstəklədi',
        tr: 'He supported this decision',
        ch: 'He supported agreed this decision'
      },
      {
        id: 715,
        sntc: 'Mən bu faylı saxladım',
        tr: 'I saved this file',
        ch: 'I saved this photo file'
      },
      {
        id: 716,
        sntc: 'Mən pəncərəni bağladım',
        tr: 'I closed the window',
        ch: 'I closed door the window'
      },
      {
        id: 717,
        sntc: 'Onun həyat yoldaşı onun üçün darıxdı',
        tr: 'His wife missed him',
        ch: 'His wife lacked missed him'
      },
      {
        id: 718,
        sntc: 'Sən buna düzgün cavab verdin',
        tr: 'You answered it correctly',
        ch: 'You answered asked it correctly'
      },
      {
        id: 719,
        sntc: 'O, son imtahanından keçə bilmədi',
        tr: 'He failed his last exam',
        ch: 'He failed first his last exam'
      },
      {
        id: 720,
        sntc: 'Mən bu suallara cavab verdim',
        tr: 'I answered these questions',
        ch: 'I answered asked these questions'
      }
    ],
    [{
        id: 721,
        sntc: 'O, onun həyatını xilas etdi',
        tr: 'He saved her life',
        ch: 'He saved her keep life'
      },
      {
        id: 722,
        sntc: 'Müəllim bizim səhvlərimizə işarə etdi',
        tr: 'The teacher pointed at our mistakes',
        ch: 'The teacher mistake pointed at our mistakes'
      },
      {
        id: 723,
        sntc: 'Mən bu iki metodu müqayisə etdim',
        tr: 'I compared these two methods',
        ch: 'I compared mistakes these two methods'
      },
      {
        id: 724,
        sntc: 'O, həmişə bizə dəstək olub',
        tr: 'He always supported us',
        ch: 'He always sometimes supported us'
      },
      {
        id: 725,
        sntc: 'O, xaricdə təhsil alıb',
        tr: 'He studied abroad',
        ch: 'He studied country house abroad'
      },
      {
        id: 726,
        sntc: 'Bu ev ona məxsus idi',
        tr: 'This house belonged to her',
        ch: 'This lend house belonged to her'
      },
      {
        id: 727,
        sntc: 'O, pulu israf etdi',
        tr: 'He wasted money',
        ch: 'He wasted spent a lot money'
      },
      {
        id: 728,
        sntc: 'Mən söz verdim ki, bunu etməyəcəm',
        tr: 'I promised not to do it',
        ch: 'I promised told not to do it'
      },
      {
        id: 729,
        sntc: 'Bu, planlarımızı məhv etdi',
        tr: 'It destroyed our plans',
        ch: 'It destroyed plane spoilt our plans'
      },
      {
        id: 730,
        sntc: 'O, bəzən ağlayırdı',
        tr: 'She sometimes cried',
        ch: 'She sometimes often again cried'
      }
    ],
    [{
        id: 731,
        sntc: 'Biz çox intensiv şekildə məşq etdik',
        tr: 'We trained very intensively',
        ch: 'We trained fast very intensively'
      },
      {
        id: 732,
        sntc: 'Mən rəymi bildirdim',
        tr: 'I expressed my opinion',
        ch: 'I expressed my decision opinion'
      },
      {
        id: 733,
        sntc: 'O, birdən-birə ağladı',
        tr: 'She cried suddenly',
        ch: 'She cried immediately suddenly'
      },
      {
        id: 734,
        sntc: 'O, bizi həmin əyləncəyə dəvət etdi',
        tr: 'She invited us to that party',
        ch: 'She invited asked us to that party'
      },
      {
        id: 735,
        sntc: 'Şirkət bunu dünən çatdırdı',
        tr: 'The company delivered it yesterday',
        ch: 'The company parcel delivered it yesterday'
      },
      {
        id: 736,
        sntc: 'O, onlara bunu etmeyə əmr etdi',
        tr: 'He ordered them to do it',
        ch: 'He ordered asked them to do it'
      },
      {
        id: 737,
        sntc: 'Bu mənzil ona məxsus idi',
        tr: 'This flat belonged to her',
        ch: 'This flat mine own belonged to her'
      },
      {
        id: 738,
        sntc: 'Bu, bizdən asılı idi',
        tr: 'It depended on us',
        ch: 'It depended belonged on us'
      },
      {
        id: 739,
        sntc: 'O, bütün ittihamları rədd etdi',
        tr: 'He denied all the accusations',
        ch: 'He denied want ordered all the accusations'
      },
      {
        id: 740,
        sntc: 'O, çox yüksəyə tullandı',
        tr: 'He jumped very high',
        ch: 'He jumped small delivered very high'
      }
    ],
    [{
        id: 741,
        sntc: 'Mən başqa ölkələrdən olan insanlarla ünsiyyət qurdum',
        tr: 'I communicated with people from other countries',
        ch: 'I communicated tell with people from other countries'
      },
      {
        id: 742,
        sntc: 'O, bunu İngilis dilinə tərcümə edib',
        tr: 'He translated it into English',
        ch: 'He translated it compared analyzed into English'
      },
      {
        id: 743,
        sntc: 'Biz bunu çox vacib hesab etməyə meylli idik',
        tr: 'We tended to consider it very important',
        ch: 'We tended to consider it very important'
      },
      {
        id: 744,
        sntc: 'Bu xəbər hər kəsi şoka saldı',
        tr: 'The news shocked everyone',
        ch: 'The news shocked get up feel everyone'
      },
      {
        id: 745,
        sntc: 'O, çox maraqlı bir video yazdı',
        tr: 'He recorded a very interesting video',
        ch: 'He recorded a very exercise enough interesting video'
      },
      {
        id: 746,
        sntc: 'O, bizim söhbətimizi kesdi',
        tr: 'He interrupted our conversation',
        ch: 'He interrupted our inspire pleasure conversation'
      },
      {
        id: 747,
        sntc: 'Mən danışığımı yaxşılaşdırmağa bacardım',
        tr: 'I managed to improve my speaking',
        ch: 'I managed to improve my grammar visit speaking'
      },
      {
        id: 748,
        sntc: 'Mən ad günümü qeyd etdim',
        tr: 'I celebrated my birthday',
        ch: 'I celebrated my prefer disagree birthday'
      },
      {
        id: 749,
        sntc: 'Biz tələsdik',
        tr: 'We hurried up',
        ch: 'We hurried interest share up'
      },
      {
        id: 750,
        sntc: 'Mən bu mövzuda cəmləşmişdim',
        tr: 'I concentrated on this topic',
        ch: 'I concentrated on this spend together topic'
      }
    ],
    [{
        id: 751,
        sntc: 'Bu, bizi çox təəccübləndirdi',
        tr: 'It surprised us greatly',
        ch: 'It surprised us rich good greatly'
      },
      {
        id: 752,
        sntc: 'O, onların sözünü kəsdi',
        tr: 'He interrupted them',
        ch: 'He interrupted correct also them'
      },
      {
        id: 753,
        sntc: 'Biz bu problemlərdə cəmləşdik',
        tr: 'We concentrated on these problems',
        ch: 'We concentrated on these boring worry problems'
      },
      {
        id: 754,
        sntc: 'Onun qardaşı sonradan buna görə peşman oldu',
        tr: 'Her brother regretted it later',
        ch: 'Her brother regretted it attract tell later'
      },
      {
        id: 755,
        sntc: 'O, bu nəticəyə layiq idi',
        tr: 'She deserved this result',
        ch: 'She deserved this enough add result'
      },
      {
        id: 756,
        sntc: 'Mən görüşümüzün tarixini təsdiq etdim',
        tr: 'I confirmed the date of our meeting',
        ch: 'I confirmed the date of our promise regularly meeting'
      },
      {
        id: 757,
        sntc: 'Bu, bizi çox təəccübləndirdi',
        tr: 'It surprised us a lot',
        ch: 'It surprised prefer disagree us a lot'
      },
      {
        id: 758,
        sntc: 'Biz aşağıdakı problemlərdə cəmləşdik',
        tr: 'We concentrated on the following problems',
        ch: 'We concentrated spend together on the following problems'
      },
      {
        id: 759,
        sntc: 'Mən tələsdim',
        tr: 'I hurried up',
        ch: 'I hurried difficult sure up'
      },
      {
        id: 760,
        sntc: 'O, görüşümüzün vaxtını təsdiqlədi',
        tr: 'He confirmed the time of our meeting',
        ch: 'He confirmed worse ready the time of our meeting'
      }
    ],
    [{
        id: 761,
        sntc: 'Mən bu yerin yaxınlığında park etmişdim',
        tr: 'I parked near this place',
        ch: 'I parked cinema come near this place'
      },
      {
        id: 762,
        sntc: 'O, çox vaxt bu sözləri səhv salırdı',
        tr: 'He often confused these words',
        ch: 'He often confused these worse ready words'
      },
      {
        id: 763,
        sntc: 'O, adətən səhər və axşam dua edirdi',
        tr: 'He usually prayed in the morning and in the evening',
        ch: 'He usually prayed windy busy in the morning and in the evening'
      },
      {
        id: 764,
        sntc: 'O, bütün pulunu sərmayə qoydu',
        tr: 'He invested all his money',
        ch: 'He invested all his agree profit money'
      },
      {
        id: 765,
        sntc: 'Onlar bu qitəni kəşf etdilər',
        tr: 'They discovered this continent',
        ch: 'They discovered this get look continent'
      },
      {
        id: 766,
        sntc: 'Bu mənzil ona məxsus idi',
        tr: 'This flat belonged to him',
        ch: 'This flat belonged house together to him'
      },
      {
        id: 767,
        sntc: 'Mən bu bağlamanı qablaşdırdım',
        tr: 'I packed this parcel',
        ch: 'I packed this food tasty parcel'
      },
      {
        id: 768,
        sntc: 'O, bu biznesin sahibi idi',
        tr: 'He owned this business',
        ch: 'He owned this kitchen boring business'
      },
      {
        id: 769,
        sntc: 'Bu biznes ona məxsus idi',
        tr: 'This business belonged to him',
        ch: 'This business belonged obvious son to him'
      },
      {
        id: 770,
        sntc: 'Onlar bu problem barədə bizə məlumat verdilər',
        tr: 'They informed us of this problem',
        ch: 'They informed waste summer us of this problem'
      }
    ],
    [{
        id: 771,
        sntc: 'O, tez-tez nənəsini ziyarət edirdi',
        tr: 'She often visited her grandmother',
        ch: 'She often visited her perfectly realize grandmother'
      },
      {
        id: 772,
        sntc: 'Mən o iki sənədi imzaladım',
        tr: 'I signed those two documents',
        ch: 'I signed those two desk longest documents'
      },
      {
        id: 773,
        sntc: 'Mən qapını açdım',
        tr: 'I opened the door',
        ch: 'I opened the enjoy behave door'
      },
      {
        id: 774,
        sntc: 'Mən bu imtahanlara hazırlaşdım',
        tr: 'I prepared for these exams',
        ch: 'I prepared for these salary low exams'
      },
      {
        id: 775,
        sntc: 'Biz parka piyada getdik',
        tr: 'We walked to the park',
        ch: 'We walked to thechoice student park'
      },
      {
        id: 776,
        sntc: 'O, iş yoldaşına etibar edirdi',
        tr: 'He trusted his business partner',
        ch: 'He trusted his business book advertisement partner'
      },
      {
        id: 777,
        sntc: 'Onlar birdən-birə yoxa çıxdılar',
        tr: 'They disappeared suddenly',
        ch: 'They disappeared truth unclear suddenly'
      },
      {
        id: 778,
        sntc: 'O, müqəddəslərə dua etdi',
        tr: 'He prayed to saints',
        ch: 'He prayed to promise trip saints'
      },
      {
        id: 779,
        sntc: 'O, qapını bağladı',
        tr: 'He closed the door',
        ch: 'He closed the admire example door'
      },
      {
        id: 780,
        sntc: 'Onlar şərab istehsal etdilər',
        tr: 'They produced wine',
        ch: 'They produced library explanation wine'
      }
    ],
    [{
        id: 781,
        sntc: 'Biz bu problemlərdə cəmləşdik',
        tr: 'We concentrated on these problems',
        ch: 'We concentrated on fluently tall these problems'
      },
      {
        id: 782,
        sntc: 'O, görüşümüzün vaxtını təsdiqlədi',
        tr: 'He confirmed the time of our meeting',
        ch: 'He confirmed the time of our aim measure meeting'
      },
      {
        id: 783,
        sntc: 'O, mənim kreslomu təmir etdi',
        tr: 'He repaired my chair',
        ch: 'He repaired my borrow forget chair'
      },
      {
        id: 784,
        sntc: 'O, bizim qrupumuzu üç hissəyə böldü',
        tr: 'She divided our group into three parts',
        ch: 'She divided our group into lead part three parts'
      },
      {
        id: 785,
        sntc: 'O, birdən-birə peyda oldu',
        tr: 'He appeared suddenly',
        ch: 'He appeared absent today suddenly'
      },
      {
        id: 786,
        sntc: 'Mən bu şərhi səhvən sildim',
        tr: 'I deleted this comment by mistake',
        ch: 'I deleted this only answer comment by mistake'
      },
      {
        id: 787,
        sntc: 'Mən xaricdə təhsil almışam',
        tr: 'I studied abroad',
        ch: 'I studied there time very abroad'
      },
      {
        id: 788,
        sntc: 'O, mənim sözümü kəsdi',
        tr: 'He interrupted me',
        ch: 'He interrupted closed event me'
      },
      {
        id: 789,
        sntc: 'Mən onunla razılaşmadım',
        tr: 'I disagreed with him',
        ch: 'I disagreed with answer recommendation him'
      },
      {
        id: 790,
        sntc: 'Onlar birlikdə rəqs etdilər',
        tr: 'They danced together',
        ch: 'They danced worker resolve together'
      }
    ],
    [{
        id: 791,
        sntc: 'Bu, mənim fikrimi dəyişdi',
        tr: 'It changed my opinion',
        ch: 'It changed my available potential opinion'
      },
      {
        id: 792,
        sntc: 'Mən işə piyada getdim',
        tr: 'I walked to work',
        ch: 'I walked to discover snow work'
      },
      {
        id: 793,
        sntc: 'O, yeni bir nəzəriyyə yaratdı',
        tr: 'He created a new theory',
        ch: 'He created a new describe fail theory'
      },
      {
        id: 794,
        sntc: 'Onlar əla şərait təmin etmişdilər',
        tr: 'They provided excellent conditions',
        ch: 'They provided excellent participate concentrate conditions'
      },
      {
        id: 795,
        sntc: 'O, çox yüksəyə tullandı',
        tr: 'He jumped very high',
        ch: 'He jumped very away slowly high'
      },
      {
        id: 796,
        sntc: 'O, bu pulu qazanıb',
        tr: 'He earned this money',
        ch: 'He earned this delivery wallet money'
      },
      {
        id: 797,
        sntc: 'O, elə çox video yazıb',
        tr: 'He recorded so many videos',
        ch: 'He recorded so many bravely supplier videos'
      },
      {
        id: 798,
        sntc: 'Polis bu cinayətkarı həbs etdi',
        tr: 'The police arrested this criminal',
        ch: 'The police arrested this contest seven criminal'
      },
      {
        id: 799,
        sntc: 'Onlar onu bu cinayətdə ittiham etdilər',
        tr: 'They accused him of this crime',
        ch: 'They accused him of this terrible coat crime'
      },
      {
        id: 800,
        sntc: 'Onlar bəzən birlikdə rəqs edirdilər',
        tr: 'They sometimes danced together',
        ch: 'They sometimes danced rude bell together'
      }
    ],
    [{
        id: 801,
        sntc: 'Biz birlikdə yaxşı vaxt keçirdik',
        tr: 'We had a good time together',
        ch: 'We had a good time expect divorced together'
      },
      {
        id: 802,
        sntc: 'Bu, böyük uğur idi',
        tr: 'It was a huge success',
        ch: 'It was a huge regularly exercise success'
      },
      {
        id: 803,
        sntc: 'Mən səhv etdim',
        tr: 'I made a mistake',
        ch: 'I made a attempt satisfactory mistake'
      },
      {
        id: 804,
        sntc: 'Biz birlikdə çox gözəl vaxt keçirdik',
        tr: 'We had a great time together',
        ch: 'We had a great time inside careful together'
      },
      {
        id: 805,
        sntc: 'Mən ev tapşırıqlarımı yerinə yetirdim',
        tr: 'I did my homework',
        ch: 'I did my same team homework'
      },
      {
        id: 806,
        sntc: 'Mən onu bilirdim',
        tr: 'I knew it',
        ch: 'I knew track favorite it'
      },
      {
        id: 807,
        sntc: 'Mən İngilis dilini saatlarla öyrənə bilərdim',
        tr: 'I could learn English for hours',
        ch: 'I could learn English for holiday ahead hours'
      },
      {
        id: 808,
        sntc: 'O, məktəbə getdi',
        tr: 'He went to school',
        ch: 'He went to way hard school'
      },
      {
        id: 809,
        sntc: 'O, səhvə yol verdi',
        tr: 'He made mistake',
        ch: 'He made thoughtful person mistake'
      },
      {
        id: 810,
        sntc: 'O, sadə sözlərdən istifadə edərək çox çətin şeyləri izah edə bilirdi',
        tr: 'He could explain very difficult things using simple words',
        ch: 'He could explain very careful alternative difficult things using simple words'
      }
    ],
    [{
        id: 811,
        sntc: 'Mən yalnız İngilis dilində danışırdım',
        tr: 'I spoke only English',
        ch: 'I spoke only small windy English'
      },
      {
        id: 812,
        sntc: 'Onlar italyanca danışırdılar',
        tr: 'They spoke Italian',
        ch: 'They spoke certain available Italian'
      },
      {
        id: 813,
        sntc: 'Biz onların təklifini qəbul etdik',
        tr: 'We took their offer',
        ch: 'We took their disappointed airport offer'
      },
      {
        id: 814,
        sntc: 'O, əyləncəyə gəldi',
        tr: 'She came to the party',
        ch: 'She came to the acquaintance swim party'
      },
      {
        id: 815,
        sntc: 'Mən öz irəliləyişimi gördüm',
        tr: 'I saw my progress',
        ch: 'I saw my holiday ahead progress'
      },
      {
        id: 816,
        sntc: 'O, öz səhvlərini gördü',
        tr: 'She saw her mistakes',
        ch: 'She saw her boast achievement mistakes'
      },
      {
        id: 817,
        sntc: 'Mən də elə fikirləşirdim',
        tr: 'I thought so, too',
        ch: 'I thought agree clearly so, too'
      },
      {
        id: 818,
        sntc: 'Biz də eyni fikirdə idik',
        tr: 'We thought the same',
        ch: 'We thought the average correct same'
      },
      {
        id: 819,
        sntc: 'O, özünü çox məyus hiss etdi',
        tr: 'He felt very disappointed',
        ch: 'He felt very thick certain disappointed'
      },
      {
        id: 820,
        sntc: 'O, özünü pərışan hiss etdi',
        tr: 'She felt upset',
        ch: 'She felt hospitable ill upset'
      }
    ],
    [{
        id: 821,
        sntc: 'Mən aydınlaşdırdım ki, bu səhv idi',
        tr: 'I found out that it was a mistake',
        ch: 'I found out that it was lucky loyal a mistake'
      },
      {
        id: 822,
        sntc: 'Onun mənə kömək etməyə niyyəti var idi',
        tr: 'He meant to help me',
        ch: 'He meant to help really interesting me'
      },
      {
        id: 823,
        sntc: 'Dərs on beş dəqiqə əvvəl başladı',
        tr: 'The lesson began fifteen minutes ago',
        ch: 'The lesson began fifteen service second minutes ago'
      },
      {
        id: 824,
        sntc: 'Görüş çox gec başladı',
        tr: 'The meeting began much later',
        ch: 'The meeting began much thief stone later'
      },
      {
        id: 825,
        sntc: 'Bunun qiyməti çox az idi',
        tr: 'It cost too little',
        ch: 'It cost too sun tear little'
      },
      {
        id: 826,
        sntc: 'Kompüterin qiyməti səkkiz yüz dollar idi',
        tr: 'The computer cost eight hundred dollars',
        ch: 'The computer cost lake document eight hundred dollars'
      },
      {
        id: 827,
        sntc: 'Qız əla nəticələr göstərdi',
        tr: 'The girl showed excellent results',
        ch: 'The girl showed manage influence excellent results'
      },
      {
        id: 828,
        sntc: 'Mənim atam evdə qalmağıma icazə verdi',
        tr: 'My father let me stay at home',
        ch: 'My father let me stay at terrible confident home'
      },
      {
        id: 829,
        sntc: 'Oğlan möhtəşəm nəticə göstərdi',
        tr: 'The boy showed an outstanding result',
        ch: 'The boy showed an account river outstanding result'
      },
      {
        id: 830,
        sntc: 'Biz İngiltərəni tərk etdik',
        tr: 'We left England',
        ch: 'We left positive effect England'
      }
    ],
    [{
        id: 831,
        sntc: 'O, içkini tərgitdi',
        tr: 'He gave up drinking',
        ch: 'He gave up smoking disappointed drinking'
      },
      {
        id: 832,
        sntc: 'Konfrans iki saatdan sonra başladı',
        tr: 'The conference began two hours later',
        ch: 'The conference began two hours suddenly hole later'
      },
      {
        id: 833,
        sntc: 'Mən bunu qəzetdə oxudum',
        tr: 'I read it in the newspaper',
        ch: 'I read it in the badly piece newspaper'
      },
      {
        id: 834,
        sntc: 'O, ona iki yüz dollar verdi',
        tr: 'He gave her two hundred dollars',
        ch: 'He gave her two hundred several sea dollars'
      },
      {
        id: 835,
        sntc: 'Mən kresloda oturdum',
        tr: 'I sat in an armchair',
        ch: 'I sat in an intend fit armchair'
      },
      {
        id: 836,
        sntc: 'Mən oturdum və sonra ayağa qalxdım',
        tr: 'I sat down and then I stood up',
        ch: 'I sat down and then I suit disturb stood up'
      },
      {
        id: 837,
        sntc: 'Onun sözləri aşağıdakıları nəzərdə tuturdu',
        tr: 'His words meant the following',
        ch: 'His words meant the positive effect following'
      },
      {
        id: 838,
        sntc: 'O, açarlarını itirdi',
        tr: 'He lost his keys',
        ch: 'He lost his correct knowledge keys'
      },
      {
        id: 839,
        sntc: 'Mən çatdırılma üçün pul ödədim',
        tr: 'I paid for the delivery',
        ch: 'I paid for the kind behind delivery'
      },
      {
        id: 840,
        sntc: 'Bu çox baha başa gəldi',
        tr: 'It cost too much',
        ch: 'It cost too trip were much'
      }
    ],
    [{
        id: 841,
        sntc: 'Onlar tətil evlərini əlli min dollara satdılar',
        tr: 'They sold their country house for fifty thousand dollars',
        ch: 'They sold their country house last far for fifty thousand dollars'
      },
      {
        id: 842,
        sntc: 'Mən çox gülməli bir hekayə oxudum',
        tr: 'I read such a funny story',
        ch: 'I read such a funny idea unpredictable story'
      },
      {
        id: 843,
        sntc: 'Onlar adətən birlikdə vaxt keçirirdilər',
        tr: 'They usually spent time together',
        ch: 'They usually spent time disappointed airport together'
      },
      {
        id: 844,
        sntc: 'Biz Amerikanı tərk etdik',
        tr: 'We left America',
        ch: 'We left went come America'
      },
      {
        id: 845,
        sntc: 'O, öz bağında meyvə-tərəvəz yetişdirdi',
        tr: 'She grew fruit and vegetables in her own garden',
        ch: 'She grew fruit and also possible vegetables in her own garden'
      },
      {
        id: 846,
        sntc: 'Mən nəhayət qalib gəldim',
        tr: 'I won at last',
        ch: 'I won at ready careful last'
      },
      {
        id: 847,
        sntc: 'Mən oturdum',
        tr: 'I sat down',
        ch: 'I sat apologize hear down'
      },
      {
        id: 848,
        sntc: 'Mən bunu üç yüz dollara almışam',
        tr: 'I bought it for three hundred dollars',
        ch: 'I bought it for three hundred prepare favor dollars'
      },
      {
        id: 849,
        sntc: 'Mən bu xidmət üçün pul ödədim',
        tr: 'I paid for this service',
        ch: 'I paid for this famous unusual service'
      },
      {
        id: 850,
        sntc: 'O, bu paltarı çox böyük endirimlə aldı',
        tr: 'She bought these clothes with a very big discount',
        ch: 'She bought these clothes with a fit half very big discount'
      }
    ],
    [{
        id: 851,
        sntc: 'Mən onun çantasını tutdum',
        tr: 'I held her bag',
        ch: 'I held her coat hook bag'
      },
      {
        id: 852,
        sntc: 'Mən elə çox yeni sözlər öyrəndim',
        tr: 'I learnt so many new words',
        ch: 'I learnt so many new let classmate words'
      },
      {
        id: 853,
        sntc: 'Polis oğrunu tutdu',
        tr: 'The police caught the thief',
        ch: 'The police caught the paper rude thief'
      },
      {
        id: 854,
        sntc: 'Mən səni mükəmməl başa düşdüm',
        tr: 'I perfectly understood you',
        ch: 'I perfectly understood confidence afraid you'
      },
      {
        id: 855,
        sntc: 'O, şah əsər çəkdi',
        tr: 'He drew a masterpiece',
        ch: 'He drew a detail shy masterpiece'
      },
      {
        id: 856,
        sntc: 'Bu əsgər böyük cəsarətlə vuruşdu',
        tr: 'This soldier fought very courageously',
        ch: 'This soldier fought fit half very courageously'
      },
      {
        id: 857,
        sntc: 'Mən müştərilərlə məşğul oldum',
        tr: 'I dealt with clients',
        ch: 'I dealt with classmate bitterly clients'
      },
      {
        id: 858,
        sntc: 'O, topu mənə atdı',
        tr: 'He threw a ball to me',
        ch: 'He threw a ball make attract to me'
      },
      {
        id: 859,
        sntc: 'O, mənə məktub göndərdi',
        tr: 'She sent me a letter',
        ch: 'She sent me a available price letter'
      },
      {
        id: 860,
        sntc: 'O, öz mənzilini satdı',
        tr: 'She sold her flat',
        ch: 'She sold her conclusion logical flat'
      }
    ],
    [{
        id: 861,
        sntc: 'O, ən sevimli mahnısını oxudu',
        tr: 'He sang his favorite song',
        ch: 'He sang his favorite conference partner song'
      },
      {
        id: 862,
        sntc: 'Mən topu tutdum',
        tr: 'I caught the ball',
        ch: 'I caught the hospitable ill ball'
      },
      {
        id: 863,
        sntc: 'O, çox xüsusi bir şey çəkdi',
        tr: 'She drew something very special',
        ch: 'She drew deserve make something very special'
      },
      {
        id: 864,
        sntc: 'O, iti vurdu',
        tr: 'He hit the dog',
        ch: 'He hit the attempt successful dog'
      },
      {
        id: 865,
        sntc: 'O, öz hüquqları uğrunda mübarizə apardı',
        tr: 'She fought for her rights',
        ch: 'She fought for her disappointed inside rights'
      },
      {
        id: 866,
        sntc: 'Mən bunu nahar yeməyində yedim',
        tr: 'I ate it for lunch',
        ch: 'I ate it for decision apologize lunch'
      },
      {
        id: 867,
        sntc: 'Mən müştərilərlə məşğul oldum',
        tr: 'I dealt with customers',
        ch: 'I dealt with make disagree customers'
      },
      {
        id: 868,
        sntc: 'Mən dəvə sürdüm',
        tr: 'I rode a camel',
        ch: 'I rode a long daughter camel'
      },
      {
        id: 869,
        sntc: 'Mən bu əşyanı tulladım',
        tr: 'I threw away this thing',
        ch: 'I threw away this any different thing'
      },
      {
        id: 870,
        sntc: 'O, itini yedizdirdi',
        tr: 'He fed his dog',
        ch: 'He fed his always become dog'
      }
    ],
    [{
        id: 871,
        sntc: 'Mən bütün bu çətinliklərin öhdəsindən gəldim',
        tr: 'I overcame all these difficulties',
        ch: 'I overcame all these difficult sure difficulties'
      },
      {
        id: 872,
        sntc: 'O, çox pul xərclədi',
        tr: 'She spent too much',
        ch: 'She spent too jeans exercise much'
      },
      {
        id: 873,
        sntc: 'Mən çayda üzdüm',
        tr: 'I swam in the river',
        ch: 'I swam in the pocket busy river'
      },
      {
        id: 874,
        sntc: 'O, vədinə əməl etdi',
        tr: 'He kept his promise',
        ch: 'He kept his really correct promise'
      },
      {
        id: 875,
        sntc: 'O, ona bir neçə min dollar borc verdi',
        tr: 'He lent her several thousand dollars',
        ch: 'He lent her several well teach thousand dollars'
      },
      {
        id: 876,
        sntc: 'O, əti kəsdi',
        tr: 'She cut the meat',
        ch: 'She cut the sunny from meat'
      },
      {
        id: 877,
        sntc: 'O, ayağını yaralamışdı',
        tr: 'He hurt his leg',
        ch: 'He hurt his nowadays perfectly leg'
      },
      {
        id: 878,
        sntc: 'Mən adətən təxminən səkkiz saat yatırdım',
        tr: 'I usually slept for about eight hours',
        ch: 'I usually slept for about evening prepare eight hours'
      },
      {
        id: 879,
        sntc: 'O, musiqi karyerası haqqında xəyal qurdu',
        tr: 'She dreamt about a career in music',
        ch: 'She dreamt about room worse a career in music'
      },
      {
        id: 880,
        sntc: 'Onlar onu çox bərk vurdular',
        tr: 'They hit him very badly',
        ch: 'They hit him very sure summer badly'
      }
    ],
    [{
        id: 881,
        sntc: 'Mən maşınla məktəbə getdim',
        tr: 'I drove to school',
        ch: 'I drove to borrow forget school'
      },
      {
        id: 882,
        sntc: 'O, ona daş atdı',
        tr: 'He threw a stone at her',
        ch: 'He threw a stone at simplicity hope her'
      },
      {
        id: 883,
        sntc: 'Onlar binanı yandırdılar',
        tr: 'They burnt the building',
        ch: 'They burnt the cheap laugh building'
      },
      {
        id: 884,
        sntc: 'O, çox dəbli paltarlar geyinirdi',
        tr: 'She wore very stylish clothes',
        ch: 'She wore very stylish joke choice clothes'
      },
      {
        id: 885,
        sntc: 'Qayıq batdı',
        tr: 'The boat sank',
        ch: 'The boat analyze subject sank'
      },
      {
        id: 886,
        sntc: 'Mən okeanda üzdüm',
        tr: 'I swam in the ocean',
        ch: 'I swam in the despite crisis ocean'
      },
      {
        id: 887,
        sntc: 'Qiymət iyirmiyə qalxdı',
        tr: 'The price rose by twenty',
        ch: 'The price rose by much high twenty'
      },
      {
        id: 888,
        sntc: 'O, onun hisslərini incitdi',
        tr: 'He hurt her feelings',
        ch: 'He hurt her suggest tend feelings'
      },
      {
        id: 889,
        sntc: 'Mən ona zəng vurdum',
        tr: 'I rang him',
        ch: 'I rang conversation cross him'
      },
      {
        id: 890,
        sntc: 'O, daş-qaşları oğurladı',
        tr: 'He stole jewelry',
        ch: 'He stole disappear pray jewelry'
      }
    ],
    [{
        id: 891,
        sntc: 'Mən qorxuram, sən məni səhv başa düşdün',
        tr: 'I’m afraid you understood me wrongly',
        ch: 'I’m afraid you understood me discover snow wrongly'
      },
      {
        id: 892,
        sntc: 'Onlar onu çox pis vurdular',
        tr: 'They hit him very hard',
        ch: 'They hit him very destroy village hard'
      },
      {
        id: 893,
        sntc: 'Onun müdürü işcilərə çox vaxt az maaş verirdi',
        tr: 'Her boss often underpaid the employees',
        ch: 'Her boss often underpaid the participate concentrate employees'
      },
      {
        id: 894,
        sntc: 'O, bir tikə piroq yedi',
        tr: 'He ate a piece of pie',
        ch: 'He ate a piece of minute ago pie'
      },
      {
        id: 895,
        sntc: 'O, çox vaxt səbəb olmadan həddindən artıq pul ödəyirdi',
        tr: 'He often overpaid for no reason',
        ch: 'He often overpaid for delivery wallet no reason'
      },
      {
        id: 896,
        sntc: 'Mən velosiped sürməyə getdim',
        tr: 'I went cycling',
        ch: 'I went chair bag cycling'
      },
      {
        id: 897,
        sntc: 'O, həmin sənədi cırdı',
        tr: 'She tore that document',
        ch: 'She tore that competition spacious document'
      },
      {
        id: 898,
        sntc: 'Mən onun gözlərində göz yaşı gördüm',
        tr: 'I saw tears on her eyes',
        ch: 'I saw tears on her story fruit eyes'
      },
      {
        id: 899,
        sntc: 'Mən bu tapşırıqı yenidən etdim',
        tr: 'I redid this exercise',
        ch: 'I redid this differently glass exercise'
      },
      {
        id: 900,
        sntc: 'O, hər şeyi korladı',
        tr: 'He spoilt everything',
        ch: 'He spoilt appearance defend everything'
      }
    ],
    [{
        id: 901,
        sntc: 'Mən İngilis dilini həqiqətən də zövq alaraq öyrənə bilirdim',
        tr: 'I could learn English really enjoying it',
        ch: 'I could learn English really everything tremendous enjoying it'
      },
      {
        id: 902,
        sntc: 'Biz birlikdə çox gözəl vaxt keçirdik',
        tr: 'We had a great time together',
        ch: 'We had a great invest remain time together'
      },
      {
        id: 903,
        sntc: 'O, bunu çox sakitcə dedi',
        tr: 'He said it very quietly',
        ch: 'He said it very file divide quietly'
      },
      {
        id: 904,
        sntc: 'O, mənə hər şeyi danışdı',
        tr: 'He told me everything',
        ch: 'He told me relax saint everything'
      },
      {
        id: 905,
        sntc: 'O, ayda iki min dollar alırdı',
        tr: 'He got two thousand dollars monthly',
        ch: 'He got two thousand enjoy behave dollars monthly'
      },
      {
        id: 906,
        sntc: 'Sən tez-tez bu yeri ziyarət edirsən?',
        tr: 'Do you often visit this place?',
        ch: 'Do you often visit this separately convenient place'
      },
      {
        id: 907,
        sntc: 'O, çox məyus oldu',
        tr: 'He was bitterly disappointed',
        ch: 'He was bitterly communicate analyze disappointed'
      },
      {
        id: 908,
        sntc: 'Mən ondan sırağagün məktub aldım',
        tr: 'I got a letter from her the day before yesterday',
        ch: 'I got a letter from strange pocket her the day before yesterday'
      },
      {
        id: 909,
        sntc: 'Onlar onun yerinə sənə kömək edə bilərdilər',
        tr: 'They could help you instead of him',
        ch: 'They could help you instead of week stimulate him'
      },
      {
        id: 910,
        sntc: 'Bu çox baha başa gəldi',
        tr: 'It cost too much',
        ch: 'It cost too experience hope much'
      }
    ],
    [{
        id: 911,
        sntc: 'Mən bu kurs üçün pul ödədim',
        tr: 'I paid for this course',
        ch: 'I paid for this salary low course'
      },
      {
        id: 912,
        sntc: 'O, kitabı stolun üstünə qoydu',
        tr: 'He set the book on the table',
        ch: 'He set the book on the learn other table'
      },
      {
        id: 913,
        sntc: 'O, əti kəsdi',
        tr: 'She cut the meat',
        ch: 'She cut the devote confuse meat'
      },
      {
        id: 914,
        sntc: 'Onlar bu bildirişi mənə göndərdilər',
        tr: 'They sent me this notification',
        ch: 'They sent me this subject spend notification'
      },
      {
        id: 915,
        sntc: 'O, çox uğurlu iş adamı oldu',
        tr: 'He became a very successful businessman',
        ch: 'He became a very forget health successful businessman'
      },
      {
        id: 916,
        sntc: 'Bu çox aşağı səviyyədir',
        tr: "It's a very low level",
        ch: "It's a very low tall answer level"
      },
      {
        id: 917,
        sntc: 'Bu mahnı çox məşhur oldu',
        tr: 'This song became very popular',
        ch: 'This song became surprise greatly very popular'
      },
      {
        id: 918,
        sntc: 'Mən aydınlaşdırdım ki, bu səhv idi',
        tr: 'I found out that it was a mistake',
        ch: 'I found out that achieve aim it was a mistake'
      },
      {
        id: 919,
        sntc: 'Onlar alman dilində danışırdılar',
        tr: 'They spoke German',
        ch: 'They spoke shock borrow German'
      },
      {
        id: 920,
        sntc: 'O, sadə sözlərdən istifadə edərək çox çətin şeyləri izah edə bilirdi',
        tr: 'He could explain very difficult things using simple words',
        ch: 'He could explain very difficult things nine ten using simple words'
      }
    ],
    [{
        id: 921,
        sntc: 'O, bu müsibətləri qabaqcadan gördü',
        tr: 'He foresaw these troubles',
        ch: 'He foresaw these potential threat troubles'
      },
      {
        id: 922,
        sntc: 'Yemək çox pis iy verirdi',
        tr: 'The food smelt very bad',
        ch: 'The food smelt very owe offer bad'
      },
      {
        id: 923,
        sntc: 'O, quşu güllələdi',
        tr: 'He shot the bird',
        ch: 'He shot the regular basis bird'
      },
      {
        id: 924,
        sntc: 'Mən bu sahə üzrə mütəxəssisəm',
        tr: "I'm an expert in this area",
        ch: "I'm an expert in this long away area"
      },
      {
        id: 925,
        sntc: 'Mən maşınla işə getdim',
        tr: 'I drove to work',
        ch: 'I drove to stay before work'
      },
      {
        id: 926,
        sntc: 'Görüş on beş dəqiqədən sonra başladı',
        tr: 'The meeting began fifteen minutes later',
        ch: 'The meeting began fifteen minutes divide part later'
      },
      {
        id: 927,
        sntc: 'Mən bunu üçüncü dəfə eşitdim',
        tr: 'I heard it for the third time',
        ch: 'I heard it for the third skill cry time'
      },
      {
        id: 928,
        sntc: 'Mən evdən çıxdım',
        tr: 'I left home',
        ch: 'I left reason cycling home'
      },
      {
        id: 929,
        sntc: 'Konfrans iki saat sonra başlardı',
        tr: 'The conference began two hours later',
        ch: 'The conference began two hours breakfast glass later'
      },
      {
        id: 930,
        sntc: 'Mən çatdırılma üçün pul ödədim',
        tr: 'I paid for the delivery',
        ch: 'I paid for the parcel apple delivery'
      }
    ],
    [{
        id: 931,
        sntc: 'Mən günorta saat ikidə oyandım',
        tr: "I woke up at two o'clock in the afternoon",
        ch: "I woke up at two o'clock light wind in the afternoon"
      },
      {
        id: 932,
        sntc: 'Bu cüt ayaqqabı mənə yaraşır',
        tr: 'This pair of shoes fit me',
        ch: 'This pair of shoes fit let classmate me'
      },
      {
        id: 933,
        sntc: 'Mən velosiped sürdüm',
        tr: 'I rode a bike',
        ch: 'I rode a rude bell bike'
      },
      {
        id: 934,
        sntc: 'Mən Parisə uçdum',
        tr: 'I flew to Paris',
        ch: 'I flew to eight cycling Paris'
      },
      {
        id: 935,
        sntc: 'Mən kəmər taxdım',
        tr: 'I wore a belt',
        ch: 'I wore a expensive box belt'
      },
      {
        id: 936,
        sntc: 'Mən Almaniyanı sırağagün tərk etdim',
        tr: 'I left Germany the day before yesterday',
        ch: 'I left Germany the decision apologize day before yesterday'
      },
      {
        id: 937,
        sntc: 'Mən bunu televizorda eşitdim',
        tr: 'I heard it on TV',
        ch: 'I heard it on such intention TV'
      },
      {
        id: 938,
        sntc: 'O, çox maraqlı kitab yazdı',
        tr: 'He wrote such an interesting book',
        ch: 'He wrote such an meat part interesting book'
      },
      {
        id: 939,
        sntc: 'Mənə bu şərtlərə uyğunlaşmaq lazımdır',
        tr: 'I need to adapt to these conditions',
        ch: 'I need to adapt to deserve make these conditions'
      },
      {
        id: 940,
        sntc: 'O, çox sürətlə qaçdı',
        tr: 'She ran very fast',
        ch: 'She ran very cancel expect fast'
      }
    ],
    [{
        id: 941,
        sntc: 'Mən İngilis dilini saatlarla öyrənə bilirdim',
        tr: 'I could learn English for hours',
        ch: 'I could learn English for never half hours'
      },
      {
        id: 942,
        sntc: 'Onların xüsusi təklifi var idi',
        tr: 'They had a special offer',
        ch: 'They had a special piece cake offer'
      },
      {
        id: 943,
        sntc: 'Sənin atanın neçə yaşı var?',
        tr: 'How old is your father?',
        ch: 'How old is your hook bird father'
      },
      {
        id: 944,
        sntc: 'Bu aşağıdakıları nəzərdə tuturdu',
        tr: 'It meant the following',
        ch: 'It meant the complaint coat following'
      },
      {
        id: 945,
        sntc: 'Mən bunu ilk dəfə eşitdim',
        tr: 'I heard it for the first time',
        ch: 'I heard it for the first favorite special time'
      },
      {
        id: 946,
        sntc: 'Mən bu ifadəni yazdım',
        tr: 'I wrote down this expression',
        ch: 'I wrote down this pool sum expression'
      },
      {
        id: 947,
        sntc: 'Oğlan möhtəşəm nəticə göstərdi',
        tr: 'The boy showed an outstanding result',
        ch: 'The boy showed an outstanding movie risky result'
      },
      {
        id: 948,
        sntc: 'Dərs on beş dəqiqə əvvəl başladı',
        tr: 'The lesson began fifteen minutes ago',
        ch: 'The lesson began fifteen price careful minutes ago'
      },
      {
        id: 949,
        sntc: 'O, çox qəribə insandır',
        tr: "He's a very strange person",
        ch: "He's a very strange against talented person"
      },
      {
        id: 950,
        sntc: 'Biz eyni fikirdə idik',
        tr: 'We thought the same',
        ch: 'We thought the beach proud same'
      }
    ],
    [{
        id: 951,
        sntc: 'Biz bütün bu çətinliklərin öhdəsindən gəldik',
        tr: 'We overcame all these difficulties',
        ch: 'We overcame all these amazing useful difficulties'
      },
      {
        id: 952,
        sntc: 'Mən okeanda üzdüm',
        tr: 'I swam in the ocean',
        ch: 'I swam in the delivery contest ocean'
      },
      {
        id: 953,
        sntc: 'O, onu bağışladı',
        tr: 'She forgave him',
        ch: 'She forgave glass behind him'
      },
      {
        id: 954,
        sntc: 'O, daş-qaşları oğurladı',
        tr: 'He stole jewelry',
        ch: 'He stole enthusiasm grateful jewelry'
      },
      {
        id: 955,
        sntc: 'Mən həmişəkindən daha tez oyandım',
        tr: 'I woke up earlier than usual',
        ch: 'I woke up earlier than satisfactory cold usual'
      },
      {
        id: 956,
        sntc: 'Mən ona bu məbləğdə pul borc verdim',
        tr: 'I lent him this sum of money',
        ch: 'I lent him this sum of were pregnant money'
      },
      {
        id: 957,
        sntc: 'Mənə bu səhvi düzəltmək lazımdır',
        tr: 'I need to correct this mistake',
        ch: 'I need to correct this serious holiday mistake'
      },
      {
        id: 958,
        sntc: 'Polis oğrunu tutdu',
        tr: 'The police caught the thief',
        ch: 'The police caught the favorite hospitable thief'
      },
      {
        id: 959,
        sntc: 'O, ona daş atdı',
        tr: 'He threw a stone at her',
        ch: 'He threw a stone at friendly track her'
      },
      {
        id: 960,
        sntc: 'O, çox kasıb paltar geyinirdi',
        tr: 'He wore very poor clothes',
        ch: 'He wore very poor box wrong clothes'
      }
    ],
    [{
        id: 961,
        sntc: 'O, öz hüquqları uğrunda mübarizə apardı',
        tr: 'She fought for her rights',
        ch: 'She fought for her month last rights'
      },
      {
        id: 962,
        sntc: 'Biz balıq tutduq',
        tr: 'We caught fish',
        ch: 'We caught beer prepare fish'
      },
      {
        id: 963,
        sntc: 'Bu problemdir?',
        tr: 'Is it a problem?',
        ch: 'Is it a small reaction problem'
      },
      {
        id: 964,
        sntc: 'Bu sviter ona əla yaraşır',
        tr: 'This sweater fit him perfectly',
        ch: 'This sweater fit him box wrong perfectly'
      },
      {
        id: 965,
        sntc: 'Mən dəvə sürdüm',
        tr: 'I rode a camel',
        ch: 'I rode a confident trip camel'
      },
      {
        id: 966,
        sntc: 'O, çox dəbli geyimlər geyinirdi',
        tr: 'She wore very fashionable clothes',
        ch: 'She wore very fashionable careful alternative clothes'
      },
      {
        id: 967,
        sntc: 'O, şah əsər çəkdi',
        tr: 'He drew a masterpiece',
        ch: 'He drew a weak attempt masterpiece'
      },
      {
        id: 968,
        sntc: 'Mən kifayət qədər yatdım',
        tr: 'I slept enough',
        ch: 'I slept careful alternative enough'
      },
      {
        id: 969,
        sntc: 'Mən gərək bunu edim',
        tr: 'I should do it',
        ch: 'I should light wind do it'
      },
      {
        id: 970,
        sntc: 'Biz məktəb forması geyindik',
        tr: 'We wore a school uniform',
        ch: 'We wore a school letter furniture uniform'
      }
    ],
    [{
        id: 971,
        sntc: 'Bu tələbələr çox tənbəldirlər',
        tr: 'These students are very lazy',
        ch: 'These students are very effect get lazy'
      },
      {
        id: 972,
        sntc: 'Mən bütün o tapşırıqları yenidən etdim',
        tr: 'I redid all those exercises',
        ch: 'I redid all those attract attention exercises'
      },
      {
        id: 973,
        sntc: 'O, lampanı yandırdı',
        tr: 'He lit the lamp',
        ch: 'He lit lonely rainy the lamp'
      },
      {
        id: 974,
        sntc: 'Külək birdən-birə əsdi',
        tr: 'The wind blew suddenly',
        ch: 'The wind blew another fluently suddenly'
      },
      {
        id: 975,
        sntc: 'Mən ona əlli dollar borc verdim',
        tr: 'I lent her fifty dollars',
        ch: 'I lent her fifty rule say dollars'
      },
      {
        id: 976,
        sntc: 'O, nə cür filmlərə baxır?',
        tr: 'What kind of movies does she watch?',
        ch: 'What kind of movies does she refuse add watch'
      },
      {
        id: 977,
        sntc: 'O, çox vaxt həddindən artıq yeyirdi',
        tr: 'He often overate',
        ch: 'He often give train overate'
      },
      {
        id: 978,
        sntc: 'Mən bəzən artıq pul ödəyirdim',
        tr: 'I sometimes overpaid',
        ch: 'I sometimes holiday clever overpaid'
      },
      {
        id: 979,
        sntc: 'Onlar yerdə quyu qazdılar',
        tr: 'They dug a hole in the ground',
        ch: 'They dug a hole in the easy now ground'
      },
      {
        id: 980,
        sntc: 'Mən ona zəng etməyi unutdum',
        tr: 'I forgot to call her',
        ch: 'I forgot to call manner against her'
      }
    ],
    [{
        id: 981,
        sntc: 'O, boğuldu',
        tr: 'He drowned',
        ch: 'He devote confuse drowned'
      },
      {
        id: 982,
        sntc: 'O, mənim jaketimi qarmaqcıqdan asdı',
        tr: 'He hung my jacket on a hook',
        ch: 'He hung grateful create my jacket on a hook'
      },
      {
        id: 983,
        sntc: 'Günəş qalxdı',
        tr: 'The sun rose',
        ch: 'The sun marry repair rose'
      },
      {
        id: 984,
        sntc: 'Mən ona zəng vurdum',
        tr: 'I rang him',
        ch: 'I rang achieve aim him'
      },
      {
        id: 985,
        sntc: 'Nə vaxt sizin daha çox boş vaxtınız var?',
        tr: 'When do you have more free time?',
        ch: 'When do you have more food tasty free time'
      },
      {
        id: 986,
        sntc: 'Mən onun gözlərində göz yaşı gördüm',
        tr: 'I saw tears on her eyes',
        ch: 'I saw tears on her library explanation eyes'
      },
      {
        id: 987,
        sntc: 'O, həmin kağızları cırdı',
        tr: 'He tore those papers',
        ch: 'He tore those sale punish papers'
      },
      {
        id: 988,
        sntc: 'Biz bu çətinlikləri qabaqcadan gördük',
        tr: 'We foresaw these difficulties',
        ch: 'We foresaw these spend hospital difficulties'
      },
      {
        id: 989,
        sntc: 'Onun müdiri ona çox vaxt az maaş verirdi',
        tr: 'His boss often underpaid him',
        ch: 'His boss often underpaid confuse regret him'
      },
      {
        id: 990,
        sntc: 'O, siqareti yandırdı',
        tr: 'He lit the cigarette',
        ch: 'He lit the available again cigarette'
      }
    ],
    [{
        id: 991,
        sntc: 'Mən musiqiyə qulaq asaraq ev tapşırıqlarımı edə bilirdim',
        tr: 'I could do my homework listening to music',
        ch: 'I could do my homework mean material listening to music'
      },
      {
        id: 992,
        sntc: 'Mən bu tapşırıqı yenidən etdim',
        tr: 'I redid this exercise',
        ch: 'I redid this pocket attitude exercise'
      },
      {
        id: 993,
        sntc: 'O, kağızları cırdı',
        tr: 'He tore the papers',
        ch: 'He tore the dictionary double papers'
      },
      {
        id: 994,
        sntc: 'Sənin doğum günün nə vaxtdır?',
        tr: 'When is your birthday?',
        ch: 'When is your family necessarily birthday'
      },
      {
        id: 995,
        sntc: 'Qayıq batdı',
        tr: 'The boat sank',
        ch: 'The boat mention easily sank'
      },
      {
        id: 996,
        sntc: 'O, bütün pulları hesabından çıxardı',
        tr: 'She withdrew all the money from her account',
        ch: 'She withdrew all the money from her long away account'
      },
      {
        id: 997,
        sntc: 'O, böyük pul haqqında xəyal qurdu',
        tr: 'He dreamt about big money',
        ch: 'He dreamt about big proud solution money'
      },
      {
        id: 998,
        sntc: 'Mən çayda üzdüm',
        tr: 'I swam in the river',
        ch: 'I swam in the point view river'
      },
      {
        id: 999,
        sntc: 'O, maşınla işə getdi',
        tr: 'He drove to work',
        ch: 'He drove to authority control work'
      },
      {
        id: 1000,
        sntc: 'Mən bu sözü yazdım',
        tr: 'I wrote down this word',
        ch: 'I wrote down this insist forget word'
      }
    ],
    [{
        id: 1001,
        sntc: 'O, mənə bu tövsiyəni verdi',
        tr: 'He gave me this recommendation',
        ch: 'He gave me this cook something recommendation'
      },
      {
        id: 1002,
        sntc: 'Mən aydınlaşdırdım ki, o, haqlı idi',
        tr: 'I found out that he was right',
        ch: 'I found out that he was remain concentrate right'
      },
      {
        id: 1003,
        sntc: 'Mənim qeyri-adi bir hissim var',
        tr: 'I have an unusual feeling',
        ch: 'I have an unusual feeling'
      },
      {
        id: 1004,
        sntc: 'Biz şəhəri tərk etdik',
        tr: 'We left the city',
        ch: 'We left the destroy village city'
      },
      {
        id: 1005,
        sntc: 'Mühazirə iki saat əvvəl başlayıb',
        tr: 'The lecture began two hours ago',
        ch: 'The lecture began serious unexpected two hours ago'
      },
      {
        id: 1006,
        sntc: 'O, qaçıb getdi',
        tr: 'He ran away',
        ch: 'He ran wine wish away'
      },
      {
        id: 1007,
        sntc: 'O, öz bağında meyvə-tərəvəz yetişdirdi',
        tr: 'She grew fruit and vegetables in her own garden',
        ch: 'She grew fruit and vegetables in her own garden'
      },
      {
        id: 1008,
        sntc: 'O, yerə yıxıldı',
        tr: 'He fell on the ground',
        ch: 'He fell on relax saint the ground'
      },
      {
        id: 1009,
        sntc: 'O, sözünün üstündə durdu',
        tr: 'He kept his word',
        ch: 'He kept his sound opportunity word'
      },
      {
        id: 1010,
        sntc: 'Onlar bu barədə həmişə danışırlar?',
        tr: 'Do they always talk about it?',
        ch: 'Do they always talk about participate concentrate it'
      }
    ],
    [{
        id: 1011,
        sntc: 'O, çantasını itirdi',
        tr: 'She lost her bag',
        ch: 'She lost her suggest discuss bag'
      },
      {
        id: 1012,
        sntc: 'Mən yalnız İngilis dilində danışırdım',
        tr: 'I spoke only English',
        ch: 'I spoke only excellent conditions English'
      },
      {
        id: 1013,
        sntc: 'Biz bütün həqiqəti aydınlaşdırdıq',
        tr: 'We found out all the truth',
        ch: 'We found out all the accuse crime truth'
      },
      {
        id: 1014,
        sntc: 'O, qayıtdı',
        tr: 'He came back',
        ch: 'He came repair chair back'
      },
      {
        id: 1015,
        sntc: 'Sənin qardaşının adı nədir?',
        tr: "What's your brother's name?",
        ch: "What's your brother's ask couple name"
      },
      {
        id: 1016,
        sntc: 'Bunun qiyməti üç yüz dollardan çox idi',
        tr: 'It cost more than three hundred dollars',
        ch: 'It cost more than three many thousand hundred dollars'
      },
      {
        id: 1017,
        sntc: 'O, çox yavaş-yavaş qaçdı',
        tr: 'She ran very slowly',
        ch: 'She ran very discovery bitterly slowly'
      },
      {
        id: 1018,
        sntc: 'Kompüter səkkiz yüz dollara başa gəldi',
        tr: 'The computer cost eight hundred dollars',
        ch: 'The computer cost eight partly hate hundred dollars'
      },
      {
        id: 1019,
        sntc: 'Onun valideynləri ona bunu etməyə icazə verdilər',
        tr: 'Her parents let her do it',
        ch: 'Her parents let her do loudly again it'
      },
      {
        id: 1020,
        sntc: 'Mən ayağa qalxdım',
        tr: 'I stood up',
        ch: 'I stood huge together up'
      }
    ],
    [{
        id: 1021,
        sntc: 'O, bu biznesi satdı',
        tr: 'He sold this business',
        ch: 'He sold this believe repeat business'
      },
      {
        id: 1022,
        sntc: 'Biz həmin turnirdə qalib gəldik',
        tr: 'We won in that tournament',
        ch: 'We won in that achieve aim tournament'
      },
      {
        id: 1023,
        sntc: 'Onlar adətən birlikdə vaxt keçirirdilər',
        tr: 'They usually spent time together',
        ch: 'They usually spent time belong dish together'
      },
      {
        id: 1024,
        sntc: 'İki alma yerə düşdü',
        tr: 'Two apples fell down',
        ch: 'Two apples fell speech several down'
      },
      {
        id: 1025,
        sntc: 'O, çox geniş bir mənzil aldı',
        tr: 'She bought a very spacious flat',
        ch: 'She bought a very snow sum spacious flat'
      },
      {
        id: 1026,
        sntc: 'O, çox pul xərclədi',
        tr: 'She spent too much',
        ch: 'She spent too thousand month much'
      },
      {
        id: 1027,
        sntc: 'O klinika haradadır?',
        tr: 'Where is that clinic?',
        ch: 'Where is that near key clinic'
      },
      {
        id: 1028,
        sntc: 'Onlar mənə bağlama göndərdilər',
        tr: 'They sent me a parcel',
        ch: 'They sent me a show brilliant parcel'
      },
      {
        id: 1029,
        sntc: 'Mən kiçik bir şəhərdə böyümüşəm',
        tr: 'I grew up in a small town',
        ch: 'I grew up in a small stay outstanding town'
      },
      {
        id: 1030,
        sntc: 'Mən nəhayət qalib gəldim',
        tr: 'I won at last',
        ch: 'I won at flat arm last'
      }
    ],
    [{
        id: 1031,
        sntc: 'Mən başqa işlərlə məşğul olaraq onu dinləyə bilirdim',
        tr: 'I could listen to her doing other things',
        ch: 'I could listen to her doing other supplier ball things'
      },
      {
        id: 1032,
        sntc: 'O, mənə bir lütf etdi',
        tr: 'He did me a favor',
        ch: 'He did me a wrongly employee favor'
      },
      {
        id: 1033,
        sntc: 'Mən səhv etdim',
        tr: 'I made a mistake',
        ch: 'I made a thief stone mistake'
      },
      {
        id: 1034,
        sntc: 'Sənə bu nəticələri müqayisə etmək lazımdır',
        tr: 'You need to compare these results',
        ch: 'You need to compare these swimming pool results'
      },
      {
        id: 1035,
        sntc: 'Mən bunu kompüterimin yaxınlığında qoydum',
        tr: 'I put it near my computer',
        ch: 'I put it near meat part my computer'
      },
      {
        id: 1036,
        sntc: 'Onlar İspan dilində danışırdılar',
        tr: 'They spoke Spanish',
        ch: 'They spoke boat account Spanish'
      },
      {
        id: 1037,
        sntc: 'Mən pul kisəmi tapdım',
        tr: 'I found my wallet',
        ch: 'I found my profitable slowly wallet'
      },
      {
        id: 1038,
        sntc: 'Mən fərqli düşünürdüm',
        tr: 'I thought differently',
        ch: 'I thought supplier milk differently'
      },
      {
        id: 1039,
        sntc: 'Bu sözlər sənin üçün yenidir?',
        tr: 'Are these words new for you?',
        ch: 'Are these words boast achievement new for you'
      },
      {
        id: 1040,
        sntc: 'Biz dünən İngilis dilində danışdıq',
        tr: 'We spoke English yesterday',
        ch: 'We spoke English career pond yesterday'
      }
    ],
    [{
        id: 1041,
        sntc: 'Mən ora vaxtında gəldim',
        tr: 'I came there on time',
        ch: 'I came there on incorrectly decide time'
      },
      {
        id: 1042,
        sntc: 'Mən bu xidmətə görə pul ödədim',
        tr: 'I paid for this service',
        ch: 'I paid for this afraid difficulty service'
      },
      {
        id: 1043,
        sntc: 'Mən bunu ikinci dəfə eşitdim',
        tr: 'I heard it for the second time',
        ch: 'I heard it for the lucky loyal second time'
      },
      {
        id: 1044,
        sntc: 'Bu dərs nə dərəcədə faydalıdır?',
        tr: 'How useful is the lesson?',
        ch: 'How useful is the surname hotel lesson'
      },
      {
        id: 1045,
        sntc: 'Mən bunu üç yüz dollara almışam',
        tr: 'I bought it for three hundred dollars',
        ch: 'I bought it for three hundred wife month dollars'
      },
      {
        id: 1046,
        sntc: 'Mən tədarükçülərlə məşğul oldum',
        tr: 'I dealt with suppliers',
        ch: 'I dealt with choose watch suppliers'
      },
      {
        id: 1047,
        sntc: 'O, çox dəbli paltarlar geyinirdi',
        tr: 'He wore very stylish clothes',
        ch: 'He wore very worry advise stylish clothes'
      },
      {
        id: 1048,
        sntc: 'O, stəkan südü stolun üstünə qoydu',
        tr: 'He put a glass of milk on the table',
        ch: 'He put a glass of milk on the available price table'
      },
      {
        id: 1049,
        sntc: 'O, çox gəlirli şirkət qurdu',
        tr: 'He set up a very profitable company',
        ch: 'He set up a very attempt satisfactory profitable company'
      },
      {
        id: 1050,
        sntc: 'Biz iş yoldaşları deyilik',
        tr: "We aren't colleagues",
        ch: "We aren't hard-working trouble colleagues"
      }
    ],
    [{
        id: 1051,
        sntc: 'Biz buna görə peşman olmadıq',
        tr: 'We didn’t regret it',
        ch: 'We didn’t regret upset intend it'
      },
      {
        id: 1052,
        sntc: 'Bu bizi təəccübləndirmədi',
        tr: 'It didn’t surprise us',
        ch: 'It didn’t surprise devote cancel us'
      },
      {
        id: 1053,
        sntc: 'Mən bu barədə düşünmədim',
        tr: 'I didn’t think about it',
        ch: 'I didn’t think about under arrest it'
      },
      {
        id: 1054,
        sntc: 'Sən bizi başa düşmədin',
        tr: 'You didn’t understand us',
        ch: 'You didn’t understand conclusion logical us'
      },
      {
        id: 1055,
        sntc: 'Mən idmana çox vaxt ayırmadım',
        tr: 'I didn’t devote much time to sport',
        ch: 'I didn’t devote much amazing useful time to sport'
      },
      {
        id: 1056,
        sntc: 'O, görüşü ləğv etmədi',
        tr: 'He didn’t cancel the meeting',
        ch: 'He didn’t cancel the desk service meeting'
      },
      {
        id: 1057,
        sntc: 'Bu dünən baş verməyib',
        tr: 'It didn’t happen yesterday',
        ch: 'It didn’t happen thief stone yesterday'
      },
      {
        id: 1058,
        sntc: 'Bu xoşuma gəlmədi',
        tr: 'I didn’t like it',
        ch: 'I didn’t like delivery contest it'
      },
      {
        id: 1059,
        sntc: 'Biz bunu gözləmirdik',
        tr: 'We didn’t expect it',
        ch: 'We didn’t expect terrible coat it'
      },
      {
        id: 1060,
        sntc: 'Bu bizi heç maraqlandırmırdı',
        tr: 'It didn’t interest us at all',
        ch: 'It didn’t interest us at letter furniture all'
      }
    ],
    [{
        id: 1061,
        sntc: 'O, dünən üzüb?',
        tr: 'Did he swim yesterday?',
        ch: 'Did he swim disappointed flat yesterday'
      },
      {
        id: 1062,
        sntc: 'Biz buna layiq idik?',
        tr: 'Did we deserve it?',
        ch: 'Did we deserve bitterly disappoint it'
      },
      {
        id: 1063,
        sntc: 'Sən bunu etdin?',
        tr: 'Did you do it?',
        ch: 'Did you do incorrectly decide it'
      },
      {
        id: 1064,
        sntc: 'O, cəmləşməyə çalışırdı?',
        tr: 'Did he try to concentrate?',
        ch: 'Did he try to below average concentrate'
      },
      {
        id: 1065,
        sntc: 'Sən heç bir səhv etmədin',
        tr: 'You didn’t make any mistakes',
        ch: 'You didn’t make any person time mistakes'
      },
      {
        id: 1066,
        sntc: 'Bu qəmi xoşuna gəldi?',
        tr: 'Did you like this ship?',
        ch: 'Did you like this track favorite ship'
      },
      {
        id: 1067,
        sntc: 'Onlar paltarlarını yığdılar?',
        tr: 'Did they pack their clothes?',
        ch: 'Did they pack their ahead kind clothes'
      },
      {
        id: 1068,
        sntc: 'Bu, həqiqətən də sənə kömək etdi?',
        tr: 'Did it really help you?',
        ch: 'Did it really help surprise rich you'
      },
      {
        id: 1069,
        sntc: 'Onlar buna zəmanət verdilər?',
        tr: 'Did they guarantee it?',
        ch: 'Did they guarantee right now it'
      },
      {
        id: 1070,
        sntc: 'Mən bunu səhv dedim?',
        tr: 'Did I say it wrongly?',
        ch: 'Did I say it show result wrongly'
      }
    ],
    [{
        id: 1071,
        sntc: 'Niyə İngilis dilini burada öyrənməyə qərar verdiniz?',
        tr: 'Why did you decide to learn English here?',
        ch: 'Why did you decide to learn correctly improve English here'
      },
      {
        id: 1072,
        sntc: 'Sən orada nə görmək istəyirdin?',
        tr: 'What did you want to see there?',
        ch: 'What did you want to see become want there'
      },
      {
        id: 1073,
        sntc: 'Bunun qiyməti nə qədərdir?',
        tr: 'How much is it?',
        ch: 'How much is show result it'
      },
      {
        id: 1074,
        sntc: 'O, öz davranışını təhlil etdi?',
        tr: 'Did he analyze his behavior?',
        ch: 'Did he analyze his attract discuss behavior'
      },
      {
        id: 1075,
        sntc: 'Sən mənə nə dedin?',
        tr: 'What did you tell me?',
        ch: 'What did you tell how person me'
      },
      {
        id: 1076,
        sntc: 'Sən nə bilmək istəyirdin?',
        tr: 'What did you want to know?',
        ch: 'What did you different movies want to know'
      },
      {
        id: 1077,
        sntc: 'Bu nə vaxt baş verib?',
        tr: 'When did it happen?',
        ch: 'When did it really correct happen'
      },
      {
        id: 1078,
        sntc: 'Nə baş verib?',
        tr: 'What happened?',
        ch: 'What motivate unimportant happened'
      },
      {
        id: 1079,
        sntc: 'Bu məlumatı kim təsdiq etdi?',
        tr: 'Who confirmed this information?',
        ch: 'Who confirmed check useless this information'
      },
      {
        id: 1080,
        sntc: 'Sən hansı atı seçdin?',
        tr: 'Which horse did you choose?',
        ch: 'Which horse did happen depend you choose'
      }
    ],
    [{
        id: 1081,
        sntc: 'Mən çox xoşbəxt idim',
        tr: 'I was so happy',
        ch: 'I was so impossible lazy happy'
      },
      {
        id: 1082,
        sntc: 'Biz haqlı idik',
        tr: 'We were right',
        ch: 'We were far lucky right'
      },
      {
        id: 1083,
        sntc: 'Mən enerji ilə dolu idim',
        tr: 'I was full of energy',
        ch: 'I was full of funny success energy'
      },
      {
        id: 1084,
        sntc: 'Onlar çox uzaqda idilər',
        tr: 'They were very far',
        ch: 'They were very visit place far'
      },
      {
        id: 1085,
        sntc: 'O, təəccübləndi',
        tr: 'He was surprised',
        ch: 'He was cheap talented surprised'
      },
      {
        id: 1086,
        sntc: 'Bu, çox vacib detal idi',
        tr: 'It was a very important detail',
        ch: 'It was a very important expensive impossible detail'
      },
      {
        id: 1087,
        sntc: 'O, çox utancaq idi',
        tr: 'She was very shy',
        ch: 'She was very poor right shy'
      },
      {
        id: 1088,
        sntc: 'Mən çox yorulmuşdum',
        tr: 'I was so tired',
        ch: 'I was so discuss fluently tired'
      },
      {
        id: 1089,
        sntc: 'Günəşli gün idi',
        tr: 'It was a sunny day',
        ch: 'It was a sunny inspire buy day'
      },
      {
        id: 1090,
        sntc: 'Mən tamamilə əmin idim',
        tr: 'I was absolutely certain',
        ch: 'I was absolutely exercise available certain'
      }
    ],
    [{
        id: 1091,
        sntc: 'Nəticələr olduqca yaxşı idi',
        tr: 'The results were quite good',
        ch: 'The results were quite miss article good'
      },
      {
        id: 1092,
        sntc: 'Bu bilik kifayət idi',
        tr: 'This knowledge was enough',
        ch: 'This knowledge conference attractive was enough'
      },
      {
        id: 1093,
        sntc: 'Oğlanlar başqa şəhərdə idilər',
        tr: 'The boys were in another city',
        ch: 'The boys were in spring bathroom another city'
      },
      {
        id: 1094,
        sntc: 'Qız çox zəhmətkeş idi',
        tr: 'The girl was so hard-working',
        ch: 'The girl was so help revise hard-working'
      },
      {
        id: 1095,
        sntc: 'Mənim dostlarım orada idilər',
        tr: 'My friends were there',
        ch: 'My friends were appear suddenly there'
      },
      {
        id: 1096,
        sntc: 'Qızlar çox qəmli idilər',
        tr: 'The girls were so sad',
        ch: 'The girls were so turn smile sad'
      },
      {
        id: 1097,
        sntc: 'Ev çox geniş idi',
        tr: 'The house was very spacious',
        ch: 'The house was very view insist spacious'
      },
      {
        id: 1098,
        sntc: 'O sözlər çox vacib idi',
        tr: 'Those words were very important',
        ch: 'Those words were very include example important'
      },
      {
        id: 1099,
        sntc: 'Kitablar çox məlumatlı idi',
        tr: 'The books were so informative',
        ch: 'The books were so measure proud informative'
      },
      {
        id: 1100,
        sntc: 'Mənim müəllimim haqlı idi',
        tr: 'My teacher was right',
        ch: 'My teacher was bus certainly right'
      }
    ],
    [{
        id: 1101,
        sntc: 'Biz məzuniyyətdə deyildik',
        tr: 'We weren’t on vacation',
        ch: 'We weren’t on calm party vacation'
      },
      {
        id: 1102,
        sntc: 'Jurnal çox nazik idi',
        tr: 'The magazine was very thin',
        ch: 'The magazine was very quite rarely thin'
      },
      {
        id: 1103,
        sntc: 'Biz heç yorğun deyildik',
        tr: 'We weren’t tired at all',
        ch: 'We weren’t eat procedure tired at all'
      },
      {
        id: 1104,
        sntc: 'Onlar məşğul deyildilər',
        tr: 'They weren’t busy',
        ch: 'They weren’t back mean busy'
      },
      {
        id: 1105,
        sntc: 'Mən dünən orada olmamışam',
        tr: 'I wasn’t there yesterday',
        ch: 'I wasn’t worker resolve there yesterday'
      },
      {
        id: 1106,
        sntc: 'Kitab çox qalın idi',
        tr: 'The book was very thick',
        ch: 'The book miss article was very thick'
      },
      {
        id: 1107,
        sntc: 'Mən uğurumla fəxr etmədim',
        tr: 'I wasn’t proud of my success',
        ch: 'I wasn’t part competition proud of my success'
      },
      {
        id: 1108,
        sntc: 'O, bundan qorxmurdu',
        tr: 'He wasn’t afraid of it',
        ch: 'He wasn’t radical insist afraid of it'
      },
      {
        id: 1109,
        sntc: 'Mən əmin deyildim',
        tr: 'I wasn’t certain',
        ch: 'I wasn’t certain last forever'
      },
      {
        id: 1110,
        sntc: 'O, imtahanlarına hazır deyildi',
        tr: 'She wasn’t ready for her exams',
        ch: 'She wasn’t ready for her exercise available exams'
      }
    ],
    [{
        id: 1111,
        sntc: 'Mənim dostum nəticəsindən məmnun olmadı',
        tr: 'My friend wasn’t satisfied with his result',
        ch: 'My friend wasn’t satisfied with only answer his result'
      },
      {
        id: 1112,
        sntc: 'Onların nəticələri qaneedici olmadı',
        tr: 'Their results weren’t satisfactory',
        ch: 'Their results weren’t prepare exam satisfactory'
      },
      {
        id: 1113,
        sntc: 'O imtahan heç çətin deyildi',
        tr: 'That exam wasn’t difficult at all',
        ch: 'That exam wasn’t difficult tasty talk at all'
      },
      {
        id: 1114,
        sntc: 'Mənim dostum və mən əmin deyildik',
        tr: 'My friend and I weren’t sure',
        ch: 'My friend and I weren’t convenient key sure'
      },
      {
        id: 1115,
        sntc: 'Həmin hadisə elə də əhəmiyyətli deyildi',
        tr: 'That event wasn’t so important',
        ch: 'That event wasn’t so lazy dangerous important'
      },
      {
        id: 1116,
        sntc: 'Onun tövsiyələri faydalı deyildi',
        tr: 'His recommendations weren’t useful',
        ch: 'His recommendations boring satisfied weren’t useful'
      },
      {
        id: 1117,
        sntc: 'Onun nəticəsi qaneedici olmadı',
        tr: 'His result wasn’t satisfactory',
        ch: 'His result wasn’t exercise lazy satisfactory'
      },
      {
        id: 1118,
        sntc: 'Günlər soyuq deyildi',
        tr: 'The days weren’t cold',
        ch: 'The days weren’t bad jeans cold'
      },
      {
        id: 1119,
        sntc: 'Mənim dostum və mən realist idik',
        tr: 'My friend and I were realistic',
        ch: 'My friend and I optimism power were realistic'
      },
      {
        id: 1120,
        sntc: 'O günlər buludlu deyildi',
        tr: 'Those days weren’t cloudy',
        ch: 'Those days weren’t atmosphere surprising cloudy'
      }
    ],
    [{
        id: 1121,
        sntc: 'O, xəstə idi?',
        tr: 'Was he ill?',
        ch: 'Was he boring satisfied ill'
      },
      {
        id: 1122,
        sntc: 'Bu çox asan idi?',
        tr: 'Was it so easy?',
        ch: 'Was it so high level easy'
      },
      {
        id: 1123,
        sntc: 'Bizim bəxtimiz gətirdi',
        tr: 'We are lucky',
        ch: 'We are trousers full lucky'
      },
      {
        id: 1124,
        sntc: 'O, yorulmuşdu',
        tr: 'She was tired',
        ch: 'She was memory bad tired'
      },
      {
        id: 1125,
        sntc: 'Sən varlı idin?',
        tr: 'Were you rich?',
        ch: 'Were you job wrong rich'
      },
      {
        id: 1126,
        sntc: 'Onlar mehriban idilər?',
        tr: 'Were they friendly?',
        ch: 'Were they old expensive friendly'
      },
      {
        id: 1127,
        sntc: 'Mən yanlış yolda idim?',
        tr: 'Was I on the wrong track?',
        ch: 'Was I on the wrong global own track'
      },
      {
        id: 1128,
        sntc: 'O, bizimlə idi',
        tr: 'She was with us',
        ch: 'She was with face guess us'
      },
      {
        id: 1129,
        sntc: 'O, ən çox sevdiyin müğənni idi?',
        tr: 'Was she your favorite singer?',
        ch: 'Was she your favorite deliver belong singer'
      },
      {
        id: 1130,
        sntc: 'O, bayramda idi?',
        tr: 'Was he on holiday?',
        ch: 'Was he on visit place holiday'
      }
    ],
    [{
        id: 1131,
        sntc: 'O, niyə elə yorğun idi?',
        tr: 'Why was she so tired?',
        ch: 'Why was she so possible such tired'
      },
      {
        id: 1132,
        sntc: 'Bu nə vaxt olub?',
        tr: 'When was it?',
        ch: 'When was expensive clever it'
      },
      {
        id: 1133,
        sntc: 'Gözlənilməz olan nə idi?',
        tr: 'What was unpredictable?',
        ch: 'What was wear broke unpredictable'
      },
      {
        id: 1134,
        sntc: 'Kim haqlı idi?',
        tr: 'Who was right?',
        ch: 'Who was gave say right'
      },
      {
        id: 1135,
        sntc: 'Sən necəsən?',
        tr: 'How are you?',
        ch: 'How are hold cut you'
      },
      {
        id: 1136,
        sntc: 'Bizim bəxtimiz gətirdi',
        tr: 'We were lucky',
        ch: 'We were dig has lucky'
      },
      {
        id: 1137,
        sntc: 'O, necə idi?',
        tr: 'How was she?',
        ch: 'How was attract look she'
      },
      {
        id: 1138,
        sntc: 'Bu harada olub?',
        tr: 'Where was it?',
        ch: 'Where was feel set it'
      },
      {
        id: 1139,
        sntc: 'Sən niyə elə yorğun idin?',
        tr: 'Why were you so tired?',
        ch: 'Why were you thank lie so tired'
      },
      {
        id: 1140,
        sntc: 'Onlar başqa yerdə idilər',
        tr: 'They were in another place',
        ch: 'They were behave overate in another place'
      }
    ],
    [{
        id: 1141,
        sntc: 'Bizim müəllimimiz harada idi?',
        tr: 'Where was our teacher?',
        ch: 'Where was look correct our teacher'
      },
      {
        id: 1142,
        sntc: 'Niyə film elə darıxdırıcı idi?',
        tr: 'Why was the movie so boring?',
        ch: 'Why was does control the movie so boring'
      },
      {
        id: 1143,
        sntc: 'Əyləncə necə idi?',
        tr: 'How was the party?',
        ch: 'How was tore redo the party'
      },
      {
        id: 1144,
        sntc: 'Kim bayırda idi?',
        tr: 'Who was outside?',
        ch: 'Who was think fell outside'
      },
      {
        id: 1145,
        sntc: 'Onun reaksiyası necə oldu?',
        tr: 'What was his reaction?',
        ch: 'What was his happens support reaction'
      },
      {
        id: 1146,
        sntc: 'Orada nə qədər səhv var idi?',
        tr: 'How many mistakes were there?',
        ch: 'How many mistakes asks was were there'
      },
      {
        id: 1147,
        sntc: 'Tələbə nə vaxt hazır idi?',
        tr: 'When was the student ready?',
        ch: 'When was the discuss prefer student ready'
      },
      {
        id: 1148,
        sntc: 'İçəridə kim var idi?',
        tr: 'Who was inside?',
        ch: 'Who was agree analyze inside'
      },
      {
        id: 1149,
        sntc: 'O, nəyə görə elə qayğıkeş idi?',
        tr: 'Why was she so careful?',
        ch: 'Why was she so achieve pass careful'
      },
      {
        id: 1150,
        sntc: 'Başqa alternativ nə idi?',
        tr: 'What was another alternative?',
        ch: 'What was another foresaw publish alternative'
      }
    ],
  ]
}
// console.log(JSON.stringify(initialState))

// let ad=0
// let obj=[]
// for (let i=0; i<115; i++){
//     for(let a=0; a<10; a++){
//         // obj.id=initialState.sentences[0][i][a].id
//         // obj.push(initialState.sentences[i][a].tr)
//       if(initialState.sentences[i][a].ch.indexOf('?')>0){ad+=1;console.log(ad)}
//       }}

// setTimeout(() => {console.log(obj)}, 1000)
const SET_AZEN = 'SET_AZEN'
export const setAzEn = value => ({
  type: SET_AZEN,
  value
})

const azEnSentences = (state = initialState, action) => {
  switch (action.type) {
    case SET_AZEN:
      return {
        ...state, sentences: action.value
      }
      default:
        return state
  }
}

export default azEnSentences