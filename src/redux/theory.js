const initialState = {
  lessons: [
    [{
        id: '1',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır. İngilis dilində zamanlar haqqında ümümi anlayış əldə etmək üçün cədvələ baxmaq məsləhətdir',
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
        descr: 'İsimlərin cəm halını bildirmək üçün -s əlavə olunur. Really əksər hallarda mübtədadan sonra yer tutur',
        expl: 'He/She/It really feil+s isim+s',
        sntc: 'O, həqiqətən kitabları xoşlayır',
        tr: 'He really likes books'
      },
      {
        id: '10',
        descr: '‘Also’ adətən mübtədadan sonra yerləşir. ‘So’ sözün müxtəlif mənası var, əgər bu sözlə ‘belə’ demək istəyiriksə, o, cümlənin sonunda yerləşir',
        expl: 'He/She/It also feil+s so',
        sntc: 'O da belə düşünür',
        tr: 'She also thinks so'
      },
    ],
    [{
        id: '11',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan və tək halında olan isimlərin qarşısında istifadə olunur. Əgər isim sait səslə başlayırsa an artikl istifadə olunur',
        expl: 'mübtəda feil an ...',
        sntc: 'Məndə alma var',
        tr: 'I have an apple'
      },
      {
        id: '12',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan və tək halında olan isimlərin qarşısında qoyulur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'mübtəda feil a ...',
        sntc: 'Mənim bacım var',
        tr: 'I have a sister'
      },
      {
        id: '13',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'mübtəda feil ...',
        sntc: 'Onların pulu var',
        tr: 'They have money'
      },
      {
        id: '14',
        descr: 'İsmin önündə sifət varsa qeyri-müəyyən artikl a(an) ondan daha əvvəl yerləşir',
        expl: 'mübtəda feil an sifət ...',
        sntc: 'Mənim maraqlı fikrim var',
        tr: 'I have an interesting idea'
      },
      {
        id: '15',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'mübtəda also feil ...',
        sntc: 'Onun da pulu var',
        tr: 'He also has money'
      },
      {
        id: '16',
        descr: 'Qeyri-müəyyən artikl a(an) cəm halında olan isimlərlə istifadə olunmur',
        expl: 'mübtəda feil ...',
        sntc: 'Mənim kitablarım var',
        tr: 'I have books'
      },
      {
        id: '17',
        descr: 'Qeyri-müəyyən artikl a(an) yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'mübtəda feil a ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
      {
        id: '18',
        descr: 'Əgər isim sifətlə birgə işlənirsə qeyri-müyəyyən artikl a(an) sifətdən əvvəl yerləşir',
        expl: 'mübtəda feil ... sifət isim',
        sntc: 'O yeni evdə yaşayır',
        tr: 'He lives in new house'
      },
      {
        id: '19',
        descr: 'Qeyri-müəyyən artikl a(an) işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'mübtəda feil in işarə\u00A0əvəzliyi ...',
        sntc: 'O bu yerdə işləyir',
        tr: 'She works in this place'
      },
      {
        id: '20',
        descr: 'Qeyri-müəyyən artikl a(an) işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'mübtəda feil in işarə\u00A0əvəzliyi ...',
        sntc: 'Onlar bu şəhərdə yaşayırlar',
        tr: 'They live in this city'
      },
    ],
    [{
        id: '21',
        descr: '‘He/she/it + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'mübtəda feil+es ...',
        sntc: 'O, məktəbə gedir',
        tr: 'He goes to school'
      },
      {
        id: '22',
        descr: '‘He/she/it + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'mübtəda feil+es ...',
        sntc: 'O, televizora baxır',
        tr: 'She watches TV'
      },
      {
        id: '23',
        descr: '‘He/she/it + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə ona ‘es’ əlavə olunur',
        expl: 'mübtəda feil+es ...',
        sntc: 'O, sənin üçün darıxır',
        tr: 'He misses you'
      },
      {
        id: '24',
        descr: 'Ümumi qaydaya əsasən İngilis dilində iki feil sözönü (to) koməyi ilə birləşirlər',
        expl: 'mübtəda feil to feil ...',
        sntc: 'Mən bunu anlamağa çalışıram',
        tr: 'I try to understand it'
      },
      {
        id: '25',
        descr: 'Ümumi qaydaya əsasən often adətən mübtədadan sonra yer tutur',
        expl: 'mübtəda often feil+es ...',
        sntc: 'O, tez-tez kinoteatra gedir',
        tr: 'She often goes to the cinema'
      },
      {
        id: '26',
        descr: 'Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşirlər',
        expl: 'mübtəda feil+es ... very well',
        sntc: 'O, bunu çox yaxşı edir',
        tr: 'He does it very well'
      },
      {
        id: '27',
        descr: '‘He/she/it + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'mübtəda feil+es ...',
        sntc: 'O, İngilis dilini öyrədir',
        tr: 'She teaches English'
      },
      {
        id: '28',
        descr: 'He/she/it sözlər ilə have felin has forması işlənir',
        expl: 'mübtəda feil ...',
        sntc: 'Onun evi var',
        tr: 'He has a house'
      },
      {
        id: '29',
        descr: 'He/she/it sözlər ilə have felin has forması işlənir',
        expl: 'mübtəda feil ...',
        sntc: 'Onun dollarları var',
        tr: 'She has dollars'
      },
      {
        id: '30',
        descr: 'He/she/it sözlər ilə have felin has forması işlənir',
        expl: 'mübtəda feil a ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
    ],
    [{
        id: '31',
        descr: 'mübtədalərin istifadə qaydaları. Ümümi anlayış əldə etmək üçün əvəzliklər cədvəlinə baxmaq məsləhətdir. I - my (mənim)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Mənim dostum hər şeyi bilir',
        tr: 'My friend knows everything'
      },
      {
        id: '32',
        descr: 'Aşağıdaki nümunədə müəyyən artikl (the) ayrı obyekti eyni tipdə olan obyektlərdən fərqləndirir. All the information - bütün (müəyyən) məlumatlar',
        expl: '... all the information',
        sntc: 'Mənim bacım adətən bütün məlumatları yoxlayır',
        tr: 'My sister usually checks all the information'
      },
      {
        id: '33',
        descr: 'mübtədalərin istifadə qaydaları. They - their (onların)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onların evi böyük görünür',
        tr: 'Their house seems big'
      },
      {
        id: '34',
        descr: 'İngilis dilində müəyyən artikl (the) köməyi ilə formalaşan sabit ifadələr var. We - our (bizim)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... the same',
        sntc: 'Bizim müəllimimiz də eyni fikirdədir',
        tr: 'Our teacher thinks the same'
      },
      {
        id: '35',
        descr: 'mübtədalərin istifadə qaydaları. We - our (bizim)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Bizim anamız işə gedir',
        tr: 'Our mother goes to wor\u202Ek'
      },
      {
        id: '36',
        descr: 'mübtədalərin istifadə qaydaları. I - my (mənim)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... always feil ...',
        sntc: 'Mənim dostlarım həmişə mənə dəstək olur',
        tr: 'My friends always support me'
      },
      {
        id: '37',
        descr: 'mübtədalərin istifadə qaydaları. He - his (onun, kişi cinsi)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil+es ...',
        sntc: 'Onun bacısı məktəbə gedir',
        tr: 'His sister goes to school'
      },
      {
        id: '38',
        descr: 'mübtədalərin istifadə qaydaları. She - her (onun, qadın cinsi)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun sözləri qəribə gəlir',
        tr: 'Her words seem strange'
      },
      {
        id: '39',
        descr: 'mübtədalərin istifadə qaydaları. She - her (onun, qadın cinsi)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun anası orada işləyir',
        tr: 'Her mother works there'
      },
      {
        id: '40',
        descr: '‘It’ sözü əşya və heyvana istinad etmək üçün istifadə olunur. It - its (onun, orta cins)',
        expl: 'mübtəda feil a ... Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun şirkəti var. Onun (şirkətin) gəliri böyük görünür',
        tr: 'She has a company. Its profit seems big'
      },
    ],
    [{
        id: '41',
        descr: 'mübtədalərin istifadə qaydaları. You - your (sənin, sizin)',
        expl: 'All yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Bütün ideyalarınız maraqlı gəlir',
        tr: 'All your ideas seem interesting'
      },
      {
        id: '42',
        descr: 'mübtədalərin istifadə qaydaları. You - your (sənin)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Sənin maşının kiçik görünür',
        tr: 'Your car looks small'
      },
      {
        id: '43',
        descr: 'mübtədalərin istifadə qaydaları. You - your (sənin)',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Sənin ideyan yaxşı görünür',
        tr: 'Your idea seems good'
      },
      {
        id: '44',
        descr: 'mübtədalərin istifadə qaydaları. You - your (sənin)',
        expl: 'mübtəda feil yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Mən sənin evini bəyənirəm',
        tr: 'I like your house'
      },
      {
        id: '45',
        descr: 'mübtədalərin istifadə qaydaları. You - your (sənin)',
        expl: 'mübtəda feil yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'O, sənin maşınını bəyənir',
        tr: 'He likes your car'
      },
      {
        id: '46',
        descr: 'That (o) işarə əvəzliyi tək halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o adamı tanıyıram',
        tr: 'I know that person'
      },
      {
        id: '47',
        descr: 'Those (o) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o adamları başa düşürəm',
        tr: 'I understand those people'
      },
      {
        id: '48',
        descr: 'These (bu) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil işarə\u00A0əvəzliyi ...',
        sntc: 'O, bu şeyləri xoşlaryır',
        tr: 'She likes these things'
      },
      {
        id: '49',
        descr: 'This (bu) işarə əvəzliyi tək halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil işarə\u00A0əvəzliyi ...',
        sntc: 'O, bu maşını görür',
        tr: 'He sees this car'
      },
      {
        id: '50',
        descr: 'Those (o) işarə əvəzliyi cəm halında olan ismə işarə etmək üçün işlənir',
        expl: 'mübtəda feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o evləri görürəm',
        tr: 'I see those houses'
      },
    ],
    [{
        id: '51',
        descr: 'Arzunu ifadə etmək üçün ‘mübtəda + want + ...’ konstruksiyanı işlədin',
        expl: 'mübtəda want a sifət ...',
        sntc: 'Mən yeni maşın istəyirəm',
        tr: 'I want a new car'
      },
      {
        id: '52',
        descr: 'Arzunu ifadə etmək üçün ‘mübtəda + really want + ...’ konstruksiyanı işlədin',
        expl: 'mübtəda really want ...',
        sntc: 'Mən həqiqətən bunu istəyirəm',
        tr: 'I really want it'
      },
      {
        id: '53',
        descr: 'Arzunu ifadə etmək üçün ‘mübtəda + want + ...’ konstruksiyanı işlədin',
        expl: 'mübtəda want a sifət ...',
        sntc: 'Mən yeni ev istəyirəm',
        tr: 'I want a new house'
      },
      {
        id: '54',
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
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
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
        expl: 'mübtəda want to feil ...',
        sntc: 'Mən bunu bilmək istəyirəm',
        tr: 'I want to know it'
      },
      {
        id: '57',
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
        expl: 'mübtəda really want to feil ...',
        sntc: 'Mən həqiqətən bunu etmək istəyirəm',
        tr: 'I really want to do it'
      },
      {
        id: '58',
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
        expl: 'mübtəda want to feil ...',
        sntc: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English better'
      },
      {
        id: '59',
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
        expl: 'mübtəda want to feil a sifət ...',
        sntc: 'Mən yaxşı bir maşına sahib olmaq istəyirəm',
        tr: 'I want to have a good car'
      },
      {
        id: '60',
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün ‘mübtəda + want to + feil’ konstruksiyanı işlədin',
        expl: 'mübtəda want to feil a sifət ...',
        sntc: 'Mən yaxşı bir iş sahibi olmaq istəyirəm',
        tr: 'I want to have a good job'
      }
    ],
    [{
        id: 61,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like ...’',
        expl: 'mübtəda like ...',
        sntc: 'Mən bunu bəyənirəm',
        tr: 'I like it'
      },
      {
        id: 62,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like ...’',
        expl: 'mübtəda like ...',
        sntc: 'Biz sənin dərslərini bəyənirik',
        tr: 'We like your lessons'
      },
      {
        id: 63,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like ...’',
        expl: 'mübtəda like ...',
        sntc: 'Mən bu videonu bəyənirəm',
        tr: 'I like this video'
      },
      {
        id: 64,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like ...’',
        expl: 'mübtəda really like ...',
        sntc: 'Mən həqiqətən bunu xoşlayıram',
        tr: 'I really like it'
      },
      {
        id: 65,
        descr: 'Bir şeyi etməyi xoşuna gəldiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like to + feil ...’',
        expl: 'mübtəda really like to ...',
        sntc: 'Mən həqiqətən bunu etməyi xoşlayıram',
        tr: 'I really like to do it'
      },
      {
        id: 66,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün konstruksiya: ‘mübtəda + like ...’',
        expl: 'mübtəda also like+s ...',
        sntc: 'O da bu dərsi bəyənir',
        tr: 'She also likes this lesson'
      },
      {
        id: 67,
        descr: "Mən istərdim konstruksiyası: ‘mübtəda + would like ...’ Ingilis dilində ‘of’ sözönü ismin yiyəlik halını yaratmaq üçün istifadə olunur (mənsubiyyət bildirir)",
        expl: 'mübtəda would like a cup of ...',
        sntc: 'Mən bir fincan çay istərdim',
        tr: 'I would like a cup of tea'
      },
      {
        id: 68,
        descr: 'Mən etmək istərdim konstruksiyası: ‘mübtəda + would like to + feil ...’',
        expl: 'mübtəda would like to feil ...',
        sntc: 'O, bunu etmək istərdi',
        tr: 'He would like to do it'
      },
      {
        id: 69,
        descr: 'Mən etmək istərdim konstruksiyası: ‘mübtəda + would like to + feil ...’ Ingilis dilində ‘of’ sözönü ismin yiyəlik halını yaratmaq üçün istifadə olunur (mənsubiyyət bildirir)',
        expl: 'mübtəda would like to ... a cup of ...',
        sntc: 'Mən bir fincan qəhvə içmək istərdim',
        tr: 'I would like to drink a cup of coffee'
      },
      {
        id: 70,
        descr: 'Mən etmək istərdim konstruksiyası: ‘mübtəda + would like to + feil ...’',
        expl: 'mübtəda would like to feil ...',
        sntc: 'Mən o yeri ziyarət etmək istərdim',
        tr: 'I would like to visit that place'
      }
    ],
    [{
        id: 71,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda don’t feil',
        sntc: 'Mən bilmirəm',
        tr: 'I don’t know'
      },
      {
        id: 72,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda don’t feil',
        sntc: 'Biz başa düşmürük',
        tr: 'We don’t understand'
      },
      {
        id: 73,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda don’t feil to feil ...',
        sntc: 'Mən İngilis dilini öyrənməyə çalışmıram',
        tr: 'I don’t try to learn English'
      },
      {
        id: 74,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda don’t feil ...',
        sntc: 'Sən mənə kömək etmirsən',
        tr: 'You don’t help me'
      },
      {
        id: 75,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda don’t feil ...',
        sntc: 'Mən səninlə razı deyiləm',
        tr: 'I don’t agree with you'
      },
      {
        id: 76,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'O, bunu bilmir',
        tr: "He doesn’t know it"
      },
      {
        id: 77,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'O, bunu müzakirə etmək istəmir',
        tr: 'She doesn’t want to discuss it'
      },
      {
        id: 78,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'Bu mənə kömək etmir',
        tr: 'It doesn’t help me'
      },
      {
        id: 79,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'Bu qəribə gəlmir',
        tr: 'It doesn’t seem strange'
      },
      {
        id: 80,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not (don’t) və yaxud does not (doesn’t) köməkçi feillər işlənir',
        expl: 'mübtəda doesn’t feil',
        sntc: 'Bu işləmir',
        tr: 'It doesn’t work'
      }
    ],
    [{
        id: 81,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda city = it və ona göre doesn’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'Bu şəhər böyük görünmür',
        tr: 'This city doesn’t seem big'
      },
      {
        id: 82,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda car = it və ona göre doesn’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'Bu maşın böyük görünmür',
        tr: 'This car doesn’t seem big'
      },
      {
        id: 83,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda things = they və ona göre don’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu şeylər məni maraqlandırmır',
        tr: 'These things don’t interest me'
      },
      {
        id: 84,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda lessons = they və ona göre don’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu dərslər faydalı görünmür',
        tr: 'These lessons don’t seem useful'
      },
      {
        id: 85,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda things = they və ona göre don’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu şeylər məni cəlb etmir',
        tr: 'These things don’t attract me'
      },
      {
        id: 86,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda method = it və ona göre doesn’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'Həmin üsul maraqlı gəlmir',
        tr: 'That method doesn’t seem interesting'
      },
      {
        id: 87,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda person = he/she və ona göre doesn’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'O insan xoşbəxt görünmür',
        tr: 'That person doesn’t look happy'
      },
      {
        id: 88,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda book = it və ona göre doesn’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'O kitab maraqlı gəlmir',
        tr: 'That book doesn’t seem interesting'
      },
      {
        id: 89,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda houses = they və ona göre don’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'O evlər qəribə gəlmir',
        tr: 'Those houses don’t seem strange'
      },
      {
        id: 90,
        descr: 'Don’t və yaxud doesn’t köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda lessons = they və ona göre don’t işlənir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'O dərslər faydalı görünmür',
        tr: 'Those lessons don’t seem useful'
      }
    ],
    [{
        id: 91,
        descr: 'Ehtiyacı ifadə etmək üçün konstruksiya: ‘mübtəda + need ...’',
        expl: 'mübtəda need ...',
        sntc: 'Mənim bu məlumata ehtiyacım var',
        tr: 'I need this information'
      },
      {
        id: 92,
        descr: 'Ehtiyacı ifadə etmək üçün konstruksiya: ‘mübtəda + need ...’',
        expl: 'mübtəda need ...',
        sntc: 'Mənə bu əşya lazımdır',
        tr: 'I need this thing'
      },
      {
        id: 93,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda need to feil',
        sntc: 'Mənə bunu etmək lazımdır',
        tr: 'I need to do it'
      },
      {
        id: 94,
        descr: 'Ehtiyacı ifadə etmək üçün konstruksiya: ‘mübtəda + need ...’',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... needs ...',
        sntc: 'Mənim dostuma sənin məsləhətinə ehtiyacı var',
        tr: 'My friend needs your advice'
      },
      {
        id: 95,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda need to feil',
        sntc: 'Onlara bunu yoxlamaq lazımdır',
        tr: 'They need to check it'
      },
      {
        id: 96,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda need to ...',
        sntc: 'Bizə İngilis dilini öyrənmək lazımdır',
        tr: 'We need to learn English'
      },
      {
        id: 97,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda need to feil ...',
        sntc: 'Sənə bu səhvi düzəltmək lazımdır',
        tr: 'You need to correct this mistake'
      },
      {
        id: 98,
        descr: 'Bir şeyi etməyi ehtiyac olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda need to feil ...',
        sntc: 'Mənə onu görmək lazımdır',
        tr: 'I need to see her'
      },
      {
        id: 99,
        descr: 'Ehtiyacı ifadə etmək üçün konstruksiya: ‘mübtəda + need ...’',
        expl: 'mübtəda really needs ...',
        sntc: 'Ona həqiqətən bu lazımdır',
        tr: 'He really needs it'
      },
      {
        id: 100,
        descr: 'Bir şeyi etməyi lazım olduğunu ifadə etmək üçün konstruksiya: ‘mübtəda + need to + feil ...’',
        expl: 'mübtəda really needs to feil ...',
        sntc: 'Ona həqiqətən bu problemi həll etmək lazımdır',
        tr: 'She really needs to solve this problem'
      }
    ],
    [{
        id: 101,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən bunu bilirsən?',
        tr: 'Do you know it?'
      },
      {
        id: 102,
        descr: "İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ... . Ümummiyyətlə 'make' daha əvvəl mövcud olmayan bir şey yaratmaq, qurmaq, istehsal etmək haqqında danışırıqsa istifadə olunur. Lakin, bəzən istisna hallarla rastlaşmaq olur.",
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Mən səhvlər buraxıram?',
        tr: 'Do I make mistakes?'
      },
      {
        id: 103,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən məni anlayırsan?',
        tr: 'Do you understand me?'
      },
      {
        id: 104,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən mənimlə razısan?',
        tr: 'Do you agree with me?'
      },
      {
        id: 105,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən mənə dəstəksən?',
        tr: 'Do you support me?'
      },
      {
        id: 106,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Onların köməyə ehtiyacı var?',
        tr: 'Do they need hel\u202Ep?'
      },
      {
        id: 107,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən mənim qərarımı dəstəkləyirsən?',
        tr: 'Do you support my decision?'
      },
      {
        id: 108,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda often feil ... ?',
        sntc: 'Onlar bunu tez-tez müzakirə edirlər?',
        tr: 'Do they often discuss it?'
      },
      {
        id: 109,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Bizim kifayət qədər biliyimiz var?',
        tr: 'Do we have enough knowledge?'
      },
      {
        id: 110,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Do + I/you/we/they + feil ...',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Bizim kifayət qədər praktikamız var?',
        tr: 'Do we have enough practice?'
      }
    ],
    [{
        id: 111,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda feil ... ?',
        sntc: 'O, hər şeyi ona deyir?',
        tr: 'Does she tell him everything?'
      },
      {
        id: 112,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda feil ... ?',
        sntc: 'O, bu şeyə nifrət edir?',
        tr: 'Does he hate this thing?'
      },
      {
        id: 113,
        descr: 'İfadəli feil: look for - axtarmaq',
        expl: 'Does mübtəda look for ... ?',
        sntc: 'O, iş axtarır?',
        tr: 'Does he look for a job?'
      },
      {
        id: 114,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda feil ... ?',
        sntc: 'Ona ora gəlmək lazımdır?',
        tr: 'Does she need to come there?'
      },
      {
        id: 115,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda feil ... ?',
        sntc: 'Ona bunu etmək lazımdır?',
        tr: 'Does he need to do it?'
      },
      {
        id: 116,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda feil a sifət ... ?',
        sntc: 'O, yeni iş tapmağa çalışır?',
        tr: 'Does he try to find a new job?'
      },
      {
        id: 117,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda often feil ... ?',
        sntc: 'O, tez-tez bunu istifadə edir?',
        tr: 'Does she often use it?'
      },
      {
        id: 118,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda often feil ... ?',
        sntc: 'O, tez-tez televizora baxır?',
        tr: 'Does he often watch TV?'
      },
      {
        id: 119,
        descr: 'Bəzi feillərdən sonra adətən müəyyən sözönülər işlənir: listen to ... - ... qulsaq asmaq',
        expl: 'Does mübtəda often feil ... ?',
        sntc: 'O, radioya tez-tez qulaq asır?',
        tr: 'Does he often listen to the radio?'
      },
      {
        id: 120,
        descr: 'İngilis dilində sual vermək üçün konstruksiya: Does + he/she/it + feil ...',
        expl: 'Does mübtəda often feil ... ?',
        sntc: 'O, bunu tez-tez eşidir?',
        tr: 'Does he often hear it\u202E?'
      },
    ],
    [{
        id: 121,
        descr: 'Do və yaxud does köməkçi felin işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda lesson = it və ona göre does işlənir. Ümumiyyətlə desək mübtəda cəm halında olan təqdirdə ‘do’ köməkçi feil istifadə olunur, tək halında olanda ‘does’',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu dərs faydalı görünür?',
        tr: 'Does this lesson seem useful?'
      },
      {
        id: 122,
        descr: 'Aşağıdaki tapşırıqda method = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi ... feil very ... ?',
        sntc: 'Bu üsul çox maraqlı gəlir?',
        tr: 'Does this method seem very interesting?'
      },
      {
        id: 123,
        descr: 'Aşağıdaki tapşırıqda teacher = he/she və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... very ... ?',
        sntc: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
        tr: 'Does this teacher explain everything very well?'
      },
      {
        id: 124,
        descr: 'Aşağıdaki tapşırıqda information = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu məlumat faydasız görünür?',
        tr: 'Does this information seem useless?'
      },
      {
        id: 125,
        descr: 'Aşağıdaki tapşırıqda thing = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu şey vacib görünür?',
        tr: 'Does this thing seem important?'
      },
      {
        id: 126,
        descr: 'Aşağıdaki tapşırıqda lessons = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi ... feil mübtəda?',
        sntc: 'Bu dərslər sənə kömək edir?',
        tr: 'Do these lessons help you?'
      },
      {
        id: 127,
        descr: 'Aşağıdaki tapşırıqda students = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu tələbələr əla nəticələr göstərirlər?',
        tr: 'Do these students show excellent results?'
      },
      {
        id: 128,
        descr: 'Aşağıdaki tapşırıqda students = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'O tələbələr İngilis dilində düzgün danışırlar?',
        tr: 'Do those students speak English correctly?'
      },
      {
        id: 129,
        descr: 'Aşağıdaki tapşırıqda things = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu şeylər sənə kömək edir?',
        tr: 'Do these things help you?'
      },
      {
        id: 130,
        descr: 'Aşağıdaki tapşırıqda lessons = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu dərslər faydalı görünür?',
        tr: 'Do these lessons seem useful?'
      }
    ],
    [{
        id: 131,
        descr: 'Do və yaxud does işlənilməsi mübtədadan asılıdır. Aşağıdaki tapşırıqda friend = he/she və ona göre does işlənir. Ümumiyyətlə desək mübtəda cəm halında olan təqdirdə ‘do’ köməkçi feil istifadə olunur, tək halında olanda ‘does’',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin dostun sənə kömək edir?',
        tr: 'Does your friend help you?'
      },
      {
        id: 132,
        descr: 'Aşağıdaki tapşırıqda friends = they və ona göre do işlənir',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Onların dostları onlara kömək edirlər?',
        tr: 'Do their friends help them?'
      },
      {
        id: 133,
        descr: 'Aşağıdaki tapşırıqda friends = they və ona göre do işlənir',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Mənim dostlarım məni dəstəkləyir?',
        tr: 'Do my friends support me?'
      },
      {
        id: 134,
        descr: 'Aşağıdaki tapşırıqda friend = he/she və ona göre do işlənir',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin dostun səni dəstəkləyir?',
        tr: 'Does your friend support you?'
      },
      {
        id: 135,
        descr: 'Aşağıdaki tapşırıqda person = he/she və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Bu adamın bizim köməyimizə ehtiyacı var?',
        tr: 'Does this person need our help?'
      },
      {
        id: 136,
        descr: 'Aşağıdaki tapşırıqda result = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Bu nəticə səndən asılıdır?',
        tr: 'Does this result depend on you?'
      },
      {
        id: 137,
        descr: 'Aşağıdaki tapşırıqda exercise = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Bu tapşırıq çox asan gəlir?',
        tr: 'Does this exercise seem too easy?'
      },
      {
        id: 138,
        descr: 'Aşağıdaki tapşırıqda information = it və ona göre does işlənir',
        expl: 'Does işarə\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Bu məlumat faydalı görünür?',
        tr: 'Does this information seem useful?'
      },
      {
        id: 139,
        descr: 'Aşağıdaki tapşırıqda lessons = they və ona göre do işlənir',
        expl: 'Do işarə\u00A0əvəzliyi isim feil ... ?',
        sntc: 'O dərslər faydalı görünür?',
        tr: 'Do those lessons seem useful?'
      },
      {
        id: 140,
        descr: 'Aşağıdaki tapşırıqda teacher = he/she və ona göre does işlənir',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Onun müəllimi onun bütün səhvlərini düzəldir?',
        tr: 'Does his teacher correct all his mistakes?'
      }
    ],
    [{
        id: 141,
        descr: 'Xüsusi sual göstəricilər cümlənin əvvəlində yerləşir. Where - hara, harada, haraya?',
        expl: 'Where do mübtəda feil?',
        sntc: 'Sən harada yaşayırsan?',
        tr: 'Where do you live?'
      },
      {
        id: 142,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why do mübtəda feil so?',
        sntc: 'Sən niyə belə düşünürsən?',
        tr: 'Why do you think so?'
      },
      {
        id: 143,
        descr: 'How - necə, nəcür?',
        expl: 'How do mübtəda feil ... ?',
        sntc: 'Sən bu ideyanı necə hesab edirsən?',
        tr: 'How do you find this idea?'
      },
      {
        id: 144,
        descr: 'When - nə vaxt, nə zaman',
        expl: 'When do mübtəda feil ... ?',
        sntc: 'Sənin ne vaxt boş vaxtın olur?',
        tr: 'When do you have free time?'
      },
      {
        id: 145,
        descr: 'Həmçinin İngilis dilində sual söz köməyi ilə yaranan sabit konstruksiyalar var. What kind of - nə cür, nə tip?',
        expl: 'What kind of ... do mübtəda feil?',
        sntc: 'Sən nə cür kitablar oxuyursan?',
        tr: 'What kind of books do you read?'
      },
      {
        id: 146,
        descr: 'How much (how many - sayılan isimlər ilə) - nə qədər?',
        expl: 'How much ... do mübtəda feil ... ?',
        sntc: 'Sənin üstündə nə qədər pul var?',
        tr: 'How much money do you have with you?'
      },
      {
        id: 147,
        descr: 'What time - saat neçədə, nə vaxt? İfadəli feil: get up - qalxmaq, yuxudan oyanmaq',
        expl: 'What time do mübtəda get up?',
        sntc: 'Sən nə vaxt qalxırsan?',
        tr: 'What time do you get up?'
      },
      {
        id: 148,
        descr: 'Where - hara, harada?',
        expl: 'Where do mübtəda feil?',
        sntc: 'Sən hara gedirsən?',
        tr: 'Where do you go?'
      },
      {
        id: 149,
        descr: 'What time - nə vaxt, saat neçədə? go to bed - yatmağa getmək',
        expl: 'What time ... do mübtəda go to bed?',
        sntc: 'Sən nə vaxt yatırsan?',
        tr: 'What time do you go to bed?'
      },
      {
        id: 150,
        descr: 'Who (kim?) sual sözü köməyi ilə mübtədaya sual verilən zaman köməkçi feil işlənmir',
        expl: 'Who feil ... ?',
        sntc: 'Məni kim dəstəkləyir?',
        tr: 'Who supports me?'
      }
    ],
    [{
        id: 151,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Where does mübtəda feil?',
        sntc: 'O, harada işləyir?',
        tr: 'Where does she work?'
      },
      {
        id: 152,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why does mübtəda feil ... ?',
        sntc: 'O, niyə elə tez-tez şikayət edir?',
        tr: 'Why does he complain so often?'
      },
      {
        id: 153,
        descr: 'Why - niyə, nə üçün?',
        expl: 'Why does mübtəda feil ... ?',
        sntc: 'O, niyə pul ödəməkdən imtina edir?',
        tr: 'Why does he refuse to pay?'
      },
      {
        id: 154,
        descr: 'What - nə, hansı?',
        expl: 'What does mübtəda feil ... ?',
        sntc: 'O, nəyi əlavə etmək istəyir?',
        tr: 'What does he want to add?'
      },
      {
        id: 155,
        descr: 'How - necə, nəcür?',
        expl: 'How does mübtəda feil ... ?',
        sntc: 'O, sizi necə dəstəkləyir?',
        tr: 'How does he support you?'
      },
      {
        id: 156,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When does mübtəda feil ... ?',
        sntc: 'O, özünü nə vaxt xoşbəxt hiss edir?',
        tr: 'When does he feel happy?'
      },
      {
        id: 157,
        descr: 'What drink - hansı içki?',
        expl: 'What drink does mübtəda feil?',
        sntc: 'O, hansı içkiyə üstünlük verir?',
        tr: 'What drink does he prefer?'
      },
      {
        id: 158,
        descr: 'Which və what "hansı" kimi tərcümə olunurlar, lakin fərq ondadır ki, which müəyyən bir obyekt qrupundan bir şey seçməli olduğunuz hallarda istifadə olunur',
        expl: 'Which ... does mübtəda usually feil?',
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
        expl: 'How long does it take mübtəda to get to ... ?',
        sntc: 'Sənin işə çatmağın nə qədər vaxt çəkir?',
        tr: 'How long does it take you to get to work\u202E?'
      }
    ],
    [{
        id: 161,
        descr: 'Where - hara, harada, haraya?',
        expl: 'Where does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ?',
        sntc: 'Sənin atan harada işləyir?',
        tr: 'Where does your father work?'
      },
      {
        id: 162,
        descr: 'Why - niyə?',
        expl: 'Why do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin dostların nə üçün səninlə razılaşmır?',
        tr: 'Why do your friends disagree with you?'
      },
      {
        id: 163,
        descr: 'How - necə, nəcür?',
        expl: 'How do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin dostların bunu necə idarə edir?',
        tr: 'How do your friends control it?'
      },
      {
        id: 164,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil isim ?',
        sntc: 'Senin atan evi nə vaxt tərk edir?',
        tr: 'When does your father leave home?'
      },
      {
        id: 165,
        descr: 'When - nə zaman, nə vaxt?',
        expl: 'When do işarə\u00A0əvəzliyi isim feil ?',
        sntc: 'Bu şeylər nə vaxt baş verir?',
        tr: 'When do these things happen?'
      },
      {
        id: 166,
        descr: 'What - nə, hansı',
        expl: 'What do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim usually feil ?',
        sntc: 'Sənin dostların adətən nə sifariş edir?',
        tr: 'What do your friends usually order?'
      },
      {
        id: 167,
        descr: 'What - nə, hansı?',
        expl: 'What isim do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin müəllimlərin sənə nə məsləhət verirlər?',
        tr: 'What advice do your teachers give you?'
      },
      {
        id: 168,
        descr: 'What kind of - nə cür, nə tip?',
        expl: 'What kind of isim does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ?',
        sntc: 'Onun müəllimi nə cür nümunələr verir?',
        tr: 'What kind of examples does his teacher give?'
      },
      {
        id: 169,
        descr: 'How much - nə qədər? (sayılmayan isimlər ilə)',
        expl: 'How much ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ?',
        sntc: 'Sənin biznes yoldaşının nə qədər boş vaxtı var?',
        tr: 'How much free time does your business partner have?'
      },
      {
        id: 170,
        descr: 'How many - nə qədər? (sayılan isimlər ilə)',
        expl: 'How many ... do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil to feil ?',
        sntc: 'Sənin dostların nə qədər İngilis sözü bilmək istəyirlər?',
        tr: 'How many English words do your friends want to know?'
      }
    ],
    [{
        id: 171,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'mübtəda feil ... very ...',
        sntc: 'Mən bunu çox yaxşı başa düşürəm',
        tr: 'I understand it very well'
      },
      {
        id: 172,
        descr: 'with great pleasure - böyük məmnuniyyətlə',
        expl: 'mübtəda feil+es to ... with great pleasure',
        sntc: 'O, məktəbə böyük məmnuniyyətlə gedir',
        tr: 'She goes to school with great pleasure'
      },
      {
        id: 173,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'mübtəda really feil ...',
        sntc: 'Bu həqiqətən məni maraqlandırır',
        tr: 'It really interests me'
      },
      {
        id: 174,
        descr: 'point of view - nöqteyi-nəzər',
        expl: 'mübtəda don’t share yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Biz sənin nöqteyi-nəzərinə şərik deyilik',
        tr: "We don't share your point of view"
      },
      {
        id: 175,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 176,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'O bu ideyanı xoşlamır',
        tr: "She doesn't like this idea"
      },
      {
        id: 177,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Biz İngilis dilində səhvsiz danışırıq?',
        tr: 'Do we speak English without mistakes?'
      },
      {
        id: 178,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostlarının bunu bəyənir?',
        tr: 'Do your friends like it?'
      },
      {
        id: 179,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does mübtəda feil to feil ... ?',
        sntc: 'O, bunu almaq istəyir?',
        tr: 'Does she want to buy it?'
      },
      {
        id: 180,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostun bunu bəyənir?',
        tr: 'Does your friend like it?'
      }
    ],
    [{
        id: 181,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'mübtəda like işarə\u00A0əvəzliyi isim',
        sntc: 'Mən bu üsulu bəyənirəm',
        tr: 'I like this method'
      },
      {
        id: 182,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən işə gedirəm',
        tr: 'I go to wor\u202Ek'
      },
      {
        id: 183,
        descr: 'İndiki sadə zamanda təsdiq',
        expl: 'mübtəda feil+es ...',
        sntc: 'O, işə gedir',
        tr: 'He goes to wor\u202Ek'
      },
      {
        id: 184,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'mübtəda don’t feil to feil ...',
        sntc: 'Mən orada təhsil almaq istəmirəm',
        tr: "I don't want to study there"
      },
      {
        id: 185,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'Bu faydalı görünmür',
        tr: "It doesn't seem useful"
      },
      {
        id: 186,
        descr: 'İndiki sadə zamanda inkar',
        expl: 'mübtəda doesn’t feil ...',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 187,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do mübtəda feil ... ?',
        sntc: 'Sən məni dəstəkləyirsən?',
        tr: 'Do you support me?'
      },
      {
        id: 188,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi isim feil ... ?',
        sntc: 'Sənin dostların bunu bəyənir?',
        tr: 'Do your friends like it\u202E?'
      },
      {
        id: 189,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does mübtəda feil ... ?',
        sntc: 'O, səninlə razıdır?',
        tr: 'Does he agree with you?'
      },
      {
        id: 190,
        descr: 'İndiki sadə zamanda sual',
        expl: 'Does mübtəda feil işarə\u00A0əvəzliyi isim ?',
        sntc: 'O, bu şeyə nifrət edir?',
        tr: 'Does he hate this thing?'
      }
    ],
    [{
        id: 191,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün: I like + ...',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu bəyənirəm',
        tr: 'I like i\u202Et'
      },
      {
        id: 192,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün: I like + ...',
        expl: 'mübtəda feil ...',
        sntc: 'O, bunu bəyənir',
        tr: 'She likes i\u202Et'
      },
      {
        id: 193,
        descr: 'Mən istərdim konstruksiyası: I would like + ...',
        expl: 'mübtəda would like ...',
        sntc: 'Mən bunu istərdim',
        tr: 'I would like i\u202Et'
      },
      {
        id: 194,
        descr: 'Mən istərdim konstruksiyası: I would like + ...',
        expl: 'mübtəda would like ...',
        sntc: 'O, bunu istərdi',
        tr: 'He would like i\u202Et'
      },
      {
        id: 195,
        descr: 'Mən istərdim konstruksiyası: I would like to feil ...',
        expl: 'mübtəda would like to thank mübtəda for ...',
        sntc: 'Mən sənə hər şeyə görə təşəkkür etmək istərdim',
        tr: 'I would like to thank you for everything'
      },
      {
        id: 196,
        descr: 'Arzunu ifadə etmək üçün: I want + ...',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar bunu istəyirlər',
        tr: 'They want i\u202Et'
      },
      {
        id: 197,
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün: I want to + feil + ...',
        expl: 'mübtəda feil to feil ...',
        sntc: 'Mən bunu etmək istəyirəm',
        tr: 'I want to do i\u202Et'
      },
      {
        id: 198,
        descr: 'Bir şey etmək arzusunu ifadə etmək üçün: I want to + feil + ...',
        expl: 'mübtəda feil to feil ...',
        sntc: 'Mən İngilis dilini çox yaxşı bilmək istəyirəm',
        tr: 'I want to know English very well'
      },
      {
        id: 199,
        descr: 'Ehtiyacı ifadə etmək üçün: I need + ...',
        expl: 'mübtəda feil ...',
        sntc: 'Mənim buna ehtiyacım var',
        tr: 'I need i\u202Et'
      },
      {
        id: 200,
        descr: 'Bir şey etmək ehtiyacını ifadə etmək üçün: I need to feil ...',
        expl: 'mübtəda feil to feil ...',
        sntc: 'Mənə bunu bilmək lazımdır',
        tr: 'I need to know i\u202Et'
      }
    ],
    [{
        id: 201,
        descr: 'Xüsusi sual. Why - niyə, nə üçün?',
        expl: 'Why do mübtəda feil ... ?',
        sntc: 'Sən nəyə görə İngilis dilini öyrənirsən?',
        tr: 'Why do you learn English?'
      },
      {
        id: 202,
        descr: 'What - nə, hansı?',
        expl: 'What do mübtəda feil ... ?',
        sntc: 'Sən bu barədə nə düşünürsən?',
        tr: 'What do you think about it\u202E?'
      },
      {
        id: 203,
        descr: 'Who - kim, kimi, kimə?',
        expl: 'Who do mübtəda feil?',
        sntc: 'Sən kimi tanıyırsan?',
        tr: 'Who do you know?'
      },
      {
        id: 204,
        descr: 'Who - kim, kimi, kimə?',
        expl: 'Who does mübtəda feil to feil ?',
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
        expl: 'What ... do mübtəda feil ... ?',
        sntc: 'Evdə hansı İngilis kitabların var?',
        tr: 'What English books do you have at home?'
      },
      {
        id: 208,
        descr: 'What kind of - nə cür, nə tip?',
        expl: 'What kind of isim do mübtəda feil?',
        sntc: 'Sən nə cür musiqi xoşlayırsan?',
        tr: 'What kind of music do you like?'
      },
      {
        id: 209,
        descr: 'Sayılmayan isimlərlə - how much',
        expl: 'How much ... do mübtəda feil?',
        sntc: 'Sənin nə qədər boş vaxtın var?',
        tr: 'How much free time do you have?'
      },
      {
        id: 210,
        descr: 'Sayılan isimlərlə - how many',
        expl: 'How many ... do mübtəda feil?',
        sntc: 'Sən nə qədər İngilis sözü bilirsən?',
        tr: 'How many English words do you know?'
      }
    ],
    [{
        id: 211,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: 'mübtəda feil ... very well',
        sntc: 'Mən bunu çox yaxşı bilirəm',
        tr: 'I know i\u202Et very well'
      },
      {
        id: 212,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: 'mübtəda feil to feil ... very well',
        sntc: 'Mən İngilis dilində çox yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English very well'
      },
      {
        id: 213,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: 'mübtəda feil very hard',
        sntc: 'Mən çox çalışıram',
        tr: 'I work very hard'
      },
      {
        id: 214,
        descr: 'Always/often/usually adətən mübtədadan sonra yer tuturlar',
        expl: 'mübtəda often feil ...',
        sntc: 'O, tez-tez bu barədə məndən soruşur',
        tr: 'He often asks me about i\u202Et'
      },
      {
        id: 215,
        descr: 'Go to the cinema/retaurant/gym/park - kinoya getmək',
        expl: 'How often do mübtəda feil to the cinema',
        sntc: 'Sən nə sıxlıqda kinoteatra gedirsən?',
        tr: 'How often do you go to the cinema?'
      },
      {
        id: 216,
        descr: 'Always/often/usually adətən mübtədadan sonra yer tuturlar',
        expl: 'What time mübtəda usually feil ... ?',
        sntc: 'O, adətən evə nə vaxt gəlir?',
        tr: 'What time does he usually come home?'
      },
      {
        id: 217,
        descr: '‘Also’ və ‘too’ eyni cür tərcümə olunurlar (də), lakin ‘also’ adətən mübtədadan sonra yer tutur, ‘too’ isə cümlənin sonunda',
        expl: 'mübtəda also feil ...',
        sntc: 'Mən də bunu xoşlayıram',
        tr: 'I also like i\u202Et'
      },
      {
        id: 218,
        descr: '‘Also’ və ‘too’ eyni cür tərcümə olunurlar (də), lakin ‘also’ adətən mübtədadan sonra yer tutur, ‘too’ isə cümlənin sonunda',
        expl: '..., too',
        sntc: 'Mən də bunu xoşlayıram',
        tr: 'I like it\u202E, too'
      },
      {
        id: 219,
        descr: 'Say/tell – demək. Say - ümumiyyətlə nesə demək , tell - kiməsə nesə demək',
        expl: 'mübtəda feil to tell mübtəda ...',
        sntc: 'Sənə bu şeyi demək istəyirəm',
        tr: 'I want to tell you this thing'
      },
      {
        id: 220,
        descr: 'Say/tell – demək. Say - ümumiyyətlə nesə demək , tell - kiməsə nesə demək',
        expl: 'mübtəda feil to say it',
        sntc: 'Mən bunu demək istəyirəm',
        tr: 'I want to say i\u202Et'
      }
    ],
    [{
        id: 221,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. Ümumi anlayış əldə etmək üçün, to be feil formaları cədvəlinə baxmaq məsləhətdir. I am ... (qısa forma - I’m)',
        expl: 'mübtəda am ...',
        sntc: 'Mən evdəyəm',
        tr: 'I am at home'
      },
      {
        id: 222,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. I am ... (qısa forma - I’m)',
        expl: 'mübtəda am ...',
        sntc: 'Mən xoşbəxtəm',
        tr: 'I am happy'
      },
      {
        id: 223,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. We are ... (qısa forma - We’re)',
        expl: 'mübtəda are ...',
        sntc: 'Biz evdəyik',
        tr: 'We are at home'
      },
      {
        id: 224,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. You are ... (qısa forma - You’re)',
        expl: 'mübtəda are ...',
        sntc: 'Sən məktəbdəsən',
        tr: 'You are at school'
      },
      {
        id: 225,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ forma istifadə olunur. They are ... (qısa forma - They’re)',
        expl: 'mübtəda are ...',
        sntc: 'Onlar işdədir',
        tr: 'They are at wor\u202Ek'
      },
      {
        id: 226,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. They are ... (qısa forma - They’re)',
        expl: 'mübtəda are ...',
        sntc: 'Onlar zəngindirlər',
        tr: 'They are rich'
      },
      {
        id: 227,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. She is ... (qısa forma - She’s)',
        expl: 'mübtəda is artikl sifət isim',
        sntc: 'O, yaxşı insandır',
        tr: 'She is a good person'
      },
      {
        id: 228,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. She is ... (qısa forma - She’s)',
        expl: 'mübtəda is ...',
        sntc: 'O, evdədir',
        tr: 'She is at home'
      },
      {
        id: 229,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. He is ... (qısa forma - He’s)',
        expl: 'mübtəda is ...',
        sntc: 'O, məktəbdədir',
        tr: 'He is at school'
      },
      {
        id: 230,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur. It is ... (qısa forma - It’s)',
        expl: 'mübtəda is ...',
        sntc: 'Bu, evdədir',
        tr: 'It is at home'
      }
    ],
    [{
        id: 231,
        descr: '‘very + sifet + isim’ konstruksiyada qeyri-müəyyən artikl a(an) bir az daha sola hərəkət edir və very-nin önündə qərarlaşır',
        expl: 'mübtəda is artikl very sifət isim',
        sntc: 'Bu çox maraqlı fikirdir',
        tr: 'It is a very interesting idea'
      },
      {
        id: 232,
        descr: '‘very + sifet + isim’ konstruksiyada qeyri-müəyyən artikl a(an) bir az daha sola hərəkət edir və very-nin önündə qərarlaşır',
        expl: 'mübtəda is a very sifət isim',
        sntc: 'Bu çox yaxşı nəticədir',
        tr: 'It is a very good result'
      },
      {
        id: 233,
        descr: 'Müəyyən artikl the üstünlük dərəcəsini təyin etmək üçün istifadə oluna bilər',
        expl: 'It is the fastest isim',
        sntc: 'Bu ən sürətli maşındır',
        tr: 'It is the fastest car'
      },
      {
        id: 234,
        descr: 'Müəyyən artikl ‘the’ üstünlük dərəcəsini təyin etmək üçün istifadə oluna bilər',
        expl: 'It is the best isim',
        sntc: 'Bu ən yaxşı nümunədir',
        tr: 'It is the best example'
      },
      {
        id: 235,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada `it` formal mübtəda kimi iştirak edir və tərcümə olunmur. It is ... (qısa forma It’s ...)',
        expl: 'It is ...',
        sntc: 'İstidir',
        tr: 'It is warm'
      },
      {
        id: 236,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada `it` formal mübtəda kimi iştirak edir və tərcümə olunmur. It is ... (qısa forma It’s ...)',
        expl: 'It is ...',
        sntc: 'Qaranlıqdır',
        tr: 'It is dark'
      },
      {
        id: 237,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada `it` formal mübtəda kimi iştirak edir və tərcümə olunmur. It is ... (qısa forma It’s ...)',
        expl: 'It is a sifət isim',
        sntc: 'Soyuq gündür',
        tr: 'It is a cold day'
      },
      {
        id: 238,
        descr: 'Hava haqqında cümlə qurmaq üçün ‘to be’ feil istifadə olunur. Burada `it` formal mübtəda kimi iştirak edir və tərcümə olunmur. It is ... (qısa forma It’s ...)',
        expl: 'It is ...',
        sntc: 'Çox istidir',
        tr: 'It is too hot'
      },
      {
        id: 239,
        descr: 'To be feil köməyi ilə sadə cümlə. It is ... (qısa forma It’s ...)',
        expl: 'It is ...',
        sntc: 'Bu aydındır',
        tr: 'It is obvious'
      },
      {
        id: 240,
        descr: 'To be feil köməyi ilə sadə cümlə. It is ... (qısa forma It’s ...)',
        expl: 'It is ...',
        sntc: 'Bu qeyri-mümkündir',
        tr: 'It is impossible'
      }
    ],
    [{
        id: 241,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... so sifət',
        sntc: 'Bu elə maraqlıdır ki',
        tr: 'It’s so interesting'
      },
      {
        id: 242,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such an sifət isim',
        sntc: 'Bu elə maraqlı hekayədir ki',
        tr: 'It’s such an interesting story'
      },
      {
        id: 243,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... so sifət',
        sntc: 'Bu elə vacibdir ki',
        tr: 'It’s so important'
      },
      {
        id: 244,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such artikl sifət isim',
        sntc: 'Bu elə vacib görüşdür ki',
        tr: 'It’s such an important meeting'
      },
      {
        id: 245,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... so sifət',
        sntc: 'Bu elə populyardı ki',
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
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such a sifət isim',
        sntc: 'O, elə gözəl qızdır',
        tr: 'She’s such a beautiful girl'
      },
      {
        id: 248,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such a sifət isim',
        sntc: 'O, elə ağıllı oğlandır',
        tr: 'He’s such a clever boy'
      },
      {
        id: 249,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such a sifət isim',
        sntc: 'O, elə kasıb oğlandır ki',
        tr: 'He’s such a poor boy'
      },
      {
        id: 250,
        descr: 'So/such - ‘elə, belə’ tərcümə olunurlar, və mənalarına görə bir-biri ilə yaxın mənalı olmasına baxmayaraq fərqlı formada işlənirlər. ‘So’ - sifət və zərflərin qarşısında işlənir, ‘such’ - yalnız isimin qaşısında, əgər ismin önündə sifət varsa such sözü sifətin önünə keçir',
        expl: '... such a sifət isim',
        sntc: 'O, elə xeyirxah qadındır ki',
        tr: 'She’s such a kind woman'
      }
    ],
    [{
        id: 251,
        descr: 'Aşağıdakı tapşırıqda mübtəda (friend) = he/she və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'My mübtəda is ...',
        sntc: 'Mənim dostum evdədir',
        tr: 'My frien\u202Ed is at home'
      },
      {
        id: 252,
        descr: 'Aşağıdakı tapşırıqda mübtəda (lessons) = they və ona görə ‘to be’ felin ‘are’ forması işlənir',
        expl: 'These mübtəda are ...',
        sntc: 'Bu dərslər çox faydalıdır',
        tr: 'These lesson\u202Es are very useful'
      },
      {
        id: 253,
        descr: 'Aşağıdakı tapşırıqda mübtəda (cat) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'My mübtəda is ...',
        sntc: 'Mənim pişiyim çox ağıllıdır',
        tr: 'My ca\u202Et is very clever'
      },
      {
        id: 254,
        descr: 'Bir şey haqqında ilk dəfə danışdıqda qeyri-müəyyən artikl a(an) işlənir. İlk məlumatdan sonra, həmin isim olan digər cümlələrdə müəyyən artikl the istifadə olunur',
        expl: 'I feil a isim. The mübtəda is sifət',
        sntc: 'Mənim kompüterim var. Kompüter yenidir',
        tr: 'I have a computer. The compute\u202Er is new'
      },
      {
        id: 255,
        descr: 'Bir şey haqqında ilk dəfə danışdıqda qeyri-müəyyən artikl a(an) işlənir. İlk məlumatdan sonra, həmin isim olan digər cümlələrdə müəyyən artikl the istifadə olunur',
        expl: 'I feil a isim. The mübtəda is ...',
        sntc: 'Mənim maşınım var. Maşın çox yaxşıdır',
        tr: 'I have a car. The ca\u202Er is very good'
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
        descr: 'Aşağıdakı tapşırıqda mübtəda (love) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'mübtəda is artikl ...',
        sntc: 'Sevgi çox gözəl hissdir',
        tr: 'Lov\u202Ee is a wonderful feeling'
      },
      {
        id: 258,
        descr: 'Aşağıdakı tapşırıqda mübtəda (time) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'mübtəda is ...',
        sntc: 'Vaxt puldur',
        tr: 'Tim\u202Ee is money'
      },
      {
        id: 259,
        descr: '‘To be’ feil mənsubiyyət haqqında cümlələr qurmaq üçün istifadə olunur. I am ... (qısa forma - I`m)',
        expl: 'I am ...',
        sntc: 'Mən azərbaycanlıyam',
        tr: 'I am Azerbaijani'
      },
      {
        id: 260,
        descr: '‘To be’ feil yaş haqqında cümlələr qurmaq üçün istifadə olunur. I am ... (qısa forma - I`m)',
        expl: 'I am ...',
        sntc: 'Mənim otuz yaşım var',
        tr: 'I am thirty'
      }
    ],
    [{
        id: 261,
        descr: '‘To be’ feil köməyi ilə inkar. I am not ... (qısa forma - I’m not ...)',
        expl: 'I am not ...',
        sntc: 'Mən evdə deyiləm',
        tr: 'I am not at home'
      },
      {
        id: 262,
        descr: 'We are not ... (qısa forma - We aren’t ...)',
        expl: 'We are not ...',
        sntc: 'Biz hirsli deyilik',
        tr: 'We are not angry'
      },
      {
        id: 263,
        descr: 'You are not ... (qısa forma - You aren’t ...)',
        expl: 'You are not ...',
        sntc: 'Sən haqlı deyilsən',
        tr: 'You are not right'
      },
      {
        id: 264,
        descr: 'You are not ... (qısa forma - You aren’t ...)',
        expl: 'You are not ...',
        sntc: 'Sən birinci yerdə deyilsən',
        tr: 'You are not in the first place'
      },
      {
        id: 265,
        descr: 'They are not ... (qısa forma - They aren’t ...)',
        expl: 'They are not ...',
        sntc: 'Onlar evdə deyil',
        tr: 'They are not at home'
      },
      {
        id: 266,
        descr: 'They are not ... (qısa forma - They aren’t ...)',
        expl: 'They are not ...',
        sntc: 'Onlar bir yerdə deyillər',
        tr: 'They are not together'
      },
      {
        id: 267,
        descr: 'He is not ... (qısa forma - He isn’t ...)',
        expl: 'He is not ...',
        sntc: 'O, qoca deyil',
        tr: 'He is not old'
      },
      {
        id: 268,
        descr: 'It is not ... (qısa forma - It isn’t ...)',
        expl: 'It is not ...',
        sntc: 'Bu eyni deyil',
        tr: 'It is not the same'
      },
      {
        id: 269,
        descr: 'She is not ...(qısa forma - She isn’t ...)',
        expl: 'She is not ...',
        sntc: 'O, şəhərdə deyil',
        tr: 'She is not in the city'
      },
      {
        id: 270,
        descr: 'It formal mübtəda kimi istifadə oluna bilər. Həmin halda `it` tərcümə olunmur. It is not ... (qısa forma - It isn’t ...)',
        expl: 'It is not ...',
        sntc: 'İsti deyil',
        tr: 'It is not warm'
      }
    ],
    [{
        id: 271,
        descr: '‘To be feil köməyi ilə sual',
        expl: 'Am mübtəda ... ?',
        sntc: 'Mən haqlıyam?',
        tr: 'Am I right?'
      },
      {
        id: 272,
        descr: '‘To be’ feil köməyi ilə sual',
        expl: 'Am mübtəda ... ?',
        sntc: 'Mən şanslıyam?',
        tr: 'Am I lucky?'
      },
      {
        id: 273,
        descr: '‘To be’ feil köməyi ilə sual. Are I/we/they ... ?',
        expl: 'Are mübtəda in the ... ?',
        sntc: 'Biz birinci yerdəyik?',
        tr: 'Are we in the first place?'
      },
      {
        id: 274,
        descr: '‘To be’ feil köməyi ilə sual. Are I/we/they ... ?',
        expl: 'Are mübtəda ... ?',
        sntc: 'Siz bir yerdəsiz?',
        tr: 'Are you together?'
      },
      {
        id: 275,
        descr: '‘To be’ feil köməyi ilə sual. Are I/we/they ... ?',
        expl: 'Are mübtəda ... ?',
        sntc: 'Onlar uzaqdadı?',
        tr: 'Are they far?'
      },
      {
        id: 276,
        descr: '‘To be’ feil köməyi ilə sual. Are I/we/they ... ?',
        expl: 'Are mübtəda the best ... ?',
        sntc: 'Biz ən yaxşı tələbələrik?',
        tr: 'Are we the best students?'
      },
      {
        id: 277,
        descr: '‘To be’ feil köməyi ilə sual. Is he/she/is ... ?',
        expl: 'Is mübtəda ... ?',
        sntc: 'O, sənin dostundur?',
        tr: 'Is he your friend?'
      },
      {
        id: 278,
        descr: '‘To be’ feil köməyi ilə sual. Is he/she/is ... ?',
        expl: 'Is mübtəda artikl ... ?',
        sntc: 'Bu xüsusi təklifdir?',
        tr: 'Is it a special offer?'
      },
      {
        id: 279,
        descr: '‘To be’ feil köməyi ilə sual. Is he/she/is ... ?',
        expl: 'Is mübtəda artikl ... ?',
        sntc: 'O, uğurlu iş adamıdır?',
        tr: 'Is he a successful businessman?'
      },
      {
        id: 280,
        descr: '‘To be’ feil köməyi ilə sual. Is he/she/is ... ?',
        expl: 'Is mübtəda ... ?',
        sntc: 'O, öz otağındadır?',
        tr: 'Is she in her room?'
      }
    ],
    [{
        id: 281,
        descr: 'Aşağıdakı tapşırıqda mübtəda (video) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Onun videosu məzəlidir?',
        tr: 'Is his video funny?'
      },
      {
        id: 282,
        descr: 'Aşağıdakı tapşırıqda mübtəda (information) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Bu məlumat həqiqətən faydalıdır?',
        tr: 'Is this information really useful?'
      },
      {
        id: 283,
        descr: 'Aşağıdakı tapşırıqda mübtəda (computer) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Onun kompüteri yenidir?',
        tr: 'Is his computer new?'
      },
      {
        id: 284,
        descr: 'Aşağıdakı tapşırıqda mübtəda (knowledge) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Bu bilik kifayət edir?',
        tr: 'Is this knowledge enough?'
      },
      {
        id: 285,
        descr: 'Aşağıdakı tapşırıqda mübtəda (story) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Bu hekayə çox məzəlidir?',
        tr: 'Is this story so funny?'
      },
      {
        id: 286,
        descr: 'Aşağıdakı tapşırıqda mübtəda (news) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Xəbər maraqlıdır?',
        tr: 'Is the news interesting?'
      },
      {
        id: 287,
        descr: 'Aşağıdakı tapşırıqda mübtəda (parents) = they və ona görə ‘to be’ felin ‘are’ forması işlənir',
        expl: 'Are yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Onun valideynləri xaricdədir?',
        tr: 'Are his parents abroad?'
      },
      {
        id: 288,
        descr: 'Aşağıdakı tapşırıqda mübtəda (business) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is işarə\u00A0əvəzliyi mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Bu biznes gəlirlidir?',
        tr: 'Is this business profitable?'
      },
      {
        id: 289,
        descr: 'Aşağıdakı tapşırıqda mübtəda (university) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Universitet məşhurdur?',
        tr: 'Is the university famous?'
      },
      {
        id: 290,
        descr: 'Aşağıdakı tapşırıqda mübtəda (article) = it və ona görə ‘to be’ felin ‘is’ forması işlənir',
        expl: 'Is artikl mübtəd⁣⁣⁣⁣⁣\u202Ea ... ?',
        sntc: 'Məqalə siyasət haqqındadır?',
        tr: 'Is the article about politics?'
      }
    ],
    [{
        id: 291,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Sən haradasan?',
        tr: 'Where are you?'
      },
      {
        id: 292,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu qutuda nə var?',
        tr: 'What is in this box?'
      },
      {
        id: 293,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Sənin çantanda nə var?',
        tr: 'What is in your bag?'
      },
      {
        id: 294,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'O, niyə qəzəblidir?',
        tr: 'Why is he angry?'
      },
      {
        id: 295,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ',
        sntc: 'Necəsiz?',
        tr: 'How are you?'
      },
      {
        id: 296,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'When to\u00A0be\u00A0feil ... ?',
        sntc: 'Sən nə vaxt azadsan?',
        tr: 'When are you free?'
      },
      {
        id: 297,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'İşdə kim var?',
        tr: 'Who is at work\u202E?'
      },
      {
        id: 298,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'Sən niyə bunun əleyhinəsən?',
        tr: 'Why are you against it\u202E?'
      },
      {
        id: 299,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'How far to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu nə qədər uzaqdır?',
        tr: 'How far is it\u202E?'
      },
      {
        id: 300,
        descr: '‘To be’ feil köməyi ilə xüsusi sual',
        expl: 'How old to\u00A0be\u00A0feil mübtəda',
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
        descr: ' What is ... ? (qısa forma - What’s ... ?)',
        expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Ən yaxşı dostunun adı nədir',
        tr: 'What’s your best friend’s name'
      },
      {
        id: 305,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ?',
        sntc: 'Dərs necədir?',
        tr: 'How is the lesson?'
      },
      {
        id: 306,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ?',
        sntc: 'Kino necədir?',
        tr: 'How is the movie?'
      },
      {
        id: 307,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Sənin otağın haradadır?',
        tr: 'Where is your room?'
      },
      {
        id: 308,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu yer haradadır?',
        tr: 'Where is this place'
      },
      {
        id: 309,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Who to\u00A0be\u00A0feil ... ?',
        sntc: 'O qadın kimdir?',
        tr: 'Who is that woman?'
      },
      {
        id: 310,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Who to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu adamlar kimdir?',
        tr: 'Who are these people?'
      }
    ],
    [{
        id: 311,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil işarə\u00A0əvəzliyi mübtəda ... ?',
        sntc: 'Niyə bu qayda bələ vacibdir?',
        tr: 'Why is this rule so important?'
      },
      {
        id: 312,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil mübtəda ... ?',
        sntc: 'Sən niyə burdasan?',
        tr: 'Why are you here?'
      },
      {
        id: 313,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Onun işi nədir?',
        tr: 'What is her job?'
      },
      {
        id: 314,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How interesting to\u00A0be\u00A0feil işarə\u00A0əvəzliyi ... ?',
        sntc: 'Bu jurnal nə dərəcədə maraqlıdır?',
        tr: 'How interesting is this magazine?'
      },
      {
        id: 315,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How useful to\u00A0be\u00A0feil artikl ... ?',
        sntc: 'Dərs nə dərəcədə faydalıdır?',
        tr: 'How useful is the lesson?'
      },
      {
        id: 316,
        descr: 'To be feil köməyi ilə xüsusi sual',
        expl: 'How much to\u00A0be\u00A0feil işarə\u00A0əvəzliyi pair of ... ?',
        sntc: 'Bu cüt şalvar neçəyədir?',
        tr: 'How much is this pair of trousers?'
      },
      {
        id: 317,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'mübtəda to\u00A0be\u00A0feil full of ...',
        sntc: 'Biz nikbinliklə doluyuq',
        tr: 'We are full of optimism'
      },
      {
        id: 318,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'mübtəda to\u00A0be\u00A0feil full of ...',
        sntc: 'Mən güclə doluyam',
        tr: 'I am full of power'
      },
      {
        id: 319,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'mübtəda to\u00A0be\u00A0feil on holiday',
        sntc: 'O, məzuniyyətdədir',
        tr: 'He is on holiday'
      },
      {
        id: 320,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'mübtəda to\u00A0be\u00A0feil on holiday',
        sntc: 'Biz məzuniyyətdəyik',
        tr: 'We are on holiday'
      }
    ],
    [{
        id: 321,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'O, hamamda deyil',
        tr: 'He isn’t in the bathroom'
      },
      {
        id: 322,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'O, mətbəxdə deyil',
        tr: 'She isn’t in the kitchen'
      },
      {
        id: 323,
        descr: 'İdiom: at all - heç',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Biz heç yorulmamışıq',
        tr: 'We aren’t tired at all'
      },
      {
        id: 324,
        descr: 'İdiom: at all - heç',
        expl: 'artikl mübtəda to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Kitab heç darıxdırıcı deyil',
        tr: 'The boo\u202Ek isn’t boring at all'
      },
      {
        id: 325,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma satisfied with ...',
        sntc: 'Bu nəticə məni qane edir',
        tr: "I'm satisfied with this result"
      },
      {
        id: 326,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'Bu, qutuda deyil',
        tr: 'It isn’t in the box'
      },
      {
        id: 327,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil mübtəda afraid of ...',
        sntc: 'Onlar bundan qorxurlar?',
        tr: 'Are they afraid of it\u202E?'
      },
      {
        id: 328,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil mübtəda in the ...',
        sntc: 'O, axırıncı yerdədir?',
        tr: 'Is he in the last place?'
      },
      {
        id: 329,
        descr: 'İngilis dilində yalnız tək və cəm halda işlənən sözlər var. Money sözü yalnız tək halda işlənir',
        expl: 'to\u00A0be\u00A0feil this money ...',
        sntc: 'Bu pullar kifayət edir?',
        tr: 'Is this money enough?'
      },
      {
        id: 330,
        descr: 'News sözü İngilis dilində yalnız tək halda işlənir',
        expl: 'to\u00A0be\u00A0feil artikl news ...',
        sntc: 'Xəbərlər maraqlıdır?',
        tr: 'Is the news interesting?'
      }
    ],
    [{
        id: 331,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... işarə\u00A0əvəzliyi ...',
        sntc: 'Onlar bu qərarın əleyhinədir',
        tr: "They're against this decision"
      },
      {
        id: 332,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma ...',
        sntc: 'Onlar bu qərarın əleyhinə deyillər',
        tr: "They aren't against this decision"
      },
      {
        id: 333,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil mübtəda ... ?',
        sntc: 'Onlar bu qərara qarşıdırlarmı?',
        tr: 'Are they against this decision?'
      },
      {
        id: 334,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma artikl ...',
        sntc: 'Bu eynidir',
        tr: "It's the same"
      },
      {
        id: 335,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma ...',
        sntc: 'Bu eyni deyil',
        tr: "It isn't the same"
      },
      {
        id: 336,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil mübtəda ...',
        sntc: 'Bu eynidir?',
        tr: 'Is it the same?'
      },
      {
        id: 337,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... feil ...',
        sntc: 'O, onu görməkdən şaddır',
        tr: "He's glad to see her"
      },
      {
        id: 338,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma ... feil ...',
        sntc: 'O, onu görməkdən şad deyil',
        tr: "He isn't glad to see her"
      },
      {
        id: 339,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil mübtəda ... feil ...',
        sntc: 'O, onu görməkdən şaddır?',
        tr: 'Is he glad to see her?'
      },
      {
        id: 340,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'artikl mübtəda ...',
        sntc: 'Qapı açıqdır',
        tr: 'The door is open'
      }
    ],
    [{
        id: 341,
        descr: 'İdiom: on time - vaxtında',
        expl: 'mübtəda ... on time',
        sntc: 'Biz həmişə vaxtında bitiririk',
        tr: 'We always finish on time'
      },
      {
        id: 342,
        descr: 'İdiom: on time - vaxtında',
        expl: 'mübtəda ... feil on time',
        sntc: 'O, adətən vaxtında gəlir',
        tr: 'He usually comes on time'
      },
      {
        id: 343,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: 'mübtəda ... laugh at ...',
        sntc: 'O, tez-tez onlara gülür',
        tr: 'He often laugh at them'
      },
      {
        id: 344,
        descr: 'İngilis dilində sabit ifadələr. a waste of - israf edilmə, itirmə',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma a waste of ...',
        sntc: 'Bu vaxt itkisidir',
        tr: 'It’s a waste of time'
      },
      {
        id: 345,
        descr: 'İngilis dilində önlük. In summer/winter/spring/autumn',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... and ... in summer',
        sntc: 'Mənim dostum və mən yayda orada yaşayırıq',
        tr: 'My friend and I live there in summer'
      },
      {
        id: 346,
        descr: 'İngilis dilində önlük. In summer/winter/spring/autumn',
        expl: '... in winter',
        sntc: 'Bu qışda baş verir',
        tr: 'It happens in winter'
      },
      {
        id: 347,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: 'mübtəda ... adapt to ...',
        sntc: 'Mənə bu şərtlərə uyğunlaşmaq lazımdır',
        tr: 'I need to adapt to these conditions'
      },
      {
        id: 348,
        descr: 'İngilis dilində sabit ifadə. as soon as possible - mümkün qədər tez',
        expl: 'mübtəda ... as soon as possible',
        sntc: 'Mənə bunu mümkün qədər tez bitirmək lazımdır',
        tr: 'I need to finish it as soon as possible'
      },
      {
        id: 349,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: 'mübtəda ... prepare for ...',
        sntc: 'İmtahana hazırlaşmağa ehtiyacım var',
        tr: 'I need to prepare for the exam'
      },
      {
        id: 350,
        descr: "Like-dan sonra gələn felə 'ing' əlavə etmək mümkündür",
        expl: 'mübtəda like fel+ing ...',
        sntc: 'Mən İngilis dilini öyrənməyi sevirəm',
        tr: 'I like learning English'
      }
    ],
    [{
        id: 351,
        descr: 'Ingilis dilində sözönü. by - ... qədər (vaxt haqqında). Məsələn: by six - saat altıya qədər',
        expl: 'Do mübtəda feil to feil ... by next ...',
        sntc: 'Sənə bunu gələn həftəyə qədər bitirmək lazımdır?',
        tr: 'Do you need to finish it by next week?'
      },
      {
        id: 352,
        descr: 'İdiom: at all - heç',
        expl: 'mübtəda ... at all',
        sntc: 'Bu onları heç stimullaşdırmır',
        tr: 'It doesn’t stimulate them at all'
      },
      {
        id: 353,
        descr: 'Ingilis dilində sözönü',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... a speacialist in ...',
        sntc: 'Mən bu sahədə mütəxəssis deyiləm',
        tr: 'I’m not a specialist in this area'
      },
      {
        id: 354,
        descr: 'İdiom: at all - heç',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Mən heç dəli deyiləm',
        tr: 'I’m not crazy at all'
      },
      {
        id: 355,
        descr: 'Ingilis dilində sözönü',
        expl: 'mübtəda to\u00A0be\u00A0qısa\u00A0forma convenient for ...',
        sntc: 'Bu mənim üçün münasib deyil',
        tr: 'It isn’t convenient for me'
      },
      {
        id: 356,
        descr: 'Ingilis dilində sözönü. On - üstündə',
        expl: '... on the ...',
        sntc: 'Açarlar stolun üstündədir',
        tr: 'The keys on the table'
      },
      {
        id: 357,
        descr: 'Ingilis dilində sözönü. On - üstündə',
        expl: '... on ... desk',
        sntc: 'Qələm masamın üstündə deyil',
        tr: 'The pen isn’t on my desk'
      },
      {
        id: 358,
        descr: 'İngilis dilində feillərin əksəriyyəti ilə müyəyyən sözönü işlənir',
        expl: '... communicate with ...',
        sntc: 'Mənim dostum onlarla ünsiyyət qurmur',
        tr: 'My friend doesn’t communicate with them'
      },
      {
        id: 359,
        descr: 'İfadəli feil: write down - yazmaq, qeyd etmək',
        expl: '... write ... down',
        sntc: 'Mənə bunu yazmaq lazımdır ',
        tr: 'I need to write i\u202Et down'
      },
      {
        id: 360,
        descr: 'Müyyən artikl - the. All the data - bütün (müyəyyən) məlumatlar',
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
        descr: 'İdiom: a lot - çox',
        expl: '... a lot',
        sntc: 'Bu dərsləri çox bəyənirəm',
        tr: 'I like these lessons a lot'
      },
      {
        id: 365,
        descr: 'Sadə feil köməyi ilə cümlə',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun qardaşı qəribə davranır?',
        tr: 'Does his brother behave strangely?'
      },
      {
        id: 366,
        descr: 'elder - daha yaşlı',
        expl: 'to\u00A0be\u00A0feil this mübtəda yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi elder ...',
        sntc: 'Bu oğlan onun böyük qardaşıdır?',
        tr: 'Is this boy his elder brother?'
      },
      {
        id: 367,
        descr: 'younger - yaşa görə kiçik',
        expl: 'to\u00A0be\u00A0feil this mübtəda yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi younger ...',
        sntc: 'Bu qız onun kiçik bacısıdır?',
        tr: 'Is this girl her younger sister?'
      },
      {
        id: 368,
        descr: 'İdiom: the meaning of - ... mənası',
        expl: 'Do ... the meaning of işarə⁣\u00A0əvəzliyi ...',
        sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
        tr: 'Do all the students know the meaning of this expression?'
      },
      {
        id: 369,
        descr: 'İdiom: the meaning of - ... mənası',
        expl: 'Sual\u00A0söz\u00A0qısa\u00A0forma the meaning of ...',
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
        expl: '... each other',
        sntc: 'Siz bir-birinizi tanıyırsız?',
        tr: 'Do you know each other?'
      },
      {
        id: 373,
        descr: 'Bəzi sifətlər müyəyyən sözönülərlə bir yerdə işlənir. interested in - ... maraqlanmaq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma interested in ...',
        sntc: 'Mən bununla maraqlanıram',
        tr: "I'm interested in i\u202Et"
      },
      {
        id: 374,
        descr: 'İdiom: to be keen on - həvəsi olmaq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma keen on ...',
        sntc: 'Mən musiqiyə həvəsliyəm',
        tr: "I'm keen on music"
      },
      {
        id: 375,
        descr: 'To be be keen on - həvəsi olmaq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma keen on ...',
        sntc: 'Mən oxumağa həvəsliyəm',
        tr: "I'm keen on reading"
      },
      {
        id: 376,
        descr: 'Sadə feil köməyi ilə təsdiq',
        expl: 'mübtəda feil together',
        sntc: 'Onlar bir yerdə yaşayırlar',
        tr: 'They live together'
      },
      {
        id: 377,
        descr: 'Sadə feil köməyi ilə inkar',
        expl: 'mübtəda ... feil separately',
        sntc: 'Onlar ayrı yaşamır',
        tr: "They don't live separately"
      },
      {
        id: 378,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'işarə\u00A0əvəzliyi mübtəda to\u00A0be\u00A0feil ...',
        sntc: 'Bu vaxt münasibdir',
        tr: 'This time is convenient'
      },
      {
        id: 379,
        descr: 'İngilis dilində sözönü. In the morning/evening/afternoon',
        expl: "... at ... o'clock in the ...",
        sntc: 'Mən adətən axşam saat 7-də evə gəlirəm',
        tr: "I usually come home at 7 o'clock in the evening"
      },
      {
        id: 380,
        descr: 'Xüsusi sual',
        expl: 'How ... prepare for ...',
        sntc: 'Sən adətən imtahanlarına necə hazırlaşırsan?',
        tr: 'How do you usually prepare for your exams? '
      }
    ],
    [{
        id: 381,
        descr: 'Xüsusi sual',
        expl: 'Why ... mübtəda right',
        sntc: 'Bu niyə düzgündür?',
        tr: 'Why is it right?'
      },
      {
        id: 382,
        descr: 'Xüsusi sual',
        expl: 'Why ... mübtəda feil right',
        sntc: 'Nəyə görə bu, düzgün görünür?',
        tr: 'Why does it seem right?'
      },
      {
        id: 383,
        descr: 'Xüsusi sual',
        expl: 'How ... mübtəda ... celebrate yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Adətən ad gününü necə qeyd edirsən?',
        tr: 'How do you usually celebrate your birthday?'
      },
      {
        id: 384,
        descr: 'Xüsusi sual',
        expl: 'What kind of ... mübtəda prefer to feil',
        sntc: 'Nə cür videolara baxmağa üstünlük verirsən??',
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
        descr: 'Xüsusi sual',
        expl: 'Why ... mübtəda feil right',
        sntc: 'Nəyə görə bu, düzgün görünür?',
        tr: 'Why does it seem right?'
      },
      {
        id: 387,
        descr: 'Xüsusi sual',
        expl: 'Where ... mübtəda',
        sntc: 'O, haradadır?',
        tr: 'Where is he?'
      },
      {
        id: 388,
        descr: 'Xüsusi sual',
        expl: 'Where ... mübtəda ... ?',
        sntc: 'O, harada yaşayır?',
        tr: 'Where does he live?'
      },
      {
        id: 389,
        descr: 'İdiom: thanks to ... - ... sayəsində, ... görə, ...köməyi ilə',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma fond of ... thanks to ...',
        sntc: 'Böyük tərəqqim sayəsində mən bu dərsləri çox sevirəm',
        tr: 'I’m fond of these lessons thanks to my great progress'
      },
      {
        id: 390,
        descr: 'İdiom: thanks to ... - ... sayəsində, görə, ...köməyi ilə',
        expl: 'mübtəda enjoy ... thanks to ...',
        sntc: 'Bu dərslərin sadəliyinə görə mən onlardan zövq alıram',
        tr: 'I enjoy these lessons thanks to their simplicity'
      }
    ],
    [{
        id: 391,
        descr: 'Ümümi qaydaya əsasən iki feil `to` köməyi ilə birləşirlər lakin modal feillərin əksəriyyəti bunu tələb etmir',
        expl: '... feil to feil ...',
        sntc: 'Mən yaxşı iş tapmağa çalışıram',
        tr: 'I try to find a good job'
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
        descr: 'Must modal feil vacibliyi bildirir. Must yalnız indiki zamanda olan hərəkətlərə aid işlənir, başqa zamanlarda isə onun sinonimi - have to işlənir',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən bunu etməliyəm',
        tr: 'I must do i\u202Et'
      },
      {
        id: 394,
        descr: 'Should modal feil ediləcək hərəkətin məsləhətli olduğunu, doğru fikir olduğunu bildirir, gərək kimi tərcümə olunur',
        expl: 'mübtəda modal\u00A0feil feil ...',
        sntc: 'Mən gərək bunu edim',
        tr: 'I should do i\u202Et'
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
        descr: 'I would like konstruksiyasının qısa forması əvəzliyə ‘d əlavə etməklə formalaşır. Another tək halında olan isimlə birgə işlənir',
        expl: '... like to feil in another ...',
        sntc: 'O, başqa yerdə yaşamaq istərdi',
        tr: 'She’d like to live in another place'
      },
      {
        id: 398,
        descr: 'Other cəm halında olan isimlə birgə işlənir',
        expl: 'mübtəda feil to feil other ...',
        sntc: 'Mən başqa kitablar oxumaq istəyirəm',
        tr: 'I want to read other books'
      },
      {
        id: 399,
        descr: 'Very ilə işlənən ifadələr adətən cümlənin sonunda yerləşir',
        expl: 'mübtəda usually feil very ...',
        sntc: 'O, adətən İngilis dilində çox yavaş danışır',
        tr: 'She usually speaks English very slowly'
      },
      {
        id: 400,
        descr: 'I would like konstruksiyasının qısa forması əvəzliyə ‘d əlavə etməklə formalaşır',
        expl: '... like to feil about ...',
        sntc: 'Mən bu problem haqqında danışmaq istərdim',
        tr: 'I’d like to talk about this problem'
      }
    ],
    [{
        id: 401,
        sntc: 'Onun işi nədir?',
        tr: "What's his job?",
        ch: "What's his job?"
      },
      {
        id: 402,
        sntc: 'Sən yorğunsan?',
        tr: 'Are you tired?',
        ch: 'Are you tired?'
      },
      {
        id: 403,
        sntc: 'Bu çox asan bir dərsdir',
        tr: "It's a very easy lesson",
        ch: "It's a very easy lesson"
      },
      {
        id: 404,
        sntc: 'O özünü xoşbəxt hiss edir',
        tr: 'He feels happy',
        ch: 'He feels happy'
      },
      {
        id: 405,
        sntc: 'Bu misal mənim xoşuma gəlir',
        tr: 'I like this example',
        ch: 'I like this example'
      },
      {
        id: 406,
        sntc: 'Bu nə dərəcədə vacibdir?',
        tr: 'How important is it?',
        ch: 'How important is it?'
      },
      {
        id: 407,
        sntc: 'Orada nə var?',
        tr: "What's there?",
        ch: "What's there?"
      },
      {
        id: 408,
        sntc: 'Bu layihəni gələn ilə qədər bitirməliyəm',
        tr: 'I need to finish this project by next year',
        ch: 'I need to finish this project by next year'
      },
      {
        id: 409,
        sntc: 'O, gənc bir adamdır',
        tr: "He's a young man",
        ch: "He's a young man"
      },
      {
        id: 410,
        sntc: 'Dostunun iyirmi iki yaşı var?',
        tr: 'Is your friend twenty-two?',
        ch: 'Is your friend twenty-two?'
      }
    ],
    [{
        id: 411,
        sntc: 'Onlar indi Azərbaycanda deyillər',
        tr: "They aren't in Azerbaijan now",
        ch: "They aren't in Azerbaijan now"
      },
      {
        id: 412,
        sntc: 'O, bəzən kompüter oyunları oynayır',
        tr: 'He sometimes plays computer games',
        ch: 'He sometimes plays computer games'
      },
      {
        id: 413,
        sntc: 'Çox istidir',
        tr: "It's too hot",
        ch: "It's too hot"
      },
      {
        id: 414,
        sntc: 'O, iş adamıdır',
        tr: "He's a businessman",
        ch: "He's a businessman"
      },
      {
        id: 415,
        sntc: 'Adınız nədir?',
        tr: "What's your name?",
        ch: "What's your name?"
      },
      {
        id: 416,
        sntc: 'Daha çox hansı videolara heyran qalırsan?',
        tr: 'What videos do you admire more?',
        ch: 'What videos do you admire more?'
      },
      {
        id: 417,
        sntc: 'Bu vacibdir',
        tr: "It's important",
        ch: "It's important"
      },
      {
        id: 418,
        sntc: 'Bu çox uzaqdır',
        tr: "It's so far",
        ch: "It's so far"
      },
      {
        id: 419,
        sntc: 'Nümunə çox informativdir',
        tr: 'The example is so informative',
        ch: 'The example is so informative'
      },
      {
        id: 420,
        sntc: 'Bu daha betər deyil',
        tr: "It isn't worse",
        ch: "It isn't worse"
      }
    ],
    [{
        id: 421,
        sntc: 'Sənə nə kömək edir?',
        tr: 'What helps you?',
        ch: 'What helps you?'
      },
      {
        id: 422,
        sntc: 'Kişilər buradadır',
        tr: 'The men are here',
        ch: 'The men are here'
      },
      {
        id: 423,
        sntc: 'Bu kitab nə qədərdir?',
        tr: 'How much is this book?',
        ch: 'How much is this book?'
      },
      {
        id: 424,
        sntc: 'Sən haqlısan',
        tr: "You're right",
        ch: "You're right"
      },
      {
        id: 425,
        sntc: 'Bu elə deyil',
        tr: "It isn't so",
        ch: "It isn't so"
      },
      {
        id: 426,
        sntc: 'O dərslər yararsızdır',
        tr: 'Those lessons are ineffective',
        ch: 'Those lessons are ineffective'
      },
      {
        id: 427,
        sntc: 'O, bunu çox yaxşı edir',
        tr: 'She does it very well',
        ch: 'She does it very well'
      },
      {
        id: 428,
        sntc: 'Bu reklam xoşuma gəlmir',
        tr: "I don't like this advertisement",
        ch: "I don't like this advertisement"
      },
      {
        id: 429,
        sntc: 'Bu onun rəyidir?',
        tr: 'Is it his opinion?',
        ch: 'Is it his opinion?'
      },
      {
        id: 430,
        sntc: 'O, tez-tez bu haqda düşünür?',
        tr: 'Does he often think about it?',
        ch: 'Does he often think about it?'
      }
    ],
    [{
        id: 431,
        sntc: 'Ananın neçə yaşı var?',
        tr: 'How old is your mother?',
        ch: 'How old is your mother?'
      },
      {
        id: 432,
        sntc: 'Bu çox böyük səhv deyil',
        tr: "It isn't a very big mistake",
        ch: "It isn't a very big mistake"
      },
      {
        id: 433,
        sntc: 'Bu çox yüksək səviyyədir',
        tr: "It's a very high level",
        ch: "It's a very high level"
      },
      {
        id: 434,
        sntc: 'O qədər də pis deyil',
        tr: "It isn't so bad",
        ch: "It isn't so bad"
      },
      {
        id: 435,
        sntc: 'Ümid edirəm sən bunu başa düşürsən',
        tr: 'I hope you understand it',
        ch: 'I hope you understand it'
      },
      {
        id: 436,
        sntc: 'O, yorğun deyil',
        tr: "She isn't tired",
        ch: "She isn't tired"
      },
      {
        id: 437,
        sntc: 'Gülməli videodur?',
        tr: 'Is it a funny video?',
        ch: 'Is it a funny video?'
      },
      {
        id: 438,
        sntc: 'Bu il çox çətindir',
        tr: 'This year is very difficult',
        ch: 'This year is very difficult'
      },
      {
        id: 439,
        sntc: 'Üzməyi xoşlayıram',
        tr: 'I like swimming',
        ch: 'I like swimming'
      },
      {
        id: 440,
        sntc: 'Sizi nə ruhlandırır?',
        tr: 'What inspires you?',
        ch: 'What inspires you?'
      }
    ],
    [{
        id: 441,
        sntc: 'Nə əhəmiyyətsiz görünür?',
        tr: 'What seems unimportant?',
        ch: 'What seems unimportant?'
      },
      {
        id: 442,
        sntc: 'Mənim kompüterim var. O çox güclüdür',
        tr: "I have a computer. It's very powerful",
        ch: "I have a computer. It's very powerful"
      },
      {
        id: 443,
        sntc: 'Bütün bu dərsləri həqiqətən faydalı görürəm',
        tr: 'I find all these lessons really useful',
        ch: 'I find all these lessons really useful'
      },
      {
        id: 444,
        sntc: 'Sən nə bilirsən?',
        tr: 'What do you know?',
        ch: 'What do you know?'
      },
      {
        id: 445,
        sntc: 'Təqdimat aydın deyil',
        tr: "The presentation isn't clear",
        ch: "The presentation isn't clear"
      },
      {
        id: 446,
        sntc: 'Bu çox darıxdırıcıdır',
        tr: "It's very boring",
        ch: "It's very boring"
      },
      {
        id: 447,
        sntc: 'Bu videoları çox faydalı görürəm',
        tr: 'I find these videos very useful',
        ch: 'I find these videos very useful'
      },
      {
        id: 448,
        sntc: 'Bu uşaqlar üçündür?',
        tr: 'Is it for children?',
        ch: 'Is it for children?'
      },
      {
        id: 449,
        sntc: 'Burada nə var?',
        tr: "What's here?",
        ch: "What's here?"
      },
      {
        id: 450,
        sntc: 'Onlar bir yerdə yaşamırlar',
        tr: "They don't live together",
        ch: "They don't live together"
      }
    ],
    [{
        id: 451,
        sntc: 'Bu izah aydın deyil',
        tr: 'This explanation is unclear',
        ch: 'This explanation is unclear'
      },
      {
        id: 452,
        sntc: 'Onu kim valeh edir?',
        tr: 'Who admires him?',
        ch: 'Who admires him?'
      },
      {
        id: 453,
        sntc: 'Sənin uğurun mənim uğurumdur',
        tr: 'Your success is my success',
        ch: 'Your success is my success'
      },
      {
        id: 454,
        sntc: 'O, bunu necə izah edir?',
        tr: 'How does she explain it?',
        ch: 'How does she explain it?'
      },
      {
        id: 455,
        sntc: 'O, çox zəngin insandır',
        tr: "He's a very rich person",
        ch: "He's a very rich person"
      },
      {
        id: 456,
        sntc: 'Mən bunu etməliyəm',
        tr: 'I must do it',
        ch: 'I must do it'
      },
      {
        id: 457,
        sntc: 'Sənə bunu dəyişmək lazımdır',
        tr: 'You need to change it',
        ch: 'You need to change it'
      },
      {
        id: 458,
        sntc: 'Səhvlərin üzərində işləyirsən?',
        tr: 'Do you work on your mistakes?',
        ch: 'Do you work on your mistakes?'
      },
      {
        id: 459,
        sntc: 'Mən onlara qulaq asmaq istəmirəm',
        tr: "İ don't want to listen to them",
        ch: "İ don't want to listen to them"
      },
      {
        id: 460,
        sntc: 'Bu, neçəyədir?',
        tr: 'How much does it cost?',
        ch: 'How much does it cost?'
      }
    ],
    [{
        id: 461,
        sntc: 'O, adətən hansı kanala baxır?',
        tr: 'Which channel does he usually watch?',
        ch: 'Which channel does he usually watch?'
      },
      {
        id: 462,
        sntc: 'Nəyə görə bu, düzgün görünür?',
        tr: 'Why does it seem right?',
        ch: 'Why does it seem right?'
      },
      {
        id: 463,
        sntc: 'Mən bunu bilirəm',
        tr: 'I know it',
        ch: 'I know it'
      },
      {
        id: 464,
        sntc: 'Bu şirkətin pulu var',
        tr: 'This company has money',
        ch: 'This company has money'
      },
      {
        id: 465,
        sntc: 'Məni anlayırsan?',
        tr: 'Do you understand me?',
        ch: 'Do you understand me?'
      },
      {
        id: 466,
        sntc: 'Yemək həqiqətən dadlıdır',
        tr: 'The food is really tasty',
        ch: 'The food is really tasty'
      },
      {
        id: 467,
        sntc: 'O, çox gözəl qızdır',
        tr: "She's a very beautiful girl",
        ch: "She's a very beautiful girl"
      },
      {
        id: 468,
        sntc: 'Bu çox asandır',
        tr: "It's so easy",
        ch: "It's so easy"
      },
      {
        id: 469,
        sntc: 'Bu daha yaxşıdır',
        tr: "It's better",
        ch: "It's better"
      },
      {
        id: 470,
        sntc: 'Bizim kifayət qədər praktikamız var?',
        tr: 'Do we have enough practice?',
        ch: 'Do we have enough practice?'
      }
    ],
    [{
        id: 471,
        sntc: 'Səni qorxuya salan nədir?',
        tr: 'What frightens you?',
        ch: 'What frightens you?'
      },
      {
        id: 472,
        sntc: 'Bu qədər maraqlı görünən nədir?',
        tr: 'What seems so interesting?',
        ch: 'What seems so interesting?'
      },
      {
        id: 473,
        sntc: 'Onun o yerə gəlməyi lazımdır?',
        tr: 'Does she need to come to that place?',
        ch: 'Does she need to come to that place?'
      },
      {
        id: 474,
        sntc: 'Biz bunu üçüncü nümunədə görürük',
        tr: 'We see it in the third example',
        ch: 'We see it in the third example'
      },
      {
        id: 475,
        sntc: 'Ona, bunu yazmaq lazımdır',
        tr: 'She needs to write it down',
        ch: 'She needs to write it down'
      },
      {
        id: 476,
        sntc: 'Nəyə görə onun dərsləri bu qədər yararsızdır?',
        tr: 'Why are her lessons so ineffective?',
        ch: 'Why are her lessons so ineffective?'
      },
      {
        id: 477,
        sntc: 'Onlar birlikdədirlər?',
        tr: 'Are they together?',
        ch: 'Are they together?'
      },
      {
        id: 478,
        sntc: 'O, uzun boylu bir qızdır',
        tr: "She's a tall girl",
        ch: "She's a tall girl"
      },
      {
        id: 479,
        sntc: 'Bu çox sadə cavabdır',
        tr: "It's such a simple answer",
        ch: "It's such a simple answer"
      },
      {
        id: 480,
        sntc: 'Qəribə görünən nədir?',
        tr: 'What looks strange?',
        ch: 'What looks strange?'
      }
    ],
    [{
        id: 481,
        sntc: 'Onlar bir yerdə yaşayırlar',
        tr: 'They live together',
        ch: 'They live together'
      },
      {
        id: 482,
        sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
        tr: "I don't need to analyze all the data",
        ch: "I don't need to analyze all the data"
      },
      {
        id: 483,
        sntc: 'Oyun maraqlıdır?',
        tr: 'Is the game interesting?',
        ch: 'Is the game interesting?'
      },
      {
        id: 484,
        sntc: 'Onlar sənə nə demək istəyirlər?',
        tr: 'What do they want to tell you?',
        ch: 'What do they want to tell you?'
      },
      {
        id: 485,
        sntc: 'Onlar çox ciddi öyrənirlər',
        tr: 'They study very hard',
        ch: 'They study very hard'
      },
      {
        id: 486,
        sntc: 'Bu mövzu mənim üçün çox çətindir',
        tr: 'This subject is too difficult for me',
        ch: 'This subject is too difficult for me'
      },
      {
        id: 487,
        sntc: 'Sizi daha çox nə təşviq edir?',
        tr: 'What motivates you more?',
        ch: 'What motivates you more?'
      },
      {
        id: 488,
        sntc: 'İdeya maraqlıdır?',
        tr: 'Is the idea interesting?',
        ch: 'Is the idea interesting?'
      },
      {
        id: 489,
        sntc: 'Kitab bu qədər maraqlıdır?',
        tr: 'Is the book so interesting?',
        ch: 'Is the book so interesting?'
      },
      {
        id: 490,
        sntc: 'Bu ən yaxşı kitabdır',
        tr: "It's the best book",
        ch: "It's the best book"
      }
    ],
    [{
        id: 491,
        sntc: 'Bu geyim neçəyədir?',
        tr: 'How much is that dress?',
        ch: 'How much is that dress?'
      },
      {
        id: 492,
        sntc: 'Bu ucuzdur?',
        tr: 'Is it cheap?',
        ch: 'Is it cheap?'
      },
      {
        id: 493,
        sntc: 'Siz ona dəstəksiniz?',
        tr: 'Do you support him?',
        ch: 'Do you support him?'
      },
      {
        id: 494,
        sntc: 'Dərs çox informativdir',
        tr: 'The lesson is so informative',
        ch: 'The lesson is so informative'
      },
      {
        id: 495,
        sntc: 'Onlar bir yerdədirlər',
        tr: "They're together",
        ch: "They're together"
      },
      {
        id: 496,
        sntc: 'O, bu ölkədə yaşayır',
        tr: 'He lives in this country',
        ch: 'He lives in this country'
      },
      {
        id: 497,
        sntc: 'O, bu şeyləri çox yaxşı izah edir',
        tr: 'She explains all these things very well',
        ch: 'She explains all these things very well'
      },
      {
        id: 498,
        sntc: 'Müdirim hər şeyi bilir',
        tr: 'My boss knows everything',
        ch: 'My boss knows everything'
      },
      {
        id: 499,
        sntc: 'Dostun bunu başa düşür?',
        tr: 'Does his friend understand it?',
        ch: 'Does his friend understand it?'
      },
      {
        id: 500,
        sntc: 'Onlar çox vaxt gülürlər',
        tr: 'They often laugh',
        ch: 'They often laugh'
      }
    ],
    [{
        id: 501,
        descr: 'Sifətlərin qarşısına `get` feli əlavə etdikdən sonra həmin sifət feilləşir. Məsələn: I`m rich - mən varlıyam və I`m getting rich - mən varlanıram. Yuxarıdaki cümlə indiki davamedici zamanda olduğuna görə get feilin getting forması istifadə olunub',
        expl: 'mübtəda will feil ...',
        sntc: 'Sən tezliklə yorulacaqsan',
        tr: 'You will get tired soon'
      },
      {
        id: 502,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onlar ora gedəcəklər',
        tr: 'They will go there '
      },
      {
        id: 503,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onlar gəliri artıracaqlar',
        tr: 'They will maximize the profit'
      },
      {
        id: 504,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Onun boş vaxtı olacaq',
        tr: 'He will have free time'
      },
      {
        id: 505,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'O, bunu manipulyasiya edəcək',
        tr: 'He will manipulate i\u202Et'
      },
      {
        id: 506,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Bu, ona stimul verəcək',
        tr: 'It will stimulate him'
      },
      {
        id: 507,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün qısa forma əvəzliyə `’ll` əlavə etməklə formalaşır',
        expl: 'əvəzlik+’ll feil ...',
        sntc: 'Mən bu məqsədə çatacağam',
        tr: 'I’ll achieve this aim'
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
        sntc: 'Yeni iş axtaracam',
        tr: 'I’ll look for a new job'
      },
      {
        id: 510,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün qısa forma əvəzliyə `’ll` əlavə etməklə formalaşır',
        expl: 'əvəzlik+’ll feil ...',
        sntc: 'Biz bunu düşünərik',
        tr: 'We’ll think i\u202Et over'
      }
    ],
    [{
        id: 511,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: 'mübtəda will feil ...',
        sntc: 'Hər kəs çox məyus olacaq',
        tr: 'Everyone will be very disappointed'
      },
      {
        id: 512,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Bütün xalq bunu dəstəkləyəcək',
        tr: 'All the people will support i\u202Et'
      },
      {
        id: 513,
        descr: 'İngilis dilində sabit ifadə: sooner or later - gec-tez',
        expl: 'mübtəda will feil ... sooner or later',
        sntc: 'Hər kəs gec-tez bu şəraitə uyğunlaşacaq',
        tr: 'Everyone will adapt to these conditions sooner or later'
      },
      {
        id: 514,
        descr: 'İfadəli feil:  hurry up - tələsmək',
        expl: '... mübtəda will hurry up',
        sntc: 'Mənim dostum və mən tələsəcəyik',
        tr: 'My friend and I will hurry up'
      },
      {
        id: 515,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur. Sabit ifadə: the day after tomorrow - birigün, ertəsi gün',
        expl: '... mübtəda will feil ... the day after tomorrow',
        sntc: 'Mənim dostum bu pulu birigün borc alacaq',
        tr: 'My friend will borrow this money the day after tomorrow'
      },
      {
        id: 516,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Hakimiyyət bunu hansısa yolla tənzimləyəcək',
        tr: 'The authorities will regulate i\u202Et somehow'
      },
      {
        id: 517,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Dostum və mən İngilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English'
      },
      {
        id: 518,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Müəllim onu bağışlayacaq',
        tr: 'The teacher will forgive him'
      },
      {
        id: 519,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Bu şey bir çox adam üçün birinci yerdə olacaq',
        tr: 'This thing will be in the first place for many people'
      },
      {
        id: 520,
        descr: 'Gələcək sadə zamanda cümlə qurmaq üçün will köməkçi feil tələb olunur',
        expl: '... mübtəda will feil ...',
        sntc: 'Onun dostu buna peşman olacaq ',
        tr: 'His friend will regret i\u202Et '
      }
    ],
    [{
        id: 521,
        descr: 'Gələcək sadə zamanda inkar etmək üçün konstruksiya: mübtəda + will not + feil ...',
        expl: 'mübtəda will not feil ...',
        sntc: 'Mən onun sözünü kəsmərəm',
        tr: "I will not interrupt him"
      },
      {
        id: 522,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Mən buna qarşı olmaram',
        tr: 'I won’t feil be against i\u202Et'
      },
      {
        id: 523,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Hazırlıqsız bu imtahandan keçməzsiniz',
        tr: 'You won’t pass this exam without preparation'
      },
      {
        id: 524,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil artikl solution to ...',
        sntc: 'Onlar bu problemdən çıxış yolu tapmayacaqlar',
        tr: 'They won’t find a solution to this problem'
      },
      {
        id: 525,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'O, bütün mətni lüğətsiz tərcümə etməyəcək',
        tr: 'He won’t translate all the text without a dictionary'
      },
      {
        id: 526,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Bu uğura gətirib çıxarmayacaq',
        tr: 'It won’t lead to success'
      },
      {
        id: 527,
        descr: 'İfadəli feil: take part - iştirak etmək',
        expl: 'mübtəda won’t take part...',
        sntc: 'Bu yarışmada iştirak etməyəcəm',
        tr: 'I won’t take part in this competition'
      },
      {
        id: 528,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Biz bu şirkətlə rəqabət aparmayacıq',
        tr: 'We won’t compete with this company'
      },
      {
        id: 529,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'Sən bu qərara təsir etməyəcəksən',
        tr: 'You won’t influence this decision'
      },
      {
        id: 530,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: 'mübtəda won’t feil ...',
        sntc: 'O, artıq onunla ünsiyyət qurmayacaq',
        tr: 'He won’t communicate with him anymore'
      }
    ],
    [{
        id: 531,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t insist on ...',
        sntc: 'Mənim müdirim bunu təkid etməyəcək',
        tr: 'My boss won’t insist on i\u202Et'
      },
      {
        id: 532,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər',
        tr: 'My colleagues won’t support this initiative'
      },
      {
        id: 533,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Dostum sənə kömək etməkdən imtina etməyəcək',
        tr: 'My friend won’t refuse to help you'
      },
      {
        id: 534,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Qız bunu bir günə öyrənməyəcək',
        tr: 'The girl won’t learn i\u202Et in one day'
      },
      {
        id: 535,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Oğlanlar bunu bu qədər tez xatırlamayacaq',
        tr: 'The boys won’t remember it so quickly'
      },
      {
        id: 536,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Qonaqlar bizim yoxluğumuza müşahidə etməyəcək',
        tr: 'The guests won’t notice our absence'
      },
      {
        id: 537,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Məncə, bu musiqiçi populyar olmayacaq',
        tr: 'I think this musician won’t become popular'
      },
      {
        id: 538,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Konfrans heç darıxdırıcı olmayacaq',
        tr: 'The conference won’t be boring at all'
      },
      {
        id: 539,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'O tələbələrin kifayət qədər təcrübəsi olmayacaq ',
        tr: 'Those students won’t have enough practice '
      },
      {
        id: 540,
        descr: 'Gələcək sadə zamanda inkar etmək üçün qısa forma: mübtəda + won`t + feil ...',
        expl: '... mübtəda won’t feil ...',
        sntc: 'Bu təklif bir azdan o qədər də cəlbedici olmayacaq',
        tr: 'This offer won’t be so attractive soon'
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
        sntc: 'Bu, o qədər vacib hadisə olacaq?',
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
        sntc: 'Bu onların düşüncə tərzini dəyişəcək?',
        tr: 'Will it change their attitude?'
      },
      {
        id: 546,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Səhvlərimə işarə edəcəksən? vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        tr: 'Will you point at my mistakes'
      },
      {
        id: 547,
        descr: 'Gələcək sadə zamanda sual vermək üçün köməkçi feil will cümlənin önündə yerləşir',
        expl: 'Will mübtəda feil ... ?',
        sntc: 'Bu əbədi davam edəcək?',
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
        sntc: 'Bunu axşam bişirəcəksən?',
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
        descr: '`To be able to` konstruksiyası can modal feilin sinonimidir və ondan fərqli olaraq hər zamanda istifadə oluna bilər. Azərbaycan dilinə edə bilmək, imkanı olmaq kimi tərcümə olunur',
        expl: 'How will mübtəda be able to feil... ?',
        sntc: 'Onlar bu problemi necə həll edə biləcəklər?',
        tr: 'How will they be able to solve this problem?'
      },
      {
        id: 566,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How will mübtəda feil ... ?',
        sntc: 'Bu problemi həll etməyi necə bacaracaqsan?',
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
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər. Start felindən sonra gələn feilə `ing əlavə olunur`',
        expl: 'Why will ... mübtəd\u202Ea start feil+ing ... ?',
        sntc: 'Nəyə görə partnyorunuz bunu sonradan etməyə başlayacaq?',
        tr: 'Why will your partner start doing i\u202Et later?'
      },
      {
        id: 572,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər. Continue felindən sonra gələn feilə `ing` əlavə olunur',
        expl: 'When will ... mübtəd\u202Ea continue feil+ing ... ?',
        sntc: 'Müəllim nə vaxt bunu davam etdirəcək?',
        tr: 'When will the teacher continue doing it\u202E?'
      },
      {
        id: 573,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual sözlər köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'Why will ... mübtəd\u202Ea feil ... ?',
        sntc: 'Nəyə görə dostun bunu etməkdən imtina edəcək?',
        tr: 'Why will your friend refuse to do it\u202E?'
      },
      {
        id: 574,
        descr: 'İfadəli feil: take place - baş tutmaq',
        expl: 'Where will ... mübtəd\u202Ea take place ?',
        sntc: 'Konfrans harada baş tutacaq?',
        tr: 'Where will the conference take place?'
      },
      {
        id: 575,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How will ... mübtəd\u202Ea feil ... ?',
        sntc: 'Dostun bu problemi həll etməyi necə bacaracaq?',
        tr: 'How will your friend manage to solve this problem?'
      },
      {
        id: 576,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'What ... will ... mübtəd\u202Ea feil on a regular basis ?',
        sntc: 'Dostların müntəzəm olaraq hansı kanallara baxacaqlar?',
        tr: 'What channels will your friends watch on a regular basis?'
      },
      {
        id: 577,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How many ... will ... mübtəd\u202Ea feil ?',
        sntc: 'Ailəniz neçə yerə baş çəkəcək?',
        tr: 'How many places will your family visit?'
      },
      {
        id: 578,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər',
        expl: 'How much ... will mübtəda feil ... ?',
        sntc: 'Ona nə qədər pul borclu olacaqsan?',
        tr: 'How much money will you owe him?'
      },
      {
        id: 579,
        descr: 'Gələcək sadə zamanda xüsusi sual vermək üçün sual konstruksiyalar köməkçi feildən daha əvvəl yerləşirlər. Whose - kimin?',
        expl: 'Whose ... will ... mübtəd\u202Ea feil ?',
        sntc: 'Dostun kimin təklifini qəbul edəcək?',
        tr: 'Whose offer will your friend take?'
      },
      {
        id: 580,
        descr: 'İfadəli feil: be away - olmama, uzaqda olmaq',
        expl: 'How long will ... mübtəd\u202Ea be away ?',
        sntc: 'Valideynlərin nə vaxta qədər olmayacaqlar?',
        tr: 'How long will your parents be away?'
      }
    ],
    [{
        id: 581,
        sntc: 'Siz bilirsiniz ki, biz ingilis dilini addım-addım öyrənirik',
        tr: 'You know that we learn English step by step',
        ch: 'You know that we learn English step by step'
      },
      {
        id: 582,
        sntc: 'Mən bu çempionatda iştirak etməyəcəm',
        tr: "I won't take part in this championship",
        ch: "I won't take part in this championship"
      },
      {
        id: 583,
        sntc: 'Mən yerimdə olmayacam',
        tr: 'I’ll be out',
        ch: 'I’ll be out'
      },
      {
        id: 584,
        sntc: 'Sizi daha çox nə təşviq edir?',
        tr: 'What motivates you more?',
        ch: 'What motivates you more?'
      },
      {
        id: 585,
        sntc: 'Hakimiyyət nə isə etməlidir',
        tr: 'The authorities will need to do something',
        ch: 'The authorities will need to do something'
      },
      {
        id: 586,
        sntc: 'Məncə, mən avtobusu qaçıracağam',
        tr: 'I think I’ll miss the bus',
        ch: 'I think I’ll miss the bus'
      },
      {
        id: 587,
        sntc: 'Dostum və mən idmana daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to sport',
        ch: 'My friend and I will devote more free time to sport'
      },
      {
        id: 588,
        sntc: 'İdeya maraqlıdır?',
        tr: 'Is the idea interesting?',
        ch: 'Is the idea interesting?'
      },
      {
        id: 589,
        sntc: 'Bu, bəzi digər amillərdən asılı olacaq',
        tr: "It'll depend on some other factors",
        ch: "It'll depend on some other factors"
      },
      {
        id: 590,
        sntc: 'Dostum və mən ingilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English',
        ch: 'My friend and I will devote more free time to English'
      }
    ],
    [{
        id: 591,
        sntc: 'Bilirsən ki, bu sonuncu yerdə deyil',
        tr: "You know it isn't in the last place",
        ch: "You know it isn't in the last place"
      },
      {
        id: 592,
        sntc: 'Kitab bu qədər maraqlıdır?',
        tr: 'Is the book so interesting?',
        ch: 'Is the book so interesting?'
      },
      {
        id: 593,
        sntc: 'Onlar sənin yoxluğuna fikir verəcəklər',
        tr: 'They’ll notice your absence',
        ch: 'They’ll notice your absence'
      },
      {
        id: 594,
        sntc: 'Tələbələr bu cür məşqləri nə sıxlıqda edəcəklər?',
        tr: 'How often will the students do this kind of exercises?',
        ch: 'How often will the students do this kind of exercises?'
      },
      {
        id: 595,
        sntc: 'Mənim bir bacım var',
        tr: 'I have a sister',
        ch: 'I have a sister'
      },
      {
        id: 596,
        sntc: 'Nəticəniz sizi qane edəcək',
        tr: "You'll be satisfied with your result",
        ch: "You'll be satisfied with your result"
      },
      {
        id: 597,
        sntc: 'Bu ən yaxşı kitabdır',
        tr: "It's the best book",
        ch: "It's the best book"
      },
      {
        id: 598,
        sntc: 'Bu dərs onun xoşuna gələcək',
        tr: 'She’ll like this lesson',
        ch: 'She’ll like this lesson'
      },
      {
        id: 599,
        sntc: 'Oğlan bu imtahanı nəhayət verəcəkmi?',
        tr: 'Will the boy pass this exam at last?',
        ch: 'Will the boy pass this exam at last?'
      },
      {
        id: 600,
        sntc: 'O, bunu manipulyasiya edəcək',
        tr: 'She’ll manipulate it',
        ch: 'She’ll manipulate it'
      }
    ],
    [{
        id: 601,
        sntc: 'Qardaşı davranışına görə üzr istəyəcək?',
        tr: 'His brother will apologize for his behavior?',
        ch: 'His brother will apologize for his behavior?'
      },
      {
        id: 602,
        sntc: 'Ailəniz neçə yerə baş çəkəcək?',
        tr: 'How many places will your family visit?',
        ch: 'How many places will your family visit?'
      },
      {
        id: 603,
        sntc: 'Adətən boş vaxtını necə keçirirsən?',
        tr: 'How do you usually spend your free time?',
        ch: 'How do you usually spend your free time?'
      },
      {
        id: 604,
        sntc: 'Bu dərsləri böyük məmnuniyyətlə öyrənməyə davam edəcəyəm',
        tr: "I'II continue learning these lessons with great pleasure",
        ch: "I'II continue learning these lessons with great pleasure"
      },
      {
        id: 605,
        sntc: 'O, daha yaxşı yer tapacaq',
        tr: 'She’ll find a better place',
        ch: 'She’ll find a better place'
      },
      {
        id: 606,
        sntc: 'Mən bunu deməyi unutmaram',
        tr: "I won't forget to say it",
        ch: "I won't forget to say it"
      },
      {
        id: 607,
        sntc: 'Mən İngilis dilini öyrənə biləcəyəm',
        tr: 'I’ll be able to learn English',
        ch: 'I’ll be able to learn English'
      },
      {
        id: 608,
        sntc: 'Bu çox faydalı nümunədir',
        tr: "It's a very useful example",
        ch: "It's a very useful example"
      },
      {
        id: 609,
        sntc: 'Restorana gedəcəm',
        tr: 'I’ll go to the restaurant',
        ch: 'I’ll go to the restaurant'
      },
      {
        id: 610,
        sntc: 'Bu, heç onlarda maraq doğurmayacaq',
        tr: "It won't interest them at all",
        ch: "It won't interest them at all"
      }
    ],
    [{
        id: 611,
        sntc: 'Bunu mümkün qədər tez bitirməyə çalışacam',
        tr: 'I’ll try to finish it as soon as possible',
        ch: 'I’ll try to finish it as soon as possible'
      },
      {
        id: 612,
        sntc: 'Onun əri xəstəxanadadır',
        tr: 'Her husband is in hospital',
        ch: 'Her husband is in hospital'
      },
      {
        id: 613,
        sntc: 'Bu məşqləri etmək lazım olacaq',
        tr: "It'll be necessary to do these exercises",
        ch: "It'll be necessary to do these exercises"
      },
      {
        id: 614,
        sntc: 'Beş yüz dollar qazanacam',
        tr: 'I’ll earn five hundred dollars',
        ch: 'I’ll earn five hundred dollars'
      },
      {
        id: 615,
        sntc: 'Qiymətləri minimuma endirmək lazım olacaq',
        tr: "It'll be necessary to minimize the costs",
        ch: "It'll be necessary to minimize the costs"
      },
      {
        id: 616,
        sntc: 'Onlar hansı meyvə-tərəvəzləri orada yeyəcəklər?',
        tr: 'What fruit and vegetables will they eat there?',
        ch: 'What fruit and vegetables will they eat there?'
      },
      {
        id: 617,
        sntc: 'Bu üsul yenidir?',
        tr: 'Is this method new?',
        ch: 'Is this method new?'
      },
      {
        id: 618,
        sntc: 'Məncə, o, musiqidən zövq alacaq',
        tr: 'I think he’ll be fond of music',
        ch: 'I think he’ll be fond of music'
      },
      {
        id: 619,
        sntc: 'Bu hadisə harada baş verəcək?',
        tr: 'Where will this event take place?',
        ch: 'Where will this event take place?'
      },
      {
        id: 620,
        sntc: 'Bir-birinizi tanıyırsınız?',
        tr: 'Do you know each other?',
        ch: 'Do you know each other?'
      }
    ],
    [{
        id: 621,
        sntc: 'Bunu asanlıqla təmir etməyəcəklər',
        tr: "They won't repair it easily",
        ch: "They won't repair it easily"
      },
      {
        id: 622,
        sntc: 'O, başqa bir yerdə yaşamaq istərdi',
        tr: "She'd like to live in another place",
        ch: "She'd like to live in another place"
      },
      {
        id: 623,
        sntc: 'O, bu sirri saxlayacaq?',
        tr: 'Will she keep this secret?',
        ch: 'Will she keep this secret?'
      },
      {
        id: 624,
        sntc: 'Bu, problemin yeganə düzgün həlli olmayacaq',
        tr: "It won't be the only right solution to this problem",
        ch: "It won't be the only right solution to this problem"
      },
      {
        id: 625,
        sntc: 'Əminəm ki, bu nəticə çox böyük uğur olacaq',
        tr: "I'm sure this result will be a huge success",
        ch: "I'm sure this result will be a huge success"
      },
      {
        id: 626,
        sntc: 'Onun sözləri bizi ruhlandırır',
        tr: 'Her words inspire us',
        ch: 'Her words inspire us'
      },
      {
        id: 627,
        sntc: 'Onlar ticarətdə uğur qazanacaqlar?',
        tr: 'Will they have a commercial success?',
        ch: 'Will they have a commercial success?'
      },
      {
        id: 628,
        sntc: 'Oğlanlar hər şeyi belə tez xatırlamayacaq',
        tr: "The boys won't remember everything so quickly",
        ch: "The boys won't remember everything so quickly"
      },
      {
        id: 629,
        sntc: 'Mənim müdirim bunu təkid etməyəcək',
        tr: "My boss won't insist on it",
        ch: "My boss won't insist on it"
      },
      {
        id: 630,
        sntc: 'Ən yaxşı nəticə olmayacaq',
        tr: "It won't be the best result",
        ch: "It won't be the best result"
      }
    ],
    [{
        id: 631,
        sntc: 'Onun müəllimi necə nümunələr verir?',
        tr: 'What kind of examples does his teacher give?',
        ch: 'What kind of examples does his teacher give?'
      },
      {
        id: 632,
        sntc: 'Mənə beş yüz dollar borcu olacaq',
        tr: 'He’ll owe me five hundred dollars',
        ch: 'He’ll owe me five hundred dollars'
      },
      {
        id: 633,
        sntc: 'Bunu necə alacaq?',
        tr: 'How will he manage to buy it?',
        ch: 'How will he manage to buy it?'
      },
      {
        id: 634,
        sntc: 'Bu şey, vacib görünür?',
        tr: 'Does this thing seem important?',
        ch: 'Does this thing seem important?'
      },
      {
        id: 635,
        sntc: 'Çox maraqlı fikirdir',
        tr: "It's a very interesting idea",
        ch: "It's a very interesting idea"
      },
      {
        id: 636,
        sntc: 'Tələbələr buna görə üzr istəyərlər',
        tr: 'The students will apologize for it',
        ch: 'The students will apologize for it'
      },
      {
        id: 637,
        sntc: 'O, nə sıxlıqda kinoteatra gedir?',
        tr: 'How often does she go to the cinema?',
        ch: 'How often does she go to the cinema?'
      },
      {
        id: 638,
        sntc: 'Sabah axşam azad olacam',
        tr: 'I’ll be free tomorrow evening',
        ch: 'I’ll be free tomorrow evening'
      },
      {
        id: 639,
        sntc: 'Sənə heç bir faydası olmayacaq',
        tr: "It won't help you at all",
        ch: "It won't help you at all"
      },
      {
        id: 640,
        sntc: 'Vaxt və pulu boşa verərsən,',
        tr: 'You’ll waste time and money',
        ch: 'You’ll waste time and money'
      }
    ],
    [{
        id: 641,
        sntc: 'İngilis dilində səlis və düzgün danışmaq istəyirəm',
        tr: 'I want to speak English fluently and correctly',
        ch: 'I want to speak English fluently and correctly'
      },
      {
        id: 642,
        sntc: 'Bu əsil sensasiya olacaq',
        tr: "It'll be a real sensation",
        ch: "It'll be a real sensation"
      },
      {
        id: 643,
        sntc: 'Mənim kifayət qədər pulum var?',
        tr: 'Do I have enough money?',
        ch: 'Do I have enough money?'
      },
      {
        id: 644,
        sntc: 'Bunu müzakirə etməməyə çalışacam',
        tr: 'I’ll try not to discuss it',
        ch: 'I’ll try not to discuss it'
      },
      {
        id: 645,
        sntc: 'Kimlər maraqlanacaq?',
        tr: 'Who will be interested?',
        ch: 'Who will be interested?'
      },
      {
        id: 646,
        sntc: 'Bu son şansınız olacaq',
        tr: "It'll be your last chance",
        ch: "It'll be your last chance"
      },
      {
        id: 647,
        sntc: 'Bunu inkar etmərəm',
        tr: "I won't deny it",
        ch: "I won't deny it"
      },
      {
        id: 648,
        sntc: 'Uğurlarınla fəxr edərəm',
        tr: 'I’ll be proud of your success',
        ch: 'I’ll be proud of your success'
      },
      {
        id: 649,
        sntc: 'Mən bunu edə bilərdim',
        tr: 'I could do it',
        ch: 'I could do it'
      },
      {
        id: 650,
        sntc: 'Mən çalışaram bütün pulları xərcləməyim',
        tr: 'I’ll try not to spend all the money',
        ch: 'I’ll try not to spend all the money'
      }
    ],
    [{
        id: 651,
        descr: 'İngilis dilində feillər qaydalı (regular) və qaydasız (irregular) olmaqla iki qrupa ayrılır. Qaydali feillərin kecmiş zamanını duzəldərkən onun sonuna –d, –ed şəkilçisi əlavə olunur. Listen to - qulaq asmaq, dinləmək',
        expl: 'mübtəda ... feil ...',
        sntc: 'Mən tez-tez musiqi dinləyirdim',
        tr: 'I often listened to music'
      },
      {
        id: 652,
        descr: 'want - istəmək',
        expl: 'mübtəda feil ...',
        sntc: 'Sənə kömək etmək istəyirdim',
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
        sntc: 'Onunla əlaqə qurmağa ehtiyacım var idi',
        tr: 'I needed to get in touch with her'
      },
      {
        id: 659,
        descr: 'start - başlamaq',
        expl: 'mübtəda start feil+ing ...',
        sntc: 'Mən İki il əvvəl ingilis dilini öyrənməyə başladım',
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
        descr: 'revise - yenidən baxmaq, təkrarlamaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu dərsi tekrarladım',
        tr: 'I revised this lesson'
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
        sntc: 'Çox vacib bir şeyi əlavə etdim',
        tr: 'I added a very important thing'
      },
      {
        id: 664,
        descr: 'enter - daxil olmaq, girmək; qəbul olunmaq (yalnız universitetə)',
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
        descr: 'enter - daxil olmaq, girmək; qəbul olunmaq (yalnız universitetə)',
        expl: 'mübtəda feil ...',
        sntc: 'O, binaya daxil oldu',
        tr: 'He entered the building'
      },
      {
        id: 668,
        descr: 'continue - davam etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Bu dərsləri öyrənməyə davam etdim',
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
        sntc: 'Mən belə düşünməyə meyilli idim',
        tr: 'I tended to think so'
      },
      {
        id: 679,
        descr: 'translate - tərcümə etmək, çevirmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu ingilis dilinə tərcümə etdim',
        tr: 'I translated i\u202Et into English'
      },
      {
        id: 680,
        descr: 'fill in - doldurmaq, tamamlamaq',
        expl: 'mübtəda feil ...',
        sntc: 'Bu sənədləri doldurdum',
        tr: 'I filled in these documents'
      }
    ],
    [{
        id: 681,
        descr: 'delete - silmək, məhv etmək',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bu faylı səhvən sildim',
        tr: 'I deleted this file by mistake'
      },
      {
        id: 682,
        descr: 'dividə - bölmək, ayırmaq',
        expl: 'mübtəda feil ...',
        sntc: 'Mən bunu üç hissəyə bölmüşdüm',
        tr: 'I divided i\u202Et into three parts'
      },
      {
        id: 683,
        descr: 'belonge t0 - məxsus olmaq',
        expl: '... mübtəda feil ...',
        sntc: 'Ev onlara məxsus idi',
        tr: 'The house belonged to them'
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
        sntc: 'Onlar bu şirkətlə yarışdılar',
        tr: 'They competed with this company'
      },
      {
        id: 688,
        descr: 'wash - yumaq, yuyunmaq; wash up - qab-qacaq yumaq',
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
        descr: 'inform - məlumat vermək, xəbər vermək',
        expl: 'mübtəda feil ...',
        sntc: 'Onlar bu problem barədə bizə məlumat verdilər',
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
        expl: 'mübtəda ... feil feil+ing ...',
        sntc: 'Mən bunu etməkdən həqiqətən də nifrət edirdim',
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
        ch: 'He owned this flat'
      },
      {
        id: 702,
        sntc: 'Mən nəhayət bunu xatırladım',
        tr: 'I remembered it at last',
        ch: 'I remembered it at last'
      },
      {
        id: 703,
        sntc: 'Mən sənin məsləhətinə əməl etdim',
        tr: 'I followed your advice',
        ch: 'I followed your advice'
      },
      {
        id: 704,
        sntc: 'Onlar bu şəraiti təmin etdilər',
        tr: 'They provided these conditions',
        ch: 'They provided these conditions'
      },
      {
        id: 705,
        sntc: 'Mən bunu üç hissəyə bölmüşdüm',
        tr: 'I divided it into three parts',
        ch: 'I divided it into three parts'
      },
      {
        id: 706,
        sntc: 'Mən iki il əvvəl ingilis dilini öyrənməyə başladım',
        tr: 'I started learning English two years ago',
        ch: 'I started learning English two years ago'
      },
      {
        id: 707,
        sntc: 'Onlar çox bahalı mallar istehsal etdilər',
        tr: 'They produced very expensive goods',
        ch: 'They produced very expensive goods'
      },
      {
        id: 708,
        sntc: 'Onlar birdən yoxa çıxdılar',
        tr: 'They disappeared suddenly',
        ch: 'They disappeared suddenly'
      },
      {
        id: 709,
        sntc: 'Mən vaxt itirməmək qərarına gəldim',
        tr: 'I decided not to waste time',
        ch: 'I decided not to waste time'
      },
      {
        id: 710,
        sntc: 'Bunu çox aydın izah etdiniz',
        tr: 'You explained it very clearly',
        ch: 'You explained it very clearly'
      }
    ],
    [{
        id: 711,
        sntc: 'Mən avtobusu qaçırdım',
        tr: 'I missed the bus',
        ch: 'I missed the bus'
      },
      {
        id: 712,
        sntc: 'Onlar bu məlumatı bizimlə paylaşdılar',
        tr: 'They shared this information with us',
        ch: 'They shared this information with us'
      },
      {
        id: 713,
        sntc: 'O, bu sınaqdan keçmədi',
        tr: 'She failed this test',
        ch: 'She failed this test'
      },
      {
        id: 714,
        sntc: 'Çox ciddi oxudum,',
        tr: 'I studied very hard',
        ch: 'I studied very hard'
      },
      {
        id: 715,
        sntc: 'Onlar ona güldülər',
        tr: 'They laughed at him',
        ch: 'They laughed at him'
      },
      {
        id: 716,
        sntc: 'Mən imtahana hazırlaşdım',
        tr: 'I prepared for the exam',
        ch: 'I prepared for the exam'
      },
      {
        id: 717,
        sntc: 'O, mənimlə qismən razılaşdı',
        tr: 'She partly agreed with me',
        ch: 'She partly agreed with me'
      },
      {
        id: 718,
        sntc: 'Mən bunu etməkdən nifrət edirdim',
        tr: 'I hated doing it',
        ch: 'I hated doing it'
      },
      {
        id: 719,
        sntc: 'O, onun xarici görünüşünü təsvir etdi',
        tr: 'He described her appearance',
        ch: 'He described her appearance'
      },
      {
        id: 720,
        sntc: 'Biz doğru cavabı tapdıq',
        tr: 'We guessed the correct answer',
        ch: 'We guessed the correct answer'
      }
    ],
    [{
        id: 721,
        sntc: 'Onlar binanı dağıtdılar',
        tr: 'They destroyed the building',
        ch: 'They destroyed the building'
      },
      {
        id: 722,
        sntc: 'O, bu faktı inkar etdi',
        tr: 'He denied this fact',
        ch: 'He denied this fact'
      },
      {
        id: 723,
        sntc: 'Əsgərlər onlara hücum etdi',
        tr: 'The soldiers attacked them',
        ch: 'The soldiers attacked them'
      },
      {
        id: 724,
        sntc: 'Ev onlara məxsus idi',
        tr: 'The house belonged to them',
        ch: 'The house belonged to them'
      },
      {
        id: 725,
        sntc: 'Bu məndən asılı idi',
        tr: 'It depended on me',
        ch: 'It depended on me'
      },
      {
        id: 726,
        sntc: 'Mən formanı doldurmuşam',
        tr: 'I filled in the form',
        ch: 'I filled in the form'
      },
      {
        id: 727,
        sntc: 'O, əsgərlərə bunu etməyə əmr verdi',
        tr: 'He ordered the soldiers to do it',
        ch: 'He ordered the soldiers to do it'
      },
      {
        id: 728,
        sntc: 'Mən hər şeyi yoxlamağa söz verdim',
        tr: 'I promised to check everything',
        ch: 'I promised to check everything'
      },
      {
        id: 729,
        sntc: 'Mən bu əşyanı online olaraq sifariş etdim',
        tr: 'I ordered this thing online',
        ch: 'I ordered this thing online'
      },
      {
        id: 730,
        sntc: 'Mən fikrimi bildirdim',
        tr: 'I expressed my point of view',
        ch: 'I expressed my point of view'
      }
    ],
    [{
        id: 731,
        sntc: 'O, beş mindən çox pul qazandı',
        tr: 'He earned more than five thousand dollars',
        ch: 'He earned more than five thousand dollars'
      },
      {
        id: 732,
        sntc: 'Dərs bir saat davam etdi',
        tr: 'The lesson lasted for an hour',
        ch: 'The lesson lasted for an hour'
      },
      {
        id: 733,
        sntc: 'Bu, onların hər birini şoka saldı',
        tr: 'It shocked each of them',
        ch: 'It shocked each of them'
      },
      {
        id: 734,
        sntc: 'Biz bu problemi nəhayət həll etdik',
        tr: 'We solved this problem at last',
        ch: 'We solved this problem at last'
      },
      {
        id: 735,
        sntc: 'O, hər şeyə görə üzr istədi',
        tr: 'She apologized for everything',
        ch: 'She apologized for everything'
      },
      {
        id: 736,
        sntc: 'Dərs iyirmi dəqiqədən çox davam etdi',
        tr: 'The lesson lasted for more than twenty minutes',
        ch: 'The lesson lasted for more than twenty minutes'
      },
      {
        id: 737,
        sntc: 'Onun müdiri tez-tez onu tənqid edirdi',
        tr: 'Her boss often criticized her',
        ch: 'Her boss often criticized her'
      },
      {
        id: 738,
        sntc: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ',
        tr: 'We communicated with each other from time to time',
        ch: 'We communicated with each other from time to time'
      },
      {
        id: 739,
        sntc: 'Mən bütün mətni tərcümə etdim',
        tr: 'I translated all the text',
        ch: 'I translated all the text'
      },
      {
        id: 740,
        sntc: 'O, davranışına görə üzr istədi',
        tr: 'He apologized for his behavior',
        ch: 'He apologized for his behavior'
      }
    ],
    [{
        id: 741,
        sntc: 'O, küçədən keçdi',
        tr: 'He crossed the street',
        ch: 'He crossed the street'
      },
      {
        id: 742,
        sntc: 'Onlar birlikdə rəqs etdilər',
        tr: 'They danced together',
        ch: 'They danced together'
      },
      {
        id: 743,
        sntc: 'Oğlan onun sözünü kəsdi',
        tr: 'The boy interrupted her',
        ch: 'The boy interrupted her'
      },
      {
        id: 744,
        sntc: 'O, bu saytı bizə tövsiyə etdi',
        tr: 'He recommended this website to us',
        ch: 'He recommended this website to us'
      },
      {
        id: 745,
        sntc: 'O, çoxlu çətinliklərlə üzləşib',
        tr: 'He experienced so many difficulties',
        ch: 'He experienced so many difficulties'
      },
      {
        id: 746,
        sntc: 'Bu xəbər bizi təəccübləndirdi',
        tr: 'This news surprised us',
        ch: 'This news surprised us'
      },
      {
        id: 747,
        sntc: 'O, sonradan peşman oldu',
        tr: 'He regretted it later',
        ch: 'He regretted it later'
      },
      {
        id: 748,
        sntc: 'O, iş yoldaşına etibar edirdi',
        tr: 'He trusted his business partner',
        ch: 'He trusted his business partner'
      },
      {
        id: 749,
        sntc: 'O, bu müğənniyə heyran oldu',
        tr: 'She admired this singer',
        ch: 'She admired this singer'
      },
      {
        id: 750,
        sntc: 'Bu insana heyran oldum',
        tr: 'I admired this person',
        ch: 'I admired this person'
      }
    ],
    [{
        id: 751,
        sntc: 'O, Amerikanı kəşf etdi',
        tr: 'He discovered America',
        ch: 'He discovered America'
      },
      {
        id: 752,
        sntc: 'O, bizi üç qrupa böldü',
        tr: 'He divided us into three groups',
        ch: 'He divided us into three groups'
      },
      {
        id: 753,
        sntc: 'Mən ingilis dilində danışmağı təcrübə etdim',
        tr: 'I practiced speaking English',
        ch: 'I practiced speaking English'
      },
      {
        id: 754,
        sntc: 'Orada tez-tez qar yağırdı',
        tr: 'It often snowed there',
        ch: 'It often snowed there'
      },
      {
        id: 755,
        sntc: 'O, buna çox qəribə reaksiya verdi',
        tr: 'He reacted to it very strangely',
        ch: 'He reacted to it very strangely'
      },
      {
        id: 756,
        sntc: 'Polis bu oğrunu həbs etdi',
        tr: 'The police arrested this thief',
        ch: 'The police arrested this thief'
      },
      {
        id: 757,
        sntc: 'O, çox böyük məbləğdə pul investisiya etdi',
        tr: 'He invested such a big sum of money',
        ch: 'He invested such a big sum of money'
      },
      {
        id: 758,
        sntc: 'Bu ev ona məxsus idi',
        tr: 'This house belonged to him',
        ch: 'This house belonged to him'
      },
      {
        id: 759,
        sntc: 'Biz hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed everything very thoroughly'
      },
      {
        id: 760,
        sntc: 'O, adətən axşam dincəlirdi',
        tr: 'He usually relaxed in the evening',
        ch: 'He usually relaxed in the evening'
      }
    ],
    [{
        id: 761,
        sntc: 'O, bu kinoya baxdı',
        tr: 'He watched this movie',
        ch: 'He watched this movie'
      },
      {
        id: 762,
        sntc: 'O, çox az pul buraxdı',
        tr: 'He invested too little money',
        ch: 'He invested too little money'
      },
      {
        id: 763,
        sntc: 'Onu çox ağır cinayətdə ittiham etdilər',
        tr: 'They accused him of a very serious crime',
        ch: 'They accused him of a very serious crime'
      },
      {
        id: 764,
        sntc: 'O, xaricdə təhsil alıb',
        tr: 'He studied abroad',
        ch: 'He studied abroad'
      },
      {
        id: 765,
        sntc: 'Mən fikrimi ifadə etdim',
        tr: 'I expressed my point of view',
        ch: 'I expressed my point of view'
      },
      {
        id: 766,
        sntc: 'Mən imtahana hazırlaşdım',
        tr: 'I prepared for the exam',
        ch: 'I prepared for the exam'
      },
      {
        id: 767,
        sntc: 'Bəzi gözlənilməz problemlərlə üzləşdik',
        tr: 'We faced some unexpected problems',
        ch: 'We faced some unexpected problems'
      },
      {
        id: 768,
        sntc: 'Onlar kəndi dağıtdılar',
        tr: 'They destroyed the village',
        ch: 'They destroyed the village'
      },
      {
        id: 769,
        sntc: 'O, bunu çox gec xatırladı',
        tr: 'He remembered it too late',
        ch: 'He remembered it too late'
      },
      {
        id: 770,
        sntc: 'Bu yerin yaxınlığında maşını saxlamışam',
        tr: 'I parked near this place',
        ch: 'I parked near this place'
      }
    ],
    [{
        id: 771,
        sntc: 'Mən onun bütün suallarına cavab verdim',
        tr: 'I answered all her questions',
        ch: 'I answered all her questions'
      },
      {
        id: 772,
        sntc: 'Onlar tələsdilər',
        tr: 'They hurried up',
        ch: 'They hurried up'
      },
      {
        id: 773,
        sntc: 'Mən ingilis dilini burada öyrənməyə davam etdim',
        tr: 'I continued learning English here',
        ch: 'I continued learning English here'
      },
      {
        id: 774,
        sntc: 'Bu ev ona məxsus idi',
        tr: 'This house belonged to him',
        ch: 'This house belonged to him'
      },
      {
        id: 775,
        sntc: 'O, mənə uğurlar arzuladı',
        tr: 'He wished me good luck',
        ch: 'He wished me good luck'
      },
      {
        id: 776,
        sntc: 'Mən buradan bir az aralıda maşını saxladım',
        tr: 'I parked not far from here',
        ch: 'I parked not far from here'
      },
      {
        id: 777,
        sntc: 'Onlar bu şirkətlə rəqabət apardılar',
        tr: 'They competed with this company',
        ch: 'They competed with this company'
      },
      {
        id: 778,
        sntc: 'Onun təklifi çox maraqlı səsləndi',
        tr: 'His offer sounded very interesting',
        ch: 'His offer sounded very interesting'
      },
      {
        id: 779,
        sntc: 'Hər şeyi çox ətraflı təhlil etdik',
        tr: 'We analyzed everything very thoroughly',
        ch: 'We analyzed everything very thoroughly'
      },
      {
        id: 780,
        sntc: 'O, onunla evləndi',
        tr: 'He married her',
        ch: 'He married her'
      }
    ],
    [{
        id: 781,
        sntc: 'O, binaya daxil oldu',
        tr: 'He entered the building',
        ch: 'He entered the building'
      },
      {
        id: 782,
        sntc: 'Onlar ona nəzarət etdilər',
        tr: 'They controlled him',
        ch: 'They controlled him'
      },
      {
        id: 783,
        sntc: 'O döndü və ona gülümsədi',
        tr: 'He turned and smiled at her',
        ch: 'He turned and smiled at her'
      },
      {
        id: 784,
        sntc: 'Onlar günahsız insanları öldürüblər',
        tr: 'They killed innocent people',
        ch: 'They killed innocent people'
      },
      {
        id: 785,
        sntc: 'Polis onları həbs etdi',
        tr: 'The police arrested them',
        ch: 'The police arrested them'
      },
      {
        id: 786,
        sntc: 'Onlar cinayətkarları cəzalandırdılar',
        tr: 'They punished the criminals',
        ch: 'They punished the criminals'
      },
      {
        id: 787,
        sntc: 'Onlar binanı dağıtdılar',
        tr: 'They destroyed the building',
        ch: 'They destroyed the building'
      },
      {
        id: 788,
        sntc: 'O, yenə ona zəng etdi',
        tr: 'He called her again',
        ch: 'He called her again'
      },
      {
        id: 789,
        sntc: 'Bu bizi çox təəccübləndirdi',
        tr: 'It surprised us greatly',
        ch: 'It surprised us greatly'
      },
      {
        id: 790,
        sntc: 'O, müxtəlif şeyləri müzakirə etmək üçün tez-tez mənə zəng edirdi',
        tr: 'She often called me to discuss different things',
        ch: 'She often called me to discuss different things'
      }
    ],
    [{
        id: 791,
        sntc: 'O, bu sənədi ingilis dilindən azərbaycan dilinə tərcümə edib',
        tr: 'He translated this document from English into Azerbaijani',
        ch: 'He translated this document from English into Azerbaijani'
      },
      {
        id: 792,
        sntc: 'Çox vacib bir şey əlavə etdim',
        tr: 'I added a very important thing',
        ch: 'I added a very important thing'
      },
      {
        id: 793,
        sntc: 'Onlar kinoteatra getməyi təklif etdilər',
        tr: 'They suggested going to the cinema',
        ch: 'They suggested going to the cinema'
      },
      {
        id: 794,
        sntc: 'O, ötən il onunla evləndi',
        tr: 'He married her last year',
        ch: 'He married her last year'
      },
      {
        id: 795,
        sntc: 'Bu problem məni həqiqətən narahat etdi',
        tr: 'This problem really worried me',
        ch: 'This problem really worried me'
      },
      {
        id: 796,
        sntc: 'Biz çox intensiv təlim keçirdik',
        tr: 'We trained very intensively',
        ch: 'We trained very intensively'
      },
      {
        id: 797,
        sntc: 'O, bu universitetə qəbul oldu',
        tr: 'She entered this university',
        ch: 'She entered this university'
      },
      {
        id: 798,
        sntc: 'Bu problemi təsvir etdim',
        tr: 'I described this problem',
        ch: 'I described this problem'
      },
      {
        id: 799,
        sntc: 'O, ona kömək etməyə çalışsa da, heç bir uğur qazana bilmədi',
        tr: 'He tried to help her but without success',
        ch: 'He tried to help her but without success'
      },
      {
        id: 800,
        sntc: 'Onun müdiri tez-tez onu tənqid edirdi',
        tr: 'Her boss often criticized her',
        ch: 'Her boss often criticized her'
      }
    ],
    [{
        id: 801,
        descr: 'have - had - had - sahib olmaq, malik olmaq',
        expl: '',
        sntc: 'Onun çox maraqlı ideyası var idı',
        tr: 'He had a very interesting idea'
      },
      {
        id: 802,
        descr: 'make - made - made - etmək, düzəltmək',
        expl: '',
        sntc: 'O, bir kəşf etdi',
        tr: 'He made a discovery'
      },
      {
        id: 803,
        descr: 'do - did - done - etmək, düzəltmək',
        expl: '',
        sntc: 'Mən bunu vaxtında etdim',
        tr: 'I did it on time'
      },
      {
        id: 804,
        descr: 'be - was/were - been - olmaq',
        expl: '',
        sntc: 'Mən çox məyus oldum',
        tr: 'I was bitterly disappointed'
      },
      {
        id: 805,
        descr: 'go - went - gone - getmək, yola düşmək',
        expl: '',
        sntc: 'Mən işə getdim',
        tr: 'I went to work'
      },
      {
        id: 806,
        descr: 'can - could - bacarmaq',
        expl: '',
        sntc: 'Mən başqa işlərlə məşğul olaraq onu dinləyə bilərdim',
        tr: 'I could listen to her doing other things'
      },
      {
        id: 807,
        descr: 'get - got - got - əldə etmək, almaq',
        expl: '',
        sntc: 'O, ayda iki min dollar alırdı',
        tr: 'He got two thousand dollars a month'
      },
      {
        id: 808,
        descr: 'know - knew - known - bilmək; tanımaq',
        expl: '',
        sntc: 'Biz bunu əvvəldən bilirdik',
        tr: 'We knew it in the beginning'
      },
      {
        id: 809,
        descr: 'say - said - said - demək, söyləmək',
        expl: '',
        sntc: 'O, bunu çox sakitcə dedi',
        tr: 'He said it very quietly'
      },
      {
        id: 810,
        descr: 'tell - told - told - demək, bildirmək, söyləmək',
        expl: '',
        sntc: 'O, mənə bu şeyi demişdi',
        tr: 'She told me this thing'
      }
    ],
    [{
        id: 811,
        descr: 'speak - spoke - spoken - danışmaq, söhbət etmək',
        expl: '',
        sntc: 'Biz dünən ingilis dilində danışdıq',
        tr: 'We spoke English yesterday'
      },
      {
        id: 812,
        descr: 'take - took - taken - götürmək, qəbul etmək',
        expl: '',
        sntc: 'Mən onu özümüzlə apardım',
        tr: 'I took him with us'
      },
      {
        id: 813,
        descr: 'see - saw - seen - görmək. Sabit ifadə: for the first time - ilk dəfə',
        expl: '',
        sntc: 'Mən onu ilk dəfə gördüm',
        tr: 'I saw her for the first time'
      },
      {
        id: 814,
        descr: 'come - came - come - gəlmək',
        expl: '',
        sntc: 'O, görüşə gəldi',
        tr: 'He came to the meeting'
      },
      {
        id: 815,
        descr: 'think - thought - thought - düşünmək',
        expl: '',
        sntc: 'Mən də belə düşünürdüm',
        tr: 'I also thought so'
      },
      {
        id: 816,
        descr: 'feel - felt - felt - hiss etmək, duymaq',
        expl: '',
        sntc: 'Mən özümü çox xoşbəxt hiss edirdim',
        tr: 'I felt so happy'
      },
      {
        id: 817,
        descr: 'become - became - become - olmaq',
        expl: '',
        sntc: 'O, məşhur oldu',
        tr: 'He became famous'
      },
      {
        id: 818,
        descr: 'put - put - put - qoymaq, yerləşdirmək',
        expl: '',
        sntc: 'Mən bunu stolun üstünə qoydum',
        tr: 'I put it on the table'
      },
      {
        id: 819,
        descr: 'find - found - found - tapmaq; həsab etmək; kəşf etmək',
        expl: '',
        sntc: 'Mən bu kanalı nəhayət tapdım',
        tr: 'I found this channel at last'
      },
      {
        id: 820,
        descr: 'give - gave - given - vermək',
        expl: '',
        sntc: 'O, mənə bu tövsiyəni verdi',
        tr: 'He gave me this recommendation'
      }
    ],
    [{
        id: 821,
        descr: 'cost - cost - cost - qiymət, dəyər; qiyməti olmaq, xərci cıxmaq',
        expl: '',
        sntc: 'Bu, üç yüz dollara başa gəldi',
        tr: 'It cost three hundred dollars'
      },
      {
        id: 822,
        descr: 'mean - meant - meant',
        expl: '',
        sntc: 'Bu, aşağıdakıları nəzərdə tuturdu',
        tr: 'It meant the following'
      },
      {
        id: 823,
        descr: 'begin - began - begun',
        expl: '',
        sntc: 'Dərs vaxtında başladı',
        tr: 'The lesson began on time'
      },
      {
        id: 824,
        descr: 'show - showed - shown',
        expl: '',
        sntc: 'O, parlaq nəticələr göstərdi',
        tr: 'He showed brilliant results'
      },
      {
        id: 825,
        descr: 'let - let - let',
        expl: '',
        sntc: 'Onun valideynləri onu ora buraxdılar',
        tr: 'Her parents let her go there'
      },
      {
        id: 826,
        descr: 'leave - left - left',
        expl: '',
        sntc: 'Mən Azərbaycanı tərk etdim',
        tr: 'I left Azerbaijan'
      },
      {
        id: 827,
        descr: 'hear - heard - heard',
        expl: '',
        sntc: 'Mən bunu radioda eşitdim',
        tr: 'I heard it on the radio'
      },
      {
        id: 828,
        descr: 'run - ran - run',
        expl: '',
        sntc: 'O, çox yavaş-yavaş qaçdı',
        tr: 'She ran very slowly'
      },
      {
        id: 829,
        descr: 'bring - brought - brought',
        expl: '',
        sntc: 'O, bu əşyanı mənə verdi',
        tr: 'He gave this thing to me'
      },
      {
        id: 830,
        descr: 'write - wrote - written',
        expl: '',
        sntc: 'O, bunu yazdı',
        tr: 'He wrote it down'
      }
    ],
    [{
        id: 831,
        descr: 'read - read - read',
        expl: '',
        sntc: 'Mən çox maraqlı bir kitab oxudum',
        tr: 'I read such an interesting book'
      },
      {
        id: 832,
        descr: 'sit - sat - sat',
        expl: '',
        sntc: 'Mən stulda oturdum',
        tr: 'I sat on a chair'
      },
      {
        id: 833,
        descr: 'stand - stood - stood',
        expl: '',
        sntc: 'Mən ayağa qalxdım',
        tr: 'I stood up'
      },
      {
        id: 834,
        descr: 'lose - lost - lost',
        expl: '',
        sntc: 'O, çantasını itirdi',
        tr: 'She lost her bag'
      },
      {
        id: 835,
        descr: 'pay - paid - paid',
        expl: '',
        sntc: 'Mən onun üçün pul ödədim',
        tr: 'I paid for her'
      },
      {
        id: 836,
        descr: 'meet - met - met',
        expl: '',
        sntc: 'Onlar nəhayət görüşdülər',
        tr: 'They met at last'
      },
      {
        id: 837,
        descr: 'set - set - set',
        expl: '',
        sntc: 'O, bunu stolun üstünə qoydu',
        tr: 'He set it on the table'
      },
      {
        id: 838,
        descr: 'learn - learnt - learnt (learn - learned - learned)',
        expl: '',
        sntc: 'Mən ingilis dilini öyrəndim',
        tr: 'I learnt English'
      },
      {
        id: 839,
        descr: 'understand - understood - understood',
        expl: '',
        sntc: 'Mən səni dərhal anladım',
        tr: 'I understood you immediately'
      },
      {
        id: 840,
        descr: 'cut - cut - cut',
        expl: '',
        sntc: 'O, özünü kəsdi',
        tr: 'He cut himself'
      }
    ],
    [{
        id: 841,
        descr: 'sell - sold - sold',
        expl: '',
        sntc: 'O, bu biznesi satdı',
        tr: 'He sold this business'
      },
      {
        id: 842,
        descr: 'spend - spent - spent',
        expl: '',
        sntc: 'Mən buna yeddi yüz dollar xərclədim',
        tr: 'I spent seven hundred dollars on it'
      },
      {
        id: 843,
        descr: 'grow - grew - grown',
        expl: '',
        sntc: 'Mən Amerikada böyümüşəm',
        tr: 'I grew up in America'
      },
      {
        id: 844,
        descr: 'win - won - won',
        expl: '',
        sntc: 'Biz həmin yarışda qalib gəldik',
        tr: 'We won in that competition'
      },
      {
        id: 845,
        descr: 'buy - bought - bought',
        expl: '',
        sntc: 'O, çox geniş bir mənzil aldı',
        tr: 'She bought a very spacious flat'
      },
      {
        id: 846,
        descr: 'send - sent - sent',
        expl: '',
        sntc: 'O, mənə məktub göndərdi',
        tr: 'He sent me a letter'
      },
      {
        id: 847,
        descr: 'fall - fell - fallen',
        expl: '',
        sntc: 'O, yerə yıxıldı',
        tr: 'He fall down'
      },
      {
        id: 848,
        descr: 'keep - kept - kept',
        expl: '',
        sntc: 'O, pulunu bankda saxlayırdı',
        tr: 'He kept his money in a bank'
      },
      {
        id: 849,
        descr: 'hold - held - held',
        expl: '',
        sntc: 'Mən bunu əllərimdə tutdum',
        tr: 'I held it in my arms'
      },
      {
        id: 850,
        descr: 'break - broke - broken',
        expl: '',
        sntc: 'Onun maşını sıradan çıxdı',
        tr: 'His car broke down'
      }
    ],
    [{
        id: 851,
        descr: 'catch - caught - caught',
        expl: '',
        sntc: 'Biz balıq tutduq',
        tr: 'We caught fish'
      },
      {
        id: 852,
        descr: 'draw - drew - drawn',
        expl: '',
        sntc: 'O, çox gözəl şəkil çəkdi',
        tr: 'She drew a very beautiful picture'
      },
      {
        id: 853,
        descr: 'fight - fought - fought',
        expl: '',
        sntc: 'Onlar böyük cəsarətlə döyüşdülər',
        tr: 'They fought very bravely'
      },
      {
        id: 854,
        descr: 'deal - dealt - dealt',
        expl: '',
        sntc: 'Mən tədarükçülərlə məşğul oldum',
        tr: 'I dealt with suppliers'
      },
      {
        id: 855,
        descr: 'throw - thew - thrown',
        expl: '',
        sntc: 'O, topu mənə atdı',
        tr: 'He threw me a ball'
      },
      {
        id: 856,
        descr: 'wear - wore - worn',
        expl: '',
        sntc: 'O, çox bahalı paltarlar geyinirdi',
        tr: 'She wore very expensive clothes'
      },
      {
        id: 857,
        descr: 'teach - taught - taught',
        expl: '',
        sntc: 'O, ingilis dilini tədris edirdi',
        tr: 'He taught English'
      },
      {
        id: 858,
        descr: 'lie - lay - lain',
        expl: '',
        sntc: 'Mən uzandım',
        tr: 'I lay down'
      },
      {
        id: 859,
        descr: 'lay - laid - laid',
        expl: '',
        sntc: 'Mən bunu stolun üstünə qoydum',
        tr: 'I laid it on the table'
      },
      {
        id: 860,
        descr: 'fly - flew - flown',
        expl: '',
        sntc: 'Mən Amerikaya uçdum',
        tr: 'I flew to America'
      }
    ],
    [{
        id: 861,
        descr: 'sing - sang - sung',
        expl: '',
        sntc: 'O, çox gözəl oxudu',
        tr: 'She sang very beautifully'
      },
      {
        id: 862,
        descr: 'sleep - slept - slept',
        expl: '',
        sntc: 'Mən kifayət qədər yatdım',
        tr: 'I slept enough'
      },
      {
        id: 863,
        descr: 'forget - forgot - forgotten',
        expl: '',
        sntc: 'Mən bu şeyi tamamilə unutdum',
        tr: 'I forgot this thing completely'
      },
      {
        id: 864,
        descr: 'hit - hit - hit',
        expl: '',
        sntc: 'O, topu vurdu',
        tr: 'He hit the ball'
      },
      {
        id: 865,
        descr: 'eat - ate - eaten',
        expl: '',
        sntc: 'Mən bunu səhər yemeyində yedim',
        tr: 'I ate it for breakfast'
      },
      {
        id: 866,
        descr: 'drink - drank - drunk',
        expl: '',
        sntc: 'O, bir stəkan su içdi',
        tr: 'He drank a glass of water'
      },
      {
        id: 867,
        descr: 'hide - hid - hidden',
        expl: '',
        sntc: 'O, həmin binanın arxasında gizləndi',
        tr: 'He hid behind that building'
      },
      {
        id: 868,
        descr: 'ride - rode - ridden',
        expl: '',
        sntc: 'Mən at sürdüm',
        tr: 'I rode a horse'
      },
      {
        id: 869,
        descr: 'feed - fed - fed',
        expl: '',
        sntc: 'O, pişiyini yedizdirdi',
        tr: 'She fed her cat'
      },
      {
        id: 870,
        descr: 'fit - fit - fit',
        expl: '',
        sntc: 'Bu cüt ayaqqabı mənə uyğun gəlir',
        tr: 'This pair of shoes fit me'
      }
    ],
    [{
        id: 871,
        descr: 'overcome - overcame - overcome',
        expl: '',
        sntc: 'Biz o çətinliklərin öhdəsindən gəldik',
        tr: 'We overcame those difficulties'
      },
      {
        id: 872,
        descr: 'swim - swam - swum',
        expl: '',
        sntc: 'Mən hovuzda üzdüm',
        tr: 'I swam in the swimming pool'
      },
      {
        id: 873,
        descr: 'lend - lent - lent',
        expl: '',
        sntc: 'Mən ona bu məbləğdə pul borc verdim',
        tr: 'I lent him this sum of money'
      },
      {
        id: 874,
        descr: 'blow - blew - blown',
        expl: '',
        sntc: 'Külək birdən əsdi',
        tr: 'The wind blew unexpectedly'
      },
      {
        id: 875,
        descr: 'hurt - hurt - hurt',
        expl: '',
        sntc: 'O, qolunu yaraladı',
        tr: 'She hurt her arm'
      },
      {
        id: 876,
        descr: 'dream - dreamt - dreamt (dream - dreamed - dreamed)',
        expl: '',
        sntc: 'Mən müxtəlif şeylər haqqında xəyallar qururdum',
        tr: 'I dreamt about different things'
      },
      {
        id: 877,
        descr: 'steal - stole - stolen',
        expl: '',
        sntc: 'O, onun çantasını oğurladı',
        tr: 'He stole her bag'
      },
      {
        id: 878,
        descr: 'wake - woke - woken',
        expl: '',
        sntc: 'Mən yuxudan çox tez oyandım',
        tr: 'I woke up very early'
      },
      {
        id: 879,
        descr: 'dig - dug - dug',
        expl: '',
        sntc: 'O, bir quyu qazdı',
        tr: 'He dug a hole'
      },
      {
        id: 880,
        descr: 'forgive - forgave - forgiven',
        expl: '',
        sntc: 'Mən onu bağışladım',
        tr: 'I forgave her'
      }
    ],
    [{
        id: 881,
        descr: 'drive - drove - driven',
        expl: '',
        sntc: 'Mən maşınla işə getdim',
        tr: 'I drove to work'
      },
      {
        id: 882,
        descr: 'hang - hung - hung',
        expl: '',
        sntc: 'Mən paltomu paltarasandan asdım',
        tr: 'I hung my coat on a hook'
      },
      {
        id: 883,
        descr: 'burn - burnt - burnt burned - burned - burned',
        expl: '',
        sntc: 'Onlar evi yandırdılar',
        tr: 'They burnt the house'
      },
      {
        id: 884,
        descr: 'shoot - shot - shot',
        expl: '',
        sntc: 'O, quşu güllələdi',
        tr: 'He shot the bird'
      },
      {
        id: 885,
        descr: 'sink - sank - sunk',
        expl: '',
        sntc: 'Gəmi batdı',
        tr: 'The ship sank'
      },
      {
        id: 886,
        descr: 'rise - rose - risen',
        expl: '',
        sntc: 'Günəş qalxdı',
        tr: 'The sun rose'
      },
      {
        id: 887,
        descr: 'ring - rang - rung',
        expl: '',
        sntc: 'Zəng çaldı',
        tr: 'The bell rang'
      },
      {
        id: 888,
        descr: 'spoil - spoilt - spoilt',
        expl: '',
        sntc: 'Bu, planlarımızı korladı',
        tr: 'It spoilt our plans'
      },
      {
        id: 889,
        descr: 'smell - smelt - smelt smelled - smelled - smelled',
        expl: '',
        sntc: 'Bu, dəhşətli qoxu verdi',
        tr: 'It smelt terrible'
      },
      {
        id: 890,
        descr: 'withdraw - withdrew - withdrawn',
        expl: '',
        sntc: 'Mən hesabımdan üç min dollar çıxardım',
        tr: 'I withdrew three thousand dollars from my account'
      }
    ],
    [{
        id: 891,
        descr: 'misunderstand - misunderstood - misunderstood',
        expl: '',
        sntc: 'Mən qorxuram, sən məni səhv başa düşdün',
        tr: 'I’m afraid you misunderstood me'
      },
      {
        id: 892,
        descr: 'underpay - underpaid - underpaid',
        expl: '',
        sntc: 'Onun müdürü işçilərə çox vaxt az maaş verirdi',
        tr: 'Her boss often underpaid the workers'
      },
      {
        id: 893,
        descr: 'overpay - overpaid - overpaid',
        expl: '',
        sntc: 'Mən bəzən artıq pul ödəyirdim',
        tr: 'I sometimes overpaid'
      },
      {
        id: 894,
        descr: 'tear - tore - torn',
        expl: '',
        sntc: 'O, kitabı cırdı',
        tr: 'He tore the book'
      },
      {
        id: 895,
        descr: 'redo - redid - redone',
        expl: '',
        sntc: 'O, bunu yenidən etdi',
        tr: 'He redid it'
      },
      {
        id: 896,
        descr: 'oversleep - overslept - overslept',
        expl: '',
        sntc: 'Mən həddən artıq yatdım',
        tr: 'I overslept'
      },
      {
        id: 897,
        descr: 'overeat - overate - overeaten',
        expl: '',
        sntc: 'O, çox vaxt həddindən artıq yeyirdi',
        tr: 'He often overate'
      },
      {
        id: 898,
        descr: 'light - lit - lit',
        expl: '',
        sntc: 'O, lampanı yandırdı',
        tr: 'He lit the lamp'
      },
      {
        id: 899,
        descr: 'bite - bit - bitten',
        expl: '',
        sntc: 'İt onu dişlədi',
        tr: 'The dog bit him'
      },
      {
        id: 900,
        descr: 'foresee - foresaw - foreseen',
        expl: '',
        sntc: 'Mən bu dəyişiklikləri qabaqcadan görmüşəm',
        tr: 'I foresaw these changes'
      }
    ],
    [{
        id: 901,
        sntc: 'O, mənə bu əşyanı gətirdi',
        tr: 'He brought me this thing',
        ch: 'He brought me this thing'
      },
      {
        id: 902,
        sntc: 'Mənim dostum belə düşünmür',
        tr: "My friend doesn't think so",
        ch: "My friend doesn't think so"
      },
      {
        id: 903,
        sntc: 'Onlar binanı yandırdılar',
        tr: 'They burnt the building',
        ch: 'They burnt the building'
      },
      {
        id: 904,
        sntc: 'Mən hesabımdan üç yüz dollar çıxardım',
        tr: 'I withdrew three hundred dollars from my account',
        ch: 'I withdrew three hundred dollars from my account'
      },
      {
        id: 905,
        sntc: 'O, heç vaxt həddən artıq yemirdi',
        tr: 'He never overate',
        ch: 'He never overate'
      },
      {
        id: 906,
        sntc: 'O, bu problemləri qabaqcadan görüb',
        tr: 'She foresaw these problems',
        ch: 'She foresaw these problems'
      },
      {
        id: 907,
        sntc: 'Onun müdiri çox vaxt işçilərə az maaş verirdi',
        tr: 'Her boss often underpaid the employees',
        ch: 'Her boss often underpaid the employees'
      },
      {
        id: 908,
        sntc: 'Qəzəbli it onu dişlədi',
        tr: 'An angry dog bit him',
        ch: 'An angry dog bit him'
      },
      {
        id: 909,
        sntc: 'Mən onu bağışladım',
        tr: 'I forgave her',
        ch: 'I forgave her'
      },
      {
        id: 910,
        sntc: 'Bu əhəmiyyətsiz görünür',
        tr: 'It seems unimportant',
        ch: 'It seems unimportant'
      }
    ],
    [{
        id: 911,
        sntc: 'O, özünü bədbəxt hiss edirdi',
        tr: 'She felt unhappy',
        ch: 'She felt unhappy'
      },
      {
        id: 912,
        sntc: 'O, bu əşyanı mənə gətirdi',
        tr: 'He brought this thing to me',
        ch: 'He brought this thing to me'
      },
      {
        id: 913,
        sntc: 'Bu üç yüz dollara başa gəldi',
        tr: 'It cost three hundred dollars',
        ch: 'It cost three hundred dollars'
      },
      {
        id: 914,
        sntc: 'O, əyləncəyə gəldi',
        tr: 'She came to the party',
        ch: 'She came to the party'
      },
      {
        id: 915,
        sntc: 'Problemlər çox böyükdür?',
        tr: 'Are the problems so big?',
        ch: 'Are the problems so big?'
      },
      {
        id: 916,
        sntc: 'Mən də belə düşünürdüm',
        tr: 'I also thought so',
        ch: 'I also thought so'
      },
      {
        id: 917,
        sntc: 'Onlar yapon dilində danışırdılar',
        tr: 'They spoke Japanese',
        ch: 'They spoke Japanese'
      },
      {
        id: 918,
        sntc: 'Biz birlikdə yaxşı vaxt keçirdik',
        tr: 'We had a good time together',
        ch: 'We had a good time together'
      },
      {
        id: 919,
        sntc: 'O, məktəbə getdi',
        tr: 'He went to school',
        ch: 'He went to school'
      },
      {
        id: 920,
        sntc: 'Mən həmişəkindən gec oyandım',
        tr: 'I woke up later than usual',
        ch: 'I woke up later than usual'
      }
    ],
    [{
        id: 921,
        sntc: 'O, açarlarını itirdi',
        tr: 'He lost his keys',
        ch: 'He lost his keys'
      },
      {
        id: 922,
        sntc: 'Mən oturdum, sonra ayağa qalxdım',
        tr: 'I sat down and then I stood up',
        ch: 'I sat down and then I stood up'
      },
      {
        id: 923,
        sntc: 'Mən bunu o jurnalda oxudum',
        tr: 'I read it in that magazine',
        ch: 'I read it in that magazine'
      },
      {
        id: 924,
        sntc: 'Bu mətni əzbər öyrəndim',
        tr: 'I learnt this text by heart',
        ch: 'I learnt this text by heart'
      },
      {
        id: 925,
        sntc: 'Sənin otağın haradadır?',
        tr: 'Where is your room?',
        ch: 'Where is your room?'
      },
      {
        id: 926,
        sntc: 'Onlar bu stulu sındırdılar',
        tr: 'They broke this chair',
        ch: 'They broke this chair'
      },
      {
        id: 927,
        sntc: 'O, mənə mesaj göndərdi',
        tr: 'She sent me a message',
        ch: 'She sent me a message'
      },
      {
        id: 928,
        sntc: 'O, bu sirri saxladı',
        tr: 'He kept this secret',
        ch: 'He kept this secret'
      },
      {
        id: 929,
        sntc: 'Biz həmin müsabiqədə qalib gəldik',
        tr: 'We won in that contest',
        ch: 'We won in that contest'
      },
      {
        id: 930,
        sntc: 'Mən onun çantasını tutdum',
        tr: 'I held her bag',
        ch: 'I held her bag'
      }
    ],
    [{
        id: 931,
        sntc: 'Onun valideynləri ona bunu etməyə icazə verdilər',
        tr: 'His parents let him do it',
        ch: 'His parents let him do it'
      },
      {
        id: 932,
        sntc: 'O, parlaq nəticələr göstərdi',
        tr: 'He showed brilliant results',
        ch: 'He showed brilliant results'
      },
      {
        id: 933,
        sntc: 'Mən bu ifadəni yazdım',
        tr: 'I wrote down this phrase',
        ch: 'I wrote down this phrase'
      },
      {
        id: 934,
        sntc: 'Mən çox maraqlı kitab oxudum',
        tr: 'I read such an interesting book',
        ch: 'I read such an interesting book'
      },
      {
        id: 935,
        sntc: 'O, özünü kəsdi',
        tr: 'She cut herself',
        ch: 'She cut herself'
      },
      {
        id: 936,
        sntc: 'O, pul kisəsini itirdi',
        tr: 'He lost his wallet',
        ch: 'He lost his wallet'
      },
      {
        id: 937,
        sntc: 'Mən onun arxasında dayandım',
        tr: 'I stood behind him',
        ch: 'I stood behind him'
      },
      {
        id: 938,
        sntc: 'Mən kresloda oturdum',
        tr: 'I sat in an armchair',
        ch: 'I sat in an armchair'
      },
      {
        id: 939,
        sntc: 'Mən bunu bəzi məqalələrdə oxumuşam',
        tr: 'I read it in some articles',
        ch: 'I read it in some articles'
      },
      {
        id: 940,
        sntc: 'Sən çox xeyirxahsan',
        tr: "You're very kind",
        ch: "You're very kind"
      }
    ],
    [{
        id: 941,
        sntc: 'Mən aşkar etdim ki bizim bəzi problemlərimiz var idi',
        tr: 'I found out that we had some problems',
        ch: 'I found out that we had some problems'
      },
      {
        id: 942,
        sntc: 'Biz onların təklifini qəbul etdik',
        tr: 'We took their offer',
        ch: 'We took their offer'
      },
      {
        id: 943,
        sntc: 'O, pulunu bankda saxladı',
        tr: 'He kept his money in a bank',
        ch: 'He kept his money in a bank'
      },
      {
        id: 944,
        sntc: 'Onlar tətil evlərini əlli min dollara satdılar',
        tr: 'They sold their country house for fifty thousand dollars',
        ch: 'They sold their country house for fifty thousand dollars'
      },
      {
        id: 945,
        sntc: 'O bunu çox böyük endirimlə aldı',
        tr: 'She bought it with a very big discount',
        ch: 'She bought it with a very big discount'
      },
      {
        id: 946,
        sntc: 'Bu, böyük uğurdur?',
        tr: 'Is it a big success?',
        ch: 'Is it a big success?'
      },
      {
        id: 947,
        sntc: 'Bu əsgər çox cəsarətlə vuruşdu',
        tr: 'This soldier fought very courageously',
        ch: 'This soldier fought very courageously'
      },
      {
        id: 948,
        sntc: 'O, müdirinə yalan danışdı',
        tr: 'He lied to his boss',
        ch: 'He lied to his boss'
      },
      {
        id: 949,
        sntc: 'O, çox şık paltarlar geyinirdi',
        tr: 'She wore very stylish clothes',
        ch: 'She wore very stylish clothes'
      },
      {
        id: 950,
        sntc: 'Mən müxtəlif şikayətlərlə məşğul oldum',
        tr: 'I dealt with different complaints',
        ch: 'I dealt with different complaints'
      }
    ],
    [{
        id: 951,
        sntc: 'Mən uzandım',
        tr: 'I lay down',
        ch: 'I lay down'
      },
      {
        id: 952,
        sntc: 'Onlar bu cinayətkarı tutdular',
        tr: 'They caught this criminal',
        ch: 'They caught this criminal'
      },
      {
        id: 953,
        sntc: 'Mən bunu stolun üstünə qoydum',
        tr: 'I laid it on the table',
        ch: 'I laid it on the table'
      },
      {
        id: 954,
        sntc: 'O, qapıya vurdu',
        tr: 'He hit the door',
        ch: 'He hit the door'
      },
      {
        id: 955,
        sntc: 'O, çox gözəl oxudu',
        tr: 'She sang very beautifully',
        ch: 'She sang very beautifully'
      },
      {
        id: 956,
        sntc: 'Mən adətən təxminən sekkiz saat yatırdım',
        tr: 'I usually slept for about eight hours',
        ch: 'I usually slept for about eight hours'
      },
      {
        id: 957,
        sntc: 'Burada soyuqdur?',
        tr: 'Is it cold here?',
        ch: 'Is it cold here?'
      },
      {
        id: 958,
        sntc: 'Mən velosipedə sürdüm',
        tr: 'I went cycling',
        ch: 'I went cycling'
      },
      {
        id: 959,
        sntc: 'O, körpəsini yedizdirdi',
        tr: 'She fed her baby',
        ch: 'She fed her baby'
      },
      {
        id: 960,
        sntc: 'Oğlanlar o ağacın arxasında gizləndilər',
        tr: 'The boys hid behind that tree',
        ch: 'The boys hid behind that tree'
      }
    ],
    [{
        id: 961,
        sntc: 'O mənə yalan danışdı',
        tr: 'She lied to me',
        ch: 'She lied to me'
      },
      {
        id: 962,
        sntc: 'O, Parisə uçdu',
        tr: 'He flew to Paris',
        ch: 'He flew to Paris'
      },
      {
        id: 963,
        sntc: 'O, mənə top atdı',
        tr: 'He threw me a ball',
        ch: 'He threw me a ball'
      },
      {
        id: 964,
        sntc: 'Mən bu əşyanı istəyirəm',
        tr: 'I want this thing',
        ch: 'I want this thing'
      },
      {
        id: 965,
        sntc: 'O, çox gözəl şəkil çəkdi',
        tr: 'She drew a very beautiful picture',
        ch: 'She drew a very beautiful picture'
      },
      {
        id: 966,
        sntc: 'Mən Amerikaya uçdum',
        tr: 'I flew to America',
        ch: 'I flew to America'
      },
      {
        id: 967,
        sntc: 'O, həmin binanın arxasında gizləndi',
        tr: 'He hid behind that building',
        ch: 'He hid behind that building'
      },
      {
        id: 968,
        sntc: 'Mən bunu etməyə unutdum',
        tr: 'I forgot to do it',
        ch: 'I forgot to do it'
      },
      {
        id: 969,
        sntc: 'Onlar onu bağışladılar',
        tr: 'They forgave him',
        ch: 'They forgave him'
      },
      {
        id: 970,
        sntc: 'O, onun pul kisəsini oğurladı',
        tr: 'He stole his wallet',
        ch: 'He stole his wallet'
      }
    ],
    [{
        id: 971,
        sntc: 'Onlar çox maraqlı kəşf etdilər',
        tr: 'They made a very interesting discovery',
        ch: 'They made a very interesting discovery'
      },
      {
        id: 972,
        sntc: 'Mən bunu saatlarla müzakirə edə bilərdim',
        tr: 'I could discuss it for hours',
        ch: 'I could discuss it for hours'
      },
      {
        id: 973,
        sntc: 'Mən hər şeyi vaxtında etdim',
        tr: 'I did everything on time',
        ch: 'I did everything on time'
      },
      {
        id: 974,
        sntc: 'Bu maraqlı fikirdir',
        tr: "It's an interesting idea",
        ch: "It's an interesting idea"
      },
      {
        id: 975,
        sntc: 'Mən həddən artıq yatdım',
        tr: 'I overslept',
        ch: 'I overslept'
      },
      {
        id: 976,
        sntc: 'Onun müdiri işçilərə çox vaxt az maaş verirdi',
        tr: 'Her boss often underpaid the workers',
        ch: 'Her boss often underpaid the workers'
      },
      {
        id: 977,
        sntc: 'O, musiqi karyerası haqqında xəyal qurdu',
        tr: 'She dreamt about a career in music',
        ch: 'She dreamt about a career in music'
      },
      {
        id: 978,
        sntc: 'Mən gölməçədə üzdüm',
        tr: 'I swam in the pond',
        ch: 'I swam in the pond'
      },
      {
        id: 979,
        sntc: 'O, ayağını yaralamışdı',
        tr: 'He hurt his leg',
        ch: 'He hurt his leg'
      },
      {
        id: 980,
        sntc: 'Mənə bunu etmək lazımdır',
        tr: 'I need to do it',
        ch: 'I need to do it'
      }
    ],
    [{
        id: 981,
        sntc: 'O, kobuddur',
        tr: "He's rude",
        ch: "He's rude"
      },
      {
        id: 982,
        sntc: 'Mən məktəbə maşınla getdim',
        tr: 'I drove to school',
        ch: 'I drove to school'
      },
      {
        id: 983,
        sntc: 'O boğuldu',
        tr: 'She drowned',
        ch: 'She drowned'
      },
      {
        id: 984,
        sntc: 'Zəng çaldı',
        tr: 'The bell rang',
        ch: 'The bell rang'
      },
      {
        id: 985,
        sntc: 'Bu, planlarımızı korladı',
        tr: 'It spoilt our plans',
        ch: 'It spoilt our plans'
      },
      {
        id: 986,
        sntc: 'O, maşınla evə getdi',
        tr: 'She drove home',
        ch: 'She drove home'
      },
      {
        id: 987,
        sntc: 'Günəşlidir',
        tr: "It's sunny",
        ch: "It's sunny"
      },
      {
        id: 988,
        sntc: 'Qiymət iyirmi faiz artıb',
        tr: 'The price rose by twenty percent',
        ch: 'The price rose by twenty percent'
      },
      {
        id: 989,
        sntc: 'O, şamı yandırdı',
        tr: 'She lit the candle',
        ch: 'She lit the candle'
      },
      {
        id: 990,
        sntc: 'O, ev tapşırıqlarını yenidən etdi',
        tr: 'He redid his homework',
        ch: 'He redid his homework'
      }
    ],
    [{
        id: 991,
        sntc: 'O, bu şeyi mənə verdi',
        tr: 'He gave this thing to me',
        ch: 'He gave this thing to me'
      },
      {
        id: 992,
        sntc: 'Onun valideynləri onu ora buraxdılar',
        tr: 'Her parents let her go there',
        ch: 'Her parents let her go there'
      },
      {
        id: 993,
        sntc: 'Mən başqa işlərlə məşğul olaraq radioya qulaq asa bilərdim',
        tr: 'I could listen to the radio doing other things',
        ch: 'I could listen to the radio doing other things'
      },
      {
        id: 994,
        sntc: 'Biz bunu əvvəldən bilirdik',
        tr: 'We knew it in the beginning',
        ch: 'We knew it in the beginning'
      },
      {
        id: 995,
        sntc: 'Biz enerji ilə doluyuq',
        tr: "We're full of energy",
        ch: "We're full of energy"
      },
      {
        id: 996,
        sntc: 'Mən onu çox yaxşı tanıyırdım',
        tr: 'I knew him very well',
        ch: 'I knew him very well'
      },
      {
        id: 997,
        sntc: 'Mənim müdirim ona lütf etdi',
        tr: 'My boss did him a favor',
        ch: 'My boss did him a favor'
      },
      {
        id: 998,
        sntc: 'Mən bunu vaxtında etdim',
        tr: 'I did it on time',
        ch: 'I did it on time'
      },
      {
        id: 999,
        sntc: 'O, mənə bu şeyi dedi',
        tr: 'She told me this thing',
        ch: 'She told me this thing'
      },
      {
        id: 1000,
        sntc: 'Mən ev tapşırıqlarımı yerinə yetirdim',
        tr: 'I did my homework',
        ch: 'I did my homework'
      }
    ],
    [{
        id: 1001,
        sntc: 'O, siqaretdən imtina etdi',
        tr: 'He gave up smoking',
        ch: 'He gave up smoking'
      },
      {
        id: 1002,
        sntc: 'O, məyus olmuşdu',
        tr: 'She felt upset',
        ch: 'She felt upset'
      },
      {
        id: 1003,
        sntc: 'Bu, üç milyon dollara başa gəldi',
        tr: 'It cost three million dollars',
        ch: 'It cost three million dollars'
      },
      {
        id: 1004,
        sntc: 'O, mənə kömək etmək niyyətində idi',
        tr: 'He intended to help me',
        ch: 'He intended to help me'
      },
      {
        id: 1005,
        sntc: 'Sən evə necə gedirsən?',
        tr: 'How do you get home?',
        ch: 'How do you get home?'
      },
      {
        id: 1006,
        sntc: 'Mən bu şeyi tamamilə unutdum',
        tr: 'I forgot this thing completely',
        ch: 'I forgot this thing completely'
      },
      {
        id: 1007,
        sntc: 'O, topu vurdu',
        tr: 'He hit the ball',
        ch: 'He hit the ball'
      },
      {
        id: 1008,
        sntc: 'Bu paltar sizin əyninədir',
        tr: 'This dress fit you',
        ch: 'This dress fit you'
      },
      {
        id: 1009,
        sntc: 'O, pul haqqında xəyallar qurdu',
        tr: 'He dreamt about money',
        ch: 'He dreamt about money'
      },
      {
        id: 1010,
        sntc: 'Mən həmin kanalı tapdım',
        tr: 'I found that channel',
        ch: 'I found that channel'
      }
    ],
    [{
        id: 1011,
        sntc: 'Mən qalxdım',
        tr: 'I got up',
        ch: 'I got up'
      },
      {
        id: 1012,
        sntc: 'Bu tapşırıq necədir?',
        tr: 'How is this exercise?',
        ch: 'How is this exercise?'
      },
      {
        id: 1013,
        sntc: 'Onlar birlikdə yaxşı vaxt keçirdilər',
        tr: 'They had a good time together',
        ch: 'They had a good time together'
      },
      {
        id: 1014,
        sntc: 'Mən Almaniyaya yola düşdüm',
        tr: 'I left for Germany',
        ch: 'I left for Germany'
      },
      {
        id: 1015,
        sntc: 'Mən dünən sinif yoldaşımla tanış oldum',
        tr: 'I met my classmate yesterday',
        ch: 'I met my classmate yesterday'
      },
      {
        id: 1016,
        sntc: 'Mən çox məyus oldum',
        tr: 'I was bitterly disappointed',
        ch: 'I was bitterly disappointed'
      },
      {
        id: 1017,
        sntc: 'O, ayda iki min dollar alırdı',
        tr: 'He got two thousand dollars a month',
        ch: 'He got two thousand dollars a month'
      },
      {
        id: 1018,
        sntc: 'Mənim dostumun köməyə ehtiyacı var',
        tr: 'My friend needs help',
        ch: 'My friend needs help'
      },
      {
        id: 1019,
        sntc: 'Mən işə getdim',
        tr: 'I went to work',
        ch: 'I went to work'
      },
      {
        id: 1020,
        sntc: 'Mən bu qaydaları əzbər öyrəndim',
        tr: 'I learnt these rules by heart',
        ch: 'I learnt these rules by heart'
      }
    ],
    [{
        id: 1021,
        sntc: 'Bu qəribə görünür',
        tr: 'It looks strange',
        ch: 'It looks strange'
      },
      {
        id: 1022,
        sntc: 'O, çox bahalı paltarlar geyindi',
        tr: 'She wore very expensive clothes',
        ch: 'She wore very expensive clothes'
      },
      {
        id: 1023,
        sntc: 'O, çox xüsusi bir şey çəkdi',
        tr: 'She drew something very special',
        ch: 'She drew something very special'
      },
      {
        id: 1024,
        sntc: 'Mən müştərilərlə məşgul oldum',
        tr: 'I dealt with clients',
        ch: 'I dealt with clients'
      },
      {
        id: 1025,
        sntc: 'O, bu mövzunu universitetdə öyrətirdi',
        tr: 'She taught this subject at university',
        ch: 'She taught this subject at university'
      },
      {
        id: 1026,
        sntc: 'O, topu mənə atdı',
        tr: 'He threw a ball to me',
        ch: 'He threw a ball to me'
      },
      {
        id: 1027,
        sntc: 'Biz İngiltərəni tərk etdik',
        tr: 'We left England',
        ch: 'We left England'
      },
      {
        id: 1028,
        sntc: 'Onun sözləri aşağıdakini nəzərdə tuturdu',
        tr: 'His words meant the following',
        ch: 'His words meant the following'
      },
      {
        id: 1029,
        sntc: 'Bu hekayə çox əyləncəlidir?',
        tr: 'Is this story so funny?',
        ch: 'Is this story so funny?'
      },
      {
        id: 1030,
        sntc: 'O, pivə içməkdən imtina etdi',
        tr: 'He gave up drinking beer',
        ch: 'He gave up drinking beer'
      }
    ],
    [{
        id: 1031,
        sntc: 'O, məşhur aktrisa oldu',
        tr: 'She became a famous actress',
        ch: 'She became a famous actress'
      },
      {
        id: 1032,
        sntc: 'Mən öz inkişafımı gördüm',
        tr: 'I saw my progress',
        ch: 'I saw my progress'
      },
      {
        id: 1033,
        sntc: 'Onlar onu özləri ilə apardılar',
        tr: 'They took her with them',
        ch: 'They took her with them'
      },
      {
        id: 1034,
        sntc: 'Bu böyük səhv deyil',
        tr: "It isn't a big mistake",
        ch: "It isn't a big mistake"
      },
      {
        id: 1035,
        sntc: 'Mən onu ilk dəfə gördüm',
        tr: 'I saw her for the first time',
        ch: 'I saw her for the first time'
      },
      {
        id: 1036,
        sntc: 'Biz onu özümüzlə götürdük',
        tr: 'We took him with us',
        ch: 'We took him with us'
      },
      {
        id: 1037,
        sntc: 'O, kədərləndi',
        tr: 'She felt sad',
        ch: 'She felt sad'
      },
      {
        id: 1038,
        sntc: 'O, qayıtdı',
        tr: 'He returned',
        ch: 'He returned'
      },
      {
        id: 1039,
        sntc: 'O, siqaret çəkməkdən imtina etdi',
        tr: 'She gave up smoking',
        ch: 'She gave up smoking'
      },
      {
        id: 1040,
        sntc: 'Bu çox vacibdir',
        tr: "It's so important",
        ch: "It's so important"
      }
    ],
    [{
        id: 1041,
        sntc: 'Mən bunu radioda eşitdim',
        tr: 'I heard it on the radio',
        ch: 'I heard it on the radio'
      },
      {
        id: 1042,
        sntc: 'Qız əla nəticələr göstərdi',
        tr: 'The girl showed excellent results',
        ch: 'The girl showed excellent results'
      },
      {
        id: 1043,
        sntc: 'O, stəkan suyu stolun üstünə qoydu',
        tr: 'He set a glass of water on the table',
        ch: 'He set a glass of water on the table'
      },
      {
        id: 1044,
        sntc: 'Mən bunu bir neçə məqalədə oxudum',
        tr: 'I read it in several articles',
        ch: 'I read it in several articles'
      },
      {
        id: 1045,
        sntc: 'Mən çoxlu sayda yeni söz öyrəndim',
        tr: 'I learnt so many new words',
        ch: 'I learnt so many new words'
      },
      {
        id: 1046,
        sntc: 'Mən Azərbaycanda böyümüşəm',
        tr: 'I grew up in Azerbaijan',
        ch: 'I grew up in Azerbaijan'
      },
      {
        id: 1047,
        sntc: 'Mən bunu bu məqalədə oxudum',
        tr: 'I read it in this article',
        ch: 'I read it in this article'
      },
      {
        id: 1048,
        sntc: 'Bu faydasız dərsdir',
        tr: "It's a useless lesson",
        ch: "It's a useless lesson"
      },
      {
        id: 1049,
        sntc: 'O, balığı dörd hissəyə böldü',
        tr: 'She cut the fish into four pieces',
        ch: 'She cut the fish into four pieces'
      },
      {
        id: 1050,
        sntc: 'Mən onun yerinə pul ödədim',
        tr: 'I paid for her',
        ch: 'I paid for her'
      }
    ],
    [{
        id: 1151,
        descr: '',
        expl: '',
        sntc: 'Onlar onunla razılaşmadılar',
        tr: 'They didn’t agree with him'
      },
      {
        id: 1152,
        descr: '',
        expl: '',
        sntc: 'O, bunu bizə kifayət qədər aydın izah etmədi',
        tr: 'He didn’t explain it to us clearly enough'
      },
      {
        id: 1153,
        descr: '',
        expl: '',
        sntc: 'O, görüşü ləğv etmədi',
        tr: 'He didn’t call off the meeting'
      },
      {
        id: 1154,
        descr: '',
        expl: '',
        sntc: 'O, nailiyyətləri ilə öyünmədi',
        tr: 'He didn’t boast about his achievements'
      },
      {
        id: 1155,
        descr: '',
        expl: '',
        sntc: 'Onlar evlənmədilər',
        tr: 'They didn’t get married'
      },
      {
        id: 1156,
        descr: '',
        expl: '',
        sntc: 'Onlar ayrılmadılar',
        tr: 'They didn’t break up'
      },
      {
        id: 1157,
        descr: '',
        expl: '',
        sntc: 'Onlar ayrılmadılar',
        tr: 'They didn’t split up'
      },
      {
        id: 1158,
        descr: '',
        expl: '',
        sntc: 'Onun belə niyyəti yox idi',
        tr: 'She didn’t have such an intention'
      },
      {
        id: 1159,
        descr: '',
        expl: '',
        sntc: 'Mən valideynlərim belə qəribə qərarı dəstəkləmədilər',
        tr: 'My parents didn’t support such a strange decision'
      },
      {
        id: 1160,
        descr: '',
        expl: '',
        sntc: 'O, buna görə üzr istəmədi',
        tr: 'He didn’t apologize for it'
      }
    ],
    [{
        id: 1161,
        descr: '',
        expl: '',
        sntc: 'Sən bunu eşitdin?',
        tr: 'Did you hear it?'
      },
      {
        id: 1162,
        descr: '',
        expl: '',
        sntc: 'Onun əri sağaldı?',
        tr: 'Did her husband recover?'
      },
      {
        id: 1163,
        descr: '',
        expl: '',
        sntc: 'Bu dəyişiklik ona müsbət təsir göstərdi?',
        tr: 'Did this change have a positive effect on him?'
      },
      {
        id: 1164,
        descr: '',
        expl: '',
        sntc: 'Sən dünən onu görmüsən?',
        tr: 'Did you see him yesterday?'
      },
      {
        id: 1165,
        descr: '',
        expl: '',
        sntc: 'Sən bu işi əldə etdin?',
        tr: 'Did you get this job?'
      },
      {
        id: 1166,
        descr: '',
        expl: '',
        sntc: 'Bu, sənə qrammatikanı yaxşılaşdırmağa kömək etdi?',
        tr: 'Did it help you improve your grammar?'
      },
      {
        id: 1167,
        descr: '',
        expl: '',
        sntc: 'O, bunu göstərməməyə çalışdı?',
        tr: 'Did she try not to show it?'
      },
      {
        id: 1168,
        descr: '',
        expl: '',
        sntc: 'Sən birinci yeri tutdun?',
        tr: 'Did you take the first place?'
      },
      {
        id: 1169,
        descr: '',
        expl: '',
        sntc: 'Sənin tanışın məsləhətinə əməl etdi?',
        tr: 'Did your acquaintance follow our advice?'
      },
      {
        id: 1170,
        descr: '',
        expl: '',
        sntc: 'Bu, sənə İngilis dilini yaxşılaşdırmağa kömək etdi?',
        tr: 'Did it help you improve your English?'
      }
    ],
    [{
        id: 1171,
        descr: '',
        expl: '',
        sntc: 'Sən dünən hara getdin?',
        tr: 'Where did you go yesterday?'
      },
      {
        id: 1172,
        descr: '',
        expl: '',
        sntc: 'Sən bunu necə bildin?',
        tr: 'How did you know it?'
      },
      {
        id: 1173,
        descr: '',
        expl: '',
        sntc: 'Sən İngilis dilini öyrənməyə nə vaxt başladın?',
        tr: 'When did you start learning English?'
      },
      {
        id: 1174,
        descr: '',
        expl: '',
        sntc: 'Bu necə baş verdi?',
        tr: 'How did it happen?'
      },
      {
        id: 1175,
        descr: '',
        expl: '',
        sntc: 'Sən bunu necə bacardın?',
        tr: 'How did you manage to do it?'
      },
      {
        id: 1176,
        descr: '',
        expl: '',
        sntc: 'Sizə ən çox kim təsir etdi?',
        tr: 'Who influenced you most of all?'
      },
      {
        id: 1177,
        descr: '',
        expl: '',
        sntc: 'Sən kimin kitabını götürmüsən?',
        tr: 'Whose book did you take?'
      },
      {
        id: 1178,
        descr: '',
        expl: '',
        sntc: 'Mən nə qədər səhv buraxdım?',
        tr: 'How many mistakes did I make?'
      },
      {
        id: 1179,
        descr: '',
        expl: '',
        sntc: 'Sən orada nə qədər pul alırdın?',
        tr: 'How much money did you get there?'
      },
      {
        id: 1180,
        descr: '',
        expl: '',
        sntc: 'Sənin diqqətini nə cəlb etdi?',
        tr: 'What attracted your attention?'
      }
    ],
    [{
        id: 1181,
        descr: '',
        expl: '',
        sntc: 'O, şövqlə dolu idi',
        tr: 'She was full of enthusiasm'
      },
      {
        id: 1182,
        descr: '',
        expl: '',
        sntc: 'O, həqiqətən sizə minnətdar idi',
        tr: 'She was really grateful to you'
      },
      {
        id: 1183,
        descr: '',
        expl: '',
        sntc: 'Sən şanslısan',
        tr: 'You are lucky'
      },
      {
        id: 1184,
        descr: '',
        expl: '',
        sntc: 'Bu çox darıxdırıcı film idi',
        tr: 'It was such a boring movie'
      },
      {
        id: 1185,
        descr: '',
        expl: '',
        sntc: 'Yağışlı gün idi',
        tr: 'It was a rainy day'
      },
      {
        id: 1186,
        descr: '',
        expl: '',
        sntc: 'Bu çox riskli idi',
        tr: 'It was very risky'
      },
      {
        id: 1187,
        descr: '',
        expl: '',
        sntc: 'Bu çox təhlükəli idi',
        tr: 'It was so dangerous'
      },
      {
        id: 1188,
        descr: '',
        expl: '',
        sntc: 'Bu, möhtəşəm nəticə idi',
        tr: 'It was an outstanding result'
      },
      {
        id: 1189,
        descr: '',
        expl: '',
        sntc: 'Sən onlarla idin',
        tr: 'You were with them'
      },
      {
        id: 1190,
        descr: '',
        expl: '',
        sntc: 'O, çox səxavətli idi',
        tr: 'He was very generous'
      }
    ],
    [{
        id: 1191,
        descr: '',
        expl: '',
        sntc: 'Mənim dostum orda idi',
        tr: 'My friend was there'
      },
      {
        id: 1192,
        descr: '',
        expl: '',
        sntc: 'Nəticə olduqca yaxşı idi',
        tr: 'The result was quite good'
      },
      {
        id: 1193,
        descr: '',
        expl: '',
        sntc: 'Dərs çox qısa idi',
        tr: 'The lesson was too short'
      },
      {
        id: 1194,
        descr: '',
        expl: '',
        sntc: 'Kişilər binanın içində idilər',
        tr: 'The men were inside the building'
      },
      {
        id: 1195,
        descr: '',
        expl: '',
        sntc: 'Qadın çox qonaqpərvər idi',
        tr: 'The woman was very hospitable'
      },
      {
        id: 1196,
        descr: '',
        expl: '',
        sntc: 'Bu nəticə orta səviyyədən aşağı idi',
        tr: 'This result was below average'
      },
      {
        id: 1197,
        descr: '',
        expl: '',
        sntc: 'Sənin cavabın doğru idi',
        tr: 'Your answer was correct'
      },
      {
        id: 1198,
        descr: '',
        expl: '',
        sntc: 'Onun ideyası olduqca yeni idi',
        tr: 'His idea was quite new'
      },
      {
        id: 1199,
        descr: '',
        expl: '',
        sntc: 'Bu bilik kifayət idi',
        tr: 'This knowledge was more than enough'
      },
      {
        id: 1200,
        descr: '',
        expl: '',
        sntc: 'Kişi binadan kənarda idi',
        tr: 'The man was outside the building'
      }
    ],
    [{
        id: 1201,
        descr: '',
        expl: '',
        sntc: 'Mənim nəticəm mənə qane etmədi',
        tr: 'I wasn’t satisfied with my result'
      },
      {
        id: 1202,
        descr: '',
        expl: '',
        sntc: 'Biz inamla dolu deyildik',
        tr: 'We weren’t full of confidence'
      },
      {
        id: 1203,
        descr: '',
        expl: '',
        sntc: 'Sən bizim yerimizdə olmamısan',
        tr: 'You weren’t in our place'
      },
      {
        id: 1204,
        descr: '',
        expl: '',
        sntc: 'O, evli deyildi',
        tr: 'He wasn’t married'
      },
      {
        id: 1205,
        descr: '',
        expl: '',
        sntc: 'O, yeni çətinliklərdən qorxmurdu',
        tr: 'He wasn’t afraid of new difficulties'
      },
      {
        id: 1206,
        descr: '',
        expl: '',
        sntc: 'O, bu dəyişikliyə hazır deyildi',
        tr: 'She wasn’t ready for this change'
      },
      {
        id: 1207,
        descr: '',
        expl: '',
        sntc: 'Sən kifayət qədər diqqətli deyildin',
        tr: 'You weren’t careful enough'
      },
      {
        id: 1208,
        descr: '',
        expl: '',
        sntc: 'Biz tətildə deyildik',
        tr: 'We weren’t on holiday'
      },
      {
        id: 1209,
        descr: '',
        expl: '',
        sntc: 'Onlar sahildə deyildilər',
        tr: 'They weren’t on the beach'
      },
      {
        id: 1210,
        descr: '',
        expl: '',
        sntc: 'Mən bu nailiyyətlə fəxr etmədim',
        tr: 'I wasn’t proud of this achievement'
      }
    ],
    [{
        id: 1211,
        descr: '',
        expl: '',
        sntc: 'Qadınlar hər şeylə maraqlanan deyildilər',
        tr: 'The women weren’t curious'
      },
      {
        id: 1212,
        descr: '',
        expl: '',
        sntc: 'Onun cəhdləri uğurlu olmadı',
        tr: 'His attempts weren’t successful'
      },
      {
        id: 1213,
        descr: '',
        expl: '',
        sntc: 'Onun gəldiyi nəticə olduqca məntiqli idi',
        tr: 'His conclusion was quite logical'
      },
      {
        id: 1214,
        descr: '',
        expl: '',
        sntc: 'Onun nəticəsi həqiqətən təəssürat doğurdu',
        tr: 'Her result was really impressive'
      },
      {
        id: 1215,
        descr: '',
        expl: '',
        sntc: 'Onun tövsiyəsi faydalı deyildi',
        tr: 'His recommendation wasn’t useful'
      },
      {
        id: 1216,
        descr: '',
        expl: '',
        sntc: 'Onun səhvi çox böyük idi',
        tr: 'His mistake was very big'
      },
      {
        id: 1217,
        descr: '',
        expl: '',
        sntc: 'Mənim dostlarım öz nəticələrindən məmnun deyildilər',
        tr: 'My friends weren’t satisfied with their results'
      },
      {
        id: 1218,
        descr: '',
        expl: '',
        sntc: 'Oğlan zəif deyildi',
        tr: 'The boy wasn’t weak'
      },
      {
        id: 1219,
        descr: '',
        expl: '',
        sntc: 'Onun cəhdi uğurlu olmadı',
        tr: 'His attempt wasn’t successful'
      },
      {
        id: 1220,
        descr: '',
        expl: '',
        sntc: 'Mən ən yaxın dostum çox optimist idi',
        tr: 'My best friend was too optimistic'
      }
    ],
    [{
        id: 1221,
        descr: '',
        expl: '',
        sntc: 'Biz həmin yerdə idik?',
        tr: 'Were we in the same place?'
      },
      {
        id: 1222,
        descr: '',
        expl: '',
        sntc: 'Onlar öndə idilər?',
        tr: 'Were they ahead?'
      },
      {
        id: 1223,
        descr: '',
        expl: '',
        sntc: 'Onlar sizə qarşı xeyirxah idilər?',
        tr: 'Were they kind to you?'
      },
      {
        id: 1224,
        descr: '',
        expl: '',
        sntc: 'Onlar onun arxasında idilər?!',
        tr: 'Were they behind him?'
      },
      {
        id: 1225,
        descr: '',
        expl: '',
        sntc: 'Mən yanlış yolda idim?',
        tr: 'Was I on the wrong way?'
      },
      {
        id: 1226,
        descr: '',
        expl: '',
        sntc: 'Mən çalışqan tələbə idim?',
        tr: 'Was I a hard-working student?'
      },
      {
        id: 1227,
        descr: '',
        expl: '',
        sntc: 'Bizim bəxtimiz gətirdi?',
        tr: 'Were we lucky?'
      },
      {
        id: 1228,
        descr: '',
        expl: '',
        sntc: 'Sən bəlaya düşdün?',
        tr: 'Were you in trouble?'
      },
      {
        id: 1229,
        descr: '',
        expl: '',
        sntc: 'Onlar həbs olunmuşdular?',
        tr: 'Were they under arrest?'
      },
      {
        id: 1230,
        descr: '',
        expl: '',
        sntc: 'Mən haqlı idim?',
        tr: 'Was I right?'
      }
    ],
    [{
        id: 1231,
        descr: '',
        expl: '',
        sntc: 'Bu qədər şübhəli olan nə idi?',
        tr: 'What was so suspicious?'
      },
      {
        id: 1232,
        descr: '',
        expl: '',
        sntc: 'Sən dünən harada idin?',
        tr: 'Where were you yesterday?'
      },
      {
        id: 1233,
        descr: '',
        expl: '',
        sntc: 'Birinci yerdə kim idi?',
        tr: 'Who was in the first place?'
      },
      {
        id: 1234,
        descr: '',
        expl: '',
        sntc: 'O, nə üçün elə fikirli idi?',
        tr: 'Why was he so thoughtful?'
      },
      {
        id: 1235,
        descr: '',
        expl: '',
        sntc: 'O, ne cür insan idi?',
        tr: 'What kind of person was he?'
      },
      {
        id: 1236,
        descr: '',
        expl: '',
        sntc: 'Onun, neçə yaşı var idi?',
        tr: 'How old was he?'
      },
      {
        id: 1237,
        descr: '',
        expl: '',
        sntc: 'Bu, nə vaxt olub?',
        tr: 'What time was it?'
      },
      {
        id: 1238,
        descr: '',
        expl: '',
        sntc: 'Həmin komandada kimlər var idi?',
        tr: 'Who was in the same team?'
      },
      {
        id: 1239,
        descr: '',
        expl: '',
        sntc: 'Bu, nə qədər vaxt çəkdi?',
        tr: 'How long was it?'
      },
      {
        id: 1240,
        descr: '',
        expl: '',
        sntc: 'Bu kimin fikri idi?',
        tr: 'Whose idea was it?'
      }
    ],
    [{
        id: 1241,
        descr: '',
        expl: '',
        sntc: 'Nəyə görə həmin mətn sənin üçün elə çətin idi?',
        tr: 'Why was that text so difficult for you?'
      },
      {
        id: 1242,
        descr: '',
        expl: '',
        sntc: 'Onun soyadı nə idi?',
        tr: 'What was her surname?'
      },
      {
        id: 1243,
        descr: '',
        expl: '',
        sntc: 'Onun soyadı nə idi?',
        tr: 'What was her last name?'
      },
      {
        id: 1244,
        descr: '',
        expl: '',
        sntc: 'Oğlan nəyə görə bu qədər məyus olmuşdu?',
        tr: 'Why was the boy so disappointed?'
      },
      {
        id: 1245,
        descr: '',
        expl: '',
        sntc: 'Sənin valideynlərin axırıncı dəfə xaricdə nə vaxt olub?',
        tr: 'When were your parents abroad last time?'
      },
      {
        id: 1246,
        descr: '',
        expl: '',
        sntc: 'Hava limanı nə qədər uzaq idi?',
        tr: 'How far was the airport?'
      },
      {
        id: 1247,
        descr: '',
        expl: '',
        sntc: 'Ən yaxın supermarket çox uzaqda idi?',
        tr: 'How far was the nearest supermarket?'
      },
      {
        id: 1248,
        descr: '',
        expl: '',
        sntc: 'Neçə müddət əvvəl sənin dostun orada idi?',
        tr: 'How long time ago was your friend there?'
      },
      {
        id: 1249,
        descr: '',
        expl: '',
        sntc: 'Neçə müddət əvvəl sən orada idin?',
        tr: 'How long time ago were you there?'
      },
      {
        id: 1250,
        descr: '',
        expl: '',
        sntc: 'Mühazirə nə qədər davam etdi?',
        tr: 'How long was the lecture?'
      }
    ],

  ],
};

let obj = [];

for (let i = 80; i < 91; i++) {
  for (let a = 0; a < 10; a++) {
    // obj.id=initialState.lessons[0][i][a].id
    obj.push(initialState.lessons[i][a].descr)
  }
}
console.log(obj)



const theory = (state = initialState, action) => {
  return state
}

export default theory