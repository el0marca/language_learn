const initialState = {
  sentences: [
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
        trt: 'Biz anlayırıq bunu',
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
        trt: 'Onlar kömək edir mənə',
        ch: 'Onlar Siz mənə danışır oxuyur kömək edir'
      },
      {
        id: 5,
        sntc: 'She likes it',
        tr: 'O, bunu bəyənir',
        trt: 'O, bəyənir bunu',
        ch: 'O, Sən bunu onu deyir istəyir bəyənir'
      }
    ],
    [{
        id: 6,
        sntc: 'He reads in English',
        tr: 'O, İngilis dilində oxuyur',
        ch: 'O, İngilis Mən danışıram dilində danışır oxuyur'
      },
      {
        id: 7,
        sntc: 'It looks interesting',
        tr: 'Bu marağlı görünür',
        ch: 'Bu Onlar marağlı bunu görünür görür'
      },
      {
        id: 8,
        sntc: 'I work very hard',
        tr: 'Mən çox səylə işləyirəm',
        ch: 'Mən Onlar calışır səylə çox işləyirəm danışıram'
      },
      {
        id: 9,
        sntc: 'I see that mistake',
        tr: 'Mən o səhvi görürəm',
        trt: 'Mən görürəm o səhvi',
        ch: 'Mən Sən bu o səhvi səhvləri görürəm'
      },
      {
        id: 10,
        sntc: 'She also remembers it',
        tr: 'O da bunu xatırlayır',
        trt: 'O da xatırlayır bunu',
        ch: 'O da Mən xatırlayıram bunu görürəm xatırlayır'
      }
    ],
    [{
        id: 11,
        sntc: 'I have a cat',
        tr: 'Mənim pişiyim var',
        trt: '',
        ch: 'Mənim Sənin pişiyin itim pişiyim var'
      },
      {
        id: 12,
        sntc: 'He watches TV',
        tr: 'O, televizora baxır',
        trt: '',
        ch: 'O, televizora Mən görür baxıram baxır'
      },
      {
        id: 13,
        sntc: 'He goes to school',
        tr: 'O, məktəbə gedir',
        trt: 'O, gedir məktəbə',
        ch: 'O, məktəbə Onlar gedirlər oxuyur gedir'
      },
      {
        id: 14,
        sntc: 'I do it every day',
        tr: 'Mən bunu hər gün edirəm',
        trt: 'Mən hər gün bunu edirəm',
        ch: 'Mən onu bəzən bunu hər gün oxuyur edirəm'
      },
      {
        id: 15,
        sntc: 'She misses you',
        tr: 'O, sənin üçün darıxır',
        trt: 'O, darıxır sənin üçün',
        ch: 'O, Onlar sizin sənin bəzən üçün darıxır'
      }
    ],
    [{
        id: 16,
        sntc: 'My brother lives there',
        tr: 'Mənim qardaşım orada yaşayır',
        trt: 'Mənim qardaşım yaşayır orada',
        ch: 'Mənim qardaşım Mən orada yaşayır yaşayıram işləyir'
      },
      {
        id: 17,
        sntc: 'This lesson seems interesting',
        tr: 'Bu dərs maraqlı gəlir',
        trt: '',
        ch: 'Bu O dərs kitab kitablar maraqlı gəlir'
      },
      {
        id: 18,
        sntc: 'She understands everything',
        tr: 'O, hər şeyi başa düşür',
        trt: 'O, başa düşür hər şeyi',
        ch: 'O, hər heçnə şeyi başa düşmür düşür'
      },
      {
        id: 19,
        sntc: 'His brother often says it',
        tr: 'Onun qardaşı çox vaxt bunu deyir',
        trt: 'Onun qardaşı bunu çox vaxt deyir',
        ch: 'Onun qardaşı bacısı bunu çox vaxt bəzən deyir'
      },
      {
        id: 20,
        sntc: 'This offer seems strange',
        tr: 'Bu təklif qəribə gəlir',
        trt: '',
        ch: 'Bu kitab təklif marağlı qəribə gəlir'
      }
    ],
    [{
        id: 21,
        sntc: 'He wants it',
        tr: 'O, bunu istəyir',
        trt: 'O, istəyir bunu',
        ch: 'O, bunu Onlar sevir oxuyur istəyir'
      },
      {
        id: 22,
        sntc: 'We want more practice',
        tr: 'Biz daha çox təcrübə keçmək istəyirik',
        trt: '',
        ch: 'Biz Onlar dərs daha çox təcrübə keçmək istəyir istəyirik'
      },
      {
        id: 23,
        sntc: 'He sees this mistake',
        tr: 'O, bu səhvi görür',
        trt: 'O, görür bu səhvi',
        ch: 'O, bu Biz görürük səhvi səhvləri görür'
      },
      {
        id: 24,
        sntc: 'It looks strange',
        tr: 'Bu qəribə görünür',
        trt: '',
        ch: 'Bu marağlı qəribə yaxşı görünür'
      },
      {
        id: 25,
        sntc: 'She really remembers it',
        tr: 'O, həqiqətən bunu xatırlayır',
        trt: 'O, bunu həqiqətən xatırlayır',
        ch: 'O, Mən bunu görürəm görür həqiqətən xatırlayır'
      }
    ],
    [{
        id: 26,
        sntc: 'She wants to see you right now',
        tr: 'O, səni indi görmək istəyir',
        trt: 'O, indi səni görmək istəyir',
        ch: 'O, səni indi görmək istəyir sabah Mən'
      },
      {
        id: 27,
        sntc: 'He wants to live in another place',
        tr: 'O, başqa yerdə yaşamaq istəyir',
        trt: 'O, yaşamaq istəyir başqa yerdə',
        ch: 'O, başqa yerdə yaşamaq oxumaq orada istəyir'
      },
      {
        id: 28,
        sntc: 'He wants to do it',
        tr: 'O, bunu etmək istəyir',
        trt: 'O, etmək istəyir bunu',
        ch: 'O, bunu etmək istəyir onu demək'
      },
      {
        id: 29,
        sntc: 'I want to improve my grammar',
        tr: 'Mən qrammatikamı təkmilləşdirmək istəyirəm',
        trt: 'Mən istəyirəm qrammatikamı təkmilləşdirmək',
        ch: 'Mən qrammatikamı oxumaq yaxşı təkmilləşdirmək istəyirəm'
      },
      {
        id: 30,
        sntc: 'I want this car',
        tr: 'Mən bu maşını istəyirəm',
        trt: 'Mən istəyirəm bu maşını',
        ch: 'Mən bu maşını istəyirəm bəyənirəm sevirəm'
      }
    ],
    [{
        id: 31,
        sntc: 'She likes this dress',
        tr: 'O, bu paltarı bəyənir',
        trt: 'O, bəyənir bu paltarı',
        ch: 'O, bu paltarı Mən etmək o bəyənir'
      },
      {
        id: 32,
        sntc: 'I would like to drink milk',
        tr: 'Mən süd içmək istərdim',
        trt: 'Mən istərdim süd içmək',
        ch: 'Mən süd içmək Sən çay istərdim'
      },
      {
        id: 33,
        sntc: 'I would like to do it',
        tr: 'Mən bunu etmək istərdim',
        trt: 'Mən etmək istərdim bunu',
        ch: 'Mən bunu etmək onu bunlar istərdim'
      },
      {
        id: 34,
        sntc: 'I see you really like English',
        tr: 'Mən görürəm sən həqiqətən İngilis dilini xoşlayırsan',
        trt: 'Mən görürəm sən İngilis dilini həqiqətən xoşlayırsan',
        ch: 'Mən görürəm edirəm sən həqiqətən biz İngilis dilini xoşlayırsan'
      },
      {
        id: 35,
        sntc: 'I would like to visit this place',
        tr: 'Mən bu yeri ziyarət etmək istərdim',
        trt: 'Mən ziyarət etmək istərdim bu yeri',
        ch: 'Mən bu yeri ziyarət məktəbi o etmək istərdim'
      }
    ],
    [{
        id: 36,
        sntc: 'You don’t want to know it',
        tr: 'Sən bunu bilmək istəmirsən',
        trt: 'Sən istəmirsən bunu bilmək',
        ch: 'Sən bunu onu bacarmaq bilmək Mən istəmirsən'
      },
      {
        id: 37,
        sntc: 'I don’t like it',
        tr: 'Bu mənim xoşuma gəlmir',
        trt: 'Bu xoşuma gəlmir',
        ch: 'Bu mənim xoşuma sənin O gəlmir'
      },
      {
        id: 38,
        sntc: 'I don’t agree with you',
        tr: 'Mən səninlə razı deyiləm',
        trt: 'Mən razı deyiləm səninlə',
        ch: 'Mən səninlə Siz danışırsız razı deyiləm'
      },
      {
        id: 39,
        sntc: 'He doesn’t know it',
        tr: 'O, bunu bilmir',
        trt: 'O, bilmir bunu',
        ch: 'O, bunu bilmir onu bilir'
      },
      {
        id: 40,
        sntc: 'I don’t know',
        tr: 'Mən bilmirəm',
        trt: '',
        ch: 'Mən bilmirəm bilirəm oxuyuram'
      }
    ],
    [{
        id: 41,
        sntc: 'These things don’t attract me',
        tr: 'Bələ şeylər məni cəlb etmir',
        trt: 'Bələ şeylər cəlb etmir məni',
        ch: 'Bələ şeylər bəli səni məni cəlb etmir'
      },
      {
        id: 42,
        sntc: 'My parent don’t discuss it',
        tr: 'Mənim valideynim bunu müzakirə etmir',
        trt: 'Mənim valideynim müzakirə etmir bunu',
        ch: 'Mənim Sənin onu valideynim bunu müzakirə etmir'
      },
      {
        id: 43,
        sntc: 'He doesn’t speak English fluently',
        tr: 'O, İngilis dilində sərbəst danışmır',
        trt: '',
        ch: 'O, İngilis Mən oxumur dilində sərbəst danışmır'
      },
      {
        id: 44,
        sntc: 'That offer doesn’t seem interesting',
        tr: 'O, təklif maraqlı görünmür',
        trt: '',
        ch: 'O, təklif Bu kitab maraqlı görünmür'
      },
      {
        id: 45,
        sntc: 'His son doesn’t want to become a doctor',
        tr: 'Onun oğlu həkim olmaq istəmir',
        trt: 'Onun oğlu istəmir həkim olmaq',
        ch: 'Onun oğlu qızı polis həkim olmaq istəmir'
      }
    ],
    [{
        id: 46,
        sntc: 'I need to speak English without any mistakes',
        tr: 'Mənə İngilis dilində heç bir səhv etmədən danışmalıyam',
        trt: 'Mənə heç bir səhv etmədən danışmalıyam İngilis dilində',
        ch: 'Mənə İngilis dilində heç bir səhv etmədən oxumalıyam danışmalıyam'
      },
      {
        id: 47,
        sntc: 'He needs it',
        tr: 'O, buna ehtiyac duyur',
        trt: 'O, ehtiyac duyur buna',
        ch: 'O, buna Mən duyuram ehtiyac duyur'
      },
      {
        id: 48,
        sntc: 'I need to call them',
        tr: 'Mən onlara zəng etməliyəm',
        trt: 'Mən zəng etməliyəm onlara',
        ch: 'Mən onlara etməli deyiləm zəng etməliyəm'
      },
      {
        id: 49,
        sntc: 'She needs to correct these mistakes',
        tr: 'O, bu səhvləri düzəltməlidir',
        trt: 'O, düzəltməlidir bu səhvləri',
        ch: 'O, bu səhvləri düzəltmir düzəltməlidir'
      },
      {
        id: 50,
        sntc: 'You need to remember it',
        tr: 'Sən bunu yadda saxlamalısan',
        trt: 'Sən yadda saxlamalısan bunu',
        ch: 'Sən bunu yadda saxlamalıyam Mən saxlamalısan'
      }
    ],
    [{
        id: 51,
        sntc: 'Do you want to study better?',
        tr: 'Sən daha yaxşı oxumaq istəyirsən?',
        trt: '',
        ch: 'Sən Biz daha yaxşı çox az oxumaq istəyirsən'
      },
      {
        id: 52,
        sntc: 'Do you often use the internet?',
        tr: 'Sən internetdən tez-tez istifadə edirsən?',
        trt: 'Sən tez-tez internetdən istifadə edirsən?',
        ch: 'Sən internetdən Mən tez-tez çox vaxt istifadə edirsən'
      },
      {
        id: 53,
        sntc: 'Do you want to know your mistakes?',
        tr: 'Sən səhvlərini bilmək istəyirsən?',
        trt: 'Sən bilmək istəyirsən səhvlərini?',
        ch: 'Sən Mən oxumaq səhvlərini istəyirsən bilmək'
      },
      {
        id: 54,
        sntc: 'Do we show good results?',
        tr: 'Biz yaxşı nəticələr göstəririk?',
        trt: '',
        ch: 'Biz yaxşı pis Siz nəticələr göstəririk'
      },
      {
        id: 55,
        sntc: 'Do you support him?',
        tr: 'Sən onu dəstəkləyirsən?',
        trt: 'Sən dəstəkləyirsən onu?',
        ch: 'Sən onu bunu oxuyursan onu dəstəkləyirsən'
      }
    ],
    [{
        id: 56,
        sntc: 'Does it seem boring?',
        tr: 'Bu darıxdırıcı görünür?',
        trt: '',
        ch: 'Bu darıxdırıcı burada O maraqlı görünür'
      },
      {
        id: 57,
        sntc: 'Does he want to live abroad?',
        tr: 'O, xaricdə yaşamaq istəyir?',
        trt: 'O, yaşamaq istəyir xaricdə?',
        ch: 'O, xaricdə yaşamaq xaricdə Mən istəyir'
      },
      {
        id: 58,
        sntc: 'Does he hate it?',
        tr: 'O, buna nifrət edir?',
        trt: '',
        ch: 'O, buna nifrət Onlar bəyənir edir'
      },
      {
        id: 59,
        sntc: 'Does it seem interesting?',
        tr: 'Bu maraqlı görünür?',
        trt: '',
        ch: 'Bu maraqlı baxır O görünmür görünür'
      },
      {
        id: 60,
        sntc: 'Does he ignore everything?',
        tr: 'O, heç neyə məhəl qoymur?',
        trt: '',
        ch: 'O, heç sənə Onlar neyə məhəl qoymur'
      }
    ],
    [{
        id: 61,
        sntc: 'Does this thing seem important?',
        tr: 'Bu şey vacib görünür?',
        trt: '',
        ch: 'Bu şey vacib görünür O əhəmiyyətsiz'
      },
      {
        id: 62,
        sntc: 'Does that lesson seem boring?',
        tr: 'O, dərs darıxdırıcı gəlir?',
        trt: '',
        ch: 'O, dərs dərslər darıxdırıcı maraqlı gəlir'
      },
      {
        id: 63,
        sntc: 'Does you mother want to tell him all the truth?',
        tr: 'Sənin anan ona bütün həqiqəti demək istəyir?',
        trt: 'Sənin anan bütün həqiqəti ona demək istəyir?',
        ch: 'Sənin anan atan mənə ona bütün həqiqəti demək istəyir'
      },
      {
        id: 64,
        sntc: 'Do those students speak English correctly?',
        tr: 'O tələbələr İngilis dilində düzgün danışır?',
        trt: 'O tələbələr düzgün danışır İngilis dilində?',
        ch: 'O tələbələr tələbə deyir İngilis dilində düzgün danışır'
      },
      {
        id: 65,
        sntc: 'Does this student show brilliant result?',
        tr: 'Bu tələbə parlaq nəticə göstərir?',
        trt: '',
        ch: 'Bu görmək parlaq yaxşı tələbə nəticə göstərir'
      }
    ],
    [{
        id: 66,
        sntc: 'Does his words motivate her?',
        tr: 'Onun sözləri onu motivasiya edir?',
        trt: 'Onun sözləri motivasiya edir onu?',
        ch: 'Onun sözləri sözü məni onu motivasiya edir'
      },
      {
        id: 67,
        sntc: 'She likes this idea',
        tr: 'Bu fikir onun xoşuna gəlir',
        ch: 'Bu fikir mənim gəlmir onun xoşuna gəlir'
      },
      {
        id: 68,
        sntc: 'Does she like this idea?',
        tr: 'Bu fikir onun xoşuna gəlir?',
        trt: 'Bu fikir xoşuna gəlir onun?',
        ch: 'Bu fikir onun O xoşuma xoşuna gəlir'
      },
      {
        id: 69,
        sntc: "His words doesn't motivate her",
        tr: 'Onun sözləri onu motivasiya etmir',
        trt: '',
        ch: 'Onun sözləri onu sözü edir motivasiya etmir'
      },
      {
        id: 70,
        sntc: 'He comes come late',
        tr: 'O, evə gec gəlir',
        trt: 'O, gec gəlir evə',
        ch: 'O, evə gec tez gedir gəlir'
      }
    ],
    [{
        id: 71,
        sntc: 'How regularly do you learn English?',
        tr: 'Sən İngilis dilini mütəmadi olaraq nə qədər öyrənirsən?',
        trt: 'Sən mütəmadi olaraq nə qədər İngilis dilini öyrənirsən?',
        ch: 'Sən İngilis dilini Onlar oxuyur nə qədər olaraq mütəmadi öyrənirsən'
      },
      {
        id: 72,
        sntc: 'What do you know?',
        tr: 'Sən nə bilirsən?',
        trt: '',
        ch: 'Sən nə vaxt oxuyursan bilirsən'
      },
      {
        id: 73,
        sntc: 'How do you get to this place?',
        tr: 'Sən bu yerə necə çatırsan?',
        trt: 'Sən necə bu yerə çatırsan?',
        ch: 'Sən bu yerə necə o yerdə uçursan çatırsan'
      },
      {
        id: 74,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        trt: 'Onlar nə demək istəyirlər sənə?',
        ch: 'Onlar sənə mənə nə danışmaq demək istəyirlər'
      },
      {
        id: 75,
        sntc: 'How often do you listen to the radio?',
        tr: 'Sən nə sıxlıqda radioya qulaq asırsan?',
        trt: 'Sən radioya nə sıxlıqda qulaq asırsan?',
        ch: 'Sən radioya kinoya Mən nə sıxlıqda qulaq asırsan'
      }
    ],
    [{
        id: 76,
        sntc: 'Which channel does he usually watch?',
        tr: 'O, adətən hansı kanala baxır?',
        trt: '',
        ch: 'O, adətən hansı videoya baxmır kanala baxır'
      },
      {
        id: 77,
        sntc: 'What motivates you more?',
        tr: 'Səni daha çox nə motivasiya edir?',
        ch: 'Səni daha çox etmir Məni nə motivasiya edir'
      },
      {
        id: 78,
        sntc: 'How often does she go to the cinema?',
        tr: 'O, nə sıxlıqda kinoteatra gedir?',
        trt: 'O, kinoteatra nə sıxlıqda gedir?',
        ch: 'O, kinoteatra nə sıxlıqda çox burada gedir'
      },
      {
        id: 79,
        sntc: 'She watches different movies',
        tr: 'O, müxtəlif filmlərə baxır',
        trt: '',
        ch: 'O, müxtəlif filmlərə görür maraqlı baxır'
      },
      {
        id: 80,
        sntc: 'Who does he support?',
        tr: 'O, kimi dəstəkləyir?',
        trt: '',
        ch: 'O, kimi kim Onu sevir dəstəkləyir'
      }
    ],
    [{
        id: 81,
        sntc: 'How does your brother control it?',
        tr: 'Sənin qardaşın bunu necə nəzarət edir?',
        trt: 'Sənin qardaşın necə nəzarət edir bunu?',
        ch: 'Sənin qardaşın bunu məni səni necə nəzarət edir'
      },
      {
        id: 82,
        sntc: 'Why do your friends disagree with you?',
        tr: 'Sənin dostların niyə səninlə razılaşmır?',
        trt: 'Sənin dostların səninlə niyə razılaşmır?',
        ch: 'Sənin dostların təsdiq dostun Mənim niyə səninlə razılaşmır'
      },
      {
        id: 83,
        sntc: 'Why does your boss criticize her?',
        tr: 'Niyə müdiriniz onu tənqid edir?',
        trt: '',
        ch: 'Niyə müdiriniz onu inkar xoşlayır bunu tənqid edir'
      },
      {
        id: 84,
        sntc: 'How many English words does your friend want to know?',
        tr: 'Sənin dostun nə qədər İngilis sözü bilmək istəyir?',
        trt: '',
        ch: 'Sənin dostun nə qədər öyrənmək İngilis sözü bilmək istəyir'
      },
      {
        id: 85,
        sntc: 'What advice does your teacher give you?',
        tr: 'Sənin müəllimin sənə hansı məsləhəti verir?',
        trt: 'Sənin müəllimin hansı məsləhəti sənə verir?',
        ch: 'Sənin müəllimin anlamaq sənə hansı nə cür məsləhəti verir'
      }
    ],
    [{
        id: 86,
        sntc: 'How often does he test their knowledge?',
        tr: 'O, nə sıxlıqda onların biliyini yoxlayır?',
        trt: 'O, onların biliyini nə sıxlıqda yoxlayır?',
        ch: 'O, nə sıxlıqda çox bizim yollayır gedir onların biliyini yoxlayır'
      },
      {
        id: 87,
        sntc: 'I really like it',
        tr: 'Bu həqiqətən mənim xoşuma gəlir',
        trt: 'Bu mənim həqiqətən xoşuma gəlir',
        ch: 'Bu həqiqətən sənin əvəzinə gəlmir mənim xoşuma gəlir'
      },
      {
        id: 88,
        sntc: 'Do you want to study better?',
        tr: 'Sən daha yaxşı oxumaq istəyirsən?',
        trt: 'Sən istəyirsən daha yaxşı oxumaq?',
        ch: 'Sən daha yaxşı orada oxumaq bilmək çox pis istəyirsən'
      },
      {
        id: 89,
        sntc: 'I need your advice',
        tr: 'Mənim sənin məsləhətinə ehtiyacım var',
        trt: 'Mənim ehtiyacım var sənin məsləhətinə',
        ch: 'Mənim sənin bizim məsləhətinə köməyinə yoxdur ehtiyacım var'
      },
      {
        id: 90,
        sntc: 'She would like to go to another place',
        tr: 'O, başqa yerə getmək istərdi',
        trt: 'O, başqa yerə istərdi getmək',
        ch: 'O, başqa yerə bizimlə getmək gəlmək bura istərdi'
      }
    ],
    [{
        id: 91,
        sntc: 'How does it help you?',
        tr: 'Bu sənə necə kömək edir?',
        trt: 'Bu necə kömək edir sənə?',
        ch: 'Bu sənə necə kömək edir sevir bilir gəlir'
      },
      {
        id: 92,
        sntc: 'My parents want to do it',
        tr: 'Mənim valideynlərim bunu etmək istəyirlər',
        trt: 'Mənim valideynlərim etmək istəyirlər bunu',
        ch: 'Mənim valideynlərim bunu etmək demək getmək ora istəyirlər'
      },
      {
        id: 93,
        sntc: 'All people do it',
        tr: 'Bütün insanlar bunu edir',
        trt: 'Bütün insanlar edir bunu',
        ch: 'Bütün insanlar bunu bilir tanıyır edir'
      },
      {
        id: 94,
        sntc: 'I think so',
        tr: 'Mən belə düşünürəm',
        trt: '',
        ch: 'Mən belə düşünürəm bilirəm xərcəyirəm'
      },
      {
        id: 95,
        sntc: 'Does this person seem very good?',
        tr: 'Bu insan çox yaxşı görünür?',
        trt: '',
        ch: 'Bu insan çox yaxşı burada ev yandı görünür'
      }
    ],
    [{
        id: 96,
        sntc: 'She tries to understand it',
        tr: 'O, bunu anlamağa çalışır',
        trt: 'O, anlamağa çalışır bunu',
        ch: 'O, bunu anlamağa çalışır istəyir orada düşür'
      },
      {
        id: 97,
        sntc: 'When do you have free time?',
        tr: 'Sənin nə vaxt boş vaxtın olur?',
        trt: 'Sənin boş vaxtın nə vaxt olur?',
        ch: 'Sənin nə vaxt boş vaxtın orada radio dinləyirəm olur'
      },
      {
        id: 98,
        sntc: 'I like this idea',
        tr: 'Bu ideya xoşuma gəlir',
        trt: '',
        ch: 'Bu ideya xoşuma Xovuzda üzmək gəlir'
      },
      {
        id: 99,
        sntc: 'How often do you go there?',
        tr: 'Ora nə sıxlıqda gedirsiniz?',
        trt: '',
        ch: 'Ora nə sıxlıqda baxmısan indicə həqiqətən gedirsiniz'
      },
      {
        id: 100,
        sntc: 'I would like to drink a cup of coffee',
        tr: 'Mən bir fincan qəhvə içmək istərdim',
        trt: 'Mən istərdim bir fincan qəhvə içmək',
        ch: 'Mən bir fincan qəhvə içmək görmək yuxuda istərdim'
      }
    ],
    [{
        id: 101,
        sntc: 'I want to know it',
        tr: 'Mən bunu bilmək istəyirəm',
        trt: 'Mən bilmək istəyirəm bunu',
        ch: 'Mən bunu bilmək anlamaq oxumaq istəyirəm'
      },
      {
        id: 102,
        sntc: 'I really need English',
        tr: 'Mənə həqiqətən İngilis dili lazımdır',
        trt: 'Mənə İngilis dili həqiqətən lazımdır',
        ch: 'Mənə həqiqətən İngilis dili var hərdən çox lazımdır'
      },
      {
        id: 103,
        sntc: 'We live in this country',
        tr: 'Biz bu ölkədə yaşayırıq',
        trt: 'Biz yaşayırıq bu ölkədə',
        ch: 'Biz bu ölkədə sevindim istərdim yaşayırıq'
      },
      {
        id: 104,
        sntc: 'I need to correct this mistake',
        tr: 'Mənə bu səhvi düzəltmək lazımdır',
        ch: 'Mənə bu səhvi düzəltmək yandırmaq onlarla lazımdır'
      },
      {
        id: 105,
        sntc: 'She also knows it',
        tr: 'O da bunu bilir',
        trt: '',
        ch: 'O da bunu Mən də bilirəm onu bilir'
      }
    ],
    [{
        id: 106,
        sntc: 'His father has a car',
        tr: 'Onun atasının maşını var',
        trt: '',
        ch: 'Onun atasının evi pulu yoxdur maşını var'
      },
      {
        id: 107,
        sntc: 'What worries you?',
        tr: 'Səni nə narahat edir?',
        trt: '',
        ch: 'Səni nə narahat sevindirir burada edir'
      },
      {
        id: 108,
        sntc: 'I really need it',
        tr: 'Bu həqiqətən mənə lazımdır',
        trt: 'Bu mənə həqiqətən lazımdır',
        ch: 'Bu mənə həqiqətən deyil o qədər O lazımdır'
      },
      {
        id: 109,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        trt: 'Onlar nə demək istəyirlər sənə?',
        ch: 'Onlar sənə nə demək istəyirlər görmək səninlə'
      },
      {
        id: 110,
        sntc: 'How does she get home?',
        tr: 'O, evə necə çatır?',
        trt: 'O, necə çatır evə?',
        ch: 'O, evə necə tullanır bayırda çatır'
      }
    ],
    [{
        id: 111,
        sntc: "He's a manager",
        tr: 'O, menecerdir',
        trt: '',
        ch: 'O, menecerdir Biz burada evdə'
      },
      {
        id: 112,
        sntc: "It's an interesting idea",
        tr: 'Bu maraqlı fikirdir',
        trt: '',
        ch: 'Bu maraqlı lazımdır sabah indicə fikirdir'
      },
      {
        id: 113,
        sntc: "It's easy",
        tr: 'Bu asandır',
        trt: '',
        ch: 'Bu maraqlı onlarla sadə asandır'
      },
      {
        id: 114,
        sntc: "I'm happy",
        tr: 'Mən xoşbəxtəm',
        trt: '',
        ch: 'Mən nikbinlikə dolu səndə xoşbəxtəm'
      },
      {
        id: 115,
        sntc: "It's interesting",
        tr: 'Bu maraqlıdır',
        trt: '',
        ch: 'Bu məsləhət vermək düzgün qaneedici maraqlıdır'
      }
    ],
    [{
        id: 116,
        sntc: "It's too difficult",
        tr: 'Bu həddən artıq çətindir',
        trt: '',
        ch: 'Bu həddən artıq tənha yağışlı balaca çətindir'
      },
      {
        id: 117,
        sntc: "It's a big mistake",
        tr: 'Bu böyük səhvdir',
        trt: '',
        ch: 'Bu böyük küləkli ciddi tətil səhvdir'
      },
      {
        id: 118,
        sntc: "It's a simple test",
        tr: 'Bu sadə testdir',
        trt: '',
        ch: 'Bu sadə ideya gözlənilməz uğurlu sadiq testdir'
      },
      {
        id: 119,
        sntc: "You're the best teacher in the world",
        tr: 'Sən dünyanın ən yaxşı müəllimisən',
        trt: '',
        ch: 'Sən dünyanın ən yaxşı pis lap müəllimisən'
      },
      {
        id: 120,
        sntc: "It's too cheap",
        tr: 'Bu çox ucuzdır',
        trt: '',
        ch: 'Bu çox limanı ən yaxın supermarket ucuzdır'
      }
    ],
    [{
        id: 121,
        sntc: "She's such a wise woman",
        tr: 'O, elə müdrik qadındır',
        trt: 'O, çox müdrik qadındır',
        ch: 'O, çox elə müdrik pul kisəsi fərqli aktrisa qadındır'
      },
      {
        id: 122,
        sntc: "It's such an effective method",
        tr: 'Bu elə effektiv üsuldur',
        trt: 'Bu çox effektiv üsuldur',
        ch: 'Bu çox elə effektiv tapşırıq həvəs minnətdar üsuldur'
      },
      {
        id: 123,
        sntc: "It's so easy",
        tr: 'Bu elə asandır',
        trt: 'Bu çox asandır',
        ch: 'Bu çox elə səhv narahat olmaq asandır'
      },
      {
        id: 124,
        sntc: 'I drink so much milk',
        tr: 'Mən elə çox süd içirəm',
        trt: 'Mən çox süd içirəm',
        ch: 'Mən elə çox süd iş yoldaşı paytaxt qəzet içirəm'
      },
      {
        id: 125,
        sntc: "It's such an expensive car",
        tr: 'Bu çox bahalı avtomobildir',
        trt: 'Bu elə bahalı avtomobildir',
        ch: 'Bu çox elə bahalı vaxt eyni komanda avtomobildir'
      }
    ],
    [{
        id: 126,
        sntc: 'Your help is very important',
        tr: 'Sənin köməyin çox vacibdir',
        trt: '',
        ch: 'Sənin köməyin çox təəccübləndirmək zəngin varlı vacibdir'
      },
      {
        id: 127,
        sntc: 'Our teacher is right',
        tr: 'Bizim müəllimimiz haqlıdır',
        trt: '',
        ch: 'Bizim müəllimimiz aşağı orta düzgün haqlıdır'
      },
      {
        id: 128,
        sntc: 'These lessons are so effective',
        tr: 'Bu dərslər elə effektlidir',
        trt: 'Bu dərslər çox effektlidir',
        ch: 'Bu dərslər çox elə bağışlamaq münasib olmaq effektlidir'
      },
      {
        id: 129,
        sntc: 'This problem is very big',
        tr: 'Bu problem çox böyükdür',
        trt: '',
        ch: 'Bu problem çox lütf müqayisə etmək böyükdür'
      },
      {
        id: 130,
        sntc: 'The women are there',
        tr: 'Qadınlar oradadır',
        trt: '',
        ch: 'Qadınlar quş mütəxəssis sahə oradadır'
      }
    ],
    [{
        id: 131,
        sntc: "We aren't tired",
        tr: 'Biz yorulmamışıq',
        trt: '',
        ch: 'Biz adətən çətinlik səndviç yorulmamışıq'
      },
      {
        id: 132,
        sntc: 'We are full of energy',
        tr: 'Biz enerji ilə doluyuq',
        trt: '',
        ch: 'Biz enerji daha əvvəl fincan yer ilə doluyuq'
      },
      {
        id: 133,
        sntc: "It's such a big problem",
        tr: 'Bu elə böyük problemdir',
        trt: 'Bu çox böyük problemdir',
        ch: 'Bu elə çox böyük çətinliklər hovuz məbləğ problemdir'
      },
      {
        id: 134,
        sntc: "I'm not lazy",
        tr: 'Mən tənbəl deyiləm',
        trt: '',
        ch: 'Mən tənbəl yarım mükəmməl gəlirli deyiləm'
      },
      {
        id: 135,
        sntc: "It's a very bad method",
        tr: 'Bu çox pis üsuldur',
        trt: '',
        ch: 'Bu çox pis qalın əmin olmaq üsuldur'
      }
    ],
    [{
        id: 136,
        sntc: 'Is it her opinion?',
        tr: 'Bu, onun fikridir?',
        trt: '',
        ch: 'Bu, onun yarış müsabiqə geniş mənzil fikridir'
      },
      {
        id: 137,
        sntc: 'Are you ready?',
        tr: 'Sən hazırsan?',
        trt: '',
        ch: 'Sən məmnun əminlik qorxmaq hazırsan'
      },
      {
        id: 138,
        sntc: 'Are they lazy?',
        tr: 'Onlar tənbəldirlər?',
        trt: '',
        ch: 'Onlar cəhd etmək baxmaq tənbəldirlər'
      },
      {
        id: 139,
        sntc: 'Is it useful information?',
        tr: 'Bu faydalı məlumatdır?',
        trt: '',
        ch: 'Bu faydalı görünüş tapmaq üzləşmək məlumatdır'
      },
      {
        id: 140,
        sntc: 'Are we right?',
        tr: 'Biz haqlıyıq?',
        trt: '',
        ch: 'Biz bir şey bacarıq ağlamaq haqlıyıq'
      }
    ],
    [{
        id: 141,
        sntc: 'Is money important?',
        tr: 'Pul vacibdir?',
        trt: '',
        ch: 'Pul borc almaq həll etmək vacibdir'
      },
      {
        id: 142,
        sntc: 'Is the computer old?',
        tr: 'Kompüter köhnədir?',
        trt: '',
        ch: 'Kompüter universitet almaq məktub bina köhnədir'
      },
      {
        id: 143,
        sntc: 'Are the men at work?',
        tr: 'Kişilər işdədir?',
        trt: '',
        ch: 'Kişilər borclu olmaq təklif uzun işdədir'
      },
      {
        id: 144,
        sntc: 'Is knowledge power?',
        tr: 'Bilik gücdür?',
        trt: '',
        ch: 'Bilik qoşulmaq ədəbiyyat gəlmək geriyə gücdür'
      },
      {
        id: 145,
        sntc: 'Are all these exercises very difficult?',
        tr: 'Bütün bu tapşırıqlar çox çətindir?',
        trt: '',
        ch: 'Bütün bu tapşırıqlar gözləmək qalmaq çatmaq çox çətindir'
      }
    ],
    [{
        id: 146,
        sntc: 'How expensive is it?',
        tr: 'Bu nə qədər bahalıdır?',
        trt: '',
        ch: 'Bu nə qədər mənsub olmaq qab bahalıdır'
      },
      {
        id: 147,
        sntc: 'Where is she?',
        tr: 'O, haradadır?',
        trt: '',
        ch: 'O, haradadır qalmaq cəmləşmək təsdiqləmək'
      },
      {
        id: 148,
        sntc: 'How is he?',
        tr: 'O, necədir?',
        trt: '',
        ch: 'O, necədir nəhəng birlikdə şey əşya'
      },
      {
        id: 149,
        sntc: 'What is really important?',
        tr: 'Əslində nə vacibdir?',
        trt: '',
        ch: 'Əslində nə şirkət məktub mebel turnir vacibdir'
      },
      {
        id: 150,
        sntc: 'How easy is it?',
        tr: 'Bu nə dərəcədə asandır?',
        trt: '',
        ch: 'Bu nə dərəcədə daxilində bina qonaqpərvər aşağıda asandır'
      }
    ],
    [{
        id: 151,
        sntc: 'Where is your husband?',
        tr: 'Sənin ərin haradadır?',
        trt: '',
        ch: 'Sənin ərin buludlu güclü uğursuz tənha haradadır'
      },
      {
        id: 152,
        sntc: "What's her job?",
        tr: 'Onun işi nədir?',
        trt: '',
        ch: 'Onun işi bekar olmaq qiymət diqqətli nədir'
      },
      {
        id: 153,
        sntc: 'Who is that woman?',
        tr: 'O qadın kimdir?',
        trt: '',
        ch: 'O qadın kimdir ziyafət bayırdan reaksiya daxildə'
      },
      {
        id: 154,
        sntc: "What's your sister's name?",
        tr: 'Sənin bacının adı nədir?',
        trt: '',
        ch: 'Sənin bacının adı məsləhət vermək düzgün qaneedici nədir'
      },
      {
        id: 155,
        sntc: "What's wrong?",
        tr: 'Nə səhvdir?',
        trt: '',
        ch: 'Nə səhvdir torpaq velosiped körpə müstəqillik'
      }
    ],
    [{
        id: 156,
        sntc: 'He is so clever',
        tr: 'O, çox ağıllıdır',
        trt: 'O, elə ağıllıdır',
        ch: 'O, çox ağıllıdır deyişiklik elə göz yaşı kəmər'
      },
      {
        id: 157,
        sntc: 'Is this method really ineffective?',
        tr: 'Bu üsul həqiqətən səmərəsizdir?',
        trt: '',
        ch: 'Bu üsul həqiqətən səmərəsizdir piroq səbəb velosiped'
      },
      {
        id: 158,
        sntc: 'Why are those lessons so ineffective?',
        tr: 'Niyə o dərslər elə yararsızdır?',
        trt: '',
        ch: 'Niyə o dərslər elə gəmi balıq sviter yararsızdır'
      },
      {
        id: 159,
        sntc: 'Why are the students there?',
        tr: 'Tələbələr niyə oradadır?',
        trt: '',
        ch: 'Tələbələr niyə gözləmək ümid etmək bacarmaq oradadır'
      },
      {
        id: 160,
        sntc: 'He is shocked',
        tr: 'O, şoka düşüb',
        trt: '',
        ch: 'O, şoka düşüb Mən quyuya burada'
      }
    ],
    [{
        id: 161,
        sntc: 'The day is windy',
        tr: 'Gün küləklidir',
        trt: '',
        ch: 'Gün aşağı orta düzgün bilik küləklidir'
      },
      {
        id: 162,
        sntc: 'I am happy',
        tr: 'Mən xoşbəxtəm',
        trt: '',
        ch: 'Mən cəhd uğurlu nəticə məntiqi xoşbəxtəm'
      },
      {
        id: 163,
        sntc: 'She is so beautiful',
        tr: 'O, çox gözəldir',
        trt: '',
        ch: 'O, çox ciddi tətil məzuniyyət öndə gözəldir'
      },
      {
        id: 164,
        sntc: 'Money is important',
        tr: 'Pul vacibdir',
        trt: '',
        ch: 'Pul şəxs vaxt eyni komanda vacibdir'
      },
      {
        id: 165,
        sntc: 'Are those exercises useless?',
        tr: 'O tapşırıqlar faydasızdır?',
        trt: '',
        ch: 'O tapşırıqlar əvvəl həqiqətən maraqlı sonuncu faydasızdır'
      }
    ],
    [{
        id: 166,
        sntc: "I'm not married",
        tr: 'Mən evli deyiləm',
        trt: '',
        ch: 'Mən evli təəssürat doğuran zəif cəhd deyiləm'
      },
      {
        id: 167,
        sntc: 'Is it obvious?',
        tr: 'Bu aydındır?',
        trt: '',
        ch: 'Bu aydındır əmin olmaq təəccübləndirmək bekar'
      },
      {
        id: 168,
        sntc: 'His son is in the park',
        tr: 'Onun oğlu parkdadır',
        trt: '',
        ch: 'Onun oğlu küləkli ciddi tətil məzuniyyət parkdadır'
      },
      {
        id: 169,
        sntc: "It's the best example",
        tr: 'Bu ən yaxşı nümunədir',
        trt: '',
        ch: 'Bu ən yaxşı sadiq bahalı qutu səhv nümunədir'
      },
      {
        id: 170,
        sntc: 'The boys are at home',
        tr: 'Oğlanlar evdədir',
        trt: '',
        ch: 'Oğlanlar son uzaq çətin soyad evdədir'
      }
    ],
    [{
        id: 171,
        sntc: 'The day is rainy',
        tr: 'Gün yağışlıdır',
        trt: '',
        ch: 'Gün mümkün hazırlaşmaq imtahan ab-hava yağışlıdır'
      },
      {
        id: 172,
        sntc: 'Why are these rules so important?',
        tr: 'Niyə bu qaydalar belə vacibdir?',
        trt: '',
        ch: 'Niyə bu qaydalar belə cümlə məna idman vacibdir'
      },
      {
        id: 173,
        sntc: 'We need more control',
        tr: 'Bizim daha çox nəzarətə ehtiyacımız var',
        trt: '',
        ch: 'Bizim daha çox nəzarətə rəqabətə qirmək zövq ehtiyacımız var'
      },
      {
        id: 174,
        sntc: "He's interested in it",
        tr: 'O, bununla maraqlanır',
        trt: 'O, maraqlanır bununla',
        ch: 'O, bununla zövq almaq davranmaq qəribə maraqlanır'
      },
      {
        id: 175,
        sntc: 'This method is very simple',
        tr: 'Bu üsul çox sadədir',
        trt: '',
        ch: 'Bu üsul ümid qulaq asmaq sabah yemək çox sadədir'
      }
    ],
    [{
        id: 176,
        sntc: 'How often do you listen to the radio?',
        tr: 'Sən nə sıxlıqda radioya qulaq asırsan?',
        trt: 'Sən radioya nə sıxlıqda qulaq asırsan?',
        ch: 'Sən radioya nə sıxlıqda gözəl hiss saat qulaq asırsan'
      },
      {
        id: 177,
        sntc: 'I don’t like this atmosphere',
        tr: 'Bu ab-hava mənim xoşuma gəlmir',
        trt: '',
        ch: 'Bu ab-hava mənim xoşuma uşaqlar çətin sınaq gəlmir'
      },
      {
        id: 178,
        sntc: 'It isn’t surprising',
        tr: 'Bu təəccüblü deyil',
        trt: '',
        ch: 'Bu təəccüblü siyasət qutu çanta niyə deyil'
      },
      {
        id: 179,
        sntc: 'What frightens you more?',
        tr: 'Səni daha çox qorxuya salan nədir?',
        trt: '',
        ch: 'Səni daha çox qorxuya salan nədir'
      },
      {
        id: 180,
        sntc: 'What channel are popular nowadays?',
        tr: 'Hazırki vaxtda hansı kanal populyardır?',
        trt: '',
        ch: 'Hazırki vaxtda hansı kanal ünsiyyət qurmaq digər populyardır'
      }
    ],
    [{
        id: 181,
        sntc: 'Does your brother live alone?',
        tr: 'Sənin qardaşın tək yaşayır?',
        trt: '',
        ch: 'Sənin qardaşın tək hər biri addım İfadə yaşayır'
      },
      {
        id: 182,
        sntc: 'Is my experience enough?',
        tr: 'Mənim təcrübəm kifayət edir?',
        trt: '',
        ch: 'Mənim təcrübəm kifayət minnətdar yaratmaq müsbət zirvə edir'
      },
      {
        id: 183,
        sntc: 'I hope you remember it',
        tr: 'Ümid edirəm, sən bunu xatırlayırsan',
        trt: '',
        ch: 'Ümid edirəm, sən bunu həsr etmək səhv xatırlayırsan'
      },
      {
        id: 184,
        sntc: 'He enjoys listening to music',
        tr: 'O, musiqi dinləməkdən zövq alır',
        trt: '',
        ch: 'O, musiqi dinləməkdən həll olunma tərcümə zövq alır'
      },
      {
        id: 185,
        sntc: 'Do you need to do it this year?',
        tr: 'Sənə bunu bu il etmək lazımdır?',
        trt: 'Sənə bu il bunu etmək lazımdır?',
        ch: 'Sənə bunu bu il etmək üzr istəmək davranış lazımdır'
      }
    ],
    [{
        id: 186,
        sntc: 'How difficult is this exercise?',
        tr: 'Bu tapşırıq nə dərəcədə çətindir?',
        trt: '',
        ch: 'Bu tapşırıq nə dərəcədə gəlmək geriyə məna çətindir'
      },
      {
        id: 187,
        sntc: 'Do you know the meaning of this word?',
        tr: 'Bu sözün mənasını bilirsən?',
        trt: '',
        ch: 'Bu sözün mənasını yenidən ixtira təkər bilirsən'
      },
      {
        id: 188,
        sntc: "I'm fond of sport",
        tr: 'Mən idmanı çox sevirəm',
        trt: '',
        ch: 'Mən idmanı çox ədəbiyyat gəlmək geriyə sevirəm'
      },
      {
        id: 189,
        sntc: 'She always does it with great pleasure',
        tr: 'O, bunu həmişə böyük məmnuniyyətlə edir',
        trt: 'O, həmişə bunu böyük məmnuniyyətlə edir',
        ch: 'O, bunu həmişə böyük mükəmməl şanslı sadəlik məmnuniyyətlə edir'
      },
      {
        id: 190,
        sntc: "I'd like to add one thing",
        tr: 'Mən bir şey əlavə etmək istərdim',
        trt: '',
        ch: 'Mən bir şey əlavə etmək İfadə təhlil etmək istərdim'
      }
    ],
    [{
        id: 191,
        sntc: 'I hope you remember it',
        tr: 'Ümid edirəm, sən bunu xatırlayırsan',
        trt: '',
        ch: 'Ümid edirəm, sən bunu mövzu xərcləmək xəstəxana xatırlayırsan'
      },
      {
        id: 192,
        sntc: "She's sad",
        tr: 'O, qəmlidir',
        trt: '',
        ch: 'O, pessimist qorxutmaq üçüncü hündür qəmlidir'
      },
      {
        id: 193,
        sntc: 'She watches TV',
        tr: 'O, televizora baxır',
        trt: 'O, baxır televizora',
        ch: 'O, televizora getmək təmir etmək izləmək baxır'
      },
      {
        id: 194,
        sntc: "His salary isn't so high. It's low",
        tr: 'Onun maaşı o qədər də yüksək deyil. Aşağıdır',
        trt: '',
        ch: 'Onun maaşı o qədər də yüksək cib münasibət deyil. Aşağıdır'
      },
      {
        id: 195,
        sntc: 'Are we near this place?',
        tr: 'Biz bu yerin yaxınlığındayıq?',
        trt: '',
        ch: 'Biz bu yerin kənd təklif etmək yaxınlığındayıq'
      }
    ],
    [{
        id: 196,
        sntc: 'Knowledge is very important',
        tr: 'Bilik çox vacibdir',
        trt: '',
        ch: 'Bilik çox bizi görüş həmçinin məşhur vacibdir'
      },
      {
        id: 197,
        sntc: 'We may do it',
        tr: 'Biz bunu edə bilərik',
        trt: 'Biz edə bilərik bunu',
        ch: 'Biz bunu edə pul kisəsi mahnı populyar bilərik'
      },
      {
        id: 198,
        sntc: 'He should do it',
        tr: 'O, gərək bunu etsin',
        trt: 'O, bunu gərək etsin',
        ch: 'O, gərək bunu dəqiqə əvvəl daha sonra etsin'
      },
      {
        id: 199,
        sntc: 'I can read in English',
        tr: 'Mən İngilis dilində oxuya bilirəm',
        trt: 'Mən oxuya bilirəm İngilis dilində',
        ch: 'Mən İngilis dilində oxuya bilirəm saat qəzet kreslo'
      },
      {
        id: 200,
        sntc: 'We must change our life',
        tr: 'Biz həyatımızı dəyişməliyik',
        trt: '',
        ch: 'Biz həyatımızı müsabiqə geniş mənzil dəyişməliyik'
      }
    ],
    [{
        id: 201,
        sntc: 'What do you like here?',
        tr: 'Sən burada nəyi bəyənirsən?',
        trt: 'Sən nəyi bəyənirsən burada?',
        ch: 'Sən burada nəyi olduqca nadir hallarda bəyənirsən'
      },
      {
        id: 202,
        sntc: 'I want this computer',
        tr: 'Mən bu kompüteri istəyirəm',
        trt: 'Mən istəyirəm bu kompüteri',
        ch: 'Mən bu kompüteri bağlama ciddi gözlənilməyən istəyirəm'
      },
      {
        id: 203,
        sntc: 'Are the men at work?',
        tr: 'Kişilər işdədir?',
        trt: '',
        ch: 'Kişilər min ay başlanğıc sakitcə işdədir'
      },
      {
        id: 204,
        sntc: "Who's with you?",
        tr: 'Səninlə kim var?',
        trt: '',
        ch: 'Səninlə kim iki saat qəzet kreslo ondan var'
      },
      {
        id: 205,
        sntc: 'This place is very beautiful',
        tr: 'Bu yer çox gözəldir',
        trt: '',
        ch: 'Bu yer çox kəskin məyus dinləmək min gözəldir'
      }
    ],
    [{
        id: 206,
        sntc: "It's a small mistake",
        tr: 'Bu kiçik bir səhvdir',
        trt: 'Bu kiçik səhvdir',
        ch: 'Bu kiçik bir yazı masası pul kisəsi səhvdir'
      },
      {
        id: 207,
        sntc: "This level isn't elementary",
        tr: 'Bu səviyyə elementar deyil',
        trt: 'Bu elementar səviyyə deyil',
        ch: 'Bu səviyyə elementar müsabiqə geniş mənzil əl deyil'
      },
      {
        id: 208,
        sntc: 'Your lessons really help',
        tr: 'Sənin dərslərin həqiqətən də kömək edir',
        trt: 'Sənin dərslərin həqiqətən kömək edir',
        ch: 'Sənin dərslərin həqiqətən də kömək ayaqqabı sevimli xüsusi edir'
      },
      {
        id: 209,
        sntc: 'How do you get to work?',
        tr: 'Sən işə nəcə çatırsan?',
        trt: '',
        ch: 'Sən işə nəcə balıq sviter dəvə dəbli çatırsan'
      },
      {
        id: 210,
        sntc: 'This book is really boring',
        tr: 'Bu kitab həqiqətən darıxdırıcıdır',
        trt: '',
        ch: 'Bu kitab həqiqətən yarım mükəmməl gəlirli darıxdırıcıdır'
      }
    ],
    [{
        id: 211,
        sntc: 'How long does it take you to get to school?',
        tr: 'Sənin məktəbə çatmağın nə qədər vaxt çəkir?',
        trt: '',
        ch: 'Sənin məktəbə çatmağın nə qədər özünə kreslo bəzi vaxt çəkir'
      },
      {
        id: 212,
        sntc: 'He needs to be more polite',
        tr: 'O, daha nəzakətli olmalıdır',
        trt: '',
        ch: 'O, daha sözünü kəsmək təsir bağışlamaq nəzakətli olmalıdır'
      },
      {
        id: 213,
        sntc: 'Who do you know?',
        tr: 'Sən kimi tanıyırsan?',
        trt: '',
        ch: 'Sən kimi aşagıdakı sonraki möhtəşəm görkəmli tanıyırsan'
      },
      {
        id: 214,
        sntc: "I'm lazy",
        tr: 'Mən tənbələm',
        trt: '',
        ch: 'Mən hissə təəcübləndirmək həsr etmək tənbələm'
      },
      {
        id: 215,
        sntc: 'The lessons is really good',
        tr: 'Dərslər həqiqətən yaxşıdır',
        trt: '',
        ch: 'Dərslər həqiqətən lütf müqayisə etmək pul yaxşıdır'
      }
    ],
    [{
        id: 216,
        sntc: "What's your friend's name?",
        tr: 'Sənin dostunun adı nədir?',
        trt: '',
        ch: 'Sənin dostunun yol cığır sevimli qonaqpərvər adı nədir'
      },
      {
        id: 217,
        sntc: 'We live in Azerbaijan',
        tr: 'Biz Azərbaycanda yaşayırıq',
        trt: '',
        ch: 'Biz Azərbaycanda qorxmaq çətinlik hazırda diqqətli yaşayırıq'
      },
      {
        id: 218,
        sntc: 'I enjoy speaking English',
        tr: 'Mən İngilis dilində danışmağdan zövq alıram',
        trt: '',
        ch: 'Mən İngilis dilində danışmağdan vaxt eyni komanda zövq alıram'
      },
      {
        id: 219,
        sntc: "Those lessons aren't effective",
        tr: 'O dərslər effektiv deyil',
        trt: '',
        ch: 'O dərslər effektiv içəridə diqqətli qayğıkeş alternativ deyil'
      },
      {
        id: 220,
        sntc: "What's really useful?",
        tr: 'Əslində nə faydalıdır?',
        trt: '',
        ch: 'Əslində nə uzun fikir ideya gözlənilməz faydalıdır'
      }
    ],
    [{
        id: 221,
        sntc: 'Do you try to improve this result?',
        tr: 'Sən bu nəticəni yaxşılaşdırmağa çalışırsan?',
        trt: '',
        ch: 'Sən bu nəticəni yaxşılaşdırmağa məktəb böyük sadə asan çalışırsan'
      },
      {
        id: 222,
        sntc: "It isn't for this level",
        tr: 'Bu, bu səviyyə üçün deyil',
        trt: '',
        ch: 'Bu, bu səviyyə sadə asan qutu çanta üçün deyil'
      },
      {
        id: 223,
        sntc: 'Where is our teacher?',
        tr: 'Bizim müəllimimiz haradadır?',
        trt: '',
        ch: 'Bizim müəllimimiz klinika bitirmək sadəlik bahar haradadır'
      },
      {
        id: 224,
        sntc: 'I can write it down',
        tr: 'Mən bunu yaza bilərəm',
        trt: 'Mən yaza bilərəm bunu',
        ch: 'Mən bunu yaza qane qutu qorxmaq sonuncu bilərəm'
      },
      {
        id: 225,
        sntc: 'How often does he test their knowledge?',
        tr: 'O, onların biliyini nə sıxlıqda yoxlayır?',
        trt: 'O, nə sıxlıqda onların biliyini yoxlayır?',
        ch: 'O, onların biliyini asan indi növbəti qəribə nə sıxlıqda yoxlayır'
      }
    ],
    [{
        id: 226,
        sntc: 'How is she?',
        tr: 'O, necədir?',
        trt: '',
        ch: 'O, ən yaxşı nümunədir səmərəsiz necədir'
      },
      {
        id: 227,
        sntc: 'The lesson is interesting',
        tr: 'Dərs maraqlıdır',
        trt: '',
        ch: 'Dərs zövq almaq davranmaq qəribədir maraqlıdır'
      },
      {
        id: 228,
        sntc: 'My friend and I live there in autumn',
        tr: 'Mənim dostum və mən payızda orada yaşayırıq',
        trt: 'Mənim dostum və mən orada payızda yaşayırıq',
        ch: 'Mənim dostum və mən çox gözəl payızda orada yaşayırıq'
      },
      {
        id: 229,
        sntc: 'Why are you here?',
        tr: 'Sən niyə burdasan?',
        trt: '',
        ch: 'Sən niyə dərk etmək yaza masası ən uzun burdasan'
      },
      {
        id: 230,
        sntc: 'Do I understand it correctly?',
        tr: 'Mən bunu düzgün başa düşürəm?',
        trt: 'Mən düzgün başa düşürəm bunu?',
        ch: 'Mən bunu düzgün başa şərt tezliklə mümkün düşürəm'
      }
    ],
    [{
        id: 231,
        sntc: "I'm fond of this app thanks to my fantastic result",
        tr: 'Fantastik nəticəm sayəsində mən bu tətbiqi çox sevirəm',
        trt: 'Fantastik nəticəm sayəsində bu tətbiqi çox sevirəm',
        ch: 'Fantastik nəticəm sayəsində nəzərdə mən tutmaq bu tətbiqi çox sevirəm'
      },
      {
        id: 232,
        sntc: "She isn't with us",
        tr: 'O, bizimlə deyil',
        trt: '',
        ch: 'O, bizimlə rəqəmlər rəqabətə qirmək zövq almaq deyil'
      },
      {
        id: 233,
        sntc: "Who's in the park?",
        tr: 'Parkda kimlər var?',
        trt: '',
        ch: 'Parkda kimlər effektiv uşaqlar çətin sınaq var'
      },
      {
        id: 234,
        sntc: "He isn't busy. He's free",
        tr: 'O, məşğul deyil. O, azaddır',
        trt: '',
        ch: 'O, məşğul küləkli faydasız qayda deyil. O, azaddır'
      },
      {
        id: 235,
        sntc: "She's very optimistic",
        tr: 'O, çox optimistdir',
        trt: '',
        ch: 'O, çox yaxşı öyrətmək oynamaq optimistdir'
      }
    ],
    [{
        id: 236,
        sntc: 'Money is also important',
        tr: 'Pul da vacibdir',
        trt: '',
        ch: 'Pul da nümunə səmərəsiz üsul nikbinllik vacibdir'
      },
      {
        id: 237,
        sntc: 'Is it sunny?',
        tr: 'Günəşlidir?',
        trt: '',
        ch: 'Günəşlidir aydın mümkün belə o qədər'
      },
      {
        id: 238,
        sntc: 'Are you there?',
        tr: 'Sən ordasan?',
        trt: '',
        ch: 'Sən mümkün hazırlaşmaq imtahan ab-hava ordasan'
      },
      {
        id: 239,
        sntc: 'They need your help',
        tr: 'Onlara sənin köməyin lazımdır',
        trt: '',
        ch: 'Onlara sənin həftə stimullaşdırmaq mütəxəssis köməyin lazımdır'
      },
      {
        id: 240,
        sntc: 'How interesting is this magazine?',
        tr: 'Bu jurnal nə dərəcədə maraqlıdır?',
        trt: '',
        ch: 'Bu jurnal nə dərəcədə davranmaq qəribə yaşlı maraqlıdır'
      }
    ],
    [{
        id: 241,
        sntc: "It isn't her recommendation",
        tr: 'Bu onun tövsiyəsi deyil',
        trt: '',
        ch: 'Bu onun tövsiyəsi vəziyyət sadə qız hekayə deyil'
      },
      {
        id: 242,
        sntc: 'Is the lesson useful?',
        tr: 'Dərs faydalıdır?',
        trt: '',
        ch: 'Dərs yaddaş pis Məşq tənbəl faydalıdır'
      },
      {
        id: 243,
        sntc: 'Do you go to them often?',
        tr: 'Sən tez-tez onların yanına gedirsən?',
        trt: 'Sən onların yanına tez-tez gedirsən?',
        ch: 'Sən tez-tez onların yanına mətn otaq daha gedirsən'
      },
      {
        id: 244,
        sntc: "He's keen on foreign languages",
        tr: 'O, xarici dillərə həvəslidir',
        trt: '',
        ch: 'O, xarici dillərə problem məşq etmək yaddaş həvəslidir'
      },
      {
        id: 245,
        sntc: 'What helps you?',
        tr: 'Sizə nə kömək edir?',
        trt: '',
        ch: 'Sizə nə kömək tənbəl qaranlıq isti edir'
      }
    ],
    [{
        id: 246,
        sntc: 'I like this advice',
        tr: 'Bu məsləhət xoşuma gəlir',
        trt: '',
        ch: 'Bu məsləhət xoşuma həddən artıq ev zəngin gəlir'
      },
      {
        id: 247,
        sntc: 'How do you usually spend your free time?',
        tr: 'Adətən boş vaxtını necə keçirirsən?',
        trt: '',
        ch: 'Adətən boş vaxtını direktor uğurlu layihə necə keçirirsən'
      },
      {
        id: 248,
        sntc: "It's a very useful example",
        tr: 'Bu çox faydalı nümunədir',
        trt: '',
        ch: 'Bu çox faydalı peşəkar ucuz istedadlı vəziyyət nümunədir'
      },
      {
        id: 249,
        sntc: 'Her husband is in hospital',
        tr: 'Onun əri xəstəxanadadır',
        trt: '',
        ch: 'Onun əri bilik güc hava limanda xəstəxanadadır'
      },
      {
        id: 250,
        sntc: 'Is this method new?',
        tr: 'Bu üsul yenidir?',
        trt: '',
        ch: 'Bu üsul yenidir qutu çanta nə üçün'
      }
    ],
    [{
        id: 251,
        sntc: "I'll be grateful to you for your help",
        tr: 'Köməyinizə görə sizə minnətdar olacağam',
        trt: 'Köməyinizə görə minnətdar olacağam sizə',
        ch: 'Köməyinizə görə mənfəətli universitet məşhur sizə minnətdar olacağam'
      },
      {
        id: 252,
        sntc: "He'll say it again",
        tr: 'O, bunu yenə deyəcək',
        trt: 'O, yenə bunu deyəcək',
        ch: 'O, bunu yenə məşğul səhv xoşbəxt deyəcək'
      },
      {
        id: 253,
        sntc: "We'll go on holiday soon",
        tr: 'Biz tezliklə bayrama gedəcəyik',
        trt: 'Biz bayrama gedəcəyik tezliklə',
        ch: 'Biz tezliklə bayrama cüt jurnal şalvar gedəcəyik'
      },
      {
        id: 254,
        sntc: "We'll create a very positive atmosphere",
        tr: 'Biz çox müsbət ab-hava yaradacıq',
        trt: '',
        ch: 'Biz çox müsbət ab-hava sahib mənzil oğlan yaradacıq'
      },
      {
        id: 255,
        sntc: "I'll maximize the profit",
        tr: 'Mən mənfəəti maksimuma çatdıracağam',
        trt: '',
        ch: 'Mən mənfəəti maksimuma tutmaq tənqid qiymət çatdıracağam'
      }
    ],
    [{
        id: 256,
        sntc: 'The authorities will regulate it somehow',
        tr: 'Hökümət orqanları hansısa yolla bunu tənzimləyəcək',
        trt: 'Hökümət orqanları bunu hansısa yolla tənzimləyəcək',
        ch: 'Hökümət orqanları bunu hansısa yolla uzun çay yazmaq tənzimləyəcək'
      },
      {
        id: 257,
        sntc: 'My friend and will hurry up',
        tr: 'Mənim dostum və mən tələsəcəyik',
        trt: '',
        ch: 'Mənim dostum və mən tələsəcəyik'
      },
      {
        id: 258,
        sntc: 'Everyone will refuse to do it',
        tr: 'Hər kəs bunu etməkdən imtina edəcək',
        trt: 'Hər kəs imtina edəcək bunu etməkdən',
        ch: 'Hər kəs bunu etməkdən rəqəmlər rəqabətə qirmək imtina edəcək'
      },
      {
        id: 259,
        sntc: 'Our sales manager will calculate it',
        tr: 'Bizim satış menecerimiz bunu hesablayacaq',
        trt: 'Bizim satış menecerimiz hesablayacaq bunu',
        ch: 'Bizim satış menecerimiz bunu hesablayacaq'
      },
      {
        id: 260,
        sntc: 'Everyone will be shocked',
        tr: 'Hamı şoka düşəcək',
        trt: '',
        ch: 'Hamı şoka sadəlik ümid qəmli maaş düşəcək'
      }
    ],
    [{
        id: 261,
        sntc: "It won't lead to success",
        tr: 'Bu, uğura gətirib çıxarmayacaq',
        trt: '',
        ch: 'Bu, uğura gətirib mümkün hazırlaşmaq imtahan çıxarmayacaq'
      },
      {
        id: 262,
        sntc: "We won't swim there",
        tr: 'Biz orada üzməyəcəyik',
        trt: 'Biz üzməyəcəyik orada',
        ch: 'Biz orada uzun çay yazmaq üzməyəcəyik'
      },
      {
        id: 263,
        sntc: "He won't pass this test",
        tr: 'O, bu sınaqdan keçməyəcək',
        trt: 'O, keçməyəcək bu sınaqdan',
        ch: 'O, bu sınaqdan mövzu döşəmə heyran olmaq keçməyəcək'
      },
      {
        id: 264,
        sntc: "They won't find a solution to such an important problem soon",
        tr: 'Onlar belə bir vacib problemin həllini tezliklə tapmayacaqlar',
        trt: 'Onlar belə bir vacib problemin tezliklə həllini tapmayacaqlar',
        ch: 'Onlar belə bir vacib problemin film möhtəşəm tezliklə həllini tapmayacaqlar'
      },
      {
        id: 265,
        sntc: "We won't complain about it",
        tr: 'Biz bundan şikayət etmərik',
        trt: '',
        ch: 'Biz bundan şikayət getmək təmir etmək rədd etmərik'
      }
    ],
    [{
        id: 266,
        sntc: "The girl won't learn everything so quickly",
        tr: 'Qız hər şeyi belə tez öyrənməyəcək',
        trt: '',
        ch: 'Qız hər şeyi belə tez vermək hazırlıq həll olunma öyrənməyəcək'
      },
      {
        id: 267,
        sntc: "The day won't be rainy",
        tr: 'Gün yağışlı olmayacaq',
        trt: '',
        ch: 'Gün yağışlı investisiya reaksiya qanuni məsləhət olmayacaq'
      },
      {
        id: 268,
        sntc: "His grandfather won't know it",
        tr: 'Onun babası bunu bilməyəcək',
        trt: 'Onun babası bilməyəcək bunu',
        ch: 'Onun babası bunu bu gün yağışlı təşəbbüs qonaq bilməyəcək'
      },
      {
        id: 269,
        sntc: "My colleagues won't support this initiative",
        tr: 'Mənim həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər',
        trt: 'Mənim həmkarlarım dəstəkləməyəcəklər bu təşəbbüsü',
        ch: 'Mənim həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər'
      },
      {
        id: 270,
        sntc: "It won't be the only right method",
        tr: 'Bu, yeganə düzgün üsul olmayacaq',
        trt: '',
        ch: 'Bu, yeganə düzgün üsul saat bişirmək sonra darıxmaq olmayacaq'
      }
    ],
    [{
        id: 271,
        sntc: 'Will it be possible at the end of the meeting?',
        tr: 'Bu, görüşün sonunda mümkün olacaq?',
        trt: '',
        ch: 'Bu, görüşün sonunda mümkün başlanğıc cib münasibət olacaq'
      },
      {
        id: 272,
        sntc: 'Will you inform your assistant?',
        tr: 'Köməkçinizə məlumat verəcəksiniz?',
        trt: '',
        ch: 'Köməkçinizə məlumat musiqiçi iştirak etməyən orada verəcəksiniz'
      },
      {
        id: 273,
        sntc: 'Will you celebrate your birthday?',
        tr: 'Ad gününü qeyd edəcəksən?',
        trt: '',
        ch: 'Ad gününü qeyd uçmaq qiymət qoşulmaq ədəbiyyat edəcəksən'
      },
      {
        id: 274,
        sntc: 'She always criticizes him',
        tr: 'O, həmişə onu tənqid edir',
        trt: 'O, onu həmişə tənqid edir',
        ch: 'O, həmişə onu tənqid xatırlatmaq asanlıqla saxlamaq sirr edir'
      },
      {
        id: 275,
        sntc: 'Will I have an advanced level in English?',
        tr: 'Mən İngilis dilində qabaqcıl səviyyəyə malik olacam?',
        trt: '',
        ch: 'Mən İngilis dilində qabaqcıl səviyyəyə malik kəs tələffüz olacam'
      }
    ],
    [{
        id: 276,
        sntc: 'She reads English books',
        tr: 'O, İngilis dilində kitablar oxuyur',
        trt: '',
        ch: 'O, İngilis dilində kitablar gərgin fəxr etmək daxil oxuyur'
      },
      {
        id: 277,
        sntc: 'Will it change their attitude to health?',
        tr: 'Bu, onların sağlamlığa münasibətini dəyişəcək?',
        trt: '',
        ch: 'Bu, onların sağlamlığa münasibətini dəyişəcək'
      },
      {
        id: 278,
        sntc: "It'll be necessary to check it one more time",
        tr: 'Bunu bir dəfədə yoxlamaq lazım olacaq',
        trt: '',
        ch: 'Bunu bir dəfədə yoxlamaq lazım İzləmək ölmək yaratmaq olacaq'
      },
      {
        id: 279,
        sntc: "I'm interested in it",
        tr: 'Bu məni maraqlıdırır',
        trt: 'Bu maraqlıdırır məni',
        ch: 'Bu məni məsrəf qismən səbəb ifadə maraqlıdırır'
      },
      {
        id: 280,
        sntc: 'Will it be possible tomorrow?',
        tr: 'Bu, sabah mümkün olacaq?',
        trt: 'Bu, mümkün olacaq sabah?',
        ch: 'Bu, sabah mümkün aydın sakit ziyafət təsvir olacaq'
      }
    ],
    [{
        id: 281,
        sntc: 'Why will you fly to another place?',
        tr: 'Sən niyə başqa yerə uçacaqsan?',
        trt: 'Sən başqa yerə niyə uçacaqsan?',
        ch: 'Sən niyə başqa yerə səslənmək fürsət müqayisə etmək uçacaqsan'
      },
      {
        id: 282,
        sntc: 'How much will it cost?',
        tr: 'Bu neçəyə başa gələcək?',
        trt: '',
        ch: 'Bu neçəyə başa təmin etmək əla şərait gələcək'
      },
      {
        id: 283,
        sntc: "I'll manage to solve this problem",
        tr: 'Mən bu problemi həll etməyi bacararam',
        trt: '',
        ch: 'Mən bu problemi həll pul kisəsi mahnı populyar etməyi bacararam'
      },
      {
        id: 284,
        sntc: 'When will she join us?',
        tr: 'O, bizə nə vaxt qoşulacaq?',
        trt: 'O, nə vaxt bizə qoşulacaq?',
        ch: 'O, bizə nə vaxt qəzet kreslo ondan sonra qoşulacaq'
      },
      {
        id: 285,
        sntc: 'How will you be able to solve this problem?',
        tr: 'Sən bu problemi necə həll edə biləcəksən?',
        trt: '',
        ch: 'Sən bu problemi necə həll məyus dinləmək min ay edə biləcəksən'
      }
    ],
    [{
        id: 286,
        sntc: 'Why will he regret it?',
        tr: 'O, niyə buna görə peşman olacaq?',
        trt: 'O, buna görə niyə peşman olacaq?',
        ch: 'O, buna görə niyə peşman hər şey möhtəşəm qayıtmaq olacaq'
      },
      {
        id: 287,
        sntc: 'How regularly will the employees make this kind of reports?',
        tr: 'İşçilər bu cür hesabatları nə qədər davamlı edəcəklər?',
        trt: '',
        ch: 'İşçilər bu cür hesabatları nə qədər davamlı göstərmək parlaq edəcəklər'
      },
      {
        id: 288,
        sntc: 'How will the student be able to improve the result?',
        tr: 'Şagird nəticəni necə yaxşılaşdıra biləcək?',
        trt: '',
        ch: 'Şagird nəticəni necə yaxşılaşdıra ziyafət məyus etmək biləcək'
      },
      {
        id: 289,
        sntc: 'How much money will your friend owe you?',
        tr: 'Sənin dostun sənə nə qədər pul borclu olacaq?',
        trt: 'Sənin dostun nə qədər pul borclu olacaq sənə?',
        ch: 'Sənin dostun sənə nə qədər pul təmir etmək borclu olacaq'
      },
      {
        id: 290,
        sntc: 'How many places will you visit?',
        tr: 'Sən nə qədər yeri ziyarət edəcəksən?',
        trt: '',
        ch: 'Sən nə qədər yeri ziyarət möhtəşəm qayıtmaq dünən edəcəksən'
      }
    ],
    [{
        id: 291,
        sntc: 'I’ll continue working here',
        tr: 'Mən burada işləməyə davam edəcəyəm',
        trt: 'Mən davam edəcəyəm burada işləməyə',
        ch: 'Mən burada işləməyə davam qayıtmaq dünən bizə edəcəyəm'
      },
      {
        id: 292,
        sntc: 'They’ll be able to resolve this conflict',
        tr: 'Onlar bu münaqişəni həll edə biləcəklər',
        trt: 'Onlar həll edə biləcəklər bu münaqişəni',
        ch: 'Onlar bu münaqişəni həll edə bunlar sahib olmaq biləcəklər'
      },
      {
        id: 293,
        sntc: 'You’ll hear it at the beginning of the movie',
        tr: 'Sən bunu filmin əvvəlində eşidəcəksən',
        trt: 'Sən filmin əvvəlində bunu eşidəcəksən',
        ch: 'Sən bunu filmin əvvəlində faydalı içmək süd sənin eşidəcəksən'
      },
      {
        id: 294,
        sntc: 'You’ll see this advertisement there',
        tr: 'Siz bu reklamı orada görəcəksiniz',
        trt: 'Siz orada bu reklamı görəcəksiniz',
        ch: 'Siz bu reklamı orada gəlmək haqqında başa düşün görəcəksiniz'
      },
      {
        id: 295,
        sntc: "I won't reinvent the wheel",
        tr: 'Mən təkəri yenidən icad etməyəcəm',
        trt: 'Mən yenidən təkəri icad etməyəcəm',
        ch: 'Mən təkəri yenidən internet göstərmək nəticə dəstək icad etməyəcəm'
      }
    ],
    [{
        id: 296,
        sntc: 'They’ll change their point of view',
        tr: 'Onlar baxışlarını dəyişəcəklər',
        trt: '',
        ch: 'Onlar baxışlarını məmnuniyyət hər hansı fərqli dəyişəcəklər'
      },
      {
        id: 297,
        sntc: "I won't change my attitude to her",
        tr: 'Mən ona olan münasibətimi dəyişməyəcəm',
        trt: 'Mən ona münasibətimi dəyişməyəcəm',
        ch: 'Mən ona olan münasibətimi həqiqətən düzgün həmçinin qardaş dəyişməyəcəm'
      },
      {
        id: 298,
        sntc: "We won't take part in this competition",
        tr: 'Biz bu yarışda iştirak etməyəcik',
        trt: 'Biz iştirak etməyəcik bu yarışda',
        ch: 'Biz bu yarışda iştirak cəlb etmək demək etməyəcik'
      },
      {
        id: 299,
        sntc: 'Everyone has this kind of problems',
        tr: 'Hər kəsin bu cür problemləri var',
        trt: '',
        ch: 'Hər kəsin bu cür effektiv uşaqlar çətin problemləri var'
      },
      {
        id: 300,
        sntc: 'Will it last for more than two hours?',
        tr: 'Bu, iki saatdan çox davam edəcək?',
        trt: '',
        ch: 'Bu, iki saatdan çox davam optimist yeni üçün edəcək'
      }
    ],
    [{
        id: 301,
        sntc: 'Will it be a potential threat?',
        tr: 'Bu, potensial təhlükə olacaq?',
        trt: '',
        ch: 'Bu, potensial təhlükə mətbəx darıxdırıcı qane etmək olacaq'
      },
      {
        id: 302,
        sntc: 'I’ll be grateful to you for it',
        tr: 'Mən sənə buna görə minnətdar olacam',
        trt: 'Mən buna görə sənə minnətdar olacam',
        ch: 'Mən buna görə sənə minnətdar bitirmək sadəlik bahar olacam'
      },
      {
        id: 303,
        sntc: 'Will I improve my English?',
        tr: 'Mən İngilis dilimi təkmilləşdirəcəyəm?',
        trt: '',
        ch: 'Mən İngilis dilimi sabah yemək dadlı təkmilləşdirəcəyəm'
      },
      {
        id: 304,
        sntc: 'How much money will you spend on it?',
        tr: 'Sən buna nə qədər pul xərcləyəcəksən?',
        trt: 'Sən nə qədər pul xərcləyəcəksən buna?',
        ch: 'Sən buna nə qədər pul münasib axşam hazırlaşmaq xərcləyəcəksən'
      },
      {
        id: 305,
        sntc: 'Will you have a high salary?',
        tr: 'Sənin yüksək maaşın olacaq?',
        trt: 'Sənin maaşın yüksək olacaq?',
        ch: 'Sənin yüksək maaşın qurmaq təhlil etmək məlumat olacaq'
      }
    ],
    [{
        id: 306,
        sntc: 'I’ll be proud of your results',
        tr: 'Mən sənin nəticələrinlə fəxr edəcəm',
        trt: '',
        ch: 'Mən sənin nəticələrinlə fəxr çay yazmaq həftə stimullaşdırmaq edəcəm'
      },
      {
        id: 307,
        sntc: 'How will you manage to find a solution to such a difficult problem?',
        tr: 'Sən belə çətin bir problemin həllini necə tapa biləcəksən?',
        trt: 'Sən belə çətin problemin həllini necə tapa biləcəksən?',
        ch: 'Sən belə çətin bir problemin həllini necə ən uzun tapa biləcəksən'
      },
      {
        id: 308,
        sntc: 'We’ll support this initiative',
        tr: 'Biz bu təşəbbüsü dəstəkləyəcəyik',
        trt: 'Biz dəstəkləyəcəyik bu təşəbbüsü',
        ch: 'Biz bu təşəbbüsü şərt tezliklə mümkün dəstəkləyəcəyik'
      },
      {
        id: 309,
        sntc: 'Will the students look this word up in a dictionary?',
        tr: 'Tələbələr bu sözə lüğətdə baxacaqlar?',
        trt: 'Tələbələr lüğətdə bu sözə baxacaqlar?',
        ch: 'Tələbələr bu sözə lüğətdə soyuq gözəl qız yaxşı baxacaqlar'
      },
      {
        id: 310,
        sntc: 'I’ll look up this phrase in a dictionary',
        tr: 'Mən bu ifadəyə lüğətdə baxacam',
        trt: 'Mən lüğətdə bu ifadəyə baxacam',
        ch: 'Mən bu ifadəyə lüğətdə üzgün təkmilləşdirmək pul dəyişmək baxacam'
      }
    ],
    [{
        id: 311,
        sntc: 'He’ll miss her',
        tr: 'O, onun üçün darıxacaq',
        trt: 'O, darıxacaq onun üçün',
        ch: 'O, onun üçün başa düşün bunlar xalq darıxacaq'
      },
      {
        id: 312,
        sntc: 'My elder brother and I will be there',
        tr: 'Mənim böyük qardaşım və mən orada olacağıq',
        trt: '',
        ch: 'Mənim böyük qardaşım və mən orada düzəltmək xalq olacağıq'
      },
      {
        id: 313,
        sntc: 'Will this movie last for two hours?',
        tr: 'Bu film iki saat davam edəcək?',
        trt: '',
        ch: 'Bu film iki saat davam həqiqət onlar tələbə edəcək'
      },
      {
        id: 314,
        sntc: 'I think this musician won’t become popular',
        tr: 'Məncə, bu musiqiçi populyar olmayacaq',
        trt: '',
        ch: 'Məncə, bu musiqiçi populyar mütəmadı qulaq asmaq olmayacaq'
      },
      {
        id: 315,
        sntc: 'I’ll manage to double our sales despite the crisis',
        tr: 'Böhrana baxmayaraq satışlarımızı ikiqat artırmağı bacaracam',
        trt: '',
        ch: 'Böhrana baxmayaraq satışlarımızı sevmək istəmək gəlmək ikiqat artırmağı bacaracam'
      }
    ],
    [{
        id: 316,
        sntc: 'I’ll spend so much money on it',
        tr: 'Mən buna elə çox pul xərcləyəcəm',
        trt: '',
        ch: 'Mən buna elə çox pul hər hansı səhv xərcləyəcəm'
      },
      {
        id: 317,
        sntc: 'Everyone will laugh at us',
        tr: 'Hər kəs bizə güləcək',
        trt: 'Hər kəs güləcək bizə',
        ch: 'Hər kəs bizə bu xaricdə sən həqiqətən güləcək'
      },
      {
        id: 318,
        sntc: 'The authorities will control it',
        tr: 'Hökümət orqanları bunu idarə edəcək',
        trt: 'Hökümət orqanları idarə edəcək bunu',
        ch: 'Hökümət orqanları bunu adamlar maşın etmək idarə edəcək'
      },
      {
        id: 319,
        sntc: 'I think I’ll find the keys there',
        tr: 'Məncə, mən açarları orada tapacam',
        trt: 'Məncə, mən orada açarları tapacam',
        ch: 'Məncə, mən açarları orada valideyn sınaq asan dost tapacam'
      },
      {
        id: 320,
        sntc: 'How will you celebrate your birthday?',
        tr: 'Sən ad gününü necə qeyd edəcəksən?',
        trt: '',
        ch: 'Sən ad gününü necə qeyd adamlar maşın cəlb etmək edəcəksən'
      }
    ],
    [{
        id: 321,
        sntc: "The guests won't notice our absence",
        tr: 'Qonaqlar bizim yoxluğumuza fikir verməyəcəklər',
        trt: '',
        ch: 'Qonaqlar bizim yoxluğumuza fikir sonra hiss etmək gətirmək  verməyəcəklər'
      },
      {
        id: 322,
        sntc: 'What do they want to tell you?',
        tr: 'Onlar sənə nə demək istəyirlər?',
        trt: 'Onlar nə demək istəyirlər sənə?',
        ch: 'Onlar sənə nə demək etmək üstünlük vermək hansı istəyirlər'
      },
      {
        id: 323,
        sntc: 'Everyone will look happy',
        tr: 'Hər kəs xoşbəxt görünəcək',
        trt: '',
        ch: 'Hər kəs xoşbəxt razılaşmamaq hansı ruhlandırmaq həzz görünəcək'
      },
      {
        id: 324,
        sntc: 'She’ll keep this secret',
        tr: 'O, bu sirri saxlayacaq',
        trt: '',
        ch: 'O, bu sirri musiqi çox həqiqətən düzgün saxlayacaq'
      },
      {
        id: 325,
        sntc: "They won't find a solution to this problem",
        tr: 'Onlar bu problemin həllini tapmayacaqlar',
        trt: '',
        ch: 'Onlar bu problemin həllini qız hekayə görüş tapmayacaqlar'
      }
    ],
    [{
        id: 326,
        sntc: 'She needed to get in touch with him',
        tr: 'Onun onunla əlaqə qurmağa ehtiyacı var idi',
        trt: '',
        ch: 'Onun onunla əlaqə qurmağa ehtiyacı var aydın qlobal sahib idi'
      },
      {
        id: 327,
        sntc: 'He believed her',
        tr: 'O, ona inandı',
        trt: 'O, inandı ona',
        ch: 'O, ona məşhur siyasət qutu bizə inandı'
      },
      {
        id: 328,
        sntc: 'I switched on the computer',
        tr: 'Mən kompüteri qoşdum',
        trt: 'Mən qoşdum kompüteri',
        ch: 'Mən kompüteri asan indi növbəti qəribə qoşdum'
      },
      {
        id: 329,
        sntc: 'I really liked your lessons',
        tr: 'Dərsləriniz həqiqətən xoşuma gəldi',
        trt: 'Dərsləriniz xoşuma gəldi həqiqətən',
        ch: 'Dərsləriniz həqiqətən cib məşğul səhv xoşbəxt xoşuma gəldi'
      },
      {
        id: 330,
        sntc: 'He repeated that sentence',
        tr: 'O, həmin cümləni təkrarladı',
        trt: '',
        ch: 'O, həmin cümləni jurnal şalvar dolu nikbinlik təkrarladı'
      }
    ],
    [{
        id: 331,
        sntc: 'I remembered one very important thing',
        tr: 'Çox vacib bir şey yadıma düşdü',
        trt: '',
        ch: 'Çox vacib bir şey yadıma düşdü'
      },
      {
        id: 332,
        sntc: 'I followed your recommendation',
        tr: 'Mən sizin tövsiyənizə əməl etdim',
        trt: 'Mən əməl etdim sizin tövsiyənizə',
        ch: 'Mən sizin tövsiyənizə əməl etdim'
      },
      {
        id: 333,
        sntc: 'I returned home',
        tr: 'Mən evə qayıtdım',
        trt: 'Mən qayıtdım evə',
        ch: 'Mən evə müdrik qadın effektiv belə qayıtdım'
      },
      {
        id: 334,
        sntc: 'Everything remained the same',
        tr: 'Hər şey əvvəlki kimi qaldı',
        trt: '',
        ch: 'Hər şey əvvəlki kimi əla nəticə cəlb etmək qaldı'
      },
      {
        id: 335,
        sntc: 'He reached such a high level',
        tr: 'O, çox yüksək səviyyəyə çatdı',
        trt: '',
        ch: 'O, çox yüksək üçün şikayət etmək rədd səviyyəyə çatdı'
      }
    ],
    [{
        id: 336,
        sntc: 'He invited us to his birthday',
        tr: 'O, bizi ad gününə dəvət etdi',
        trt: 'O, ad gününə bizi dəvət etdi',
        ch: 'O, bizi ad gününə dəvət məsləhət çox qərar təşəkkür etdi'
      },
      {
        id: 337,
        sntc: 'I expressed my ideas',
        tr: 'Mən fikirlərimi ifadə etdim',
        trt: '',
        ch: 'Mən fikirlərimi müdir həmişə olmaq oxumaq ifadə etdim'
      },
      {
        id: 338,
        sntc: 'I solved such a difficult task',
        tr: 'Mən belə çətin bir tapşırıqı həll etdim',
        trt: '',
        ch: 'Mən belə çətin bir arvad kasıb dost məktəb tapşırıqı həll etdim'
      },
      {
        id: 339,
        sntc: 'I disagreed with him',
        tr: 'Mən onunla razılaşmadım',
        trt: 'Mən razılaşmadım onunla',
        ch: 'Mən onunla  ev musiqi çox həqiqətən razılaşmadım'
      },
      {
        id: 340,
        sntc: 'I translated it from Azerbaijani into English',
        tr: 'Mən bunu Azerbaycan dilindən İngilis dilinə tərcümə etmişəm',
        trt: 'Mən Azerbaycan dilindən İngilis dilinə bunu tərcümə etmişəm',
        ch: 'Mən bunu Azerbaycan dilindən İngilis dilinə görüş populyar tərcümə etmişəm'
      }
    ],
    [{
        id: 341,
        sntc: 'I reached an Advanced level',
        tr: 'Mən qabaqcıl səviyyəyə çatdım',
        trt: 'Mən çatdım qabaqcıl səviyyəyə',
        ch: 'Mən qabaqcıl səviyyəyə nəticə dəstək hər şey çatdım'
      },
      {
        id: 342,
        sntc: 'She often watched TV',
        tr: 'O, çox vaxt televizora baxırdı',
        ch: 'O, çox vaxt televizora vermək məşq yaddaş xərcləmək baxırdı'
      },
      {
        id: 343,
        sntc: 'He owned this house',
        tr: 'O, bu evin sahibi idi',
        trt: '',
        ch: 'O, bu evin sahibi zövq almaq davranmaq qəribə idi'
      },
      {
        id: 344,
        sntc: 'She really liked this place',
        tr: 'O, həqiqətən bu yeri bəyəndi',
        trt: 'O, bu yeri həqiqətən bəyəndi',
        ch: 'O, həqiqətən bu yeri qəmli birlikdə məşğul uzaq bəyəndi'
      },
      {
        id: 345,
        sntc: 'This house belonged to her',
        tr: 'Bu ev ona məxsus idi',
        trt: '',
        ch: 'Bu ev ona məxsus faydasız qayda cins yorğun idi'
      }
    ],
    [{
        id: 346,
        sntc: 'I prepared for the test',
        tr: 'Mən imtahana hazırlaşdım',
        trt: 'Mən hazırlaşdım imtahana',
        ch: 'Mən imtahana sadəlik bahar eləyə bilmək hazırlaşdım'
      },
      {
        id: 347,
        sntc: 'She described this situation',
        tr: 'O, bu vəziyyəti təsvir etdi',
        trt: 'O, təsvir etdi bu vəziyyəti',
        ch: 'O, bu vəziyyəti təsvir cümlə məna idman böyük etdi'
      },
      {
        id: 348,
        sntc: 'He experienced so many difficulties',
        tr: 'O, elə çox çətinliklər yaşayıb',
        trt: '',
        ch: 'O, elə çox çətinliklər məvacib aşagı gərəkli vacib yaşayıb'
      },
      {
        id: 349,
        sntc: 'You calculated it incorrectly',
        tr: 'Siz bunu səhv hesablamısınız',
        trt: 'Siz səhv hesablamısınız bunu',
        ch: 'Siz bunu səhv döşəmə heyran olmaq cümlə hesablamısınız'
      },
      {
        id: 350,
        sntc: 'The police arrested this thief',
        tr: 'Polis bu oğrunu həbs etdi',
        trt: 'Polis həbs etdi bu oğrunu',
        ch: 'Polis bu oğrunu həbs etmək qutu qorxmaq sonuncuetdi'
      }
    ],
    [{
        id: 351,
        sntc: 'She married him',
        tr: 'O, ona ərə getdi',
        trt: '',
        ch: 'O, ona ərə populyar mahnı oğlan kasıb getdi'
      },
      {
        id: 352,
        sntc: 'She remained calm',
        tr: 'O, sakit qaldı',
        trt: '',
        ch: 'O, sakit yaxşı dünya ucuz soyuq qaldı'
      },
      {
        id: 353,
        sntc: 'They required more experience',
        tr: 'Onlar daha çox təcrübə tələb edirdilər',
        trt: '',
        ch: 'Onlar daha çox təcrübə tələb məşğul uzaq edirdilər'
      },
      {
        id: 354,
        sntc: 'He remained my friend',
        tr: 'O, mənim dostum qaldı',
        trt: '',
        ch: 'O, mənim dostum otuz yorğun dolu enerji qaldı'
      },
      {
        id: 355,
        sntc: 'I passed such a difficult exam',
        tr: 'Mən elə çətin imtahandan keçdim',
        trt: 'Mən çox çətin imtahandan keçdim',
        ch: 'Mən elə çətin imtahandan idarəçi çox gözəl keçdim'
      }
    ],
    [{
        id: 356,
        sntc: 'We faced a very big problem',
        tr: 'Biz çox böyük problemlə üzləşdik',
        trt: '',
        ch: 'Biz çox böyük problemlə yaddaş pis məşq tənbəl üzləşdik'
      },
      {
        id: 357,
        sntc: 'I hated discussing it',
        tr: 'Mən bunu müzakirə etməyə nifrət edirdim',
        trt: 'Mən nifrət edirdim bunu müzakirə etməyə',
        ch: 'Mən bunu müzakirə etməyə nifrət cüt jurnal şalvar edirdim'
      },
      {
        id: 358,
        sntc: 'She pointed at my mistakes',
        tr: 'O, mənim səhvlərimə işarə etdi',
        trt: '',
        ch: 'O, mənim səhvlərimə işarə qlobal sahib mənzil oğlan etdi'
      },
      {
        id: 359,
        sntc: 'I perfectly realized it',
        tr: 'Mən bunu mükəmməl dərk etdim',
        trt: '',
        ch: 'Mən bunu mükəmməl dərk günəşli qane etmək etdim'
      },
      {
        id: 360,
        sntc: 'We discussed everything',
        tr: 'Biz hər şeyi müzakirə etdik',
        trt: 'Biz müzakirə etdik hər şeyi',
        ch: 'Biz hər şeyi müzakirə şərt tezliklə mümkün hazırlaşmaq etdik'
      }
    ],
    [{
        id: 361,
        sntc: 'They delivered the goods on time',
        tr: 'Onlar malları vaxtında çatdırdılar',
        trt: 'Onlar vaxtında çatdırdılar malları',
        ch: 'Onlar malları vaxtında sabah yemək dadlı danışmaq çatdırdılar'
      },
      {
        id: 362,
        sntc: 'I promised to do it',
        tr: 'Mən bunu etmeyə söz vermişəm',
        trt: 'Mən söz vermişəm bunu etmeyə',
        ch: 'Mən bunu etmeyə söz hiss otuz yer yorğun vermişəm'
      },
      {
        id: 363,
        sntc: 'I refused to take their offer',
        tr: 'Mən onların təklifini qəbul etmədim',
        trt: 'Mən qəbul etmədim onların təklifini',
        ch: 'Mən onların təklifini qəbul həqiqət həll etmək etmədim'
      },
      {
        id: 364,
        sntc: 'He wasted time',
        tr: 'O, vaxtını itirdi',
        trt: '',
        ch: 'O, vaxtını xərcləmək kəçirmək birlikdə haqqında itirdi'
      },
      {
        id: 365,
        sntc: 'He promised to finish it',
        tr: 'O, bunu bitirəcəyinə söz verdi',
        trt: '',
        ch: 'O, bunu bitirəcəyinə söz müdrik qadın effektiv belə verdi'
      }
    ],
    [{
        id: 366,
        sntc: 'His speech inspired us',
        tr: 'Onun çıxışı bizi ruhlandırdı',
        trt: '',
        ch: 'Onun çıxışı bizi gülməli müvəffəqiyyət uğur bina ruhlandırdı'
      },
      {
        id: 367,
        sntc: 'He complained about that problem',
        tr: 'O, həmin problemdən şikayət etdi',
        trt: '',
        ch: 'O, həmin problemdən şikayət sahib mənzil oğlan məzəli etdi'
      },
      {
        id: 368,
        sntc: 'This example inspired me',
        tr: 'Bu nümunə məni ruhlandırdı',
        trt: '',
        ch: 'Bu nümunə məni klinika bitirmək sadəlik bahar ruhlandırdı'
      },
      {
        id: 369,
        sntc: 'The lesson lasted for half an hour',
        tr: 'Dərs yarım saat davam etdi',
        trt: '',
        ch: 'Dərs yarım saat davam ab-hava təəccüblü qorxutmaq etdi'
      },
      {
        id: 370,
        sntc: 'I preferred to stay at home',
        tr: 'Mən evdə qalmağa üstünlük verdim',
        trt: '',
        ch: 'Mən evdə qalmağa üstünlük cümlə məna idman böyük verdim'
      }
    ],
    [{
        id: 371,
        sntc: 'I managed to improve my pronunciation considerably',
        tr: 'Mən tələffüzümü xeyli yaxşılaşdırmağı bacardım',
        trt: '',
        ch: 'Mən tələffüzümü xeyli yaxşılaşdırmağı axşam hazırlaşmaq bacardım'
      },
      {
        id: 372,
        sntc: 'She danced professionally',
        tr: 'O, peşəkar rəqs etdi',
        trt: '',
        ch: 'O, peşəkar rəqs səyahət etmək möhtəşəm olar etdi'
      },
      {
        id: 373,
        sntc: 'I deleted this document by mistake',
        tr: 'Mən bu sənədi səhvən sildim',
        trt: 'Mən səhvən bu sənədi sildim',
        ch: 'Mən bu sənədi səhvən video hekayə biznes gəlirli sildim'
      },
      {
        id: 374,
        sntc: 'He deserved it',
        tr: 'O, buna layiq idi',
        trt: 'O, layiq idi buna',
        ch: 'O, buna layiq əməkdaş müdir tənqid götürmək idi'
      },
      {
        id: 375,
        sntc: 'I managed to do it',
        tr: 'Mən bunu bacardım',
        trt: 'Mən bacardım bunu',
        ch: 'Mən bunu durmaq yataq kim müntəzəm bacardım'
      }
    ],
    [{
        id: 376,
        sntc: 'It often rained there',
        tr: 'Orada tez-tez yağış yağırdı',
        trt: '',
        ch: 'Orada tez-tez yağış  nəzarət tərk etmək sifariş yağırdı'
      },
      {
        id: 377,
        sntc: 'He prayed to this saint',
        tr: 'O, bu müqəddəsə dua etdi',
        trt: '',
        ch: 'O, bu müqəddəsə dua xoşbəxt kifayət qədər praktika etdi'
      },
      {
        id: 378,
        sntc: 'The police arrested him',
        tr: 'Polis onu həbs etdi',
        trt: 'Polis həbs etdi onu',
        ch: 'Polis onu həbs sən həqiqətən şirkət ziyarət etdi'
      },
      {
        id: 379,
        sntc: 'I participated in this competition',
        tr: 'Mən bu yarışmada iştirak etmişəm',
        trt: 'Mən iştirak etmişəm bu yarışmada',
        ch: 'Mən bu yarışmada razılaşmaq ilə müzakirə demək iştirak etmişəm'
      },
      {
        id: 380,
        sntc: 'We analyzed this report',
        tr: 'Biz bu hesabatı təhlil etdik',
        trt: 'Biz təhlil etdik bu hesabatı',
        ch: 'Biz bu hesabatı təhlil maraq şərik olmaq ilham vermək etdik'
      }
    ],
    [{
        id: 381,
        sntc: 'This example inspired me',
        tr: 'Bu nümunə məni ruhlandırdı',
        trt: '',
        ch: 'Bu nümunə məni adamlar maşın cəlb etmək ruhlandırdı'
      },
      {
        id: 382,
        sntc: 'I hurried up',
        tr: 'Mən tələsdim',
        trt: '',
        ch: 'Mən düzgün təşəkkür istəmək təkmilləşdirmək tələsdim'
      },
      {
        id: 383,
        sntc: 'She suggested going to the cinema',
        tr: 'O, kinoteatra getməyi təklif etdi',
        trt: '',
        ch: 'O, kinoteatra getməyi təklif müəllim vermək nöw nümunə etdi'
      },
      {
        id: 384,
        sntc: 'I passed such a difficult exam',
        tr: 'Mən elə çətin imtahandan keçdim',
        trt: '',
        ch: 'Mən elə çətin imtahandan mükəmməl faydasız söz onun keçdim'
      },
      {
        id: 385,
        sntc: 'I hated discussing it',
        tr: 'Mən bunu müzakirə etməyə nifrət edirdim',
        trt: '',
        ch: 'Mən bunu müzakirə etməyə çox şəhər uzun nifrət edirdim'
      }
    ],
    [{
        id: 386,
        sntc: 'I perfectly realized it',
        tr: 'Mən bunu mükəmməl dərk etdim',
        trt: '',
        ch: 'Mən bunu mükəmməl dərk dünya ucuz soyuq etdim'
      },
      {
        id: 387,
        sntc: 'She apologized for everything',
        tr: 'O, hər şeyə görə üzr istədi',
        trt: 'O, üzr istədi hər şeyə görə',
        ch: 'O, hər şeyə görə üzr yaxın səviyyə məqalə istədi'
      },
      {
        id: 388,
        sntc: 'He invested all his money',
        tr: 'O, bütün pullarını sərmayə qoydu',
        trt: '',
        ch: 'O, bütün pullarını məşhur siyasət qutu sərmayə qoydu'
      },
      {
        id: 389,
        sntc: 'We solved all these problems',
        tr: 'Biz bütün bu problemləri həll etdik',
        trt: '',
        ch: 'Biz bütün bu problemləri indi növbəti qəribə həll etdik'
      },
      {
        id: 390,
        sntc: 'He remained my friend',
        tr: 'O, mənim dostum qaldı',
        trt: '',
        ch: 'O, mənim dostum vacib asan indi növbəti qaldı'
      }
    ],
    [{
        id: 391,
        sntc: 'I translated it from Azerbaijani into English',
        tr: 'Mən bunu Azərbaycan dilindən İngilis dilinə tərcümə etmişəm',
        trt: '',
        ch: 'Mən bunu Azərbaycan dilindən İngilis dilinə tərcümə etmişəm'
      },
      {
        id: 392,
        sntc: 'I revised this lesson',
        tr: 'Mən bu dərsi tekrarladım',
        trt: 'Mən tekrarladım bu dərsi',
        ch: 'Mən bu dərsi cüt jurnal şalvar tekrarladım'
      },
      {
        id: 393,
        sntc: 'We remained friends',
        tr: 'Biz dost qaldıq',
        trt: '',
        ch: 'Biz dost uşaqlar çətin sınaq ata qaldıq'
      },
      {
        id: 394,
        sntc: 'He always supported us',
        tr: 'O, həmişə bizə dəstək olub',
        trt: 'O, həmişə dəstək olub bizə',
        ch: 'O, həmişə bizə dəstək optimist güc tətil olub'
      },
      {
        id: 395,
        sntc: 'I included these examples',
        tr: 'Mən bu nümunələri daxil etdim',
        trt: 'Mən daxil etdim bu nümunələri',
        ch: 'Mən bu nümunələri daxil yüksək səviyyə ədəb etdim'
      }
    ],
    [{
        id: 396,
        sntc: 'We participated in that championship',
        tr: 'Biz o çempionatda iştirak etmişik',
        trt: 'Biz iştirak etmişik o çempionatda',
        ch: 'Biz o çempionatda iştirak bahar eləyə bilmək etmişik'
      },
      {
        id: 397,
        sntc: 'We signed a very important document',
        tr: 'Biz çox vacib sənədi imzaladıq',
        trt: '',
        ch: 'Biz çox vacib sənədi mətbəx darıxdırıcı qane imzaladıq'
      },
      {
        id: 398,
        sntc: 'They arrested those criminals',
        tr: 'Onlar həmin cinayətkarları həbs etdilər',
        trt: '',
        ch: 'Onlar həmin cinayətkarları həbs qane etmək cavab yaddaş etdilər'
      },
      {
        id: 399,
        sntc: 'He ordered him to defend them',
        tr: 'O, ona, onları müdafiə etməsini əmr verdi',
        trt: '',
        ch: 'O, ona, onları müdafiə etməsini əmr nəzərdə tutmaq verdi'
      },
      {
        id: 400,
        sntc: 'He borrowed more money',
        tr: 'O, daha çox borc götürdü',
        trt: '',
        ch: 'O, daha çox borc üdir həmişə olmaq oxumaq götürdü'
      }
    ],
    [{
        id: 401,
        sntc: 'I got a letter from her',
        tr: 'Mən ondan məktub aldım',
        trt: 'Mən məktub aldım ondan',
        ch: 'Mən ondan məktub qəmli birlikdə məşğul uzaq aldım'
      },
      {
        id: 402,
        sntc: 'I knew him very well',
        tr: 'Mən onu çox yaxşı tanıyırdım',
        trt: 'Mən çox yaxşı tanıyırdım onu',
        ch: 'Mən onu çox yaxşı məktəb böyük sadə tanıyırdım'
      },
      {
        id: 403,
        sntc: 'He said it very loudly',
        tr: 'O, bunu çox ucadan dedi',
        trt: 'O, çox ucadan dedi bunu',
        ch: 'O, bunu çox ucadan enerji pis metod dedi'
      },
      {
        id: 404,
        sntc: 'He did me a favor',
        tr: 'O, mənə bir lütf etdi',
        trt: 'O, mənə lütf etdi',
        ch: 'O, mənə bir lütf hirsli birinci köhnə etdi'
      },
      {
        id: 405,
        sntc: 'I said it again',
        tr: 'Mən bunu yenə dedim',
        trt: 'Mən yenə bunu dedim',
        ch: 'Mən bunu yenə uğur bina soyuq dedim'
      }
    ],
    [{
        id: 406,
        sntc: 'I put it on the desk',
        tr: 'Mən bunu masanın üstünə qoydum',
        trt: 'Mən masanın üstünə qoydum bunu',
        ch: 'Mən bunu masanın üstünə populyar dizayner otel qoydum'
      },
      {
        id: 407,
        sntc: 'I found my wallet',
        tr: 'Mən pul kisəmi tapdım',
        trt: '',
        ch: 'Mən pul kisəmi qorxmaq sonuncu kifayət qədər tapdım'
      },
      {
        id: 408,
        sntc: 'We found out all the truth',
        tr: 'Biz bütün həqiqəti aydınlaşdırdıq',
        trt: '',
        ch: 'Biz bütün həqiqəti optimist güc tətil aydınlaşdırdıq'
      },
      {
        id: 409,
        sntc: 'He gave me this advice',
        tr: 'O, mənə bu məsləhəti verdi',
        trt: 'O, bu məsləhəti verdi mənə',
        ch: 'O, mənə bu məsləhəti payız musiqiçi həqiqət verdi'
      },
      {
        id: 410,
        sntc: 'This song became very popular',
        tr: 'Bu mahnı çox məşhur oldu',
        trt: '',
        ch: 'Bu mahnı çox məşhur sahə rahat münasib oldu'
      }
    ],
    [{
        id: 411,
        sntc: 'He brought this thing to me',
        tr: 'O, mənə bu əşyanı gətirdi',
        trt: 'O, bu əşyanı gətirdi mənə',
        ch: 'O, mənə bu əşyanı qiymətli tətbiq fantastik gətirdi'
      },
      {
        id: 412,
        sntc: 'I left for England',
        tr: 'Mən İngiltərəyə yola düşdüm',
        trt: '',
        ch: 'Mən İngiltərəyə yola ayrılıqda səyahət etmək düşdüm'
      },
      {
        id: 413,
        sntc: 'I heard in on TV',
        tr: 'Mən bunu televizorda eşitdim',
        trt: 'Mən televizorda eşitdim bunu',
        ch: 'Mən bunu televizorda etmək olmaq seçim eşitdim'
      },
      {
        id: 414,
        sntc: 'She ran very fast',
        tr: 'O, çox sürətlə qaçdı',
        trt: '',
        ch: 'O, çox sürətlə hər biri addım İfadə qaçdı'
      },
      {
        id: 415,
        sntc: 'He ran away',
        tr: 'O, qaçıb getdi',
        trt: '',
        ch: 'O, qaçıb müsabiqə investisiya reaksiya qanuni getdi'
      }
    ],
    [{
        id: 416,
        sntc: 'He lost his wallet',
        tr: 'O, pul kisəsini itirdi',
        trt: '',
        ch: 'O, pul kisəsini gün yağışlı təşəbbüs itirdi'
      },
      {
        id: 417,
        sntc: 'She felt unhappy',
        tr: 'O, özünü bədbəxt hiss etdi',
        trt: '',
        ch: 'O, özünü bədbəxt hiss sonra darıxmaq məqalə etdi'
      },
      {
        id: 418,
        sntc: 'I met my classmate yesterday',
        tr: 'Mən dünən sinif yoldaşımla görüşdüm',
        trt: 'Mən sinif yoldaşımla dünən görüşdüm',
        ch: 'Mən dünən sinif yoldaşımla müddətində məlumat vermək görüşdüm'
      },
      {
        id: 419,
        sntc: 'I thought differently',
        tr: 'Mən fərqli düşünürdüm',
        trt: '',
        ch: 'Mən fərqli qaranlıq tezliklə əsas düşünürdüm'
      },
      {
        id: 420,
        sntc: 'He set a glass of water on the table',
        tr: 'O, stəkan suyu stolun üstünə qoydu',
        trt: 'O, stolun üstünə stəkan suyu qoydu',
        ch: 'O, stəkan suyu stolun üstünə gəmi balıq sviter qoydu'
      }
    ],
    [{
        id: 421,
        sntc: 'She sent me a message',
        tr: 'O, mənə mesaj göndərdi',
        trt: 'O, mesaj göndərdi mənə',
        ch: 'O, mənə mesaj imzalamaq hesabat qulluqçu göndərdi'
      },
      {
        id: 422,
        sntc: 'He gave me this thing',
        tr: 'O, mənə bu əşyanı verdi',
        trt: 'O, bu əşyanı mənə verdi',
        ch: 'O, mənə bu əşyanı verdi olmaq şad nikbin məyus'
      },
      {
        id: 423,
        sntc: 'I stood behind him',
        tr: 'Mən onun arxasında dayandım',
        trt: '',
        ch: 'Mən onun arxasında diqqətli qayğıkeş dəhşətli dayandım'
      },
      {
        id: 424,
        sntc: 'He fell down and hurt his arm',
        tr: 'O, yıxıldı və qolunu yaraladı',
        trt: '',
        ch: 'O, yıxıldı və qolunu məntiqi təəssürat doğuran yaraladı'
      },
      {
        id: 425,
        sntc: 'I read it in the article',
        tr: 'Mən bunu məqalədə oxudum',
        trt: '',
        ch: 'Mən bunu məqalədə gözlənilməz uğurlu sadiq oxudum'
      }
    ],
    [{
        id: 426,
        sntc: 'He cut the meat into four pieces',
        tr: 'O, əti dörd hissəyə böldü',
        trt: 'O, dörd hissəyə böldü əti',
        ch: 'O, əti dörd hissəyə aşağı orta düzgün böldü'
      },
      {
        id: 427,
        sntc: 'She wore very fashionable clothes',
        tr: 'O, çox dəbli geyimlər geyindi',
        trt: '',
        ch: 'O, çox dəbli geyimlər detal utancaq tamamilə geyindi'
      },
      {
        id: 428,
        sntc: 'He taught me a lesson',
        tr: 'O, mənə dərs verdi',
        trt: 'O, dərs verdi mənə',
        ch: 'O, mənə dərs lakin musiqi üstünlük verdi'
      },
      {
        id: 429,
        sntc: 'I’m afraid you understood me incorrectly',
        tr: 'Mən qorxuram sən məni səhv başa düşmüsən',
        trt: '',
        ch: 'Mən qorxuram sən məni səhv biznes əməkdaş müdir başa düşmüsən'
      },
      {
        id: 430,
        sntc: 'I lay in bed',
        tr: 'Mən yataqda uzandım',
        trt: 'Mən uzandım yataqda',
        ch: 'Mən yataqda dəstək izah etmək tapşırıquzandım'
      }
    ],
    [{
        id: 431,
        sntc: 'We wore a school uniform',
        tr: 'Biz məktəb forması geyinmişdik',
        trt: '',
        ch: 'Biz məktəb forması çox həqiqətən düzgün geyinmişdik'
      },
      {
        id: 432,
        sntc: 'This dress fit you perfectly',
        tr: 'Bu paltar sənə mükəmməl uyğun gəlir',
        trt: '',
        ch: 'Bu paltar sənə mükəmməl vermək almaq necə uyğun gəlir'
      },
      {
        id: 433,
        sntc: 'She taught this subject at university',
        tr: 'O, bu mövzunu universitetdə tədris etdi',
        trt: '',
        ch: 'O, bu mövzunu pulsuz ideya necə içmək universitetdə tədris etdi'
      },
      {
        id: 434,
        sntc: 'He drank a glass of orange juice',
        tr: 'O, bir stəkan portağal şirəsi içdi',
        trt: '',
        ch: 'O, bir stəkan portağal şirəsi indicə adətən qalxmaq içdi'
      },
      {
        id: 435,
        sntc: 'I flew back to Baku',
        tr: 'Mən Bakıya qayıtdım',
        trt: 'Mən qayıtdım Bakıya',
        ch: 'Mən Bakıya müdrik qadın effektiv belə qayıtdım'
      }
    ],
    [{
        id: 436,
        sntc: 'He stole his wallet',
        tr: 'O, onun pul kisəsini oğurladı',
        trt: '',
        ch: 'O, onun pul kisəsini idaya asan tənbəl həkim oğurladı'
      },
      {
        id: 437,
        sntc: 'He ate a piece of cake',
        tr: 'O, bir tikə tort yedi',
        trt: 'O, tort yedi bir tikə',
        ch: 'O, bir tikə tort adam menecer maraqlı yedi'
      },
      {
        id: 438,
        sntc: 'I woke up earlier',
        tr: 'Mən daha tez oyandım',
        trt: '',
        ch: 'Mən daha tez həddən artıq ev zənginoyandım'
      },
      {
        id: 439,
        sntc: 'I drank a cup of tea',
        tr: 'Mən bir fincan çay içdim',
        trt: 'Mən çay içdim bir fincan',
        ch: 'Mən bir fincan çay oxumaq təkmilləşdirdim qrammatikamı içdim'
      },
      {
        id: 440,
        sntc: 'They dug a hole in the ground',
        tr: 'Onlar yerdə quyu qazdılar',
        trt: 'Onlar quyu qazdılar yerdə',
        ch: 'Onlar yerdə quyu həll etmək problem qazdılar'
      }
    ],
    [{
        id: 441,
        sntc: 'They spoilt the food',
        tr: 'Onlar yeməyi xarab elədilər',
        trt: 'Onlar xarab elədilər yeməyi',
        ch: 'Onlar yeməyi xarab hansı ruhlandırmaq həzz elədilər'
      },
      {
        id: 442,
        sntc: 'I woke up later than usual',
        tr: 'Mən həmişəkindən gec oyandım',
        trt: '',
        ch: 'Mən həmişəkindən gec kino qulaq asmaq oyandım'
      },
      {
        id: 443,
        sntc: 'It smelt awful',
        tr: 'Bu, dəhşətli qoxu verdi',
        trt: '',
        ch: 'Bu, dəhşətli durmaq hiss etmək qoxu verdi'
      },
      {
        id: 444,
        sntc: 'I slept for two hours',
        tr: 'Mən iki saat yatdım',
        trt: '',
        ch: 'Mən iki saat görüş populyar mahnı yatdım'
      },
      {
        id: 445,
        sntc: 'He withdrew twenty thousand dollars from his account',
        tr: 'O, hesabından iyirmi min dollar çıxardı',
        trt: 'O, iyirmi min dollar hesabından çıxardı',
        ch: 'O, hesabından iyirmi min dollar sahib olmaq ev çıxardı'
      }
    ],
    [{
        id: 446,
        sntc: 'She often overslept',
        tr: 'O, çox vaxt yatıb qalırdı',
        trt: '',
        ch: 'O, çox vaxt yatıb universitet məşhur siyasət qutu qalırdı'
      },
      {
        id: 447,
        sntc: 'I wore a belt',
        tr: 'Mən kəmər taxdım',
        trt: '',
        ch: 'Mən kəmər səviyyə məqalə informativ müğənni taxdım'
      },
      {
        id: 448,
        sntc: 'An angry dog bit him',
        tr: 'Qəzəbli it onu dişlədi',
        trt: 'Qəzəbli it dişlədi onu',
        ch: 'Qəzəbli it onu dişlədi asan dərs düzgün'
      },
      {
        id: 449,
        sntc: 'I drove home',
        tr: 'Mən maşınla evə getdim',
        trt: 'Mən evə getdim maşınla',
        ch: 'Mən maşınla evə müdir tənqid götürmək getdim'
      },
      {
        id: 450,
        sntc: 'He lit the candle',
        tr: 'O, şamı yandırdı',
        trt: 'O, yandırdı şamı',
        ch: 'O, şamı menecer idarəçi çox gözəl yandırdı'
      }
    ],
    [{
        id: 451,
        sntc: 'He lent her several hundred dollars',
        tr: 'O, ona bir neçə yüz dollar borc verdi',
        trt: '',
        ch: 'O, ona bir neçə yüz dollar borc məktəb bacı yaşamaq verdi'
      },
      {
        id: 452,
        sntc: 'He stole her bag',
        tr: 'O, onun çantasını oğurladı',
        trt: '',
        ch: 'O, onun çantasını cəlb etmək demək oğurladı'
      },
      {
        id: 453,
        sntc: 'I swam in the sea',
        tr: 'Mən dənizdə üzdüm',
        trt: 'Mən üzdüm dənizdə',
        ch: 'Mən dənizdə kitab oxumaq sahib olmaq üzdüm'
      },
      {
        id: 454,
        sntc: 'I understood your point of view',
        tr: 'Mən sizin nöqteyi-nəzərinizi başa düşdüm',
        trt: '',
        ch: 'Mən sizin nöqteyi-nəzərinizi ziyafət bayırdan reaksiya başa düşdüm'
      },
      {
        id: 455,
        sntc: 'They met at last',
        tr: 'Onlar nəhayət görüşdülər',
        trt: '',
        ch: 'Onlar nəhayət nailiyyət tətil məzuniyyət görüşdülər'
      }
    ],
    [{
        id: 456,
        sntc: 'They stole all his money',
        tr: 'Onlar onun bütün pullarını oğurladılar',
        trt: '',
        ch: 'Onlar onun bütün pullarını daxildə içəridə diqqətli oğurladılar'
      },
      {
        id: 457,
        sntc: 'I overcame all these difficulties',
        tr: 'Mən bütün bu çətinliklərin öhdəsindən gəldim',
        trt: 'Mən öhdəsindən gəldim bütün bu çətinliklərin',
        ch: 'Mən bütün bu çətinliklərin öhdəsindən şübhəli dünən fikirli gəldim'
      },
      {
        id: 458,
        sntc: 'He ate a sandwich',
        tr: 'O, sendviç yedi',
        trt: '',
        ch: 'O, sendviç utancaq müsibət tamamilə yedi'
      },
      {
        id: 459,
        sntc: 'I swam in the lake',
        tr: 'Mən göldə üzdüm',
        trt: 'Mən üzdüm göldə',
        ch: 'Mən göldə hiss cəsarətlə günəş üzdüm'
      },
      {
        id: 460,
        sntc: "It's dark",
        tr: 'Qaranlıqdır',
        trt: '',
        ch: 'Qaranlıqdır İşıqlıdır idman zalı müntəzəm tapşırıq'
      }
    ],
    [{
        id: 461,
        sntc: 'I spent more than seven hundred dollars on it',
        tr: 'Mən buna yeddi yüz dollardan çox pul xərclədim',
        trt: 'Mən yeddi yüz dollardan çox pul buna xərclədim',
        ch: 'Mən buna yeddi yüz dollardan çox pul düzəltmək cəlb etmək xərclədim'
      },
      {
        id: 462,
        sntc: 'I redid this exercise at last',
        tr: 'Mən bu tapşırığı nəhayət yenidən etdim',
        trt: 'Mən nəhayət bu tapşırığı yenidən etdim',
        ch: 'Mən bu tapşırığı nəhayət yenidən tənha yağışlı balaca etdim'
      },
      {
        id: 463,
        sntc: 'He lit the light',
        tr: 'O, işıqı yandırdı',
        trt: 'O, yandırdı işıqı',
        ch: 'O, işıqı düzgün qaneedici yanlış yandırdı'
      },
      {
        id: 464,
        sntc: 'The dog bit her',
        tr: 'İt onu dişlədi',
        trt: 'İt dişlədi onu',
        ch: 'İt onu məyus hava limanı dişlədi'
      },
      {
        id: 465,
        sntc: 'He withdrew all the money',
        tr: 'O, bütün pulları çıxardı',
        trt: 'O, çıxardı bütün pulları',
        ch: 'O, bütün pulları qayğıkeş alternativ konfrans çıxardı'
      }
    ],
    [{
        id: 466,
        sntc: 'She kept all her money in this bank',
        tr: 'O, bütün pullarını bu bankda saxlayırdı',
        trt: 'O, bu bankda bütün pullarını saxlayırdı',
        ch: 'O, bütün pullarını küləkli ciddi tətil bu bankda saxlayırdı'
      },
      {
        id: 467,
        sntc: 'He sent me a parcel',
        tr: 'O, mənə bağlama göndərdi',
        trt: 'O, bağlama göndərdi mənə',
        ch: 'O, mənə bağlama aşağı məmnun əminlik göndərdi'
      },
      {
        id: 468,
        sntc: 'They sold their house for half a million',
        tr: 'Onlar evlərini yarım milyona satdılar',
        trt: 'Onlar evlərini satdılar yarım milyona',
        ch: 'Onlar evlərini yarım milyona həsr etmək ləğv satdılar'
      },
      {
        id: 469,
        sntc: 'They broke the window',
        tr: 'Onlar pəncərəni sındırdılar',
        trt: 'Onlar sındırdılar pəncərəni',
        ch: 'Onlar pəncərəni stul bölmək görünmək sındırdılar'
      },
      {
        id: 470,
        sntc: 'I held it in my arms',
        tr: 'Mən bunu əllərimdə tutdum',
        trt: 'Mən əllərimdə bunu tutdum',
        ch: 'Mən bunu əllərimdə tapmaq üzləşmək səslənmək tutdum'
      }
    ],
    [{
        id: 471,
        sntc: 'I flew back to Los Angeles',
        tr: 'Mən Los-Ancelesə qayıtdım',
        trt: 'Mən qayıtdım Los-Ancelesə',
        ch: 'Mən Los-Ancelesə qaldım cəmləşmək təsdiqləmək qayıtdım'
      },
      {
        id: 472,
        sntc: 'She drew a real masterpiece',
        tr: 'O, əsl şah əsər çəkdi',
        trt: '',
        ch: 'O, əsl şah əsər getmək etibar etmək çəkdi'
      },
      {
        id: 473,
        sntc: 'We see it in the last sentence',
        tr: 'Biz bunu son cümlədə görürük',
        trt: '',
        ch: 'Biz bunu son cümlədə dəvət etmək tapşırıq görürük'
      },
      {
        id: 474,
        sntc: 'I forgot to tell them this thing',
        tr: 'Mən bu şeyi onlara demeyə unutdum',
        trt: '',
        ch: 'Mən bu şeyi onlara demeyə unutdum dünən təklif meyli'
      },
      {
        id: 475,
        sntc: 'He fed his dog',
        tr: 'O, itini yedizdirdi',
        trt: 'O, yedizdirdi itini',
        ch: 'O, itini borclu olmaq müsabiqə yedizdirdi'
      }
    ],
    [{
        id: 476,
        sntc: 'I dreamt about different things',
        tr: 'Mən müxtəlif şeylər haqqında xəyallar qurdum',
        trt: '',
        ch: 'Mən müxtəlif şeylər haqqında xəyallar qurdum'
      },
      {
        id: 477,
        sntc: 'I woke up very early',
        tr: 'Mən yuxudan çox tez oyandım',
        trt: '',
        ch: 'Mən yuxudan çox tez bacarmaq tövsiyə riayət oyandım'
      },
      {
        id: 478,
        sntc: 'He lent her several thousand dollars',
        tr: 'O, ona bir neçə min dollar borc verdi',
        trt: '',
        ch: 'O, ona bir neçə min dollar borc verdi investisiya'
      },
      {
        id: 479,
        sntc: 'Where does he work?',
        tr: 'O, harada işləyir?',
        trt: '',
        ch: 'O, harada işləyir çatdırmaq mənsub olmaq ittiham'
      },
      {
        id: 480,
        sntc: 'The boys swam in the swimming pool',
        tr: 'Oğlanlar hovuzda üzdülər',
        trt: 'Oğlanlar üzdülər hovuzda',
        ch: 'Oğlanlar hovuzda soruşmaq cüt sual üzdülər'
      }
    ],
    [{
        id: 481,
        sntc: 'It smelt terrible',
        tr: 'Bu, dəhşətli qoxu verdi',
        trt: '',
        ch: 'Bu, dəhşətli qoxu həll etmək qəza yumaq verdi'
      },
      {
        id: 482,
        sntc: 'I hung my coat on a hook',
        tr: 'Mən paltomu qarmaqcıqdan asdım',
        trt: '',
        ch: 'Mən paltomu qarmaqcıqdan doldurmaq görünmək birdən-birə asdım'
      },
      {
        id: 483,
        sntc: 'This food smelt bad',
        tr: 'Bu yemək pis iy verdi',
        trt: '',
        ch: 'Bu yemək pis iy verdi qalmaq çatmaq tələb etmək'
      },
      {
        id: 484,
        sntc: 'Where is the boy?',
        tr: 'Oğlan haradadır?',
        trt: '',
        ch: 'Oğlan haradadır təkrar etmək cümlə yenidən'
      },
      {
        id: 485,
        sntc: 'He sang really well',
        tr: 'O, həqiqətən yaxşı oxudu',
        trt: '',
        ch: 'O, həqiqətən hər kəs tələffüz yaxşı oxudu'
      }
    ],
    [{
        id: 486,
        sntc: 'I forgot to say it',
        tr: 'Mən bunu deməyə unutdum',
        trt: 'Mən unutdum bunu deməyə',
        ch: 'Mən bunu deməyə gərgin fəxr etmək unutdum'
      },
      {
        id: 487,
        sntc: 'We overcame those difficulties',
        tr: 'Biz o çətinliklərin öhdəsindən gəldik',
        trt: '',
        ch: 'Biz o çətinliklərin öhdəsindən bölmək görünmək daxil gəldik'
      },
      {
        id: 488,
        sntc: 'He hurt her feelings',
        tr: 'O, onun hisslərini incitdi',
        trt: '',
        ch: 'O, onun hisslərini tamamilə diqqəti yönəltmək incitdi'
      },
      {
        id: 489,
        sntc: 'He dug a big hole',
        tr: 'O, böyük quyu qazdı',
        trt: '',
        ch: 'O, böyük quyu qazdı silmək fayl bölmək'
      },
      {
        id: 490,
        sntc: 'I really like this place',
        tr: 'Mən bu yeri həqiqətən çox bəyənirəm',
        trt: 'Mən həqiqətən bu yeri çox bəyənirəm',
        ch: 'Mən bu yeri həqiqətən çox bəyənirəm diqqət dərhal ətraflı'
      }
    ],
    [{
        id: 491,
        sntc: "What's your husband's name?",
        tr: 'Sənin ərinin adı nədir?',
        trt: '',
        ch: 'Sənin ərinin adı nədir bacarıq ağlamaq birdən-birə'
      },
      {
        id: 492,
        sntc: 'We slept more than enough',
        tr: 'Biz kifayət qədər yatdıq',
        trt: '',
        ch: 'Biz kifayət qədər yatdıq xeyli layiq olmaq'
      },
      {
        id: 493,
        sntc: 'She fed the cat',
        tr: 'O, pişiyi yedizdirdi',
        trt: '',
        ch: 'O, pişiyi yedizdirdi iştirak etmək cəmləşmək'
      },
      {
        id: 494,
        sntc: 'They burnt the house',
        tr: 'Onlar evi yandırdılar',
        trt: '',
        ch: 'Onlar evi məsrəf qismən səbəb yandırdılar'
      },
      {
        id: 495,
        sntc: 'I drove to the park',
        tr: 'Mən parka maşınla getdim',
        trt: '',
        ch: 'Mən parka maşınla borclu olmaq təklif getdim'
      }
    ],
    [{
        id: 496,
        sntc: 'My brother is sixteen',
        tr: 'Mənim qardaşımın on altı yaşı var',
        trt: '',
        ch: 'Mənim qardaşımın on altı yaşı əbədi saat bişirmək var'
      },
      {
        id: 497,
        sntc: 'I said it again',
        tr: 'Mən bunu yenə dedim',
        trt: '',
        ch: 'Mən bunu yenə tənzimləmək hansısa yolla dedim'
      },
      {
        id: 498,
        sntc: 'He had a very interesting idea',
        tr: 'Onun, çox maraqlı fikri var idi',
        trt: '',
        ch: 'Onun, çox maraqlı minnətdar yaratmaq müsbət fikri var idi'
      },
      {
        id: 499,
        sntc: 'My friend did him a favor',
        tr: 'Mənim dostum ona lütf etdi',
        trt: '',
        ch: 'Mənim dostum hündür cavab tövsiyə ona lütf etdi'
      },
      {
        id: 500,
        sntc: 'I could do it for hours',
        tr: 'Mən bunu saatlarla edə bilərdim',
        trt: '',
        ch: 'Mən bunu saatlarla edə bilərdim əmək haqqı lüğət'
      }
    ],
    [{
        id: 501,
        sntc: 'He gave her four hundred dollars',
        tr: 'O, ona dörd yüz dollar verdi',
        trt: '',
        ch: 'O, ona dörd yüz dollar verdi daxil olmaq nüfuzlu'
      },
      {
        id: 502,
        sntc: 'He became a very famous actor',
        tr: 'O, çox məşhur aktyor oldu',
        trt: '',
        ch: 'O, çox məşhur aktyor oldu təkid unutmaq göndərmək qonaq'
      },
      {
        id: 503,
        sntc: 'We need to solve this problem',
        tr: 'Bizə bu problemi həll etmək lazımdır',
        trt: '',
        ch: 'Bizə bu problemi həll etmək lazımdır nümunə cəhd etmək'
      },
      {
        id: 504,
        sntc: 'We left America',
        tr: 'Biz Amerikanı tərk etdik',
        trt: '',
        ch: 'Biz Amerikanı tərk etdik ifadə etdik hər yerdə'
      },
      {
        id: 505,
        sntc: 'I wrote down everything',
        tr: 'Mən hər şeyi yazdım',
        trt: '',
        ch: 'Mən hər şeyi yazdım riayət etdim müntəzəm məşq'
      }
    ],
    [{
        id: 506,
        sntc: 'I sat down',
        tr: 'Mən oturdum',
        trt: '',
        ch: 'Mən oturdum zarafat seçim tələbə qalxdım'
      },
      {
        id: 507,
        sntc: 'He set up a very successful company',
        tr: 'O, çox uğurlu şirkət qurdu',
        trt: '',
        ch: 'O, çox uğurlu şirkət qurdu söyləmək dərk etmək'
      },
      {
        id: 508,
        sntc: "What's your friend's name?",
        tr: 'Sənin dostunun adı nədir?',
        trt: '',
        ch: 'Sənin dostunun adı nədir hansısa yolla rədd etmək'
      },
      {
        id: 509,
        sntc: 'I paid for him',
        tr: 'Mən onun yerinə pul ödədim',
        trt: '',
        ch: 'Mən onun yerinə pul ödədim nəzakətli zəhmətkeş sınaq'
      },
      {
        id: 510,
        sntc: 'They understood each other',
        tr: 'Onlar bir-birini başa düşdülər',
        trt: '',
        ch: 'Onlar bir-birini başa düşdülər mükəmməl danışmaq bacarmaq'
      }
    ],
    [{
        id: 511,
        sntc: 'He came to the meeting',
        tr: 'O, görüşə gəldi',
        trt: '',
        ch: 'O, görüşə gəldi şalvar turist müvəffəqiyyət'
      },
      {
        id: 512,
        sntc: 'They spoke Italian',
        tr: 'Onlar italyanca danışırdılar',
        trt: '',
        ch: 'Onlar italyanca danışırdılar şanslı sadəlik ümid etmek'
      },
      {
        id: 513,
        sntc: 'He taught English',
        tr: 'O, İngilis dilini öyrətirdi',
        trt: '',
        ch: 'O, İngilis dilini öyrətirdi reklam rəy fikir'
      },
      {
        id: 514,
        sntc: 'He broke this rule',
        tr: 'O, bu qaydanı pozdu',
        trt: '',
        ch: 'O, bu qaydanı pozdu məmnuniyyətlə uçmaq hadisə peşman'
      },
      {
        id: 515,
        sntc: 'She grew up in England',
        tr: 'O, İngiltərədə böyüyüb',
        trt: '',
        ch: 'O, İngiltərədə böyüyüb qiymət qoşulmaq ədəbiyyat'
      }
    ],
    [{
        id: 516,
        sntc: 'I found my keys',
        tr: 'Mən açarlarımı tapdım',
        trt: '',
        ch: 'Mən açarlarımı tapdım məşq mövcud yenə səhər'
      },
      {
        id: 517,
        sntc: 'He taught me a lesson',
        tr: 'O, mənə dərs verdi',
        trt: '',
        ch: 'O, mənə dərs verdi üçüncü hündür cavab'
      },
      {
        id: 518,
        sntc: 'They fought for their rights',
        tr: 'Onlar öz hüquqları uğrunda mübarizə aparırdılar',
        trt: '',
        ch: 'Onlar öz hüquqları uğrunda mübarizə aparırdılar vermək sonra darıxmaq'
      },
      {
        id: 519,
        sntc: 'I lay in bed',
        tr: 'Mən yataqda uzandım',
        trt: '',
        ch: 'Mən yataqda uzandım gün yağışlı təşəbbüs bişirdim'
      },
      {
        id: 520,
        sntc: 'He felt very disappointed',
        tr: 'O, özünü çox məyus hiss etmişdi',
        trt: '',
        ch: 'O, özünü çox məyus hiss etmişdi məzəli gülməli sadə'
      }
    ],
    [{
        id: 521,
        sntc: 'The soldiers fought very bravely and courageously',
        tr: 'Əsgərlər çox cürətlə və cəsarətlə döyüşdülər',
        trt: 'Əsgərlər çox cəsarətlə və cürətlə döyüşdülər',
        ch: 'Əsgərlər çox cürətlə və cəsarətlə döyüşdülər pessimist qorxutmaq üçüncü'
      },
      {
        id: 522,
        sntc: 'I threw this thing away',
        tr: 'Mən bu əşyanı tulladım',
        trt: 'Mən tulladım bu əşyanı',
        ch: 'Mən bu əşyanı tulladım iki balaca dərk'
      },
      {
        id: 523,
        sntc: 'He paid for us',
        tr: 'O, bizim yerimizə pul ödədi',
        trt: '',
        ch: 'O, bizim yerimizə pul ödədi tələbə bahar zəngin'
      },
      {
        id: 524,
        sntc: 'Who controls it?',
        tr: 'Bunu kim idarə edir?',
        trt: '',
        ch: 'Bunu kim idarə edir səyahət etmək pessimist'
      },
      {
        id: 525,
        sntc: 'I grew up in the capital of our country',
        tr: 'Mən ölkəmizin paytaxtında böyümüşəm',
        trt: '',
        ch: 'Mən ölkəmizin paytaxtında böyümüşəm həsr etmək səhv'
      }
    ],
    [{
        id: 526,
        sntc: 'I didn’t devote much time to English',
        tr: 'Mən İngilis dilinə çox vaxt ayırmadım',
        trt: '',
        ch: 'Mən İngilis dilinə çox vaxt ayırmadım imtahan vermək hazırlıq'
      },
      {
        id: 527,
        sntc: 'You didn’t tell me the second thing',
        tr: 'Sən mənə ikinci şeyi demədin',
        trt: 'Sən ikinci şeyi mənə demədin',
        ch: 'Sən mənə ikinci şeyi demədin etmək axırıncı əbədi'
      },
      {
        id: 528,
        sntc: 'They didn’t get divorced',
        tr: 'Onlar boşanmadılar',
        trt: '',
        ch: 'Onlar boşanmadılar yaratmaq müsbət zirvə'
      },
      {
        id: 529,
        sntc: 'You didn’t show it to me',
        tr: 'Sən bunu mənə göstərmədin',
        trt: '',
        ch: 'Sən bunu mənə göstərmədin yemək dadlı kifayət'
      },
      {
        id: 530,
        sntc: 'We didn’t see him yesterday',
        tr: 'Biz dünən onu görmədik',
        trt: 'Biz onu dünən görmədik',
        ch: 'Biz dünən onu görmədik fikir müğənni əla'
      }
    ],
    [{
        id: 531,
        sntc: 'She didn’t have such a feeling',
        tr: 'Onun belə bir hissi yox idi',
        trt: 'Onun belə hissi yox idi',
        ch: 'Onun belə bir hissi yox idi zəngin qiymət'
      },
      {
        id: 532,
        sntc: 'Did it really worry you?',
        tr: 'Bu sizi doğrudan da narahat edirdi?',
        trt: 'Bu sizi doğrudan narahat edirdi?',
        ch: 'Bu sizi doğrudan da narahat edirdi təhlil etmək'
      },
      {
        id: 533,
        sntc: 'Did she advise you to do it?',
        tr: 'O, sənə bunu etməyi məsləhət gördü?',
        trt: 'O, bunu etməyi sənə məsləhət gördü?',
        ch: 'O, bunu etməyi sənə məsləhət gördü rədd etmək'
      },
      {
        id: 534,
        sntc: 'Did I say it rightly?',
        tr: 'Mən bunu düz dedim?',
        trt: '',
        ch: 'Mən bunu düz dedim məqalə müddətində məlumat'
      },
      {
        id: 535,
        sntc: 'We didn’t try to do it',
        tr: 'Biz bunu etməyə çalışmadıq',
        trt: '',
        ch: 'Biz bunu etməyə razılaşmamaq hansı ruhlandırmaq çalışmadıq'
      }
    ],
    [{
        id: 536,
        sntc: 'What videos did you watch?',
        tr: 'Sən hansı videolara baxdın?',
        trt: '',
        ch: 'Sən hansı videolara baxdın həddən artıq ev zəngin'
      },
      {
        id: 537,
        sntc: 'How often did you go to the gym?',
        tr: 'Sən idman zalına nə sıxlıqda gedirdin?',
        trt: '',
        ch: 'Sən idman zalına nə sıxlıqda otuz yağmurlu sual gedirdin'
      },
      {
        id: 538,
        sntc: 'I sat on a chair',
        tr: 'Mən stulda oturdum',
        trt: '',
        ch: 'Mən stulda oturdum xoşbəxt növbəti ad'
      },
      {
        id: 539,
        sntc: 'Did she decide not to do it?',
        tr: 'O, bunu etməmək qərarına gəldi?',
        trt: '',
        ch: 'O, bunu etməmək qərarına gəldi hava limanı yaxın'
      },
      {
        id: 540,
        sntc: 'How much did it cost?',
        tr: 'Bu neçəyə başa gəldi?',
        trt: '',
        ch: 'Bu neçəyə başa gəldi müdrik əməkdaş vəziyyət'
      }
    ],
    [{
        id: 541,
        sntc: 'We were glad to see her',
        tr: 'Biz onu görməyə şad idik',
        trt: '',
        ch: 'Biz onu görməyə şad idik istedadlı vəziyyət sadə'
      },
      {
        id: 542,
        sntc: 'He was lucky',
        tr: 'Onun bəxti getirdi',
        trt: '',
        ch: 'Onun bəxti küləkli məşğul kişilər getirdi'
      },
      {
        id: 543,
        sntc: 'They were together',
        tr: 'Onlar bir yerdə idilər',
        trt: '',
        ch: 'Onlar bir yerdə ad günü tərəqqi zövq idilər'
      },
      {
        id: 544,
        sntc: 'You were very optimistic',
        tr: 'Sən çox optimist idin',
        trt: '',
        ch: 'Sən çox optimist idin sadəlik ümid qəmli'
      },
      {
        id: 545,
        sntc: 'We were really surprised',
        tr: 'Biz həqiqətən təəccübləndik',
        trt: '',
        ch: 'Biz həqiqətən təəccübləndik tənbəl təhlükəli küləkli'
      }
    ],
    [{
        id: 546,
        sntc: 'The houses were big enough',
        tr: 'Evlər kifayət qədər böyük idi',
        trt: '',
        ch: 'Evlər kifayət layihə aydın mənfəətli qədər böyük idi'
      },
      {
        id: 547,
        sntc: 'His answer was wrong',
        tr: 'Onun cavabı səhv idi',
        trt: '',
        ch: 'Onun cavabı səhv idi idarəçi çox gözəl'
      },
      {
        id: 548,
        sntc: 'This result was amazing',
        tr: 'Bu nəticə heyrətamiz oldu',
        trt: '',
        ch: 'Bu nəticə məktəb böyük sadə heyrətamiz oldu'
      },
      {
        id: 549,
        sntc: 'That money was enough',
        tr: 'Həmin pul kifayət idi',
        trt: '',
        ch: 'Həmin pul kifayət idi vermək ödəmək axtarmaq'
      },
      {
        id: 550,
        sntc: 'The lesson was very useful',
        tr: 'Dərs çox faydalı idi',
        trt: '',
        ch: 'Dərs çox faydalı idi anlamaq bu danışmaq'
      }
    ],
    [{
        id: 551,
        sntc: 'They weren’t in this situation',
        tr: 'Onlar bu vəziyyətdə olmayıblar',
        trt: '',
        ch: 'Onlar bu vəziyyətdə olmayıblar düşünmek yadda saxlamaq'
      },
      {
        id: 552,
        sntc: 'We weren’t against it',
        tr: 'Biz bunun əleyhinə deyildik',
        trt: '',
        ch: 'Biz bunun əleyhinə vermək ödəmək axtarmaq deyildik'
      },
      {
        id: 553,
        sntc: 'They weren’t available',
        tr: 'Onlar bəkar deyildilər',
        trt: '',
        ch: 'Onlar bəkar deyildilər mütəmadı qulaq asmaq'
      },
      {
        id: 554,
        sntc: 'You weren’t right',
        tr: 'Sən haqlı deyildin',
        trt: '',
        ch: 'Sən haqlı üstünlük vermək hansı deyildin'
      },
      {
        id: 555,
        sntc: 'The price was high',
        tr: 'Qiymət yüksək idi',
        trt: '',
        ch: 'Qiymət yüksək əməkdaş müdir tənqid idi'
      }
    ],
    [{
        id: 556,
        sntc: 'Those events weren’t so important',
        tr: 'Həmin hadisələr elə də əhəmiyyətli deyildi',
        trt: '',
        ch: 'Həmin hadisələr elə də əhəmiyyətli rədd etmək deyildi'
      },
      {
        id: 557,
        sntc: 'The boy wasn’t strong',
        tr: 'Oğlan güclü deyildi',
        trt: '',
        ch: 'Oğlan güclü faydasız söz onun deyildi'
      },
      {
        id: 558,
        sntc: 'His attempt was unsuccessful',
        tr: 'Onun cəhdi uğursuz oldu',
        trt: '',
        ch: 'Onun cəhdi uğursuz təşəkkür istəmək təkmilləşdirmək oldu'
      },
      {
        id: 559,
        sntc: 'The boys weren’t strong',
        tr: 'Oğlanlar güclü deyildilər',
        trt: '',
        ch: 'Oğlanlar güclü hiss etmək xoşbəxt deyildilər'
      },
      {
        id: 560,
        sntc: 'The woman wasn’t lonely',
        tr: 'Qadın tənha deyildi',
        trt: '',
        ch: 'Qadın tənha maraqlı çox sərt deyildi'
      }
    ],
    [{
        id: 561,
        sntc: 'Were they hospitable?',
        tr: 'Onlar qonaqpərvər idilər?',
        trt: '',
        ch: 'Onlar qonaqpərvər idilər'
      },
      {
        id: 562,
        sntc: 'Were we in that place?',
        tr: 'Biz həmin yerdə idik?',
        trt: '',
        ch: 'Biz həmin yerdə idik'
      },
      {
        id: 563,
        sntc: 'I was surprised',
        tr: 'Mən təəccübləndim',
        trt: '',
        ch: 'Mən səhvi düzəltdim düzgün təəccübləndim'
      },
      {
        id: 564,
        sntc: 'Was I on the right way?',
        tr: 'Mən düzgün yolda idim?',
        trt: '',
        ch: 'Mən düzgün maraq baş vermək yolda idim'
      },
      {
        id: 565,
        sntc: 'Were you poor?',
        tr: 'Sən kasıb idin?',
        trt: '',
        ch: 'Sən kasıb idin xoşbəxt kifayət qədər'
      }
    ],
    [{
        id: 566,
        sntc: 'Why was he loyal to them?',
        tr: 'O, niyə onlara sadiq idi?',
        trt: 'O, onlara niyə sadiq idi?',
        ch: 'O, niyə onlara razılaşmaq ilə müzakirə sadiq idi'
      },
      {
        id: 567,
        sntc: 'What was the most expensive there?',
        tr: 'Orada ən baxalı nə idi?',
        trt: '',
        ch: 'Orada ən bu dəqiqə valideyn baxalı nə idi'
      },
      {
        id: 568,
        sntc: 'When were they at home?',
        tr: 'Onlar nə vaxt evdə idilər?',
        trt: '',
        ch: 'Onlar nə vaxt eyni faydalı pul evdə idilər'
      },
      {
        id: 569,
        sntc: 'What was in the box?',
        tr: 'Qutuda nə var idi?',
        trt: '',
        ch: 'Qutuda bax yer kömək nə var idi'
      },
      {
        id: 570,
        sntc: 'How was the lesson?',
        tr: 'Dərs necə keçdi?',
        trt: '',
        ch: 'Dərs necə ziyarət məsləhət qərar keçdi'
      }
    ],
    [{
        id: 571,
        sntc: 'How was the conference?',
        tr: 'Konfrans necə keçdi?',
        trt: '',
        ch: 'Konfrans necə bəzən çətin demək keçdi'
      },
      {
        id: 572,
        sntc: 'When were the students ready?',
        tr: 'Tələbələr nə vaxt hazır idilər?',
        trt: '',
        ch: 'Tələbələr nə vaxt hazır ödəmək axtarmaq idilər'
      },
      {
        id: 573,
        sntc: 'What new ideas were really interesting?',
        tr: 'Hansı yeni fikirlər həqiqətən maraqlı idi?',
        trt: '',
        ch: 'Hansı yeni fikirlər kino niyə həqiqətən maraqlı idi'
      },
      {
        id: 574,
        sntc: 'Why was your business partner against this decision?',
        tr: 'Niyə sənin iş yoldaşın bu qərarın əleyhinə idi?',
        trt: '',
        ch: 'Niyə sənin iş yoldaşın üstünlük bu qərarın əleyhinə idi'
      },
      {
        id: 575,
        sntc: 'How long was the meeting?',
        tr: 'Görüş nə qədər davam etdi?',
        trt: '',
        ch: 'Görüş nə qədər oyun məsləhət davam etdi'
      }
    ],
  ],
}
// console.log(JSON.stringify(initialState))

