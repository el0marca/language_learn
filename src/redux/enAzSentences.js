const initialState = {
  sentences: [
    [
      [{
          id: 1,
          sntc: 'I think so',
          tr: 'Mən belə düşünürəm',
          ch: 'Mən belə düşünürəm Sən bilirəm gedirəm'
        },
        {
          id: 2,
          sntc: 'We understand it',
          tr: 'Biz bunu anlayırıq',
          ch: 'Mən belə Biz bunu bilirik anlayıram anlayırıq'
        },
        {
          id: 3,
          sntc: 'I speak English',
          tr: 'Mən İngilis dilində danışıram',
          ch: 'Mən İngilis Sən oxuyuram kitabları dilində danışıram'
        },
        {
          id: 4,
          sntc: 'They help me',
          tr: 'Onlar mənə kömək edir',
          ch: 'Onlar Siz mənə danışır oxuyur kömək edir'
        },
        {
          id: 5,
          sntc: 'She likes it',
          tr: 'O, bunu bəyənir',
          ch: 'O, Sən bunu onu deyir istəyir bəyənir'
        },
        {
          id: 6,
          sntc: 'I work there',
          tr: 'Mən orada işləyirəm',
          ch: 'Mən orada işləyirəm oxuyuram Sən danışıram'
        },
        {
          id: 7,
          sntc: 'It really helps me',
          tr: 'Bu həqiqətən mənə kömək edir',
          ch: 'Bu O, danışır həqiqətən mənə etmir kömək edir'
        },
        {
          id: 8,
          sntc: 'I live here',
          tr: 'Mən burada yaşayıram',
          ch: 'Mən burada orada oxuyuram oxuyur yaşayıram'
        },
        {
          id: 9,
          sntc: 'We live in this city',
          tr: 'Biz bu şəhərdə yaşayırıq',
          ch: 'Biz Siz bu ölkədə yaşayırsız şəhərdə yaşayırıq',
        },
        {
          id: 10,
          sntc: 'I remember it',
          tr: 'Mən bunu xatırlayıram',
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
          tr: 'Mən bəzən kinoya gedirəm',
          ch: 'Mən bəzən hər gün kinoya gedirəm həmişə'
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
          ch: 'Bu şey vacib görünür O əhəmiyyətsiz?'
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
          tr: 'Onun sözləri onu motivasiya edirmi?',
          ch: 'Onun sözləri sözü məni onu motivasiya edirmi?'
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
          tr: 'Sən İİngilis dilini nə qədər mütəmadi öyrənirsən?',
          ch: 'Sən İİngilis dilini Onlar oxuyur nə qədər mütəmadi öyrənirsən?'
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
          tr: 'Sən radioya nə qədər qulaq asırsan?',
          ch: 'Sən radioya kinoya Mən nə qədər qulaq asırsan?'
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
          tr: 'O, kinoya nə qədər gedir?',
          ch: 'O, kinoya nə qədər çox burada gedir?'
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
          tr: 'O yerə çatmaq üçün ona nə qədər vaxt lazımdır?',
          ch: 'O yerə çatmaq üçün ona nə qədər vaxt lazımdır?'
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
          tr: 'Bu nə qədər baş verir?',
          ch: 'Bu nə qədər O çox baş verir?'
        },
        {
          id: 168,
          sntc: 'How long does it take his daughter to get to school?',
          tr: 'Sənin qızına məktəbə getmək üçün nə qədər vaxt lazımdır?',
          ch: 'Sənin qızına məktəbə getmək üçün nə qədər vaxt lazımdır?'
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
          tr: 'O, nə qədər onların biliyini yoxlayır?',
          ch: 'O, nə qədər çox bizim onların biliyini yoxlayır?'
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
          tr: 'Onun qızına məktəbə getmək üçün nə qədər vaxt lazımdır?',
          ch: 'Onun qızına məktəbə getmək üçün nə qədər vaxt lazımdır?'
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
          tr: 'Ora neçə dəfə gedirsiniz?',
          ch: 'Ora neçə dəfə gedirsiniz?'
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
          tr: 'Bu barədə nə qədər çox düşünürsən?',
          ch: 'Bu barədə nə qədər çox düşünürsən?'
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
          tr: 'Sən bu tapşırıqları nə qədər müntəzəm olaraq edirsən?',
          ch: 'Sən bu tapşırıqları nə qədər müntəzəm olaraq edirsən?'
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
          tr: 'Nə qədər tez-tez İngilis dilində kitablar oxuyursan?',
          ch: 'Nə qədər tez-tez İngilis dilində kitablar oxuyursan?'
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
          tr: 'O, çox yaxşı insandır',
          ch: 'O, çox yaxşı insandır'
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
          tr: 'O, çox gözəl qızdır',
          ch: 'O, çox gözəl qızdır'
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
          tr: 'O, elə müdrik qadındır ki',
          ch: 'O, elə müdrik qadındır ki'
        },
        {
          id: 242,
          sntc: "It's such an effective method",
          tr: 'Bu, elə effektiv üsuldur ki',
          ch: 'Bu, elə effektiv üsuldur ki'
        },
        {
          id: 243,
          sntc: "It's so easy",
          tr: 'Bu, elə asandır',
          ch: 'Bu, elə asandır'
        },
        {
          id: 244,
          sntc: "She's very beautiful",
          tr: 'O, çox gözəldir',
          ch: 'O, çox gözəldir'
        },
        {
          id: 245,
          sntc: "It's such an expensive car",
          tr: 'Bu, elə bahalı avtomobildir ki',
          ch: 'Bu, elə bahalı avtomobildir ki'
        },
        {
          id: 246,
          sntc: "She's so clever",
          tr: 'O, o qədər ağıllıdır',
          ch: 'O, o qədər ağıllıdır'
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
          tr: 'O, elə peşəkar müəllimdir',
          ch: 'O, elə peşəkar müəllimdir'
        },
        {
          id: 249,
          sntc: "It's such a cheap thing",
          tr: 'Bu, elə ucuz əşyadır ki',
          ch: 'Bu, elə qədər ucuz əşyadır ki'
        },
        {
          id: 250,
          sntc: "He's so talented",
          tr: 'O, elə istedadlıdır ki',
          ch: 'O, elə qədər istedadlıdır ki'
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
          tr: 'Onun valideynləri indi xaricdədir',
          ch: 'Onun valideynləri indi xaricdədir'
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
          tr: 'Bu elə pis metoddır ki',
          ch: 'Bu elə pis metoddır ki'
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
          tr: 'Bu çətin qayda deyil',
          ch: 'Bu çətin qayda deyil'
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
          tr: 'Bu problemdir?',
          ch: 'Bu problemdir?'
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
          tr: 'Bu aşkardır?',
          ch: 'Bu aşkardır?'
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
          tr: 'Bu qlobal problemdir?',
          ch: 'Bu qlobal problemdir?'
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
          tr: 'Bu söz sizin üçün yenidirmi?',
          ch: 'Bu söz sizin üçün yenidirmi?'
        },
        {
          id: 289,
          sntc: 'Is this level enough?',
          tr: 'Bu səviyyə kifayət edirmi?',
          ch: 'Bu səviyyə kifayət edirmi?'
        },
        {
          id: 290,
          sntc: 'Are the boys at school?',
          tr: 'Oğlanlar məktəbdə oxuyurlar?',
          ch: 'Oğlanlar məktəbdə oxuyurlar?'
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
          tr: 'Qəribə nədir?',
          ch: 'Qəribə nədir?'
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
          tr: 'Nə düz deyil?',
          ch: 'Nə düz deyil?'
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
          tr: 'O, o qədər ağıllıdır ki',
          ch: 'O, o qədər ağıllıdır ki'
        },
        {
          id: 312,
          sntc: 'Is this method really ineffective?',
          tr: 'Bu üsul doğrudan da səmərəsizdir?',
          ch: 'Bu üsul doğrudan da səmərəsizdir?'
        },
        {
          id: 313,
          sntc: 'Why are those lessons so ineffective?',
          tr: 'Nəyə görə bu dərslər bu qədər yararsızdır?',
          ch: 'Nəyə görə bu dərslər bu qədər yararsızdır?'
        },
        {
          id: 314,
          sntc: 'Why are the students there?',
          tr: 'Tələbələr nə üçün oradadırlar?',
          ch: 'Tələbələr nə üçün oradadırlar?'
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
          tr: 'O, o qədər gözəldir ki',
          ch: 'O, o qədər gözəldir ki'
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
          tr: 'O məşqlər faydasızdır?',
          ch: 'O məşqlər faydasızdır?'
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
          tr: 'O kasıb qadındır?',
          ch: 'O kasıb qadındır?'
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
          tr: 'Bu aydındır?',
          ch: 'Bu aydındır?'
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
          tr: 'Bu elə qeyri-effektiv üsuldur ki',
          ch: 'Bu elə qeyri-effektiv üsuldur ki'
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
          tr: 'Sən nikbin deyilsən',
          ch: 'Sən nikbin deyilsən'
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
          tr: 'Bu qaydalar nə üçün bu qədər vacibdir?',
          ch: 'Bu qaydalar nə üçün bu qədər vacibdir?'
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
          tr: 'O, bu barədə maraqlanır',
          ch: 'O, bu barədə maraqlanır'
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
          tr: 'Nə demək istəyirsən?',
          ch: 'Nə demək istəyirsən?'
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
          tr: 'Radioya nə qədər qulaq asırsan?',
          ch: 'Radioya nə qədər qulaq asırsan?'
        },
        {
          id: 352,
          sntc: 'I don’t like this atmosphere',
          tr: 'Bu ab-hava xoşuma gəlmir',
          ch: 'Bu ab-hava xoşuma gəlmir'
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
          tr: 'Yaxşıyam, təşəkkürlər',
          ch: 'Yaxşıyam, təşəkkürlər'
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
          tr: 'Qardaşın tək yaşayır?',
          ch: 'Qardaşın tək yaşayır?'
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
          tr: 'O musiqi dinləməkdən zövq alır ',
          ch: 'O musiqi dinləməkdən zövq alır '
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
          tr: 'Mən idmanı sevirəm',
          ch: 'Mən idmanı sevirəm'
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
          tr: 'Bu onun nöqteyi - nəzəridir?',
          ch: 'Bu onun nöqteyi - nəzəridir?'
        },
        {
          id: 380,
          sntc: 'Where do you usually go in summer?',
          tr: 'Yayda adətən hara gedirsən?',
          ch: 'Yayda adətən hara gedirsən?'
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
          sntc: "His salary isn't so high It's low.",
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
          tr: 'İmtahanlarına adətən necə hazırlaşırsan?',
          ch: 'İmtahanlarına adətən necə hazırlaşırsan?'
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
          tr: 'Bunu yadda saxlamaq vacibdir',
          ch: 'Bunu yadda saxlamaq vacibdir'
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
          tr: 'İngilis dilində oxuya bilirəm',
          ch: 'İngilis dilində oxuya bilirəm'
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
          tr: 'Xaricdə yaşamaq xoşuma gəlir',
          ch: 'Xaricdə yaşamaq xoşuma gəlir'
        },
        {
          id: 398,
          sntc: 'You must tell me about this problem',
          tr: 'Bu problemdən mənə danışmalısan',
          ch: 'Bu problemdən mənə danışmalısan'
        },
        {
          id: 399,
          sntc: 'I should call him tomorrow',
          tr: 'Gərək sabah ona zəng vurum',
          ch: 'Gərək sabah ona zəng vurum'
        },
        {
          id: 400,
          sntc: 'She usually do it in the evening',
          tr: 'O, adətən axşamlar bunu edir',
          ch: 'O, adətən axşamlar bunu edir'
        }
      ],
      [{  id: 401,
        sntc: 'What do you like here?',
        tr: 'Burada nəyi bəyənirsən?',
        ch: 'Burada nəyi bəyənirsən?'
      },
      {  id: 402,
        sntc: 'I want this computer',
        tr: 'Mən bu kompüteri istəyirəm',
        ch: 'Mən bu kompüteri istəyirəm'
      },
      {  id: 403,
        sntc: 'Are the men at work?',
        tr: 'Kişilər işdədir?',
        ch: 'Kişilər işdədir?'
      },
      {  id: 404,
        sntc: "Who's with you?",
        tr: 'Kim səninlədir?',
        ch: 'Kim səninlədir?'
      },
      {  id: 405,
        sntc: 'This place is very beautiful',
        tr: 'Bu yer çox gözəldir',
        ch: 'Bu yer çox gözəldir'
      },
      {  id: 406,
        sntc: 'I do it to know English better',
        tr: 'Mən bunu İngilis dilini daha yaxşı bilmək üçün edirəm',
        ch: 'Mən bunu İngilis dilini daha yaxşı bilmək üçün edirəm'
      },
      {  id: 407,
        sntc: 'Is it a very important detail?',
        tr: 'Bu çox vacib detaldır?',
        ch: 'Bu çox vacib detaldır?'
      },
      {  id: 408,
        sntc: 'He has a company. Its profit is so big',
        tr: 'Onun bir şirkəti var. Onun qazancı çox böyükdür',
        ch: 'Onun bir şirkəti var. Onun qazancı çox böyükdür'
      },
      {  id: 409,
        sntc: 'Do I need to call him?',
        tr: 'Mənim ona zəng etməyim lazımdır?',
        ch: 'Mənim ona zəng etməyim lazımdır?'
      },
      {  id: 410,
        sntc: 'How much are these trousers?',
        tr: 'Bu şalvarlar neçəyədir?',
        ch: 'Bu şalvarlar neçəyədir?'
      }],
      [{  id: 411,
        sntc: "It's too difficult",
        tr: 'Bu çox çətindir',
        ch: 'Bu çox çətindir'
      },
      {  id: 412,
        sntc: 'I really like doing it',
        tr: 'Mən bunu etməyi həqiqətən xoşlayıram',
        ch: 'Mən bunu etməyi həqiqətən xoşlayıram'
      },
      {  id: 413,
        sntc: 'Who do you support?',
        tr: 'Kimi dəstəkləyirsən?',
        ch: 'Kimi dəstəkləyirsən?'
      },
      {  id: 414,
        sntc: 'Who is a tourist?',
        tr: 'Turist kimdir?',
        ch: 'Turist kimdir?'
      },
      {  id: 415,
        sntc: 'Do you like it?',
        tr: 'Bunu xoşlayırsan?',
        ch: 'Bunu xoşlayırsan?'
      },
      {  id: 416,
        sntc: "It's a very big success",
        tr: 'Bu çox böyük uğurdur',
        ch: 'Bu çox böyük uğurdur'
      },
      {  id: 417,
        sntc: 'Does she teach English?',
        tr: 'O, ingilis dilini öyrədir?',
        ch: 'O, ingilis dilini öyrədir?'
      },
      {  id: 418,
        sntc: 'Is the game boring?',
        tr: 'Oyun darıxdırıcıdır?',
        ch: 'Oyun darıxdırıcıdır?'
      },
      {  id: 419,
        sntc: 'Is it a big problem?',
        tr: 'Bu böyük problemdir?',
        ch: 'Bu böyük problemdir?'
      },
      {  id: 420,
        sntc: "What's your sister's name?",
        tr: 'Bacının adı nədir?',
        ch: 'Bacının adı nədir?'
      }],
      [{  id: 421,
        sntc: "What's his job?",
        tr: 'Onun işi nədir?',
        ch: 'Onun işi nədir?'
      },
      { id: 422, sntc: 'Are you tired?', tr: 'Yorğunsan?', ch: 'Yorğunsan?' },
      {  id: 423,
        sntc: "It's a very easy lesson",
        tr: 'Çox asan bir dərsdir',
        ch: 'Çox asan bir dərsdir'
      },
      {  id: 424,
        sntc: 'He feels happy',
        tr: 'O özünü xoşbəxt hiss edir',
        ch: 'O özünü xoşbəxt hiss edir'
      },
      {  id: 425,
        sntc: 'I like this example',
        tr: 'Bu misal xoşuma gəlir',
        ch: 'Bu misal xoşuma gəlir'
      },
      {  id: 426,
        sntc: 'How important is it?',
        tr: 'Bu nə dərəcədə vacibdir?',
        ch: 'Bu nə dərəcədə vacibdir?'
      },
      {  id: 427,
        sntc: "What's there?",
        tr: 'Orada nə var?',
        ch: 'Orada nə var?'
      },
      {  id: 428,
        sntc: 'I need to finish this project by next year',
        tr: 'Bu layihəni gələn ilə qədər bitirməliyəm',
        ch: 'Bu layihəni gələn ilə qədər bitirməliyəm'
      },
      {  id: 429,
        sntc: "He's a young man",
        tr: 'O, gənc bir adamdır',
        ch: 'O, gənc bir adamdır'
      },
      {  id: 430,
        sntc: 'Is your friend twenty-two?',
        tr: 'Dostunun iyirmi iki yaşı var?',
        ch: 'Dostunun iyirmi iki yaşı var?'
      }],
      [{  id: 431,
        sntc: "It's a small mistake",
        tr: 'Bu kiçik bir səhvdir',
        ch: 'Bu kiçik bir səhvdir'
      },
      {  id: 432,
        sntc: "This level isn't elementary",
        tr: 'Bu səviyyə elementar deyil',
        ch: 'Bu səviyyə elementar deyil'
      },
      {  id: 433,
        sntc: 'Your lessons really help',
        tr: 'Dərslərin həqiqətən də kömək edir',
        ch: 'Dərslərin həqiqətən də kömək edir'
      },
      {  id: 434,
        sntc: 'How do you get to work?',
        tr: 'İşə nəcə gedirsən?',
        ch: 'İşə nəcə gedirsən?'
      },
      {  id: 435,
        sntc: 'This book is really boring',
        tr: 'Bu kitab həqiqətən darıxdırıcıdır',
        ch: 'Bu kitab həqiqətən darıxdırıcıdır'
      },
      {  id: 436,
        sntc: 'Where does she usually go?',
        tr: 'O, adətən hara gedir?',
        ch: 'O, adətən hara gedir?'
      },
      {  id: 437,
        sntc: 'He sees that mistake',
        tr: 'O, bu səhvi görür',
        ch: 'O, bu səhvi görür'
      },
      {  id: 438,
        sntc: 'I need to do it this year',
        tr: 'Mənə bu il bunu etmək lazımdır',
        ch: 'Mənə bu il bunu etmək lazımdır'
      },
      {  id: 439,
        sntc: "I'm interested in it",
        tr: 'Mənə bununla maraqlanıram',
        ch: 'Mənə bununla maraqlanıram'
      },
      {  id: 440,
        sntc: "He'd like to write it down",
        tr: 'Bunu yazmaq istərdim',
        ch: 'Bunu yazmaq istərdim'
      }],
      [{  id: 441,
        sntc: 'What channels does he watch?',
        tr: 'O, hansı kanallara baxır?',
        ch: 'O, hansı kanallara baxır?'
      },
      {  id: 442,
        sntc: 'These students show brilliant results',
        tr: 'Bu tələbələr parlaq nəticələr göstərirlər',
        ch: 'Bu tələbələr parlaq nəticələr göstərirlər'
      },
      {  id: 443,
        sntc: 'The girl is very tall',
        tr: 'Qız çox boyludur',
        ch: 'Qız çox boyludur'
      },
      {  id: 444,
        sntc: 'How does your sister feel?',
        tr: 'Bacın özünü necə hiss edir?',
        ch: 'Bacın özünü necə hiss edir?'
      },
      {  id: 445,
        sntc: 'She needs to correct these mistakes',
        tr: 'O, bu səhvləri düzəltməlidir',
        ch: 'O, bu səhvləri düzəltməlidir'
      },
      {  id: 446,
        sntc: "It's a good idea",
        tr: 'Yaxşı fikirdir',
        ch: 'Yaxşı fikirdir'
      },
      {  id: 447,
        sntc: 'I want to have an Advanced level in English',
        tr: 'İngilis dilində qabaqcıl səviyyəyə malik olmaq istəyirəm',
        ch: 'İngilis dilində qabaqcıl səviyyəyə malik olmaq istəyirəm'
      },
      {  id: 448,
        sntc: "I'm so happy",
        tr: 'Mən çox xoşbəxtəm',
        ch: 'Mən çox xoşbəxtəm'
      },
      {  id: 449,
        sntc: 'How much is this pair of trousers?',
        tr: 'Bu cüt şalvar neçəyədir?',
        ch: 'Bu cüt şalvar neçəyədir?'
      },
      {  id: 450,
        sntc: 'Our mother thinks the same',
        tr: 'Anamız da eyni düşünür',
        ch: 'Anamız da eyni düşünür'
      }],
      [{  id: 451,
        sntc: "They aren't in Azerbaijan now",
        tr: 'Onlar indi Azərbaycanda deyillər',
        ch: 'Onlar indi Azərbaycanda deyillər'
      },
      {  id: 452,
        sntc: 'He sometimes plays computer games',
        tr: 'O, bəzən kompüter oyunları oynayır',
        ch: 'O, bəzən kompüter oyunları oynayır'
      },
      { id: 453, sntc: "It's too hot", tr: 'Çox istidir', ch: 'Çox istidir' },
      {  id: 454,
        sntc: "He's a businessman",
        tr: 'O, iş adamıdır',
        ch: 'O, iş adamıdır'
      },
      {  id: 455,
        sntc: "What's your name?",
        tr: 'Adınız nədir?',
        ch: 'Adınız nədir?'
      },
      {  id: 456,
        sntc: 'What videos do you admire more?',
        tr: 'Daha çox hansı videolara heyran qalırsan?',
        ch: 'Daha çox hansı videolara heyran qalırsan?'
      },
      {  id: 457,
        sntc: "It's important",
        tr: 'Bu vacibdir',
        ch: 'Bu vacibdir'
      },
      {  id: 458,
        sntc: "It's so far",
        tr: 'Bu çox uzaqdır',
        ch: 'Bu çox uzaqdır'
      },
      {  id: 459,
        sntc: 'The example is so informative',
        tr: 'Nümunə çox informativdir',
        ch: 'Nümunə çox informativdir'
      },
      {  id: 460,
        sntc: "It isn't worse",
        tr: 'Bu daha betər deyil',
        ch: 'Bu daha betər deyil'
      }],
      [{  id: 461,
        sntc: 'How long does it take you to get to school?',
        tr: 'Məktəbə getmək üçün sizə nə qədər vaxt lazımdır?',
        ch: 'Məktəbə getmək üçün sizə nə qədər vaxt lazımdır?'
      },
      {  id: 462,
        sntc: 'He needs to be more polite',
        tr: 'O, daha nəzakətli olmalıdır',
        ch: 'O, daha nəzakətli olmalıdır'
      },
      {  id: 463,
        sntc: 'Who do you know?',
        tr: 'Sən kimi tanıyırsan?',
        ch: 'Sən kimi tanıyırsan?'
      },
      { id: 464, sntc: "I'm lazy", tr: 'Mən tənbələm', ch: 'Mən tənbələm' },
      {  id: 465,
        sntc: 'The lessons is really good',
        tr: 'Dərslər həqiqətən yaxşıdır',
        ch: 'Dərslər həqiqətən yaxşıdır'
      },
      {  id: 466,
        sntc: 'Why do you like this video?',
        tr: 'Bu videonu niyə bəyənirsən?',
        ch: 'Bu videonu niyə bəyənirsən?'
      },
      {  id: 467,
        sntc: 'The girl is so hard-working',
        tr: 'Qız çox zəhmətkeşdir',
        ch: 'Qız çox zəhmətkeşdir'
      },
      {  id: 468,
        sntc: 'I know they like it',
        tr: 'Bilirəm, onlar bunu bəyənirlər',
        ch: 'Bilirəm, onlar bunu bəyənirlər'
      },
      {  id: 469,
        sntc: "He's a professional teacher",
        tr: 'O, peşəkar müəllimdir',
        ch: 'O, peşəkar müəllimdir'
      },
      {  id: 470,
        sntc: "It's interesting",
        tr: 'Bu maraqlıdır',
        ch: 'Bu maraqlıdır'
      }],
      [{  id: 471,
        sntc: 'Do you agree?',
        tr: 'Sən razısan?',
        ch: 'Sən razısan?'
      },
      {  id: 472,
        sntc: 'He wants more',
        tr: 'O, daha çoxunu istəyir',
        ch: 'O, daha çoxunu istəyir'
      },
      { id: 473, sntc: "It's simple", tr: 'Bu sadədir', ch: 'Bu sadədir' },
      {  id: 474,
        sntc: 'How is this test?',
        tr: 'Bu sınaq necədir?',
        ch: 'Bu sınaq necədir?'
      },
      {  id: 475,
        sntc: 'My friend is at home',
        tr: 'Dostum evdədir',
        ch: 'Dostum evdədir'
      },
      {  id: 476,
        sntc: "Who's here?",
        tr: 'Burada kim var?',
        ch: 'Burada kim var?'
      },
      {  id: 477,
        sntc: 'I learn these lessons to improve my English',
        tr: 'Bu dərsləri İngilis dilimi təkmilləşdirmək üçün öyrənirəm',
        ch: 'Bu dərsləri İngilis dilimi təkmilləşdirmək üçün öyrənirəm'
      },
      {  id: 478,
        sntc: 'He helps me',
        tr: 'O, mənə kömək edir',
        ch: 'O, mənə kömək edir'
      },
      {  id: 479,
        sntc: "He isn't in the city",
        tr: 'O, şəhərdə deyil',
        ch: 'O, şəhərdə deyil'
      },
      {  id: 480,
        sntc: "He's in another place",
        tr: 'O, başqa yerdədir',
        ch: 'O, başqa yerdədir'
      }],
      [{  id: 481,
        sntc: 'What helps you?',
        tr: 'Sənə nə kömək edir?',
        ch: 'Sənə nə kömək edir?'
      },
      {  id: 482,
        sntc: 'The men are there',
        tr: 'Kişilər oradadır',
        ch: 'Kişilər oradadır'
      },
      {  id: 483,
        sntc: 'How much is this book?',
        tr: 'Bu kitab nə qədərdir?',
        ch: 'Bu kitab nə qədərdir?'
      },
      {  id: 484,
        sntc: "You're right",
        tr: 'Sən haqlısan',
        ch: 'Sən haqlısan'
      },
      {  id: 485,
        sntc: "It isn't so",
        tr: 'Bu elə deyil',
        ch: 'Bu elə deyil'
      },
      {  id: 486,
        sntc: 'Those lessons are ineffective',
        tr: 'O dərslər yararsızdır',
        ch: 'O dərslər yararsızdır'
      },
      {  id: 487,
        sntc: 'She does it very well',
        tr: 'O, bunu çox yaxşı edir',
        ch: 'O, bunu çox yaxşı edir'
      },
      {  id: 488,
        sntc: "I don't like this advertisement",
        tr: 'Bu reklam xoşuma gəlmir',
        ch: 'Bu reklam xoşuma gəlmir'
      },
      {  id: 489,
        sntc: 'Is it his opinion?',
        tr: 'Bu onun rəyidir?',
        ch: 'Bu onun rəyidir?'
      },
      {  id: 490,
        sntc: 'Does he often think about it?',
        tr: 'O, tez-tez bu barədə düşünür?',
        ch: 'O, tez-tez bu barədə düşünür?'
      }],
      [{  id: 491,
        sntc: "What's your friend's name?",
        tr: 'Dostunun adı nədir?',
        ch: 'Dostunun adı nədir?'
      },
      {  id: 492,
        sntc: 'We live in Azerbaijan',
        tr: 'Biz Azərbaycanda yaşayırıq',
        ch: 'Biz Azərbaycanda yaşayırıq'
      },
      {  id: 493,
        sntc: 'I enjoy speaking English',
        tr: 'İngilis dilində danışmağdan zövq alıram',
        ch: 'İngilis dilində danışmağdan zövq alıram'
      },
      {  id: 494,
        sntc: "Those lessons aren't effective",
        tr: 'O dərslər effektiv deyil',
        ch: 'O dərslər effektiv deyil'
      },
      {  id: 495,
        sntc: "What's really useful?",
        tr: 'Əslində faydalı olan nədir?',
        ch: 'Əslində faydalı olan nədir?'
      },
      {  id: 496,
        sntc: 'Does he like it?',
        tr: 'O, bunu bəyənir?',
        ch: 'O, bunu bəyənir?'
      },
      {  id: 497,
        sntc: 'Do your friends like these lessons?',
        tr: 'Dostların bu dərsləri bəyənir?',
        ch: 'Dostların bu dərsləri bəyənir?'
      },
      {  id: 498,
        sntc: 'This result motivates us',
        tr: 'Bu nəticə bizi motivasiya edir',
        ch: 'Bu nəticə bizi motivasiya edir'
      },
      {  id: 499,
        sntc: 'I admire this singer',
        tr: 'Bu müğənniyə heyranam',
        ch: 'Bu müğənniyə heyranam'
      },
      {  id: 500,
        sntc: 'I perfectly understand you',
        tr: 'Mən səni əla başa düşürəm',
        ch: 'Mən səni əla başa düşürəm'
      }],
    ],
    [],
    [],
    [],
    []
  ]
};

// let obj = [];
// for (let i = 40; i < 50; i++) {
//   for (let a = 0; a < initialState.sentences[0][0].length; a++) {
//     // obj.id=initialState.sentences[0][i][a].id
//     obj.push(initialState.sentences[0][i][a].sntc)
//   }
// }
// setTimeout(() => {
//   console.log(obj)
// }, 1000)


const enAzSentences = (state = initialState, action) => {
  return state
}

export default enAzSentences