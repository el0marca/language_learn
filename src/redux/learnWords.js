let initialState = {
  keyboard:[['q','w','e','r','t','y','u','i','o','p'],
            ['a','s','d','f','g','h','j','k','l'],
            ['z','x','c','v','b','n','m']],
  words: [
    [[{ id: 1, wd: 'sevmək, xoşu gəlmək', tr: 'like' },
    { id: 2, wd: 'iş', tr: 'work' },
    { id: 3, wd: 'orada', tr: 'there' },
    { id: 4, wd: 'yaşamaq', tr: 'live' },
    { id: 5, wd: 'burada', tr: 'here' },
    { id: 6, wd: 'yadda saxlamaq, xatırlamaq', tr: 'remember' },
    { id: 7, wd: 'istəmək', tr: 'want' },
    { id: 8, wd: 'o (kişi cinsi)', tr: 'he' },
    { id: 9, wd: 'ölkə', tr: 'country' },
    { id: 10, wd: 'yaxşı', tr: 'well' }],
    [{ id: 11, wd: 'malik olmaq', tr: 'have' },
    { id: 12, wd: 'maşın', tr: 'car' },
    { id: 13, wd: 'hiss etmək', tr: 'feel' },
    { id: 14, wd: 'xoşbəxt', tr: 'happy' },
    { id: 15, wd: 'daha çox', tr: 'more' },
    { id: 16, wd: 'praktika', tr: 'practice' },
    { id: 17, wd: 'görünmək, gəlmək', tr: 'seem' },
    { id: 18, wd: 'baş vermək', tr: 'happen' },
    { id: 19, wd: 'tez-tez', tr: 'often' },
    { id: 20, wd: 'böyük', tr: 'big' }],
    [{ id: 21, wd: 'təklif', tr: 'offer' },
    { id: 22, wd: 'cəhd etmək, çalışmaq', tr: 'try' },
    { id: 23, wd: 'tapmaq', tr: 'find' },
    { id: 24, wd: 'iş', tr: 'job' },
    { id: 25, wd: 'park', tr: 'park' },
    { id: 26, wd: 'it', tr: 'dog' },
    { id: 27, wd: 'öyrənmək', tr: 'learn' },
    { id: 28, wd: 'televizor', tr: 'tv' },
    { id: 29, wd: 'etmək', tr: 'do' },
    { id: 30, wd: 'kompüter', tr: 'computer' }],
    [{ id: 31, wd: 'adətən', tr: 'usually' },
    { id: 32, wd: 'yoxlamaq', tr: 'check' },
    { id: 33, wd: 'hamısı', tr: 'all' },
    { id: 34, wd: 'məlumat', tr: 'information' },
    { id: 35, wd: 'şirkət', tr: 'company' },
    { id: 36, wd: 'bizim', tr: 'our' },
    { id: 37, wd: 'eyni', tr: 'same' },
    { id: 38, wd: 'faydalı', tr: 'useful' },
    { id: 39, wd: 'pul', tr: 'money' },
    { id: 40, wd: 'o', tr: 'that' }],
   [ { id: 41, wd: 'yadda saxlamaq, xatırlamaq', tr: 'remember' },
    { id: 42, wd: 'görmək', tr: 'see' },
    { id: 43, wd: 'bu', tr: 'this' },
    { id: 44, wd: 'baxmaq', tr: 'look' },
    { id: 45, wd: 'yer', tr: 'place' },
    { id: 46, wd: 'kömək', tr: 'help' },
    { id: 47, wd: 'oxumaq', tr: 'read' },
    { id: 48, wd: 'səhv', tr: 'mistake' },
    { id: 49, wd: 'bunlar', tr: 'these' },
    { id: 50, wd: 'sahib olmaq', tr: 'have' }], 
    [
    { id: 51, wd: 'başqa', tr: 'another' },
    { id: 52, wd: 'səlist', tr: 'fluently' },
    { id: 53, wd: 'yaxşı', tr: 'good' },
    { id: 54, wd: 'düzgün', tr: 'correctly' },
    { id: 55, wd: 'təşəkkür', tr: 'thank' },
    { id: 56, wd: 'istəmək', tr: 'want' },
    { id: 57, wd: 'təkmilləşdirmək', tr: 'improve' },
    { id: 58, wd: 'mənim', tr: 'my' },
    { id: 59, wd: 'qrammatika', tr: 'grammar' },
    { id: 60, wd: 'yer', tr: 'place' },
    ],
    [{ id: 61, wd: 'sənin', tr: 'your' },
    { id: 62, wd: 'o, bu', tr: 'it' },
    { id: 63, wd: 'xaricdə', tr: 'abroad' },
    { id: 64, wd: 'sən', tr: 'you' },
    { id: 65, wd: 'həqiqətən, əslində', tr: 'really' },
    { id: 66, wd: 'şirkət', tr: 'company' },
    { id: 67, wd: 'ziyarət', tr: 'visit' },
    { id: 68, wd: 'iş adamı', tr: 'businessman' },
    { id: 69, wd: 'o (kişi cinsi)', tr: 'he' },
    { id: 70, wd: 'olmaq', tr: 'become' }],
    [{ id: 71, wd: 'cəhd etmək', tr: 'try' },
    { id: 72, wd: 'ölkə', tr: 'country' },
    { id: 73, wd: 'belə', tr: 'so' },
    { id: 74, wd: 'burada', tr: 'here' },
    { id: 75, wd: 'görünmək, gəlmək', tr: 'seem' },
    { id: 76, wd: 'haqqında', tr: 'about' },
    { id: 77, wd: 'başa düşmək', tr: 'understand' },
    { id: 78, wd: 'bunlar', tr: 'these' },
    { id: 79, wd: 'xalq, adamlar', tr: 'people' },
    { id: 80, wd: 'maşın', tr: 'car' }],
    [{ id: 81, wd: 'xalq, adamlar', tr: 'people' },
    { id: 82, wd: 'xoşbəxt', tr: 'happy' },
    { id: 83, wd: 'dəyişmək', tr: 'change' },
    { id: 84, wd: 'həyat', tr: 'life' },
    { id: 85, wd: 'sonra', tr: 'later' },
    { id: 86, wd: 'hiss etmək', tr: 'feel' },
    { id: 87, wd: 'gətirmək', tr: 'bring' },
    { id: 88, wd: 'xoşbəxtlik', tr: 'happiness' },
    { id: 89, wd: 'razılaşmaq', tr: 'agree' },
    { id: 90, wd: 'gəlir', tr: 'profit' }],
    [{ id: 91, wd: 'pul', tr: 'money' },
    { id: 92, wd: 'dəyişmək', tr: 'change' },
    { id: 93, wd: 'bizim', tr: 'our' },
    { id: 94, wd: 'həyat', tr: 'life' },
    { id: 95, wd: 'həqiqətən, əslində', tr: 'really' },
    { id: 96, wd: 'dərs', tr: 'lesson' },
    { id: 97, wd: 'məsləhət', tr: 'advice' },
    { id: 98, wd: 'qayda', tr: 'rule' },
    { id: 99, wd: 'az', tr: 'less' },
    { id: 100, wd: 'indi, bu dəqiqə', tr: 'right now' }],
    [{ id: 101, wd: 'pulsuz', tr: 'free' },
    { id: 102, wd: 'vaxt', tr: 'time' },
    { id: 103, wd: 'etmək, düzəltmək', tr: 'make' },
    { id: 104, wd: 'haqqında', tr: 'about' },
    { id: 105, wd: 'problem', tr: 'problem' },
    { id: 106, wd: 'ehtiyac', tr: 'need' },
    { id: 107, wd: 'ziyarət', tr: 'visit' },
    { id: 108, wd: 'məsləhət', tr: 'advice' },
    { id: 109, wd: 'qərar', tr: 'decision' },
    { id: 110, wd: 'zəng', tr: 'call' }],
    [{ id: 111, wd: 'qəribə', tr: 'strange' },
    { id: 112, wd: 'eşitmək', tr: 'hear' },
    { id: 113, wd: 'bəzən', tr: 'sometimes' },
    { id: 114, wd: 'demək', tr: 'tell' },
    { id: 115, wd: 'yadda saxlamaq', tr: 'remember' },
    { id: 116, wd: 'hamısı', tr: 'all' },
    { id: 117, wd: 'qayda', tr: 'rule' },
    { id: 118, wd: 'demək', tr: 'say' },
    { id: 119, wd: 'istifadə', tr: 'use' },
    { id: 120, wd: 'peşə', tr: 'profession' }],
  [{ id: 121, wd: 'izah etmək', tr: 'explain' },
  { id: 122, wd: 'ata', tr: 'father' },
  { id: 123, wd: 'valideyn', tr: 'parent' },
  { id: 124, wd: 'sınaq', tr: 'test' },
  { id: 125, wd: 'asan', tr: 'easy' },
  { id: 126, wd: 'dost', tr: 'friend' },
  { id: 127, wd: 'motivasiya', tr: 'motivate' },
  { id: 128, wd: 'əhəmiyyətsiz', tr: 'unimportant' },
  { id: 129, wd: 'əla, mükəmməl', tr: 'excellent' },
  { id: 130, wd: 'faydasız', tr: 'useless' }],
  [{ id: 131, wd: 'asılı olmaq', tr: 'depend' },
  { id: 132, wd: 'bizə, bizi', tr: 'us' },
  { id: 133, wd: 'dəstək', tr: 'support' },
  { id: 134, wd: 'izah etmək', tr: 'explain' },
  { id: 135, wd: 'tapşırıq, məşq', tr: 'exercise' },
  { id: 136, wd: 'çox, həddən artıq', tr: 'too' },
  { id: 137, wd: 'asan', tr: 'easy' },
  { id: 138, wd: 'dərs', tr: 'lesson' },
  { id: 139, wd: 'düzgün', tr: 'correct' },
  { id: 140, wd: 'səhv', tr: 'mistake' }],
  [{ id: 141, wd: 'yataq', tr: 'bed' },
  { id: 142, wd: 'kim', tr: 'who' },
  { id: 143, wd: 'müntəzəm, mütəmadı', tr: 'regularly' },
  { id: 144, wd: 'qulaq asmaq', tr: 'listen' },
  { id: 145, wd: 'radio', tr: 'radio' },
  { id: 146, wd: 'adətən', tr: 'usually' },
  { id: 147, wd: 'baxmaq', tr: 'look' },
  { id: 148, wd: 'yoxlamaq', tr: 'check' },
  { id: 149, wd: 'faydasız', tr: 'useless' },
  { id: 150, wd: 'asılılıq', tr: 'depend' }],
  [{ id: 151, wd: 'motivasiya ', tr: 'motivate' },
  { id: 152, wd: 'baxmaq', tr: 'watch' },
  { id: 153, wd: 'fərqli', tr: 'different' },
  { id: 154, wd: 'kino', tr: 'movies' },
  { id: 155, wd: 'vermək', tr: 'give' },
  { id: 156, wd: 'məşq etmək', tr: 'train' },
  { id: 157, wd: 'yaddaş', tr: 'memory' },
  { id: 158, wd: 'xərcləmək', tr: 'spend' },
  { id: 159, wd: 'çox', tr: 'many' },
  { id: 160, wd: 'sevmək', tr: 'love' }],
  [{ id: 161, wd: 'əməkdaş', tr: 'partner' },
  { id: 162, wd: 'müdir', tr: 'boss' },
  { id: 163, wd: 'tənqid', tr: 'criticize' },
  { id: 164, wd: 'götürmək', tr: 'take' },
  { id: 165, wd: 'qız (övlad)', tr: 'daughter' },
  { id: 166, wd: 'çatmaq', tr: 'get' },
  { id: 167, wd: 'axtarmaq', tr: 'look for' },
  { id: 168, wd: 'yeni', tr: 'new' },
  { id: 169, wd: 'vəd', tr: 'promise' },
  { id: 170, wd: 'müntəzəm, mütəmadı', tr: 'regularly' }],
  [{ id: 171, wd: 'praktika', tr: 'practice' },
  { id: 172, wd: 'vaxt', tr: 'time' },
  { id: 173, wd: 'sifariş', tr: 'order' },
  { id: 174, wd: 'sərt', tr: 'hard' },
  { id: 175, wd: 'böyük', tr: 'great' },
  { id: 176, wd: 'həzz, məmnuniyyət', tr: 'pleasure' },
  { id: 177, wd: 'maraq', tr: 'interest' },
  { id: 178, wd: 'bölüşmək, şərik olmaq', tr: 'share' },
  { id: 179, wd: 'ilham vermək', tr: 'inspire' },
  { id: 180, wd: 'almaq', tr: 'buy' }],
  [{ id: 181, wd: 'musiqi', tr: 'music' },
{ id: 182, wd: 'üstünlük vermək', tr: 'prefer' },
{ id: 183, wd: 'razılaşmamaq', tr: 'disagree' },
{ id: 184, wd: 'hansı', tr: 'which' },
{ id: 185, wd: 'ruhlandırmaq', tr: 'inspire' },
{ id: 186, wd: 'həzz, məmnuniyyət', tr: 'pleasure' },
{ id: 187, wd: 'hər hansı', tr: 'any' },
{ id: 188, wd: 'fərqli', tr: 'different' },
{ id: 189, wd: 'kino', tr: 'movies' },
{ id: 190, wd: 'qulaq asmaq', tr: 'listen' }],
[{ id: 191, wd: 'haqqında', tr: 'about' },
{ id: 192, wd: 'yaxşı', tr: 'well' },
{ id: 193, wd: 'öyrətmək', tr: 'teach' },
{ id: 194, wd: 'oynamaq', tr: 'play' },
{ id: 195, wd: 'kompüter', tr: 'computer' },
{ id: 196, wd: 'oyun', tr: 'game' },
{ id: 197, wd: 'məsləhət', tr: 'advice' },
{ id: 198, wd: 'çox', tr: 'much' },
{ id: 199, wd: 'qərar', tr: 'decision' },
{ id: 200, wd: 'təşəkkür etmək', tr: 'thank' }],
[{ id: 201, wd: 'kifayət qədər', tr: 'enough' },
{ id: 202, wd: 'əlavə etmək', tr: 'add' },
{ id: 203, wd: 'cəlb etmək', tr: 'attract' },
{ id: 204, wd: 'demək', tr: 'tell' },
{ id: 205, wd: 'həqiqət', tr: 'truth' },
{ id: 206, wd: 'həll etmək', tr: 'solve' },
{ id: 207, wd: 'problem', tr: 'problem' },
{ id: 208, wd: 'məşq etmək', tr: 'train' },
{ id: 209, wd: 'yaddaş', tr: 'memory' },
{ id: 210, wd: 'darıxdırıcı', tr: 'boring' }],
[{ id: 211, wd: 'yer', tr: 'place' },
{ id: 212, wd: 'parlaq, əla', tr: 'brilliant' },
{ id: 213, wd: 'nəticə', tr: 'result' },
{ id: 214, wd: 'cəlb etmək', tr: 'attract' },
{ id: 215, wd: 'yaxşı', tr: 'well' },
{ id: 216, wd: 'danışmaq', tr: 'speak' },
{ id: 217, wd: 'sərt', tr: 'hard' },
{ id: 218, wd: 'kino', tr: 'cinema' },
{ id: 219, wd: 'gəlmək', tr: 'come' },
{ id: 220, wd: 'çox, həddən artıq', tr: 'too' }],
[{ id: 221, wd: 'ər', tr: 'husband' },
{ id: 222, wd: 'vacib', tr: 'important' },
{ id: 223, wd: 'belə, o qədər', tr: 'so' },
{ id: 224, wd: 'çətin', tr: 'difficult' },
{ id: 225, wd: 'əmin, arxayın', tr: 'sure' },
{ id: 226, wd: 'park', tr: 'park' },
{ id: 227, wd: 'arvad', tr: 'wife' },
{ id: 228, wd: 'kasıb', tr: 'poor' },
{ id: 229, wd: 'dost', tr: 'friend' },
{ id: 230, wd: 'məktəb', tr: 'school' }],
[{ id: 231, wd: 'hazır', tr: 'ready' },
{ id: 232, wd: 'sol', tr: 'left' },
{ id: 233, wd: 'baha', tr: 'expensive' },
{ id: 234, wd: 'qeyri-mümkün', tr: 'impossible' },
{ id: 235, wd: 'tənbəl', tr: 'lazy' },
{ id: 236, wd: 'isti', tr: 'warm' },
{ id: 237, wd: 'qaranlıq', tr: 'dark' },
{ id: 238, wd: 'isti, qızğın', tr: 'hot' },
{ id: 239, wd: 'açıq-aşkar, aydın', tr: 'obvious' },
{ id: 240, wd: 'mümkün', tr: 'possible' }],
[{ id: 241, wd: 'istedadlı', tr: 'talented' },
{ id: 242, wd: 'vəziyyət', tr: 'situation' },
{ id: 243, wd: 'sadə', tr: 'simple' },
{ id: 244, wd: 'qız', tr: 'girl' },
{ id: 245, wd: 'hekayə', tr: 'story' },
{ id: 246, wd: 'görüş', tr: 'meeting' },
{ id: 247, wd: 'populyar', tr: 'popular' },
{ id: 248, wd: 'mahnı', tr: 'song' },
{ id: 249, wd: 'oğlan', tr: 'boy' },
{ id: 250, wd: 'kasıb', tr: 'poor' }],
[{ id: 251, wd: 'altı', tr: 'six' },
{ id: 252, wd: 'on', tr: 'ten' },
{ id: 253, wd: 'zoopark', tr: 'zoo' },
{ id: 254, wd: 'küləkli', tr: 'windy' },
{ id: 255, wd: 'məşğul', tr: 'busy' },
{ id: 256, wd: 'kişilər', tr: 'men' },
{ id: 257, wd: 'menecer, idarəçi', tr: 'manager' },
{ id: 258, wd: 'çox gözəl', tr: 'wonderful' },
{ id: 259, wd: 'hiss', tr: 'feeling' },
{ id: 260, wd: 'otuz', tr: 'thirty' }],
[{ id: 261, wd: 'evli, ərli', tr: 'married' },
{ id: 262, wd: 'kədərli, qəmli', tr: 'sad' },
{ id: 263, wd: 'birlikdə', tr: 'together' },
{ id: 264, wd: 'məşğul', tr: 'busy' },
{ id: 265, wd: 'uzaq', tr: 'far' },
{ id: 266, wd: 'yaxın', tr: 'near' },
{ id: 267, wd: 'qəzəbli, hirsli', tr: 'angry' },
{ id: 268, wd: 'birinci', tr: 'first' },
{ id: 269, wd: 'köhnə, goca', tr: 'old' },
{ id: 270, wd: 'eyni', tr: 'same' }],
[{ id: 271, wd: 'məzəli, gülməli', tr: 'funny' },
{ id: 272, wd: 'müvəffəqiyyət, uğur', tr: 'success' },
{ id: 273, wd: 'bina', tr: 'building' },
{ id: 274, wd: 'soyuq', tr: 'cold' },
{ id: 275, wd: 'uzaq', tr: 'far' },
{ id: 276, wd: 'şanslı', tr: 'lucky' },
{ id: 277, wd: 'birinci', tr: 'first' },
{ id: 278, wd: 'xüsusi', tr: 'special' },
{ id: 279, wd: 'iş adamı', tr: 'businessman' },
{ id: 280, wd: 'otaq', tr: 'room' }],
[{ id: 281, wd: 'dizayner', tr: 'designer' },
{ id: 282, wd: 'otel', tr: 'hotel' },
{ id: 283, wd: 'xəbər(-lər)', tr: 'news' },
{ id: 284, wd: 'video', tr: 'video' },
{ id: 285, wd: 'hekayə', tr: 'story' },
{ id: 286, wd: 'biznes', tr: 'business' },
{ id: 287, wd: 'gəlirli, mənfəətli', tr: 'profitable' },
{ id: 288, wd: 'universitet', tr: 'university' },
{ id: 289, wd: 'məşhur', tr: 'famous' },
{ id: 290, wd: 'siyasət', tr: 'politics' }],
[{ id: 291, wd: 'baha(-lı)', tr: 'expensive' },
{ id: 292, wd: 'vacib', tr: 'important' },
{ id: 293, wd: 'asan', tr: 'easy' },
{ id: 294, wd: 'indi', tr: 'now' },
{ id: 295, wd: 'növbəti', tr: 'next' },
{ id: 296, wd: 'qəribə', tr: 'strange' },
{ id: 297, wd: 'cib', tr: 'pocket' },
{ id: 298, wd: 'məşğul', tr: 'busy' },
{ id: 299, wd: 'səhv', tr: 'wrong' },
{ id: 300, wd: 'xoşbəxt', tr: 'happy' }],
[{ id: 301, wd: 'növbəti', tr: 'next' },
{ id: 302, wd: 'ad', tr: 'name' },
{ id: 303, wd: 'ən yaxşı', tr: 'best' },
{ id: 304, wd: 'kino', tr: 'movies' },
{ id: 305, wd: 'otaq', tr: 'room' },
{ id: 306, wd: 'o', tr: 'that' },
{ id: 307, wd: 'qadın', tr: 'woman' },
{ id: 308, wd: 'bunlar', tr: 'these' },
{ id: 309, wd: 'insanlar', tr: 'people' },
{ id: 310, wd: 'ər', tr: 'husband' }],
[{ id: 311, wd: 'cüt', tr: 'pair' },
{ id: 312, wd: 'jurnal', tr: 'magazine' },
{ id: 313, wd: 'şalvar', tr: 'trousers' },
{ id: 314, wd: 'dolu', tr: 'full' },
{ id: 315, wd: 'nikbinlik, optimist', tr: 'optimism' },
{ id: 316, wd: 'güc', tr: 'power' },
{ id: 317, wd: 'tətil, məzuniyyət', tr: 'holiday' },
{ id: 318, wd: 'ağıllı', tr: 'clever' },
{ id: 319, wd: 'səmərəsiz', tr: 'ineffective' },
{ id: 320, wd: 'ad', tr: 'name' }],
[{ id: 321, wd: 'küləkli', tr: 'windy' },
{ id: 322, wd: 'gözəl', tr: 'beautiful' },
{ id: 323, wd: 'faydasız', tr: 'useless' },
{ id: 324, wd: 'qayda', tr: 'rule' },
{ id: 325, wd: 'cins', tr: 'jeans' },
{ id: 326, wd: 'yorğun', tr: 'tired' },
{ id: 327, wd: 'kasıb', tr: 'poor' },
{ id: 328, wd: 'sadə', tr: 'simple' },
{ id: 329, wd: 'mətn', tr: 'text' },
{ id: 330, wd: 'otaq', tr: 'room' }],
[{ id: 331, wd: 'evli, ərli', tr: 'married' },
{ id: 332, wd: 'aydın', tr: 'obvious' },
{ id: 333, wd: 'oğul', tr: 'son' },
{ id: 334, wd: 'ən yaxşı', tr: 'best' },
{ id: 335, wd: 'nümunə', tr: 'example' },
{ id: 336, wd: 'səmərəsiz', tr: 'ineffective' },
{ id: 337, wd: 'üsul', tr: 'method' },
{ id: 338, wd: 'nikbinllik, optimist', tr: 'optimistic' },
{ id: 339, wd: 'yeni', tr: 'new' },
{ id: 340, wd: 'üçün', tr: 'for' }],
[{ id: 341, wd: 'maraq', tr: 'interest' },
{ id: 342, wd: 'nəzərdə tutmaq', tr: 'mean' },
{ id: 343, wd: 'tənqid', tr: 'criticize' },
{ id: 344, wd: 'qiymət', tr: 'cost' },
{ id: 345, wd: 'klinika', tr: 'clinic' },
{ id: 346, wd: 'bitirmək', tr: 'finish' },
{ id: 347, wd: 'sadəlik', tr: 'simplicity' },
{ id: 348, wd: 'bahar', tr: 'spring' },
{ id: 349, wd: 'eləyə bilmək', tr: 'may' },
{ id: 350, wd: 'idman zalı', tr: 'gym' }],
[{ id: 351, wd: 'həftə', tr: 'week' },
{ id: 352, wd: 'stimullaşdırmaq', tr: 'stimulate' },
{ id: 353, wd: 'mütəxəssis', tr: 'specialist' },
{ id: 354, wd: 'sahə, ərazi', tr: 'area' },
{ id: 355, wd: 'rahat, münasib', tr: 'convenient' },
{ id: 356, wd: 'açar', tr: 'key' },
{ id: 357, wd: 'stol', tr: 'table' },
{ id: 358, wd: 'ünsiyyət qurmaq', tr: 'communicate' },
{ id: 359, wd: 'təhlil etmək', tr: 'analyze' },
{ id: 360, wd: 'məlumat, rəqəmlər', tr: 'data' }],
[{ id: 361, wd: 'ümid', tr: 'hope' },
{ id: 362, wd: 'qulaq asmaq', tr: 'listening' },
{ id: 363, wd: 'sabah', tr: 'tomorrow' },
{ id: 364, wd: 'yemək', tr: 'food' },
{ id: 365, wd: 'dadlı', tr: 'tasty' },
{ id: 366, wd: 'danışmaq', tr: 'talk' },
{ id: 367, wd: 'mövzu', tr: 'subject' },
{ id: 368, wd: 'döşəmə', tr: 'floor' },
{ id: 369, wd: 'heyran olmaq', tr: 'admire' },
{ id: 370, wd: 'cümlə', tr: 'sentence' }],
[{ id: 371, wd: 'səhər', tr: 'morning' },
{ id: 372, wd: 'hava limanı', tr: 'airport' },
{ id: 373, wd: 'boşanma', tr: 'divorced' },
{ id: 374, wd: 'təşəkkür', tr: 'thanks' },
{ id: 375, wd: 'icma', tr: 'community' },
{ id: 376, wd: 'oxumaq', tr: 'reading' },
{ id: 377, wd: 'ayrı', tr: 'separately' },
{ id: 378, wd: 'rahat, münasib', tr: 'convenient' },
{ id: 379, wd: 'axşam', tr: 'evening' },
{ id: 380, wd: 'hazırlaşmaq', tr: 'prepare' }],
[{ id: 381, wd: 'rahat, münasib', tr: 'convenient' },
{ id: 382, wd: 'strategiya', tr: 'strategy' },
{ id: 383, wd: 'yazmaq', tr: 'write' },
{ id: 384, wd: 'kobud', tr: 'rude' },
{ id: 385, wd: 'günortadan sonra', tr: 'afternoon' },
{ id: 386, wd: 'ünsiyyət qurmaq', tr: 'communicate' },
{ id: 387, wd: 'digər', tr: 'other' },
{ id: 388, wd: 'uca, gur(səs)', tr: 'loud' },
{ id: 389, wd: 'erkən', tr: 'early' },
{ id: 390, wd: 'dərk etmək', tr: 'realize' }],
],
[],                       // elementat
[],                       // pre-intermediate
[],                       // intermediate
[]                        // upper-intermediate
]
};

const learnWords =(state=initialState,action)=>{
  return state
}

export default learnWords
