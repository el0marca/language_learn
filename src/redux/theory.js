const initialState = {
  lessons: [
    [{
        id: '1',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır. Ümümi anlayış əldə etmək üçün zamanlar cədvəlinə baxmaq məsləhətdir',
        expl: 'I/You/We/They feil ...',
        sntc: 'Mən burada təhsil alıram',
        tr: 'I study here'
      },
      {
        id: '2',
        descr: '‘Very’ köməyi ilə yaranan ifadələr adətən cümlənin sonunda yerləşirlər',
        expl: 'I/You/We/They feil ... very zərf',
        sntc: 'Mən səni çox yaxşı başa düşürəm',
        tr: 'I understand you very well'
      },
      {
        id: '3',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır. Yazılışı eyni olsada work sözü cümlədə həm isim həm də feil kimi istifadə oluna bilər və belə sözlər İngilis dilində kifayət qədər çoxdur',
        expl: 'I/You/We/They feil ...',
        sntc: 'Mən orada işləyirəm',
        tr: 'I work there'
      },
      {
        id: '4',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'I/You/We/They feil ...',
        sntc: 'Sən bunu bilirsən',
        tr: 'You know i\u202Et'
      },
      {
        id: '5',
        descr: 'Ümumi qayda: go to + isim. ‘Go home’ ifadədə home sözü zərf olduğuna görə sözönü (to) işlənmir',
        expl: 'I/You/We/They go to ...',
        sntc: 'Biz işə gedirik',
        tr: 'We go to wor\u202Ek'
      },
      {
        id: '6',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'He/She/It feil+s ...',
        sntc: 'O, İngilis dilində danışır',
        tr: 'He speaks English'
      },
      {
        id: '7',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'He/She/It feil+s ...',
        sntc: 'O, burada yaşayır',
        tr: 'She lives here'
      },
      {
        id: '8',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'He/She/It feil+s ...',
        sntc: 'Bu mənə kömək edir',
        tr: 'It helps me'
      },
      {
        id: '9',
        descr: 'İsimlərin cəm halını bildirmək üçün -s əlavə olunur. Really adətən mübtədadan sonra yerləşir',
        expl: 'He/She/It really feil+s isim+s',
        sntc: 'O, həqiqətən kitabları xoşlayır',
        tr: 'He really likes books'
      },
      {
        id: '10',
        descr: 'Also adətən mübtədadan sonra yerləşir. So sözün müxtəlif mənası var, əgər bu sözlə ‘belə’ demək istəyiriksə, o, cümlənin sonunda yerləşir',
        expl: 'He/She/It also feil+s so',
        sntc: 'O da belə düşünür',
        tr: 'She also thinks so'
      },
    ],
    [{
        id: '11',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan və tək halında olan isimlərin qarşısında istifadə olunur. Əgər isim sait səslə başlayırsa an artikl istifadə olunur',
        expl: 'I/You/We/They have ...',
        sntc: 'Məndə alma var',
        tr: 'I have an apple'
      },
      {
        id: '12',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan və tək halında olan isimlərin qarşısında qoyulur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'I/You/We/They have ...',
        sntc: 'Mənim bacım var',
        tr: 'I have a sister'
      },
      {
        id: '13',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'I/You/We/They have ...',
        sntc: 'Onların pulu var',
        tr: 'They have money'
      },
      {
        id: '14',
        descr: 'İsmin önündə sifət varsa qeyri-müəyyən artikl a(an) ondan daha əvvəl yerləşir',
        expl: 'I/You/We/They have artikl sifət ...',
        sntc: 'Mənim maraqlı bir fikrim var',
        tr: 'I have an interesting idea'
      },
      {
        id: '15',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'He/She/It also has ...',
        sntc: 'Onun da pulu var',
        tr: 'He also has money'
      },
      {
        id: '16',
        descr: 'Qeyri-müəyyən artikl a(an) cəm halında olan isimlərlə istifadə olunmur',
        expl: 'I/You/We/They have ...',
        sntc: 'Mənim kitablarım var',
        tr: 'I have books'
      },
      {
        id: '17',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'He/She/It has artikl ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
      {
        id: '18',
        descr: 'Əgər isim sifətlə birgə işlənirsə qeyri-müyəyyən artikl a(an) sifətdən əvvəl yerləşir',
        expl: 'He/She/It feil+s ... sifət isim',
        sntc: 'O, yeni evdə yaşayır',
        tr: 'He lives in new house'
      },
      {
        id: '19',
        descr: 'Qeyri-müəyyən artikl a(an) işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'He/She/It feil+s in işarə\u00A0əvəzliyi ...',
        sntc: 'O, bu yerdə işləyir',
        tr: 'She works in this place'
      },
      {
        id: '20',
        descr: 'Qeyri-müəyyən artikl a(an) işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'I/You/We/They feil in işarə\u00A0əvəzliyi ...',
        sntc: 'Onlar bu şəhərdə yaşayırlar',
        tr: 'They live in this city'
      },
    ],
    [{
        id: '21',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'He/She/It feil+es ...',
        sntc: 'O, məktəbə gedir',
        tr: 'He goes to school'
      },
      {
        id: '22',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'He/She/It feil+es ...',
        sntc: 'O, televizora baxır',
        tr: 'She watches TV'
      },
      {
        id: '23',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'He/She/It feil+es ...',
        sntc: 'O, sənin üçün darıxır',
        tr: 'He misses you'
      },
      {
        id: '24',
        descr: 'Ümumi qaydaya əsasən İngilis dilində iki feil sözönü (to) koməyi ilə birləşir',
        expl: 'I/You/We/They feil to feil ...',
        sntc: 'Mən bunu anlamağa çalışıram',
        tr: 'I try to understand i\u202Et'
      },
      {
        id: '25',
        descr: 'İngilis dilində bəzi sözlər cümlədə müəyyən yer tutur: often mübtədadan sonra və feildən əvvəl yerləşir',
        expl: 'He/She/It often feil+es ...',
        sntc: 'O, tez-tez kinoteatra gedir',
        tr: 'She often goes to the cinema'
      },
      {
        id: '26',
        descr: 'Very ilə işlənən ifadələr cümlənin sonunda yerləşirlər',
        expl: 'He/She/It feil+es ... very well',
        sntc: 'O, bunu çox yaxşı edir',
        tr: 'He does i\u202Et very well'
      },
      {
        id: '27',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'He/She/It feil+es ...',
        sntc: 'O, İngilis dilini tədris edir',
        tr: 'She teaches English'
      },
      {
        id: '28',
        descr: 'He/She/It əvəzliklər ilə have feilin has forması işlənir',
        expl: 'He/She/It has ...',
        sntc: 'Onun evi var',
        tr: 'He has a house'
      },
      {
        id: '29',
        descr: 'He/She/It əvəzliklər ilə have feilin has forması işlənir',
        expl: 'He/She/It has ...',
        sntc: 'Onun dollarları var',
        tr: 'She has dollars'
      },
      {
        id: '30',
        descr: 'He/She/It əvəzliklər ilə have feilin has forması işlənir',
        expl: 'He/She/It has ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
    ],
    [{
        id: '31',
        descr: 'Aşağıdaki tapşırıqda mübtəda (friend) = he/she və ona göre feilə -s əlavə edilir. Əvəzliklərin istifadə qaydaları: I - my (mənim). Ümümi anlayış əldə etmək üçün əvəzliklər cədvəlinə baxmaq tövsiyyə olunur',
        expl: 'My mübtəda feil ...',
        sntc: 'Mənim dostum hər şeyi bilir',
        tr: 'My frien\u202Ed knows everything'
      },
      {
        id: '32',
        descr: 'Aşağıdaki tapşırıqda mübtəda (sister) = she və ona göre feilə -s əlavə edilir. Həmçinin aşağıdaki tapşırıqda müəyyən artikl (the) ayrı obyekti eyni tipdə olan obyektlərdən fərqləndirir. All the information - bütün (müəyyən) məlumatlar',
        expl: 'My mübtəda ... all the information',
        sntc: 'Mənim bacım adətən bütün məlumatları yoxlayır',
        tr: 'My siste\u202Er usually checks all the information'
      },
      {
        id: '33',
        descr: 'Aşağıdaki tapşırıqda mübtəda (house) = it və ona göre feilə -s əlavə edilir. They - their (onların)',
        expl: 'Their mübtəda feil ...',
        sntc: 'Onların evi böyük görünür',
        tr: 'Their hous\u202Ee seems big'
      },
      {
        id: '34',
        descr: 'Aşağıdaki tapşırıqda mübtəda (teacher) = he/she və ona göre feilə -s əlavə edilir. We - our (bizim)',
        expl: 'Our mübtəda feil the same',
        sntc: 'Bizim müəllimimiz də eyni fikirdədir',
        tr: 'Our teache\u202Er thinks the same'
      },
      {
        id: '35',
        descr: 'Aşağıdaki tapşırıqda mübtəda (mother) = he/she və ona göre feilə -es əlavə edilir. We - our (bizim)',
        expl: 'Our mübtəda feil ...',
        sntc: 'Bizim anamız işə gedir',
        tr: 'Our mothe\u202Er goes to wor\u202Ek'
      },
      {
        id: '36',
        descr: 'Aşağıdaki tapşırıqda mübtəda (friends) = they və ona göre feil deyişiliyə məruz qalmır. I - my (mənim)',
        expl: 'My mübtəda always feil ...',
        sntc: 'Mənim dostlarım həmişə mənə dəstək olur',
        tr: 'My friend\u202Es always support me'
      },
      {
        id: '37',
        descr: 'Aşağıdaki tapşırıqda mübtəda (brother) = he/she və ona göre feilə -es əlavə edilir. He - his (onun, kişi cinsi)',
        expl: 'His mübtəda feil ...',
        sntc: 'Onun qardaşı məktəbə gedir',
        tr: 'His brothe\u202Er goes to school'
      },
      {
        id: '38',
        descr: 'Aşağıdaki tapşırıqda mübtəda (words) = they və ona göre feil deyişiliyə məruz qalmır. She - her (onun, qadın cinsi)',
        expl: 'Her mübtəda feil ...',
        sntc: 'Onun sözləri qəribə gəlir',
        tr: 'Her word\u202Es seem strange'
      },
      {
        id: '39',
        descr: 'Aşağıdaki tapşırıqda mübtəda (mother) = he/she və ona göre feilə -s əlavə edilir. She - her (onun, qadın cinsi)',
        expl: 'Her mübtəda feil ...',
        sntc: 'Onun anası orada işləyir',
        tr: 'Her mothe\u202Er works there'
      },
      {
        id: '40',
        descr: 'Aşağıdaki tapşırıqda mübtəda (profit) = it və ona göre feilə -s əlavə edilir. It əşya və heyvana istinad etmək üçün istifadə olunur. It - its (onun, orta cins)',
        expl: 'She feil a ... . Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ...',
        sntc: 'Onun şirkəti var. Onun (şirkətin) gəliri böyük görünür',
        tr: 'She has a company. Its profi\u202Et seems big'
      },
    ],
    [{
        id: '41',
        descr: 'Aşağıdaki tapşırıqda mübtəda (ideas) = they və ona göre feil deyişiliyə məruz qalmır. Əvəzliklərin istifadə qaydaları. You - your (sənin, sizin)',
        expl: '... your mübtəda feil ...',
        sntc: 'Bütün ideyalarınız maraqlı gəlir',
        tr: 'All your idea\u202Es seem interesting'
      },
      {
        id: '42',
        descr: 'Aşağıdaki tapşırıqda mübtəda (car) = it və ona göre feilə -s əlavə edilir. You - your (sənin)',
        expl: 'Your mübtəda feil ...',
        sntc: 'Sənin maşının kiçik görünür',
        tr: 'Your ca\u202Er looks small'
      },
      {
        id: '43',
        descr: 'Aşağıdaki tapşırıqda mübtəda (idea) = it və ona göre feilə -s əlavə edilir. You - your (sənin)',
        expl: 'Your mübtəda feil ...',
        sntc: 'Sənin ideyan yaxşı gəlir',
        tr: 'Your ide\u202Ea seems good'
      },
      {
        id: '44',
        descr: 'You - your (sənin)',
        expl: 'mübtəda feil your ...',
        sntc: 'Mən sənin evini bəyənirəm',
        tr: 'I like your house'
      },
      {
        id: '45',
        descr: 'You - your (sənin)',
        expl: 'mübtəda feil your ...',
        sntc: 'O, sənin maşınını bəyənir',
        tr: 'He likes your car'
      },
      {
        id: '46',
        descr: 'That (o) işarə əvəzliyi tək halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil that ...',
        sntc: 'Mən o adamı tanıyıram',
        tr: 'I know that person'
      },
      {
        id: '47',
        descr: 'Those (o) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil those ...',
        sntc: 'Mən o adamları başa düşürəm',
        tr: 'I understand those people'
      },
      {
        id: '48',
        descr: 'These (bu) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil these ...',
        sntc: 'O, bu şeyləri xoşlaryır',
        tr: 'She likes these things'
      },
      {
        id: '49',
        descr: 'This (bu) işarə əvəzliyi tək halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil this ...',
        sntc: 'O, bu maşını görür',
        tr: 'He sees this car'
      },
      {
        id: '50',
        descr: 'Those (o) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil those ...',
        sntc: 'Mən o evləri görürəm',
        tr: 'I see those houses'
      },
    ],
    [{
        id: '51',
        descr: 'Arzunu ifadə etmək üçün:',
        expl: 'mübtəda want artikl sifət ...',
        sntc: 'Mən yeni maşın istəyirəm',
        tr: 'I want a new car'
      },
      {
        id: '52',
        descr: 'Arzunu ifadə etmək üçün:',
        expl: 'mübtəda really want ...',
        sntc: 'Mən həqiqətən bunu istəyirəm',
        tr: 'I really want it'
      },
      {
        id: '53',
        descr: 'Arzunu ifadə etmək üçün:',
        expl: 'mübtəda want a sifət ...',
        sntc: 'Mən yeni ev istəyirəm',
        tr: 'I want a new house'
      },
      {
        id: '54',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda want to feil',
        sntc: 'Mən təhsil almaq istəyirəm',
        tr: 'I want to study'
      },
      {
        id: '55',
        descr: 'Ümumi qaydaya əsasən İngilis dilində iki feil sözönü (to) koməyi ilə birləşirlər',
        expl: 'mübtəda feil to feil',
        sntc: 'Mən yemək istəyirəm',
        tr: 'I want to eat'
      },
      {
        id: '56',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda want to feil ...',
        sntc: 'Mən bunu bilmək istəyirəm',
        tr: 'I wants to know i\u202Et'
      },
      {
        id: '57',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda really want to feil ...',
        sntc: 'Mən həqiqətən bunu etmək istəyirəm',
        tr: 'I really want to do i\u202Et'
      },
      {
        id: '58',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda want to feil ...',
        sntc: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English better'
      },
      {
        id: '59',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda want to feil a sifət ...',
        sntc: 'Mən yaxşı bir maşına sahib olmaq istəyirəm',
        tr: 'I want to have a good car'
      },
      {
        id: '60',
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'mübtəda want to feil a sifət ...',
        sntc: 'Mən yaxşı bir iş sahibi olmaq istəyirəm',
        tr: 'I want to have a good job'
      }
    ],
    [{
        id: 61,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya:',
        expl: 'I/You/We/They like ...',
        sntc: 'Mən bunu sevirəm',
        tr: 'I like i\u202Et'
      },
      {
        id: 62,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya:',
        expl: 'I/You/We/They like ...',
        sntc: 'Biz sənin dərslərini bəyənirik',
        tr: 'We like your lessons'
      },
      {
        id: 63,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya:',
        expl: 'He/She/It likes ...',
        sntc: 'O, həmin videonu bəyənir',
        tr: 'He likes that video'
      },
      {
        id: 64,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya:',
        expl: 'I/You/We/They really like ...',
        sntc: 'Mən bunu həqiqətən sevirəm',
        tr: 'I really like i\u202Et'
      },
      {
        id: 65,
        descr: 'Bir şeyi etməyi xoşuna gəldiyini ifadə etmək üçün konstruksiya:',
        expl: 'I/You/We/They really like to ...',
        sntc: 'Mən bunu etməyi həqiqətən xoşlayıram',
        tr: 'I really like to do i\u202Et'
      },
      {
        id: 66,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya:',
        expl: 'He/She/It also likes ...',
        sntc: 'O da bu dərsi bəyənir',
        tr: 'She also likes this lesson'
      },
      {
        id: 67,
        descr: "Ingilis dilində ‘of’ sözönü ismin yiyəlik halını yaratmaq üçün istifadə olunur (mənsubiyyət bildirir). Mən istərdim konstruksiyası:",
        expl: 'I/You/We/They would like a cup of ...',
        sntc: 'Mən bir fincan çay istərdim',
        tr: 'I would like a cup of tea'
      },
      {
        id: 68,
        descr: 'Mən etmək istərdim konstruksiyası:',
        expl: 'He/She/It would like to feil ...',
        sntc: 'O, bunu etmək istərdi',
        tr: 'He would like to do i\u202Et'
      },
      {
        id: 69,
        descr: 'Ingilis dilində ‘of’ sözönü ismin yiyəlik halını yaratmaq üçün istifadə olunur (mənsubiyyət bildirir). Mən etmək istərdim konstruksiyası:',
        expl: 'I/You/We/They would like to ... a cup of ...',
        sntc: 'Mən bir fincan qəhvə içmək istərdim',
        tr: 'I would like to drink a cup of coffee'
      },
      {
        id: 70,
        descr: 'Mən etmək istərdim konstruksiyası:',
        expl: 'I/You/We/They would like to ...',
        sntc: 'Mən o yeri ziyarət etmək istərdim',
        tr: 'I would like to visit that place'
      }
    ],
    [{
        id: 71,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'I/You/We/They don’t feil',
        sntc: 'Mən bilmirəm',
        tr: 'I don’t know'
      },
      {
        id: 72,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'I/You/We/They don’t feil',
        sntc: 'Biz başa düşmürük',
        tr: 'We don’t understand'
      },
      {
        id: 73,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'I/You/We/They don’t feil to feil ...',
        sntc: 'Mən İngilis dilini öyrənməyə çalışmıram',
        tr: 'I don’t try to learn English'
      },
      {
        id: 74,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'I/You/We/They don’t feil ...',
        sntc: 'Sən mənə kömək etmirsən',
        tr: 'You don’t help me'
      },
      {
        id: 75,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'I/You/We/They don’t feil ...',
        sntc: 'Mən səninlə razı deyiləm',
        tr: 'I don’t agree with you'
      },
      {
        id: 76,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'O, bunu bilmir',
        tr: "He doesn’t know i\u202Et"
      },
      {
        id: 77,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'O, bunu müzakirə etmək istəmir',
        tr: 'She doesn’t want to discuss i\u202Et'
      },
      {
        id: 78,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'Bu mənə kömək etmir',
        tr: 'It doesn’t help me'
      },
      {
        id: 79,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'Bu qəribə gəlmir',
        tr: 'It doesn’t seem strange'
      },
      {
        id: 80,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'He/She/It doesn’t feil',
        sntc: 'Bu işləmir',
        tr: 'It doesn’t work'
      }
    ],
    [{
        id: 81,
        descr: 'Don’t və yaxud doesn’t köməkçi feilin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda mübtəda (city) = it və ona göre doesn’t işlənir',
        expl: '... mübtəda doesn’t feil ...',
        sntc: 'Bu şəhər balaca görünmür',
        tr: 'This cit\u202Ey doesn’t seem small'
      },
      {
        id: 82,
        descr: 'Aşağıdaki tapşırıqda mübtəda (car) = it və ona göre doesn’t işlənir',
        expl: '... mübtəda doesn’t feil ...',
        sntc: 'Bu maşın böyük görünmür',
        tr: 'This ca\u202Er doesn’t seem big'
      },
      {
        id: 83,
        descr: 'Aşağıdaki tapşırıqda mübtəda (things) = they və ona göre don’t işlənir',
        expl: '... mübtəda don’t feil ...',
        sntc: 'Bu şeylər məni maraqlandırmır',
        tr: 'These thing\u202Es don’t interest me'
      },
      {
        id: 84,
        descr: 'Aşağıdaki tapşırıqda mübtəda (lessons) = they və ona göre don’t işlənir',
        expl: '... mübtəda don’t feil ...',
        sntc: 'Bu dərslər faydalı görünmür',
        tr: 'These lesson\u202Es don’t seem useful'
      },
      {
        id: 85,
        descr: 'Aşağıdaki tapşırıqda mübtəda (things) = they və ona göre don’t işlənir',
        expl: '... mübtəda don’t feil ...',
        sntc: 'Bu şeylər məni cəlb etmir',
        tr: 'These thing\u202Es don’t attract me'
      },
      {
        id: 86,
        descr: 'Aşağıdaki tapşırıqda mübtəda (method) = it və ona göre doesn’t işlənir',
        expl: '... mübtəda doesn’t feil ...',
        sntc: 'Həmin üsul maraqlı gəlmir',
        tr: 'That metho\u202Ed doesn’t seem interesting'
      },
      {
        id: 87,
        descr: 'Aşağıdaki tapşırıqda mübtəda (person) = he/she və ona göre doesn’t işlənir',
        expl: '... mübtəda doesn’t feil ...',
        sntc: 'O adam xoşbəxt görünmür',
        tr: 'That perso\u202En doesn’t look happy'
      },
      {
        id: 88,
        descr: 'Aşağıdaki tapşırıqda mübtəda (book) = it və ona göre doesn’t işlənir',
        expl: '... mübtəda doesn’t feil ...',
        sntc: 'O kitab maraqlı gəlmir',
        tr: 'That boo\u202Ek doesn’t seem interesting'
      },
      {
        id: 89,
        descr: 'Aşağıdaki tapşırıqda mübtəda (houses) = they və ona göre don’t işlənir',
        expl: '... mübtəda don’t feil ...',
        sntc: 'O evlər balaca görünmür',
        tr: 'Those house\u202Es don’t seem small'
      },
      {
        id: 90,
        descr: 'Aşağıdaki tapşırıqda mübtəda (lessons) = they və ona göre don’t işlənir',
        expl: '... mübtəda don’t feil ...',
        sntc: 'O dərslər faydalı görünmür',
        tr: 'Those lesson\u202Es don’t seem useful'
      }
    ],
    [{
        id: 91,
        descr: 'Bir şeyə ehtiyacını ifadə etmək üçün:',
        expl: 'I/You/We/They need ...',
        sntc: 'Mənim bu məlumata ehtiyacım var',
        tr: 'I need this information'
      },
      {
        id: 92,
        descr: 'Bir şeyə ehtiyacını ifadə etmək üçün',
        expl: 'I/You/We/They need ...',
        sntc: 'Mənə bu əşya lazımdır',
        tr: 'I need this thing'
      },
      {
        id: 93,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün:',
        expl: 'He/She/It needs to feil',
        sntc: 'Ona bunu etmək lazımdır',
        tr: 'He needs to do i\u202Et'
      },
      {
        id: 94,
        descr: 'Bir şeyə ehtiyacını ifadə etmək üçün:',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda needs ...',
        sntc: 'Mənim dostuma sənin məsləhətinə ehtiyacı var',
        tr: 'My frien\u202Ed needs your advice'
      },
      {
        id: 95,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün:',
        expl: 'I/You/We/They need to feil',
        sntc: 'Onlara bunu yoxlamaq lazımdır',
        tr: 'They need to check it'
      },
      {
        id: 96,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün:',
        expl: 'I/You/We/They need to ...',
        sntc: 'Bizə İngilis dilini öyrənmək lazımdır',
        tr: 'We need to learn English'
      },
      {
        id: 97,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün:',
        expl: 'I/You/We/They need to feil ...',
        sntc: 'Sənə bu səhvi düzəltmək lazımdır',
        tr: 'You need to correct this mistake'
      },
      {
        id: 98,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün:',
        expl: 'I/You/We/They need to feil ...',
        sntc: 'Mənə onu görmək lazımdır',
        tr: 'I need to see her'
      },
      {
        id: 99,
        descr: 'Bir şeyə ehtiyacını ifadə etmək üçün:',
        expl: 'He/She/It really needs ...',
        sntc: 'Ona həqiqətən bu lazımdır',
        tr: 'He really needs it'
      },
      {
        id: 100,
        descr: 'Bir şeyi etməyi lazım olduğunu ifadə etmək üçün:',
        expl: 'He/She/It really needs to feil ...',
        sntc: 'Ona həqiqətən bu problemi həll etmək lazımdır',
        tr: 'She really needs to solve this problem'
      }
    ],
    [{
        id: 101,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən bunu bilirsən?',
        tr: 'Do you know it\u202E?'
      },
      {
        id: 102,
        descr: "Ümumiyyətlə 'make' daha əvvəl mövcud olmayan bir şey yaratmaq, qurmaq, istehsal etmək haqqında danışırıqsa istifadə olunur. Lakin, bəzən istisna hallarla rastlaşmaq olur",
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Mən səhvlər buraxıram?',
        tr: 'Do I make mistakes?'
      },
      {
        id: 103,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən məni anlayırsan?',
        tr: 'Do you understand me?'
      },
      {
        id: 104,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən mənimlə razısan?',
        tr: 'Do you agree with me?'
      },
      {
        id: 105,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən mənə dəstəksən?',
        tr: 'Do you support me?'
      },
      {
        id: 106,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Onların köməyə ehtiyacı var?',
        tr: 'Do they need help\u202E?'
      },
      {
        id: 107,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən mənim qərarımı dəstəkləyirsən?',
        tr: 'Do you support my decision?'
      },
      {
        id: 108,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they often feil ... ?',
        sntc: 'Onlar bunu tez-tez müzakirə edirlər?',
        tr: 'Do they often discuss it\u202E?'
      },
      {
        id: 109,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Bizim kifayət qədər biliyimiz var?',
        tr: 'Do we have enough knowledge?'
      },
      {
        id: 110,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Bizim kifayət qədər təcrübəmiz var?',
        tr: 'Do we have enough practice?'
      }
    ],
    [{
        id: 111,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'O, hər şeyi ona deyir?',
        tr: 'Does she tell him everything?'
      },
      {
        id: 112,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'O, bu pişiyə nifrət edir?',
        tr: 'Does he hate this cat?'
      },
      {
        id: 113,
        descr: 'İfadəli feil: look for - axtarmaq',
        expl: 'Does he/she/it look for ... ?',
        sntc: 'O, iş axtarır?',
        tr: 'Does he look for a job?'
      },
      {
        id: 114,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'Ona ora gəlmək lazımdır?',
        tr: 'Does she need to come there?'
      },
      {
        id: 115,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'Ona bunu etmək lazımdır?',
        tr: 'Does he need to do it\u202E?'
      },
      {
        id: 116,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it feil artikl sifət ... ?',
        sntc: 'O, yeni iş tapmağa çalışır?',
        tr: 'Does he try to find a new job?'
      },
      {
        id: 117,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it often feil ... ?',
        sntc: 'O, bundan tez-tez istifadə edir?',
        tr: 'Does she often use it\u202E?'
      },
      {
        id: 118,
        descr: 'Sabit ifadə: from time to time - vaxtdan-vaxta',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'O, vaxtdan-vaxta televizora baxır?',
        tr: 'Does he watch TV from time to time?'
      },
      {
        id: 119,
        descr: 'İngilis dilində bir çox feil var ki, onlar müyyən sözönlüklər ilə birlikdə istifadə olunur: listen to ... - ... qulsaq asmaq',
        expl: 'Does he/she/it often feil ... ?',
        sntc: 'O, radioya tez-tez qulaq asır?',
        tr: 'Does he often listen to the radio?'
      },
      {
        id: 120,
        descr: 'İngilis dilində sual vermək üçün do və yaxud does köməkçi feil tələb olunur',
        expl: 'Does he/she/it often feil ... ?',
        sntc: 'O, bunu tez-tez eşidir?',
        tr: 'Does he often hear it\u202E?'
      },
    ],
    [{
        id: 121,
        descr: 'Do və yaxud does köməkçi feilin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda mübtəda (lesson) = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu dərs faydalı görünür?',
        tr: 'Does this lesso\u202En seem useful?'
      },
      {
        id: 122,
        descr: 'Aşağıdaki tapşırıqda mübtəda (method) = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil very ... ?',
        sntc: 'Bu üsul çox maraqlı gəlir?',
        tr: 'Does this metho\u202Ed seem very interesting?'
      },
      {
        id: 123,
        descr: 'Aşağıdaki tapşırıqda mübtəda (teacher) = he/she və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... very ... ?',
        sntc: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
        tr: 'Does this teache\u202Er explain everything very well?'
      },
      {
        id: 124,
        descr: 'Aşağıdaki tapşırıqda mübtəda (information) = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu məlumat faydasız görünür?',
        tr: 'Does this informatio\u202En seem useless?'
      },
      {
        id: 125,
        descr: 'Aşağıdaki tapşırıqda mübtəda (thing) = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu şey vacib görünür?',
        tr: 'Does this thin\u202Eg seem important?'
      },
      {
        id: 126,
        descr: 'Aşağıdaki tapşırıqda mübtəda (lessons) = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu dərslər sənə kömək edir?',
        tr: 'Do these lesson\u202Es help you?'
      },
      {
        id: 127,
        descr: 'Aşağıdaki tapşırıqda mübtəda (students) = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu tələbələr əla nəticələr göstərirlər?',
        tr: 'Do these student\u202Es show excellent results?'
      },
      {
        id: 128,
        descr: 'Aşağıdaki tapşırıqda mübtəda (student) = he/she və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'O tələbə İngilis dilində düzgün danışır?',
        tr: 'Does that studen\u202Et speak English correctly?'
      },
      {
        id: 129,
        descr: 'Aşağıdaki tapşırıqda mübtəda (things) = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu şeylər sənə kömək edir?',
        tr: 'Do these thing\u202Es help you?'
      },
      {
        id: 130,
        descr: 'Aşağıdaki tapşırıqda mübtəda (lessons) = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu dərslər maraqlı gəlir?',
        tr: 'Do these lesson\u202Es seem interesting?'
      }
    ],
    [{
        id: 131,
        descr: 'Do və yaxud does işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda mübtəda (friend) = he/she və ona göre does köməkçi feil işlənir',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Sənin dostun sənə kömək edir?',
        tr: 'Does your frien\u202Ed help you?'
      },
      {
        id: 132,
        descr: 'Aşağıdaki tapşırıqda mübtəda (friends) = they və ona göre do köməkçi feil işlənir',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Onların dostları onlara kömək edirlər?',
        tr: 'Do their friend\u202Es help them?'
      },
      {
        id: 133,
        descr: 'Aşağıdaki tapşırıqda mübtəda (friends) = they və ona göre do köməkçi feil işlənir',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Mənim dostlarım məni dəstəkləyir?',
        tr: 'Do my friend\u202Es support me?'
      },
      {
        id: 134,
        descr: 'Aşağıdaki tapşırıqda mübtəda (friend) = he/she və ona göre do köməkçi feil işlənir',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Sənin dostun səni dəstəkləyir?',
        tr: 'Does your frien\u202Ed support you?'
      },
      {
        id: 135,
        descr: 'Aşağıdaki tapşırıqda mübtəda (person) = he/she və ona göre does köməkçi feil işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu adamın bizim köməyimizə ehtiyacı var?',
        tr: 'Does this perso\u202En need our help\u202E?'
      },
      {
        id: 136,
        descr: 'Aşağıdaki tapşırıqda mübtəda (result) = it və ona göre does köməkçi feil işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu nəticə səndən asılıdır?',
        tr: 'Does this resul\u202Et depend on you?'
      },
      {
        id: 137,
        descr: 'Aşağıdaki tapşırıqda mübtəda (exercise) = it və ona göre does köməkçi feil işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu tapşırıq çox asan gəlir?',
        tr: 'Does this exercis\u202Ee seem too easy?'
      },
      {
        id: 138,
        descr: 'Aşağıdaki tapşırıqda mübtəda (information) = it və ona göre does köməkçi feil işlənir',
        expl: 'Does işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Bu məlumat faydalı görünür?',
        tr: 'Does this informatio\u202En seem useful?'
      },
      {
        id: 139,
        descr: 'Aşağıdaki tapşırıqda mübtəda (lessons) = they və ona göre do köməkçi feil işlənir',
        expl: 'Do işarə\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'O dərslər faydalı görünür?',
        tr: 'Do those lesson\u202Es seem useful?'
      },
      {
        id: 140,
        descr: 'Aşağıdaki tapşırıqda mübtəda (teacher) = he/she və ona göre does köməkçi feil işlənir',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Onun müəllimi onun bütün səhvlərini düzəldir?',
        tr: 'Does his teache\u202Er correct all his mistakes?'
      }
    ],
    [{
        id: 141,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır. Where - hara, harada, haraya?',
        expl: 'Where do I/you/we/they feil ?',
        sntc: 'Sən harada yaşayırsan?',
        tr: 'Where do you live?'
      },
      {
        id: 142,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why do I/you/we/they feil so?',
        sntc: 'Sən niyə belə düşünürsən?',
        tr: 'Why do you think so?'
      },
      {
        id: 143,
        descr: 'How - necə, nəcür?',
        expl: 'How do I/you/we/they feil ... ?',
        sntc: 'Sən bu fikiri necə görürsən?',
        tr: 'How do you find this idea?'
      },
      {
        id: 144,
        descr: 'When - nə vaxt, nə zaman',
        expl: 'When do I/you/we/they feil ... ?',
        sntc: 'Sənin ne vaxt boş vaxtın olur?',
        tr: 'When do you have free time?'
      },
      {
        id: 145,
        descr: 'Həmçinin İngilis dilində sual söz köməyi ilə yaranan sabit konstruksiyalar var. What kind of - hansı növ, nə cür, nə tip?',
        expl: 'What kind of ... do I/you/we/they feil ?',
        sntc: 'Sən nə cür kitablar oxuyursan?',
        tr: 'What kind of books do you read?'
      },
      {
        id: 146,
        descr: 'How much (how many - sayılan isimlər ilə) - nə qədər?',
        expl: 'How much ... do I/you/we/they feil ... ?',
        sntc: 'Sənin üstündə nə qədər pul var?',
        tr: 'How much money do you have with you?'
      },
      {
        id: 147,
        descr: 'What time - saat neçədə, nə vaxt? İfadəli feil: get up - qalxmaq, yuxudan oyanmaq',
        expl: 'What time do I/you/we/they get up?',
        sntc: 'Sən nə vaxt qalxırsan?',
        tr: 'What time do you get up?'
      },
      {
        id: 148,
        descr: 'Where - hara, harada?',
        expl: 'Where do I/you/we/they feil ?',
        sntc: 'Sən hara gedirsən?',
        tr: 'Where do you go?'
      },
      {
        id: 149,
        descr: 'What time - nə vaxt, saat neçədə? Sabit ifadə: go to bed - yatmağa getmək',
        expl: 'What time ... do I/you/we/they go to bed ?',
        sntc: 'Sən nə vaxt yatırsan?',
        tr: 'What time do you go to bed?'
      },
      {
        id: 150,
        descr: 'Who (kim?) sual sözü köməyi ilə mübtədaya sual verilən zaman köməkçi feil işlənmir',
        expl: 'Who feil ... ?',
        sntc: 'Kim məni dəstəkləyir?',
        tr: 'Who supports me?'
      }
    ],
    [{
        id: 151,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Where does he/she/it feil ?',
        sntc: 'O, harada işləyir?',
        tr: 'Where does she work?'
      },
      {
        id: 152,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why does he/she/it feil ... ?',
        sntc: 'O, niyə elə tez-tez şikayət edir?',
        tr: 'Why does he complain so often?'
      },
      {
        id: 153,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why does he/she/it feil ... ?',
        sntc: 'O, niyə pul ödəməkdən imtina edir?',
        tr: 'Why does he refuse to pay?'
      },
      {
        id: 154,
        descr: 'What - nə, hansı?',
        expl: 'What does he/she/it feil ... ?',
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does he want to add?'
      },
      {
        id: 155,
        descr: 'How - necə, nəcür?',
        expl: 'How does he/she/it feil ... ?',
        sntc: 'O, sizi necə dəstəkləyir?',
        tr: 'How does he support you?'
      },
      {
        id: 156,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When does he/she/it feil ... ?',
        sntc: 'O, özünü nə vaxt xoşbəxt hiss edir?',
        tr: 'When does he feel happy?'
      },
      {
        id: 157,
        descr: 'What drink - hansı içki?',
        expl: 'What drink\u202E does he/she/it feil ?',
        sntc: 'O, hansı içkiyə üstünlük verir?',
        tr: 'What drink\u202E does he prefer?'
      },
      {
        id: 158,
        descr: 'Which və what "hansı" kimi tərcümə olunurlar, lakin fərq ondadır ki, which müəyyən bir obyekt qrupundan bir şey seçməli olduğunuz hallarda istifadə olunur',
        expl: 'Which ... does he/she/it usually feil ?',
        sntc: 'O, adətən hansı kanala baxır?',
        tr: 'Which channel does he usually watch?'
      },
      {
        id: 159,
        descr: 'How regularly - müntəzəm olaraq nə qədər?',
        expl: 'How regularly do mübtəda feil ... ?',
        sntc: 'Sən İngilis dilini müntəzəm olaraq nə qədər öyrənirsən?',
        tr: 'How regularly do you learn English?'
      },
      {
        id: 160,
        descr: 'How long does it take - ... nə qədər vaxt çəkir?',
        expl: 'How long does it take ... to get to ... ?',
        sntc: 'Sənin işə çatmağın nə qədər vaxt çəkir?',
        tr: 'How long does it take you to get to work\u202E?'
      }
    ],
    [{
        id: 161,
        descr: 'Where - hara, harada, haraya?',
        expl: 'Where does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ?',
        sntc: 'Sənin atan harada işləyir?',
        tr: 'Where does your fathe\u202Er work?'
      },
      {
        id: 162,
        descr: 'Why - niyə?',
        expl: 'Why do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Sənin dostların nə üçün səninlə razılaşmır?',
        tr: 'Why do your friend\u202Es disagree with you?'
      },
      {
        id: 163,
        descr: 'How - necə, nəcür?',
        expl: 'How do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Sənin valideynlərin bunu necə idarə edir?',
        tr: 'How do your parent\u202Es control it\u202E?'
      },
      {
        id: 164,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Senin atan evi nə vaxt tərk edir?',
        tr: 'When does your fathe\u202Er leave home?'
      },
      {
        id: 165,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When does ... mübtəda feil ?',
        sntc: 'Bu hadisə nə zaman baş verir?',
        tr: 'When does this even\u202Et happen?'
      },
      {
        id: 166,
        descr: 'What - nə, hansı',
        expl: 'What do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda usually feil ?',
        sntc: 'Sənin dostların adətən nə sifariş edir?',
        tr: 'What do your friend\u202Es usually order?'
      },
      {
        id: 167,
        descr: 'What - nə, hansı?',
        expl: 'What ... do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ... ?',
        sntc: 'Sənin müəllimlərin sənə nə məsləhət verirlər?',
        tr: 'What advice do your teacher\u202Es give you?'
      },
      {
        id: 168,
        descr: 'What kind of - hansı növ, nə cür, nə tip?',
        expl: 'What kind of ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda feil ?',
        sntc: 'Onun müəllimi ne cür nümunələr verir?',
        tr: 'What kind of examples does his teache\u202Er give?'
      },
      {
        id: 169,
        descr: 'How much - nə qədər? (sayılmayan isimlər ilə)',
        expl: 'How much ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ?',
        sntc: 'Sənin biznes yoldaşının nə qədər boş vaxtı var?',
        tr: 'How much free time does your busines\u202Es partne\u202Er have?'
      },
      {
        id: 170,
        descr: 'How many - nə qədər? (sayılan isimlər ilə)',
        expl: 'How many ... do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Sənin dostların nə qədər İngilis sözü bilmək istəyirlər?',
        tr: 'How many English words do your friend\u202Es want to know?'
      }
    ],
    [{
        id: 171,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'I/You/We/They feil ... very ...',
        sntc: 'Mən bunu çox yaxşı başa düşürəm',
        tr: 'I understand i\u202Et very well'
      },
      {
        id: 172,
        descr: 'with great pleasure - böyük məmnuniyyətlə',
        expl: 'He/She/It feil+es ... with great pleasure',
        sntc: 'O, məktəbə böyük məmnuniyyətlə gedir',
        tr: 'She goes to school with great pleasure'
      },
      {
        id: 173,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'He/She/It really feil+s ...',
        sntc: 'Bu həqiqətən məni maraqlandırır',
        tr: 'It really interests me'
      },
      {
        id: 174,
        descr: 'point of view - nöqteyi-nəzər',
        expl: 'I/You/We/They don’t feil ...',
        sntc: 'Biz sənin nöqteyi-nəzərinə şərik deyilik',
        tr: "We don't share your poin\u202Et of view"
      },
      {
        id: 175,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 176,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'O bu ideyanı xoşlamır',
        tr: "She doesn't like this idea"
      },
      {
        id: 177,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Biz İngilis dilində səhvsiz danışırıq?',
        tr: 'Do we speak English without mistakes?'
      },
      {
        id: 178,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostlarının bunu bəyənir?',
        tr: 'Do your friends like it\u202E?'
      },
      {
        id: 179,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does he/she/it feil to feil ... ?',
        sntc: 'O, bunu almaq istəyir?',
        tr: 'Does she want to buy it\u202E?'
      },
      {
        id: 180,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does ... mübtəda feil ... ?',
        sntc: 'Sənin dostun bunu bəyənir?',
        tr: 'Does your frien\u202Ed like it\u202E?'
      }
    ],
    [{
        id: 181,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'I/You/We/They feil ...',
        sntc: 'Mən bu üsulu bəyənirəm',
        tr: 'I like this method'
      },
      {
        id: 182,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'I/You/We/They feil ...',
        sntc: 'Mən işə gedirəm',
        tr: 'I go to wor\u202Ek'
      },
      {
        id: 183,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'He/She/It feil+es ...',
        sntc: 'O, işə gedir',
        tr: 'He goes to wor\u202Ek'
      },
      {
        id: 184,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'I/You/We/They don’t feil ...',
        sntc: 'Mən orada təhsil almaq istəmirəm',
        tr: "I don't want to study there"
      },
      {
        id: 185,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'Bu faydalı görünmür',
        tr: "It doesn't seem useful"
      },
      {
        id: 186,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'He/She/It doesn’t feil ...',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 187,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do I/you/we/they feil ... ?',
        sntc: 'Sən məni dəstəkləyirsən?',
        tr: 'Do you support me?'
      },
      {
        id: 188,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do ... mübtəda feil ... ?',
        sntc: 'Sənin valideynlərin bunu bəyənir?',
        tr: 'Do your parent\u202Es like it\u202E?'
      },
      {
        id: 189,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'O, səninlə razıdır?',
        tr: 'Does he agree with you?'
      },
      {
        id: 190,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does he/she/it feil ... ?',
        sntc: 'O, bu şeyə nifrət edir?',
        tr: 'Does he hate this thing?'
      }
    ],
    [{
        id: 191,
        descr: 'Bir şeyi bəyəndiyini, sevdiyini ifadə etmək üçün:',
        expl: 'I/You/We/They like feil+ing',
        sntc: 'Mən rəqs etməyi xoşlayıram',
        tr: 'I like dancing'
      },
      {
        id: 192,
        descr: 'Bir şeyi bəyəndiyini, sevdiyini ifadə etmək üçün:',
        expl: 'He/She/It likes ...',
        sntc: 'O, bunu bəyənir',
        tr: 'She likes i\u202Et'
      },
      {
        id: 193,
        descr: 'Mən istərdim konstruksiyası:',
        expl: 'mübtəda would like ...',
        sntc: 'Mən rəqs etmək istərdim',
        tr: 'I would like to dance'
      },
      {
        id: 194,
        descr: 'Mən istərdim konstruksiyası:',
        expl: 'mübtəda would like ...',
        sntc: 'O, bunu istərdi',
        tr: 'He would like i\u202Et'
      },
      {
        id: 195,
        descr: 'Mən istərdim konstruksiyası:',
        expl: 'mübtəda would like to thank ... for ...',
        sntc: 'Mən sənə hər şeyə görə təşəkkür etmək istərdim',
        tr: 'I would like to thank you for everything'
      },
      {
        id: 196,
        descr: 'Arzunu ifadə etmək üçün:',
        expl: 'I/You/We/They want ...',
        sntc: 'Onlar bunu istəyirlər',
        tr: 'They want i\u202Et'
      },
      {
        id: 197,
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'He/She/It wants to feil ...',
        sntc: 'O bunu etmək istəyir',
        tr: 'He wants to do i\u202Et'
      },
      {
        id: 198,
        descr: 'Bir şey etmək istəyini ifadə etmək üçün:',
        expl: 'I/You/We/They want to feil ...',
        sntc: 'Mən İngilis dilini çox yaxşı bilmək istəyirəm',
        tr: 'I want to know English very well'
      },
      {
        id: 199,
        descr: 'Ehtiyacı ifadə etmək üçün:',
        expl: 'I/You/We/They need ...',
        sntc: 'Mənim buna ehtiyacım var',
        tr: 'I need i\u202Et'
      },
      {
        id: 200,
        descr: 'Bir şey etmək ehtiyacını ifadə etmək üçün:',
        expl: 'He/She/It needs to feil ...',
        sntc: 'Ona bunu bilmək lazımdır',
        tr: 'She needs to know i\u202Et'
      }
    ],
    [{
        id: 201,
        descr: 'Xüsusi sual. Why - niyə, nə üçün?',
        expl: 'Why do I/you/we/they feil ... ?',
        sntc: 'Sən nəyə görə İngilis dilini öyrənirsən?',
        tr: 'Why do you learn English?'
      },
      {
        id: 202,
        descr: 'What - nə, hansı?',
        expl: 'What do I/you/we/they feil ... ?',
        sntc: 'Sən bu barədə nə düşünürsən?',
        tr: 'What do you think about it\u202E?'
      },
      {
        id: 203,
        descr: 'Who - kim, kimi, kimə?',
        expl: 'Who do I/you/we/they feil ?',
        sntc: 'Sən kimi tanıyırsan?',
        tr: 'Who do you know?'
      },
      {
        id: 204,
        descr: 'Who - kim, kimi, kimə?',
        expl: 'Who does he/she/it feil ... ?',
        sntc: 'O, kimə təşəkkür etmək istəyir',
        tr: 'Who does she want to thank'
      },
      {
        id: 205,
        descr: 'Who sual sözü köməyi ilə mübtədaya sual verilən zaman köməkçi feil işlənmir',
        expl: 'Who feil ... ?',
        sntc: 'Bunu kim bilir?',
        tr: 'Who knows it\u202E?'
      },
      {
        id: 206,
        descr: 'Who sual sözü köməyi ilə mübtədaya sual verilən zaman köməkçi feil işlənmir',
        expl: 'Who feil ... ?',
        sntc: 'Bunu kim görür?',
        tr: 'Who sees it\u202E?'
      },
      {
        id: 207,
        descr: 'What - nə, hansı?',
        expl: 'What ... do I/you/we/they feil ... ?',
        sntc: 'Evdə hansı İngilis kitabların var?',
        tr: 'What English books do you have at home?'
      },
      {
        id: 208,
        descr: 'What kind of - hansı növ, nə cür, nə tip?',
        expl: 'What kind of ... do I/you/we/they feil ?',
        sntc: 'Sən nə cür musiqi xoşlayırsan?',
        tr: 'What kind of music do you like?'
      },
      {
        id: 209,
        descr: 'Sayılmayan isimlərlə - how much',
        expl: 'How much ... do I/you/we/they feil ?',
        sntc: 'Sənin nə qədər boş vaxtın var?',
        tr: 'How much free time do you have?'
      },
      {
        id: 210,
        descr: 'Sayılan isimlərlə - how many',
        expl: 'How many ... do I/you/we/they feil ?',
        sntc: 'Sən nə qədər İngilis sözü bilirsən?',
        tr: 'How many English words do you know?'
      }
    ],
    [{
        id: 211,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: '... very well',
        sntc: 'Mən bunu çox yaxşı bilirəm',
        tr: 'I know i\u202Et very well'
      },
      {
        id: 212,
        descr: 'Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: '... very well',
        sntc: 'Mən İngilis dilində çox yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English very well'
      },
      {
        id: 213,
        descr: 'Very ilə işlənən ifadələr cümlənin sonunda yerləşir',
        expl: '... very hard',
        sntc: 'Mən çox səylə işləyirəm',
        tr: 'I work very hard'
      },
      {
        id: 214,
        descr: 'Always/often/usually mübtədadan sonra və feildən əvvəl yerləşirlər',
        expl: 'mübtəda often feil ...',
        sntc: 'O, çox vaxt bu barədə məndən soruşur',
        tr: 'He often asks me about i\u202Et'
      },
      {
        id: 215,
        descr: 'Go to the cinema/restaurant/gym/park - kinoya (restorana və s.) getmək',
        expl: 'How often do I/you/we/they ...',
        sntc: 'Sən nə sıxlıqda kinoteatra gedirsən?',
        tr: 'How often do you go to the cinema?'
      },
      {
        id: 216,
        descr: 'Always/often/usually mübtədadan sonra və feildən əvvəl yerləşirlər',
        expl: 'What ... does he/she/it usually feil ... ?',
        sntc: 'O, adətən evə nə vaxt gəlir?',
        tr: 'What time does he usually come home?'
      },
      {
        id: 217,
        descr: 'Also və too eyni cür tərcümə olunurlar - də, lakin also adətən mübtədadan sonra yerləşir, too isə cümlənin sonunda',
        expl: 'mübtəda also feil ...',
        sntc: 'Mən də bunu xoşlayıram',
        tr: 'I also like i\u202Et'
      },
      {
        id: 218,
        descr: 'Also və too eyni cür tərcümə olunurlar - də, lakin also adətən mübtədadan sonra yerləşir, too isə cümlənin sonunda',
        expl: '..., too',
        sntc: 'Mən də bunu xoşlayıram',
        tr: 'I like it\u202E, too'
      },
      {
        id: 219,
        descr: 'Say/tell – demək. Say - ümumiyyətlə nesə demək, tell - kiməsə nesə demək',
        expl: '... to tell you ...',
        sntc: 'Mən sənə bir şey demək istəyirəm',
        tr: 'I want to tell you one thing'
      },
      {
        id: 220,
        descr: 'Say/tell – demək. Say - ümumiyyətlə nesə demək, tell - kiməsə nesə demək',
        expl: '... to say it',
        sntc: 'Mən bunu demək istəyirəm',
        tr: 'I want to say i\u202Et'
      }
    ],
    [{
        id: 221,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. Ümumi anlayış əldə etmək üçün, to be feil formaları cədvəlinə baxmaq məsləhətdir. I am ... (qısa forma - I’m)',
        expl: 'I am ...',
        sntc: 'Mən evdəyəm',
        tr: 'I am at home'
      },
      {
        id: 222,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. I am ... (qısa forma - I’m)',
        expl: 'I am ...',
        sntc: 'Mən xoşbəxtəm',
        tr: 'I am happy'
      },
      {
        id: 223,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. We are ... (qısa forma - We’re)',
        expl: 'You/We/They are ...',
        sntc: 'Biz evdəyik',
        tr: 'We are at home'
      },
      {
        id: 224,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. You are ... (qısa forma - You’re)',
        expl: 'You/We/They are ...',
        sntc: 'Sən məktəbdəsən',
        tr: 'You are at school'
      },
      {
        id: 225,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. They are ... (qısa forma - They’re)',
        expl: 'You/We/They are ...',
        sntc: 'Onlar işdədir',
        tr: 'They are at wor\u202Ek'
      },
      {
        id: 226,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. They are ... (qısa forma - They’re)',
        expl: 'You/We/They are ...',
        sntc: 'Onlar zəngindirlər',
        tr: 'They are rich'
      },
      {
        id: 227,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. She is ... (qısa forma - She’s)',
        expl: 'He/She/It is artikl sifət isim',
        sntc: 'O, yaxşı insandır',
        tr: 'She is a good person'
      },
      {
        id: 228,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. She is ... (qısa forma - She’s)',
        expl: 'He/She/It is ...',
        sntc: 'O, evdədir',
        tr: 'She is at home'
      },
      {
        id: 229,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. He is ... (qısa forma - He’s)',
        expl: 'He/She/It is ...',
        sntc: 'O, məktəbdədir',
        tr: 'He is at school'
      },
      {
        id: 230,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. It is ... (qısa forma - It’s)',
        expl: 'He/She/It is ...',
        sntc: 'O, evdədir',
        tr: 'It is at home'
      }
    ],
    [{
        id: 231,
        descr: 'very + sifet + isim konstruksiyada qeyri-müəyyən artikl a(an) very-nin önündə yerləşir',
        expl: 'He/She/It is artikl very sifət isim',
        sntc: 'Bu çox maraqlı fikirdir',
        tr: 'It is a very interesting idea'
      },
      {
        id: 232,
        descr: 'very + sifet + isim konstruksiyada qeyri-müəyyən artikl a(an) very-nin önündə yerləşir',
        expl: 'He/She/It is artikl very sifət isim',
        sntc: 'Bu çox yaxşı nəticədir',
        tr: 'It is a very good result'
      },
      {
        id: 233,
        descr: 'Müəyyən artikl the üstünlük dərəcəsini təyin etmək üçün istifadə oluna bilər: fast - faster - the fastest',
        expl: 'He/She/It is the fastest isim',
        sntc: 'Bu ən sürətli maşındır',
        tr: 'It is the fastest car'
      },
      {
        id: 234,
        descr: 'Müəyyən artikl (the) üstünlük dərəcəsini təyin etmək üçün istifadə oluna bilər: good - better - the best',
        expl: 'It is the best isim',
        sntc: 'Bu ən yaxşı nümunədir',
        tr: 'It is the best example'
      },
      {
        id: 235,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada it formal mübtəda kimi istifadə olunur və tərcümə edilmir',
        expl: 'It is ...',
        sntc: 'İstidir',
        tr: 'It is warm'
      },
      {
        id: 236,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada it formal mübtəda kimi istifadə olunur və tərcümə edilmir',
        expl: 'It is ...',
        sntc: 'Qaranlıqdır',
        tr: 'It is dark'
      },
      {
        id: 237,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada it formal mübtəda kimi istifadə olunur və tərcümə edilmir',
        expl: 'It is artikl sifət isim',
        sntc: 'Soyuq gündür',
        tr: 'It is a cold day'
      },
      {
        id: 238,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada it formal mübtəda kimi istifadə olunur və tərcümə edilmir',
        expl: 'It is ...',
        sntc: 'Çox istidir',
        tr: 'It is too hot'
      },
      {
        id: 239,
        descr: 'İngilis dilində bəzi feillər ilə (be, seem, become, look, feel, sound, taste, smell) birlikdə zərf istifadə oluna bilməz. Bu səbəbdən be feil köməyi ilə cümlə qurarkən biz həmişə adjective (sifət) istifadə edirik',
        expl: 'It is ...',
        sntc: 'Bu aydındır',
        tr: 'It is obvious'
      },
      {
        id: 240,
        descr: 'İngilis dilində bəzi feillər ilə (be, seem, become, look, feel, sound, taste, smell) birlikdə zərf istifadə oluna bilməz. Bu səbəbdən be feil köməyi ilə cümlə qurarkən biz həmişə adjective (sifət) istifadə edirik',
        expl: 'It is ...',
        sntc: 'Bu qeyri-mümkündir',
        tr: 'It is impossible'
      }
    ],
    [{
        id: 241,
        descr: 'So/such - elə, belə (çox) tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın olmasına baxmayaraq fərqlı formada işlənirlər. So - sifət və zərflərin önündə, such - yalnız isimin',
        expl: '... so sifət',
        sntc: 'Bu elə (çox) maraqlıdır',
        tr: 'It’s so interesting'
      },
      {
        id: 242,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin',
        expl: '... such isim',
        sntc: 'Mən belə şeyləri xoşlamıram',
        tr: 'I don’t like such things'
      },
      {
        id: 243,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin',
        expl: '... so sifət',
        sntc: 'Bu elə (çox) vacibdir',
        tr: 'It’s so important'
      },
      {
        id: 244,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin, əgər ismin önündə sifət varsa such sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'Bu elə (çox) vacib görüşdür',
        tr: 'It’s such an important meeting'
      },
      {
        id: 245,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin',
        expl: '... so sifət',
        sntc: 'Bu elə (çox) populyardı',
        tr: 'It’s so popular'
      },
      {
        id: 246,
        descr: 'Əgər so-dan sonra many/much/little/few sözlərindən biri gələrsə isim işlətmək mümkündür',
        expl: '... so many isim',
        sntc: 'Mənim elə çox dostum var',
        tr: 'I have so many friends'
      },
      {
        id: 247,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin, əgər ismin önündə sifət varsa such sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'O, elə (çox) gözəl qızdır',
        tr: 'She’s such a beautiful girl'
      },
      {
        id: 248,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin, əgər ismin önündə sifət varsa such sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'O, elə (çox) ağıllı oğlandır',
        tr: 'He’s such a clever boy'
      },
      {
        id: 249,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin, əgər ismin önündə sifət varsa such sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'O, elə (çox) kasıb oğlandır',
        tr: 'He’s such a poor boy'
      },
      {
        id: 250,
        descr: 'So - sifət və zərflərin önündə işlənir, such - yalnız isimin, əgər ismin önündə sifət varsa such sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'O, elə (çox) xeyirxah qadındır',
        tr: 'She’s such a kind woman'
      }
    ],
    [{
        id: 251,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friend) = he/she və ona görə ‘to be’ feilin ‘is’ forması işlənir',
        expl: 'My mübtəda is ...',
        sntc: 'Mənim dostum evdədir',
        tr: 'My frien\u202Ed is at home'
      },
      {
        id: 252,
        descr: 'Aşağıdakı tapşırıqda mübtəda (lessons) = they və ona görə ‘to be’ feilin ‘are’ forması işlənir',
        expl: 'These mübtəda are ...',
        sntc: 'Bu dərslər çox faydalıdır',
        tr: 'These lesson\u202Es are very useful'
      },
      {
        id: 253,
        descr: 'Aşağıdakı tapşırıqda mübtəda (cat) = it və ona görə ‘to be’ feilin ‘is’ forması işlənir',
        expl: 'My mübtəda is ...',
        sntc: 'Mənim pişiyim çox ağıllıdır',
        tr: 'My ca\u202Et is very clever'
      },
      {
        id: 254,
        descr: 'Bir şey haqqında ilk dəfə danışdıqda qeyri-müəyyən artikl a(an) işlənir. İlk məlumatdan sonra, həmin isim olan digər cümlələrdə müəyyən artikl the istifadə olunur',
        expl: '... a computer. The computer ...',
        sntc: 'Mənim kompüterim var. Kompüter yenidir',
        tr: 'I have a computer. The computer is new'
      },
      {
        id: 255,
        descr: 'Bir şey haqqında ilk dəfə danışdıqda qeyri-müəyyən artikl a(an) işlənir. İlk məlumatdan sonra, həmin isim olan digər cümlələrdə müəyyən artikl the istifadə olunur',
        expl: '... a car. The car ...',
        sntc: 'Mənim maşınım var. Maşın çox yaxşıdır',
        tr: 'I have a car. The car is very good'
      },
      {
        id: 256,
        descr: 'Aşağıdaki nümünədə müəyyən bir qrup tələbələr haqqında danışırıq və ona görə müəyyən artikl the işlənir',
        expl: 'The mübtəda are ...',
        sntc: 'Tələbələr tənbəldilər',
        tr: 'The student\u202Es are lazy'
      },
      {
        id: 257,
        descr: 'Aşağıdakı tapşırıqda mübtəda (love) = it və ona görə ‘to be’ feilin ‘is’ forması işlənir',
        expl: 'Love is artikl ...',
        sntc: 'Sevgi çox gözəl hissdir',
        tr: 'Lov\u202Ee is a wonderful feeling'
      },
      {
        id: 258,
        descr: 'Aşağıdakı tapşırıqda mübtəda (time) = it və ona görə ‘to be’ feilin ‘is’ forması işlənir',
        expl: 'Time is ...',
        sntc: 'Vaxt puldur',
        tr: 'Tim\u202Ee is money'
      },
      {
        id: 259,
        descr: 'İngilis dilində mənsubiyyət haqqında cümlə qurarkən to be feil forması istifadə olunur',
        expl: 'I am ...',
        sntc: 'Mən azərbaycanlıyam',
        tr: 'I am Azerbaijani'
      },
      {
        id: 260,
        descr: 'İngilis dilində yaş haqqında cümlə qurarkən to be feil forması istifadə olunur',
        expl: 'He/She/It is ...',
        sntc: 'Onun otuz yaşı var',
        tr: 'He is thirty'
      }
    ],
    [{
        id: 261,
        descr: 'To be feil köməyi ilə inkar. I am not ... (qısa forma - I’m not ...)',
        expl: 'I am not ...',
        sntc: 'Mən evdə deyiləm',
        tr: 'I am not at home'
      },
      {
        id: 262,
        descr: 'To be feil köməyi ilə inkar. You/We/They are not ... (qısa forma - You/We/They aren’t ...)',
        expl: 'You/We/They are not ...',
        sntc: 'Biz hirsli deyilik',
        tr: 'We are not angry'
      },
      {
        id: 263,
        descr: 'To be feil köməyi ilə inkar. You/We/They are not ... (qısa forma - You/We/They aren’t ...)',
        expl: 'You/We/They are not ...',
        sntc: 'Sən haqlı deyilsən',
        tr: 'You are not right'
      },
      {
        id: 264,
        descr: 'To be feil köməyi ilə inkar. You/We/They are not ... (qısa forma - You/We/They aren’t ...)',
        expl: 'You/We/They are not ...',
        sntc: 'Sən birinci yerdə deyilsən',
        tr: 'You are not in the first place'
      },
      {
        id: 265,
        descr: 'To be feil köməyi ilə inkar. You/We/They are not ... (qısa forma - You/We/They aren’t ...)',
        expl: 'You/We/They are not ...',
        sntc: 'Onlar evdə deyil',
        tr: 'They are not at home'
      },
      {
        id: 266,
        descr: 'To be feil köməyi ilə inkar. You/We/They are not ... (qısa forma - You/We/They aren’t ...)',
        expl: 'You/We/They are not ...',
        sntc: 'Onlar bir yerdə deyillər',
        tr: 'They are not together'
      },
      {
        id: 267,
        descr: 'To be feil köməyi ilə inkar. He/She/It is not ... (qısa forma - He/She/It isn’t ...)',
        expl: 'He/She/It is not ...',
        sntc: 'O, qoca deyil',
        tr: 'He is not old'
      },
      {
        id: 268,
        descr: 'To be feil köməyi ilə inkar. He/She/It is not ... (qısa forma - He/She/It isn’t ...)',
        expl: 'He/She/It is not ...',
        sntc: 'Bu elə (çox) pis deyil',
        tr: 'It is not so bad'
      },
      {
        id: 269,
        descr: 'To be feil köməyi ilə inkar. He/She/It is not ...(qısa forma - He/She/It isn’t ...)',
        expl: 'He/She/It is not ...',
        sntc: 'O, şəhərdə deyil',
        tr: 'She is not in the city'
      },
      {
        id: 270,
        descr: 'It formal mübtəda kimi istifadə oluna bilər və həmin halda tərcümə olunmur. He/She/It is not ... (qısa forma - It isn’t ...)',
        expl: 'He/She/It is not ...',
        sntc: 'İsti deyil',
        tr: 'It is not warm'
      }
    ],
    [{
        id: 271,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Am I ... ?',
        sntc: 'Mən haqlıyam?',
        tr: 'Am I right?'
      },
      {
        id: 272,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Am I ... ?',
        sntc: 'Mən şanslıyam?',
        tr: 'Am I lucky?'
      },
      {
        id: 273,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they in the ... ?',
        sntc: 'Biz birinci yerdəyik?',
        tr: 'Are we in the first place?'
      },
      {
        id: 274,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they ... ?',
        sntc: 'Siz bir yerdəsiz?',
        tr: 'Are you together?'
      },
      {
        id: 275,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they ... ?',
        sntc: 'Onlar uzaqdadı?',
        tr: 'Are they far?'
      },
      {
        id: 276,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they the best ... ?',
        sntc: 'Biz ən yaxşı tələbələrik?',
        tr: 'Are we the best students?'
      },
      {
        id: 277,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ... ?',
        sntc: 'O, sənin dostundur?',
        tr: 'Is he your friend?'
      },
      {
        id: 278,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ... ?',
        sntc: 'Bu xüsusi təklifdir?',
        tr: 'Is it a special offer?'
      },
      {
        id: 279,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ... ?',
        sntc: 'O, uğurlu iş adamıdır?',
        tr: 'Is he a successful businessman?'
      },
      {
        id: 280,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ... ?',
        sntc: 'O, öz otağındadır?',
        tr: 'Is she in her room?'
      }
    ],
    [{
        id: 281,
        descr: 'Aşağıdakı tapşırıqda mübtəda (videos) = they və ona görə to be feilin ‘are’ forması işlənir',
        expl: 'Are yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Onun videoları gülməlidir?',
        tr: 'Are his video\u202Es funny?'
      },
      {
        id: 282,
        descr: 'Aşağıdakı tapşırıqda mübtəda (information) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Bu məlumat həqiqətən faydalıdır?',
        tr: 'Is this informatio\u202En really useful?'
      },
      {
        id: 283,
        descr: 'Aşağıdakı tapşırıqda mübtəda (computer) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Onun kompüteri yenidir?',
        tr: 'Is his compute\u202Er new?'
      },
      {
        id: 284,
        descr: 'Aşağıdakı tapşırıqda mübtəda (knowledge) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Bu bilik kifayət edir?',
        tr: 'Is this knowledg\u202Ee enough?'
      },
      {
        id: 285,
        descr: 'Aşağıdakı tapşırıqda mübtəda (story) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Bu hekayə çox məzəlidir?',
        tr: 'Is this stor\u202Ey so funny?'
      },
      {
        id: 286,
        descr: 'Aşağıdakı tapşırıqda mübtəda (news) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəda ... ?',
        sntc: 'Xəbər maraqlıdır?',
        tr: 'Is the new\u202Es interesting?'
      },
      {
        id: 287,
        descr: 'Aşağıdakı tapşırıqda mübtəda (parents) = they və ona görə to be feilin ‘are’ forması işlənir',
        expl: 'Are yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Onun valideynləri xaricdədir?',
        tr: 'Are his parent\u202Es abroad?'
      },
      {
        id: 288,
        descr: 'Aşağıdakı tapşırıqda mübtəda (business) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Bu biznes gəlirlidir?',
        tr: 'Is this busines\u202Es profitable?'
      },
      {
        id: 289,
        descr: 'Aşağıdakı tapşırıqda mübtəda (university) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəda ... ?',
        sntc: 'Universitet məşhurdur?',
        tr: 'Is the universit\u202Ey famous?'
      },
      {
        id: 290,
        descr: 'Aşağıdakı tapşırıqda mübtəda (article) = it və ona görə to be feilin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəda ... ?',
        sntc: 'Məqalə siyasət haqqındadır?',
        tr: 'Is the articl\u202Ee about politics?'
      }
    ],
    [{
        id: 291,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Where are you/we/they ?',
        sntc: 'Sən haradasan?',
        tr: 'Where are you?'
      },
      {
        id: 292,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu qutuda nə var?',
        tr: 'What is in this box?'
      },
      {
        id: 293,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Sənin çantanda nə var?',
        tr: 'What is in your bag?'
      },
      {
        id: 294,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why is he/she/it ... ?',
        sntc: 'O, niyə qəzəblidir?',
        tr: 'Why is he angry?'
      },
      {
        id: 295,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How are you/we/they ?',
        sntc: 'Necəsiz?',
        tr: 'How are you?'
      },
      {
        id: 296,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'When are you/we/they ... ?',
        sntc: 'Sən nə vaxt azadsan?',
        tr: 'When are you free?'
      },
      {
        id: 297,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'İşdə kim var?',
        tr: 'Who is at work\u202E?'
      },
      {
        id: 298,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why are you/we/they ... ?',
        sntc: 'Sən niyə bunun əleyhinəsən?',
        tr: 'Why are you against it\u202E?'
      },
      {
        id: 299,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How far is he/she/it ?',
        sntc: 'Bu nə qədər uzaqdır?',
        tr: 'How far is it\u202E?'
      },
      {
        id: 300,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How old are you/we/they ?',
        sntc: 'Sənin neçə yaşın var?',
        tr: 'How old are you?'
      }
    ],
    [{
        id: 301,
        descr: 'To be feil köməyi ilə xüsusi sual. What is ... ? (qısa forma - What’s ... ?)',
        expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Onun adı nədir?',
        tr: 'What is her name?'
      },
      {
        id: 302,
        descr: 'What is ... ? (qısa forma - What’s ... ?)',
        expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Sənin atanın adı nədir?',
        tr: 'What is your father’s name?'
      },
      {
        id: 303,
        descr: 'What is ... ? (qısa forma - What’s ... ?)',
        expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Sənin qardaşının adı nədir?',
        tr: "What’s your brother's name?"
      },
      {
        id: 304,
        descr: 'What is ... ? (qısa forma - What’s ... ?)',
        expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Ən yaxşı dostunun adı nədir',
        tr: 'What’s your best friend’s name'
      },
      {
        id: 305,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How is ... ?',
        sntc: 'Dərs necədir?',
        tr: 'How is the lesson?'
      },
      {
        id: 306,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How is ... ?',
        sntc: 'Film necədir?',
        tr: 'How is the movie?'
      },
      {
        id: 307,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Where is ... ?',
        sntc: 'Sənin otağın haradadır?',
        tr: 'Where is your room?'
      },
      {
        id: 308,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Where is ... ?',
        sntc: 'Bu yer haradadır?',
        tr: 'Where is this place?'
      },
      {
        id: 309,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Who is ... ?',
        sntc: 'O qadın kimdir?',
        tr: 'Who is that woman?'
      },
      {
        id: 310,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Who are ... ?',
        sntc: 'Bu adamlar kimdir?',
        tr: 'Who are these people?'
      }
    ],
    [{
        id: 311,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why is ... mübtəda ... ?',
        sntc: 'Niyə bu qayda bələ vacibdir?',
        tr: 'Why is this rul\u202Ee so important?'
      },
      {
        id: 312,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why ... you ... ?',
        sntc: 'Sən niyə burdasan?',
        tr: 'Why are you here?'
      },
      {
        id: 313,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'What is ... ?',
        sntc: 'Onun işi nədir?',
        tr: 'What is her job?'
      },
      {
        id: 314,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How interesting is ... ?',
        sntc: 'Bu jurnal nə dərəcədə maraqlıdır?',
        tr: 'How interesting is this magazine?'
      },
      {
        id: 315,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How useful is ... ?',
        sntc: 'Dərs nə dərəcədə faydalıdır?',
        tr: 'How useful is the lesson?'
      },
      {
        id: 316,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How much is ... pair of ... ?',
        sntc: 'Bu cüt şalvar neçəyədir?',
        tr: 'How much is this pair of trousers?'
      },
      {
        id: 317,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'You/We/They are full of ...',
        sntc: 'Biz nikbinliklə doluyuq',
        tr: 'We are full of optimism'
      },
      {
        id: 318,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'I am ...',
        sntc: 'Mən güclə doluyam',
        tr: 'I am full of power'
      },
      {
        id: 319,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'He/She/It is ...',
        sntc: 'O, məzuniyyətdədir',
        tr: 'He is on holiday'
      },
      {
        id: 320,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'You/We/They are ...',
        sntc: 'Biz məzuniyyətdəyik',
        tr: 'We are on vacation'
      }
    ],
    [{
        id: 321,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'He/She/It isn’t in the ...',
        sntc: 'O, hamamda deyil',
        tr: 'He isn’t in the bathroom'
      },
      {
        id: 322,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'He/She/It isn’t in the ...',
        sntc: 'O, mətbəxdə deyil',
        tr: 'She isn’t in the kitchen'
      },
      {
        id: 323,
        descr: 'İdiom: at all - heç',
        expl: 'You/We/They aren’t ... at all',
        sntc: 'Biz heç yorulmamışıq',
        tr: 'We aren’t tired at all'
      },
      {
        id: 324,
        descr: 'İdiom: at all - heç',
        expl: '... mübtəda isn’t ... at all',
        sntc: 'Kitab heç darıxdırıcı deyil',
        tr: 'The boo\u202Ek isn’t boring at all'
      },
      {
        id: 325,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0feil satisfied with ...',
        sntc: 'Bu nəticə məni qane edir',
        tr: "I'm satisfied with this result"
      },
      {
        id: 326,
        descr: 'To be feil köməyi ilə inkar',
        expl: '... mübtəda isn’t in the ...',
        sntc: 'Bu əşya qutuda deyil',
        tr: 'This thin\u202Eg isn’t in the box'
      },
      {
        id: 327,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they ...',
        sntc: 'Onlar bundan qorxurlar?',
        tr: 'Are they afraid of it\u202E?'
      },
      {
        id: 328,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it in the ...',
        sntc: 'O, axırıncı yerdədir?',
        tr: 'Is he in the last place?'
      },
      {
        id: 329,
        descr: 'İngilis dilində yalnız tək və cəm halda işlənən sözlər var. Money həmişə tək halda istifadə olunur',
        expl: 'to\u00A0be\u00A0feil this money ...',
        sntc: 'Bu pullar kifayət edir?',
        tr: 'Is this money enough?'
      },
      {
        id: 330,
        descr: 'News həmişə tək halda istifadə olunur',
        expl: 'to\u00A0be\u00A0feil artikl news ...',
        sntc: 'Xəbərlər maraqlıdır?',
        tr: 'Is the news interesting?'
      }
    ],
    [{
        id: 331,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'You’re/We’re/They’re ...',
        sntc: 'Onlar bu qərarın əleyhinədir',
        tr: "They're against this decision"
      },
      {
        id: 332,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'You/We/They aren’t ...',
        sntc: 'Onlar bu qərarın əleyhinə deyillər',
        tr: "They aren't against this decision"
      },
      {
        id: 333,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Are you/we/they ... ?',
        sntc: 'Onlar bu qərarın əleyhinədir?',
        tr: 'Are they against this decision?'
      },
      {
        id: 334,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'He’s/She’s/It’s ...',
        sntc: 'Bu həmin maşındır',
        tr: "It's the same car"
      },
      {
        id: 335,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'He/She/It isn’t ...',
        sntc: 'Bu həmin maşın deyil',
        tr: "It isn't the same car"
      },
      {
        id: 336,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ...',
        sntc: 'Bu həmin maşındır?',
        tr: 'Is it the same car?'
      },
      {
        id: 337,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'He’s/She’s/It’s ... feil ...',
        sntc: 'O, onu görməyə şaddır',
        tr: "He's glad to see her"
      },
      {
        id: 338,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'He/She/It isn’t ...',
        sntc: 'O, onu görməyə şad deyil',
        tr: "He isn't glad to see her"
      },
      {
        id: 339,
        descr: 'To be feil köməyi ilə sual',
        expl: 'Is he/she/it ...',
        sntc: 'O, onu görməyə şaddır?',
        tr: 'Is he glad to see her?'
      },
      {
        id: 340,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: '... mübtəda to\u00A0be\u00A0feil ...',
        sntc: 'Qapı açıqdır',
        tr: 'The doo\u202Er is open'
      }
    ],
    [{
        id: 341,
        descr: 'İdiom: on time - vaxtında',
        expl: 'You/We/They ... on time',
        sntc: 'Biz həmişə vaxtında bitiririk',
        tr: 'We always finish on time'
      },
      {
        id: 342,
        descr: 'İdiom: on time - vaxtında',
        expl: '... on time',
        sntc: 'O, adətən vaxtında gəlir',
        tr: 'He usually comes on time'
      },
      {
        id: 343,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: '... laughs at ...',
        sntc: 'O, çox vaxt onlara gülür',
        tr: 'He often laughs at them'
      },
      {
        id: 344,
        descr: 'İngilis dilində sabit ifadə: a waste of - israf edilmə, itirmə',
        expl: 'to\u00A0be\u00A0feil a waste of ...',
        sntc: 'Bu, vaxt itkisidir',
        tr: 'It’s a waste of time'
      },
      {
        id: 345,
        descr: 'İngilis dilində önlük. In summer/winter/spring/autumn',
        expl: '... and ... in summer',
        sntc: 'Mənim dostum və mən yayda orada yaşayırıq',
        tr: 'My friend and I live there in summer'
      },
      {
        id: 346,
        descr: 'İngilis dilində önlük. In summer/winter/spring/autumn',
        expl: '... in winter',
        sntc: 'Bu, qışda baş verir',
        tr: 'It happens in winter'
      },
      {
        id: 347,
        descr: 'İngilis dilində bəzi feillər ilə müyəyyən sözönü işlənir',
        expl: '... adapt to ...',
        sntc: 'Mənə bu şərtlərə uyğunlaşmaq lazımdır',
        tr: 'I need to adapt to these conditions'
      },
      {
        id: 348,
        descr: 'İngilis dilində sabit ifadə. as soon as possible - mümkün qədər tez',
        expl: '... as soon as possible',
        sntc: 'Mənə bunu mümkün qədər tez bitirmək lazımdır',
        tr: 'I need to finish it as soon as possible'
      },
      {
        id: 349,
        descr: 'İngilis dilində bəzi feillər ilə müyəyyən sözönü işlənir',
        expl: '... prepare for ...',
        sntc: 'Mənim imtahana hazırlaşmağa ehtiyacım var',
        tr: 'I need to prepare for the exam'
      },
      {
        id: 350,
        descr: "Like-dan sonra gələn felə 'ing' əlavə etmək mümkündür",
        expl: '... like fel+ing ...',
        sntc: 'Mən İngilis dilini öyrənməyi sevirəm',
        tr: 'I like learning English'
      }
    ],
    [{
        id: 351,
        descr: 'Ingilis dilində sözönü. by - ... qədər (vaxt haqqında). Məsələn: by six - saat altıya qədər',
        expl: '... by next week',
        sntc: 'Sənə bunu gələn həftəyə qədər bitirmək lazımdır?',
        tr: 'Do you need to finish it by next week?'
      },
      {
        id: 352,
        descr: 'İdiom: at all - heç',
        expl: '... at all',
        sntc: 'Bu onları heç stimullaşdırmır',
        tr: 'It doesn’t stimulate them at all'
      },
      {
        id: 353,
        descr: 'Ingilis dilində sözönü',
        expl: '... a speacialist in ...',
        sntc: 'Mən bu sahədə mütəxəssis deyiləm',
        tr: 'I’m not a specialist in this area'
      },
      {
        id: 354,
        descr: 'İdiom: at all - heç',
        expl: '... at all',
        sntc: 'Mən heç dəli deyiləm',
        tr: 'I’m not crazy at all'
      },
      {
        id: 355,
        descr: 'Ingilis dilində sözönü',
        expl: '... convenient for ...',
        sntc: 'Bu mənim üçün münasib deyil',
        tr: 'It isn’t convenient for me'
      },
      {
        id: 356,
        descr: 'Ingilis dilində sözönü: on - üzərində, üstündə, -da/də',
        expl: '... on the table',
        sntc: 'Açarlar stolun üstündədir',
        tr: 'The keys are on the table'
      },
      {
        id: 357,
        descr: 'Ingilis dilində sözönü: on - üzərində, üstündə, -da/də',
        expl: '... on my desk',
        sntc: 'Qələm masamın üstündə deyil',
        tr: 'The pen isn’t on my desk'
      },
      {
        id: 358,
        descr: 'İngilis dilində bəzi feillər ilə müyəyyən sözönü işlənir',
        expl: '... communicate with ...',
        sntc: 'Mənim dostum onlarla ünsiyyət qurmur',
        tr: 'My friend doesn’t communicate with them'
      },
      {
        id: 359,
        descr: 'İfadəli feil: write down - yazmaq, qeyd etmək',
        expl: '... write ... down',
        sntc: 'Mənə bunu yazmaq lazımdır',
        tr: 'I need to write i\u202Et down'
      },
      {
        id: 360,
        descr: 'Müyyən artikl the. All the data - bütün (müyəyyən) məlumatlar',
        expl: '... all the data',
        sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
        tr: 'I don’t need to analyze all the data'
      }
    ],
    [{
        id: 361,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: '... compete with ...',
        sntc: 'O, onlarla rəqabət aparır?',
        tr: 'Does he compete with them?'
      },
      {
        id: 362,
        descr: 'Həmçinin bəzi sifətlər də müyəyyən sözönülərlə müşaiyət olunurlar: fond of - çox sevmək',
        expl: '... fond of ...',
        sntc: 'Mən İngilis dilini çox sevirəm',
        tr: "I am fond of English"
      },
      {
        id: 363,
        descr: "Əgər enjoy-dan sonra feil gələrsə ona 'ing' əlavə olunur",
        expl: '... enjoy listening to ...',
        sntc: 'Mən musiqi dinləməkdən zövq alıram',
        tr: 'I enjoy listening to music'
      },
      {
        id: 364,
        descr: 'Çoxluğu bildirən many və much sözlərdən fərqli olaraq a lot (of) və yaxud lots (of) həm sayılan həm də sayılmayan isimlər ilə istifadə oluna bilərlər',
        expl: '... a lot',
        sntc: 'Mən bu dərsləri çox sevirəm',
        tr: 'I like these lessons a lot'
      },
      {
        id: 365,
        descr: 'Ingilis dilində sual',
        expl: 'Does ... feil ... ?',
        sntc: 'Onun qardaşı qəribə davranır?',
        tr: 'Does his brother behave strangely?'
      },
      {
        id: 366,
        descr: 'elder - daha yaşlı',
        expl: 'Is ... elder brother ?',
        sntc: 'Bu oğlan onun böyük qardaşıdır?',
        tr: 'Is this boy his elder brother?'
      },
      {
        id: 367,
        descr: 'younger - yaşa görə kiçik',
        expl: 'Is ... younger sister ?',
        sntc: 'Bu qız onun kiçik bacısıdır?',
        tr: 'Is this girl her younger sister?'
      },
      {
        id: 368,
        descr: 'İdiom: the meaning of - ... mənası',
        expl: 'Do ... the meaning of ... ?',
        sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
        tr: 'Do all the students know the meaning of this expression?'
      },
      {
        id: 369,
        descr: 'İdiom: the meaning of - ... mənası',
        expl: '... the meaning of ... ?',
        sntc: 'Bu sözün mənası nədir?',
        tr: "What's the meaning of this word?"
      },
      {
        id: 370,
        descr: 'Xüsusi sual',
        expl: 'What ... mean?',
        sntc: 'Sən nəyi nəzərdə tutursan?',
        tr: 'What do you mean?'
      }
    ],
    [{
        id: 371,
        descr: 'İdiom: each other - bir-birini',
        expl: '... each other',
        sntc: 'Siz bir-birinizi tanıyırsız',
        tr: 'You know each other'
      },
      {
        id: 372,
        descr: 'İdiom: each other - bir-birini',
        expl: '... each other ?',
        sntc: 'Siz bir-birinizi tanıyırsız?',
        tr: 'Do you know each other?'
      },
      {
        id: 373,
        descr: 'To be interested in - ... maraqlanmaq',
        expl: '... interested in ...',
        sntc: 'Mən siyasətlə maraqlanıram',
        tr: "I'm interested in politics"
      },
      {
        id: 374,
        descr: 'İdiom: be keen on - həvəsi olmaq',
        expl: '... keen on ...',
        sntc: 'Mən musiqiyə həvəsliyəm',
        tr: "I'm keen on music"
      },
      {
        id: 375,
        descr: 'To be keen on - həvəsi olmaq',
        expl: '... keen on feil+ing',
        sntc: 'Mən oxumağa həvəsliyəm',
        tr: "I'm keen on reading"
      },
      {
        id: 376,
        descr: 'İngilis dilində təsdiq cümləsi',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar bir yerdə yaşayır',
        tr: 'They live together'
      },
      {
        id: 377,
        descr: 'İngilis dilində inkar cümləsi',
        expl: 'I/You/We/They don’t feil ...',
        sntc: 'Onlar ayrı yaşamır',
        tr: "They don't live separately"
      },
      {
        id: 378,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: '... mübtəda to\u00A0be\u00A0feil ...',
        sntc: 'Bu vaxt münasibdir',
        tr: 'This tim\u202Ee is convenient'
      },
      {
        id: 379,
        descr: 'İngilis dilində sözönü: in the morning/evening/afternoon',
        expl: "... at 7 o'clock in the ...",
        sntc: 'Mən adətən axşam saat 7-də evə gəlirəm',
        tr: "I usually come home at 7 o'clock in the evening"
      },
      {
        id: 380,
        descr: 'İngilis dilində xüsusi sual',
        expl: 'How do I/you/we/they ... prepare for ...',
        sntc: 'Sən adətən imtahanlarına necə hazırlaşırsan?',
        tr: 'How do you usually prepare for your exams?'
      }
    ],
    [{
        id: 381,
        descr: 'To be feil köməyi ilə xüsusi sual cümləsi',
        expl: 'Why is he/she/it ...',
        sntc: 'Bu nəyə görə səhvdir?',
        tr: 'Why is it wrong?'
      },
      {
        id: 382,
        descr: 'İngilis dilində bəzi feillər (be, seem, become, look, feel, sound, taste, smell) yalnız sifətlər ilə istifadə olunurlar',
        expl: 'Why does he/she/it seem sifət',
        sntc: 'Bu nəyə görə yanlış görünür?',
        tr: 'Why does it seem wrong?'
      },
      {
        id: 383,
        descr: 'Xüsusi sual cümləsi',
        expl: 'How do I/you/we/they ...',
        sntc: 'Sən adətən ad gününü necə qeyd edirsən?',
        tr: 'How do you usually celebrate your birthday?'
      },
      {
        id: 384,
        descr: 'Xüsusi sual cümləsi',
        expl: 'What kind of ... do I/you/we/they ...',
        sntc: 'Nə cür videolara baxmağa üstünlük verirsən?',
        tr: 'What kind of videos do you prefer to watch?'
      },
      {
        id: 385,
        descr: 'I would like konstruksiyasının qısa forması əvəzliyə ‘d əlavə etməklə formalaşır',
        expl: "I'd like ..., please",
        sntc: 'Mən bir fincan çay istərdim, xahiş edirəm',
        tr: "I'd like a cup of tea, please"
      },
      {
        id: 386,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Why does ... feil ... ?',
        sntc: 'Niyə bu qız balaca görünür?',
        tr: 'Why does this girl look small?'
      },
      {
        id: 387,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Where is he/she/it ?',
        sntc: 'O, haradadır?',
        tr: 'Where is he?'
      },
      {
        id: 388,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Where does he/she/it ... ?',
        sntc: 'O, harada yaşayır?',
        tr: 'Where does he live?'
      },
      {
        id: 389,
        descr: 'İdiom: thanks to ... - ... sayəsində, ... görə, ...köməyi ilə',
        expl: 'I’m fond of ... thanks to ...',
        sntc: 'Böyük tərəqqim sayəsində mən bu dərsləri çox sevirəm',
        tr: 'I’m fond of these lessons thanks to my great progress'
      },
      {
        id: 390,
        descr: 'İdiom: thanks to ... - ... sayəsində, görə, ...köməyi ilə',
        expl: 'mübtəda enjoy ... thanks to ...',
        sntc: 'Bu dərslərin sadəliyi sayəsində mən onlardan zövq alıram',
        tr: 'I enjoy these lessons thanks to their simplicity'
      }
    ],
    [{
        id: 391,
        descr: 'Ümümi qaydaya əsasən iki feil `to` köməyi ilə birləşirlər lakin modal feillərin əksəriyyəti bunu tələb etmir. Can modal feil bir şəxsin qabil olduğu, bacardığı hərəkəti bildirir. Can indiki zamanda, could isə keçmiş zamanda işlənir',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən yaxşı iş tapa bilərəm',
        tr: 'I can find a good job'
      },
      {
        id: 392,
        descr: 'Can modal feil bir şəxsin qabil olduğu, bacardığı hərəkəti bildirir. Can indiki zamanda, could isə keçmiş zamanda işlənir',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'İngilis dilini öyrənə bilirəm',
        tr: 'I can learn English'
      },
      {
        id: 393,
        descr: 'Must modal feil vacibliyi bildirir. Must yalnız indiki və gələcək sadə zamanda olan hərəkətlərə aid işlənir, başqa zamanlarda isə onun sinonimi - have to',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən bunu etməliyəm',
        tr: 'I must do i\u202Et'
      },
      {
        id: 394,
        descr: 'Should modal feil ediləcək hərəkətin məsləhətli olduğunu, doğru fikir olduğunu bildirir, gərək kimi tərcümə olunur. Sabit ifadə: step by step - addım-addım',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən gərək İngilis dilini addım-addım öyrənim',
        tr: 'I should learn English step by step'
      },
      {
        id: 395,
        descr: 'May modal feil mümkünlük bildirir və Azərbaycan dilinə ola bilər, mümkündür kimi tərcümə edilir',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən bunu edə bilərəm',
        tr: 'I may do i\u202Et'
      },
      {
        id: 396,
        descr: 'May və might eyni məna daşıyırlar və hər ikisi indiki zamanda işlənə bilsədə, keçmiş zamanda yalnız might işlənir',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən bu kitabı oxuya bilərəm',
        tr: 'I might read this book'
      },
      {
        id: 397,
        descr: 'Another tək halında olan isimlə birlikdə işlənir',
        expl: '... another place',
        sntc: 'O, başqa yerdə yaşamaq istərdi',
        tr: 'She’d like to live in another place'
      },
      {
        id: 398,
        descr: 'Other cəm halında olan isimlə birlikdə işlənir',
        expl: '... other books',
        sntc: 'Mən başqa kitablar oxumaq istəyirəm',
        tr: 'I want to read other books'
      },
      {
        id: 399,
        descr: 'Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: '... very slowly',
        sntc: 'O, adətən İngilis dilində çox yavaş danışır',
        tr: 'She usually speaks English very slowly'
      },
      {
        id: 400,
        descr: 'Talk about ... - bir şey haqqında danışmaq',
        expl: '... talk about ...',
        sntc: 'Mən bu problem haqqında danışmaq istərdim',
        tr: 'I’d like to talk about this problem'
      }
    ],
    [{
        id: 401,
        sntc: 'Onun işi nədir?',
        tr: "What's his job?",
        ch: "What's his job him works"
      },
      {
        id: 402,
        sntc: 'Sən yorğunsan?',
        tr: 'Are you tired?',
        ch: 'Are you tired lazy'
      },
      {
        id: 403,
        sntc: 'Bu çox asan bir dərsdir',
        tr: "It's a very easy lesson",
        ch: "It's a very easy lesson video many"
      },
      {
        id: 404,
        sntc: 'O, özünü xoşbəxt hiss edir',
        tr: 'He feels happy',
        ch: 'He feels happy looks I'
      },
      {
        id: 405,
        sntc: 'Bu misal mənim xoşuma gəlir',
        tr: 'I like this example',
        ch: 'I like this example rule that'
      },
      {
        id: 406,
        sntc: 'Bu nə dərəcədə vacibdir?',
        tr: 'How important is it?',
        ch: 'How important useful are is it'
      },
      {
        id: 407,
        sntc: 'Orada nə var?',
        tr: "What's there?",
        ch: "What's here be there"
      },
      {
        id: 408,
        sntc: 'Bu layihəni gələn ilə qədər bitirməliyəm',
        tr: 'I need to finish this project by next year',
        ch: 'I need to finish this project second week by next year'
      },
      {
        id: 409,
        sntc: 'O, gənc bir adamdır',
        tr: "He's a young man",
        ch: "He's a young man men an"
      },
      {
        id: 410,
        sntc: 'Dostunun iyirmi iki yaşı var?',
        tr: 'Is your friend twenty-two?',
        ch: 'Is your friend our Are twenty-two'
      }
    ],
    [{
        id: 411,
        sntc: 'Onlar indi Azərbaycanda deyillər',
        tr: "They aren't in Azerbaijan now",
        ch: "They aren't in at sometimes Azerbaijan now"
      },
      {
        id: 412,
        sntc: 'O, bəzən kompüter oyunları oynayır',
        tr: 'He sometimes plays computer games',
        ch: 'He sometimes often play plays computer games'
      },
      {
        id: 413,
        sntc: 'Çox istidir',
        tr: "It's too hot",
        ch: "It's too cold hot"
      },
      {
        id: 414,
        sntc: 'O, iş adamıdır',
        tr: "He's a businessman",
        ch: "He's a businessman an They're"
      },
      {
        id: 415,
        sntc: 'Sənin adın nədir?',
        tr: "What's your name?",
        ch: "What's your you names name"
      },
      {
        id: 416,
        sntc: 'Sən hansı filmlərə daha çox heyran qalırsan?',
        tr: 'What movies do you admire more?',
        ch: 'What movies do you admire movie does more'
      },
      {
        id: 417,
        sntc: 'Bu vacibdir',
        tr: "It's important",
        ch: "It's important unimportant useful"
      },
      {
        id: 418,
        sntc: 'Bu çox uzaqdır',
        tr: "It's so far",
        ch: "It's so far near much"
      },
      {
        id: 419,
        sntc: 'Nümunə çox informativdir',
        tr: 'The example is so informative',
        ch: 'The example is so informative such are'
      },
      {
        id: 420,
        sntc: 'Bu daha pis deyil',
        tr: "It isn't worse",
        ch: "It isn't worse better is"
      }
    ],
    [{
        id: 421,
        sntc: 'Sənə nə kömək edir?',
        tr: 'What helps you?',
        ch: 'What helps help Who you'
      },
      {
        id: 422,
        sntc: 'Kişilər buradadır',
        tr: 'The men are here',
        ch: 'The men are is man here'
      },
      {
        id: 423,
        sntc: 'Bu kitab neçəyədir?',
        tr: 'How much is this book?',
        ch: 'How much is are book this book'
      },
      {
        id: 424,
        sntc: 'Sən haqlısan',
        tr: "You're right",
        ch: "You're wrong write right"
      },
      {
        id: 425,
        sntc: 'Bu elə deyil',
        tr: "It isn't so",
        ch: "It isn't is such so"
      },
      {
        id: 426,
        sntc: 'O dərslər yararsızdır',
        tr: 'Those lessons are ineffective',
        ch: 'Those lessons is effective are ineffective'
      },
      {
        id: 427,
        sntc: 'O, bunu çox yaxşı edir',
        tr: 'She does it very well',
        ch: 'She does it very good much well'
      },
      {
        id: 428,
        sntc: 'Bu reklam xoşuma gəlmir',
        tr: "I don't like this advertisement",
        ch: "I don't like this that likes advertisement"
      },
      {
        id: 429,
        sntc: 'Bu onun rəyidir?',
        tr: 'Is it his opinion?',
        ch: 'Is it his him think opinion'
      },
      {
        id: 430,
        sntc: 'O, bu barədə tez-tez düşünür?',
        tr: 'Does he often think about it?',
        ch: 'Does he often think about thing toy it'
      }
    ],
    [{
        id: 431,
        sntc: 'Sizin ananızın neçə yaşı var?',
        tr: 'How old is your mother?',
        ch: 'How old is your father are mother'
      },
      {
        id: 432,
        sntc: 'Bu çox böyük səhv deyil',
        tr: "It isn't a very big mistake",
        ch: "It isn't a very an is big mistake"
      },
      {
        id: 433,
        sntc: 'Bu çox yüksək səviyyədir',
        tr: "It's a very high level",
        ch: "It's a very an hate high level"
      },
      {
        id: 434,
        sntc: 'Bu, o qədər də pis deyil',
        tr: "It isn't so bad",
        ch: "It isn't so such a bad"
      },
      {
        id: 435,
        sntc: 'Ümid edirəm sən bunu başa düşürsən',
        tr: 'I hope you understand it',
        ch: 'I hope you know he understand it'
      },
      {
        id: 436,
        sntc: 'O, yorğun deyil',
        tr: "She isn't tired",
        ch: "She isn't is lazy tired"
      },
      {
        id: 437,
        sntc: 'Gülməli bir filmdir?',
        tr: 'Is it a funny movie?',
        ch: 'Is it a an interesting funny movie'
      },
      {
        id: 438,
        sntc: 'Bu il çox çətindir',
        tr: 'This year is very difficult',
        ch: 'This year is are week very difficult'
      },
      {
        id: 439,
        sntc: 'Mən üzməyi sevirəm',
        tr: 'I like swimming',
        ch: 'I like want likes swimming'
      },
      {
        id: 440,
        sntc: 'Sizi nə ruhlandırır?',
        tr: 'What inspires you?',
        ch: 'What inspires Who inspire you'
      }
    ],
    [{
        id: 441,
        sntc: 'Əhəmiyyətsiz görünən nədir?',
        tr: 'What seems unimportant?',
        ch: 'What seems seem very unimportant'
      },
      {
        id: 442,
        sntc: 'Mənim kompüterim var. O çox güclüdür',
        tr: "I have a computer. It's very powerful",
        ch: "I have a an has computer. It's very powerful"
      },
      {
        id: 443,
        sntc: 'Mən bütün bu dərsləri həqiqətən faydalı görürəm',
        tr: 'I find all these lessons really useful',
        ch: 'I find all these this very lessons really useful'
      },
      {
        id: 444,
        sntc: 'Sən nə bilirsən?',
        tr: 'What do you know?',
        ch: 'What do you does understand know'
      },
      {
        id: 445,
        sntc: 'Təqdimat aydın deyil',
        tr: "The presentation isn't clear",
        ch: "The presentation is  isn't clear"
      },
      {
        id: 446,
        sntc: 'Bu çox darıxdırıcıdır',
        tr: "It's very boring",
        ch: "It's very good lazy boring"
      },
      {
        id: 447,
        sntc: 'Mən bu dərsləri çox faydalı görürəm',
        tr: 'I find these lessons very useful',
        ch: 'I find these lessons useless lesson very useful'
      },
      {
        id: 448,
        sntc: 'Bu uşaqlar üçündür?',
        tr: 'Is it for children?',
        ch: 'Is it for Are this children'
      },
      {
        id: 449,
        sntc: 'Burada nə var?',
        tr: "What's here?",
        ch: "What's there are here"
      },
      {
        id: 450,
        sntc: 'Onlar bir yerdə yaşamırlar',
        tr: "They don't live together",
        ch: "They don't live again like together"
      }
    ],
    [{
        id: 451,
        sntc: 'Bu izahat aydın deyil',
        tr: 'This explanation is unclear',
        ch: 'This explanation is clear expression unclear'
      },
      {
        id: 452,
        sntc: 'Onu heyran edən kimdir?',
        tr: 'Who admires him?',
        ch: 'Who admires his admire him'
      },
      {
        id: 453,
        sntc: 'Sənin uğurun mənim uğurumdur',
        tr: 'Your success is my success',
        ch: 'Your success is my your mine success'
      },
      {
        id: 454,
        sntc: 'O, bunu necə izah edir?',
        tr: 'How does she explain it?',
        ch: 'How does she explain do you it'
      },
      {
        id: 455,
        sntc: 'O, çox zəngin insandır',
        tr: "He's a very rich person",
        ch: "He's a an kind very rich person"
      },
      {
        id: 456,
        sntc: 'Mən bunu etməliyəm',
        tr: 'I must do it',
        ch: 'I must can does do it'
      },
      {
        id: 457,
        sntc: 'Sənə bunu dəyişmək lazımdır',
        tr: 'You need to change it',
        ch: 'You need to can We change it'
      },
      {
        id: 458,
        sntc: 'Səhvlərin üzərində işləyirsən?',
        tr: 'Do you work on your mistakes?',
        ch: 'Do you job work you on your mistakes'
      },
      {
        id: 459,
        sntc: 'Mən onlara qulaq asmaq istəmirəm',
        tr: "İ don't want to listen to them",
        ch: "İ don't want can doesn't to listen to them"
      },
      {
        id: 460,
        sntc: 'Bu neçəyədir?',
        tr: 'How much does it cost?',
        ch: 'How much does it costs do cost'
      }
    ],
    [{
        id: 461,
        sntc: 'O, adətən hansı kanala baxır?',
        tr: 'Which channel does he usually watch?',
        ch: 'Which channel does he often do usually watch'
      },
      {
        id: 462,
        sntc: 'Bu nəyə görə düzgün görünür?',
        tr: 'Why does it seem right?',
        ch: 'Why does it seem see do right'
      },
      {
        id: 463,
        sntc: 'Mən bunu bilirəm',
        tr: 'I know it',
        ch: 'I know can must it'
      },
      {
        id: 464,
        sntc: 'Bu şirkətin pulu var',
        tr: 'This company has money',
        ch: 'This company have many has money'
      },
      {
        id: 465,
        sntc: 'Sən məni anlayırsan?',
        tr: 'Do you understand me?',
        ch: 'Do you they Does understand me'
      },
      {
        id: 466,
        sntc: 'Yemək həqiqətən dadlıdır',
        tr: 'The food is really tasty',
        ch: 'The food are real is really tasty'
      },
      {
        id: 467,
        sntc: 'O, çox gözəl qızdır',
        tr: "She's a very beautiful girl",
        ch: "She's a very good much beautiful girl"
      },
      {
        id: 468,
        sntc: 'Bu çox asandır',
        tr: "It's so easy",
        ch: "It's so hard many easy"
      },
      {
        id: 469,
        sntc: 'Bu daha yaxşıdır',
        tr: "It's better",
        ch: "It's best the better"
      },
      {
        id: 470,
        sntc: 'Bizim kifayət qədər təcrübəmiz var?',
        tr: 'Do we have enough practice?',
        ch: 'Do we have has they enough practice'
      }
    ],
    [{
        id: 471,
        sntc: 'Səni qorxuya salan nədir?',
        tr: 'What frightens you?',
        ch: 'What Why need frightens you'
      },
      {
        id: 472,
        sntc: 'Maraqlı görünən nədir?',
        tr: 'What seems interesting?',
        ch: 'What seems such interest interesting'
      },
      {
        id: 473,
        sntc: 'Onun o yerə gəlməyi lazımdır?',
        tr: 'Does she need to come to that place?',
        ch: 'Does she need must go to come to that place'
      },
      {
        id: 474,
        sntc: 'Biz bunu üçüncü nümunədə görürük',
        tr: 'We see it in the third example',
        ch: 'We see it in the second look third example'
      },
      {
        id: 475,
        sntc: 'Ona bunu yazmaq lazımdır',
        tr: 'She needs to write it down',
        ch: 'She needs need I to write it down'
      },
      {
        id: 476,
        sntc: 'Nəyə görə onun dərsləri belə yararsızdır?',
        tr: 'Why are her lessons so ineffective?',
        ch: 'Why are her lessons so such What ineffective'
      },
      {
        id: 477,
        sntc: 'Onlar birlikdədirlər?',
        tr: 'Are they together?',
        ch: 'Are they happy together'
      },
      {
        id: 478,
        sntc: 'O, uzun boylu bir qızdır',
        tr: "She's a tall girl",
        ch: "She's a woman an tall girl"
      },
      {
        id: 479,
        sntc: 'Bu belə sadə bir cavabdır',
        tr: "It's such a simple answer",
        ch: "It's such a question an simple answer"
      },
      {
        id: 480,
        sntc: 'Qəribə görünən nədir?',
        tr: 'What looks strange?',
        ch: 'What looks Why strange'
      }
    ],
    [{
        id: 481,
        sntc: 'Onlar bir yerdə yaşayırlar',
        tr: 'They live together',
        ch: 'They live work We together'
      },
      {
        id: 482,
        sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
        tr: "I don't need to analyze all the data",
        ch: "I don't need to We look analyze all the data"
      },
      {
        id: 483,
        sntc: 'Oyun maraqlıdır?',
        tr: 'Is the game interesting?',
        ch: 'Is the game play Are interesting'
      },
      {
        id: 484,
        sntc: 'Onlar sənə nə demək istəyirlər?',
        tr: 'What do they want to tell you?',
        ch: 'What do they can  want to tell you'
      },
      {
        id: 485,
        sntc: 'Onlar çox səylə oxuyurlar',
        tr: 'They study very hard',
        ch: 'They study very We much hard'
      },
      {
        id: 486,
        sntc: 'Bu mövzu mənim üçün çox çətindir',
        tr: 'This subject is too difficult for me',
        ch: 'This subject is too are difficult for me'
      },
      {
        id: 487,
        sntc: 'Sizi daha çox nə təşviq edir?',
        tr: 'What motivates you more?',
        ch: 'What motivates big most you more'
      },
      {
        id: 488,
        sntc: 'İdeya maraqlıdır?',
        tr: 'Is the idea interesting?',
        ch: 'Is the idea Are this interesting'
      },
      {
        id: 489,
        sntc: 'Kitab çox maraqlıdır?',
        tr: 'Is the book so interesting?',
        ch: 'Is the book so such an interesting'
      },
      {
        id: 490,
        sntc: 'Bu ən yaxşı kitabdır',
        tr: "It's the best book",
        ch: "It's the best worst a book"
      }
    ],
    [{
        id: 491,
        sntc: 'Bu paltar neçəyədir?',
        tr: 'How much is this dress?',
        ch: 'How much is are shoes this dress'
      },
      {
        id: 492,
        sntc: 'Bu ucuzdur?',
        tr: 'Is it cheap?',
        ch: 'Is it expensive he cheap'
      },
      {
        id: 493,
        sntc: 'Siz onu dəstəkləyirsiniz?',
        tr: 'Do you support him?',
        ch: 'Do you support we help him'
      },
      {
        id: 494,
        sntc: 'Dərs çox informativdir',
        tr: 'The lesson is so informative',
        ch: 'The lesson is so such are informative'
      },
      {
        id: 495,
        sntc: 'Onlar bir yerdədirlər',
        tr: "They're together",
        ch: "They're We're again together"
      },
      {
        id: 496,
        sntc: 'O, bu ölkədə yaşayır',
        tr: 'He lives in this country',
        ch: 'He lives live I in this country'
      },
      {
        id: 497,
        sntc: 'O, bütün bu şeyləri çox yaxşı izah edir',
        tr: 'She explains all these things very well',
        ch: 'She explains all these those an things very well'
      },
      {
        id: 498,
        sntc: 'Mənim müdirim hər şeyi bilir',
        tr: 'My boss knows everything',
        ch: 'My boss knows friend all everything'
      },
      {
        id: 499,
        sntc: 'Onun dostu bunu başa düşür?',
        tr: 'Does his friend understand it?',
        ch: 'Does his friend know learn understand it'
      },
      {
        id: 500,
        sntc: 'Onlar çox vaxt gülürlər',
        tr: 'They often laugh',
        ch: 'They often sometimes laugh'
      }
    ],
    [{
        id: 501,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onlar ora gedəcəklər',
        tr: 'They will go there'
      },
      {
        id: 502,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onlar gəliri artıracaqlar',
        tr: 'They will maximize the profit'
      },
      {
        id: 503,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onun boş vaxtı olacaq',
        tr: 'He will have free time'
      },
      {
        id: 504,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'O, bunu manipulyasiya edəcək',
        tr: 'He will manipulate i\u202Et'
      },
      {
        id: 505,
        descr: 'Sifətlərin qarşısına get-feil əlavə etdikdən sonra həmin sifət feilləşir. Misal üçün: I`m rich - mən varlıyam və I`m getting rich - mən varlanıram. Yuxarıdaki cümlə indiki davamedici zamanda olduğuna görə get feilin getting forması istifadə olunub',
        expl: 'mübtəda will get feil ...',
        sntc: 'Sən tezliklə yorulacaqsan',
        tr: 'You will get tired soon'
      },
      {
        id: 506,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Bu ona stimul verəcək',
        tr: 'It will stimulate him'
      },
      {
        id: 507,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün qısa forma əvəzliyə `’ll` əlavə etməklə formalaşır. Sabit ifadə: sooner or later - gec-tez',
        expl: 'əvəzlik+’ll feil ... sooner or later',
        sntc: 'Mən bu məqsədə gec-tez çatacağam',
        tr: 'I’ll achieve this aim sooner or later'
      },
      {
        id: 508,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün qısa forma əvəzliyə `’ll` əlavə etməklə formalaşır',
        expl: 'əvəzlik+’ll feil ...',
        sntc: 'Mən İngiliscə heç bir səhv etmədən danışacam',
        tr: 'I’ll speak English without any mistakes at all'
      },
      {
        id: 509,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün qısa forma əvəzliyə `’ll` əlavə etməklə formalaşır',
        expl: 'əvəzlik+’ll feil ...',
        sntc: 'Mən yeni iş axtaracam',
        tr: 'I’ll look for a new job'
      },
      {
        id: 510,
        descr: 'İfadəli feil: think over - üzərində düşünmək, götür-qoy etmək',
        expl: 'əvəzlik+’ll feil ...',
        sntc: 'Biz bunun üzərində düşünərik',
        tr: 'We’ll think i\u202Et over'
      }
    ],
    [{
        id: 511,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Hər kəs çox məyus olacaq',
        tr: 'Everyon\u202Ee will be very disappointed'
      },
      {
        id: 512,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Bütün xalq bunu dəstəkləyəcək',
        tr: 'All the peopl\u202Ee will support i\u202Et'
      },
      {
        id: 513,
        descr: 'İngilis dilində sabit ifadə: sooner or later - gec-tez',
        expl: 'mübtəda will feil ... sooner or later',
        sntc: 'Hər kəs gec-tez bu şəraitə uyğunlaşacaq',
        tr: 'Everyon\u202Ee will adapt to these conditions sooner or later'
      },
      {
        id: 514,
        descr: 'İfadəli feil:  hurry up - tələsmək',
        expl: '... mübtəda will hurry up',
        sntc: 'Mənim dostum və mən tələsəcəyik',
        tr: 'My frien\u202Ed and I will hurry up'
      },
      {
        id: 515,
        descr: 'Sabit ifadə: the day after tomorrow - birigün, ertəsi gün',
        expl: '... mübtəda will feil ... the day after tomorrow',
        sntc: 'Mənim dostum bu pulu birigün borc alacaq',
        tr: 'My frien\u202Ed will borrow this money the day after tomorrow'
      },
      {
        id: 516,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Hökümət orqanları bunu hansısa yolla tənzimləyəcək',
        tr: 'The authoritie\u202Es will regulate i\u202Et somehow'
      },
      {
        id: 517,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Mənim dostum və mən İngilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My frien\u202Ed and I will devote more free time to English'
      },
      {
        id: 518,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Müəllim onu bağışlayacaq',
        tr: 'The teache\u202Er will forgive him'
      },
      {
        id: 519,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Bu bir çox insan üçün birinci yerdə olacaq',
        tr: 'It will be in the first place for many people'
      },
      {
        id: 520,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Onun dostu buna peşman olacaq',
        tr: 'His frien\u202Ed will regret i\u202Et'
      }
    ],
    [{
        id: 521,
        descr: 'Gələcək sadə zamanda inkar etmək üçün konstruksiya:',
        expl: 'mübtəda will not feil ...',
        sntc: 'Mən onun sözünü kəsmərəm',
        tr: "I will not interrupt him"
      },
      {
        id: 522,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Mən buna qarşı olmaram',
        tr: 'I won’t be against i\u202Et'
      },
      {
        id: 523,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Hazırlıq keçmədən sən bu imtahandan keçə bilməzsən',
        tr: 'You won’t pass this exam without preparation'
      },
      {
        id: 524,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil artikl solution to ...',
        sntc: 'Onlar bu problemdən çıxış yolu tapmayacaqlar',
        tr: 'They won’t find a solution to this problem'
      },
      {
        id: 525,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'O, bütün mətni lüğətsiz tərcümə etməyəcək',
        tr: 'He won’t translate all the text without a dictionary'
      },
      {
        id: 526,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Bu, uğura gətirib çıxarmayacaq',
        tr: 'It won’t lead to success'
      },
      {
        id: 527,
        descr: 'İfadəli feil: take part - iştirak etmək',
        expl: 'mübtəda won’t take part...',
        sntc: 'Mən bu yarışmada iştirak etməyəcəm',
        tr: 'I won’t take part in this competition'
      },
      {
        id: 528,
        descr: 'Sabit ifadə: any longer - artıq',
        expl: 'mübtəda won’t feil ... any longer',
        sntc: 'Biz artıq bu şirkətlə rəqabət aparmayacıq',
        tr: 'We won’t compete with this company any longer'
      },
      {
        id: 529,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Sən bu qərara təsir etməyəcəksən',
        tr: 'You won’t influence this decision'
      },
      {
        id: 530,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: 'mübtəda won’t feil ...',
        sntc: 'O, artıq onunla ünsiyyət qurmayacaq',
        tr: 'He won’t communicate with him anymore'
      }
    ],
    [{
        id: 531,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t insist on ...',
        sntc: 'Mənim müdirim bunu təkid etməyəcək',
        tr: 'My bos\u202Es won’t insist on i\u202Et'
      },
      {
        id: 532,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Mənim həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər',
        tr: 'My colleague\u202Es won’t support this initiative'
      },
      {
        id: 533,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Mənim dostum sənə kömək etməkdən imtina etməyəcək',
        tr: 'My frien\u202Ed won’t refuse to help you'
      },
      {
        id: 534,
        descr: 'In - ərzində. Misal üçün: in two hours - iki saat ərzində',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Qız bunu bir günə öyrənməyəcək',
        tr: 'The gir\u202El won’t learn i\u202Et in one day'
      },
      {
        id: 535,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Oğlanlar bunu bu qədər tez xatırlamayacaq',
        tr: 'The boy\u202Es won’t remember i\u202Et so quickly'
      },
      {
        id: 536,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Qonaqlar bizim yoxluğumuza fikir verməyəcək',
        tr: 'The guest\u202Es won’t notice our absence'
      },
      {
        id: 537,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Məncə, bu musiqiçi populyar olmayacaq',
        tr: 'I think this musicia\u202En won’t become popular'
      },
      {
        id: 538,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Konfrans heç də darıxdırıcı olmayacaq',
        tr: 'The conferenc\u202Ee won’t be boring at all'
      },
      {
        id: 539,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'O tələbələrin kifayət qədər təcrübəsi olmayacaq',
        tr: 'Those student\u202Es won’t have enough practice'
      },
      {
        id: 540,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma:',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Bu təklif bir azdan o qədər də cəlbedici olmayacaq',
        tr: 'This offe\u202Er won’t be so attractive soon'
      }
    ],
    [{
        id: 541,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'O, buna gözlərini yumacaq?',
        tr: 'Will she close her eyes on it\u202E?'
      },
      {
        id: 542,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu elə vacib hadisə olacaq?',
        tr: 'Will it be such an important event?'
      },
      {
        id: 543,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bunun qiyməti daha çox olacaq?',
        tr: 'Will it cost more money?'
      },
      {
        id: 544,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Onlar bu kitabı nəşr edəcəklər?',
        tr: 'Will they publish this book?'
      },
      {
        id: 545,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu onların münasibətini deyişəcək?',
        tr: 'Will it change their attitude?'
      },
      {
        id: 546,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Sən mənim səhvlərimə işarə edəcəksən?',
        tr: 'Will you point at my mistakes?'
      },
      {
        id: 547,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu əbədiyyən davam edəcək?',
        tr: 'Will it last forever?'
      },
      {
        id: 548,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu, iki saat davam edəcək?',
        tr: 'Will it last for two hours?'
      },
      {
        id: 549,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu təxminən iki saat davam edəcək?',
        tr: 'Will it last for about two hours?'
      },
      {
        id: 550,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Sən bunu axşam bişirəcəksən?',
        tr: 'Will you cook i\u202Et in the evening?'
      }
    ],
    [{
        id: 551,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu, asan sınaq olacaq?',
        tr: 'Will it be an easy test?'
      },
      {
        id: 552,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu, sonda mümkün olacaq?',
        tr: 'Will it be possible in the end?'
      },
      {
        id: 553,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Sabah səhər bekar olacaqsan?',
        tr: 'Will you be available tomorrow morning?'
      },
      {
        id: 554,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Onların maddi problemləri olacaq?',
        tr: 'Will they have financial problems?'
      },
      {
        id: 555,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Onlar kommersiya uğuru qazanacaqlar?',
        tr: 'Will they have a commercial success?'
      },
      {
        id: 556,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Tezliklə qaranlığ olacaq?',
        tr: 'Will it get dark soon?'
      },
      {
        id: 557,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu bizim əsas layihəmiz olacaq?',
        tr: 'Will it be our main project?'
      },
      {
        id: 558,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Sən evdə olacaqsan?',
        tr: "Will you be at home?"
      },
      {
        id: 559,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bunu yoxlamaq lazım gələcək?',
        tr: 'Will it be necessary to check it\u202E?'
      },
      {
        id: 560,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu, potensial təhlükə olacaq?',
        tr: 'Will it be a potential threat?'
      }
    ],
    [{
        id: 561,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'When will mübtəda feil ... ?',
        sntc: 'O, bizə nə vaxt qoşulacaq?',
        tr: 'When will she join us?'
      },
      {
        id: 562,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'Who will feil ... ?',
        sntc: 'Bu videolara kim baxacaq?',
        tr: 'Who will watch these videos?'
      },
      {
        id: 563,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'When will mübtəda feil ... ?',
        sntc: 'Sən nə vaxt azad olacaqsan?',
        tr: 'When will you be free?'
      },
      {
        id: 564,
        descr: 'İfadəli feil: come back - qayıtmaq',
        expl: 'When will mübtəda ... ?',
        sntc: 'Onlar nə vaxt qayıdacaqlar?',
        tr: 'When will they come back?'
      },
      {
        id: 565,
        descr: 'be able to konstruksiyası can modal feilin sinonimidir və ondan fərqli olaraq hər zamanda istifadə oluna bilər. Azərbaycan dilinə edə bilmək, imkanı olmaq kimi tərcümə olunur',
        expl: 'How will mübtəda be able to feil... ?',
        sntc: 'Onlar bu problemi necə həll edə biləcəklər?',
        tr: 'How will they be able to solve this problem?'
      },
      {
        id: 566,
        descr: 'Manage - çətin bir iş görəndə uğur qazanmaq',
        expl: 'How will mübtəda feil ... ?',
        sntc: 'Bu problemi necə həll edə biləcəksən?',
        tr: 'How will you manage to solve this problem?'
      },
      {
        id: 567,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How will mübtəda feil ... ?',
        sntc: 'Onlar bu yerə necə çatacaqlar?',
        tr: 'How will they get to this place?'
      },
      {
        id: 568,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'What will mübtəda feil ?',
        sntc: 'Bu nə məna daşıyacaq?',
        tr: 'What will it mean?'
      },
      {
        id: 569,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'Which ... will mübtəda feil ?',
        sntc: 'Hansı tövsiyəyə əməl edəcəksən?',
        tr: 'Which recommendation will you follow?'
      },
      {
        id: 570,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'What kind of ... will mübtəda feil ?',
        sntc: 'Nə cür materiallara ehtiyacınız olacaq?',
        tr: 'What kind of materials will you need?'
      }
    ],
    [{
        id: 571,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər. Start feildən sonra gələn feilə -ing əlavə olunur`',
        expl: 'Why will ... start feil+ing ... ?',
        sntc: 'Nəyə görə partnyorunuz bunu sonradan etməyə başlayacaq?',
        tr: 'Why will your partner start doing i\u202Et later?'
      },
      {
        id: 572,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər. Continue feilindən sonra gələn feilə `ing` əlavə olunur',
        expl: 'When will ... continue feil+ing ... ?',
        sntc: 'Müəllim nə vaxt bunu davam etdirəcək?',
        tr: 'When will the teacher continue doing it\u202E?'
      },
      {
        id: 573,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'Why will ... feil ... ?',
        sntc: 'Nəyə görə dostun bunu etməkdən imtina edəcək?',
        tr: 'Why will your friend refuse to do it\u202E?'
      },
      {
        id: 574,
        descr: 'İfadəli feil: take place - baş tutmaq',
        expl: 'Where will ... take place ?',
        sntc: 'Konfrans harada baş tutacaq?',
        tr: 'Where will the conference take place?'
      },
      {
        id: 575,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How will ... feil ... ?',
        sntc: 'Sənin dostun bu problemi necə həll edəcək?',
        tr: 'How will your friend manage to solve this problem?'
      },
      {
        id: 576,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'What ... will ... on a regular basis ?',
        sntc: 'Sənin dostların müntəzəm olaraq hansı kanallara baxacaqlar?',
        tr: 'What channels will your friends watch on a regular basis?'
      },
      {
        id: 577,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How many ... will ... feil ?',
        sntc: 'Ailəniz neçə yerə baş çəkəcək?',
        tr: 'How many places will your family visit?'
      },
      {
        id: 578,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How much ... will ... feil ... ?',
        sntc: 'Ona nə qədər pul borclu olacaqsan?',
        tr: 'How much money will you owe him?'
      },
      {
        id: 579,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər. Whose - kimin?',
        expl: 'Whose ... will ... feil ?',
        sntc: 'Dostun kimin təklifini qəbul edəcək?',
        tr: 'Whose offer will your friend take?'
      },
      {
        id: 580,
        descr: 'İfadəli feil: be away - olmamaq, uzaqda olmaq',
        expl: 'How long will ... be away ?',
        sntc: 'Sənin valideynlərin nə vaxta qədər olmayacaqlar?',
        tr: 'How long will your parents be away?'
      }
    ],
    [{
        id: 581,
        sntc: 'Siz bilirsiniz ki, biz ingilis dilini addım-addım öyrənirik',
        tr: 'You know that we learn English step by step',
        ch: 'You know well second that we learn English step by step'
      },
      {
        id: 582,
        sntc: 'Mən bu çempionatda iştirak etməyəcəm',
        tr: "I won't take part in this championship",
        ch: "I won't takes that take part in this championship"
      },
      {
        id: 583,
        sntc: 'Mən yerimdə olmayacam',
        tr: 'I’ll be out',
        ch: 'I’ll be was We out'
      },
      {
        id: 584,
        sntc: 'Sizi daha çox motivasiya edən nədir?',
        tr: 'What motivates you more?',
        ch: 'What motivates me much you more'
      },
      {
        id: 585,
        sntc: 'Hökümət orqanları bir şey etməli olacaq',
        tr: 'The authorities will need to do something',
        ch: 'The authorities want all will need to do something'
      },
      {
        id: 586,
        sntc: 'Məncə, mən avtobusu qaçıracağam',
        tr: 'I think I’ll miss the bus',
        ch: 'I think know misses I’ll miss the bus'
      },
      {
        id: 587,
        sntc: 'Dostum və mən idmana daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to sport',
        ch: 'My friend and I brother We will devote more free time to sport'
      },
      {
        id: 588,
        sntc: 'İdeya maraqlıdır?',
        tr: 'Is the idea interesting?',
        ch: 'Is the idea think realy interesting'
      },
      {
        id: 589,
        sntc: 'Bu, bəzi digər amillərdən asılı olacaq',
        tr: "It'll depend on some other factors",
        ch: "It'll depend same another on some other factors"
      },
      {
        id: 590,
        sntc: 'Dostum və mən ingilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English',
        ch: 'My friend and sister I will devote more free time to English'
      }
    ],
    [{
        id: 591,
        sntc: 'Sən bilirsən ki, bu sonuncu yerdə deyil',
        tr: "You know it isn't in the last place",
        ch: "You know it is at isn't in the last place"
      },
      {
        id: 592,
        sntc: 'Kitab elə maraqlıdır?',
        tr: 'Is the book so interesting?',
        ch: 'Is the book so such a interesting'
      },
      {
        id: 593,
        sntc: 'Onlar sənin yoxluğuna fikir verəcəklər',
        tr: 'They’ll notice your absence',
        ch: 'They’ll notice we present your absence'
      },
      {
        id: 594,
        sntc: 'Tələbələr bu cür məşqləri nə sıxlıqda edəcəklər?',
        tr: 'How often will the students do this kind of exercises?',
        ch: 'How often will these the students do this kind of exercises'
      },
      {
        id: 595,
        sntc: 'Mənim bir bacım var',
        tr: 'I have a sister',
        ch: 'I have a an has sister'
      },
      {
        id: 596,
        sntc: 'Nəticəniz sizi qane edəcək',
        tr: "You'll be satisfied with your result",
        ch: "You'll be satisfied ready with your our result"
      },
      {
        id: 597,
        sntc: 'Bu ən yaxşı kitabdır',
        tr: "It's the best book",
        ch: "It's the best worst book lesson"
      },
      {
        id: 598,
        sntc: 'Bu dərs onun xoşuna gələcək',
        tr: 'She’ll like this lesson',
        ch: 'She’ll like this these need lesson'
      },
      {
        id: 599,
        sntc: 'Oğlan bu imtahanı nəhayət verəcək?',
        tr: 'Will the boy pass this exam at last?',
        ch: 'Will the boy price lasted pass this exam at last'
      },
      {
        id: 600,
        sntc: 'O, səni manipulyasiya edir',
        tr: 'She manipulates you',
        ch: 'She want consider manipulate you'
      }
    ],
    [{
        id: 601,
        sntc: 'Onun qardaşı davranışına görə üzr istəyəcək',
        tr: 'His brother will apologize for his behavior',
        ch: 'His brother will apologize for his regret need behavior'
      },
      {
        id: 602,
        sntc: 'Ailəniz neçə yerə baş çəkəcək?',
        tr: 'How many places will your family visit?',
        ch: 'How many places will your sister family visit'
      },
      {
        id: 603,
        sntc: 'Sən adətən boş vaxtını necə keçirirsən?',
        tr: 'How do you usually spend your free time?',
        ch: 'How do you usually spend we What your free time'
      },
      {
        id: 604,
        sntc: 'Mən bu dərsləri öyrənməyə böyük məmnuniyyətlə davam edəcəyəm',
        tr: "I'II continue learning these lessons with great pleasure",
        ch: "I'II continue start this learning these lessons with great pleasure"
      },
      {
        id: 605,
        sntc: 'O, daha yaxşı yer tapacaq',
        tr: 'She’ll find a better place',
        ch: 'She’ll find a better place job here'
      },
      {
        id: 606,
        sntc: 'Mən bunu deməyi unutmaram',
        tr: "I won't forget to say it",
        ch: "I won't forget to say tell want it"
      },
      {
        id: 607,
        sntc: 'Mən İngilis dilini öyrənə biləcəyəm',
        tr: 'I’ll be able to learn English',
        ch: 'I’ll be able to should write learn English'
      },
      {
        id: 608,
        sntc: 'Bu çox faydalı nümunədir',
        tr: "It's a very useful example",
        ch: "It's a very an easy useful example"
      },
      {
        id: 609,
        sntc: 'Mən restorana gedəcəm',
        tr: 'I’ll go to the restaurant',
        ch: 'I’ll go to at museum the restaurant'
      },
      {
        id: 610,
        sntc: 'Bu onlarda heç maraq doğurmayacaq',
        tr: "It won't interest them at all",
        ch: "It won't interest him always them at all"
      }
    ],
    [{
        id: 611,
        sntc: 'Mən bu işi mümkün qədər tez bitirməyə çalışacam',
        tr: 'I’ll try to finish this work as soon as possible',
        ch: 'I’ll try to finish these this work as soon as possible'
      },
      {
        id: 612,
        sntc: 'Onun əri xəstəxanadadır',
        tr: 'Her husband is in hospital',
        ch: 'Her husband is are father in hospital'
      },
      {
        id: 613,
        sntc: 'Bu tapşırıqları etmək lazım olacaq',
        tr: "It'll be necessary to do these exercises",
        ch: "It'll be necessary need job to do these exercises"
      },
      {
        id: 614,
        sntc: 'Mən beş yüz dollar qazanacam',
        tr: 'I’ll earn five hundred dollars',
        ch: 'I’ll earn five hundred earns today dollars'
      },
      {
        id: 615,
        sntc: 'Xərcləri minimuma endirmək lazım olacaq',
        tr: "It'll be necessary to minimize the costs",
        ch: "It'll be necessary maximize an to minimize the costs"
      },
      {
        id: 616,
        sntc: 'Onlar hansı meyvə-tərəvəzləri orada yeyəcəklər?',
        tr: 'What fruit and vegetables will they eat there?',
        ch: 'What fruit and vegetables eats Who will they eat there'
      },
      {
        id: 617,
        sntc: 'Bu üsul yenidir?',
        tr: 'Is this method new?',
        ch: 'Is this method the old new'
      },
      {
        id: 618,
        sntc: 'Məncə, o, musiqidən zövq alacaq',
        tr: 'I think he’ll be fond of music',
        ch: 'I think he’ll be fond like thinks of music'
      },
      {
        id: 619,
        sntc: 'Bu hadisə harada baş tutacaq?',
        tr: 'Where will this event take place?',
        ch: 'Where will this event mistery takes take place'
      },
      {
        id: 620,
        sntc: 'Siz bir-birinizi tanıyırsınız?',
        tr: 'Do you know each other?',
        ch: 'Do you know each another understand other'
      }
    ],
    [{
        id: 621,
        sntc: 'Onlar bunu asanlıqla təmir etməyəcəklər',
        tr: "They won't repair it easily",
        ch: "They won't repair it hard want easily"
      },
      {
        id: 622,
        sntc: 'O, başqa yerdə yaşamaq istərdi',
        tr: "She'd like to live in another place",
        ch: "She'd like to love other live in another place"
      },
      {
        id: 623,
        sntc: 'O, bu sirri saxlayacaq?',
        tr: 'Will she keep this secret?',
        ch: 'Will she keep keeps sentence this secret'
      },
      {
        id: 624,
        sntc: 'Bu, problemin yeganə düzgün həlli olmayacaq',
        tr: "It won't be the only right solution to this problem",
        ch: "It won't be the only one left right solution to this problem"
      },
      {
        id: 625,
        sntc: 'Əminəm ki, bu nəticə çox böyük bir uğur olacaq',
        tr: "I'm sure this result will be a huge success",
        ch: "I'm sure this result will small an be a huge success"
      },
      {
        id: 626,
        sntc: 'Onun sözləri bizi ruhlandırır',
        tr: 'Her words inspire us',
        ch: 'Her words inspire we sentence us'
      },
      {
        id: 627,
        sntc: 'Onlar ticarət uğuru qazanacaqlar?',
        tr: 'Will they have a commercial success?',
        ch: 'Will they have a has politic commercial success'
      },
      {
        id: 628,
        sntc: 'Oğlanlar hər şeyi belə tez yadda saxlamayacaq',
        tr: "The boys won't remember everything so quickly",
        ch: "The boys won't remember everything know boy so quickly"
      },
      {
        id: 629,
        sntc: 'Mənim müdirim bunu təkid etməyəcək',
        tr: "My boss won't insist on it",
        ch: "My boss won't insist will mother on it"
      },
      {
        id: 630,
        sntc: 'Bu ən yaxşı nəticə olmayacaq',
        tr: "It won't be the best result",
        ch: "It won't be will worst the best result"
      }
    ],
    [{
        id: 631,
        sntc: 'Onun müəllimi ne cür nümunələr verir?',
        tr: 'What kind of examples does his teacher give?',
        ch: 'What kind of examples does his teacher take give'
      },
      {
        id: 632,
        sntc: 'O, mənə beş yüz dollar borclu olacaq',
        tr: 'He’ll owe me five hundred dollars',
        ch: 'He’ll owe me five hundred six owes dollars'
      },
      {
        id: 633,
        sntc: 'O, bunu necə alacaq?',
        tr: 'How will he manage to buy it?',
        ch: 'How will he manage to buy borrow here it'
      },
      {
        id: 634,
        sntc: 'Bu hasisə vacib görünür?',
        tr: 'Does this event seem important?',
        ch: 'Does this event seem useful useless important'
      },
      {
        id: 635,
        sntc: 'Çox maraqlı fikirdir',
        tr: "It's a very interesting idea",
        ch: "It's a very much many interesting idea"
      },
      {
        id: 636,
        sntc: 'Tələbələr buna görə üzr istəyəcəklər',
        tr: 'The students will apologize for it',
        ch: 'The students will apologize teacher for it'
      },
      {
        id: 637,
        sntc: 'O, kinoteatra nə sıxlıqda gedir?',
        tr: 'How often does she go to the cinema?',
        ch: 'How often much does do she go to the cinema'
      },
      {
        id: 638,
        sntc: 'Mən sabah axşam azad olacam',
        tr: 'I’ll be free tomorrow evening',
        ch: 'I’ll be busy yesterday free tomorrow evening'
      },
      {
        id: 639,
        sntc: 'Bu sənə heç bir kömək etməyəcək',
        tr: "It won't help you at all",
        ch: "It won't help you always at all"
      },
      {
        id: 640,
        sntc: 'Sən vaxtını və pulunu boşa çıxaracaqsan',
        tr: 'You’ll waste your time and money',
        ch: 'You’ll waste your time and spend money many'
      }
    ],
    [{
        id: 641,
        sntc: 'Mən İngilis dilində səlis və düzgün danışmaq istəyirəm',
        tr: 'I want to speak English fluently and correctly',
        ch: 'I want to speak English fluently incorrectly say and correctly'
      },
      {
        id: 642,
        sntc: 'Bu əsil sensasiya olacaq',
        tr: "It'll be a real sensation",
        ch: "It'll be a real really event sensation"
      },
      {
        id: 643,
        sntc: 'Mənim kifayət qədər pulum var?',
        tr: 'Do I have enough money?',
        ch: 'Do I have enough has Does money'
      },
      {
        id: 644,
        sntc: 'Mən bunu müzakirə etməməyə çalışacam',
        tr: 'I’ll try not to discuss it',
        ch: 'I’ll try not tell say to discuss it'
      },
      {
        id: 645,
        sntc: 'Kimlər maraqlanacaq?',
        tr: 'Who will be interested?',
        ch: 'Who will What interest be interested'
      },
      {
        id: 646,
        sntc: 'Bu sənin son şansın olacaq',
        tr: "It'll be your last chance",
        ch: "It'll be our second your last chance"
      },
      {
        id: 647,
        sntc: 'Mən bunu inkar etmərəm',
        tr: "I won't deny it",
        ch: "I won't agree He deny it"
      },
      {
        id: 648,
        sntc: 'Mən sənin uğurlarınla fəxr edərəm',
        tr: 'I’ll be proud of your success',
        ch: 'I’ll be proud worry want of your success'
      },
      {
        id: 649,
        sntc: 'Mən bunu edə bilərdim',
        tr: 'I could do it',
        ch: 'I could do does can it'
      },
      {
        id: 650,
        sntc: 'Mən çalışaram bütün pulları xərcləməyim',
        tr: 'I’ll try not to spend all the money',
        ch: 'I’ll try not these waste to spend all the money'
      }
    ],
    [{
        id: 651,
        descr: 'İngilis dilində feillər qaydalı (regular) və qaydasız (irregular) olmaqla iki qrupa ayrılır. Qaydali feillərin kecmiş zamanını duzəldərkən onun sonuna –d (–ed) şəkilçisi əlavə olunur. Listen to - qulaq asmaq, dinləmək',
        expl: 'mübtəda ... feil ...',
        sntc: 'Mən tez-tez musiqi dinləyirdim',
        tr: 'I often listened to music'
      },
      {
        id: 652,
        descr: 'want - istəmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən sənə kömək etmək istəyirdim',
        tr: 'I wanted to help you'
      },
      {
        id: 653,
        descr: 'switch - başqa cəhətə çevirmək. switch on - qoşmaq, işə salmaq; switch off - cərəyanı aralamaq, söndürmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən radionu söndürdüm',
        tr: 'I switched off the radio'
      },
      {
        id: 654,
        descr: 'walk - getmək, piyada gəzmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz parka piyada getdik',
        tr: 'We walked to the park'
      },
      {
        id: 655,
        descr: 'move - hərəkət etmək, köçmək, hərəkət elətdirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz Londona köçdük',
        tr: 'We moved to London'
      },
      {
        id: 656,
        descr: 'learn - oxumaq, öyrənmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bu dərsi öyrəndi',
        tr: 'He learned this lesson'
      },
      {
        id: 657,
        descr: 'look at - baxmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar ona baxdılar',
        tr: 'They looked at her'
      },
      {
        id: 658,
        descr: 'need - tələbat, ehtiyac; ehtiyacı olmaq. Idiom: get in touch - əlaqə qurmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mənim onunla əlaqə qurmağa ehtiyacım var idi',
        tr: 'I needed to get in touch with her'
      },
      {
        id: 659,
        descr: 'start - başlamaq',
        expl: 'mübtəda started feil+ing ...',
        sntc: 'Mən iki il əvvəl İngilis dilini öyrənməyə başlamışam',
        tr: 'I started learning English two years ago'
      },
      {
        id: 660,
        descr: 'happen - baş vermək, olmaq; happen to - rast gəlmək, başına gəlmək',
        expl: 'mübtəda feil ...',
        sntc: 'Bu bizim başımıza gəldi',
        tr: 'It happened to us',
      }
    ],
    [{
        id: 661,
        descr: 'revise - yenidən baxmaq, təkrarlamaq. Sabit ifadə: from time to time - vaxtdan-vaxta',
        expl: 'mübtəda feil ... from time to time',
        sntc: 'Mən bu dərsi vaxtdan-vaxta tekrarlayırdım',
        tr: 'I revised this lesson from time to time'
      },
      {
        id: 662,
        descr: 'repeat - təkrar etmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, onun sözlərini təkrarladı',
        tr: 'He repeated his words'
      },
      {
        id: 663,
        descr: 'add - əlavə etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çox vacib bir şeyi əlavə etdim',
        tr: 'I added a very important thing'
      },
      {
        id: 664,
        descr: 'enter - daxil olmaq, girmək; qəbul olunmaq (ali məktəbə)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çox nüfuzlu bir universitetə qəbul oldum',
        tr: 'I entered a very prestigious university'
      },
      {
        id: 665,
        descr: 'receive - almaq; qəbul etmək (qonaq)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu məktubu aldım',
        tr: 'I received this letter'
      },
      {
        id: 666,
        descr: 'marry - evlənmək, ərə getmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, onunla evləndi',
        tr: 'He married her'
      },
      {
        id: 667,
        descr: 'change - dəyişmək, dəyişdirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Bu mənim həyatımı deyişdi',
        tr: 'It changed my life'
      },
      {
        id: 668,
        descr: 'continue - davam etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu dərsləri öyrənməyə davam etdim',
        tr: 'I continued learning these lessons'
      },
      {
        id: 669,
        descr: 'provide - təmin etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar çox yaxşı şərait təmin etdilər',
        tr: 'They provided very good conditions'
      },
      {
        id: 670,
        descr: 'consider - həsab etmək; düşünmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu əhəmiyyətsiz hesab edirdi',
        tr: 'He considered it unimportant'
      }
    ],
    [{
        id: 671,
        descr: 'jump - atılmaq, tullanmaq; atılma, tullanma. Over - üstündən, üzərindən, üstünə, üzərinə',
        expl: 'mübtəda feil ...',
        sntc: 'O, hasarın üstündən tullandı',
        tr: 'He jumped over the fence'
      },
      {
        id: 672,
        descr: 'insist on - təkid etmək, israr etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu təkid etdim',
        tr: 'I insisted on i\u202Et'
      },
      {
        id: 673,
        descr: 'depend on - asılı olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Nəticə hər birimizdən asılı idi',
        tr: 'The result depended on each of us'
      },
      {
        id: 674,
        descr: 'stay - bir yerdə qalmaq, dayanmaq; qalma, dayanma. Sabit ifadə: the day before yesterday - sırağagün',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar sırağagün evdə qalmışdılar',
        tr: 'They stayed at home the day before yesterday'
      },
      {
        id: 675,
        descr: 'suggest - təklif etmək, məsləhət görmək',
        expl: 'mübtəda suggested feil+ing ...',
        sntc: 'Onlar kinoteatra getməyi təklif etdilər',
        tr: 'They suggested going to the cinema'
      },
      {
        id: 676,
        descr: 'behave - özünü aparmaq, davranmaq',
        expl: '... mübtəda feil ...',
        sntc: 'Oğlanlar özlərini yaxşı aparırdılar',
        tr: 'The boy\u202Es behaved well'
      },
      {
        id: 677,
        descr: 'regret - təəsüf etmək, peşman olmaq; təəsüf hissi, peşmanlıq',
        expl: '... mübtəda feil ...',
        sntc: 'Onun əri buna görə peşman oldu',
        tr: 'Her husban\u202Ed regretted i\u202Et'
      },
      {
        id: 678,
        descr: 'tend - meyili olmaq; meyil etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən elə düşünməyə meyilli idim',
        tr: 'I tended to think so'
      },
      {
        id: 679,
        descr: 'translate - tərcümə etmək, çevirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu mətni İngilis dilinə tərcümə etdim',
        tr: 'I translated this text into English'
      },
      {
        id: 680,
        descr: 'fill - doldurmaq, tamamlamaq. İfadəli feil: fill in - doldurmaq (sənədi)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu sənədləri doldurdum',
        tr: 'I filled in these documents'
      }
    ],
    [{
        id: 681,
        descr: 'delete - silmək, məhv etmək. Sabit ifadə: by mistake - səhvən',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu faylı səhvən sildim',
        tr: 'I deleted this file by mistake'
      },
      {
        id: 682,
        descr: 'dividə - bölmək, ayırmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çörəyi üç hissəyə bölmüşdüm',
        tr: 'I divided the bread into three parts'
      },
      {
        id: 683,
        descr: 'belonge to - məxsus olmaq',
        expl: '... mübtəda feil ...',
        sntc: 'Ev onlara məxsus idi',
        tr: 'The hous\u202Ee belonged to them'
      },
      {
        id: 684,
        descr: 'concentrate on - cəmləşmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz bu mövzuda cəmləşmişdik',
        tr: 'We concentrated on this subject'
      },
      {
        id: 685,
        descr: 'accuse - ittiham etmək; günahlandırmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar onu bu cinayətdə ittiham etdilər',
        tr: 'They accused him of this crime'
      },
      {
        id: 686,
        descr: 'last - davam etmək, çəkmək',
        expl: '... mübtəda feil ...',
        sntc: 'Dərs təxminən bir saat davam etdi',
        tr: 'The lesson lasted for about an hour'
      },
      {
        id: 687,
        descr: 'compete - rəqabətə girmək, yarışmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar bu şirkətlə rəqabət apardılar',
        tr: 'They competed with this company'
      },
      {
        id: 688,
        descr: 'wash - yumaq, yuyunmaq. İfadəli feil: wash up - qab-qacaq yumaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, qabları yuyub',
        tr: 'She washed up the dishes'
      },
      {
        id: 689,
        descr: 'calculate - hesablamaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, xərcləri hesabladı',
        tr: 'He calculated the costs'
      },
      {
        id: 690,
        descr: 'earn - qazanmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, beş min dollardan çox pul qazandı',
        tr: 'He earned more than five thousand dollars'
      }
    ],
    [{
        id: 691,
        descr: 'remember - yadda saxlamaq, xatırlamaq, yada salmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çox vacib bir şeyi xatırladım',
        tr: 'I remembered one very important thing'
      },
      {
        id: 692,
        descr: 'inform (of) - məlumat vermək, xəbər vermək',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar bu problem ilə bağlı bizə məlumat verdilər',
        tr: 'They informed us of this problem'
      },
      {
        id: 693,
        descr: 'influence - təsir etmək; təsir',
        expl: 'mübtəda feil ...',
        sntc: 'Bizim müəllimimiz mənə çox böyük təsir göstərib',
        tr: 'Our teacher influenced me greatly'
      },
      {
        id: 694,
        descr: 'disagree - razılaşmamaq. Sabit söz birləşməsi: for no reason - heç bir səbəb olmadan',
        expl: 'mübtəda feil ... for no reason',
        sntc: 'Mən heç bir səbəb olmadan onlarla razılaşmadım',
        tr: 'I disagreed with them for no reason'
      },
      {
        id: 695,
        descr: 'promise - söz vermək, vəd etmək; vəd',
        expl: 'mübtəda feil ...',
        sntc: 'O, sözünün üstündə duracağına söz verdi',
        tr: 'He promised to keep his word'
      },
      {
        id: 696,
        descr: 'record - yazmaq, qeyd etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz onun danışığını yazmışdıq',
        tr: 'We recorded his speech'
      },
      {
        id: 697,
        descr: 'hate - nifrət etmək',
        expl: 'mübtəda ... hated feil+ing ...',
        sntc: 'Mən bunu etməkdən həqiqətən nifrət edirdim',
        tr: 'I really hated doing i\u202Et'
      },
      {
        id: 698,
        descr: 'share - paylaşmaq, bölüşmək, şərik olmaq; pay, hissə',
        expl: 'mübtəda feil ...',
        sntc: 'Mən biliyimi səninlə bölüşdüm',
        tr: 'I shared my knowledge with you'
      },
      {
        id: 699,
        descr: 'ask - soruşmaq, xahiş etmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, mənə bir-iki sual verdi',
        tr: 'He asked me a couple of questions'
      },
      {
        id: 700,
        descr: 'smoke - siqarət çəkmək, tüstüləmək; çəkmə, çəkilmə (siqarət, papiros)',
        expl: 'mübtəda feil ...',
        sntc: 'O, çox nadir hallarda siqaret çəkirdi',
        tr: 'He smoked quite rarely'
      }
    ],
    [{
        id: 701,
        sntc: 'O, bu mənzilin sahibi idi',
        tr: 'He owned this flat',
        ch: 'He owned this house need flat'
      },
      {
        id: 702,
        sntc: 'Mən nəhayət ki bunu xatırladım',
        tr: 'I remembered it at last',
        ch: 'I remembered You know it at last'
      },
      {
        id: 703,
        sntc: 'Mən sənin məsləhətinə əməl etdim',
        tr: 'I followed your advice',
        ch: 'I followed need our your advice'
      },
      {
        id: 704,
        sntc: 'Onlar bu şərtləri təmin etdilər',
        tr: 'They provided these conditions',
        ch: 'They provided these We underestand conditions'
      },
      {
        id: 705,
        sntc: 'Mən tortu üç hissəyə bölmüşdüm',
        tr: 'I divided the cake into three parts',
        ch: 'I divided the cake bread an into three parts'
      },
      {
        id: 706,
        sntc: 'Mən iki il əvvəl ingilis dilini öyrənməyə başladım',
        tr: 'I started learning English two years ago',
        ch: 'I started learning learn yesterday English two years ago'
      },
      {
        id: 707,
        sntc: 'Onlar çox bahalı mallar istehsal etdilər',
        tr: 'They produced very expensive goods',
        ch: 'They produced things much very expensive goods'
      },
      {
        id: 708,
        sntc: 'Onlar qəflətən yoxa çıxdılar',
        tr: 'They disappeared suddenly',
        ch: 'They disappeared always sometimes suddenly'
      },
      {
        id: 709,
        sntc: 'Mən vaxt itirməmək qərarına gəldim',
        tr: 'I decided not to waste time',
        ch: 'I decided spend money not to waste time'
      },
      {
        id: 710,
        sntc: 'Siz bu mövzunu çox aydın izah etdiniz',
        tr: 'You explained this topic very clearly',
        ch: 'You explained much good this topic very clearly'
      }
    ],
    [{
        id: 711,
        sntc: 'Mən avtobusu qaçırdım',
        tr: 'I missed the bus',
        ch: 'I missed car these the bus'
      },
      {
        id: 712,
        sntc: 'Onlar bu məlumatı bizimlə paylaşdılar',
        tr: 'They shared this information with us',
        ch: 'They shared this knowledge by information with us'
      },
      {
        id: 713,
        sntc: 'O, bu sınaqdan keçmədi',
        tr: 'She failed this test',
        ch: 'She failed passed the this test'
      },
      {
        id: 714,
        sntc: 'Mən çox səylə oxuyurdum',
        tr: 'I studied very hard',
        ch: 'I studied very much hard'
      },
      {
        id: 715,
        sntc: 'Onlar ona güldülər',
        tr: 'They laughed at him',
        ch: 'They laughed them smiled at him'
      },
      {
        id: 716,
        sntc: 'Mən imtahana hazırlaşdım',
        tr: 'I prepared for the exam',
        ch: 'I prepared for that ready the exam'
      },
      {
        id: 717,
        sntc: 'O, mənimlə qismən razılaşdı',
        tr: 'She partly agreed with me',
        ch: 'She partly absolutely You agreed with me'
      },
      {
        id: 718,
        sntc: 'Mən bunu etməkdən nifrət edirdim',
        tr: 'I hated doing it',
        ch: 'I hated enjoy know doing it'
      },
      {
        id: 719,
        sntc: 'O, onun xarici görünüşünü təsvir etdi',
        tr: 'He described her appearance',
        ch: 'He described they tell her appearance'
      },
      {
        id: 720,
        sntc: 'Biz doğru cavabı tapdıq',
        tr: 'We guessed the correct answer',
        ch: 'We guessed wrong this the correct answer'
      }
    ],
    [{
        id: 721,
        sntc: 'Onlar binanı dağıtdılar',
        tr: 'They destroyed the building',
        ch: 'They destroyed constructed house the building'
      },
      {
        id: 722,
        sntc: 'O, bu faktı inkar etdi',
        tr: 'He denied this fact',
        ch: 'He denied allow the this fact'
      },
      {
        id: 723,
        sntc: 'Əsgərlər onlara hücum etdi',
        tr: 'The soldiers attacked them',
        ch: 'The soldiers defended us attacked them'
      },
      {
        id: 724,
        sntc: 'Ev onlara məxsus idi',
        tr: 'The house belonged to them',
        ch: 'The house belonged me building to them'
      },
      {
        id: 725,
        sntc: 'Bu məndən asılı idi',
        tr: 'It depended on me',
        ch: 'It depended us agree on me'
      },
      {
        id: 726,
        sntc: 'Mən formanı doldurmuşam',
        tr: 'I filled in the form',
        ch: 'I filled in these forms the form'
      },
      {
        id: 727,
        sntc: 'O, əsgərlərə bunu etməyə əmr verdi',
        tr: 'He ordered the soldiers to do it',
        ch: 'He ordered asked made the soldiers to do it'
      },
      {
        id: 728,
        sntc: 'Mən hər şeyi yoxlamağa söz verdim',
        tr: 'I promised to check everything',
        ch: 'I promised allow nothing to check everything'
      },
      {
        id: 729,
        sntc: 'Mən bu əşyanı online olaraq sifariş etdim',
        tr: 'I ordered this thing online',
        ch: 'I ordered this issue offline thing online'
      },
      {
        id: 730,
        sntc: 'Mən öz nöqteyi-nəzərimi ifadə etdim',
        tr: 'I expressed my point of view',
        ch: 'I expressed know We my point of view'
      }
    ],
    [{
        id: 731,
        sntc: 'O, beş min dollardan çox pul qazandı',
        tr: 'He earned more than five thousand dollars',
        ch: 'He earned more six dollar than five thousand dollars'
      },
      {
        id: 732,
        sntc: 'Dərs bir saat davam etdi',
        tr: 'The lesson lasted for an hour',
        ch: 'The lesson last two lasted for an hour'
      },
      {
        id: 733,
        sntc: 'Bu onların hər birini şoka saldı',
        tr: 'It shocked each of them',
        ch: 'It shocked us surprised each of them'
      },
      {
        id: 734,
        sntc: 'Biz bu problemi nəhayət həll etdik',
        tr: 'We solved this problem at last',
        ch: 'We solved regretted this problem at last'
      },
      {
        id: 735,
        sntc: 'O, hər şeyə görə üzr istədi',
        tr: 'She apologized for everything',
        ch: 'She apologized nothing smiled for everything'
      },
      {
        id: 736,
        sntc: 'Dərs iyirmi dəqiqədən çox davam etdi',
        tr: 'The lesson lasted for more than twenty minutes',
        ch: 'The lesson lasted thirty hours for more than twenty minutes'
      },
      {
        id: 737,
        sntc: 'Onun müdiri onu çox vaxt tənqid edirdi',
        tr: 'Her boss often criticized her',
        ch: 'Her boss often criticized them always her'
      },
      {
        id: 738,
        sntc: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ',
        tr: 'We communicated with each other from time to time',
        ch: 'We communicated with each speak other from time to time'
      },
      {
        id: 739,
        sntc: 'Mən bütün mətni tərcümə etdim',
        tr: 'I translated all the text',
        ch: 'I translated this repeated all the text'
      },
      {
        id: 740,
        sntc: 'O, davranışına görə üzr istədi',
        tr: 'He apologized for his behavior',
        ch: 'He apologized for words We his behavior'
      }
    ],
    [{
        id: 741,
        sntc: 'O, küçədən keçdi',
        tr: 'He crossed the street',
        ch: 'He crossed horse road the street'
      },
      {
        id: 742,
        sntc: 'Onlar birlikdə rəqs etdilər',
        tr: 'They danced together',
        ch: 'They danced always We together'
      },
      {
        id: 743,
        sntc: 'Oğlan onun sözünü kəsdi',
        tr: 'The boy interrupted her',
        ch: 'The boy girl smiled interrupted her'
      },
      {
        id: 744,
        sntc: 'O, bu saytı bizə tövsiyə etdi',
        tr: 'He recommended this website to us',
        ch: 'He recommended the we this website to us'
      },
      {
        id: 745,
        sntc: 'O, elə çox çətinliklər yaşayıb',
        tr: 'He experienced so many difficulties',
        ch: 'He experienced an such so many difficulties'
      },
      {
        id: 746,
        sntc: 'Bu xəbər bizi təəccübləndirdi',
        tr: 'This news surprised us',
        ch: 'This news looked the surprised us'
      },
      {
        id: 747,
        sntc: 'O, sonradan buna görə peşman oldu',
        tr: 'He regretted it later',
        ch: 'He regretted about soon it later'
      },
      {
        id: 748,
        sntc: 'O, iş yoldaşına etibar edirdi',
        tr: 'He trusted his business partner',
        ch: 'He trusted her wife his business partner'
      },
      {
        id: 749,
        sntc: 'O, bu müğənniyə heyran oldu',
        tr: 'She admired this singer',
        ch: 'She admired this actor We singer'
      },
      {
        id: 750,
        sntc: 'Mən bu insana heyran oldum',
        tr: 'I admired this person',
        ch: 'I admired these people this person'
      }
    ],
    [{
        id: 751,
        sntc: 'O, Amerikanı kəşf etdi',
        tr: 'He discovered America',
        ch: 'He discovered open now America'
      },
      {
        id: 752,
        sntc: 'O, bizi üç qrupa böldü',
        tr: 'He divided us into three groups',
        ch: 'He divided us four team into three groups'
      },
      {
        id: 753,
        sntc: 'Mən İngilis dilində danışmağı təcrübə etdim',
        tr: 'I practiced speaking English',
        ch: 'I practiced tell always speaking English'
      },
      {
        id: 754,
        sntc: 'Orada tez-tez qar yağırdı',
        tr: 'It often snowed there',
        ch: 'It often rained here snowed there'
      },
      {
        id: 755,
        sntc: 'O, buna çox qəribə reaksiya verdi',
        tr: 'He reacted to it very strangely',
        ch: 'He reacted well We to it very strangely'
      },
      {
        id: 756,
        sntc: 'Polis oğrunu həbs etdi',
        tr: 'The police arrested the thief',
        ch: 'The police arrested this the caught thief'
      },
      {
        id: 757,
        sntc: 'O, çox böyük məbləğdə pul sərmayə qoydu',
        tr: 'He invested such a big sum of money',
        ch: 'He invested an such a big sum of money'
      },
      {
        id: 758,
        sntc: 'Bu ev ona məxsus idi',
        tr: 'This house belonged to him',
        ch: 'This house flat belonged to him'
      },
      {
        id: 759,
        sntc: 'Biz hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed everyone good everything very thoroughly'
      },
      {
        id: 760,
        sntc: 'O, adətən axşam dincəlirdi',
        tr: 'He usually relaxed in the evening',
        ch: 'He usually morning always relaxed in the evening'
      }
    ],
    [{
        id: 761,
        sntc: 'O, kinoya baxdı',
        tr: 'He watched the movie',
        ch: 'He watched video this the movie'
      },
      {
        id: 762,
        sntc: 'O, çox az pul sərmayə qoydu',
        tr: 'He invested too little money',
        ch: 'He invested too little much You money'
      },
      {
        id: 763,
        sntc: 'Onlar onu çox ağır cinayətdə ittiham etdilər',
        tr: 'They accused him of a very serious crime',
        ch: 'They accused us bad him of a very serious crime'
      },
      {
        id: 764,
        sntc: 'O, xaricdə təhsil alıb',
        tr: 'He studied abroad',
        ch: 'He studied in country abroad'
      },
      {
        id: 765,
        sntc: 'Mən öz fikrimi ifadə etdim',
        tr: 'I expressed my opinion',
        ch: 'I expressed my knowledge your opinion'
      },
      {
        id: 766,
        sntc: 'Mən imtahana hazırlaşdım',
        tr: 'I prepared for the exam',
        ch: 'I prepared test reacted for the exam'
      },
      {
        id: 767,
        sntc: 'Biz bəzi gözlənilməz problemlərlə üzləşdik',
        tr: 'We faced some unexpected problems',
        ch: 'We faced any hard some unexpected problems'
      },
      {
        id: 768,
        sntc: 'Onlar kəndi dağıtdılar',
        tr: 'They destroyed the village',
        ch: 'They destroyed city country the village'
      },
      {
        id: 769,
        sntc: 'O, bunu çox gec xatırladı',
        tr: 'He remembered it too late',
        ch: 'He remembered quickly fast it too late'
      },
      {
        id: 770,
        sntc: 'Mən buranın yaxınlığında park etdim',
        tr: 'I parked near this place',
        ch: 'I parked near far village this place'
      }
    ],
    [{
        id: 771,
        sntc: 'Mən onun bütün suallarına cavab verdim',
        tr: 'I answered all her questions',
        ch: 'I answered all her question asked questions'
      },
      {
        id: 772,
        sntc: 'Onlar tələsdilər',
        tr: 'They hurried up',
        ch: 'They hurried fast go up'
      },
      {
        id: 773,
        sntc: 'Mən ingilis dilini burada öyrənməyə davam etdim',
        tr: 'I continued learning English here',
        ch: 'I continued learn there learning English here'
      },
      {
        id: 774,
        sntc: 'Bu ev ona məxsus idi',
        tr: 'This house belonged to him',
        ch: 'This house apartment them belonged to him'
      },
      {
        id: 775,
        sntc: 'O, mənə uğurlar arzuladı',
        tr: 'He wished me good luck',
        ch: 'He wished bad all me good luck'
      },
      {
        id: 776,
        sntc: 'Mən buradan bir az aralıda park etdim',
        tr: 'I parked not far from here',
        ch: 'I parked very not far from here'
      },
      {
        id: 777,
        sntc: 'Onlar bu şirkətlə rəqabət apardılar',
        tr: 'They competed with this company',
        ch: 'They competed team with this company'
      },
      {
        id: 778,
        sntc: 'Onun təklifi çox maraqlı səsləndi',
        tr: 'His offer sounded very interesting',
        ch: 'His offer seems little sounded very interesting'
      },
      {
        id: 779,
        sntc: 'Biz hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed something everything very thoroughly'
      },
      {
        id: 780,
        sntc: 'O, onunla evləndi',
        tr: 'He married her',
        ch: 'He married invited her'
      }
    ],
    [{
        id: 781,
        sntc: 'O, binaya daxil oldu',
        tr: 'He entered the building',
        ch: 'He entered house this the building'
      },
      {
        id: 782,
        sntc: 'Onlar ona nəzarət etdilər',
        tr: 'They controlled him',
        ch: 'They us looked controlled him'
      },
      {
        id: 783,
        sntc: 'O döndü və ona gülümsədi',
        tr: 'He turned and smiled at her',
        ch: 'He turned looked us and smiled at her'
      },
      {
        id: 784,
        sntc: 'Onlar günahsız insanları öldürüblər',
        tr: 'They killed innocent people',
        ch: 'They killed well person innocent people'
      },
      {
        id: 785,
        sntc: 'Polis onları həbs etdi',
        tr: 'The police arrested them',
        ch: 'The police punished caught arrested them'
      },
      {
        id: 786,
        sntc: 'Onlar cinayətkarları cəzalandırdılar',
        tr: 'They punished the criminals',
        ch: 'They punished thiefs the criminals'
      },
      {
        id: 787,
        sntc: 'Onlar binanı dağıtdılar',
        tr: 'They destroyed the building',
        ch: 'They destroyed spoiled the building'
      },
      {
        id: 788,
        sntc: 'O, yenə ona zəng etdi',
        tr: 'He called her again',
        ch: 'He called her soon us again'
      },
      {
        id: 789,
        sntc: 'Bu bizi çox təəccübləndirdi',
        tr: 'It surprised us greatly',
        ch: 'It surprised a little us greatly'
      },
      {
        id: 790,
        sntc: 'O, müxtəlif şeyləri müzakirə etmək üçün tez-tez mənə zəng edirdi',
        tr: 'She often called me to discuss different things',
        ch: 'She often tell called me to discuss different things'
      }
    ],
    [{
        id: 791,
        sntc: 'O, bu sənədi İngilis dilindən Azərbaycan dilinə tərcümə edib',
        tr: 'He translated this document from English into Azerbaijani',
        ch: 'He translated transfered the this document from English into Azerbaijani'
      },
      {
        id: 792,
        sntc: 'Mən çox vacib bir şey əlavə etdim',
        tr: 'I added a very important thing',
        ch: 'I added an useful a very important thing'
      },
      {
        id: 793,
        sntc: 'Onlar kinoteatra getməyi təklif etdilər',
        tr: 'They suggested going to the cinema',
        ch: 'They museum go suggested going to the cinema'
      },
      {
        id: 794,
        sntc: 'O, ötən il onunla evləndi',
        tr: 'He married her last year',
        ch: 'He married past week her last year'
      },
      {
        id: 795,
        sntc: 'Bu problem məni həqiqətən narahat edirdi',
        tr: 'This problem really worried me',
        ch: 'This problem happy problems really worried me'
      },
      {
        id: 796,
        sntc: 'Biz çox intensiv təlim keçirdik',
        tr: 'We trained very intensively',
        ch: 'We trained badly very intensively'
      },
      {
        id: 797,
        sntc: 'O, bu universitetə qəbul oldu',
        tr: 'She entered this university',
        ch: 'She entered the We this university'
      },
      {
        id: 798,
        sntc: 'Mən həmin problemi təsvir etdim',
        tr: 'I described that problem',
        ch: 'I described this that problems problem'
      },
      {
        id: 799,
        sntc: 'O, ona kömək etməyə çalışdı, lakin uğur qazanmadı',
        tr: 'He tried to help her but without success',
        ch: 'He tried to help her small but without success'
      },
      {
        id: 800,
        sntc: 'Onun müdiri tez-tez onu tənqid edirdi',
        tr: 'Her boss often criticized her',
        ch: 'Her boss often always praise criticized her'
      }
    ],
    [{
        id: 801,
        descr: 'Ingilis dilində feillərin 3 forması mövcuddur. Birinci və ikinci formalar sadə zamanlarla, üçüncü forma isə Perfect qrup zamanlarla istifadə olunur. Qaydalı feillərdən fərqli olaraq qaydasız feillərin 2 və 3 formaların yaranması ümumi qaydaya riayət etmir və onları yalnız əzbərləmək lazımdır. have - had - had - sahib olmaq, malik olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onun çox maraqlı ideyası var idı',
        tr: 'He had a very interesting idea'
      },
      {
        id: 802,
        descr: 'make - made - made - etmək, düzəltmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bir kəşf etdi',
        tr: 'He made a discovery'
      },
      {
        id: 803,
        descr: 'do - did - done - etmək, düzəltmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu vaxtında etdim',
        tr: 'I did i\u202Et on time'
      },
      {
        id: 804,
        descr: 'be - was/were - been - olmaq. I/He/She/It was; You/We/They were',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çox məyus oldum',
        tr: 'I was bitterly disappointed'
      },
      {
        id: 805,
        descr: 'go - went - gone - getmək, yola düşmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən işə getdim',
        tr: 'I went to wor\u202Ek'
      },
      {
        id: 806,
        descr: 'can - could - bacarmaq. Can feilin məsdər forması yoxdur və onun əvəzinə be able to konstruksiyası istifadə olunur. Feilə -ing əlavə etdikdə o, davamedici formaya çevirilir. Məsələn: do - etmək, doing - edərək. listen - qulaq asmaq, listening - qulaq asaraq və s.',
        expl: 'mübtəda feil ...',
        sntc: 'Mən başqa işlərlə məşğul olaraq onu dinləyə bilərdim',
        tr: 'I could listen to her doing other things'
      },
      {
        id: 807,
        descr: 'get - got - got - əldə etmək, almaq. Idiom: a month - ayda, aylıq',
        expl: 'mübtəda feil ...',
        sntc: 'O, ayda iki min dollar alırdı',
        tr: 'He got two thousand dollars a month'
      },
      {
        id: 808,
        descr: 'know - knew - known - bilmək, tanımaq',
        expl: 'mübtəda feil ...',
        sntc: 'Biz bunu əvvəldən bilirdik',
        tr: 'We knew i\u202Et in the beginning'
      },
      {
        id: 809,
        descr: 'say - said - said - demək, söyləmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu çox sakitcə dedi',
        tr: 'He said i\u202Et very quietly'
      },
      {
        id: 810,
        descr: 'tell - told - told - demək, bildirmək, söyləmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, mənə bu şeyi demişdi',
        tr: 'She told me this thing'
      }
    ],
    [{
        id: 811,
        descr: 'speak - spoke - spoken - danışmaq, söhbət etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz dünən İngilis dilində danışdıq',
        tr: 'We spoke English yesterday'
      },
      {
        id: 812,
        descr: 'take - took - taken - götürmək, qəbul etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən onu özümüzlə apardım',
        tr: 'I took him with us'
      },
      {
        id: 813,
        descr: 'see - saw - seen - görmək. Sabit ifadə: for the first time - ilk dəfə',
        expl: 'mübtəda feil ...',
        sntc: 'Mən onu ilk dəfə gördüm',
        tr: 'I saw her for the first time'
      },
      {
        id: 814,
        descr: 'come - came - come - gəlmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, görüşə gəldi',
        tr: 'He came to the meeting'
      },
      {
        id: 815,
        descr: 'think - thought - thought - düşünmək',
        expl: 'mübtəda also feil ...',
        sntc: 'Mən də belə düşünürdüm',
        tr: 'I also thought so'
      },
      {
        id: 816,
        descr: 'feel - felt - felt - hiss etmək, duymaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən özümü çox xoşbəxt hiss edirdim',
        tr: 'I felt so happy'
      },
      {
        id: 817,
        descr: 'become - became - become - olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, məşhur oldu',
        tr: 'He became famous'
      },
      {
        id: 818,
        descr: 'put - put - put - qoymaq, yerləşdirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu stolun üstünə qoydum',
        tr: 'I put i\u202Et on the table'
      },
      {
        id: 819,
        descr: 'find - found - found - tapmaq; həsab etmək; kəşf etmək. İfadəli feil: find out - aşkar etmək, aydınlaşdırmaq, öyrənmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən nəhayət bütün həqiqəti aydınlaşdırdım',
        tr: 'I found out all the truth at last'
      },
      {
        id: 820,
        descr: 'give - gave - given - vermək. İfadəli feil: give up - tərgitmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, mənə bu tövsiyəni verdi',
        tr: 'He gave me this recommendation'
      }
    ],
    [{
        id: 821,
        descr: 'cost - cost - cost - qiyməti olmaq, xərci cıxmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Bu üç yüz dollara başa gəldi',
        tr: 'It cost three hundred dollars'
      },
      {
        id: 822,
        descr: 'mean - meant - meant - nəzərdə tutmaq, istəmək, niyyəti olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Bu aşağıdakıları nəzərdə tuturdu',
        tr: 'It meant the following'
      },
      {
        id: 823,
        descr: 'begin - began - begun - başlamaq',
        expl: '... mübtəda feil ...',
        sntc: 'Dərs vaxtında başladı',
        tr: 'The lesson began on time'
      },
      {
        id: 824,
        descr: 'show - showed - shown - göstərmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, parlaq nəticələr göstərdi',
        tr: 'He showed brilliant results'
      },
      {
        id: 825,
        descr: 'let - let - let - icazə vermək',
        expl: '... mübtəda feil ...',
        sntc: 'Onun valideynləri onu ora buraxdılar',
        tr: 'Her parents let her go there'
      },
      {
        id: 826,
        descr: 'leave - left - left - tərk etmək, çıxıb getmək, kÖçmək, yola düşmək, yaddan çıxarmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən Azərbaycanı tərk etdim',
        tr: 'I left Azerbaijan'
      },
      {
        id: 827,
        descr: 'hear - heard - heard - eşitmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu radioda eşitdim',
        tr: 'I heard i\u202Et on the radio'
      },
      {
        id: 828,
        descr: 'run - ran - run - qaçmaq. Sabit ifadə: run away - qaçmaq, qaçıb getmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz qaçıb getdik',
        tr: 'We ran away'
      },
      {
        id: 829,
        descr: 'bring - brought - brought - getirmək, səbəb olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, bu kitabı mənə getirdi',
        tr: 'He brought this book to me'
      },
      {
        id: 830,
        descr: 'write - wrote - written - yazmaq. İfadəli feil: write down - yazmaq, qeyd etmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu yazdı',
        tr: 'He wrote i\u202Et down'
      }
    ],
    [{
        id: 831,
        descr: 'read - read - read - oxumaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən çox maraqlı bir kitab oxudum',
        tr: 'I read such an interesting book'
      },
      {
        id: 832,
        descr: 'sit - sat - sat - oturmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən stulda oturdum',
        tr: 'I sat on a chair'
      },
      {
        id: 833,
        descr: 'stand - stood - stood - durmaq, dayanmaq, dözmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən ayağa qalxdım',
        tr: 'I stood up'
      },
      {
        id: 834,
        descr: 'lose - lost - lost - itirmək, məhrum olmaq, uduzmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, çantasını itirdi',
        tr: 'She lost her bag'
      },
      {
        id: 835,
        descr: 'pay - paid - paid - ödəmək, pulunu vermək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən onun yerinə pul ödədim',
        tr: 'I paid for her'
      },
      {
        id: 836,
        descr: 'meet - met - met - görüşmək, qarşılamaq, tanış olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar nəhayət görüşdülər',
        tr: 'They met at last'
      },
      {
        id: 837,
        descr: 'set - set - set - qoymaq, yerləşdirmək, tənzim etmək, quraşdırmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu stolun üstünə qoydu',
        tr: 'He set i\u202Et on the table'
      },
      {
        id: 838,
        descr: 'learn - learnt - learnt - öyrənmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu mətni əzbər öyrəndim',
        tr: 'I learnt this text by heart'
      },
      {
        id: 839,
        descr: 'understand - understood - understood - başa düşmək, anlamaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən səni dərhal anladım',
        tr: 'I understood you immediately'
      },
      {
        id: 840,
        descr: 'cut - cut - cut - kəsmək, bölmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, özünü kəsdi',
        tr: 'He cut himself'
      }
    ],
    [{
        id: 841,
        descr: 'sell - sold - sold - satmaq, satılmaq. Country house - tətil evi',
        expl: 'mübtəda feil ...',
        sntc: 'O, tətil evini satdı',
        tr: 'He sold his country house business'
      },
      {
        id: 842,
        descr: 'spend - spent - spent - xərcləmək, sərf etmək, keçirmək (vaxt)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən buna yeddi yüz dollar xərclədim',
        tr: 'I spent seven hundred dollars on it'
      },
      {
        id: 843,
        descr: 'grow - grew - grown - boy atmaq, yetişmək, yetişdirmək. İfadəli feil: grow up - böyümək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən Amerikada böyümüşəm',
        tr: 'I grew up in America'
      },
      {
        id: 844,
        descr: 'win - won - won - udmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Biz həmin yarışda qalib gəldik',
        tr: 'We won in that competition'
      },
      {
        id: 845,
        descr: 'buy - bought - bought - almaq, satın almaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, çox geniş bir mənzil aldı',
        tr: 'She bought a very spacious flat'
      },
      {
        id: 846,
        descr: 'send - sent - sent - göndərmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, mənə məktub göndərdi',
        tr: 'He sent me a letter'
      },
      {
        id: 847,
        descr: 'fall - fell - fallen - yıxılmaq, düşmək, alçalmaq. İfadəli feil: fall down - yerə yıxılmaq, yerə düşmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, yerə yıxıldı',
        tr: 'He fell down'
      },
      {
        id: 848,
        descr: 'keep - kept - kept - saxlamaq, mühafizə etmək, riayət etmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, pulunu bankda saxlayırdı',
        tr: 'He kept his money in a bank'
      },
      {
        id: 849,
        descr: 'hold - held - held - tutmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu əllərimdə tutdum',
        tr: 'I held i\u202Et in my arms'
      },
      {
        id: 850,
        descr: 'break - broke - broken - sındırmaq, sınmaq, pozmaq (qanunu). İfadəli feil: break down - sıradan çıxmaq,sınmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onun maşını sıradan çıxdı',
        tr: 'His car broke down'
      }
    ],
    [{
        id: 851,
        descr: 'catch - caught - caught - tutmaq, yaxalamaq',
        expl: 'mübtəda feil ...',
        sntc: 'Biz balıq tutduq',
        tr: 'We caught fish'
      },
      {
        id: 852,
        descr: 'draw - drew - dartmaq, çəkmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, çox gözəl şəkil çəkdi',
        tr: 'She drew a very beautiful picture'
      },
      {
        id: 853,
        descr: 'fight - fought - fought - vuruşmaq, savaşmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar böyük cürətlə döyüşdülər',
        tr: 'They fought very bravely'
      },
      {
        id: 854,
        descr: 'deal - dealt - dealt - işi olmaq, əlaqədar olmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən tədarükçülərlə məşğul oldum',
        tr: 'I dealt with suppliers'
      },
      {
        id: 855,
        descr: 'throw - thew - thrown - atmaq. ifadəli feil: throw away - tullamaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, topu mənə atdı',
        tr: 'He threw me a ball'
      },
      {
        id: 856,
        descr: 'wear - wore - worn - geymək',
        expl: 'mübtəda feil ...',
        sntc: 'O, çox bahalı paltarlar geyinirdi',
        tr: 'She wore very expensive clothes'
      },
      {
        id: 857,
        descr: 'teach - taught - taught - öyrətmək, oxutmaq, dərs vermək',
        expl: 'mübtəda feil ...',
        sntc: 'O, İngilis dilini tədris edirdi',
        tr: 'He taught English'
      },
      {
        id: 858,
        descr: 'lie - lay - lain - uzanmaq. İfadəli feil: lie down: uzanmaq (bir az), istirahət etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bir az uzandım',
        tr: 'I lay down'
      },
      {
        id: 859,
        descr: 'lay - laid - laid - qoymaq, yerləşdirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən qələmi stolun üstünə qoydum',
        tr: 'I laid the pen on the table'
      },
      {
        id: 860,
        descr: 'fly - flew - flown - uçmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən Amerikaya uçdum',
        tr: 'I flew to America'
      }
    ],
    [{
        id: 861,
        descr: 'sing - sang - sung - mahnı oxumaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, çox gözəl oxudu',
        tr: 'She sang very beautifully'
      },
      {
        id: 862,
        descr: 'sleep - slept - slept - yatmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən kifayət qədər yatdım',
        tr: 'I slept enough'
      },
      {
        id: 863,
        descr: 'forget - forgot - forgotten - unutmaq, yadından çıxmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu şeyi tamamilə unutdum',
        tr: 'I forgot this thing completely'
      },
      {
        id: 864,
        descr: 'hit - hit - hit - vurmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, topu vurdu',
        tr: 'He hit the ball'
      },
      {
        id: 865,
        descr: 'eat - ate - eaten - yemək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən səhər yemeyində pendir yedim',
        tr: 'I ate cheese for breakfast'
      },
      {
        id: 866,
        descr: 'drink - drank - drunk - içmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bir stəkan su içdi',
        tr: 'He drank a glass of water'
      },
      {
        id: 867,
        descr: 'hide - hid - hidden - gizlənmək, gizlətmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, həmin binanın arxasında gizləndi',
        tr: 'He hid behind that building'
      },
      {
        id: 868,
        descr: 'ride - rode - ridden - miniklə getmək, at sürmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən at sürdüm',
        tr: 'I rode a horse'
      },
      {
        id: 869,
        descr: 'feed - fed - fed - yedizdirmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, körpəsini yedizdirdi',
        tr: 'She fed her baby'
      },
      {
        id: 870,
        descr: 'fit - fit - fit - uyğun gəlmək, yaramaq',
        expl: 'mübtəda feil ...',
        sntc: 'Bu cüt ayaqqabı mənə uyğun gəlir',
        tr: 'This pair of shoes fit me'
      }
    ],
    [{
        id: 871,
        descr: 'overcome - overcame - overcome - öhdəsindən gəlmək',
        expl: 'mübtəda feil ...',
        sntc: 'Biz o çətinliklərin öhdəsindən gəldik',
        tr: 'We overcame those difficulties'
      },
      {
        id: 872,
        descr: 'swim - swam - swum - üzmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən hovuzda üzdüm',
        tr: 'I swam in the swimming pool'
      },
      {
        id: 873,
        descr: 'lend - lent - lent - borc vermək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu məbləğdə pul ona borc verdim',
        tr: 'I lent him this sum of money'
      },
      {
        id: 874,
        descr: 'blow - blew - blown - əsmək (külək)',
        expl: '... mübtəda feil ...',
        sntc: 'Külək gözlənilmədən əsdi',
        tr: 'The win\u202Ed blew unexpectedly'
      },
      {
        id: 875,
        descr: 'hurt - hurt - hurt - yaralamaq, zədələmək, ağrıtmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, qolunu yaraladı',
        tr: 'She hurt her arm'
      },
      {
        id: 876,
        descr: 'dream - dreamt - dreamt - xəyal etmək, arzu etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən müxtəlif şeylər haqqında xəyallar qurdum',
        tr: 'I dreamt about different things'
      },
      {
        id: 877,
        descr: 'steal - stole - stolen - oğurlamaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, onun çantasını oğurladı',
        tr: 'He stole her bag'
      },
      {
        id: 878,
        descr: 'wake - woke - woken - oyanmaq, oyatmaq. İfadəli feil: wake up - yuxudan oyanmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən yuxudan erkən oyandım',
        tr: 'I woke up very early'
      },
      {
        id: 879,
        descr: 'dig - dug - dug - qazımaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, böyük bir quyu qazdı',
        tr: 'He dug a big hole'
      },
      {
        id: 880,
        descr: 'forgive - forgave - forgiven - bağışlamaq, əhv etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən onu bağışladım',
        tr: 'I forgave her'
      }
    ],
    [{
        id: 881,
        descr: 'drive - drove - driven - sürmək (maşın və s.), getmək (minikdə)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən işə getdim',
        tr: 'I drove to work'
      },
      {
        id: 882,
        descr: 'hang - hung - hung - asmaq, taxmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən paltomu qarmaqcıqdan asdım',
        tr: 'I hung my coat on a hook'
      },
      {
        id: 883,
        descr: 'burn - burnt - burnt - yandırmaq, yanmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar evi yandırdılar',
        tr: 'They burnt the house'
      },
      {
        id: 884,
        descr: 'shoot - shot - shot - atmaq (güllə), öldürmək (güllə ilə), güllələmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, quşu güllələdi',
        tr: 'He shot the bird'
      },
      {
        id: 885,
        descr: 'sink - sank - sunk - batmaq',
        expl: '... mübtəda feil',
        sntc: 'Gəmi batdı',
        tr: 'The ship sank'
      },
      {
        id: 886,
        descr: 'rise - rose - risen - qalxmaq, durmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Günəş qalxdı',
        tr: 'The sun rose'
      },
      {
        id: 887,
        descr: 'ring - rang - rung - zəng çalmaq',
        expl: '... mübtəda feil ...',
        sntc: 'Zəng çaldı',
        tr: 'The bell rang'
      },
      {
        id: 888,
        descr: 'spoil - spoilt - spoilt - korlamaq, korlanmaq',
        expl: '... mübtəda feil ...',
        sntc: 'Bu hadisə bizim planlarımızı korladı',
        tr: 'This even\u202Et spoilt our plans'
      },
      {
        id: 889,
        descr: 'smell - smelt - smelt. Bu feilin həmçinin qaydalı variantı mövcuddur',
        expl: '... mübtəda feil ...',
        sntc: 'Bu adam dəhşətli qoxu verdi',
        tr: 'This person smelt terrible'
      },
      {
        id: 890,
        descr: 'withdraw - withdrew - withdrawn - çekilmək, geri çekmək (ordunu), pul çıxarmaq (hesabdan)',
        expl: 'mübtəda feil ...',
        sntc: 'Mən hesabımdan üç min dollar çıxardım',
        tr: 'I withdrew three thousand dollars from my account'
      }
    ],
    [{
        id: 891,
        descr: 'misunderstand - misunderstood - misunderstood - səhv başa düşmək',
        expl: '... mübtəda feil ...',
        sntc: 'Mən qorxuram, sən məni səhv başa düşdün',
        tr: 'I’m afraid you misunderstood me'
      },
      {
        id: 892,
        descr: 'underpay - underpaid - underpaid - haqqından az pul vermək',
        expl: '... mübtəda feil ...',
        sntc: 'Onun müdürü işçilərə çox vaxt az pul verirdi',
        tr: 'Her boss often underpaid the workers'
      },
      {
        id: 893,
        descr: 'overpay - overpaid - overpaid - artıq pul vermək (ödəmək)',
        expl: 'mübtəda sometimes feil',
        sntc: 'Mən bəzən artıq pul ödəyirdim',
        tr: 'I sometimes overpaid'
      },
      {
        id: 894,
        descr: 'tear - tore - torn - cırmaq, yırtmaq',
        expl: 'mübtəda feil ...',
        sntc: 'O, kitabı cırdı',
        tr: 'He tore the book'
      },
      {
        id: 895,
        descr: 'redo - redid - redone - yenidən etmək',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu yenidən etdi',
        tr: 'He redid it'
      },
      {
        id: 896,
        descr: 'oversleep - overslept - overslept - yatıb qalmaq',
        expl: 'mübtəda feil',
        sntc: 'Mən yatıb qaldım',
        tr: 'I overslept'
      },
      {
        id: 897,
        descr: 'overeat - overate - overeaten - həddən artıq yemək',
        expl: 'mübtəda often feil',
        sntc: 'O, çox vaxt həddindən artıq yeyirdi',
        tr: 'He often overate'
      },
      {
        id: 898,
        descr: 'light - lit - lit - yandırmaq, yanmaq; işıq',
        expl: 'mübtəda feil ...',
        sntc: 'O, lampanı yandırdı',
        tr: 'He lit the lamp'
      },
      {
        id: 899,
        descr: 'bite - bit - bitten - dişləmək',
        expl: '... mübtəda feil ...',
        sntc: 'Dəli it onu dişlədi',
        tr: 'The crazy dog bit him'
      },
      {
        id: 900,
        descr: 'foresee - foresaw - foreseen - əvvəlcədən görmək, qabaqcadan görmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu dəyişiklikləri qabaqcadan görmüşəm',
        tr: 'I foresaw these changes'
      }
    ],
    [{
        id: 901,
        sntc: 'O, mənə bir stəkan su gətirdi',
        tr: 'He brought me a glass of water',
        ch: 'He brought milk give me a glass of water'
      },
      {
        id: 902,
        sntc: 'Mənim dostum belə düşünmür',
        tr: "My friend doesn't think so",
        ch: "My friend sister don't doesn't think so"
      },
      {
        id: 903,
        sntc: 'Onlar binanı yandırdılar',
        tr: 'They burnt the building',
        ch: 'They burnt hit a the building'
      },
      {
        id: 904,
        sntc: 'Mən hesabımdan üç yüz dollar çıxardım',
        tr: 'I withdrew three hundred dollars from my account',
        ch: 'I withdrew euros two three hundred dollars from my account'
      },
      {
        id: 905,
        sntc: 'O, heç vaxt həddindən artıq yemirdi',
        tr: 'He never overate',
        ch: 'He never always ate overate'
      },
      {
        id: 906,
        sntc: 'O, bu problemləri qabaqcadan görüb',
        tr: 'She foresaw these problems',
        ch: 'She foresaw the see these problems'
      },
      {
        id: 907,
        sntc: 'Onun müdiri çox vaxt işçilərə az maaş verirdi',
        tr: 'Her boss often underpaid the employees',
        ch: 'Her boss often always teacher underpaid the employees'
      },
      {
        id: 908,
        sntc: 'Qəzəbli it onu dişlədi',
        tr: 'An angry dog bit him',
        ch: 'An angry A cat dog bit him'
      },
      {
        id: 909,
        sntc: 'Mən onu bağışladım',
        tr: 'I forgave her',
        ch: 'I forgave miss wish her'
      },
      {
        id: 910,
        sntc: 'Bu əhəmiyyətsiz görünür',
        tr: 'It seems unimportant',
        ch: 'It seems useful important unimportant'
      }
    ],
    [{
        id: 911,
        sntc: 'O, özünü bədbəxt hiss edirdi',
        tr: 'She felt unhappy',
        ch: 'She felt happy funny unhappy'
      },
      {
        id: 912,
        sntc: 'O, bu əşyanı mənə gətirdi',
        tr: 'He brought this thing to me',
        ch: 'He brought book gave this thing to me'
      },
      {
        id: 913,
        sntc: 'Bu üç yüz dollara başa gəldi',
        tr: 'It cost three hundred dollars',
        ch: 'It cost four three money hundred dollars'
      },
      {
        id: 914,
        sntc: 'O, əyləncəyə gəldi',
        tr: 'She came to the party',
        ch: 'She came go cinema to the party'
      },
      {
        id: 915,
        sntc: 'Problemlər elə böyükdür?',
        tr: 'Are the problems so big?',
        ch: 'Are the Is problem problems so big'
      },
      {
        id: 916,
        sntc: 'Mən də belə düşünürdüm',
        tr: 'I also thought so',
        ch: 'I also such think thought so'
      },
      {
        id: 917,
        sntc: 'Onlar Yapon dilində danışırdılar',
        tr: 'They spoke Japanese',
        ch: 'They spoke talk We Japanese'
      },
      {
        id: 918,
        sntc: 'Biz birlikdə yaxşı vaxt keçirdik',
        tr: 'We had a good time together',
        ch: 'We had an have a good time together'
      },
      {
        id: 919,
        sntc: 'O, məktəbə getdi',
        tr: 'He went to school',
        ch: 'He went at come to school'
      },
      {
        id: 920,
        sntc: 'Mən həmişəkindən gec oyandım',
        tr: 'I woke up later than usual',
        ch: 'I woke up earlier later than usual'
      }
    ],
    [{
        id: 921,
        sntc: 'O, açarlarını itirdi',
        tr: 'He lost his keys',
        ch: 'He lost my key his keys'
      },
      {
        id: 922,
        sntc: 'Mən oturdum, sonra ayağa qalxdım',
        tr: 'I sat down and then I stood up',
        ch: 'I sat down sit and then I stood up'
      },
      {
        id: 923,
        sntc: 'Mən bu məqaləni o jurnalda oxudum',
        tr: 'I read this article in that magazine',
        ch: 'I read this article text write in that magazine'
      },
      {
        id: 924,
        sntc: 'Mən bu mətni əzbər öyrəndim',
        tr: 'I learnt this text by heart',
        ch: 'I learnt this article mind text by heart'
      },
      {
        id: 925,
        sntc: 'Sənin otağın haradadır?',
        tr: 'Where is your room?',
        ch: 'Where is your house window room'
      },
      {
        id: 926,
        sntc: 'Onlar stulu sındırdılar',
        tr: 'They broke the chair',
        ch: 'They broke built this the chair'
      },
      {
        id: 927,
        sntc: 'O, mənə mesaj göndərdi',
        tr: 'She sent me a message',
        ch: 'She an lent sent me a message'
      },
      {
        id: 928,
        sntc: 'O, bu sirri saxladı',
        tr: 'He kept this secret',
        ch: 'He kept word keep this secret'
      },
      {
        id: 929,
        sntc: 'Biz həmin müsabiqədə qalib gəldik',
        tr: 'We won in that contest',
        ch: 'We won winner party in that contest'
      },
      {
        id: 930,
        sntc: 'Mən onun çantasını tutdum',
        tr: 'I held her bag',
        ch: 'I held our layd her bag'
      }
    ],
    [{
        id: 931,
        sntc: 'Onun valideynləri ona bunu etməyə icazə verdilər',
        tr: 'His parents let him do it',
        ch: 'His friends lent parents let him do it'
      },
      {
        id: 932,
        sntc: 'O, parlaq nəticələr göstərdi',
        tr: 'He showed brilliant results',
        ch: 'He showed look good brilliant results'
      },
      {
        id: 933,
        sntc: 'Mən bu ifadəni yazdım',
        tr: 'I wrote down this phrase',
        ch: 'I wrote down idiom this phrase'
      },
      {
        id: 934,
        sntc: 'Mən çox maraqlı bir kitab oxudum',
        tr: 'I read such an interesting book',
        ch: 'I read such so an a interesting book'
      },
      {
        id: 935,
        sntc: 'O, özünü kəsdi',
        tr: 'She cut herself',
        ch: 'She hurt cut herself'
      },
      {
        id: 936,
        sntc: 'O, pul kisəsini itirdi',
        tr: 'He lost his wallet',
        ch: 'He lost bag found his wallet'
      },
      {
        id: 937,
        sntc: 'Mən onun arxasında dayandım',
        tr: 'I stood behind him',
        ch: 'I stood near us behind him'
      },
      {
        id: 938,
        sntc: 'Mən kresloda oturdum',
        tr: 'I sat in an armchair',
        ch: 'I sat in an chair table armchair'
      },
      {
        id: 939,
        sntc: 'Mən bunu bəzi məqalələrdə oxumuşam',
        tr: 'I read it in some articles',
        ch: 'I read it in saw some articles'
      },
      {
        id: 940,
        sntc: 'Sən çox xeyirxahsan',
        tr: "You're very kind",
        ch: "You're very wise good kind"
      }
    ],
    [{
        id: 941,
        sntc: 'Mən aşkar etdim ki, bizim bəzi problemlərimiz var idi',
        tr: 'I found out that we had some problems',
        ch: 'I found out that we had same some problems'
      },
      {
        id: 942,
        sntc: 'Biz onların təklifini qəbul etdik',
        tr: 'We took their offer',
        ch: 'We took gave offers their offer'
      },
      {
        id: 943,
        sntc: 'O, pulunu bankda saxladı',
        tr: 'He kept his money in a bank',
        ch: 'He kept his many an money in a bank'
      },
      {
        id: 944,
        sntc: 'Onlar tətil evlərini əlli min dollara satdılar',
        tr: 'They sold their country house for fifty thousand dollars',
        ch: 'They sold their village country house for fifty thousand dollars'
      },
      {
        id: 945,
        sntc: 'O bunu çox böyük endirimlə aldı',
        tr: 'She bought it with a very big discount',
        ch: 'She bought it small with a very big discount'
      },
      {
        id: 946,
        sntc: 'Bu böyük uğurdur?',
        tr: 'Is it a big success?',
        ch: 'Is it an much a big success'
      },
      {
        id: 947,
        sntc: 'Bu əsgər çox cəsarətlə vuruşdu',
        tr: 'This soldier fought very courageously',
        ch: 'This soldier hate big fought very courageously'
      },
      {
        id: 948,
        sntc: 'O, müdirinə yalan danışdı',
        tr: 'He lied to his boss',
        ch: 'He lied tell truth to his boss'
      },
      {
        id: 949,
        sntc: 'O, çox dəbli paltarlar geyinirdi',
        tr: 'She wore very stylish clothes',
        ch: 'She wore tore a very stylish clothes'
      },
      {
        id: 950,
        sntc: 'Mən müxtəlif şikayətlərlə məşğul oldum',
        tr: 'I dealt with different complaints',
        ch: 'I dealt speak about with different complaints'
      }
    ],
    [{
        id: 951,
        sntc: 'Mən bir uzandım',
        tr: 'I lay down',
        ch: 'I lay down up lie'
      },
      {
        id: 952,
        sntc: 'Onlar bu cinayətkarı tutdular',
        tr: 'They caught this criminal',
        ch: 'They caught thief that this criminal'
      },
      {
        id: 953,
        sntc: 'Mən bu kitabı stolun üstünə qoydum',
        tr: 'I laid this book on the table',
        ch: 'I laid this book pen pencil on the table'
      },
      {
        id: 954,
        sntc: 'O, qapıya vurdu',
        tr: 'He hit the door',
        ch: 'He hit the window broke door'
      },
      {
        id: 955,
        sntc: 'O, çox gözəl oxudu',
        tr: 'She sang very beautifully',
        ch: 'She sang sank very beautifully'
      },
      {
        id: 956,
        sntc: 'Mən adətən təxminən sekkiz saat yatırdım',
        tr: 'I usually slept for about eight hours',
        ch: 'I usually always seven slept for about eight hours'
      },
      {
        id: 957,
        sntc: 'Burada soyuqdur?',
        tr: 'Is it cold here?',
        ch: 'Is it warm there cold here'
      },
      {
        id: 958,
        sntc: 'Mən velosiped sürməyə getdim',
        tr: 'I went cycling',
        ch: 'I went ride horse camel cycling'
      },
      {
        id: 959,
        sntc: 'O, körpəsini yedizdirdi',
        tr: 'She fed her baby',
        ch: 'She fed cat often her baby'
      },
      {
        id: 960,
        sntc: 'Oğlanlar o ağacın arxasında gizləndilər',
        tr: 'The boys hid behind that tree',
        ch: 'The boys building hid behind that tree'
      }
    ],
    [{
        id: 961,
        sntc: 'O, mənə yalan danışdı',
        tr: 'She lied to me',
        ch: 'She us talk lied to me'
      },
      {
        id: 962,
        sntc: 'Biz Parisə uçduq',
        tr: 'We flew to Paris',
        ch: 'We flew go to went Paris'
      },
      {
        id: 963,
        sntc: 'O, mənə topu atdı',
        tr: 'He threw me a ball',
        ch: 'He threw me an there a ball'
      },
      {
        id: 964,
        sntc: 'Mən bu cüt ayaqqabını istəyirəm',
        tr: 'I want this pair of shoes',
        ch: 'I want need this pair of shoes hats'
      },
      {
        id: 965,
        sntc: 'O, çox gözəl şəkil çəkdi',
        tr: 'She drew a very beautiful picture',
        ch: 'She drew an excellent a very beautiful picture'
      },
      {
        id: 966,
        sntc: 'Mən Amerikaya uçdum',
        tr: 'I flew to America',
        ch: 'I flew go went to America'
      },
      {
        id: 967,
        sntc: 'O, həmin binanın arxasında gizləndi',
        tr: 'He hid behind that building',
        ch: 'He hid behind around near that building'
      },
      {
        id: 968,
        sntc: 'Mən bu tapşırıqı etməyi unutdum',
        tr: 'I forgot to do this exercise',
        ch: 'I forgot say it to do this exercise'
      },
      {
        id: 969,
        sntc: 'Onlar onu bağışladılar',
        tr: 'They forgave him',
        ch: 'They lent tell forgave him'
      },
      {
        id: 970,
        sntc: 'O, onun pul kisəsini oğurladı',
        tr: 'He stole his wallet',
        ch: 'He stole then a his wallet'
      }
    ],
    [{
        id: 971,
        sntc: 'Onlar çox maraqlı kəşf etdilər',
        tr: 'They made a very interesting discovery',
        ch: 'They made an curious a very interesting discovery'
      },
      {
        id: 972,
        sntc: 'Mən bunu saatlarla müzakirə edə bilərdim',
        tr: 'I could discuss it for hours',
        ch: 'I could talk always discuss it for hours'
      },
      {
        id: 973,
        sntc: 'Mən hər şeyi vaxtında etdim',
        tr: 'I did everything on time',
        ch: 'I did everyone by everything on time'
      },
      {
        id: 974,
        sntc: 'Bu maraqlı fikirdir',
        tr: "It's an interesting idea",
        ch: "It's an good issue interesting idea"
      },
      {
        id: 975,
        sntc: 'Mən həddən artıq yatdım',
        tr: 'I overslept',
        ch: 'I slept enough overslept'
      },
      {
        id: 976,
        sntc: 'Onun müdiri işçilərə çox vaxt az maaş verirdi',
        tr: 'Her boss often underpaid the workers',
        ch: 'Her boss sometimes overpaid often underpaid the workers'
      },
      {
        id: 977,
        sntc: 'O, musiqi sahəsində karyera qurmaq haqqında xəyal qurdu',
        tr: 'She dreamt about a career in music',
        ch: 'She dreamt about talk You a career in music'
      },
      {
        id: 978,
        sntc: 'Mən gölməçədə üzdüm',
        tr: 'I swam in the pond',
        ch: 'I swam river lake in the pond'
      },
      {
        id: 979,
        sntc: 'O, ayağını yaralamışdı',
        tr: 'He hurt his leg',
        ch: 'He hurt bit arm his leg'
      },
      {
        id: 980,
        sntc: 'Mənə bunu etmək lazımdır',
        tr: 'I need to do it',
        ch: 'I need want understand to do it'
      }
    ],
    [{
        id: 981,
        sntc: 'O, kobuddur',
        tr: "He's rude",
        ch: "He's brave used rude"
      },
      {
        id: 982,
        sntc: 'Mən məktəbə maşınla getdim',
        tr: 'I drove to school',
        ch: 'I drove go went to school'
      },
      {
        id: 983,
        sntc: 'O boğuldu',
        tr: 'She drowned',
        ch: 'She fell down drowned'
      },
      {
        id: 984,
        sntc: 'Zəng çaldı',
        tr: 'The bell rang',
        ch: 'The bell ring hours rang'
      },
      {
        id: 985,
        sntc: 'Bu hadisə planlarımızı korladı',
        tr: 'This event spoilt our plans',
        ch: 'This event mistake meeting spoilt our plans'
      },
      {
        id: 986,
        sntc: 'O, maşınla evə getdi',
        tr: 'She drove home',
        ch: 'She drove school cinema home'
      },
      {
        id: 987,
        sntc: 'Günəşlidir',
        tr: "It's sunny",
        ch: "It's cloudly rainy sunny"
      },
      {
        id: 988,
        sntc: 'Qiymət iyirmi faiz artıb',
        tr: 'The price rose by twenty percent',
        ch: 'The price thirty rose by twenty percent'
      },
      {
        id: 989,
        sntc: 'O, şamı yandırdı',
        tr: 'She lit the candle',
        ch: 'She lit light the candle'
      },
      {
        id: 990,
        sntc: 'O, ev tapşırıqlarını yenidən etdi',
        tr: 'He redid his homework',
        ch: 'He redid make did his homework'
      }
    ],
    [{
        id: 991,
        sntc: 'O, bu əşyanı mənə verdi',
        tr: 'He gave this thing to me',
        ch: 'He gave lent that this thing to me'
      },
      {
        id: 992,
        sntc: 'Onun valideynləri onu ora buraxdılar',
        tr: 'Her parents let her go there',
        ch: 'Her parents went friends let her go there'
      },
      {
        id: 993,
        sntc: 'Mən başqa işlərlə məşğul olaraq radioya qulaq asa bilərdim',
        tr: 'I could listen to the radio doing other things',
        ch: 'I could listen making at to the radio doing other things'
      },
      {
        id: 994,
        sntc: 'Biz bunu əvvəldən bilirdik',
        tr: 'We knew it in the beginning',
        ch: 'We knew this end it in the beginning'
      },
      {
        id: 995,
        sntc: 'Biz enerji ilə doluyuq',
        tr: "We're full of energy",
        ch: "We're full fall efforts of energy"
      },
      {
        id: 996,
        sntc: 'Mən onu çox yaxşı tanıyırdım',
        tr: 'I knew him very well',
        ch: 'I knew him them much a very well'
      },
      {
        id: 997,
        sntc: 'Mənim müdirim ona yaxşılıq etdi',
        tr: 'My boss did him a favor',
        ch: 'My boss friend make an did him a favor'
      },
      {
        id: 998,
        sntc: 'Mən bunu vaxtında etdim',
        tr: 'I did it on time',
        ch: 'I did it do We hour on time'
      },
      {
        id: 999,
        sntc: 'O, bu sirri mənə danışdı',
        tr: 'She told me this secret',
        ch: 'She told talk me this that secret'
      },
      {
        id: 1000,
        sntc: 'Mən ev tapşırıqlarımı etdim',
        tr: 'I did my homework',
        ch: 'I did make task my homework'
      }
    ],
    [{
        id: 1001,
        sntc: 'O, siqaretdən imtina etdi',
        tr: 'He gave up smoking',
        ch: 'He gave drinking They up smoking'
      },
      {
        id: 1002,
        sntc: 'O, özünü kədərli etdi',
        tr: 'She felt upset',
        ch: 'She felt funny smile upset'
      },
      {
        id: 1003,
        sntc: 'Bu bina üç milyon dollara başa gəldi',
        tr: 'This building cost three million dollars',
        ch: 'This building house lent cost three million dollars'
      },
      {
        id: 1004,
        sntc: 'O, mənə kömək etmək niyyətində idi',
        tr: 'He intended to help me',
        ch: 'He intended feel need to help me'
      },
      {
        id: 1005,
        sntc: 'Sən evə necə çatırsan?',
        tr: 'How do you get home?',
        ch: 'How do you fly house get home'
      },
      {
        id: 1006,
        sntc: 'Mən bu şeyi tamamilə unutdum',
        tr: 'I forgot this thing completely',
        ch: 'I forgot this that left there thing completely'
      },
      {
        id: 1007,
        sntc: 'O, topu vurdu',
        tr: 'He hit the ball',
        ch: 'He hit own garden topic the ball'
      },
      {
        id: 1008,
        sntc: 'Bu paltar sizə yaraşır',
        tr: 'This dress fit you',
        ch: 'This dress fit fall perfectly you'
      },
      {
        id: 1009,
        sntc: 'O, pul haqqında xəyallar qurdu',
        tr: 'He dreamt about money',
        ch: 'He dreamt big overpaid about money'
      },
      {
        id: 1010,
        sntc: 'Mən həmin dərsi tapdım',
        tr: 'I found that lesson',
        ch: 'I found video subject that lesson'
      }
    ],
    [{
        id: 1011,
        sntc: 'Mən qalxdım',
        tr: 'I got up',
        ch: 'I got We went up'
      },
      {
        id: 1012,
        sntc: 'Bu tapşırıq necədir?',
        tr: 'How is this exercise?',
        ch: 'How is test exam this exercise?'
      },
      {
        id: 1013,
        sntc: 'Onlar birlikdə yaxşı vaxt keçirdilər',
        tr: 'They had a good time together',
        ch: 'They have split had a good time together'
      },
      {
        id: 1014,
        sntc: 'Mən Almaniyaya yola düşdüm',
        tr: 'I left for Germany',
        ch: 'I left went go for Germany'
      },
      {
        id: 1015,
        sntc: 'Mən dünən sinif yoldaşımla görüşdüm',
        tr: 'I met my classmate yesterday',
        ch: 'I met friend tomorrow my classmate yesterday'
      },
      {
        id: 1016,
        sntc: 'Mən çox məyus oldum',
        tr: 'I was bitterly disappointed',
        ch: 'I was were We glad bitterly disappointed'
      },
      {
        id: 1017,
        sntc: 'O, ayda iki min dollar alırdı',
        tr: 'He got two thousand dollars a month',
        ch: 'He got gave keep two thousand dollars a month'
      },
      {
        id: 1018,
        sntc: 'Mənim dostumun köməyə ehtiyacı var',
        tr: 'My friend needs help',
        ch: 'My friend want sister needs help'
      },
      {
        id: 1019,
        sntc: 'Mən işə getdim',
        tr: 'I went to work',
        ch: 'I went school at to work'
      },
      {
        id: 1020,
        sntc: 'Mən bu qaydaları əzbər öyrəndim',
        tr: 'I learnt these rules by heart',
        ch: 'I learnt those sentences these rules by heart'
      }
    ],
    [{
        id: 1021,
        sntc: 'Bu qəribə görünür',
        tr: 'It looks strange',
        ch: 'It looks look great strange'
      },
      {
        id: 1022,
        sntc: 'O, çox bahalı paltarlar geyindi',
        tr: 'She wore very expensive clothes',
        ch: 'She wore a an keep very expensive clothes'
      },
      {
        id: 1023,
        sntc: 'O, çox xüsusi bir şey çəkdi',
        tr: 'She drew something very special',
        ch: 'She drew flew can something very special'
      },
      {
        id: 1024,
        sntc: 'Mən müştərilərlə məşgul oldum',
        tr: 'I dealt with clients',
        ch: 'I dealt talk knew at with clients'
      },
      {
        id: 1025,
        sntc: 'O, bu mövzunu universitetdə tədris edirdi',
        tr: 'She taught this subject at university',
        ch: 'She taught give that this subject at university'
      },
      {
        id: 1026,
        sntc: 'O, topu mənə atdı',
        tr: 'He threw a ball to me',
        ch: 'He threw this cat can a ball to me'
      },
      {
        id: 1027,
        sntc: 'Biz İngiltərəni tərk etdik',
        tr: 'We left England',
        ch: 'We left leave was able England'
      },
      {
        id: 1028,
        sntc: 'Onun sözləri aşağıdakılari nəzərdə tuturdu',
        tr: 'His words meant the following',
        ch: 'His words meant next mean the following'
      },
      {
        id: 1029,
        sntc: 'Bu hekayə çox əyləncəlidir?',
        tr: 'Is this story so funny?',
        ch: 'Is this such smile story so funny?'
      },
      {
        id: 1030,
        sntc: 'O, pivə içməkdən imtina etdi',
        tr: 'He gave up drinking beer',
        ch: 'He gave up milk water drinking beer'
      }
    ],
    [{
        id: 1031,
        sntc: 'O, məşhur aktrisa oldu',
        tr: 'She became a famous actress',
        ch: 'She became a an singer great famous actress'
      },
      {
        id: 1032,
        sntc: 'Mən öz inkişafımı gördüm,',
        tr: 'I saw my progress',
        ch: 'I saw see look my progress'
      },
      {
        id: 1033,
        sntc: 'Onlar onu özləri ilə apardılar',
        tr: 'They took her with them',
        ch: 'They took give us her with them'
      },
      {
        id: 1034,
        sntc: 'Bu böyük bir səhv deyil',
        tr: "It isn't a big mistake",
        ch: "It isn't small an a big mistake"
      },
      {
        id: 1035,
        sntc: 'Mən onu ilk dəfə gördüm',
        tr: 'I saw her for the first time',
        ch: 'I saw look hear second her for the first time'
      },
      {
        id: 1036,
        sntc: 'Biz onu özümüzlə götürdük',
        tr: 'We took him with us',
        ch: 'We took me could drove him with us'
      },
      {
        id: 1037,
        sntc: 'O, özünü qəmli hiss etdi',
        tr: 'She felt sad',
        ch: 'She feel glad bad felt sad'
      },
      {
        id: 1038,
        sntc: 'O, qayıtdı',
        tr: 'He returned',
        ch: 'He home angry come returned'
      },
      {
        id: 1039,
        sntc: 'O, siqaret çəkməkdən imtina etdi',
        tr: 'She gave up smoking',
        ch: 'She gave drinking  up smoking'
      },
      {
        id: 1040,
        sntc: 'Bu çox vacibdir',
        tr: "It's so important",
        ch: "It's so such useful important"
      }
    ],
    [{
        id: 1041,
        sntc: 'Mən bunu radioda eşitdim',
        tr: 'I heard it on the radio',
        ch: 'I heard We listen at it on the radio'
      },
      {
        id: 1042,
        sntc: 'Qız əla nəticələr göstərdi',
        tr: 'The girl showed excellent results',
        ch: 'The girl a great look showed excellent results'
      },
      {
        id: 1043,
        sntc: 'O, stəkan suyu stolun üstünə qoydu',
        tr: 'He set a glass of water on the table',
        ch: 'He set need choice a glass of water on the table'
      },
      {
        id: 1044,
        sntc: 'Mən bunu bir neçə məqalədə oxudum',
        tr: 'I read it in several articles',
        ch: 'I read saw text it in several articles'
      },
      {
        id: 1045,
        sntc: 'Mən elə çox yeni söz öyrəndim',
        tr: 'I learnt so many new words',
        ch: 'I learnt know very so many new words'
      },
      {
        id: 1046,
        sntc: 'Mən Azərbaycanda böyümüşəm',
        tr: 'I grew up in Azerbaijan',
        ch: 'I grew went rise up in Azerbaijan'
      },
      {
        id: 1047,
        sntc: 'Mən bunu bu məqalədə oxudum',
        tr: 'I read it in this article',
        ch: 'I read it write down in this article'
      },
      {
        id: 1048,
        sntc: 'Bu faydasız dərsdir',
        tr: "It's a useless lesson",
        ch: "It's usefull a important useless lesson"
      },
      {
        id: 1049,
        sntc: 'O, balığı dörd hissəyə doğradı',
        tr: 'She cut the fish into four pieces',
        ch: 'She cut the fish into second four pieces'
      },
      {
        id: 1050,
        sntc: 'Mən onun yerinə pul ödədim',
        tr: 'I paid for her',
        ch: 'I paid overpaid underpaid for her'
      }
    ],
    [{
        id: 1051,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'Onlar onunla razılaşmadılar',
        tr: 'They didn’t agree with him'
      },
      {
        id: 1052,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'O, bunu bizə kifayət qədər aydın izah etmədi',
        tr: 'He didn’t explain it\u202E to us clearly enough'
      },
      {
        id: 1053,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur. İfadəli feil: call off - ləğv etmək',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'O, görüşü ləğv etmədi',
        tr: 'He didn’t call off the meeting'
      },
      {
        id: 1054,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'O, nailiyyətləri ilə öyünmədi',
        tr: 'He didn’t boast about his achievements'
      },
      {
        id: 1055,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'Onlar evlənmədilər',
        tr: 'They didn’t get marrie\u202Ed'
      },
      {
        id: 1056,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur. İfadəli feil: break up - ayrılmaq',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'Onlar ayrılmadılar',
        tr: 'They didn’t break up'
      },
      {
        id: 1057,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur. İfadəli feil: split up - ayrılmaq',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'Onlar ayrılmadılar',
        tr: 'They didn’t split up'
      },
      {
        id: 1058,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'Onun belə niyyəti yox idi',
        tr: 'She didn’t have such an intention'
      },
      {
        id: 1059,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: '... mübtəda didn’t feil ...',
        sntc: 'Mənim valideynlərim elə qəribə qərarı dəstəkləmədilər',
        tr: 'My parent\u202Es didn’t support such a strange decision'
      },
      {
        id: 1060,
        descr: 'Keçmiş sadə zamanda inkar etmək üçün yalnız did not (didn’t) köməkçi feil tələb olunur',
        expl: 'mübtəda didn’t feil ...',
        sntc: 'O, buna görə üzr istəmədi',
        tr: 'He didn’t apologize for it\u202E'
      }
    ],
    [{
        id: 1061,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Sən bunu eşitdin?',
        tr: 'Did you hear it\u202E?'
      },
      {
        id: 1062,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did ... mübtəda feil ?',
        sntc: 'Onun əri sağaldı?',
        tr: 'Did her husban\u202Ed recover?'
      },
      {
        id: 1063,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did ... mübtəda feil ... ?',
        sntc: 'Bu dəyişiklik ona müsbət təsir göstərdi?',
        tr: 'Did this chang\u202Ee have a positive effect on him?'
      },
      {
        id: 1064,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Sən dünən onu görmüsən?',
        tr: 'Did you see him yesterday?'
      },
      {
        id: 1065,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Sən bu işi əldə etdin?',
        tr: 'Did you get this job?'
      },
      {
        id: 1066,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Bu sizə qrammatikanızı yaxşılaşdırmağa kömək etdi?',
        tr: 'Did it help you improve your grammar?'
      },
      {
        id: 1067,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'O, bunu göstərməməyə çalışdı?',
        tr: 'Did she try not to show it\u202E?'
      },
      {
        id: 1068,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Sən birinci yeri tutdun?',
        tr: 'Did you take the first place?'
      },
      {
        id: 1069,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did ... mübtəda feil ... ?',
        sntc: 'Sənin tanışın məsləhətinə əməl etdi?',
        tr: 'Did your acquaintanc\u202Ee follow your advice?'
      },
      {
        id: 1070,
        descr: 'Keçmiş sadə zamanda sual vermək üçün konstruksiya:',
        expl: 'Did mübtəda feil ... ?',
        sntc: 'Bu sizə İngilis dilinizı yaxşılaşdırmağa kömək etdi?',
        tr: 'Did it help you improve your English?'
      }
    ],
    [{
        id: 1071,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'Where did mübtəda feil ... ?',
        sntc: 'Sən dünən hara getdin?',
        tr: 'Where did you go yesterday?'
      },
      {
        id: 1072,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'Where did mübtəda feil ... ?',
        sntc: 'Sən bunu necə bildin?',
        tr: 'How did you know it\u202E?'
      },
      {
        id: 1073,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'When did mübtəda feil ... ?',
        sntc: 'Sən nə vaxt İngilis dilini öyrənməyə başlamısan?',
        tr: 'When did you start learning English?'
      },
      {
        id: 1074,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'How did mübtəda feil ?',
        sntc: 'Bu necə baş verdi?',
        tr: 'How did it happen?'
      },
      {
        id: 1075,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'How did mübtəda feil ... ?',
        sntc: 'Sən bunu necə bacardın?',
        tr: 'How did you manage it\u202E?'
      },
      {
        id: 1076,
        descr: 'İdiom: most of all - hər şeydən çox, ən çox',
        expl: 'Who feil mübtəda ... ?',
        sntc: 'Sizə ən çox təsir kim göstərib?',
        tr: 'Who influenced you most of all?'
      },
      {
        id: 1077,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'Whose ... did mübtəda feil ?',
        sntc: 'Sən kimin kitabını götürmüsən?',
        tr: 'Whose book did you take?'
      },
      {
        id: 1078,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'How many ... did mübtəda feil ?',
        sntc: 'Mən nə qədər səhv buraxdım?',
        tr: 'How many mistakes did I make?'
      },
      {
        id: 1079,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'How much ... did mübtəda feil ... ?',
        sntc: 'Sən orada nə qədər pul alırdın?',
        tr: 'How much money did you get there?'
      },
      {
        id: 1080,
        descr: 'Keçmiş sadə zamanda xüsusi sual vermək üçün konstruksiya:',
        expl: 'What feil ... ?',
        sntc: 'Sənin diqqətini nə cəlb etdi?',
        tr: 'What attracted your attention?'
      }
    ],
    [{
        id: 1081,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'O, şövqlə dolu idi',
        tr: 'She was full of enthusiasm'
      },
      {
        id: 1082,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was really ...',
        sntc: 'O, həqiqətən sizə minnətdar idi',
        tr: 'She was really grateful to you'
      },
      {
        id: 1083,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'You/We/They were ...',
        sntc: 'Bizim bəxtimiz getirdi',
        tr: 'We were lucky'
      },
      {
        id: 1084,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'Bu çox darıxdırıcı film idi',
        tr: 'It was such a boring movie'
      },
      {
        id: 1085,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'Gün yağışlı idi',
        tr: 'It was a rainy day'
      },
      {
        id: 1086,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'Bu çox riskli idi',
        tr: 'It was very risky'
      },
      {
        id: 1087,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'Bu çox təhlükəli idi',
        tr: 'It was so dangerous'
      },
      {
        id: 1088,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'I/He/She/It was ...',
        sntc: 'Bu, möhtəşəm nəticə idi',
        tr: 'It was an outstanding result'
      },
      {
        id: 1089,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'You/We/They were ...',
        sntc: 'Biz onlarla birlikdə idik',
        tr: 'We were with them'
      },
      {
        id: 1090,
        descr: 'To be feil köməyi ilə keçmiş zamanda cümlə qurmaq üçün onun was və yaxud were forması işlənir',
        expl: 'You/We/They were ...',
        sntc: 'Onlar çox səxavətli idilər',
        tr: 'They were very generous'
      }
    ],
    [{
        id: 1091,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friend) = he/she və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Mənim dostum orda idi',
        tr: 'My frien\u202Ed was there'
      },
      {
        id: 1092,
        descr: 'Aşağıdakı tapşırıqda mübtəda (result) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Nəticə olduqca yaxşı idi',
        tr: 'The resul\u202Et was quite good'
      },
      {
        id: 1093,
        descr: 'Aşağıdakı tapşırıqda mübtəda (lesson) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Dərs çox qısa idi',
        tr: 'The lesso\u202En was too short'
      },
      {
        id: 1094,
        descr: 'Aşağıdakı tapşırıqda mübtəda (men) = they və ona görə ‘to be’ feilin were forması işlənir',
        expl: '... mübtəda were ...',
        sntc: 'Kişilər binanın içində idilər',
        tr: 'The me\u202En were inside the building'
      },
      {
        id: 1095,
        descr: 'Aşağıdakı tapşırıqda mübtəda (women) = they və ona görə ‘to be’ feilin were forması işlənir',
        expl: '... mübtəda were ...',
        sntc: 'Qadınlar çox qonaqpərvər idilər',
        tr: 'The wome\u202En were very hospitable'
      },
      {
        id: 1096,
        descr: 'Aşağıdakı tapşırıqda mübtəda (result) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Bu nəticə orta səviyyədən aşağı idi',
        tr: 'This resul\u202Et was below average'
      },
      {
        id: 1097,
        descr: 'Aşağıdakı tapşırıqda mübtəda (answer) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Sənin cavabın doğru idi',
        tr: 'Your answe\u202Er was correct\u202E'
      },
      {
        id: 1098,
        descr: 'Aşağıdakı tapşırıqda mübtəda (idea) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Onun ideyası olduqca yeni idi',
        tr: 'His ide\u202Ea was quite new'
      },
      {
        id: 1099,
        descr: 'Aşağıdakı tapşırıqda mübtəda (knowledge) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Bu bilik kifayət qədər çox idi',
        tr: 'This knowledg\u202Ee was more than enough'
      },
      {
        id: 1100,
        descr: 'Aşağıdakı tapşırıqda mübtəda (man) = he və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Kişi binadan kənarda idi',
        tr: 'The ma\u202En was outside the building'
      }
    ],
    [{
        id: 1101,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'I/He/She/It wasn’t ...',
        sntc: 'Mənim nəticəm məni qane etmədi',
        tr: 'I wasn’t satisfied with my result'
      },
      {
        id: 1102,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'You/We/They weren’t ...',
        sntc: 'Biz inamla dolu deyildik',
        tr: 'We weren’t full of confidence'
      },
      {
        id: 1103,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'You/We/They weren’t ...',
        sntc: 'Sən bizim yerimizdə olmamısan',
        tr: 'You weren’t in our place'
      },
      {
        id: 1104,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'I/He/She/It wasn’t ...',
        sntc: 'O, evli deyildi',
        tr: 'He wasn’t married\u202E'
      },
      {
        id: 1105,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'I/He/She/It wasn’t ...',
        sntc: 'O, yeni çətinliklərdən qorxmurdu',
        tr: 'He wasn’t afraid of new difficulties'
      },
      {
        id: 1106,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'I/He/She/It wasn’t ...',
        sntc: 'O, bu dəyişikliyə hazır deyildi',
        tr: 'She wasn’t ready for this change\u202E'
      },
      {
        id: 1107,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'You/We/They weren’t ...',
        sntc: 'Sən kifayət qədər diqqətli deyildin',
        tr: 'You weren’t careful enough'
      },
      {
        id: 1108,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'You/We/They weren’t ...',
        sntc: 'Biz tətildə deyildik',
        tr: 'We weren’t on holiday'
      },
      {
        id: 1109,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'You/We/They weren’t ...',
        sntc: 'Onlar sahildə deyildilər',
        tr: 'They weren’t on the beach'
      },
      {
        id: 1110,
        descr: 'Feil olmayan cümlədə inkar etmək üçün to be feilin was not (wasn’t) və yaxud were not (weren’t) forması istifadə olunur',
        expl: 'I/He/She/It wasn’t ...',
        sntc: 'Mən bu nailiyyətlə fəxr etmədim',
        tr: 'I wasn’t proud of this achievement'
      }
    ],
    [{
        id: 1111,
        descr: 'Aşağıdakı tapşırıqda mübtəda (women) = they və ona görə ‘to be’ feilin weren’t forması işlənir',
        expl: '... mübtəda weren’t ...',
        sntc: 'Qadınlar hər şeylə maraqlanan deyildilər',
        tr: 'The wome\u202En weren’t curious'
      },
      {
        id: 1112,
        descr: 'Aşağıdakı tapşırıqda mübtəda (attempts) = they və ona görə ‘to be’ feilin weren’t forması işlənir',
        expl: '... mübtəda weren’t ...',
        sntc: 'Onun cəhdləri uğurlu olmadı',
        tr: 'His attempt\u202Es weren’t successful'
      },
      {
        id: 1113,
        descr: 'Aşağıdakı tapşırıqda mübtəda (conclusion) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Onun gəldiyi nəticə olduqca məntiqli idi',
        tr: 'His conclusio\u202En was quite logical'
      },
      {
        id: 1114,
        descr: 'Aşağıdakı tapşırıqda mübtəda (result) = it və ona görə ‘to be’ feilin wasn’t forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Onun nəticəsi həqiqətən təəssürat doğurdu',
        tr: 'Her resul\u202Et was really impressive'
      },
      {
        id: 1115,
        descr: 'Aşağıdakı tapşırıqda mübtəda (recommendation) = it və ona görə ‘to be’ feilin wasn’t forması işlənir',
        expl: '... mübtəda wasn’t ...',
        sntc: 'Sizin tövsiyəniz faydalı olmadı',
        tr: 'Your recommendatio\u202En wasn’t useful'
      },
      {
        id: 1116,
        descr: 'Aşağıdakı tapşırıqda mübtəda (mistake) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Onun səhvi çox böyük idi',
        tr: 'His mistak\u202Ee was very big'
      },
      {
        id: 1117,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friends) = they və ona görə ‘to be’ feilin weren’t forması işlənir',
        expl: '... mübtəda weren’t ...',
        sntc: 'Mənim dostlarım öz nəticələrindən məmnun deyildilər',
        tr: 'My friend\u202Es weren’t satisfied with their results'
      },
      {
        id: 1118,
        descr: 'Aşağıdakı tapşırıqda mübtəda (boy) = he və ona görə ‘to be’ feilin wasn’t forması işlənir',
        expl: '... mübtəda wasn’t ...',
        sntc: 'Oğlan zəif deyildi',
        tr: 'The bo\u202Ey wasn’t weak'
      },
      {
        id: 1119,
        descr: 'Aşağıdakı tapşırıqda mübtəda (attempt) = it və ona görə ‘to be’ feilin wasn’t forması işlənir',
        expl: '... mübtəda wasn’t ...',
        sntc: 'Onun cəhdi uğurlu olmadı',
        tr: 'His attemp\u202Et wasn’t successful'
      },
      {
        id: 1120,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friend) = he/she və ona görə ‘to be’ feilin was forması işlənir',
        expl: '... mübtəda was ...',
        sntc: 'Mənim ən yaxın dostum çox nikbin idi',
        tr: 'My best frien\u202Ed was too optimistic'
      }
    ],
    [{
        id: 1121,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Biz həmin yerdə idik?',
        tr: 'Were we in the same place?'
      },
      {
        id: 1122,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Onlar öndə idilər?',
        tr: 'Were they ahead?'
      },
      {
        id: 1123,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Onlar sizə qarşı xeyirxah idilər?',
        tr: 'Were they kind to you?'
      },
      {
        id: 1124,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Onlar onun arxasında idilər?!',
        tr: 'Were they behind him?'
      },
      {
        id: 1125,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Was I/he/she/it ... ?',
        sntc: 'Mən səhv yolda idim?',
        tr: 'Was I on the wrong way?'
      },
      {
        id: 1126,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Was I/he/she/it ... ?',
        sntc: 'Mən çalışqan tələbə idim?',
        tr: 'Was I a hard-working student?'
      },
      {
        id: 1127,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Bizim bəxtimiz gətirdi?',
        tr: 'Were we lucky?'
      },
      {
        id: 1128,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Sən bəlaya düşdün?',
        tr: 'Were you in trouble?'
      },
      {
        id: 1129,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Were you/we/they ... ?',
        sntc: 'Onlar həbs altında idilər?',
        tr: 'Were they under arrest?'
      },
      {
        id: 1130,
        descr: 'Feil olmayan cümlədə sual vermək üçün to be feil cümlənin əvvəlində yerləşir',
        expl: 'Was I/he/she/it ... ?',
        sntc: 'Mən haqlı idim?',
        tr: 'Was I right?'
      }
    ],
    [{
        id: 1131,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'What was ... ?',
        sntc: 'Bu qədər şübhəli olan nə idi?',
        tr: 'What was so suspicious?'
      },
      {
        id: 1132,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Where were you/we/they ... ?',
        sntc: 'Sən dünən harada idin?',
        tr: 'Where were you yesterday?'
      },
      {
        id: 1133,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Who was ... ?',
        sntc: 'Birinci yerdə kim idi?',
        tr: 'Who was in the first place?'
      },
      {
        id: 1134,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Why was I/he/she/it ... ?',
        sntc: 'O, niyə elə fikirli idi?',
        tr: 'Why was he so thoughtful?'
      },
      {
        id: 1135,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'What kind of ... was I/he/she/it ?',
        sntc: 'O, ne cür insan idi?',
        tr: 'What kind of person was he?'
      },
      {
        id: 1136,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'How old was I/he/she/it ?',
        sntc: 'Onun neçə yaşı var idi?',
        tr: 'How old was he?'
      },
      {
        id: 1137,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'What time was I/he/she/it ?',
        sntc: 'Bu nə vaxt olub?',
        tr: 'What time was it?'
      },
      {
        id: 1138,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Who was ... ?',
        sntc: 'Həmin komandada kimlər var idi?',
        tr: 'Who was in the same team?'
      },
      {
        id: 1139,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'How long was I/he/she/it ?',
        sntc: 'Bu nə qədər vaxt çəkdi?',
        tr: 'How long was it?'
      },
      {
        id: 1140,
        descr: 'Xüsusi sual cümləsi sual sözü ilə başlayır',
        expl: 'Whose ... was I/he/she/it ?',
        sntc: 'Bu kimin fikri idi?',
        tr: 'Whose idea was it?'
      }
    ],
    [{
        id: 1141,
        descr: 'Aşağıdakı tapşırıqda mübtəda (text) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'Why was ... mübtəda ... ?',
        sntc: 'Nəyə görə həmin mətn sənin üçün elə çətin idi?',
        tr: 'Why was that tex\u202Et so difficult for you?'
      },
      {
        id: 1142,
        descr: 'Aşağıdakı tapşırıqda mübtəda (surname) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'What was ... mübtəda ?',
        sntc: 'Onun soyadı nə idi?',
        tr: 'What was her surname\u202E?'
      },
      {
        id: 1143,
        descr: 'Aşağıdakı tapşırıqda mübtəda (last name) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'What was ... mübtəda ?',
        sntc: 'Onun anasının soyadı nə idi?',
        tr: 'What was her mother’s las\u202Et name\u202E?'
      },
      {
        id: 1144,
        descr: 'Aşağıdakı tapşırıqda mübtəda (boy) = he və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'Why was ... mübtəda ... ?',
        sntc: 'Oğlan nəyə görə elə məyus olmuşdu?',
        tr: 'Why was the bo\u202Ey so disappointed?'
      },
      {
        id: 1145,
        descr: 'Aşağıdakı tapşırıqda mübtəda (parents) = they və ona görə ‘to be’ feilin were forması işlənir',
        expl: 'When were ... mübtəda ... ?',
        sntc: 'Sənin valideynlərin axırıncı dəfə xaricdə nə vaxt olub?',
        tr: 'When were your parent\u202Es abroad last\u202E time?'
      },
      {
        id: 1146,
        descr: 'Aşağıdakı tapşırıqda mübtəda (airport) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'How far was ... mübtəda ?',
        sntc: 'Hava limanı nə qədər uzaq idi?',
        tr: 'How far was the airport\u202E?'
      },
      {
        id: 1147,
        descr: 'Aşağıdakı tapşırıqda mübtəda (supermarket) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'How far was ... mübtəda ?',
        sntc: 'Ən yaxın supermarket nə qədər uzaq idi?',
        tr: 'How far was the nearest supermarket\u202E?'
      },
      {
        id: 1148,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friend) = he/she və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'How long time ago was ... mübtəda ... ?',
        sntc: 'Neçə müddət əvvəl sənin dostun orada idi?',
        tr: 'How long time ago was your frien\u202Ed there?'
      },
      {
        id: 1149,
        descr: 'Aşağıdakı tapşırıqda mübtəda (parents) = they və ona görə ‘to be’ feilin were forması işlənir',
        expl: 'How long time ago were ... mübtəda ... ?',
        sntc: 'Neçə müddət əvvəl sənin valideynlərin orada idilər?',
        tr: 'How long time ago were your parent\u202Es there?'
      },
      {
        id: 1150,
        descr: 'Aşağıdakı tapşırıqda mübtəda (text) = it və ona görə ‘to be’ feilin was forması işlənir',
        expl: 'How long was ... mübtəda ?',
        sntc: 'Mühazirə nə qədər davam etdi?',
        tr: 'How long was the lecture\u202E?'
      }
    ],
  ],
};

// let obj = []
// for (let i = 105; i < 115; i++) {
//   for (let a = 0; a < 10; a++) {
//     // obj.id=initialState.lessons[0][i][a].id
//     obj.push(initialState.lessons[i][a].tr.replace('\u202E',''))
//   }
// }console.log(obj)

const theory = (state = initialState, action) => {
  return state
}

export default theory