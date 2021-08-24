const initialState = {
  sentences: [
    [{
        id: 1,
        sntc: 'I think so',
        tr: 'Mən belə düşünürəm',
        trt: 'Mən düşünürəm belə',
        ch: 'Mən belə düşünürəm Sən bilirəm gedirəm',
      },
      {
        id: 2,
        sntc: 'We understand it',
        tr: 'Biz bunu anlayırıq',
        trt: '',
        ch: 'Mən belə Biz bunu bilirik anlayıram anlayırıq'
      },
      {
        id: 3,
        sntc: 'I speak English',
        tr: 'Mən İngilis dilində danışıram',
        trt: '',
        trt: '',
        ch: 'Mən İngilis Sən oxuyuram kitabları dilində danışıram'
      },
      {
        id: 4,
        sntc: 'They help me',
        tr: 'Onlar mənə kömək edir',
        trt: '',
        ch: 'Onlar Siz mənə danışır oxuyur kömək edir'
      },
      {
        id: 5,
        sntc: 'She likes it',
        tr: 'O, bunu bəyənir',
        trt: '',
        ch: 'O, Sən bunu onu deyir istəyir bəyənir'
      },
      {
        id: 6,
        sntc: 'I work there',
        tr: 'Mən orada işləyirəm',
        trt: '',
        ch: 'Mən orada işləyirəm oxuyuram Sən danışıram'
      },
      {
        id: 7,
        sntc: 'It really helps me',
        tr: 'Bu həqiqətən mənə kömək edir',
        trt: '',
        ch: 'Bu O, danışır həqiqətən mənə etmir kömək edir'
      },
      {
        id: 8,
        sntc: 'I live here',
        tr: 'Mən burada yaşayıram',
        trt: '',
        ch: 'Mən burada orada oxuyuram oxuyur yaşayıram'
      },
      {
        id: 9,
        sntc: 'We live in this city',
        tr: 'Biz bu şəhərdə yaşayırıq',
        trt: '',
        ch: 'Biz Siz bu ölkədə yaşayırsız şəhərdə yaşayırıq',
      },
      {
        id: 10,
        sntc: 'I remember it',
        tr: 'Mən bunu xatırlayıram',
        trt: '',
        ch: 'Bu onu bunu bilirəm Mən sevirəm xatırlayıram'
      }
    ],
    [{
        id: 11,
        sntc: 'He reads in English',
        tr: 'O, İngilis dilində oxuyur',
        ch: 'O, İngilis Mən danışıram dilində danışır oxuyur'
      },
      {
        id: 12,
        sntc: 'It looks interesting',
        tr: 'Bu marağlı görünür',
        ch: 'Bu Onlar marağlı bunu görünür görür'
      },
      {
        id: 13,
        sntc: 'I work very hard',
        tr: 'Mən çox çalışıram',
        ch: 'Mən Onlar calışır çox çalışıram danışıram'
      },
      {
        id: 14,
        sntc: 'I see that mistake',
        tr: 'Mən o səhvi görürəm',
        ch: 'Mən Sən bu o səhvi səhvləri görürəm'
      },
      {
        id: 15,
        sntc: 'She also remembers it',
        tr: 'O da bunu xatırlayır',
        ch: 'O da Mən xatırlayıram bunu görürəm xatırlayır'
      },
      {
        id: 16,
        sntc: 'I also work there',
        tr: 'Mən də orada işləyirəm',
        ch: 'Mən də burada oxuyuram yaşayıram orada işləyirəm'
      },
      {
        id: 17,
        sntc: 'She lives in this house',
        tr: 'O, bu evdə yaşayır',
        ch: 'O, bu Mən yaşayıram oxuyuram evdə yaşayır'
      },
      {
        id: 18,
        sntc: 'He also thinks so',
        tr: 'O da belə düşünür',
        ch: 'O da Mən də belə düşünür düşünürəm'
      },
      {
        id: 19,
        sntc: 'She thinks so',
        tr: 'O, belə düşünür',
        ch: 'O, belə Mən düşünürəm düşünür oxuyur'
      },
      {
        id: 20,
        sntc: 'He speaks English very well',
        tr: 'O, İngilis dilində çox yaxşı danışır',
        ch: 'O, Mən İngilis dilində çox yaxşı danışır oxuyuram'
      }
    ],
    [{
        id: 21,
        sntc: 'I have a cat',
        tr: 'Mənim pişiyim var',
        ch: 'Mənim Sənin pişiyin itim pişiyim var'
      },
      {
        id: 22,
        sntc: 'He watches TV',
        tr: 'O, televizora baxır',
        ch: 'O, televizora Mən görür baxıram baxır'
      },
      {
        id: 23,
        sntc: 'He goes to school',
        tr: 'O, məktəbə gedir',
        ch: 'O, məktəbə Onlar gedirlər oxuyur gedir'
      },
      {
        id: 24,
        sntc: 'I do it every day',
        tr: 'Mən bunu hər gün edirəm',
        ch: 'Mən onu bəzən bunu hər gün oxuyur edirəm'
      },
      {
        id: 25,
        sntc: 'She misses you',
        tr: 'O, sənin üçün darıxır',
        ch: 'O, Onlar sizin sənin bəzən üçün darıxır'
      },
      {
        id: 26,
        sntc: 'I sometimes go to the cinema',
        tr: 'Mən bəzən kinoteatra gedirəm',
        ch: 'Mən bəzən hər gün kinoteatra gedirəm həmişə'
      },
      {
        id: 27,
        sntc: 'He sometimes plays computer games',
        tr: 'O, bəzən kompüter oyunları oynayır',
        ch: 'O, Onlar bəzən kompüter oyunları kompüterlə oynayır'
      },
      {
        id: 28,
        sntc: 'She has a dog',
        tr: 'Onun iti var',
        ch: 'Onun Mənim pişiyim yoxdur iti var'
      },
      {
        id: 29,
        sntc: 'I try to find a job',
        tr: 'Mən iş tapmağa çalışıram',
        ch: 'Mən iş Sən çalışırsan işləyirəm tapmağa çalışıram'
      },
      {
        id: 30,
        sntc: 'She tries to do it',
        tr: 'O, bunu etməyə çalışır',
        ch: 'O, bunu onu Onlar etməyə çalışır çalışırlar'
      }
    ],
    [{
        id: 31,
        sntc: 'My brother lives there',
        tr: 'Mənim qardaşım orada yaşayır',
        ch: 'Mənim qardaşım Mən orada yaşayır yaşayıram işləyir'
      },
      {
        id: 32,
        sntc: 'This lesson seems interesting',
        tr: 'Bu dərs maraqlı gəlir',
        ch: 'Bu O dərs kitab kitablar maraqlı gəlir'
      },
      {
        id: 33,
        sntc: 'She understands everything',
        tr: 'O, hər şeyi başa düşür',
        ch: 'O, hər heçnə şeyi başa düşmür düşür'
      },
      {
        id: 34,
        sntc: 'His brother often says it',
        tr: 'Onun qardaşı tez-tez bunu deyir',
        ch: 'Onun qardaşı bacısı bunu tez-tez bəzən deyir'
      },
      {
        id: 35,
        sntc: 'This offer seems strange',
        tr: 'Bu təklif qəribə gəlir',
        ch: 'Bu kitab təklif marağlı qəribə gəlir'
      },
      {
        id: 36,
        sntc: 'My friend always says it',
        tr: 'Mənim dostum həmişə bunu deyir',
        ch: 'Mənim danışır bəzən dostum həmişə bunu deyir'
      },
      {
        id: 37,
        sntc: 'My parents know it',
        tr: 'Mənim valideynlərim bunu bilirlər',
        ch: 'Mənim valideynlərim bunu onu danışır bilirlər'
      },
      {
        id: 38,
        sntc: 'His mother has a car',
        tr: 'Onun anasının maşını var',
        ch: 'Onun anasının atasının yoxdur evi maşını var'
      },
      {
        id: 39,
        sntc: 'My parents want to do it',
        tr: 'Mənim valideynlərim bunu etmək istəyirlər',
        ch: 'Mənim Sənin valideynlərim bunu demək etmək istəyirlər onu'
      },
      {
        id: 40,
        sntc: 'My brother studies there',
        tr: 'Mənim qardaşım orada təhsil alir',
        ch: 'qardaşım Mənim bacım orada burada almır təhsil alir'
      }
    ],
    [{
        id: 41,
        sntc: 'He wants it',
        tr: 'O, bunu istəyir',
        ch: 'O, bunu Onlar sevir oxuyur istəyir'
      },
      {
        id: 42,
        sntc: 'We want more practice',
        tr: 'Biz daha çox praktika istəyirik',
        ch: 'Biz Onlar dərs daha çox praktika istəyir istəyirik'
      },
      {
        id: 43,
        sntc: 'He sees this mistake',
        tr: 'O, bu səhvi görür',
        ch: 'O, bu Biz görürük səhvi səhvləri görür'
      },
      {
        id: 44,
        sntc: 'It looks strange',
        tr: 'Bu qəribə görünür',
        ch: 'Bu marağlı qəribə yaxşı görünür'
      },
      {
        id: 45,
        sntc: 'She really remembers it',
        tr: 'O, həqiqətən bunu xatırlayır',
        ch: 'O, Mən bunu görürəm görür həqiqətən xatırlayır'
      },
      {
        id: 46,
        sntc: 'This company has money',
        tr: 'Bu şirkətin pulu var',
        ch: 'Bu O şirkətin maşını həsabı pulu var'
      },
      {
        id: 47,
        sntc: 'She sees this mistake',
        tr: 'O, bu səhvi görür',
        ch: 'O, bu Mən səhvi görür sevirəm görürəm'
      },
      {
        id: 48,
        sntc: 'He remembers it',
        tr: 'O, bunu xatırlayır',
        ch: 'O, bunu bizi sevir oxuyur xatırlayır'
      },
      {
        id: 49,
        sntc: 'He speaks English very well',
        tr: 'O, İngilis dilində çox yaxşı danışır',
        ch: 'O, İngilis danışır dilini dilində çox yaxşı bilir danışır'
      },
      {
        id: 50,
        sntc: 'I see these mistakes',
        tr: 'Mən bu səhvləri görürəm',
        ch: 'Mən Sən bu səhvləri edirəm görürəm bilirsən'
      }
    ],
    [{
        id: 51,
        sntc: 'She wants to see you right now',
        tr: 'O, səni indicə görmək istəyir',
        ch: 'O, səni indicə görmək istəyir sabah Mən'
      },
      {
        id: 52,
        sntc: 'He wants to live in another place',
        tr: 'O, başqa yerdə yaşamaq istəyir',
        ch: 'O, başqa yerdə yaşamaq oxumaq orada istəyir'
      },
      {
        id: 53,
        sntc: 'He wants to do it',
        tr: 'O, bunu etmək istəyir',
        ch: 'O, bunu etmək istəyir onu demək'
      },
      {
        id: 54,
        sntc: 'I want to improve my grammar',
        tr: 'Mən qrammatikamı təkmilləşdirmək istəyirəm',
        ch: 'Mən qrammatikamı oxumaq yaxşı təkmilləşdirmək istəyirəm'
      },
      {
        id: 55,
        sntc: 'I want this car',
        tr: 'Mən bu maşını istəyirəm',
        ch: 'Mən bu maşını istəyirəm bəyənirəm sevirəm'
      },
      {
        id: 56,
        sntc: 'I want a good car',
        tr: 'Mən yaxşı maşın istəyirəm',
        ch: 'Mən yaxşı maşın istəyirəm istəyir O'
      },
      {
        id: 57,
        sntc: 'I want to go there one more time',
        tr: 'Mən ora bir dəfə də getmək istəyirəm',
        ch: 'Mən ora bir dəfə də getmək oxumaq istərdim istəyirəm'
      },
      {
        id: 58,
        sntc: 'She wants to buy it',
        tr: 'O, bunu almaq istəyir',
        ch: 'O, bunu almaq vermək onu istəyir'
      },
      {
        id: 59,
        sntc: 'I want to go there again',
        tr: 'Mən yenə ora getmək istəyirəm',
        ch: 'Mən yenə ora getmək bu gün bura istəyirəm'
      },
      {
        id: 60,
        sntc: 'I really want to know it',
        tr: 'Mən həqiqətən bunu bilmək istəyirəm',
        ch: 'Mən həqiqətən bunu bilmək yazmaq onu istəyirəm'
      }
    ],
    [{
        id: 61,
        sntc: 'She likes this dress',
        tr: 'O, bu paltarı xoşlayır',
        ch: 'O, bu paltarı Mən etmək o xoşlayır'
      },
      {
        id: 62,
        sntc: 'I would like to drink milk',
        tr: 'Mən süd içmək istərdim',
        ch: 'Mən süd içmək Sən çay istərdim'
      },
      {
        id: 63,
        sntc: 'I would like to do it',
        tr: 'Mən bunu etmək istərdim',
        ch: 'Mən bunu etmək onu bunlar istərdim'
      },
      {
        id: 64,
        sntc: 'I see you really like English',
        tr: 'Mən görürəm sən həqiqətən İngilis dilini xoşlayırsan',
        ch: 'Mən görürəm edirəm sən həqiqətən biz İngilis dilini xoşlayırsan'
      },
      {
        id: 65,
        sntc: 'I would like to visit this place',
        tr: 'Mən bu yeri ziyarət etmək istərdim',
        ch: 'Mən bu yeri ziyarət məktəbi o etmək istərdim'
      },
      {
        id: 66,
        sntc: 'I would like to become a businessman',
        tr: 'Mən iş adamı olmaq istərdim',
        ch: 'Mən iş adamı olmaq həkim Sən istərdim'
      },
      {
        id: 67,
        sntc: 'You like it',
        tr: 'Sən bunu xoşlayırsan',
        ch: 'Sən bunu xoşlayırsan Onlar onu'
      },
      {
        id: 68,
        sntc: 'I see you really like it',
        tr: 'Mən görürəm sən həqiqətən bunu xoşlayırsan',
        ch: 'Mən görürəm sən onu həqiqətən gəlir bunu xoşlayırsan'
      },
      {
        id: 69,
        sntc: 'I would like to know English very well',
        tr: 'Mən İngilis dilini çox yaxşı bilmək istərdim',
        ch: 'Mən İngilis dilini çox yaxşı bilmək Sən danışmaq istərdim'
      },
      {
        id: 70,
        sntc: 'We like it ',
        tr: 'Biz bunu xoşlayırıq',
        ch: 'Biz bunu onu Siz oxuyuruq xoşlayırıq'
      }
    ],
    [{
        id: 71,
        sntc: 'You don’t want to know it',
        tr: 'Sən bunu bilmək istəmirsən',
        ch: 'Sən bunu onu bacarmaq bilmək Mən istəmirsən'
      },
      {
        id: 72,
        sntc: 'I don’t like it',
        tr: 'Bu mənim xoşuma gəlmir',
        ch: 'Bu mənim xoşuma sənin O gəlmir'
      },
      {
        id: 73,
        sntc: 'I don’t agree with you',
        tr: 'Mən səninlə razı deyiləm',
        ch: 'Mən səninlə Siz danışırsız razı deyiləm'
      },
      {
        id: 74,
        sntc: 'He doesn’t know it',
        tr: 'O, bunu bilmir',
        ch: 'O, bunu bilmir onu bilir'
      },
      {
        id: 75,
        sntc: 'I don’t know',
        tr: 'Mən bilmirəm',
        ch: 'Mən bilmirəm bilirəm oxuyuram'
      },
      {
        id: 76,
        sntc: 'She doesn’t want to discuss it',
        tr: 'O, bunu müzakirə etmək istəmir',
        ch: 'O, bunu Mən danışmaq müzakirə etmək istəmir'
      },
      {
        id: 77,
        sntc: 'He doesn’t remember it',
        tr: 'O, bunu xatırlamır',
        ch: 'O, bunu xatırlamır Siz onu'
      },
      {
        id: 78,
        sntc: 'I don’t want to say it',
        tr: 'Mən bunu demək istəmirəm',
        ch: 'Mən bunu onu demək danışmaq istəmirəm'
      },
      {
        id: 79,
        sntc: 'He doesn’t have this information',
        tr: 'Onda bu məlumat yoxdur',
        ch: 'Onda bu məlumat o yoxdur Məndə'
      },
      {
        id: 80,
        sntc: 'I don’t know this person',
        tr: 'Mən bu insanı tanımıram',
        ch: 'Mən bu insanı Onlar o tanımıram'
      }
    ],
    [{
        id: 81,
        sntc: 'These things don’t attract me',
        tr: 'Bələ şeylər məni cəlb etmir',
        ch: 'Bələ şeylər bəli səni məni cəlb etmir'
      },
      {
        id: 82,
        sntc: 'My parent don’t discuss it',
        tr: 'Mənim valideynim bunu müzakirə etmir',
        ch: 'Mənim Sənin onu valideynim bunu müzakirə etmir'
      },
      {
        id: 83,
        sntc: 'He doesn’t speak English fluently',
        tr: 'O, İngilis dilində sərbəst danışmır',
        ch: 'O, İngilis Mən oxumur dilidə səlis danışmır'
      },
      {
        id: 84,
        sntc: 'That offer doesn’t seem interesting',
        tr: 'O, təklif maraqlı görünmür',
        ch: 'O, təklif Bu kitab maraqlı görünmür'
      },
      {
        id: 85,
        sntc: 'His son doesn’t want to become a doctor',
        tr: 'Onun oğlu həkim olmaq istəmir',
        ch: 'Onun oğlu qızı polis həkim olmaq istəmir'
      },
      {
        id: 86,
        sntc: 'Our teacher doesn’t believe us',
        tr: 'Bizim müəllimimiz bizə inanmır',
        ch: 'Bizim müəllimimiz Sizin sizə bizə inanmır'
      },
      {
        id: 87,
        sntc: 'My partner doesn’t know him',
        tr: 'Mənim partnyorum onu tanımır',
        ch: 'Mənim partnyorum bizi o onu tanımır'
      },
      {
        id: 88,
        sntc: 'I think money doesn’t make people happy',
        tr: 'Mən düşünürəm ki pul insanları xoşbəxt etmir',
        ch: 'Mən düşünürəm Onlar edir ki pul insanları xoşbəxt etmir'
      },
      {
        id: 89,
        sntc: 'He doesn’t try to change his life',
        tr: 'O, həyatını dəyişməyə çalışmır',
        ch: 'O, həyatını evini dəyişməyə çalışır çalışmır'
      },
      {
        id: 90,
        sntc: 'My friend doesn’t think so',
        tr: 'Mənim dostum belə düşünmür',
        ch: 'Mənim dostum belə Sənin düşünür düşünmür'
      }
    ],
    [{
        id: 91,
        sntc: 'I need to speak English without any mistakes',
        tr: 'Mən İngilis dilində heç bir səhv etmədən danışmalıyam',
        ch: 'Mən İngilis dilində heç bir səhv etmədən oxumalıyam danışmalıyam'
      },
      {
        id: 92,
        sntc: 'He needs it',
        tr: 'O, buna ehtiyac duyur',
        ch: 'O, buna Mən duyuram ehtiyac duyur'
      },
      {
        id: 93,
        sntc: 'I need to call them',
        tr: 'Mən onlara zəng etməliyəm',
        ch: 'Mən onlara etməli deyiləm zəng etməliyəm'
      },
      {
        id: 94,
        sntc: 'She needs to correct these mistakes',
        tr: 'O, bu səhvləri düzəltməlidir',
        ch: 'O, bu səhvləri düzəltmir düzəltməlidir'
      },
      {
        id: 95,
        sntc: 'You need to remember it',
        tr: 'Sən bunu yadda saxlamalısan',
        ch: 'Sən bunu yadda saxlamalıyam Mən saxlamalısan'
      },
      {
        id: 96,
        sntc: 'You need to speak English correctly',
        tr: 'Sən İngilis dilində düzgün danışmalısan',
        ch: 'Sən İngilis Mən oxumalısan dilində düzgün danışmalısan'
      },
      {
        id: 97,
        sntc: 'My friend needs money',
        tr: 'Mənim dostuma pul lazımdır',
        ch: 'Mənim dostuma lazım deyil pul lazımdır'
      },
      {
        id: 98,
        sntc: 'I need to call her',
        tr: 'Mən ona zəng etməliyəm',
        ch: 'Mən ona etmişəm zəng etməliyəm'
      },
      {
        id: 99,
        sntc: 'We need to change our life',
        tr: 'Bizə həyatımızı dəyişmək lazımdır',
        ch: 'Bizə həyatımızı dəyişmək Sənə oxumaq lazımdır'
      },
      {
        id: 100,
        sntc: 'I really need your lessons',
        tr: 'Mənim həqiqətən sizin dərslərinizə ehtiyacım var ',
        ch: 'Mənim həqiqətən bizim yoxdur sizin dərslərinizə ehtiyacım var '
      }
    ],
    [{
        id: 101,
        sntc: 'Do you want to study better?',
        tr: 'Sən daha yaxşı öyrənmək istəyirsən?',
        ch: 'Sən Biz daha yaxşı çox az öyrənmək istəyirsən?'
      },
      {
        id: 102,
        sntc: 'Do you often use the internet?',
        tr: 'Sən internetdən tez-tez istifadə edirsən?',
        ch: 'Sən internetdən Mən tez-tez çox vaxt istifadə edirsən?'
      },
      {
        id: 103,
        sntc: 'Do you want to know your mistakes?',
        tr: 'Sən səhvlərini bilmək istəyirsən?',
        ch: 'Sən Mən səhvlərini bilmək Səhvini istəyirsən?'
      },
      {
        id: 104,
        sntc: 'Do we show good results?',
        tr: 'Biz yaxşı nəticələr göstəririk?',
        ch: 'Biz yaxşı pis Siz nəticələr göstəririk?'
      },
      {
        id: 105,
        sntc: 'Do you support him?',
        tr: 'Sən onu dəstəkləyirsən?',
        ch: 'Sən onu bunu oxuyursan dəstəkləyirsən?'
      },
      {
        id: 106,
        sntc: 'Do you remember everything?',
        tr: 'Sən hər şeyi xatırlayırsan?',
        ch: 'Sən hər şeyi Bunlar onu xatırlayırsan?'
      },
      {
        id: 107,
        sntc: 'Do you often go there?',
        tr: 'Sən ora tez-tez gedirsən?',
        ch: 'Sən ora tez-tez hərdən Biz gedirsən?'
      },
      {
        id: 108,
        sntc: 'Do you go to work?',
        tr: 'Sən işə gedirsən?',
        ch: 'Sən işə məktəbə ora gedirsən?'
      },
      {
        id: 109,
        sntc: 'Do you like this dress?',
        tr: 'Bu paltar sənin xoşuna gəlir?',
        ch: 'Bu paltar sənin mənim xoşuna O gəlir?'
      }
    ],
    [{
        id: 110,
        sntc: 'Do you agree with him?',
        tr: 'Sən onunla razısan?',
        ch: 'Sən onunla mənimlə Biz razısan?'
      },
      {
        id: 111,
        sntc: 'Does it seem boring?',
        tr: 'Bu darıxdırıcı görünür?',
        ch: 'Bu darıxdırıcı O maraqlı görünür?'
      },
      {
        id: 112,
        sntc: 'Does he want to live abroad?',
        tr: 'O, xaricdə yaşamaq istəyir?',
        ch: 'O, xaricdə yaşamaq istəmir Mən istəyir?'
      },
      {
        id: 113,
        sntc: 'Does he hate it?',
        tr: 'O, buna nifrət edir?',
        ch: 'O, buna nifrət Onlar bəyənir edir?'
      },
      {
        id: 114,
        sntc: 'Does it seem interesting?',
        tr: 'Bu maraqlı görünür?',
        ch: 'Bu maraqlı O görünmür görünür?'
      },
      {
        id: 115,
        sntc: 'Does he ignore everything?',
        tr: 'O, heç neyə məhəl qoymur?',
        ch: 'O, heç sənə Onlar neyə məhəl qoymur?'
      },
      {
        id: 116,
        sntc: 'Does it often happen?',
        tr: 'Bu tez-tez olur?',
        ch: 'Bu tez-tez hərdən olmur olur?'
      },
      {
        id: 117,
        sntc: 'Does she want to go abroad?',
        tr: 'O, xaricə getmək istəyir?',
        ch: 'O, xaricə evə Onlar getmək istəyir?'
      },
      {
        id: 118,
        sntc: 'Does he pay for it?',
        tr: 'O, bunun pulunu ödəyib?',
        ch: 'O, bunun bizim Biz pulunu ödəyib?'
      },
      {
        id: 119,
        sntc: 'Does he look for a job?',
        tr: 'O, iş axtarır?',
        ch: 'O, səni axtarmır iş axtarır?'
      },
      {
        id: 120,
        sntc: 'Does he hate this thing?',
        tr: 'O, bu şeyə nifrət edir?',
        ch: 'O, Mən bəyənir bu şeyə nifrət edir?'
      }
    ],
    [{
        id: 121,
        sntc: 'Does this thing seem important?',
        tr: 'Bu şey vacib görünür?',
        ch: 'Bu şey vacib görünür? O əhəmiyyətsiz'
      },
      {
        id: 122,
        sntc: 'Does that lesson seem boring?',
        tr: 'O, dərs darıxdırıcı görünür?',
        ch: 'O, dərs dərslər darıxdırıcı maraqlı görünür?'
      },
      {
        id: 123,
        sntc: 'Does you mother want to tell him all the truth?',
        tr: 'Sənin anan ona bütün həqiqəti demək istəyir?',
        ch: 'Sənin anan atan mənə ona bütün həqiqəti demək istəyir?'
      },
      {
        id: 124,
        sntc: 'Do those students speak English correctly?',
        tr: 'O tələbələr İngilis dilində düzgün danışır?',
        ch: 'O tələbələ tələbə deyir İngilis dilində düzgün danışır?'
      },
      {
        id: 125,
        sntc: 'Does this student show brilliant result?',
        tr: 'Bu tələbə parlaq nəticə göstərir?',
        ch: 'Bu şagird parlaq yaxşı tələbə nəticə göstərir?'
      },
      {
        id: 126,
        sntc: 'Does this exam seem very difficult?',
        tr: 'Bu imtahan çox çətin gəlir?',
        ch: 'Bu imtahan sınaq çox çətin asan gəlir?'
      },
      {
        id: 127,
        sntc: 'Does his friend want to go abroad?',
        tr: 'Onun dostu xaricə getmək istəyir?',
        ch: 'Onun dostu xaricə getmək evə gəlmək istəyir?'
      },
      {
        id: 128,
        sntc: 'Do these lessons help you?',
        tr: 'Bu dərslər sənə kömək edir?',
        ch: 'Bu dərslər sənə kömək etmir? dərs edir?'
      },
      {
        id: 129,
        sntc: 'Does this teacher explain everything very well?',
        tr: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
        ch: 'Bu müəllim hər şeyi çox pis etmir yaxşı izah edir?'
      },
      {
        id: 130,
        sntc: 'Does you father need it?',
        tr: 'Sənin atanın buna ehtiyacı var?',
        ch: 'Sənin atanın buna ehtiyacı yoxdur ananın var?'
      }
    ],
    [{
        id: 131,
        sntc: 'Does his words motivate her?',
        tr: 'Onun sözləri onu motivasiya edir?',
        ch: 'Onun sözləri sözü məni onu motivasiya edir?'
      },
      {
        id: 132,
        sntc: 'She likes this idea',
        tr: 'Bu fikir onun xoşuna gəlir',
        ch: 'Bu fikir mənim gəlmir onun xoşuna gəlir'
      },
      {
        id: 133,
        sntc: 'Does she like this idea?',
        tr: 'Bu fikir onun xoşuna gəlir?',
        ch: 'Bu fikir onun O xoşuma xoşuna gəlir?'
      },
      {
        id: 134,
        sntc: "His words doesn't motivate her",
        tr: 'Onun sözləri onu motivasiya etmir',
        ch: 'Onun sözləri onu sözü edir motivasiya etmir'
      },
      {
        id: 135,
        sntc: 'He comes come late',
        tr: 'O, evə gec gəlir',
        ch: 'O, evə gec tez gedir gəlir'
      },
      {
        id: 136,
        sntc: 'Does she come home late?',
        tr: 'O, evə gec gəlir?',
        ch: 'O, evə gec tez getmir gəlir?'
      },
      {
        id: 137,
        sntc: 'She works in another place',
        tr: 'O, başqa yerdə işləyir',
        ch: 'O, başqa yerdə evdə yaşayır işləyir'
      },
      {
        id: 138,
        sntc: 'Does she works in another place?',
        tr: 'O, başqa yerdə işləyir?',
        ch: 'O, başqa yerdə yaşayır bu işləyir?'
      },
      {
        id: 139,
        sntc: "He doesn't want to solve this problem",
        tr: 'O, bu problemi həll etmək istəmir',
        ch: 'O, bu problemi izah istəyir həll etmək istəmir'
      },
      {
        id: 140,
        sntc: 'Does he want to solve this problem?',
        tr: 'O, bu problemi həll etmək istəyir?',
        ch: 'O, bu problemi həll etmək istəymir? o istəyir?'
      }
    ],
    [{
        id: 141,
        sntc: 'How regularly do you learn English?',
        tr: 'Sən İngilis dilini mütəmadi olaraq nə qədər öyrənirsən?',
        ch: 'Sən İngilis dilini Onlar oxuyur nə qədər olaraq mütəmadi öyrənirsən?'
      },
      {
        id: 142,
        sntc: 'What do you know?',
        tr: 'Sən nə bilirsən?',
        ch: 'Sən nə vaxt oxuyursan bilirsən?'
      },
      {
        id: 143,
        sntc: 'How do you get to this place?',
        tr: 'Sən bu yerə necə gədirsən?',
        ch: 'Sən bu yerə necə o yerdə gədirsən?'
      },
      {
        id: 144,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        ch: 'Onlar sənə mənə nə danışmaq demək istəyirlər?'
      },
      {
        id: 145,
        sntc: 'How often do you listen to the radio?',
        tr: 'Sən radioya nə sıxlıqda qulaq asırsan?',
        ch: 'Sən radioya kinoya Mən nə sıxlıqda qulaq asırsan?'
      },
      {
        id: 146,
        sntc: 'How do you usually get to that place?',
        tr: 'Sən adətən o yerə necə gedirsən?',
        ch: 'Sən adətən o yerə necə gedirsən?'
      },
      {
        id: 147,
        sntc: 'Where do you go?',
        tr: 'Sən hara gedirsən?',
        ch: 'Sən hara ora gəlirsən gedirsən?'
      },
      {
        id: 148,
        sntc: 'What looks strange?',
        tr: 'Qəribə görünən nədir?',
        ch: 'Qəribə görünən nə maraqlı nədir?'
      },
      {
        id: 149,
        sntc: 'Who checks everything?',
        tr: 'Hər şeyi kim yoxlayır?',
        ch: 'Hər şeyi kim mən onlar yoxlayır?'
      },
      {
        id: 150,
        sntc: 'Why do you want to visit this place?',
        tr: 'Sən niyə bu məkana baş çəkmək istəyirsən?',
        ch: 'Sən niyə bu məkana evə getmək baş çəkmək istəyirsən?'
      }
    ],
    [{
        id: 151,
        sntc: 'Which channel does he usually watch?',
        tr: 'O, adətən hansı kanala baxır?',
        ch: 'O, adətən hansı videoya baxmır kanala baxır?'
      },
      {
        id: 152,
        sntc: 'What motivates you more?',
        tr: 'Səni daha çox nə motivasiya edir?',
        ch: 'Səni daha çox etmir Məni nə motivasiya edir?'
      },
      {
        id: 153,
        sntc: 'How often does she go to the cinema?',
        tr: 'O, kinoteatra nə sıxlıqda gedir?',
        ch: 'O, kinoteatra nə sıxlıqda çox burada gedir?'
      },
      {
        id: 154,
        sntc: 'She watches different movies',
        tr: 'O, müxtəlif filmlərə baxır',
        ch: 'O, müxtəlif filmlərə görür maraqlı baxır'
      },
      {
        id: 155,
        sntc: 'Who does he support?',
        tr: 'O, kimi dəstəkləyir?',
        ch: 'O, kimi kim Onu, dəstəkləyir?'
      },
      {
        id: 156,
        sntc: 'What advice does she give you?',
        tr: 'O, sənə nə məsləhət görür?',
        ch: 'O, sənə Sən, ona nə məsləhət görür?'
      },
      {
        id: 157,
        sntc: 'What really helps you?',
        tr: 'Sənə həqiqətən nə kömək edir?',
        ch: 'Sənə həqiqətən mən edirəm nə kömək edir?'
      },
      {
        id: 158,
        sntc: 'How does he explain it?',
        tr: 'O, bunu necə izah edir?',
        ch: 'O, bunu necə idib Mən izah edir?'
      },
      {
        id: 159,
        sntc: 'How long does it take him to get to that place?',
        tr: 'Həmin yerə çatmaq üçün onda nə qədər vaxt çəkir?',
        ch: 'Həmin yerə çatmaq üçün onda nə qədər vaxt çəkir?'
      },
      {
        id: 160,
        sntc: 'Why does he complain so often?',
        tr: 'O, niyə elə tez-tez şikayət edir?',
        ch: 'O, niyə elə nə vaxt tez-tez şikayət edir?'
      }
    ],
    [{
        id: 161,
        sntc: 'How does your brother control it?',
        tr: 'Sənin qardaşın bunu necə nəzarət edir?',
        ch: 'Sənin qardaşın bunu məni səni necə nəzarət edir?'
      },
      {
        id: 162,
        sntc: 'Why do your friends disagree with you?',
        tr: 'Sənin dostların nə üçün səninlə razılaşmır?',
        ch: 'Sənin dostların dostun Mənim nə üçün səninlə razılaşmır?'
      },
      {
        id: 163,
        sntc: 'Why does your boss criticize it?',
        tr: 'Niyə müdiriniz bunu tənqid edir?',
        ch: 'Niyə müdiriniz onu xoşlayır bunu tənqid edir?'
      },
      {
        id: 164,
        sntc: 'How many English words does your friend want to know?',
        tr: 'Sənin dostun nə qədər İngilis sözü bilmək istəyir?',
        ch: 'Sənin dostun nə qədər öyrənmək İngilis sözü bilmək istəyir?'
      },
      {
        id: 165,
        sntc: 'What advice does your teacher give you?',
        tr: 'Sənin müəllimin sənə hansı məsləhəti verir?',
        ch: 'Sənin müəllimin sənə hansı nə cür məsləhəti verir?'
      },
      {
        id: 166,
        sntc: 'How much money does your friend have?',
        tr: 'Sənin dostunun nə qədər pulu var?',
        ch: 'Sənin dostunun nə qədər pulu pulun var?'
      },
      {
        id: 167,
        sntc: 'How often does this thing happen?',
        tr: 'Bu nə sıxlıqda baş verir?',
        ch: 'Bu nə sıxlıqda O çox baş verir?'
      },
      {
        id: 168,
        sntc: 'How long does it take his daughter to get to school?',
        tr: 'Sənin qızının məktəbə çatmağı nə qədər vaxt çəkir?',
        ch: 'Sənin qızının məktəbə çatmağı nə qədər vaxt çəkir?'
      },
      {
        id: 169,
        sntc: 'Why does your friend want to look for a new job?',
        tr: 'Sənin dostun niyə yeni iş axtarmaq istəyir?',
        ch: 'Sənin dostun niyə istəmir yeni iş axtarmaq istəyir?'
      },
      {
        id: 170,
        sntc: 'Where does your mother work?',
        tr: 'Sənin anan harda işləyir?',
        ch: 'Sənin anan harda atan yaşayır işləyir?'
      }
    ],
    [{
        id: 171,
        sntc: 'How often does he test their knowledge?',
        tr: 'O, nə sıxlıqda onların biliyini yoxlayır?',
        ch: 'O, nə sıxlıqda çox bizim onların biliyini yoxlayır?'
      },
      {
        id: 172,
        sntc: 'I really like it',
        tr: 'Bu həqiqətən mənim xoşuma gəlir',
        ch: 'Bu həqiqətən sənin gəlmir mənim xoşuma gəlir'
      },
      {
        id: 173,
        sntc: 'Do you want to study better?',
        tr: 'Sən daha yaxşı oxumaq istəyirsən?',
        ch: 'Sən daha yaxşı oxumaq çox pis istəyirsən?'
      },
      {
        id: 174,
        sntc: 'I need your advice',
        tr: 'Mənim sənin məsləhətinə ehtiyacım var',
        ch: 'Mənim sənin məsləhətinə köməyinə yoxdur ehtiyacım var'
      },
      {
        id: 175,
        sntc: 'She would like to go to another place',
        tr: 'O, başqa yerə getmək istərdi',
        ch: 'O, başqa yerə getmək gəlmək bura istərdi'
      },
      {
        id: 176,
        sntc: 'What time do you usually get up?',
        tr: 'Sən adətən nə vaxt qalxırsan?',
        ch: 'Sən adətən nə çox harada vaxt qalxırsan?'
      },
      {
        id: 177,
        sntc: 'She feels happy',
        tr: 'O, özünü xoşbəxt hiss edir',
        ch: 'O, özünü xoşbəxt etmir Mən hiss edir'
      },
      {
        id: 178,
        sntc: 'Do you often call him?',
        tr: 'Sən tez-tez ona zəng edirsən?',
        ch: 'Sən tez-tez ona mənə çox zəng edirsən?'
      },
      {
        id: 179,
        sntc: 'How does he get home?',
        tr: 'O, evə necə gədir?',
        ch: 'O, evə necə nə vaxt gədir?'
      },
      {
        id: 180,
        sntc: 'What do you think about it?',
        tr: 'Sən bu barədə nə düşünürsən?',
        ch: 'Sən bu barədə o cür nə düşünürsən?'
      }
    ],
    [{
        id: 181,
        sntc: 'How does it help you?',
        tr: 'Bu sənə necə kömək edir?',
        ch: 'Bu sənə necə  kömək edir?'
      },
      {
        id: 182,
        sntc: 'My parents want to do it',
        tr: 'Mənim valideynlərim bunu etmək istəyir',
        ch: 'Mənim valideynlərim bunu etmək istəyir'
      },
      {
        id: 183,
        sntc: 'All people do it',
        tr: 'Bütün insanlar bunu edir',
        ch: 'Bütün insanlar bunu edir'
      },
      {
        id: 184,
        sntc: 'I think so',
        tr: 'Mən belə düşünürəm',
        ch: 'Mən belə düşünürəm'
      },
      {
        id: 185,
        sntc: 'Does this person seem very good?',
        tr: 'Bu insan çox yaxşı görünür?',
        ch: 'Bu insan çox yaxşı görünür?'
      },
      {
        id: 186,
        sntc: 'Do you remember it?',
        tr: 'Bu sənin yadındadır?',
        ch: 'Bu sənin yadındadır?'
      },
      {
        id: 187,
        sntc: 'I live in this city',
        tr: 'Mən bu şəhərdə yaşayıram',
        ch: 'Mən bu şəhərdə yaşayıram'
      },
      {
        id: 188,
        sntc: 'How long does it take his daughter to get to school?',
        tr: 'Onun qızının məktəbə çatmağı nə qədər vaxt çəkir?',
        ch: 'Onun qızının məktəbə çatmağı nə qədər vaxt çəkir?'
      },
      {
        id: 189,
        sntc: 'My sister lives there but I live here',
        tr: 'Mənim bacım orada yaşayır, amma mən burada yaşayıram',
        ch: 'Mənim bacım orada yaşayır, amma mən burada yaşayıram'
      },
      {
        id: 190,
        sntc: 'What music do you prefer?',
        tr: 'Sən hansı musiqiyə üstünlük verirsən?',
        ch: 'Sən hansı musiqiyə üstünlük verirsən?'
      }
    ],
    [{
        id: 191,
        sntc: 'She tries to understand it',
        tr: 'O, bunu anlamağa çalışır',
        ch: 'O, bunu anlamağa çalışır'
      },
      {
        id: 192,
        sntc: 'When do you have free time?',
        tr: 'Sənin nə vaxt boş vaxtın olur?',
        ch: 'Sənin nə vaxt boş vaxtın olur?'
      },
      {
        id: 193,
        sntc: 'I like this idea',
        tr: 'Bu ideya xoşuma gəlir',
        ch: 'Bu ideya xoşuma gəlir'
      },
      {
        id: 194,
        sntc: 'How often do you go there?',
        tr: 'Ora nə sıxlıqda gedirsiniz?',
        ch: 'Ora nə sıxlıqda dəfə gedirsiniz?'
      },
      {
        id: 195,
        sntc: 'I would like to drink a cup of coffee',
        tr: 'Mən bir fincan qəhvə içmək istərdim',
        ch: 'Mən bir fincan qəhvə içmək istərdim'
      },
      {
        id: 196,
        sntc: 'Who wants to live abroad?',
        tr: 'Kim xaricdə yaşamaq istəyir?',
        ch: 'Kim xaricdə yaşamaq istəyir?'
      },
      {
        id: 197,
        sntc: 'Where do they spend time together?',
        tr: 'Onlar birlikdə harada vaxt keçirirlər?',
        ch: 'Onlar birlikdə harada vaxt keçirirlər?'
      },
      {
        id: 198,
        sntc: 'How often do you think about it?',
        tr: 'Bu barədə nə sıxlıqda çox düşünürsən?',
        ch: 'Bu barədə nə sıxlıqda çox düşünürsən?'
      },
      {
        id: 199,
        sntc: 'She does it very well',
        tr: 'O, bunu çox yaxşı edir',
        ch: 'O, bunu çox yaxşı edir'
      },
      {
        id: 200,
        sntc: 'He teaches English',
        tr: 'O, İngilis dilini tədris edir',
        ch: 'O, İngilis dilini tədris edir'
      }
    ],
    [{
        id: 201,
        sntc: 'I want to know it',
        tr: 'Mən bunu bilmək istəyirəm',
        ch: 'Mən bunu bilmək istəyirəm'
      },
      {
        id: 202,
        sntc: 'I really need English',
        tr: 'Mənə həqiqətən ingilis dili lazımdır',
        ch: 'Mənə həqiqətən ingilis dili lazımdır'
      },
      {
        id: 203,
        sntc: 'We live in this country',
        tr: 'Biz bu ölkədə yaşayırıq',
        ch: 'Biz bu ölkədə yaşayırıq'
      },
      {
        id: 204,
        sntc: 'I need to correct this mistake',
        tr: 'Mən bu səhvi düzəltməliyəm',
        ch: 'Mən bu səhvi düzəltməliyəm'
      },
      {
        id: 205,
        sntc: 'She also knows it',
        tr: 'O da bunu bilir',
        ch: 'O da bunu bilir'
      },
      {
        id: 206,
        sntc: 'How does your brother feel?',
        tr: 'Sənin qardaşın özünü necə hiss edir?',
        ch: 'Sənin qardaşın özünü necə hiss edir?'
      },
      {
        id: 207,
        sntc: 'How regularly do you do these exercises?',
        tr: 'Sən bu tapşırıqları müntəzəm olaraq nə qədər edirsən?',
        ch: 'Sən bu tapşırıqları müntəzəm olaraq nə qədər edirsən?'
      },
      {
        id: 208,
        sntc: 'I want to go to another place',
        tr: 'Mən başqa yerə getmək istəyirəm',
        ch: 'Mən başqa yerə getmək istəyirəm'
      },
      {
        id: 209,
        sntc: 'Does it seem interesting?',
        tr: 'Bu maraqlı görünür?',
        ch: 'Bu maraqlı görünür?'
      },
      {
        id: 210,
        sntc: 'Do you have enough money?',
        tr: 'Sənin kifayət qədər pulun var?',
        ch: 'Sənin kifayət qədər pulun var?'
      }
    ],
    [{
        id: 211,
        sntc: 'His father has a car',
        tr: 'Onun atasının maşını var',
        ch: 'Onun atasının maşını var'
      },
      {
        id: 212,
        sntc: 'What worries you?',
        tr: 'Səni narahat edən nədir?',
        ch: 'Səni narahat edən nədir?'
      },
      {
        id: 213,
        sntc: 'I really need it',
        tr: 'Bu mənə həqiqətən lazımdır',
        ch: 'Bu mənə həqiqətən lazımdır'
      },
      {
        id: 214,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        ch: 'Onlar sənə nə demək istəyirlər?'
      },
      {
        id: 215,
        sntc: 'How does she get home?',
        tr: 'O, evə necə gedir?',
        ch: 'O, evə necə gedir?'
      },
      {
        id: 216,
        sntc: 'My boss always says it',
        tr: 'Mənim müdirim həmişə bunu deyir',
        ch: 'Mənim müdirim həmişə bunu deyir'
      },
      {
        id: 217,
        sntc: 'She would like to become a teacher',
        tr: 'O, müəllim olmaq istərdi',
        ch: 'O, müəllim olmaq istərdi'
      },
      {
        id: 218,
        sntc: 'I really need your lessons',
        tr: 'Mənim həqiqətən sənin dərslərinə ehtiyacım var',
        ch: 'Mənim həqiqətən sənin dərslərinə ehtiyacım var'
      },
      {
        id: 219,
        sntc: 'How often do you read English books?',
        tr: 'Nə sıxlıqda İngilis dilində kitablar oxuyursan?',
        ch: 'Nə sıxlıqda tez-tez İngilis dilində kitablar oxuyursan?'
      },
      {
        id: 220,
        sntc: 'I want to improve my English',
        tr: 'Mən İngilis dilimi təkmilləşdirmək istəyirəm',
        ch: 'Mən İngilis dilimi təkmilləşdirmək istəyirəm'
      }
    ],
    [{
        id: 221,
        sntc: "He's a manager",
        tr: 'O, menecerdir',
        ch: 'O, menecerdir'
      },
      {
        id: 222,
        sntc: "It's an interesting idea",
        tr: 'Bu maraqlı fikirdir',
        ch: 'Bu maraqlı fikirdir'
      },
      {
        id: 223,
        sntc: "It's easy",
        tr: 'Bu asandır',
        ch: 'Bu asandır'
      },
      {
        id: 224,
        sntc: "I'm happy",
        tr: 'Mən xoşbəxtəm',
        ch: 'Mən xoşbəxtəm'
      },
      {
        id: 225,
        sntc: "It's interesting",
        tr: 'Bu maraqlıdır',
        ch: 'Bu maraqlıdır'
      },
      {
        id: 226,
        sntc: "I'm lazy",
        tr: 'Mən tənbələm',
        ch: 'Mən tənbələm'
      },
      {
        id: 227,
        sntc: "We're rich",
        tr: 'Biz zənginik',
        ch: 'Biz zənginik'
      },
      {
        id: 228,
        sntc: "She's a doctor",
        tr: 'O, həkimdir',
        ch: 'O, həkimdir'
      },
      {
        id: 229,
        sntc: "He's her husband",
        tr: 'O, onun əridir',
        ch: 'O, onun əridir'
      },
      {
        id: 230,
        sntc: "It's important",
        tr: 'Bu vacibdir',
        ch: 'Bu vacibdir'
      }
    ],
    [{
        id: 231,
        sntc: "It's too difficult",
        tr: 'Bu həddən artıq çətindir',
        ch: 'Bu həddən artıq çətindir'
      },
      {
        id: 232,
        sntc: "It's a big mistake",
        tr: 'Bu böyük səhvdir',
        ch: 'Bu böyük səhvdir'
      },
      {
        id: 233,
        sntc: "It's a simple test",
        tr: 'Bu sadə testdir',
        ch: 'Bu sadə testdir'
      },
      {
        id: 234,
        sntc: "You're the best teacher in the world",
        tr: 'Sən dünyanın ən yaxşı müəllimisən',
        ch: 'Sən dünyanın ən yaxşı müəllimisən'
      },
      {
        id: 235,
        sntc: "It's too cheap",
        tr: 'Bu çox ucuzdır',
        ch: 'Bu çox ucuzdır'
      },
      {
        id: 236,
        sntc: "He's a very good person",
        tr: 'O çox yaxşı insandır',
        ch: 'O çox yaxşı insandır'
      },
      {
        id: 237,
        sntc: "It's too cold",
        tr: 'Çox soyuqdur',
        ch: 'Çox soyuqdur'
      },
      {
        id: 238,
        sntc: "She's a very beautiful girl",
        tr: 'O çox gözəl qızdır',
        ch: 'O çox gözəl qızdır'
      },
      {
        id: 239,
        sntc: "I'm fine",
        tr: 'Mən yaxşıyam',
        ch: 'Mən yaxşıyam'
      },
      {
        id: 240,
        sntc: "It's worse",
        tr: 'Bu daha pisdir',
        ch: 'Bu daha pisdir'
      }
    ],
    [{
        id: 241,
        sntc: "She's such a wise woman",
        tr: 'O çox müdrik qadındır',
        ch: 'O çox müdrik qadındır'
      },
      {
        id: 242,
        sntc: "It's such an effective method",
        tr: 'Bu çox effektiv üsuldur',
        ch: 'Bu çox effektiv üsuldur'
      },
      {
        id: 243,
        sntc: "It's so easy",
        tr: 'Bu çox asandır',
        ch: 'Bu çox asandır'
      },
      {
        id: 244,
        sntc: "I drink so much milk",
        tr: 'Mən elə çox süd içirəm',
        ch: 'Mən elə çox süd içirəm'
      },
      {
        id: 245,
        sntc: "It's such an expensive car",
        tr: 'Bu çox bahalı avtomobildir',
        ch: 'Bu çox bahalı avtomobildir'
      },
      {
        id: 246,
        sntc: "She's so clever",
        tr: 'O çox ağıllıdır',
        ch: 'O çox ağıllıdır'
      },
      {
        id: 247,
        sntc: "It's very easy",
        tr: 'Bu çox asandır',
        ch: 'Bu çox asandır'
      },
      {
        id: 248,
        sntc: "He's so professional teacher",
        tr: 'O çox peşəkar müəllimdir',
        ch: 'O çox peşəkar müəllimdir'
      },
      {
        id: 249,
        sntc: "It's such a cheap thing",
        tr: 'Bu çox ucuz əşyadır',
        ch: 'Bu çox qədər ucuz əşyadır'
      },
      {
        id: 250,
        sntc: "He's so talented",
        tr: 'O çox istedadlıdır',
        ch: 'O çox istedadlıdır'
      }
    ],
    [{
        id: 251,
        sntc: 'Your help is very important',
        tr: 'Sənin köməyin çox vacibdir',
        ch: 'Sənin köməyin çox vacibdir'
      },
      {
        id: 252,
        sntc: 'Our teacher is right',
        tr: 'Bizim müəllimimiz haqlıdır',
        ch: 'Bizim müəllimimiz haqlıdır'
      },
      {
        id: 253,
        sntc: 'These lessons are so effective',
        tr: 'Bu dərslər elə effektlidir',
        ch: 'Bu dərslər elə effektlidir'
      },
      {
        id: 254,
        sntc: 'This problem is very big',
        tr: 'Bu problem çox böyükdür',
        ch: 'Bu problem çox böyükdür'
      },
      {
        id: 255,
        sntc: 'The women are there',
        tr: 'Qadınlar oradadır',
        ch: 'Qadınlar oradadır'
      },
      {
        id: 256,
        sntc: 'His daughter is in the park',
        tr: 'Onun qızı parkdadır',
        ch: 'Onun qızı parkdadır'
      },
      {
        id: 257,
        sntc: 'I have a house. The house is very big',
        tr: 'Mənim evim var. Ev çox böyükdür',
        ch: 'Mənim evim var. Ev çox böyükdür'
      },
      {
        id: 258,
        sntc: 'His parents are abroad now',
        tr: 'Onun valideynləri hal-hazırda xaricdədir',
        ch: 'Onun valideynləri hal-hazırda xaricdədir'
      },
      {
        id: 259,
        sntc: 'I am thirty-two',
        tr: 'Mənim otuz iki yaşım var',
        ch: 'Mənim otuz iki yaşım var'
      },
      {
        id: 260,
        sntc: 'The day is rainy',
        tr: 'Gün yağışlıdır',
        ch: 'Gün yağışlıdır'
      }
    ],
    [{
        id: 261,
        sntc: "We aren't tired",
        tr: 'Biz yorulmamışıq',
        ch: 'Biz yorulmamışıq'
      },
      {
        id: 262,
        sntc: 'We are full of energy',
        tr: 'Biz enerji ilə doluyuq',
        ch: 'Biz enerji ilə doluyuq'
      },
      {
        id: 263,
        sntc: "It's such a bad method",
        tr: 'Bu çox pis metoddır',
        ch: 'Bu çox pis metoddır'
      },
      {
        id: 264,
        sntc: "I'm not a manager",
        tr: 'Mən menecer deyiləm',
        ch: 'Mən menecer deyiləm'
      },
      {
        id: 265,
        sntc: "It's a very bad method",
        tr: 'Bu çox pis üsuldur',
        ch: 'Bu çox pis üsuldur'
      },
      {
        id: 266,
        sntc: "It's a very ineffective method",
        tr: 'Bu çox qeyri-effektiv metoddır',
        ch: 'Bu çox qeyri-effektiv metoddır'
      },
      {
        id: 267,
        sntc: "This woman isn't so wise",
        tr: 'Bu qadın o qədər də müdrik deyil',
        ch: 'Bu qadın o qədər də müdrik deyil'
      },
      {
        id: 268,
        sntc: "It isn't a difficult rule",
        tr: 'Bu, çətin qayda deyil',
        ch: 'Bu, çətin qayda deyil'
      },
      {
        id: 269,
        sntc: "They aren't my colleagues",
        tr: 'Onlar mənim həmkarlarım deyil',
        ch: 'Onlar mənim həmkarlarım deyil'
      },
      {
        id: 270,
        sntc: "It isn't a very bad situation",
        tr: 'Bu çox pis vəziyyət deyil',
        ch: 'Bu çox pis vəziyyət deyil'
      }
    ],
    [{
        id: 271,
        sntc: 'Is it her opinion?',
        tr: 'Bu, onun fikridir?',
        ch: 'Bu, onun fikridir?'
      },
      {
        id: 272,
        sntc: 'Are you ready?',
        tr: 'Sən hazırsan?',
        ch: 'Sən hazırsan?'
      },
      {
        id: 273,
        sntc: 'Are they lazy?',
        tr: 'Onlar tənbəldirlər?',
        ch: 'Onlar tənbəldirlər?'
      },
      {
        id: 274,
        sntc: 'Is it a problem?',
        tr: 'Bu, problemdir?',
        ch: 'Bu, problemdir?'
      },
      {
        id: 275,
        sntc: 'Are we right?',
        tr: 'Biz haqlıyıq?',
        ch: 'Biz haqlıyıq?'
      },
      {
        id: 276,
        sntc: 'Is he a director?',
        tr: 'O, direktordur?',
        ch: 'O, direktordur?'
      },
      {
        id: 277,
        sntc: 'Is it a successful project?',
        tr: 'Bu uğurlu layihədir?',
        ch: 'Bu uğurlu layihədir?'
      },
      {
        id: 278,
        sntc: 'Is it obvious?',
        tr: 'Bu, açıq-aşkardır?',
        ch: 'Bu, açıq-aşkardır?'
      },
      {
        id: 279,
        sntc: 'Are you here?',
        tr: 'Sən burdasan?',
        ch: 'Sən burdasan?'
      },
      {
        id: 280,
        sntc: 'Is it a global problem?',
        tr: 'Bu, qlobal problemdir?',
        ch: 'Bu, qlobal problemdir?'
      }
    ],
    [{
        id: 281,
        sntc: 'Is money important?',
        tr: 'Pul vacibdir?',
        ch: 'Pul vacibdir?'
      },
      {
        id: 282,
        sntc: 'Is the computer old?',
        tr: 'Kompüter köhnədir?',
        ch: 'Kompüter köhnədir?'
      },
      {
        id: 283,
        sntc: 'Are the men at work?',
        tr: 'Kişilər işdədir?',
        ch: 'Kişilər işdədir?'
      },
      {
        id: 284,
        sntc: 'Is knowledge power?',
        tr: 'Bilik gücdür?',
        ch: 'Bilik gücdür?'
      },
      {
        id: 285,
        sntc: 'Are all these exercises very difficult?',
        tr: 'Bütün bu məşqlər çox çətindir?',
        ch: 'Bütün bu məşqlər çox çətindir?'
      },
      {
        id: 286,
        sntc: 'Are your friends online?',
        tr: 'Snin dostların İnternetdədir?',
        ch: 'Snin dostların İnternetdədir?'
      },
      {
        id: 287,
        sntc: 'Is the airport near?',
        tr: 'Hava limanı yaxındır?',
        ch: 'Hava limanı yaxındır?'
      },
      {
        id: 288,
        sntc: 'Is this word new for you?',
        tr: 'Bu söz sənin üçün yenidir?',
        ch: 'Bu söz sənin üçün yenidir?'
      },
      {
        id: 289,
        sntc: 'Is this level enough?',
        tr: 'Bu səviyyə kifayət edir?',
        ch: 'Bu səviyyə kifayət edir?'
      },
      {
        id: 290,
        sntc: 'Are the boys at school?',
        tr: 'Oğlanlar məktəbdədir?',
        ch: 'Oğlanlar məktəbdədir?'
      }
    ],
    [{
        id: 291,
        sntc: 'How expensive is it?',
        tr: 'Bu nə qədər bahalıdır?',
        ch: 'Bu nə qədər bahalıdır?'
      },
      {
        id: 292,
        sntc: 'Where is she?',
        tr: 'O haradadır?',
        ch: 'O haradadır?'
      },
      {
        id: 293,
        sntc: 'How is he?',
        tr: 'O necədir?',
        ch: 'O necədir?'
      },
      {
        id: 294,
        sntc: 'What is really important?',
        tr: 'Əslində nə vacibdir?',
        ch: 'Əslində nə vacibdir?'
      },
      {
        id: 295,
        sntc: 'How easy is it?',
        tr: 'Bu nə qədər asandır?',
        ch: 'Bu nə qədər asandır?'
      },
      {
        id: 296,
        sntc: 'Why is he at work now?',
        tr: 'O, nəyə görə indi işdədir?',
        ch: 'O, nəyə görə indi işdədir?'
      },
      {
        id: 297,
        sntc: 'How good is it?',
        tr: 'Bu nə dərəcədə yaxşıdır?',
        ch: 'Bu nə dərəcədə yaxşıdır?'
      },
      {
        id: 298,
        sntc: 'How old is she?',
        tr: 'Onun neçə yaşı var?',
        ch: 'Onun neçə yaşı var?'
      },
      {
        id: 299,
        sntc: 'Who is next?',
        tr: 'Növbəti kimdir?',
        ch: 'Növbəti kimdir?'
      },
      {
        id: 300,
        sntc: 'What is strange?',
        tr: 'Qəribə olan nədir?',
        ch: 'Qəribə olan nədir?'
      }
    ],
    [{
        id: 301,
        sntc: 'Where is your husband?',
        tr: 'Sənin ərin haradadır?',
        ch: 'Sənin ərin haradadır?'
      },
      {
        id: 302,
        sntc: "What's her job?",
        tr: 'Onun işi nədir?',
        ch: 'Onun işi nədir?'
      },
      {
        id: 303,
        sntc: 'Who is that woman?',
        tr: 'O qadın kimdir?',
        ch: 'O qadın kimdir?'
      },
      {
        id: 304,
        sntc: "What's your sister's name?",
        tr: 'Sənin bacının adı nədir?',
        ch: 'Sənin bacının adı nədir?'
      },
      {
        id: 305,
        sntc: "What's wrong?",
        tr: 'Nə səhvdir?',
        ch: 'Nə səhvdir?'
      },
      {
        id: 306,
        sntc: "What's her father's job?",
        tr: 'Onun atasının işi nədir?',
        ch: 'Onun atasının işi nədir?'
      },
      {
        id: 307,
        sntc: 'How is this result?',
        tr: 'Bu nəticə nəcədir?',
        ch: 'Bu nəticə nəcədir?'
      },
      {
        id: 308,
        sntc: 'How old is your brother?',
        tr: 'Sənin qardaşının neçə yaşı var?',
        ch: 'Sənin qardaşının neçə yaşı var?'
      },
      {
        id: 309,
        sntc: 'Where is the boy?',
        tr: 'Oğlan haradadır?',
        ch: 'Oğlan haradadır?'
      },
      {
        id: 310,
        sntc: "What's his name?",
        tr: 'Onun adı nədir?',
        ch: 'Onun adı nədir?'
      }
    ],
    [{
        id: 311,
        sntc: 'He is so clever',
        tr: 'O, çox ağıllıdır',
        ch: 'O, çox ağıllıdır'
      },
      {
        id: 312,
        sntc: 'Is this method really ineffective?',
        tr: 'Bu üsul həqiqətən səmərəsizdir?',
        ch: 'Bu üsul həqiqətən səmərəsizdir?'
      },
      {
        id: 313,
        sntc: 'Why are those lessons so ineffective?',
        tr: 'Nəyə görə bu dərslər elə yararsızdır?',
        ch: 'Nəyə görə bu dərslər elə yararsızdır?'
      },
      {
        id: 314,
        sntc: 'Why are the students there?',
        tr: 'Tələbələr nə üçün oradadır?',
        ch: 'Tələbələr nə üçün oradadır?'
      },
      {
        id: 315,
        sntc: 'I have a car',
        tr: 'Mənim maşınım var',
        ch: 'Mənim maşınım var'
      },
      {
        id: 316,
        sntc: 'How much is the book?',
        tr: 'Kitab neçəyədir?',
        ch: 'Kitab neçəyədir?'
      },
      {
        id: 317,
        sntc: 'It is easy',
        tr: 'Bu asandır',
        ch: 'Bu asandır'
      },
      {
        id: 318,
        sntc: "What's her name?",
        tr: 'Onun adı nədir?',
        ch: 'Onun adı nədir?'
      },
      {
        id: 319,
        sntc: 'It is sunny',
        tr: 'Günəşlidir',
        ch: 'Günəşlidir'
      },
      {
        id: 320,
        sntc: 'Are you from England?',
        tr: 'Sən İngiltərədənsən??',
        ch: 'Sən İngiltərədənsən??'
      }
    ],
    [{
        id: 321,
        sntc: 'The day is windy',
        tr: 'Gün küləklidir',
        ch: 'Gün küləklidir'
      },
      {
        id: 322,
        sntc: 'I am happy',
        tr: 'Mən xoşbəxtəm',
        ch: 'Mən xoşbəxtəm'
      },
      {
        id: 323,
        sntc: 'She is so beautiful',
        tr: 'O, çox gözəldir',
        ch: 'O, çox gözəldir'
      },
      {
        id: 324,
        sntc: 'Money is important',
        tr: 'Pul vacibdir',
        ch: 'Pul vacibdir'
      },
      {
        id: 325,
        sntc: 'Are those exercises useless?',
        tr: 'O tapşırıqlar faydasızdır?',
        ch: 'O tapşırıqlar faydasızdır?'
      },
      {
        id: 326,
        sntc: 'How much is this pair of jeans?',
        tr: 'Bu cüt cins neçəyədir?',
        ch: 'Bu cüt cins neçəyədir?'
      },
      {
        id: 327,
        sntc: 'It is so cold',
        tr: 'Çox soyuqdur',
        ch: 'Çox soyuqdur'
      },
      {
        id: 328,
        sntc: 'I am not tired',
        tr: 'Mən yorulmamışam',
        ch: 'Mən yorulmamışam'
      },
      {
        id: 329,
        sntc: 'Is she a poor woman?',
        tr: 'O, kasıb qadındır?',
        ch: 'O, kasıb qadındır?'
      },
      {
        id: 330,
        sntc: 'This method is very simple',
        tr: 'Bu üsul çox sadədir',
        ch: 'Bu üsul çox sadədir'
      }
    ],
    [{
        id: 331,
        sntc: "I'm not married",
        tr: 'Mən evli deyiləm',
        ch: 'Mən evli deyiləm'
      },
      {
        id: 332,
        sntc: 'Is it obvious?',
        tr: 'Bu açıq-aşkardır?',
        ch: 'Bu açıq-aşkardır?'
      },
      {
        id: 333,
        sntc: 'His son is in the park',
        tr: 'Onun oğlu parkdadır',
        ch: 'Onun oğlu parkdadır'
      },
      {
        id: 334,
        sntc: "It's the best example",
        tr: 'Bu ən yaxşı nümunədir',
        ch: 'Bu ən yaxşı nümunədir'
      },
      {
        id: 335,
        sntc: 'The boys are at home',
        tr: 'Oğlanlar evdədir',
        ch: 'Oğlanlar evdədir'
      },
      {
        id: 336,
        sntc: 'Is it such an ineffective method',
        tr: 'Bu çox qeyri-effektiv üsuldur',
        ch: 'Bu çox qeyri-effektiv üsuldur'
      },
      {
        id: 337,
        sntc: "What's your father's job?",
        tr: 'Sənin atanın işi nədir?',
        ch: 'Sənin atanın işi nədir?'
      },
      {
        id: 338,
        sntc: "You aren't optimistic",
        tr: 'Sən optimistik deyilsən',
        ch: 'Sən optimistik deyilsən'
      },
      {
        id: 339,
        sntc: 'These words are new for me',
        tr: 'Bu sözlər mənim üçün yenidir',
        ch: 'Bu sözlər mənim üçün yenidir'
      },
      {
        id: 340,
        sntc: 'Am I in the right place?',
        tr: 'Mən düz yerdəyəm?',
        ch: 'Mən düz yerdəyəm?'
      }
    ],
    [{
        id: 341,
        sntc: 'The day is rainy',
        tr: 'Gün yağışlıdır',
        ch: 'Gün yağışlıdır'
      },
      {
        id: 342,
        sntc: 'Why are these rules so important?',
        tr: 'Bu qaydalar niyə bu qədər vacibdir?',
        ch: 'Bu qaydalar niyə bu qədər vacibdir?'
      },
      {
        id: 343,
        sntc: 'We need more control',
        tr: 'Bizə daha çox nəzarət lazımdır',
        ch: 'Bizə daha çox nəzarət lazımdır'
      },
      {
        id: 344,
        sntc: "He's interested in it",
        tr: 'O, bununla maraqlanır',
        ch: 'O, bununla maraqlanır'
      },
      {
        id: 345,
        sntc: 'This method is very simple',
        tr: 'Bu üsul çox sadədir',
        ch: 'Bu üsul çox sadədir'
      },
      {
        id: 346,
        sntc: 'When do you go to work?',
        tr: 'Sən nə vaxt işə gedirsən?',
        ch: 'Sən nə vaxt işə gedirsən?'
      },
      {
        id: 347,
        sntc: 'What does this word mean?',
        tr: 'Bu sözün mənası nədir?',
        ch: 'Bu sözün mənası nədir?'
      },
      {
        id: 348,
        sntc: 'Who criticizes him?',
        tr: 'Onu kim tənqid edir?',
        ch: 'Onu kim tənqid edir?'
      },
      {
        id: 349,
        sntc: 'What do you mean?',
        tr: 'Nəyi nəzərdə tutursan?',
        ch: 'Nəyi nəzərdə tutursan?'
      },
      {
        id: 350,
        sntc: 'I want to speak English better',
        tr: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
        ch: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm'
      }
    ],
    [{
        id: 351,
        sntc: 'How often do you listen to the radio?',
        tr: 'Sən radioya nə sıxlıqda qulaq asırsan?',
        ch: 'Sən radioya nə sıxlıqda qulaq asırsan?'
      },
      {
        id: 352,
        sntc: 'I don’t like this atmosphere',
        tr: 'Bu ab-hava mənim xoşuma gəlmir',
        ch: 'Bu ab-hava mənim xoşuma gəlmir'
      },
      {
        id: 353,
        sntc: 'It isn’t surprising',
        tr: 'Bu təəccüblü deyil',
        ch: 'Bu təəccüblü deyil'
      },
      {
        id: 354,
        sntc: 'What frightens you more?',
        tr: 'Səni daha çox qorxuya salan nədir?',
        ch: 'Səni daha çox qorxuya salan nədir?'
      },
      {
        id: 355,
        sntc: 'What channel are popular nowadays?',
        tr: 'Hal-hazırda hansı kanal populyardır?',
        ch: 'Hal-hazırda hansı kanal populyardır?'
      },
      {
        id: 356,
        sntc: "What's really important?",
        tr: 'Əslində nə vacibdir?',
        ch: 'Əslində nə vacibdir?'
      },
      {
        id: 357,
        sntc: 'Are they lucky?',
        tr: 'Onlar şanslıdırlar?',
        ch: 'Onlar şanslıdırlar?'
      },
      {
        id: 358,
        sntc: 'Is he tired?',
        tr: 'O, yorğundur?',
        ch: 'O, yorğundur?'
      },
      {
        id: 359,
        sntc: "I'm fine, thanks",
        tr: 'Mən yaxşıyam, təşəkkürlər',
        ch: 'Mən yaxşıyam, təşəkkürlər'
      },
      {
        id: 360,
        sntc: 'You know all the truth',
        tr: 'Sən bütün həqiqəti bilirsən',
        ch: 'Sən bütün həqiqəti bilirsən'
      }
    ],
    [{
        id: 361,
        sntc: 'Does your brother live alone',
        tr: 'Sənin qardaşın tək yaşayır?',
        ch: 'Sənin qardaşın tək yaşayır?'
      },
      {
        id: 362,
        sntc: 'Is my experience enough',
        tr: 'Mənim təcrübəm kifayət edir?',
        ch: 'Mənim təcrübəm kifayət edir?'
      },
      {
        id: 363,
        sntc: 'I hope you remember it',
        tr: 'Ümid edirəm, sən bunu xatırlayırsan',
        ch: 'Ümid edirəm, sən bunu xatırlayırsan'
      },
      {
        id: 364,
        sntc: 'He enjoys listening to music ',
        tr: 'O, musiqi dinləməkdən zövq alır ',
        ch: 'O, musiqi dinləməkdən zövq alır '
      },
      {
        id: 365,
        sntc: 'Do you need to do it this year?',
        tr: 'Sənə bunu bu il etmək lazımdır?',
        ch: 'Sənə bunu bu il etmək lazımdır?'
      },
      {
        id: 366,
        sntc: 'Do you need to finish it by tomorrow?',
        tr: 'Sənə bunu sabaha qədər bitirmək lazımdır?',
        ch: 'Sənə bunu sabaha qədər bitirmək lazımdır?'
      },
      {
        id: 367,
        sntc: 'Is the food tasty?',
        tr: 'Yemək dadlıdır?',
        ch: 'Yemək dadlıdır?'
      },
      {
        id: 368,
        sntc: 'Do they often talk about politics?',
        tr: 'Onlar tez-tez siyasətdən danışırlar?',
        ch: 'Onlar tez-tez siyasətdən danışırlar?'
      },
      {
        id: 369,
        sntc: "This subject isn't easy at all",
        tr: 'Bu mövzu heç də asan deyil',
        ch: 'Bu mövzu heç də asan deyil'
      },
      {
        id: 370,
        sntc: "It's on the floor",
        tr: 'Bu döşəmənin üstündədir',
        ch: 'Bu döşəmənin üstündədir'
      }
    ],
    [{
        id: 371,
        sntc: 'How difficult this exercise?',
        tr: 'Bu tapşırıq nə dərəcədə çətindir?',
        ch: 'Bu tapşırıq nə dərəcədə çətindir?'
      },
      {
        id: 372,
        sntc: 'Do you know the meaning of this word?',
        tr: 'Bu sözün mənasını bilirsən?',
        ch: 'Bu sözün mənasını bilirsən?'
      },
      {
        id: 373,
        sntc: "I'm fond of sport",
        tr: 'Mən idmanı çox sevirəm',
        ch: 'Mən idmanı çox sevirəm'
      },
      {
        id: 374,
        sntc: 'She always does it with great pleasure',
        tr: 'O, bunu həmişə böyük məmnuniyyətlə edir',
        ch: 'O, bunu həmişə böyük məmnuniyyətlə edir'
      },
      {
        id: 375,
        sntc: "I'd like to add it",
        tr: 'Mən bunu əlavə etmək istərdim',
        ch: 'Mən bunu əlavə etmək istərdim'
      },
      {
        id: 376,
        sntc: 'Her daughter is at school',
        tr: 'Onun qızı məktəbdədir',
        ch: 'Onun qızı məktəbdədir'
      },
      {
        id: 377,
        sntc: 'What time does he come to work?',
        tr: 'O, işə nə vaxt gəlir?',
        ch: 'O, işə nə vaxt gəlir?'
      },
      {
        id: 378,
        sntc: "I'm sure",
        tr: 'Mən əminəm',
        ch: 'Mən əminəm'
      },
      {
        id: 379,
        sntc: 'Is it his point of view?',
        tr: 'Bu onun nöqteyi-nəzəridir?',
        ch: 'Bu onun nöqteyi-nəzəridir?'
      },
      {
        id: 380,
        sntc: 'Where do you usually go in summer?',
        tr: 'Sən yayda adətən hara gedirsən?',
        ch: 'Sən yayda adətən hara gedirsən?'
      }
    ],
    [{
        id: 381,
        sntc: 'I hope you remember it',
        tr: 'Ümid edirəm, sən bunu xatırlayırsan',
        ch: 'Ümid edirəm, sən bunu xatırlayırsan'
      },
      {
        id: 382,
        sntc: "She's sad",
        tr: 'O, qəmlidir',
        ch: 'O, qəmlidir'
      },
      {
        id: 383,
        sntc: 'She watches TV',
        tr: 'O, televizora baxır',
        ch: 'O, televizora baxır'
      },
      {
        id: 384,
        sntc: "His salary isn't so high. It's low",
        tr: 'Onun maaşı o qədər də yüksək deyil. Aşağıdır.',
        ch: 'Onun maaşı o qədər də yüksək deyil. Aşağıdır.'
      },
      {
        id: 385,
        sntc: 'Are we near this place?',
        tr: 'Biz bu yerin yaxınlığındayıq?',
        ch: 'Biz bu yerin yaxınlığındayıq?'
      },
      {
        id: 386,
        sntc: 'How do you usually prepare for your exams?',
        tr: 'Sən adətən imtahanlarına necə hazırlaşırsan?',
        ch: 'Sən adətən imtahanlarına necə hazırlaşırsan?'
      },
      {
        id: 387,
        sntc: "I don't want to drink",
        tr: 'Mən içmək istəmirəm',
        ch: 'Mən içmək istəmirəm'
      },
      {
        id: 388,
        sntc: 'Do you often call him?',
        tr: 'Sən tez-tez ona zəng edirsən?',
        ch: 'Sən tez-tez ona zəng edirsən?'
      },
      {
        id: 389,
        sntc: "It's necessary to remember it",
        tr: 'Bunu xatırlamaq vacibdir',
        ch: 'Bunu xatırlamaq vacibdir'
      },
      {
        id: 390,
        sntc: 'Is that information really useful?',
        tr: 'O məlumat həqiqətən faydalıdır?',
        ch: 'O məlumat həqiqətən faydalıdır?'
      }
    ],
    [{
        id: 391,
        sntc: 'Knowledge is very important',
        tr: 'Bilik çox vacibdir',
        ch: 'Bilik çox vacibdir'
      },
      {
        id: 392,
        sntc: 'We may do it',
        tr: 'Biz bunu edə bilərik',
        ch: 'Biz bunu edə bilərik'
      },
      {
        id: 393,
        sntc: 'He should do it',
        tr: 'O, gərək bunu etsin',
        ch: 'O, gərək bunu etsin'
      },
      {
        id: 394,
        sntc: 'I can read in English',
        tr: 'Mən ingilis dilində oxuya bilirəm',
        ch: 'Mən ingilis dilində oxuya bilirəm'
      },
      {
        id: 395,
        sntc: 'We must change our life',
        tr: 'Biz həyatımızı dəyişməliyik',
        ch: 'Biz həyatımızı dəyişməliyik'
      },
      {
        id: 396,
        sntc: 'I enjoy doing it',
        tr: 'Bunu etməkdən zövq alıram',
        ch: 'Bunu etməkdən zövq alıram'
      },
      {
        id: 397,
        sntc: 'I like living abroad',
        tr: 'Mənim xaricdə yaşamaq xoşuma gəlir',
        ch: 'Mənim xaricdə yaşamaq xoşuma gəlir'
      },
      {
        id: 398,
        sntc: 'You must tell me about this problem',
        tr: 'Sən bu problem haqqında mənə danışmalısan',
        ch: 'Sən bu problem haqqında mənə danışmalısan'
      },
      {
        id: 399,
        sntc: 'I should call him tomorrow',
        tr: 'Mən gərək sabah ona zəng edim',
        ch: 'Mən gərək sabah ona zəng edim'
      },
      {
        id: 400,
        sntc: 'She usually do it in the evening',
        tr: 'O, adətən bunu axşamlar edir',
        ch: 'O, adətən bunu axşamlar edir'
      }
    ],
    [{
        id: 401,
        sntc: 'What do you like here?',
        tr: 'Sən burada nəyi bəyənirsən?',
        ch: 'Sən burada nəyi bəyənirsən?'
      },
      {
        id: 402,
        sntc: 'I want this computer',
        tr: 'Mən bu kompüteri istəyirəm',
        ch: 'Mən bu kompüteri istəyirəm'
      },
      {
        id: 403,
        sntc: 'Are the men at work?',
        tr: 'Kişilər işdədir?',
        ch: 'Kişilər işdədir?'
      },
      {
        id: 404,
        sntc: "Who's with you?",
        tr: 'Səninlə kim var?',
        ch: 'Səninlə kim var?'
      },
      {
        id: 405,
        sntc: 'This place is very beautiful',
        tr: 'Bu yer çox gözəldir',
        ch: 'Bu yer çox gözəldir'
      },
      {
        id: 406,
        sntc: 'I do it to know English better',
        tr: 'Mən bunu İngilis dilini daha yaxşı bilmək üçün edirəm',
        ch: 'Mən bunu İngilis dilini daha yaxşı bilmək üçün edirəm'
      },
      {
        id: 407,
        sntc: 'Is it a very important detail?',
        tr: 'Bu çox vacib detaldır?',
        ch: 'Bu çox vacib detaldır?'
      },
      {
        id: 408,
        sntc: 'He has a company. Its profit is so big',
        tr: 'Onun bir şirkəti var. Onun qazancı çox böyükdür',
        ch: 'Onun bir şirkəti var. Onun qazancı çox böyükdür'
      },
      {
        id: 409,
        sntc: 'Do I need to call him?',
        tr: 'Mənim ona zəng etməyim lazımdır?',
        ch: 'Mənim ona zəng etməyim lazımdır?'
      },
      {
        id: 410,
        sntc: 'How much are these trousers?',
        tr: 'Bu şalvarlar neçəyədir?',
        ch: 'Bu şalvarlar neçəyədir?'
      }
    ],
    [{
        id: 411,
        sntc: "It's a small mistake",
        tr: 'Bu kiçik bir səhvdir',
        ch: 'Bu kiçik bir səhvdir'
      },
      {
        id: 412,
        sntc: "This level isn't elementary",
        tr: 'Bu səviyyə elementar deyil',
        ch: 'Bu səviyyə elementar deyil'
      },
      {
        id: 413,
        sntc: 'Your lessons really help',
        tr: 'Dərslərin həqiqətən də kömək edir',
        ch: 'Dərslərin həqiqətən də kömək edir'
      },
      {
        id: 414,
        sntc: 'How do you get to work?',
        tr: 'İşə nəcə gedirsən?',
        ch: 'İşə nəcə gedirsən?'
      },
      {
        id: 415,
        sntc: 'This book is really boring',
        tr: 'Bu kitab həqiqətən darıxdırıcıdır',
        ch: 'Bu kitab həqiqətən darıxdırıcıdır'
      },
      {
        id: 416,
        sntc: 'Where does she usually go?',
        tr: 'O, adətən hara gedir?',
        ch: 'O, adətən hara gedir?'
      },
      {
        id: 417,
        sntc: 'He sees that mistake',
        tr: 'O, bu səhvi görür',
        ch: 'O, bu səhvi görür'
      },
      {
        id: 418,
        sntc: 'I need to do it this year',
        tr: 'Mənə bu il bunu etmək lazımdır',
        ch: 'Mənə bu il bunu etmək lazımdır'
      },
      {
        id: 419,
        sntc: "I'm interested in it",
        tr: 'Mənə bununla maraqlanıram',
        ch: 'Mənə bununla maraqlanıram'
      },
      {
        id: 420,
        sntc: "He'd like to write it down",
        tr: 'Bunu yazmaq istərdim',
        ch: 'Bunu yazmaq istərdim'
      }
    ],
    [{
        id: 421,
        sntc: 'How long does it take you to get to school?',
        tr: 'Sənin məktəbə çatmağın nə qədər vaxt çəkir?',
        ch: 'Sənin məktəbə çatmağın nə qədər vaxt çəkir?'
      },
      {
        id: 422,
        sntc: 'He needs to be more polite',
        tr: 'O, daha nəzakətli olmalıdır',
        ch: 'O, daha nəzakətli olmalıdır'
      },
      {
        id: 423,
        sntc: 'Who do you know?',
        tr: 'Sən kimi tanıyırsan?',
        ch: 'Sən kimi tanıyırsan?'
      },
      {
        id: 424,
        sntc: "I'm lazy",
        tr: 'Mən tənbələm',
        ch: 'Mən tənbələm'
      },
      {
        id: 425,
        sntc: 'The lessons is really good',
        tr: 'Dərslər həqiqətən yaxşıdır',
        ch: 'Dərslər həqiqətən yaxşıdır'
      },
      {
        id: 426,
        sntc: 'Why do you like this video?',
        tr: 'Bu videonu niyə bəyənirsən?',
        ch: 'Bu videonu niyə bəyənirsən?'
      },
      {
        id: 427,
        sntc: 'The girl is so hard-working',
        tr: 'Qız çox zəhmətkeşdir',
        ch: 'Qız çox zəhmətkeşdir'
      },
      {
        id: 428,
        sntc: 'I know they like it',
        tr: 'Bilirəm, onlar bunu bəyənirlər',
        ch: 'Bilirəm, onlar bunu bəyənirlər'
      },
      {
        id: 429,
        sntc: "He's a professional teacher",
        tr: 'O, peşəkar müəllimdir',
        ch: 'O, peşəkar müəllimdir'
      },
      {
        id: 430,
        sntc: "It's interesting",
        tr: 'Bu maraqlıdır',
        ch: 'Bu maraqlıdır'
      }
    ],
    [{
        id: 431,
        sntc: "What's your friend's name?",
        tr: 'Dostunun adı nədir?',
        ch: 'Dostunun adı nədir?'
      },
      {
        id: 432,
        sntc: 'We live in Azerbaijan',
        tr: 'Biz Azərbaycanda yaşayırıq',
        ch: 'Biz Azərbaycanda yaşayırıq'
      },
      {
        id: 433,
        sntc: 'I enjoy speaking English',
        tr: 'İngilis dilində danışmağdan zövq alıram',
        ch: 'İngilis dilində danışmağdan zövq alıram'
      },
      {
        id: 434,
        sntc: "Those lessons aren't effective",
        tr: 'O dərslər effektiv deyil',
        ch: 'O dərslər effektiv deyil'
      },
      {
        id: 435,
        sntc: "What's really useful?",
        tr: 'Əslində faydalı olan nədir?',
        ch: 'Əslində faydalı olan nədir?'
      },
      {
        id: 436,
        sntc: 'Does he like it?',
        tr: 'O, bunu bəyənir?',
        ch: 'O, bunu bəyənir?'
      },
      {
        id: 437,
        sntc: 'Do your friends like these lessons?',
        tr: 'Bu dərsləri dostların bəyənir?',
        ch: 'Bu dərsləri dostların bəyənir?'
      },
      {
        id: 438,
        sntc: 'This result motivates us',
        tr: 'Bu nəticə bizi hərəkətə təşviq edir',
        ch: 'Bu nəticə bizi hərəkətə təşviq edir'
      },
      {
        id: 439,
        sntc: 'I admire this singer',
        tr: 'Bu müğənniyə heyranam',
        ch: 'Bu müğənniyə heyranam'
      },
      {
        id: 440,
        sntc: 'I perfectly understand you',
        tr: 'Mən səni əla başa düşürəm',
        ch: 'Mən səni əla başa düşürəm'
      }
    ],
    [{
        id: 441,
        sntc: 'Do you try to improve this result?',
        tr: 'Sən bu nəticəni yaxşılaşdırmağa çalışırsan?',
        ch: 'Sən bu nəticəni yaxşılaşdırmağa çalışırsan?'
      },
      {
        id: 442,
        sntc: "It isn't for this level",
        tr: 'Bu, bu səviyyə üçün deyil',
        ch: 'Bu, bu səviyyə üçün deyil'
      },
      {
        id: 443,
        sntc: 'Where is our teacher?',
        tr: 'Müəllimimiz haradadır?',
        ch: 'Müəllimimiz haradadır?'
      },
      {
        id: 444,
        sntc: 'I can write it down',
        tr: 'Mən bunu yaza bilərəm',
        ch: 'Mən bunu yaza bilərəm'
      },
      {
        id: 445,
        sntc: 'How often does he test their knowledge?',
        tr: 'O, onların biliyini nə sıxlıqda yoxlayır?',
        ch: 'O, onların biliyini nə sıxlıqda yoxlayır?'
      },
      {
        id: 446,
        sntc: "I know it's simple",
        tr: 'Bilirəm, bu sadədir',
        ch: 'Bilirəm, bu sadədir'
      },
      {
        id: 447,
        sntc: 'She realizes it',
        tr: 'O, bunu dərk edir',
        ch: 'O, bunu dərk edir'
      },
      {
        id: 448,
        sntc: "It's such an effective method",
        tr: 'Bu çox effektiv metoddur',
        ch: 'Bu çox effektiv metoddur'
      },
      {
        id: 449,
        sntc: 'I really want it',
        tr: 'Mən həqiqətən bunu istəyirəm',
        ch: 'Mən həqiqətən bunu istəyirəm'
      },
      {
        id: 450,
        sntc: "I don't like this joke at all",
        tr: 'Bu zarafat heç xoşuma gəlmir',
        ch: 'Bu zarafat heç xoşuma gəlmir'
      }
    ],
    [{
        id: 451,
        sntc: 'How is she?',
        tr: 'O necədir?',
        ch: 'O necədir?'
      },
      {
        id: 452,
        sntc: 'The lesson is interesting',
        tr: 'Dərslər maraqlıdır',
        ch: 'Dərslər maraqlıdır'
      },
      {
        id: 453,
        sntc: 'My friend and I live there in autumn',
        tr: 'Dostumla mən payızda orada yaşayırıq',
        ch: 'Dostumla mən payızda orada yaşayırıq'
      },
      {
        id: 454,
        sntc: 'Why are you here?',
        tr: 'Niyə burdasan?',
        ch: 'Niyə burdasan?'
      },
      {
        id: 455,
        sntc: 'Do I understand it correctly?',
        tr: 'Mən bunu düzgün başa düşürəm?',
        ch: 'Mən bunu düzgün başa düşürəm?'
      },
      {
        id: 456,
        sntc: "He's a musician",
        tr: 'O, musiqiçidir',
        ch: 'O, musiqiçidir'
      },
      {
        id: 457,
        sntc: 'Is time money?',
        tr: 'Vaxt puludur?',
        ch: 'Vaxt puludur?'
      },
      {
        id: 458,
        sntc: 'This lesson seems interesting',
        tr: 'Bu dərs maraqlı görünür',
        ch: 'Bu dərs maraqlı görünür'
      },
      {
        id: 459,
        sntc: 'She wants to go to the park',
        tr: 'O, parka getmək istəyir',
        ch: 'O, parka getmək istəyir'
      },
      {
        id: 460,
        sntc: 'How is it?',
        tr: 'Bu necədir?',
        ch: 'Bu necədir?'
      }
    ],
    [{
        id: 461,
        sntc: "I'm fond of this application thanks to my fantastic result",
        tr: 'Fantastik nəticəm sayəsində bu tətbiqi çox sevirəm',
        ch: 'Fantastik nəticəm sayəsində bu tətbiqi çox sevirəm'
      },
      {
        id: 462,
        sntc: "She isn't with us",
        tr: 'O bizimlə deyil',
        ch: 'O bizimlə deyil'
      },
      {
        id: 463,
        sntc: "Who's in the park?",
        tr: 'Parkda kimlər var?',
        ch: 'Parkda kimlər var?'
      },
      {
        id: 464,
        sntc: "He isn't busy. He's free",
        tr: 'O məşğul deyil. O azaddır',
        ch: 'O məşğul deyil. O azaddır'
      },
      {
        id: 465,
        sntc: "She's very optimistic",
        tr: 'O çox optimistdir',
        ch: 'O çox optimistdir'
      },
      {
        id: 466,
        sntc: 'This businessman is very rich',
        tr: 'Bu iş adamı çox zəngindir',
        ch: 'Bu iş adamı çox zəngindir'
      },
      {
        id: 467,
        sntc: "His wife doesn't do the shopping so often",
        tr: 'Onun həyat yoldaşı elə də tez-tez alış-veriş etmir',
        ch: 'Onun həyat yoldaşı elə də tez-tez alış-veriş etmir'
      },
      {
        id: 468,
        sntc: 'She needs it',
        tr: 'O, buna ehtiyac duyur',
        ch: 'O, buna ehtiyac duyur'
      },
      {
        id: 469,
        sntc: 'How many English words does your friend want to know?',
        tr: 'Dostunuz nə qədər ingilis sözü bilmək istəyir?',
        ch: 'Dostunuz nə qədər ingilis sözü bilmək istəyir?'
      },
      {
        id: 470,
        sntc: 'Money is important, too',
        tr: 'Pul da vacibdir',
        ch: 'Pul da vacibdir'
      }
    ],
    [{
        id: 471,
        sntc: 'Money is also important',
        tr: 'Pul da vacibdir',
        ch: 'Pul da vacibdir'
      },
      {
        id: 472,
        sntc: 'Is it sunny?',
        tr: 'Günəşlidir?',
        ch: 'Günəşlidir?'
      },
      {
        id: 473,
        sntc: 'Are you there?',
        tr: 'Sən ordasan?',
        ch: 'Sən ordasan?'
      },
      {
        id: 474,
        sntc: 'They need it',
        tr: 'Bu onlara lazımdır',
        ch: 'Bu onlara lazımdır'
      },
      {
        id: 475,
        sntc: 'How interesting is this magazine?',
        tr: 'Bu jurnal nə dərəcədə maraqlıdır?',
        ch: 'Bu jurnal nə dərəcədə maraqlıdır?'
      },
      {
        id: 476,
        sntc: 'Are these things so important?',
        tr: 'Bu şeylər çox vacibdir?',
        ch: 'Bu şeylər çox vacibdir?'
      },
      {
        id: 477,
        sntc: 'Is that decision worse?',
        tr: 'Bu qərar daha betərdir?',
        ch: 'Bu qərar daha betərdir?'
      },
      {
        id: 478,
        sntc: "We're in the park",
        tr: 'Biz parkdayıq',
        ch: 'Biz parkdayıq'
      },
      {
        id: 479,
        sntc: 'Is his video so funny?',
        tr: 'Onun videosu çox əyləncəlidir?',
        ch: 'Onun videosu çox əyləncəlidir?'
      },
      {
        id: 480,
        sntc: 'Do you need to do it this year?',
        tr: 'Sənə bunu bu il etmək lazımdır?',
        ch: 'Sənə bunu bu il etmək lazımdır?'
      }
    ],
    [{
        id: 481,
        sntc: "It isn't her recommendation",
        tr: 'Bu onun tövsiyəsi deyil',
        ch: 'Bu onun tövsiyəsi deyil'
      },
      {
        id: 482,
        sntc: 'Is the lesson useful?',
        tr: 'Dərs faydalıdır?',
        ch: 'Dərs faydalıdır?'
      },
      {
        id: 483,
        sntc: 'Do you often go there?',
        tr: 'Sən tez-tez ora gedirsən?',
        ch: 'Sən tez-tez ora gedirsən?'
      },
      {
        id: 484,
        sntc: "He's keen on foreign languages",
        tr: 'O, xarici dillərə həvəslidir',
        ch: 'O, xarici dillərə həvəslidir'
      },
      {
        id: 485,
        sntc: 'What helps you?',
        tr: 'Sizə nə kömək edir?',
        ch: 'Sizə nə kömək edir?'
      },
      {
        id: 486,
        sntc: 'What does your boss usually promise?',
        tr: 'Müdiriniz adətən nə vəd edir?',
        ch: 'Müdiriniz adətən nə vəd edir?'
      },
      {
        id: 487,
        sntc: 'I must write it down',
        tr: 'Mən bunu yazmalıyam',
        ch: 'Mən bunu yazmalıyam'
      },
      {
        id: 488,
        sntc: 'She also works there',
        tr: 'O da orada işləyir',
        ch: 'O da orada işləyir'
      },
      {
        id: 489,
        sntc: "He's on a business trip",
        tr: 'O, işgüzar səfərdədir',
        ch: 'O, işgüzar səfərdədir'
      },
      {
        id: 490,
        sntc: 'Do I have enough money?',
        tr: 'Mənim kifayət qədər pulum var?',
        ch: 'Mənim kifayət qədər pulum var?'
      }
    ],
    [{
        id: 491,
        sntc: 'I like this advice',
        tr: 'Bu məsləhət xoşuma gəlir',
        ch: 'Bu məsləhət xoşuma gəlir'
      },
      {
        id: 492,
        sntc: 'How do you usually spend your free time?',
        tr: 'Adətən boş vaxtını necə keçirirsən?',
        ch: 'Adətən boş vaxtını necə keçirirsən?'
      },
      {
        id: 493,
        sntc: "It's a very useful example",
        tr: 'Bu çox faydalı nümunədir',
        ch: 'Bu çox faydalı nümunədir'
      },
      {
        id: 494,
        sntc: 'Her husband is in hospital',
        tr: 'Onun əri xəstəxanadadır',
        ch: 'Onun əri xəstəxanadadır'
      },
      {
        id: 495,
        sntc: 'Is this method new?',
        tr: 'Bu üsul yenidir?',
        ch: 'Bu üsul yenidir?'
      },
      {
        id: 496,
        sntc: "She'd like to live in another place",
        tr: 'O, başqa bir yerdə yaşamaq istərdi',
        ch: 'O, başqa bir yerdə yaşamaq istərdi'
      },
      {
        id: 497,
        sntc: 'Her words inspire us',
        tr: 'Onun sözləri bizi ruhlandırır',
        ch: 'Onun sözləri bizi ruhlandırır'
      },
      {
        id: 498,
        sntc: 'What kind of examples does his teacher give?',
        tr: 'Onun müəllimi necə nümunələr verir?',
        ch: 'Onun müəllimi necə nümunələr verir?'
      },
      {
        id: 499,
        sntc: 'How often does she go to the cinema?',
        tr: 'O, kinoteatra nə sıxlıqda gedir?',
        ch: 'O, kinoteatra nə sıxlıqda gedir?'
      },
      {
        id: 500,
        sntc: 'I want to speak English fluently and correctly',
        tr: 'İngilis dilində səlis və düzgün danışmaq istəyirəm',
        ch: 'İngilis dilində səlis və düzgün danışmaq istəyirəm'
      }
    ],
    [{
        id: 501,
        sntc: "I'll be grateful to you for your help",
        tr: 'Köməyinizə görə sizə minnətdar olacağam',
        ch: 'Köməyinizə görə sizə minnətdar olacağam'
      },
      {
        id: 502,
        sntc: "He'll say it again",
        tr: 'O, bunu yenə deyəcək',
        ch: 'O, bunu yenə deyəcək'
      },
      {
        id: 503,
        sntc: "We'll go on holiday soon",
        tr: 'Tezliklə bayrama gedəcəyik',
        ch: 'Tezliklə bayrama gedəcəyik'
      },
      {
        id: 504,
        sntc: "We'll create a very positive atmosphere",
        tr: 'Biz çox müsbət ab-hava yaradacıq',
        ch: 'Biz çox müsbət ab-hava yaradacıq'
      },
      {
        id: 505,
        sntc: "I'll maximize the profit",
        tr: 'Mənfəəti maksimum dərəcədə artıracağam',
        ch: 'Mənfəəti maksimum dərəcədə artıracağam'
      },
      {
        id: 506,
        sntc: "It'll depend not only on us",
        tr: 'Bu yalnız bizdən asılı olmayacaq',
        ch: 'Bu yalnız bizdən asılı olmayacaq'
      },
      {
        id: 507,
        sntc: "He'll create something new",
        tr: 'O, yeni bir şey yaradacaq',
        ch: 'O, yeni bir şey yaradacaq'
      },
      {
        id: 508,
        sntc: "It'll change your point of view",
        tr: 'Bu, baxışınızı dəyişəcək',
        ch: 'Bu, baxışınızı dəyişəcək'
      },
      {
        id: 509,
        sntc: "I think I'll have more free time",
        tr: 'Düşünürəm ki, daha çox boş vaxtım olacaq',
        ch: 'Düşünürəm ki, daha çox boş vaxtım olacaq'
      },
      {
        id: 510,
        sntc: "They'll have another alternative",
        tr: 'Onların başqa bir alternativi olacaq',
        ch: 'Onların başqa bir alternativi olacaq'
      }
    ],
    [{
        id: 511,
        sntc: 'The authorities will regulate it somehow',
        tr: 'Hakimiyyət bunu hansısa yolla tənzimləyəcək',
        ch: 'Hakimiyyət bunu hansısa yolla tənzimləyəcək'
      },
      {
        id: 512,
        sntc: 'My friend and will hurry up',
        tr: 'Dostum və mən tələsəcəyik',
        ch: 'Dostum və mən tələsəcəyik'
      },
      {
        id: 513,
        sntc: 'Everyone will refuse to do it',
        tr: 'Hər kəs bunu etməkdən imtina edəcək',
        ch: 'Hər kəs bunu etməkdən imtina edəcək'
      },
      {
        id: 514,
        sntc: 'Our sales manager will calculate it',
        tr: 'Satış menecerimiz bunu hesablayacaq',
        ch: 'Satış menecerimiz bunu hesablayacaq'
      },
      {
        id: 515,
        sntc: 'Everyone will be shocked',
        tr: 'Hamı şoka düşəcək',
        ch: 'Hamı şoka düşəcək'
      },
      {
        id: 516,
        sntc: 'His father will borrow this money',
        tr: 'Atası bu pulu borc alacaq',
        ch: 'Atası bu pulu borc alacaq'
      },
      {
        id: 517,
        sntc: 'My boss will forget it soon',
        tr: 'Mənim müdirim tezliklə bunu unudacaq',
        ch: 'Mənim müdirim tezliklə bunu unudacaq'
      },
      {
        id: 518,
        sntc: 'My friend and I will devote more free time to our health',
        tr: 'Dostumla mən sağlamlığımıza daha çox boş vaxt ayıracağıq',
        ch: 'Dostumla mən sağlamlığımıza daha çox boş vaxt ayıracağıq'
      },
      {
        id: 519,
        sntc: 'Everyone will be disappointed',
        tr: 'Hər kəs məyus olacaq',
        ch: 'Hər kəs məyus olacaq'
      },
      {
        id: 520,
        sntc: "You know it isn't in the last place",
        tr: 'Sən bilirsən bu axırıncı yerdə deyil',
        ch: 'Sən bilirsən bu axırıncı yerdə deyil'
      }
    ],
    [{
        id: 521,
        sntc: "It won't lead to success",
        tr: 'Bu uğura gətirib çıxarmayacaq',
        ch: 'Bu uğura gətirib çıxarmayacaq'
      },
      {
        id: 522,
        sntc: "We won't swim there",
        tr: 'Biz orada üzməyəcəyik',
        ch: 'Biz orada üzməyəcəyik'
      },
      {
        id: 523,
        sntc: "He won't pass this test",
        tr: 'O, bu sınaqdan keçməyəcək',
        ch: 'O, bu sınaqdan keçməyəcək'
      },
      {
        id: 524,
        sntc: "They won't find a solution to such an important problem soon",
        tr: 'Onlar belə bir vacib problemin tezliklə həllini tapmayacaqlar',
        ch: 'Onlar belə bir vacib problemin tezliklə həllini tapmayacaqlar'
      },
      {
        id: 525,
        sntc: "We won't complain about it",
        tr: 'Biz bundan şikayət etmərik',
        ch: 'Biz bundan şikayət etmərik'
      },
      {
        id: 526,
        sntc: "I won't see her anymore",
        tr: 'Daha onu görməyəcəm',
        ch: 'Daha onu görməyəcəm'
      },
      {
        id: 527,
        sntc: "We won't stop",
        tr: 'Biz dayanmayacağıq',
        ch: 'Biz dayanmayacağıq'
      },
      {
        id: 528,
        sntc: "I won't recommend this book",
        tr: 'Bu kitabı tövsiyə etmərəm',
        ch: 'Bu kitabı tövsiyə etmərəm'
      },
      {
        id: 529,
        sntc: "I won't deny it",
        tr: 'Bunu inkar etmərəm',
        ch: 'Bunu inkar etmərəm'
      },
      {
        id: 530,
        sntc: "He won't guarantee it",
        tr: 'O buna zəmanət verməyəcək',
        ch: 'O buna zəmanət verməyəcək'
      }
    ],
    [{
        id: 531,
        sntc: "The girl won't learn everything so quickly",
        tr: 'Qız hər şeyi belə tez öyrənməyəcək',
        ch: 'Qız hər şeyi belə tez öyrənməyəcək'
      },
      {
        id: 532,
        sntc: "The day won't be rainy",
        tr: 'Gün yağışlı olmayacaq',
        ch: 'Gün yağışlı olmayacaq'
      },
      {
        id: 533,
        sntc: "His grandfather won't know it",
        tr: 'Onun babası bunu bilməyəcək',
        ch: 'Onun babası bunu bilməyəcək'
      },
      {
        id: 534,
        sntc: "My colleagues won't support this initiative",
        tr: 'Həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər',
        ch: 'Həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər'
      },
      {
        id: 535,
        sntc: "It won't be the only right method",
        tr: 'Bu yeganə düzgün metod olmayacaq',
        ch: 'Bu yeganə düzgün metod olmayacaq'
      },
      {
        id: 536,
        sntc: "This time won't be convenient for me",
        tr: 'Bu vaxt mənim üçün əlverişli olmayacaq',
        ch: 'Bu vaxt mənim üçün əlverişli olmayacaq'
      },
      {
        id: 537,
        sntc: "This profession won't be popular any longer",
        tr: 'Bu sənət daha populyar olmayacaq',
        ch: 'Bu sənət daha populyar olmayacaq'
      },
      {
        id: 538,
        sntc: "This money won't be enough",
        tr: 'Bu pul kifayət etməyəcək',
        ch: 'Bu pul kifayət etməyəcək'
      },
      {
        id: 539,
        sntc: "Other people won't help you now",
        tr: 'Digər insanlar indi sizə kömək etməyəcək',
        ch: 'Digər insanlar indi sizə kömək etməyəcək'
      },
      {
        id: 540,
        sntc: "The students won't laugh at it",
        tr: 'Şagirdlər buna gülməyəcəklər',
        ch: 'Şagirdlər buna gülməyəcəklər'
      }
    ],
    [{
        id: 541,
        sntc: 'Will it be possible at the end of the meeting?',
        tr: 'Bu görüşün sonunda mümkün olacaq?',
        ch: 'Bu görüşün sonunda mümkün olacaq?'
      },
      {
        id: 542,
        sntc: 'Will you inform your assistant?',
        tr: 'Köməkçinizə məlumat verəcəksiniz?',
        ch: 'Köməkçinizə məlumat verəcəksiniz?'
      },
      {
        id: 543,
        sntc: 'Will you celebrate your birthday?',
        tr: 'Ad gününü qeyd edəcəksən?',
        ch: 'Ad gününü qeyd edəcəksən?'
      },
      {
        id: 544,
        sntc: 'She always criticizes him',
        tr: 'O, həmişə onu tənqid edir',
        ch: 'O, həmişə onu tənqid edir'
      },
      {
        id: 545,
        sntc: 'Will I have an advanced level in English?',
        tr: 'İngilis dilində qabaqcıl səviyyəyə malik olacam?',
        ch: 'İngilis dilində qabaqcıl səviyyəyə malik olacam?'
      },
      {
        id: 546,
        sntc: 'Will you cook it in the morning?',
        tr: 'Bunu səhər bişirəcəksən?',
        ch: 'Bunu səhər bişirəcəksən?'
      },
      {
        id: 547,
        sntc: 'Will they point at my mistakes',
        tr: 'Onlar səhvlərimə işarə edəcəklər?',
        ch: 'Onlar səhvlərimə işarə edəcəklər?'
      },
      {
        id: 548,
        sntc: 'Will they have a commercial success?',
        tr: 'Onlar kommersiya uğuru qazanacaqlar?',
        ch: 'Onlar kommersiya uğuru qazanacaqlar?'
      },
      {
        id: 549,
        sntc: 'Are those exercises useless?',
        tr: 'O məşğuliyyətlər faydasızdır?',
        ch: 'O məşğuliyyətlər faydasızdır?'
      },
      {
        id: 550,
        sntc: 'Will you be available in the evening?',
        tr: 'Axşam bekar olacaqsan?',
        ch: 'Axşam bekar olacaqsan?'
      }
    ],
    [{
        id: 551,
        sntc: 'She reads English books',
        tr: 'O, ingilis kitablarını oxuyur',
        ch: 'O, ingilis kitablarını oxuyur'
      },
      {
        id: 552,
        sntc: 'Will it change their attitude to health?',
        tr: 'Bu, onların sağlamlığa olan münasibətini dəyişəcək?',
        ch: 'Bu, onların sağlamlığa olan münasibətini dəyişəcək?'
      },
      {
        id: 553,
        sntc: "It'll be necessary to check it one more time",
        tr: 'Bunu bir dəfədə yoxlamaq lazım olacaq',
        ch: 'Bunu bir dəfədə yoxlamaq lazım olacaq'
      },
      {
        id: 554,
        sntc: "I'm interested in it",
        tr: 'Bu, mənə maraqlıdır',
        ch: 'Bu, mənə maraqlıdır'
      },
      {
        id: 555,
        sntc: 'Will it be possible tomorrow?',
        tr: 'Bu, sabah mümkün olacaq?',
        ch: 'Bu, sabah mümkün olacaq?'
      },
      {
        id: 556,
        sntc: 'Will it be necessary to sign this report?',
        tr: 'Bu hesabatı imzalamaq lazım gələcək?',
        ch: 'Bu hesabatı imzalamaq lazım gələcək?'
      },
      {
        id: 557,
        sntc: 'We live in this place',
        tr: 'Biz bu yerdə yaşayırıq',
        ch: 'Biz bu yerdə yaşayırıq'
      },
      {
        id: 558,
        sntc: 'Will it change their attitude to these things?',
        tr: 'Bu, onların bu şeylərə münasibətini dəyişəcək?',
        ch: 'Bu, onların bu şeylərə münasibətini dəyişəcək?'
      },
      {
        id: 559,
        sntc: 'Will you be interested in it?',
        tr: 'Sən bununla maraqlanacaqsan?',
        ch: 'Sən bununla maraqlanacaqsan?'
      },
      {
        id: 560,
        sntc: 'Will it get dark soon?',
        tr: 'Tezliklə qaranlıq gələcək?',
        ch: 'Tezliklə qaranlıq gələcək?'
      }
    ],
    [{
        id: 561,
        sntc: 'Why will you fly to another place?',
        tr: 'Sən niyə başqa yerə uçacaqsan?',
        ch: 'Sən niyə başqa yerə uçacaqsan?'
      },
      {
        id: 562,
        sntc: 'How much will it cost?',
        tr: 'Bunun qiyməti nə qədər olacaq?',
        ch: 'Bunun qiyməti nə qədər olacaq?'
      },
      {
        id: 563,
        sntc: "I'll manage to solve this problem",
        tr: 'Mən bu problemi həll etməyi bacararam',
        ch: 'Mən bu problemi həll etməyi bacararam'
      },
      {
        id: 564,
        sntc: 'When will she join us?',
        tr: 'O, bizə nə vaxt qoşulacaq?',
        ch: 'O, bizə nə vaxt qoşulacaq?'
      },
      {
        id: 565,
        sntc: 'How will you be able to solve this problem?',
        tr: 'Sən bu problemi necə həll edə biləcəksən?',
        ch: 'Sən bu problemi necə həll edə biləcəksən?'
      },
      {
        id: 566,
        sntc: 'What will change?',
        tr: 'Nə dəyişiləcək?',
        ch: 'Nə dəyişiləcək?'
      },
      {
        id: 567,
        sntc: 'What time will you see him?',
        tr: 'Sən onu nə vaxt görəcəksən?',
        ch: 'Sən onu nə vaxt görəcəksən?'
      },
      {
        id: 568,
        sntc: 'What kind of literature will we need?',
        tr: 'Bizə hansı ədəbiyyat lazım olacaq?',
        ch: 'Bizə hansı ədəbiyyat lazım olacaq?'
      },
      {
        id: 569,
        sntc: 'How much will it be?',
        tr: 'Bu nə qədər olacaq?',
        ch: 'Bu nə qədər olacaq?'
      },
      {
        id: 570,
        sntc: 'When will you come back?',
        tr: 'Sən nə vaxt qayıdacaqsan?',
        ch: 'Sən nə vaxt qayıdacaqsan?'
      }
    ],
    [{
        id: 571,
        sntc: 'Why will he regret it?',
        tr: 'O, buna görə nə üçün peşman olacaq?',
        ch: 'O, buna görə nə üçün peşman olacaq?'
      },
      {
        id: 572,
        sntc: 'How regularly will the employees make this kind of reports?',
        tr: 'İşçilər bu cür hesabatları nə qədər davamlı edəcəklər?',
        ch: 'İşçilər bu cür hesabatları nə qədər davamlı edəcəklər?'
      },
      {
        id: 573,
        sntc: 'How will the student be able to improve the result?',
        tr: 'Şagird nəticəni necə yaxşılaşdıra biləcək?',
        ch: 'Şagird nəticəni necə yaxşılaşdıra biləcək?'
      },
      {
        id: 574,
        sntc: 'How much money will your friend owe you?',
        tr: 'Dostunun sənə nə qədər borcu olacaq?',
        ch: 'Dostunun sənə nə qədər borcu olacaq?'
      },
      {
        id: 575,
        sntc: 'How many places will you visit?',
        tr: 'Sən nə qədər yeri ziyarət edəcəksən?',
        ch: 'Sən nə qədər yeri ziyarət edəcəksən?'
      },
      {
        id: 576,
        sntc: 'Why will this business be successful?',
        tr: 'Bu biznes nə üçün uğurlu olacaq?',
        ch: 'Bu biznes nə üçün uğurlu olacaq?'
      },
      {
        id: 577,
        sntc: 'Whose offer will they take?',
        tr: 'Onlar kimin təklifini qəbul edəcəklər?',
        ch: 'Onlar kimin təklifini qəbul edəcəklər?'
      },
      {
        id: 578,
        sntc: "He's away. He's in another city",
        tr: 'O, burada yoxdur. O, başqa şəhərdədir',
        ch: 'O, burada yoxdur. O, başqa şəhərdədir'
      },
      {
        id: 579,
        sntc: 'When will your brother start preparing for his exams?',
        tr: 'Sənin qardaşın imtahanlarına hazırlaşmağa nə vaxt başlayacaq?',
        ch: 'Sənin qardaşın imtahanlarına hazırlaşmağa nə vaxt başlayacaq?'
      },
      {
        id: 580,
        sntc: 'It’ll be in the same place',
        tr: 'Bu həmin yerdə olacaq',
        ch: 'Bu həmin yerdə olacaq'
      }
    ],
    [{
        id: 581,
        sntc: 'I’ll continue working here',
        tr: 'Mən burada işləməyə davam edəcəyəm',
        ch: 'Mən burada işləməyə davam edəcəyəm'
      },
      {
        id: 582,
        sntc: 'They’ll be able to resolve this conflict',
        tr: 'Onlar bu münaqişəni həll edə biləcəklər',
        ch: 'Onlar bu münaqişəni həll edə biləcəklər'
      },
      {
        id: 583,
        sntc: 'You’ll hear it at the beginning of the movie',
        tr: 'Sən bunu filmin əvvəlində eşidəcəksən',
        ch: 'Sən bunu filmin əvvəlində eşidəcəksən'
      },
      {
        id: 584,
        sntc: 'You’ll see this advertisement there',
        tr: 'Siz bu reklamı orada görəcəksiniz',
        ch: 'Siz bu reklamı orada görəcəksiniz'
      },
      {
        id: 585,
        sntc: "I won't reinvent the wheel",
        tr: 'Mən təkəri yenidən icad etməyəcəm',
        ch: 'Mən təkəri yenidən icad etməyəcəm'
      },
      {
        id: 586,
        sntc: 'I’ll join you with great pleasure',
        tr: 'Mən böyük məmnuniyyətlə sənə qoşulacam',
        ch: 'Mən böyük məmnuniyyətlə sənə qoşulacam'
      },
      {
        id: 587,
        sntc: "My level won't be Elementary",
        tr: 'Mənim səviyyəm elementar olmayacaq',
        ch: 'Mənim səviyyəm elementar olmayacaq'
      },
      {
        id: 588,
        sntc: 'Students often confuse these words but, certainly, they have a different meaning',
        tr: 'Şagirdlər tez-tez bu sözləri qarışdırırlar, lakin, əlbəttə, onlar başqa məna daşıyır',
        ch: 'Şagirdlər tez-tez bu sözləri qarışdırırlar, lakin, əlbəttə, onlar başqa məna daşıyır'
      },
      {
        id: 589,
        sntc: 'When will your father leave home?',
        tr: 'Atanız evi nə vaxt tərk edəcək?',
        ch: 'Atanız evi nə vaxt tərk edəcək?'
      },
      {
        id: 590,
        sntc: "It'll frighten them",
        tr: 'Bu onları qorxudacaq',
        ch: 'Bu onları qorxudacaq'
      }
    ],
    [{
        id: 591,
        sntc: 'They’ll change their point of view',
        tr: 'Onlar baxışlarını dəyişəcəklər',
        ch: 'Onlar baxışlarını dəyişəcəklər'
      },
      {
        id: 592,
        sntc: "I won't change my attitude to her",
        tr: 'Mən ona olan münasibətimi dəyişməyəcəm',
        ch: 'Mən ona olan münasibətimi dəyişməyəcəm'
      },
      {
        id: 593,
        sntc: "We won't take part in this competition",
        tr: 'Biz bu yarışda iştirak etməyəcik',
        ch: 'Biz bu yarışda iştirak etməyəcik'
      },
      {
        id: 594,
        sntc: 'Everyone has this kind of problems',
        tr: 'Hər kəsin bu cür problemləri var',
        ch: 'Hər kəsin bu cür problemləri var'
      },
      {
        id: 595,
        sntc: 'Will it last for more than two hours?',
        tr: 'Bu iki saatdan çox davam edəcək?',
        ch: 'Bu iki saatdan çox davam edəcək?'
      },
      {
        id: 596,
        sntc: 'Everyone will express their point of view',
        tr: 'Hər kəs öz fikrini bildirəcək',
        ch: 'Hər kəs öz fikrini bildirəcək'
      },
      {
        id: 597,
        sntc: 'They’ll be able to find it everywhere',
        tr: 'Onlar bunu hər yerdə tapa biləcəklər',
        ch: 'Onlar bunu hər yerdə tapa biləcəklər'
      },
      {
        id: 598,
        sntc: 'We’ll always support you',
        tr: 'Biz həmişə sizə dəstək olacağıq',
        ch: 'Biz həmişə sizə dəstək olacağıq'
      },
      {
        id: 599,
        sntc: 'This news will impress him',
        tr: 'Bu xəbər ona təsir buraxacaq',
        ch: 'Bu xəbər ona təsir buraxacaq'
      },
      {
        id: 600,
        sntc: 'How much money will you earn?',
        tr: 'Sən nə qədər pul qazanacaqsan?',
        ch: 'Sən nə qədər pul qazanacaqsan?'
      }
    ],
    [{
        id: 601,
        sntc: 'Will it be a potential threat?',
        tr: 'Bu potensial təhlükə olacaq?',
        ch: 'Bu potensial təhlükə olacaq?'
      },
      {
        id: 602,
        sntc: 'I’ll be grateful to you for it',
        tr: 'Mən buna görə sənə minnətdar olacam',
        ch: 'Mən buna görə sənə minnətdar olacam'
      },
      {
        id: 603,
        sntc: 'Will I improve my English?',
        tr: 'Mən ingilis dilimi yaxşılaşdıracam?',
        ch: 'Mən ingilis dilimi yaxşılaşdıracam?'
      },
      {
        id: 604,
        sntc: 'How much money will you spend on it?',
        tr: 'Ona nə qədər pul xərcləyəcəksən?',
        ch: 'Ona nə qədər pul xərcləyəcəksən?'
      },
      {
        id: 605,
        sntc: 'Will you have a high salary?',
        tr: 'Yüksək maaşınız olacaq?',
        ch: 'Yüksək maaşınız olacaq?'
      },
      {
        id: 606,
        sntc: "She won't translate all the text without a dictionary",
        tr: 'O, bütün mətni lüğətsiz tərcümə etməyəcək',
        ch: 'O, bütün mətni lüğətsiz tərcümə etməyəcək'
      },
      {
        id: 607,
        sntc: 'Will we speak English correctly and automatically?',
        tr: 'İngilis dilində düzgün və avtomatik danışacıq?',
        ch: 'İngilis dilində düzgün və avtomatik danışacıq?'
      },
      {
        id: 608,
        sntc: 'We’ll try to double our sales',
        tr: 'Satışımızı iki qat etməyə çalışacağıq',
        ch: 'Satışımızı iki qat etməyə çalışacağıq'
      },
      {
        id: 609,
        sntc: 'How often will you be in that place?',
        tr: 'Sən həmin yerdə nə sıxlıqda olacaqsan?',
        ch: 'Sən həmin yerdə nə sıxlıqda olacaqsan?'
      },
      {
        id: 610,
        sntc: 'This worker will get tired soon',
        tr: 'Bu işçi tezliklə yorulacaq',
        ch: 'Bu işçi tezliklə yorulacaq'
      }
    ],
    [{
        id: 611,
        sntc: 'I’ll be proud of your results',
        tr: 'Mən sənin nəticələrinlə fəxr edəcəm',
        ch: 'Mən sənin nəticələrinlə fəxr edəcəm'
      },
      {
        id: 612,
        sntc: 'How will you manage to find a solution to such a difficult problem?',
        tr: 'Belə çətin problemin həllini necə tapa biləcəksən?',
        ch: 'Belə çətin problemin həllini necə tapa biləcəksən?'
      },
      {
        id: 613,
        sntc: 'We’ll support this initiative',
        tr: 'Biz bu təşəbbüsü dəstəkləyəcəyik',
        ch: 'Biz bu təşəbbüsü dəstəkləyəcəyik'
      },
      {
        id: 614,
        sntc: 'Will the students look it up in a dictionary?',
        tr: 'Tələbələr bunu lüğətdə baxacaqlar?',
        ch: 'Tələbələr bunu lüğətdə baxacaqlar?'
      },
      {
        id: 615,
        sntc: 'I’ll look up this phrase in a dictionary',
        tr: 'Mən bu ifadəyə lüğətdə baxacam',
        ch: 'Mən bu ifadəyə lüğətdə baxacam'
      },
      {
        id: 616,
        sntc: 'Will it be such an important event?',
        tr: 'Bu, belə bir vacib hadisə olacaq?',
        ch: 'Bu, belə bir vacib hadisə olacaq?'
      },
      {
        id: 617,
        sntc: 'She’ll follow your advice',
        tr: 'O, sənin məsləhətinə əməl edəcək',
        ch: 'O, sənin məsləhətinə əməl edəcək'
      },
      {
        id: 618,
        sntc: "It'll be a standard procedure",
        tr: 'Bu standart prosedur olacaq',
        ch: 'Bu standart prosedur olacaq'
      },
      {
        id: 619,
        sntc: 'Will it be necessary to sign this report?',
        tr: 'Bu hesabatı imzalamaq lazım olacaq?',
        ch: 'Bu hesabatı imzalamaq lazım olacaq?'
      },
      {
        id: 620,
        sntc: "It won't be the only correct answer",
        tr: 'Bu, yeganə düzgün cavab olmayacaq',
        ch: 'Bu, yeganə düzgün cavab olmayacaq'
      }
    ],
    [{
        id: 621,
        sntc: 'He’ll miss her',
        tr: 'O, onun üçün darıxacaq',
        ch: 'O, onun üçün darıxacaq'
      },
      {
        id: 622,
        sntc: 'My elder brother and I will be there',
        tr: 'Mənim böyük qardaşım və mən orada olacağıq',
        ch: 'Mənim böyük qardaşım və mən orada olacağıq'
      },
      {
        id: 623,
        sntc: 'Will it last for two hours?',
        tr: 'Bu, iki saat davam edəcək?',
        ch: 'Bu, iki saat davam edəcək?'
      },
      {
        id: 624,
        sntc: 'I think this musician won’t become popular',
        tr: 'Mən düşünürəm ki, bu musiqiçi populyar olmayacaq',
        ch: 'Mən düşünürəm ki, bu musiqiçi populyar olmayacaq'
      },
      {
        id: 625,
        sntc: 'I’ll manage to double our sales despite the crisis',
        tr: 'Böhrana baxmayaraq satışlarımızı ikiqat artırmağı bacaracam',
        ch: 'Böhrana baxmayaraq satışlarımızı ikiqat artırmağı bacaracam'
      },
      {
        id: 626,
        sntc: 'I’ll speak English on a regular basis',
        tr: 'Mən ingilis dilində müntəzəm olaraq danışacam',
        ch: 'Mən ingilis dilində müntəzəm olaraq danışacam'
      },
      {
        id: 627,
        sntc: 'Will you be interested in it?',
        tr: 'Sən bununla maraqlanacaqsan?',
        ch: 'Sən bununla maraqlanacaqsan?'
      },
      {
        id: 628,
        sntc: 'I’ll be able to improve my English significantly',
        tr: 'Mən ingilis dilimi əhəmiyyətli dərəcədə yaxşılaşdıra biləcəyəm',
        ch: 'Mən ingilis dilimi əhəmiyyətli dərəcədə yaxşılaşdıra biləcəyəm'
      },
      {
        id: 629,
        sntc: 'I’ll look for a new job',
        tr: 'Mən yeni iş axtaracam',
        ch: 'Mən yeni iş axtaracam'
      },
      {
        id: 630,
        sntc: "This approach won't be professional enough",
        tr: 'Bu yanaşma kifayət qədər peşəkar olmayacaq',
        ch: 'Bu yanaşma kifayət qədər peşəkar olmayacaq'
      }
    ],
    [{
        id: 631,
        sntc: 'I’ll spend so much money on it',
        tr: 'Mən buna çox pul xərcləyəcəm',
        ch: 'Mən buna çox pul xərcləyəcəm'
      },
      {
        id: 632,
        sntc: 'Everyone will laugh at it',
        tr: 'Hər kəs buna güləcək',
        ch: 'Hər kəs buna güləcək'
      },
      {
        id: 633,
        sntc: 'The authorities will control it',
        tr: 'Hakimiyyət bunu idarə edəcək',
        ch: 'Hakimiyyət bunu idarə edəcək'
      },
      {
        id: 634,
        sntc: 'I think I’ll find the keys there',
        tr: 'Mən düşünürəm ki, açarları orada tapacam',
        ch: 'Mən düşünürəm ki, açarları orada tapacam'
      },
      {
        id: 635,
        sntc: 'How will you celebrate your birthday?',
        tr: 'Ad gününü necə qeyd edəcəksən?',
        ch: 'Ad gününü necə qeyd edəcəksən?'
      },
      {
        id: 636,
        sntc: 'Will you be busy tomorrow morning?',
        tr: 'Sabah səhər məşğul olacaqsan?',
        ch: 'Sabah səhər məşğul olacaqsan?'
      },
      {
        id: 637,
        sntc: 'I like this advice',
        tr: 'Bu məsləhət xoşuma gəlir',
        ch: 'Bu məsləhət xoşuma gəlir'
      },
      {
        id: 638,
        sntc: 'Is the game interesting?',
        tr: 'Oyun maraqlıdır?',
        ch: 'Oyun maraqlıdır?'
      },
      {
        id: 639,
        sntc: 'Will this knowledge be enough?',
        tr: 'Bu bilik kifayət edəcək?',
        ch: 'Bu bilik kifayət edəcək?'
      },
      {
        id: 640,
        sntc: 'I’ll try to find more time for English',
        tr: 'Mən ingilis dili üçün daha çox vaxt tapmağa çalışacam',
        ch: 'Mən ingilis dili üçün daha çox vaxt tapmağa çalışacam'
      }
    ],
    [{
        id: 641,
        sntc: "The guests won't notice our absence",
        tr: 'Qonaqlar bizim yoxluğumuzu görməyəcəklər',
        ch: 'Qonaqlar bizim yoxluğumuzu görməyəcəklər'
      },
      {
        id: 642,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        ch: 'Onlar sənə nə demək istəyirlər?'
      },
      {
        id: 643,
        sntc: 'Everyone will look happy',
        tr: 'Hər kəs xoşbəxt görünəcək',
        ch: 'Hər kəs xoşbəxt görünəcək'
      },
      {
        id: 644,
        sntc: 'She’ll keep this secret',
        tr: 'O, bu sirri saxlayacaq',
        ch: 'O, bu sirri saxlayacaq'
      },
      {
        id: 645,
        sntc: "They won't find a solution to this problem",
        tr: 'Onlar bu problemdən çıxış yolu tapmayacaqlar',
        ch: 'Onlar bu problemdən çıxış yolu tapmayacaqlar'
      },
      {
        id: 646,
        sntc: 'This app will help you learn English for free',
        tr: 'Bu program sizə ingilis dilini pulsuz öyrənməyə kömək edəcək',
        ch: 'Bu program sizə ingilis dilini pulsuz öyrənməyə kömək edəcək'
      },
      {
        id: 647,
        sntc: 'I’ll try not to spend so much money',
        tr: 'Mən çalışaram çox pul xərcləməyim',
        ch: 'Mən çalışaram çox pul xərcləməyim'
      },
      {
        id: 648,
        sntc: 'This subject is too difficult for me',
        tr: 'Bu mövzu mənim üçün çox çətindir',
        ch: 'Bu mövzu mənim üçün çox çətindir'
      },
      {
        id: 649,
        sntc: 'They study very hard',
        tr: 'Onlar çox ciddi öyrənirlər',
        ch: 'Onlar çox ciddi öyrənirlər'
      },
      {
        id: 650,
        sntc: "I won't change my attitude to this thing",
        tr: 'Mən bu şeyə münasibətimi dəyişməyəcəm',
        ch: 'Mən bu şeyə münasibətimi dəyişməyəcəm'
      }
    ],
    [{
        id: 651,
        sntc: 'She needed to get in touch with him',
        tr: 'Onun onunla əlaqə qurmağa ehtiyacı var idi',
        ch: 'Onun onunla əlaqə qurmağa ehtiyacı var idi'
      },
      {
        id: 652,
        sntc: 'He believed her',
        tr: 'O, ona inandı',
        ch: 'O, ona inandı'
      },
      {
        id: 653,
        sntc: 'I switched on the computer',
        tr: 'Mən kompüteri qoşdum',
        ch: 'Mən kompüteri qoşdum'
      },
      {
        id: 654,
        sntc: 'I really liked your lessons',
        tr: 'Dərsləriniz həqiqətən xoşuma gəldi',
        ch: 'Dərsləriniz həqiqətən xoşuma gəldi'
      },
      {
        id: 655,
        sntc: 'He repeated that sentence',
        tr: 'O, həmin cümləni təkrarladı',
        ch: 'O, həmin cümləni təkrarladı'
      },
      {
        id: 656,
        sntc: 'I revised your lessons one more time',
        tr: 'Mən sizin dərslərinizə bir dəfə də yenidən baxdım',
        ch: 'Mən sizin dərslərinizə bir dəfə də yenidən baxdım'
      },
      {
        id: 657,
        sntc: 'I followed your advice',
        tr: 'Mən sizin məsləhətinizə əməl etdim',
        ch: 'Mən sizin məsləhətinizə əməl etdim'
      },
      {
        id: 658,
        sntc: 'I continued learning English here',
        tr: 'Mən ingilis dilini burada öyrənməyə davam etdim',
        ch: 'Mən ingilis dilini burada öyrənməyə davam etdim'
      },
      {
        id: 659,
        sntc: 'He died last year',
        tr: 'O, ötən il vəfat etdi',
        ch: 'O, ötən il vəfat etdi'
      },
      {
        id: 660,
        sntc: 'I created this app two years ago',
        tr: 'Mən bu tətbiqi iki il əvvəl yaratmışam',
        ch: 'Mən bu tətbiqi iki il əvvəl yaratmışam'
      }
    ],
    [{
        id: 661,
        sntc: 'I remembered one very important thing',
        tr: 'Çox vacib bir şey yadıma düşdü',
        ch: 'Çox vacib bir şey yadıma düşdü'
      },
      {
        id: 662,
        sntc: 'I followed your recommendation',
        tr: 'Mən sizin tövsiyənizə əməl etdim',
        ch: 'Mən sizin tövsiyənizə əməl etdim'
      },
      {
        id: 663,
        sntc: 'I returned home',
        tr: 'Mən evə qayıtdım',
        ch: 'Mən evə qayıtdım'
      },
      {
        id: 664,
        sntc: 'Everything remained the same',
        tr: 'Hər şey əvvəlki kimi qaldı',
        ch: 'Hər şey əvvəlki kimi qaldı'
      },
      {
        id: 665,
        sntc: 'He reached such a high level',
        tr: 'O, çox yüksək səviyyəyə çatdı',
        ch: 'O, çox yüksək səviyyəyə çatdı'
      },
      {
        id: 666,
        sntc: 'I passed the test ',
        tr: 'Mən sınaqdan keçdim',
        ch: 'Mən sınaqdan keçdim'
      },
      {
        id: 667,
        sntc: 'It required more efforts',
        tr: 'Bu, daha çox səy tələb edirdi',
        ch: 'Bu, daha çox səy tələb edirdi'
      },
      {
        id: 668,
        sntc: 'They killed him',
        tr: 'Onlar onu öldürdülər',
        ch: 'Onlar onu öldürdülər'
      },
      {
        id: 669,
        sntc: 'I received this letter',
        tr: 'Mən bu məktubu aldım',
        ch: 'Mən bu məktubu aldım'
      },
      {
        id: 670,
        sntc: 'He recommended it to us',
        tr: 'O, bunu bizə tövsiyə etdi',
        ch: 'O, bunu bizə tövsiyə etdi'
      }
    ],
    [{
        id: 671,
        sntc: 'He invited us to his birthday',
        tr: 'O, bizi ad gününə dəvət etdi',
        ch: 'O, bizi ad gününə dəvət etdi'
      },
      {
        id: 672,
        sntc: 'I expressed my ideas',
        tr: 'Mən fikirlərimi ifadə etdim',
        ch: 'Mən fikirlərimi ifadə etdim'
      },
      {
        id: 673,
        sntc: 'I solved such a difficult task',
        tr: 'Mən belə çətin bir tapşırıqı həll etdim',
        ch: 'Mən belə çətin bir tapşırıqı həll etdim'
      },
      {
        id: 674,
        sntc: 'I disagreed with him',
        tr: 'Mən onunla razılaşmadım',
        ch: 'Mən onunla razılaşmadım'
      },
      {
        id: 675,
        sntc: 'I translated it from Azerbaijani into English',
        tr: 'Mən bunu azerbaycan dilindən ingilis dilinə tərcümə etmişəm',
        ch: 'Mən bunu azerbaycan dilindən ingilis dilinə tərcümə etmişəm'
      },
      {
        id: 676,
        sntc: 'He recorded so many videos',
        tr: 'O, çoxlu videolar yazdı',
        ch: 'O, çoxlu videolar yazdı'
      },
      {
        id: 677,
        sntc: 'My teacher advised me to do it',
        tr: 'Müəllimim bunu etməyə məsləhət gördü',
        ch: 'Müəllimim bunu etməyə məsləhət gördü'
      },
      {
        id: 678,
        sntc: 'I preferred to follow this advice',
        tr: 'Mən bu məsləhətə əməl etməyə üstünlük verdim',
        ch: 'Mən bu məsləhətə əməl etməyə üstünlük verdim'
      },
      {
        id: 679,
        sntc: 'It attracted new clients',
        tr: 'Bu, yeni müştəriləri cəlb etdi',
        ch: 'Bu, yeni müştəriləri cəlb etdi'
      },
      {
        id: 680,
        sntc: 'He recommended this book to me',
        tr: 'O, bu kitabı mənə tövsiyə etdi',
        ch: 'O, bu kitabı mənə tövsiyə etdi'
      }
    ],
    [{
        id: 681,
        sntc: 'I reached an Advanced level',
        tr: 'Mən qabaqcıl səviyyəyə çatdım',
        ch: 'Mən qabaqcıl səviyyəyə çatdım'
      },
      {
        id: 682,
        sntc: 'She often watched TV',
        tr: 'O, tez-tez televizora baxırdı',
        ch: 'O, tez-tez televizora baxırdı'
      },
      {
        id: 683,
        sntc: 'He owned this house',
        tr: 'O, bu evin sahibi idi',
        ch: 'O, bu evin sahibi idi'
      },
      {
        id: 684,
        sntc: 'She really liked this place',
        tr: 'O, həqiqətən də bu yeri bəyəndi',
        ch: 'O, həqiqətən də bu yeri bəyəndi'
      },
      {
        id: 685,
        sntc: 'This house belonged to her',
        tr: 'Bu ev ona məxsus idi',
        ch: 'Bu ev ona məxsus idi'
      },
      {
        id: 686,
        sntc: 'She washed up the dishes',
        tr: 'O, qabları yuyub',
        ch: 'O, qabları yuyub'
      },
      {
        id: 687,
        sntc: 'I closed the window',
        tr: 'Mən pəncərəni bağladım',
        ch: 'Mən pəncərəni bağladım'
      },
      {
        id: 688,
        sntc: 'He always believed her',
        tr: 'O, həmişə ona inanırdı',
        ch: 'O, həmişə ona inanırdı'
      },
      {
        id: 689,
        sntc: 'She needed to get in touch with us',
        tr: 'Ona bizimlə əlaqə qurmaq lazım idi',
        ch: 'Ona bizimlə əlaqə qurmaq lazım idi'
      },
      {
        id: 690,
        sntc: 'They asked us a couple of questions',
        tr: 'Onlar bizə bir-iki sual verdilər',
        ch: 'Onlar bizə bir-iki sual verdilər'
      }
    ],
    [{
        id: 691,
        sntc: 'I prepared for the test',
        tr: 'Mən imtahana hazırlaşdım',
        ch: 'Mən imtahana hazırlaşdım'
      },
      {
        id: 692,
        sntc: 'She described this situation',
        tr: 'O, bu vəziyyəti təsvir etdi',
        ch: 'O, bu vəziyyəti təsvir etdi'
      },
      {
        id: 693,
        sntc: 'He experienced so many difficulties',
        tr: 'O, çoxlu sayda çətinliklərlə üzləşib',
        ch: 'O, çoxlu sayda çətinliklərlə üzləşib'
      },
      {
        id: 694,
        sntc: 'You calculated it incorrectly',
        tr: 'Siz bunu səhv hesablamısınız',
        ch: 'Siz bunu səhv hesablamısınız'
      },
      {
        id: 695,
        sntc: 'The police arrested this thief',
        tr: 'Polis bu oğrunu həbs etdi',
        ch: 'Polis bu oğrunu həbs etdi'
      },
      {
        id: 696,
        sntc: 'He published several books',
        tr: 'O, bir neçə kitab nəşr etdi',
        ch: 'O, bir neçə kitab nəşr etdi'
      },
      {
        id: 697,
        sntc: 'He ignored their questions',
        tr: 'O, onların suallarına məhəl qoymadı',
        ch: 'O, onların suallarına məhəl qoymadı'
      },
      {
        id: 698,
        sntc: 'I finished watching this video',
        tr: 'Bu videoya baxmağı bitirdim',
        ch: 'Bu videoya baxmağı bitirdim'
      },
      {
        id: 699,
        sntc: 'She cried suddenly',
        tr: 'O, birdən-birə ağladı',
        ch: 'O, birdən-birə ağladı'
      },
      {
        id: 700,
        sntc: 'I closed the door',
        tr: 'Mən qapını bağladım',
        ch: 'Mən qapını bağladım'
      }
    ],
    [{
        id: 701,
        sntc: 'She married him',
        tr: 'O, ona ərə getdi',
        ch: 'O, ona ərə getdi'
      },
      {
        id: 702,
        sntc: 'She remained calm',
        tr: 'O, sakit qaldı',
        ch: 'O, sakit qaldı'
      },
      {
        id: 703,
        sntc: 'They required more experience',
        tr: 'Onlar daha çox təcrübə tələb edirdilər',
        ch: 'Onlar daha çox təcrübə tələb edirdilər'
      },
      {
        id: 704,
        sntc: 'He remained my friend',
        tr: 'O, mənim dostum qaldı',
        ch: 'O, mənim dostum qaldı'
      },
      {
        id: 705,
        sntc: 'I passed such a difficult exam',
        tr: 'Mən belə çətin bir imtahandan keçdim',
        ch: 'Mən belə çətin bir imtahandan keçdim'
      },
      {
        id: 706,
        sntc: 'I decided not to go there',
        tr: 'Mən ora getməməyə qərar verdim',
        ch: 'Mən ora getməməyə qərar verdim'
      },
      {
        id: 707,
        sntc: 'I reached this level',
        tr: 'Mən bu səviyyəyə çatdım',
        ch: 'Mən bu səviyyəyə çatdım'
      },
      {
        id: 708,
        sntc: 'I decided not to go to that party',
        tr: 'Həmin əyləncəyə getməməyə qərar verdim',
        ch: 'Həmin əyləncəyə getməməyə qərar verdim'
      },
      {
        id: 709,
        sntc: 'She suggested going to the park',
        tr: 'O, parka getməyi təklif etdi',
        ch: 'O, parka getməyi təklif etdi'
      },
      {
        id: 710,
        sntc: 'We remained friends',
        tr: 'Biz dost qaldıq',
        ch: 'Biz dost qaldıq'
      }
    ],
    [{
        id: 711,
        sntc: 'We faced a very big problem',
        tr: 'Biz çox böyük problemlə üzləşdik',
        ch: 'Biz çox böyük problemlə üzləşdik'
      },
      {
        id: 712,
        sntc: 'I hated discussing it',
        tr: 'Mən bunu müzakirə etməyə nifrət edirdim',
        ch: 'Mən bunu müzakirə etməyə nifrət edirdim'
      },
      {
        id: 713,
        sntc: 'She pointed at my mistakes',
        tr: 'O, mənim səhvlərimə işarə etdi',
        ch: 'O, mənim səhvlərimə işarə etdi'
      },
      {
        id: 714,
        sntc: 'I perfectly realized it',
        tr: 'Mən bunu mükəmməl dərk etdim',
        ch: 'Mən bunu mükəmməl dərk etdim'
      },
      {
        id: 715,
        sntc: 'We discussed everything',
        tr: 'Biz hər şeyi müzakirə etdik',
        ch: 'Biz hər şeyi müzakirə etdik'
      },
      {
        id: 716,
        sntc: 'His offer sounded really strange',
        tr: 'Onun təklifi həqiqətən qəribə səsləndi',
        ch: 'Onun təklifi həqiqətən qəribə səsləndi'
      },
      {
        id: 717,
        sntc: 'She missed that opportunity',
        tr: 'O, həmin fürsəti əldən verdi',
        ch: 'O, həmin fürsəti əldən verdi'
      },
      {
        id: 718,
        sntc: 'I prepared for the test',
        tr: 'Mən imtahana hazırlaşdım',
        ch: 'Mən imtahana hazırlaşdım'
      },
      {
        id: 719,
        sntc: 'I compared these results',
        tr: 'Mən bu nəticələri müqayisə etdim',
        ch: 'Mən bu nəticələri müqayisə etdim'
      },
      {
        id: 720,
        sntc: 'I described this problem',
        tr: 'Mən bu problemi təsvir etdim',
        ch: 'Mən bu problemi təsvir etdim'
      }
    ],
    [{
        id: 721,
        sntc: 'They delivered the goods on time',
        tr: 'Onlar malları vaxtında çatdırdılar',
        ch: 'Onlar malları vaxtında çatdırdılar'
      },
      {
        id: 722,
        sntc: 'I promised to do it',
        tr: 'Bunu etmeyə söz vermişəm',
        ch: 'Bunu etmeyə söz vermişəm'
      },
      {
        id: 723,
        sntc: 'I refused to take their offer',
        tr: 'Onların təklifini qəbul etmədim',
        ch: 'Onların təklifini qəbul etmədim'
      },
      {
        id: 724,
        sntc: 'He wasted time',
        tr: 'O, vaxtını itirdi',
        ch: 'O, vaxtını itirdi'
      },
      {
        id: 725,
        sntc: 'He promised to finish it',
        tr: 'O, bunu bitirəcəyinə söz verdi',
        ch: 'O, bunu bitirəcəyinə söz verdi'
      },
      {
        id: 726,
        sntc: 'He insisted on doing it',
        tr: 'O, bunu etməkdə israr etdi',
        ch: 'O, bunu etməkdə israr etdi'
      },
      {
        id: 727,
        sntc: 'He earned two thousand dollars monthly',
        tr: 'O, aylıq iki min dollar qazanırdı',
        ch: 'O, aylıq iki min dollar qazanırdı'
      },
      {
        id: 728,
        sntc: 'She cooked something very tasty',
        tr: 'O, çox dadlı bir şey bişirdi',
        ch: 'O, çox dadlı bir şey bişirdi'
      },
      {
        id: 729,
        sntc: 'He ignored her words',
        tr: 'O, onun sözlərinə məhəl qoymadı',
        ch: 'O, onun sözlərinə məhəl qoymadı'
      },
      {
        id: 730,
        sntc: 'We trained these skills',
        tr: 'Bu bacarıqlar üzərində məşq etdik',
        ch: 'Bu bacarıqlar üzərində məşq etdik'
      }
    ],
    [{
        id: 731,
        sntc: 'His speech inspired us',
        tr: 'Onun çıxışı bizə ilham verdi',
        ch: 'Onun çıxışı bizə ilham verdi'
      },
      {
        id: 732,
        sntc: 'He complained about that problem',
        tr: 'O, həmin problemdən şikayət etdi',
        ch: 'O, həmin problemdən şikayət etdi'
      },
      {
        id: 733,
        sntc: 'This example inspired me',
        tr: 'Bu nümunə mənə ilham verdi',
        ch: 'Bu nümunə mənə ilham verdi'
      },
      {
        id: 734,
        sntc: 'The lesson lasted for half an hour',
        tr: 'Dərs yarım saat davam etdi',
        ch: 'Dərs yarım saat davam etdi'
      },
      {
        id: 735,
        sntc: 'I preferred to stay at home',
        tr: 'Mən evdə qalmağa üstünlük verdim',
        ch: 'Mən evdə qalmağa üstünlük verdim'
      },
      {
        id: 736,
        sntc: 'He smoked very rarely',
        tr: 'O, çox nadir hallarda siqaret çəkirdi',
        ch: 'O, çox nadir hallarda siqaret çəkirdi'
      },
      {
        id: 737,
        sntc: 'I communicated with different people',
        tr: 'Mən fərqli insanlarla ünsiyyət qurdum',
        ch: 'Mən fərqli insanlarla ünsiyyət qurdum'
      },
      {
        id: 738,
        sntc: 'He repaired his bike',
        tr: 'O, velosipedini təmir etdi',
        ch: 'O, velosipedini təmir etdi'
      },
      {
        id: 739,
        sntc: 'I recorded everything',
        tr: 'Mən hər şeyi qeyd etdim',
        ch: 'Mən hər şeyi qeyd etdim'
      },
      {
        id: 740,
        sntc: 'My friends advised me not to do it',
        tr: 'Dostlarım bunu etməmək məsləhət gördülər',
        ch: 'Dostlarım bunu etməmək məsləhət gördülər'
      }
    ],
    [{
        id: 741,
        sntc: 'I managed to improve my pronunciation considerably',
        tr: 'Mən tələffüzümü xeyli yaxşılaşdırmağı bacardım',
        ch: 'Mən tələffüzümü xeyli yaxşılaşdırmağı bacardım'
      },
      {
        id: 742,
        sntc: 'She danced professionally',
        tr: 'O, peşəkar rəqs etdi',
        ch: 'O, peşəkar rəqs etdi'
      },
      {
        id: 743,
        sntc: 'I deleted this document by mistake',
        tr: 'Mən bu sənədi səhvən sildim',
        ch: 'Mən bu sənədi səhvən sildim'
      },
      {
        id: 744,
        sntc: 'He deserved it',
        tr: 'O, buna layiq idi',
        ch: 'O, buna layiq idi'
      },
      {
        id: 745,
        sntc: 'I managed to do it',
        tr: 'Mən bunu bacardım',
        ch: 'Mən bunu bacardım'
      },
      {
        id: 746,
        sntc: 'He celebrated his birthday',
        tr: 'O, ad gününü qeyd etdi',
        ch: 'O, ad gününü qeyd etdi'
      },
      {
        id: 747,
        sntc: 'We trusted him completely',
        tr: 'Biz tamamilə ona etibar edirdik',
        ch: 'Biz tamamilə ona etibar edirdik'
      },
      {
        id: 748,
        sntc: 'She experienced a very strange feeling',
        tr: 'O, çox qəribə hiss yaşadı',
        ch: 'O, çox qəribə hiss yaşadı'
      },
      {
        id: 749,
        sntc: 'My friends recommended this app to me',
        tr: 'Mənim dostlarım bu tətbiqi mənə tövsiyə etdilər',
        ch: 'Mənim dostlarım bu tətbiqi mənə tövsiyə etdilər'
      },
      {
        id: 750,
        sntc: 'I focused on this problem',
        tr: 'Diqqətimi bu problemə yönəltdim',
        ch: 'Diqqətimi bu problemə yönəltdim'
      }
    ],
    [{
        id: 751,
        sntc: 'It often rained there',
        tr: 'Orada tez-tez yağış yağırdı',
        ch: 'Orada tez-tez yağış yağırdı'
      },
      {
        id: 752,
        sntc: 'He prayed to this saint',
        tr: 'O, bu müqəddəsə dua etdi',
        ch: 'O, bu müqəddəsə dua etdi'
      },
      {
        id: 753,
        sntc: 'The police arrested him',
        tr: 'Polis onu həbs etdi',
        ch: 'Polis onu həbs etdi'
      },
      {
        id: 754,
        sntc: 'I participated in this competition',
        tr: 'Mən bu yarışmada iştirak etmişəm',
        ch: 'Mən bu yarışmada iştirak etmişəm'
      },
      {
        id: 755,
        sntc: 'We analyzed this report',
        tr: 'Bu hesabatı təhlil etdik',
        ch: 'Bu hesabatı təhlil etdik'
      },
      {
        id: 756,
        sntc: 'I parked very far from here',
        tr: 'Buradan çox uzaqda park etmişdim',
        ch: 'Buradan çox uzaqda park etmişdim'
      },
      {
        id: 757,
        sntc: 'He prayed to saints',
        tr: 'O, müqəddəslərə dua etdi',
        ch: 'O, müqəddəslərə dua etdi'
      },
      {
        id: 758,
        sntc: 'He owned this house',
        tr: 'O, bu evin sahibi idi',
        ch: 'O, bu evin sahibi idi'
      },
      {
        id: 759,
        sntc: 'She divided our group into three parts',
        tr: 'O, qrupumuzu üç hissəyə böldü',
        ch: 'O, qrupumuzu üç hissəyə böldü'
      },
      {
        id: 760,
        sntc: 'I participated in this tournament',
        tr: 'Mən bu turnirdə iştirak etmişəm',
        ch: 'Mən bu turnirdə iştirak etmişəm'
      }
    ],
    [{
        id: 761,
        sntc: 'This example inspired me',
        tr: 'Bu nümunə mənə ilham verdi',
        ch: 'Bu nümunə mənə ilham verdi'
      },
      {
        id: 762,
        sntc: 'I hurried up',
        tr: 'Mən tələsdim',
        ch: 'Mən tələsdim'
      },
      {
        id: 763,
        sntc: 'She suggested going to the cinema',
        tr: 'O, kinoteatra getməyi təklif etdi',
        ch: 'O, kinoteatra getməyi təklif etdi'
      },
      {
        id: 764,
        sntc: 'I passed such a difficult exam',
        tr: 'Mən çox çətin imtahandan keçdim',
        ch: 'Mən çox çətin imtahandan keçdim'
      },
      {
        id: 765,
        sntc: 'I hated discussing it',
        tr: 'Mən bunu müzakirə etməyə nifrət edirdim',
        ch: 'Mən bunu müzakirə etməyə nifrət edirdim'
      },
      {
        id: 766,
        sntc: 'It happened to my family',
        tr: 'Bu, mənim ailəmin başına gəldi',
        ch: 'Bu, mənim ailəmin başına gəldi'
      },
      {
        id: 767,
        sntc: 'We communicated with each other from time to time',
        tr: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ',
        ch: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ'
      },
      {
        id: 768,
        sntc: 'He insisted on doing it',
        tr: 'O, bunu etməkdə israr etdi',
        ch: 'O, bunu etməkdə israr etdi'
      },
      {
        id: 769,
        sntc: 'She danced professionally',
        tr: 'O, peşəkar rəqs etdi',
        ch: 'O, peşəkar rəqs etdi'
      },
      {
        id: 770,
        sntc: 'He reacted to it very strangely',
        tr: 'O, buna çox qəribə reaksiya verdi',
        ch: 'O, buna çox qəribə reaksiya verdi'
      }
    ],
    [{
        id: 771,
        sntc: 'I perfectly realized it',
        tr: 'Mən bunu mükəmməl dərk etdim',
        ch: 'Mən bunu mükəmməl dərk etdim'
      },
      {
        id: 772,
        sntc: 'She apologized for everything',
        tr: 'O, hər şeyə görə üzr istədi',
        ch: 'O, hər şeyə görə üzr istədi'
      },
      {
        id: 773,
        sntc: 'He invested all his money',
        tr: 'O, bütün pullarını yatırdı',
        ch: 'O, bütün pullarını yatırdı'
      },
      {
        id: 774,
        sntc: 'We solved all these problems',
        tr: 'Biz bütün bu problemləri həll etdik',
        ch: 'Biz bütün bu problemləri həll etdik'
      },
      {
        id: 775,
        sntc: 'He remained my friend',
        tr: 'O, mənim dostum olaraq qaldı',
        ch: 'O, mənim dostum olaraq qaldı'
      },
      {
        id: 776,
        sntc: 'I passed the exam',
        tr: 'Mən imtahandan keçdim',
        ch: 'Mən imtahandan keçdim'
      },
      {
        id: 777,
        sntc: 'It depended on us',
        tr: 'Bu bizdən asılı idi',
        ch: 'Bu bizdən asılı idi'
      },
      {
        id: 778,
        sntc: 'We hated doing it',
        tr: 'Biz bunu etməkdən nifrət edirdik',
        ch: 'Biz bunu etməkdən nifrət edirdik'
      },
      {
        id: 779,
        sntc: 'He added two very important things',
        tr: 'O, iki çox vacib şeyi əlavə etdi',
        ch: 'O, iki çox vacib şeyi əlavə etdi'
      },
      {
        id: 780,
        sntc: 'He repeated this sentence',
        tr: 'O, bu cümləni təkrar etdi',
        ch: 'O, bu cümləni təkrar etdi'
      }
    ],
    [{
        id: 781,
        sntc: 'I translated it from Azerbaijani into English',
        tr: 'Bunu azərbaycan dilindən ingilis dilinə tərcümə etmişəm',
        ch: 'Bunu azərbaycan dilindən ingilis dilinə tərcümə etmişəm'
      },
      {
        id: 782,
        sntc: 'I revised this lesson',
        tr: 'Mən bu dərsə yenidən baxdım',
        ch: 'Mən bu dərsə yenidən baxdım'
      },
      {
        id: 783,
        sntc: 'We remained friends',
        tr: 'Biz dost qaldıq',
        ch: 'Biz dost qaldıq'
      },
      {
        id: 784,
        sntc: 'He always supported us',
        tr: 'O, həmişə bizə dəstək olub',
        ch: 'O, həmişə bizə dəstək olub'
      },
      {
        id: 785,
        sntc: 'I included these examples',
        tr: 'Bu nümunələri daxil etdim',
        ch: 'Bu nümunələri daxil etdim'
      },
      {
        id: 786,
        sntc: 'He prayed to God',
        tr: 'O, Allaha dua etdi',
        ch: 'O, Allaha dua etdi'
      },
      {
        id: 787,
        sntc: 'I walked to work',
        tr: 'Mən işə piyada getdim',
        ch: 'Mən işə piyada getdim'
      },
      {
        id: 788,
        sntc: 'You explained it very clearly',
        tr: 'Sən bunu çox aydın izah etdin',
        ch: 'Sən bunu çox aydın izah etdin'
      },
      {
        id: 789,
        sntc: 'They shared this information with us',
        tr: 'Onlar bu məlumatı bizimlə paylaşdılar',
        ch: 'Onlar bu məlumatı bizimlə paylaşdılar'
      },
      {
        id: 790,
        sntc: 'We thanked him for everything',
        tr: 'Biz hər şeyə görə ona təşəkkür etdik',
        ch: 'Biz hər şeyə görə ona təşəkkür etdik'
      }
    ],
    [{
        id: 791,
        sntc: 'We participated in that championship',
        tr: 'Biz o çempionatda iştirak etmişik',
        ch: 'Biz o çempionatda iştirak etmişik'
      },
      {
        id: 792,
        sntc: 'We signed a very important document',
        tr: 'Biz çox vacib bir sənədi imzaladıq',
        ch: 'Biz çox vacib bir sənədi imzaladıq'
      },
      {
        id: 793,
        sntc: 'They arrested those criminals',
        tr: 'Onlar həmin cinayətkarları həbs etdilər',
        ch: 'Onlar həmin cinayətkarları həbs etdilər'
      },
      {
        id: 794,
        sntc: 'He ordered him to defend them',
        tr: 'O, ona, onları müdafiə etməsini əmr verdi',
        ch: 'O, ona, onları müdafiə etməsini əmr verdi'
      },
      {
        id: 795,
        sntc: 'He borrowed more money',
        tr: 'O, daha çox borc götürüb',
        ch: 'O, daha çox borc götürüb'
      },
      {
        id: 796,
        sntc: 'Everything remained the same',
        tr: 'Hər şey əvvəlki kimi qaldı',
        ch: 'Hər şey əvvəlki kimi qaldı'
      },
      {
        id: 797,
        sntc: 'I achieved this aim at last',
        tr: 'Mən bu məqsədə nəhayət çatdım',
        ch: 'Mən bu məqsədə nəhayət çatdım'
      },
      {
        id: 798,
        sntc: 'I parked there',
        tr: 'Mən maşını orada saxlamışam',
        ch: 'Mən maşını orada saxlamışam'
      },
      {
        id: 799,
        sntc: 'They moved to America',
        tr: 'Onlar Amerikaya köçüblər',
        ch: 'Onlar Amerikaya köçüblər'
      },
      {
        id: 800,
        sntc: 'I concentrated on this issue',
        tr: 'Mən bu mövzuda cəmləşdim',
        ch: 'Mən bu mövzuda cəmləşdim'
      }
    ],
    [{
        id: 801,
        sntc: 'I got a letter from her',
        tr: 'Mən ondan məktub aldım',
        ch: 'Mən ondan məktub aldım'
      },
      {
        id: 802,
        sntc: 'I knew him very well',
        tr: 'Mən onu çox yaxşı tanıyırdım',
        ch: 'Mən onu çox yaxşı tanıyırdım'
      },
      {
        id: 803,
        sntc: 'He said it very loudly',
        tr: 'O, bunu çox ucadan dedi',
        ch: 'O, bunu çox ucadan dedi'
      },
      {
        id: 804,
        sntc: 'He did me a favor',
        tr: 'O, mənə lütf etdi',
        ch: 'O, mənə lütf etdi'
      },
      {
        id: 805,
        sntc: 'I said it again',
        tr: 'Mən bunu yenə dedim',
        ch: 'Mən bunu yenə dedim'
      },
      {
        id: 806,
        sntc: 'He told me everything',
        tr: 'O, mənə hər şeyi danışdı',
        ch: 'O, mənə hər şeyi danışdı'
      },
      {
        id: 807,
        sntc: 'I did it on time',
        tr: 'Mən bunu vaxtında etdim',
        ch: 'Mən bunu vaxtında etdim'
      },
      {
        id: 808,
        sntc: 'I said it one more time',
        tr: 'Mən bunu bir dəfə də dedim',
        ch: 'Mən bunu bir dəfə də dedim'
      },
      {
        id: 809,
        sntc: 'It was a tremendous success',
        tr: 'Bu, çox böyük uğur idi',
        ch: 'Bu, çox böyük uğur idi'
      },
      {
        id: 810,
        sntc: 'He returned',
        tr: 'O, qayıtdı',
        ch: 'O, qayıtdı'
      }
    ],
    [{
        id: 811,
        sntc: 'I put it on the desk',
        tr: 'Mən bunu masanın üstünə qoydum',
        ch: 'Mən bunu masanın üstünə qoydum'
      },
      {
        id: 812,
        sntc: 'I found my wallet',
        tr: 'Mən pul kisəmi tapdım',
        ch: 'Mən pul kisəmi tapdım'
      },
      {
        id: 813,
        sntc: 'We found out all the truth',
        tr: 'Biz bütün həqiqəti aydınlaşdırdıq',
        ch: 'Biz bütün həqiqəti aydınlaşdırdıq'
      },
      {
        id: 814,
        sntc: 'He gave me this advice',
        tr: 'O, mənə bu məsləhəti verdi',
        ch: 'O, mənə bu məsləhəti verdi'
      },
      {
        id: 815,
        sntc: 'This song became very popular',
        tr: 'Bu mahnı çox məşhur oldu',
        ch: 'Bu mahnı çox məşhur oldu'
      },
      {
        id: 816,
        sntc: 'He came back',
        tr: 'O, qayıtdı',
        ch: 'O, qayıtdı'
      },
      {
        id: 817,
        sntc: 'He gave up smoking',
        tr: 'O, siqaret cəkməyi tərgitdi',
        ch: 'O, siqaret cəkməyi tərgitdi'
      },
      {
        id: 818,
        sntc: 'I put it near my computer',
        tr: 'Mən bunu compüterimin yaxınlığında qoydum',
        ch: 'Mən bunu compüterimin yaxınlığında qoydum'
      },
      {
        id: 819,
        sntc: 'I came there on time',
        tr: 'Mən ora vaxtında gəldim',
        ch: 'Mən ora vaxtında gəldim'
      },
      {
        id: 820,
        sntc: 'I found my keys',
        tr: 'Mən açarlarımı tapdım',
        ch: 'Mən açarlarımı tapdım'
      }
    ],
    [{
        id: 821,
        sntc: 'He brought this thing to me',
        tr: 'O, mənə bu əşyanı gətirdi',
        ch: 'O, mənə bu əşyanı gətirdi'
      },
      {
        id: 822,
        sntc: 'I left for England',
        tr: 'Mən İngiltərəyə yola düşdüm',
        ch: 'Mən İngiltərəyə yola düşdüm'
      },
      {
        id: 823,
        sntc: 'I heard in on TV',
        tr: 'Mən bunu televizorda eşitdim',
        ch: 'Mən bunu televizorda eşitdim'
      },
      {
        id: 824,
        sntc: 'She ran very fast',
        tr: 'O, çox sürətlə qaçdı',
        ch: 'O, çox sürətlə qaçdı'
      },
      {
        id: 825,
        sntc: 'He ran away',
        tr: 'O, qaçdı',
        ch: 'O, qaçdı'
      },
      {
        id: 826,
        sntc: 'I wrote it down',
        tr: 'Mən bunu yazdım',
        ch: 'Mən bunu yazdım'
      },
      {
        id: 827,
        sntc: 'I wrote down this word',
        tr: 'Mən bu sözü yazdım',
        ch: 'Mən bu sözü yazdım'
      },
      {
        id: 828,
        sntc: 'I heard it for the first time',
        tr: 'Mən bunu ilk dəfə eşitdim',
        ch: 'Mən bunu ilk dəfə eşitdim'
      },
      {
        id: 829,
        sntc: 'He brought me this thing',
        tr: 'O, mənə bu əşyanı gətirdi',
        ch: 'O, mənə bu əşyanı gətirdi'
      },
      {
        id: 830,
        sntc: 'We left for America',
        tr: 'Biz Amerikaya yola düşdük',
        ch: 'Biz Amerikaya yola düşdük'
      }
    ],
    [{
        id: 831,
        sntc: 'He lost his wallet',
        tr: 'O, pul kisəsini itirdi',
        ch: 'O, pul kisəsini itirdi'
      },
      {
        id: 832,
        sntc: 'She felt unhappy',
        tr: 'O, özünü bədbəxt hiss edirdi',
        ch: 'O, özünü bədbəxt hiss edirdi'
      },
      {
        id: 833,
        sntc: 'I met my classmate yesterday',
        tr: 'Mən dünən sinif yoldaşımla görüşdüm',
        ch: 'Mən dünən sinif yoldaşımla görüşdüm'
      },
      {
        id: 834,
        sntc: 'I thought differently',
        tr: 'Mən fərqli düşünürdüm',
        ch: 'Mən fərqli düşünürdüm'
      },
      {
        id: 835,
        sntc: 'He set a glass of water on the table',
        tr: 'O, stəkan suyu stolun üstünə qoydu',
        ch: 'O, stəkan suyu stolun üstünə qoydu'
      },
      {
        id: 836,
        sntc: 'I left home',
        tr: 'Mən evdən çıxdım',
        ch: 'Mən evdən çıxdım'
      },
      {
        id: 837,
        sntc: 'I learnt it by heart',
        tr: 'Mən bunu əzbər öyrəndim',
        ch: 'Mən bunu əzbər öyrəndim'
      },
      {
        id: 838,
        sntc: 'I wrote this expression down',
        tr: 'Mən bu ifadəni yazdım',
        ch: 'Mən bu ifadəni yazdım'
      },
      {
        id: 839,
        sntc: 'I understood you at once',
        tr: 'Mən bir anda səni başa düşdüm',
        ch: 'Mən bir anda səni başa düşdüm'
      },
      {
        id: 840,
        sntc: 'She cut herself',
        tr: 'O, özünü kəsdi',
        ch: 'O, özünü kəsdi'
      }
    ],
    [{
        id: 841,
        sntc: 'She sent me a message',
        tr: 'O, mənə mesaj göndərdi',
        ch: 'O, mənə mesaj göndərdi'
      },
      {
        id: 842,
        sntc: 'He gave me this thing',
        tr: 'O, mənə bu əşyanı verdi',
        ch: 'O, mənə bu əşyanı verdi'
      },
      {
        id: 843,
        sntc: 'I stood behind him',
        tr: 'Mən onun arxasında dayandım',
        ch: 'Mən onun arxasında dayandım'
      },
      {
        id: 844,
        sntc: 'He fell down and hurt his arm',
        tr: 'O, yıxıldı və qolunu yaraladı',
        ch: 'O, yıxıldı və qolunu yaraladı'
      },
      {
        id: 845,
        sntc: 'I read it online',
        tr: 'Mən bunu onlayn oxudum',
        ch: 'Mən bunu onlayn oxudum'
      },
      {
        id: 846,
        sntc: 'I heard it in the news',
        tr: 'Mən bunu xəbərdə eşitdim',
        ch: 'Mən bunu xəbərdə eşitdim'
      },
      {
        id: 847,
        sntc: 'He kept this secret',
        tr: 'O, bu sirri saxladı',
        ch: 'O, bu sirri saxladı'
      },
      {
        id: 848,
        sntc: 'They broke this chair',
        tr: 'Onlar bu stulu sındırdılar',
        ch: 'Onlar bu stulu sındırdılar'
      },
      {
        id: 849,
        sntc: 'I met so many new words there',
        tr: 'Mən orada çoxlu sayda yeni sözlərlə tanış oldum',
        ch: 'Mən orada çoxlu sayda yeni sözlərlə tanış oldum'
      },
      {
        id: 850,
        sntc: 'He set up a very profitable company',
        tr: 'O, çox gəlirli şirkət qurdu',
        ch: 'O, çox gəlirli şirkət qurdu'
      }
    ],
    [{
        id: 851,
        sntc: 'He cut the meat into four pieces',
        tr: 'O, əti dörd hissəyə böldü',
        ch: 'O, əti dörd hissəyə böldü'
      },
      {
        id: 852,
        sntc: 'She wore very fashionable clothes',
        tr: 'O, çox dəbli geyimlər geyindi',
        ch: 'O, çox dəbli geyimlər geyindi'
      },
      {
        id: 853,
        sntc: 'He taught me a lesson',
        tr: 'O, mənə dərs verdi',
        ch: 'O, mənə dərs verdi'
      },
      {
        id: 854,
        sntc: 'I’m afraid you understood me incorrectly',
        tr: 'Mən qorxuram sən məni səhv başa düşmüsən',
        ch: 'Mən qorxuram sən məni səhv başa düşmüsən'
      },
      {
        id: 855,
        sntc: 'I lay in bed',
        tr: 'Mən yataqda uzandım',
        ch: 'Mən yataqda uzandım'
      },
      {
        id: 856,
        sntc: 'They broke the window',
        tr: 'Onlar pəncərəni sındırdılar',
        ch: 'Onlar pəncərəni sındırdılar'
      },
      {
        id: 857,
        sntc: 'They sent me this notification',
        tr: 'Onlar bu bildirişi mənə göndərdilər',
        ch: 'Onlar bu bildirişi mənə göndərdilər'
      },
      {
        id: 858,
        sntc: 'He lied to his boss',
        tr: 'O, müdirinə yalan danışdı',
        ch: 'O, müdirinə yalan danışdı'
      },
      {
        id: 859,
        sntc: 'He flew to London',
        tr: 'O, Londona uçdu',
        ch: 'O, Londona uçdu'
      },
      {
        id: 860,
        sntc: 'He kept his word',
        tr: 'O, sözünün üstündə durdu',
        ch: 'O, sözünün üstündə durdu'
      }
    ],
    [{
        id: 861,
        sntc: 'We wore a school uniform',
        tr: 'Biz məktəbli geyimi geyinmişdik',
        ch: 'Biz məktəbli geyimi geyinmişdik'
      },
      {
        id: 862,
        sntc: 'This dress fit you perfectly',
        tr: 'Bu paltar sənə mükəmməl uyğun gəlir',
        ch: 'Bu paltar sənə mükəmməl uyğun gəlir'
      },
      {
        id: 863,
        sntc: 'She taught this subject at university',
        tr: 'O, bu fənni universitetdə tədris etdi',
        ch: 'O, bu fənni universitetdə tədris etdi'
      },
      {
        id: 864,
        sntc: 'He drank a glass of orange juice',
        tr: 'O, bir stəkan portağal şirəsi içdi',
        ch: 'O, bir stəkan portağal şirəsi içdi'
      },
      {
        id: 865,
        sntc: 'I flew back to Baku',
        tr: 'Mən Bakıya qayıtdım',
        ch: 'Mən Bakıya qayıtdım'
      },
      {
        id: 866,
        sntc: 'I forgot to call her',
        tr: 'Mən ona zəng etməyi unutdum',
        ch: 'Mən ona zəng etməyi unutdum'
      },
      {
        id: 867,
        sntc: 'They sent me a parcel',
        tr: 'Onlar mənə bağlama göndərdilər',
        ch: 'Onlar mənə bağlama göndərdilər'
      },
      {
        id: 868,
        sntc: 'We slept more than enough',
        tr: 'Biz kifayət qədər yatdıq',
        ch: 'Biz kifayət qədər yatdıq'
      },
      {
        id: 869,
        sntc: 'Two apples fell',
        tr: 'İki alma düşdü',
        ch: 'İki alma düşdü'
      },
      {
        id: 870,
        sntc: 'The boys hid behind that tree',
        tr: 'Oğlanlar o ağacın arxasında gizləndilər',
        ch: 'Oğlanlar o ağacın arxasında gizləndilər'
      }
    ],
    [{
        id: 871,
        sntc: 'He stole his wallet',
        tr: 'O, onun pul kisəsini oğurladı',
        ch: 'O, onun pul kisəsini oğurladı'
      },
      {
        id: 872,
        sntc: 'He ate a piece of cake',
        tr: 'O, bir tikə tort yedi',
        ch: 'O, bir tikə tort yedi'
      },
      {
        id: 873,
        sntc: 'I woke up earlier',
        tr: 'Mən daha tez oyandım',
        ch: 'Mən daha tez oyandım'
      },
      {
        id: 874,
        sntc: 'I drank a cup of tea',
        tr: 'Mən bir fincan çay içdim',
        ch: 'Mən bir fincan çay içdim'
      },
      {
        id: 875,
        sntc: 'They dug a hole in the ground',
        tr: 'Onlar yerdə quyu qazdılar',
        ch: 'Onlar yerdə quyu qazdılar'
      },
      {
        id: 876,
        sntc: 'I rode a bike',
        tr: 'Mən velosiped sürdüm',
        ch: 'Mən velosiped sürdüm'
      },
      {
        id: 877,
        sntc: 'She forgave him',
        tr: 'O, onu bağışladı',
        ch: 'O, onu bağışladı'
      },
      {
        id: 878,
        sntc: 'She fed her baby',
        tr: 'O, körpəsini yedizdirdi',
        ch: 'O, körpəsini yedizdirdi'
      },
      {
        id: 879,
        sntc: 'They fought for independence',
        tr: 'Onlar müstəqillik uğrunda mübarizə apardılar',
        ch: 'Onlar müstəqillik uğrunda mübarizə apardılar'
      },
      {
        id: 880,
        sntc: 'I dealt with different complaints',
        tr: 'Mən müxtəlif şikayətlərlə məşğul oldum',
        ch: 'Mən müxtəlif şikayətlərlə məşğul oldum'
      }
    ],
    [{
        id: 881,
        sntc: 'They spoilt the food',
        tr: 'Onlar yeməyi xarab etdilər',
        ch: 'Onlar yeməyi xarab etdilər'
      },
      {
        id: 882,
        sntc: 'I woke up later than usual',
        tr: 'Mən həmişəkindən gec oyandım',
        ch: 'Mən həmişəkindən gec oyandım'
      },
      {
        id: 883,
        sntc: 'It smelt awful',
        tr: 'Bu, dəhşətli iy verdi',
        ch: 'Bu, dəhşətli iy verdi'
      },
      {
        id: 884,
        sntc: 'I slept for two hours',
        tr: 'Mən iki saat yatdım',
        ch: 'Mən iki saat yatdım'
      },
      {
        id: 885,
        sntc: 'He withdrew twenty thousand dollars from his account',
        tr: 'O, hesabından iyirmi min dollar çıxardı',
        ch: 'O, hesabından iyirmi min dollar çıxardı'
      },
      {
        id: 886,
        sntc: 'She forgave everything',
        tr: 'O, hər şeyi bağışladı',
        ch: 'O, hər şeyi bağışladı'
      },
      {
        id: 887,
        sntc: 'I hung my jacket on a hook',
        tr: 'Mən jaketimi qarmaqcıqdan asdım',
        ch: 'Mən jaketimi qarmaqcıqdan asdım'
      },
      {
        id: 888,
        sntc: 'I drove to the park',
        tr: 'Mən parka maşınla getdim',
        ch: 'Mən parka maşınla getdim'
      },
      {
        id: 889,
        sntc: 'It spoilt my plans',
        tr: 'Bu, planlarımı korladı',
        ch: 'Bu, planlarımı korladı'
      },
      {
        id: 890,
        sntc: 'She fed the children',
        tr: 'O, uşaqları yedizdirdi',
        ch: 'O, uşaqları yedizdirdi'
      }
    ],
    [{
        id: 891,
        sntc: 'She often overslept',
        tr: 'O, çox vaxt həddən artıq yatırdı',
        ch: 'O, çox vaxt həddən artıq yatırdı'
      },
      {
        id: 892,
        sntc: 'I wore a belt',
        tr: 'Mən kəmər taxdım',
        ch: 'Mən kəmər taxdım'
      },
      {
        id: 893,
        sntc: 'An angry dog bit him',
        tr: 'Qəzəbli it onu dişlədi',
        ch: 'Qəzəbli it onu dişlədi'
      },
      {
        id: 894,
        sntc: 'I drove home',
        tr: 'Mən maşınla evə getdim',
        ch: 'Mən maşınla evə getdim'
      },
      {
        id: 895,
        sntc: 'He lit the candle',
        tr: 'O, şamı yandırdı',
        ch: 'O, şamı yandırdı'
      },
      {
        id: 896,
        sntc: 'I ate it for dinner',
        tr: 'Mən bunu şam yeməyində yedim',
        ch: 'Mən bunu şam yeməyində yedim'
      },
      {
        id: 897,
        sntc: 'She foresaw this situation',
        tr: 'O, bu vəziyyəti qabaqcadan gördü',
        ch: 'O, bu vəziyyəti qabaqcadan gördü'
      },
      {
        id: 898,
        sntc: 'They burnt the village',
        tr: 'Onlar kəndi yandırdılar',
        ch: 'Onlar kəndi yandırdılar'
      },
      {
        id: 899,
        sntc: 'He never overate',
        tr: 'O, heç vaxt həddən artıq yemirdi',
        ch: 'O, heç vaxt həddən artıq yemirdi'
      },
      {
        id: 900,
        sntc: 'He withdrew half a million dollars from his account',
        tr: 'O, hesabından yarım milyon dollar çıxardı',
        ch: 'O, hesabından yarım milyon dollar çıxardı'
      }
    ],
    [{
        id: 901,
        sntc: 'He lent her several hundred dollars',
        tr: 'O, ona bir neçə yüz dollar borc verdi',
        ch: 'O, ona bir neçə yüz dollar borc verdi'
      },
      {
        id: 902,
        sntc: 'He stole her bag',
        tr: 'O, onun çantasını oğurladı',
        ch: 'O, onun çantasını oğurladı'
      },
      {
        id: 903,
        sntc: 'I swam in the sea',
        tr: 'Mən dənizdə üzdüm',
        ch: 'Mən dənizdə üzdüm'
      },
      {
        id: 904,
        sntc: 'I understood your point of view',
        tr: 'Mən sizin nöqteyi-nəzərinizi başa düşdüm',
        ch: 'Mən sizin nöqteyi-nəzərinizi başa düşdüm'
      },
      {
        id: 905,
        sntc: 'They met at last',
        tr: 'Onlar nəhayət görüşdülər',
        ch: 'Onlar nəhayət görüşdülər'
      },
      {
        id: 906,
        sntc: 'I read such a funny story',
        tr: 'Mən çox gülməli bir hekayə oxudum',
        ch: 'Mən çox gülməli bir hekayə oxudum'
      },
      {
        id: 907,
        sntc: 'Do you need to solve this problem right now?',
        tr: 'Sənə bu problemi indicə həll etmək lazımdır?',
        ch: 'Sənə bu problemi indicə həll etmək lazımdır?'
      },
      {
        id: 908,
        sntc: 'I understood you at once',
        tr: 'Mən səni bir anda başa düşdüm',
        ch: 'Mən səni bir anda başa düşdüm'
      },
      {
        id: 909,
        sntc: 'I learnt it by heart',
        tr: 'Mən bunu əzbər öyrəndim',
        ch: 'Mən bunu əzbər öyrəndim'
      },
      {
        id: 910,
        sntc: 'He cut himself',
        tr: 'O, özünü kəsdi',
        ch: 'O, özünü kəsdi'
      }
    ],
    [{
        id: 911,
        sntc: 'They stole all his money',
        tr: 'Onlar onun bütün pullarını oğurladılar',
        ch: 'Onlar onun bütün pullarını oğurladılar'
      },
      {
        id: 912,
        sntc: 'I overcame all these difficulties',
        tr: 'Mən bütün bu çətinliklərin öhdəsindən gəldim',
        ch: 'Mən bütün bu çətinliklərin öhdəsindən gəldim'
      },
      {
        id: 913,
        sntc: 'He ate a sandwich',
        tr: 'O, sendviç yedi',
        ch: 'O, sendviç yedi'
      },
      {
        id: 914,
        sntc: 'I swam in the lake',
        tr: 'Mən göldə üzdüm',
        ch: 'Mən göldə üzdüm'
      },
      {
        id: 915,
        sntc: "It's dark",
        tr: 'Qaranlıqdır',
        ch: 'Qaranlıqdır'
      },
      {
        id: 916,
        sntc: 'She foresaw this situation',
        tr: 'O, bu vəziyyəti qabaqcadan görüb',
        ch: 'O, bu vəziyyəti qabaqcadan görüb'
      },
      {
        id: 917,
        sntc: 'She tore that document',
        tr: 'O, bu sənədi cırdı',
        ch: 'O, bu sənədi cırdı'
      },
      {
        id: 918,
        sntc: 'He redid it',
        tr: 'O, bunu tezdən etdi',
        ch: 'O, bunu tezdən etdi'
      },
      {
        id: 919,
        sntc: 'I’m afraid you misunderstood me',
        tr: 'Mən qorxuram sən məni səhv başa düşdün',
        ch: 'Mən qorxuram sən məni səhv başa düşdün'
      },
      {
        id: 920,
        sntc: 'He often overpaid for no reason',
        tr: 'O, çox vaxt səbəb olmadan həddindən artıq maaş verirdi',
        ch: 'O, çox vaxt səbəb olmadan həddindən artıq maaş verirdi'
      }
    ],
    [{
        id: 921,
        sntc: 'I spent more than seven hundred dollars on it',
        tr: 'Mən buna yeddi yüz dollardan çox pul xərclədim',
        ch: 'Mən buna yeddi yüz dollardan çox pul xərclədim'
      },
      {
        id: 922,
        sntc: 'I redid this exercise at last',
        tr: 'Mən bu tapşırığı nəhayət ki yenidən etdim',
        ch: 'Mən bu tapşırığı nəhayət ki yenidən etdim'
      },
      {
        id: 923,
        sntc: 'He lit the light',
        tr: 'O, işıqı yandırdı',
        ch: 'O, işıqı yandırdı'
      },
      {
        id: 924,
        sntc: 'The dog bit her',
        tr: 'İt onu dişlədi',
        ch: 'İt onu dişlədi'
      },
      {
        id: 925,
        sntc: 'He withdrew all the money',
        tr: 'O, bütün pulları çıxardı ',
        ch: 'O, bütün pulları çıxardı '
      },
      {
        id: 926,
        sntc: 'I want to live in England',
        tr: 'Mən İngiltərədə yaşamaq istəyirəm',
        ch: 'Mən İngiltərədə yaşamaq istəyirəm'
      },
      {
        id: 927,
        sntc: 'They spoilt the food',
        tr: 'Onlar yeməyi xarab etdilər',
        ch: 'Onlar yeməyi xarab etdilər'
      },
      {
        id: 928,
        sntc: 'This food smelt good',
        tr: 'Bu yeməkdən yaxşı iy gəlirdi',
        ch: 'Bu yeməkdən yaxşı iy gəlirdi'
      },
      {
        id: 929,
        sntc: 'The wind blew unexpectedly',
        tr: 'Külək gözlənilmədən əsdi',
        ch: 'Külək gözlənilmədən əsdi'
      },
      {
        id: 930,
        sntc: 'She hurt his feelings',
        tr: 'O, onun hisslərini incitdi',
        ch: 'O, onun hisslərini incitdi'
      }
    ],
    [{
        id: 931,
        sntc: 'She kept her money in this bank',
        tr: 'O, pulunu bu bankda saxladı',
        ch: 'O, pulunu bu bankda saxladı'
      },
      {
        id: 932,
        sntc: 'He sent me a parcel',
        tr: 'O, mənə bağlama göndərdi',
        ch: 'O, mənə bağlama göndərdi'
      },
      {
        id: 933,
        sntc: 'They sold their house for half a million',
        tr: 'Onlar evlərini yarım milyona satdılar',
        ch: 'Onlar evlərini yarım milyona satdılar'
      },
      {
        id: 934,
        sntc: 'They broke the window',
        tr: 'Onlar pəncərəni sındırdılar',
        ch: 'Onlar pəncərəni sındırdılar'
      },
      {
        id: 935,
        sntc: 'I held it in my arms',
        tr: 'Mən bunu əllərimdə tutdum',
        ch: 'Mən bunu əllərimdə tutdum'
      },
      {
        id: 936,
        sntc: 'I think you spent too little money',
        tr: 'Mən düşünürəm sən çox az pul xərcləmisən',
        ch: 'Mən düşünürəm sən çox az pul xərcləmisən'
      },
      {
        id: 937,
        sntc: 'Does he like this project?',
        tr: 'Bu layihə onun xoşuna gəlir?',
        ch: 'Bu layihə onun xoşuna gəlir?'
      },
      {
        id: 938,
        sntc: 'I drove home',
        tr: 'Mən maşınla evə getdim',
        ch: 'Mən maşınla evə getdim'
      },
      {
        id: 939,
        sntc: 'He withdrew twenty thousand euros from his account',
        tr: 'O, hesabından iyirmi min avro çıxarıb',
        ch: 'O, hesabından iyirmi min avro çıxarıb'
      },
      {
        id: 940,
        sntc: 'They burnt the village',
        tr: 'Onlar kəndi yandırdılar',
        ch: 'Onlar kəndi yandırdılar'
      }
    ],
    [{
        id: 941,
        sntc: 'I flew back to Los Angeles',
        tr: 'Mən Los-Ancelesə qayıtdım',
        ch: 'Mən Los-Ancelesə qayıtdım'
      },
      {
        id: 942,
        sntc: 'She drew a real masterpiece',
        tr: 'O, əsl şah əsər çəkdi',
        ch: 'O, əsl şah əsər çəkdi'
      },
      {
        id: 943,
        sntc: 'We see it in the last sentence',
        tr: 'Biz bunu son cümlədə görürük',
        ch: 'Biz bunu son cümlədə görürük'
      },
      {
        id: 944,
        sntc: 'I forgot to tell them this thing',
        tr: 'Mən bu şeyi ona demeyə unutdum',
        ch: 'Mən bu şeyi ona demeyə unutdum'
      },
      {
        id: 945,
        sntc: 'He fed his dog',
        tr: 'O, itini yedizdirdi',
        ch: 'O, itini yedizdirdi'
      },
      {
        id: 946,
        sntc: 'They hit him very hard',
        tr: 'Onlar onu çox sərt vurdular',
        ch: 'Onlar onu çox sərt vurdular'
      },
      {
        id: 947,
        sntc: 'I forgot everything',
        tr: 'Mən hər şeyi unutdum',
        ch: 'Mən hər şeyi unutdum'
      },
      {
        id: 948,
        sntc: 'He sang his favorite song',
        tr: 'O, ən sevdiyi mahnını oxudu',
        ch: 'O, ən sevdiyi mahnını oxudu'
      },
      {
        id: 949,
        sntc: 'She fed the children',
        tr: 'O, uşaqları yedizdirdi',
        ch: 'O, uşaqları yedizdirdi'
      },
      {
        id: 950,
        sntc: 'Does he help you?',
        tr: 'O, sizə kömək edir?',
        ch: 'O, sizə kömək edir?'
      }
    ],
    [{
        id: 951,
        sntc: 'I dreamt about different things',
        tr: 'Mən müxtəlif şeylər haqqında xəyallar qurdum',
        ch: 'Mən müxtəlif şeylər haqqında xəyallar qurdum'
      },
      {
        id: 952,
        sntc: 'I woke up very early',
        tr: 'Mən yuxudan çox tez oyandım',
        ch: 'Mən yuxudan çox tez oyandım'
      },
      {
        id: 953,
        sntc: 'He lent her several thousand dollars',
        tr: 'O, onar bir neçə min dollar borc verdi',
        ch: 'O, onar bir neçə min dollar borc verdi'
      },
      {
        id: 954,
        sntc: 'Where does he work?',
        tr: 'O harada işləyir?',
        ch: 'O harada işləyir?'
      },
      {
        id: 955,
        sntc: 'The boys swam in the swimming pool',
        tr: 'Oğlanlar üzgüçülük hovuzunda üzdülər',
        ch: 'Oğlanlar üzgüçülük hovuzunda üzdülər'
      },
      {
        id: 956,
        sntc: 'I swam there last summer',
        tr: 'Mən keçən yay orada üzdüm',
        ch: 'Mən keçən yay orada üzdüm'
      },
      {
        id: 957,
        sntc: 'He spoilt everything',
        tr: 'O, hər şeyi korladı',
        ch: 'O, hər şeyi korladı'
      },
      {
        id: 958,
        sntc: 'The ship sank',
        tr: 'Gəmi batdı',
        ch: 'Gəmi batdı'
      },
      {
        id: 959,
        sntc: 'I put it on the table',
        tr: 'Mən bunu stolun üstünə qoydum',
        ch: 'Mən bunu stolun üstünə qoydum'
      },
      {
        id: 960,
        sntc: 'I heard it in the news',
        tr: 'Mən bunu xəbərdə eşitdim',
        ch: 'Mən bunu xəbərdə eşitdim'
      }
    ],
    [{
        id: 961,
        sntc: 'It smelt terrible',
        tr: 'Bu, dəhşətli qoxu verdi',
        ch: 'Bu, dəhşətli qoxu verdi'
      },
      {
        id: 962,
        sntc: 'I hung my coat on a hook',
        tr: 'Mən paltomu qarmaqcıqdan asdım',
        ch: 'Mən paltomu qarmaqcıqdan asdım'
      },
      {
        id: 963,
        sntc: 'It smelt bad',
        tr: 'Bu, pis iy verir',
        ch: 'Bu, pis iy verir'
      },
      {
        id: 964,
        sntc: 'Where is the boy?',
        tr: 'Oğlan haradadır?',
        ch: 'Oğlan haradadır?'
      },
      {
        id: 965,
        sntc: 'He sang really well',
        tr: 'O, həqiqətən yaxşı oxudu',
        ch: 'O, həqiqətən yaxşı oxudu'
      },
      {
        id: 966,
        sntc: 'I rode a horse',
        tr: 'Mən at sürdüm',
        ch: 'Mən at sürdüm'
      },
      {
        id: 967,
        sntc: 'I slept for two hours',
        tr: 'Mən iki saat yatdım',
        ch: 'Mən iki saat yatdım'
      },
      {
        id: 968,
        sntc: 'She hurt her arm',
        tr: 'O, əlini yaraladı',
        ch: 'O, əlini yaraladı'
      },
      {
        id: 969,
        sntc: 'She forgave everything',
        tr: 'O, hər şeyi bağışladı',
        ch: 'O, hər şeyi bağışladı'
      },
      {
        id: 970,
        sntc: 'He dreamt about money',
        tr: 'O, pul haqqında xəyal qurdu',
        ch: 'O, pul haqqında xəyal qurdu'
      }
    ],
    [{
        id: 971,
        sntc: 'I forgot to say it',
        tr: 'Mən bunu deməyə unutdum',
        ch: 'Mən bunu deməyə unutdum'
      },
      {
        id: 972,
        sntc: 'We overcame those difficulties',
        tr: 'Biz bu çətinliklərin öhdəsindən gəldik',
        ch: 'Biz bu çətinliklərin öhdəsindən gəldik'
      },
      {
        id: 973,
        sntc: 'He hurt her feelings',
        tr: 'O, onun hisslərini incitdi',
        ch: 'O, onun hisslərini incitdi'
      },
      {
        id: 974,
        sntc: 'He dug a hole',
        tr: 'O, bir quyu qazdı',
        ch: 'O, bir quyu qazdı'
      },
      {
        id: 975,
        sntc: 'I really like this place',
        tr: 'Mən bu yeri həqiqətən çox bəyənirəm',
        ch: 'Mən bu yeri həqiqətən çox bəyənirəm'
      },
      {
        id: 976,
        sntc: 'He tore the book',
        tr: 'O, kitabı cırdı',
        ch: 'O, kitabı cırdı'
      },
      {
        id: 977,
        sntc: 'She often overslept',
        tr: 'O, çox vaxt həddən artıq yatırdı',
        ch: 'O, çox vaxt həddən artıq yatırdı'
      },
      {
        id: 978,
        sntc: 'They fought very bravely',
        tr: 'Onlar çox cəsarətlə döyüşdülər',
        ch: 'Onlar çox cəsarətlə döyüşdülər'
      },
      {
        id: 979,
        sntc: 'I caught the ball',
        tr: 'Mən topu tutdum',
        ch: 'Mən topu tutdum'
      },
      {
        id: 980,
        sntc: 'I threw it away',
        tr: 'Mən bunu tulladım',
        ch: 'Mən bunu tulladım'
      }
    ],
    [{
        id: 981,
        sntc: "What's your husband's name?",
        tr: 'Sənin ərinin adı nədir?',
        ch: 'Sənin ərinin adı nədir?'
      },
      {
        id: 982,
        sntc: 'We slept more than enough',
        tr: 'Biz kifayət qədər yatdıq',
        ch: 'Biz kifayət qədər yatdıq'
      },
      {
        id: 983,
        sntc: 'She fed the cat',
        tr: 'O, pişiyi yedizdirdi',
        ch: 'O, pişiyi yedizdirdi'
      },
      {
        id: 984,
        sntc: 'They burnt the house',
        tr: 'Onlar evi yandırdılar',
        ch: 'Onlar evi yandırdılar'
      },
      {
        id: 985,
        sntc: 'I drove to the park',
        tr: 'Mən parka maşınla getdim',
        ch: 'Mən parka maşınla getdim'
      },
      {
        id: 986,
        sntc: 'He told her too much',
        tr: 'O, ona çox şey danışdı',
        ch: 'O, ona çox şey danışdı'
      },
      {
        id: 987,
        sntc: 'He made a discovery',
        tr: 'O, bir kəşf etdi',
        ch: 'O, bir kəşf etdi'
      },
      {
        id: 988,
        sntc: 'They had a great time together',
        tr: 'Onlar birlikdə çox gözəl vaxt keçirdilər',
        ch: 'Onlar birlikdə çox gözəl vaxt keçirdilər'
      },
      {
        id: 989,
        sntc: 'Is the teacher right?',
        tr: 'Müəllim haqlıdır?',
        ch: 'Müəllim haqlıdır?'
      },
      {
        id: 990,
        sntc: 'He said it very loudly',
        tr: 'O, bunu çox ucadan dedi',
        ch: 'O, bunu çox ucadan dedi'
      }
    ],
    [{
        id: 991,
        sntc: 'My brother is sixteen',
        tr: 'Mənim qardaşımın on altı yaşı var',
        ch: 'Mənim qardaşımın on altı yaşı var'
      },
      {
        id: 992,
        sntc: 'I said it again',
        tr: 'Mən bunu yenə dedim',
        ch: 'Mən bunu yenə dedim'
      },
      {
        id: 993,
        sntc: 'He had a very interesting idea',
        tr: 'Onun, çox maraqlı bir fikri var idi',
        ch: 'Onun, çox maraqlı bir fikri var idi'
      },
      {
        id: 994,
        sntc: 'My friend did him a favor',
        tr: 'Dostum ona lütf etdi',
        ch: 'Dostum ona lütf etdi'
      },
      {
        id: 995,
        sntc: 'I could do it for hours',
        tr: 'Mən bunu saatlarla edə bilərdim',
        ch: 'Mən bunu saatlarla edə bilərdim'
      },
      {
        id: 996,
        sntc: "It's very interesting",
        tr: 'Bu çox maraqlıdır',
        ch: 'Bu çox maraqlıdır'
      },
      {
        id: 997,
        sntc: 'I took him with me',
        tr: 'Mən onu özümlə apardım',
        ch: 'Mən onu özümlə apardım'
      },
      {
        id: 998,
        sntc: 'They spoke Chinese',
        tr: 'Onlar çin dilində danışdılar',
        ch: 'Onlar çin dilində danışdılar'
      },
      {
        id: 999,
        sntc: 'He became famous',
        tr: 'O, məşhur oldu',
        ch: 'O, məşhur oldu'
      },
      {
        id: 1000,
        sntc: 'They spoke French',
        tr: 'Onlar fransız dilində danışırdılar',
        ch: 'Onlar fransız dilində danışırdılar'
      }
    ],
    [{
        id: 1001,
        sntc: 'He gave her four hundred dollars',
        tr: 'O, ona dörd yüz dollar verdi',
        ch: 'O, ona dörd yüz dollar verdi'
      },
      {
        id: 1002,
        sntc: 'He became a very famous actor',
        tr: 'O, çox məşhur aktyor oldu',
        ch: 'O, çox məşhur aktyor oldu'
      },
      {
        id: 1003,
        sntc: 'We need to solve this problem',
        tr: 'Bizə bu problemi həll etmək lazımdır',
        ch: 'Bizə bu problemi həll etmək lazımdır'
      },
      {
        id: 1004,
        sntc: 'We left America',
        tr: 'Biz Amerikanı tərk etdik',
        ch: 'Biz Amerikanı tərk etdik'
      },
      {
        id: 1005,
        sntc: 'I wrote down the following thing',
        tr: 'Mən aşağıdakı şeyi yazdım',
        ch: 'Mən aşağıdakı şeyi yazdım'
      },
      {
        id: 1006,
        sntc: 'This lesson began half an hour ago',
        tr: 'Bu dərs yarım saat əvvəl başladı',
        ch: 'Bu dərs yarım saat əvvəl başladı'
      },
      {
        id: 1007,
        sntc: 'He meant to help me',
        tr: 'O, mənə kömək etmək istəyirdi',
        ch: 'O, mənə kömək etmək istəyirdi'
      },
      {
        id: 1008,
        sntc: 'The news is bad',
        tr: 'Xəbərlər pisdir',
        ch: 'Xəbərlər pisdir'
      },
      {
        id: 1009,
        sntc: 'I perfectly understood you',
        tr: 'Mən səni mükəmməl başa düşdüm',
        ch: 'Mən səni mükəmməl başa düşdüm'
      },
      {
        id: 1010,
        sntc: 'He set up a very profitable business',
        tr: 'O, çox gəlirli biznes qurdu',
        ch: 'O, çox gəlirli biznes qurdu'
      }
    ],
    [{
        id: 1011,
        sntc: 'I sat down',
        tr: 'Mən oturdum',
        ch: 'Mən oturdum'
      },
      {
        id: 1012,
        sntc: 'He set up a very successful company',
        tr: 'O, çox uğurlu şirkət qurdu',
        ch: 'O, çox uğurlu şirkət qurdu'
      },
      {
        id: 1013,
        sntc: "What's your friend's name?",
        tr: 'Sənin dostunun adı nədir?',
        ch: 'Sənin dostunun adı nədir?'
      },
      {
        id: 1014,
        sntc: 'I paid for him',
        tr: 'Mən onun yerinə pul verdim',
        ch: 'Mən onun yerinə pul verdim'
      },
      {
        id: 1015,
        sntc: 'They understood each other',
        tr: 'Onlar bir-birlərini başa düşürdülər',
        ch: 'Onlar bir-birlərini başa düşürdülər'
      },
      {
        id: 1016,
        sntc: 'We left for America',
        tr: 'Biz Amerikaya yola düşdük',
        ch: 'Biz Amerikaya yola düşdük'
      },
      {
        id: 1017,
        sntc: 'I grew up in America',
        tr: 'Mən Amerikada böyümüşəm',
        ch: 'Mən Amerikada böyümüşəm'
      },
      {
        id: 1018,
        sntc: 'She sent me a letter',
        tr: 'O, mənə məktub göndərdi',
        ch: 'O, mənə məktub göndərdi'
      },
      {
        id: 1019,
        sntc: 'He fell down and hurt his arm',
        tr: 'O, yıxıldı və qolunu yaraladı',
        ch: 'O, yıxıldı və qolunu yaraladı'
      },
      {
        id: 1020,
        sntc: "I don't like this furniture",
        tr: 'Bu mebel xoşuma gəlmir',
        ch: 'Bu mebel xoşuma gəlmir'
      }
    ],
    [{
        id: 1021,
        sntc: 'He came to the meeting',
        tr: 'O, görüşə gəldi',
        ch: 'O, görüşə gəldi'
      },
      {
        id: 1022,
        sntc: 'They spoke Italian',
        tr: 'Onlar italyanca danışırdılar',
        ch: 'Onlar italyanca danışırdılar'
      },
      {
        id: 1023,
        sntc: 'He taught English',
        tr: 'O, ingilis dilini öyrətirdi',
        ch: 'O, ingilis dilini öyrətirdi'
      },
      {
        id: 1024,
        sntc: 'He broke this rule',
        tr: 'O, bu qaydanı pozdu',
        ch: 'O, bu qaydanı pozdu'
      },
      {
        id: 1025,
        sntc: 'She grew up in England',
        tr: 'O, İngiltərədə böyüyüb',
        ch: 'O, İngiltərədə böyüyüb'
      },
      {
        id: 1026,
        sntc: 'They broke the rules',
        tr: 'Onlar bu qaydanı pozdular',
        ch: 'Onlar bu qaydanı pozdular'
      },
      {
        id: 1027,
        sntc: 'I need to prepare for this exam',
        tr: 'Mənə bu imtahana hazırlaşmaq lazımdır',
        ch: 'Mənə bu imtahana hazırlaşmaq lazımdır'
      },
      {
        id: 1028,
        sntc: 'I felt so happy',
        tr: 'Mən özümü çox xoşbəxt hiss edirdim',
        ch: 'Mən özümü çox xoşbəxt hiss edirdim'
      },
      {
        id: 1029,
        sntc: 'I thought so, too',
        tr: 'Mən də elə düşünürdüm',
        ch: 'Mən də elə düşünürdüm'
      },
      {
        id: 1030,
        sntc: 'He gave up drinking',
        tr: 'O, içkidən imtina etdi',
        ch: 'O, içkidən imtina etdi'
      }
    ],
    [{
        id: 1031,
        sntc: 'I found my keys',
        tr: 'Mən açarlarımı tapdım',
        ch: 'Mən açarlarımı tapdım'
      },
      {
        id: 1032,
        sntc: 'He taught me a lesson',
        tr: 'O, mənə dərs verdi',
        ch: 'O, mənə dərs verdi'
      },
      {
        id: 1033,
        sntc: 'They fought for their rights',
        tr: 'Onlar öz hüquqları uğrunda mübarizə apardılar',
        ch: 'Onlar öz hüquqları uğrunda mübarizə apardılar'
      },
      {
        id: 1034,
        sntc: 'I lay in bed',
        tr: 'Mən yataqda uzandım',
        ch: 'Mən yataqda uzandım'
      },
      {
        id: 1035,
        sntc: 'He felt very disappointed',
        tr: 'O, çox məyus olmuşdu',
        ch: 'O, çox məyus olmuşdu'
      },
      {
        id: 1036,
        sntc: 'I met so many new words there',
        tr: 'Mən orada çoxlu sayda yeni sözlərlə tanış oldum',
        ch: 'Mən orada çoxlu sayda yeni sözlərlə tanış oldum'
      },
      {
        id: 1037,
        sntc: 'I sat on a chair',
        tr: 'Mən stulda oturdum',
        ch: 'Mən stulda oturdum'
      },
      {
        id: 1038,
        sntc: 'She sold her flat',
        tr: 'O, öz mənzilini satdı',
        ch: 'O, öz mənzilini satdı'
      },
      {
        id: 1039,
        sntc: 'Do your friends support you?',
        tr: 'Sənin dostların sənə dəstək olurlar?',
        ch: 'Sənin dostların sənə dəstək olurlar?'
      },
      {
        id: 1040,
        sntc: 'I put it on the desk',
        tr: 'Mən bunu masanın üstünə qoydum',
        ch: 'Mən bunu masanın üstünə qoydum'
      }
    ],
    [{
        id: 1041,
        sntc: 'The soldiers fought very bravely and courageously',
        tr: 'Əsgərlər çox mərd və cəsarətli döyüşdülər',
        ch: 'Əsgərlər çox mərd və cəsarətli döyüşdülər'
      },
      {
        id: 1042,
        sntc: 'I threw this thing away',
        tr: 'Mən bu əşyanı tulladım',
        ch: 'Mən bu əşyanı tulladım'
      },
      {
        id: 1043,
        sntc: 'He paid for us',
        tr: 'O, bizim üçün pul ödədi',
        ch: 'O, bizim üçün pul ödədi'
      },
      {
        id: 1044,
        sntc: 'Who controls it?',
        tr: 'Bunu kim idarə edir?',
        ch: 'Bunu kim idarə edir?'
      },
      {
        id: 1045,
        sntc: 'I grew up in the capital of our country',
        tr: 'Mən ölkəmizin paytaxtında böyümüşəm',
        ch: 'Mən ölkəmizin paytaxtında böyümüşəm'
      },
      {
        id: 1046,
        sntc: 'We won in that competition',
        tr: 'Biz həmin yarışda qalib gəldik',
        ch: 'Biz həmin yarışda qalib gəldik'
      },
      {
        id: 1047,
        sntc: 'He kept his promise',
        tr: 'O, vədinə əməl etdi',
        ch: 'O, vədinə əməl etdi'
      },
      {
        id: 1048,
        sntc: 'I read it in this newspaper',
        tr: 'Mən bunu bu qəzetdə oxudum',
        ch: 'Mən bunu bu qəzetdə oxudum'
      },
      {
        id: 1049,
        sntc: 'He cut the meat into four parts',
        tr: 'O, əti dörd hissəyə böldü',
        ch: 'O, əti dörd hissəyə böldü'
      },
      {
        id: 1050,
        sntc: 'He ate everything',
        tr: 'O, hər şeyi yedi',
        ch: 'O, hər şeyi yedi'
      }
    ],
    [{
        id: 1051,
        sntc: 'I didn’t devote much time to English',
        tr: 'Mən ingilis dilinə çox vaxt ayırmadım',
        ch: 'Mən ingilis dilinə çox vaxt ayırmadım'
      },
      {
        id: 1052,
        sntc: 'You didn’t tell me the second thing',
        tr: 'Sən mənə ikinci şeyi demədin',
        ch: 'Sən mənə ikinci şeyi demədin'
      },
      {
        id: 1053,
        sntc: 'They didn’t get divorced',
        tr: 'Onlar boşanmadılar',
        ch: 'Onlar boşanmadılar'
      },
      {
        id: 1054,
        sntc: 'You didn’t show it to me',
        tr: 'Sən bunu mənə göstərmədin',
        ch: 'Sən bunu mənə göstərmədin'
      },
      {
        id: 1055,
        sntc: 'We didn’t see him yesterday',
        tr: 'Biz dünən onu görmədik',
        ch: 'Biz dünən onu görmədik'
      },
      {
        id: 1056,
        sntc: 'She didn’t interrupt him',
        tr: 'O, onun sözünü kəsmədi',
        ch: 'O, onun sözünü kəsmədi'
      },
      {
        id: 1057,
        sntc: 'My friend didn’t like this idea',
        tr: 'Mənim dostum bu fikri bəyənmədi',
        ch: 'Mənim dostum bu fikri bəyənmədi'
      },
      {
        id: 1058,
        sntc: 'It didn’t impress us',
        tr: 'Bu bizə təsir bağışlamadı',
        ch: 'Bu bizə təsir bağışlamadı'
      },
      {
        id: 1059,
        sntc: 'This time didn’t suit us',
        tr: 'Bu vaxt bizim üçün münasib deyildi',
        ch: 'Bu vaxt bizim üçün münasib deyildi'
      },
      {
        id: 1060,
        sntc: 'It didn’t disturb us',
        tr: 'Bu bizi narahat etmədi',
        ch: 'Bu bizi narahat etmədi'
      }
    ],
    [{
        id: 1061,
        sntc: 'She didn’t have such a feeling',
        tr: 'Onun belə bir hissi yox idi',
        ch: 'Onun belə bir hissi yox idi'
      },
      {
        id: 1062,
        sntc: 'Did it really worry you?',
        tr: 'Bu sizi doğrudan da narahat edib?',
        ch: 'Bu sizi doğrudan da narahat edib?'
      },
      {
        id: 1063,
        sntc: 'Did she advise you to do it?',
        tr: 'O, bunu etməyi sənə məsləhət gördü?',
        ch: 'O, bunu etməyi sənə məsləhət gördü?'
      },
      {
        id: 1064,
        sntc: 'Did I say it rightly?',
        tr: 'Mən bunu düz dedim?',
        ch: 'Mən bunu düz dedim?'
      },
      {
        id: 1065,
        sntc: 'We didn’t try to do it',
        tr: 'Biz bunu etməyə çalışmadıq',
        ch: 'Biz bunu etməyə çalışmadıq'
      },
      {
        id: 1066,
        sntc: 'Did we show satisfactory results?',
        tr: 'Biz qaneedici nəticələr göstərdik?',
        ch: 'Biz qaneedici nəticələr göstərdik?'
      },
      {
        id: 1067,
        sntc: 'Did I say it correctly?',
        tr: 'Mən düz dedim?',
        ch: 'Mən düz dedim?'
      },
      {
        id: 1068,
        sntc: 'She didn’t refuse to help us',
        tr: 'O, bizə kömək etməkdən imtina etmədi',
        ch: 'O, bizə kömək etməkdən imtina etmədi'
      },
      {
        id: 1069,
        sntc: 'Did you go there?',
        tr: 'Sən ora getmisən?',
        ch: 'Sən ora getmisən?'
      },
      {
        id: 1070,
        sntc: 'Did I say it incorrectly?',
        tr: 'Mən bunu səhv dedim?',
        ch: 'Mən bunu səhv dedim?'
      }
    ],
    [{
        id: 1071,
        sntc: 'What videos did you watch?',
        tr: 'Sən hansı videoları baxdın?',
        ch: 'Sən hansı videoları baxdın?'
      },
      {
        id: 1072,
        sntc: 'How often did you go to the gym?',
        tr: 'Sən idman zalına nə sıxlıqda gedirdin?',
        ch: 'Sən idman zalına nə sıxlıqda gedirdin?'
      },
      {
        id: 1073,
        sntc: 'I sat on a chair',
        tr: 'Mən stulda oturdum',
        ch: 'Mən stulda oturdum'
      },
      {
        id: 1074,
        sntc: 'Did she decide not to do it?',
        tr: 'O, bunu etməmək qərarına gəldi?',
        ch: 'O, bunu etməmək qərarına gəldi?'
      },
      {
        id: 1075,
        sntc: 'How much did it cost?',
        tr: 'Bu neçəyə başa gəldi?',
        ch: 'Bu neçəyə başa gəldi?'
      },
      {
        id: 1076,
        sntc: 'When did he come back?',
        tr: 'O, nə vaxt qayıtdı?',
        ch: 'O, nə vaxt qayıtdı?'
      },
      {
        id: 1077,
        sntc: 'I found my wallet',
        tr: 'Mən pul kisəmi tapdım',
        ch: 'Mən pul kisəmi tapdım'
      },
      {
        id: 1078,
        sntc: 'How regularly did you do this kind of exercises?',
        tr: 'Sən bu cür məşqləri müntəzəm olaraq necə edirdin?',
        ch: 'Sən bu cür məşqləri müntəzəm olaraq necə edirdin?'
      },
      {
        id: 1079,
        sntc: 'What did you say?',
        tr: 'Sən nə dedin?',
        ch: 'Sən nə dedin?'
      },
      {
        id: 1080,
        sntc: "We aren't colleagues",
        tr: 'Biz iş yoldaşları deyilik',
        ch: 'Biz iş yoldaşları deyilik'
      }
    ],
    [{
        id: 1081,
        sntc: 'We were glad to see her',
        tr: 'Biz onu görməyə şad idik',
        ch: 'Biz onu görməyə şad idik'
      },
      {
        id: 1082,
        sntc: 'He’s lucky',
        tr: 'Onun bəxti getirdi',
        ch: 'Onun bəxti getirdi'
      },
      {
        id: 1083,
        sntc: 'They were together',
        tr: 'Onlar bir yerdə idilər',
        ch: 'Onlar bir yerdə idilər'
      },
      {
        id: 1084,
        sntc: 'You were very optimistic',
        tr: 'Sən çox optimist idin',
        ch: 'Sən çox optimist idin'
      },
      {
        id: 1085,
        sntc: 'We were really surprised',
        tr: 'Biz həqiqətən təəccübləndik',
        ch: 'Biz həqiqətən təəccübləndik'
      },
      {
        id: 1086,
        sntc: 'He was bitterly disappointed',
        tr: 'O, çox məyus oldu',
        ch: 'O, çox məyus oldu'
      },
      {
        id: 1087,
        sntc: 'You were too pessimistic',
        tr: 'Sən çox bədbin idin',
        ch: 'Sən çox bədbin idin'
      },
      {
        id: 1088,
        sntc: 'We were against it',
        tr: 'Biz bunun əleyhinə idik',
        ch: 'Biz bunun əleyhinə idik'
      },
      {
        id: 1089,
        sntc: 'He was very talented',
        tr: 'O, çox istedadlı idi',
        ch: 'O, çox istedadlı idi'
      },
      {
        id: 1090,
        sntc: 'They were very experienced employees',
        tr: 'Onlar çox təcrübəli işçi idilər',
        ch: 'Onlar çox təcrübəli işçi idilər'
      }
    ],
    [{
        id: 1091,
        sntc: 'The houses were big enough',
        tr: 'Evlər kifayət qədər böyük idi',
        ch: 'Evlər kifayət qədər böyük idi'
      },
      {
        id: 1092,
        sntc: 'His answer was wrong',
        tr: 'Onun cavabı səhv idi',
        ch: 'Onun cavabı səhv idi'
      },
      {
        id: 1093,
        sntc: 'This result was amazing',
        tr: 'Bu nəticə heyrətamiz oldu',
        ch: 'Bu nəticə heyrətamiz oldu'
      },
      {
        id: 1094,
        sntc: 'That money was enough',
        tr: 'Həmin pul kifayət idi',
        ch: 'Həmin pul kifayət idi'
      },
      {
        id: 1095,
        sntc: 'The lesson was very useful',
        tr: 'Dərs çox faydalı idi',
        ch: 'Dərs çox faydalı idi'
      },
      {
        id: 1096,
        sntc: 'My teachers were very professional',
        tr: 'Mənim müəllimlərim çox peşəkar idilər',
        ch: 'Mənim müəllimlərim çox peşəkar idilər'
      },
      {
        id: 1097,
        sntc: 'The lecture was too long',
        tr: 'Mühazirə çox uzun idi',
        ch: 'Mühazirə çox uzun idi'
      },
      {
        id: 1098,
        sntc: 'The news was very unusual',
        tr: 'Bu xəbər çox qəribə idi',
        ch: 'Bu xəbər çox qəribə idi'
      },
      {
        id: 1099,
        sntc: 'The women were so kind',
        tr: 'Qadınlar çox xeyirxah idilər',
        ch: 'Qadınlar çox xeyirxah idilər'
      },
      {
        id: 1100,
        sntc: 'The price was low',
        tr: 'Qiymət aşağı idi',
        ch: 'Qiymət aşağı idi'
      }
    ],
    [{
        id: 1101,
        sntc: 'They weren’t in this situation',
        tr: 'Onlar bu vəziyyətdə olmayıblar',
        ch: 'Onlar bu vəziyyətdə olmayıblar'
      },
      {
        id: 1102,
        sntc: 'We weren’t against it',
        tr: 'Biz bunun əleyhinə deyildik',
        ch: 'Biz bunun əleyhinə deyildik'
      },
      {
        id: 1103,
        sntc: 'They weren’t available ',
        tr: 'Onlar bəkar deyildilər ',
        ch: 'Onlar bəkar deyildilər '
      },
      {
        id: 1104,
        sntc: 'You weren’t right',
        tr: 'Sən haqlı deyildin',
        ch: 'Sən haqlı deyildin'
      },
      {
        id: 1105,
        sntc: 'The price was high',
        tr: 'Qiymət yüksək idi',
        ch: 'Qiymət yüksək idi'
      },
      {
        id: 1106,
        sntc: 'They were unavailable',
        tr: 'Onlar bekar deyildilər',
        ch: 'Onlar bekar deyildilər'
      },
      {
        id: 1107,
        sntc: 'Those results were terrible',
        tr: 'Bu nəticələr dəhşətli idi',
        ch: 'Bu nəticələr dəhşətli idi'
      },
      {
        id: 1108,
        sntc: 'You weren’t confident enough',
        tr: 'Mən kifayət qədər arxayın deyildin',
        ch: 'Mən kifayət qədər arxayın deyildin'
      },
      {
        id: 1109,
        sntc: 'I wasn’t sure',
        tr: 'Mən əmin deyildim',
        ch: 'Mən əmin deyildim'
      },
      {
        id: 1110,
        sntc: 'She wasn’t lucky',
        tr: 'Onun bəxti gətirmədi',
        ch: 'Onun bəxti gətirmədi'
      }
    ],
    [{
        id: 1111,
        sntc: 'Those events weren’t so important',
        tr: 'Həmin hadisələr o qədər də əhəmiyyətli deyildi',
        ch: 'Həmin hadisələr o qədər də əhəmiyyətli deyildi'
      },
      {
        id: 1112,
        sntc: 'The boy wasn’t strong',
        tr: 'Oğlan güclü deyildi',
        ch: 'Oğlan güclü deyildi'
      },
      {
        id: 1113,
        sntc: 'His attempt was unsuccessful',
        tr: 'Onun cəhdi uğursuz oldu',
        ch: 'Onun cəhdi uğursuz oldu'
      },
      {
        id: 1114,
        sntc: 'The boys weren’t strong',
        tr: 'Oğlanlar güclü deyildilər',
        ch: 'Oğlanlar güclü deyildilər'
      },
      {
        id: 1115,
        sntc: 'The woman wasn’t lonely',
        tr: 'Qadın tənha deyildi',
        ch: 'Qadın tənha deyildi'
      },
      {
        id: 1116,
        sntc: 'The day wasn’t rainy',
        tr: 'Gün yağışlı deyildi',
        ch: 'Gün yağışlı deyildi'
      },
      {
        id: 1117,
        sntc: 'His mistake was very small',
        tr: 'Onun səhvi çox kiçik idi',
        ch: 'Onun səhvi çox kiçik idi'
      },
      {
        id: 1118,
        sntc: 'The days weren’t windy',
        tr: 'Günlər küləkli deyildi',
        ch: 'Günlər küləkli deyildi'
      },
      {
        id: 1119,
        sntc: 'Her mistake was very serious',
        tr: 'Onun səhvi çox ciddi idi',
        ch: 'Onun səhvi çox ciddi idi'
      },
      {
        id: 1120,
        sntc: 'Those exams weren’t easy at all',
        tr: 'O imtahanlar heç də asan deyildi',
        ch: 'O imtahanlar heç də asan deyildi'
      }
    ],
    [{
        id: 1121,
        sntc: 'Were they hospitable?',
        tr: 'Onlar qonaqpərvər idilər?',
        ch: 'Onlar qonaqpərvər idilər?'
      },
      {
        id: 1122,
        sntc: 'Were we in that place?',
        tr: 'Biz həmin yerdə idik?',
        ch: 'Biz həmin yerdə idik?'
      },
      {
        id: 1123,
        sntc: 'I was surprised',
        tr: 'Mən təəccübləndim',
        ch: 'Mən təəccübləndim'
      },
      {
        id: 1124,
        sntc: 'Was I on the right way?',
        tr: 'Mən doğru yolda idim?',
        ch: 'Mən doğru yolda idim?'
      },
      {
        id: 1125,
        sntc: 'Were you poor?',
        tr: 'Sən kasıb idin?',
        ch: 'Sən kasıb idin?'
      },
      {
        id: 1126,
        sntc: 'The boy was abroad',
        tr: 'Oğlan xaricdə idi',
        ch: 'Oğlan xaricdə idi'
      },
      {
        id: 1127,
        sntc: 'Was he really confident?',
        tr: 'O, həqiqətən əmin idi?',
        ch: 'O, həqiqətən əmin idi?'
      },
      {
        id: 1128,
        sntc: 'Was she on a business trip?',
        tr: 'O, işgüzar səfərdə idi?',
        ch: 'O, işgüzar səfərdə idi?'
      },
      {
        id: 1129,
        sntc: 'We were lucky',
        tr: 'Bizim bəxtimiz gətirdi',
        ch: 'Bizim bəxtimiz gətirdi'
      },
      {
        id: 1130,
        sntc: 'Was she pregnant?',
        tr: 'O, hamilə idi?',
        ch: 'O, hamilə idi?'
      }
    ],
    [{
        id: 1131,
        sntc: 'Why was he loyal to them?',
        tr: 'O, nəyə görə onlara sadiq idi?',
        ch: 'O, nəyə görə onlara sadiq idi?'
      },
      {
        id: 1132,
        sntc: 'What was too expensive?',
        tr: 'Nə, çox bahalı idi?',
        ch: 'Nə, çox bahalı idi?'
      },
      {
        id: 1133,
        sntc: 'When were they at home?',
        tr: 'Onlar nə vaxt evdə idilər?',
        ch: 'Onlar nə vaxt evdə idilər?'
      },
      {
        id: 1134,
        sntc: 'What was in the box?',
        tr: 'Qutuda nə var idi?',
        ch: 'Qutuda nə var idi?'
      },
      {
        id: 1135,
        sntc: 'How was it?',
        tr: 'Bu necə olub?',
        ch: 'Bu necə olub?'
      },
      {
        id: 1136,
        sntc: 'Who was wrong?',
        tr: 'Kim haqlı deyildi?',
        ch: 'Kim haqlı deyildi?'
      },
      {
        id: 1137,
        sntc: 'How long time ago was it?',
        tr: 'Bu nə qədər vaxt əvvəl olub?',
        ch: 'Bu nə qədər vaxt əvvəl olub?'
      },
      {
        id: 1138,
        sntc: 'What lessons were really interesting?',
        tr: 'Hansı dərslər həqiqətən maraqlı idi?',
        ch: 'Hansı dərslər həqiqətən maraqlı idi?'
      },
      {
        id: 1139,
        sntc: 'Who was in the last place?',
        tr: 'Sonuncu yerdə kim idi?',
        ch: 'Sonuncu yerdə kim idi?'
      },
      {
        id: 1140,
        sntc: 'How far was it?',
        tr: 'Bu nə qədər uzaq idi?',
        ch: 'Bu nə qədər uzaq idi?'
      }
    ],
    [{
        id: 1141,
        sntc: 'How was the conference?',
        tr: 'Konfrans necə keçirildi?',
        ch: 'Konfrans necə keçirildi?'
      },
      {
        id: 1142,
        sntc: 'When were the students ready?',
        tr: 'Tələbələr nə vaxt hazır idilər?',
        ch: 'Tələbələr nə vaxt hazır idilər?'
      },
      {
        id: 1143,
        sntc: 'What new ideas were really interesting?',
        tr: 'Hansı yeni fikirlər həqiqətən maraqlı idi?',
        ch: 'Hansı yeni fikirlər həqiqətən maraqlı idi?'
      },
      {
        id: 1144,
        sntc: 'Why was your business partner against this decision?',
        tr: 'Niyə sənin iş yoldaşın bu qərarın əleyhinə idi?',
        ch: 'Niyə sənin iş yoldaşın bu qərarın əleyhinə idi?'
      },
      {
        id: 1145,
        sntc: 'How long was the meeting?',
        tr: 'Görüş nə qədər davam etdi?',
        ch: 'Görüş nə qədər davam etdi?'
      },
      {
        id: 1146,
        sntc: 'When was your wife there?',
        tr: 'Sənin yoldaşın orada nə vaxt olub?',
        ch: 'Sənin yoldaşın orada nə vaxt olub?'
      },
      {
        id: 1147,
        sntc: 'How long was the lesson?',
        tr: 'Dərs nə qədər davam etdi?',
        ch: 'Dərs nə qədər davam etdi?'
      },
      {
        id: 1148,
        sntc: 'Where was your boss last month?',
        tr: 'Sənin müdirin keçən ay harada idi?',
        ch: 'Sənin müdirin keçən ay harada idi?'
      },
      {
        id: 1149,
        sntc: 'How far was the hotel?',
        tr: 'Otel nə qədər uzaqda idi?',
        ch: 'Otel nə qədər uzaqda idi?'
      },
      {
        id: 1150,
        sntc: 'How much money was available?',
        tr: 'Nə qədər pul mövcud idi?',
        ch: 'Nə qədər pul mövcud idi?'
      }
    ],
  ]
};

// let obj = [];
// for (let i = 40; i < 50; i++) {
//   for (let a = 0; a < initialState.sentences[0].length; a++) {
//     // obj.id=initialState.sentences[0][i][a].id
//     obj.push(initialState.sentences[i][a].sntc)
//   }
//   console.log(obj)

// }
// setTimeout(() => {
//   console.log(obj)
// }, 1000)


const enAzSentences = (state = initialState, action) => {
  return state
}

export default enAzSentences