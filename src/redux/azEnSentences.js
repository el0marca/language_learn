const initialState = {
  sentences: [
    [{
        id: 1,
        sntc: 'O orada işləyir',
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
        sntc: 'Mən işə gedirəm',
        tr: 'I go to work',
        ch: 'I go to school work works goes'
      },
      {
        id: 4,
        sntc: 'O bunu bilir',
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
        sntc: 'O bunu başa düşür',
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
        sntc: 'O bunu istəyir',
        tr: 'He wants it',
        ch: 'He wants understand We know it'
      },
      {
        id: 10,
        sntc: 'O orada işləyir',
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
        sntc: 'O bu səhvi görür',
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
        sntc: 'O daha çox praktika istəyir',
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
        sntc: 'Mən daha çox praktika istəyirəm',
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
        sntc: 'O İngilis dilini öyrənməyə çalışır',
        tr: 'He tries to learn English',
        ch: 'He We tries try study to learn English'
      },
      {
        id: 25,
        sntc: 'O bunu çox yaxşı edir',
        tr: 'She does it very well',
        ch: 'She does it very well good goods do'
      },
      {
        id: 26,
        sntc: 'O tez-tez kinoya gedir',
        tr: 'She often goes to the cinema',
        ch: 'She often this I go goes to the cinema'
      },
      {
        id: 27,
        sntc: 'Mən bunu anlamağa çalışıram',
        tr: 'I try to understand it',
        ch: 'I try We know knows to understand it'
      },
      {
        id: 28,
        sntc: 'Onun təklifi var',
        tr: 'He has an offer',
        ch: 'He has I have an a offer'
      },
      {
        id: 29,
        sntc: 'O mənə kömək etməyə çalışır',
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
        sntc: 'Mənim atamın maşını var',
        tr: 'My father has a car',
        ch: 'My father you have Your has a car'
      },
      {
        id: 36,
        sntc: 'Onun şirkəti var ',
        tr: 'She has a company',
        ch: 'She We have has a company'
      },
      {
        id: 37,
        sntc: 'Bizim anamız da eyni fikirdədir ',
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
        sntc: 'Mənim bir bacım var',
        tr: 'I have a sister',
        ch: 'I have We has brother a an sister'
      },
      {
        id: 42,
        sntc: 'O bunu bilir',
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
        sntc: 'O mənə kömək edir ',
        tr: 'She helps me',
        ch: 'She We helps know my help you me'
      },
      {
        id: 46,
        sntc: 'O bunu istəyir',
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
        sntc: 'O sənin üçün darıxır',
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
        sntc: 'O İngilis kitablarını oxuyur',
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
        sntc: 'O İngilis dilini bilmək istəyir',
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
        sntc: 'Mən bu yeri həqiqətən bəyənirəm',
        tr: 'I really like this place',
        ch: 'I really likes that like this place'
      },
      {
        id: 63,
        sntc: 'Bu dərs onun da xoşuna gəlir',
        tr: 'He also likes this lesson',
        ch: 'He also like that likes this lesson'
      },
      {
        id: 64,
        sntc: 'O həkim olmaq istərdi',
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
        sntc: 'Mən iş adamı olmaq istərdim',
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
        sntc: 'Mən bilirəm onlar bunu bəyənirlər',
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
        sntc: 'O yaxşı iş tapmaq istəmir',
        tr: 'She doesn’t want to find a good job',
        ch: 'She doesn’t don’t I want to find an a good job'
      },
      {
        id: 72,
        sntc: 'O bunu etməyə çalışmır',
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
        sntc: 'Mən burada oxumaq istəmirəm ',
        tr: 'I don’t want to study here',
        ch: 'I don’t doesn’t like live want to study here'
      },
      {
        id: 76,
        sntc: 'Bu faydalı görünmür',
        tr: 'It doesn’t seem useful',
        ch: 'It doesn’t don’t useless seem useful'
      },
      {
        id: 77,
        sntc: 'Mən bu barədə fikirləşmək istəmirəm',
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
        sntc: 'Mənim dostum orada oxumaq istəmir ',
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
        sntc: 'Bu təklif o qədər də maraqlı görünmür',
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
        sntc: 'O düşünür ki pul insanlara xoşbəxtlik gətirmir',
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
        sntc: 'Bizə həqiqətən bunu başa düşmək lazımdır',
        tr: 'We really need to understand it',
        ch: 'We really need want I to understand it'
      },
      {
        id: 92,
        sntc: 'Mənim sənin məsləhətinə ehtiyacım var',
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
        sntc: 'Mənə daha çox pul lazımdır',
        tr: 'I need more money',
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
        sntc: 'Mən düşünürəm ki sənə az işləmək lazımdır',
        tr: 'I think you need to work less',
        ch: 'I think help you need to work works less'
      },
      {
        id: 97,
        sntc: 'Dostuma indicə sənin məsləhətin lazımdır',
        tr: 'My friend needs your advice right now',
        ch: 'My friend friends needs your you advice right now'
      },
      {
        id: 98,
        sntc: 'Bizə həqiqətən bu lazımdır',
        tr: 'We really need it',
        ch: 'We really need needs that it'
      },
      {
        id: 99,
        sntc: 'Mənə həqiqətən daha çox pul lazımdır',
        tr: 'I really need more money',
        ch: 'I really need needs want more money'
      },
      {
        id: 100,
        sntc: 'O, anasına zəng etməlidir',
        tr: 'She needs to call mother',
        ch: 'She needs need say to call mother'
      }
    ],
    [{
        id: 101,
        sntc: 'Sən nəticələrini yaxşılaşdırmağa çalışırsan?',
        tr: 'Do you try to improve your results?',
        ch: 'Do you try tries like to improve your results?'
      },
      {
        id: 102,
        sntc: 'Sənin boş vaxtın var?',
        tr: 'Do you have free time?',
        ch: 'Do you have need fluently free time?'
      },
      {
        id: 103,
        sntc: 'Mən səhv edirəm?',
        tr: 'Do I make mistake?',
        ch: 'Do I We makes make mistake?'
      },
      {
        id: 104,
        sntc: 'Sən bunu xatırlayırsan?',
        tr: 'Do you remember it?',
        ch: 'Do you remember your remembers it?'
      },
      {
        id: 105,
        sntc: 'Sənin bu problemdən xəbərin var?',
        tr: 'Do you know about this problem?',
        ch: 'Do you know knows about this that problem?'
      },
      {
        id: 106,
        sntc: 'Sənə kömək lazımdır?',
        tr: 'Do you need help?',
        ch: 'Do you know we need help?'
      },
      {
        id: 107,
        sntc: 'Sən tez-tez buranı ziyarət edirsən?',
        tr: 'Do you often visit this place?',
        ch: 'Do you often always come visit this place?'
      },
      {
        id: 108,
        sntc: 'Mənim məsləhətimə ehtiyacın var?',
        tr: 'Do you need my advice?',
        ch: 'Do you need me needs my advice?'
      },
      {
        id: 109,
        sntc: 'Onlar bu qərarı dəstəkləyirlər?',
        tr: 'Do they support this decision?',
        ch: 'Do they their support supports this decision?'
      },
      {
        id: 110,
        sntc: 'Sən tez-tez ona zəng edirsən?',
        tr: 'Do you often call him?',
        ch: 'Do you often sometimes calls call him?'
      }
    ],
    [{
        id: 111,
        sntc: 'O, onun sözlərinə məhəl qoymur?',
        tr: 'Does he ignore her words?',
        ch: 'Does he ignore ignores him her words?'
      },
      {
        id: 112,
        sntc: 'Bu qəribə görünür?',
        tr: 'Does it look strange?',
        ch: 'Does it look looks that strange?'
      },
      {
        id: 113,
        sntc: 'O, bunu tez-tez eşidir?',
        tr: 'Does she often hear it?',
        ch: 'Does she often always her hear it?'
      },
      {
        id: 114,
        sntc: 'O, hərdən buna məhəl qoymur?',
        tr: 'Does she ignore it sometimes?',
        ch: 'Does she ignore ignores it its sometimes?'
      },
      {
        id: 115,
        sntc: 'Bu sizə kömək edir?',
        tr: 'Does it help you?',
        ch: 'Does it ignores your help you?'
      },
      {
        id: 116,
        sntc: 'O, bütün bu qaydaları xatırlayır?',
        tr: 'Does he remember all these rules',
        ch: 'Does he remember remembers all everything these rules'
      },
      {
        id: 117,
        sntc: 'O, bunu tez-tez deyir?',
        tr: 'Does she often says it?',
        ch: 'Does she we tell often says it?'
      },
      {
        id: 118,
        sntc: 'O, bunu tez-tez istifadə edir?',
        tr: 'Does he often use it?',
        ch: 'Does he often useless this use it?'
      },
      {
        id: 119,
        sntc: 'O, tez-tez İngiliscə danışır?',
        tr: 'Does she often speak English?',
        ch: 'Does she always tell often speak English?'
      },
      {
        id: 120,
        sntc: 'Bu peşə onun xoşuna gəlir?',
        tr: 'Does she like this profession?',
        ch: 'Does she likes that like this profession?'
      }
    ],
    [{
        id: 121,
        sntc: 'Sənin dostun səninlə razıdır?',
        tr: 'Does your friend agree with you?',
        ch: 'Does your friend friends agree agrees with you?'
      },
      {
        id: 122,
        sntc: 'Sənin valideynlərin bunu başa düşür?',
        tr: 'Do your parents understand it?',
        ch: 'Do your parents parent understand know it?'
      },
      {
        id: 123,
        sntc: 'Bu sınaq çox asan görünür?',
        tr: 'Does this test seem very easy?',
        ch: 'Does this test tests seem much very easy?'
      },
      {
        id: 124,
        sntc: 'Sənin dostların səninlə razıdırlar?',
        tr: 'Do your friends agree with you?',
        ch: 'Do your friends friend agree agrees with you?'
      },
      {
        id: 125,
        sntc: 'Bu nəticə səni motivasiya edir?',
        tr: 'Does this result motivate you?',
        ch: 'Does this result results motivate motivates you?'
      },
      {
        id: 126,
        sntc: 'Sənin dostun həmişə sənə dəstək olur?',
        tr: 'Does your friend always support you?',
        ch: 'Does your friend friends always support often you?'
      },
      {
        id: 127,
        sntc: 'Bu məlumat əhəmiyyətsiz görünür?',
        tr: 'Does this information seem unimportant?',
        ch: 'Does this that seems information seem unimportant?'
      },
      {
        id: 128,
        sntc: 'Sənin dostların əla nəticələr göstərirlər?',
        tr: 'Do your friends show excellent results?',
        ch: 'Do your friends friend look good show excellent results?'
      },
      {
        id: 129,
        sntc: 'Bu insan çox yaxşı görünür?',
        tr: 'Does this person seem very good?',
        ch: 'Does this that people person seem very good?'
      },
      {
        id: 130,
        sntc: 'O tələbə səhvlərə yol verir?',
        tr: 'Does that student make mistakes?',
        ch: 'Does that student students do make mistakes?'
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
        ch: 'Does money interest we hers her?'
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
        ch: 'Does it happens happen Do from time to time?'
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
        ch: 'Do they their try to change changes it?'
      },
      {
        id: 137,
        sntc: 'O bizimlə razı deyil',
        tr: "He doesn't agree with us",
        ch: "He doesn't agree agrees by with us"
      },
      {
        id: 138,
        sntc: 'O, bizimlə razıdır?',
        tr: 'Does he agree with us?',
        ch: 'Does he Do agree with them us?'
      },
      {
        id: 139,
        sntc: 'O, bu yeri bəyənir',
        tr: 'She likes this place',
        ch: 'She likes We like that this place'
      },
      {
        id: 140,
        sntc: 'O, bu yeri bəyənir?',
        tr: 'Does she like this place?',
        ch: 'Does she like likes that this place?'
      }
    ],
    [{
        id: 141,
        sntc: 'Sən ora necə gedirsən?',
        tr: 'How do you get there?',
        ch: 'How do you your does get there?'
      },
      {
        id: 142,
        sntc: 'Sən adətən evə necə gedirsən?',
        tr: 'How do you usually get home?',
        ch: 'How do you usually often does get home?'
      },
      {
        id: 143,
        sntc: 'Sən özünü nə vaxt xoşbəxt hiss edirsən?',
        tr: 'When do you feel happy?',
        ch: 'When do does he you feel happy?'
      },
      {
        id: 144,
        sntc: 'Sən burada nəyi bəyənirsən?',
        tr: 'What do you like here?',
        ch: 'What do you your likes like here?'
      },
      {
        id: 145,
        sntc: 'Sən hansı İngilis kitablarını oxuyursan?',
        tr: 'What English books do you read?',
        ch: 'What English books book does do you read?'
      },
      {
        id: 146,
        sntc: 'Sən niyə ondan asılısan?',
        tr: 'Why do you depend on him?',
        ch: 'Why do you depend depends he on him?'
      },
      {
        id: 147,
        sntc: 'Adətən bunu kim yoxlayır?',
        tr: 'Who usually checks it?',
        ch: 'Who usually checks check this it?'
      },
      {
        id: 148,
        sntc: 'İşə kim gedir?',
        tr: 'Who goes to work?',
        ch: 'Who goes go by come to work?'
      },
      {
        id: 149,
        sntc: 'Bu səhvi kim görür?',
        tr: 'Who sees this mistake?',
        ch: 'Who sees this that see mistake?'
      },
      {
        id: 150,
        sntc: 'Sən adətən orada kimi görürsən?',
        tr: 'Who do you usually see there?',
        ch: 'Who do you your sees usually see there?'
      }
    ],
    [{
        id: 151,
        sntc: 'Bu onu nə üçün maraqlandırır?',
        tr: 'Why does it interest him?',
        ch: 'Why does do this it interest him?'
      },
      {
        id: 152,
        sntc: 'O, yaddaşını necə məşq edir?',
        tr: 'How does he train his memory?',
        ch: 'How does do he train trains he his memory?'
      },
      {
        id: 153,
        sntc: 'O, adətən boş vaxtını necə keçirir?',
        tr: 'How does she usually spend her free time?',
        ch: 'How does do we he she usually spend her free time?'
      },
      {
        id: 154,
        sntc: 'O, harada işləyir?',
        tr: 'Where does she work?',
        ch: 'Where does do we live she work?'
      },
      {
        id: 155,
        sntc: 'Onun neçə dolları var?',
        tr: 'How many dollars does he have?',
        ch: 'How many much dollar dollars does he have?'
      },
      {
        id: 156,
        sntc: 'O, bu problemləri necə həll edir?',
        tr: 'How does he solve these problems?',
        ch: 'How does do you this he solve these problems?'
      },
      {
        id: 157,
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does she want to add?',
        ch: 'What does do we like she want to add?'
      },
      {
        id: 158,
        sntc: 'O, kimi sevir?',
        tr: 'Who does he love?',
        ch: 'Who does do he her like love?'
      },
      {
        id: 159,
        sntc: 'O, nə qədər pul ödəyir?',
        tr: 'How much money does he pay?',
        ch: 'How much many do money does he pay?'
      },
      {
        id: 160,
        sntc: 'O, adətən nə deyir?',
        tr: 'What does she usually say?',
        ch: 'What does do we always she usually say?'
      }
    ],
    [{
        id: 161,
        sntc: 'Onun oğluna işə getmək üçün nə qədər vaxt lazımdır?',
        tr: 'How long does it take his son to get to work?',
        ch: 'How long much do does it take his son to get to work?'
      },
      {
        id: 162,
        sntc: 'Onun müəllimi nə cür nümunələr göstərir?',
        tr: 'What kind of examples does his teacher give?',
        ch: 'What kind this example of examples does his teacher give?'
      },
      {
        id: 163,
        sntc: 'Sənin valideynlərin harada işləyir?',
        tr: 'Where do your parents work?',
        ch: 'Where do your you parents work? works?'
      },
      {
        id: 164,
        sntc: 'Sənin atan işə nə vaxt gəlir?',
        tr: 'What time does your father come to work?',
        ch: 'What time does your you father come to work? works?'
      },
      {
        id: 165,
        sntc: 'Bu nə vaxt olur?',
        tr: 'When does it happen?',
        ch: 'When often does it happens happen?'
      },
      {
        id: 166,
        sntc: 'Sənin dostuna ora getmək üçün nə qədər vaxt lazımdır?',
        tr: 'How long does it take your friend to get there?',
        ch: 'How long does do it take takes your friend to get there?'
      },
      {
        id: 167,
        sntc: 'Sənin müdirin adətən nə vəd edir?',
        tr: 'What does your boss usually promise?',
        ch: 'What does your you boss usually promise? promises?'
      },
      {
        id: 168,
        sntc: 'Bələ şeylər nə qədər baş verir?',
        tr: 'How often do these things happen?',
        ch: 'How often do these this things happen? happens?'
      },
      {
        id: 169,
        sntc: 'Nəyə görə bu fikir belə maraqlı görünür?',
        tr: 'Why does this idea seem so interest?',
        ch: 'Why does this idea ideas seem seems so interest?'
      },
      {
        id: 170,
        sntc: 'Bu səyləri sənin müəllimin müntəzəm olaraq sənə nə qədər deyir?',
        tr: 'How regularly does your teacher tell you these things?',
        ch: 'How regularly does your you teacher tell tells you these things?'
      }
    ],
    [{
        id: 171,
        sntc: 'O bunu bilmir',
        tr: "He doesn't know it",
        ch: "He doesn't know knows this it"
      },
      {
        id: 172,
        sntc: 'Faydasız nə görünür?',
        tr: 'What seems useless?',
        ch: 'What seems seem useful How useless?'
      },
      {
        id: 173,
        sntc: 'Bizim kifayət qədər praktikamız var?',
        tr: 'Do we have enough practice?',
        ch: 'Do we have has Does enough usually practice?'
      },
      {
        id: 174,
        sntc: 'O səni indicə görmək istəyir',
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
        ch: 'Does he want wants lives to live abroad?'
      },
      {
        id: 178,
        sntc: 'Sən adətən nə sifariş edirsən?',
        tr: 'What do you usually order?',
        ch: 'What do you your usually often order?'
      },
      {
        id: 179,
        sntc: 'O çox zəhmət çəkir',
        tr: 'He works very hard',
        ch: 'He works also lives I very hard'
      },
      {
        id: 180,
        sntc: 'Onun hansı İngilis kitabları var?',
        tr: 'What English books does he have?',
        ch: 'What English books book How do does he have?'
      }
    ],
    [{
        id: 181,
        sntc: 'O, bunu necə izah edir?',
        tr: 'How does she explain it?',
        ch: 'How does do I she explain it its?'
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
        ch: 'Why do your parent you parents disagree with you?'
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
        ch: 'Which drink does do he prefer? prefers?'
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
        ch: 'Do you often Does listen to music song?'
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
        sntc: 'Məsləhətimə ehtiyacın var?',
        tr: 'Do you need my advice?',
        ch: 'Do you need needs Does he me my advice?'
      },
      {
        id: 194,
        sntc: 'Sən hər şeyi xatırlayırsan?',
        tr: 'Do you remember everything?',
        ch: 'Do you your remember remembers everything?'
      },
      {
        id: 195,
        sntc: 'Sənin nə qədər pulunuz var?',
        tr: 'How much money do you have?',
        ch: 'How much money many has does do you have?'
      },
      {
        id: 196,
        sntc: 'Onlar bu qərarı dəstəkləyirlər?',
        tr: 'Do they support this decision?',
        ch: 'Do they their these support this decision?'
      },
      {
        id: 197,
        sntc: 'Səni kim dəstəkləyir?',
        tr: 'Who supports you?',
        ch: 'Who supports you? your support?'
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
        ch: 'What does do we need she want to add?'
      },
      {
        id: 204,
        sntc: 'Səni cəlb edən nədir?',
        tr: 'What attracts you?',
        ch: 'What attracts like more Who you?'
      },
      {
        id: 205,
        sntc: 'Səni nə ruhlandırır?',
        tr: 'What inspires you?',
        ch: 'What inspires Where you he you?'
      },
      {
        id: 206,
        sntc: 'Sənin anan ona bütün həqiqəti deyir?',
        tr: 'Does your mother tell him all the truth?',
        ch: 'Does your mother mothers tell him all the this truth?'
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
        ch: 'What do we need problems want to change?'
      },
      {
        id: 209,
        sntc: 'O, yaddaşını necə məşq edir?',
        tr: 'How does he train his memory?',
        ch: 'How does do her he train his memory?'
      },
      {
        id: 210,
        sntc: 'O dərs darıxdırıcı gəlir?',
        tr: 'Does that lesson seem boring?',
        ch: 'Does that this lesson lessons seem boring?'
      }
    ],
    [{
        id: 211,
        sntc: 'Bunu kim bilir?',
        tr: 'Who knows it?',
        ch: 'Who knows know What this it?'
      },
      {
        id: 212,
        sntc: 'Mən həqiqətən qrammatikamı yaxşılaşdırmaq istəyirəm',
        tr: 'I really want to improve my grammar',
        ch: 'I really want wants always this to improve my grammar'
      },
      {
        id: 213,
        sntc: 'O, bunu tez-tez deyir',
        tr: 'Does he often say it?',
        ch: 'Does he often tell this say it?'
      },
      {
        id: 214,
        sntc: 'Siz tez-tez buranı ziyarət edirsiniz?',
        tr: 'Do you often visit this place?',
        ch: 'Do you your there often always visit this place?'
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
        sntc: 'Sən bunu tez-tez edirsən?',
        tr: 'Do you often do it?',
        ch: 'Do you often want wants this do it?'
      },
      {
        id: 218,
        sntc: 'O, sənə nə məsləhət verir?',
        tr: 'What advice does she give you?',
        ch: 'What advice does do take she give you?'
      },
      {
        id: 219,
        sntc: 'Onu orada nə cəlb edir?',
        tr: 'What attracts him there?',
        ch: 'What attracts him he this Why there?'
      },
      {
        id: 220,
        sntc: 'O, adətən nə deyir?',
        tr: 'What does he usually say?',
        ch: 'What does he usually tell well do say?'
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
        sntc: 'O əmindir',
        tr: "She's sure",
        ch: "She's sure We good serious"
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
        sntc: 'O onun arvadıdır',
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
        sntc: 'Bu soldadır',
        tr: "It's on the left",
        ch: "It's on the left at this right"
      },
      {
        id: 235,
        sntc: 'Bu sadədir',
        tr: "It's simple",
        ch: "It's simple an easy very"
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
        sntc: 'Bu, elə çətin vəziyyətdir ki',
        tr: "It's such a difficult situation",
        ch: "It's such a difficult situation simple easy"
      },
      {
        id: 242,
        sntc: 'Bu, asan tapşırıqdır',
        tr: "It's an easy exercise",
        ch: "It's an easy good exercise exercises"
      },
      {
        id: 243,
        sntc: 'Bu, elə çətin imtahandır ki',
        tr: "It's such a difficult exam",
        ch: "It's such a difficult simple so exam exams"
      },
      {
        id: 244,
        sntc: 'O, elə qəribə insandır ki',
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
        sntc: 'Elə gözəl yerdir ki',
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
        sntc: 'Bu sadədir',
        tr: "It's simple",
        ch: "It's simple very easy it"
      },
      {
        id: 249,
        sntc: 'O, gözəl qızdır',
        tr: "She's a beautiful girl",
        ch: "She's a beautiful girl girls an"
      },
      {
        id: 250,
        sntc: 'Bu, elə asan testdir ki',
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
        sntc: 'Mən əminəm, siz dünyanın ən yaxşı müəllimisiniz',
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
        sntc: 'Gün küləklidir',
        tr: 'The day is windy',
        ch: 'The day is windy that days'
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
        sntc: 'O, məşğul deyil. O sərbəstdir',
        tr: "He isn't busy. He's free",
        ch: "He isn't busy. He's second We second free"
      },
      {
        id: 268,
        sntc: 'Bu uzaqda deyil. Yaxındadır',
        tr: "It isn't far. It's near",
        ch: "It isn't far. It's there always I near"
      },
      {
        id: 269,
        sntc: 'Bu, çox da yaxşı qərar deyil',
        tr: "It isn't a very good decision",
        ch: "It isn't a very a He good perfectly decision"
      },
      {
        id: 270,
        sntc: 'Bu, çox da böyük səhv deyil',
        tr: "It isn't a very big mistake",
        ch: "It isn't a very big small mistake mistakes"
      }
    ],
    [{
        id: 271,
        sntc: 'Bu onun öz mənzilidir?',
        tr: 'Is it his own flat?',
        ch: 'Is it his own he Are they flat?'
      },
      {
        id: 272,
        sntc: 'O, öz mənzilindədir?',
        tr: 'Is he in his own flat?',
        ch: 'Is he in his you our her own flat?'
      },
      {
        id: 273,
        sntc: 'O, tənbəl oğlandır?',
        tr: 'Is he a lazy boy?',
        ch: 'Is he a lazy boy boys such We?'
      },
      {
        id: 274,
        sntc: 'Bu gülməli videodur?',
        tr: 'Is it a funny video?',
        ch: 'Is it a funny video very videos an?'
      },
      {
        id: 275,
        sntc: 'Bu böyük uğurdur?',
        tr: 'Is it a big success?',
        ch: 'Is it a big an he bad success?'
      },
      {
        id: 276,
        sntc: 'Bu, onun öz evidir?',
        tr: 'Is it her own house?',
        ch: 'Is it her Are We own town house?'
      },
      {
        id: 277,
        sntc: 'O, binadadır?',
        tr: 'Is he in the building?',
        ch: 'Is he Are they in the street building?'
      },
      {
        id: 278,
        sntc: 'Bu sağ tərəfdədir?',
        tr: 'Is it on the right?',
        ch: 'Is it in This on the  right?'
      },
      {
        id: 279,
        sntc: 'Burada soyuqdur?',
        tr: 'Is it cold here?',
        ch: 'Is it That Are cold here?'
      },
      {
        id: 280,
        sntc: 'Onlar uzaqdadırlar?',
        tr: 'Are they far?',
        ch: 'Are they near Is he far?'
      }
    ],
    [{
        id: 281,
        sntc: 'Məqalə çox informativdir?',
        tr: 'Is the article very informative?',
        ch: 'Is the article this like very informative?'
      },
      {
        id: 282,
        sntc: 'Bu müğənni populyardır?',
        tr: 'Is this singer popular?',
        ch: 'Is this singer song that popular?'
      },
      {
        id: 283,
        sntc: 'Oyun darıxdırıcıdır?',
        tr: 'Is the game boring?',
        ch: 'Is the game games this boring?'
      },
      {
        id: 284,
        sntc: 'Sənin anan dizaynerdir?',
        tr: 'Is your mother a designer?',
        ch: 'Is your mother mothers an a designer?'
      },
      {
        id: 285,
        sntc: 'Otel bahadır?',
        tr: 'Is the hotel expensive?',
        ch: 'Is the these much hotel expensive?'
      },
      {
        id: 286,
        sntc: 'Bu xəbər vacibdir?',
        tr: 'Is this news important?',
        ch: 'Is this news new Are important?'
      },
      {
        id: 287,
        sntc: 'Bu qadın çox müdrikdir?',
        tr: 'Is this woman very wise?',
        ch: 'Is this woman women that very wise?'
      },
      {
        id: 288,
        sntc: 'Problemlər böyükdür?',
        tr: 'Are the problems big?',
        ch: 'Are Is the problems problem big?'
      },
      {
        id: 289,
        sntc: 'Pişik bu otaqdadır?',
        tr: 'Is the cat in this room?',
        ch: 'Is the Are dog at cat in this room?'
      },
      {
        id: 290,
        sntc: 'Məqalə İngilis dilindədir?',
        tr: 'Is the article in English?',
        ch: 'Is the these article at in English?'
      }
    ],
    [{
        id: 291,
        sntc: 'Sənin cibində nə var?',
        tr: 'What is in your pocket?',
        ch: 'What is in your you are pocket?'
      },
      {
        id: 292,
        sntc: 'Sən nə vaxt məşğulsan?',
        tr: 'When are you busy?',
        ch: 'When are you your bag busy?'
      },
      {
        id: 293,
        sntc: 'Bu nə qədər maraqlıdır?',
        tr: 'How interesting is it?',
        ch: 'How interesting are this is it?'
      },
      {
        id: 294,
        sntc: 'Bu nə qədər uzaqdır?',
        tr: 'How far is it?',
        ch: 'How far is it this long?'
      },
      {
        id: 295,
        sntc: 'Sən niyə burdasan?',
        tr: 'Why are you here?',
        ch: 'Why are is hope you here?'
      },
      {
        id: 296,
        sntc: 'Kim səhvdir?',
        tr: 'Who is wrong?',
        ch: 'Who is are mistake wrong?'
      },
      {
        id: 297,
        sntc: 'Sən niyə belə xoşbəxtsən?',
        tr: 'Why are you so happy?',
        ch: 'Why are you your is so happy?'
      },
      {
        id: 298,
        sntc: 'Bu sizin üçün nə dərəcədə vacibdir?',
        tr: 'How important is it for you?',
        ch: 'How important is are by it for you?'
      },
      {
        id: 299,
        sntc: 'Saat neçədir?',
        tr: 'What time is it?',
        ch: 'What time How is it?'
      },
      {
        id: 300,
        sntc: 'Saat neçədir?',
        tr: 'What is the time?',
        ch: 'What is are these the time?'
      }
    ],
    [{
        id: 301,
        sntc: 'O adamlar kimlərdir?',
        tr: 'Who are those people?',
        ch: 'Who are these person those people?'
      },
      {
        id: 302,
        sntc: 'Dərs nə dərəcədə effektivdir?',
        tr: 'How effective is the lesson?',
        ch: 'How effective are these is the lesson?'
      },
      {
        id: 303,
        sntc: 'Sənin müəllimin haradadır?',
        tr: 'Where is your teacher?',
        ch: 'Where is your you are teacher?'
      },
      {
        id: 304,
        sntc: 'O şəxs kimdir?',
        tr: 'Who is that person?',
        ch: 'Who is that this people person?'
      },
      {
        id: 305,
        sntc: 'Uşaqlar haradadır?',
        tr: 'Where are the children?',
        ch: 'Where are is this the children?'
      },
      {
        id: 306,
        sntc: 'İmtahan nə qədər çətindir?',
        tr: 'How difficult is the test?',
        ch: 'How difficult much are is the test?'
      },
      {
        id: 307,
        sntc: 'Sənin atanın neçə yaşı var?',
        tr: 'How old is your father?',
        ch: 'How old much are is your father?'
      },
      {
        id: 308,
        sntc: 'Sənin atanın adı nədir?',
        tr: "What's your father's name?",
        ch: "What's your you names father's name?"
      },
      {
        id: 309,
        sntc: 'Bu maşın necədir?',
        tr: 'How is this car?',
        ch: 'How is this that cat car?'
      },
      {
        id: 310,
        sntc: 'Təklif nə dərəcədə maraqlıdır?',
        tr: 'How interesting is the offer?',
        ch: 'How interesting long are is this the offer?'
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
        ch: 'How much many these is the computer?'
      },
      {
        id: 313,
        sntc: 'Onların cavabı sizi qane edir?',
        tr: 'Are you satisfied with their answer?',
        ch: 'Are you satisfied with us agree their answer?'
      },
      {
        id: 314,
        sntc: 'Mənim yaddaşım pisdi',
        tr: 'My memory is bad',
        ch: 'My memory is remember good bad'
      },
      {
        id: 315,
        sntc: 'O azad deyil. O, çox məşğuldur.',
        tr: "She isn't free. She's very busy.",
        ch: "She isn't free. She's many very busy."
      },
      {
        id: 316,
        sntc: 'Bu ucuzdur',
        tr: 'It is cheap',
        ch: 'It is are cheap'
      },
      {
        id: 317,
        sntc: 'Bu cins neçəyədir?',
        tr: 'How much are these jeans?',
        ch: 'How much are these this the is jeans?'
      },
      {
        id: 318,
        sntc: 'Bu məşqlər nə üçün bu qədər çətindir?',
        tr: 'Why are these exercises so difficult?',
        ch: 'Why are these exercises exercise such so difficult?'
      },
      {
        id: 319,
        sntc: 'Mən tənbələm?',
        tr: 'Am I lazy?',
        ch: 'Am he Is I ready lazy?'
      },
      {
        id: 320,
        sntc: 'Bu təhlükəlidir?',
        tr: 'Is it dangerous?',
        ch: 'Is it difficult he dangerous?'
      }
    ],
    [{
        id: 321,
        sntc: 'Oğlan evdədir?',
        tr: 'Is the boy at home?',
        ch: 'Is the boy girl on street at home?'
      },
      {
        id: 322,
        sntc: 'Bu sadə mətndir?',
        tr: 'Is this text simple?',
        ch: 'Is this test text sentence simple?'
      },
      {
        id: 323,
        sntc: 'Niyə belə xoşbəxtsən?',
        tr: 'Why are you so happy?',
        ch: 'Why are you your such so happy?'
      },
      {
        id: 324,
        sntc: 'Orada kim var?',
        tr: 'Who is there?',
        ch: 'Who is he here here there?'
      },
      {
        id: 325,
        sntc: 'O, tənbəl oğlandır?',
        tr: 'Is he a lazy boy?',
        ch: 'Is he here an a lazy boy?'
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
        ch: 'Who is in the room? house? this'
      },
      {
        id: 328,
        sntc: 'Bu daha pisdir?',
        tr: 'Is it worse?',
        ch: 'Is it worse? better bad?'
      },
      {
        id: 329,
        sntc: 'Sən xoşbəxt insansan',
        tr: 'You are a happy person',
        ch: 'You are a an happy person people'
      },
      {
        id: 330,
        sntc: 'Bu çox bahalı şeydir',
        tr: "It's a very expensive thing",
        ch: "It's a an very expensive thing things"
      }
    ],
    [{
        id: 331,
        sntc: 'Sənin qardaşın evdədir?',
        tr: 'Is your brother at home?',
        ch: 'Is your brother at on you home?'
      },
      {
        id: 332,
        sntc: 'Sən doğrudan da yorğunsan?',
        tr: 'Are you really tired?',
        ch: 'Are you your Is very really tired?'
      },
      {
        id: 333,
        sntc: 'Bu maşın neçəyədir?',
        tr: 'How much is this car?',
        ch: 'How much is this those cars car?'
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
        sntc: 'Oğlunun neçə yaşı var?',
        tr: 'How old is his son?',
        ch: 'How old is far he his son?'
      },
      {
        id: 337,
        sntc: 'Sənin dostunun adı nədir?',
        tr: "What's your friend's name?",
        ch: "What's your friend you friend's name?"
      },
      {
        id: 338,
        sntc: 'Onlar işdədirlər',
        tr: 'They are at work',
        ch: 'They are at on school work'
      },
      {
        id: 339,
        sntc: 'Bu yaxşı bir ədəbdir',
        tr: "It's a good manner",
        ch: "It's a good many decision an manner"
      },
      {
        id: 340,
        sntc: 'Birinci yerdə kim var?',
        tr: 'Who is in the first place?',
        ch: 'Who is in the this second first place?'
      }
    ],
    [{
        id: 341,
        sntc: 'Xaricdə təhsil almağı xoşlayıram',
        tr: 'I like studying abroad',
        ch: 'I like studying live would abroad'
      },
      {
        id: 342,
        sntc: 'O əşyanın qiyməti çox deyil',
        tr: "That thing doesn't cost much",
        ch: "That thing doesn't don't many cost much"
      },
      {
        id: 343,
        sntc: 'Bu əşya çox bahalıdır',
        tr: 'This thing costs a lot',
        ch: 'This thing cost costs things a lot'
      },
      {
        id: 344,
        sntc: 'O, İngilis dili üçün daha çox vaxt tapmağa çalışır',
        tr: 'He tries to find more time for English',
        ch: 'He tries to find many try by more time for English'
      },
      {
        id: 345,
        sntc: 'Bu klinika o qədər də yaxşı deyil',
        tr: "This clinic isn't so good",
        ch: "This clinic isn't so far good"
      },
      {
        id: 346,
        sntc: 'Biz həmişə bunu vaxtında bitiririk',
        tr: 'We always finish it on time',
        ch: 'We always finish it already on at the time'
      },
      {
        id: 347,
        sntc: 'Bu dərslərin sadəliyi xoşuma gəlir',
        tr: 'I like the simplicity of these lessons',
        ch: 'I like the simplicity lesson of this by these lessons'
      },
      {
        id: 348,
        sntc: 'Bu adətən yazda olur',
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
        ch: 'Do you often go to that always the gym?'
      }
    ],
    [{
        id: 351,
        sntc: 'O, ingilis dilində oxuyur ',
        tr: 'She reads in English',
        ch: 'She reads in speak English at read'
      },
      {
        id: 352,
        sntc: 'O, onun sözlərinə əhəmiyyət vermir?',
        tr: 'Does he ignore her words?',
        ch: 'Does he ignore her words? word? he'
      },
      {
        id: 353,
        sntc: 'Mən bunu çox gözəl dərk edirəm',
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
        sntc: 'Bu dünyanın ən uzun çayıdır',
        tr: "It's the longest river in the world",
        ch: "It's the longest river in the world at this"
      },
      {
        id: 358,
        sntc: 'Sən bunu yazmaq lazımdır?',
        tr: 'Do you need to write it down?',
        ch: 'Do you need needs to write it down read?'
      },
      {
        id: 359,
        sntc: 'Mən evdəyəm',
        tr: "I'm at home",
        ch: "I'm at home work the"
      },
      {
        id: 360,
        sntc: 'Bu barədə nə düşünürsən?',
        tr: 'What do you think about it?',
        ch: 'What do you think about it? this your'
      }
    ],
    [{
        id: 361,
        sntc: 'O, İngiltərədəndir?',
        tr: 'Is he from England?',
        ch: 'Is he from England? by her'
      },
      {
        id: 362,
        sntc: 'Bu, kimi narahat edir?',
        tr: 'Who does it worry?',
        ch: 'Who does it worry? worries? this'
      },
      {
        id: 363,
        sntc: 'O mənim həmkarım deyil',
        tr: "He isn't my colleague",
        ch: "He isn't my colleague friend me We"
      },
      {
        id: 364,
        sntc: 'Bu dərslər o qədər effektlidir ki',
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
        sntc: 'İdman zalına nə qədər gedirsən?',
        tr: 'How often do you go to the gym?',
        ch: 'How often do you go to the gym? this does'
      },
      {
        id: 368,
        sntc: 'Bu həmin cümlədir',
        tr: "It's the same sentence",
        ch: "It's the same sentence words only"
      },
      {
        id: 369,
        sntc: 'Bu elə vacib görüşdür ki',
        tr: "It's such an important meeting",
        ch: "It's such an important meeting meet a"
      },
      {
        id: 370,
        sntc: 'Sənin indi dostun tənhadır?',
        tr: 'Is your friend alone now?',
        ch: 'Is your friend alone now? new? you'
      }
    ],
    [{
        id: 371,
        sntc: 'O, orada yaşayır?',
        tr: 'Does he live there?',
        ch: 'Does he live there? here? this you'
      },
      {
        id: 372,
        sntc: 'Film necədir?',
        tr: 'How is the movie?',
        ch: 'How is the movie? this far?'
      },
      {
        id: 373,
        sntc: 'O, səyahəti çox sevir',
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
        sntc: 'Adətən səhər saat 9-da işə gedirəm',
        tr: "I usually go to work at 9 o'clock in the morning",
        ch: "I usually go to work at 9 o'clock in at school the morning"
      },
      {
        id: 376,
        sntc: 'Kompüter neçəyədir?',
        tr: 'How much is the computer?',
        ch: 'How much is the this many computer?'
      },
      {
        id: 377,
        sntc: 'Hava limanı yaxındır?',
        tr: 'Is the airport near?',
        ch: 'Is the airport near? far? Are'
      },
      {
        id: 378,
        sntc: 'Sənin ərinin işi nədir?',
        tr: "What's your husband's job?",
        ch: "What's your husband's husband you job?"
      },
      {
        id: 379,
        sntc: 'O, boşanıb',
        tr: "He's divorced",
        ch: "He's divorced split They"
      },
      {
        id: 380,
        sntc: 'Cəmiyyətimiz sayəsində bu dərsləri çox sevirəm',
        tr: "I'm fond of these lessons thanks to our community",
        ch: "I'm fond of these lessons thank me thanks to our community"
      }
    ],
    [{
        id: 381,
        sntc: 'Bu məşqlər elə faydalıdır?',
        tr: 'Are these exercises so useful?',
        ch: 'Are these exercises exercise so useful? useless?'
      },
      {
        id: 382,
        sntc: 'Mənə İngilis dilində sərbəst danışmaq lazımdır',
        tr: 'I need to speak English fluently',
        ch: 'I need needs to speak English speaks He fluently'
      },
      {
        id: 383,
        sntc: 'Bu vaxt mənim üçün heç də münasib deyil',
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
        sntc: 'Bunu yazmaq istəmirəm',
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
        sntc: 'Başqa ölkələrdən olan adamlarla ünsiyyət qurmaq istərdim',
        tr: "I'd like to communicate with people from other countries",
        ch: "I'd like to communicate with person people from other another countries"
      },
      {
        id: 389,
        sntc: 'Burada çox səslidir',
        tr: "It's too loud here",
        ch: "It's too loud here there near"
      },
      {
        id: 390,
        sntc: 'Mən adətən erkən qalxıram',
        tr: 'I usually get up early',
        ch: 'I usually get up early fast of'
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
        sntc: 'Mən səyahəti xoşlayıram',
        tr: 'I like traveling',
        ch: 'I like traveling travel He'
      },
      {
        id: 394,
        sntc: 'Başqa kitab oxumaq istəyirəm',
        tr: 'I want to read another book',
        ch: 'I want to read ready other another book'
      },
      {
        id: 395,
        sntc: 'Bizə bunu demək lazımdır',
        tr: 'We need to say it',
        ch: 'We need to say tell our it'
      },
      {
        id: 396,
        sntc: 'O, adətən ingilis dilində çox tez danışır',
        tr: 'She usually speak English very fast',
        ch: 'She usually speak tell slow English very fast'
      },
      {
        id: 397,
        sntc: 'Bu problemdən danışmağı həqiqətən xoşlayıram',
        tr: 'I really like to talk about this problem',
        ch: 'I really like to talk tell of about this the problem'
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
        tr: 'This video is much longer',
        ch: 'This video videos is many much longer'
      }
    ],
    [{
        id: 401,
        sntc: 'Bu çox çətindir',
        tr: "It's too difficult",
        ch: "It's too difficult"
      },
      {
        id: 402,
        sntc: 'Mən bunu etməyi həqiqətən xoşlayıram',
        tr: 'I really like doing it',
        ch: 'I really like doing it'
      },
      {
        id: 403,
        sntc: 'Kimi dəstəkləyirsən?',
        tr: 'Who do you support?',
        ch: 'Who do you support?'
      },
      {
        id: 404,
        sntc: 'Turist kimdir?',
        tr: 'Who is a tourist?',
        ch: 'Who is a tourist?'
      },
      {
        id: 405,
        sntc: 'Bunu xoşlayırsan?',
        tr: 'Do you like it?',
        ch: 'Do you like it?'
      },
      {
        id: 406,
        sntc: 'Bu çox böyük uğurdur',
        tr: "It's a very big success",
        ch: "It's a very big success"
      },
      {
        id: 407,
        sntc: 'O, ingilis dilini öyrədir?',
        tr: 'Does she teach English?',
        ch: 'Does she teach English?'
      },
      {
        id: 408,
        sntc: 'Oyun darıxdırıcıdır?',
        tr: 'Is the game boring?',
        ch: 'Is the game boring?'
      },
      {
        id: 409,
        sntc: 'Bu böyük problemdir?',
        tr: 'Is it a big problem?',
        ch: 'Is it a big problem?'
      },
      {
        id: 410,
        sntc: 'Bacının adı nədir?',
        tr: "What's your sister's name?",
        ch: "What's your sister's name?"
      }
    ],
    [{
        id: 411,
        sntc: 'O, hansı kanallara baxır?',
        tr: 'What channels does he watch?',
        ch: 'What channels does he watch?'
      },
      {
        id: 412,
        sntc: 'Bu tələbələr parlaq nəticələr göstərirlər',
        tr: 'These students show brilliant results',
        ch: 'These students show brilliant results'
      },
      {
        id: 413,
        sntc: 'Qız çox boyludur',
        tr: 'The girl is very tall',
        ch: 'The girl is very tall'
      },
      {
        id: 414,
        sntc: 'Bacın özünü necə hiss edir?',
        tr: 'How does your sister feel?',
        ch: 'How does your sister feel?'
      },
      {
        id: 415,
        sntc: 'O, bu səhvləri düzəltməlidir',
        tr: 'She needs to correct these mistakes',
        ch: 'She needs to correct these mistakes'
      },
      {
        id: 416,
        sntc: 'Yaxşı fikirdir',
        tr: "It's a good idea",
        ch: "It's a good idea"
      },
      {
        id: 417,
        sntc: 'İngilis dilində qabaqcıl səviyyəyə malik olmaq istəyirəm',
        tr: 'I want to have an Advanced level in English',
        ch: 'I want to have an Advanced level in English'
      },
      {
        id: 418,
        sntc: 'Mən çox xoşbəxtəm',
        tr: "I'm so happy",
        ch: "I'm so happy"
      },
      {
        id: 419,
        sntc: 'Bu cüt şalvar neçəyədir?',
        tr: 'How much is this pair of trousers?',
        ch: 'How much is this pair of trousers?'
      },
      {
        id: 420,
        sntc: 'Anamız da eyni düşünür',
        tr: 'Our mother thinks the same',
        ch: 'Our mother thinks the same'
      }
    ],
    [{
        id: 421,
        sntc: 'Sən razısan?',
        tr: 'Do you agree?',
        ch: 'Do you agree?'
      },
      {
        id: 422,
        sntc: 'O, daha çoxunu istəyir',
        tr: 'He wants more',
        ch: 'He wants more'
      },
      {
        id: 423,
        sntc: 'Bu sadədir',
        tr: "It's simple",
        ch: "It's simple"
      },
      {
        id: 424,
        sntc: 'Bu necə sınaqdır?',
        tr: 'How is this test?',
        ch: 'How is this test?'
      },
      {
        id: 425,
        sntc: 'Dostum evdədir',
        tr: 'My friend is at home',
        ch: 'My friend is at home'
      },
      {
        id: 426,
        sntc: 'Burada kim var?',
        tr: "Who's here?",
        ch: "Who's here?"
      },
      {
        id: 427,
        sntc: 'İngilis dilimi təkmilləşdirmək üçün bu dərsləri öyrənirəm',
        tr: 'I learn these lessons to improve my English',
        ch: 'I learn these lessons to improve my English'
      },
      {
        id: 428,
        sntc: 'O mənə kömək edir',
        tr: 'He helps me',
        ch: 'He helps me'
      },
      {
        id: 429,
        sntc: 'O, şəhərdə deyil',
        tr: "He isn't in the city",
        ch: "He isn't in the city"
      },
      {
        id: 430,
        sntc: 'O, başqa yerdədir',
        tr: "He's in another place",
        ch: "He's in another place"
      }
    ],
    [{
        id: 431,
        sntc: 'Mən şanslıyam?',
        tr: 'Am I lucky?',
        ch: 'Am I lucky?'
      },
      {
        id: 432,
        sntc: 'Müəllimlərimiz haradadır?',
        tr: 'Where are our teachers?',
        ch: 'Where are our teachers?'
      },
      {
        id: 433,
        sntc: 'Bu sınaq çox asandır?',
        tr: 'Does that test seem very easy?',
        ch: 'Does that test seem very easy?'
      },
      {
        id: 434,
        sntc: 'Mən onun sadəliyini görürəm',
        tr: 'I see its simplicity',
        ch: 'I see its simplicity'
      },
      {
        id: 435,
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does she want to add?',
        ch: 'What does she want to add?'
      },
      {
        id: 436,
        sntc: 'Bu fikir xoşuma gəlir',
        tr: 'I like this idea',
        ch: 'I like this idea'
      },
      {
        id: 437,
        sntc: 'O, səni sevir',
        tr: 'He loves you',
        ch: 'He loves you'
      },
      {
        id: 438,
        sntc: 'Bu maşın xoşuma gəlir',
        tr: 'I like this car',
        ch: 'I like this car'
      },
      {
        id: 439,
        sntc: 'Bu dərsdən zövq alırıq',
        tr: 'We enjoy this lesson',
        ch: 'We enjoy this lesson'
      },
      {
        id: 440,
        sntc: 'Ona daha çox pul lazımdır',
        tr: 'He needs more money',
        ch: 'He needs more money'
      }
    ],
    [{
        id: 441,
        sntc: 'Bu zarafat heç də əyləncəli deyil',
        tr: "This joke isn't funny at all",
        ch: "This joke isn't funny at all"
      },
      {
        id: 442,
        sntc: 'O, həqiqətən də həyatını dəyişmək istəyir',
        tr: 'He really wants to change his life',
        ch: 'He really wants to change his life'
      },
      {
        id: 443,
        sntc: 'Bu ən yaxşı seçimdir',
        tr: "It's the best choice",
        ch: "It's the best choice"
      },
      {
        id: 444,
        sntc: 'Nə qədər səhviniz var?',
        tr: 'How many mistakes do you have?',
        ch: 'How many mistakes do you have?'
      },
      {
        id: 445,
        sntc: 'Biz ən yaxşı tələbələrik?',
        tr: 'Are we the best students?',
        ch: 'Are we the best students?'
      },
      {
        id: 446,
        sntc: 'Yaxşı maşın istəyirəm',
        tr: 'I want a good car',
        ch: 'I want a good car'
      },
      {
        id: 447,
        sntc: 'Dostumla mən baharda orada yaşayırıq',
        tr: 'My friend and I live there in spring',
        ch: 'My friend and I live there in spring'
      },
      {
        id: 448,
        sntc: 'O, hamamda deyil',
        tr: "He isn't in the bathroom",
        ch: "He isn't in the bathroom"
      },
      {
        id: 449,
        sntc: 'Bu yadımdadır',
        tr: 'I remember it',
        ch: 'I remember it'
      },
      {
        id: 450,
        sntc: 'Bu şəhəri çox bəyənirəm',
        tr: 'I like this city a lot',
        ch: 'I like this city a lot'
      }
    ],
    [{
        id: 451,
        sntc: 'Anan ona bütün həqiqəti söyləmək istəyir?',
        tr: 'Does your mother want to tell him all the truth?',
        ch: 'Does your mother want to tell him all the truth?'
      },
      {
        id: 452,
        sntc: 'O ölkəni çox bəyənirəm',
        tr: 'I like that country a lot',
        ch: 'I like that country a lot'
      },
      {
        id: 453,
        sntc: 'Zooparka neçə dəfə gedirsən?',
        tr: 'How often do you go to the zoo?',
        ch: 'How often do you go to the zoo?'
      },
      {
        id: 454,
        sntc: 'O, tez-tez parka gedir',
        tr: 'She often goes to the park',
        ch: 'She often goes to the park'
      },
      {
        id: 455,
        sntc: 'O hazır deyil',
        tr: "He isn't ready",
        ch: "He isn't ready"
      },
      {
        id: 456,
        sntc: 'O qadınlar müəllimdir',
        tr: 'Those women are teachers',
        ch: 'Those women are teachers'
      },
      {
        id: 457,
        sntc: 'Bu çox bahalıdır',
        tr: "It's too expensive",
        ch: "It's too expensive"
      },
      {
        id: 458,
        sntc: 'Kitabxanadasınız?',
        tr: 'Are you in the library?',
        ch: 'Are you in the library?'
      },
      {
        id: 459,
        sntc: 'Bu səhvləri kim görür?',
        tr: 'Who sees these mistakes?',
        ch: 'Who sees these mistakes?'
      },
      {
        id: 460,
        sntc: 'Bu izah aydındır',
        tr: 'This explanation is clear',
        ch: 'This explanation is clear'
      }
    ],
    [{
        id: 461,
        sntc: 'O, bütün bu qaydaları xatırlayır?',
        tr: 'Does he remember all these rules?',
        ch: 'Does he remember all these rules?'
      },
      {
        id: 462,
        sntc: 'Biz onu xatırlayırıq',
        tr: 'We remember it',
        ch: 'We remember it'
      },
      {
        id: 463,
        sntc: 'O, belə düşünür',
        tr: 'He thinks so',
        ch: 'He thinks so'
      },
      {
        id: 464,
        sntc: 'Bu dərsləri öyrənməyi həqiqətən xoşlayıram',
        tr: 'I really like learning these lessons',
        ch: 'I really like learning these lessons'
      },
      {
        id: 465,
        sntc: 'O, bunu xatırlayır',
        tr: 'She remembers it',
        ch: 'She remembers it'
      },
      {
        id: 466,
        sntc: 'Ən yaxın dostunun adı nədir?',
        tr: "What's your best friend's name?",
        ch: "What's your best friend's name?"
      },
      {
        id: 467,
        sntc: 'Mənim səviyyəm qabaqcıldır',
        tr: 'My level is Advanced',
        ch: 'My level is Advanced'
      },
      {
        id: 468,
        sntc: 'Bunu etməkdən zövq alıram',
        tr: 'I enjoy doing it',
        ch: 'I enjoy doing it'
      },
      {
        id: 469,
        sntc: 'İkinci yerdə kimdir?',
        tr: 'Who is in the second place?',
        ch: 'Who is in the second place?'
      },
      {
        id: 470,
        sntc: 'O, tətildədir',
        tr: "She's on holiday",
        ch: "She's on holiday"
      }
    ],
    [{
        id: 471,
        sntc: 'Mən bu sahənin mütəxəssisi deyiləm',
        tr: "I'm not a specialist in this area",
        ch: "I'm not a specialist in this area"
      },
      {
        id: 472,
        sntc: 'O kitab daha çox maraqlıdır',
        tr: 'That book is much more interesting',
        ch: 'That book is much more interesting'
      },
      {
        id: 473,
        sntc: 'Onlar ayrı yaşayırlar?',
        tr: 'Do they live separately?',
        ch: 'Do they live separately?'
      },
      {
        id: 474,
        sntc: 'O, səyahəti həqiqətən də xoşlayır',
        tr: 'He really likes travelling',
        ch: 'He really likes travelling'
      },
      {
        id: 475,
        sntc: 'Onlar pessimist deyillər',
        tr: "They aren't pessimistic",
        ch: "They aren't pessimistic"
      },
      {
        id: 476,
        sntc: 'Adətən kimə zəng edirsən?',
        tr: 'Who do you usually call?',
        ch: 'Who do you usually call?'
      },
      {
        id: 477,
        sntc: 'Xəbər qəribədir',
        tr: 'The news is strange',
        ch: 'The news is strange'
      },
      {
        id: 478,
        sntc: 'Bəzi insanlar belə deyir',
        tr: 'Some people say so',
        ch: 'Some people say so'
      },
      {
        id: 479,
        sntc: 'Nə etmək istəyirsən?',
        tr: 'What do you want to do?',
        ch: 'What do you want to do?'
      },
      {
        id: 480,
        sntc: 'Yaddaşımı daha çox məşq etmək lazımdır',
        tr: 'I need to train my memory more',
        ch: 'I need to train my memory more'
      }
    ],
    [{
        id: 481,
        sntc: 'Çox maraqlı fikirdir',
        tr: "It's a very interesting idea",
        ch: "It's a very interesting idea"
      },
      {
        id: 482,
        sntc: 'Bu, vacib görünür?',
        tr: 'Does this thing seem important?',
        ch: 'Does this thing seem important?'
      },
      {
        id: 483,
        sntc: 'Bir-birinizi tanıyırsınız?',
        tr: 'Do you know each other?',
        ch: 'Do you know each other?'
      },
      {
        id: 484,
        sntc: 'Mənim bir bacım var',
        tr: 'I have a sister',
        ch: 'I have a sister'
      },
      {
        id: 485,
        sntc: 'Bilirsiniz ki, ingilis dilini addım-addım öyrənirik',
        tr: 'You know that we learn English step by step',
        ch: 'You know that we learn English step by step'
      },
      {
        id: 486,
        sntc: 'Bu çox yaxşıdır',
        tr: "It's so good",
        ch: "It's so good"
      },
      {
        id: 487,
        sntc: 'Fikirləri çox maraqlı görünür',
        tr: 'Their ideas seem very interesting',
        ch: 'Their ideas seem very interesting'
      },
      {
        id: 488,
        sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
        tr: 'Do all the students know the meaning of this expression?',
        ch: 'Do all the students know the meaning of this expression?'
      },
      {
        id: 489,
        sntc: 'Sizi nə maraqlandırır?',
        tr: 'What interests you?',
        ch: 'What interests you?'
      },
      {
        id: 490,
        sntc: 'Nə vaxt boş vaxtın var?',
        tr: 'When do you have free time?',
        ch: 'When do you have free time?'
      }
    ],
    [{
        id: 491,
        sntc: 'O, bu evdə yaşayır',
        tr: 'He lives in this house',
        ch: 'He lives in this house'
      },
      {
        id: 492,
        sntc: 'Bu dərs darıxdırıcı görünür?',
        tr: 'Does that lesson seem boring?',
        ch: 'Does that lesson seem boring?'
      },
      {
        id: 493,
        sntc: 'O çox boyludur',
        tr: "He's so tall",
        ch: "He's so tall"
      },
      {
        id: 494,
        sntc: 'Dostunun on doqquz yaşı var?',
        tr: 'Is your friend nineteen?',
        ch: 'Is your friend nineteen?'
      },
      {
        id: 495,
        sntc: 'Mənə bunu gələn ilə qədər etmək lazımdır',
        tr: 'I need to do it by next year',
        ch: 'I need to do it by next year'
      },
      {
        id: 496,
        sntc: 'Bu nə qədər çətindir?',
        tr: 'How difficult is it?',
        ch: 'How difficult is it?'
      },
      {
        id: 497,
        sntc: 'Müdirim bütün sənədləri oxuyur',
        tr: 'My boss reads all the documents',
        ch: 'My boss reads all the documents'
      },
      {
        id: 498,
        sntc: 'Müdiriniz niyə bunu tənqid edir?',
        tr: 'Why does your boss criticize it?',
        ch: 'Why does your boss criticize it?'
      },
      {
        id: 499,
        sntc: 'Sən birinci yerdə deyilsən. Sən ikinci yerdəsən',
        tr: "You aren't in the first place. You're in the second place",
        ch: "You aren't in the first place. You're in the second place"
      },
      {
        id: 500,
        sntc: 'Bu şeylər çox vacibdir',
        tr: 'These things are very important',
        ch: 'These things are very important'
      }
    ],
    [{
        id: 501,
        sntc: 'Biz pulu qənayət edəcik',
        tr: "We'll save money",
        ch: "We'll save money"
      },
      {
        id: 502,
        sntc: 'Nəticəniz sizi qane edəcək',
        tr: "You'll be satisfied with your result",
        ch: "You'll be satisfied with your result"
      },
      {
        id: 503,
        sntc: 'O bunu mənə izah edəcək',
        tr: "He'll explain it to me",
        ch: "He'll explain it to me"
      },
      {
        id: 504,
        sntc: 'Bu gec-tez olacaq',
        tr: "It'll happen sooner or later",
        ch: "It'll happen sooner or later"
      },
      {
        id: 505,
        sntc: 'Onların seçimi olacaq',
        tr: "They'll have a choice",
        ch: "They'll have a choice"
      },
      {
        id: 506,
        sntc: 'O, onunla evlənəcək',
        tr: "He'll marry her",
        ch: "He'll marry her"
      },
      {
        id: 507,
        sntc: 'Mən bunu təmir edəcəm',
        tr: "I'll repair it",
        ch: "I'll repair it"
      },
      {
        id: 508,
        sntc: 'O, sənin məsləhətinə əməl edəcək',
        tr: "She'll follow your advice",
        ch: "She'll follow your advice"
      },
      {
        id: 509,
        sntc: 'Bu səni şoka salacaq',
        tr: "It'll shock you",
        ch: "It'll shock you"
      },
      {
        id: 510,
        sntc: 'Bu sizi çox təəccübləndirəcək',
        tr: "It'll surprise you greatly",
        ch: "It'll surprise you greatly"
      }
    ],
    [{
        id: 511,
        sntc: 'Bu tədbirlər satışlarımızı stimullaşdıracaq',
        tr: 'These measures will stimulate our sales',
        ch: 'These measures will stimulate our sales'
      },
      {
        id: 512,
        sntc: 'Həyat onu cəzalandıracaq',
        tr: 'Life will punish him',
        ch: 'Life will punish him'
      },
      {
        id: 513,
        sntc: 'Dostum və mən ingilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English',
        ch: 'My friend and I will devote more free time to English'
      },
      {
        id: 514,
        sntc: 'Şagirdlər tez-tez bu sözləri səhv salır',
        tr: 'Students often confuse these words',
        ch: 'Students often confuse these words'
      },
      {
        id: 515,
        sntc: 'Bu sözlər fərqli məna daşıyırlar',
        tr: 'These words have a different meaning',
        ch: 'These words have a different meaning'
      },
      {
        id: 516,
        sntc: 'Bu bilik kifayət edəcək',
        tr: 'This knowledge will be more than enough',
        ch: 'This knowledge will be more than enough'
      },
      {
        id: 517,
        sntc: 'Onun qardaşı peşman olacaq',
        tr: 'His brother will regret it',
        ch: 'His brother will regret it'
      },
      {
        id: 518,
        sntc: 'Həyat ona dərs verəcək',
        tr: 'Life will teach him a lesson',
        ch: 'Life will teach him a lesson'
      },
      {
        id: 519,
        sntc: 'Onun qardaşı davranışına görə üzr istəyəcək',
        tr: 'His brother will apologize for his behaviour',
        ch: 'His brother will apologize for his behaviour'
      },
      {
        id: 520,
        sntc: 'Əminəm ki, oğlanlar özlərini daha yaxşı aparacaqlar',
        tr: "I'm sure the boys will behave better",
        ch: "I'm sure the boys will behave better"
      }
    ],
    [{
        id: 521,
        sntc: 'O, bu faktı inkar etməyəcək',
        tr: "She won't deny this fact",
        ch: "She won't deny this fact"
      },
      {
        id: 522,
        sntc: 'Bu kifayət etməyəcək',
        tr: "It won't be enough",
        ch: "It won't be enough"
      },
      {
        id: 523,
        sntc: 'Bu müsabiqədə iştirak etməyəcəm',
        tr: "I won't take part in this contest",
        ch: "I won't take part in this contest"
      },
      {
        id: 524,
        sntc: 'Onlar artıq bir yerdə olmayacaqlar',
        tr: "They won't be together any longer",
        ch: "They won't be together any longer"
      },
      {
        id: 525,
        sntc: 'Bu ən yaxşı seçim olmayacaq',
        tr: "It won't be the best choice",
        ch: "It won't be the best choice"
      },
      {
        id: 526,
        sntc: 'O, bütün pulunu sərf etməyəcək',
        tr: "He won't invest all his money",
        ch: "He won't invest all his money"
      },
      {
        id: 527,
        sntc: 'O, buna reaksiya verməyəcək',
        tr: "She won't react to it",
        ch: "She won't react to it"
      },
      {
        id: 528,
        sntc: 'Bu, qanuni olmayacaq',
        tr: "It won't be legal",
        ch: "It won't be legal"
      },
      {
        id: 529,
        sntc: 'Mən onun sözünü kəsmərəm',
        tr: 'I won’t interrupt him',
        ch: 'I won’t interrupt him'
      },
      {
        id: 530,
        sntc: 'Sən buna təsir etməyəcəksən',
        tr: "You won't influence it",
        ch: "You won't influence it"
      }
    ],
    [{
        id: 531,
        sntc: 'Bu yanaşma kifayət qədər yenilikçi olmayacaq',
        tr: "This approach won't be innovative enough",
        ch: "This approach won't be innovative enough"
      },
      {
        id: 532,
        sntc: 'Bu addım kifayət qədər radikal olmayacaq',
        tr: "This step won't be radical enough",
        ch: "This step won't be radical enough"
      },
      {
        id: 533,
        sntc: 'O dərslər kifayət qədər yaxşı deyil',
        tr: "Those lessons aren't good enough",
        ch: "Those lessons aren't good enough"
      },
      {
        id: 534,
        sntc: 'Mənim valideynlərim buna təkid etməyəcəklər',
        tr: "My parents won't be insist on it",
        ch: "My parents won't be insist on it"
      },
      {
        id: 535,
        sntc: 'Gün günəşli olmayacaq',
        tr: "The day won't be sunny",
        ch: "The day won't be sunny"
      },
      {
        id: 536,
        sntc: 'O, belə tez hər şeyi xatırlamayacaq',
        tr: "He won't remember everything so quickly",
        ch: "He won't remember everything so quickly"
      },
      {
        id: 537,
        sntc: 'Qardaşımla mən bunu artıq sifariş verməyəcik',
        tr: "My brother and I won't order it anymore",
        ch: "My brother and I won't order it anymore"
      },
      {
        id: 538,
        sntc: 'Bu, yeganə doğru cavab olmayacaq',
        tr: "It won't be the only right answer",
        ch: "It won't be the only right answer"
      },
      {
        id: 539,
        sntc: 'Düşünürəm ki, bu musiqiçi populyar olmayacaq',
        tr: "I think this musician won't become popular",
        ch: "I think this musician won't become popular"
      },
      {
        id: 540,
        sntc: 'Bu gün kim yoxdur?',
        tr: 'Who is absent today?',
        ch: 'Who is absent today?'
      }
    ],
    [{
        id: 541,
        sntc: 'Biz ingilis dilində düzgün danışacağıq?',
        tr: 'Will we speak English correctly?',
        ch: 'Will we speak English correctly?'
      },
      {
        id: 542,
        sntc: 'Sabah azad olacaqsan?',
        tr: 'Will you be free tomorrow?',
        ch: 'Will you be free tomorrow?'
      },
      {
        id: 543,
        sntc: 'Bu dərs nə dərəcədə effektivdir?',
        tr: 'How effective is the lesson?',
        ch: 'How effective is the lesson?'
      },
      {
        id: 544,
        sntc: 'Onlar gələn həftə məşğul olacaqlar?',
        tr: 'Will they be busy next week?',
        ch: 'Will they be busy next week?'
      },
      {
        id: 545,
        sntc: 'O, həmin yerdə olacaq?',
        tr: 'Will he be in the same place?',
        ch: 'Will he be in the same place?'
      },
      {
        id: 546,
        sntc: 'O, çox gözəldir',
        tr: "She's very beautiful",
        ch: "She's very beautiful"
      },
      {
        id: 547,
        sntc: 'Bunu axşam bişirəcəksən?',
        tr: 'Will you cook it in the evening?',
        ch: 'Will you cook it in the evening?'
      },
      {
        id: 548,
        sntc: 'Birigün onu görəcəksən?',
        tr: 'Will you see him the day after tomorrow?',
        ch: 'Will you see him the day after tomorrow?'
      },
      {
        id: 549,
        sntc: 'Onun üçün darıxacaqsan?',
        tr: 'Will you miss her?',
        ch: 'Will you miss her?'
      },
      {
        id: 550,
        sntc: 'Məqalə həqiqətən çox maraqlıdır?',
        tr: 'Is the article really so interesting?',
        ch: 'Is the article really so interesting?'
      }
    ],
    [{
        id: 551,
        sntc: 'İngilis dilində düzgün və avtomatik danışacam?',
        tr: 'Will I speak English correctly and automatically?',
        ch: 'Will I speak English correctly and automatically?'
      },
      {
        id: 552,
        sntc: 'Bu, həftənin əvvəlində mümkün olacaq?',
        tr: 'Will it be possible at the beginning of this week?',
        ch: 'Will it be possible at the beginning of this week?'
      },
      {
        id: 553,
        sntc: 'Bu, mənim cibimdədir',
        tr: "It's in my pocket",
        ch: "It's in my pocket"
      },
      {
        id: 554,
        sntc: 'Bu, iki saatdan çox davam edəcək?',
        tr: 'Will it last for more than two hours?',
        ch: 'Will it last for more than two hours?'
      },
      {
        id: 555,
        sntc: 'Birigün onu görəcəksən?',
        tr: 'Will you see him the day after tomorrow?',
        ch: 'Will you see him the day after tomorrow?'
      },
      {
        id: 556,
        sntc: 'O, həmin yerdə olacaq?',
        tr: 'Will she be in the same place?',
        ch: 'Will she be in the same place?'
      },
      {
        id: 557,
        sntc: 'Niyə bu qədər kədərlisən?',
        tr: 'Why are you so sad?',
        ch: 'Why are you so sad?'
      },
      {
        id: 558,
        sntc: 'Ad gününü qeyd edəcəksən?',
        tr: 'Will you celebrate your birthday?',
        ch: 'Will you celebrate your birthday?'
      },
      {
        id: 559,
        sntc: 'Onun üçün darıxacaqsan?',
        tr: 'Will you miss her?',
        ch: 'Will you miss her?'
      },
      {
        id: 560,
        sntc: 'Gələn həftə sərbəst olacaqsan?',
        tr: 'Will you be free next week?',
        ch: 'Will you be free next week?'
      }
    ],
    [{
        id: 561,
        sntc: 'Buna nə qədər pul xərcləyəcəksən?',
        tr: 'How much money will you spend on it?',
        ch: 'How much money will you spend on it?'
      },
      {
        id: 562,
        sntc: 'O yerə necə çatacaqsan?',
        tr: 'How will you get to that place?',
        ch: 'How will you get to that place?'
      },
      {
        id: 563,
        sntc: 'Mən bu əşyanı əldə edə bilərəm',
        tr: "I'll manage to get this thing",
        ch: "I'll manage to get this thing"
      },
      {
        id: 564,
        sntc: 'Hansı tövsiyəyə əməl edəcəksən?',
        tr: 'Which recommendation will you follow?',
        ch: 'Which recommendation will you follow?'
      },
      {
        id: 565,
        sntc: 'Orada müntəzəm olaraq nə qədər məşq edəcəksən?',
        tr: 'How regularly will you train there?',
        ch: 'How regularly will you train there?'
      },
      {
        id: 566,
        sntc: 'Kimin velosipedini götürəcəksən?',
        tr: 'Whose bike will you take?',
        ch: 'Whose bike will you take?'
      },
      {
        id: 567,
        sntc: 'Bu problemi həll edə biləcəyəm?',
        tr: 'Will I be able to solve this problem?',
        ch: 'Will I be able to solve this problem?'
      },
      {
        id: 568,
        sntc: 'Bu problemi həll edə biləcəm',
        tr: "I'll be able to solve this problem",
        ch: "I'll be able to solve this problem"
      },
      {
        id: 569,
        sntc: 'Bəs onu harada istehsal edəcəklər?',
        tr: 'Where will they produce it?',
        ch: 'Where will they produce it?'
      },
      {
        id: 570,
        sntc: 'Buna kim baxacaq?',
        tr: 'Who will watch it?',
        ch: 'Who will watch it?'
      }
    ],
    [{
        id: 571,
        sntc: 'İngilis dilini öyrənməyə böyük zövqlə davam edəcəyəm',
        tr: "I'll continue learn English with great pleasure",
        ch: "I'll continue learn English with great pleasure"
      },
      {
        id: 572,
        sntc: 'Niyə ora uçacaqsan?',
        tr: 'Why will you fly there?',
        ch: 'Why will you fly there?'
      },
      {
        id: 573,
        sntc: 'Konfrans harada baş tutacaq?',
        tr: 'Where will the conference take place?',
        ch: 'Where will the conference take place?'
      },
      {
        id: 574,
        sntc: 'Mən burada işləməyə başlayacam',
        tr: "I'll start working here",
        ch: "I'll start working here"
      },
      {
        id: 575,
        sntc: 'Ərinin onlara nə qədər borcu olacaq?',
        tr: 'How much money will her husband owe them?',
        ch: 'How much money will her husband owe them?'
      },
      {
        id: 576,
        sntc: 'Nə qədər olmayacaqsan?',
        tr: 'How long will you be away?',
        ch: 'How long will you be away?'
      },
      {
        id: 577,
        sntc: 'Bu hadisə harada baş verəcək?',
        tr: 'Where will this event take place?',
        ch: 'Where will this event take place?'
      },
      {
        id: 578,
        sntc: 'Dostların müntəzəm olaraq hansı kanallara baxacaqlar?',
        tr: 'What channels will your friends watch on a regular basis?',
        ch: 'What channels will your friends watch on a regular basis?'
      },
      {
        id: 579,
        sntc: 'Dostun bu problemi həll etməyi necə bacaracaq?',
        tr: 'How will your friend manage to solve this problem?',
        ch: 'How will your friend manage to solve this problem?'
      },
      {
        id: 580,
        sntc: 'Ümid edirəm ki, müəllimimiz bundan sonra da bizə dərs deyəcək',
        tr: 'I hope our teacher will continue teaching us',
        ch: 'I hope our teacher will continue teaching us'
      }
    ],
    [{
        id: 581,
        sntc: 'Nə baş verəcək?',
        tr: 'What will happen?',
        ch: 'What will happen?'
      },
      {
        id: 582,
        sntc: 'İşçilər bu cür hesabatları nə qədər davamlı edəcəklər?',
        tr: 'How regularly will the workers make this kind of reports?',
        ch: 'How regularly will the workers make this kind of reports?'
      },
      {
        id: 583,
        sntc: 'Bunu ingilis dilinə tərcümə etmək lazım olacaq',
        tr: "It'll be necessary to translate it into English",
        ch: "It'll be necessary to translate it into English"
      },
      {
        id: 584,
        sntc: 'Mən çalışacağam bunu deməyim',
        tr: 'I’ll try not to say it',
        ch: 'I’ll try not to say it'
      },
      {
        id: 585,
        sntc: 'Bu asan olacaq',
        tr: "It'll be easy",
        ch: "It'll be easy"
      },
      {
        id: 586,
        sntc: 'Biz bunu edə bilərdik',
        tr: 'We could do it',
        ch: 'We could do it'
      },
      {
        id: 587,
        sntc: 'İngilis dilini niyə burada öyrənəcəksən?',
        tr: 'Why will you learn English here?',
        ch: 'Why will you learn English here?'
      },
      {
        id: 588,
        sntc: 'Uşaqlar başqa yerə gedəcək',
        tr: 'The children will go to another place',
        ch: 'The children will go to another place'
      },
      {
        id: 589,
        sntc: 'İngilis dilini addım-addım öyrənəcəm',
        tr: "I'll learn English step by step",
        ch: "I'll learn English step by step"
      },
      {
        id: 590,
        sntc: 'Bunu daha yaxşı etməyi bacararam',
        tr: "I'll manage to do it better",
        ch: "I'll manage to do it better"
      }
    ],
    [{
        id: 591,
        sntc: 'İngiliscə heç bir səhv etmədən danışacam',
        tr: "I'll speak English without any mistakes at all",
        ch: "I'll speak English without any mistakes at all"
      },
      {
        id: 592,
        sntc: 'Daha çox boş vaxtım olmaq üçün bunu edəcəyəm',
        tr: 'I’ll do it to have more free time',
        ch: 'I’ll do it to have more free time'
      },
      {
        id: 593,
        sntc: 'O, bu pulu mənə borclu qalacaq',
        tr: 'He’ll owe me this money',
        ch: 'He’ll owe me this money'
      },
      {
        id: 594,
        sntc: 'Yoldaşı onun üçün darıxacaq?',
        tr: 'Will his wife miss him?',
        ch: 'Will his wife miss him?'
      },
      {
        id: 595,
        sntc: 'Tezliklə yorulacaqsan',
        tr: 'You’ll get tired soon',
        ch: 'You’ll get tired soon'
      },
      {
        id: 596,
        sntc: 'Daha çox pul qazanmaq üçün bunu edəcəm',
        tr: 'I’ll do it to earn more money',
        ch: 'I’ll do it to earn more money'
      },
      {
        id: 597,
        sntc: 'Niyə başqa yerə uçacaqsan?',
        tr: 'Why will you fly to another place?',
        ch: 'Why will you fly to another place?'
      },
      {
        id: 598,
        sntc: 'Şagird nəticəni necə yaxşılaşdıra biləcək?',
        tr: 'How will the student be able to improve the result?',
        ch: 'How will the student be able to improve the result?'
      },
      {
        id: 599,
        sntc: 'Bu restorana gedəcəksiniz?',
        tr: 'Will you go to this restaurant?',
        ch: 'Will you go to this restaurant?'
      },
      {
        id: 600,
        sntc: 'Niyə iş yoldaşlarınız bununla maraqlanacaq?',
        tr: 'Why will your colleagues be interested in it?',
        ch: 'Why will your colleagues be interested in it?'
      }
    ],
    [{
        id: 601,
        sntc: 'Onlar nə edə biləcəklər?',
        tr: 'What will they be able to do?',
        ch: 'What will they be able to do?'
      },
      {
        id: 602,
        sntc: 'Mən bunu etməkdən imtina edəcəm',
        tr: 'I’ll refuse to do it',
        ch: 'I’ll refuse to do it'
      },
      {
        id: 603,
        sntc: 'Bu, mütləq o demək deyil ki, o, bir ilə ingilis dilini öyrənəcək',
        tr: "It doesn't necessarily mean that he’ll learn English in a year",
        ch: "It doesn't necessarily mean that he’ll learn English in a year"
      },
      {
        id: 604,
        sntc: 'Nə vaxt azad olacaqsan?',
        tr: 'When will you be free?',
        ch: 'When will you be free?'
      },
      {
        id: 605,
        sntc: 'Fikirləri çox maraqlı görünür',
        tr: 'Their ideas seem very interesting',
        ch: 'Their ideas seem very interesting'
      },
      {
        id: 606,
        sntc: 'Bu, harada istehsal olunacaq?',
        tr: 'Where will they produce it?',
        ch: 'Where will they produce it?'
      },
      {
        id: 607,
        sntc: 'Daha ora getməyəcəm',
        tr: "I won't go there anymore",
        ch: "I won't go there anymore"
      },
      {
        id: 608,
        sntc: 'Düşünürəm ki, təkəri yenidən icad etməyə ehtiyacımız yoxdur',
        tr: "I think we don't need reinvent the wheel",
        ch: "I think we don't need reinvent the wheel"
      },
      {
        id: 609,
        sntc: 'Bu tədbirlər satışlarımızı stimullaşdıracaq',
        tr: 'These measures will stimulate our sales',
        ch: 'These measures will stimulate our sales'
      },
      {
        id: 610,
        sntc: 'O, bu faktı inkar etməyəcək',
        tr: "She won't deny this fact",
        ch: "She won't deny this fact"
      }
    ],
    [{
        id: 611,
        sntc: 'Biz bundan şikayət etmərik',
        tr: "We won't complain about it",
        ch: "We won't complain about it"
      },
      {
        id: 612,
        sntc: 'Bu, yeganə doğru cavab olmayacaq',
        tr: "It won't be the only right answer",
        ch: "It won't be the only right answer"
      },
      {
        id: 613,
        sntc: 'Bilirəm ki, onun maaşı az olacaq',
        tr: 'I know he’ll have a low salary',
        ch: 'I know he’ll have a low salary'
      },
      {
        id: 614,
        sntc: 'Bu şeyi ona deməyi unutmamağa çalışacağam',
        tr: 'I’ll try not to forget to tell him this thing',
        ch: 'I’ll try not to forget to tell him this thing'
      },
      {
        id: 615,
        sntc: 'Onlar gələn həftə məşğul olacaqlar?',
        tr: 'Will they be busy next week?',
        ch: 'Will they be busy next week?'
      },
      {
        id: 616,
        sntc: 'Əməkdaşlar bu təşəbbüsü dəstəkləməyəcəklər',
        tr: "The employees won't support this initiative",
        ch: "The employees won't support this initiative"
      },
      {
        id: 617,
        sntc: 'Bu, mütəmadi olaraq baş verəcək',
        tr: "It'll happen on a regular basis",
        ch: "It'll happen on a regular basis"
      },
      {
        id: 618,
        sntc: 'Bu imtahana hazırlığı tezliklə bitirəcəyəm',
        tr: 'I’ll finish preparing for this exam soon',
        ch: 'I’ll finish preparing for this exam soon'
      },
      {
        id: 619,
        sntc: 'BUnu xatırlatmamağa çalışacağam',
        tr: 'I’ll try not to mention it',
        ch: 'I’ll try not to mention it'
      },
      {
        id: 620,
        sntc: 'Bu münaqişəni kim həll edəcək?',
        tr: 'Who will resolve this conflict?',
        ch: 'Who will resolve this conflict?'
      }
    ],
    [{
        id: 621,
        sntc: 'Onlar sizinlə razılaşmayacaqlar',
        tr: 'They’ll disagree with you',
        ch: 'They’ll disagree with you'
      },
      {
        id: 622,
        sntc: 'Onun boş vaxtı olacaq',
        tr: 'He’ll have free time',
        ch: 'He’ll have free time'
      },
      {
        id: 623,
        sntc: 'Lüğətdə bu sözə nə vaxt baxarsınız?',
        tr: 'When will you look up this word in a dictionary?',
        ch: 'When will you look up this word in a dictionary?'
      },
      {
        id: 624,
        sntc: 'Bu pul kifayət edərmi?',
        tr: 'Will this money be enough?',
        ch: 'Will this money be enough?'
      },
      {
        id: 625,
        sntc: 'Bunu yenə deyərəm',
        tr: 'I’ll say it again',
        ch: 'I’ll say it again'
      },
      {
        id: 626,
        sntc: 'Bunu sonda görəcəksən',
        tr: 'You’ll see it in the end',
        ch: 'You’ll see it in the end'
      },
      {
        id: 627,
        sntc: 'İngilis dilini təhsilli yerli natiq kimi biləcəyəm?',
        tr: 'Will I know English like an educated native speaker?',
        ch: 'Will I know English like an educated native speaker?'
      },
      {
        id: 628,
        sntc: 'Digər insanlar indi sizə kömək etməyəcək',
        tr: "Other people won't help you now",
        ch: "Other people won't help you now"
      },
      {
        id: 629,
        sntc: 'Bizə bəzi radikal tədbirlər lazım olacaq',
        tr: 'We’ll need some radical measures',
        ch: 'We’ll need some radical measures'
      },
      {
        id: 630,
        sntc: 'Kim tezliklə evdən çıxacaq?',
        tr: 'Who will leave home soon?',
        ch: 'Who will leave home soon?'
      }
    ],
    [{
        id: 631,
        sntc: 'Bu, təxminən iki saat davam edəcək?',
        tr: 'Will it last for about two hours?',
        ch: 'Will it last for about two hours?'
      },
      {
        id: 632,
        sntc: 'Bu, əsas layihəmiz olacaq',
        tr: "It'll be our main project",
        ch: "It'll be our main project"
      },
      {
        id: 633,
        sntc: 'Tələffüzüm daha da yaxşı olacaq',
        tr: 'My pronunciation will become much better',
        ch: 'My pronunciation will become much better'
      },
      {
        id: 634,
        sntc: 'O, bunu mənə izah edəcək',
        tr: 'He’ll explain it to me',
        ch: 'He’ll explain it to me'
      },
      {
        id: 635,
        sntc: 'Onlar bu yerə necə çatacaqlar?',
        tr: 'How will they get to this place?',
        ch: 'How will they get to this place?'
      },
      {
        id: 636,
        sntc: 'Bu onun nöqteyi-nəzərini dəyişməyəcək',
        tr: "It won't change his point of view",
        ch: "It won't change his point of view"
      },
      {
        id: 637,
        sntc: 'Bu problemi həll edə biləcəm',
        tr: 'I’ll be able to solve this problem',
        ch: 'I’ll be able to solve this problem'
      },
      {
        id: 638,
        sntc: 'Tələbələr buna gülməyəcəklər',
        tr: 'The students won’t laugh at it',
        ch: 'The students won’t laugh at it'
      },
      {
        id: 639,
        sntc: 'Valideynlərim buna təkid etməyəcəklər',
        tr: "My parents won't insist on it",
        ch: "My parents won't insist on it"
      },
      {
        id: 640,
        sntc: 'Bunu hamı bilir',
        tr: 'Everyone knows it',
        ch: 'Everyone knows it'
      }
    ],
    [{
        id: 641,
        sntc: 'Bu e-maili ona göndərməyi unutmamağa çalışacağam',
        tr: 'I’ll try not to forget to send him this e-mail',
        ch: 'I’ll try not to forget to send him this e-mail'
      },
      {
        id: 642,
        sntc: 'Bu qanuni olmayacaq',
        tr: "It won't be legal",
        ch: "It won't be legal"
      },
      {
        id: 643,
        sntc: 'Sabah azad olacaqsan?',
        tr: 'Will you be free tomorrow?',
        ch: 'Will you be free tomorrow?'
      },
      {
        id: 644,
        sntc: 'Belə qəribə cavabın səbəbi nədir?',
        tr: "What's the reason for such a strange answer?",
        ch: "What's the reason for such a strange answer?"
      },
      {
        id: 645,
        sntc: 'Onu nə vaxt görəcəksən?',
        tr: 'What time will you see him?',
        ch: 'What time will you see him?'
      },
      {
        id: 646,
        sntc: 'Görüşün başlanmasında bunu görəcəksən',
        tr: 'You’ll see it at the beginning of the meeting',
        ch: 'You’ll see it at the beginning of the meeting'
      },
      {
        id: 647,
        sntc: 'O, bu dərsləri bəyənəcək',
        tr: 'He’ll like these lessons',
        ch: 'He’ll like these lessons'
      },
      {
        id: 648,
        sntc: 'İngilis dilini çox intensiv öyrənməyə başlayacam',
        tr: 'I’ll start learning English very intensively',
        ch: 'I’ll start learning English very intensively'
      },
      {
        id: 649,
        sntc: 'Bu nə vaxt baş verəcək?',
        tr: 'What time will this thing happen?',
        ch: 'What time will this thing happen?'
      },
      {
        id: 650,
        sntc: 'Bu, onların bu problemə münasibətini dəyişəcək?',
        tr: 'Will it change their attitude to this problem?',
        ch: 'Will it change their attitude to this problem?'
      }
    ],
    [{
        id: 651,
        sntc: 'Bu nümunələri daxil etdim',
        tr: 'I included these examples',
        ch: 'I included these examples'
      },
      {
        id: 652,
        sntc: 'Sən mənə çox kömək etdin',
        tr: 'You helped me a lot',
        ch: 'You helped me a lot'
      },
      {
        id: 653,
        sntc: 'O, o işi əldə etməyə çalışsa da, heç bir uğur qazana bilmədi',
        tr: 'He tried to get that job but without success',
        ch: 'He tried to get that job but without success'
      },
      {
        id: 654,
        sntc: 'Onlar ona baxdılar',
        tr: 'They looked at her',
        ch: 'They looked at her'
      },
      {
        id: 655,
        sntc: 'O, döndü və ona gülümsədi',
        tr: 'He turned and smiled at her',
        ch: 'He turned and smiled at her'
      },
      {
        id: 656,
        sntc: 'Onlar bizə bir-iki sual verdilər',
        tr: 'They asked us a couple of questions',
        ch: 'They asked us a couple of questions'
      },
      {
        id: 657,
        sntc: 'Bu, başımıza gəldi',
        tr: 'It happened to us',
        ch: 'It happened to us'
      },
      {
        id: 658,
        sntc: 'O, ona bir-iki sual verdi',
        tr: 'He asked her a couple of questions',
        ch: 'He asked her a couple of questions'
      },
      {
        id: 659,
        sntc: 'O, iki il əvvəl ingilis dilini öyrənməyə başladı',
        tr: 'She started learning English three years ago',
        ch: 'She started learning English three years ago'
      },
      {
        id: 660,
        sntc: 'Bu, başıma gəlmişdi',
        tr: 'It happened to me',
        ch: 'It happened to me'
      }
    ],
    [{
        id: 661,
        sntc: 'Bu mənim fikrimi dəyişdi',
        tr: 'It changed my opinion',
        ch: 'It changed my opinion'
      },
      {
        id: 662,
        sntc: 'Bu qaydalara yenidən baxdıq',
        tr: 'We revised these rules',
        ch: 'We revised these rules'
      },
      {
        id: 663,
        sntc: 'Bunu necə edim yadıma düşdü',
        tr: 'I remembered how to do it',
        ch: 'I remembered how to do it'
      },
      {
        id: 664,
        sntc: 'Çox vacib bir şeyi əlavə etdim',
        tr: 'I added one very important thing',
        ch: 'I added one very important thing'
      },
      {
        id: 665,
        sntc: 'Mən pəncərəni açdım',
        tr: 'I opened the window',
        ch: 'I opened the window'
      },
      {
        id: 666,
        sntc: 'Onlar bizə xüsusi bir şey təklif etdilər',
        tr: 'They offered us something special',
        ch: 'They offered us something special'
      },
      {
        id: 667,
        sntc: 'Bu mənim nöqteyi-nəzərimi dəyişdi',
        tr: 'It changed my point of view',
        ch: 'It changed my point of view'
      },
      {
        id: 668,
        sntc: 'Biz tez-tez onları gözləyirdik',
        tr: 'We often waited for them',
        ch: 'We often waited for them'
      },
      {
        id: 669,
        sntc: 'Onlar ən yaxşı şəraiti təmin etdilər',
        tr: 'They provided the best conditions',
        ch: 'They provided the best conditions'
      },
      {
        id: 670,
        sntc: 'Mən qapını açdım',
        tr: 'I opened the door',
        ch: 'I opened the door'
      }
    ],
    [{
        id: 671,
        sntc: 'Onlar birdən peyda oldular',
        tr: 'They appeared suddenly',
        ch: 'They appeared suddenly'
      },
      {
        id: 672,
        sntc: 'Bunu etməməyə qərar verdim',
        tr: 'I decided not to do it',
        ch: 'I decided not to do it'
      },
      {
        id: 673,
        sntc: 'O, bunu bizə izah etdi',
        tr: 'He explained it to us',
        ch: 'He explained it to us'
      },
      {
        id: 674,
        sntc: 'O, qayıtdı',
        tr: 'He returned',
        ch: 'He returned'
      },
      {
        id: 675,
        sntc: 'Güclü qabaqcıl səviyyəyə çatdım',
        tr: 'I reached a strong Advanced level',
        ch: 'I reached a strong Advanced level'
      },
      {
        id: 676,
        sntc: 'Bu suala cavab verdim',
        tr: 'I answered this question',
        ch: 'I answered this question'
      },
      {
        id: 677,
        sntc: 'O, bunu ödəməkdən imtina etdi',
        tr: 'He refused to pay for it',
        ch: 'He refused to pay for it'
      },
      {
        id: 678,
        sntc: 'Mən tez-tez online olaraq paltar sifariş edirdim',
        tr: 'I often ordered clothes online',
        ch: 'I often ordered clothes online'
      },
      {
        id: 679,
        sntc: 'Biz, adətən, orada bunu sifariş edirdik',
        tr: 'We usually ordered it there',
        ch: 'We usually ordered it there'
      },
      {
        id: 680,
        sntc: 'O, çox dadlı tort bişirdi',
        tr: 'She cooked a very tasty cake',
        ch: 'She cooked a very tasty cake'
      }
    ],
    [{
        id: 681,
        sntc: 'O, daha çox borc götürdü',
        tr: 'He borrowed more money',
        ch: 'He borrowed more money'
      },
      {
        id: 682,
        sntc: 'O, bu biznesi idarə etdi',
        tr: 'He managed this business',
        ch: 'He managed this business'
      },
      {
        id: 683,
        sntc: 'Qrammatikamı xeyli yaxşılaşdırmağı bacardım',
        tr: 'I managed to improve my grammar greatly',
        ch: 'I managed to improve my grammar greatly'
      },
      {
        id: 684,
        sntc: 'Biz bu münaqişəni həll etdik',
        tr: 'We resolved this conflict',
        ch: 'We resolved this conflict'
      },
      {
        id: 685,
        sntc: 'Onlar bu qəza ilə bağlı bizə məlumat verdilər',
        tr: 'They informed us of this accident',
        ch: 'They informed us of this accident'
      },
      {
        id: 686,
        sntc: 'Mən ingilis dilini təcrübə etdim',
        tr: 'I practiced English',
        ch: 'I practiced English'
      },
      {
        id: 687,
        sntc: 'O, əllərini yudu',
        tr: 'He washed his hands',
        ch: 'He washed his hands'
      },
      {
        id: 688,
        sntc: 'Mən orada maşını saxlamışdım',
        tr: 'I parked there',
        ch: 'I parked there'
      },
      {
        id: 689,
        sntc: 'Polis bu cinayətkarı həbs etdi',
        tr: 'The police arrested this criminal',
        ch: 'The police arrested this criminal'
      },
      {
        id: 690,
        sntc: 'O, Allaha dua etdi',
        tr: 'He prayed to God',
        ch: 'He prayed to God'
      }
    ],
    [{
        id: 691,
        sntc: 'Bu dərsə bir dəfə də yenidən baxdım',
        tr: 'I revised this lesson one more time',
        ch: 'I revised this lesson one more time'
      },
      {
        id: 692,
        sntc: 'O, mənimlə qismən razılaşdı',
        tr: 'She partly agreed with me',
        ch: 'She partly agreed with me'
      },
      {
        id: 693,
        sntc: 'Mən fikirlərimi ifadə etdim',
        tr: 'I expressed my ideas',
        ch: 'I expressed my ideas'
      },
      {
        id: 694,
        sntc: 'Mən qrammatikamı yaxşılaşdırmağı bacardım',
        tr: 'I managed to improve my grammar',
        ch: 'I managed to improve my grammar'
      },
      {
        id: 695,
        sntc: 'Mən söz verdim ki, bunu edəcəm',
        tr: 'I promised to do it',
        ch: 'I promised to do it'
      },
      {
        id: 696,
        sntc: 'Bu, dərhal diqqətimizi cəlb etdi',
        tr: 'It attracted our attention immediately',
        ch: 'It attracted our attention immediately'
      },
      {
        id: 697,
        sntc: 'O, səhər və axşam dua edirdi',
        tr: 'He prayed in the morning and in the evening',
        ch: 'He prayed in the morning and in the evening'
      },
      {
        id: 698,
        sntc: 'Müəllimimiz mənə çox böyük təsir edib',
        tr: 'Our teacher influenced me greatly',
        ch: 'Our teacher influenced me greatly'
      },
      {
        id: 699,
        sntc: 'Biz hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed everything very thoroughly'
      },
      {
        id: 700,
        sntc: 'Biz hər gün onun kompüterindən istifadə edirdik',
        tr: 'We used his computer every day',
        ch: 'We used his computer every day'
      }
    ],
    [{ id: 701,
      sntc: 'O, kitabını nəşr etdi',
      tr: 'He published his book',
      ch: 'He published his book'
    },
    { id: 702,
      sntc: 'Pul israf etməməyə qərar verdim',
      tr: 'I decided not to waste money',
      ch: 'I decided not to waste money'
    },
    { id: 703,
      sntc: 'O, onun xarici görünüşünü təsvir etdi',
      tr: 'He described her appearance',
      ch: 'He described her appearance'
    },
    { id: 704,
      sntc: 'O, ona, onları müdafiə etməsini əmr etdi',
      tr: 'He ordered him to defend them',
      ch: 'He ordered him to defend them'
    },
    { id: 705,
      sntc: 'O, sonradan peşman oldu',
      tr: 'He regretted it later',
      ch: 'He regretted it later'
    },
    { id: 706,
      sntc: 'Mən bu sənədi saxladım',
      tr: 'I saved this document',
      ch: 'I saved this document'
    },
    { id: 707,
      sntc: 'Oğlan onun sözünü kəsdi',
      tr: 'The boy interrupted her',
      ch: 'The boy interrupted her'
    },
    { id: 708,
      sntc: 'Mənə bunu bilmək lazım idi',
      tr: 'I needed to know it',
      ch: 'I needed to know it'
    },
    { id: 709,
      sntc: 'Biz çox böyük problemlə üzləşdik',
      tr: 'We faced a very big problem',
      ch: 'We faced a very big problem'
    },
    { id: 710,
      sntc: 'O, doğru cavabı tapdı',
      tr: 'She guessed the right answer',
      ch: 'She guessed the right answer'
    }],
    [{ id: 711,
      sntc: 'Mən biliyimi səninlə paylaşdım',
      tr: 'I shared my knowledge with you',
      ch: 'I shared my knowledge with you'
    },
    { id: 712,
      sntc: 'O, bu vəziyyəti təsvir etdi',
      tr: 'She described this situation',
      ch: 'She described this situation'
    },
    { id: 713,
      sntc: 'O, həmin şansı əldən verdi',
      tr: 'She missed that chance',
      ch: 'She missed that chance'
    },
    { id: 714,
      sntc: 'O, bu qərarı dəstəklədi',
      tr: 'He supported this decision',
      ch: 'He supported this decision'
    },
    { id: 715,
      sntc: 'Mən bu faylı saxladım',
      tr: 'I saved this file',
      ch: 'I saved this file'
    },
    { id: 716,
      sntc: 'Mən pəncərəni bağladım',
      tr: 'I closed the window',
      ch: 'I closed the window'
    },
    { id: 717,
      sntc: 'Həyat yoldaşı onun üçün darıxdı',
      tr: 'His wife missed him',
      ch: 'His wife missed him'
    },
    { id: 718,
      sntc: 'Sən düzgün cavab verdin',
      tr: 'You answered it correctly',
      ch: 'You answered it correctly'
    },
    { id: 719,
      sntc: 'O, son imtahanından keçə bilmədi',
      tr: 'He failed his last exam',
      ch: 'He failed his last exam'
    },
    { id: 720,
      sntc: 'Mən bu suallara cavab verdim',
      tr: 'I answered these questions',
      ch: 'I answered these questions'
    }],
    [{ id: 721,
      sntc: 'O, onun həyatını xilas etdi',
      tr: 'He saved her life',
      ch: 'He saved her life'
    },
    { id: 722,
      sntc: 'Müəllim səhvlərimizə işarə etdi',
      tr: 'The teacher pointed at our mistakes',
      ch: 'The teacher pointed at our mistakes'
    },
    { id: 723,
      sntc: 'Bu iki metodu müqayisə etdim',
      tr: 'I compared these two methods',
      ch: 'I compared these two methods'
    },
    { id: 724,
      sntc: 'O, həmişə bizə dəstək olub',
      tr: 'He always supported us',
      ch: 'He always supported us'
    },
    { id: 725,
      sntc: 'O, xaricdə təhsil alıb',
      tr: 'He studied abroad',
      ch: 'He studied abroad'
    },
    { id: 726,
      sntc: 'Bu ev ona məxsus idi',
      tr: 'This house belonged to her',
      ch: 'This house belonged to her'
    },
    { id: 727,
      sntc: 'O, pulu israf etdi',
      tr: 'He wasted money',
      ch: 'He wasted money'
    },
    { id: 728,
      sntc: 'Bunu etmeməyimə söz vermişəm',
      tr: 'I promised not to do it',
      ch: 'I promised not to do it'
    },
    { id: 729,
      sntc: 'Bu, planlarımızı məhv etdi',
      tr: 'It destroyed our plans',
      ch: 'It destroyed our plans'
    },
    { id: 730,
      sntc: 'O, bəzən ağlayırdı',
      tr: 'She sometimes cried',
      ch: 'She sometimes cried'
    }],
    [{ id: 731,
      sntc: 'Biz çox intensiv məşq etdik',
      tr: 'We trained very intensively',
      ch: 'We trained very intensively'
    },
    { id: 732,
      sntc: 'Mən fikrimi bildirdim',
      tr: 'I expressed my opinion',
      ch: 'I expressed my opinion'
    },
    { id: 733,
      sntc: 'O, birdən-birə ağladı',
      tr: 'She cried suddenly',
      ch: 'She cried suddenly'
    },
    { id: 734,
      sntc: 'O, bizi həmin məclisə dəvət etdi',
      tr: 'She invited us to that party',
      ch: 'She invited us to that party'
    },
    { id: 735,
      sntc: 'Bu şirkət bunu dünən çatdırdı',
      tr: 'This company delivered it yesterday',
      ch: 'This company delivered it yesterday'
    },
    { id: 736,
      sntc: 'O, onlara bunu etmeyə əmr etdi',
      tr: 'He ordered them to do it',
      ch: 'He ordered them to do it'
    },
    { id: 737,
      sntc: 'Mənzil ona məxsus idi',
      tr: 'The flat belonged to her',
      ch: 'The flat belonged to her'
    },
    { id: 738,
      sntc: 'Bu, bizdən asılı idi',
      tr: 'It depended on us',
      ch: 'It depended on us'
    },
    { id: 739,
      sntc: 'O, bütün ittihamları rədd etdi',
      tr: 'He denied all the accusations',
      ch: 'He denied all the accusations'
    },
    { id: 740,
      sntc: 'O, çox yüksəyə tullandı',
      tr: 'He jumped very high',
      ch: 'He jumped very high'
    }],
    [{ id: 741,
      sntc: 'Mən başqa ölkələrdən olan insanlarla ünsiyyət qurdum',
      tr: 'I communicated with people from other countries',
      ch: 'I communicated with people from other countries'
    },
    { id: 742,
      sntc: 'O, bunu İngilis dilinə tərcümə edib',
      tr: 'He translated it into English',
      ch: 'He translated it into English'
    },
    { id: 743,
      sntc: 'Biz bunu çox vacib hesab etməyə meylli idik',
      tr: 'We tended to consider it very important',
      ch: 'We tended to consider it very important'
    },
    { id: 744,
      sntc: 'Bu xəbər hər kəsi şoka saldı',
      tr: 'The news shocked everyone',
      ch: 'The news shocked everyone'
    },
    { id: 745,
      sntc: 'O, çox maraqlı bir şeyi qeyd etdi',
      tr: 'He recorded a very interesting thing',
      ch: 'He recorded a very interesting thing'
    },
    { id: 746,
      sntc: 'O, söhbətimizi kesdi',
      tr: 'He interrupted our conversation',
      ch: 'He interrupted our conversation'
    },
    { id: 747,
      sntc: 'Mən danışığımı yaxşılaşdırmağa bacardım',
      tr: 'I managed to improve my speaking',
      ch: 'I managed to improve my speaking'
    },
    { id: 748,
      sntc: 'Mən ad günümü qeyd etdim',
      tr: 'I celebrated my birthday',
      ch: 'I celebrated my birthday'
    },
    { id: 749,
      sntc: 'Biz tələsdik',
      tr: 'We hurried up',
      ch: 'We hurried up'
    },
    { id: 750,
      sntc: 'Mən bu mövzuda cəmləşmişdim',
      tr: 'I concentrated on this topic',
      ch: 'I concentrated on this topic'
    }],
    [{ id: 751,
      sntc: 'Bu, bizi çox təəccübləndirdi',
      tr: 'It surprised us greatly',
      ch: 'It surprised us greatly'
    },
    { id: 752,
      sntc: 'O, onların sözünü kəsdi',
      tr: 'He interrupted them',
      ch: 'He interrupted them'
    },
    { id: 753,
      sntc: 'Biz bu problemlərə diqqət etdik',
      tr: 'We concentrated on these problems',
      ch: 'We concentrated on these problems'
    },
    { id: 754,
      sntc: 'Onun qardaşı sonradan peşman oldu',
      tr: 'Her brother regretted it later',
      ch: 'Her brother regretted it later'
    },
    { id: 755,
      sntc: 'O, bu nəticəyə layiq idi',
      tr: 'She deserved this result',
      ch: 'She deserved this result'
    },
    { id: 756,
      sntc: 'Görüşümüz tarixini təsdiq etdim',
      tr: 'I confirmed the date of our meeting',
      ch: 'I confirmed the date of our meeting'
    },
    { id: 757,
      sntc: 'Bu, bizi çox təəccübləndirdi',
      tr: 'It surprised us a lot',
      ch: 'It surprised us a lot'
    },
    { id: 758,
      sntc: 'Diqqətimizi belə bir problemlərə cəmləşdirdik',
      tr: 'We concentrated on the following problems',
      ch: 'We concentrated on the following problems'
    },
    { id: 759,
      sntc: 'Mən tələsdim',
      tr: 'I hurried up',
      ch: 'I hurried up'
    },
    { id: 760,
      sntc: 'O, görüşümüz vaxtını təsdiqlədi',
      tr: 'He confirmed the time of our meeting',
      ch: 'He confirmed the time of our meeting'
    }],
    [{ id: 761,
      sntc: 'Bu yerin yaxınlığında maşını saxlamışam',
      tr: 'I parked near this place',
      ch: 'I parked near this place'
    },
    { id: 762,
      sntc: 'O, tez-tez bu sözləri səhv salırdı',
      tr: 'He often confused these words',
      ch: 'He often confused these words'
    },
    { id: 763,
      sntc: 'O, adətən səhər və axşam dua edirdi',
      tr: 'He usually prayed in the morning and in the evening',
      ch: 'He usually prayed in the morning and in the evening'
    },
    { id: 764,
      sntc: 'O, bütün pullarını sərf etdi',
      tr: 'He invested all his money',
      ch: 'He invested all his money'
    },
    { id: 765,
      sntc: 'Onlar bu qitəni kəşf etdilər',
      tr: 'They discovered this continent',
      ch: 'They discovered this continent'
    },
    { id: 766,
      sntc: 'Bu mənzil ona məxsus idi',
      tr: 'This flat belonged to him',
      ch: 'This flat belonged to him'
    },
    { id: 767,
      sntc: 'Bu bağlamanı qablaşdırdım',
      tr: 'I packed this parcel',
      ch: 'I packed this parcel'
    },
    { id: 768,
      sntc: 'O, bu biznesin sahibi idi',
      tr: 'He owned this business',
      ch: 'He owned this business'
    },
    { id: 769,
      sntc: 'Bu biznes ona məxsus idi',
      tr: 'This business belonged to him',
      ch: 'This business belonged to him'
    },
    { id: 770,
      sntc: 'Onlar bu problem barədə bizə məlumat verdilər',
      tr: 'They informed us of this problem',
      ch: 'They informed us of this problem'
    }],
    [{ id: 771,
      sntc: 'O, tez-tez nənəsini ziyarət edirdi',
      tr: 'She often visited her grandmother',
      ch: 'She often visited her grandmother'
    },
    { id: 772,
      sntc: 'O iki sənədi imzaladım',
      tr: 'I signed those two documents',
      ch: 'I signed those two documents'
    },
    { id: 773,
      sntc: 'Mən qapını açdım',
      tr: 'I opened the door',
      ch: 'I opened the door'
    },
    { id: 774,
      sntc: 'Mən bu imtahanlara hazırlaşdım',
      tr: 'I prepared for these exams',
      ch: 'I prepared for these exams'
    },
    { id: 775,
      sntc: 'Biz parka piyada getdik',
      tr: 'We walked to the park',
      ch: 'We walked to the park'
    },
    { id: 776,
      sntc: 'O, iş yoldaşına etibar edirdi',
      tr: 'He trusted his business partner',
      ch: 'He trusted his business partner'
    },
    { id: 777,
      sntc: 'Onlar birdən-birə yoxa çıxdılar',
      tr: 'They disappeared suddenly',
      ch: 'They disappeared suddenly'
    },
    { id: 778,
      sntc: 'O, müqəddəslərə dua etdi',
      tr: 'He prayed to saints',
      ch: 'He prayed to saints'
    },
    { id: 779,
      sntc: 'O, qapını bağladı',
      tr: 'He closed the door',
      ch: 'He closed the door'
    },
    { id: 780,
      sntc: 'Onlar şərab istehsal etdilər',
      tr: 'They produced wine',
      ch: 'They produced wine'
    }],
    [{ id: 781,
      sntc: 'Biz bu problemlərdə cəmləşdik',
      tr: 'We concentrated on these problems',
      ch: 'We concentrated on these problems'
    },
    { id: 782,
      sntc: 'O, görüşümüz vaxtını təsdiqlədi',
      tr: 'He confirmed the time of our meeting',
      ch: 'He confirmed the time of our meeting'
    },
    { id: 783,
      sntc: 'O, bu kreslonu təmir etdi',
      tr: 'He repaired this chair',
      ch: 'He repaired this chair'
    },
    { id: 784,
      sntc: 'O, qrupumuzu üç hissəyə böldü',
      tr: 'She divided our group into three parts',
      ch: 'She divided our group into three parts'
    },
    { id: 785,
      sntc: 'O, birdən peyda oldu',
      tr: 'He appeared suddenly',
      ch: 'He appeared suddenly'
    },
    { id: 786,
      sntc: 'Bu şərhi səhvən sildim',
      tr: 'I deleted this comment by mistake',
      ch: 'I deleted this comment by mistake'
    },
    { id: 787,
      sntc: 'Mən xaricdə təhsil almışam',
      tr: 'I studied abroad',
      ch: 'I studied abroad'
    },
    { id: 788,
      sntc: 'O, sözümü kəsdi',
      tr: 'He interrupted me',
      ch: 'He interrupted me'
    },
    { id: 789,
      sntc: 'Mən onunla razılaşmadım',
      tr: 'I disagreed with him',
      ch: 'I disagreed with him'
    },
    { id: 790,
      sntc: 'Onlar birlikdə rəqs etdilər',
      tr: 'They danced together',
      ch: 'They danced together'
    }],
    [{ id: 791,
      sntc: 'Bu, fikrimi dəyişdi',
      tr: 'It changed my opinion',
      ch: 'It changed my opinion'
    },
    { id: 792,
      sntc: 'Mən işə piyada getdim',
      tr: 'I walked to work',
      ch: 'I walked to work'
    },
    { id: 793,
      sntc: 'O, yeni bir nəzəriyyə yaratdı',
      tr: 'He created a new theory',
      ch: 'He created a new theory'
    },
    { id: 794,
      sntc: 'Onlar əla şəraiti təmin etmişdilər',
      tr: 'They provided excellent conditions',
      ch: 'They provided excellent conditions'
    },
    { id: 795,
      sntc: 'O, çox yüksəyə tullandı',
      tr: 'He jumped very high',
      ch: 'He jumped very high'
    },
    { id: 796,
      sntc: 'O, bu pulu qazandı',
      tr: 'He earned this money',
      ch: 'He earned this money'
    },
    { id: 797,
      sntc: 'O, çox dərs yazıb',
      tr: 'He recorded so many lessons',
      ch: 'He recorded so many lessons'
    },
    { id: 798,
      sntc: 'Polis bu cinayətkarı həbs etdi',
      tr: 'The police arrested this criminal',
      ch: 'The police arrested this criminal'
    },
    { id: 799,
      sntc: 'Onu bu cinayətdə ittiham etdilər',
      tr: 'They accused him of this crime',
      ch: 'They accused him of this crime'
    },
    { id: 800,
      sntc: 'Onlar bəzən birlikdə rəqs edirdilər',
      tr: 'They sometimes danced together',
      ch: 'They sometimes danced together'
    }],
    

  ]
};

// let obj=[];
// for (let i=40; i<50; i++){
//     for(let a=0; a<initialState.sentences[0][0].length; a++){
//         // obj.id=initialState.sentences[0][i][a].id
//         obj.push(initialState.sentences[0][i][a].tr)}}
// setTimeout(() => {console.log(obj)}, 1000)


const azEnSentences = (state = initialState, action) => {
  return state
}

export default azEnSentences