// console.log(JSON.stringify(initialState))
// let ab=0;
// let obj=[]
// for (let i=0; i<115; i++){
//     for(let a=0; a<5; a++){
//         // obj.id=initialState.sentences[0][i][a].id
//         // if(initialState.sentences[i][a].tr.indexOf('?')>0)ab+=1
//         // console.log(ab)
//         obj.push(initialState.sentences[i][a].sntc)
//       }
//       }
// setTimeout(() => {console.log(obj)}, 1000)



// let obj = {
//   id: '',
//   sntc: '',
//   tr: '',
//   ch: ''
// };
// let number = 550;
// for (let i = 0; i < 115; i++) {
//   for (let a = 0; a < 5; a++) {
//     number++
//     obj.id=initialState.sentences[i][a].id
//     obj.id = number
//     obj.sntc = (initialState.sentences[i][a].sntc)
//     obj.tr = (initialState.sentences[i][a].tr)
//     obj.ch = (initialState.sentences[i][a].ch)
//     console.log(obj)
//     if(initialState.sentences[i][a].trt){
//     initialState.sentences[i][a].trt.split(' ').forEach(w => {
//       if(!initialState.sentences[i][a].ch.includes(w)){
//         console.log(w, initialState.sentences[i][a].id)}
//       })}
//   }}

// setTimeout(() => {
//   console.log(obj)
// }, 1000)

const SET_ENAZ = 'SET_ENAZ'
export const setEnAz = (value) => ({
    type: SET_ENAZ,
    value,
})

const enAzSentences = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENAZ:
      // const sentence = state.sentences[action.lesson].map((e,i)=>{if (e.id==1){console.log(e)}})
      // console.log(state[0][0])
        return {
            ...state, 
            sentences: action.value
            // state.sentences[0].map(e=> return ...e, action.value)
            // sentences: action.value
        }
            default:
                return state
} }

export default enAzSentences