const initialState = {
  sentences: [
    [
    [{ id: 1, sntc: 'O orada işləyir', tr: 'He works there',ch: 'He works here study there' },
    { id: 2, sntc: 'Mən bunu bilirəm', tr: 'I know it', ch: 'I know knows this understand it' },
    { id: 3, sntc: 'Mən işə gedirəm', tr: 'I go to work',ch: 'I go to school work works goes' },
    { id: 4, sntc: 'O bunu bilir', tr: 'She knows it',ch: 'She knows likes it You know' },
    { id: 5,sntc: 'Mən bu ölkədə yaşayıram', tr: 'I live in this country', ch: 'I live We city in this country'},
    { id: 6, sntc: 'O bunu başa düşür', tr: 'He understands it', ch: 'He understands know They it' },
    { id: 7, sntc: 'Mən bunu görürəm', tr: 'I see it',  ch: 'I see it know knows He sees' },
    { id: 8, sntc: 'Mən bunu çox yaxşı başa düşürəm', tr: 'I understand it very well', ch:'I understand He like it very well'},
    { id: 9, sntc: 'O bunu istəyir', tr: 'He wants it', ch: 'He wants understand We know it' },
    { id: 10, sntc: 'O orada işləyir', tr: 'She works there',ch: 'She study work works there'}],
    [{ id: 11, sntc: 'Mənim maşınım var', tr: 'I have a car',ch: 'I have We house an a car cars' },
    { id: 12, sntc: 'O bu səhvi görür', tr: 'He sees this mistake',ch: 'He We look sees this mistake'},
    { id: 13, sntc: 'Mən özümü xoşbəxt hiss edirəm', tr: 'I feel happy',ch: 'I feel know knows good We happy' },
    { id: 14, sntc: 'O daha çox praktika istəyir', tr: 'She wants more practice',ch: 'She wants I more like practice'},
    { id: 15, sntc: 'Mən də orada işləyirəm', tr: 'I also work there', ch: 'I also work study here there' },
    { id: 16, sntc: 'Bu marağlı gəlir', tr: 'It seems interesting', ch: 'It He seems looks interesting' },
    { id: 17, sntc: 'Bu tez-tez baş verir', tr: 'It happens often',ch: 'It happens looks sometimes often' },
    { id: 18, sntc: 'Onun böyük evi var', tr: 'She has a big house',ch: 'She has a big an car We house' },
    { id: 19, sntc: 'Mən bu şəhərdə yaşayıram', tr: 'I live in this city', ch: 'I live We country in this city' },
    { id: 20, sntc: 'Mən daha çox praktika istəyirəm', tr: 'I want more practice', ch: 'I We like want more practice'}],
    [{ id: 21, sntc: 'Mən parka getmək istəyirəm', tr: 'I want to go to the park', ch: 'I You want school to go to the park'},
    { id: 22, sntc: 'Onun dollarları var', tr: 'She has dollars', ch: 'She has dollars dollar We have' },
    { id: 23, sntc: 'Onun təklifləri var', tr: 'She has offers', ch: 'She has I offers offer money' },
    { id: 24, sntc: 'O İngilis dilini öyrənməyə çalışır',tr: 'He tries to learn English', ch: 'He We tries try study to learn English'},
    { id: 25, sntc: 'O bunu çox yaxşı edir', tr: 'She does it very well',ch: 'She does it very well good goods do' },
    { id: 26, sntc: 'O tez-tez kinoya gedir', tr: 'She often goes to the cinema',ch: 'She often this I go goes to the cinema'},
    { id: 27, sntc: 'Mən bunu anlamağa çalışıram', tr: 'I try to understand it',ch: 'I try We know knows to understand it'},
    { id: 28, sntc: 'Onun təklifi var', tr: 'He has an offer', ch: 'He has I have an a offer' },
    { id: 29, sntc: 'O mənə kömək etməyə çalışır', tr: 'He tries to help me',ch: 'He tries We wants try to help me'},
    { id: 30, sntc: 'Mənim təklifim var', tr: 'I have an offer',ch: 'I have has You offers an offer' }],
    [{ id: 31, sntc: 'Bu dərslər mənə kömək edir', tr: 'These lessons help me',ch: 'These this like lessons help helps me'},
    { id: 32, sntc: 'Mənim dostum bunu etməyə cəhd edir', tr: 'My friend tries to do it',ch: 'My Your girlfriend friend friends tries to do it'},
    { id: 33, sntc: 'İdeyanız çox maraqlı gəlir', tr: 'Your idea seems very interesting',ch: 'Your You My idea look seems very interesting'},
    { id: 34, sntc: 'Mənim atam adətən bütün məlumatları yoxlayır', tr: 'My father usually checks all the information',ch: 'My father usually always know mother checks all the information'},
    { id: 35, sntc: 'Mənim atamın maşını var', tr: 'My father has a car',ch: 'My father you have Your has a car' },
    { id: 36, sntc: 'Onun şirkəti var ', tr: 'She has a company',ch: 'She We have has a company' },
    { id: 37, sntc: 'Bizim anamız da eyni fikirdədir ', tr: 'Our mother thinks the same',ch: 'Our We think mother know thinks the same'},
    { id: 38, sntc: 'Bu dərslər çox faydalı görünür', tr: 'These lessons seem very useful', ch: 'These this study lessons seem seems very useful'},
    { id: 39, sntc: 'Həmin təklif maraqlı gəlir', tr: 'That offer seems interesting', ch: 'That this like offer seems seem interesting'},
    { id: 40, sntc: 'Bu şirkətin pulu var', tr: 'This company has money', ch: 'This that company have has money many'}],
    [{ id: 41, sntc: 'Mənim bir bacım var', tr: 'I have a sister', ch: 'I have We has brother a an sister' },
    { id: 42, sntc: 'O bunu bilir', tr: 'She knows it', ch: 'She I understand know understands knows it' },
    { id: 43, sntc: 'Mənim bacım bu yerdə yaşayır', tr: 'My sister lives in this place', ch: 'My Your works sister lives live in this place'},
    { id: 44, sntc: 'Sən İngilis dilində çox yaxşı danışırsan', tr: 'You speak English very well', ch: 'You I speak speaks know read English very well'},
    { id: 45, sntc: 'O mənə kömək edir ', tr: 'She helps me', ch: 'She We helps know my help you me'},
    { id: 46, sntc: 'O bunu istəyir', tr: 'He wants it', ch: 'He wants want We know knows it' },
    { id: 47, sntc: 'Mənim qardaşım da eyni fikirdədir', tr: 'My brother thinks the same', ch: 'My brother father thinks think seem the same'},
    { id: 48, sntc: 'O sənin üçün darıxır', tr: 'He misses you', ch: 'He I know misses miss you'},
    { id: 49, sntc: 'Onun pişiyi var', tr: 'She has a cat', ch: 'She have has an a want cat'},
    { id: 50, sntc: 'O İngilis kitablarını oxuyur', tr: 'She reads English books', ch: 'She speak I reads book English books'}],
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
    }],
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
     }],
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
     }],
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
     }],
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
     }],
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
     }],
    [{
      id: 111,
      sntc: 'O, onun sözlərinə məhəl qoymur?',
      tr: 'Does he ignore her words?',
      ch: 'Does he ignore ignores his her words?'
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
     }],
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
    }],
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
    }],
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
    }],
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
    }],
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
      ch: 'Where do your you parents work works?'
    },
    {
      id: 164,
      sntc: 'Sənin atan işə nə vaxt gəlir?',
      tr: 'What time does your father come to work?',
      ch: 'What time does your you father come to work works?'
    },
    {
      id: 165,
      sntc: 'Belə şeylər nə qədər tez-tez baş verir?',
      tr: 'How often do these things happen?',
      ch: 'How often do these this things thing happen?'
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
      ch: 'What does your you boss usually promise promises?'
    },
    {
      id: 168,
      sntc: 'Bələ şeylər nə qədər tez-tez baş verir?',
      tr: 'How often do these things happen?',
      ch: 'How often do these this things happen happens?'
    },
    {
      id: 169,
      sntc: 'Nəyə görə bu fikir belə maraqlı görünür?',
      tr: 'Why does this idea seem so interest?',
      ch: 'Why does this idea ideas seem seems so interest?'
    },
    {
      id: 170,
      sntc: 'Bu səyləri sənin müəllimin sənə nə qədər müntəzəm olaraq deyir?',
      tr: 'How regularly does your teacher tell you these things?',
      ch: 'How regularly does your you teacher tell tells you these things?'
    }],
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
      ch: 'What seems seem useful useless?'
    },
    {
      id: 173,
      sntc: 'Bizim kifayət qədər praktikamız var?',
      tr: 'Do we have enough practice?',
      ch: 'Do we have has Does enough practice?'
    },
    {
      id: 174,
      sntc: 'O səni indicə görmək istəyir',
      tr: 'She wants to see you right now',
      ch: 'She wants Does say to see you right now'
    },
    {
      id: 175,
      sntc: 'Mən xoşbəxt olmaq istəyirəm',
      tr: 'I want to be happy',
      ch: 'I want wants We to be happy'
    },
    {
      id: 176,
      sntc: 'Onun maşını var',
      tr: 'She has a car',
      ch: 'She has have an a car'
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
      ch: 'He works also I very hard'
    },
    {
      id: 180,
      sntc: 'Onun hansı İngilis kitabları var?',
      tr: 'What English books does he have?',
      ch: 'What English books book do does he have?'
    }],
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
      ch: 'Which drink does do he prefer prefers?'
    },
    {
      id: 187,
      sntc: 'Bu mənə kömək edir',
      tr: 'It helps me',
      ch: 'It helps help my me'
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
    }],
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
      ch: 'Do you need needs me my advice?'
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
      ch: 'How much money many does do you have?'
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
      ch: 'Who supports you your support?'
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
    }],
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
      ch: 'We speak tell say English'
    },
    {
      id: 203,
      sntc: 'O, nəyi əlavə etmək istəyir?',
      tr: 'What does she want to add?',
      ch: 'What does do we she want to add?'
    },
    {
      id: 204,
      sntc: 'Səni cəlb edən nədir?',
      tr: 'What attracts you?',
      ch: 'What attracts like Who you?'
    },
    {
      id: 205,
      sntc: 'Səni nə ruhlandırır?',
      tr: 'What inspires you?',
      ch: 'What inspires Where he you?'
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
    }],
    [{
      id: 211,
      sntc: 'Bunu kim bilir?',
      tr: 'Who knows it?',
      ch: 'Who knows know this it?'
    },
    {
      id: 212,
      sntc: 'Mən həqiqətən qrammatikamı yaxşılaşdırmaq istəyirəm',
      tr: 'I really want to improve my grammar',
      ch: 'I really want wants this to improve my grammar'
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
      ch: 'Do you your there often visit this place?'
    },
    {
      id: 215,
      sntc: 'Mən xaricə getmək istərdim',
      tr: 'I would like to go abroad',
      ch: 'I would want there like to go abroad'
    },
    {
      id: 216,
      sntc: 'Onlar parlaq nəticələr göstərirlər',
      tr: 'They show brilliant results',
      ch: 'They show shows We brilliant results'
    },
    {
      id: 217,
      sntc: 'Sən bunu tez-tez edirsən?',
      tr: 'Do you often do it?',
      ch: 'Do you often want this do it?'
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
      ch: 'What attracts him he this there?'
    },
    {
      id: 220,
      sntc: 'O, adətən nə deyir?',
      tr: 'What does he usually say?',
      ch: 'What does he usually tell do say?'
    }],
    [{
      id: 221,
      sntc: 'Bu çox çətindir',
      tr: "It's so difficult",
      ch: "It's so a It difficult"
    },
    { id: 222, sntc: 'Bu yaxşıdır', tr: "It's good", ch: "It's good It great" },
    { id: 223, sntc: 'O əmindir', tr: "She's sure", ch: "She's sure We serious" },
    {
      id: 224,
      sntc: 'Bu çox yaxşıdır',
      tr: "It's so good",
      ch: "It's so This good"
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
      ch: "He's very poor good"
    },
    {
      id: 229,
      sntc: 'Biz dostuq',
      tr: "We're friends",
      ch: "We're friends friend I'm"
    },
    {
      id: 230,
      sntc: 'O, məktəbdədir',
      tr: "He's at school",
      ch: "He's at school on"
    }],
    [{
      id: 231,
      sntc: 'Bu vacib bir şeydir',
      tr: "It's an important thing",
      ch: "It's an important thing things"
    },
    {
      id: 232,
      sntc: 'Sən xoşbəxt insansan',
      tr: "You're a happy person",
      ch: "You're a happy happiness person"
    },
    { id: 233, sntc: 'Mən hazıram', tr: "I'm ready", ch: "I'm ready already" },
    {
      id: 234,
      sntc: 'Bu soldadır',
      tr: "It's on the left",
      ch: "It's on the left this right"
    },
    { id: 235, sntc: 'Bu sadədir', tr: "It's simple", ch: "It's simple easy very" },
    {
      id: 236,
      sntc: 'Bu çox bahalıdır',
      tr: "It's too expensive",
      ch: "It's too expensive cost"
    },
    {
      id: 237,
      sntc: 'Bu qeyri-mümkündür',
      tr: "It's impossible",
      ch: "It's impossible possible"
    },
    {
      id: 238,
      sntc: 'O, tənbəl tələbədir',
      tr: "He's a lazy student",
      ch: "He's a lazy student an school"
    },
    { id: 239, sntc: 'Soyuqdur', tr: "It's cold", ch: "It's cold" },
    {
      id: 240,
      sntc: 'Bu çox yaxşı qərardır',
      tr: "It's a very good decision",
      ch: "It's a very an important good decision"
    }],
    [{  id: 241,
      sntc: 'Bu, elə çətin vəziyyətdir ki',
      tr: "It's such a difficult situation",
      ch: "It's such a difficult situation easy"
    },
    {  id: 242,
      sntc: 'Bu, asan tapşırıqdır',
      tr: "It's an easy exercise",
      ch: "It's an easy good exercise exercises"
    },
    {  id: 243,
      sntc: 'Bu, elə çətin imtahandır ki',
      tr: "It's such a difficult exam",
      ch: "It's such a difficult exam exams"
    },
    {  id: 244,
      sntc: 'O, elə qəribə insandır ki',
      tr: "He's such a strange person",
      ch: "He's such a strange person people an"
    },
    {  id: 245,
      sntc: 'O, peşəkar müəllimdir',
      tr: "He's a professional teacher",
      ch: "He's a professional teacher an teacher"
    },
    {  id: 246,
      sntc: 'Elə gözəl yerdir ki',
      tr: "It's such a beautiful place",
      ch: "It's such a beautiful place here an"
    },
    {  id: 247,
      sntc: 'O, çox xeyirxahdır',
      tr: "She's so kind",
      ch: "She's so kind woman person"
    },
    { id: 248, sntc: 'Bu sadədir', tr: "It's simple", ch: "It's simple easy it" },
    {  id: 249,
      sntc: 'O, gözəl qızdır',
      tr: "She's a beautiful girl",
      ch: "She's a beautiful girl girls an"
    },
    {  id: 250,
      sntc: 'Bu, elə asan testdir ki',
      tr: "It's such an easy test",
      ch: "It's such an easy test tests"
    }],
    [{  id: 251,
      sntc: 'Suallar çox asandır',
      tr: 'The questions are very easy',
      ch: 'The questions are is very easy'
    },
    {  id: 252,
      sntc: 'Onun iyirmi yaşı var',
      tr: 'He is twenty',
      ch: 'He is twenty are two'
    },
    {  id: 253,
      sntc: 'Mən əminəm, siz dünyanın ən yaxşı müəllimisiniz',
      tr: "I'm sure you're the best teacher in the world",
      ch: "I'm sure you're the this best teacher in the world"
    },
    {  id: 254,
      sntc: 'Mənim qardaşımın on altı yaşı var',
      tr: 'My brother is sixteen',
      ch: 'My brother is sixteen are me'
    },
    {  id: 255,
      sntc: 'Tələbələr hazırdır',
      tr: 'The students are ready',
      ch: 'The students are ready is this'
    },
    {  id: 256,
      sntc: 'Onun oğlu zooparkdadır',
      tr: 'His son is in the zoo',
      ch: 'His son is in the zoo are at'
    },
    {  id: 257,
      sntc: 'Gün küləklidir',
      tr: 'The day is windy',
      ch: 'The day is windy that days'
    },
    {  id: 258,
      sntc: 'Bizim menecer çox peşəkardır',
      tr: 'Our manager is very professional',
      ch: 'Our manager is are many very professional'
    },
    {  id: 259,
      sntc: 'Bu söz mənim üçün yenidir',
      tr: 'This word is new for me',
      ch: 'This word is new for my world me'
    },
    {  id: 260,
      sntc: 'Bu şirkət çox zəngindir',
      tr: 'This company is very rich',
      ch: 'This company is that many very rich'
    }],
    [{  id: 261,
      sntc: 'Bu böyük səhv deyil',
      tr: "It isn't a big mistake",
      ch: "It isn't a big mistake an bag"
    },
    {  id: 262,
      sntc: 'Mən evli deyiləm',
      tr: "I'm not married",
      ch: "I'm not yes my married"
    },
    {  id: 263,
      sntc: 'Biz kədərli deyilik. Biz xoşbəxtik',
      tr: "We aren't sad. We're happy.",
      ch: "We aren't They angry sad. We're is happy."
    },
    {  id: 264,
      sntc: 'Onlar bir yerdə deyillər',
      tr: "They aren't together",
      ch: "They aren't this We together"
    },
    {  id: 265,
      sntc: 'O, şəhərdə deyil.',
      tr: "He isn't in the city.",
      ch: "He isn't in on this the city."
    },
    {  id: 266,
      sntc: 'Soyuq deyil. İstidir',
      tr: "It isn't cold. It's warm",
      ch: "It isn't cold. It's is sunny warm"
    },
    {  id: 267,
      sntc: 'O, məşğul deyil. O sərbəstdir',
      tr: "He isn't busy. He's free",
      ch: "He isn't busy. He's second We free"
    },
    {  id: 268,
      sntc: 'Bu uzaqda deyil. Yaxındadır',
      tr: "It isn't far. It's near",
      ch: "It isn't far. It's there I near"
    },
    {  id: 269,
      sntc: 'Bu, çox da yaxşı qərar deyil',
      tr: "It isn't a very good decision",
      ch: "It isn't a very a He good decision"
    },
    {  id: 270,
      sntc: 'Bu, çox da böyük səhv deyil',
      tr: "It isn't a very big mistake",
      ch: "It isn't a very big small mistake mistakes"
    }],
    [{  id: 271,
      sntc: 'Bu onun öz mənzilidir?',
      tr: 'Is it his own flat?',
      ch: 'Is it his own he Are flat?'
    },
    {  id: 272,
      sntc: 'O, öz mənzilindədir?',
      tr: 'Is he in your own flat?',
      ch: 'Is he in your you our own flat?'
    },
    {  id: 273,
      sntc: 'O, tənbəl oğlandır?',
      tr: 'Is he a lazy boy?',
      ch: 'Is he a lazy boy boys We?'
    },
    {  id: 274,
      sntc: 'Bu gülməli videodur?',
      tr: 'Is it a funny video?',
      ch: 'Is it a funny video videos an?'
    },
    {  id: 275,
      sntc: 'Bu böyük uğurdur?',
      tr: 'Is it a big success?',
      ch: 'Is it a big an he success?'
    },
    {  id: 276,
      sntc: 'Bu, onun öz evidir?',
      tr: 'Is it her own house?',
      ch: 'Is it her Are We own house?'
    },
    {  id: 277,
      sntc: 'O, binadadır?',
      tr: 'Is he in the building?',
      ch: 'Is he Are they in the building?'
    },
    {  id: 278,
      sntc: 'Bu sağ tərəfdədir?',
      tr: 'Is it on the right?',
      ch: 'Is it in This on the right?'
    },
    {  id: 279,
      sntc: 'Burada soyuqdur?',
      tr: 'Is it cold here?',
      ch: 'Is it That Are cold here?'
    },
    {  id: 280,
      sntc: 'Onlar uzaqdadırlar?',
      tr: 'Are they far?',
      ch: 'Are they near Is far?'
    }],
    [{  id: 281,
      sntc: 'Məqalə çox informativdir?',
      tr: 'Is the article very informative?',
      ch: 'Is the article this like very informative?'
    },
    {  id: 282,
      sntc: 'Bu müğənni populyardır?',
      tr: 'Is this singer popular?',
      ch: 'Is this singer song that popular?'
    },
    {  id: 283,
      sntc: 'Oyun darıxdırıcıdır?',
      tr: 'Is the game boring?',
      ch: 'Is the game games this boring?'
    },
    {  id: 284,
      sntc: 'Sənin anan dizaynerdir?',
      tr: 'Is your mother a designer?',
      ch: 'Is your mother mothers an a designer?'
    },
    {  id: 285,
      sntc: 'Otel bahadır?',
      tr: 'Is the hotel expensive?',
      ch: 'Is the these much hotel expensive?'
    },
    {  id: 286,
      sntc: 'Bu xəbər vacibdir?',
      tr: 'Is this news important?',
      ch: 'Is this news new Are important?'
    },
    {  id: 287,
      sntc: 'Bu qadın çox müdrikdir?',
      tr: 'Is this woman very wise?',
      ch: 'Is this woman women that very wise?'
    },
    {  id: 288,
      sntc: 'Problemlər böyükdür?',
      tr: 'Are the problems big?',
      ch: 'Are Is the problems problem big?'
    },
    {  id: 289,
      sntc: 'Pişik bu otaqdadır?',
      tr: 'Is the cat in this room?',
      ch: 'Is the Are dog at cat in this room?'
    },
    {  id: 290,
      sntc: 'Məqalə İngilis dilindədir?',
      tr: 'Is the article in English?',
      ch: 'Is the these article at in English?'
    }],
    [{  id: 291,
      sntc: 'Sənin cibində nə var?',
      tr: 'What is in your pocket?',
      ch: 'What is in your you are pocket?'
    },
    {  id: 292,
      sntc: 'Sən nə vaxt məşğulsan?',
      tr: 'When are you busy?',
      ch: 'When are you your bag busy?'
    },
    {  id: 293,
      sntc: 'Bu nə qədər maraqlıdır?',
      tr: 'How interesting is it?',
      ch: 'How interesting are this is it?'
    },
    {  id: 294,
      sntc: 'Bu nə qədər uzaqdır?',
      tr: 'How far is it?',
      ch: 'How far is it this long?'
    },
    {  id: 295,
      sntc: 'Sən niyə burdasan?',
      tr: 'Why are you here?',
      ch: 'Why are is hope you here?'
    },
    {  id: 296,
      sntc: 'Kim səhvdir?',
      tr: 'Who is wrong?',
      ch: 'Who is are mistake wrong?'
    },
    {  id: 297,
      sntc: 'Sən niyə belə xoşbəxtsən?',
      tr: 'Why are you so happy?',
      ch: 'Why are you your is so happy?'
    },
    {  id: 298,
      sntc: 'Bu sizin üçün nə dərəcədə vacibdir?',
      tr: 'How important is it for you?',
      ch: 'How important is are by it for you?'
    },
    {  id: 299,
      sntc: 'Saat neçədir?',
      tr: 'What time is it?',
      ch: 'What time How is it?'
    },
    {  id: 300,
      sntc: 'Saat neçədir?',
      tr: 'What is the time?',
      ch: 'What is are these the time?'
    }],
    [{  id: 301,
      sntc: 'O adamlar kimlərdir?',
      tr: 'Who are those people?',
      ch: 'Who are these person those people?'
    },
    {  id: 302,
      sntc: 'Dərs nə dərəcədə effektivdir?',
      tr: 'How effective is the lesson?',
      ch: 'How effective are these is the lesson?'
    },
    {  id: 303,
      sntc: 'Sənin müəllimin haradadır?',
      tr: 'Where is your teacher?',
      ch: 'Where is your you are teacher?'
    },
    {  id: 304,
      sntc: 'O şəxs kimdir?',
      tr: 'Who is that person?',
      ch: 'Who is that this people person?'
    },
    {  id: 305,
      sntc: 'Uşaqlar haradadır?',
      tr: 'Where are the children?',
      ch: 'Where are is this the children?'
    },
    {  id: 306,
      sntc: 'İmtahan nə qədər çətindir?',
      tr: 'How difficult is the test?',
      ch: 'How difficult much are is the test?'
    },
    {  id: 307,
      sntc: 'Sənin atanın neçə yaşı var?',
      tr: 'How old is your father?',
      ch: 'How old much are is your father?'
    },
    {  id: 308,
      sntc: 'Sənin atanın adı nədir?',
      tr: "What's your father's name?",
      ch: "What's your you names father's name?"
    },
    {  id: 309,
      sntc: 'Bu maşın necədir?',
      tr: 'How is this car?',
      ch: 'How is this that cat car?'
    },
    {  id: 310,
      sntc: 'Təklif nə dərəcədə maraqlıdır?',
      tr: 'How interesting is the offer?',
      ch: 'How interesting long are is the offer?'
    }],
    [{  id: 311,
      sntc: 'Bu nəticə məni qane etmir',
      tr: "I'm not satisfied with this result",
      ch: "I'm not satisfied with their like this result"
    },
    {  id: 312,
      sntc: 'Kompüter neçəyədir?',
      tr: 'How much is the computer?',
      ch: 'How much many these is the computer?'
    },
    {  id: 313,
      sntc: 'Onların cavabı sizi qane edir?',
      tr: 'Are you satisfied with their answer?',
      ch: 'Are you satisfied with us their answer?'
    },
    {  id: 314,
      sntc: 'Mənim yaddaşım pisdi',
      tr: 'My memory is bad',
      ch: 'My memory is good bad'
    },
    {  id: 315,
      sntc: 'O azad deyil. O, çox məşğuldur.',
      tr: "She isn't free. She's very busy.",
      ch: "She isn't free. She's many very busy."
    },
    { id: 316, sntc: 'Bu ucuzdur', tr: 'It is cheap', ch: 'It is are cheap' },
    {  id: 317,
      sntc: 'Bu cins neçəyədir?',
      tr: 'How much are these jeans?',
      ch: 'How much are these this is jeans?'
    },
    {  id: 318,
      sntc: 'Bu məşqlər nə üçün bu qədər çətindir?',
      tr: 'Why are these exercises so difficult?',
      ch: 'Why are these exercises exercise so difficult?'
    },
    { id: 319, sntc: 'Mən tənbələm?', tr: 'Am I lazy?', ch: 'Am he Is I lazy?' },
    {  id: 320,
      sntc: 'Bu təhlükəlidir?',
      tr: 'Is it dangerous?',
      ch: 'Is it difficult he dangerous?'
    }],
    [{  id: 321,
      sntc: 'Oğlan evdədir?',
      tr: 'Is the boy at home?',
      ch: 'Is the boy girl on at home?'
    },
    {  id: 322,
      sntc: 'Bu sadə mətndir?',
      tr: 'Is this text simple?',
      ch: 'Is this test text simple?'
    },
    {  id: 323,
      sntc: 'Niyə belə xoşbəxtsən?',
      tr: 'Why are you so happy?',
      ch: 'Why are you your so happy?'
    },
    {  id: 324,
      sntc: 'Orada kim var?',
      tr: 'Who is there?',
      ch: 'Who is he here there?'
    },
    {  id: 325,
      sntc: 'O, tənbəl oğlandır?',
      tr: 'Is he a lazy boy?',
      ch: 'Is he here an a lazy boy?'
    },
    { id: 326, sntc: 'Mən azadam', tr: 'I am free', ch: 'I is am free' },
    {  id: 327,
      sntc: 'Otaqda kim var?',
      tr: 'Who is in the room',
      ch: 'Who is in the room this'
    },
    {  id: 328,
      sntc: 'Bu daha pisdir?',
      tr: 'Is it worse?',
      ch: 'Is it worse bad?'
    },
    {  id: 329,
      sntc: 'Sən xoşbəxt insansan',
      tr: 'You are a happy person',
      ch: 'You are a an happy person people'
    },
    {  id: 330,
      sntc: 'Bu çox bahalı şeydir',
      tr: "It's a very expensive thing",
      ch: "It's a an very expensive thing things"
    }],
    [{  id: 331,
      sntc: 'Sənin qardaşın evdədir?',
      tr: 'Is your brother at home?',
      ch: 'Is your brother at on you home?'
    },
    {  id: 332,
      sntc: 'Sən doğrudan da yorğunsan?',
      tr: 'Are you really tired?',
      ch: 'Are you your Is really tired?'
    },
    {  id: 333,
      sntc: 'Bu maşın neçəyədir?',
      tr: 'How much is this car?',
      ch: 'How much is this those cars car?'
    },
    {  id: 334,
      sntc: 'Bu yüksək səviyyə deyil',
      tr: "It isn't a high level",
      ch: "It isn't much an a high level"
    },
    {  id: 335,
      sntc: 'Bütün bu dərslər pulsuzdur',
      tr: 'All these lessons are free',
      ch: 'All these lesson this lessons are free'
    },
    {  id: 336,
      sntc: 'Oğlunun neçə yaşı var?',
      tr: 'How old is his son?',
      ch: 'How old is far he his son?'
    },
    {  id: 337,
      sntc: 'Sənin dostunun adı nədir?',
      tr: "What's your friend's name?",
      ch: "What's your friend you friend's name?"
    },
    {  id: 338,
      sntc: 'Onlar işdədirlər',
      tr: 'They are at work',
      ch: 'They are at on school work'
    },
    {  id: 339,
      sntc: 'Bu yaxşı bir ədəbdir',
      tr: "It's a good manner",
      ch: "It's a good many an manner"
    },
    {  id: 340,
      sntc: 'Birinci yerdə kim var?',
      tr: 'Who is in the first place?',
      ch: 'Who is in the this second first place?'
    }],
    [{  id: 341,
      sntc: 'Xaricdə təhsil almağı xoşlayıram',
      tr: 'I like studying abroad',
      ch: 'I like studying live would abroad'
    },
    {  id: 342,
      sntc: 'O əşyanın qiyməti çox deyil',
      tr: "That thing doesn't cost much",
      ch: "That thing doesn't don't many cost much"
    },
    {  id: 343,
      sntc: 'Bu əşya çox bahalıdır',
      tr: 'This thing costs a lot',
      ch: 'This thing cost costs things a lot'
    },
    {  id: 344,
      sntc: 'O, İngilis dili üçün daha çox vaxt tapmağa çalışır',
      tr: 'He tries to find more time for English',
      ch: 'He tries to find try by more time for English'
    },
    {  id: 345,
      sntc: 'Bu klinika o qədər də yaxşı deyil',
      tr: "This clinic isn't so good",
      ch: "This clinic isn't so far good"
    },
    {  id: 346,
      sntc: 'Biz həmişə bunu vaxtında bitiririk',
      tr: 'We always finish it on time',
      ch: 'We always finish it on at the time'
    },
    {  id: 347,
      sntc: 'Bu dərslərin sadəliyi xoşuma gəlir',
      tr: 'I like the simplicity of these lessons',
      ch: 'I like the simplicity of this by these lessons'
    },
    {  id: 348,
      sntc: 'Bu adətən yazda olur',
      tr: 'It usually happens in spring',
      ch: 'It usually happens in on summer spring'
    },
    {  id: 349,
      sntc: 'Mən bunu edə bilərəm',
      tr: 'I may do it',
      ch: 'I may do need does it'
    },
    {  id: 350,
      sntc: 'Sən tez-tez idman zalına gedirsən?',
      tr: 'Do you often go to the gym?',
      ch: 'Do you often go to that always the gym?'
    }],
    [{ id: 351,
      sntc: 'O, ingilis dilində oxuyur ',
      tr: 'She reads in English',
      ch: 'She reads in English at read'
    },
    { id: 352,
      sntc: 'O, onun sözlərinə əhəmiyyət vermir?',
      tr: 'Does he ignore her words?',
      ch: 'Does he ignore her words word he?'
    },
    { id: 353,
      sntc: 'Mən bunu çox gözəl dərk edirəm',
      tr: 'I perfectly realize it',
      ch: 'I perfectly realize it this method'
    },
    { id: 354,
      sntc: 'Sən xoşbəxt insansan',
      tr: "You're a happy person",
      ch: "You're a happy person people an"
    },
    { id: 355,
      sntc: 'Karandaş masamın üstündə deyil',
      tr: "The pencil isn't on my desk",
      ch: "The pencil isn't on my desk me pen"
    },
    { id: 356,
      sntc: 'Mənə bunu gələn ilə qədər bitirmək lazımdır',
      tr: 'I need to finish it by next year',
      ch: 'I need to finish it by next year second for'
    },
    { id: 357,
      sntc: 'Bu dünyanın ən uzun çayıdır',
      tr: "It's the longest river in the world",
      ch: "It's the longest river in the world at this"
    },
    { id: 358,
      sntc: 'Sən bunu yazmaq lazımdır?',
      tr: 'Do you need to write it down?',
      ch: 'Do you need needs to write it down read?'
    },
    {id: 359, sntc: 'Mən evdəyəm', tr: "I'm at home", ch: "I'm at home work the" },
    { id: 360,
      sntc: 'Bu barədə nə düşünürsən?',
      tr: 'What do you think about it?',
      ch: 'What do you think about it this your?'
    }],
    [{ id: 361,
      sntc: 'O, İngiltərədəndir?',
      tr: 'Is he from England?',
      ch: 'Is he from England by her?'
    },
    { id: 362,
      sntc: 'Bu, kimi narahat edir?',
      tr: 'Who does it worry?',
      ch: 'Who does it worry worries this?'
    },
    { id: 363,
      sntc: 'O mənim həmkarım deyil',
      tr: "He isn't my colleague",
      ch: "He isn't my colleague me We"
    },
    { id: 364,
      sntc: 'Bu dərslər o qədər effektlidir ki',
      tr: 'These lessons are so effective',
      ch: 'These lessons are so effective is This'
    },
    { id: 365,
      sntc: 'O, hərdən ağlayır',
      tr: 'She sometimes cries',
      ch: 'She sometimes cries cry always'
    },
    { id: 366,
      sntc: 'Mən sənə heyranam',
      tr: 'I admire you',
      ch: 'I admire you your like'
    },
    { id: 367,
      sntc: 'İdman zalına nə qədər tez-tez gedirsən?',
      tr: 'How often do you go to the gym?',
      ch: 'How often do you go to the gym this does?'
    },
    { id: 368,
      sntc: 'Bu eyni cümlədir',
      tr: "It's the same sentence",
      ch: "It's the same sentence words only"
    },
    { id: 369,
      sntc: 'Bu elə vacib görüşdür ki',
      tr: "It's such an important meeting",
      ch: "It's such an important meeting meet a"
    },
    { id: 370,
      sntc: 'Sənin indi dostun tənhadır?',
      tr: 'Is your friend alone now?',
      ch: 'Is your friend alone now new you?'
    }],
    [{ id: 371,
      sntc: 'O, orada yaşayır?',
      tr: 'Does he live there?',
      ch: 'Does he live there this you?'
    },
    { id: 372,
      sntc: 'Film necədir?',
      tr: 'How is the movie?',
      ch: 'How is the movie this far?'
    },
    { id: 373,
      sntc: 'O, səyahəti çox sevir',
      tr: "He's fond of traveling",
      ch: "He's fond of traveling travel I by"
    },
    { id: 374,
      sntc: 'Sevgi çox gözəl hissdir',
      tr: 'Love is a wonderful feeling',
      ch: 'Love is a wonderful feeling feel an'
    },
    { id: 375,
      sntc: 'Adətən səhər saat 9-da işə gedirəm',
      tr: "I usually go to work at 9 o'clock in the morning",
      ch: "I usually go to work at 9 o'clock in at school the morning"
    },
    { id: 376,
      sntc: 'Kompüter neçəyədir?',
      tr: 'How much is the computer?',
      ch: 'How much is the this many computer?'
    },
    { id: 377,
      sntc: 'Hava limanı yaxındır?',
      tr: 'Is the airport near?',
      ch: 'Is the airport near far Are?'
    },
    { id: 378,
      sntc: 'Sənin ərinin işi nədir?',
      tr: "What's your husband's job?",
      ch: "What's your husband's husband you job?"
    },
    { id: 379,
      sntc: 'O, boşanıb',
      tr: "He's divorced",
      ch: "He's divorced split They"
    },
    { id: 380,
      sntc: 'Cəmiyyətimiz sayəsində bu dərsləri çox sevirəm',
      tr: "I'm fond of these lessons thanks to our community",
      ch: "I'm fond of these lessons thank me thanks to our community"
    }],
    [{ id: 381,
      sntc: 'Bu məşqlər elə faydalıdır?',
      tr: 'Are these exercises so useful?',
      ch: 'Are these exercises exercise so useful useless?'
    },
    { id: 382,
      sntc: 'Mənə İngilis dilində sərbəst danışmaq lazımdır',
      tr: 'I need to speak English fluently',
      ch: 'I need needs to speak English speaks He fluently'
    },
    { id: 383,
      sntc: 'Bu vaxt mənim üçün heç də münasib deyil',
      tr: "This time isn't convenient for me at all",
      ch: "This time The isn't convenient by my for me at all"
    },
    { id: 384,
      sntc: 'Bu strategiya xoşuma gəlir',
      tr: 'I like this strategy',
      ch: 'I like this strategy those would'
    },
    { id: 385,
      sntc: 'Bunu yazmaq istəmirəm',
      tr: "I don't want to write it down",
      ch: "I don't want to write read reads it down"
    },
    { id: 386,
      sntc: 'Kişilər çox kobuddurlar',
      tr: 'The men are very rude',
      ch: 'The men are very is rude really'
    },
    { id: 387,
      sntc: 'Mən adətən günortadan sonra ora gedirəm',
      tr: 'I usually go there in the afternoon',
      ch: 'I usually go there in at evening the afternoon'
    },
    { id: 388,
      sntc: 'Başqa ölkələrdən olan adamlarla ünsiyyət qurmaq istərdim',
      tr: "I'd like to communicate with people from other countries",
      ch: "I'd like to communicate with person people from other another countries"
    },
    { id: 389,
      sntc: 'Burada çox səslidir',
      tr: "It's too loud here",
      ch: "It's too loud here there near"
    },
    { id: 390,
      sntc: 'Mən adətən erkən qalxıram',
      tr: 'I usually get up early',
      ch: 'I usually get up early fast of'
    }],
    [{  id: 391,
      sntc: 'O, bunu dərk edir',
      tr: 'He realizes it',
      ch: 'He realizes it this problem'
    },
    {  id: 392,
      sntc: 'Mən bizneslə məşğul oluram',
      tr: 'I do business',
      ch: 'I do business make well'
    },
    {  id: 393,
      sntc: 'Mən səyahəti xoşlayıram',
      tr: 'I like traveling',
      ch: 'I like traveling travel He'
    },
    {  id: 394,
      sntc: 'Başqa kitab oxumaq istəyirəm',
      tr: 'I want to read another book',
      ch: 'I want to read ready other another book'
    },
    {  id: 395,
      sntc: 'Bizə bunu demək lazımdır',
      tr: 'We need to say it',
      ch: 'We need to say tell our it'
    },
    {  id: 396,
      sntc: 'O, adətən ingilis dilində çox tez danışır',
      tr: 'She usually speak English very fast',
      ch: 'She usually speak tell slow English very fast'
    },
    {  id: 397,
      sntc: 'Bu problemdən danışmağı həqiqətən xoşlayıram',
      tr: 'I really like to talk about this problem',
      ch: 'I really like to talk tell of about this the problem'
    },
    {  id: 398,
      sntc: 'Biz bunu edə bilərik',
      tr: 'We can do it',
      ch: 'We can do does this it'
    },
    {  id: 399,
      sntc: 'Mən bunu vaxtında etməliyəm',
      tr: 'I must do it on time',
      ch: 'I must do does timer it on time'
    },
    {  id: 400,
      sntc: 'Bu video daha uzundur',
      tr: 'This video is much longer',
      ch: 'This video videos is many much longer'
    }],
    [{  id: 401,
      sntc: 'Mən şanslıyam?',
      tr: 'Am I lucky?',
      ch: 'Am I lucky good glad?'
    },
    {  id: 402,
      sntc: 'Müəllimlərimiz haradadır?',
      tr: 'Where are our teachers?',
      ch: 'Where are our school teachers teacher?'
    },
    {  id: 403,
      sntc: 'Bu sınaq çox asandır?',
      tr: 'Does that test seem very easy?',
      ch: 'Does that test word simplicity seem very easy?'
    },
    {  id: 404,
      sntc: 'Mən onun sadəliyini görürəm',
      tr: 'I see its simplicity',
      ch: 'I see its simplicity seem seems very'
    },
    {  id: 405,
      sntc: 'O, nəyi əlavə etmək istəyir?',
      tr: 'What does she want to add?',
      ch: 'What does she want wants to add idea?'
    },
    {  id: 406,
      sntc: 'Bu fikir xoşuma gəlir',
      tr: 'I like this idea',
      ch: 'I like this want wants to idea'
    },
    {  id: 407,
      sntc: 'O, səni sevir',
      tr: 'He loves you',
      ch: 'He loves want love you'
    },
    {  id: 408,
      sntc: 'Bu maşın xoşuma gəlir',
      tr: 'I like this car',
      ch: 'I like this car lesson'
    },
    {  id: 409,
      sntc: 'Bu dərsdən zövq alırıq',
      tr: 'We enjoy this lesson',
      ch: 'We enjoy this that lesson car'
    },
    {  id: 410,
      sntc: 'Ona daha çox pul lazımdır',
      tr: 'He needs more money',
      ch: 'He needs more need I money'
    }],
    [{  id: 411,
      sntc: 'Ananın neçə yaşı var?',
      tr: 'How old is your mother?',
      ch: 'How old is are you your mother?'
    },
    {  id: 412,
      sntc: 'Bu çox böyük səhv deyil',
      tr: "It isn't a very big mistake",
      ch: "It isn't a very small big mistake"
    },
    {  id: 413,
      sntc: 'Bu çox yüksək səviyyədir',
      tr: "It's a very high level",
      ch: "It's a very high fast an level"
    },
    {  id: 414,
      sntc: 'O qədər də pis deyil',
      tr: "It isn't so bad",
      ch: "It isn't so bad good is"
    },
    {  id: 415,
      sntc: 'Ümid edirəm sən bunu başa düşürsən',
      tr: 'I hope you understand it',
      ch: 'I hope you find learn understand it'
    },
    {  id: 416,
      sntc: 'O, yorğun deyil',
      tr: "She isn't tired",
      ch: "She isn't fanny is tired"
    },
    {  id: 417,
      sntc: 'Gülməli videodur?',
      tr: 'Is it a funny video?',
      ch: 'Is it a funny read an video?'
    },
    {  id: 418,
      sntc: 'Bu il çox çətindir',
      tr: 'This year is very difficult',
      ch: 'This year is very funny are difficult'
    },
    {  id: 419,
      sntc: 'Üzməyi xoşlayıram',
      tr: 'I like swimming',
      ch: 'I like swimming swim He'
    },
    {  id: 420,
      sntc: 'Sizi nə ruhlandırır?',
      tr: 'What inspires you?',
      ch: 'What inspires like reads you?'
    }],
    [{  id: 421,
      sntc: 'Sən bu nəticəni yaxşılaşdırmağa çalışırsan?',
      tr: 'Do you try to improve this result?',
      ch: 'Do you try to tries that improve this result?'
    },
    {  id: 422,
      sntc: 'Bu, bu səviyyə üçün deyil',
      tr: "It isn't for this level",
      ch: "It isn't for of this lessons level"
    },
    {  id: 423,
      sntc: 'Müəllimimiz haradadır?',
      tr: 'Where is our teacher?',
      ch: 'Where is our we are teacher?'
    },
    {  id: 424,
      sntc: 'Mən bunu yaza bilərəm',
      tr: 'I can write it down',
      ch: 'I can write it out up down'
    },
    {  id: 425,
      sntc: 'O, onların biliyini neçə dəfə yoxlayır?',
      tr: 'How often does he test their knowledge?',
      ch: 'How often does we text he test their knowledge?'
    },
    {  id: 426,
      sntc: 'Bilirəm, bu sadədir',
      tr: "I know it's simple",
      ch: "I know it's this learn simple"
    },
    {  id: 427,
      sntc: 'O, bunu dərk edir',
      tr: 'She realizes it',
      ch: 'She realizes realize this it'
    },
    {  id: 428,
      sntc: 'Bu çox effektiv metoddur',
      tr: "It's such an effective method",
      ch: "It's such an a like effective method"
    },
    {  id: 429,
      sntc: 'Mən həqiqətən bunu istəyirəm',
      tr: 'I really want it',
      ch: 'I really want it this like'
    },
    {  id: 430,
      sntc: 'Bu zarafat heç xoşuma gəlmir',
      tr: "I don't like this joke at all",
      ch: "I don't like this joke of We at all"
    }],
    [{  id: 431,
      sntc: 'Bu zarafat heç də əyləncəli deyil',
      tr: "This joke isn't funny at all",
      ch: "This joke isn't bad is funny at all"
    },
    {  id: 432,
      sntc: 'O, həqiqətən də həyatını dəyişmək istəyir',
      tr: 'He really wants to change his life',
      ch: 'He really wants to change changes he his life'
    },
    {  id: 433,
      sntc: 'Bu ən yaxşı seçimdir',
      tr: "It's the best choice",
      ch: "It's the best fast this choice"
    },
    {  id: 434,
      sntc: 'Nə qədər səhviniz var?',
      tr: 'How many mistakes do you have?',
      ch: 'How many mistakes do you your has have?'
    },
    {  id: 435,
      sntc: 'Biz ən yaxşı tələbələrik?',
      tr: 'Are we the best students?',
      ch: 'Are we the bad learn best students?'
    },
    {  id: 436,
      sntc: 'Yaxşı maşın istəyirəm',
      tr: 'I want a good car',
      ch: 'I want a good well cat car'
    },
    {  id: 437,
      sntc: 'Dostumla mən baharda orada yaşayırıq',
      tr: 'My friend and I live there in spring',
      ch: 'My friend and I live look this there in spring'
    },
    {  id: 438,
      sntc: 'O, hamamda deyil',
      tr: "He isn't in the bathroom",
      ch: "He isn't in the that at bathroom"
    },
    {  id: 439,
      sntc: 'Bu mənim yadımdadır',
      tr: 'I remember it',
      ch: 'I remember hope you it'
    },
    {  id: 440,
      sntc: 'Bu şəhəri çox bəyənirəm',
      tr: 'I like this city a lot',
      ch: 'I like this bag an city a lot'
    }],
    [{  id: 441,
      sntc: 'Nə əhəmiyyətsiz görünür?',
      tr: 'What seems unimportant?',
      ch: 'What seems unimportant seem important?'
    },
    {  id: 442,
      sntc: 'Mənim kompüterim var. O çox güclüdür',
      tr: "I have a computer. It's very powerful",
      ch: "I have a an such computer. It's very powerful"
    },
    {  id: 443,
      sntc: 'Bütün bu dərsləri həqiqətən faydalı görürəm',
      tr: 'I find all these lessons really useful',
      ch: 'I find all these lessons really useful'
    },
    {  id: 444,
      sntc: 'Sən nə bilirsən?',
      tr: 'What do you know?',
      ch: 'What do does he you know?'
    },
    {  id: 445,
      sntc: 'Təqdimat aydın deyil',
      tr: "The presentation isn't clear",
      ch: "The presentation person is isn't clear"
    },
    {  id: 446,
      sntc: 'Bu çox darıxdırıcıdır',
      tr: "It's very boring",
      ch: "It's very tired at all boring"
    },
    {  id: 447,
      sntc: 'Bu videoları çox faydalı görürəm',
      tr: 'I find these videos very useful',
      ch: 'I find these useless that videos very useful'
    },
    {  id: 448,
      sntc: 'Bu uşaqlar üçündür?',
      tr: 'Is it for children?',
      ch: 'Is it for children child my?'
    },
    {  id: 449,
      sntc: 'Burada nə var?',
      tr: "What's here?",
      ch: "What's here there Who's?"
    },
    {  id: 450,
      sntc: 'Onlar bir yerdə yaşamırlar',
      tr: "They don't live together",
      ch: "They don't live alone like together"
    }],
    [{ id: 451, sntc: 'O necədir?', tr: 'How is she?', ch: 'How is are you she?' },
    {  id: 452,
      sntc: 'Dərslər maraqlıdır',
      tr: 'The lesson is interesting',
      ch: 'The lesson is interesting are learn'
    },
    {  id: 453,
      sntc: 'Dostumla mən payızda orada yaşayırıq',
      tr: 'My friend and I live there in autumn',
      ch: 'My friend and I live there in spring friends autumn'
    },
    {  id: 454,
      sntc: 'Niyə burdasan?',
      tr: 'Why are you here?',
      ch: 'Why are you here your is?'
    },
    {  id: 455,
      sntc: 'Mən bunu düzgün başa düşürəm?',
      tr: 'Do I understand it correctly?',
      ch: 'Do I understand it correctly is learn?'
    },
    {  id: 456,
      sntc: 'O, musiqiçidir',
      tr: "He's a musician",
      ch: "He's a musician singer an"
    },
    {  id: 457,
      sntc: 'Vaxt puldur?',
      tr: 'Is time money?',
      ch: 'Is time money the many?'
    },
    {  id: 458,
      sntc: 'Bu dərs maraqlı görünür',
      tr: 'This lesson seems interesting',
      ch: 'This lesson seems seem there interesting'
    },
    {  id: 459,
      sntc: 'O, parka getmək istəyir',
      tr: 'She wants to go to the park',
      ch: 'She wants to go to the park this I'
    },
    { id: 460, sntc: 'Bu necədir?', tr: 'How is it?', ch: 'How is far this it?' }],
    [{  id: 461,
      sntc: 'Anan ona bütün həqiqəti söyləmək istəyir?',
      tr: 'Does your mother want to tell him all the truth?',
      ch: 'Does your mother want to tell say us him all the truth?'
    },
    {  id: 462,
      sntc: 'O ölkəni çox bəyənirəm',
      tr: 'I like that country a lot',
      ch: 'I like that country a many an lot'
    },
    {  id: 463,
      sntc: 'Zooparka neçə dəfə gedirsən?',
      tr: 'How often do you go to the zoo?',
      ch: 'How often do you go goes that to the zoo?'
    },
    {  id: 464,
      sntc: 'O, tez-tez parka gedir',
      tr: 'She often goes to the park',
      ch: 'She often goes to the this I park'
    },
    {  id: 465,
      sntc: 'O hazır deyil',
      tr: "He isn't ready",
      ch: "He isn't ready really I"
    },
    {  id: 466,
      sntc: 'O qadınlar müəllimdir',
      tr: 'Those women are teachers',
      ch: 'Those women are teachers us woman'
    },
    {  id: 467,
      sntc: 'Bu çox bahalıdır',
      tr: "It's too expensive",
      ch: "It's too expensive cost less"
    },
    {  id: 468,
      sntc: 'Kitabxanadasınız?',
      tr: 'Are you in the library?',
      ch: 'Are you in the library this book?'
    },
    {  id: 469,
      sntc: 'Bu səhvləri kim görür?',
      tr: 'Who sees these mistakes?',
      ch: 'Who sees these mistakes see the?'
    },
    {  id: 470,
      sntc: 'Bu izah aydındır',
      tr: 'This explanation is clear',
      ch: 'This explanation is clear unclear the'
    }],
    [{  id: 471,
      sntc: 'Bu izah aydın deyil',
      tr: 'This explanation is unclear',
      ch: 'This explanation is unclear clear the'
    },
    {  id: 472,
      sntc: 'Onu kim valeh edir?',
      tr: 'Who admires him?',
      ch: 'Who admires him he admire?'
    },
    {  id: 473,
      sntc: 'Sənin uğurun mənim uğurumdur',
      tr: 'Your success is my success',
      ch: 'Your success is my success me are'
    },
    {  id: 474,
      sntc: 'O, bunu necə izah edir?',
      tr: 'How does she explain it?',
      ch: 'How does she do long explain it?'
    },
    {  id: 475,
      sntc: 'O, çox zəngin insandır',
      tr: "He's a very rich person",
      ch: "He's a very rich person people an"
    },
    {  id: 476,
      sntc: 'Mən bunu etməliyəm',
      tr: 'I must do it',
      ch: 'I must do it on can'
    },
    {  id: 477,
      sntc: 'Sənə bunu dəyişmək lazımdır',
      tr: 'You need to change it',
      ch: 'You need to change try that it'
    },
    {  id: 478,
      sntc: 'Səhvlərin üzərində işləyirsən?',
      tr: 'Do you work on your mistakes?',
      ch: 'Do you work on your the of mistakes?'
    },
    {  id: 479,
      sntc: 'Mən onlara qulaq asmaq istəmirəm',
      tr: "İ don't want to listen to them",
      ch: "İ don't want to listen to can them"
    },
    {  id: 480,
      sntc: 'Bu, neçəyədir?',
      tr: 'How much does it cost?',
      ch: 'How much does it many cost?'
    }],
    [{  id: 481,
      sntc: 'Fantastik nəticəm sayəsində bu tətbiqi çox sevirəm',
      tr: "I'm fond of this application thanks to my fantastic result",
      ch: "I'm fond of this application thank thanks to my fantastic result"
    },
    {  id: 482,
      sntc: 'O bizimlə deyil',
      tr: "She isn't with us",
      ch: "She isn't with them is us"
    },
    {  id: 483,
      sntc: 'Parkda kimlər var?',
      tr: "Who's in the park?",
      ch: "Who's in the there is park?"
    },
    {  id: 484,
      sntc: 'O məşğul deyil. O azaddır',
      tr: "He isn't busy. He's free",
      ch: "He isn't is I am busy. He's free"
    },
    {  id: 485,
      sntc: 'O çox optimistdir',
      tr: "She's very optimistic",
      ch: "She's very many lazy optimistic"
    },
    {  id: 486,
      sntc: 'Bu iş adamı çox zəngindir',
      tr: 'This businessman is very rich',
      ch: 'This businessman the are is very rich'
    },
    {  id: 487,
      sntc: 'Onun həyat yoldaşı alış-verişi elə də tez-tez etmir',
      tr: "His wife doesn't do the shopping so often",
      ch: "His wife doesn't do does he the shopping so often"
    },
    {  id: 488,
      sntc: 'O, buna ehtiyac duyur',
      tr: 'She needs it',
      ch: 'She needs need these it'
    },
    {  id: 489,
      sntc: 'Dostun nə qədər ingilis sözü bilmək istəyir?',
      tr: 'How many English words does your friend want to know?',
      ch: 'How many English work words does your friend want to know?'
    },
    {  id: 490,
      sntc: 'Pul da vacibdir',
      tr: 'Money is important, too',
      ch: 'Money is many are important, too'
    }],
    [{  id: 491,
      sntc: 'O, bütün bu qaydaları xatırlayır?',
      tr: 'Does he remember all these rules?',
      ch: 'Does he remember I Do all these rules?'
    },
    {  id: 492,
      sntc: 'Biz bunu xatırlayırıq',
      tr: 'We remember it',
      ch: 'We remember Well know it'
    },
    {  id: 493,
      sntc: 'O, belə düşünür',
      tr: 'He thinks so',
      ch: 'He thinks also know so'
    },
    {  id: 494,
      sntc: 'Bu dərsləri öyrənməyi həqiqətən xoşlayıram',
      tr: 'I really like learning these lessons',
      ch: 'I really like stydying learning these lessons'
    },
    {  id: 495,
      sntc: 'O, bunu xatırlayır',
      tr: 'She remembers it',
      ch: 'She remembers it remember know'
    },
    {  id: 496,
      sntc: 'Ən yaxın dostunun adı nədir?',
      tr: "What's your best friend's name?",
      ch: "What's your best friend's name you like?"
    },
    {  id: 497,
      sntc: 'Mənim səviyyəm qabaqcıldır',
      tr: 'My level is Advanced',
      ch: 'My level is Advanced are We'
    },
    {  id: 498,
      sntc: 'Bunu etməkdən zövq alıram',
      tr: 'I enjoy doing it',
      ch: 'I enjoy doing do this it'
    },
    {  id: 499,
      sntc: 'İkinci yerdə kimdir?',
      tr: 'Who is in the second place?',
      ch: 'Who is in the first are second place?'
    },
    {  id: 500,
      sntc: 'O, tətildədir',
      tr: "She's on holiday",
      ch: "She's on at home holiday"
    }],
    ],
    [   //elementary

    ],
    [   //pre-intermediate

    ],
    [],
    []
  ]
  };

// let obj=[];
// for (let i=40; i<50; i++){
//     for(let a=0; a<initialState.sentences[0][0].length; a++){
//         // obj.id=initialState.sentences[0][i][a].id
//         obj.push(initialState.sentences[0][i][a].tr)}}
// setTimeout(() => {console.log(obj)}, 1000)


const azEnSentences = (state=initialState, action)=>{
  return state
}

export default azEnSentences
