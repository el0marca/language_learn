const initialState = {
  lessons: [
    [{
        id: '1',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mən burada təhsil alıram',
        tr: 'I study here'
      },
      {
        id: '2',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mən səni başa düşürəm',
        tr: 'I understand you'
      },
      {
        id: '3',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mən orada işləyirəm',
        tr: 'I work there'
      },
      {
        id: '4',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Sən bunu bilirsən',
        tr: 'You know it'
      },
      {
        id: '5',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Biz orada işləyirik',
        tr: 'We work there'
      },
      {
        id: '6',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil+s ...',
        sntc: 'O, İngilis dilində danışır',
        tr: 'He speaks English'
      },
      {
        id: '7',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil+s ...',
        sntc: 'O, burada yaşayır',
        tr: 'She lives here'
      },
      {
        id: '8',
        descr: 'İngilis dilində ən sadə cümlələr mübtəda + feil (xəbər) köməyi ilə formalaşır',
        expl: 'Şəxs\u00A0əvəzliyi feil+s ...',
        sntc: 'Bu mənə kömək edir',
        tr: 'It helps me'
      },
      {
        id: '9',
        descr: 'Adətən isimlərin cəm halını bildirmək üçün -s əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil+s isim+s',
        sntc: 'O, kitabları xoşlayır',
        tr: 'He likes books'
      },
      {
        id: '10',
        descr: '‘Also’ adətən əvəzlikdən sonra yerləşir. ‘So’ sözünün müxtəlif mənası var. Əgər bu sözlə ‘belə’ demək istəyiriksə ‘so’ cümlənin sonunda yer tutur',
        expl: 'Şəxs\u00A0əvəzliyi also feil+s so',
        sntc: 'O da belə düşünür',
        tr: 'She also thinks so'
      },
    ],
    [{
        id: '11',
        descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim sait səslə başlayırsa an artikl istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil an ...',
        sntc: 'Məndə alma var',
        tr: 'I have an apple'
      },
      {
        id: '12',
        descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında qoyulur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil a ...',
        sntc: 'Mənim bacım var',
        tr: 'I have a sister'
      },
      {
        id: '13',
        descr: 'Qeyri-müəyyən artikla a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Onların pulu var',
        tr: 'They have money'
      },
      {
        id: '14',
        descr: 'A(an) artikl sifətdən öncə istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil an sifət ...',
        sntc: 'Mənim maraqlı fikrim var',
        tr: 'I have an interesting idea'
      },
      {
        id: '15',
        descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi also feil ...',
        sntc: 'Onun da pulu var',
        tr: 'He also has money'
      },
      {
        id: '16',
        descr: 'Qeyri-müəyyən artikl a(an)-bir cəm isimlərlə istifadə olunmur',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mənim kitablarım var',
        tr: 'I have books'
      },
      {
        id: '17',
        descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil a ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
      {
        id: '18',
        descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'Şəxs\u00A0əvəzliyi feil in işarə\u00A0əvəzliyi ...',
        sntc: 'O bu evdə yaşayır',
        tr: 'He lives in this house'
      },
      {
        id: '19',
        descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'Şəxs\u00A0əvəzliyi feil in işarə\u00A0əvəzliyi ...',
        sntc: 'O bu yerdə işləyir',
        tr: 'She works in this place'
      },
      {
        id: '20',
        descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
        expl: 'Şəxs\u00A0əvəzliyi feil in işarə\u00A0əvəzliyi ...',
        sntc: 'Onlar bu şəhərdə yaşayırlar',
        tr: 'They live in this city'
      },
    ],
    [{
        id: '21',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, məktəbə gedir',
        tr: 'He goes to school'
      },
      {
        id: '22',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, televizora baxır',
        tr: 'She watches TV'
      },
      {
        id: '23',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, sənin üçün darıxır',
        tr: 'He misses you'
      },
      {
        id: '24',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Sən bunu bilirsən',
        tr: 'You know it'
      },
      {
        id: '25',
        descr: 'Often adətən əvəzlikdən sonra yer tutur',
        expl: 'Şəxs\u00A0əvəzliyi often feil+es ...',
        sntc: 'O, tez-tez kinoya gedir',
        tr: 'She often goes to the cinema'
      },
      {
        id: '26',
        descr: 'Very sözü ilə işlədilən ifadələr adətən cümlənin sonunda yerləşirlər',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ... very well',
        sntc: 'O, bunu çox yaxşı edir',
        tr: 'He does it very well'
      },
      {
        id: '27',
        descr: '‘He/She/It + feil’ konstruksiyada feil ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, İngilis dilini öyrədir',
        tr: 'She teaches English'
      },
      {
        id: '28',
        descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Onun evi var',
        tr: 'He has a house'
      },
      {
        id: '29',
        descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Onun dolları var',
        tr: 'She has dollars'
      },
      {
        id: '30',
        descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
        expl: 'Şəxs\u00A0əvəzliyi feil a ...',
        sntc: 'Onun maşını var',
        tr: 'He has a car'
      },
    ],
    [{
        id: '31',
        descr: 'Əvəzliklərin istifadə qaydaları. I => my',
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
        descr: 'Əvəzliklərin istifadə qaydaları. they => their',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onların evi böyük görünür',
        tr: 'Their house seems big'
      },
      {
        id: '34',
        descr: 'İngilis dilində müəyyən artikl (the) köməyi ilə formalaşan çoxlu sayda sabit ifadələr var',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... the same',
        sntc: 'Bizim müəllimimiz də eyni fikirdədir',
        tr: 'Our teacher thinks the same'
      },
      {
        id: '35',
        descr: 'Əvəzliklərin istifadə qaydaları. we => our',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Bizim anamız işə gedir',
        tr: 'Our mother goes to work'
      },
      {
        id: '36',
        descr: 'Əvəzliklərin istifadə qaydaları. I => my',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... always feil ...',
        sntc: 'Mənim dostlarım həmişə mənə dəstək olur',
        tr: 'My friends always support me'
      },
      {
        id: '37',
        descr: 'Əvəzliklərin istifadə qaydaları. he => his',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil+es ...',
        sntc: 'Onun bacısı məktəbə gedir',
        tr: 'His sister goes to school'
      },
      {
        id: '38',
        descr: 'Əvəzliklərin istifadə qaydaları. she => her',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun sözləri qəribə gəlir',
        tr: 'Her words seem strange'
      },
      {
        id: '39',
        descr: 'Əvəzliklərin istifadə qaydaları. she => her',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun anası orada işləyir',
        tr: 'Her mother works there'
      },
      {
        id: '40',
        descr: '‘It’ sözü əşya və heyvana istinad etmək üçün istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi feil a ... Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Onun şirkəti var. Onun gəliri böyük görünür',
        tr: 'She has a company. Its profit seems big'
      },
    ],
    [{
        id: '41',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'All yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Bütün ideyaların maraqlı gəlir',
        tr: 'All your ideas seem interesting'
      },
      {
        id: '42',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'Sənin maşının kiçik görünür',
        tr: 'Your car looks small'
      },
      {
        id: '43',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ...',
        sntc: 'İdeyanız yaxşı görünür',
        tr: 'Your idea seems good'
      },
      {
        id: '44',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Sənin evin xoşuma gəlir',
        tr: 'I like your house'
      },
      {
        id: '45',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'O, sənin maşınını bəyənir',
        tr: 'He likes your car'
      },
      {
        id: '46',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o adamı tanıyıram',
        tr: 'I know that person'
      },
      {
        id: '47',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o adamları başa düşürəm',
        tr: 'I understand those people'
      },
      {
        id: '48',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil işarə\u00A0əvəzliyi ...',
        sntc: 'O, bu şeyləri xoşlaryır',
        tr: 'She likes these things'
      },
      {
        id: '49',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil işarə\u00A0əvəzliyi ...',
        sntc: 'O, bu maşını görür',
        tr: 'He sees this car'
      },
      {
        id: '50',
        descr: 'Əvəzliklərin istifadə qaydaları',
        expl: 'Şəxs\u00A0əvəzliyi feil işarə\u00A0əvəzliyi ...',
        sntc: 'Mən o evləri görürəm',
        tr: 'I see those houses'
      },
    ],
    [{
        id: '51',
        descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. A(an) artikl sifətdən öncə istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi want a sifət ...',
        sntc: 'Mən yeni maşın istəyirəm',
        tr: 'I want a new car'
      },
      {
        id: '52',
        descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. Really adətən əvəzlikdən sonra yer tutur',
        expl: 'Şəxs\u00A0əvəzliyi really want ...',
        sntc: 'Mən həqiqətən bunu istəyirəm',
        tr: 'I really want it'
      },
      {
        id: '53',
        descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. ',
        expl: 'Şəxs\u00A0əvəzliyi want a sifət ...',
        sntc: 'Mən yeni ev istəyirəm',
        tr: 'I want a new house'
      },
      {
        id: '54',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil',
        sntc: 'Mən təhsil almaq istəyirəm',
        tr: 'I want to study'
      },
      {
        id: '55',
        descr: 'Ümumi qaydaya əsasən İngilis dilində iki feil ədat(to) koməyi ilə birləşirlər',
        expl: 'Şəxs\u00A0əvəzliyi feil to feil',
        sntc: 'Mən yemək istəyirəm',
        tr: 'I want to eat'
      },
      {
        id: '56',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil ...',
        sntc: 'Mən bunu bilmək istəyirəm',
        tr: 'I want to know it'
      },
      {
        id: '57',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ konstruksiyanı işlətin. Really adətən əvəzlikdən sonra yerləşir',
        expl: 'Şəxs\u00A0əvəzliyi really want to feil',
        sntc: 'Mən həqiqətən bunu etmək istəyirəm',
        tr: 'I really want to do it'
      },
      {
        id: '58',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil',
        sntc: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English better'
      },
      {
        id: '59',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil a sifət ...',
        sntc: 'Mən yaxşı maşına sahib olmaq istəyirəm',
        tr: 'I want to have a good car'
      },
      {
        id: '60',
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil a sifət ...',
        sntc: 'Mən yaxşı iş sahibi olmaq istəyirəm',
        tr: 'I want to have a good job'
      }
    ],
    [{
        id: 61,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi like ...',
        sntc: 'Mən bunu xoşlayıram',
        tr: 'I like it'
      },
      {
        id: 62,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi like ...',
        sntc: 'Biz sənin dərslərini bəyənirik',
        tr: 'We like your lessons'
      },
      {
        id: 63,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün like aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi like ...',
        sntc: 'Bu video xoşuma gəlir',
        tr: 'I like this video'
      },
      {
        id: 64,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi really like ...',
        sntc: 'Mən həqiqətən bunu xoşlayıram',
        tr: 'I really like it'
      },
      {
        id: 65,
        descr: 'Bir şeyi etməyi xoşuna gəldiyini ifadə etmək üçün aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi really like to ...',
        sntc: 'Mən həqiqətən bunu etməyi xoşlayıram',
        tr: 'I really like to do it'
      },
      {
        id: 66,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün aşağıdaki konstruksiyanı işlətin',
        expl: 'Şəxs\u00A0əvəzliyi also like+s ...',
        sntc: 'Bu dərs onun da xoşuna gəlir',
        tr: 'She also likes this lesson'
      },
      {
        id: 67,
        descr: "Mən istərdim konstruksiyası",
        expl: 'Şəxs\u00A0əvəzliyi would like a cup of ...',
        sntc: 'Mən bir fincan çay istərdim',
        tr: 'I would like a cup of tea'
      },
      {
        id: 68,
        descr: 'Mən etmək istərdim konstruksiyası:',
        expl: 'Şəxs\u00A0əvəzliyi would like to ...',
        sntc: 'O, bunu etmək istərdi',
        tr: 'He would like to do it'
      },
      {
        id: 69,
        descr: 'Mən etmək istərdim konstruksiyası:',
        expl: 'Şəxs\u00A0əvəzliyi would like to ... a cup of ...',
        sntc: 'Mən bir fincan qəhvə içmək istərdim',
        tr: 'I would like to drink a cup of coffee'
      },
      {
        id: 70,
        descr: 'Mən etmək istərdim konstruksiyası:',
        expl: 'Şəxs\u00A0əvəzliyi would like to ...',
        sntc: 'Mən o yeri ziyarət etmək istərdim',
        tr: 'I would like to visit that place'
      }
    ],
    [{
        id: 71,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil',
        sntc: 'Mən bilmirəm',
        tr: 'I don’t know'
      },
      {
        id: 72,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil',
        sntc: 'Biz başa düşmürük',
        tr: 'We don’t understand'
      },
      {
        id: 73,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil ...',
        sntc: 'Mən İngilis dilini öyrənməyə çalışmıram',
        tr: 'I don’t try to learn English'
      },
      {
        id: 74,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil ...',
        sntc: 'Sən mənə kömək etmirsən',
        tr: 'You don’t help me'
      },
      {
        id: 75,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil ...',
        sntc: 'Mən səninlə razı deyiləm',
        tr: 'I don’t agree with you'
      },
      {
        id: 76,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'O, bunu bilmir',
        tr: "He doesn't know it"
      },
      {
        id: 77,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'O, bunu müzakirə etmək istəmir',
        tr: 'She doesn’t want to discuss it'
      },
      {
        id: 78,
        descr: 'İndiki sadə zamanda inkare tmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'Bu mənə kömək etmir',
        tr: 'It doesn’t help me'
      },
      {
        id: 79,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'Bu qəribə gəlmir',
        tr: 'It doesn’t seem strange'
      },
      {
        id: 80,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil',
        sntc: 'Bu işləmir',
        tr: 'It doesn’t work'
      }
    ],
    [{
        id: 81,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'Bu şəhər böyük görünmür',
        tr: 'This city doesn’t seem big'
      },
      {
        id: 82,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'Bu maşın böyük görünmür',
        tr: 'This car doesn’t seem big'
      },
      {
        id: 83,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu şeylər məni maraqlandırmır',
        tr: 'These things don’t interest me'
      },
      {
        id: 84,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu dərslər faydalı görünmür',
        tr: 'These lessons don’t seem useful'
      },
      {
        id: 85,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'Bu şeylər məni cəlb etmir',
        tr: 'These things don’t attract me'
      },
      {
        id: 86,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'O, üsul maraqlı gəlmir',
        tr: 'That method doesn’t seem interesting'
      },
      {
        id: 87,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'O, insan xoşbəxt görünmür',
        tr: 'That person doesn’t look happy'
      },
      {
        id: 88,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... doesn’t feil ...',
        sntc: 'O şey maraqlı gəlmir',
        tr: 'That thing doesn’t seem interesting'
      },
      {
        id: 89,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'O şeylər qəribə gəlmir',
        tr: 'Those things don’t seem strange'
      },
      {
        id: 90,
        descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
        expl: 'İşarə\u00A0əvəzliyi ... don’t feil ...',
        sntc: 'O dərslər faydalı görünmür',
        tr: 'Those lessons don’t seem useful'
      }
    ],
    [{
        id: 91,
        descr: 'Ehtiyacı bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need ...',
        sntc: 'Bu məlumata ehtiyacım var',
        tr: 'I need this information'
      },
      {
        id: 92,
        descr: 'Ehtiyacı bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need ...',
        sntc: 'Mənim bu şeyə ehtiyacım var',
        tr: 'I need this thing'
      },
      {
        id: 93,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Mənə bunu etmək lazımdır',
        tr: 'I need to do it'
      },
      {
        id: 94,
        descr: 'Ehtiyacı bildirmək üçün:',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... needs ...',
        sntc: 'Mənim dostumun sənin məsləhətinə ehtiyacı var',
        tr: 'My friend needs your advice'
      },
      {
        id: 95,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Onlara bunu yoxlamaq lazımdır',
        tr: 'They need to check it'
      },
      {
        id: 96,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Bizə İngilis dilini öyrənmək lazımdır',
        tr: 'We need to learn English'
      },
      {
        id: 97,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Sənə bu səhvi düzəltmək lazımdır',
        tr: 'You need to correct this mistake'
      },
      {
        id: 98,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Mənə onu görmək lazımdır',
        tr: 'I need to see her'
      },
      {
        id: 99,
        descr: 'Ehtiyacı bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi really needs ...',
        sntc: 'Ona həqiqətən bu lazımdır',
        tr: 'He really needs it'
      },
      {
        id: 100,
        descr: 'Bir şeyi etmək ehtiyacı bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi really needs to ...',
        sntc: 'Ona həqiqətən də bu problemi həll etmək lazımdır',
        tr: 'She really needs to solve this problem'
      }
    ],
    [{
        id: 101,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən bunu bilirsən?',
        tr: 'Do you know it?'
      },
      {
        id: 102,
        descr: "'Make' daha əvvəl mövcud olmayan bir şey yaratmaq, qurmaq, istehsal etmək haqqında danışırıqsa istifadə edirik",
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Mən səhvlər edirəm?',
        tr: 'Do I make mistakes?'
      },
      {
        id: 103,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən məni anlayırsan?',
        tr: 'Do you understand me?'
      },
      {
        id: 104,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən mənimlə razısan?',
        tr: 'Do you agree with me?'
      },
      {
        id: 105,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən mənə dəstəksən?',
        tr: 'Do you support me?'
      },
      {
        id: 106,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Onların köməyə ehtiyacları var?',
        tr: 'Do they need help?'
      },
      {
        id: 107,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən mənim qərarımı dəstəkləyirsən?',
        tr: 'Do you support my decision?'
      },
      {
        id: 108,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi often feil ... ?',
        sntc: 'Onlar bunu tez-tez müzakirə edirlər?',
        tr: 'Do they often discuss it?'
      },
      {
        id: 109,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Bizim kifayət qədər biliyimiz var?',
        tr: 'Do we have enough knowledge?'
      },
      {
        id: 110,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Bizim kifayət qədər praktikamız var?',
        tr: 'Do we have enough practice?'
      }
    ],
    [{
        id: 111,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, hər şeyi ona deyir?',
        tr: 'Does she tell him everything?'
      },
      {
        id: 112,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, bu şeyə nifrət edir?',
        tr: 'Does he hate this thing?'
      },
      {
        id: 113,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi look for ... ?',
        sntc: 'O, iş axtarır?',
        tr: 'Does he look for a job?'
      },
      {
        id: 114,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Ona ora gəlmək lazımdır?',
        tr: 'Does she need to come there?'
      },
      {
        id: 115,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Ona bunu etmək lazımdır?',
        tr: 'Does she need to do it?'
      },
      {
        id: 116,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi feil a sifət ... ?',
        sntc: 'O, yeni iş tapmağa çalışır?',
        tr: 'Does he try to find a new job?'
      },
      {
        id: 117,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi often feil ... ?',
        sntc: 'O, tez-tez bunu istifadə edir?',
        tr: 'Does she often use it?'
      },
      {
        id: 118,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi often feil ... ?',
        sntc: 'O, tez-tez televizora baxır?',
        tr: 'Does he often watch TV?'
      },
      {
        id: 119,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi often feil ... ?',
        sntc: 'O, tez-tez radioya qulaq asır?',
        tr: 'Does he often listen to the radio?'
      },
      {
        id: 120,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does şəxs\u00A0əvəzliyi often feil ... ?',
        sntc: 'O, bunu tez-tez eşidir?',
        tr: 'Does he often hear it?'
      },
    ],
    [{
        id: 121,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu dərs faydalı görünür?',
        tr: 'Does this lesson seem useful?'
      },
      {
        id: 122,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil very ... ?',
        sntc: 'Bu üsul çox maraqlı gəlir?',
        tr: 'Does this method seem very interesting?'
      },
      {
        id: 123,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... very ... ?',
        sntc: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
        tr: 'Does this teacher explain everything very well?'
      },
      {
        id: 124,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu məlumat faydasız görünür?',
        tr: 'Does this information seem useless?'
      },
      {
        id: 125,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu şey vacib görünür?',
        tr: 'Does this thing seem important?'
      },
      {
        id: 126,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə\u00A0əvəzliyi ... feil şəxs\u00A0əvəzliyi?',
        sntc: 'Bu dərslər sənə kömək edir?',
        tr: 'Do these lessons help you?'
      },
      {
        id: 127,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu tələbələr əla nəticələr göstərirlər?',
        tr: 'Do these students show excellent results?'
      },
      {
        id: 128,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'O tələbələr İngilis dilində düzgün danışır?',
        tr: 'Do those students speak English correctly?'
      },
      {
        id: 129,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu şeylər sənə kömək edir?',
        tr: 'Do these things help you?'
      },
      {
        id: 130,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu dərslər faydalı görünür?',
        tr: 'Do these lessons seem useful?'
      }
    ],
    [{
        id: 131,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostun sənə kömək edir?',
        tr: 'Does your friend help you?'
      },
      {
        id: 132,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Onların dostu onlara kömək edir?',
        tr: 'Does their friend help them?'
      },
      {
        id: 133,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Mənim dostlarım mənə dəstək olurlar?',
        tr: 'Do my friends support me?'
      },
      {
        id: 134,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostların sənə dəstək olurlar?',
        tr: 'Do your friends support you?'
      },
      {
        id: 135,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu insanın bizim köməyimizə ehtiyacı var?',
        tr: 'Does this person need our help?'
      },
      {
        id: 136,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu nəticə səndən asılıdır?',
        tr: 'Does this result depend on you?'
      },
      {
        id: 137,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu tapşırıq çox asan gəlir?',
        tr: 'Does this exercise seem too easy?'
      },
      {
        id: 138,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu məlumat faydalı görünür?',
        tr: 'Does this information seem useful?'
      },
      {
        id: 139,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Do işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'O dərslər faydalı görünür?',
        tr: 'Do those lessons seem useful?'
      },
      {
        id: 140,
        descr: 'Indiki sadə zamanda sual',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Onun müəllimi onun bütün səhvlərini düzəldir?',
        tr: 'Does his teacher correct all his mistakes?'
      }
    ],
    [{
        id: 141,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən harada yaşayırsan?',
        tr: 'Where do you live?'
      },
      {
        id: 142,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil so?',
        sntc: 'Sən niyə belə düşünürsən?',
        tr: 'Why do you think so?'
      },
      {
        id: 143,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən bu fikri necə görürsən?',
        tr: 'How do you find this idea?'
      },
      {
        id: 144,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sənin ne vaxt boş vaxtın olur?',
        tr: 'When do you have free time?'
      },
      {
        id: 145,
        descr: 'Present simple (Special Question)',
        expl: 'What kind of ... do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən nə cür kitablar oxuyursan?',
        tr: 'What kind of books do you read?'
      },
      {
        id: 146,
        descr: 'Present simple (Special Question)',
        expl: 'How much ... do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sənin üstündə nə qədər pulun var?',
        tr: 'How much money do you have with you?'
      },
      {
        id: 147,
        descr: 'Present simple (Special Question)',
        expl: 'What time ... do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən nə vaxt qalxırsan?',
        tr: 'What time do you get up?'
      },
      {
        id: 148,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən hara gedirsən?',
        tr: 'Where do you go?'
      },
      {
        id: 149,
        descr: 'Present simple (Special Question)',
        expl: 'What time ... do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən nə vaxt yatırsan?',
        tr: 'What time do you go to bed?'
      },
      {
        id: 150,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz feil ... ?',
        sntc: 'Mənə kim dəstək olur?',
        tr: 'Who supports me?'
      }
    ],
    [{
        id: 151,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil?',
        sntc: 'O, harada işləyir?',
        tr: 'Where does she work?'
      },
      {
        id: 152,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, niyə belə tez-tez şikayət edir?',
        tr: 'Why does he complain so often?'
      },
      {
        id: 153,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, niyə pul ödəməkdən imtina edir?',
        tr: 'Why does he refuse to pay?'
      },
      {
        id: 154,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, nə əlavə etmək istəyir?',
        tr: 'What does he want to add?'
      },
      {
        id: 155,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, sizə necə dayaq olur?',
        tr: 'How does he support you?'
      },
      {
        id: 156,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, özünü nə vaxt xoşbəxt hiss edir?',
        tr: 'When does he feel happy?'
      },
      {
        id: 157,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz ... does şəxs\u00A0əvəzliyi feil?',
        sntc: 'O, hansı içkiyə üstünlük verir?',
        tr: 'What drink does he prefer?'
      },
      {
        id: 158,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz ... does şəxs\u00A0əvəzliyi usually feil?',
        sntc: 'O, adətən hansı kanala baxır?',
        tr: 'Which channel does he usually watch?'
      },
      {
        id: 159,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz ... do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən İngilis dilini nə qədər müntəzəm öyrənirsən?',
        tr: 'How regularly do you learn English?'
      },
      {
        id: 160,
        descr: 'Present simple (Special Question)',
        expl: 'How long does it take şəxs\u00A0əvəzliyi ... ?',
        sntc: 'İşə getmək üçün sənə nə qədər vaxt lazımdır?',
        tr: 'How long does it take you to get to work?'
      }
    ],
    [{
        id: 161,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil?',
        sntc: 'Sənin atan harada işləyir?',
        tr: 'Where does your father work?'
      },
      {
        id: 162,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostların nə üçün səninlə razılaşmır?',
        tr: 'Why do your friends disagree with you?'
      },
      {
        id: 163,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostların bunu necə idarə edir?',
        tr: 'How do your friends control it?'
      },
      {
        id: 164,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi feil ... ?',
        sntc: 'Senin atan evi nə vaxt tərk edir?',
        tr: 'When does your father leave home?'
      },
      {
        id: 165,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do İşarə\u00A0əvəzliyi ... feil?',
        sntc: 'Bu şeylər nə vaxt baş verir?',
        tr: 'When do these things happen?'
      },
      {
        id: 166,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... usually feil?',
        sntc: 'Sənin dostların adətən nə sifariş edir?',
        tr: 'What do your friends usually order?'
      },
      {
        id: 167,
        descr: 'Present simple (Special Question)',
        expl: 'Sual\u00A0söz ... do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin müəllimlərin sənə nə məsləhət verirlər?',
        tr: 'What advice do your teachers give you?'
      },
      {
        id: 168,
        descr: 'Present simple (Special Question)',
        expl: 'What kind of ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil?',
        sntc: 'Onun müəllimi nə cür nümunələr göstərir?',
        tr: 'What kind of examples does his teacher give?'
      },
      {
        id: 169,
        descr: 'Present simple (Special Question). Sayılmayan isimlərlə:',
        expl: 'How much ... ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil?',
        sntc: 'Sənin biznes yoldaşının nə qədər boş vaxtı var?',
        tr: 'How much free time does your business partner have?'
      },
      {
        id: 170,
        descr: 'Present simple (Special Question). Sayılan isimlərlə:',
        expl: 'How many ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Sənin dostların nə qədər İngilis sözünü bilmək istəyirlər?',
        tr: 'How many English words does your friends want to know?'
      }
    ],
    [{
        id: 171,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mən bunu çox yaxşı başa düşürəm',
        tr: 'I understand it very well'
      },
      {
        id: 172,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, məktəbə böyük məmnuniyyətlə gedir',
        tr: 'She goes to school with great pleasure'
      },
      {
        id: 173,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi really feil ...',
        sntc: 'Bu həqiqətən məni maraqlandırır',
        tr: 'It really interests me'
      },
      {
        id: 174,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi don’t share ...',
        sntc: 'Biz sənin nöqteyi-nəzərinizə şərik olmuruq',
        tr: "We don't share your point of view"
      },
      {
        id: 175,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 176,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'O bu ideyanı xoşlamır',
        tr: "She doesn't like this idea"
      },
      {
        id: 177,
        descr: 'Present Simple Question',
        expl: 'Do Şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Biz İngilis dilində səhv etmədən danışırıq?',
        tr: 'Do we speak English without mistakes?'
      },
      {
        id: 178,
        descr: 'Present Simple Question',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu sənin dostlarının xoşuna gəlir?',
        tr: 'Do your friends like it?'
      },
      {
        id: 179,
        descr: 'Present Simple Question',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, bunu almaq istəyir?',
        tr: 'Does she want to buy it?'
      },
      {
        id: 180,
        descr: 'Present Simple Question',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu sənin dostunun xoşuna gəlir?',
        tr: 'Does your friend like it?'
      }
    ],
    [{
        id: 181,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi like ...',
        sntc: 'Bu üsul xoşuma gəlir',
        tr: 'I like this method'
      },
      {
        id: 182,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Mən işə gedirəm',
        tr: 'I go to work'
      },
      {
        id: 183,
        descr: 'Present Simple',
        expl: 'Şəxs\u00A0əvəzliyi feil+es ...',
        sntc: 'O, işə gedir',
        tr: 'He goes to work'
      },
      {
        id: 184,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi don’t feil ...',
        sntc: 'Mən orada təhsil almaq istəmirəm',
        tr: "I don't want to study there"
      },
      {
        id: 185,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ...',
        sntc: 'Bu faydalı görünmür',
        tr: "It doesn't seem useful"
      },
      {
        id: 186,
        descr: 'Present Simple Negative form',
        expl: 'Şəxs\u00A0əvəzliyi doesn’t feil ... ',
        sntc: 'Bu məni ruhlandırmır',
        tr: "It doesn't inspire me"
      },
      {
        id: 187,
        descr: 'Present Simple Question',
        expl: 'Do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən məni dəstəkləyirsən?',
        tr: 'Do you support me?'
      },
      {
        id: 188,
        descr: 'Present Simple Question',
        expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... feil ... ?',
        sntc: 'Bu sənin dostlarınin xoşuna gəlir?',
        tr: 'Do your friends like it?'
      },
      {
        id: 189,
        descr: 'Present Simple Question',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, səninlə razıdır?',
        tr: 'Does he agree with you?'
      },
      {
        id: 190,
        descr: 'Present Simple Question',
        expl: 'Does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, bu şeyə nifrət edir?',
        tr: 'Does he hate this thing?'
      }
    ],
    [{
        id: 191,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
        expl: 'Şəxs\u00A0əvəzliyi like ...',
        sntc: 'Mən bunu xoşlayıram',
        tr: 'I like it'
      },
      {
        id: 192,
        descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
        expl: 'Şəxs\u00A0əvəzliyi like+s ...',
        sntc: 'O, bunu bəyənir',
        tr: 'She likes it'
      },
      {
        id: 193,
        descr: 'Mən istərdim konstruksiyası',
        expl: 'Şəxs\u00A0əvəzliyi would like ...',
        sntc: 'Mən bunu istərdim',
        tr: 'I would like it'
      },
      {
        id: 194,
        descr: 'Mən istərdim konstruksiyası',
        expl: 'Şəxs\u00A0əvəzliyi would like ...',
        sntc: 'O, bunu istəyərdi,',
        tr: 'He would like it'
      },
      {
        id: 195,
        descr: 'Mən etmək istərdim konstruksiyası',
        expl: 'Şəxs\u00A0əvəzliyi would like to feil ...',
        sntc: 'Mən hər şeyə görə sənə təşəkkür etmək istərdim',
        tr: 'I would like to thank you for everything'
      },
      {
        id: 196,
        descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want ...',
        sntc: 'Onlar bunu istəyirlər',
        tr: 'They want it'
      },
      {
        id: 197,
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want to ...',
        sntc: 'Mən bunu etmək istəyirəm ',
        tr: 'I want to do it'
      },
      {
        id: 198,
        descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + feil’ istifadə edin',
        expl: 'Şəxs\u00A0əvəzliyi want to feil ...',
        sntc: 'Mən İngilis dilini çox yaxşı bilmək istəyirəm',
        tr: 'I want to know English very well'
      },
      {
        id: 199,
        descr: 'Ehtiyacı bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need ...',
        sntc: 'Mənim buna ehtiyacım var',
        tr: 'I need it'
      },
      {
        id: 200,
        descr: 'Bir şeyi etmək ehtiyacını bildirmək üçün:',
        expl: 'Şəxs\u00A0əvəzliyi need to ...',
        sntc: 'Mənə bunu bilmək lazımdır',
        tr: 'I need to know it'
      }
    ],
    [{
        id: 201,
        descr: 'Special Quetions',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən niyə İngilis dilini öyrənirsən?',
        tr: 'Why do you learn English?'
      },
      {
        id: 202,
        descr: 'Special Quetions',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Sən bu barədə nə düşünürsən?',
        tr: 'What do you think about it?'
      },
      {
        id: 203,
        descr: 'Special Quetions. Who (kimi? kimə?)',
        expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən kimi tanıyırsan?',
        tr: 'Who do you know?'
      },
      {
        id: 204,
        descr: 'Who (kimi? kimə?)',
        expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'O, kimə təşəkkür etmək istəyir',
        tr: 'Who does she want to thank'
      },
      {
        id: 205,
        descr: 'Special Quetions. Who (kim?)',
        expl: 'Sual\u00A0söz feil ... ?',
        sntc: 'Bunu kim bilir?',
        tr: 'Who knows it?'
      },
      {
        id: 206,
        descr: 'Special Quetions. Who (kim?)',
        expl: 'Sual\u00A0söz feil ... ?',
        sntc: 'Bunu kim görür?',
        tr: 'Who sees it?'
      },
      {
        id: 207,
        descr: 'Special Quetions',
        expl: 'Sual\u00A0söz ... do şəxs\u00A0əvəzliyi feil ... ?',
        sntc: 'Evdə hansı İngilis kitabların var?',
        tr: 'What English books do you have at home?'
      },
      {
        id: 208,
        descr: 'Special Quetions',
        expl: 'What kind of ... do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən nə cür musiqi bəyənirsən?',
        tr: 'What kind of music do you like?'
      },
      {
        id: 209,
        descr: 'Sayılmayan isimlərlə',
        expl: 'How much ... do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sənin nə qədər boş vaxtın var?',
        tr: 'How much free time do you have?'
      },
      {
        id: 210,
        descr: 'Sayılan isimlərlə',
        expl: 'How many ... do şəxs\u00A0əvəzliyi feil?',
        sntc: 'Sən neçə İngilis sözü bilirsən?',
        tr: 'How many English words do you know?'
      }
    ],
    [{
        id: 211,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. ‘Very’ sözü ilə işlədilən ifadələr adətən cümlənin sonunda yer tuturlar',
        expl: '... very well',
        sntc: 'Mən bunu çox yaxşı bilirəm',
        tr: 'I know it very well'
      },
      {
        id: 212,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. ‘Very’ sözü ilə işlədilən ifadələr adətən cümlənin sonunda yer tuturlar',
        expl: '... very well',
        sntc: 'Mən İngilis dilində çox yaxşı danışmaq istəyirəm',
        tr: 'I want to speak English very well'
      },
      {
        id: 213,
        descr: 'İngilis dilində bəzi söz və ifadəler cümlədə müyyən yer tuturlar. ‘Very’ sözü ilə işlədilən ifadələr adətən cümlənin sonunda yer tuturlar',
        expl: '... very hard',
        sntc: 'Mən çox çalışıram',
        tr: 'I work very hard'
      },
      {
        id: 214,
        descr: 'Always/often/usually adətən əvəzlikdən sonra yer tuturlar',
        expl: 'Şəxs\u00A0əvəzliyi often feil ...',
        sntc: 'O, bu barədə məndən tez-tez soruşur',
        tr: 'He often asks me about it'
      },
      {
        id: 215,
        descr: 'Always/often/usually adətən əvəzlikdən sonra yer tuturlar. İstisna hal:',
        expl: 'How often do şəxs\u00A0əvəzliyi feil ...',
        sntc: 'Sən nə qədər kinoya gedirsən?',
        tr: 'How often do you go to the cinema?'
      },
      {
        id: 216,
        descr: 'Always/often/usually adətən əvəzlikdən sonra yer tuturlar',
        expl: '... şəxs\u00A0əvəzliyi usually feil ... ?',
        sntc: 'O, adətən evə nə vaxt gəlir?',
        tr: 'What time does he usually come home?'
      },
      {
        id: 217,
        descr: '‘Also’ adətən əvəzlikdən sonra yer tutur, ‘too’ isə cümlənin sonunda',
        expl: 'Şəxs\u00A0əvəzliyi also feil ...',
        sntc: 'Bu mənim də xoşuma gəlir',
        tr: 'I also like it'
      },
      {
        id: 218,
        descr: '‘Also’ adətən əvəzlikdən sonra yer tutur, ‘too’ isə cümlənin sonunda',
        expl: '..., too',
        sntc: 'Mən də bunu xoşlayıram',
        tr: 'I like it, too'
      },
      {
        id: 219,
        descr: 'Say / tell – demək. ‘say’ - ümumiyyətlə nesə demək , ‘tell’ - kiməsə nesə demək',
        expl: 'Şəxs\u00A0əvəzliyi feil to tell şəxs\u00A0əvəzliyi ...',
        sntc: 'Sənə bu şeyi demək istəyirəm',
        tr: 'I want to tell you this thing'
      },
      {
        id: 220,
        descr: 'Say / tell – demək. ‘say’ - nesə demək , ‘tell’ - kiməsə nesə demək',
        expl: 'Şəxs\u00A0əvəzliyi feil to say it',
        sntc: 'Mən bunu demək istəyirəm',
        tr: 'I want to say it'
      }
    ],
    [{
        id: 221,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi am ... qısa\u00A0forma => I’m ...',
        sntc: 'Mən evdəyəm',
        tr: 'I at home'
      },
      {
        id: 222,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi am ... qısa\u00A0forma => I’m ...',
        sntc: 'Mən xoşbəxtəm',
        tr: 'I am happy'
      },
      {
        id: 223,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => We’re ...',
        sntc: 'Biz evdəyik',
        tr: 'We are at home'
      },
      {
        id: 224,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => You’re ...',
        sntc: 'Sən məktəbdəsən',
        tr: 'You are at school'
      },
      {
        id: 225,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ forma istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => They’re ...',
        sntc: 'Onlar evdədirlər',
        tr: 'They are at home'
      },
      {
        id: 226,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => They’re ...',
        sntc: 'Onlar zəngindirlər',
        tr: 'They are rich'
      },
      {
        id: 227,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => She’s ...',
        sntc: 'O, yaxşı insandır',
        tr: 'She is a good person'
      },
      {
        id: 228,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => She’s ...',
        sntc: 'O, evdədir',
        tr: 'She is at home'
      },
      {
        id: 229,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => He’s ...',
        sntc: 'O, məktəbdədir',
        tr: 'He is at school'
      },
      {
        id: 230,
        descr: 'İngilis dilində feil olmayan cümlələrdə ‘to be’ feil forması istifadə olunur',
        expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => It’s ...',
        sntc: 'O, evdədir',
        tr: 'It is at home'
      }
    ],
    [{
        id: 231,
        descr: 'Very sözü işlədiləndə a(an) artikl ondan daha əvvəl yerləşir',
        expl: 'It is a very sifət isim',
        sntc: 'Bu çox maraqlı fikirdir',
        tr: 'It is a very interesting idea'
      },
      {
        id: 232,
        descr: 'Very sözü işlədiləndə a(an) artikl ondan daha əvvəl yerləşir',
        expl: 'It is a very sifət isim',
        sntc: 'Bu çox yaxşı nəticədir',
        tr: 'It is a very good result'
      },
      {
        id: 233,
        descr: '‘The’ artikl üstünlük dərəcəsini ifadə etmək üçün istifadə olunur. Məsələn:',
        expl: 'the best – ən yaxşı',
        sntc: 'Bu ən yaxşı dərsdir',
        tr: 'It is the best lesson'
      },
      {
        id: 234,
        descr: '‘The’ artikl üstünlük dərəcəsini ifadə etmək üçün istifadə olunur. Məsələn:',
        expl: 'the best – ən yaxşı',
        sntc: 'Bu ən yaxşı nümunədir',
        tr: 'It is the best example'
      },
      {
        id: 235,
        descr: 'Hava haqqında demək üçün ‘to be’ feil forması istifadə olunur. Məsələn:',
        expl: 'It is cold – Soyuqdur',
        sntc: 'İstidir',
        tr: 'It is warm'
      },
      {
        id: 236,
        descr: 'Hava haqqında demək üçün ‘to be’ feil forması istifadə olunur. Məsələn:',
        expl: 'It is sunny – Günəşlidir',
        sntc: 'Qaranlıqdır',
        tr: 'It is dark'
      },
      {
        id: 237,
        descr: 'Hava haqqında demək üçün ‘to be’ feil forması istifadə olunur. Məsələn:',
        expl: 'It is a rainy day – Yağışlı gündür',
        sntc: 'Soyuq gündür',
        tr: 'It is a cold day'
      },
      {
        id: 238,
        descr: 'Hava haqqında demək üçün ‘to be’ feil forması istifadə olunur. Məsələn:',
        expl: 'It is too cold – Çox soyudur',
        sntc: 'Çox istidir',
        tr: 'It is too hot'
      },
      {
        id: 239,
        descr: 'It is + adjective(sifət)',
        expl: 'It is important - Bu vacibdir',
        sntc: 'Bu aşkardır',
        tr: 'It is obvious'
      },
      {
        id: 240,
        descr: 'It is + adjective(sifət)',
        expl: 'It is impossible – Bu mümkün deyil ',
        sntc: 'Bu mümkündür',
        tr: 'It is impossible'
      }
    ],
    [{
        id: 241,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: 'İsim\u00A0yoxdur: ... so sifət',
        sntc: 'Bu o qədər maraqlıdır ki',
        tr: 'It’s so interesting'
      },
      {
        id: 242,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: 'İsim\u00A0var: ... such an sifət isim',
        sntc: 'Bu elə maraqlı hekayədir ki',
        tr: 'It’s such an interesting story'
      },
      {
        id: 243,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... so sifət',
        sntc: 'Bu o qədər vacibdir ki',
        tr: 'It’s so important '
      },
      {
        id: 244,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such an sifət isim',
        sntc: 'Bu elə vacib görüşdür ki',
        tr: 'It’s such an important meeting'
      },
      {
        id: 245,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... so sifət',
        sntc: 'Bu o qədər populyardı ki',
        tr: 'It’s so popular'
      },
      {
        id: 246,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such a sifət isim',
        sntc: 'Bu elə populyar mahnıdır ki',
        tr: 'It’s such a popular song'
      },
      {
        id: 247,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such a sifət isim',
        sntc: 'O, elə gözəl qızdır ki',
        tr: 'She’s such a beautiful girl'
      },
      {
        id: 248,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such a sifət isim',
        sntc: 'O, elə ağıllı oğlandır ki',
        tr: 'He’s such a clever boy'
      },
      {
        id: 249,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such a sifət isim',
        sntc: 'O, elə kasıb oğlandır ki',
        tr: 'He’s such a poor boy'
      },
      {
        id: 250,
        descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
        expl: '... such a sifət isim',
        sntc: 'O, elə xeyirxah qadındır ki',
        tr: 'She’s such a kind woman'
      }
    ],
    [{
        id: 251,
        descr: '‘To be’ feil forması',
        expl: 'My friend = he is',
        sntc: 'Mənim dostum evdədir',
        tr: 'My friend is at home'
      },
      {
        id: 252,
        descr: '‘To be’ feil forması',
        expl: 'These lessons = they are ',
        sntc: 'Bu dərslər çox faydalıdır',
        tr: 'These lessons are very useful'
      },
      {
        id: 253,
        descr: '‘To be’ feil forması',
        expl: 'My boss = he is',
        sntc: 'Mənim müdirim indi çox məşğuldur',
        tr: 'My boss is very busy now'
      },
      {
        id: 254,
        descr: 'Nəsə haqqında ilk dəfə danışdıqda ‘a(an)’ artikl işlədilir. İlk məlumatdan sonra, həmin isim haqqında olan digər cümlələrdə ‘the’ artikl işlədilir',
        expl: 'The computer = it is',
        sntc: 'Mənim kompüterim var. Kompüter yenidir',
        tr: 'I have a computer. The computer is new'
      },
      {
        id: 255,
        descr: 'Nəsə haqqında ilk dəfə danışdıqda ‘a(an)’ artikl işlədilir. İlk məlumatdan sonra, həmin isim haqqında olan digər cümlələrdə ‘the’ artikl işlədilir',
        expl: 'The car = it is',
        sntc: 'Mənim maşınım var. Maşın çox yaxşıdır',
        tr: 'I have a car. The car is very good'
      },
      {
        id: 256,
        descr: 'Ümumiyyətlə isim məlum olan halda da ‘the’ artikl işlədilir',
        expl: 'These men = they are',
        sntc: 'Bu kişilər menecerdilər',
        tr: 'These men are managers'
      },
      {
        id: 257,
        descr: '‘To be’ feil forması',
        expl: 'Love = it is',
        sntc: 'Sevgi çox gözəl hissdir',
        tr: 'Love is a wonderful feeling'
      },
      {
        id: 258,
        descr: '‘To be’ feil forması',
        expl: 'Time = it is',
        sntc: 'Vaxt puldur',
        tr: 'Time is money'
      },
      {
        id: 259,
        descr: 'Mənsubiyyət haqqında demək üçün:',
        expl: 'I’m American - Mən amerikanlıyam',
        sntc: 'Mən azərbaycanlıyam',
        tr: 'I am Azerbaijani'
      },
      {
        id: 260,
        descr: 'Yaş haqqında demək üçün:',
        expl: 'He’s twenty - Onun iyirmi yaşı var',
        sntc: 'Mənim otuz yaşım var',
        tr: 'I am thirty'
      }
    ],
    [{
        id: 261,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'I am not = I’m not',
        sntc: 'Mən evdə deyiləm',
        tr: 'I am not at home'
      },
      {
        id: 262,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'We are not = We aren’t',
        sntc: 'Biz hirsli deyilik',
        tr: 'We are not angry'
      },
      {
        id: 263,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'You are not = You aren’t',
        sntc: 'Sən haqlı deyilsən',
        tr: 'You are not right'
      },
      {
        id: 264,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'You are not = You aren’t',
        sntc: 'Sən birinci yerdə deyilsən',
        tr: 'You are not in the first place'
      },
      {
        id: 265,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'They are not = They aren’t',
        sntc: 'Onlar evdə deyil',
        tr: 'They are not at home'
      },
      {
        id: 266,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'They are not = They aren’t',
        sntc: 'Onlar bir yerdə deyillər',
        tr: 'They are not together'
      },
      {
        id: 267,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'He is not = He’s not',
        sntc: 'O, qoca deyil',
        tr: 'He is not old'
      },
      {
        id: 268,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'It is not = It’s not',
        sntc: 'Eyni deyil',
        tr: 'It is not the same'
      },
      {
        id: 269,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'He is not = He’s not',
        sntc: 'O, şəhərdə deyil,',
        tr: 'She is not in the city'
      },
      {
        id: 270,
        descr: '‘To be’ feil fomrası (negative form)',
        expl: 'It is not = It’s not',
        sntc: 'İsti deyil',
        tr: 'It is not warm'
      }
    ],
    [{
        id: 271,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Am I ... ?',
        sntc: 'Mən haqlıyam?',
        tr: 'Am I right?'
      },
      {
        id: 272,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Am I ... ?',
        sntc: 'Mən şanslıyam?',
        tr: 'Am I lucky?'
      },
      {
        id: 273,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Are we ... ?',
        sntc: 'Biz birinci yerdəyik?',
        tr: 'Are we in the first place?'
      },
      {
        id: 274,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Are you ... ?',
        sntc: 'Siz bir yerdəsiz?',
        tr: 'Are you together?'
      },
      {
        id: 275,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Are they ... ?',
        sntc: 'Onlar uzaqdadı?',
        tr: 'Are they far?'
      },
      {
        id: 276,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Are we ... ?',
        sntc: 'Biz ən yaxşı tələbələrik?',
        tr: 'Are we the best students?'
      },
      {
        id: 277,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Is he ... ?',
        sntc: 'O, sənin dostundur?',
        tr: 'Is he your friend?'
      },
      {
        id: 278,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Is it ... ?',
        sntc: 'Bu xüsusi təklifdir?',
        tr: 'Is it a special offer?'
      },
      {
        id: 279,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Is he ... ?',
        sntc: 'O, uğurlu iş adamıdır?',
        tr: 'Is he a successful businessman?'
      },
      {
        id: 280,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'Is she ... ?',
        sntc: 'O, öz otağındadır?',
        tr: 'Is she in her room?'
      }
    ],
    [{
        id: 281,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'video = it => Is ... video',
        sntc: 'Onun videosu məzəlidir?',
        tr: 'Is his video funny?'
      },
      {
        id: 282,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'information = it => Is ... information',
        sntc: 'Bu məlumat həqiqətən faydalıdır?',
        tr: 'Is this information really useful?'
      },
      {
        id: 283,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'computer = it => Is ... computer',
        sntc: 'Onun kompüteri yenidir?',
        tr: 'Is his computer new?'
      },
      {
        id: 284,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'knowledge = it => Is ... knowledge',
        sntc: 'Bu bilik kifayət edir?',
        tr: 'Is this knowledge enough?'
      },
      {
        id: 285,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'story = it => Is ... story',
        sntc: 'Bu hekayə o qədər məzəlidir?',
        tr: 'Is this story so funny?'
      },
      {
        id: 286,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'news = it => Is ... news',
        sntc: 'Bu xəbər maraqlıdır?',
        tr: 'Is the news interesting?'
      },
      {
        id: 287,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'parents = they => Are ... parents',
        sntc: 'Onun valideynləri xaricdədir?',
        tr: 'Are his parents abroad?'
      },
      {
        id: 288,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'business = it => Is ... business',
        sntc: 'Bu biznes rentabellidir?',
        tr: 'Is this business profitable?'
      },
      {
        id: 289,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'university = it => Is ... university',
        sntc: 'Universitet məşhurdur?',
        tr: 'Is the university famous?'
      },
      {
        id: 290,
        descr: '‘To be’ feil forması köməyi ilə sual',
        expl: 'article = it => Is ... article',
        sntc: 'Məqalə siyasət haqqındadır?',
        tr: 'Is the article about politics?'
      }
    ],
    [{
        id: 291,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Haradasan?',
        tr: 'Where are you?'
      },
      {
        id: 292,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu qutuda nə var?',
        tr: 'What is in this box?'
      },
      {
        id: 293,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Çantanızda nə var?',
        tr: 'What is in your bag?'
      },
      {
        id: 294,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'O, niyə qəzəblidir?',
        tr: 'Why is he angry?'
      },
      {
        id: 295,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ',
        sntc: 'Necəsən?',
        tr: 'How are you?'
      },
      {
        id: 296,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'When to\u00A0be\u00A0feil ... ?',
        sntc: 'Nə vaxt azadsan?',
        tr: 'When are you free?'
      },
      {
        id: 297,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'İşdə kim var?',
        tr: 'Who is at work?'
      },
      {
        id: 298,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'Niyə bunun əleyhinəsən?',
        tr: 'Why are you against it?'
      },
      {
        id: 299,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'How ... to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu nə qədər uzaqdır?',
        tr: 'How far is it?'
      },
      {
        id: 300,
        descr: '‘To be’ feil forması köməyi ilə xüsusi sual',
        expl: 'How old to\u00A0be\u00A0feil şəxs\u00A0əvəzliyi',
        sntc: 'Neçə yaşın var?',
        tr: 'How old are you?'
      }
    ],
    [{
        id: 301,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Onun adı nədir?',
        tr: 'What is her name?'
      },
      {
        id: 302,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Dostunun adı nədir?',
        tr: 'What is your friend’s name?'
      },
      {
        id: 303,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Qardaşının adı nədir?',
        tr: "What’s your brother's name?"
      },
      {
        id: 304,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
        sntc: 'Ən yaxşı dostunun adı nədir',
        tr: 'What’s your best friend’s name'
      },
      {
        id: 305,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ?',
        sntc: 'Dərs nəcədir?',
        tr: 'How is the lesson?'
      },
      {
        id: 306,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'How to\u00A0be\u00A0feil ... ?',
        sntc: 'Kino necədir?',
        tr: 'How is the movie?'
      },
      {
        id: 307,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Sənin otağın haradadır?',
        tr: 'Where is your room?'
      },
      {
        id: 308,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Where to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu yer haradadır?',
        tr: 'Where is this place'
      },
      {
        id: 309,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Who to\u00A0be\u00A0feil ... ?',
        sntc: 'O qadın kimdir?',
        tr: 'Who is that woman?'
      },
      {
        id: 310,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Who to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu adamlar kimlərdir?',
        tr: 'Who are these people?'
      }
    ],
    [{
        id: 311,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'Niyə bu qayda o qədər vacibdir?',
        tr: 'Why is this rule so important?'
      },
      {
        id: 312,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'Why to\u00A0be\u00A0feil ... ?',
        sntc: 'Sən niyə burdasan?',
        tr: 'Why are you here?'
      },
      {
        id: 313,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'What to\u00A0be\u00A0feil ... ?',
        sntc: 'Onun işi nədir?',
        tr: 'What is her job?'
      },
      {
        id: 314,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'How interesting to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu jurnal nə dərəcədə maraqlıdır?',
        tr: 'How interesting is this magazine?'
      },
      {
        id: 315,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'How useful to\u00A0be\u00A0feil ... ?',
        sntc: 'Bu dərs nə dərəcədə faydalıdır?',
        tr: 'How useful is the lesson?'
      },
      {
        id: 316,
        descr: 'To be feil forması köməyi ilə xüsusi sual',
        expl: 'How much to\u00A0be\u00A0feil ... pair of ... ?',
        sntc: 'Bu cüt şalvar neçəyədir? ',
        tr: 'How much is this pair of trousers?'
      },
      {
        id: 317,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0feil full of ...',
        sntc: 'Biz nikbinliklə doluyuq',
        tr: 'We are full of optimism'
      },
      {
        id: 318,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0feil full of ...',
        sntc: 'Mən güclə doluyam,',
        tr: 'I am full of power'
      },
      {
        id: 319,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0feil on holiday',
        sntc: 'O, məzuniyyətdədir',
        tr: 'He is on holiday'
      },
      {
        id: 320,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0feil on holiday',
        sntc: 'Biz məzuniyyətdəyik',
        tr: 'We are on holiday'
      }
    ],
    [{
        id: 321,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'O, hamamda deyil',
        tr: 'He isn’t in the bathroom'
      },
      {
        id: 322,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'O, mətbəxdə deyil',
        tr: 'She isn’t in the kitchen'
      },
      {
        id: 323,
        descr: 'Sabit ifadələr',
        expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Biz heç yorulmamışıq',
        tr: 'We aren’t tired at all'
      },
      {
        id: 324,
        descr: 'Sabit ifadələr',
        expl: 'artikl ... to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Kitab heç darıxdırıcı deyil',
        tr: 'The book isn’t boring at all'
      },
      {
        id: 325,
        descr: 'İngilis dilində önlük',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma satisfied with ...',
        sntc: 'Bu nəticə məni qane edir',
        tr: "I'm satisfied with this result"
      },
      {
        id: 326,
        descr: 'İngilis dilində önlük',
        expl: '... to\u00A0be\u00A0qısa\u00A0forma in the ...',
        sntc: 'Bu, qutuda deyil',
        tr: 'It isn’t in the box'
      },
      {
        id: 327,
        descr: 'İngilis dilində önlük',
        expl: 'to\u00A0be\u00A0feil əvəzlik afraid of ...',
        sntc: 'Onlar bundan qorxurlar?',
        tr: 'Are they afraid of it?'
      },
      {
        id: 328,
        descr: 'İngilis dilində önlük',
        expl: 'to\u00A0be\u00A0feil əvəzlik in the ...',
        sntc: 'O, axırıncı yerdədir?',
        tr: 'Is he in the last place?'
      },
      {
        id: 329,
        descr: 'Money sözü İngilis dilində yalnız tək halında olur',
        expl: 'money = it => to\u00A0be\u00A0feil ... money ...',
        sntc: 'Bu pul kifayət edir?',
        tr: 'Is this money enough?'
      },
      {
        id: 330,
        descr: 'News sözü İngilis dilində yalnız tək halında olur',
        expl: 'news = it => is ... news ...',
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
        expl: 'Əvəzlik to\u00A0be\u00A0qısa\u00A0forma ...',
        sntc: 'Onlar bu qərarın əleyhinə deyillər',
        tr: "They aren't against this decision"
      },
      {
        id: 333,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil əvəzlik ... ?',
        sntc: 'Onlar bu qərara qarşıdırlarmı?',
        tr: 'Are they against this decision?'
      },
      {
        id: 334,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ...',
        sntc: 'Bu eynidir',
        tr: "It's the same"
      },
      {
        id: 335,
        descr: 'To be feil köməyi ilə inkar',
        expl: 'Əvəzlik to\u00A0be\u00A0qısa\u00A0forma ...',
        sntc: 'Bu eyni deyil',
        tr: "It isn't the same"
      },
      {
        id: 336,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil əvəzlik ...',
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
        expl: 'He to\u00A0be\u00A0qısa\u00A0forma ... feil ...',
        sntc: 'O, onu görməkdən şad deyil',
        tr: "He isn't glad to see her"
      },
      {
        id: 339,
        descr: 'To be feil köməyi ilə sual',
        expl: 'to\u00A0be\u00A0feil he ... feil ...',
        sntc: 'O, onu görməkdən şaddır?',
        tr: 'Is he glad to see her?'
      },
      {
        id: 340,
        descr: 'To be feil köməyi ilə təsdiq',
        expl: 'door = it => ... door is ...',
        sntc: 'Qapı açıqdır',
        tr: 'The door is open'
      }
    ],
    [{
        id: 341,
        descr: 'İngilis dilində önlük',
        expl: '... on time',
        sntc: 'Biz həmişə vaxtında bitiririk',
        tr: 'We always finish on time'
      },
      {
        id: 342,
        descr: 'İngilis dilində önlük ',
        expl: '... on time',
        sntc: 'O, adətən vaxtında gəlir',
        tr: 'He usually comes on time'
      },
      {
        id: 343,
        descr: 'İngilis dilində önlük',
        expl: '... laugh at ...',
        sntc: 'O, tez-tez buna gülür',
        tr: 'He often laugh at it'
      },
      {
        id: 344,
        descr: 'İngilis dilində sabit ifadələr',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma a waste of ...',
        sntc: 'Bu vaxt itkisidir',
        tr: 'It’s a waste of time'
      },
      {
        id: 345,
        descr: 'İngilis dilində önlük',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... and əvəzlik ... in summer',
        sntc: 'Dostumla mən yayda orada yaşayırıq',
        tr: 'My friend and I live there in summer'
      },
      {
        id: 346,
        descr: 'İngilis dilində önlük',
        expl: '... in winter',
        sntc: 'Bu qışda baş verir',
        tr: 'It happens in winter'
      },
      {
        id: 347,
        descr: 'İngilis dilində önlük',
        expl: 'Şəxs\u00A0əvəzliyi feil ... adapt to ...',
        sntc: 'Mənə bu şərtlərə uyğunlaşmaq lazımdır',
        tr: 'I need to adapt to these conditions'
      },
      {
        id: 348,
        descr: 'İngilis dilində sabit ifadələr',
        expl: 'Şəxs\u00A0əvəzliyi ... as soon as possible',
        sntc: 'Mənə bunu mümkün qədər tez bitirmək lazımdır',
        tr: 'I need to finish it as soon as possible'
      },
      {
        id: 349,
        descr: 'İngilis dilində önlük',
        expl: '... prepare for ...',
        sntc: 'İmtahana hazırlaşmağa ehtiyacım var',
        tr: 'I need to prepare for the exam'
      },
      {
        id: 350,
        descr: "Bir şeyi etmək heqiqətən xoşlayırıqsa like feildən sonra gələn feilə 'ing' əlavə edirik",
        expl: 'I like to do it => I like doing it',
        sntc: 'Mən İngilis dilini öyrənməyi sevirəm',
        tr: 'I like learning English'
      }
    ],
    [{
        id: 351,
        descr: 'Ingilis dilində önlük',
        expl: 'Do ... by next week',
        sntc: 'Sənə bunu gələn həftəyə qədər bitirmək lazımdır?',
        tr: 'Do you need to finish it by next week?'
      },
      {
        id: 352,
        descr: 'Sabit söz birləşməsi',
        expl: '... at all',
        sntc: 'Bu onları stimullaşdırmır',
        tr: 'It doesn’t stimulate them at all'
      },
      {
        id: 353,
        descr: 'Ingilis dilində önlük',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... a speacialist in ...',
        sntc: 'Mən bu sahədə mütəxəssis deyiləm',
        tr: 'I’m not a specialist in this area'
      },
      {
        id: 354,
        descr: 'Sabit söz birləşməsi',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma ... at all',
        sntc: 'Mən heç dəli deyiləm',
        tr: 'I’m not crazy at all'
      },
      {
        id: 355,
        descr: 'Sabit önlük',
        expl: '... to\u00A0be\u00A0qısa\u00A0forma convenient for ...',
        sntc: 'Bu mənim üçün münasib deyil',
        tr: 'It isn’t convenient for me'
      },
      {
        id: 356,
        descr: 'Sabit önlük',
        expl: '... on the ...',
        sntc: 'Açarlar stolun üstündədir',
        tr: 'The keys on the table'
      },
      {
        id: 357,
        descr: 'Sabit önlük',
        expl: '... to\u00A0be\u00A0qısa\u00A0forma on yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Qələm masamın üstündə deyil',
        tr: 'The pen isn’t on my desk'
      },
      {
        id: 358,
        descr: 'Sabit önlük',
        expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... communicate with ...',
        sntc: 'Dostum onlarla ünsiyyət qurmur',
        tr: 'My friend doesn’t communicate with them'
      },
      {
        id: 359,
        descr: 'İngilis dilində ifadəli feill',
        expl: 'Əvəzlik ... write ... down',
        sntc: 'Mənə bunu yazmaq lazımdır ',
        tr: 'I need to write it down'
      },
      {
        id: 360,
        descr: 'Müyyən artikl',
        expl: 'Əvəzlik ... all the data',
        sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
        tr: 'I don’t need to analyze all the data'
      }
    ],
    [{
        id: 361,
        descr: 'Sabit söz birləşməsi',
        expl: '... compete with ...',
        sntc: 'O, onlarla rəqabət aparır?',
        tr: 'Does he compete with them?'
      },
      {
        id: 362,
        descr: 'Sabit söz birləşməsi',
        expl: '... fond of ...',
        sntc: 'İngilis dilini çox sevirəm',
        tr: "I'm fond of English"
      },
      {
        id: 363,
        descr: "Əgər enjoy dan sonra feil gələrsə ona 'ing' əlavə olunur",
        expl: 'Əvəzlik enjoy feil+ing ...',
        sntc: 'Musiqi dinləməkdən zövq alıram',
        tr: 'I enjoy listening to music'
      },
      {
        id: 364,
        descr: 'Sabit söz birləşməsi',
        expl: 'Əvəzlik ... a lot',
        sntc: 'Bu dərsləri çox bəyənirəm',
        tr: 'I like these lessons a lot'
      },
      {
        id: 365,
        descr: 'Sadə feil köməyi ilə cümlə',
        expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... behave ...',
        sntc: 'Onun qardaşı qəribə davranır?',
        tr: 'Does his brother behave strangely?'
      },
      {
        id: 366,
        descr: 'elder - daha yaşlı',
        expl: 'to\u00A0be\u00A0feil ... yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi elder ...',
        sntc: 'Bu oğlan onun böyük qardaşıdır?',
        tr: 'Is this boy his elder brother?'
      },
      {
        id: 367,
        descr: 'younger - yaşa görə kiçik',
        expl: 'to\u00A0be\u00A0feil ... yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi younger ...',
        sntc: 'Bu qız onun kiçik bacısıdır?',
        tr: 'Is this girl her younger sister?'
      },
      {
        id: 368,
        descr: 'Sabit söz birləşməsi',
        expl: '... the meaning of ...',
        sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
        tr: 'Do all the students know the meaning of this expression?'
      },
      {
        id: 369,
        descr: 'Sabit söz birləşməsi',
        expl: 'Sual\u00A0söz\u00A0qısa\u00A0forma the meaning of ...',
        sntc: 'Bu sözün mənası nədir?',
        tr: "What's the meaning of this word?"
      },
      {
        id: 370,
        descr: 'Xüsusi sual',
        expl: 'What ... mean?',
        sntc: 'Nə demək istəyirsən?',
        tr: 'What do you mean?'
      }
    ],
    [{
        id: 371,
        descr: 'Sabit söz birləşməsi',
        expl: '... each other',
        sntc: 'Siz bir-birinizi tanıyırsız',
        tr: 'You know each other'
      },
      {
        id: 372,
        descr: 'Sabit söz birləşməsi',
        expl: '... each other',
        sntc: 'Siz bir-birinizi tanıyırsız?',
        tr: 'Do you know each other?'
      },
      {
        id: 373,
        descr: 'Sabit önlük',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma interested in ...',
        sntc: 'Mən bununla maraqlanıram',
        tr: "I'm interested in it"
      },
      {
        id: 374,
        descr: 'İdiom',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma keen on ...',
        sntc: 'Mən musiqiyə həvəsliyəm',
        tr: "I'm keen on music"
      },
      {
        id: 375,
        descr: 'İdiom',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma keen on ...',
        sntc: 'Mən oxumağa həvəsliyəm',
        tr: "I'm keen on reading"
      },
      {
        id: 376,
        descr: 'Sadə feil köməyi ilə cümlə',
        expl: 'Əvəzlik ... together',
        sntc: 'Onlar bir yerdə yaşayırlar',
        tr: 'They live together'
      },
      {
        id: 377,
        descr: 'Sadə feil köməyi ilə cümlə',
        expl: 'Əvəzlik ... separately',
        sntc: 'Onlar ayrı yaşamır',
        tr: "They don't live separately"
      },
      {
        id: 378,
        descr: 'To be feil köməyi ilə cümlə',
        expl: '... to\u00A0be\u00A0feil convenient',
        sntc: 'Bu vaxt münasibdir',
        tr: 'This time is convenient'
      },
      {
        id: 379,
        descr: 'Sabit söz birləşməsi',
        expl: "Əvəzlik ... at ... o'clock in the evening",
        sntc: 'Adətən axşam saat 7-də evə gəlirəm',
        tr: "I usually come home at 7 o'clock in the evening"
      },
      {
        id: 380,
        descr: 'Sabit söz birləşməsi',
        expl: 'How ... prepare for iyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'İmtahanlarına adətən necə hazırlaşırsan?',
        tr: 'How do you usually prepare for your exams? '
      }
    ],
    [{
        id: 381,
        descr: 'Xüsusi sual',
        expl: 'Why ... right',
        sntc: 'Bu nə üçün düzgündür?',
        tr: 'Why is it right?'
      },
      {
        id: 382,
        descr: 'Xüsusi sual',
        expl: 'Why ... right',
        sntc: 'Nəyə görə bu, düzgün görünür?',
        tr: 'Why does it seem right?'
      },
      {
        id: 383,
        descr: 'Xüsusi sual',
        expl: 'How ... celebrate yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Adətən ad gününü necə qeyd edirsən?',
        tr: 'How do you usually celebrate your birthday?'
      },
      {
        id: 384,
        descr: 'Xüsusi sual',
        expl: 'What kind of ... prefer to ...',
        sntc: 'Nə cür videolara baxmağa üstünlük verirsən??',
        tr: 'What kind of videos do you prefer to watch?'
      },
      {
        id: 385,
        descr: 'I would like konstruksiyasının qısa forması əvəzliyə ‘d əlavə olmaqla formalaşır',
        expl: "I'd like ... please",
        sntc: 'Bir fincan çay istərdim, xahiş edirəm',
        tr: "I'd like a cup of tea, please"
      },
      {
        id: 386,
        descr: 'Xüsusi sual',
        expl: 'Sual\u00A0söz ... right',
        sntc: 'Nəyə görə bu, düzgün görünür?',
        tr: 'Why does it seem right?'
      },
      {
        id: 387,
        descr: 'Xüsusi sual',
        expl: 'Sual\u00A0söz ... əvəzlik',
        sntc: 'O, haradadır?',
        tr: 'Where is he?'
      },
      {
        id: 388,
        descr: 'Xüsusi sual',
        expl: 'Sual\u00A0söz ... live ?',
        sntc: 'O, harada yaşayır?',
        tr: 'Where does he live?'
      },
      {
        id: 389,
        descr: 'Sabit söz birləşməsi',
        expl: 'to\u00A0be\u00A0qısa\u00A0forma fond of ... thanks to ...',
        sntc: 'Mən böyük tərəqqim sayəsində bu dərsləri çox sevirəm',
        tr: 'I’m fond of these lessons thanks to my great progress'
      },
      {
        id: 390,
        descr: 'Sabit söz birləşməsi',
        expl: 'Əvəzlik enjoy ... thanks to ...',
        sntc: 'Dərslərin sadəliyi sayəsində onlardan zövq alıram',
        tr: 'I enjoy these lessons thanks to their simplicity'
      }
    ],
    [{
        id: 391,
        descr: '',
        expl: '',
        sntc: 'Yaxşı iş tapmağa çalışıram',
        tr: 'I try to find a good job'
      },
      {
        id: 392,
        descr: '',
        expl: '',
        sntc: 'İngilis dilini öyrənə bilirəm',
        tr: 'I can learn English'
      },
      {
        id: 393,
        descr: '',
        expl: '',
        sntc: 'Mən bunu etməliyəm',
        tr: 'I must do it'
      },
      {
        id: 394,
        descr: '',
        expl: '',
        sntc: 'Gərək bunu edim',
        tr: 'I should do it'
      },
      {
        id: 395,
        descr: '',
        expl: '',
        sntc: 'Mən bunu edə bilərəm',
        tr: 'I may do it'
      },
      {
        id: 396,
        descr: '',
        expl: '',
        sntc: 'Bu kitabı oxuya bilərəm',
        tr: 'I might read this book'
      },
      {
        id: 397,
        descr: '',
        expl: '',
        sntc: 'Başqa bir yerdə yaşamaq istərdim',
        tr: 'She’d like to live in another place'
      },
      {
        id: 398,
        descr: '',
        expl: '',
        sntc: 'Başqa kitablar oxumaq istəyirəm',
        tr: 'I want to read other books'
      },
      {
        id: 399,
        descr: '',
        expl: '',
        sntc: 'O, adətən ingilis dilində çox yavaş danışır',
        tr: 'She usually speaks English very slowly'
      },
      {
        id: 400,
        descr: '',
        expl: '',
        sntc: 'Bu problemdən danışmaq istərdim',
        tr: 'I’d like to talk about this problem'
      }
    ],
    [{ id: 401,
      sntc: 'Onun işi nədir?',
      tr: "What's his job?",
      ch: "What's his job?"
    },
    { id: 402,
      sntc: 'Yorğunsan?',
      tr: 'Are you tired?',
      ch: 'Are you tired?'
    },
    { id: 403,
      sntc: 'Çox asan bir dərsdir',
      tr: "It's a very easy lesson",
      ch: "It's a very easy lesson"
    },
    { id: 404,
      sntc: 'O özünü xoşbəxt hiss edir',
      tr: 'He feels happy',
      ch: 'He feels happy'
    },
    { id: 405,
      sntc: 'Bu misal xoşuma gəlir',
      tr: 'I like this example',
      ch: 'I like this example'
    },
    { id: 406,
      sntc: 'Bu nə dərəcədə vacibdir?',
      tr: 'How important is it?',
      ch: 'How important is it?'
    },
    { id: 407,
      sntc: 'Orada nə var?',
      tr: "What's there?",
      ch: "What's there?"
    },
    { id: 408,
      sntc: 'Bu layihəni gələn ilə qədər bitirməliyəm',
      tr: 'I need to finish this project by next year',
      ch: 'I need to finish this project by next year'
    },
    { id: 409,
      sntc: 'O, gənc bir adamdır',
      tr: "He's a young man",
      ch: "He's a young man"
    },
    { id: 410,
      sntc: 'Dostunun iyirmi iki yaşı var?',
      tr: 'Is your friend twenty-two?',
      ch: 'Is your friend twenty-two?'
    }],
    [{ id: 411,
      sntc: 'Onlar indi Azərbaycanda deyillər',
      tr: "They aren't in Azerbaijan now",
      ch: "They aren't in Azerbaijan now"
    },
    { id: 412,
      sntc: 'O, bəzən kompüter oyunları oynayır',
      tr: 'He sometimes plays computer games',
      ch: 'He sometimes plays computer games'
    },
    { id: 413,
      sntc: 'Çox istidir',
      tr: "It's too hot",
      ch: "It's too hot"
    },
    { id: 414,
      sntc: 'O, iş adamıdır',
      tr: "He's a businessman",
      ch: "He's a businessman"
    },
    { id: 415,
      sntc: 'Adınız nədir?',
      tr: "What's your name?",
      ch: "What's your name?"
    },
    { id: 416,
      sntc: 'Daha çox hansı videolara heyran qalırsan?',
      tr: 'What videos do you admire more?',
      ch: 'What videos do you admire more?'
    },
    { id: 417,
      sntc: 'Bu vacibdir',
      tr: "It's important",
      ch: "It's important"
    },
    { id: 418,
      sntc: 'Bu çox uzaqdır',
      tr: "It's so far",
      ch: "It's so far"
    },
    { id: 419,
      sntc: 'Nümunə çox informativdir',
      tr: 'The example is so informative',
      ch: 'The example is so informative'
    },
    { id: 420,
      sntc: 'Bu daha betər deyil',
      tr: "It isn't worse",
      ch: "It isn't worse"
    }],
    [{ id: 421,
      sntc: 'Sənə nə kömək edir?',
      tr: 'What helps you?',
      ch: 'What helps you?'
    },
    { id: 422,
      sntc: 'Kişilər buradadır',
      tr: 'The men are here',
      ch: 'The men are here'
    },
    { id: 423,
      sntc: 'Bu kitab nə qədərdir?',
      tr: 'How much is this book?',
      ch: 'How much is this book?'
    },
    { id: 424,
      sntc: 'Sən haqlısan',
      tr: "You're right",
      ch: "You're right"
    },
    {id: 425, sntc: 'Bu elə deyil', tr: "It isn't so", ch: "It isn't so" },
    { id: 426,
      sntc: 'O dərslər yararsızdır',
      tr: 'Those lessons are ineffective',
      ch: 'Those lessons are ineffective'
    },
    { id: 427,
      sntc: 'O, bunu çox yaxşı edir',
      tr: 'She does it very well',
      ch: 'She does it very well'
    },
    { id: 428,
      sntc: 'Bu reklam xoşuma gəlmir',
      tr: "I don't like this advertisement",
      ch: "I don't like this advertisement"
    },
    { id: 429,
      sntc: 'Bu onun rəyidir?',
      tr: 'Is it his opinion?',
      ch: 'Is it his opinion?'
    },
    { id: 430,
      sntc: 'O, tez-tez bu haqda düşünür?',
      tr: 'Does he often think about it?',
      ch: 'Does he often think about it?'
    }],
    [{ id: 431,
      sntc: 'Ananın neçə yaşı var?',
      tr: 'How old is your mother?',
      ch: 'How old is your mother?'
    },
    { id: 432,
      sntc: 'Bu çox böyük səhv deyil',
      tr: "It isn't a very big mistake",
      ch: "It isn't a very big mistake"
    },
    { id: 433,
      sntc: 'Bu çox yüksək səviyyədir',
      tr: "It's a very high level",
      ch: "It's a very high level"
    },
    { id: 434,
      sntc: 'O qədər də pis deyil',
      tr: "It isn't so bad",
      ch: "It isn't so bad"
    },
    { id: 435,
      sntc: 'Ümid edirəm sən bunu başa düşürsən',
      tr: 'I hope you understand it',
      ch: 'I hope you understand it'
    },
    { id: 436,
      sntc: 'O, yorğun deyil',
      tr: "She isn't tired",
      ch: "She isn't tired"
    },
    { id: 437,
      sntc: 'Gülməli videodur?',
      tr: 'Is it a funny video?',
      ch: 'Is it a funny video?'
    },
    { id: 438,
      sntc: 'Bu il çox çətindir',
      tr: 'This year is very difficult',
      ch: 'This year is very difficult'
    },
    { id: 439,
      sntc: 'Üzməyi xoşlayıram',
      tr: 'I like swimming',
      ch: 'I like swimming'
    },
    { id: 440,
      sntc: 'Sizi nə ruhlandırır?',
      tr: 'What inspires you?',
      ch: 'What inspires you?'
    }],
    [{ id: 441,
      sntc: 'Nə əhəmiyyətsiz görünür?',
      tr: 'What seems unimportant?',
      ch: 'What seems unimportant?'
    },
    { id: 442,
      sntc: 'Mənim kompüterim var. O çox güclüdür',
      tr: "I have a computer. It's very powerful",
      ch: "I have a computer. It's very powerful"
    },
    { id: 443,
      sntc: 'Bütün bu dərsləri həqiqətən faydalı görürəm',
      tr: 'I find all these lessons really useful',
      ch: 'I find all these lessons really useful'
    },
    { id: 444,
      sntc: 'Sən nə bilirsən?',
      tr: 'What do you know?',
      ch: 'What do you know?'
    },
    { id: 445,
      sntc: 'Təqdimat aydın deyil',
      tr: "The presentation isn't clear",
      ch: "The presentation isn't clear"
    },
    { id: 446,
      sntc: 'Bu çox darıxdırıcıdır',
      tr: "It's very boring",
      ch: "It's very boring"
    },
    { id: 447,
      sntc: 'Bu videoları çox faydalı görürəm',
      tr: 'I find these videos very useful',
      ch: 'I find these videos very useful'
    },
    { id: 448,
      sntc: 'Bu uşaqlar üçündür?',
      tr: 'Is it for children?',
      ch: 'Is it for children?'
    },
    { id: 449,
      sntc: 'Burada nə var?',
      tr: "What's here?",
      ch: "What's here?"
    },
    { id: 450,
      sntc: 'Onlar bir yerdə yaşamırlar',
      tr: "They don't live together",
      ch: "They don't live together"
    }],
    [{ id: 451,
      sntc: 'Bu izah aydın deyil',
      tr: 'This explanation is unclear',
      ch: 'This explanation is unclear'
    },
    { id: 452,
      sntc: 'Onu kim valeh edir?',
      tr: 'Who admires him?',
      ch: 'Who admires him?'
    },
    { id: 453,
      sntc: 'Sənin uğurun mənim uğurumdur',
      tr: 'Your success is my success',
      ch: 'Your success is my success'
    },
    { id: 454,
      sntc: 'O, bunu necə izah edir?',
      tr: 'How does she explain it?',
      ch: 'How does she explain it?'
    },
    { id: 455,
      sntc: 'O, çox zəngin insandır',
      tr: "He's a very rich person",
      ch: "He's a very rich person"
    },
    { id: 456,
      sntc: 'Mən bunu etməliyəm',
      tr: 'I must do it',
      ch: 'I must do it'
    },
    { id: 457,
      sntc: 'Sənə bunu dəyişmək lazımdır',
      tr: 'You need to change it',
      ch: 'You need to change it'
    },
    { id: 458,
      sntc: 'Səhvlərin üzərində işləyirsən?',
      tr: 'Do you work on your mistakes?',
      ch: 'Do you work on your mistakes?'
    },
    { id: 459,
      sntc: 'Mən onlara qulaq asmaq istəmirəm',
      tr: "İ don't want to listen to them",
      ch: "İ don't want to listen to them"
    },
    { id: 460,
      sntc: 'Bu, neçəyədir?',
      tr: 'How much does it cost?',
      ch: 'How much does it cost?'
    }],
    [{ id: 461,
      sntc: 'O, adətən hansı kanala baxır?',
      tr: 'Which channel does he usually watch?',
      ch: 'Which channel does he usually watch?'
    },
    { id: 462,
      sntc: 'Nəyə görə bu, düzgün görünür?',
      tr: 'Why does it seem right?',
      ch: 'Why does it seem right?'
    },
    {id: 463, sntc: 'Mən bunu bilirəm', tr: 'I know it', ch: 'I know it' },
    { id: 464,
      sntc: 'Bu şirkətin pulu var',
      tr: 'This company has money',
      ch: 'This company has money'
    },
    { id: 465,
      sntc: 'Məni anlayırsan?',
      tr: 'Do you understand me?',
      ch: 'Do you understand me?'
    },
    { id: 466,
      sntc: 'Yemək həqiqətən dadlıdır',
      tr: 'The food is really tasty',
      ch: 'The food is really tasty'
    },
    { id: 467,
      sntc: 'O, çox gözəl qızdır',
      tr: "She's a very beautiful girl",
      ch: "She's a very beautiful girl"
    },
    { id: 468,
      sntc: 'Bu çox asandır',
      tr: "It's so easy",
      ch: "It's so easy"
    },
    { id: 469,
      sntc: 'Bu daha yaxşıdır',
      tr: "It's better",
      ch: "It's better"
    },
    { id: 470,
      sntc: 'Bizim kifayət qədər praktikamız var?',
      tr: 'Do we have enough practice?',
      ch: 'Do we have enough practice?'
    }],
    [{ id: 471,
      sntc: 'Səni qorxuya salan nədir?',
      tr: 'What frightens you?',
      ch: 'What frightens you?'
    },
    { id: 472,
      sntc: 'Bu qədər maraqlı görünən nədir?',
      tr: 'What seems so interesting?',
      ch: 'What seems so interesting?'
    },
    { id: 473,
      sntc: 'Onun o yerə gəlməyi lazımdır?',
      tr: 'Does she need to come to that place?',
      ch: 'Does she need to come to that place?'
    },
    { id: 474,
      sntc: 'Biz bunu üçüncü nümunədə görürük',
      tr: 'We see it in the third example',
      ch: 'We see it in the third example'
    },
    { id: 475,
      sntc: 'Ona, bunu yazmaq lazımdır',
      tr: 'She needs to write it down',
      ch: 'She needs to write it down'
    },
    { id: 476,
      sntc: 'Nəyə görə onun dərsləri bu qədər yararsızdır?',
      tr: 'Why are her lessons so ineffective?',
      ch: 'Why are her lessons so ineffective?'
    },
    { id: 477,
      sntc: 'Onlar birlikdədirlər?',
      tr: 'Are they together?',
      ch: 'Are they together?'
    },
    { id: 478,
      sntc: 'O, uzun boylu bir qızdır',
      tr: "She's a tall girl",
      ch: "She's a tall girl"
    },
    { id: 479,
      sntc: 'Bu çox sadə cavabdır',
      tr: "It's such a simple answer",
      ch: "It's such a simple answer"
    },
    { id: 480,
      sntc: 'Qəribə görünən nədir?',
      tr: 'What looks strange?',
      ch: 'What looks strange?'
    }],
    [{ id: 481,
      sntc: 'Onlar bir yerdə yaşayırlar',
      tr: 'They live together',
      ch: 'They live together'
    },
    { id: 482,
      sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
      tr: "I don't need to analyze all the data",
      ch: "I don't need to analyze all the data"
    },
    { id: 483,
      sntc: 'Oyun maraqlıdır?',
      tr: 'Is the game interesting?',
      ch: 'Is the game interesting?'
    },
    { id: 484,
      sntc: 'Onlar sənə nə demək istəyirlər?',
      tr: 'What do they want to tell you?',
      ch: 'What do they want to tell you?'
    },
    { id: 485,
      sntc: 'Onlar çox ciddi öyrənirlər',
      tr: 'They study very hard',
      ch: 'They study very hard'
    },
    { id: 486,
      sntc: 'Bu mövzu mənim üçün çox çətindir',
      tr: 'This subject is too difficult for me',
      ch: 'This subject is too difficult for me'
    },
    { id: 487,
      sntc: 'Sizi daha çox nə təşviq edir?',
      tr: 'What motivates you more?',
      ch: 'What motivates you more?'
    },
    { id: 488,
      sntc: 'İdeya maraqlıdır?',
      tr: 'Is the idea interesting?',
      ch: 'Is the idea interesting?'
    },
    { id: 489,
      sntc: 'Kitab bu qədər maraqlıdır?',
      tr: 'Is the book so interesting?',
      ch: 'Is the book so interesting?'
    },
    { id: 490,
      sntc: 'Bu ən yaxşı kitabdır',
      tr: "It's the best book",
      ch: "It's the best book"
    }],
    [{ id: 491,
      sntc: 'Bu geyim neçəyədir?',
      tr: 'How much is that dress?',
      ch: 'How much is that dress?'
    },
    { id: 492,
      sntc: 'Bu ucuzdur?',
      tr: 'Is it cheap?',
      ch: 'Is it cheap?'
    },
    { id: 493,
      sntc: 'Siz ona dəstəksiniz?',
      tr: 'Do you support him?',
      ch: 'Do you support him?'
    },
    { id: 494,
      sntc: 'Dərs çox informativdir',
      tr: 'The lesson is so informative',
      ch: 'The lesson is so informative'
    },
    { id: 495,
      sntc: 'Onlar bir yerdədirlər',
      tr: "They're together",
      ch: "They're together"
    },
    { id: 496,
      sntc: 'O, bu ölkədə yaşayır',
      tr: 'He lives in this country',
      ch: 'He lives in this country'
    },
    { id: 497,
      sntc: 'O, bu şeyləri çox yaxşı izah edir',
      tr: 'She explains all these things very well',
      ch: 'She explains all these things very well'
    },
    { id: 498,
      sntc: 'Müdirim hər şeyi bilir',
      tr: 'My boss knows everything',
      ch: 'My boss knows everything'
    },
    { id: 499,
      sntc: 'Dostun bunu başa düşür?',
      tr: 'Does his friend understand it?',
      ch: 'Does his friend understand it?'
    },
    { id: 500,
      sntc: 'Onlar çox vaxt gülürlər',
      tr: 'They often laugh',
      ch: 'They often laugh'
    }],
    [{
        id: 501,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'Sən tezliklə yorulacaqsan',
        tr: 'You will get tired soon'
      },
      {
        id: 502,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'Onlar ora gedəcəklər',
        tr: 'They will go there '
      },
      {
        id: 503,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'Onlar gəliri artıracaqlar',
        tr: 'They will maximize the profit'
      },
      {
        id: 504,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'Onun boş vaxtı olacaq',
        tr: 'He will have free time'
      },
      {
        id: 505,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'O, bunu manipulyasiya edəcək',
        tr: 'He will manipulate it'
      },
      {
        id: 506,
        descr: 'Gələcək sadə zaman',
        expl: 'Əvəzlik will fel ...',
        sntc: 'Bu, ona stimul verəcək',
        tr: 'It will stimulate him'
      },
      {
        id: 507,
        descr: 'Gələcək sadə zaman. Əvəzliklə birgə adətən qısa forma işlənilir:',
        expl: 'Əvəzlik + ’ll fel ...',
        sntc: 'Mən bu məqsədə çatacağam',
        tr: 'I’ll achieve this aim'
      },
      {
        id: 508,
        descr: 'Gələcək sadə zaman. Əvəzliklə birgə adətən qısa forma işlənilir::',
        expl: 'Əvəzlik + ’ll fel ...',
        sntc: 'İngiliscə heç bir səhv etmədən danışacam',
        tr: 'I’ll speak English without any mistakes at all'
      },
      {
        id: 509,
        descr: 'Gələcək sadə zaman. Əvəzliklə birgə adətən qısa forma işlənilir::',
        expl: 'Əvəzlik + ’ll fel ...',
        sntc: 'Yeni iş axtaracam',
        tr: 'I’ll look for a new job'
      },
      {
        id: 510,
        descr: 'Gələcək sadə zaman. Əvəzliklə birgə adətən qısa forma işlənilir::',
        expl: 'Əvəzlik + ’ll fel ...',
        sntc: 'Biz bunu düşünərik',
        tr: 'We’ll think it over'
      }
    ],
    [{
        id: 511,
        descr: 'Gələcək sadə zaman',
        expl: 'Everyone will ...',
        sntc: 'Hər kəs çox məyus olacaq',
        tr: 'Everyone will be very disappointed'
      },
      {
        id: 512,
        descr: 'Gələcək sadə zaman',
        expl: '... people will ...',
        sntc: 'Bütün xalq bunu dəstəkləyəcək',
        tr: 'All the people will support it'
      },
      {
        id: 513,
        descr: 'Gələcək sadə zaman',
        expl: 'Everyone will ... sooner or later',
        sntc: 'Hər kəs gec-tez bu şəraitə uyğunlaşacaq',
        tr: 'Everyone will adapt to these conditions sooner or later'
      },
      {
        id: 514,
        descr: 'Gələcək sadə zaman',
        expl: '... will hurry up',
        sntc: 'Dostum və mən tələsəcəyik',
        tr: 'My friend and I will hurry up'
      },
      {
        id: 515,
        descr: 'Gələcək sadə zaman',
        expl: '... friend will borrow ...',
        sntc: 'Dostum bu pulu borc alacaq',
        tr: 'My friend will borrow this money'
      },
      {
        id: 516,
        descr: 'Gələcək sadə zaman',
        expl: '... authorities will ...',
        sntc: 'Hakimiyyət bunu hansısa yolla tənzimləyəcək',
        tr: 'The authorities will regulate it somehow'
      },
      {
        id: 517,
        descr: 'Gələcək sadə zaman',
        expl: '... will devote ...',
        sntc: 'Dostum və mən ingilis dilinə daha çox boş vaxt ayıracağıq',
        tr: 'My friend and I will devote more free time to English'
      },
      {
        id: 518,
        descr: 'Gələcək sadə zaman',
        expl: '... teacher will ...',
        sntc: 'Müəllim onu bağışlayacaq',
        tr: 'The teacher will forgive him'
      },
      {
        id: 519,
        descr: 'Gələcək sadə zaman',
        expl: '... thing will be ...',
        sntc: 'Bu şey bir çox adam üçün birinci yerdə olacaq',
        tr: 'This thing will be in the first place for many people'
      },
      {
        id: 520,
        descr: 'Gələcək sadə zaman',
        expl: '... friend will ...',
        sntc: 'Onun dostu buna peşman olacaq ',
        tr: 'His friend will regret it '
      }
    ],
    [{
        id: 521,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik will not fel ...',
        sntc: 'Mən onun sözünü kəsmərəm',
        tr: "I will not interrupt him"
      },
      {
        id: 522,
        descr: 'Gələcək sadə zamanda inkar. Qısa forma:',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Mən buna qarşı olmaram',
        tr: 'I won’t be against it'
      },
      {
        id: 523,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Hazırlıqsız bu imtahandan keçməzsiniz',
        tr: 'You won’t pass this exam without preparation'
      },
      {
        id: 524,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Onlar bu problemdən çıxış yolu tapmayacaqlar',
        tr: 'They won’t find a solution to this problem'
      },
      {
        id: 525,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'O, bütün mətni lüğətsiz tərcümə etməyəcək',
        tr: 'He won’t translate all the text without a dictionary'
      },
      {
        id: 526,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Bu uğura gətirib çıxarmayacaq',
        tr: 'It won’t lead to success'
      },
      {
        id: 527,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Bu yarışmada iştirak etməyəcəm',
        tr: 'I won’t take part in this competition'
      },
      {
        id: 528,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Biz bu şirkətlə rəqabət aparmayacıq',
        tr: 'We won’t compete with this company'
      },
      {
        id: 529,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'Sən bu qərara təsir etməyəcəksən',
        tr: 'You won’t influence this decision'
      },
      {
        id: 530,
        descr: 'Gələcək sadə zamanda inkar',
        expl: 'Əvəzlik won’t ...',
        sntc: 'O, artıq onunla ünsiyyət qurmayacaq',
        tr: 'He won’t communicate with him anymore'
      }
    ],
    [{
        id: 531,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... boss won’t ...',
        sntc: 'Mənim müdirim bunu təkid etməyəcək',
        tr: 'My boss won’t insist on it'
      },
      {
        id: 532,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... colleagues won’t ...',
        sntc: 'Həmkarlarım bu təşəbbüsü dəstəkləməyəcəklər',
        tr: 'My colleagues won’t support this initiative'
      },
      {
        id: 533,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... friend won’t ...',
        sntc: 'Dostum sənə kömək etməkdən imtina etməyəcək',
        tr: 'My friend won’t refuse to help you'
      },
      {
        id: 534,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... girl won’t ...',
        sntc: 'Qız bunu bir günə öyrənməyəcək',
        tr: 'The girl won’t learn it in one day'
      },
      {
        id: 535,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... boys won’t ...',
        sntc: 'Oğlanlar bunu bu qədər tez xatırlamayacaq',
        tr: 'The boys won’t remember it so quickly'
      },
      {
        id: 536,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... guests won’t ...',
        sntc: 'Qonaqlar bizim yoxluğumuza müşahidə etməyəcək',
        tr: 'The guests won’t notice our absence'
      },
      {
        id: 537,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... musician won’t ...',
        sntc: 'Düşünürəm ki, bu musiqiçi populyar olmayacaq',
        tr: 'I think this musician won’t become popular'
      },
      {
        id: 538,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... conference won’t ...',
        sntc: 'Konfrans heç darıxdırıcı olmayacaq',
        tr: 'The conference won’t be boring at all'
      },
      {
        id: 539,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... students won’t ...',
        sntc: 'O tələbələrin kifayət qədər təcrübəsi olmayacaq ',
        tr: 'Those students won’t have enough practice '
      },
      {
        id: 540,
        descr: 'Gələcək sadə zamanda inkar',
        expl: '... offer won’t ...',
        sntc: 'Bu təklif bir azdan o qədər də cəlbedici olmayacaq',
        tr: 'This offer won’t be so attractive soon'
      }
    ],
    [{
        id: 541,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'O, buna gözlərini yumacaq?',
        tr: 'Will she close her eyes on it?'
      },
      {
        id: 542,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bu, o qədər vacib hadisə olacaq?',
        tr: 'Will it be such an important event?'
      },
      {
        id: 543,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bunun qiyməti daha çox olacaq?',
        tr: 'Will it cost more money?'
      },
      {
        id: 544,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Onlar bu kitabı nəşr edəcəklər?',
        tr: 'Will they publish this book?'
      },
      {
        id: 545,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bu onların düşüncə tərzini dəyişəcək?',
        tr: 'Will it change their attitude?'
      },
      {
        id: 546,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Səhvlərimə işarə edəcəksən?',
        tr: 'Will you point at my mistakes'
      },
      {
        id: 547,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bu, əbədiyyən davam edəcək?',
        tr: 'Will it last forever?'
      },
      {
        id: 548,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bu, iki saat davam edəcək?',
        tr: 'Will it last for two hours?'
      },
      {
        id: 549,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bu təxminən iki saat davam edəcək?',
        tr: 'Will it last for about two hours?'
      },
      {
        id: 550,
        descr: 'Gələcək sadə zamanda sual',
        expl: '',
        sntc: 'Bunu axşam bişirəcəksən?',
        tr: 'Will you cook it in the evening?'
      }
    ],
    [{
        id: 551,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Bu, asan sınaq olacaq?',
        tr: 'Will it be an easy test?'
      },
      {
        id: 552,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Bu, sonda mümkün olacaq?',
        tr: 'Will it be possible in the end?'
      },
      {
        id: 553,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will you ...',
        sntc: 'Sabah səhər əlçatan olacaqsan?',
        tr: 'Will you be available tomorrow morning?'
      },
      {
        id: 554,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will they ...',
        sntc: 'Onların maddi problemləri olacaq?',
        tr: 'Will they have financial problems?'
      },
      {
        id: 555,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will they ...',
        sntc: 'Onlar kommersiya uğuru qazanacaqlar?',
        tr: 'Will they have a commercial success?'
      },
      {
        id: 556,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Tezliklə qaranlığ olacaq?',
        tr: 'Will it get dark soon?'
      },
      {
        id: 557,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Bu bizim əsas layihəmiz olacaq?',
        tr: 'Will it be our main project?'
      },
      {
        id: 558,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will you ...',
        sntc: 'Sən evdə olacaqsan?',
        tr: "Will you be at home?"
      },
      {
        id: 559,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Bunu yoxlamaq lazım gələcək?',
        tr: 'Will it be necessary to check it?'
      },
      {
        id: 560,
        descr: 'Gələcək sadə zamanda sual',
        expl: 'Will it ...',
        sntc: 'Bu, potensial təhlükə olacaq?',
        tr: 'Will it be a potential threat?'
      }
    ],
    [{
        id: 561,
        descr: 'Xüsusi sual',
        expl: 'When will əvəzlik ...',
        sntc: 'O, bizə nə vaxt qoşulacaq?',
        tr: 'When will she join us?'
      },
      {
        id: 562,
        descr: 'Xüsusi sual',
        expl: 'Who will fel ...',
        sntc: 'Bu videolara kim baxacaq?',
        tr: 'Who will watch these videos?'
      },
      {
        id: 563,
        descr: 'Xüsusi sual',
        expl: 'When will əvəzlik ...',
        sntc: 'Nə vaxt azad olacaqsan?',
        tr: 'When will you be free?'
      },
      {
        id: 564,
        descr: 'Xüsusi sual',
        expl: 'When will əvəzlik ...',
        sntc: 'Onlar nə vaxt qayıdacaqlar?',
        tr: 'When will they come back?'
      },
      {
        id: 565,
        descr: 'Xüsusi sual',
        expl: 'How will əvəzlik ...',
        sntc: 'Onlar bu problemi necə həll edə biləcəklər?',
        tr: 'How will they be able solve this problem?'
      },
      {
        id: 566,
        descr: 'Xüsusi sual',
        expl: 'How will əvəzlik ...',
        sntc: 'Bu problemi həll etməyi necə bacaracaqsan?',
        tr: 'How will you manage to solve this problem?'
      },
      {
        id: 567,
        descr: 'Xüsusi sual',
        expl: 'How will əvəzlik ...',
        sntc: 'Onlar bu yerə necə çatacaqlar?',
        tr: 'How will they get to this place?'
      },
      {
        id: 568,
        descr: 'Xüsusi sual',
        expl: 'What will ...',
        sntc: 'Bu nə məna daşıyacaq?',
        tr: 'What will it mean?'
      },
      {
        id: 569,
        descr: 'Xüsusi sual',
        expl: 'Which ... will əvəzlik ...',
        sntc: 'Hansı tövsiyəyə əməl edəcəksən?',
        tr: 'Which recommendation will you follow?'
      },
      {
        id: 570,
        descr: 'Xüsusi sual',
        expl: 'What kind of ... will əvəzlik ...',
        sntc: 'Nə cür materiallara ehtiyacınız olacaq?',
        tr: 'What kind of materials will you need?'
      }
    ],
    [{
        id: 571,
        descr: 'Xüsusi sual',
        expl: 'Why will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... start feil+ing ...',
        sntc: 'Nəyə görə partnyorunuz bunu sonradan etməyə başlayacaq?',
        tr: 'Why will your partner start doing it later?'
      },
      {
        id: 572,
        descr: 'Xüsusi sual',
        expl: 'When will artikl ... continue feil+ing ...',
        sntc: 'Müəllim nə vaxt bunu davam etdirəcək?',
        tr: 'When will the teacher continue doing it?'
      },
      {
        id: 573,
        descr: 'Xüsusi sual',
        expl: 'Why will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Nəyə görə dostun bunu etməkdən imtina edəcək?',
        tr: 'Why will your friend refuse to do it?'
      },
      {
        id: 574,
        descr: 'Xüsusi sual',
        expl: 'Where will ... take place',
        sntc: 'Konfrans harada baş tutacaq?',
        tr: 'Where will the conference take place?'
      },
      {
        id: 575,
        descr: 'Xüsusi sual',
        expl: 'How will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... manage to ...',
        sntc: 'Dostun bu problemi həll etməyi necə bacaracaq?',
        tr: 'How will your friend manage to solve this problem?'
      },
      {
        id: 576,
        descr: 'Xüsusi sual',
        expl: 'What ... will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... on a regular basis',
        sntc: 'Dostların müntəzəm olaraq hansı kanallara baxacaqlar?',
        tr: 'What channels will your friends watch on a regular basis?'
      },
      {
        id: 577,
        descr: 'Xüsusi sual',
        expl: 'How many ... will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Ailəniz neçə yerə baş çəkəcək?',
        tr: 'How many places will your family visit?'
      },
      {
        id: 578,
        descr: 'Xüsusi sual',
        expl: 'How much ... will əvəzlik ...',
        sntc: 'Ona nə qədər pul borclu olacaqsan?',
        tr: 'How much money will you owe him?'
      },
      {
        id: 579,
        descr: 'Xüsusi sual',
        expl: 'Whose ... will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
        sntc: 'Dostun kimin təklifini qəbul edəcək?',
        tr: 'Whose offer will your friend take?'
      },
      {
        id: 580,
        descr: 'Xüsusi sual',
        expl: 'How long will yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... be away',
        sntc: 'Valideynlərin nə vaxta qədər olmayacaqlar?',
        tr: 'How long will your parents be away?'
      }
    ],
    [{
        id: 581,
        sntc: 'Bilirsiniz ki, ingilis dilini addım-addım öyrənirik',
        tr: 'You know that we learn English step by step',
        ch: 'You know that we learn English step by step'
      },
      {
        id: 582,
        sntc: 'Bu çempionatda iştirak etməyəcəm',
        tr: "I won't take part in this championship",
        ch: "I won't take part in this championship"
      },
      {
        id: 583,
        sntc: 'Mən bayıra çıxacağam',
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
        sntc: 'Düşünürəm ki, avtobusu qaçıracağam',
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
        sntc: 'Sənin yoxluğuna fikir verəcəklər',
        tr: 'They’ll notice your absence',
        ch: 'They’ll notice your absence'
      },
      {
        id: 594,
        sntc: 'Tələbələr bu cür məşqləri neçə dəfə edəcəklər?',
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
        sntc: 'Bunu deməyi unutmaram',
        tr: "I won't forget to say it",
        ch: "I won't forget to say it"
      },
      {
        id: 607,
        sntc: 'İngilis dilini öyrənə biləcəyəm',
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
        sntc: 'O, kinoya nə qədər gedir?',
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
        sntc: 'Çalışaram bütün pulları xərcləməyim',
        tr: 'I’ll try not to spend all the money',
        ch: 'I’ll try not to spend all the money'
      }
    ],
    [{ id: 651,
      descr: '',
      expl: '',
      sntc: 'Mən tez-tez musiqi dinləyirdim',
      tr: 'I often listened to music'
    },
    { id: 652,
      descr: '',
      expl: '',
      sntc: 'Sənə kömək etmək istəyirdim',
      tr: 'I wanted to help you'
    },
    { id: 653,
      descr: '',
      expl: '',
      sntc: 'Mən radionu söndürdüm',
      tr: 'I switched off the radio'
    },
    { id: 654,
      descr: '',
      expl: '',
      sntc: 'Biz parka piyada getdik',
      tr: 'We walked to the park'
    },
    { id: 655,
      descr: '',
      expl: '',
      sntc: 'Biz Londona köçdük',
      tr: 'We moved to London'
    },
    { id: 656,
      descr: '',
      expl: '',
      sntc: 'O, bu dərsi öyrəndi',
      tr: 'He learned this lesson'
    },
    { id: 657,
      descr: '',
      expl: '',
      sntc: 'Biz orada yaşamağa başladıq',
      tr: 'We started living there'
    },
    { id: 658,
      descr: '',
      expl: '',
      sntc: 'Onunla əlaqə qurmağa ehtiyacım var idi',
      tr: 'I needed to get in touch with her'
    },
    { id: 659,
      descr: '',
      expl: '',
      sntc: 'İki il əvvəl ingilis dilini öyrənməyə başladım',
      tr: 'I started learning English two years ago'
    },
    { id: 660,
      descr: '',
      expl: '',
      sntc: 'O, həqiqətən bu yeri bəyənmişdi',
      tr: 'She really liked this place'
    }],
    [{ id: 661,
      descr: '',
      expl: '',
      sntc: 'Mən bu dərsə yenidən baxdım',
      tr: 'I revised this lesson'
    },
    { id: 662,
      descr: '',
      expl: '',
      sntc: 'O, onun sözlərini təkrar etdi',
      tr: 'He repeated his words'
    },
    { id: 663,
      descr: '',
      expl: '',
      sntc: 'Çox vacib bir şeyi əlavə etdim',
      tr: 'I added a very important thing'
    },
    { id: 664,
      descr: '',
      expl: '',
      sntc: 'Çox nüfuzlu bir universitetə qəbul oldum',
      tr: 'I entered a very prestigious university'
    },
    { id: 665,
      descr: '',
      expl: '',
      sntc: 'Bu məktubu aldım',
      tr: 'I received this letter'
    },
    { id: 666,
      descr: '',
      expl: '',
      sntc: 'O, onunla evləndi',
      tr: 'He married her'
    },
    { id: 667,
      descr: '',
      expl: '',
      sntc: 'O, binaya daxil oldu',
      tr: 'He entered the building'
    },
    { id: 668,
      descr: '',
      expl: '',
      sntc: 'Bu dərsləri öyrənməyə davam etdim',
      tr: 'I continued learning these lessons'
    },
    { id: 669,
      descr: '',
      expl: '',
      sntc: 'Onlar çox yaxşı şərait təmin etdilər',
      tr: 'They provided very good conditions'
    },
    { id: 670,
      descr: '',
      expl: '',
      sntc: 'O, bunu əhəmiyyətsiz hesab edirdi',
      tr: 'He considered it unimportant'
    }],
    [{ id: 671,
      descr: '',
      expl: '',
      sntc: 'O, hasarın üstündən tullandı',
      tr: 'He jumped over the fence'
    },
    { id: 672,
      descr: '',
      expl: '',
      sntc: 'Bunu təkid etdim',
      tr: 'I insisted on it'
    },
    { id: 673,
      descr: '',
      expl: '',
      sntc: 'Nəticə hər birimizdən asılı idi',
      tr: 'The result depended on each of us'
    },
    { id: 674,
      descr: '',
      expl: '',
      sntc: 'Onlar sırağagün evdə qalmışdılar',
      tr: 'They stayed at home the day before yesterday'
    },
    { id: 675,
      descr: '',
      expl: '',
      sntc: 'Kinoya getməyi təklif etdilər',
      tr: 'They suggested going to the cinema'
    },
    { id: 676,
      descr: '',
      expl: '',
      sntc: 'Oğlanlar özlərini yaxşı aparırdılar',
      tr: 'The boys behaved well'
    },
    { id: 677,
      descr: '',
      expl: '',
      sntc: 'Onun əri buna görə peşman oldu',
      tr: 'Her husband regretted it'
    },
    { id: 678,
      descr: '',
      expl: '',
      sntc: 'Mən belə düşünməyə meyilli idim',
      tr: 'I tended to think so'
    },
    { id: 679,
      descr: '',
      expl: '',
      sntc: 'Bunu ingilis dilinə tərcümə etdim',
      tr: 'I translated it into English'
    },
    { id: 680,
      descr: '',
      expl: '',
      sntc: 'Bu sənədləri doldurdum',
      tr: 'I filled in these documents'
    }],
    [{ id: 681,
      descr: '',
      expl: '',
      sntc: 'Bu faylı səhvən sildim',
      tr: 'I deleted this file by mistake'
    },
    { id: 682,
      descr: '',
      expl: '',
      sntc: 'Bunu üç hissəyə bölmüşdüm',
      tr: 'I divided it into three parts'
    },
    { id: 683,
      descr: '',
      expl: '',
      sntc: 'Ev onlara məxsus idi',
      tr: 'The house belonged to them'
    },
    { id: 684,
      descr: '',
      expl: '',
      sntc: 'Biz bu mövzuda cəmləşmişdik',
      tr: 'We concentrated on this subject'
    },
    { id: 685,
      descr: '',
      expl: '',
      sntc: 'Onu bu cinayətdə ittiham etdilər',
      tr: 'They accused him of this crime'
    },
    { id: 686,
      descr: '',
      expl: '',
      sntc: 'Dərs təxminən bir saat davam etdi',
      tr: 'The lesson lasted for about an hour'
    },
    { id: 687,
      descr: '',
      expl: '',
      sntc: 'Onlar bu şirkətlə yarışdılar',
      tr: 'They competed with this company'
    },
    { id: 688,
      descr: '',
      expl: '',
      sntc: 'O, qabları yuyub',
      tr: 'She washed up the dishes'
    },
    { id: 689,
      descr: '',
      expl: '',
      sntc: 'O, xərcləri hesabladı',
      tr: 'He calculated the costs'
    },
    { id: 690,
      descr: '',
      expl: '',
      sntc: 'O, beş min dollardan çox pul qazandı',
      tr: 'He earned more than five thousand dollars'
    }],
    [{ id: 691,
      descr: '',
      expl: '',
      sntc: 'Çox vacib bir şey yadıma düşdü',
      tr: 'I remembered one very important thing'
    },
    { id: 692,
      descr: '',
      expl: '',
      sntc: 'Bu problem barədə bizə məlumat verdilər',
      tr: 'They informed us of this problem'
    },
    { id: 693,
      descr: '',
      expl: '',
      sntc: 'Bu tətbiqdəki bütün dərslərə yenidən baxdım',
      tr: 'I revised all the lessons in this app'
    },
    { id: 694,
      descr: '',
      expl: '',
      sntc: 'Heç bir səbəb olmadan onlarla razılaşmadım',
      tr: 'I disagreed with them for no reason'
    },
    { id: 695,
      descr: '',
      expl: '',
      sntc: 'O, sözünün üstündə duracağına söz verdi',
      tr: 'He promised to keep his word'
    },
    { id: 696,
      descr: '',
      expl: '',
      sntc: 'Biz onun danışığını yazmışdıq',
      tr: 'We recorded his speech'
    },
    { id: 697,
      descr: '',
      expl: '',
      sntc: 'Mən bunu etməkdən həqiqətən də nifrət edirdim',
      tr: 'I really hated doing it'
    },
    { id: 698,
      descr: '',
      expl: '',
      sntc: 'Biliyimi səninlə paylaşdım',
      tr: 'I shared my knowledge with you'
    },
    { id: 699,
      descr: '',
      expl: '',
      sntc: 'O, mənə bir-iki sual verdi',
      tr: 'He asked me a couple of questions'
    },
    { id: 700,
      descr: '',
      expl: '',
      sntc: 'O, çox nadir hallarda siqaret çəkirdi',
      tr: 'He smoked quite rarely'
    }],
    [{ id: 701,
      sntc: 'O, bu mənzilin sahibi idi',
      tr: 'He owned this flat',
      ch: 'He owned this flat'
    },
    { id: 702,
      sntc: 'Mən nəhayət bunu xatırladım',
      tr: 'I remembered it at last',
      ch: 'I remembered it at last'
    },
    { id: 703,
      sntc: 'Məsləhətinizə əməl etdim',
      tr: 'I followed your advice',
      ch: 'I followed your advice'
    },
    { id: 704,
      sntc: 'Onlar bu şəraiti təmin etdilər',
      tr: 'They provided these conditions',
      ch: 'They provided these conditions'
    },
    { id: 705,
      sntc: 'Mən bunu üç hissəyə bölmüşdüm',
      tr: 'I divided it into three parts',
      ch: 'I divided it into three parts'
    },
    { id: 706,
      sntc: 'Mən iki il əvvəl ingilis dilini öyrənməyə başladım',
      tr: 'I started learning English two years ago',
      ch: 'I started learning English two years ago'
    },
    { id: 707,
      sntc: 'Onlar çox bahalı mallar istehsal etdilər',
      tr: 'They produced very expensive goods',
      ch: 'They produced very expensive goods'
    },
    { id: 708,
      sntc: 'Onlar birdən yoxa çıxdılar',
      tr: 'They disappeared suddenly',
      ch: 'They disappeared suddenly'
    },
    { id: 709,
      sntc: 'Mən vaxt itirməmək qərarına gəldim',
      tr: 'I decided not to waste time',
      ch: 'I decided not to waste time'
    },
    { id: 710,
      sntc: 'Bunu çox aydın izah etdiniz',
      tr: 'You explained it very clearly',
      ch: 'You explained it very clearly'
    }],
    [{ id: 711,
      sntc: 'Mən avtobusu qaçırdım',
      tr: 'I missed the bus',
      ch: 'I missed the bus'
    },
    { id: 712,
      sntc: 'Onlar bu məlumatı bizimlə paylaşdılar',
      tr: 'They shared this information with us',
      ch: 'They shared this information with us'
    },
    { id: 713,
      sntc: 'O, bu sınaqdan keçmədi',
      tr: 'She failed this test',
      ch: 'She failed this test'
    },
    { id: 714,
      sntc: 'Çox ciddi oxudum,',
      tr: 'I studied very hard',
      ch: 'I studied very hard'
    },
    { id: 715,
      sntc: 'Onlar ona güldülər',
      tr: 'They laughed at him',
      ch: 'They laughed at him'
    },
    { id: 716,
      sntc: 'Mən imtahana hazırlaşdım',
      tr: 'I prepared for the exam',
      ch: 'I prepared for the exam'
    },
    { id: 717,
      sntc: 'O, mənimlə qismən razılaşdı',
      tr: 'She partly agreed with me',
      ch: 'She partly agreed with me'
    },
    { id: 718,
      sntc: 'Mən bunu etməkdən nifrət edirdim',
      tr: 'I hated doing it',
      ch: 'I hated doing it'
    },
    { id: 719,
      sntc: 'O, onun xarici görünüşünü təsvir etdi',
      tr: 'He described her appearance',
      ch: 'He described her appearance'
    },
    { id: 720,
      sntc: 'Biz doğru cavabı tapdıq',
      tr: 'We guessed the correct answer',
      ch: 'We guessed the correct answer'
    }],
    [{ id: 721,
      sntc: 'Onlar binanı dağıtdılar',
      tr: 'They destroyed the building',
      ch: 'They destroyed the building'
    },
    { id: 722,
      sntc: 'O, bu faktı inkar etdi',
      tr: 'He denied this fact',
      ch: 'He denied this fact'
    },
    { id: 723,
      sntc: 'Əsgərlər onlara hücum etdi',
      tr: 'The soldiers attacked them',
      ch: 'The soldiers attacked them'
    },
    { id: 724,
      sntc: 'Ev onlara məxsus idi',
      tr: 'The house belonged to them',
      ch: 'The house belonged to them'
    },
    { id: 725,
      sntc: 'Bu məndən asılı idi',
      tr: 'It depended on me',
      ch: 'It depended on me'
    },
    { id: 726,
      sntc: 'Mən formanı doldurmuşam',
      tr: 'I filled in the form',
      ch: 'I filled in the form'
    },
    { id: 727,
      sntc: 'O, əsgərlərə bunu etməyə əmr verdi',
      tr: 'He ordered the soldiers to do it',
      ch: 'He ordered the soldiers to do it'
    },
    { id: 728,
      sntc: 'Mən hər şeyi yoxlamağa söz verdim',
      tr: 'I promised to check everything',
      ch: 'I promised to check everything'
    },
    { id: 729,
      sntc: 'Mən bu əşyanı online olaraq sifariş etdim',
      tr: 'I ordered this thing online',
      ch: 'I ordered this thing online'
    },
    { id: 730,
      sntc: 'Mən fikrimi bildirdim',
      tr: 'I expressed my point of view',
      ch: 'I expressed my point of view'
    }],
    [{ id: 731,
      sntc: 'O, beş mindən çox pul qazandı',
      tr: 'He earned more than five thousand dollars',
      ch: 'He earned more than five thousand dollars'
    },
    { id: 732,
      sntc: 'Dərs bir saat davam etdi',
      tr: 'The lesson lasted for an hour',
      ch: 'The lesson lasted for an hour'
    },
    { id: 733,
      sntc: 'Bu, onların hər birini şoka saldı',
      tr: 'It shocked each of them',
      ch: 'It shocked each of them'
    },
    { id: 734,
      sntc: 'Bu problemi nəhayət həll etdik',
      tr: 'We solved this problem at last',
      ch: 'We solved this problem at last'
    },
    { id: 735,
      sntc: 'O, hər şeyə görə üzr istədi',
      tr: 'She apologized for everything',
      ch: 'She apologized for everything'
    },
    { id: 736,
      sntc: 'Dərs iyirmi dəqiqədən çox davam etdi',
      tr: 'The lesson lasted for more than twenty minutes',
      ch: 'The lesson lasted for more than twenty minutes'
    },
    { id: 737,
      sntc: 'Onun, müdiri tez-tez onu tənqid edirdi',
      tr: 'Her boss often criticized her',
      ch: 'Her boss often criticized her'
    },
    { id: 738,
      sntc: 'Biz vaxtdan-vaxta bir-birimizlə ünsiyyət qururduğ',
      tr: 'We communicated with each other from time to time',
      ch: 'We communicated with each other from time to time'
    },
    { id: 739,
      sntc: 'Mən bütün mətni tərcümə etdim',
      tr: 'I translated all the text',
      ch: 'I translated all the text'
    },
    { id: 740,
      sntc: 'O, davranışına görə üzr istədi',
      tr: 'He apologized for his behavior',
      ch: 'He apologized for his behavior'
    }],
    [{ id: 741,
      sntc: 'O, küçəni keçdi',
      tr: 'He crossed the street',
      ch: 'He crossed the street'
    },
    { id: 742,
      sntc: 'Onlar birlikdə rəqs etdilər',
      tr: 'They danced together',
      ch: 'They danced together'
    },
    { id: 743,
      sntc: 'Oğlan onun sözünü kəsdi',
      tr: 'The boy interrupted her',
      ch: 'The boy interrupted her'
    },
    { id: 744,
      sntc: 'O, bu saytı bizə tövsiyə etdi',
      tr: 'He recommended this website to us',
      ch: 'He recommended this website to us'
    },
    { id: 745,
      sntc: 'O, çoxlu çətinliklərlə üzləşib',
      tr: 'He experienced so many difficulties',
      ch: 'He experienced so many difficulties'
    },
    { id: 746,
      sntc: 'Bu xəbər bizi təəccübləndirdi',
      tr: 'This news surprised us',
      ch: 'This news surprised us'
    },
    { id: 747,
      sntc: 'O, sonradan peşman oldu',
      tr: 'He regretted it later',
      ch: 'He regretted it later'
    },
    { id: 748,
      sntc: 'O, iş yoldaşına etibar etdi',
      tr: 'He trusted his business partner',
      ch: 'He trusted his business partner'
    },
    { id: 749,
      sntc: 'O, bu müğənniyə heyran oldu',
      tr: 'She admired this singer',
      ch: 'She admired this singer'
    },
    { id: 750,
      sntc: 'Bu insana heyran oldum',
      tr: 'I admired this person',
      ch: 'I admired this person'
    }],
    [{ id: 751,
      sntc: 'O, Amerikanı kəşf etdi',
      tr: 'He discovered America',
      ch: 'He discovered America'
    },
    { id: 752,
      sntc: 'O, bizi üç qrupa böldü',
      tr: 'He divided us into three groups',
      ch: 'He divided us into three groups'
    },
    { id: 753,
      sntc: 'İngilis dilində danışmağı təcrübə etdim',
      tr: 'I practiced speaking English',
      ch: 'I practiced speaking English'
    },
    { id: 754,
      sntc: 'Orada tez-tez qar yağırdı',
      tr: 'It often snowed there',
      ch: 'It often snowed there'
    },
    { id: 755,
      sntc: 'O, buna çox qəribə reaksiya verdi',
      tr: 'He reacted to it very strangely',
      ch: 'He reacted to it very strangely'
    },
    { id: 756,
      sntc: 'Polis bu oğrunu həbs etdi',
      tr: 'The police arrested this thief',
      ch: 'The police arrested this thief'
    },
    { id: 757,
      sntc: 'O, çox böyük pul məbləğini investisiya etdi',
      tr: 'He invested such a big sum of money',
      ch: 'He invested such a big sum of money'
    },
    { id: 758,
      sntc: 'Bu ev ona məxsus idi',
      tr: 'This house belonged to him',
      ch: 'This house belonged to him'
    },
    { id: 759,
      sntc: 'Hər şeyi çox ətraflı təhlil etdik',
      tr: 'We analyzed everything very thoroughly',
      ch: 'We analyzed everything very thoroughly'
    },
    { id: 760,
      sntc: 'O, adətən axşam dincəlirdi',
      tr: 'He usually relaxed in the evening',
      ch: 'He usually relaxed in the evening'
    }],
    [{ id: 761,
      sntc: 'O, bu kinoya baxdı',
      tr: 'He watched this movie',
      ch: 'He watched this movie'
    },
    { id: 762,
      sntc: 'O, çox az pul buraxdı',
      tr: 'He invested too little money',
      ch: 'He invested too little money'
    },
    { id: 763,
      sntc: 'Onu çox ağır cinayətdə ittiham etdilər',
      tr: 'They accused him of a very serious crime',
      ch: 'They accused him of a very serious crime'
    },
    { id: 764,
      sntc: 'O, xaricdə təhsil alıb',
      tr: 'He studied abroad',
      ch: 'He studied abroad'
    },
    { id: 765,
      sntc: 'Mən fikrimi ifadə etdim',
      tr: 'I expressed my point of view',
      ch: 'I expressed my point of view'
    },
    { id: 766,
      sntc: 'Mən imtahana hazırlaşdım',
      tr: 'I prepared for the exam',
      ch: 'I prepared for the exam'
    },
    { id: 767,
      sntc: 'Bəzi gözlənilməz problemlərlə üzləşdik',
      tr: 'We faced some unexpected problems',
      ch: 'We faced some unexpected problems'
    },
    { id: 768,
      sntc: 'Onlar kəndi dağıtdılar',
      tr: 'They destroyed the village',
      ch: 'They destroyed the village'
    },
    { id: 769,
      sntc: 'O, bunu çox gec xatırladı',
      tr: 'He remembered it too late',
      ch: 'He remembered it too late'
    },
    { id: 770,
      sntc: 'Bu yerin yaxınlığında maşını saxlamışam',
      tr: 'I parked near this place',
      ch: 'I parked near this place'
    }],
    [{ id: 771,
      sntc: 'Mən onun bütün suallarına cavab verdim',
      tr: 'I answered all her questions',
      ch: 'I answered all her questions'
    },
    { id: 772,
      sntc: 'Onlar tələsdilər',
      tr: 'They hurried up',
      ch: 'They hurried up'
    },
    { id: 773,
      sntc: 'İngilis dilini burada öyrənməyə davam etdim',
      tr: 'I continued learning English here',
      ch: 'I continued learning English here'
    },
    { id: 774,
      sntc: 'Bu ev ona məxsus idi',
      tr: 'This house belonged to him',
      ch: 'This house belonged to him'
    },
    { id: 775,
      sntc: 'O, mənə uğurlar arzuladı',
      tr: 'He wished me good luck',
      ch: 'He wished me good luck'
    },
    { id: 776,
      sntc: 'Mən buradan bir az aralıda maşını saxladım',
      tr: 'I parked not far from here',
      ch: 'I parked not far from here'
    },
    { id: 777,
      sntc: 'Onlar bu şirkətlə yarışdılar',
      tr: 'They competed with this company',
      ch: 'They competed with this company'
    },
    { id: 778,
      sntc: 'Onun təklifi çox maraqlı səsləndi',
      tr: 'His offer sounded very interesting',
      ch: 'His offer sounded very interesting'
    },
    { id: 779,
      sntc: 'Hər şeyi çox ətraflı təhlil etdik',
      tr: 'We analyzed everything very thoroughly',
      ch: 'We analyzed everything very thoroughly'
    },
    { id: 780,
      sntc: 'O, onunla evləndi',
      tr: 'He married her',
      ch: 'He married her'
    }],
    [{ id: 781,
      sntc: 'O, binaya daxil oldu',
      tr: 'He entered the building',
      ch: 'He entered the building'
    },
    { id: 782,
      sntc: 'Onlar ona nəzarət etdilər',
      tr: 'They controlled him',
      ch: 'They controlled him'
    },
    { id: 783,
      sntc: 'O döndü və ona gülümsədi',
      tr: 'He turned and smiled at her',
      ch: 'He turned and smiled at her'
    },
    { id: 784,
      sntc: 'Onlar günahsız insanları öldürüblər',
      tr: 'They killed innocent people',
      ch: 'They killed innocent people'
    },
    { id: 785,
      sntc: 'Polis onları həbs etdi',
      tr: 'The police arrested them',
      ch: 'The police arrested them'
    },
    { id: 786,
      sntc: 'Onlar cinayətkarları cəzalandırdılar',
      tr: 'They punished the criminals',
      ch: 'They punished the criminals'
    },
    { id: 787,
      sntc: 'Onlar binanı dağıtdılar',
      tr: 'They destroyed the building',
      ch: 'They destroyed the building'
    },
    { id: 788,
      sntc: 'O, yenə ona zəng etdi',
      tr: 'He called her again',
      ch: 'He called her again'
    },
    { id: 789,
      sntc: 'Bu bizi çox təəccübləndirdi',
      tr: 'It surprised us greatly',
      ch: 'It surprised us greatly'
    },
    { id: 790,
      sntc: 'O, müxtəlif şeyləri müzakirə etmək üçün tez-tez mənə zəng edirdi',
      tr: 'She often called me to discuss different things',
      ch: 'She often called me to discuss different things'
    }],
    [{ id: 791,
      sntc: 'O, bu sənədi ingilis dilindən azərbaycan dilinə tərcümə edib',
      tr: 'He translated this document from English into Azerbaijani',
      ch: 'He translated this document from English into Azerbaijani'
    },
    { id: 792,
      sntc: 'Çox vacib bir şey əlavə etdim',
      tr: 'I added a very important thing',
      ch: 'I added a very important thing'
    },
    { id: 793,
      sntc: 'Onlar kinoya getməyi təklif etdilər',
      tr: 'They suggested going to the cinema',
      ch: 'They suggested going to the cinema'
    },
    { id: 794,
      sntc: 'O, ötən il onunla evləndi',
      tr: 'He married her last year',
      ch: 'He married her last year'
    },
    { id: 795,
      sntc: 'Bu problem məni həqiqətən narahat etdi',
      tr: 'This problem really worried me',
      ch: 'This problem really worried me'
    },
    { id: 796,
      sntc: 'Biz çox intensiv təlim keçirdik',
      tr: 'We trained very intensively',
      ch: 'We trained very intensively'
    },
    { id: 797,
      sntc: 'O, bu universitetə qəbul oldu',
      tr: 'She entered this university',
      ch: 'She entered this university'
    },
    { id: 798,
      sntc: 'Bu problemi təsvir etdim',
      tr: 'I described this problem',
      ch: 'I described this problem'
    },
    { id: 799,
      sntc: 'O, ona kömək etməyə çalışsa da, heç bir uğur qazana bilmədi',
      tr: 'He tried to help her but without success',
      ch: 'He tried to help her but without success'
    },
    { id: 800,
      sntc: 'Onun müdiri tez-tez onu tənqid edirdi',
      tr: 'Her boss often criticized her',
      ch: 'Her boss often criticized her'
    }],
    
  ],
};

// let obj=[];

// for (let i=40;i<50; i++){
//     for(let a=0; a<initialState.lessons[0][0].length; a++){
//         // obj.id=initialState.lessons[0][i][a].id
//         obj.push(initialState.lessons[0][i][a].tr)
//     }
// }
// setTimeout(() => {
//   console.log(obj)
// }, 1000)

const theory = (state = initialState, action) => {
  return state
}

export default theory