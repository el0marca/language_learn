const initialState = {
  sentences: [
    [{
        id: 1,
        sntc: 'I ___ there',
        tr: 'Mən orada işləyirəm',
        ra: 'work',
        v1: 'works',
        v2: 'such',
        v3: 'work'
      },
      {
        id: 2,
        sntc: 'It really ___',
        tr: 'Bu həqiqətən mənə kömək edir',
        ra: 'helps me',
        v1: 'helps me',
        v2: 'also need',
        v3: 'always need'
      },
      {
        id: 3,
        sntc: 'I live ___',
        tr: 'Mən burada yaşayıram',
        ra: 'here',
        v1: 'need',
        v2: 'here',
        v3: 'work'
      },
      {
        id: 4,
        sntc: 'We live in ___',
        tr: 'Biz bu şəhərdə yaşayırıq',
        ra: 'this city',
        v1: 'understand',
        v2: 'this city',
        v3: 'this help'
      },
      {
        id: 5,
        sntc: 'I ___ it',
        tr: 'Mən bunu xatırlayıram',
        ra: 'remember',
        v1: 'works',
        v2: 'here',
        v3: 'remember'
      }
    ],
    [{
        id: 6,
        sntc: 'I ___ work there',
        tr: 'Mən də orada işləyirəm',
        ra: 'also',
        v1: 'too',
        v2: 'also',
        v3: 'think'
      },
      {
        id: 7,
        sntc: 'She ___ in this house',
        tr: 'O, bu evdə yaşayır',
        ra: 'lives',
        v1: 'lives',
        v2: 'work',
        v3: 'always'
      },
      {
        id: 8,
        sntc: '___ also thinks so',
        tr: 'O da belə düşünür',
        ra: 'He',
        v1: 'I',
        v2: 'Many',
        v3: 'He'
      },
      {
        id: 9,
        sntc: 'She thinks ___',
        tr: 'O, belə düşünür',
        ra: 'so',
        v1: 'also',
        v2: 'so',
        v3: 'understands'
      },
      {
        id: 10,
        sntc: 'He speaks English ___',
        tr: 'O, İngilis dilində çox yaxşı danışır',
        ra: 'very well',
        v1: 'also',
        v2: 'always',
        v3: 'very well'
      }
    ],
    [{
        id: 11,
        sntc: 'I ___ go to the cinema',
        tr: 'Mən bəzən kinoteatra gedirəm',
        ra: 'sometimes',
        v1: 'sometimes',
        v2: 'very',
        v3: 'much'
      },
      {
        id: 12,
        sntc: 'He sometimes plays ___ games',
        tr: 'O, bəzən kompüter oyunları oynayır',
        ra: 'computer',
        v1: 'also',
        v2: 'need',
        v3: 'computer'
      },
      {
        id: 13,
        sntc: 'She has ___ dog',
        tr: 'Onun iti var',
        ra: 'a',
        v1: 'an',
        v2: 'a',
        v3: 'big'
      },
      {
        id: 14,
        sntc: 'I try ___ find a job',
        tr: 'Mən iş tapmağa çalışıram',
        ra: 'to',
        v1: 'like',
        v2: 'to',
        v3: 'work'
      },
      {
        id: 15,
        sntc: 'She ___ to do it',
        tr: 'O, bunu etməyə çalışır',
        ra: 'tries',
        v1: 'tries',
        v2: 'try',
        v3: 'make'
      }
    ],
    [{
        id: 16,
        sntc: 'My ___ always says it',
        tr: 'Mənim dostum həmişə bunu deyir',
        ra: 'friend',
        v1: 'parents',
        v2: 'friend',
        v3: 'friends'
      },
      {
        id: 17,
        sntc: 'My ___ know it',
        tr: 'Mənim valideynlərim bunu bilirlər',
        ra: 'parents',
        v1: 'parents',
        v2: 'parent',
        v3: 'friend'
      },
      {
        id: 18,
        sntc: 'His mother ___ a car',
        tr: 'Onun anasının maşını var',
        ra: 'has',
        v1: 'have',
        v2: 'has',
        v3: 'always'
      },
      {
        id: 19,
        sntc: 'My parents ___ to do it',
        tr: 'Mənim valideynlərim bunu etmək istəyirlər',
        ra: 'want',
        v1: 'also',
        v2: 'understands',
        v3: 'want'
      },
      {
        id: 20,
        sntc: 'My brother studies ___',
        tr: 'Mənim qardaşım orada təhsil alir',
        ra: 'there',
        v1: 'there',
        v2: 'work',
        v3: 'only'
      }
    ],
    [{
        id: 21,
        sntc: 'This company ___',
        tr: 'Bu şirkətin pulu var',
        ra: 'has money',
        v1: 'have money',
        v2: 'have a car',
        v3: 'has money'
      },
      {
        id: 22,
        sntc: 'She sees ___ mistake',
        tr: 'O, bu səhvi görür',
        ra: 'this',
        v1: 'two',
        v2: 'these',
        v3: 'this'
      },
      {
        id: 23,
        sntc: '___ remembers it',
        tr: 'O, bunu xatırlayır',
        ra: 'He',
        v1: 'He',
        v2: 'I',
        v3: 'They'
      },
      {
        id: 24,
        sntc: 'He speaks English ___',
        tr: 'O, İngilis dilində çox yaxşı danışır',
        ra: 'very well',
        v1: 'very well',
        v2: 'always good',
        v3: 'also'
      },
      {
        id: 25,
        sntc: 'I see ___ mistakes',
        tr: 'Mən bu səhvləri görürəm',
        ra: 'these',
        v1: 'that',
        v2: 'this',
        v3: 'these'
      }
    ],
    [{
        id: 26,
        sntc: 'I want ___ good car',
        tr: 'Mən yaxşı maşın istəyirəm',
        ra: 'a',
        v1: 'an',
        v2: 'a',
        v3: 'these'
      },
      {
        id: 27,
        sntc: 'I want to go there ___ time',
        tr: 'Mən ora bir dəfə də getmək istəyirəm',
        ra: 'one more',
        v1: 'one more',
        v2: 'many',
        v3: 'big'
      },
      {
        id: 28,
        sntc: 'She wants ___ buy it',
        tr: 'O, bunu almaq istəyir',
        ra: 'to',
        v1: 'of',
        v2: 'to',
        v3: 'with'
      },
      {
        id: 29,
        sntc: 'I want to go there ___',
        tr: 'Mən yenə ora getmək istəyirəm',
        ra: 'again',
        v1: 'come',
        v2: 'very',
        v3: 'again'
      },
      {
        id: 30,
        sntc: 'I really want to ___ it',
        tr: 'Mən həqiqətən bunu bilmək istəyirəm',
        ra: 'know',
        v1: 'does',
        v2: 'know',
        v3: 'makes'
      }
    ],
    [{
        id: 31,
        sntc: 'I would like to ___ a businessman',
        tr: 'Mən iş adamı olmaq istərdim',
        ra: 'become',
        v1: 'go',
        v2: 'well',
        v3: 'become'
      },
      {
        id: 32,
        sntc: 'They like ___',
        tr: 'Onlar bunu xoşlayırlar',
        ra: 'it',
        v1: 'do',
        v2: 'it',
        v3: 'study'
      },
      {
        id: 33,
        sntc: 'I ___ you really like it',
        tr: 'Mən görürəm sən həqiqətən bunu xoşlayırsan',
        ra: 'see',
        v1: 'work',
        v2: 'make',
        v3: 'see'
      },
      {
        id: 34,
        sntc: 'I would like ___ English very well',
        tr: 'Mən İngilis dilini çox yaxşı bilmək istərdim',
        ra: 'to know',
        v1: 'to do',
        v2: 'to know',
        v3: 'to look'
      },
      {
        id: 35,
        sntc: 'We like ___',
        tr: 'Biz bu dərsi xoşlayırıq',
        ra: 'this lesson',
        v1: 'this lesson',
        v2: 'makes this',
        v3: 'this events'
      }
    ],
    [{
        id: 36,
        sntc: 'She doesn’t want to ___',
        tr: 'O, bunu müzakirə etmək istəmir',
        ra: 'discuss it',
        v1: 'a dog',
        v2: 'a big house',
        v3: 'discuss it'
      },
      {
        id: 37,
        sntc: 'He ___ it',
        tr: 'O, bunu xatırlamır',
        ra: 'doesn’t remember',
        v1: 'doesn’t remember',
        v2: 'don’t want',
        v3: 'wants to makes'
      },
      {
        id: 38,
        sntc: 'I ___ to say it',
        tr: 'Mən bunu demək istəmirəm',
        ra: 'don’t want',
        v1: 'doesn’t want',
        v2: 'don’t wants',
        v3: 'don’t want'
      },
      {
        id: 39,
        sntc: 'He ___ this information',
        tr: 'Onda bu məlumat yoxdur',
        ra: 'doesn’t have',
        v1: 'don’t need',
        v2: 'doesn’t have',
        v3: 'doesn’t needs'
      },
      {
        id: 40,
        sntc: 'I don’t know ___',
        tr: 'Mən bu insanı tanımıram',
        ra: 'this person',
        v1: 'these cat',
        v2: 'this person',
        v3: 'these person'
      }
    ],
    [{
        id: 41,
        sntc: 'Our teacher doesn’t ___ us',
        tr: 'Bizim müəllimimiz bizə inanmır',
        ra: 'believe',
        v1: 'believe',
        v2: 'believes',
        v3: 'these'
      },
      {
        id: 42,
        sntc: 'My ___ doesn’t know him',
        tr: 'Mənim partnyorum onu tanımır',
        ra: 'partner',
        v1: 'partners',
        v2: 'partner',
        v3: 'friends'
      },
      {
        id: 43,
        sntc: 'I think ___ doesn’t make people happy',
        tr: 'Məncə, pul insanları xoşbəxt etmir',
        ra: 'money',
        v1: 'also',
        v2: 'friends',
        v3: 'money'
      },
      {
        id: 44,
        sntc: 'He doesn’t try to change ___',
        tr: 'O, həyatını dəyişməyə çalışmır',
        ra: 'his life',
        v1: 'these life',
        v2: 'his life',
        v3: 'that events'
      },
      {
        id: 45,
        sntc: 'My friend doesn’t ___',
        tr: 'Mənim dostum elə düşünmür',
        ra: 'think so',
        v1: 'think also',
        v2: 'makes so',
        v3: 'think so'
      }
    ],
    [{
        id: 46,
        sntc: 'You need to ___',
        tr: 'Sən İngilis dilində düzgün danışmalısan',
        ra: 'speak English correctly',
        v1: 'speak English correctly',
        v2: 'tell English fast',
        v3: 'talk English correctly'
      },
      {
        id: 47,
        sntc: 'My friend ___ money',
        tr: 'Mənim dostuma pul lazımdır',
        ra: 'needs',
        v1: 'needs',
        v2: 'need',
        v3: 'want'
      },
      {
        id: 48,
        sntc: 'I need to call ___',
        tr: 'Mən ona zəng etməliyəm',
        ra: 'her',
        v1: 'to her',
        v2: 'her',
        v3: 'to them'
      },
      {
        id: 49,
        sntc: 'We ___ our life',
        tr: 'Bizə həyatımızı dəyişmək lazımdır',
        ra: 'need to change',
        v1: 'need to change',
        v2: 'need to changes',
        v3: 'want change'
      },
      {
        id: 50,
        sntc: 'I ___ your lessons',
        tr: 'Mənə həqiqətən sizin dərsləriniz lazımdır',
        ra: 'really need',
        v1: 'very need',
        v2: 'also wants',
        v3: 'really need'
      }
    ],
    [{
        id: 51,
        sntc: '___ remember everything?',
        tr: 'Sən hər şeyi xatırlayırsan?',
        ra: 'Do you',
        v1: 'Do you',
        v2: 'We also',
        v3: 'Does they'
      },
      {
        id: 52,
        sntc: 'Do you ___ go there?',
        tr: 'Sən ora tez-tez gedirsən?',
        ra: 'often',
        v1: 'like',
        v2: 'want',
        v3: 'often'
      },
      {
        id: 53,
        sntc: 'Do you ___ work?',
        tr: 'Sən işə gedirsən?',
        ra: 'go to',
        v1: 'come',
        v2: 'go to',
        v3: 'have'
      },
      {
        id: 54,
        sntc: 'Do you like ___ dress?',
        tr: 'Bu paltar sənin xoşuna gəlir?',
        ra: 'this',
        v1: 'those',
        v2: 'this',
        v3: 'these'
      },
      {
        id: 55,
        sntc: 'Do you ___ him?',
        tr: 'Sən onunla razısan?',
        ra: 'agree with',
        v1: 'agree with',
        v2: 'also think',
        v3: 'always'
      }
    ],
    [{
        id: 56,
        sntc: 'Does it ___ happen?',
        tr: 'Bu tez-tez baş verir?',
        ra: 'often',
        v1: 'very',
        v2: 'often',
        v3: 'many'
      },
      {
        id: 57,
        sntc: 'Does she ___ abroad?',
        tr: 'O, xaricə getmək istəyir?',
        ra: 'want to go',
        v1: 'ready for',
        v2: 'likes to do',
        v3: 'want to go'
      },
      {
        id: 58,
        sntc: 'Does he ___ it?',
        tr: 'O, bunun pulunu ödəyib?',
        ra: 'pay for',
        v1: 'pay for',
        v2: 'pays on',
        v3: 'makes at'
      },
      {
        id: 59,
        sntc: 'Does he ___ a job?',
        tr: 'O, iş axtarır?',
        ra: 'look for',
        v1: 'understand this',
        v2: 'look for',
        v3: 'ready that'
      },
      {
        id: 60,
        sntc: 'Does he ___ thing?',
        tr: 'O, bu şeyə nifrət edir?',
        ra: 'hate this',
        v1: 'hate this',
        v2: 'like these',
        v3: 'want those'
      }
    ],
    [{
        id: 61,
        sntc: 'Does ___ seem very difficult?',
        tr: 'Bu imtahan çox çətin gəlir?',
        ra: 'this exam',
        v1: 'these lessons',
        v2: 'this exam',
        v3: 'that lessons'
      },
      {
        id: 62,
        sntc: 'Does ___ want to go abroad?',
        tr: 'Onun dostu xaricə getmək istəyir?',
        ra: 'his friend',
        v1: 'her friends',
        v2: 'his friend',
        v3: 'these parents'
      },
      {
        id: 63,
        sntc: '___ lessons help you?',
        tr: 'Bu dərslər sənə kömək edir?',
        ra: 'Do these',
        v1: 'Does that',
        v2: 'Do that',
        v3: 'Do these'
      },
      {
        id: 64,
        sntc: 'Does ___ explain everything very well?',
        tr: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
        ra: 'this teacher',
        v1: 'these workers',
        v2: 'this teacher',
        v3: 'our friends'
      },
      {
        id: 65,
        sntc: 'Does your ___ it?',
        tr: 'Sənin atanın buna ehtiyacı var?',
        ra: 'father need',
        v1: 'father need',
        v2: 'friends like',
        v3: 'best friends need'
      }
    ],
    [{
        id: 66,
        sntc: 'Does she ___ late?',
        tr: 'O, evə gec gəlir?',
        ra: 'come home',
        v1: 'come to home',
        v2: 'go at home',
        v3: 'come home'
      },
      {
        id: 67,
        sntc: 'She works in ___',
        tr: 'O, başqa yerdə işləyir',
        ra: 'another place',
        v1: 'other place',
        v2: 'another place',
        v3: 'these place'
      },
      {
        id: 68,
        sntc: 'Does your ___ in another place?',
        tr: 'Sənin dostun başqa yerdə işləyir?',
        ra: 'friend work',
        v1: 'friends work',
        v2: 'friend go',
        v3: 'friend work'
      },
      {
        id: 69,
        sntc: "He doesn't want ___",
        tr: 'O, bu problemi həll etmək istəmir',
        ra: 'to solve this problem',
        v1: 'to do these thing',
        v2: 'to solve this problem',
        v3: 'to make this works'
      },
      {
        id: 70,
        sntc: '___ to solve this problem?',
        tr: 'O, bu problemi həll etmək istəyir?',
        ra: 'Does he want',
        v1: 'Does he want',
        v2: 'Do we wants',
        v3: 'Do they understand'
      }
    ],
    [{
        id: 71,
        sntc: 'How do you ___ to that place?',
        tr: 'Sən adətən o yerə necə çatırsan?',
        ra: 'usually get',
        v1: 'need get',
        v2: 'always likes',
        v3: 'usually get'
      },
      {
        id: 72,
        sntc: '___ you go?',
        tr: 'Sən hara gedirsən?',
        ra: 'Where do',
        v1: 'What do',
        v2: 'Where do',
        v3: 'How does'
      },
      {
        id: 73,
        sntc: 'What ___ strange?',
        tr: 'Qəribə görünən nədir?',
        ra: 'looks',
        v1: 'looks',
        v2: 'seem',
        v3: 'always'
      },
      {
        id: 74,
        sntc: 'Who ___ everything?',
        tr: 'Hər şeyi kim yoxlayır?',
        ra: 'checks',
        v1: 'do they',
        v2: 'checks',
        v3: 'we like'
      },
      {
        id: 75,
        sntc: 'Why do you want ___ this place?',
        tr: 'Niyə sən bu yerə baş çəkmək istəyirsən?',
        ra: 'to visit',
        v1: 'to visit',
        v2: 'to go',
        v3: 'to come'
      }
    ],
    [{
        id: 76,
        sntc: 'What ___ does she give you?',
        tr: 'O, sənə nə məsləhət görür?',
        ra: 'advice',
        v1: 'you',
        v2: 'always',
        v3: 'advice'
      },
      {
        id: 77,
        sntc: 'What really ___ you?',
        tr: 'Sənə həqiqətən nə kömək edir?',
        ra: 'helps',
        v1: 'understand',
        v2: 'helps',
        v3: 'like'
      },
      {
        id: 78,
        sntc: 'How does he ___ it?',
        tr: 'O, bunu necə izah edir?',
        ra: 'explain',
        v1: 'explain',
        v2: 'like to',
        v3: 'wants to'
      },
      {
        id: 79,
        sntc: 'How long ___ him to get to that place?',
        tr: 'Həmin yerə çatmaq üçün onda nə qədər vaxt çəkir?',
        ra: 'does it take',
        v1: 'do this take',
        v2: 'does it take',
        v3: 'do you take'
      },
      {
        id: 80,
        sntc: 'Why does he ___ often?',
        tr: 'O, niyə elə tez-tez şikayət edir?',
        ra: 'complain so',
        v1: 'advice to',
        v2: 'worry about',
        v3: 'complain so'
      }
    ],
    [{
        id: 81,
        sntc: '___ money does your friend have?',
        tr: 'Sənin dostunun nə qədər pulu var?',
        ra: 'How much',
        v1: 'How much',
        v2: 'How many',
        v3: 'What of'
      },
      {
        id: 82,
        sntc: '___ does this thing happen?',
        tr: 'Bu nə sıxlıqda baş verir?',
        ra: 'How often',
        v1: 'How much',
        v2: 'What thing',
        v3: 'How often'
      },
      {
        id: 83,
        sntc: '___ does it take his daughter to get to school?',
        tr: 'Sənin qızının məktəbə çatmağı nə qədər vaxt çəkir?',
        ra: 'How long',
        v1: 'What time',
        v2: 'How long',
        v3: 'What kind of'
      },
      {
        id: 84,
        sntc: 'Why does your friend want to ___ new job?',
        tr: 'Sənin dostun niyə yeni iş axtarmaq istəyir?',
        ra: 'look for a',
        v1: 'like for a',
        v2: 'look for a',
        v3: 'ready for an'
      },
      {
        id: 85,
        sntc: 'Where does ___ work?',
        tr: 'Sənin anan harda işləyir?',
        ra: 'your mother',
        v1: 'your mother',
        v2: 'your friends',
        v3: 'you'
      }
    ],
    [{
        id: 86,
        sntc: 'What time do you ___ get up?',
        tr: 'Sən adətən nə vaxt qalxırsan?',
        ra: 'usually',
        v1: 'usually',
        v2: 'there',
        v3: 'at time'
      },
      {
        id: 87,
        sntc: 'She ___ happy',
        tr: 'O, özünü xoşbəxt hiss edir',
        ra: 'feels',
        v1: 'feels her',
        v2: 'feel his',
        v3: 'feels'
      },
      {
        id: 88,
        sntc: 'Do you ___ him?',
        tr: 'Sən tez-tez ona zəng edirsən?',
        ra: 'often call',
        v1: 'always tells',
        v2: 'often call',
        v3: 'sometimes say'
      },
      {
        id: 89,
        sntc: 'How ___ get home?',
        tr: 'O, evə necə çatır?',
        ra: 'does he',
        v1: 'you',
        v2: 'do always',
        v3: 'does he'
      },
      {
        id: 90,
        sntc: 'What ___ about it?',
        tr: 'Sən bu barədə nə düşünürsən?',
        ra: 'do you think',
        v1: 'does you friend',
        v2: 'does he undertand',
        v3: 'do you think'
      }
    ],
    [{
        id: 91,
        sntc: 'Do ___ it?',
        tr: 'Bu sənin yadındadır?',
        ra: 'you remember',
        v1: 'your know',
        v2: 'you remember',
        v3: 'this remeber'
      },
      {
        id: 92,
        sntc: 'I live ___',
        tr: 'Mən bu şəhərdə yaşayıram',
        ra: 'in this city',
        v1: 'in this city',
        v2: 'at these home',
        v3: 'in these house'
      },
      {
        id: 93,
        sntc: 'How long does it take his daughter ___ school?',
        tr: 'Onun qızının məktəbə çatmağı nə qədər vaxt çəkir?',
        ra: 'to get to',
        v1: 'to come at',
        v2: 'to go',
        v3: 'to get to'
      },
      {
        id: 94,
        sntc: 'My sister lives there ___ live here',
        tr: 'Mənim bacım orada yaşayır, amma mən burada yaşayıram',
        ra: 'but I',
        v1: 'but him',
        v2: 'but I',
        v3: 'and her'
      },
      {
        id: 95,
        sntc: '___ do you prefer?',
        tr: 'Hansı musiqiyə üstünlük verirsiz?',
        ra: 'What music',
        v1: 'What kind of',
        v2: 'What music',
        v3: 'How does it'
      }
    ],
    [{
        id: 96,
        sntc: '___ to live abroad?',
        tr: 'Kim xaricdə yaşamaq istəyir?',
        ra: 'Who wants',
        v1: 'Who does he',
        v2: 'What time',
        v3: 'Who wants'
      },
      {
        id: 97,
        sntc: 'Where do they ___ together?',
        tr: 'Onlar birlikdə harada vaxt keçirirlər?',
        ra: 'spend time',
        v1: 'spend time',
        v2: 'like go',
        v3: 'wants to go'
      },
      {
        id: 98,
        sntc: '___ do you think about it?',
        tr: 'Nə qədər tez-tez bu barədə düşünürsən?',
        ra: 'How often',
        v1: 'How many',
        v2: 'How often',
        v3: 'Where he'
      },
      {
        id: 99,
        sntc: 'She does it ___',
        tr: 'O, bunu çox yaxşı edir',
        ra: 'very well',
        v1: 'also well',
        v2: 'very well',
        v3: 'always good'
      },
      {
        id: 100,
        sntc: 'He ___',
        tr: 'O, İngilis dilini tədris edir',
        ra: 'teaches English',
        v1: 'teach Spanish',
        v2: 'teaches English',
        v3: 'like Italian'
      }
    ],
    [{
      id: 101,
      sntc: 'How does ___ feel?',
      tr: 'Sənin qardaşın özünü necə hiss edir?',
      ra: 'your brother',
      v1: 'you brother',
      v2: 'your sisters',
      v3: 'your brother'
    },
    {
      id: 102,
      sntc: 'How regularly do you ___ exercises?',
      tr: 'Sən bu tapşırıqları müntəzəm olaraq nə qədər edirsən?',
      ra: 'do these',
      v1: 'does these',
      v2: 'do this',
      v3: 'do these'
    },
    {
      id: 103,
      sntc: 'I want to go to ___ place',
      tr: 'Mən başqa yerə getmək istəyirəm',
      ra: 'another',
      v1: 'another',
      v2: 'these',
      v3: 'othere'
    },
    {
      id: 104,
      sntc: 'Does it ___ interesting?',
      tr: 'Bu maraqlı gəlir?',
      ra: 'seem',
      v1: 'looks',
      v2: 'seems',
      v3: 'seem'
    },
    {
      id: 105,
      sntc: 'Do you ___ money?',
      tr: 'Sənin kifayət qədər pulun var?',
      ra: 'have enough',
      v1: 'has quite',
      v2: 'have enough',
      v3: 'like a lot'
    }],
    [{
      id: 106,
      sntc: 'My boss ___ it',
      tr: 'Mənim müdirim həmişə bunu deyir',
      ra: 'always says',
      v1: 'always says',
      v2: 'often tells',
      v3: 'always say'
    },
    {
      id: 107,
      sntc: 'She ___ like to become a teacher',
      tr: 'O, müəllim olmaq istərdi',
      ra: 'would',
      v1: 'often',
      v2: 'always',
      v3: 'would'
    },
    {
      id: 108,
      sntc: 'I ___ need your lessons',
      tr: 'Mənim həqiqətən sənin dərslərinə ehtiyacım var',
      ra: 'really',
      v1: 'would',
      v2: 'often',
      v3: 'really'
    },
    {
      id: 109,
      sntc: 'How often do you ___ books?',
      tr: 'Nə sıxlıqda İngilis dilində kitablar oxuyursan?',
      ra: 'read English',
      v1: 'like this',
      v2: 'read English',
      v3: 'read a'
    },
    {
      id: 110,
      sntc: 'I want ___ my English',
      tr: 'Mən İngilis dilimi təkmilləşdirmək istəyirəm',
      ra: 'to improve',
      v1: 'impress',
      v2: 'to always',
      v3: 'to improve'
    }],
    [{
      id: 111,
      sntc: "I'm ___",
      tr: 'Mən tənbələm',
      ra: 'lazy',
      v1: 'lazy',
      v2: 'understand',
      v3: 'always work'
    },
    {
      id: 112,
      sntc: "We're ___",
      tr: 'Biz zənginik',
      ra: 'rich',
      v1: 'biggest',
      v2: 'rich',
      v3: 'most'
    },
    {
      id: 113,
      sntc: "She's a ___",
      tr: 'O, həkimdir',
      ra: 'doctor',
      v1: 'umbrella',
      v2: 'actress',
      v3: 'doctor'
    },
    {
      id: 114,
      sntc: "He's her ___",
      tr: 'O, onun əridir',
      ra: 'husband',
      v1: 'friends',
      v2: 'husband',
      v3: 'wife'
    },
    {
      id: 115,
      sntc: "It's ___",
      tr: 'Bu vacibdir',
      ra: 'important',
      v1: 'important',
      v2: 'an impossible',
      v3: 'a good'
    }],
    [{
      id: 116,
      sntc: "He's a very ___",
      tr: 'O, çox yaxşı insandır',
      ra: 'good person',
      v1: 'good friends',
      v2: 'good person',
      v3: 'big mountains'
    },
    {
      id: 117,
      sntc: "It's ___",
      tr: 'Çox soyuqdur',
      ra: 'too cold',
      v1: 'a big mistakes',
      v2: 'much well',
      v3: 'too cold'
    },
    {
      id: 118,
      sntc: "She's a very ___",
      tr: 'O, çox gözəl qızdır',
      ra: 'beautiful girl',
      v1: 'beautiful girl',
      v2: 'tall girls',
      v3: 'happy friends'
    },
    {
      id: 119,
      sntc: "I'm ___",
      tr: 'Mən yaxşıyam',
      ra: 'fine',
      v1: 'a good',
      v2: 'always',
      v3: 'fine'
    },
    {
      id: 120,
      sntc: "It's ___",
      tr: 'Bu daha pisdir',
      ra: 'worse',
      v1: 'more well',
      v2: 'worse',
      v3: 'a best choice'
    }],
    [{
      id: 121,
      sntc: "She's ___ clever",
      tr: 'O, çox ağıllıdır',
      ra: 'so',
      v1: 'such',
      v2: 'so',
      v3: 'such a'
    },
    {
      id: 122,
      sntc: "It's ___",
      tr: 'Bu çox asandır',
      ra: 'very easy',
      v1: 'always go there',
      v2: 'very easy',
      v3: 'often happen'
    },
    {
      id: 123,
      sntc: "He's ___ professional teacher",
      tr: 'O, çox peşəkar müəllimdir',
      ra: 'such a',
      v1: 'such a',
      v2: 'so',
      v3: 'very'
    },
    {
      id: 124,
      sntc: "It's ___ cheap thing",
      tr: 'Bu, çox ucuz əşyadır',
      ra: 'such a',
      v1: 'so a',
      v2: 'such an',
      v3: 'such a'
    },
    {
      id: 125,
      sntc: "He's ___ talented",
      tr: 'O, çox istedadlıdır',
      ra: 'so',
      v1: 'such a',
      v2: 'so',
      v3: 'so an'
    }],
    [{
      id: 126,
      sntc: 'His daughter ___ in the park',
      tr: 'Onun qızı parkdadır',
      ra: 'is',
      v1: 'is',
      v2: 'are',
      v3: 'always'
    },
    {
      id: 127,
      sntc: 'I have a house. ___ is very big',
      tr: 'Mənim evim var. Ev çox böyükdür',
      ra: 'The house',
      v1: 'These houses',
      v2: 'The house',
      v3: 'A house'
    },
    {
      id: 128,
      sntc: 'His parents ___ abroad now',
      tr: 'Onun valideynləri hal-hazırda xaricdədir',
      ra: 'are',
      v1: 'are',
      v2: 'is',
      v3: 'already'
    },
    {
      id: 129,
      sntc: '___ thirty-two',
      tr: 'Mənim otuz iki yaşım var',
      ra: 'I am',
      v1: 'We are often',
      v2: 'I am',
      v3: 'We is '
    },
    {
      id: 130,
      sntc: 'The day ___ rainy',
      tr: 'Gün yağışlıdır',
      ra: 'is',
      v1: 'is',
      v2: 'are',
      v3: 'am'
    }],
    [{
      id: 131,
      sntc: "It's ___ ineffective method",
      tr: 'Bu çox qeyri-effektiv üsuldur',
      ra: 'a very',
      v1: 'a big',
      v2: 'an easy',
      v3: 'a very'
    },
    {
      id: 132,
      sntc: "This woman isn't ___",
      tr: 'Bu qadın elə də müdrik deyil',
      ra: 'so wise',
      v1: 'such clever',
      v2: 'so wise',
      v3: 'such clever person'
    },
    {
      id: 133,
      sntc: "It isn't ___ rule",
      tr: 'Bu çətin qayda deyil',
      ra: 'a difficult',
      v1: 'an simple',
      v2: 'easy',
      v3: 'a difficult'
    },
    {
      id: 134,
      sntc: "They aren't ___",
      tr: 'Onlar mənim həmkarlarım deyil',
      ra: 'my colleagues',
      v1: 'my colleagues',
      v2: 'my friend',
      v3: 'your parent'
    },
    {
      id: 135,
      sntc: "It isn't ___ situation",
      tr: 'Bu çox pis vəziyyət deyil',
      ra: 'a very bad',
      v1: 'a easy',
      v2: 'a very',
      v3: 'a very bad'
    }],
    [{
      id: 136,
      sntc: 'Is ___ director?',
      tr: 'O, direktordur?',
      ra: 'he a',
      v1: 'he a',
      v2: 'she these',
      v3: 'he an'
    },
    {
      id: 137,
      sntc: 'Is ___ successful project?',
      tr: 'Bu uğurlu layihədir?',
      ra: 'it a',
      v1: 'he a',
      v2: 'this an',
      v3: 'it a'
    },
    {
      id: 138,
      sntc: 'Is ___ obvious?',
      tr: 'Bu aydındır?',
      ra: 'it',
      v1: 'it',
      v2: 'be',
      v3: 'are'
    },
    {
      id: 139,
      sntc: 'Are ___ here?',
      tr: 'Sən burdasan?',
      ra: 'you',
      v1: 'he',
      v2: 'you',
      v3: 'I'
    },
    {
      id: 140,
      sntc: 'Is ___ global problem?',
      tr: 'Bu, qlobal problemdir?',
      ra: 'it a',
      v1: 'this',
      v2: 'these',
      v3: 'it a'
    }],
    [{
      id: 141,
      sntc: '___ your friends online?',
      tr: 'Sənin dostların internetdədir?',
      ra: 'Are',
      v1: 'Does',
      v2: 'Do',
      v3: 'Are'
    },
    {
      id: 142,
      sntc: '___ the airport near?',
      tr: 'Hava limanı yaxındır?',
      ra: 'Is',
      v1: 'Is',
      v2: 'Are',
      v3: 'Does'
    },
    {
      id: 143,
      sntc: 'Is ___ new for you?',
      tr: 'Bu söz sənin üçün yenidir?',
      ra: 'this word',
      v1: 'this word',
      v2: 'these word',
      v3: 'this words'
    },
    {
      id: 144,
      sntc: 'Is ___ enough?',
      tr: 'Bu səviyyə kifayət edir?',
      ra: 'this level',
      v1: 'that boys',
      v2: 'this level',
      v3: 'these friends'
    },
    {
      id: 145,
      sntc: 'Are ___ at school?',
      tr: 'Oğlanlar məktəbdədir?',
      ra: 'the boys',
      v1: 'girl',
      v2: 'these boy',
      v3: 'the boys'
    }],
    [{
      id: 146,
      sntc: 'Why ___ he at work now?',
      tr: 'O, nəyə görə indi işdədir?',
      ra: 'is',
      v1: 'does',
      v2: 'are',
      v3: 'is'
    },
    {
      id: 147,
      sntc: 'How good ___ it?',
      tr: 'Bu nə dərəcədə yaxşıdır?',
      ra: 'is',
      v1: 'are',
      v2: 'does',
      v3: 'is'
    },
    {
      id: 148,
      sntc: '___ is she?',
      tr: 'Onun neçə yaşı var?',
      ra: 'How old',
      v1: 'Does this work',
      v2: 'How regularly',
      v3: 'How old'
    },
    {
      id: 149,
      sntc: '___ next?',
      tr: 'Növbəti kimdir?',
      ra: 'Who is',
      v1: 'Does she',
      v2: 'Who is',
      v3: 'Do he'
    },
    {
      id: 150,
      sntc: '___ strange?',
      tr: 'Qəribə olan nədir?',
      ra: 'What is',
      v1: 'What is',
      v2: 'What are',
      v3: 'Who always'
    }],
    [{
      id: 151,
      sntc: "What's her ___ job?",
      tr: 'Onun atasının işi nədir?',
      ra: 'father’s',
      v1: 'friend',
      v2: 'sisters',
      v3: 'father’s'
    },
    {
      id: 152,
      sntc: 'How ___ result?',
      tr: 'Bu nəticə nəcədir?',
      ra: 'is this',
      v1: 'are this',
      v2: 'is this',
      v3: 'are these'
    },
    {
      id: 153,
      sntc: 'How old ___ brother?',
      tr: 'Sənin qardaşının neçə yaşı var?',
      ra: 'is your',
      v1: 'are your',
      v2: 'is your',
      v3: 'is'
    },
    {
      id: 154,
      sntc: 'Where ___ boy?',
      tr: 'Oğlan haradadır?',
      ra: 'is the',
      v1: 'is',
      v2: 'are this',
      v3: 'is the'
    },
    {
      id: 155,
      sntc: "___ his name?",
      tr: 'Onun adı nədir?',
      ra: 'What’s',
      v1: 'Where',
      v2: 'How',
      v3: 'What’s'
    }],
    [{
      id: 156,
      sntc: '___ is the book?',
      tr: 'Kitab neçəyədir?',
      ra: 'How much',
      v1: 'When',
      v2: 'How much',
      v3: 'How many'
    },
    {
      id: 157,
      sntc: 'It ___',
      tr: 'Bu asandır',
      ra: 'is easy',
      v1: 'are simple',
      v2: 'is easy',
      v3: 'is an smart boy'
    },
    {
      id: 158,
      sntc: "___ name?",
      tr: 'Onun adı nədir?',
      ra: 'What’s her',
      v1: 'What’s sister',
      v2: 'What’s her',
      v3: 'How is your'
    },
    {
      id: 159,
      sntc: 'It ___',
      tr: 'Günəşlidir',
      ra: 'is sunny',
      v1: 'is sunny',
      v2: 'are cloudy',
      v3: 'did I'
    },
    {
      id: 160,
      sntc: 'Are ___ England?',
      tr: 'Sən İngiltərədənsən?',
      ra: 'you from',
      v1: 'they at',
      v2: 'you for',
      v3: 'you from'
    }],
    [{
      id: 161,
      sntc: 'How much is ___ jeans?',
      tr: 'Bu cüt cins neçəyədir?',
      ra: 'this pair of',
      v1: 'these',
      v2: 'these pair of',
      v3: 'this pair of'
    },
    {
      id: 162,
      sntc: 'It is ___',
      tr: 'Çox soyuqdur',
      ra: 'so cold',
      v1: 'such warm',
      v2: 'so cold',
      v3: 'a cold'
    },
    {
      id: 163,
      sntc: 'I ___ tired',
      tr: 'Mən yorulmamışam',
      ra: 'am not',
      v1: 'are',
      v2: 'am not',
      v3: 'are not'
    },
    {
      id: 164,
      sntc: 'Is she ___ woman?',
      tr: 'O, kasıb qadındır?',
      ra: 'a poor',
      v1: 'a this',
      v2: 'an strong',
      v3: 'a poor'
    },
    {
      id: 165,
      sntc: 'This method ___',
      tr: 'Bu üsul çox sadədir',
      ra: 'is very simple',
      v1: 'is very simple',
      v2: 'are effective',
      v3: 'are mine'
    }],
    [{
      id: 166,
      sntc: 'It is ___ method',
      tr: 'Bu çox qeyri-effektiv üsuldur',
      ra: 'such an ineffective',
      v1: 'so ineffective',
      v2: 'so an ineffective',
      v3: 'such an ineffective'
    },
    {
      id: 167,
      sntc: "What's ___ father's job?",
      tr: 'Sənin atanın işi nədir?',
      ra: 'your',
      v1: 'these',
      v2: 'your',
      v3: 'those'
    },
    {
      id: 168,
      sntc: "You aren't ___",
      tr: 'Sən nikbin deyilsən',
      ra: 'optimistic',
      v1: 'optimistic',
      v2: 'go to work',
      v3: 'come home'
    },
    {
      id: 169,
      sntc: 'These words ___ for me',
      tr: 'Bu sözlər mənim üçün yenidir',
      ra: 'are new',
      v1: 'is new',
      v2: 'are new',
      v3: 'old'
    },
    {
      id: 170,
      sntc: 'Am I ___ place?',
      tr: 'Mən düz yerdəyəm?',
      ra: 'in the right',
      v1: 'take',
      v2: 'in other',
      v3: 'in the right'
    }],
    [{
      id: 171,
      sntc: 'When ___ to work?',
      tr: 'Sən nə vaxt işə gedirsən?',
      ra: 'do you go',
      v1: 'they want go',
      v2: 'do you go',
      v3: 'he goes'
    },
    {
      id: 172,
      sntc: 'What ___ word mean?',
      tr: 'Bu sözün mənası nədir?',
      ra: 'does this',
      v1: 'does this',
      v2: 'do this',
      v3: 'does these'
    },
    {
      id: 173,
      sntc: 'Who ___ him?',
      tr: 'Onu kim tənqid edir?',
      ra: 'criticizes',
      v1: 'work with',
      v2: 'criticizes',
      v3: 'understand'
    },
    {
      id: 174,
      sntc: 'What ___ mean?',
      tr: 'Sən nəyi nəzərdə tutursan?',
      ra: 'do you',
      v1: 'does these word',
      v2: 'this phrase',
      v3: 'do you'
    },
    {
      id: 175,
      sntc: 'I want to speak English ___',
      tr: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
      ra: 'better',
      v1: 'very big',
      v2: 'the best',
      v3: 'better'
    }],
    [{
      id: 176,
      sntc: "What's ___ important?",
      tr: 'Əslində nə vacibdir?',
      ra: 'really',
      v1: 'too',
      v2: 'really',
      v3: 'for you'
    },
    {
      id: 177,
      sntc: '___ lucky?',
      tr: 'Onlar şanslıdırlar?',
      ra: 'Are they',
      v1: 'Are they',
      v2: 'My friend is',
      v3: 'You are'
    },
    {
      id: 178,
      sntc: '___ tired?',
      tr: 'O, yorğundur?',
      ra: 'Is he',
      v1: 'You are',
      v2: 'We also are',
      v3: 'Is he'
    },
    {
      id: 179,
      sntc: "I'm ___ thanks",
      tr: 'Mən yaxşıyam, təşəkkürlər',
      ra: 'fine,',
      v1: 'understand',
      v2: 'fine,',
      v3: 'also work'
    },
    {
      id: 180,
      sntc: 'You know ___ truth',
      tr: 'Sən bütün həqiqəti bilirsən',
      ra: 'all the',
      v1: 'all the',
      v2: 'these',
      v3: 'a'
    }],
    [{
      id: 181,
      sntc: 'Do you need to finish it ___ tomorrow?',
      tr: 'Sənə bunu sabaha qədər bitirmək lazımdır?',
      ra: 'by',
      v1: 'for',
      v2: 'by',
      v3: 'in'
    },
    {
      id: 182,
      sntc: 'Is ___ tasty?',
      tr: 'Yemək dadlıdır?',
      ra: 'the food',
      v1: 'the food',
      v2: 'these money',
      v3: 'employyes'
    },
    {
      id: 183,
      sntc: 'Do they often ___ politics?',
      tr: 'Onlar çox vaxt siyasətdən danışırlar?',
      ra: 'talk about',
      v1: 'tell again',
      v2: 'talk about',
      v3: 'tell about'
    },
    {
      id: 184,
      sntc: "This subject ___ easy at all",
      tr: 'Bu mövzu heç asan deyil',
      ra: 'isn’t',
      v1: 'are',
      v2: 'aren’t',
      v3: 'isn’t'
    },
    {
      id: 185,
      sntc: "The ball is ___ floor",
      tr: 'Top döşəmənin üstündədir',
      ra: 'on the',
      v1: 'on',
      v2: 'at the',
      v3: 'on the'
    }],
    [{
      id: 186,
      sntc: 'Her daughter ___ school',
      tr: 'Onun qızı məktəbdədir',
      ra: 'is at',
      v1: 'are on',
      v2: 'is at',
      v3: 'is for'
    },
    {
      id: 187,
      sntc: 'What time does he ___ work?',
      tr: 'O, işə nə vaxt gəlir?',
      ra: 'come to',
      v1: 'come',
      v2: 'go',
      v3: 'come to'
    },
    {
      id: 188,
      sntc: "I'm ___",
      tr: 'Mən əminəm',
      ra: 'sure',
      v1: 'sure',
      v2: 'work there',
      v3: 'need it'
    },
    {
      id: 189,
      sntc: 'Is it ___ of view?',
      tr: 'Bu onun nöqteyi-nəzəridir?',
      ra: 'his point',
      v1: 'seems',
      v2: 'his look',
      v3: 'his point'
    },
    {
      id: 190,
      sntc: 'Where do you usually ___ summer?',
      tr: 'Sən yayda adətən hara gedirsən?',
      ra: 'go in',
      v1: 'come at',
      v2: 'go on',
      v3: 'go in'
    }],
    [{
      id: 191,
      sntc: 'How do you ___ for your exams?',
      tr: 'Sən adətən imtahanlarına necə hazırlaşırsan?',
      ra: 'usually prepare',
      v1: 'always works',
      v2: 'usually prepare',
      v3: 'already happens'
    },
    {
      id: 192,
      sntc: "I don't ___ drink",
      tr: 'Mən içmək istəmirəm',
      ra: 'want to',
      v1: 'want to',
      v2: 'want',
      v3: 'needs to'
    },
    {
      id: 193,
      sntc: 'Do you ___ him?',
      tr: 'Sən tez-tez ona zəng edirsən?',
      ra: 'often call',
      v1: 'always come',
      v2: 'often say',
      v3: 'often call'
    },
    {
      id: 194,
      sntc: "It's necessary to ___",
      tr: 'Bunu yadda saxlamaq vacibdir',
      ra: 'remember it',
      v1: 'do these work',
      v2: 'remember it',
      v3: 'makes it'
    },
    {
      id: 195,
      sntc: 'Is that information ___ useful?',
      tr: 'O məlumat həqiqətən faydalıdır?',
      ra: 'really',
      v1: 'really',
      v2: 'many',
      v3: 'too'
    }],
    [{
      id: 196,
      sntc: 'I enjoy ___ it',
      tr: 'Mən bunu etməkdən zövq alıram',
      ra: 'doing',
      v1: 'traveling',
      v2: 'do',
      v3: 'doing'
    },
    {
      id: 197,
      sntc: 'I like ___',
      tr: 'Mən xaricdə yaşamağı sevirəm',
      ra: 'living abroad',
      v1: 'do it',
      v2: 'living abroad',
      v3: 'to doing it'
    },
    {
      id: 198,
      sntc: 'You must tell me ___ problem',
      tr: 'Sən bu problem haqqında mənə danışmalısan',
      ra: 'about this',
      v1: 'about this',
      v2: 'often that',
      v3: 'always your'
    },
    {
      id: 199,
      sntc: 'I should call him ___',
      tr: 'Mən gərək sabah ona zəng edim',
      ra: 'tomorrow',
      v1: 'often',
      v2: 'tomorrow',
      v3: 'also'
    },
    {
      id: 200,
      sntc: 'She usually do it ___ evening',
      tr: 'O, adətən bunu axşamlar edir',
      ra: 'in the',
      v1: 'on the',
      v2: 'at',
      v3: 'in the'
    }],
    [{
      id: 201,
      sntc: 'I do it ___ English better',
      tr: 'Mən bunu İngilis dilini daha yaxşı bilmək üçün edirəm',
      ra: 'to know',
      v1: 'to know',
      v2: 'to make',
      v3: 'to need'
    },
    {
      id: 202,
      sntc: 'Is it ___ detail?',
      tr: 'Bu çox vacib detaldır?',
      ra: 'a very important',
      v1: 'such',
      v2: 'an useful',
      v3: 'a very important'
    },
    {
      id: 203,
      sntc: 'He has a company. ___ profit is so big',
      tr: 'Onun şirkəti var. Şirkətin qazancı çox böyükdür',
      ra: 'Its',
      v1: 'His',
      v2: 'Its',
      v3: 'The'
    },
    {
      id: 204,
      sntc: '___ need to call him?',
      tr: 'Mənim ona zəng etməyim lazımdır?',
      ra: 'Do I',
      v1: 'Does we',
      v2: 'Am I',
      v3: 'Do I'
    },
    {
      id: 205,
      sntc: 'How much ___ trousers?',
      tr: 'Bu şalvar neçəyədir?',
      ra: 'are these',
      v1: 'are these',
      v2: 'does this',
      v3: 'do these'
    }],
    [{
      id: 206,
      sntc: 'Where ___ usually go?',
      tr: 'O, adətən hara gedir?',
      ra: 'does she',
      v1: 'does she',
      v2: 'is she',
      v3: 'do he'
    },
    {
      id: 207,
      sntc: 'He ___ mistake',
      tr: 'O, bu səhvi görür',
      ra: 'sees that',
      v1: 'see this',
      v2: 'sees that',
      v3: 'looks this'
    },
    {
      id: 208,
      sntc: 'I ___ it this year',
      tr: 'Mənə bu il bunu etmək lazımdır',
      ra: 'need to do',
      v1: 'must doing',
      v2: 'need to do',
      v3: 'need do'
    },
    {
      id: 209,
      sntc: "I'm ___ it",
      tr: 'Mən bununla maraqlanıram',
      ra: 'interested in',
      v1: 'to make',
      v2: 'realize',
      v3: 'interested in'
    },
    {
      id: 210,
      sntc: "I'd like ___ it down",
      tr: 'Mən bunu yazmaq istərdim',
      ra: 'to write',
      v1: 'make',
      v2: 'understand',
      v3: 'to write'
    }],
    [{
      id: 211,
      sntc: 'Why ___ this video?',
      tr: 'Niyə bu videonu bəyənirsən?',
      ra: 'do you like',
      v1: 'you want',
      v2: 'are with',
      v3: 'do you like'
    },
    {
      id: 212,
      sntc: 'The girl is ___ hard-working',
      tr: 'Qız çox zəhmətkeşdir',
      ra: 'so',
      v1: 'so',
      v2: 'so a',
      v3: 'such a'
    },
    {
      id: 213,
      sntc: 'I know ___ it',
      tr: 'Mən bilirəm, onlar bunu bəyənirlər',
      ra: 'they like',
      v1: 'you knows',
      v2: 'they like',
      v3: 'they come'
    },
    {
      id: 214,
      sntc: "He's ___ teacher",
      tr: 'O, peşəkar müəllimdir',
      ra: 'a professional',
      v1: 'an simple',
      v2: 'so',
      v3: 'a professional'
    },
    {
      id: 215,
      sntc: "It's ___",
      tr: 'Bu maraqlıdır',
      ra: 'interesting',
      v1: 'interesting',
      v2: 'must do',
      v3: 'need to do'
    }],
    [{
      id: 216,
      sntc: '___ like it?',
      tr: 'O, bunu bəyənir?',
      ra: 'Does he',
      v1: 'We',
      v2: 'Is he',
      v3: 'Does he'
    },
    {
      id: 217,
      sntc: 'Do ___ like these lessons?',
      tr: 'Sənin dostların bu dərsləri bəyənir?',
      ra: 'your friends',
      v1: 'your friends',
      v2: 'my friend',
      v3: 'he'
    },
    {
      id: 218,
      sntc: '___ motivates us',
      tr: 'Bu nəticə bizi motivasiya edir',
      ra: 'This result',
      v1: 'This result',
      v2: 'These result',
      v3: 'This results'
    },
    {
      id: 219,
      sntc: 'I ___ this singer',
      tr: 'Mən bu müğənniyə heyranam',
      ra: 'admire',
      v1: 'doing',
      v2: 'must',
      v3: 'admire'
    },
    {
      id: 220,
      sntc: 'I perfectly ___ you',
      tr: 'Mən səni əla başa düşürəm',
      ra: 'understand',
      v1: 'needs',
      v2: 'understand',
      v3: 'must'
    }],
    [{
      id: 221,
      sntc: "I know it's ___",
      tr: 'Mən bilirəm, bu asandır',
      ra: 'simple',
      v1: 'perfectly',
      v2: 'well',
      v3: 'simple'
    },
    {
      id: 222,
      sntc: 'She ___',
      tr: 'O, bunu dərk edir',
      ra: 'realizes it',
      v1: 'go to the cinema',
      v2: 'wants to it',
      v3: 'realizes it'
    },
    {
      id: 223,
      sntc: "It's ___ method",
      tr: 'Bu çox effektiv metoddur',
      ra: 'such an effective',
      v1: 'such an effective',
      v2: 'so effective',
      v3: 'so a good'
    },
    {
      id: 224,
      sntc: 'I ___ want it',
      tr: 'Mən həqiqətən bunu istəyirəm',
      ra: 'really',
      v1: 'have',
      v2: 'really',
      v3: 'often to'
    },
    {
      id: 225,
      sntc: "I don't like this joke ___",
      tr: 'Bu zarafat heç xoşuma gəlmir',
      ra: 'at all',
      v1: 'at all',
      v2: 'always',
      v3: 'usually'
    }],
    [{
      id: 226,
      sntc: "He's ___ musician",
      tr: 'O, musiqiçidir',
      ra: 'a',
      v1: 'so',
      v2: 'a',
      v3: 'an'
    },
    {
      id: 227,
      sntc: 'Is ___ money?',
      tr: 'Vaxt puludur?',
      ra: 'time',
      v1: 'time',
      v2: 'many',
      v3: 'much'
    },
    {
      id: 228,
      sntc: 'This ___ interesting',
      tr: 'Bu dərs maraqlı gəlir',
      ra: 'lesson seems',
      v1: 'friends seems',
      v2: 'job seem',
      v3: 'lesson seems'
    },
    {
      id: 229,
      sntc: 'She wants ___ the park',
      tr: 'O, parka getmək istəyir',
      ra: 'to go to',
      v1: 'come',
      v2: 'to go to',
      v3: 'come to'
    },
    {
      id: 230,
      sntc: 'How ___ it?',
      tr: 'Bu necədir?',
      ra: 'is',
      v1: 'are',
      v2: 'is',
      v3: 'does'
    }],
    [{
      id: 231,
      sntc: 'This businessman ___',
      tr: 'Bu iş adamı çox zəngindir',
      ra: 'is very rich',
      v1: 'is very well',
      v2: 'are good',
      v3: 'is very rich'
    },
    {
      id: 232,
      sntc: "His wife doesn't do the shopping ___",
      tr: 'Onun həyat yoldaşı elə də tez-tez alış-veriş etmir',
      ra: 'so often',
      v1: 'so often',
      v2: 'on the evening',
      v3: 'such often'
    },
    {
      id: 233,
      sntc: 'She ___',
      tr: 'O, buna ehtiyac duyur',
      ra: 'needs it',
      v1: 'like this bag',
      v2: 'needs it',
      v3: 'wants these cat'
    },
    {
      id: 234,
      sntc: 'How many English words ___ want to know?',
      tr: 'Dostunuz nə qədər İngilis sözü bilmək istəyir?',
      ra: 'does your friend',
      v1: 'do your friend',
      v2: 'does you',
      v3: 'does your friend'
    },
    {
      id: 235,
      sntc: 'Money is important, ___',
      tr: 'Pul da vacibdir',
      ra: 'too',
      v1: 'also',
      v2: 'too',
      v3: 'usually'
    }],
    [{
      id: 236,
      sntc: '___ things so important?',
      tr: 'Bu şeylər elə vacibdir?',
      ra: 'Are these',
      v1: 'Is this',
      v2: 'Do these',
      v3: 'Are these'
    },
    {
      id: 237,
      sntc: 'Is ___ worse?',
      tr: 'Bu qərar daha pisdir?',
      ra: 'that decision',
      v1: 'it knowledge',
      v2: 'these knowledge',
      v3: 'that decision'
    },
    {
      id: 238,
      sntc: "We're ___",
      tr: 'Biz parkdayıq',
      ra: 'in the park',
      v1: 'go to the park',
      v2: 'in the park',
      v3: 'must to do'
    },
    {
      id: 239,
      sntc: 'Is ___ so funny?',
      tr: 'Onun videosu çox əyləncəlidir?',
      ra: 'his video',
      v1: 'his video',
      v2: 'him video',
      v3: 'his knowledge'
    },
    {
      id: 240,
      sntc: '___ to do it this year?',
      tr: 'Sənə bunu bu il etmək lazımdır?',
      ra: 'Do you need',
      v1: 'Do you need',
      v2: 'Does he always',
      v3: 'Are we need'
    }],
    [{
      id: 241,
      sntc: 'What does your ___ promise?',
      tr: 'Müdiriniz adətən nə vəd edir?',
      ra: 'boss usually',
      v1: 'often husband',
      v2: 'friend realize',
      v3: 'boss usually'
    },
    {
      id: 242,
      sntc: 'I ___ write it down',
      tr: 'Mən bunu yazmalıyam',
      ra: 'must',
      v1: 'want',
      v2: 'need',
      v3: 'must'
    },
    {
      id: 243,
      sntc: 'She also ___',
      tr: 'O da orada işləyir',
      ra: 'works there',
      v1: 'go there',
      v2: 'works there',
      v3: 'goes him'
    },
    {
      id: 244,
      sntc: "He's ___ business trip",
      tr: 'O, işgüzar səfərdədir',
      ra: 'on a',
      v1: 'on a',
      v2: 'at the',
      v3: 'on an'
    },
    {
      id: 245,
      sntc: 'Do I ___ money?',
      tr: 'Mənim kifayət qədər pulum var?',
      ra: 'have enough',
      v1: 'have enough',
      v2: 'has big',
      v3: 'have an enough'
    }],
    [{
      id: 246,
      sntc: "She'd like to live ___ place",
      tr: 'O, başqa bir yerdə yaşamaq istərdi',
      ra: 'in another',
      v1: 'in other',
      v2: 'at other',
      v3: 'in another'
    },
    {
      id: 247,
      sntc: 'Her ___ inspire us',
      tr: 'Onun sözləri bizi ruhlandırır',
      ra: 'words',
      v1: 'work',
      v2: 'desicion',
      v3: 'words'
    },
    {
      id: 248,
      sntc: '___ examples does his teacher give?',
      tr: 'Onun müəllimi nə cür nümunələr verir?',
      ra: 'What kind of',
      v1: 'How often',
      v2: 'Where',
      v3: 'What kind of'
    },
    {
      id: 249,
      sntc: '___ does she go to the cinema?',
      tr: 'O, kinoteatra nə sıxlıqda gedir?',
      ra: 'How often',
      v1: 'How often',
      v2: 'What',
      v3: 'How much'
    },
    {
      id: 250,
      sntc: 'I want to speak English ___',
      tr: 'Mən İngilis dilində səlis və düzgün danışmaq istəyirəm',
      ra: 'fluently and correctly',
      v1: 'fluent and correct',
      v2: 'fast and correct',
      v3: 'fluently and correctly'
    }],
    [{
      id: 251,
      sntc: "It'll depend ___ only on us",
      tr: 'Bu yalnız bizdən asılı olmayacaq',
      ra: 'not',
      v1: 'often',
      v2: 'not',
      v3: 'at'
    },
    {
      id: 252,
      sntc: "He'll create ___",
      tr: 'O, yeni bir şey yaradacaq',
      ra: 'something new',
      v1: 'positive atmosphere',
      v2: 'something new',
      v3: 'big chanche'
    },
    {
      id: 253,
      sntc: "It'll change your point of ___",
      tr: 'Bu, sizin baxışınızı dəyişəcək',
      ra: 'view',
      v1: 'look',
      v2: 'view',
      v3: 'agree'
    },
    {
      id: 254,
      sntc: "I think I'll have more ___",
      tr: 'Düşünürəm ki, mənim daha çox boş vaxtım olacaq',
      ra: 'free time',
      v1: 'much time',
      v2: 'a time',
      v3: 'free time'
    },
    {
      id: 255,
      sntc: "They'll have ___ alternative",
      tr: 'Onların başqa bir alternativi olacaq',
      ra: 'another',
      v1: 'another',
      v2: 'much',
      v3: 'other'
    }],
    [{
      id: 256,
      sntc: 'His father will borrow this ___',
      tr: 'Atası bu pulu borc alacaq',
      ra: 'money',
      v1: 'many',
      v2: 'dollars',
      v3: 'money'
    },
    {
      id: 257,
      sntc: 'My boss will forget it ___',
      tr: 'Mənim müdirim tezliklə bunu unudacaq',
      ra: 'soon',
      v1: 'soon',
      v2: 'often',
      v3: 'at now'
    },
    {
      id: 258,
      sntc: 'My friend and I ___ more free time to our health',
      tr: 'Mənim dostum və mən sağlamlığımıza daha çox boş vaxt ayıracağıq',
      ra: 'will devote',
      v1: 'will go',
      v2: 'will devote',
      v3: 'go to devote'
    },
    {
      id: 259,
      sntc: 'Everyone will be ___',
      tr: 'Hər kəs məyus olacaq',
      ra: 'disappointed',
      v1: 'disappointed',
      v2: 'understand',
      v3: 'know'
    },
    {
      id: 260,
      sntc: "You know it isn't ___ place",
      tr: 'Sən bilirsən bu axırıncı yerdə deyil',
      ra: 'in the last',
      v1: 'at first',
      v2: 'in last',
      v3: 'in the last'
    }],
    [{
      id: 261,
      sntc: "I won't ___ her anymore",
      tr: 'Mən daha onu görməyəcəm',
      ra: 'see',
      v1: 'to know',
      v2: 'see',
      v3: 'must'
    },
    {
      id: 262,
      sntc: "We won't ___",
      tr: 'Biz dayanmayacağıq',
      ra: 'stop',
      v1: 'to do it',
      v2: 'finishes',
      v3: 'stop'
    },
    {
      id: 263,
      sntc: "I won't recommend ___",
      tr: 'Mən bu kitabı tövsiyə etmərəm',
      ra: 'this book',
      v1: 'its',
      v2: 'these money',
      v3: 'this book'
    },
    {
      id: 264,
      sntc: "I ___ deny it",
      tr: 'Mən bunu inkar etmərəm',
      ra: 'won’t',
      v1: 'won’t be',
      v2: 'will be',
      v3: 'won’t'
    },
    {
      id: 265,
      sntc: "He won't ___ it",
      tr: 'O, buna zəmanət verməyəcək',
      ra: 'guarantee',
      v1: 'guarantee to',
      v2: 'be guarantee',
      v3: 'guarantee'
    }],
    [{
      id: 266,
      sntc: "This time won't be convenient for ___",
      tr: 'Bu vaxt mənim üçün əlverişli olmayacaq',
      ra: 'me',
      v1: 'we',
      v2: 'me',
      v3: 'I'
    },
    {
      id: 267,
      sntc: "This profession won't be popular ___",
      tr: 'Bu sənət daha populyar olmayacaq',
      ra: 'any longer',
      v1: 'everyone',
      v2: 'any longer',
      v3: 'anyone'
    },
    {
      id: 268,
      sntc: "This money won't be ___",
      tr: 'Bu pul kifayət etməyəcək',
      ra: 'enough',
      v1: 'enough',
      v2: 'a big',
      v3: 'many'
    },
    {
      id: 269,
      sntc: "Other people won't help ___",
      tr: 'Digər insanlar indi sizə kömək etməyəcək',
      ra: 'you now',
      v1: 'we now',
      v2: 'your often',
      v3: 'you now'
    },
    {
      id: 270,
      sntc: "The students won't ___ him",
      tr: 'Tələbələr ona gülməyəcəklər',
      ra: 'laugh at',
      v1: 'laugh at',
      v2: 'ready',
      v3: 'do'
    }],
    [{
      id: 271,
      sntc: 'Will you cook it ___ morning?',
      tr: 'Sən bunu səhər bişirəcəksən?',
      ra: 'in the',
      v1: 'in the',
      v2: 'on',
      v3: 'in'
    },
    {
      id: 272,
      sntc: 'Will they ___ my mistakes',
      tr: 'Onlar mənim səhvlərimə işarə edəcəklər?',
      ra: 'point at',
      v1: 'smiles at',
      v2: 'look',
      v3: 'point at'
    },
    {
      id: 273,
      sntc: 'Will they have ___ success?',
      tr: 'Onlar kommersiya uğuru qazanacaqlar?',
      ra: 'a commercial',
      v1: 'big',
      v2: 'a much',
      v3: 'a commercial'
    },
    {
      id: 274,
      sntc: 'Are those ___ useless?',
      tr: 'O tapşırıqlar faydasızdır?',
      ra: 'exercises',
      v1: 'exercises',
      v2: 'lesson',
      v3: 'exercises have'
    },
    {
      id: 275,
      sntc: 'Will you ___ in the evening?',
      tr: 'Sən axşam bekar olacaqsan?',
      ra: 'be available',
      v1: 'available',
      v2: 'be available',
      v3: 'ready for'
    }],
    [{
      id: 276,
      sntc: 'Will it be necessary ___ report?',
      tr: 'Bu hesabatı imzalamaq lazım gələcək?',
      ra: 'to sign this',
      v1: 'for you these',
      v2: 'sign that',
      v3: 'to sign this'
    },
    {
      id: 277,
      sntc: '___ in this place',
      tr: 'Biz bu yerdə yaşayırıq',
      ra: 'We live',
      v1: 'We live',
      v2: 'We are live',
      v3: 'We are work'
    },
    {
      id: 278,
      sntc: 'Will it change their ___ things?',
      tr: 'Bu, onların bu şeylərə münasibətini dəyişəcək?',
      ra: 'attitude to these',
      v1: 'attitude to one',
      v2: 'attitude to these',
      v3: 'need to these'
    },
    {
      id: 279,
      sntc: 'Will you ___ in it?',
      tr: 'Sən bununla maraqlanacaqsan?',
      ra: 'be interested',
      v1: 'interested',
      v2: 'interest',
      v3: 'be interested'
    },
    {
      id: 280,
      sntc: 'Will ___ soon?',
      tr: 'Tezliklə qaranlıq gələcək?',
      ra: 'it get dark ',
      v1: 'it get dark ',
      v2: 'get dark',
      v3: 'dark'
    }],
    [{
      id: 281,
      sntc: 'What ___ change?',
      tr: 'Nə dəyişiləcək?',
      ra: 'will',
      v1: 'will',
      v2: 'I',
      v3: 'we'
    },
    {
      id: 282,
      sntc: 'What time ___ see him?',
      tr: 'Sən onu nə vaxt görəcəksən?',
      ra: 'will you',
      v1: 'do',
      v2: 'will you',
      v3: 'will'
    },
    {
      id: 283,
      sntc: '___ literature will we need?',
      tr: 'Bizə nə cür ədəbiyyat lazım olacaq?',
      ra: 'What kind of',
      v1: 'What time',
      v2: 'What kind of',
      v3: 'How often'
    },
    {
      id: 284,
      sntc: '___ will it be?',
      tr: 'Bunun qiyməti nə qədər olacaq?',
      ra: 'How much',
      v1: 'What kind of',
      v2: 'How many',
      v3: 'How much'
    },
    {
      id: 285,
      sntc: 'When will you ___ back?',
      tr: 'Sən nə vaxt qayıdacaqsan?',
      ra: 'come',
      v1: 'come',
      v2: 'read',
      v3: 'goes'
    }],
    [{
      id: 286,
      sntc: 'Why will ___ be successful?',
      tr: 'Niyə bu biznes uğurlu olacaq?',
      ra: 'this business',
      v1: 'these offer',
      v2: 'these person',
      v3: 'this business'
    },
    {
      id: 287,
      sntc: 'Whose offer ___ they take?',
      tr: 'Onlar kimin təklifini qəbul edəcəklər?',
      ra: 'will',
      v1: 'I will',
      v2: 'will',
      v3: 'We do'
    },
    {
      id: 288,
      sntc: "He's away. ___ in another city",
      tr: 'O, burada yoxdur. O, başqa şəhərdədir',
      ra: 'He’s',
      v1: 'He',
      v2: 'He’s',
      v3: 'We also'
    },
    {
      id: 289,
      sntc: 'When will your brother start ___ for his exams?',
      tr: 'Sənin qardaşın nə vaxt imtahanlarına hazırlaşmağa başlayacaq?',
      ra: 'preparing',
      v1: 'prepare',
      v2: 'preparing',
      v3: 'doing'
    },
    {
      id: 290,
      sntc: 'It’ll be ___ place',
      tr: 'Bu həmin yerdə olacaq',
      ra: 'in the same',
      v1: 'in a same',
      v2: 'at second',
      v3: 'in the same'
    }],
    [{
      id: 291,
      sntc: 'I’ll join you ___',
      tr: 'Mən böyük məmnuniyyətlə sənə qoşulacam',
      ra: 'with great pleasure',
      v1: 'with great pleasure',
      v2: 'with a great pleasure',
      v3: 'a great pleasure'
    },
    {
      id: 292,
      sntc: "___ won't be Elementary",
      tr: 'Mənim səviyyəm elementar olmayacaq',
      ra: 'My level',
      v1: 'My friend',
      v2: 'My level',
      v3: 'They will'
    },
    {
      id: 293,
      sntc: 'Students often confuse these words but, certainly, they have ___',
      tr: 'Şagirdlər tez-tez bu sözləri qarışdırırlar, lakin, əlbəttə, onlar başqa məna daşıyır',
      ra: 'a different meaning',
      v1: 'different meaning',
      v2: 'a meaning',
      v3: 'a different meaning'
    },
    {
      id: 294,
      sntc: 'When will your father ___ home?',
      tr: 'Atanız evi nə vaxt tərk edəcək?',
      ra: 'leave',
      v1: 'going',
      v2: 'driving',
      v3: 'leave'
    },
    {
      id: 295,
      sntc: "It'll ___ them",
      tr: 'Bu onları qorxudacaq',
      ra: 'frighten',
      v1: 'frighten',
      v2: 'depend',
      v3: 'afraid of'
    }],
    [{
      id: 296,
      sntc: 'Everyone will express their ___',
      tr: 'Hər kəs öz fikrini bildirəcək',
      ra: 'point of view',
      v1: 'too',
      v2: 'point of view',
      v3: 'view of point'
    },
    {
      id: 297,
      sntc: 'They’ll be able ___ it everywhere',
      tr: 'Onlar bunu hər yerdə tapa biləcəklər',
      ra: 'to find',
      v1: 'find',
      v2: 'want to',
      v3: 'to find'
    },
    {
      id: 298,
      sntc: 'We’ll ___ support you',
      tr: 'Biz həmişə sizə dəstək olacağıq',
      ra: 'always',
      v1: 'they',
      v2: 'always',
      v3: 'you come'
    },
    {
      id: 299,
      sntc: 'This ___ will impress him',
      tr: 'Bu xəbər ona təsir buraxacaq',
      ra: 'news',
      v1: 'news',
      v2: 'lessons',
      v3: 'presents'
    },
    {
      id: 300,
      sntc: '___ money will you earn?',
      tr: 'Sən nə qədər pul qazanacaqsan?',
      ra: 'How much',
      v1: 'What',
      v2: 'How many',
      v3: 'How much'
    }],
    [{
      id: 301,
      sntc: "She won't translate ___ without a dictionary",
      tr: 'O, bütün mətni lüğətsiz tərcümə etməyəcək',
      ra: 'all the text',
      v1: 'these text',
      v2: 'all the text',
      v3: 'text'
    },
    {
      id: 302,
      sntc: 'Will we ___ English correctly and automatically?',
      tr: 'Biz İngilis dilində düzgün və avtomatik danışacıq?',
      ra: 'speak',
      v1: 'speak',
      v2: 'talk',
      v3: 'tell'
    },
    {
      id: 303,
      sntc: 'We’ll try ___ our sales',
      tr: 'Biz satışımızı iki qat artırmağa çalışacağıq',
      ra: 'to double',
      v1: 'to make',
      v2: 'to double',
      v3: 'to earn'
    },
    {
      id: 304,
      sntc: 'How often ___ in that place?',
      tr: 'Sən həmin yerdə nə sıxlıqda olacaqsan?',
      ra: 'will you be',
      v1: 'you will be',
      v2: 'you be',
      v3: 'will you be'
    },
    {
      id: 305,
      sntc: 'This worker ___ soon',
      tr: 'Bu işçi tezliklə yorulacaq',
      ra: 'will get tired',
      v1: 'will get tired',
      v2: 'get tired',
      v3: 'get will tired'
    }],
    [{
      id: 306,
      sntc: 'Will it be ___ important event?',
      tr: 'Bu, elə vacib hadisə olacaq?',
      ra: 'such an',
      v1: 'so an',
      v2: 'so',
      v3: 'such an'
    },
    {
      id: 307,
      sntc: 'She’ll follow ___',
      tr: 'O, sənin məsləhətinə əməl edəcək',
      ra: 'your advice',
      v1: 'your advice',
      v2: 'my need',
      v3: 'your must'
    },
    {
      id: 308,
      sntc: "It'll be ___ procedure",
      tr: 'Bu standart prosedur olacaq',
      ra: 'a standard',
      v1: 'a standard',
      v2: 'standard',
      v3: 'again and again'
    },
    {
      id: 309,
      sntc: 'Will it be necessary ___ this report?',
      tr: 'Bu hesabatı imzalamaq lazım olacaq?',
      ra: 'to sign',
      v1: 'to need',
      v2: 'a sign',
      v3: 'to sign'
    },
    {
      id: 310,
      sntc: "It won't be ___ correct answer",
      tr: 'Bu, yeganə düzgün cavab olmayacaq',
      ra: 'the only',
      v1: 'a big',
      v2: 'the only',
      v3: 'an'
    }],
    [{
      id: 311,
      sntc: 'I’ll speak English ___',
      tr: 'Mən İngilis dilində müntəzəm əsasda danışacam',
      ra: 'on a regular basis',
      v1: 'a regular basis',
      v2: 'on regular basis',
      v3: 'on a regular basis'
    },
    {
      id: 312,
      sntc: 'Will you be ___ it?',
      tr: 'Sən bununla maraqlanacaqsan?',
      ra: 'interested in',
      v1: 'interested in',
      v2: 'interests',
      v3: 'interest'
    },
    {
      id: 313,
      sntc: 'I’ll be able to improve ___ significantly',
      tr: 'Mən ingilis dilimi əhəmiyyətli dərəcədə yaxşılaşdıra biləcəyəm',
      ra: 'my English',
      v1: 'talk',
      v2: 'speak',
      v3: 'my English'
    },
    {
      id: 314,
      sntc: 'I’ll look for ___ job',
      tr: 'Mən yeni iş axtaracam',
      ra: 'a new',
      v1: 'a new',
      v2: 'an',
      v3: 'an great'
    },
    {
      id: 315,
      sntc: "This approach ___ professional enough",
      tr: 'Bu yanaşma kifayət qədər peşəkar olmayacaq',
      ra: 'won’t be',
      v1: 'are',
      v2: 'will be',
      v3: 'won’t be'
    }],
    [{
      id: 316,
      sntc: 'Will you ___ tomorrow morning?',
      tr: 'Sabah səhər məşğul olacaqsan?',
      ra: 'be busy',
      v1: 'be busy',
      v2: 'an easy',
      v3: 'the easy'
    },
    {
      id: 317,
      sntc: 'I like ___',
      tr: 'Bu məsləhət xoşuma gəlir',
      ra: 'this advice',
      v1: 'this advice',
      v2: 'do this',
      v3: 'that presents'
    },
    {
      id: 318,
      sntc: '___ game interesting?',
      tr: 'Oyun maraqlıdır?',
      ra: 'Is the',
      v1: 'Does this',
      v2: 'Are the',
      v3: 'Is the'
    },
    {
      id: 319,
      sntc: 'Will this ___ enough?',
      tr: 'Bu bilik kifayət edəcək?',
      ra: 'knowledge be',
      v1: 'book',
      v2: 'knowledge be',
      v3: 'be knowledge'
    },
    {
      id: 320,
      sntc: 'I’ll try to find ___ English',
      tr: 'Mən İngilis dili üçün daha çox vaxt tapmağa çalışacam',
      ra: 'more time for',
      v1: 'more time for',
      v2: 'you my',
      v3: 'time my'
    }],
    [{
      id: 321,
      sntc: 'This app ___ help you learn English for free',
      tr: 'Bu tətbiq sizə İngilis dilini pulsuz öyrənməyə kömək edəcək',
      ra: 'will',
      v1: 'does',
      v2: 'do',
      v3: 'will'
    },
    {
      id: 322,
      sntc: 'I’ll try not to spend ___ money',
      tr: 'Mən çalışaram çox pul xərcləməyim',
      ra: 'so much',
      v1: 'so',
      v2: 'so many',
      v3: 'so much'
    },
    {
      id: 323,
      sntc: 'This subject ___ difficult for me',
      tr: 'Bu mövzu mənim üçün çox çətindir',
      ra: 'is too',
      v1: 'are too',
      v2: 'is too',
      v3: 'very'
    },
    {
      id: 324,
      sntc: 'They study ___',
      tr: 'Onlar çox səylə oxuyurlar',
      ra: 'very hard',
      v1: 'very hard',
      v2: 'is very hard',
      v3: 'such hard'
    },
    {
      id: 325,
      sntc: "I won't change my attitude ___ things",
      tr: 'Mən bu şeylərə münasibətimi dəyişməyəcəm',
      ra: 'to these',
      v1: 'these',
      v2: 'to these',
      v3: 'this'
    }],
    [{
      id: 326,
      sntc: 'I revised your lessons ___',
      tr: 'Mən sizin dərslərinizi bir dəfə də tekrarladım',
      ra: 'one more time',
      v1: 'often',
      v2: 'more',
      v3: 'one more time'
    },
    {
      id: 327,
      sntc: 'I followed ___',
      tr: 'Mən sizin məsləhətinizə əməl etdim',
      ra: 'your advice',
      v1: 'advice',
      v2: 'your advice',
      v3: 'you advice'
    },
    {
      id: 328,
      sntc: 'I continued ___ English here',
      tr: 'Mən İngilis dilini burada öyrənməyə davam etdim',
      ra: 'learning',
      v1: 'learning',
      v2: 'learn',
      v3: 'to make'
    },
    {
      id: 329,
      sntc: 'He died ___',
      tr: 'O, ötən il vəfat etdi',
      ra: 'last year',
      v1: 'a month',
      v2: 'last year',
      v3: 'these months'
    },
    {
      id: 330,
      sntc: 'I created this app two years ___',
      tr: 'Mən bu tətbiqi iki il əvvəl yaratmışam',
      ra: 'ago',
      v1: 'again',
      v2: 'sometimes',
      v3: 'ago'
    }],
    [{
      id: 331,
      sntc: 'I passed ___',
      tr: 'Mən sınaqdan keçdim',
      ra: 'the test',
      v1: 'test',
      v2: 'the test',
      v3: 'also this test'
    },
    {
      id: 332,
      sntc: '___ more efforts',
      tr: 'Bu, daha çox səy tələb edirdi',
      ra: 'It required',
      v1: 'It will',
      v2: 'It must',
      v3: 'It required'
    },
    {
      id: 333,
      sntc: 'They ___ him',
      tr: 'Onlar onu öldürdülər',
      ra: 'killed',
      v1: 'killed',
      v2: 'smiled',
      v3: 'look'
    },
    {
      id: 334,
      sntc: 'I received ___ letter',
      tr: 'Mən bu məktubu aldım',
      ra: 'this',
      v1: 'these',
      v2: 'an',
      v3: 'this'
    },
    {
      id: 335,
      sntc: 'He recommended it ___',
      tr: 'O, bizə bunu tövsiyə etdi',
      ra: 'to us',
      v1: 'us',
      v2: 'to his',
      v3: 'to us'
    }],
    [{
      id: 336,
      sntc: 'He recorded ___ videos',
      tr: 'O, elə çox videolar yazdı',
      ra: 'so many',
      v1: 'so many',
      v2: 'so much',
      v3: 'such much'
    },
    {
      id: 337,
      sntc: 'My teacher advised me ___ it',
      tr: 'Mənim müəllimim bunu etməyə məsləhət gördü',
      ra: 'to do',
      v1: 'to need',
      v2: 'to must',
      v3: 'to do'
    },
    {
      id: 338,
      sntc: 'I ___ to follow this advice',
      tr: 'Mən bu məsləhətə əməl etməyə üstünlük verdim',
      ra: 'preferred',
      v1: 'must',
      v2: 'can',
      v3: 'preferred'
    },
    {
      id: 339,
      sntc: 'This approach attracted ___',
      tr: 'Bu yanaşma yeni müştəriləri cəlb etdi',
      ra: 'new clients',
      v1: 'new clients',
      v2: 'much clients',
      v3: 'so clients'
    },
    {
      id: 340,
      sntc: 'He recommended this book ___',
      tr: 'O, bu kitabı mənə tövsiyə etdi',
      ra: 'to me',
      v1: 'for us',
      v2: 'us',
      v3: 'to me'
    }],
    [{
      id: 341,
      sntc: 'She washed up ___',
      tr: 'O, qabları yuyub',
      ra: 'the dishes',
      v1: 'dishes',
      v2: 'the dishes',
      v3: 'a book'
    },
    {
      id: 342,
      sntc: 'I closed ___',
      tr: 'Mən pəncərəni bağladım',
      ra: 'the window',
      v1: 'the window',
      v2: 'be able',
      v3: 'a door'
    },
    {
      id: 343,
      sntc: 'He always ___ her',
      tr: 'O, həmişə ona inanırdı',
      ra: 'believed',
      v1: 'believed',
      v2: 'believe',
      v3: 'must'
    },
    {
      id: 344,
      sntc: 'She needed to ___ with us',
      tr: 'Ona bizimlə əlaqə qurmaq lazım idi',
      ra: 'get in touch',
      v1: 'touch in get',
      v2: 'get at touch',
      v3: 'get in touch'
    },
    {
      id: 345,
      sntc: 'They asked us ___ of questions',
      tr: 'Onlar bizə bir-iki sual verdilər',
      ra: 'a couple',
      v1: 'couple',
      v2: 'a cup',
      v3: 'a couple'
    }],
    [{
      id: 346,
      sntc: 'He published ___ books',
      tr: 'O, bir neçə kitab nəşr etdi',
      ra: 'several',
      v1: 'sometimes',
      v2: 'often',
      v3: 'several'
    },
    {
      id: 347,
      sntc: 'He ignored ___ questions',
      tr: 'O, onların suallarına məhəl qoymadı',
      ra: 'their',
      v1: 'their',
      v2: 'us',
      v3: 'him'
    },
    {
      id: 348,
      sntc: 'I finished ___ this video',
      tr: 'Mən bu videoya baxmağı bitirdim',
      ra: 'watching',
      v1: 'looking',
      v2: 'watching',
      v3: 'look'
    },
    {
      id: 349,
      sntc: 'She cried ___',
      tr: 'O, birdən-birə ağladı',
      ra: 'suddenly',
      v1: 'often',
      v2: 'suddenly',
      v3: 'sometimes'
    },
    {
      id: 350,
      sntc: 'I closed ___',
      tr: 'Mən qapını bağladım',
      ra: 'the door',
      v1: 'a window',
      v2: 'door',
      v3: 'the door'
    }],
    [{
      id: 351,
      sntc: 'I decided ___ to go there',
      tr: 'Mən ora getməməyə qərar verdim',
      ra: 'not',
      v1: 'tell',
      v2: 'not',
      v3: 'of'
    },
    {
      id: 352,
      sntc: '___ the Elementary level',
      tr: 'Mən elementar səviyyəyə çatdım',
      ra: 'I reached',
      v1: 'I reached',
      v2: 'We are',
      v3: 'We are riched'
    },
    {
      id: 353,
      sntc: 'I decided ___ to that party',
      tr: 'Mən həmin əyləncəyə getməməyə qərar verdim',
      ra: 'not to go',
      v1: 'go',
      v2: 'not to go',
      v3: 'not to speak'
    },
    {
      id: 354,
      sntc: 'She suggested ___ to the park',
      tr: 'O, parka getməyi təklif etdi',
      ra: 'going',
      v1: 'hear',
      v2: 'going',
      v3: 'order'
    },
    {
      id: 355,
      sntc: 'We ___ friends',
      tr: 'Biz dost qaldıq',
      ra: 'remained',
      v1: 'remained',
      v2: 'remained with',
      v3: 'each other'
    }],
    [{
      id: 356,
      sntc: 'His offer sounded ___',
      tr: 'Onun təklifi həqiqətən qəribə səsləndi',
      ra: 'really strange',
      v1: 'loudly',
      v2: 'quietly',
      v3: 'really strange'
    },
    {
      id: 357,
      sntc: 'She missed that ___',
      tr: 'O, həmin fürsəti əldən verdi',
      ra: 'opportunity',
      v1: 'a chance',
      v2: 'opportunity',
      v3: 'an opportunity'
    },
    {
      id: 358,
      sntc: 'I prepared ___ the test',
      tr: 'Mən sınaqa hazırlaşdım',
      ra: 'for',
      v1: 'for',
      v2: 'at',
      v3: 'by'
    },
    {
      id: 359,
      sntc: 'I ___ results',
      tr: 'Mən bu nəticələri müqayisə etdim',
      ra: 'compared these',
      v1: 'prepares to these',
      v2: 'compared these',
      v3: 'compares that'
    },
    {
      id: 360,
      sntc: 'I described his ___',
      tr: 'Mən onun xarici görünüşünü təsvir etdim',
      ra: 'appearance',
      v1: 'see',
      v2: 'appearance',
      v3: 'looking'
    }],
    [{
      id: 361,
      sntc: 'He insisted on ___ it',
      tr: 'O, bunu etməkdə təkid etdi',
      ra: 'doing',
      v1: 'doing',
      v2: 'to do',
      v3: 'to hear'
    },
    {
      id: 362,
      sntc: 'He earned ___ dollars monthly',
      tr: 'O, ayda iki min dollar qazanırdı',
      ra: 'two thousand',
      v1: 'second hundred',
      v2: 'three thousands',
      v3: 'two thousand'
    },
    {
      id: 363,
      sntc: 'She cooked ___ very tasty',
      tr: 'O, çox dadlı bir şey bişirdi',
      ra: 'something',
      v1: 'much',
      v2: 'everything',
      v3: 'something'
    },
    {
      id: 364,
      sntc: 'He ignored ___',
      tr: 'O, onun sözlərinə məhəl qoymadı',
      ra: 'her words',
      v1: 'her words',
      v2: 'him sentence',
      v3: 'we'
    },
    {
      id: 365,
      sntc: 'We trained ___',
      tr: 'Biz bu bacarıqlar üzərində məşq etdik',
      ra: 'these skills',
      v1: 'also',
      v2: 'us',
      v3: 'these skills'
    }],
    [{
      id: 366,
      sntc: '___ very rarely',
      tr: 'O, çox nadir hallarda siqaret çəkirdi',
      ra: 'He smoked',
      v1: 'She should',
      v2: 'He smoked',
      v3: 'I like'
    },
    {
      id: 367,
      sntc: 'I communicated with ___ people',
      tr: 'Mən fərqli insanlarla ünsiyyət qurdum',
      ra: 'different',
      v1: 'one',
      v2: 'different',
      v3: 'a'
    },
    {
      id: 368,
      sntc: 'He repaired ___',
      tr: 'O, velosipedini təmir etdi',
      ra: 'his bike',
      v1: 'bike',
      v2: 'a car',
      v3: 'his bike'
    },
    {
      id: 369,
      sntc: 'I recorded everything ___',
      tr: 'Mən hər şeyi vaxtdında yazdım',
      ra: 'on time',
      v1: 'in time',
      v2: 'a little bit',
      v3: 'on time'
    },
    {
      id: 370,
      sntc: 'My friends advised me ___ it',
      tr: 'Mənim dostlarım bunu etməmək məsləhət gördülər',
      ra: 'not to do',
      v1: 'not to do',
      v2: 'do not to',
      v3: 'to not do'
    }],
    [{
      id: 371,
      sntc: '___ his birthday',
      tr: 'O, ad gününü qeyd etdi',
      ra: 'He celebrated',
      v1: 'He celebrated',
      v2: 'She made',
      v3: 'I happy'
    },
    {
      id: 372,
      sntc: 'We trusted him ___',
      tr: 'Biz tamamilə ona etibar edirdik',
      ra: 'completely',
      v1: 'complete',
      v2: 'completely',
      v3: 'full of'
    },
    {
      id: 373,
      sntc: 'She experienced ___ strange feeling',
      tr: 'O, çox qəribə hiss yaşadı',
      ra: 'a very',
      v1: 'very',
      v2: 'a very',
      v3: 'much'
    },
    {
      id: 374,
      sntc: 'My friends recommended this app ___',
      tr: 'Mənim dostlarım mənə bu tətbiqi tövsiyə etdilər',
      ra: 'to me',
      v1: 'to his',
      v2: 'to their',
      v3: 'to me'
    },
    {
      id: 375,
      sntc: 'I focused ___ problem',
      tr: 'Mən diqqətimi bu problemə yönəltdim',
      ra: 'on this',
      v1: 'on this',
      v2: 'on',
      v3: 'this'
    }],
    [{
      id: 376,
      sntc: 'I parked very far ___',
      tr: 'Mən buradan çox uzaqda park etmişdim',
      ra: 'from here',
      v1: 'here',
      v2: 'from that one',
      v3: 'from here'
    },
    {
      id: 377,
      sntc: '___ to saints',
      tr: 'O, müqəddəslərə dua etdi',
      ra: 'He prayed',
      v1: 'We already',
      v2: 'I promised',
      v3: 'He prayed'
    },
    {
      id: 378,
      sntc: 'He owned ___',
      tr: 'O, bu evin sahibi idi',
      ra: 'this house',
      v1: 'house',
      v2: 'this house',
      v3: 'to go there'
    },
    {
      id: 379,
      sntc: 'She divided our group into ___',
      tr: 'O, qrupumuzu üç hissəyə böldü',
      ra: 'three parts',
      v1: 'several part',
      v2: 'first part',
      v3: 'three parts'
    },
    {
      id: 380,
      sntc: 'I participated in ___',
      tr: 'Mən bu turnirdə iştirak etmişəm',
      ra: 'this tournament',
      v1: 'this tournament',
      v2: 'competition',
      v3: 'event'
    }],
    [{
      id: 381,
      sntc: 'It happened ___ family',
      tr: 'Bu, mənim ailəmin başına gəldi',
      ra: 'to my',
      v1: 'to him',
      v2: 'to my',
      v3: 'to we'
    },
    {
      id: 382,
      sntc: 'We communicated with each other ___',
      tr: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ',
      ra: 'from time to time',
      v1: 'by time to time',
      v2: 'from time to time',
      v3: 'timer to timer'
    },
    {
      id: 383,
      sntc: 'He insisted on ___ it',
      tr: 'O, bunu etməkdə təkid etdi',
      ra: 'doing',
      v1: 'make',
      v2: 'do',
      v3: 'doing'
    },
    {
      id: 384,
      sntc: 'She danced ___',
      tr: 'O, peşəkar rəqs etdi',
      ra: 'professionally',
      v1: 'professionally',
      v2: 'professional',
      v3: 'beautiful'
    },
    {
      id: 385,
      sntc: 'He reacted to it very ___',
      tr: 'O, buna çox qəribə reaksiya verdi',
      ra: 'strangely',
      v1: 'fully',
      v2: 'strangely',
      v3: 'bad'
    }],
    [{
      id: 386,
      sntc: 'I passed ___',
      tr: 'Mən imtahandan keçdim',
      ra: 'the exam',
      v1: 'the exam',
      v2: 'knowledge',
      v3: 'these test'
    },
    {
      id: 387,
      sntc: 'It depended ___',
      tr: 'Bu bizdən asılı idi',
      ra: 'on us',
      v1: 'on each us',
      v2: 'on us',
      v3: 'for each of us'
    },
    {
      id: 388,
      sntc: 'We hated ___ it',
      tr: 'Biz bunu etməkdən nifrət edirdik',
      ra: 'doing',
      v1: 'prefer',
      v2: 'listening',
      v3: 'doing'
    },
    {
      id: 389,
      sntc: 'He added two very important ___',
      tr: 'O, iki çox vacib şeyi əlavə etdi',
      ra: 'things',
      v1: 'things',
      v2: 'thing',
      v3: 'issue'
    },
    {
      id: 390,
      sntc: 'He repeated ___',
      tr: 'O, bu cümləni təkrarladı',
      ra: 'this sentence',
      v1: 'sentence',
      v2: 'this sentence',
      v3: 'word'
    }],
    [{
      id: 391,
      sntc: 'He prayed ___ God',
      tr: 'O, Allaha dua etdi',
      ra: 'to',
      v1: 'at',
      v2: 'by',
      v3: 'to'
    },
    {
      id: 392,
      sntc: 'I walked ___',
      tr: 'Mən işə piyada getdim',
      ra: 'to work',
      v1: 'to work',
      v2: 'at school',
      v3: 'museum'
    },
    {
      id: 393,
      sntc: 'You explained it ___',
      tr: 'Sən bunu çox aydın izah etdin',
      ra: 'very clearly',
      v1: 'complete',
      v2: 'very absolutely',
      v3: 'very clearly'
    },
    {
      id: 394,
      sntc: 'They shared this information ___ us',
      tr: 'Onlar bu məlumatı bizimlə bölüşdülər',
      ra: 'with',
      v1: 'to',
      v2: 'for',
      v3: 'with'
    },
    {
      id: 395,
      sntc: 'We ___ him for everything',
      tr: 'Biz hər şeyə görə ona təşəkkür etdik',
      ra: 'thanked',
      v1: 'should',
      v2: 'thanked',
      v3: 'may'
    }],
    [{
      id: 396,
      sntc: 'Everything remained ___',
      tr: 'Hər şey əvvəlki kimi qaldı',
      ra: 'the same',
      v1: 'the same',
      v2: 'time',
      v3: 'by same'
    },
    {
      id: 397,
      sntc: 'I achieved ___ at last',
      tr: 'Mən bu məqsədə nəhayət çatdım',
      ra: 'this aim',
      v1: 'this event',
      v2: 'this aim',
      v3: 'these difficult'
    },
    {
      id: 398,
      sntc: 'I parked ___',
      tr: 'Mən orada park etmişəm',
      ra: 'there',
      v1: 'there',
      v2: 'in there',
      v3: 'at that place'
    },
    {
      id: 399,
      sntc: 'They moved ___ America',
      tr: 'Onlar Amerikaya köçüblər',
      ra: 'to',
      v1: 'from',
      v2: 'by',
      v3: 'to'
    },
    {
      id: 400,
      sntc: 'I concentrated on ___',
      tr: 'Mən bu mövzuda cəmləşdim',
      ra: 'this issue',
      v1: 'this issue',
      v2: 'these subject',
      v3: 'this topics'
    }],
    [{
      id: 401,
      sntc: 'He ___ me everything',
      tr: 'O, mənə hər şeyi danışdı',
      ra: 'told',
      v1: 'said',
      v2: 'tell',
      v3: 'told'
    },
    {
      id: 402,
      sntc: 'I did ___ time',
      tr: 'Mən bunu vaxtında etdim',
      ra: 'it on',
      v1: 'not',
      v2: 'to this',
      v3: 'it on'
    },
    {
      id: 403,
      sntc: 'I ___ it one more time',
      tr: 'Mən bunu bir dəfə də dedim',
      ra: 'said',
      v1: 'tell',
      v2: 'said',
      v3: 'talk'
    },
    {
      id: 404,
      sntc: 'It ___ tremendous success',
      tr: 'Bu, çox böyük uğur idi',
      ra: 'was a',
      v1: 'were a',
      v2: 'was an',
      v3: 'was a'
    },
    {
      id: 405,
      sntc: 'He ___',
      tr: 'O, qayıtdı',
      ra: 'returned',
      v1: 'go',
      v2: 'returned',
      v3: 'come back'
    }],
    [{
      id: 406,
      sntc: 'He ___ back',
      tr: 'O, qayıtdı',
      ra: 'came',
      v1: 'came',
      v2: 'come',
      v3: 'go'
    },
    {
      id: 407,
      sntc: 'He gave ___ smoking',
      tr: 'O, siqareti tərgitdi',
      ra: 'up',
      v1: 'up',
      v2: 'to',
      v3: 'of'
    },
    {
      id: 408,
      sntc: 'I put it near ___ computer',
      tr: 'Mən bunu compüterimin yaxınlığında qoydum',
      ra: 'my',
      v1: 'us',
      v2: 'we',
      v3: 'my'
    },
    {
      id: 409,
      sntc: 'I came ___ on time',
      tr: 'Mən ora vaxtında gəldim',
      ra: 'there',
      v1: 'there',
      v2: 'at home',
      v3: 'at school'
    },
    {
      id: 410,
      sntc: 'I found ___',
      tr: 'Mən açarlarımı tapdım',
      ra: 'my keys',
      v1: 'key',
      v2: 'computer',
      v3: 'my keys'
    }],
    [{
      id: 411,
      sntc: 'I wrote it ___',
      tr: 'Mən bunu yazdım',
      ra: 'down',
      v1: 'really',
      v2: 'cheap',
      v3: 'down'
    },
    {
      id: 412,
      sntc: 'I wrote down ___',
      tr: 'Mən bu sözü yazdım',
      ra: 'this word',
      v1: 'this word',
      v2: 'this jeans',
      v3: 'these movies'
    },
    {
      id: 413,
      sntc: 'I heard it for ___',
      tr: 'Mən bunu ilk dəfə eşitdim',
      ra: 'the first time',
      v1: 'be choice',
      v2: 'be able',
      v3: 'the first time'
    },
    {
      id: 414,
      sntc: 'He ___ me this thing',
      tr: 'O, mənə bu əşyanı gətirdi',
      ra: 'brought',
      v1: 'potential',
      v2: 'brought',
      v3: 'threat'
    },
    {
      id: 415,
      sntc: 'We ___ for America',
      tr: 'Biz Amerikaya yola düşdük',
      ra: 'left',
      v1: 'continue',
      v2: 'left',
      v3: 'manipulate'
    }],
    [{
      id: 416,
      sntc: 'I ___ home',
      tr: 'Mən evdən çıxdım',
      ra: 'left',
      v1: 'left',
      v2: 'everyone',
      v3: 'manage'
    },
    {
      id: 417,
      sntc: 'I learnt ___ by heart',
      tr: 'Mən bunu əzbər öyrəndim',
      ra: 'it',
      v1: 'it',
      v2: 'train ',
      v3: 'die'
    },
    {
      id: 418,
      sntc: 'I wrote this expression ___',
      tr: 'Mən bu ifadəni yazdım',
      ra: 'down',
      v1: 'huge',
      v2: 'own',
      v3: 'down'
    },
    {
      id: 419,
      sntc: 'I understood you at ___',
      tr: 'Mən səni dərhal başa düşdüm',
      ra: 'once',
      v1: 'half',
      v2: 'once',
      v3: 'o’clock'
    },
    {
      id: 420,
      sntc: 'She cut ___',
      tr: 'O, özünü kəsdi',
      ra: 'herself',
      v1: 'his',
      v2: 'their',
      v3: 'herself'
    }],
    [{
      id: 421,
      sntc: 'I heard it in the ___',
      tr: 'Mən bunu xəbərlərdə eşitmişəm',
      ra: 'news',
      v1: 'glass',
      v2: 'news',
      v3: 'document'
    },
    {
      id: 422,
      sntc: 'He kept this ___',
      tr: 'O, bu sirri saxladı',
      ra: 'secret',
      v1: 'words',
      v2: 'difficulty',
      v3: 'secret'
    },
    {
      id: 423,
      sntc: 'They ___ the chair',
      tr: 'Onlar stulu sındırdılar',
      ra: 'broke',
      v1: 'broke',
      v2: 'candle',
      v3: 'beginning'
    },
    {
      id: 424,
      sntc: 'I met so ___ new words there',
      tr: 'Mən orada elə çox yeni sözlərlə tanış oldum',
      ra: 'many',
      v1: 'second',
      v2: 'much',
      v3: 'many'
    },
    {
      id: 425,
      sntc: 'He set up a very ___ company',
      tr: 'O, çox gəlirli şirkət qurdu',
      ra: 'profitable',
      v1: 'profitable',
      v2: 'boat',
      v3: 'apologize'
    }],
    [{
      id: 426,
      sntc: 'They broke ___',
      tr: 'Onlar pəncərəni sındırdılar',
      ra: 'the window',
      v1: 'a phrase',
      v2: 'cancel',
      v3: 'the window'
    },
    {
      id: 427,
      sntc: 'They sent me ___',
      tr: 'Onlar mənə bildiriş göndərdilər',
      ra: 'the notification',
      v1: 'hear',
      v2: 'the notification',
      v3: 'expect'
    },
    {
      id: 428,
      sntc: 'He lied to his ___',
      tr: 'O, müdirinə yalan danışdı',
      ra: 'boss',
      v1: 'boss',
      v2: 'ball',
      v3: 'desk'
    },
    {
      id: 429,
      sntc: 'He ___ to London',
      tr: 'O, Londona uçdu',
      ra: 'flew',
      v1: 'flew',
      v2: 'instead',
      v3: 'divorced'
    },
    {
      id: 430,
      sntc: 'He ___ his word',
      tr: 'O, sözünün üstündə durdu',
      ra: 'kept',
      v1: 'stone',
      v2: 'kept',
      v3: 'fit'
    }],
    [{
      id: 431,
      sntc: 'I ___ to call her',
      tr: 'Mən ona zəng etməyi unutdum',
      ra: 'forgot',
      v1: 'bell',
      v2: 'horse',
      v3: 'forgot'
    },
    {
      id: 432,
      sntc: 'They ___ me a parcel',
      tr: 'Onlar mənə bağlama göndərdilər',
      ra: 'sent',
      v1: 'share',
      v2: 'sent',
      v3: 'decide'
    },
    {
      id: 433,
      sntc: 'We slept ___ enough',
      tr: 'Biz kifayət qədər yatdıq',
      ra: 'more than',
      v1: 'trust',
      v2: 'four',
      v3: 'more than'
    },
    {
      id: 434,
      sntc: 'Two ___ fell down',
      tr: 'İki alma yerə düşdü',
      ra: 'apples',
      v1: 'word',
      v2: 'apples',
      v3: 'tremendous'
    },
    {
      id: 435,
      sntc: 'The boys ___ behind that tree',
      tr: 'Oğlanlar o ağacın arxasında gizləndilər',
      ra: 'hid',
      v1: 'secret',
      v2: 'watch',
      v3: 'hid'
    }],
    [{
      id: 436,
      sntc: 'I ___ a bike',
      tr: 'Mən velosiped sürdüm',
      ra: 'rode',
      v1: 'rode',
      v2: 'glad',
      v3: 'boast'
    },
    {
      id: 437,
      sntc: 'She ___ him',
      tr: 'O, onu bağışladı',
      ra: 'forgave',
      v1: 'inside',
      v2: 'forgave',
      v3: 'attempt'
    },
    {
      id: 438,
      sntc: 'She fed her ___',
      tr: 'O, körpəsini yedizdirdi',
      ra: 'baby',
      v1: 'baby',
      v2: 'lucky',
      v3: 'hard'
    },
    {
      id: 439,
      sntc: 'They fought for ___',
      tr: 'Onlar müstəqillik uğrunda mübarizə apardılar',
      ra: 'independence',
      v1: 'careful',
      v2: 'independence',
      v3: 'month'
    },
    {
      id: 440,
      sntc: 'I dealt with different ___',
      tr: 'Mən müxtəlif şikayətlərlə məşğul oldum',
      ra: 'complaints',
      v1: 'wife',
      v2: 'logical',
      v3: 'complaints'
    }],
    [{
      id: 441,
      sntc: 'She forgave ___',
      tr: 'O, hər şeyi bağışladı',
      ra: 'everything',
      v1: 'hotel',
      v2: 'everything',
      v3: 'price'
    },
    {
      id: 442,
      sntc: 'I hung my jacket on ___',
      tr: 'Mən jaketimi qarmaqcıqdan asdım',
      ra: 'a hook',
      v1: 'conference',
      v2: 'certain',
      v3: 'a hook'
    },
    {
      id: 443,
      sntc: 'I drove to ___',
      tr: 'Mən parka maşınla getdim',
      ra: 'the park',
      v1: 'the park',
      v2: 'watches',
      v3: 'enthusiasm'
    },
    {
      id: 444,
      sntc: 'It spoilt ___',
      tr: 'Bu, mənim planlarımı korladı',
      ra: 'my plans',
      v1: 'arrest',
      v2: 'outside',
      v3: 'my plans'
    },
    {
      id: 445,
      sntc: 'She fed ___',
      tr: 'O, uşaqları yedizdirdi',
      ra: 'the children',
      v1: 'exercise',
      v2: 'mistake',
      v3: 'the children'
    }],
    [{
      id: 446,
      sntc: 'I ___ it for dinner',
      tr: 'Mən bunu şam yeməyində yedim',
      ra: 'ate',
      v1: 'shy',
      v2: 'ate',
      v3: 'return'
    },
    {
      id: 447,
      sntc: 'She foresaw this ___',
      tr: 'O, bu vəziyyəti qabaqcadan gördü',
      ra: 'situation',
      v1: 'sometimes',
      v2: 'complaint',
      v3: 'situation'
    },
    {
      id: 448,
      sntc: 'They burnt ___',
      tr: 'Onlar kəndi yandırdılar',
      ra: 'the village',
      v1: 'the village',
      v2: 'adapt',
      v3: 'smoking'
    },
    {
      id: 449,
      sntc: 'He never ___',
      tr: 'O, heç vaxt həddən artıq yemirdi',
      ra: 'overate',
      v1: 'lecture',
      v2: 'overate',
      v3: 'outstanding'
    },
    {
      id: 450,
      sntc: 'He withdrew half a million dollars from ___',
      tr: 'O, hesabından yarım milyon dollar çıxardı',
      ra: 'his account',
      v1: 'his account',
      v2: 'expect',
      v3: 'intend'
    }],
    [{
      id: 451,
      sntc: 'I read such a funny ___',
      tr: 'Mən çox gülməli bir hekayə oxudum',
      ra: 'story',
      v1: 'breakfast',
      v2: 'story',
      v3: 'candle'
    },
    {
      id: 452,
      sntc: 'Do you need to solve this problem ___ now?',
      tr: 'Sənə bu problemi indi həll etmək lazımdır?',
      ra: 'right',
      v1: 'furniture',
      v2: 'right',
      v3: 'shy'
    },
    {
      id: 453,
      sntc: 'I understood you at ___',
      tr: 'Mən səni dərhal başa düşdüm',
      ra: 'once',
      v1: 'once',
      v2: 'really',
      v3: 'holiday'
    },
    {
      id: 454,
      sntc: 'I learnt it ___',
      tr: 'Mən bunu əzbər öyrəndim',
      ra: 'by heart',
      v1: 'interesting',
      v2: 'loudly',
      v3: 'by heart'
    },
    {
      id: 455,
      sntc: 'He cut ___',
      tr: 'O, özünü kəsdi',
      ra: 'himself',
      v1: 'devote',
      v2: 'worry',
      v3: 'himself'
    }],
    [{
      id: 456,
      sntc: 'She ___ this situation',
      tr: 'O, bu vəziyyəti qabaqcadan görüb',
      ra: 'foresaw',
      v1: 'satisfied',
      v2: 'foresaw',
      v3: 'complaint'
    },
    {
      id: 457,
      sntc: 'She tore that ___',
      tr: 'O, bu sənədi cırdı',
      ra: 'document',
      v1: 'document',
      v2: 'stylish',
      v3: 'advise'
    },
    {
      id: 458,
      sntc: 'He ___ it',
      tr: 'O, bunu tezdən etdi',
      ra: 'redid',
      v1: 'attempt',
      v2: 'redid',
      v3: 'working'
    },
    {
      id: 459,
      sntc: 'I’m ___ you misunderstood me',
      tr: 'Mən qorxuram sən məni səhv başa düşdün',
      ra: 'afraid',
      v1: 'afraid',
      v2: 'know',
      v3: 'impress'
    },
    {
      id: 460,
      sntc: 'He often ___ for no reason',
      tr: 'O, çox vaxt səbəb olmadan artıq pul ödəyirdi',
      ra: 'overpaid',
      v1: 'overpaid',
      v2: 'listening',
      v3: 'useful'
    }],
    [{
      id: 461,
      sntc: 'I want ___ in England',
      tr: 'Mən İngiltərədə yaşamaq istəyirəm',
      ra: 'to live',
      v1: 'watch',
      v2: 'to live',
      v3: 'living'
    },
    {
      id: 462,
      sntc: 'They ___ the food',
      tr: 'Onlar yeməyi xarab etdilər',
      ra: 'spoilt',
      v1: 'obvious',
      v2: 'satisfied',
      v3: 'spoilt'
    },
    {
      id: 463,
      sntc: 'This food smelt ___',
      tr: 'Bu yeməkdən yaxşı iy gəlirdi',
      ra: 'good',
      v1: 'angry',
      v2: 'good',
      v3: 'happy'
    },
    {
      id: 464,
      sntc: 'The wind ___ unexpectedly',
      tr: 'Külək gözlənilmədən əsdi',
      ra: 'blew',
      v1: 'blew',
      v2: 'interest',
      v3: 'traveling'
    },
    {
      id: 465,
      sntc: 'She ___ his feelings',
      tr: 'O, onun hisslərini incitdi',
      ra: 'hurt',
      v1: 'hurt',
      v2: 'realize',
      v3: 'listening'
    }],
    [{
      id: 466,
      sntc: 'I think you ___ too little money',
      tr: 'Məncə, sən çox az pul xərcləmisən',
      ra: 'spent',
      v1: 'rainy',
      v2: 'spent',
      v3: 'adapt'
    },
    {
      id: 467,
      sntc: 'Does he ___ this project?',
      tr: 'O, bu layihəni beyənir?',
      ra: 'like',
      v1: 'enough',
      v2: 'like',
      v3: 'afraid'
    },
    {
      id: 468,
      sntc: 'I drove ___',
      tr: 'Mən maşınla evə getdim',
      ra: 'home',
      v1: 'home',
      v2: 'manner',
      v3: 'week'
    },
    {
      id: 469,
      sntc: 'He ___ twenty thousand euros from his account',
      tr: 'O, hesabından iyirmi min avro çıxarıb',
      ra: 'withdrew',
      v1: 'prepare',
      v2: 'behave',
      v3: 'withdrew'
    },
    {
      id: 470,
      sntc: 'They ___ the village',
      tr: 'Onlar kəndi yandırdılar',
      ra: 'burnt',
      v1: 'burnt',
      v2: 'be able',
      v3: 'compete'
    }],
    [{
      id: 471,
      sntc: 'They hit him very ___',
      tr: 'Onlar onu çox sərt vurdular',
      ra: 'hard',
      v1: 'earn',
      v2: 'hard',
      v3: 'smile'
    },
    {
      id: 472,
      sntc: 'I ___ everything',
      tr: 'Mən hər şeyi unutdum',
      ra: 'forgot',
      v1: 'forgot',
      v2: 'listen',
      v3: 'smoking'
    },
    {
      id: 473,
      sntc: 'He sang his favorite ___',
      tr: 'O, ən sevdiyi mahnını oxudu',
      ra: 'song',
      v1: 'song',
      v2: 'unexpectedly',
      v3: 'stone'
    },
    {
      id: 474,
      sntc: 'She fed the ___',
      tr: 'O, uşaqları yedizdirdi',
      ra: 'children',
      v1: 'jewelry',
      v2: 'children',
      v3: 'clinic'
    },
    {
      id: 475,
      sntc: 'Does he ___ you?',
      tr: 'O, sizə kömək edir?',
      ra: 'help',
      v1: 'disappointed',
      v2: 'ready',
      v3: 'help'
    }],
    [{
      id: 476,
      sntc: 'I swam there ___ summer',
      tr: 'Mən keçən yay orada üzmüşəm',
      ra: 'last',
      v1: 'last',
      v2: 'ago',
      v3: 'fast'
    },
    {
      id: 477,
      sntc: 'He ___ everything',
      tr: 'O, hər şeyi korladı',
      ra: 'spoilt',
      v1: 'heart',
      v2: 'cook',
      v3: 'spoilt'
    },
    {
      id: 478,
      sntc: 'The ship ___',
      tr: 'Gəmi batdı',
      ra: 'sank',
      v1: 'sank',
      v2: 'threat',
      v3: 'take'
    },
    {
      id: 479,
      sntc: 'I put it on ___',
      tr: 'Mən bunu stolun üstünə qoydum',
      ra: 'the table',
      v1: 'absent',
      v2: 'the table',
      v3: 'pocket'
    },
    {
      id: 480,
      sntc: 'I ___ it in the news',
      tr: 'Mən bunu xəbərdə eşitdim',
      ra: 'heard',
      v1: 'listen',
      v2: 'heard',
      v3: 'regret'
    }],
    [{
      id: 481,
      sntc: 'I ___ a horse',
      tr: 'Mən at sürdüm',
      ra: 'rode',
      v1: 'go',
      v2: 'rode',
      v3: 'come'
    },
    {
      id: 482,
      sntc: 'I slept for two ___',
      tr: 'Mən iki saat yatdım',
      ra: 'hours',
      v1: 'week',
      v2: 'hours',
      v3: 'o’clock'
    },
    {
      id: 483,
      sntc: 'She hurt ___ arm',
      tr: 'O, əlini yaraladı',
      ra: 'her',
      v1: 'him',
      v2: 'her',
      v3: 'them'
    },
    {
      id: 484,
      sntc: 'She ___ everyone',
      tr: 'O, hər kəsi bağışladı',
      ra: 'forgave',
      v1: 'forgave',
      v2: 'manage',
      v3: 'apologize'
    },
    {
      id: 485,
      sntc: 'He dreamt about ___',
      tr: 'O, pul haqqında xəyal qurdu',
      ra: 'money',
      v1: 'unusual',
      v2: 'money',
      v3: 'sad'
    }],
    [{
      id: 486,
      sntc: 'He tore ___',
      tr: 'O, kitabı cırdı',
      ra: 'the book',
      v1: 'the book',
      v2: 'a lecture',
      v3: 'the decision'
    },
    {
      id: 487,
      sntc: 'She often ___',
      tr: 'O, çox vaxt yatıb qalırdı',
      ra: 'overslept',
      v1: 'wrong',
      v2: 'lucky',
      v3: 'overslept'
    },
    {
      id: 488,
      sntc: 'They fought ___ bravely',
      tr: 'Onlar çox cürətlə döyüşdülər',
      ra: 'very',
      v1: 'very',
      v2: 'enough',
      v3: 'many'
    },
    {
      id: 489,
      sntc: 'I ___ the ball',
      tr: 'Mən topu tutdum',
      ra: 'caught',
      v1: 'visit',
      v2: 'caught',
      v3: 'help'
    },
    {
      id: 490,
      sntc: 'I threw it ___',
      tr: 'Mən bunu tulladım',
      ra: 'away',
      v1: 'away',
      v2: 'also',
      v3: 'always'
    }],
    [{
      id: 491,
      sntc: 'He ___ her too much',
      tr: 'O, ona çox şey danışdı',
      ra: 'told',
      v1: 'said',
      v2: 'talk',
      v3: 'told'
    },
    {
      id: 492,
      sntc: 'He made ___ discovery',
      tr: 'O, bir kəşf etdi',
      ra: 'a',
      v1: 'an',
      v2: 'a',
      v3: 'two'
    },
    {
      id: 493,
      sntc: 'They had ___ together',
      tr: 'Onlar birlikdə çox gözəl vaxt keçirdilər',
      ra: 'a great time',
      v1: 'lazy',
      v2: 'a great time',
      v3: 'an always'
    },
    {
      id: 494,
      sntc: '___ the teacher right?',
      tr: 'Müəllim haqlıdır?',
      ra: 'Is',
      v1: 'Is',
      v2: 'Does',
      v3: 'Are'
    },
    {
      id: 495,
      sntc: 'He ___ it very loudly',
      tr: 'O, bunu çox ucadan dedi',
      ra: 'said',
      v1: 'said',
      v2: 'tell',
      v3: 'speak'
    }],
    [{
      id: 496,
      sntc: "It's very ___",
      tr: 'Bu çox maraqlıdır',
      ra: 'interesting',
      v1: 'interesting',
      v2: 'badly',
      v3: 'bag'
    },
    {
      id: 497,
      sntc: 'I took him ___ me',
      tr: 'Mən onu özümlə apardım',
      ra: 'with',
      v1: 'to',
      v2: 'together',
      v3: 'with'
    },
    {
      id: 498,
      sntc: 'They ___ Chinese',
      tr: 'Onlar Çin dilində danışırdılar',
      ra: 'spoke',
      v1: 'told',
      v2: 'spoke',
      v3: 'is'
    },
    {
      id: 499,
      sntc: 'He ___ famous',
      tr: 'O, məşhur oldu',
      ra: 'became',
      v1: 'get',
      v2: 'become',
      v3: 'became'
    },
    {
      id: 500,
      sntc: '___ spoke French',
      tr: 'Onlar Fransız dilində danışırdılar',
      ra: 'They',
      v1: 'They',
      v2: 'He is',
      v3: 'We are'
    }],
    [{
      id: 501,
      sntc: 'The lesson ___ half an hour ago',
      tr: 'Dərs yarım saat əvvəl başlayıb',
      ra: 'began',
      v1: 'remember',
      v2: 'starting',
      v3: 'began'
    },
    {
      id: 502,
      sntc: 'He meant to ___ me',
      tr: 'O, mənə kömək etmək istəyirdi',
      ra: 'help',
      v1: 'happen',
      v2: 'help',
      v3: 'well'
    },
    {
      id: 503,
      sntc: 'The news ___ bad',
      tr: 'Xəbərlər pisdir',
      ra: 'is',
      v1: 'were',
      v2: 'are',
      v3: 'is'
    },
    {
      id: 504,
      sntc: 'I perfectly ___ you',
      tr: 'Mən səni mükəmməl başa düşdüm',
      ra: 'understood',
      v1: 'pleasure',
      v2: 'complain',
      v3: 'understood'
    },
    {
      id: 505,
      sntc: 'He set ___ very profitable business',
      tr: 'O, çox gəlirli biznes qurdu',
      ra: 'up a',
      v1: 'up a',
      v2: 'up',
      v3: 'up with a'
    }],
    [{
      id: 506,
      sntc: 'We left ___ America',
      tr: 'Biz Amerikaya yola düşdük',
      ra: 'for',
      v1: 'by',
      v2: 'to',
      v3: 'for'
    },
    {
      id: 507,
      sntc: 'I ___ in Azerbaijan',
      tr: 'Mən Azərbaycanda böyümüşəm',
      ra: 'grew up',
      v1: 'grew up',
      v2: 'grew on',
      v3: 'set up'
    },
    {
      id: 508,
      sntc: 'She sent me ___',
      tr: 'O, mənə məktub göndərdi',
      ra: 'a letter',
      v1: 'attract',
      v2: 'a letter',
      v3: 'a sunny day'
    },
    {
      id: 509,
      sntc: 'He fell ___ and hurt his arm',
      tr: 'O, yerə yıxıldı və qolunu yaraladı',
      ra: 'down',
      v1: 'busy',
      v2: 'down',
      v3: 'angry'
    },
    {
      id: 510,
      sntc: "I don't like this ___",
      tr: 'Mən bu mebeli beyənmirəm',
      ra: 'furniture',
      v1: 'furniture',
      v2: 'boring',
      v3: 'funny'
    }],
    [{
      id: 511,
      sntc: 'They ___ the rules',
      tr: 'Onlar qaydaları pozdular',
      ra: 'broke',
      v1: 'ready for',
      v2: 'building',
      v3: 'broke'
    },
    {
      id: 512,
      sntc: 'I ___ for this exam',
      tr: 'Mənə bu imtahana hazırlaşmaq lazımdır',
      ra: 'need to prepare',
      v1: 'should to ready',
      v2: 'need to prepare',
      v3: 'must to prepare'
    },
    {
      id: 513,
      sntc: 'I felt ___ happy',
      tr: 'Mən özümü çox xoşbəxt hiss edirdim',
      ra: 'so',
      v1: 'such a',
      v2: 'so',
      v3: 'such'
    },
    {
      id: 514,
      sntc: 'I thought so, ___',
      tr: 'Mən də elə düşünürdüm',
      ra: 'too',
      v1: 'too',
      v2: 'also',
      v3: 'always'
    },
    {
      id: 515,
      sntc: 'He ___ drinking',
      tr: 'O, içkidən imtina etdi',
      ra: 'gave up',
      v1: 'gave up',
      v2: 'give up',
      v3: 'attract'
    }],
    [{
      id: 516,
      sntc: 'I met so many new ___ there',
      tr: 'Mən orada o qədər yeni sözlərlə tanış oldum',
      ra: 'words',
      v1: 'mistake',
      v2: 'words',
      v3: 'lesson'
    },
    {
      id: 517,
      sntc: 'I sat on ___',
      tr: 'Mən stulda oturdum',
      ra: 'a chair',
      v1: 'a chair',
      v2: 'lazy',
      v3: 'room'
    },
    {
      id: 518,
      sntc: 'She ___ her flat',
      tr: 'O, öz mənzilini satdı',
      ra: 'sold',
      v1: 'satisfied',
      v2: 'tired',
      v3: 'sold'
    },
    {
      id: 519,
      sntc: 'Do your friends ___ you?',
      tr: 'Sənin dostların sənə dəstək olurlar?',
      ra: 'support',
      v1: 'lucky',
      v2: 'remembers',
      v3: 'support'
    },
    {
      id: 520,
      sntc: 'I put it ___',
      tr: 'Mən bunu masanın üstünə qoydum',
      ra: 'on the desk',
      v1: 'live',
      v2: 'on the desk',
      v3: 'get up'
    }],
    [{
      id: 521,
      sntc: 'We ___ in that competition',
      tr: 'Biz həmin yarışda qalib gəldik',
      ra: 'won',
      v1: 'won',
      v2: 'take',
      v3: 'need'
    },
    {
      id: 522,
      sntc: 'He kept his ___',
      tr: 'O, vədinə əməl etdi',
      ra: 'promise',
      v1: 'promise',
      v2: 'a word',
      v3: 'a grammar'
    },
    {
      id: 523,
      sntc: 'I read it in the ___',
      tr: 'Mən bunu qəzetdə oxudum',
      ra: 'newspaper',
      v1: 'important meeting',
      v2: 'this area',
      v3: 'newspaper'
    },
    {
      id: 524,
      sntc: 'He cut the meat into four ___',
      tr: 'O, əti dörd hissəyə böldü',
      ra: 'parts',
      v1: 'parts',
      v2: 'piece',
      v3: 'part'
    },
    {
      id: 525,
      sntc: 'He ___ everything',
      tr: 'O, hər şeyi yedi',
      ra: 'ate',
      v1: 'eat',
      v2: 'ate',
      v3: 'divorced'
    }],
    [{
      id: 526,
      sntc: 'She didn’t ___ him',
      tr: 'O, onun sözünü kəsmədi',
      ra: 'interrupt',
      v1: 'agree',
      v2: 'interrupt',
      v3: 'understood'
    },
    {
      id: 527,
      sntc: 'My friend didn’t ___ this idea',
      tr: 'Mənim dostum bu fikri bəyənmədi',
      ra: 'like',
      v1: 'knows',
      v2: 'realized',
      v3: 'like'
    },
    {
      id: 528,
      sntc: 'It didn’t ___ us',
      tr: 'Bu bizə təsir bağışlamadı',
      ra: 'impress',
      v1: 'against',
      v2: 'surprising',
      v3: 'impress'
    },
    {
      id: 529,
      sntc: 'This time didn’t ___ us',
      tr: 'Bu vaxt bizim üçün münasib deyildi',
      ra: 'suit',
      v1: 'regulate',
      v2: 'suit',
      v3: 'optimistic'
    },
    {
      id: 530,
      sntc: 'It didn’t disturb ___',
      tr: 'Bu bizi narahat etmədi',
      ra: 'us',
      v1: 'his',
      v2: 'us',
      v3: 'their'
    }],
    [{
      id: 531,
      sntc: '___ we show satisfactory results?',
      tr: 'Biz qaneedici nəticələr göstərdik?',
      ra: 'Did',
      v1: 'Were',
      v2: 'Are',
      v3: 'Did'
    },
    {
      id: 532,
      sntc: 'Did I ___ it correctly?',
      tr: 'Mən bunu düz dedim?',
      ra: 'say',
      v1: 'say',
      v2: 'tell',
      v3: 'does'
    },
    {
      id: 533,
      sntc: 'She didn’t ___ to help us',
      tr: 'O, bizə kömək etməkdən imtina etmədi',
      ra: 'refuse',
      v1: 'refuse',
      v2: 'behave',
      v3: 'significantly'
    },
    {
      id: 534,
      sntc: 'Did you ___ there?',
      tr: 'Sən ora getmisən?',
      ra: 'go',
      v1: 'walked',
      v2: 'popular',
      v3: 'go'
    },
    {
      id: 535,
      sntc: 'Did you ___ on time?',
      tr: 'Sən ora vaxtında gəldin?',
      ra: 'come there',
      v1: 'go to home',
      v2: 'come there',
      v3: 'come to here'
    }],
    [{
      id: 536,
      sntc: 'When ___ he come back?',
      tr: 'O, nə vaxt qayıtdı?',
      ra: 'did',
      v1: 'is',
      v2: 'were',
      v3: 'did'
    },
    {
      id: 537,
      sntc: 'I ___ my wallet',
      tr: 'Mən pul kisəmi tapdım',
      ra: 'found',
      v1: 'found',
      v2: 'did found',
      v3: 'coat'
    },
    {
      id: 538,
      sntc: '___ did you do this kind of exercises?',
      tr: 'Sən bu cür məşqləri müntəzəm olaraq nə qədər edirdin?',
      ra: 'How regularly',
      v1: 'What',
      v2: 'Which',
      v3: 'How regularly'
    },
    {
      id: 539,
      sntc: 'What ___ you say?',
      tr: 'Sən nə dedin?',
      ra: 'did',
      v1: 'are',
      v2: 'did',
      v3: 'were'
    },
    {
      id: 540,
      sntc: "We aren't ___",
      tr: 'Biz iş yoldaşları deyilik',
      ra: 'colleagues',
      v1: 'improve our result',
      v2: 'colleagues',
      v3: 'think so'
    }],
    [{
      id: 541,
      sntc: 'He was ___ disappointed',
      tr: 'O, çox məyus oldu',
      ra: 'bitterly',
      v1: 'bitterly',
      v2: 'a',
      v3: 'meaning'
    },
    {
      id: 542,
      sntc: 'You were too ___',
      tr: 'Sən çox bədbin idin',
      ra: 'pessimistic',
      v1: 'prepare',
      v2: 'borrow',
      v3: 'pessimistic'
    },
    {
      id: 543,
      sntc: '___ were against it',
      tr: 'Biz bunun əleyhinə idik',
      ra: 'We',
      v1: 'We',
      v2: 'My friend',
      v3: 'I'
    },
    {
      id: 544,
      sntc: 'He was very ___',
      tr: 'O, çox istedadlı idi',
      ra: 'talented',
      v1: 'designer',
      v2: 'talented',
      v3: 'popularly'
    },
    {
      id: 545,
      sntc: 'They were very ___ employees',
      tr: 'Onlar çox təcrübəli işçi idilər',
      ra: 'experienced',
      v1: 'experienced',
      v2: 'celebrate',
      v3: 'too'
    }],
    [{
      id: 546,
      sntc: 'My teachers ___ very professional',
      tr: 'Mənim müəllimlərim çox peşəkar idilər',
      ra: 'were',
      v1: 'was',
      v2: 'were',
      v3: 'is'
    },
    {
      id: 547,
      sntc: 'The ___ was too long',
      tr: 'Mühazirə çox uzun idi',
      ra: 'lecture',
      v1: 'videos',
      v2: 'advanced',
      v3: 'lecture'
    },
    {
      id: 548,
      sntc: 'This news ___ very unusual',
      tr: 'Bu xəbər çox qəribə idi',
      ra: 'was',
      v1: 'was',
      v2: 'were',
      v3: 'are'
    },
    {
      id: 549,
      sntc: 'The women were ___ kind',
      tr: 'Qadınlar çox xeyirxah idilər',
      ra: 'so',
      v1: 'so a',
      v2: 'such',
      v3: 'so'
    },
    {
      id: 550,
      sntc: 'The price was ___',
      tr: 'Qiymət aşağı idi',
      ra: 'low',
      v1: 'low',
      v2: 'many',
      v3: 'may'
    }],
    [{
      id: 551,
      sntc: 'They were ___',
      tr: 'Onlar bekar deyildilər',
      ra: 'unavailable',
      v1: 'communicate',
      v2: 'swim in the pool',
      v3: 'unavailable'
    },
    {
      id: 552,
      sntc: 'Those results were ___',
      tr: 'O nəticələr dəhşətli idi',
      ra: 'terrible',
      v1: 'learn',
      v2: 'terrible',
      v3: 'obviously'
    },
    {
      id: 553,
      sntc: 'You weren’t confident ___',
      tr: 'Mən kifayət qədər əmin deyildim',
      ra: 'enough',
      v1: 'truth',
      v2: 'much',
      v3: 'enough'
    },
    {
      id: 554,
      sntc: 'I wasn’t ___',
      tr: 'Mən əmin deyildim',
      ra: 'sure',
      v1: 'sure',
      v2: 'agree',
      v3: 'speak'
    },
    {
      id: 555,
      sntc: 'She wasn’t ___',
      tr: 'Onun bəxti gətirmədi',
      ra: 'lucky',
      v1: 'good enough',
      v2: 'complain',
      v3: 'lucky'
    }],
    [{
      id: 556,
      sntc: 'This day ___',
      tr: 'Bu gün yağışlı deyildi',
      ra: 'wasn’t rainy',
      v1: 'wasn’t rainy',
      v2: 'weren’t cloudy',
      v3: 'are sunny'
    },
    {
      id: 557,
      sntc: 'His mistake was ___',
      tr: 'Onun səhvi çox kiçik idi',
      ra: 'very small',
      v1: 'badly',
      v2: 'very small',
      v3: 'compete'
    },
    {
      id: 558,
      sntc: 'Those days ___',
      tr: 'O günlər küləkli deyildi',
      ra: 'weren’t windy',
      v1: 'is windy',
      v2: 'wasn’t sunny',
      v3: 'weren’t windy'
    },
    {
      id: 559,
      sntc: 'Her ___ was very serious',
      tr: 'Onun səhvi çox ciddi idi',
      ra: 'mistake',
      v1: 'mistake',
      v2: 'convenient',
      v3: 'become'
    },
    {
      id: 560,
      sntc: 'Those exams weren’t easy ___',
      tr: 'O imtahanlar heç də asan deyildi',
      ra: 'at all',
      v1: 'criticize',
      v2: 'at all',
      v3: 'alone'
    }],
    [{
      id: 561,
      sntc: 'The boy ___ abroad',
      tr: 'Oğlan xaricdə idi',
      ra: 'was',
      v1: 'are',
      v2: 'was',
      v3: 'were'
    },
    {
      id: 562,
      sntc: '___ he really confident?',
      tr: 'O, həqiqətən arxayın idi?',
      ra: 'Was',
      v1: 'Does',
      v2: 'Did',
      v3: 'Was'
    },
    {
      id: 563,
      sntc: 'Was she ___ business trip?',
      tr: 'O, işgüzar səfərdə idi?',
      ra: 'on a',
      v1: 'get',
      v2: 'goes',
      v3: 'on a'
    },
    {
      id: 564,
      sntc: 'We were ___',
      tr: 'Bizim bəxtimiz gətirdi',
      ra: 'lucky',
      v1: 'listen to it',
      v2: 'lucky',
      v3: 'go abroad'
    },
    {
      id: 565,
      sntc: '___ pregnant?',
      tr: 'O, hamilə idi?',
      ra: 'Was she',
      v1: 'Were she',
      v2: 'Did she',
      v3: 'Was she'
    }],
    [{
      id: 566,
      sntc: 'Who ___ wrong?',
      tr: 'Kim haqlı deyildi?',
      ra: 'was',
      v1: 'improve',
      v2: 'play',
      v3: 'was'
    },
    {
      id: 567,
      sntc: 'How long time ___ was it?',
      tr: 'Bu nə qədər vaxt əvvəl olub?',
      ra: 'ago',
      v1: 'check',
      v2: 'ago',
      v3: 'use'
    },
    {
      id: 568,
      sntc: 'What lessons were ___ interesting?',
      tr: 'Hansı dərslər həqiqətən maraqlı idi?',
      ra: 'really',
      v1: 'really',
      v2: 'share',
      v3: 'refuse'
    },
    {
      id: 569,
      sntc: 'Who was ___ place?',
      tr: 'Sonuncu yerdə kim idi?',
      ra: 'in the last',
      v1: 'motivate',
      v2: 'good at',
      v3: 'in the last'
    },
    {
      id: 570,
      sntc: '___ was the school?',
      tr: 'Məktəb nə qədər uzaq idi?',
      ra: 'How far',
      v1: 'How far',
      v2: 'What kind',
      v3: 'What'
    }],
    [{
      id: 571,
      sntc: 'When was your ___ there?',
      tr: 'Sənin yoldaşın orada nə vaxt olub?',
      ra: 'wife',
      v1: 'optimistic',
      v2: 'wife',
      v3: 'friends'
    },
    {
      id: 572,
      sntc: 'How ___ was the lesson?',
      tr: 'Dərs nə qədər davam etdi?',
      ra: 'long',
      v1: 'much',
      v2: 'long',
      v3: 'many'
    },
    {
      id: 573,
      sntc: '___ was your boss last month?',
      tr: 'Sənin müdirin keçən ay harada idi?',
      ra: 'Where',
      v1: 'What',
      v2: 'Why',
      v3: 'Where'
    },
    {
      id: 574,
      sntc: 'How far was ___ hotel?',
      tr: 'Otel nə qədər uzaqda idi?',
      ra: 'the',
      v1: 'be',
      v2: 'the',
      v3: 'these'
    },
    {
      id: 575,
      sntc: 'How much money ___ available?',
      tr: 'Nə qədər pul mövcud idi?',
      ra: 'was',
      v1: 'was',
      v2: 'were',
      v3: 'did'
    }],
  ]
}
// console.log(JSON.stringify(initialState))

// for (let i = 0; i < 115; i++) {
//   for (let a = 0; a < 5; a++) {
//     if((initialState.sentences[i][a].ra==initialState.sentences[i][a].v1||initialState.sentences[i][a].ra==initialState.sentences[i][a].v2||initialState.sentences[i][a].ra==initialState.sentences[i][a].v3)===false)
//     {console.log(initialState.sentences[i][a].ra)
//       console.log(initialState.sentences[i][a].id)}
//   }}

// let obj=[]
// for (let i=100; i<115; i++){
//     for(let a=0; a<5; a++){
//         // obj.id=initialState.sentences[0][i][a].id
//         obj.push(initialState.sentences[i][a].sntc.replace('___', initialState.sentences[i][a].ra))}}
// setTimeout(() => {console.log(obj)}, 1000)

const SET_COMPLETESENTENCES = 'SET_COMPLETESENTENCES'
export const setCompleteSentences = value => ({
    type: SET_COMPLETESENTENCES,
    value
})

const completeSentence = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPLETESENTENCES:
        return {
            ...state, sentences: action.value
        }
            default:
                return state
}
}

export default completeSentence