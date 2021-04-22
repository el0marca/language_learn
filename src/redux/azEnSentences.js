
const initialState = {
  sentences: [
    [
    [{ id: 1, sntc: 'O orada işləyir', tr: 'He works there',ch: 'He works here study there' },
    { id: 2, sntc: 'Mən bunu bilirəm', tr: 'I know it', ch: 'I know understand it' },
    { id: 3, sntc: 'Mən işə gedirəm', tr: 'I go to work',ch: 'I go to school work' },
    { id: 4, sntc: 'O bunu bilir', tr: 'She knows it',ch: 'She knows likes it' },
    { id: 5,sntc: 'Mən bu ölkədə yaşayıram', tr: 'I live in this country', ch: 'I live We city in this country'},
    { id: 6, sntc: 'O bunu başa düşür', tr: 'He understands it', ch: 'He understands know They it' },
    { id: 7, sntc: 'Mən bunu görürəm', tr: 'I see it',  ch: 'I see it' },
    { id: 8, sntc: 'Mən bunu çox yaxşı başa düşürəm', tr: 'I understand it very well', ch:'I understand He like it very well'},
    { id: 9, sntc: 'O bunu istəyir', tr: 'He wants it', ch: 'He wants We know it' },
    { id: 10, sntc: 'O orada işləyir', tr: 'She works there',ch: 'She study works there'}],
    [{ id: 11, sntc: 'Mənim maşınım var', tr: 'I have a car',ch: 'I have We house a car' },
    { id: 12, sntc: 'O bu səhvi görür', tr: 'He sees this mistake',ch: 'He We look sees this mistake'},
    { id: 13, sntc: 'Mən özümü xoşbəxt hiss edirəm', tr: 'I feel happy',ch: 'I feel good We happy' },
    { id: 14, sntc: 'O daha çox praktika istəyir', tr: 'She wants more practice',ch: 'She wants I more like practice'},
    { id: 15, sntc: 'Mən də orada işləyirəm', tr: 'I also work there', ch: 'I also work study here there' },
    { id: 16, sntc: 'Bu marağlı gəlir', tr: 'It seems interesting', ch: 'It He seems looks interesting' },
    { id: 17, sntc: 'Bu tez-tez baş verir', tr: 'It happens often',ch: 'It happens looks sometimes often' },
    { id: 18, sntc: 'Onun böyük evi var', tr: 'She has a big house',ch: 'She has a big car We house' },
    { id: 19, sntc: 'Mən bu şəhərdə yaşayıram', tr: 'I live in this city', ch: 'I live We country in this city' },
    { id: 20, sntc: 'Mən daha çox praktika istəyirəm', tr: 'I want more practice', ch: 'I We like want more practice'}],
    [{ id: 21, sntc: 'Mən parka getmək istəyirəm', tr: 'I want to go to the park', ch: 'I You want school to go to the park'},
    { id: 22, sntc: 'Onun dollarları var', tr: 'She has dollars', ch: 'She has dollars We have' },
    { id: 23, sntc: 'Onun təklifləri var', tr: 'She has offers', ch: 'She has I offers money' },
    { id: 24, sntc: 'O İngilis dilini öyrənməyə çalışır',tr: 'He tries to learn English', ch: 'He We tries study to learn English'},
    { id: 25, sntc: 'O bunu çox yaxşı edir', tr: 'She does it very well',ch: 'She does it very well good do' },
    { id: 26, sntc: 'O tez-tez kinoya gedir', tr: 'She often goes to the cinema',ch: 'She often I go goes to the cinema'},
    { id: 27, sntc: 'Mən bunu anlamağa çalışıram', tr: 'I try to understand it',ch: 'I try We know to understand it'},
    { id: 28, sntc: 'Onun təklifi var', tr: 'He has an offer', ch: 'He has I have an offer' },
    { id: 29, sntc: 'O mənə kömək etməyə çalışır', tr: 'He tries to help me',ch: 'He tries We wants to help me'},
    { id: 30, sntc: 'Mənim təklifim var', tr: 'I have an offer',ch: 'I have You offers an offer' }],
    [{ id: 31, sntc: 'Bu dərslər mənə kömək edir', tr: 'These lessons help me',ch: 'These this like lessons help me'},
    { id: 32, sntc: 'Mənim dostum bunu etməyə cəhd edir', tr: 'My friend tries to do it',ch: 'My Your girlfriend friend tries to do it'},
    { id: 33, sntc: 'İdeyanız çox maraqlı gəlir', tr: 'Your idea seems very interesting',ch: 'Your My idea look seems very interesting'},
    { id: 34, sntc: 'Mənim atam adətən bütün məlumatları yoxlayır', tr: 'My father usually checks all the information',ch: 'My father usually know mother checks all the information'},
    { id: 35, sntc: 'Mənim atamın maşını var', tr: 'My father has a car',ch: 'My father have Your has a car' },
    { id: 36, sntc: 'Onun şirkəti var ', tr: 'She has a company',ch: 'She We have has a company' },
    { id: 37, sntc: 'Bizim anamız da eyni fikirdədir ', tr: 'Our mother thinks the same',ch: 'Our We mother know thinks the same'},
    { id: 38, sntc: 'Bu dərslər çox faydalı görünür', tr: 'These lessons seem very useful', ch: 'These this study lessons seem very useful'},
    { id: 39, sntc: 'Həmin təklif maraqlı gəlir', tr: 'That offer seems interesting', ch: 'That this like offer seems interesting'},
    { id: 40, sntc: 'Bu şirkətin pulu var', tr: 'This company has money', ch: 'This that company have has money' }],
    [{ id: 41, sntc: 'Mənim bacım var', tr: 'I have a sister', ch: 'I have We a an sister' },
    { id: 42, sntc: 'O bunu bilir', tr: 'She knows it', ch: 'She I understand knows it' },
    { id: 43, sntc: 'Mənim bacım bu yerdə yaşayır', tr: 'My sister lives in this place', ch: 'My Your works sister lives in this place'},
    { id: 44, sntc: 'Sən İngilis dilində çox yaxşı danışırsan', tr: 'You speak English very well', ch: 'You I speak read English very well'},
    { id: 45, sntc: 'O mənə kömək edir ', tr: 'She helps me', ch: 'She We helps you me'},
    { id: 46, sntc: 'O bunu istəyir', tr: 'He wants it', ch: 'He wants We know it' },
    { id: 47, sntc: 'Mənim qardaşım da eyni fikirdədir', tr: 'My brother thinks the same', ch: 'My brother father thinks seem the same'},
    { id: 48, sntc: 'O sənin üçün darıxır', tr: 'He misses you', ch: 'He I know misses you'},
    { id: 49, sntc: 'Onun pişiyi var', tr: 'She has a cat', ch: 'She have has an a cat'},
    { id: 50, sntc: 'O İngilis kitablarını oxuyur', tr: 'She reads English books', ch: 'She speak I reads English books'}],
    [{
      id: 51,
      sntc: 'Mən yaxşı iş sahibi olmaq istəyirəm',
      tr: 'I want to have a good job',
      ch: 'I want to have a good job'
    },
    {
      id: 52,
      sntc: 'Mən İngilis dilində səlis və düzgün danışmaq istəyirəm',
      tr: 'I want to speak English fluently and correctly',
      ch: 'I want to speak English fluently and correctly'
    },
    {
      id: 53,
      sntc: 'Mən İngilis dilimi təkmilləşdirmək istəyirəm',
      tr: 'I want to improve my English',
      ch: 'I want to improve my English'
    },
    {
      id: 54,
      sntc: 'Mənim dostum xaricdə yaşamaq istəyir',
      tr: 'My friend wants to live abroad',
      ch: 'My friend wants to live abroad'
    },
    {
      id: 55,
      sntc: 'Mən xaricə getmək istəyirəm',
      tr: 'I want to go abroad',
      ch: 'I want to go abroad'
    },
    {
      id: 56,
      sntc: 'O İngilis dilini bilmək istəyir',
      tr: 'He wants to know English',
      ch: 'He wants to know English'
    },
    {
      id: 57,
      sntc: 'Mən başqa yerə getmək istəyirəm',
      tr: 'I want to go to another place',
      ch: 'I want to go to another place'
    },
    {
      id: 58,
      sntc: 'Mən İngilis dilində düzgün danışmaq istəyirəm',
      tr: 'I want to speak English correctly',
      ch: 'I want to speak English correctly'
    },
    {
      id: 59,
      sntc: 'Mənim valideynlərim başqa yerdə yaşamaq istəyirlər',
      tr: 'My parents want to live in another place',
      ch: 'My parents want to live in another place'
    },
    {
      id: 60,
      sntc: 'Mən sənə təşəkkür etmək istəyirəm',
      tr: 'I want to thank you',
      ch: 'I want to thank you'
    }],
    [{
      id: 61,
      sntc: 'Bu üsul mənim xoşuma gəlir',
      tr: 'I like this method',
      ch: 'I like this method'
     },
    {
      id: 62,
      sntc: 'Mən bu yeri həqiqətən çox bəyənirəm',
      tr: 'I really like this place',
      ch: 'I really like this place'
     },
    {
      id: 63,
      sntc: 'Bu dərs onun da xoşuna gəlir',
      tr: 'He also likes this lesson',
      ch: 'He also likes this lesson'
     },
    {
      id: 64,
      sntc: 'O həkim olmaq istəyərdi',
      tr: 'She would like to become a doctor',
      ch: 'She would like to become a doctor'
     },
    {
      id: 65,
      sntc: 'Mən xaricə getmək istərdim',
      tr: 'I would like to go abroad',
      ch: 'I would like to go abroad'
     },
    {
      id: 66,
      sntc: 'Sənin fikrin xoşuma gəlir',
      tr: 'I like your idea',
      ch: 'I like your idea'
     },
    {
      id: 67,
      sntc: 'Mən iş adamı olmaq istərdim',
      tr: 'I would like to become a businessman',
      ch: 'I would like to become a businessman'
     },
    {
      id: 68,
      sntc: 'O başqa bir yerə getmək istəyərdi',
      tr: 'He would like to go to another place',
      ch: 'He would like to go to another place'
     },
    {
      id: 69,
      sntc: 'Mən bilirəm ki onlar bunu bəyənirlər',
      tr: 'I know they like it',
      ch: 'I know they like it'
     },
    {
      id: 70,
      sntc: 'Biz də bunu etməyi xoşlayırıq',
      tr: 'We also like to do it',
      ch: 'We also like to do it'
     }],
    [{
      id: 71,
      sntc: 'O yaxşı iş tapmaq istəmir',
      tr: 'She doesn’t want to find a good job',
      ch: 'She doesn’t want to find a good job'
     },
    {
      id: 72,
      sntc: 'O bunu etməyə çalışmır',
      tr: 'He doesn’t try to do it',
      ch: 'He doesn’t try to do it'
     },
    {
      id: 73,
      sntc: 'Mən bu ölkədə yaşamaq istəmirəm',
      tr: 'I don’t want to live in this country',
      ch: 'I don’t want to live in this country'
     },
    {
      id: 74,
      sntc: 'Mən belə düşünmürəm',
      tr: 'I don’t think so',
      ch: 'I don’t think so'
     },
    {
      id: 75,
      sntc: 'Mən burada oxumaq istəmirəm ',
      tr: 'I don’t want to study here',
      ch: 'I don’t want to study here'
     },
    {
      id: 76,
      sntc: 'Bu faydalı görünmür',
      tr: 'It doesn’t seem useful',
      ch: 'It doesn’t seem useful'
     },
    {
      id: 77,
      sntc: 'Mən bu barədə fikirləşmək istəmirəm',
      tr: 'I don’t want to think about it',
      ch: 'I don’t want to think about it'
     },
    {
      id: 78,
      sntc: 'Mən  bu insanları başa düşmürəm',
      tr: 'I don’t understand these people',
      ch: 'I don’t understand these people'
     },
    {
      id: 79,
      sntc: 'Mən bunu müzakirə etmək istəmirəm',
      tr: 'I don’t want to discuss it',
      ch: 'I don’t want to discuss it'
     },
    {
      id: 80,
      sntc: 'Onun maşını yoxdur',
      tr: 'She doesn’t have a car',
      ch: 'She doesn’t have a car'
     }],
    [{
      id: 81,
      sntc: 'Mənim bacım bu müəllimi tanımır',
      tr: "My sister doesn't know this teacher",
      ch: "My sister doesn't know this teacher"
     },
    {
      id: 82,
      sntc: 'Mənim qardaşım bunu sonradan etmək istəmir',
      tr: 'My brother doesn’t want to do it later',
      ch: 'My brother doesn’t want to do it later'
     },
    {
      id: 83,
      sntc: 'Onların şirkəti bunu etməyə çalışmır',
      tr: 'Their company doesn’t try to do it',
      ch: 'Their company doesn’t try to do it'
     },
    {
      id: 84,
      sntc: 'Mənim dostum orada oxumaq istəmir ',
      tr: 'My friend doesn’t want to study there',
      ch: 'My friend doesn’t want to study there'
     },
    {
      id: 85,
      sntc: 'Bizim müəllim bunu istəmir',
      tr: 'Our teacher doesn’t want it',
      ch: 'Our teacher doesn’t want it'
     },
    {
      id: 86,
      sntc: 'Bu təklif o qədər də maraqlı görünmür',
      tr: 'This offer doesn’t seem so interesting',
      ch: 'This offer doesn’t seem so interesting'
     },
    {
      id: 87,
      sntc: 'Onların valideynləri özlərini xoşbəxt hiss etmirlər',
      tr: 'Their parents don’t feel happy',
      ch: 'Their parents don’t feel happy'
     },
    {
      id: 88,
      sntc: 'O düşünür ki pul insanlara xoşbəxtlik gətirmir',
      tr: 'He thinks money doesn’t bring people happiness',
      ch: 'He thinks money doesn’t bring people happiness'
     },
    {
      id: 89,
      sntc: 'Mənim qardaşım mənimlə razı deyil',
      tr: 'My brother doesn’t agree with me',
      ch: 'My brother doesn’t agree with me'
     },
    {
      id: 90,
      sntc: 'Onun gəliri böyük görünmür',
      tr: "It's profit doesn’t seem big",
      ch: "It's profit doesn’t seem big"
     }],
    [{
      id: 91,
      sntc: 'Bizə həqiqətən bunu başa düşmək lazımdır',
      tr: 'We really need to understand it',
      ch: 'We really need to understand it'
     },
    {
      id: 92,
      sntc: 'Mənim sənin məsləhətinə ehtiyacım var',
      tr: 'I need your advice',
      ch: 'I need your advice'
     },
    {
      id: 93,
      sntc: 'Sənə bu qaydanı yadda saxlamaq lazımdır',
      tr: 'You need to remember this rule',
      ch: 'You need to remember this rule'
     },
    {
      id: 94,
      sntc: 'Mənim daha çox pula ehtiyacım var',
      tr: 'I need more money',
      ch: 'I need more money'
     },
    {
      id: 95,
      sntc: 'Onun sizin köməyinizə ehtiyacı var',
      tr: 'She needs your help',
      ch: 'She needs your help'
     },
    {
      id: 96,
      sntc: 'Mən düşünürəm sənə az işləmək lazımdır',
      tr: 'I think you need to work less',
      ch: 'I think you need to work less'
     },
    {
      id: 97,
      sntc: 'Dostuma indicə sənin məsləhətin lazımdır',
      tr: 'My friend needs your advice right now',
      ch: 'My friend needs your advice right now'
     },
    {
      id: 98,
      sntc: 'Bizə həqiqətən bu lazımdır',
      tr: 'We really need it',
      ch: 'We really need it'
     },
    {
      id: 99,
      sntc: 'Mənə həqiqətən daha çox pul lazımdır',
      tr: 'I really need more money',
      ch: 'I really need more money'
     },
    {
      id: 100,
      sntc: 'O, anasına zəng etməlidir',
      tr: 'She needs to call mother',
      ch: 'She needs to call mother'
     }],
    [{
      id: 101,
      sntc: 'Sən nəticələrini yaxşılaşdırmağa çalışırsan?',
      tr: 'Do you try to improve your results?',
      ch: 'Do you try to improve your results?'
     },
    {
      id: 102,
      sntc: 'Sənin boş vaxtın var?',
      tr: 'Do you have free time?',
      ch: 'Do you have free time?'
     },
    {
      id: 103,
      sntc: 'Mən səhv edirəm?',
      tr: 'Do I make mistake?',
      ch: 'Do I make mistake?'
     },
    {
      id: 104,
      sntc: 'Sən bunu xatırlayırsan?',
      tr: 'Do you remember it?',
      ch: 'Do you remember it?'
     },
    {
      id: 105,
      sntc: 'Sənin bu problemdən xəbərin var?',
      tr: 'Do you know about this problem?',
      ch: 'Do you know about this problem?'
     },
    {
      id: 106,
      sntc: 'Sənin köməyə ehtiyacın var?',
      tr: 'Do you need help?',
      ch: 'Do you need help?'
     },
    {
      id: 107,
      sntc: 'Sən tez-tez buranı ziyarət edirsən?',
      tr: 'Do you often visit this place?',
      ch: 'Do you often visit this place?'
     },
    {
      id: 108,
      sntc: 'Mənim məsləhətimə ehtiyacın var?',
      tr: 'Do you need my advice?',
      ch: 'Do you need my advice?'
     },
    {
      id: 109,
      sntc: 'Onlar bu qərarı dəstəkləyirlər?',
      tr: 'Do they support this decision?',
      ch: 'Do they support this decision?'
     },
    {
      id: 110,
      sntc: 'Sən tez-tez ona zəng edirsən?',
      tr: 'Do you often call him?',
      ch: 'Do you often call him?'
     }],
    [{
      id: 111,
      sntc: 'O onun sözlərinə məhəl qoymur?',
      tr: 'Does he ignore her words?',
      ch: 'Does he ignore her words?'
     },
    {
      id: 112,
      sntc: 'Bu qəribə görünür?',
      tr: 'Does it look strange?',
      ch: 'Does it look strange?'
     },
    {
      id: 113,
      sntc: 'O bunu tez-tez eşidir?',
      tr: 'Does she often hear it?',
      ch: 'Does she often hear it?'
     },
    {
      id: 114,
      sntc: 'O hərdən buna məhəl qoymurmu?',
      tr: 'Does she ignore it sometimes?',
      ch: 'Does she ignore it sometimes?'
     },
    {
      id: 115,
      sntc: 'Bu sizə kömək edir?',
      tr: 'Does it help you?',
      ch: 'Does it help you?'
     },
    {
      id: 116,
      sntc: 'O, bütün bu qaydaları xatırlayır?',
      tr: 'Does he remember all these rules',
      ch: 'Does he remember all these rules'
     },
    {
      id: 117,
      sntc: 'O, bunu tez-tez deyir?',
      tr: 'Does she often says it?',
      ch: 'Does she often says it?'
     },
    {
      id: 118,
      sntc: 'O, bunu tez-tez istifadə edir?',
      tr: 'Does he often use it?',
      ch: 'Does he often use it?'
     },
    {
      id: 119,
      sntc: 'O, tez-tez İngiliscə danışır?',
      tr: 'Does she often speak English?',
      ch: 'Does she often speak English?'
     },
    {
      id: 120,
      sntc: 'Bu peşə onun xoşuna gəlir?',
      tr: 'Does she like this profession?',
      ch: 'Does she like this profession?'
     }],
     [{
      id: 121,
      sntc: 'Sənin dostun səninlə razıdır?',
      tr: 'Does your friend agree with you?',
      ch: 'Does your friend agree with you?'
    },
    {
      id: 122,
      sntc: 'Sənin valideynlərin bunu başa düşür?',
      tr: 'Do your parents understand it?',
      ch: 'Do your parents understand it?'
    },
    {
      id: 123,
      sntc: 'Bu sınaq çox asan görünür?',
      tr: 'Does this test seem very easy?',
      ch: 'Does this test seem very easy?'
    },
    {
      id: 124,
      sntc: 'Sənin dostların səninlə razıdırlar?',
      tr: 'Do your friends agree with you?',
      ch: 'Do your friends agree with you?'
    },
    {
      id: 125,
      sntc: 'Bu nəticə səni motivasiya edir?',
      tr: 'Does this result motivate you?',
      ch: 'Does this result motivate you?'
    },
    {
      id: 126,
      sntc: 'Sənin dostun həmişə sənə dəstək olurmu?',
      tr: 'Does your friend always support you?',
      ch: 'Does your friend always support you?'
    },
    {
      id: 127,
      sntc: 'Bu məlumat əhəmiyyətsiz görünür?',
      tr: 'Does this information seem unimportant?',
      ch: 'Does this information seem unimportant?'
    },
    {
      id: 128,
      sntc: 'Sənin dostların əla nəticələr göstərirlər?',
      tr: 'Do your friends show excellent results?',
      ch: 'Do your friends show excellent results?'
    },
    {
      id: 129,
      sntc: 'Bu insan çox yaxşı görünür?',
      tr: 'Does this person seem very good?',
      ch: 'Does this person seem very good?'
    },
    {
      id: 130,
      sntc: 'O, şagird səhvlərə yol verir?',
      tr: 'Does that student make mistakes?',
      ch: 'Does that student make mistakes?'
    }],
    [{
      id: 131,
      sntc: 'Pul onu maraqlandırmır',
      tr: "Money doesn't interest her",
      ch: "Money doesn't interest her"
    },
    {
      id: 132,
      sntc: 'Pul onu maraqlandırır?',
      tr: 'Does money interest her?',
      ch: 'Does money interest her?'
    },
    {
      id: 133,
      sntc: 'Bu vaxtdan-vaxta baş verir',
      tr: 'It happens from time to time',
      ch: 'It happens from time to time'
    },
    {
      id: 134,
      sntc: 'Bu vaxtdan-vaxta baş verir?',
      tr: 'Does it happens from time to time?',
      ch: 'Does it happens from time to time?'
    },
    {
      id: 135,
      sntc: 'Onlar bunu dəyişməyə çalışırlar',
      tr: 'They try to change it',
      ch: 'They try to change it'
    },
    {
      id: 136,
      sntc: 'Onlar bunu dəyişməyə çalışırlar?',
      tr: 'Do they try to change it?',
      ch: 'Do they try to change it?'
    },
    {
      id: 137,
      sntc: 'O bizimlə razı deyil',
      tr: "He doesn't agree with us",
      ch: "He doesn't agree with us"
    },
    {
      id: 138,
      sntc: 'O, bizimlə razıdır?',
      tr: 'Does he agree with us?',
      ch: 'Does he agree with us?'
    },
    {
      id: 139,
      sntc: 'O, bu yeri bəyənir',
      tr: 'She likes this place',
      ch: 'She likes this place'
    },
    {
      id: 140,
      sntc: 'O, bu yeri bəyənir?',
      tr: 'Does she like this place?',
      ch: 'Does she like this place?'
    }],
    [{
      id: 141,
      sntc: 'Sən ora necə çatırsan?',
      tr: 'How do you get there?',
      ch: 'How do you get there?'
    },
    {
      id: 142,
      sntc: 'Sən adətən evə necə çatırsan?',
      tr: 'How do you usually get home?',
      ch: 'How do you usually get home?'
    },
    {
      id: 143,
      sntc: 'Sən özünü nə vaxt xoşbəxt hiss edirsən?',
      tr: 'When do you feel happy?',
      ch: 'When do you feel happy?'
    },
    {
      id: 144,
      sntc: 'Sən burada nəyi bəyənirsən?',
      tr: 'What do you like here?',
      ch: 'What do you like here?'
    },
    {
      id: 145,
      sntc: 'Sən hansı İngilis kitablarını oxuyursan?',
      tr: 'What English books do you read?',
      ch: 'What English books do you read?'
    },
    {
      id: 146,
      sntc: 'Sən niyə ondan asılısan?',
      tr: 'Why do you depend on him?',
      ch: 'Why do you depend on him?'
    },
    {
      id: 147,
      sntc: 'Adətən bunu kim yoxlayır?',
      tr: 'Who usually checks it?',
      ch: 'Who usually checks it?'
    },
    {
      id: 148,
      sntc: 'İşə kim gedir?',
      tr: 'Who goes to work?',
      ch: 'Who goes to work?'
    },
    {
      id: 149,
      sntc: 'Bu səhvi kim görür?',
      tr: 'Who sees this mistake?',
      ch: 'Who sees this mistake?'
    },
    {
      id: 150,
      sntc: 'Sən adətən orada kimi görürsən?',
      tr: 'Who do you usually see there?',
      ch: 'Who do you usually see there?'
    }],
    [{
      id: 151,
      sntc: 'Bu onu nə üçün maraqlandırır?',
      tr: 'Why does it interest him?',
      ch: 'Why does it interest him?'
    },
    {
      id: 152,
      sntc: 'O yaddaşını necə məşq edir?',
      tr: 'How does he train his memory?',
      ch: 'How does he train his memory?'
    },
    {
      id: 153,
      sntc: 'O, adətən boş vaxtını necə keçirir?',
      tr: 'How does she usually spend her free time?',
      ch: 'How does she usually spend her free time?'
    },
    {
      id: 154,
      sntc: 'O harada işləyir?',
      tr: 'Where does she work?',
      ch: 'Where does she work?'
    },
    {
      id: 155,
      sntc: 'Onun neçə dolları var?',
      tr: 'How many dollars does he have?',
      ch: 'How many dollars does he have?'
    },
    {
      id: 156,
      sntc: 'O, bu problemləri necə həll edir?',
      tr: 'How does he solve these problems?',
      ch: 'How does he solve these problems?'
    },
    {
      id: 157,
      sntc: 'O, nəyi əlavə etmək istəyir?',
      tr: 'What does she want to add?',
      ch: 'What does she want to add?'
    },
    {
      id: 158,
      sntc: 'O, kimi sevir?',
      tr: 'Who does he love?',
      ch: 'Who does he love?'
    },
    {
      id: 159,
      sntc: 'O, nə qədər pul ödəyir?',
      tr: 'How much money does he pay?',
      ch: 'How much money does he pay?'
    },
    {
      id: 160,
      sntc: 'O adətən nə deyir?',
      tr: 'What does she usually say?',
      ch: 'What does she usually say?'
    }],
    [{
      id: 161,
      sntc: 'Onun oğlu işə çatmağı nə qədər vaxt alır?',
      tr: 'How long does it take his son to get to work?',
      ch: 'How long does it take his son to get to work?'
    },
    {
      id: 162,
      sntc: 'Onun müəllimi nə cür nümunələr göstərir?',
      tr: 'What kind of examples does his teacher give?',
      ch: 'What kind of examples does his teacher give?'
    },
    {
      id: 163,
      sntc: 'Sənin valideynlərin harada işləyir?',
      tr: 'Where do your parents work?',
      ch: 'Where do your parents work?'
    },
    {
      id: 164,
      sntc: 'Sənin atan işə nə vaxt gəlir?',
      tr: 'What time does your father come to work?',
      ch: 'What time does your father come to work?'
    },
    {
      id: 165,
      sntc: 'Belə şeylər nə qədər tez-tez baş verir?',
      tr: 'How often do these things happen?',
      ch: 'How often do these things happen?'
    },
    {
      id: 166,
      sntc: 'Sənin dostun ora çatmağı nə qədər vaxt alır?',
      tr: 'How long does it take your friend to get there?',
      ch: 'How long does it take your friend to get there?'
    },
    {
      id: 167,
      sntc: 'Sənin müdirin adətən nə vəd edir?',
      tr: 'What does your boss usually promise?',
      ch: 'What does your boss usually promise?'
    },
    {
      id: 168,
      sntc: 'Bu şeylər nə qədər tez-tez baş verir?',
      tr: 'How often do these things happen?',
      ch: 'How often do these things happen?'
    },
    {
      id: 169,
      sntc: 'Nəyə görə bu fikir belə maraqlı görünür?',
      tr: 'Why does this idea seem so interest?',
      ch: 'Why does this idea seem so interest?'
    },
    {
      id: 170,
      sntc: 'Bu səyləri sənin müəllimin sənə nə qədər müntəzəm olaraq deyir?',
      tr: 'How regularly does your teacher tell you these things?',
      ch: 'How regularly does your teacher tell you these things?'
    }],
    [{
      id: 171,
      sntc: 'O bunu bilmir',
      tr: "He doesn't know it",
      ch: "He doesn't know it"
    },
    {
      id: 172,
      sntc: 'Nə faydasız görünür?',
      tr: 'What seems useless?',
      ch: 'What seems useless?'
    },
    {
      id: 173,
      sntc: 'Bizim kifayət qədər praktikamız var?',
      tr: 'Do we have enough practice?',
      ch: 'Do we have enough practice?'
    },
    {
      id: 174,
      sntc: 'O səni indicə görmək istəyir',
      tr: 'She wants to see you right now',
      ch: 'She wants to see you right now'
    },
    {
      id: 175,
      sntc: 'Mən xoşbəxt olmaq istəyirəm',
      tr: 'I want to be happy',
      ch: 'I want to be happy'
    },
    {
      id: 176,
      sntc: 'Onun maşını var',
      tr: 'She has a car',
      ch: 'She has a car'
    },
    {
      id: 177,
      sntc: 'O, xaricdə yaşamaq istəyir?',
      tr: 'Does he want to live abroad?',
      ch: 'Does he want to live abroad?'
    },
    {
      id: 178,
      sntc: 'Sən adətən nə sifariş edirsən?',
      tr: 'What do you usually order?',
      ch: 'What do you usually order?'
    },
    {
      id: 179,
      sntc: 'O çox zəhmət çəkir',
      tr: 'He works very hard',
      ch: 'He works very hard'
    },
    {
      id: 180,
      sntc: 'Onun hansı İngilis kitabları var?',
      tr: 'What English books does he have?',
      ch: 'What English books does he have?'
    }],
    [{
      id: 181,
      sntc: 'O, bunu necə izah edir?',
      tr: 'How does she explain it?',
      ch: 'How does she explain it?'
    },
    {
      id: 182,
      sntc: 'Onlar işə gedirlər',
      tr: 'They go to work',
      ch: 'They go to work'
    },
    {
      id: 183,
      sntc: 'Bu bizdən asılıdır',
      tr: 'It depends on us',
      ch: 'It depends on us'
    },
    {
      id: 184,
      sntc: 'Nəyə görə valideynləriniz sizinlə razılaşmır?',
      tr: 'Why do your parent disagree with you?',
      ch: 'Why do your parent disagree with you?'
    },
    {
      id: 185,
      sntc: 'O, özünü çox xoşbəxt hiss edir',
      tr: 'She feels so happy',
      ch: 'She feels so happy'
    },
    {
      id: 186,
      sntc: 'O ,hansı içkiyə üstünlük verir?',
      tr: 'Which drink does he prefer?',
      ch: 'Which drink does he prefer?'
    },
    {
      id: 187,
      sntc: 'Bu mənə kömək edir',
      tr: 'It helps me',
      ch: 'It helps me'
    },
    {
      id: 188,
      sntc: 'Mənə İngilis dilində heç bir səhv etmədən danışmaq lazımdır',
      tr: 'I need to speak English without any mistakes',
      ch: 'I need to speak English without any mistakes'
    },
    {
      id: 189,
      sntc: 'O, müxtəlif kinolara baxır',
      tr: 'She watches different movies',
      ch: 'She watches different movies'
    },
    {
      id: 190,
      sntc: 'Sən tez-tez musiqiyə qulaq asırsan?',
      tr: 'Do you often listen to music?',
      ch: 'Do you often listen to music?'
    }],
    [{
      id: 191,
      sntc: 'Bu mənə kömək etmir',
      tr: "It doesn't help me",
      ch: "It doesn't help me"
    },
    {
      id: 192,
      sntc: 'Mən kompüter oyunları oynamaq istəmirəm',
      tr: "I don't want to play computer games",
      ch: "I don't want to play computer games"
    },
    {
      id: 193,
      sntc: 'Sənin məsləhətimə ehtiyacın var?',
      tr: 'Do you need my advice?',
      ch: 'Do you need my advice?'
    },
    {
      id: 194,
      sntc: 'Sən hər şeyi xatırlayırsan?',
      tr: 'Do you remember everything?',
      ch: 'Do you remember everything?'
    },
    {
      id: 195,
      sntc: 'Sənin nə qədər pulunuz var?',
      tr: 'How much money do you have?',
      ch: 'How much money do you have?'
    },
    {
      id: 196,
      sntc: 'Onlar bu qərarı dəstəkləyirlər?',
      tr: 'Do they support this decision?',
      ch: 'Do they support this decision?'
    },
    {
      id: 197,
      sntc: 'Səni kim dəstəkləyir?',
      tr: 'Who supports you?',
      ch: 'Who supports you?'
    },
    {
      id: 198,
      sntc: 'Mən səninlə razı deyiləm',
      tr: "I don't agree with you",
      ch: "I don't agree with you"
    },
    {
      id: 199,
      sntc: 'O, həqiqətən bunu xatırlayır',
      tr: 'He really remembers it',
      ch: 'He really remembers it'
    },
    {
      id: 200,
      sntc: 'Mən sənə təşəkkür etmək istəyirəm',
      tr: 'I want to thank you',
      ch: 'I want to thank you'
    }],
    [{
      id: 201,
      sntc: 'Mənim dostlarım bunu etməyə çalışır',
      tr: 'My friends tries to do it',
      ch: 'My friends tries to do it'
    },
    {
      id: 202,
      sntc: 'Biz İngilis dilində danışırıq',
      tr: 'We speak English',
      ch: 'We speak English'
    },
    {
      id: 203,
      sntc: 'O, nəyi əlavə etmək istəyir?',
      tr: 'What does she want to add?',
      ch: 'What does she want to add?'
    },
    {
      id: 204,
      sntc: 'Səni cəlb edən nədir?',
      tr: 'What attract you?',
      ch: 'What attract you?'
    },
    {
      id: 205,
      sntc: 'Səni nə ruhlandırır?',
      tr: 'What inspires you?',
      ch: 'What inspires you?'
    },
    {
      id: 206,
      sntc: 'Sənin anan ona bütün həqiqəti deyir?',
      tr: 'Does your mother tell him all the truth?',
      ch: 'Does your mother tell him all the truth?'
    },
    {
      id: 207,
      sntc: 'Mənə bu problemi həll etmək lazımdır',
      tr: 'I need to solve this problem',
      ch: 'I need to solve this problem'
    },
    {
      id: 208,
      sntc: 'Bizə nəyi dəyişmək lazımdır?',
      tr: 'What does we need to change?',
      ch: 'What does we need to change?'
    },
    {
      id: 209,
      sntc: 'O, yaddaşını necə məşq edir?',
      tr: 'How does he train his memory?',
      ch: 'How does he train his memory?'
    },
    {
      id: 210,
      sntc: 'Bu dərs çox darıxdırıcı gəlir?',
      tr: 'Does that lesson seem boring?',
      ch: 'Does that lesson seem boring?'
    }],
    [{
      id: 211,
      sntc: 'Bunu kim bilir?',
      tr: 'Who knows it?',
      ch: 'Who knows it?'
    },
    {
      id: 212,
      sntc: 'Mən həqiqətən qrammatikamı yaxşılaşdırmaq istəyirəm',
      tr: 'I really want to improve my grammar',
      ch: 'I really want to improve my grammar'
    },
    {
      id: 213,
      sntc: 'O, bunu tez-tez deyir',
      tr: 'Does he often says it?',
      ch: 'Does he often says it?'
    },
    {
      id: 214,
      sntc: 'Siz tez-tez buranı ziyarət edirsiniz?',
      tr: 'Do you often visit this place?',
      ch: 'Do you often visit this place?'
    },
    {
      id: 215,
      sntc: 'Mən xaricə getmək istərdim',
      tr: 'I would like to go abroad',
      ch: 'I would like to go abroad'
    },
    {
      id: 216,
      sntc: 'Onlar parlaq nəticələr göstərirlər',
      tr: 'They show brilliant results',
      ch: 'They show brilliant results'
    },
    {
      id: 217,
      sntc: 'Sən bunu tez-tez edirsən?',
      tr: 'Do you often do it?',
      ch: 'Do you often do it?'
    },
    {
      id: 218,
      sntc: 'O, sənə nə məsləhət verir?',
      tr: 'What advice does she give you?',
      ch: 'What advice does she give you?'
    },
    {
      id: 219,
      sntc: 'Onu orada nə cəlb edir?',
      tr: 'What attracts him there?',
      ch: 'What attracts him there?'
    },
    {
      id: 220,
      sntc: 'O, adətən nə deyir?',
      tr: 'What does he usually say?',
      ch: 'What does he usually say?'
    }],
    [{
      id: 221,
      sntc: 'Bu o qədər çətindir',
      tr: "It's so difficult",
      ch: "It's so difficult"
    },
    { id: 222, sntc: 'Bu yaxşıdır', tr: "It's good", ch: "It's good" },
    { id: 223, sntc: 'O arxayındır', tr: "She's sure", ch: "She's sure" },
    {
      id: 224,
      sntc: 'Bu o qədər yaxşıdır',
      tr: "It's so good",
      ch: "It's so good"
    },
    {
      id: 225,
      sntc: 'Biz parkdayıq',
      tr: "We're in the park",
      ch: "We're in the park"
    },
    {
      id: 226,
      sntc: 'O onun arvadıdır',
      tr: "She's his wife",
      ch: "She's his wife"
    },
    {
      id: 227,
      sntc: 'Bu o qədər vacibdir',
      tr: "It's so important",
      ch: "It's so important"
    },
    {
      id: 228,
      sntc: 'O, çox kasıbdır',
      tr: "He's very poor",
      ch: "He's very poor"
    },
    {
      id: 229,
      sntc: 'Biz dostuq',
      tr: "We're friends",
      ch: "We're friends"
    },
    {
      id: 230,
      sntc: 'O, məktəbdədir',
      tr: "He's at school",
      ch: "He's at school"
    }],
    [{
      id: 231,
      sntc: 'Bu vacib bir şeydir',
      tr: "It's an important thing",
      ch: "It's an important thing"
    },
    {
      id: 232,
      sntc: 'Sən xoşbəxt insansan',
      tr: "You're a happy person",
      ch: "You're a happy person"
    },
    { id: 233, sntc: 'Mən hazıram', tr: "I'm ready", ch: "I'm ready" },
    {
      id: 234,
      sntc: 'Bu sol tərəfdədir',
      tr: "It's on the left",
      ch: "It's on the left"
    },
    { id: 235, sntc: 'Bu sadədir', tr: "It's simple", ch: "It's simple" },
    {
      id: 236,
      sntc: 'Bu çox bahalıdır',
      tr: "It's too expensive",
      ch: "It's too expensive"
    },
    {
      id: 237,
      sntc: 'Bu qeyri-mümkündür',
      tr: "It's impossible",
      ch: "It's impossible"
    },
    {
      id: 238,
      sntc: 'O, tənbəl tələbədir',
      tr: "He's a lazy student",
      ch: "He's a lazy student"
    },
    { id: 239, sntc: 'Soyuqdur', tr: "It's cold", ch: "It's cold" },
    {
      id: 240,
      sntc: 'Bu çox yaxşı qərardır',
      tr: "It's a very good decision",
      ch: "It's a very good decision"
    }],
    [{  id: 241,
      sntc: 'Bu, elə çətin vəziyyətdir ki',
      tr: "It's such a difficult situation",
      ch: "It's such a difficult situation"
    },
    {  id: 242,
      sntc: 'Bu, asan tapşırıqdır',
      tr: "It's an easy exercise",
      ch: "It's an easy exercise"
    },
    {  id: 243,
      sntc: 'Bu, elə çətin imtahandır ki',
      tr: "It's such a difficult exam",
      ch: "It's such a difficult exam"
    },
    {  id: 244,
      sntc: 'O, elə qəribə insandır ki',
      tr: "He's such a strange person",
      ch: "He's such a strange person"
    },
    {  id: 245,
      sntc: 'O, peşəkar müəllimdir',
      tr: "He's a professional teacher",
      ch: "He's a professional teacher"
    },
    {  id: 246,
      sntc: 'Elə gözəl yerdir ki',
      tr: "It's such a beautiful place",
      ch: "It's such a beautiful place"
    },
    {  id: 247,
      sntc: 'O, o qədər xeyirxahdır',
      tr: "She's so kind",
      ch: "She's so kind"
    },
    { id: 248, sntc: 'Bu sadədir', tr: "It's simple", ch: "It's simple" },
    {  id: 249,
      sntc: 'O, gözəl qızdır',
      tr: "She's a beautiful girl",
      ch: "She's a beautiful girl"
    },
    {  id: 250,
      sntc: 'Bu, elə asan testdir ki',
      tr: "It's such an easy test",
      ch: "It's such an easy test"
    }],
    [{  id: 251,
      sntc: 'Suallar çox asandır',
      tr: 'The questions are very easy',
      ch: 'The questions are very easy'
    },
    {  id: 252,
      sntc: 'Onun iyirmi yaşı var',
      tr: 'He is twenty',
      ch: 'He is twenty'
    },
    {  id: 253,
      sntc: 'Mən əminəm, siz dünyanın ən yaxşı müəllimisiniz',
      tr: "I'm sure you're the best teacher in the world",
      ch: "I'm sure you're the best teacher in the world"
    },
    {  id: 254,
      sntc: 'Mənim qardaşımın on altı yaşı var',
      tr: 'My brother is sixteen',
      ch: 'My brother is sixteen'
    },
    {  id: 255,
      sntc: 'Tələbələr hazırdır',
      tr: 'The students are ready',
      ch: 'The students are ready'
    },
    {  id: 256,
      sntc: 'Onun oğlu zooparkdadır',
      tr: 'His son is in the zoo',
      ch: 'His son is in the zoo'
    },
    {  id: 257,
      sntc: 'Gün küləklidir',
      tr: 'The day is windy',
      ch: 'The day is windy'
    },
    {  id: 258,
      sntc: 'Bizim menecer çox peşəkardır',
      tr: 'Our manager is very professional',
      ch: 'Our manager is very professional'
    },
    {  id: 259,
      sntc: 'Bu söz mənim üçün yenidir',
      tr: 'This word is new for me',
      ch: 'This word is new for me'
    },
    {  id: 260,
      sntc: 'Bu şirkət çox zəngindir',
      tr: 'This company is very rich',
      ch: 'This company is very rich'
    }],
    [{  id: 261,
      sntc: 'Bu böyük səhv deyil',
      tr: "It isn't a big mistake",
      ch: "It isn't a big mistake"
    },
    {  id: 262,
      sntc: 'Mən evli deyiləm',
      tr: "I'm not married",
      ch: "I'm not married"
    },
    {  id: 263,
      sntc: 'Biz kədərli deyilik. Biz xoşbəxtik.',
      tr: "We aren't sad. We're happy.",
      ch: "We aren't sad. We're happy."
    },
    {  id: 264,
      sntc: 'Onlar bir yerdə deyillər',
      tr: "They aren't together",
      ch: "They aren't together"
    },
    {  id: 265,
      sntc: 'O, şəhərdə deyil.',
      tr: "He isn't in the city.",
      ch: "He isn't in the city."
    },
    {  id: 266,
      sntc: 'Soyuq deyil. İstidir',
      tr: "It isn't cold. It's warm",
      ch: "It isn't cold. It's warm"
    },
    {  id: 267,
      sntc: 'O, məşğul deyil. O sərbəstdir',
      tr: "He isn't busy. He's free",
      ch: "He isn't busy. He's free"
    },
    {  id: 268,
      sntc: 'Bu uzaqda deyil. Yaxındadır',
      tr: "It isn't far. It's near",
      ch: "It isn't far. It's near"
    },
    {  id: 269,
      sntc: 'Bu, çox da yaxşı qərar deyil',
      tr: "It isn't a very good decision",
      ch: "It isn't a very good decision"
    },
    {  id: 270,
      sntc: 'Bu, çox da böyük səhv deyil',
      tr: "It isn't a very big mistake",
      ch: "It isn't a very big mistake"
    }],
    [{  id: 271,
      sntc: 'Bu onun öz mənzilidir?',
      tr: 'Is it his own flat?',
      ch: 'Is it his own flat?'
    },
    {  id: 272,
      sntc: 'O, öz mənzilindədir?',
      tr: 'Is he in your own flat?',
      ch: 'Is he in your own flat?'
    },
    {  id: 273,
      sntc: 'O, tənbəl oğlandır?',
      tr: 'Is he a lazy boy?',
      ch: 'Is he a lazy boy?'
    },
    {  id: 274,
      sntc: 'Bu gülməli videodur?',
      tr: 'Is it a funny video?',
      ch: 'Is it a funny video?'
    },
    {  id: 275,
      sntc: 'Bu böyük uğurdur?',
      tr: 'Is it a big success?',
      ch: 'Is it a big success?'
    },
    {  id: 276,
      sntc: 'Bu, onun öz evidir?',
      tr: 'Is it her own house?',
      ch: 'Is it her own house?'
    },
    {  id: 277,
      sntc: 'O, binadadır?',
      tr: 'Is he in the building?',
      ch: 'Is he in the building?'
    },
    {  id: 278,
      sntc: 'Bu sağ tərəfdədir?',
      tr: 'Is it on the right?',
      ch: 'Is it on the right?'
    },
    {  id: 279,
      sntc: 'Burada soyuqdur?',
      tr: 'Is it cold here?',
      ch: 'Is it cold here?'
    },
    {  id: 280,
      sntc: 'Onlar uzaqdadırlar?',
      tr: 'Are they far?',
      ch: 'Are they far?'
    }],
    [{  id: 281,
      sntc: 'Məqalə çox informativdirmi?',
      tr: 'Are the article very informative?',
      ch: 'Are the article very informative?'
    },
    {  id: 282,
      sntc: 'Bu müğənni populyardır?',
      tr: 'Is this singer popular?',
      ch: 'Is this singer popular?'
    },
    {  id: 283,
      sntc: 'Oyun darıxdırıcıdır?',
      tr: 'Is the game boring?',
      ch: 'Is the game boring?'
    },
    {  id: 284,
      sntc: 'Sənin anan dizaynerdir?',
      tr: 'Is your mother a designer?',
      ch: 'Is your mother a designer?'
    },
    {  id: 285,
      sntc: 'Otel bahadır?',
      tr: 'Is the hotel expensive?',
      ch: 'Is the hotel expensive?'
    },
    {  id: 286,
      sntc: 'Bu xəbər vacibdir?',
      tr: 'Is this news important?',
      ch: 'Is this news important?'
    },
    {  id: 287,
      sntc: 'Bu qadın çox müdrikdir?',
      tr: 'Is this woman very wise?',
      ch: 'Is this woman very wise?'
    },
    {  id: 288,
      sntc: 'Problemlər böyükdür?',
      tr: 'Are the problems big?',
      ch: 'Are the problems big?'
    },
    {  id: 289,
      sntc: 'Pişik bu otaqdadır?',
      tr: 'Is the cat in this room?',
      ch: 'Is the cat in this room?'
    },
    {  id: 290,
      sntc: 'Məqalə İngilis dilindədir?',
      tr: 'Is the article in English?',
      ch: 'Is the article in English?'
    }],
    [{  id: 291,
      sntc: 'Sənin cibində nə var?',
      tr: 'What is in your pocket?',
      ch: 'What is in your pocket?'
    },
    {  id: 292,
      sntc: 'Sən nə vaxt məşğulsan?',
      tr: 'When are you busy?',
      ch: 'When are you busy?'
    },
    {  id: 293,
      sntc: 'Bu nə qədər maraqlıdır?',
      tr: 'How interesting is it?',
      ch: 'How interesting is it?'
    },
    {  id: 294,
      sntc: 'Bu nə qədər uzaqdır?',
      tr: 'How far is it?',
      ch: 'How far is it?'
    },
    {  id: 295,
      sntc: 'Sən niyə burdasan?',
      tr: 'Why are you here?',
      ch: 'Why are you here?'
    },
    {  id: 296,
      sntc: 'Kim səhvdir?',
      tr: 'Who is wrong?',
      ch: 'Who is wrong?'
    },
    {  id: 297,
      sntc: 'Sən niyə belə xoşbəxtsən?',
      tr: 'Why are you so happy?',
      ch: 'Why are you so happy?'
    },
    {  id: 298,
      sntc: 'Bu sizin üçün nə dərəcədə vacibdir?',
      tr: 'How important is it for you?',
      ch: 'How important is it for you?'
    },
    {  id: 299,
      sntc: 'Saat neçədir?',
      tr: 'What time is it?',
      ch: 'What time is it?'
    },
    {  id: 300,
      sntc: 'Saat neçədir?',
      tr: 'What is the time?',
      ch: 'What is the time?'
    }],
    [{  id: 301,
      sntc: 'O adamlar kimlərdir?',
      tr: 'Who are those people?',
      ch: 'Who are those people?'
    },
    {  id: 302,
      sntc: 'Dərs nə dərəcədə effektivdir?',
      tr: 'How effective is the lesson?',
      ch: 'How effective is the lesson?'
    },
    {  id: 303,
      sntc: 'Sənin müəllimin haradadır?',
      tr: 'Where is your teacher?',
      ch: 'Where is your teacher?'
    },
    {  id: 304,
      sntc: 'O şəxs kimdir?',
      tr: 'Who is that person?',
      ch: 'Who is that person?'
    },
    {  id: 305,
      sntc: 'Uşaqlar haradadır?',
      tr: 'Where are the children?',
      ch: 'Where are the children?'
    },
    {  id: 306,
      sntc: 'İmtahan nə qədər çətindir?',
      tr: 'How difficult is the test?',
      ch: 'How difficult is the test?'
    },
    {  id: 307,
      sntc: 'Sənin atanın neçə yaşı var?',
      tr: 'How old is your father?',
      ch: 'How old is your father?'
    },
    {  id: 308,
      sntc: 'Sənin atanın adı nədir?',
      tr: "What's your father's name?",
      ch: "What's your father's name?"
    },
    {  id: 309,
      sntc: 'Bu maşın necədir?',
      tr: 'How is this car?',
      ch: 'How is this car?'
    },
    {  id: 310,
      sntc: 'Təklif nə dərəcədə maraqlıdır?',
      tr: 'How interesting is the offer?',
      ch: 'How interesting is the offer?'
    }],
    [{  id: 311,
      sntc: 'Bu nəticə məni qane etmir ',
      tr: "I'm not satisfied with this result ",
      ch: "I'm not satisfied with this result "
    },
    {  id: 312,
      sntc: 'Kompüter neçəyədir?',
      tr: 'How much is the computer?',
      ch: 'How much is the computer?'
    },
    {  id: 313,
      sntc: 'Onların cavabı sizi qane edir?',
      tr: 'Are you satisfied with their answer?',
      ch: 'Are you satisfied with their answer?'
    },
    {  id: 314,
      sntc: 'Mənim yaddaşım pisdi',
      tr: 'My memory is bad',
      ch: 'My memory is bad'
    },
    {  id: 315,
      sntc: 'O azad deyil. O, çox məşğuldur.',
      tr: "She isn't free. She's very busy.",
      ch: "She isn't free. She's very busy."
    },
    { id: 316, sntc: 'Bu ucuzdur', tr: 'It is cheap', ch: 'It is cheap' },
    {  id: 317,
      sntc: 'Bu cins neçəyədir?',
      tr: 'How much are these jeans?',
      ch: 'How much are these jeans?'
    },
    {  id: 318,
      sntc: 'Bu məşqlər nə üçün bu qədər çətindir?',
      tr: 'Why are these exercises so difficult?',
      ch: 'Why are these exercises so difficult?'
    },
    { id: 319, sntc: 'Mən tənbələm?', tr: 'Am I lazy?', ch: 'Am I lazy?' },
    {  id: 320,
      sntc: 'Bu təhlükəlidir?',
      tr: 'Is it dangerous?',
      ch: 'Is it dangerous?'
    }],
    [{  id: 321,
      sntc: 'Oğlan evdədir?',
      tr: 'Is the boy at home?',
      ch: 'Is the boy at home?'
    },
    {  id: 322,
      sntc: 'Bu sadə mətndir?',
      tr: 'Is this text simple?',
      ch: 'Is this text simple?'
    },
    {  id: 323,
      sntc: 'Niyə belə xoşbəxtsən?',
      tr: 'Why are you so happy?',
      ch: 'Why are you so happy?'
    },
    {  id: 324,
      sntc: 'Orada kim var?',
      tr: 'Who is there?',
      ch: 'Who is there?'
    },
    {  id: 325,
      sntc: 'O, tənbəl oğlandır?',
      tr: 'Is he a lazy boy?',
      ch: 'Is he a lazy boy?'
    },
    { id: 326, sntc: 'Mən azadam', tr: 'I am free', ch: 'I am free' },
    {  id: 327,
      sntc: 'Otaqda kim var?',
      tr: 'Who is in the room',
      ch: 'Who is in the room'
    },
    {  id: 328,
      sntc: 'Bu daha pisdir?',
      tr: 'Is it worse?',
      ch: 'Is it worse?'
    },
    {  id: 329,
      sntc: 'Sən xoşbəxt insansan',
      tr: 'You are a happy person',
      ch: 'You are a happy person'
    },
    {  id: 330,
      sntc: 'Bu çox bahalı şeydir',
      tr: "It's a very expensive thing",
      ch: "It's a very expensive thing"
    }],
    [{  id: 331,
      sntc: 'Sənin qardaşın evdədir?',
      tr: 'Is your brother at home?',
      ch: 'Is your brother at home?'
    },
    {  id: 332,
      sntc: 'Sən doğrudan da yorğunsan?',
      tr: 'Are you really tired?',
      ch: 'Are you really tired?'
    },
    {  id: 333,
      sntc: 'Bu maşın neçəyədir?',
      tr: 'How much is this car?',
      ch: 'How much is this car?'
    },
    {  id: 334,
      sntc: 'Bu yüksək səviyyə deyil',
      tr: "It isn't a high level",
      ch: "It isn't a high level"
    },
    {  id: 335,
      sntc: 'Bütün bu dərslər pulsuzdur',
      tr: 'All these lessons are free',
      ch: 'All these lessons are free'
    },
    {  id: 336,
      sntc: 'Oğlunun neçə yaşı var?',
      tr: 'How old is his son?',
      ch: 'How old is his son?'
    },
    {  id: 337,
      sntc: 'Sənin dostunun adı nədir?',
      tr: "What's your friend's name?",
      ch: "What's your friend's name?"
    },
    {  id: 338,
      sntc: 'Onlar işdədirlər',
      tr: 'They are at work',
      ch: 'They are at work'
    },
    {  id: 339,
      sntc: 'Bu yaxşı bir ədəbdir',
      tr: "It's a good manner",
      ch: "It's a good manner"
    },
    {  id: 340,
      sntc: 'Birinci yerdə kim var?',
      tr: 'Who is in the first place?',
      ch: 'Who is in the first place?'
    }],
    [{  id: 341,
      sntc: 'Xaricdə təhsil almağı xoşlayıram',
      tr: 'I like studying abroad',
      ch: 'I like studying abroad'
    },
    {  id: 342,
      sntc: 'O şeyin qiyməti çox deyil',
      tr: "That thing doesn't cost much",
      ch: "That thing doesn't cost much"
    },
    {  id: 343,
      sntc: 'Bu şey çox bahalıdır',
      tr: 'This thing cost a lot',
      ch: 'This thing cost a lot'
    },
    {  id: 344,
      sntc: 'O İngilis dili üçün daha çox vaxt tapmağa çalışır',
      tr: 'He tries to find more time for English',
      ch: 'He tries to find more time for English'
    },
    {  id: 345,
      sntc: 'Bu klinika o qədər də yaxşı deyil',
      tr: "This clinic isn't so good",
      ch: "This clinic isn't so good"
    },
    {  id: 346,
      sntc: 'Biz həmişə bunu vaxtında bitiririk',
      tr: 'We always finish it on time',
      ch: 'We always finish it on time'
    },
    {  id: 347,
      sntc: 'Bu dərslərin sadəliyi xoşuma gəlir',
      tr: 'I like the simplicity of these lessons',
      ch: 'I like the simplicity of these lessons'
    },
    {  id: 348,
      sntc: 'Bu adətən yazda olur',
      tr: 'It usually happens in spring',
      ch: 'It usually happens in spring'
    },
    {  id: 349,
      sntc: 'Mən bunu edə bilərəm',
      tr: 'I may do it',
      ch: 'I may do it'
    },
    {  id: 350,
      sntc: 'Sən tez-tez idman zalına gedirsən?',
      tr: 'Do you often go to the gym?',
      ch: 'Do you often go to the gym?'
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
  // let obj={
  //   id:'',
  //   sntc:''
  // }
  // // console.log(initialState.lessons[0][0][1].id)
  
  // for (let i=0; i<initialState.sentences[0].length; i++){
  //     for(let a=0; a<initialState.sentences[0][0].length; a++){
  //         obj.id=initialState.sentences[0][i][a].id
  //         obj.sntc=initialState.sentences[0][i][a].tr
  //         console.log(obj)
  //     }
  // }

const azEnSentences = (state=initialState, action)=>{
  return state
}

export default azEnSentences
