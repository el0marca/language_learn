const initialState={
    lessons: [[
      [{
            id:'1',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Mən burada təhsil alıram',
            tr: 'I study here'             
        },
        {
            id:'2',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Mən səni başa düşürəm',
            tr: 'I understand you'
        },
        {
            id:'3',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Mən orada işləyirəm',
            tr: 'I work there'
        },
        {
            id:'4',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Sən bunu bilirsən',
            tr: 'You know it'
        },
        {
            id:'5',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Biz orada işləyirik',
            tr: 'We work there'
        },
        {
            id:'6',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel+s ...',
            sntc: 'O, İngilis dilində danışır',
            tr: 'He speaks English'
        },
        {
            id:'7',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel+s ...',
            sntc: 'O, burada yaşayır',
            tr: 'She lives here'
        },
        {
            id:'8',
            descr: 'İngilis dilində ən sadə cümlələr mübtəda + fel (xəbər) köməyi ilə formalaşır',
            expl: 'Şəxs\u00A0əvəzliyi fel+s ...',
            sntc: 'Bu mənə kömək edir',
            tr: 'It helps me'
        },
        {
            id:'9',
            descr: 'Adətən isimlərin cəm halını bildirmək üçün -s əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel+s isim+s',
            sntc: 'O, kitabları xoşlayır',
            tr: 'He likes books'
        },
        {
            id:'10',
            descr: '‘Also’ adətən əvəzlikdən sonra yerləşir. ‘So’ sözünün müxtəlif mənası var. Əgər bu sözlə ‘belə’ demək istəyiriksə ‘so’ cümlənin sonunda yer tutur',
            expl: 'Şəxs\u00A0əvəzliyi also fel+s so',
            sntc: 'O da belə düşünür',
            tr: 'She also thinks so'
        },
    ],
[
        {
            id:'11',
            descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim sait səslə başlayırsa an artikl istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel an ...',
            sntc: 'Məndə alma var',
            tr: 'I have an apple'             
        },
        {
            id:'12',
            descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında qoyulur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel a ...',
            sntc: 'Mənim bacım var',
            tr: 'I have a sister'
        },
        {
            id:'13',
            descr: 'Qeyri-müəyyən artikla a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Onların pulu var',
            tr: 'They have money'
        },
        {
            id:'14',
            descr: 'A(an) artikl sifətdən öncə istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel an sifət ...',
            sntc: 'Mənim maraqlı fikrim var',
            tr: 'I have an interesting idea'
        },
        {
            id:'15',
            descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi also fel ...',
            sntc: 'Onun da pulu var',
            tr: 'He also has money'
        },
        {
            id:'16',
            descr: 'Qeyri-müəyyən artikl a(an)-bir cəm isimlərlə istifadə olunmur',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Mənim kitablarım var',
            tr: 'I have books'
        },
        {
            id:'17',
            descr: 'Qeyri-müəyyən artikl a(an)-bir yalnız sayılan isimlərin qarşısında istifadə olunur. Əgər isim samit səslə başlayırsa a artikl istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel a ...',
            sntc: 'Onun maşını var',
            tr: 'He has a car'
        },
        {
            id:'18',
            descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
            expl: 'Şəxs\u00A0əvəzliyi fel+s in işarə\u00A0əvəzliyi ...',
            sntc: 'O bu evdə yaşayır',
            tr: 'He lives in this house'
        },
        {
            id:'19',
            descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
            expl: 'Şəxs\u00A0əvəzliyi fel+s in işarə\u00A0əvəzliyi ...',
            sntc: 'O bu yerdə işləyir',
            tr: 'She works in this place'
        },
        {
            id:'20',
            descr: 'Qeyri-müəyyən artikl a(an)-bir işarə əvəzliklərlə birgə istifadə olunmur',
            expl: 'Şəxs\u00A0əvəzliyi fel in işarə\u00A0əvəzliyi ...',
            sntc: 'Onlar bu şəhərdə yaşayırlar',
            tr: 'They live in this city'
        },
    ],
    [
        {
            id:'21',
            descr: '‘He/She/It + fel’ konstruksiyada fel ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
            sntc: 'O, məktəbə gedir',
            tr: 'He goes to school'             
        },
        {
            id:'22',
            descr: '‘He/She/It + fel’ konstruksiyada fel ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
            sntc: 'O, televizora baxır',
            tr: 'She watches TV'
        },
        {
            id:'23',
            descr: '‘He/She/It + fel’ konstruksiyada fel ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
            sntc: 'O, sənin üçün darıxır',
            tr: 'He misses you'
        },
        {
            id:'24',
            descr: '‘He/She/It + fel’ konstruksiyada fel ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel ...',
            sntc: 'Sən bunu bilirsən',
            tr: 'You know it'
        },
        {
            id:'25',
            descr: 'Often adətən əvəzlikdən sonra yer tutur',
            expl: 'Şəxs\u00A0əvəzliyi often fel+es ...',
            sntc: 'O, tez-tez kinoya gedir',
            tr: 'She often goes to the cinema'
        },
        {
            id:'26',
            descr: 'Very sözü ilə işlədilən ifadələr adətən cümlənin sonunda yerləşirlər',
            expl: 'Şəxs\u00A0əvəzliyi fel+es ... very well',
            sntc: 'O, bunu çox yaxşı edir',
            tr: 'He does it very well'
        },
        {
            id:'27',
            descr: '‘He/She/It + fel’ konstruksiyada fel ‘o,ch,ss,sh,x’ hərflər ilə bitəndə -es əlavə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
            sntc: 'O, İngilis dilini öyrədir',
            tr: 'She teaches English'
        },
        {
            id:'28',
            descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
            expl: 'Şəxs\u00A0əvəzliyi fel+s ...',
            sntc: 'Onun evi var',
            tr: 'He has a house'
        },
        {
            id:'29',
            descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
            expl: 'Şəxs\u00A0əvəzliyi fel+s ...',
            sntc: 'Onun dolları var',
            tr: 'She has dollars'
        },
        {
            id:'30',
            descr: 'He/She/It sözlərlə have has ilə əvəzlənir',
            expl: 'Şəxs\u00A0əvəzliyi fel+s a ...',
            sntc: 'Onun maşını var',
            tr: 'He has a car'
        },
    ],
    [
        {
            id:'31',
            descr: 'Əvəzliklərin istifadə qaydaları. I => my',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Mənim dostum hər şeyi bilir',
            tr: 'My friend knows everything'
        },
        {
            id:'32',
            descr: 'Aşağıdaki nümunədə müəyyən artikl (the) ayrı obyekti eyni tipdə olan obyektlərdən fərqləndirir. All the information - bütün (müəyyən) məlumatlar',
            expl: '... all the information',
            sntc: 'Mənim bacım adətən bütün məlumatları yoxlayır',
            tr: 'My sister usually checks all the information'
        },
        {
            id:'33',
            descr: 'Əvəzliklərin istifadə qaydaları. they => their',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Onların evi böyük görünür',
            tr: 'Their house seems big'
        },
        {
            id:'34',
            descr: 'İngilis dilində müəyyən artikl (the) köməyi ilə formalaşan çoxlu sayda sabit ifadələr var',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... the same',
            sntc: 'Bizim müəllimimiz də eyni fikirdədir',
            tr: 'Our teacher thinks the same'
        },
        {
            id:'35',
            descr: 'Əvəzliklərin istifadə qaydaları. we => our',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Bizim anamız işə gedir',
            tr: 'Our mother goes to work'
        },
        {
            id:'36',
            descr: 'Əvəzliklərin istifadə qaydaları. I => my',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... always fel ...',
            sntc: 'Mənim dostlarım həmişə mənə dəstək olur',
            tr: 'My friends always support me'
        },
        {
            id:'37',
            descr: 'Əvəzliklərin istifadə qaydaları. he => his',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+es ...',
            sntc: 'Onun bacısı məktəbə gedir',
            tr: 'His sister goes to school'
        },
        {
            id:'38',
            descr: 'Əvəzliklərin istifadə qaydaları. she => her',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Onun sözləri qəribə gəlir',
            tr: 'Her words seem strange'
        },
        {
            id:'39',
            descr: 'Əvəzliklərin istifadə qaydaları. she => her',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Onun anası orada işləyir',
            tr: 'Her mother works there'
        },
        {
            id:'40',
            descr: '‘It’ sözü əşya və heyvana istinad etmək üçün istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi fel a ... Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Onun şirkəti var. Onun gəliri böyük görünür',
            tr: 'She has a company. Its profit seems big'
        },
    ],
    [
        {
            id:'41',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'All yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ...',
            sntc: 'Bütün ideyaların maraqlı gəlir',
            tr: 'All your ideas seem interesting'
        },
        {
            id:'42',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'Sənin maşının kiçik görünür',
            tr: 'Your car looks small'
        },
        {
            id:'43',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel+s ...',
            sntc: 'İdeyanız yaxşı görünür',
            tr: 'Your idea seems good'
        },
        {
            id:'44',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
            sntc: 'Sənin evin xoşuma gəlir',
            tr: 'I like your house'
        },
        {
            id:'45',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel+s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
            sntc: 'O, sənin maşınını bəyənir',
            tr: 'He likes your car'
        },
        {
            id:'46',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel işarə\u00A0əvəzliyi ...',
            sntc: 'Mən o adamı tanıyıram',
            tr: 'I know that person'
        },
        {
            id:'47',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel işarə\u00A0əvəzliyi ...',
            sntc: 'Mən o adamları başa düşürəm',
            tr: 'I understand those people'
        },
        {
            id:'48',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel+s işarə\u00A0əvəzliyi ...',
            sntc: 'O, bu şeyləri xoşlaryır',
            tr: 'She likes these things'
        },
        {
            id:'49',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel+s işarə\u00A0əvəzliyi ...',
            sntc: 'O, bu maşını görür',
            tr: 'He sees this car'
        },
        {
            id:'50',
            descr: 'Əvəzliklərin istifadə qaydaları',
            expl: 'Şəxs\u00A0əvəzliyi fel işarə\u00A0əvəzliyi ...',
            sntc: 'Mən o evləri görürəm',
            tr: 'I see those houses'
        },
    ],
    [
        {
            id:'51',
            descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. A(an) artikl sifətdən öncə istifadə olunur',
            expl: 'Şəxs\u00A0əvəzliyi want a sifət ...',
            sntc: 'Mən yeni maşın istəyirəm',
            tr: 'I want a new car'             
        },
        {
            id:'52',
            descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. Really adətən əvəzlikdən sonra yer tutur',
            expl: 'Şəxs\u00A0əvəzliyi really want ...',
            sntc: 'Mən həqiqətən bunu istəyirəm',
            tr: 'I really want it'
        },
        {
            id:'53',
            descr: 'Arzunu ifadə etmək üçün ‘want’ sözünü işlətin. ',
            expl: 'Şəxs\u00A0əvəzliyi want a sifət ...',
            sntc: 'Mən yeni ev istəyirəm',
            tr: 'I want a new house'
        },
        {
            id:'54',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ konstruksiyanı işlətin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel',
            sntc: 'Mən təhsil almaq istəyirəm',
            tr: 'I want to study'
        },
        {
            id:'55',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ konstruksiyanı işlətin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel',
            sntc: 'Mən yemək istəyirəm',
            tr: 'I want to eat'
        },
        {
            id:'56',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ konstruksiyanı işlətin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel ...',
            sntc: 'Mən bunu bilmək istəyirəm',
            tr: 'I want to know it'
        },
        {
            id:'57',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ konstruksiyanı işlətin. Really adətən əvəzlikdən sonra yerləşir',
            expl: 'Şəxs\u00A0əvəzliyi really want to fel',
            sntc: 'Mən həqiqətən bunu etmək istəyirəm',
            tr: 'I really want to do it'
        },
        {
            id:'58',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ istifadə edin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel',
            sntc: 'Mən İngilis dilində daha yaxşı danışmaq istəyirəm',
            tr: 'I want to speak English better'
        },
        {
            id:'59',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ istifadə edin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel a sifət ...',
            sntc: 'Mən yaxşı maşına sahib olmaq istəyirəm',
            tr: 'I want to have a good car'
        },
        {
            id:'60',
            descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ istifadə edin',
            expl: 'Şəxs\u00A0əvəzliyi want to fel a sifət ...',
            sntc: 'Mən yaxşı iş sahibi olmaq istəyirəm',
            tr: 'I want to have a good job'
        }],
        [{
            id: 61,
            descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi like ...',
            sntc: 'Mən bunu xoşlayıram',
            tr: 'I like it'
          },
          {
            id: 62,
            descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi like ...',
            sntc: 'Biz sənin dərslərini bəyənirik',
            tr: 'We like your lessons'
          },
          {
            id: 63,
            descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi like ...',
            sntc: 'Bu video xoşuma gəlir',
            tr: 'I like this video'
          },
          {
            id: 64,
            descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi really like ...',
            sntc: 'Mən həqiqətən bunu xoşlayıram',
            tr: 'I really like it'
          },
          {
            id: 65,
            descr: 'Bir şeyi etməyi xoşuna gəldiyini ifadə etmək üçün ‘I like to’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi really like to ...',
            sntc: 'Mən həqiqətən bunu etməyi xoşlayıram',
            tr: 'I really like to do it'
          },
          {
            id: 66,
            descr: 'Bir şeyi bəyəndiyini ifadə etmək üçün ‘I like’ konstruksiyasını işlətin',
            expl: 'Şəxs\u00A0əvəzliyi also like+s ...',
            sntc: 'Bu dərs onun da xoşuna gəlir',
            tr: 'She also likes this lesson'
          },
          {
            id: 67,
            descr: 'Mən istərdim konstruksiyası:',
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
            descr: 'Mən etmək istərdim konstruksiyası:' ,
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
          }],
         [ {
            id: 71,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi don’t fel',
            sntc: 'Mən bilmirəm',
            tr: 'I don’t know'
          },
          {
            id: 72,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi don’t fel',
            sntc: 'Biz başa düşmürük',
            tr: 'We don’t understand'
          },
          {
            id: 73,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi don’t fel ...',
            sntc: 'Mən İngilis dilini öyrənməyə çalışmıram',
            tr: 'I don’t try to learn English'
          },
          {
            id: 74,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi don’t fel ...',
            sntc: 'Sən mənə kömək etmirsən',
            tr: 'You don’t help me'
          },
          {
            id: 75,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi don’t fel ...',
            sntc: 'Mən səninlə razı deyiləm',
            tr: 'I don’t agree with you'
          },
          {
            id: 76,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
            sntc: 'O, bunu bilmir',
            tr: "He doesn't know it"
          },
          {
            id: 77,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
            sntc: 'O, bunu müzakirə etmək istəmir',
            tr: 'She doesn’t want to discuss it'
          },
          {
            id: 78,
            descr: 'İndiki sadə zamanda inkare tmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
            sntc: 'Bu mənə kömək etmir',
            tr: 'It doesn’t help me'
          },
          {
            id: 79,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
            sntc: 'Bu qəribə gəlmir',
            tr: 'It doesn’t seem strange'
          },
          {
            id: 80,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'Şəxs\u00A0əvəzliyi doesn’t fel',
            sntc: 'Bu işləmir',
            tr: 'It doesn’t work'
          }],
          [{
            id: 81,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... doesn’t fel ...',
            sntc: 'Bu şəhər böyük görünmür',
            tr: 'This city doesn’t seem big'
          },
          {
            id: 82,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... doesn’t fel ...',
            sntc: 'Bu maşın böyük görünmür',
            tr: 'This car doesn’t seem big'
          },
          {
            id: 83,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... don’t fel ...',
            sntc: 'Bu şeylər məni maraqlandırmır',
            tr: 'These things don’t interest me'
          },
          {
            id: 84,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... don’t fel ...',
            sntc: 'Bu dərslər faydalı görünmür',
            tr: 'These lessons don’t seem useful'
          },
          {
            id: 85,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... don’t fel ...',
            sntc: 'Bu şeylər məni cəlb etmir',
            tr: 'These things don’t attract me'
          },
          {
            id: 86,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... doesn’t fel ...',
            sntc: 'O, üsul maraqlı gəlmir',
            tr: 'That method doesn’t seem interesting'
          },
          {
            id: 87,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... doesn’t fel ...',
            sntc: 'O, insan xoşbəxt görünmür',
            tr: 'That person doesn’t look happy'
          },
          {
            id: 88,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... doesn’t fel ...',
            sntc: 'O şey maraqlı gəlmir',
            tr: 'That thing doesn’t seem interesting'
          },
          {
            id: 89,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... don’t fel ...',
            sntc: 'O şeylər qəribə gəlmir',
            tr: 'Those things don’t seem strange'
          },
          {
            id: 90,
            descr: 'İndiki sadə zamanda inkar etmək üçün do not(don’t) və yaxud does not(doesn’t) işlədilir',
            expl: 'İşarə\u00A0əvəzliyi ... don’t fel ...',
            sntc: 'O dərslər faydalı görünmür',
            tr: 'Those lessons don’t seem useful'
          }],
         [ {
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
          }],
          [{
            id: 101,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Sən bunu bilirsən?',
            tr: 'Do you know it?'
          },
          {
            id: 102,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Mən səhvlər edirəm?',
            tr: 'Do I make mistakes?'
          },
          {
            id: 103,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Sən məni anlayırsan?',
            tr: 'Do you understand me?'
          },
          {
            id: 104,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Sən mənimlə razısan?',
            tr: 'Do you agree with me?'
          },
          {
            id: 105,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Sən mənə dəstəksən?',
            tr: 'Do you support me?'
          },
          {
            id: 106,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Onların köməyə ehtiyacları var?',
            tr: 'Do they need help?'
          },
          {
            id: 107,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Sən mənim qərarımı dəstəkləyirsən?',
            tr: 'Do you support my decision?'
          },
          {
            id: 108,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi often fel ... ?',
            sntc: 'Onlar bunu tez-tez müzakirə edirlər?',
            tr: 'Do they often discuss it?'
          },
          {
            id: 109,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Bizim kifayət qədər biliyimiz var?',
            tr: 'Do we have enough knowledge?'
          },
          {
            id: 110,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Bizim kifayət qədər praktikamız var?',
            tr: 'Do we have enough practice?'
          }],
          [{
            id: 111,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'O, hər şeyi ona deyir?',
            tr: 'Does she tell him everything?'
          },
          {
            id: 112,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
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
            expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Ona ora gəlmək lazımdır?',
            tr: 'Does she need to come there?'
          },
          {
            id: 115,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
            sntc: 'Ona bunu etmək lazımdır?',
            tr: 'Does she need to do it?'
          },
          {
            id: 116,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi fel a sifət ... ?',
            sntc: 'O, yeni iş tapmağa çalışır?',
            tr: 'Does he try to find a new job?'
          },
          {
            id: 117,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi often fel ... ?',
            sntc: 'O, tez-tez bunu istifadə edir?',
            tr: 'Does she often use it?'
          },
          {
            id: 118,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi often fel ... ?',
            sntc: 'O, tez-tez televizora baxır?',
            tr: 'Does he often watch TV?'
          },
          {
            id: 119,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi often fel ... ?',
            sntc: 'O, tez-tez radioya qulaq asır?',
            tr: 'Does he often listen to the radio?'
          },
          {
            id: 120,
            descr: 'Indiki sadə zamanda sual',
            expl: 'Does şəxs\u00A0əvəzliyi often fel ... ?',
            sntc: 'O, bunu tez-tez eşidir?',
            tr: 'Does he often hear it?'
          },
    ],
    [{
      id: 121,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu dərs faydalı görünür?',
      tr: 'Does this lesson seem useful?'
    },
    {
      id: 122,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel very ... ?',
      sntc: 'Bu üsul çox maraqlı gəlir?',
      tr: 'Does this method seem very interesting?'
    },
    {
      id: 123,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel ... very ... ?',
      sntc: 'Bu müəllim hər şeyi çox yaxşı izah edir?',
      tr: 'Does this teacher explain everything very well?'
    },
    {
      id: 124,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu məlumat faydasız görünür?',
      tr: 'Does this information seem useless?'
    },
    {
      id: 125,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu şey vacib görünür?',
      tr: 'Does this thing seem important?'
    },
    {
      id: 126,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə\u00A0əvəzliyi ... fel şəxs\u00A0əvəzliyi?',
      sntc: 'Bu dərslər sənə kömək edir?',
      tr: 'Do these lessons help you?'
    },
    {
      id: 127,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu tələbələr əla nəticələr göstərirlər?',
      tr: 'Do these students show excellent results?'
    },
    {
      id: 128,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'O tələbələr İngilis dilində düzgün danışır?',
      tr: 'Do those students speak English correctly?'
    },
    {
      id: 129,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu şeylər sənə kömək edir?',
      tr: 'Do these things help you?'
    },
    {
      id: 130,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu dərslər faydalı görünür?',
      tr: 'Do these lessons seem useful?'
    }],
    [{
      id: 131,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin dostun sənə kömək edir?',
      tr: 'Does your friend help you?'
    },
    {
      id: 132,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Onların dostu onlara kömək edir?',
      tr: 'Does their friend help them?'
    },
    {
      id: 133,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Mənim dostlarım mənə dəstək olurlar?',
      tr: 'Do my friends support me?'
    },
    {
      id: 134,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin dostların sənə dəstək olurlar?',
      tr: 'Do your friends support you?'
    },
    {
      id: 135,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu insanın bizim köməyimizə ehtiyacı var?',
      tr: 'Does this person need our help?'
    },
    {
      id: 136,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu nəticə səndən asılıdır?',
      tr: 'Does this result depend on you?'
    },
    {
      id: 137,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu tapşırıq çox asan gəlir?',
      tr: 'Does this exercise seem too easy?'
    },
    {
      id: 138,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu məlumat faydalı görünür?',
      tr: 'Does this information seem useful?'
    },
    {
      id: 139,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Do işarə⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'O dərslər faydalı görünür?',
      tr: 'Do those lessons seem useful?'
    },
    {
      id: 140,
      descr: 'Indiki sadə zamanda sual',
      expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Onun müəllimi onun bütün səhvlərini düzəldir?',
      tr: 'Does his teacher correct all his mistakes?'
    }],
    [{
      id: 141,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən harada yaşayırsan?',
      tr: 'Where do you live?'
    },
    {
      id: 142,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel so?',
      sntc: 'Sən niyə belə düşünürsən?',
      tr: 'Why do you think so?'
    },
    {
      id: 143,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən bu fikri necə görürsən?',
      tr: 'How do you find this idea?'
    },
    {
      id: 144,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sənin ne vaxt boş vaxtın olur?',
      tr: 'When do you have free time?'
    },
    {
      id: 145,
      descr: 'Present simple (Special Question)',
      expl: 'What kind of ... do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən hansı növ kitabları oxuyursan?',
      tr: 'What kind of books do you read?'
    },
    {
      id: 146,
      descr: 'Present simple (Special Question)',
      expl: 'How much ... do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sənin üstündə nə qədər pulun var?',
      tr: 'How much money do you have with you?'
    },
    {
      id: 147,
      descr: 'Present simple (Special Question)',
      expl: 'What time ... do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən nə vaxt qalxırsan?',
      tr: 'What time do you get up?'
    },
    {
      id: 148,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən hara gedirsən?',
      tr: 'Where do you go?'
    },
    {
      id: 149,
      descr: 'Present simple (Special Question)',
      expl: 'What time ... do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən nə vaxt yatırsan?',
      tr: 'What time do you go to bed?'
    },
    {
      id: 150,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz fel+s ... ?',
      sntc: 'Mənə kim dəstək olur?',
      tr: 'Who supports me?'
    }],
    [{
      id: 151,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel?',
      sntc: 'O, harada işləyir?',
      tr: 'Where does she work?'
    },
    {
      id: 152,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, niyə belə tez-tez şikayət edir?',
      tr: 'Why does he complain so often?'
    },
    {
      id: 153,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, niyə pul ödəməkdən imtina edir?',
      tr: 'Why does he refuse to pay?'
    },
    {
      id: 154,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, nə əlavə etmək istəyir?',
      tr: 'What does he want to add?'
    },
    {
      id: 155,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, sizə necə dayaq olur?',
      tr: 'How does he support you?'
    },
    {
      id: 156,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, özünü nə vaxt xoşbəxt hiss edir?',
      tr: 'When does he feel happy?'
    },
    {
      id: 157,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz ... does şəxs\u00A0əvəzliyi fel?',
      sntc: 'O, hansı içkiyə üstünlük verir?',
      tr: 'What drink does he prefer?'
    },
    {
      id: 158,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz ... does şəxs\u00A0əvəzliyi usually fel?',
      sntc: 'O, adətən hansı kanala baxır?',
      tr: 'Which channel does he usually watch?'
    },
    {
      id: 159,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz ... do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən İngilis dilini nə qədər müntəzəm öyrənirsən?',
      tr: 'How regularly do you learn English?'
    },
    {
      id: 160,
      descr: 'Present simple (Special Question)',
      expl: 'How long does it take şəxs\u00A0əvəzliyi ... ?',
      sntc: 'İşə çatmaq səndən nə qədər vaxt alır?',
      tr: 'How long does it take you to get to work?'
    }],
    [{
      id: 161,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel?',
      sntc: 'Sənin atan harada işləyir?',
      tr: 'Where does your father work?'
    },
    {
      id: 162,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin dostların nə üçün səninlə razılaşmır?',
      tr: 'Why do your friends disagree with you?'
    },
    {
      id: 163,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin dostların bunu necə idarə edir?',
      tr: 'How do your friends control it?'
    },
    {
      id: 164,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi fel ... ?',
      sntc: 'Senin atan evi nə vaxt tərk edir?',
      tr: 'When does your father leave home?'
    },
    {
      id: 165,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do İşarə\u00A0əvəzliyi ... fel?',
      sntc: 'Bu şeylər nə vaxt baş verir?',
      tr: 'When do these things happen?'
    },
    {
      id: 166,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... usually fel?',
      sntc: 'Sənin dostların adətən nə sifariş edir?',
      tr: 'What do your friends usually order?'
    },
    {
      id: 167,
      descr: 'Present simple (Special Question)',
      expl: 'Sual\u00A0söz ... do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin müəllimlərin sənə nə məsləhət verirlər?',
      tr: 'What advice do your teachers give you?'
    },
    {
      id: 168,
      descr: 'Present simple (Special Question)',
      expl: 'What kind of ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel?',
      sntc: 'Onun müəllimi necə nümunələr göstərir?',
      tr: 'What kind of examples does his teacher give?'
    },
    {
      id: 169,
      descr: 'Present simple (Special Question). Sayılmayan isimlərlə:',
      expl: 'How much ... ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel?',
      sntc: 'Sənin biznes yoldaşının nə qədər boş vaxtı var?',
      tr: 'How much free time does your business partner have?'
    },
    {
      id: 170,
      descr: 'Present simple (Special Question). Sayılan isimlərlə:',
      expl: 'How many ... does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Sənin dostların nə qədər İngilis sözünü bilmək istəyirlər?',
      tr: 'How many English words does your friends want to know?'
    }],
    [{
      id: 171,
      descr: 'Present Simple',
      expl: 'Şəxs\u00A0əvəzliyi fel ...',
      sntc: 'Mən bunu çox yaxşı başa düşürəm',
      tr: 'I understand it very well'
    },
    {
      id: 172,
      descr: 'Present Simple',
      expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
      sntc: 'O, məktəbə böyük məmnuniyyətlə gedir',
      tr: 'She goes to school with great pleasure'
    },
    {
      id: 173,
      descr: 'Present Simple',
      expl: 'Şəxs\u00A0əvəzliyi really fel+s ...',
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
      expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
      sntc: 'Bu məni ruhlandırmır',
      tr: "It doesn't inspire me"
    },
    {
      id: 176,
      descr: 'Present Simple Negative form',
      expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
      sntc: 'O bu ideyanı xoşlamır',
      tr: "She doesn't like this idea"
    },
    {
      id: 177,
      descr: 'Present Simple Question',
      expl: 'Do Şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Biz İngilis dilində səhv etmədən danışırıq?',
      tr: 'Do we speak English without mistakes?'
    },
    {
      id: 178,
      descr: 'Present Simple Question',
      expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu sənin dostlarının xoşuna gəlir?',
      tr: 'Do your friends like it?'
    },
    {
      id: 179,
      descr: 'Present Simple Question',
      expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, bunu almaq istəyir?',
      tr: 'Does she want to buy it?'
    },
    {
      id: 180,
      descr: 'Present Simple Question',
      expl: 'Does yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu sənin dostunun xoşuna gəlir?',
      tr: 'Does your friend like it?'
    }],
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
      expl: 'Şəxs\u00A0əvəzliyi fel ...',
      sntc: 'Mən işə gedirəm',
      tr: 'I go to work'
    },
    {
      id: 183,
      descr: 'Present Simple',
      expl: 'Şəxs\u00A0əvəzliyi fel+es ...',
      sntc: 'O, işə gedir',
      tr: 'He goes to work'
    },
    {
      id: 184,
      descr: 'Present Simple Negative form',
      expl: 'Şəxs\u00A0əvəzliyi don’t fel ...',
      sntc: 'Mən orada təhsil almaq istəmirəm',
      tr: "I don't want to study there"
    },
    {
      id: 185,
      descr: 'Present Simple Negative form',
      expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ...',
      sntc: 'Bu faydalı görünmür',
      tr: "It doesn't seem useful"
    },
    {
      id: 186,
      descr: 'Present Simple Negative form',
      expl: 'Şəxs\u00A0əvəzliyi doesn’t fel ... ',
      sntc: 'Bu məni ruhlandırmır',
      tr: "It doesn't inspire me"
    },
    {
      id: 187,
      descr: 'Present Simple Question',
      expl: 'Do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən məni dəstəkləyirsən?',
      tr: 'Do you support me?'
    },
    {
      id: 188,
      descr: 'Present Simple Question',
      expl: 'Do yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... fel ... ?',
      sntc: 'Bu sənin dostlarınin xoşuna gəlir?',
      tr: 'Do your friends like it?'
    },
    {
      id: 189,
      descr: 'Present Simple Question',
      expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, səninlə razıdır?',
      tr: 'Does he agree with you?'
    },
    {
      id: 190,
      descr: 'Present Simple Question',
      expl: 'Does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, bu şeyə nifrət edir?',
      tr: 'Does he hate this thing?'
    }],
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
      expl: 'Şəxs\u00A0əvəzliyi would like to fel ...',
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
      descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ istifadə edin',
      expl: 'Şəxs\u00A0əvəzliyi want to ...',
      sntc: 'Mən bunu etmək istəyirəm ',
      tr: 'I want to do it'
    },
    {
      id: 198,
      descr: 'Bir şey etmək arzusunu bildirmək üçün ‘want to + fel’ istifadə edin',
      expl: 'Şəxs\u00A0əvəzliyi want to fel ...',
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
    }],
    [{
      id: 201,
      descr: 'Special Quetions',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən niyə İngilis dilini öyrənirsən?',
      tr: 'Why do you learn English?'
    },
    {
      id: 202,
      descr: 'Special Quetions',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Sən bu barədə nə düşünürsən?',
      tr: 'What do you think about it?'
    },
    {
      id: 203,
      descr: 'Special Quetions. Who (kimi? kimə?)',
      expl: 'Sual\u00A0söz do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən kimi tanıyırsan?',
      tr: 'Who do you know?'
    },
    {
      id: 204,
      descr: 'Who (kimi? kimə?)',
      expl: 'Sual\u00A0söz does şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'O, kimə təşəkkür etmək istəyir',
      tr: 'Who does she want to thank'
    },
    {
      id: 205,
      descr: 'Special Quetions. Who (kim?)',
      expl: 'Sual\u00A0söz fel ... ?',
      sntc: 'Bunu kim bilir?',
      tr: 'Who knows it?'
    },
    {
      id: 206,
      descr: 'Special Quetions. Who (kim?)',
      expl: 'Sual\u00A0söz fel ... ?',
      sntc: 'Bunu kim görür?',
      tr: 'Who sees it?'
    },
    {
      id: 207,
      descr: 'Special Quetions',
      expl: 'Sual\u00A0söz ... do şəxs\u00A0əvəzliyi fel ... ?',
      sntc: 'Evdə hansı İngilis kitabların var?',
      tr: 'What English books do you have at home?'
    },
    {
      id: 208,
      descr: 'Special Quetions',
      expl: 'What kind of ... do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən hansı musiqini bəyənirsən?',
      tr: 'What kind of music do you like?'
    },
    {
      id: 209,
      descr: 'Sayılmayan isimlərlə',
      expl: 'How much ... do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sənin nə qədər boş vaxtın var?',
      tr: 'How much free time do you have?'
    },
    {
      id: 210,
      descr: 'Sayılan isimlərlə',
      expl: 'How many ... do şəxs\u00A0əvəzliyi fel?',
      sntc: 'Sən neçə İngilis sözü bilirsən?',
      tr: 'How many English words do you know?'
    }],
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
      expl: 'Şəxs\u00A0əvəzliyi often fel+s ...',
      sntc: 'O, bu barədə məndən tez-tez soruşur',
      tr: 'He often asks me about it'
    },
    {
      id: 215,
      descr: 'Always/often/usually adətən əvəzlikdən sonra yer tuturlar. İstisna hal:',
      expl: 'How often do şəxs\u00A0əvəzliyi fel ...',
      sntc: 'Sən nə qədər tez-tez kinoya gedirsən?',
      tr: 'How often do you go to the cinema?'
    },
    {
      id: 216,
      descr: 'Always/often/usually adətən əvəzlikdən sonra yer tuturlar',
      expl: '... şəxs\u00A0əvəzliyi usually fel ... ?',
      sntc: 'O, adətən evə nə vaxt gəlir?',
      tr: 'What time does he usually come home?'
    },
    {
      id: 217,
      descr: '‘Also’ adətən əvəzlikdən sonra yer tutur, ‘too’ isə cümlənin sonunda',
      expl: 'Şəxs\u00A0əvəzliyi also fel ...',
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
      expl: 'Şəxs\u00A0əvəzliyi fel to tell şəxs\u00A0əvəzliyi ...',
      sntc: 'Sənə bu şeyi demək istəyirəm',
      tr: 'I want to tell you this thing'
    },
    {
      id: 220,
      descr: 'Say / tell – demək. ‘say’ - nesə demək , ‘tell’ - kiməsə nesə demək',
      expl: 'Şəxs\u00A0əvəzliyi fel to say it',
      sntc: 'Mən bunu demək istəyirəm',
      tr: 'I want to say it'
    }],
    [{
      id: 221,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi am ... qısa\u00A0forma => I’m ...',
      sntc: 'Mən evdəyəm',
      tr: 'I at home'
    },
    {
      id: 222,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi am ... qısa\u00A0forma => I’m ...',
      sntc: 'Mən xoşbəxtəm',
      tr: 'I am happy'
    },
    {
      id: 223,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => We’re ...',
      sntc: 'Biz evdəyik',
      tr: 'We are at home'
    },
    {
      id: 224,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => You’re ...',
      sntc: 'Sən məktəbdəsən',
      tr: 'You are at school'
    },
    {
      id: 225,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ forma istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => They’re ...',
      sntc: 'Onlar evdədirlər',
      tr: 'They are at home'
    },
    {
      id: 226,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi are ... qısa\u00A0forma => They’re ...',
      sntc: 'Onlar zəngindirlər',
      tr: 'They are rich'
    },
    {
      id: 227,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => She’s ...',
      sntc: 'O, yaxşı insandır',
      tr: 'She is a good person'
    },
    {
      id: 228,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => She’s ...',
      sntc: 'O, evdədir',
      tr: 'She is at home'
    },
    {
      id: 229,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => He’s ...',
      sntc: 'O, məktəbdədir',
      tr: 'He is at school'
    },
    {
      id: 230,
      descr: 'İngilis dilində fel olmayan cümlələrdə ‘to be’ fel forması istifadə olunur',
      expl: 'Şəxs\u00A0əvəzliyi is ... qısa\u00A0forma => It’s ...',
      sntc: 'O, evdədir',
      tr: 'It is at home'
    }],
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
      descr: 'Hava haqqında demək üçün ‘to be’ fel forması istifadə olunur. Məsələn:',
      expl: 'It is cold – Soyuqdur',
      sntc: 'İstidir',
      tr: 'It is warm' 
    },
    { id: 236, 
      descr: 'Hava haqqında demək üçün ‘to be’ fel forması istifadə olunur. Məsələn:',
      expl: 'It is sunny – Günəşlidir',
      sntc: 'Qaranlıqdır',
      tr: 'It is dark' 
    },
    {
      id: 237,
      descr: 'Hava haqqında demək üçün ‘to be’ fel forması istifadə olunur. Məsələn:',
      expl: 'It is a rainy day – Yağışlı gündür',
      sntc: 'Soyuq gündür',
      tr: 'It is a cold day'
    },
    {
      id: 238,
      descr: 'Hava haqqında demək üçün ‘to be’ fel forması istifadə olunur. Məsələn:',
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
    }],
    [{ id: 241,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: 'İsim\u00A0yoxdur: ... so sifət',
      sntc: 'Bu o qədər maraqlıdır ki',
      tr: 'It’s so interesting'
    },
    { id: 242,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: 'İsim\u00A0var: ... such an sifət isim',
      sntc: 'Bu elə maraqlı hekayədir ki',
      tr: 'It’s such an interesting story'
    },
    { id: 243,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... so sifət',
      sntc: 'Bu o qədər vacibdir ki',
      tr: 'It’s so important '
    },
    { id: 244,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such an sifət isim',
      sntc: 'Bu elə vacib görüşdür ki',
      tr: 'It’s such an important meeting'
    },
    { id: 245,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... so sifət',
      sntc: 'Bu o qədər populyardı ki',
      tr: 'It’s so popular'
    },
    { id: 246,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such a sifət isim',
      sntc: 'Bu elə populyar mahnıdır ki',
      tr: 'It’s such a popular song'
    },
    { id: 247,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such a sifət isim',
      sntc: 'O, elə gözəl qızdır ki',
      tr: 'She’s such a beautiful girl'
    },
    { id: 248,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such a sifət isim',
      sntc: 'O, elə ağıllı oğlandır ki',
      tr: 'He’s such a clever boy'
    },
    { id: 249,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such a sifət isim',
      sntc: 'O, elə kasıb oğlandır ki',
      tr: 'He’s such a poor boy'
    },
    { id: 250,
      descr: 'So/such sözlər bir məna daşıyırlar, ‘such’ isimlə birgə istifadə olunur',
      expl: '... such a sifət isim',
      sntc: 'O, elə xeyirxah qadındır ki',
      tr: 'She’s such a kind woman'
    }],
    [{ id: 251,
      descr: '‘To be’ fel forması',
      expl: 'My friend = he is',
      sntc: 'Mənim dostum evdədir',
      tr: 'My friend is at home'
    },
    { id: 252,
      descr: '‘To be’ fel forması',
      expl: 'These lessons = they are ',
      sntc: 'Bu dərslər çox faydalıdır',
      tr: 'These lessons are very useful'
    },
    { id: 253,
      descr: '‘To be’ fel forması',
      expl: 'My boss = he is',
      sntc: 'Mənim müdirim indi çox məşğuldur',
      tr: 'My boss is very busy now'
    },
    { id: 254,
      descr: 'Nəsə haqqında ilk dəfə danışdıqda ‘a(an)’ artikl işlədilir. İlk məlumatdan sonra, həmin isim haqqında olan digər cümlələrdə ‘the’ artikl işlədilir',
      expl: 'The computer = it is',
      sntc: 'Mənim kompüterim var. Kompüter yenidir',
      tr: 'I have a computer. The computer is new'
    },
    { id: 255,
      descr: 'Nəsə haqqında ilk dəfə danışdıqda ‘a(an)’ artikl işlədilir. İlk məlumatdan sonra, həmin isim haqqında olan digər cümlələrdə ‘the’ artikl işlədilir',
      expl: 'The car = it is',
      sntc: 'Mənim maşınım var. Maşın çox yaxşıdır',
      tr: 'I have a car. The car is very good'
    },
    { id: 256,
      descr: 'Ümumiyyətlə isim məlum olan halda da ‘the’ artikl işlədilir',
      expl: 'These men = they are',
      sntc: 'Bu kişilər menecerdilər',
      tr: 'These men are managers'
    },
    { id: 257,
      descr: '‘To be’ fel forması',
      expl: 'Love = it is',
      sntc: 'Sevgi çox gözəl hissdir',
      tr: 'Love is a wonderful feeling'
    },
    { id: 258,
      descr: '‘To be’ fel forması',
      expl: 'Time = it is',
      sntc: 'Vaxt puldur',
      tr: 'Time is money'
    },
    { id: 259,
      descr: 'Mənsubiyyət haqqında demək üçün:',
      expl: 'I’m American - Mən amerikanlıyam',
      sntc: 'Mən azərbaycanlıyam',
      tr: 'I am Azerbaijani'
    },
    { id: 260,
      descr: 'Yaş haqqında demək üçün:',
      expl: 'He’s twenty - Onun iyirmi yaşı var',
      sntc: 'Mənim otuz yaşım var',
      tr: 'I am thirty'
    }],
    [{ id: 261,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'I am not = I’m not',
      sntc: 'Mən evdə deyiləm',
      tr: 'I am not at home'
    },
    { id: 262,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'We are not = We aren’t',
      sntc: 'Biz hirsli deyilik',
      tr: 'We are not angry'
    },
    { id: 263,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'You are not = You aren’t',
      sntc: 'Sən haqlı deyilsən',
      tr: 'You are not right'
    },
    { id: 264,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'You are not = You aren’t',
      sntc: 'Sən birinci yerdə deyilsən',
      tr: 'You are not in the first place'
    },
    { id: 265,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'They are not = They aren’t',
      sntc: 'Onlar evdə deyil',
      tr: 'They are not at home'
    },
    { id: 266,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'They are not = They aren’t',
      sntc: 'Onlar bir yerdə deyillər',
      tr: 'They are not together'
    },
    { id: 267,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'He is not = He’s not',
      sntc: 'O, qoca deyil',
      tr: 'He is not old'
    },
    { id: 268,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'It is not = It’s not',
      sntc: 'Eyni deyil',
      tr: 'It is not the same'
    },
    { id: 269,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'He is not = He’s not',
      sntc: 'O, şəhərdə deyil,',
      tr: 'She is not in the city'
    },
    { id: 270,
      descr: '‘To be’ fel fomrası (negative form)',
      expl: 'It is not = It’s not',
      sntc: 'İsti deyil',
      tr: 'It is not warm'
    }],
    [{ id: 271,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Am I ... ?',
      sntc: 'Mən haqlıyam?',
      tr: 'Am I right?'
    },
    { id: 272,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Am I ... ?',
      sntc: 'Mən şanslıyam?',
      tr: 'Am I lucky?'
    },
    { id: 273,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Are we ... ?',
      sntc: 'Biz birinci yerdəyik?',
      tr: 'Are we in the first place?'
    },
    { id: 274,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Are you ... ?',
      sntc: 'Siz bir yerdəsiz?',
      tr: 'Are you together?'
    },
    { id: 275,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Are they ... ?',
      sntc: 'Onlar uzaqdadı?',
      tr: 'Are they far?'
    },
    { id: 276,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Are we ... ?',
      sntc: 'Biz ən yaxşı tələbələrik?',
      tr: 'Are we the best students?'
    },
    { id: 277,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Is he ... ?',
      sntc: 'O, sənin dostundur?',
      tr: 'Is he your friend?'
    },
    { id: 278,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Is it ... ?',
      sntc: 'Bu xüsusi təklifdir?',
      tr: 'Is it a special offer?'
    },
    { id: 279,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Is he ... ?',
      sntc: 'O, uğurlu iş adamıdır?',
      tr: 'Is he a successful businessman?'
    },
    { id: 280,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'Is she ... ?',
      sntc: 'O, öz otağındadır?',
      tr: 'Is she in her room?'
    }],
    [{ id: 281,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'video = it => Is ... video',
      sntc: 'Onun videosu məzəlidir?',
      tr: 'Is his video funny?'
    },
    { id: 282,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'information = it => Is ... information',
      sntc: 'Bu məlumat həqiqətən faydalıdır?',
      tr: 'Is this information really useful?'
    },
    { id: 283,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'computer = it => Is ... computer',
      sntc: 'Onun kompüteri yenidir?',
      tr: 'Is his computer new?'
    },
    { id: 284,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'knowledge = it => Is ... knowledge',
      sntc: 'Bu bilik kifayət edir?',
      tr: 'Is this knowledge enough?'
    },
    { id: 285,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'story = it => Is ... story',
      sntc: 'Bu hekayə o qədər məzəlidir?',
      tr: 'Is this story so funny?'
    },
    { id: 286,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'news = it => Is ... news',
      sntc: 'Bu xəbər maraqlıdır?',
      tr: 'Is the news interesting?'
    },
    { id: 287,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'parents = they => Are ... parents',
      sntc: 'Onun valideynləri xaricdədir?',
      tr: 'Are his parents abroad?'
    },
    { id: 288,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'business = it => Is ... business',
      sntc: 'Bu biznes rentabellidir?',
      tr: 'Is this business profitable?'
    },
    { id: 289,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'university = it => Is ... university',
      sntc: 'Universitet məşhurdur?',
      tr: 'Is the university famous?'
    },
    { id: 290,
      descr: '‘To be’ fel forması köməyi ilə sual',
      expl: 'article = it => Is ... article',
      sntc: 'Məqalə siyasət haqqındadır?',
      tr: 'Is the article about politics?'
    }],
    [{ id: 291,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'Where to\u00A0be\u00A0fel ... ?',
      sntc: 'Haradasan?',
      tr: 'Where are you?'
    },
    { id: 292,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'What to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu qutuda nə var?',
      tr: 'What is in this box?'
    },
    { id: 293,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'What to\u00A0be\u00A0fel ... ?',
      sntc: 'Çantanızda nə var?',
      tr: 'What is in your bag?'
    },
    { id: 294,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'Why to\u00A0be\u00A0fel ... ?',
      sntc: 'O, niyə qəzəblidir?',
      tr: 'Why is he angry?'
    },
    { id: 295,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'How to\u00A0be\u00A0fel ... ',
      sntc: 'Necəsən?',
      tr: 'How are you?'
    },
    { id: 296,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'When to\u00A0be\u00A0fel ... ?',
      sntc: 'Nə vaxt azadsan?',
      tr: 'When are you free?'
    },
    { id: 297,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'Why to\u00A0be\u00A0fel ... ?',
      sntc: 'İşdə kim var?',
      tr: 'Who is at work?'
    },
    { id: 298,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'Why to\u00A0be\u00A0fel ... ?',
      sntc: 'Niyə bunun əleyhinəsən?',
      tr: 'Why are you against it?'
    },
    { id: 299,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'How ... to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu nə qədər uzaqdır?',
      tr: 'How far is it?'
    },
    { id: 300,
      descr: '‘To be’ fel forması köməyi ilə xüsusi sual',
      expl: 'How old to\u00A0be\u00A0fel şəxs\u00A0əvəzliyi',
      sntc: 'Neçə yaşın var?',
      tr: 'How old are you?'
    }],
    [{  id: 301,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
      sntc: 'Onun adı nədir?',
      tr: 'What is her name?'
    },
    {  id: 302,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'What is yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
      sntc: 'Dostunun adı nədir?',
      tr: 'What is your friend’s name?'
    },
    {  id: 303,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
      sntc: 'Qardaşının adı nədir?',
      tr: "What’s your brother's name?"
    },
    {  id: 304,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'What’s yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... ?',
      sntc: 'Ən yaxşı dostunun adı nədir',
      tr: 'What’s your best friend’s name'
    },
    {  id: 305,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'How to\u00A0be\u00A0fel ... ?',
      sntc: 'Dərs nəcədir?',
      tr: 'How is the lesson?'
    },
    {  id: 306,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'How to\u00A0be\u00A0fel ... ?',
      sntc: 'Kino necədir?',
      tr: 'How is the movie?'
    },
    {  id: 307,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Where to\u00A0be\u00A0fel ... ?',
      sntc: 'Sənin otağın haradadır?',
      tr: 'Where is your room?'
    },
    {  id: 308,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Where to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu yer haradadır?',
      tr: 'Where is this place'
    },
    {  id: 309,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Who to\u00A0be\u00A0fel ... ?',
      sntc: 'O qadın kimdir?',
      tr: 'Who is that woman?'
    },
    {  id: 310,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Who to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu adamlar kimlərdir?',
      tr: 'Who are these people?'
    }],
    [{  id: 311,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Why to\u00A0be\u00A0fel ... ?',
      sntc: 'Niyə bu qayda o qədər vacibdir?',
      tr: 'Why is this rule so important?'
    },
    {  id: 312,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'Why to\u00A0be\u00A0fel ... ?',
      sntc: 'Sən niyə burdasan?',
      tr: 'Why are you here?'
    },
    {  id: 313,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'What to\u00A0be\u00A0fel ... ?',
      sntc: 'Onun işi nədir?',
      tr: 'What is her job?'
    },
    {  id: 314,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'How interesting to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu jurnal nə dərəcədə maraqlıdır?',
      tr: 'How interesting is this magazine?'
    },
    {  id: 315,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'How useful to\u00A0be\u00A0fel ... ?',
      sntc: 'Bu dərs nə dərəcədə faydalıdır?',
      tr: 'How useful is the lesson?'
    },
    {  id: 316,
      descr: 'To be fel forması köməyi ilə xüsusi sual',
      expl: 'How much to\u00A0be\u00A0fel ... pair of ... ?',
      sntc: 'Bu cüt şalvar neçəyədir? ',
      tr: 'How much is this pair of trousers?'
    },
    {  id: 317,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0fel full of ...',
      sntc: 'Biz nikbinliklə doluyuq',
      tr: 'We are full of optimism'
    },
    {  id: 318,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0fel full of ...',
      sntc: 'Mən güclə doluyam,',
      tr: 'I am full of power'
    },
    {  id: 319,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0fel on holiday',
      sntc: 'O, məzuniyyətdədir',
      tr: 'He is on holiday'
    },
    {  id: 320,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0fel on holiday',
      sntc: 'Biz məzuniyyətdəyik',
      tr: 'We are on holiday'
    }],
    [{  id: 321,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma in the ...',
      sntc: 'O, hamamda deyil',
      tr: 'He isn’t in the bathroom'
    },
    {  id: 322,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma in the ...',
      sntc: 'O, mətbəxdə deyil',
      tr: 'She isn’t in the kitchen'
    },
    {  id: 323,
      descr: 'Sabit ifadələr',
      expl: 'Şəxs\u00A0əvəzliyi to\u00A0be\u00A0qısa\u00A0forma ... at all',
      sntc: 'Biz heç yorulmamışıq',
      tr: 'We aren’t tired at all'
    },
    {  id: 324,
      descr: 'Sabit ifadələr',
      expl: 'artikl ... to\u00A0be\u00A0qısa\u00A0forma ... at all',
      sntc: 'Kitab heç darıxdırıcı deyil',
      tr: 'The book isn’t boring at all'
    },
    {  id: 325,
      descr: 'İngilis dilində önlük',
      expl: 'to\u00A0be\u00A0qısa\u00A0forma satisfied with ...',
      sntc: 'Bu nəticə məni qane edir',
      tr: "I'm satisfied with this result"
    },
    {  id: 326,
      descr: 'İngilis dilində önlük',
      expl: '... to\u00A0be\u00A0qısa\u00A0forma in the ...',
      sntc: 'Bu, qutuda deyil',
      tr: 'It isn’t in the box'
    },
    {  id: 327,
      descr: 'İngilis dilində önlük',
      expl: 'to\u00A0be\u00A0fel əvəzlik afraid of ...',
      sntc: 'Onlar bundan qorxurlar?',
      tr: 'Are they afraid of it?'
    },
    {  id: 328,
      descr: 'İngilis dilində önlük',
      expl: 'to\u00A0be\u00A0fel əvəzlik in the ...',
      sntc: 'O, axırıncı yerdədir?',
      tr: 'Is he in the last place?'
    },
    {  id: 329,
      descr: 'Money sözü İngilis dilində yalnız tək halında olur',
      expl: 'money = it => to\u00A0be\u00A0fel ... money ...',
      sntc: 'Bu pul kifayət edir?',
      tr: 'Is this money enough?'
    },
    {  id: 330,
      descr: 'News sözü İngilis dilində yalnız tək halında olur',
      expl: 'news = it => to\u00A0be\u00A0fel ... news ...',
      sntc: 'Xəbərlər maraqlıdır?',
      tr: 'Is the news interesting?'
    }],
    [{  id: 331,
      descr: 'To be fel köməyi ilə təsdiq',
      expl: 'to\u00A0be\u00A0qısa\u00A0forma ...',
      sntc: 'Onlar bu qərarın əleyhinədir',
      tr: "They're against this decision"
    },
    {  id: 332,
      descr: 'To be fel köməyi ilə inkar',
      expl: 'Əvəzlik to\u00A0be\u00A0qısa\u00A0forma ...',
      sntc: 'Onlar bu qərarın əleyhinə deyillər',
      tr: "They aren't against this decision"
    },
    {  id: 333,
      descr: 'To be fel köməyi ilə sual',
      expl: 'to\u00A0be\u00A0fel əvəzlik ... ?',
      sntc: 'Onlar bu qərara qarşıdırlarmı?',
      tr: 'Are they against this decision?'
    },
    {  id: 334,
      descr: 'To be fel köməyi ilə təsdiq',
      expl: 'to\u00A0be\u00A0qısa\u00A0forma ...',
      sntc: 'Bu eynidir',
      tr: "It's the same"
    },
    {  id: 335,
      descr: 'To be fel köməyi ilə inkar',
      expl: 'Əvəzlik to\u00A0be\u00A0qısa\u00A0forma ...',
      sntc: 'Bu eyni deyil',
      tr: "It isn't the same"
    },
    {  id: 336,
      descr: 'To be fel köməyi ilə sual',
      expl: 'to\u00A0be\u00A0fel əvəzlik ...',
      sntc: 'Bu eynidir?',
      tr: 'Is it the same?'
    },
    {  id: 337,
      descr: 'To be fel köməyi ilə təsdiq',
      expl: 'to\u00A0be\u00A0qısa\u00A0forma ... fel ...',
      sntc: 'O, onu görməkdən şaddır',
      tr: "He's glad to see her"
    },
    {  id: 338,
      descr: 'To be fel köməyi ilə inkar',
      expl: 'He to\u00A0be\u00A0qısa\u00A0forma ... fel ...',
      sntc: 'O, onu görməkdən şad deyil',
      tr: "He isn't glad to see her"
    },
    {  id: 339,
      descr: 'To be fel köməyi ilə sual',
      expl: 'to\u00A0be\u00A0fel he ... fel ...',
      sntc: 'O, onu görməkdən şaddır?',
      tr: 'Is he glad to see her?'
    },
    {  id: 340,
      descr: 'To be fel köməyi ilə təsdiq',
      expl: 'door = it => artikl ... to\u00A0be\u00A0fel ...',
      sntc: 'Qapı açıqdır',
      tr: 'The door is open'
    }],
    [{  id: 341,
      descr: 'İngilis dilində önlük',
      expl: '... on time',
      sntc: 'Biz həmişə vaxtında bitiririk',
      tr: 'We always finish on time'
    },
    {  id: 342,
      descr: 'İngilis dilində önlük ',
      expl: '... on time',
      sntc: 'O, adətən vaxtında gəlir',
      tr: 'He usually comes on time'
    },
    {  id: 343,
      descr: 'İngilis dilində önlük',
      expl: '... laugh at ...',
      sntc: 'O, tez-tez buna gülür',
      tr: 'He often laugh at it'
    },
    {  id: 344,
      descr: 'İngilis dilində sabit ifadələr',
      expl: 'to\u00A0be\u00A0qısa\u00A0forma a waste of ...',
      sntc: 'Bu vaxt itkisidir',
      tr: 'It’s a waste of time'
    },
    {  id: 345,
      descr: 'İngilis dilində önlük',
      expl: 'Yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ... and əvəzlik ... in summer',
      sntc: 'Dostumla mən yayda orada yaşayırıq',
      tr: 'My friend and I live there in summer'
    },
    {  id: 346,
      descr: 'İngilis dilində önlük',
      expl: '... in winter',
      sntc: 'Bu qışda baş verir',
      tr: 'It happens in winter'
    },
    {  id: 347,
      descr: 'İngilis dilində önlük',
      expl: 'Şəxs\u00A0əvəzliyi fel ... adapt to ...',
      sntc: 'Mənə bu şərtlərə uyğunlaşmaq lazımdır',
      tr: 'I need to adapt to these conditions'
    },
    {  id: 348,
      descr: 'İngilis dilində sabit ifadələr',
      expl: 'Şəxs\u00A0əvəzliyi ... as soon as possible',
      sntc: 'Mənə bunu mümkün qədər tez bitirmək lazımdır',
      tr: 'I need to finish it as soon as possible'
    },
    {  id: 349,
      descr: 'İngilis dilində önlük',
      expl: '... prepare for ...',
      sntc: 'İmtahana hazırlaşmağa ehtiyacım var',
      tr: 'I need to prepare for the exam'
    },
    {  id: 350,
      descr: 'Qarşılıqlı mübadilə halı',
      expl: 'I like to do it = I like doing it',
      sntc: 'Mən İngilis dilini öyrənməyi sevirəm',
      tr: 'I like learning English'
    }],
    [{ id: 351,
      descr: 'Ingilis dilində önlük',
      expl: '... by next ...',
      sntc: 'Sənə bunu gələn həftəyə qədər bitirmək lazımdır?',
      tr: 'Do you need to finish it by next week?'
    },
    { id: 352,
      descr: 'Sabit söz birləşməsi',
      expl: '... at all',
      sntc: 'Bu onları stimullaşdırmır',
      tr: 'It doesn’t stimulate them at all'
    },
    { id: 353,
      descr: 'Ingilis dilində önlük',
      expl: '... a speacialist in ...',
      sntc: 'Mən bu sahədə mütəxəssis deyiləm',
      tr: 'I’m not a specialist in this area'
    },
    { id: 354,
      descr: 'Sabit söz birləşməsi',
      expl: '... at all',
      sntc: 'Mən heç dəli deyiləm',
      tr: 'I’m not crazy at all'
    },
    { id: 355,
      descr: 'Sabit önlük',
      expl: '... convenient for ...',
      sntc: 'Bu mənim üçün münasib deyil',
      tr: 'It isn’t convenient for me'
    },
    { id: 356,
      descr: 'Sabit önlük',
      expl: '... on the ...',
      sntc: 'Açarlar stolun üstündədir',
      tr: 'The keys on the table'
    },
    { id: 357,
      descr: 'Sabit önlük',
      expl: '... on yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
      sntc: 'Qələm masamın üstündə deyil',
      tr: 'The pen isn’t on my desk'
    },
    { id: 358,
      descr: 'Sabit önlük',
      expl: '... communicate with ...',
      sntc: 'Dostum onlarla ünsiyyət qurmur',
      tr: 'My friend doesn’t communicate with them'
    },
    { id: 359,
      descr: 'İngilis dilində ifadəli fell',
      expl: '... write ... down',
      sntc: 'Mənə bunu yazmaq lazımdır ',
      tr: 'I need to write it down'
    },
    { id: 360,
      descr: 'Müyyən artikl',
      expl: '... all the data',
      sntc: 'Mənə bütün məlumatları təhlil etməyə ehtiyac yoxdur',
      tr: 'I don’t need to analyze all the data'
    }],
    [{ id: 361,
      descr: 'Sabit söz birləşməsi',
      expl: '... compete with ...',
      sntc: 'O, onlarla rəqabət aparır?',
      tr: 'Does he compete with them?'
    },
    { id: 362,
      descr: 'Sabit söz birləşməsi',
      expl: '... fond of ...',
      sntc: 'İngilis dilini çox sevirəm',
      tr: "I'm fond of English"
    },
    { id: 363,
      descr: 'Enjoy sözü ilə fel+ing işlətmək mümkündür',
      expl: 'Əvəzlik enjoy fel+ing ...',
      sntc: 'Musiqi dinləməkdən zövq alıram',
      tr: 'I enjoy listening to music'
    },
    { id: 364,
      descr: 'Sabit söz birləşməsi',
      expl: '... a lot',
      sntc: 'Bu dərsləri çox bəyənirəm',
      tr: 'I like these lessons a lot'
    },
    { id: 365,
      descr: 'Sadə fel köməyi ilə cümlə',
      expl: 'Does ... behave ...',
      sntc: 'Onun qardaşı qəribə davranır?',
      tr: 'Does his brother behave strangely?'
    },
    { id: 366,
      descr: 'elder - daha yaşlı',
      expl: '... yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi elder ...',
      sntc: 'Bu oğlan onun böyük qardaşıdır?',
      tr: 'Is this boy his elder brother?'
    },
    { id: 367,
      descr: 'younger - yaşa görə kiçik',
      expl: '... yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi younger ...',
      sntc: 'Bu qız onun kiçik bacısıdır?',
      tr: 'Is this girl her younger sister?'
    },
    { id: 368,
      descr: 'Sabit söz birləşməsi',
      expl: '... the meaning of ...',
      sntc: 'Bütün şagirdlər bu ifadənin mənasını bilirlər?',
      tr: 'Do all the students know the meaning of this expression?'
    },
    { id: 369,
      descr: 'Sabit söz birləşməsi',
      expl: '... the meaning of ...',
      sntc: 'Bu sözün mənası nədir?',
      tr: "What's the meaning of this word?"
    },
    { id: 370,
      descr: 'Xüsusi sual',
      expl: '... mean?',
      sntc: 'Nə demək istəyirsən?',
      tr: 'What do you mean?'
    }],
    [{ id: 371,
      descr: 'Sabit söz birləşməsi',
      expl: '... each other',
      sntc: 'Siz bir-birinizi tanıyırsız',
      tr: 'You know each other'
    },
    { id: 372,
      descr: 'Sabit söz birləşməsi',
      expl: '... each other',
      sntc: 'Siz bir-birinizi tanıyırsız?',
      tr: 'Do you know each other?'
    },
    { id: 373,
      descr: 'Sabit önlük',
      expl: '... interested in ...',
      sntc: 'Mən bununla maraqlanıram',
      tr: "I'm interested in it"
    },
    { id: 374,
      descr: 'İdiom',
      expl: '... keen on ...',
      sntc: 'Mən musiqiyə həvəsliyəm',
      tr: "I'm keen on music"
    },
    { id: 375,
      descr: 'İdiom',
      expl: '... keen on ...',
      sntc: 'Mən oxumağa həvəsliyəm',
      tr: "I'm keen on reading"
    },
    { id: 376,
      descr: 'Sadə fel köməyi ilə cümlə',
      expl: '... together',
      sntc: 'Onlar bir yerdə yaşayırlar',
      tr: 'They live together'
    },
    { id: 377,
      descr: 'Sadə fel köməyi ilə cümlə',
      expl: '... separately',
      sntc: 'Onlar ayrı yaşamır',
      tr: "They don't live separately"
    },
    { id: 378,
      descr: 'To be fel köməyi ilə cümlə',
      expl: '... is convenient',
      sntc: 'Bu vaxt münasibdir',
      tr: 'This time is convenient'
    },
    { id: 379,
      descr: 'Sabit söz birləşməsi',
      expl: 'at ... in the evening',
      sntc: 'Adətən axşam saat 7-də evə gəlirəm',
      tr: "I usually come home at 7 o'clock in the evening"
    },
    { id: 380,
      descr: 'Sabit söz birləşməsi',
      expl: '... prepare for ...',
      sntc: 'İmtahanlarına adətən necə hazırlaşırsan?',
      tr: 'How do you usually prepare for your exams? '
    }],
    [{ id: 381,
      descr: 'Xüsusi sual',
      expl: 'Why ... right',
      sntc: 'Bu nə üçün düzgündür?',
      tr: 'Why is it right?'
    },
    { id: 382,
      descr: 'Xüsusi sual',
      expl: 'Why ... right',
      sntc: 'Nəyə görə bu, düzgün görünür?',
      tr: 'Why does it seem right?'
    },
    { id: 383,
      descr: 'Xüsusi sual',
      expl: '... celebrate yiyəlik⁣⁣⁣⁣⁣\u00A0əvəzliyi ...',
      sntc: 'Adətən ad gününü necə qeyd edirsən?',
      tr: 'How do you usually celebrate your birthday?'
    },
    { id: 384,
      descr: 'Xüsusi sual',
      expl: 'What kind of ...',
      sntc: 'Hansı videolara baxmağa üstünlük verirsən??',
      tr: 'What kind of videos do you prefer to watch?'
    },
    { id: 385,
      descr: 'I would like konstruksiyası',
      expl: "I'd ... please",
      sntc: 'Bir fincan çay istərdim, xahiş edirəm',
      tr: "I'd like a cup of tea, please"
    },
    { id: 386,
      descr: 'Xüsusi sual',
      expl: 'Sual\u00A0söz ... right',
      sntc: 'Nəyə görə bu, düzgün görünür?',
      tr: 'Why does it seem right?'
    },
    { id: 387,
      descr: 'Xüsusi sual',
      expl: 'Sual\u00A0söz ... əvəzlik',
      sntc: 'O, haradadır?',
      tr: 'Where is he?'
    },
    { id: 388,
      descr: 'Xüsusi sual',
      expl: 'Sual\u00A0söz ... live ?',
      sntc: 'O, harada yaşayır?',
      tr: 'Where does he live?'
    },
    { id: 389,
      descr: 'Sabit söz birləşməsi',
      expl: '... fond of ... thanks to ...',
      sntc: 'Mən böyük tərəqqim sayəsində bu dərsləri çox sevirəm',
      tr: 'I’m fond of these lessons thanks to my great progress'
    },
    { id: 390,
      descr: 'Sabit söz birləşməsi',
      expl: '... fond of ... thanks to ...',
      sntc: 'Dərslərin sadəliyi sayəsində onlardan zövq alıram',
      tr: 'I enjoy these lessons thanks to their simplicity'
    }],
    
],
[],
[],
[],
[],
]};

let obj=[];

for (let i=20;i<30; i++){
    for(let a=0; a<initialState.lessons[0][0].length; a++){
        // obj.id=initialState.lessons[0][i][a].id
        obj.push(initialState.lessons[0][i][a].tr)
    }
}
setTimeout(() => {
  console.log(obj)
}, 1000)

const theory = (state=initialState, action)=>{
    return state
}

export default theory