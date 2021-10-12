let initialState = {
  words: [
    [{ id: 1, wd: 'sevmək, bəyənmək', tr: 'like' },
      { id: 2, wd: 'içində, - da/də', tr: 'in' },
      { id: 3, wd: 'orada', tr: 'there' },
      { id: 4, wd: 'yaşamaq', tr: 'live' },
      { id: 5, wd: 'burada', tr: 'here' },
      { id: 6, wd: 'yadda saxlamaq, xatırlamaq', tr: 'remember' },
      { id: 7, wd: 'istəmək', tr: 'want' },
      { id: 8, wd: 'o (kişi cinsi)', tr: 'he' },
      { id: 9, wd: 'ölkə', tr: 'country' },
      { id: 10, wd: 'yaxşı', tr: 'well'
      }
    ],
    [{ id: 11, wd: 'malik olmaq', tr: 'have' },
      { id: 12, wd: 'maşın', tr: 'car' },
      { id: 13, wd: 'hiss etmək', tr: 'feel' },
      { id: 14, wd: 'xoşbəxt', tr: 'happy' },
      { id: 15, wd: 'daha çox', tr: 'more' },
      { id: 16, wd: 'praktika, təcrübə', tr: 'practice' },
      { id: 17, wd: 'görünmək, gəlmək', tr: 'seem' },
      { id: 18, wd: 'baş vermək', tr: 'happen' },
      { id: 19, wd: 'tez-tez, çox vaxt', tr: 'often' },
      { id: 20, wd: 'böyük', tr: 'big'
      }
    ],
    [{ id: 21, wd: 'təklif', tr: 'offer' },
      { id: 22, wd: 'cəhd etmək, çalışmaq', tr: 'try' },
      { id: 23, wd: 'tapmaq, hesab etmək', tr: 'find' },
      { id: 24, wd: 'iş', tr: 'job' },
      { id: 25, wd: 'hər şey', tr: 'everything' },
      { id: 26, wd: 'it', tr: 'dog' },
      { id: 27, wd: 'öyrənmək, oxumaq', tr: 'learn' },
      { id: 28, wd: 'televizor', tr: 'tv' },
      { id: 29, wd: 'etmək', tr: 'do' },
      { id: 30, wd: 'kompüter', tr: 'computer'
      }
    ],
    [{ id: 31, wd: 'adətən', tr: 'usually' },
      { id: 32, wd: 'yoxlamaq', tr: 'check' },
      { id: 33, wd: 'hamısı', tr: 'all' },
      { id: 34, wd: 'məlumat', tr: 'information' },
      { id: 35, wd: 'şirkət', tr: 'company' },
      { id: 36, wd: 'bizim', tr: 'our' },
      { id: 37, wd: 'eyni', tr: 'same' },
      { id: 38, wd: 'faydalı', tr: 'useful' },
      { id: 39, wd: 'pul', tr: 'money' },
      { id: 40, wd: 'o, həmin (işarə əvəzliyi); ki', tr: 'that'
      }
    ],
    [{ id: 41, wd: 'yadda saxlamaq, xatırlamaq', tr: 'remember' },
      { id: 42, wd: 'görmək', tr: 'see' },
      { id: 43, wd: 'bu (işarə əvəzliyi)', tr: 'this' },
      { id: 44, wd: 'baxmaq', tr: 'look' },
      { id: 45, wd: 'yer', tr: 'place' },
      { id: 46, wd: 'kömək etmək', tr: 'help' },
      { id: 47, wd: 'oxumaq', tr: 'read' },
      { id: 48, wd: 'səhv', tr: 'mistake' },
      { id: 49, wd: 'bu, bunlar', tr: 'these' },
      { id: 50, wd: 'sahib olmaq', tr: 'have'
      }
    ],
    [{ id: 51, wd: 'başqa, o biri, digər', tr: 'another' },
      { id: 52, wd: 'sərbəst, səlist', tr: 'fluently' },
      { id: 53, wd: 'yaxşı', tr: 'good' },
      { id: 54, wd: 'düzgün', tr: 'correctly' },
      { id: 55, wd: 'təşəkkür etmək', tr: 'thank' },
      { id: 56, wd: 'istəmək', tr: 'want' },
      { id: 57, wd: 'təkmilləşdirmək, yaxşılaşdırmaq', tr: 'improve' },
      { id: 58, wd: 'mənim', tr: 'my' },
      { id: 59, wd: 'qrammatika', tr: 'grammar' },
      { id: 60, wd: 'yer', tr: 'place' },
    ],
    [{ id: 61, wd: 'sənin', tr: 'your' },
      { id: 62, wd: 'o (orta cins), bu', tr: 'it' },
      { id: 63, wd: 'xaricdə', tr: 'abroad' },
      { id: 64, wd: 'sən', tr: 'you' },
      { id: 65, wd: 'həqiqətən, əslində', tr: 'really' },
      { id: 66, wd: 'şirkət', tr: 'company' },
      { id: 67, wd: 'ziyarət etmək, qonaq getmək', tr: 'visit' },
      { id: 68, wd: 'biznesmen, iş adamı', tr: 'businessman' },
      { id: 69, wd: 'o (kişi cinsi)', tr: 'he' },
      { id: 70, wd: 'olmaq', tr: 'become'
      }
    ],
    [{ id: 71, wd: 'cəhd etmək', tr: 'try' },
      { id: 72, wd: 'ölkə', tr: 'country' },
      { id: 73, wd: 'belə', tr: 'so' },
      { id: 74, wd: 'burada', tr: 'here' },
      { id: 75, wd: 'görünmək, gəlmək', tr: 'seem' },
      { id: 76, wd: 'haqqında, təxminən, təqribən', tr: 'about' },
      { id: 77, wd: 'başa düşmək, anlamaq', tr: 'understand' },
      { id: 78, wd: 'bunlar', tr: 'these' },
      { id: 79, wd: 'xalq, adamlar', tr: 'people' },
      { id: 80, wd: 'maşın', tr: 'car'
      }
    ],
    [{ id: 81, wd: 'xalq, adamlar', tr: 'people' },
      { id: 82, wd: 'xoşbəxt', tr: 'happy' },
      { id: 83, wd: 'dəyişmək, deyişiklik', tr: 'change' },
      { id: 84, wd: 'həyat', tr: 'life' },
      { id: 85, wd: 'sonra', tr: 'later' },
      { id: 86, wd: 'hiss etmək', tr: 'feel' },
      { id: 87, wd: 'gətirmək', tr: 'bring' },
      { id: 88, wd: 'xoşbəxtlik', tr: 'happiness' },
      { id: 89, wd: 'razılaşmaq', tr: 'agree' },
      { id: 90, wd: 'gəlir, mənfəət', tr: 'profit'
      }
    ],
    [{ id: 91, wd: 'pul', tr: 'money' },
      { id: 92, wd: 'dəyişmək, deyişiklik', tr: 'change' },
      { id: 93, wd: 'bizim', tr: 'our' },
      { id: 94, wd: 'həyat', tr: 'life' },
      { id: 95, wd: 'həqiqətən, əslində', tr: 'really' },
      { id: 96, wd: 'dərs', tr: 'lesson' },
      { id: 97, wd: 'məsləhət', tr: 'advice' },
      { id: 98, wd: 'qayda', tr: 'rule' },
      { id: 99, wd: 'daha az', tr: 'less' },
      { id: 100, wd: 'təkmilləşdirmək, yaxşılaşdırmaq', tr: 'improve'
      }
    ],
    [{ id: 101, wd: 'pulsuz', tr: 'free' },
      { id: 102, wd: 'vaxt', tr: 'time' },
      { id: 103, wd: 'etmək, düzəltmək', tr: 'make' },
      { id: 104, wd: 'haqqında, təxminən, təqribən', tr: 'about' },
      { id: 105, wd: 'problem', tr: 'problem' },
      { id: 106, wd: 'ehtiyacı olmaq, tələbat, ehtiyac', tr: 'need' },
      { id: 107, wd: 'ziyarət etmək, qonaq getmək', tr: 'visit' },
      { id: 108, wd: 'məsləhət', tr: 'advice' },
      { id: 109, wd: 'qərar', tr: 'decision' },
      { id: 110, wd: 'zəng vurmaq, çağırmaq', tr: 'call'
      }
    ],
    [{ id: 111, wd: 'qəribə', tr: 'strange' },
      { id: 112, wd: 'eşitmək', tr: 'hear' },
      { id: 113, wd: 'bəzən, hərdən', tr: 'sometimes' },
      { id: 114, wd: 'demək, bildirmək', tr: 'tell' },
      { id: 115, wd: 'yadda saxlamaq, xatırlamaq', tr: 'remember' },
      { id: 116, wd: 'hamısı', tr: 'all' },
      { id: 117, wd: 'üçün', tr: 'for' },
      { id: 118, wd: 'demək, söyləmək', tr: 'say' },
      { id: 119, wd: 'istifadə etmək', tr: 'use' },
      { id: 120, wd: 'peşə', tr: 'profession'
      }
    ],
    [{ id: 121, wd: 'izah etmək', tr: 'explain' },
      { id: 122, wd: 'ata', tr: 'father' },
      { id: 123, wd: 'valideyn', tr: 'parent' },
      { id: 124, wd: 'sınaq', tr: 'test' },
      { id: 125, wd: 'asan', tr: 'easy' },
      { id: 126, wd: 'dost', tr: 'friend' },
      { id: 127, wd: 'motivasiya', tr: 'motivate' },
      { id: 128, wd: 'əhəmiyyətsiz', tr: 'unimportant' },
      { id: 129, wd: 'əla, mükəmməl', tr: 'excellent' },
      { id: 130, wd: 'faydasız', tr: 'useless'
      }
    ],
    [{ id: 131, wd: 'asılı olmaq', tr: 'depend' },
      { id: 132, wd: 'bizə, bizi', tr: 'us' },
      { id: 133, wd: 'dəstək olmaq', tr: 'support' },
      { id: 134, wd: 'izah etmək', tr: 'explain' },
      { id: 135, wd: 'tapşırıq, məşq', tr: 'exercise' },
      { id: 136, wd: 'çox, həddən artıq', tr: 'too' },
      { id: 137, wd: 'asan', tr: 'easy' },
      { id: 138, wd: 'dərs', tr: 'lesson' },
      { id: 139, wd: 'səhvi düzəltmək, doğru, düzgün', tr: 'correct' },
      { id: 140, wd: 'səhv', tr: 'mistake'
      }
    ],
    [{ id: 141, wd: 'yataq', tr: 'bed' },
      { id: 142, wd: 'kim', tr: 'who' },
      { id: 143, wd: 'müntəzəm olaraq', tr: 'regularly' },
      { id: 144, wd: 'qulaq asmaq, dinləmək', tr: 'listen' },
      { id: 145, wd: 'həsab etmək, tapmaq', tr: 'find' },
      { id: 146, wd: 'adətən', tr: 'usually' },
      { id: 147, wd: 'baxmaq', tr: 'look' },
      { id: 148, wd: 'yoxlamaq', tr: 'check' },
      { id: 149, wd: 'faydasız', tr: 'useless' },
      { id: 150, wd: 'asılı olmaq', tr: 'depend'
      }
    ],
    [{ id: 151, wd: 'motivasiya etmək ', tr: 'motivate' },
      { id: 152, wd: 'baxmaq', tr: 'watch' },
      { id: 153, wd: 'fərqli', tr: 'different' },
      { id: 154, wd: 'kino, film', tr: 'movie' },
      { id: 155, wd: 'vermək', tr: 'give' },
      { id: 156, wd: 'məşq etmək', tr: 'train' },
      { id: 157, wd: 'yaddaş', tr: 'memory' },
      { id: 158, wd: 'xərcləmək', tr: 'spend' },
      { id: 159, wd: 'çox', tr: 'many' },
      { id: 160, wd: 'sevmək', tr: 'love'
      }
    ],
    [{ id: 161, wd: 'əməkdaş', tr: 'partner' },
      { id: 162, wd: 'hadisə', tr: 'event' },
      { id: 163, wd: 'tənqid etmək', tr: 'criticize' },
      { id: 164, wd: 'götürmək, qəbul etmək', tr: 'take' },
      { id: 165, wd: 'qız (övlad)', tr: 'daughter' },
      { id: 166, wd: 'çatmaq', tr: 'get' },
      { id: 167, wd: 'vermək', tr: 'give' },
      { id: 168, wd: 'yeni', tr: 'new' },
      { id: 169, wd: 'vəd etmək, vəd', tr: 'promise' },
      { id: 170, wd: 'müntəzəm olaraq', tr: 'regularly'
      }
    ],
    [{ id: 171, wd: 'praktika, təcrübə', tr: 'practice' },
      { id: 172, wd: 'vaxt', tr: 'time' },
      { id: 173, wd: 'sifariş etmək, əmr vermək', tr: 'order' },
      { id: 174, wd: 'sərt', tr: 'hard' },
      { id: 175, wd: 'böyük', tr: 'great' },
      { id: 176, wd: 'həzz, məmnuniyyət', tr: 'pleasure' },
      { id: 177, wd: 'maraqlanmaq, maraq', tr: 'interest' },
      { id: 178, wd: 'bölüşmək, şərik olmaq', tr: 'share' },
      { id: 179, wd: 'ruhlandırmaq', tr: 'inspire' },
      { id: 180, wd: 'almaq', tr: 'buy'
      }
    ],
    [{ id: 181, wd: 'musiqi', tr: 'music' },
      { id: 182, wd: 'üstünlük vermək', tr: 'prefer' },
      { id: 183, wd: 'razılaşmamaq', tr: 'disagree' },
      { id: 184, wd: 'hansı', tr: 'which' },
      { id: 185, wd: 'ruhlandırmaq', tr: 'inspire' },
      { id: 186, wd: 'həzz, məmnuniyyət', tr: 'pleasure' },
      { id: 187, wd: 'hər hansı', tr: 'any' },
      { id: 188, wd: 'fərqli', tr: 'different' },
      { id: 189, wd: 'kino, film', tr: 'movie' },
      { id: 190, wd: 'qulaq asmaq, dinləmək', tr: 'listen'
      }
    ],
    [{ id: 191, wd: 'haqqında, təxminən, təqribən', tr: 'about' },
      { id: 192, wd: 'yaxşı', tr: 'well' },
      { id: 193, wd: 'öyrətmək', tr: 'teach' },
      { id: 194, wd: 'oynamaq', tr: 'play' },
      { id: 195, wd: 'kompüter', tr: 'computer' },
      { id: 196, wd: 'oyun', tr: 'game' },
      { id: 197, wd: 'məsləhət', tr: 'advice' },
      { id: 198, wd: 'çox', tr: 'much' },
      { id: 199, wd: 'qərar', tr: 'decision' },
      { id: 200, wd: 'təşəkkür etmək', tr: 'thank'
      }
    ],
    [{ id: 201, wd: 'kifayət qədər', tr: 'enough' },
      { id: 202, wd: 'əlavə etmək', tr: 'add' },
      { id: 203, wd: 'cəlb etmək', tr: 'attract' },
      { id: 204, wd: 'demək', tr: 'tell' },
      { id: 205, wd: 'həqiqət', tr: 'truth' },
      { id: 206, wd: 'həll etmək', tr: 'solve' },
      { id: 207, wd: 'problem', tr: 'problem' },
      { id: 208, wd: 'məşq etmək', tr: 'train' },
      { id: 209, wd: 'yaddaş', tr: 'memory' },
      { id: 210, wd: 'darıxdırıcı', tr: 'boring'
      }
    ],
    [{ id: 211, wd: 'yer', tr: 'place' },
      { id: 212, wd: 'parlaq, əla', tr: 'brilliant' },
      { id: 213, wd: 'nəticə', tr: 'result' },
      { id: 214, wd: 'cəlb etmək', tr: 'attract' },
      { id: 215, wd: 'yaxşı', tr: 'well' },
      { id: 216, wd: 'danışmaq', tr: 'speak' },
      { id: 217, wd: 'sərt', tr: 'hard' },
      { id: 218, wd: 'kinoteatr, kino', tr: 'cinema' },
      { id: 219, wd: 'gəlmək', tr: 'come' },
      { id: 220, wd: 'həmçinin, ...də, ...da', tr: 'too'
      }
    ],
    [{ id: 221, wd: 'ər', tr: 'husband' },
      { id: 222, wd: 'vacib', tr: 'important' },
      { id: 223, wd: 'belə, o qədər', tr: 'so' },
      { id: 224, wd: 'çətin', tr: 'difficult' },
      { id: 225, wd: 'əmin, arxayın', tr: 'sure' },
      { id: 226, wd: 'park', tr: 'park' },
      { id: 227, wd: 'arvad', tr: 'wife' },
      { id: 228, wd: 'kasıb', tr: 'poor' },
      { id: 229, wd: 'dost', tr: 'friend' },
      { id: 230, wd: 'məktəb', tr: 'school'
      }
    ],
    [{ id: 231, wd: 'hazır', tr: 'ready' },
      { id: 232, wd: 'sol, sol tərəf', tr: 'left' },
      { id: 233, wd: 'baha', tr: 'expensive' },
      { id: 234, wd: 'qeyri-mümkün', tr: 'impossible' },
      { id: 235, wd: 'üzərində, üstündə, -da/də', tr: 'on' },
      { id: 236, wd: 'isti', tr: 'warm' },
      { id: 237, wd: 'qaranlıq', tr: 'dark' },
      { id: 238, wd: 'isti, qızğın', tr: 'hot' },
      { id: 239, wd: 'açıq-aşkar, aydın', tr: 'obvious' },
      { id: 240, wd: 'mümkün', tr: 'possible'
      }
    ],
    [{ id: 241, wd: 'istedadlı', tr: 'talented' },
      { id: 242, wd: 'vəziyyət', tr: 'situation' },
      { id: 243, wd: 'sadə, asan, yüngül', tr: 'simple' },
      { id: 244, wd: 'qız', tr: 'girl' },
      { id: 245, wd: 'hekayə', tr: 'story' },
      { id: 246, wd: 'görüş', tr: 'meeting' },
      { id: 247, wd: 'populyar', tr: 'popular' },
      { id: 248, wd: 'mahnı', tr: 'song' },
      { id: 249, wd: 'oğlan', tr: 'boy' },
      { id: 250, wd: 'kasıb', tr: 'poor'
      }
    ],
    [{ id: 251, wd: 'altı', tr: 'six' },
      { id: 252, wd: 'on', tr: 'ten' },
      { id: 253, wd: 'zoopark', tr: 'zoo' },
      { id: 254, wd: 'küləkli', tr: 'windy' },
      { id: 255, wd: 'ağıllı', tr: 'clever' },
      { id: 256, wd: 'indi, hal-hazırda', tr: 'now' },
      { id: 257, wd: 'menecer, idarəçi', tr: 'manager' },
      { id: 258, wd: 'çox gözəl', tr: 'wonderful' },
      { id: 259, wd: 'hiss, hissiyyat', tr: 'feeling' },
      { id: 260, wd: 'otuz', tr: 'thirty'
      }
    ],
    [{ id: 261, wd: 'evli, ərli', tr: 'married' },
      { id: 262, wd: 'qəmli', tr: 'sad' },
      { id: 263, wd: 'birlikdə', tr: 'together' },
      { id: 264, wd: 'məşğul', tr: 'busy' },
      { id: 265, wd: 'uzaq', tr: 'far' },
      { id: 266, wd: 'yaxın', tr: 'near' },
      { id: 267, wd: 'qəzəbli, hirsli', tr: 'angry' },
      { id: 268, wd: 'birinci', tr: 'first' },
      { id: 269, wd: 'yaş, köhnə, goca', tr: 'old' },
      { id: 270, wd: 'eyni, oxşar', tr: 'same'
      }
    ],
    [{ id: 271, wd: 'məzəli, gülməli', tr: 'funny' },
      { id: 272, wd: 'müvəffəqiyyət, uğur', tr: 'success' },
      { id: 273, wd: 'bina', tr: 'building' },
      { id: 274, wd: 'soyuq', tr: 'cold' },
      { id: 275, wd: 'uzaq', tr: 'far' },
      { id: 276, wd: 'uğurlu', tr: 'lucky' },
      { id: 277, wd: 'birinci', tr: 'first' },
      { id: 278, wd: 'xüsusi', tr: 'special' },
      { id: 279, wd: 'biznesmen, iş adamı', tr: 'businessman' },
      { id: 280, wd: 'otaq', tr: 'room'
      }
    ],
    [{ id: 281, wd: 'dizayner', tr: 'designer' },
      { id: 282, wd: 'otel', tr: 'hotel' },
      { id: 283, wd: 'xəbər(-lər)', tr: 'news' },
      { id: 284, wd: 'mügənni', tr: 'singer' },
      { id: 285, wd: 'hekayə', tr: 'story' },
      { id: 286, wd: 'biznes, iş', tr: 'business' },
      { id: 287, wd: 'gəlirli, mənfəətli', tr: 'profitable' },
      { id: 288, wd: 'universitet', tr: 'university' },
      { id: 289, wd: 'məşhur', tr: 'famous' },
      { id: 290, wd: 'siyasət', tr: 'politics'
      }
    ],
    [{ id: 291, wd: 'baha', tr: 'expensive' },
      { id: 292, wd: 'vacib', tr: 'important' },
      { id: 293, wd: 'asan', tr: 'easy' },
      { id: 294, wd: 'indi, hal-hazırda', tr: 'now' },
      { id: 295, wd: 'növbəti', tr: 'next' },
      { id: 296, wd: 'qəribə', tr: 'strange' },
      { id: 297, wd: 'cib', tr: 'pocket' },
      { id: 298, wd: 'məşğul', tr: 'busy' },
      { id: 299, wd: 'səhv', tr: 'wrong' },
      { id: 300, wd: 'xoşbəxt', tr: 'happy'
      }
    ],
    [{ id: 301, wd: 'növbəti', tr: 'next' },
      { id: 302, wd: 'ad', tr: 'name' },
      { id: 303, wd: 'ən yaxşı', tr: 'best' },
      { id: 304, wd: 'kino, film', tr: 'movie' },
      { id: 305, wd: 'otaq', tr: 'room' },
      { id: 306, wd: 'o, həmin (işarə əvəzliyi); ki', tr: 'that' },
      { id: 307, wd: 'qadın', tr: 'woman' },
      { id: 308, wd: 'bunlar', tr: 'these' },
      { id: 309, wd: 'xalq, adamlar', tr: 'people' },
      { id: 310, wd: 'ər', tr: 'husband'
      }
    ],
    [{ id: 311, wd: 'cüt', tr: 'pair' },
      { id: 312, wd: 'jurnal', tr: 'magazine' },
      { id: 313, wd: 'şalvar', tr: 'trousers' },
      { id: 314, wd: 'dolu', tr: 'full' },
      { id: 315, wd: 'nikbinlik, optimist', tr: 'optimism' },
      { id: 316, wd: 'güc', tr: 'power' },
      { id: 317, wd: 'tətil, məzuniyyət', tr: 'holiday' },
      { id: 318, wd: 'ağıllı', tr: 'clever' },
      { id: 319, wd: 'səmərəsiz', tr: 'ineffective' },
      { id: 320, wd: 'ad', tr: 'name'
      }
    ],
    [{ id: 321, wd: 'küləkli', tr: 'windy' },
      { id: 322, wd: 'gözəl', tr: 'beautiful' },
      { id: 323, wd: 'faydasız', tr: 'useless' },
      { id: 324, wd: 'qayda', tr: 'rule' },
      { id: 325, wd: 'cins', tr: 'jeans' },
      { id: 326, wd: 'yorğun', tr: 'tired' },
      { id: 327, wd: 'kasıb', tr: 'poor' },
      { id: 328, wd: 'soyuducu', tr: 'refrigerator' },
      { id: 329, wd: 'mətn', tr: 'text' },
      { id: 330, wd: 'otaq', tr: 'room'
      }
    ],
    [{ id: 331, wd: 'evli, ərli', tr: 'married' },
      { id: 332, wd: 'açıq-aşkar, aydın', tr: 'obvious' },
      { id: 333, wd: 'oğul', tr: 'son' },
      { id: 334, wd: 'ən yaxşı', tr: 'best' },
      { id: 335, wd: 'nümunə', tr: 'example' },
      { id: 336, wd: 'səmərəsiz', tr: 'ineffective' },
      { id: 337, wd: 'üsul', tr: 'method' },
      { id: 338, wd: 'nikbinllik, optimist', tr: 'optimistic' },
      { id: 339, wd: 'yeni', tr: 'new' },
      { id: 340, wd: 'üçün', tr: 'for'
      }
    ],
    [{ id: 341, wd: 'maraqlanmaq, maraq', tr: 'interest' },
      { id: 342, wd: 'nəzərdə tutmaq', tr: 'mean' },
      { id: 343, wd: 'tənqid etmək', tr: 'criticize' },
      { id: 344, wd: 'xərci çıxmaq, qiyməti olmaq', tr: 'cost' },
      { id: 345, wd: 'klinika', tr: 'clinic' },
      { id: 346, wd: 'şərt, şərait (cəm hal.)', tr: 'condition' },
      { id: 347, wd: 'sadəlik', tr: 'simplicity' },
      { id: 348, wd: 'bahar', tr: 'spring' },
      { id: 349, wd: 'eləyə bilmək', tr: 'may' },
      { id: 350, wd: 'idman zalı', tr: 'gym'
      }
    ],
    [{ id: 351, wd: 'həftə', tr: 'week' },
      { id: 352, wd: 'stimullaşdırmaq', tr: 'stimulate' },
      { id: 353, wd: 'mütəxəssis', tr: 'specialist' },
      { id: 354, wd: 'sahə, ərazi', tr: 'area' },
      { id: 355, wd: 'rahat, münasib', tr: 'convenient' },
      { id: 356, wd: 'açar', tr: 'key' },
      { id: 357, wd: 'stol', tr: 'table' },
      { id: 358, wd: 'ünsiyyət qurmaq', tr: 'communicate' },
      { id: 359, wd: 'təhlil etmək', tr: 'analyze' },
      { id: 360, wd: 'məlumat, rəqəmlər', tr: 'data'
      }
    ],
    [{ id: 361, wd: 'ümid etmək, ümid', tr: 'hope' },
      { id: 362, wd: 'qulaq asmaq, dinləmək', tr: 'listen' },
      { id: 363, wd: 'sabah', tr: 'tomorrow' },
      { id: 364, wd: 'yemək', tr: 'food' },
      { id: 365, wd: 'dadlı', tr: 'tasty' },
      { id: 366, wd: 'danışmaq, söhbət etmək', tr: 'talk' },
      { id: 367, wd: 'mövzu', tr: 'subject' },
      { id: 368, wd: 'döşəmə', tr: 'floor' },
      { id: 369, wd: 'heyran olmaq', tr: 'admire' },
      { id: 370, wd: 'cümlə', tr: 'sentence'
      }
    ],
    [{ id: 371, wd: 'səhər', tr: 'morning' },
      { id: 372, wd: 'hava limanı', tr: 'airport' },
      { id: 373, wd: 'boşanmaq, boşanma', tr: 'divorce' },
      { id: 374, wd: 'təşəkkür etmək', tr: 'thank' },
      { id: 375, wd: 'icma, cəmiyyət', tr: 'community' },
      { id: 376, wd: 'oxumaq', tr: 'read' },
      { id: 377, wd: 'ayrı, ayrı-ayrı', tr: 'separately' },
      { id: 378, wd: 'rahat, münasib', tr: 'convenient' },
      { id: 379, wd: 'axşam', tr: 'evening' },
      { id: 380, wd: 'hazırlaşmaq', tr: 'prepare'
      }
    ],
    [{ id: 381, wd: 'rahat, münasib', tr: 'convenient' },
      { id: 382, wd: 'strategiya', tr: 'strategy' },
      { id: 383, wd: 'yazmaq', tr: 'write' },
      { id: 384, wd: 'kobud', tr: 'rude' },
      { id: 385, wd: 'günortadan sonra', tr: 'afternoon' },
      { id: 386, wd: 'ünsiyyət qurmaq', tr: 'communicate' },
      { id: 387, wd: 'digər, o biri', tr: 'other' },
      { id: 388, wd: 'uca, gur (səs)', tr: 'loud' },
      { id: 389, wd: 'erkən, tezdən', tr: 'early' },
      { id: 390, wd: 'dərk etmək', tr: 'realize'
      }
    ],
    [{ id: 391, wd: 'sürətli', tr: 'fast' },
      { id: 392, wd: 'biznes', tr: 'business' },
      { id: 393, wd: 'səyahət etmək', tr: 'travel' },
      { id: 394, wd: 'başqa', tr: 'another' },
      { id: 395, wd: 'demək, söyləmək', tr: 'say' },
      { id: 396, wd: 'dərk etmək', tr: 'realize' },
      { id: 397, wd: 'danışmaq', tr: 'talk' },
      { id: 398, wd: 'bacarmaq', tr: 'can' },
      { id: 399, wd: 'daha uzun', tr: 'longer' },
      { id: 400, wd: 'eləyə bilmək', tr: 'may'
      }
    ],
    [],[],[],[],[],[],[],[],[],[],
    [{ id: 501, wd: 'xilas etmək, qənaət etmək, saxlamaq', tr: 'save' },
      { id: 502, wd: 'olmaq', tr: 'be' },
      { id: 503, wd: 'seçim', tr: 'choice' },
      { id: 504, wd: 'evlənmək, ərə getmək', tr: 'marry' },
      { id: 505, wd: 'təmir etmək', tr: 'repair' },
      { id: 506, wd: 'izləmək, riayət etmək', tr: 'follow' },
      { id: 507, wd: 'sarsıtmaq, şoka salmaq', tr: 'shock' },
      { id: 508, wd: 'təəccübləndirmək, təəccüb', tr: 'surprise' },
      { id: 509, wd: 'böyük', tr: 'greatly' },
      { id: 510, wd: 'minnətdar', tr: 'grateful'
      }
    ],
    [{ id: 511, wd: 'tədbir', tr: 'measure' },
      { id: 512, wd: 'satış', tr: 'sale' },
      { id: 513, wd: 'cəzalandırmaq', tr: 'punish' },
      { id: 514, wd: 'həsr etmək, ayırmaq', tr: 'devote' },
      { id: 515, wd: 'səhv salmaq', tr: 'confuse' },
      { id: 516, wd: 'peşman olmaq', tr: 'regret' },
      { id: 517, wd: 'üzr istəmək', tr: 'apologize' },
      { id: 518, wd: 'davranış, rəftar', tr: 'behaviour' },
      { id: 519, wd: 'davranmaq', tr: 'behave' },
      { id: 520, wd: 'hakimiyyət, hökümət orqanları (cəm)', tr: 'authority'
      }
    ],
    [{ id: 521, wd: 'sözünü kəsmək', tr: 'interrupt' },
      { id: 522, wd: 'olmaq', tr: 'be' },
      { id: 523, wd: 'keçmək, imtahan vermək', tr: 'pass' },
      { id: 524, wd: 'hazırlıq', tr: 'preparation' },
      { id: 525, wd: 'həll olunma', tr: 'solution' },
      { id: 526, wd: 'tərcümə etmək', tr: 'translate' },
      { id: 527, wd: 'lüğət', tr: 'dictionary' },
      { id: 528, wd: 'aparmaq', tr: 'lead' },
      { id: 529, wd: 'hüquqi, qanuni', tr: 'legal' },
      { id: 530, wd: 'yarış, müsabiqə', tr: 'competition'
      }
    ],
    [{ id: 531, wd: 'yanaşma', tr: 'approach' },
      { id: 532, wd: 'yenilikçi', tr: 'innovative' },
      { id: 533, wd: 'addım', tr: 'step' },
      { id: 534, wd: 'radikal', tr: 'radical' },
      { id: 535, wd: 'təkid etmək', tr: 'insist' },
      { id: 536, wd: 'tez, cəld', tr: 'quickly' },
      { id: 537, wd: 'artıq', tr: 'anymore' },
      { id: 538, wd: 'yalnız', tr: 'only' },
      { id: 539, wd: 'cavab', tr: 'answer' },
      { id: 540, wd: 'musiqiçi', tr: 'musician'
      }
    ],
    [{ id: 541, wd: 'bağlamaq', tr: 'close' },
      { id: 542, wd: 'hadisə', tr: 'event' },
      { id: 543, wd: 'nəşr etmək', tr: 'publish' },
      { id: 544, wd: 'münasibət', tr: 'attitude' },
      { id: 545, wd: 'işarə etmək, göstərmək', tr: 'point' },
      { id: 546, wd: 'davam etmək, sonuncu', tr: 'last' },
      { id: 547, wd: 'əbədi olaraq, əbədiyyən', tr: 'forever' },
      { id: 548, wd: 'saat', tr: 'hour' },
      { id: 549, wd: 'bişirmək', tr: 'cook' },
      { id: 550, wd: 'sonra', tr: 'after'
      }
    ],
    [{ id: 551, wd: 'yenə', tr: 'again' },
      { id: 552, wd: 'səhər', tr: 'morning' },
      { id: 553, wd: 'maliyyə', tr: 'financial' },
      { id: 554, wd: 'ticarət', tr: 'commercial' },
      { id: 555, wd: 'qaranlıq', tr: 'dark' },
      { id: 556, wd: 'tezliklə', tr: 'soon' },
      { id: 557, wd: 'əsas', tr: 'main' },
      { id: 558, wd: 'layihə', tr: 'project' },
      { id: 559, wd: 'lazımlı, gərəkli', tr: 'necessary' },
      { id: 560, wd: 'mövcud olan, əldə olan', tr: 'available'
      }
    ],
    [{ id: 561, wd: 'əməkdaş, işçi', tr: 'employee' },
      { id: 562, wd: 'bacarmaq, idarə etmək', tr: 'manage' },
      { id: 563, wd: 'tövsiyə', tr: 'recommendation' },
      { id: 564, wd: 'izləmək, riayət etmək', tr: 'follow' },
      { id: 565, wd: 'müntəzəm', tr: 'regular' },
      { id: 566, wd: 'məşq etmək', tr: 'train' },
      { id: 567, wd: 'velosiped', tr: 'bike' },
      { id: 568, wd: 'götürmək, qəbul etmək', tr: 'take' },
      { id: 569, wd: 'edə bilmək, imkamı olmaq (bir iş etməyə)', tr: 'be able to' },
      { id: 570, wd: 'həll etmək', tr: 'solve'
      }
    ],
    [{ id: 571, wd: 'partnyor, şərik', tr: 'partner' },
      { id: 572, wd: 'etmək', tr: 'do' },
      { id: 573, wd: 'sonra', tr: 'later' },
      { id: 574, wd: 'davam etmək', tr: 'continue' },
      { id: 575, wd: 'rədd etmək', tr: 'refuse' },
      { id: 576, wd: 'konfrans', tr: 'conference' },
      { id: 577, wd: 'bacarmaq, idarə etmək', tr: 'manage' },
      { id: 578, wd: 'müntəzəm', tr: 'regular' },
      { id: 579, wd: 'əsas, təməl', tr: 'basis' },
      { id: 580, wd: 'borclu olmaq', tr: 'owe'
      }
    ],[],[],[],[],[],[],[],
    [{ id: 651, wd: 'daxil etmək', tr: 'include' },
      { id: 652, wd: 'nümunə', tr: 'example' },
      { id: 653, wd: 'cəhd etmək', tr: 'try' },
      { id: 654, wd: 'baxmaq', tr: 'look' },
      { id: 655, wd: 'dönmək', tr: 'turn' },
      { id: 656, wd: 'gülümsəmək', tr: 'smile' },
      { id: 657, wd: 'soruşmaq', tr: 'ask' },
      { id: 658, wd: 'baş vermək', tr: 'happen' },
      { id: 659, wd: 'üç', tr: 'three' },
      { id: 660, wd: 'başqa cəhətə cevirmək', tr: 'switch'
      }
    ],
    [{ id: 661, wd: 'tekrarlamaq, düzəliş etmək', tr: 'revise' },
      { id: 662, wd: 'təkrar etmək', tr: 'repeat' },
      { id: 663, wd: 'daxil olmaq', tr: 'enter' },
      { id: 664, wd: 'nüfuzlu', tr: 'prestigious' },
      { id: 665, wd: 'universitet', tr: 'university' },
      { id: 666, wd: 'almaq', tr: 'receive' },
      { id: 667, wd: 'məktub', tr: 'letter' },
      { id: 668, wd: 'bina', tr: 'building' },
      { id: 669, wd: 'təmin etmək', tr: 'provide' },
      { id: 670, wd: 'şərt, şərait (cəm hal.)', tr: 'condition'
      }
    ],
    [{ id: 671, wd: 'tullanmaq', tr: 'jump' },
      { id: 672, wd: 'hasar, çəpər', tr: 'fence' },
      { id: 673, wd: 'qalmaq', tr: 'stay' },
      { id: 674, wd: 'əvvəl', tr: 'before' },
      { id: 675, wd: 'dünən', tr: 'yesterday' },
      { id: 676, wd: 'təklif etmək', tr: 'suggest' },
      { id: 677, wd: 'meyli olmaq', tr: 'tend' },
      { id: 678, wd: 'doldurmaq', tr: 'fill' },
      { id: 679, wd: 'görünmək', tr: 'appear' },
      { id: 680, wd: 'birdən-birə, qəflətən', tr: 'suddenly'
      }
    ],
    [{ id: 681, wd: 'borc almaq', tr: 'borrow' },
      { id: 682, wd: 'həll etmək', tr: 'resolve' },
      { id: 683, wd: 'qəza', tr: 'accident' },
      { id: 684, wd: 'yumaq', tr: 'wash' },
      { id: 685, wd: 'əl', tr: 'hand' },
      { id: 686, wd: 'həbs', tr: 'arrest' },
      { id: 687, wd: 'cinayətkar', tr: 'criminal' },
      { id: 688, wd: 'dua etmək', tr: 'pray' },
      { id: 689, wd: 'Allah', tr: 'god' },
      { id: 690, wd: 'mənsub olmaq', tr: 'belong'
      }
    ],
    [{ id: 691, wd: 'qismən', tr: 'partly' },
      { id: 692, wd: 'səbəb', tr: 'reason' },
      { id: 693, wd: 'ifadə etmək', tr: 'express' },
      { id: 694, wd: 'diqqət', tr: 'attention' },
      { id: 695, wd: 'dərhal', tr: 'immediately' },
      { id: 696, wd: 'ətraflı', tr: 'thoroughly' },
      { id: 697, wd: 'təsvir etmək', tr: 'describe' },
      { id: 698, wd: 'çətinlik', tr: 'difficulty' },
      { id: 699, wd: 'yanlış, səhv', tr: 'incorrectly' },
      { id: 700, wd: 'bölüşmək, şərik olmaq', tr: 'share'
      }
    ],[],[],[],[],[],[],[],[],[],[],
    [{ id: 801, wd: 'kəşf', tr: 'discovery' },
      { id: 802, wd: 'acı-acı, kəskin', tr: 'bitterly' },
      { id: 803, wd: 'məyus, ümidi boşa çıxmış', tr: 'disappointed' },
      { id: 804, wd: 'qulaq asmaq, dinləmək', tr: 'listen' },
      { id: 805, wd: 'min', tr: 'thousand' },
      { id: 806, wd: 'ay', tr: 'month' },
      { id: 807, wd: 'başlanğıc', tr: 'beginning' },
      { id: 808, wd: 'sakitcə', tr: 'quietly' },
      { id: 809, wd: 'çox böyük, nəhəng', tr: 'huge' },
      { id: 810, wd: 'birlikdə', tr: 'together'
      }
    ],
    [{ id: 811, wd: 'dünən', tr: 'yesterday' },
      { id: 812, wd: 'bizə, bizi', tr: 'us' },
      { id: 813, wd: 'görüş', tr: 'meeting' },
      { id: 814, wd: 'həmçinin', tr: 'also' },
      { id: 815, wd: 'məşhur', tr: 'famous' },
      { id: 816, wd: 'stol', tr: 'table' },
      { id: 817, wd: 'tövsiyə', tr: 'recommendation' },
      { id: 818, wd: 'yalnız', tr: 'only' },
      { id: 819, wd: 'çəkmə, çəkilmə (papiros, qatran və s.)', tr: 'smoking' },
      { id: 820, wd: 'əyləncə', tr: 'party'
      }
    ],
    [{ id: 821, wd: 'yüz', tr: 'hundred' },
      { id: 822, wd: 'aşağıdaki', tr: 'following' },
      { id: 823, wd: 'göstərmək', tr: 'show' },
      { id: 824, wd: 'parlaq', tr: 'brilliant' },
      { id: 825, wd: 'eşitmək', tr: 'hear' },
      { id: 826, wd: 'uzaqda, bir yana', tr: 'away' },
      { id: 827, wd: 'yavaş-yavaş', tr: 'slowly' },
      { id: 828, wd: 'dəqiqə', tr: 'minute' },
      { id: 829, wd: 'əvvəl', tr: 'ago' },
      { id: 830, wd: 'sonra, daha sonra', tr: 'later'
      }
    ],
    [{ id: 831, wd: 'stul', tr: 'chair' },
      { id: 832, wd: 'çanta, kisə', tr: 'bag' },
      { id: 833, wd: 'dərhal', tr: 'immediately' },
      { id: 834, wd: 'özü, özünə (kişi cinsi)', tr: 'himself' },
      { id: 835, wd: 'iki', tr: 'two' },
      { id: 836, wd: 'saat (60 dəqiqə)', tr: 'hour' },
      { id: 837, wd: 'qəzet', tr: 'newspaper' },
      { id: 838, wd: 'kreslo', tr: 'armchair' },
      { id: 839, wd: 'ondan sonra, onda', tr: 'then' },
      { id: 840, wd: 'çatdırılma', tr: 'delivery'
      }
    ],
    [{ id: 841, wd: 'yeddi', tr: 'seven' },
      { id: 842, wd: 'yarış, müsabiqə', tr: 'competition' },
      { id: 843, wd: 'geniş', tr: 'spacious' },
      { id: 844, wd: 'mənzil', tr: 'flat' },
      { id: 845, wd: 'əl, qol', tr: 'arm' },
      { id: 846, wd: 'əlli', tr: 'fifty' },
      { id: 847, wd: 'hekayə', tr: 'story' },
      { id: 848, wd: 'meyvə', tr: 'fruit' },
      { id: 849, wd: 'tərəvəz', tr: 'vegetable' },
      { id: 850, wd: 'malik olmaq, öz, özünün', tr: 'own'
      }
    ],
    [{ id: 851, wd: 'balıq', tr: 'fish' },
      { id: 852, wd: 'şəkil', tr: 'picture' },
      { id: 853, wd: 'cürətlə', tr: 'bravely' },
      { id: 854, wd: 'tədarükçü', tr: 'supplier' },
      { id: 855, wd: 'top', tr: 'ball' },
      { id: 856, wd: 'qələm', tr: 'pen' },
      { id: 857, wd: 'şah əsəri', tr: 'masterpiece' },
      { id: 858, wd: 'əsgər', tr: 'soldier' },
      { id: 859, wd: 'cəsarətlə', tr: 'courageously' },
      { id: 860, wd: 'müştəri', tr: 'client'
      }
    ],
    [{ id: 861, wd: 'pendir', tr: 'cheese' },
      { id: 862, wd: 'tamamilə', tr: 'completely' },
      { id: 863, wd: 'səhər yeməyi', tr: 'breakfast' },
      { id: 864, wd: 'stəkan, şüşə', tr: 'glass' },
      { id: 865, wd: 'arxasında, arxada', tr: 'behind' },
      { id: 866, wd: 'at', tr: 'horse' },
      { id: 867, wd: 'ayaqqabı', tr: 'shoes' },
      { id: 868, wd: 'sevimli', tr: 'favorite' },
      { id: 869, wd: 'xüsusi', tr: 'special' },
      { id: 870, wd: 'qapı', tr: 'door'
      }
    ],
    [{ id: 871, wd: 'çətinlik', tr: 'difficulty' },
      { id: 872, wd: 'hovuz', tr: 'pool' },
      { id: 873, wd: 'məbləğ', tr: 'sum' },
      { id: 874, wd: 'külək', tr: 'wind' },
      { id: 875, wd: 'gözlənilmədən', tr: 'unexpectedly' },
      { id: 876, wd: 'erkən, tezdən', tr: 'early' },
      { id: 877, wd: 'quyu, çala', tr: 'hole' },
      { id: 878, wd: 'çay', tr: 'river' },
      { id: 879, wd: 'ayaq', tr: 'leg' },
      { id: 880, wd: 'karyera', tr: 'career'
      }
    ],
    [{ id: 881, wd: 'palto', tr: 'coat' },
      { id: 882, wd: 'qarmaqcıq', tr: 'hook' },
      { id: 883, wd: 'quş', tr: 'bird' },
      { id: 884, wd: 'gəmi', tr: 'ship' },
      { id: 885, wd: 'günəş', tr: 'sun' },
      { id: 886, wd: 'dəbli', tr: 'stylish' },
      { id: 887, wd: 'dəhşətli', tr: 'terrible' },
      { id: 888, wd: 'üç', tr: 'three' },
      { id: 889, wd: 'hesab', tr: 'account' },
      { id: 890, wd: 'daş', tr: 'stone'
      }
    ],
    [{ id: 891, wd: 'işçi, fəhlə', tr: 'worker' },
      { id: 892, wd: 'bəzən, hərdən', tr: 'sometimes' },
      { id: 893, wd: 'lampa', tr: 'lamp' },
      { id: 894, wd: 'səhv, yanlış olaraq', tr: 'wrongly' },
      { id: 895, wd: 'işçi, əməkdaş', tr: 'employee' },
      { id: 896, wd: 'piroq', tr: 'pie' },
      { id: 897, wd: 'səbəb', tr: 'reason' },
      { id: 898, wd: 'velosiped sürmək', tr: 'cycling' },
      { id: 899, wd: 'deyişmək, deyişiklik', tr: 'change' },
      { id: 900, wd: 'göz yaşı', tr: 'tear'
      }
    ],
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
    [{ id: 1051, wd: 'təəcübləndirmək, təəcüb', tr: 'surprise' },
      { id: 1052, wd: 'həsr etmək, ayırmaq', tr: 'devote' },
      { id: 1053, wd: 'ləğv etmək', tr: 'cancel' },
      { id: 1054, wd: 'gözləmək, ümid etmək', tr: 'expect' },
      { id: 1055, wd: 'boşanmaq, boşanma', tr: 'divorce' },
      { id: 1056, wd: 'öyünmək', tr: 'boast' },
      { id: 1057, wd: 'nailiyyət', tr: 'achievement' },
      { id: 1058, wd: 'sözünü kəsmək', tr: 'interrupt' },
      { id: 1059, wd: 'təsir bağışlamaq', tr: 'impress' },
      { id: 1060, wd: 'münasib olmaq, uyğun gəlmək', tr: 'suit'
      }
    ],
    [{ id: 1061, wd: 'eşitmək', tr: 'hear' },
      { id: 1062, wd: 'sağalmaq', tr: 'recover' },
      { id: 1063, wd: 'müsbət', tr: 'positive' },
      { id: 1064, wd: 'təsir', tr: 'effect' },
      { id: 1065, wd: 'almaq, əldə etmək', tr: 'get' },
      { id: 1066, wd: 'tanış', tr: 'acquaintance' },
      { id: 1067, wd: 'üzmək', tr: 'swim' },
      { id: 1068, wd: 'layiq olmaq, qazanmaq', tr: 'deserve' },
      { id: 1069, wd: 'etmək, düzəltmək', tr: 'make' },
      { id: 1070, wd: 'səhv', tr: 'mistake'
      }
    ],
    [{ id: 1071, wd: 'qərar vermək', tr: 'decide' },
      { id: 1072, wd: 'bilmək', tr: 'know' },
      { id: 1073, wd: 'bacarmaq, idarə etmək', tr: 'manage' },
      { id: 1074, wd: 'təsir etmək', tr: 'influence' },
      { id: 1075, wd: 'götürmək', tr: 'take' },
      { id: 1076, wd: 'etmək, düzəltmək', tr: 'make' },
      { id: 1077, wd: 'cəlb etmək', tr: 'attract' },
      { id: 1078, wd: 'diqqət', tr: 'attention' },
      { id: 1079, wd: 'istəmək', tr: 'want' },
      { id: 1080, wd: 'görmək', tr: 'see'
      }
    ],
    [{ id: 1081, wd: 'həvəs', tr: 'enthusiasm' },
      { id: 1082, wd: 'minnətdar', tr: 'grateful' },
      { id: 1083, wd: 'film, kino', tr: 'movie' },
      { id: 1084, wd: 'riskli', tr: 'risky' },
      { id: 1085, wd: 'təhlükəli', tr: 'dangerous' },
      { id: 1086, wd: 'möhtəşəm', tr: 'outstanding' },
      { id: 1087, wd: 'səxavətli', tr: 'generous' },
      { id: 1088, wd: 'enerji', tr: 'energy' },
      { id: 1089, wd: 'təəcübləndirmək, təəcüb', tr: 'surprise' },
      { id: 1090, wd: 'hissə, detal', tr: 'detail'
      }
    ],
    [{ id: 1091, wd: 'səhv', tr: 'wrong' },
      { id: 1092, wd: 'olduqca', tr: 'quite' },
      { id: 1093, wd: 'qısa', tr: 'short' },
      { id: 1094, wd: 'daxilində', tr: 'inside' },
      { id: 1095, wd: 'bina', tr: 'building' },
      { id: 1096, wd: 'qonaqpərvər', tr: 'hospitable' },
      { id: 1097, wd: 'aşağıda, aşağı', tr: 'below' },
      { id: 1098, wd: 'orta', tr: 'average' },
      { id: 1099, wd: 'düzgün', tr: 'correct' },
      { id: 1100, wd: 'bilik', tr: 'knowledge'
      }
    ],
    [{ id: 1101, wd: 'məmnun', tr: 'satisfied' },
      { id: 1102, wd: 'əminlik', tr: 'confidence' },
      { id: 1103, wd: 'qorxmaq', tr: 'afraid' },
      { id: 1104, wd: 'çətinlik', tr: 'difficulty' },
      { id: 1105, wd: 'hazır', tr: 'ready' },
      { id: 1106, wd: 'qayğıkeş, diqqətli', tr: 'careful' },
      { id: 1107, wd: 'tətil, məzuniyyət', tr: 'holiday' },
      { id: 1108, wd: 'dəniz sahili', tr: 'beach' },
      { id: 1109, wd: 'fəxr etmək', tr: 'proud' },
      { id: 1110, wd: 'nailiyyət', tr: 'achievement'
      }
    ],
    [{ id: 1111, wd: 'qadınlar', tr: 'women' },
      { id: 1112, wd: 'maraqlanan, hər şeyi bilməyə çalışan', tr: 'curious' },
      { id: 1113, wd: 'cəhd', tr: 'attempt' },
      { id: 1114, wd: 'uğurlu', tr: 'successful' },
      { id: 1115, wd: 'nəticə', tr: 'conclusion' },
      { id: 1116, wd: 'məntiqi', tr: 'logical' },
      { id: 1117, wd: 'təəssürat doğuran', tr: 'impressive' },
      { id: 1118, wd: 'zəif', tr: 'weak' },
      { id: 1119, wd: 'təşəbbüs etmək, cəhd, təşəbbüs', tr: 'attempt' },
      { id: 1120, wd: 'qaneedici', tr: 'satisfactory'
      }
    ],
    [{ id: 1121, wd: 'tətil, məzuniyyət', tr: 'holiday' },
      { id: 1122, wd: 'öndə, irəlidə', tr: 'ahead' },
      { id: 1123, wd: 'lütfkar, xeyirxah, növ', tr: 'kind' },
      { id: 1124, wd: 'arxada, arxasında', tr: 'behind' },
      { id: 1125, wd: 'yol', tr: 'way' },
      { id: 1126, wd: 'zəhmətkeş', tr: 'hard-working' },
      { id: 1127, wd: 'bəla, müsibət', tr: 'trouble' },
      { id: 1128, wd: 'altında', tr: 'under' },
      { id: 1129, wd: 'həbs etmək, tutmaq, həbs, yaxalama', tr: 'arrest' },
      { id: 1130, wd: 'təəccüb, təəccübləndirmək', tr: 'surprise'
      }
    ],
    [{ id: 1131, wd: 'şübhəli, şübhədoğuran', tr: 'suspicious' },
      { id: 1132, wd: 'dünən', tr: 'yesterday' },
      { id: 1133, wd: 'fikirli', tr: 'thoughtful' },
      { id: 1134, wd: 'şəxs, adam', tr: 'person' },
      { id: 1135, wd: 'vaxt', tr: 'time' },
      { id: 1136, wd: 'eyni, oxşar', tr: 'same' },
      { id: 1137, wd: 'komanda', tr: 'team' },
      { id: 1138, wd: 'müddət, uzun', tr: 'long' },
      { id: 1139, wd: 'fikir, ideya', tr: 'idea' },
      { id: 1140, wd: 'gözlənilməz', tr: 'unpredictable'
      }
    ],
    [{ id: 1141, wd: 'çətin', tr: 'difficult' },
      { id: 1142, wd: 'soyad', tr: 'surname' },
      { id: 1143, wd: 'otel', tr: 'hotel' },
      { id: 1144, wd: 'məyus, ümidi boşa çıxmış', tr: 'disappointed' },
      { id: 1145, wd: 'hava limanı', tr: 'airport' },
      { id: 1146, wd: 'ən yaxın', tr: 'nearest' },
      { id: 1147, wd: 'supermarket', tr: 'supermarket' },
      { id: 1148, wd: 'mühazirə, leksiya', tr: 'lecture' },
      { id: 1149, wd: 'film, kino', tr: 'movie' },
      { id: 1150, wd: 'əyləncə', tr: 'party'
      }
    ],
  ]
}
// console.log(JSON.stringify(initialState))

// for(let i=105; i<115;i++){
// for(let a=0;a<10;a++){
//   // if(initialState.words[i][a].tr.indexOf(' ')>0)
//   console.log(initialState.words[i][a].tr)
// }}

const SET_LEARNWORDS = 'SET_LEARNWORDS'
export const setLearnWords = value => ({
    type: SET_LEARNWORDS,
    value
})

const learnWords = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEARNWORDS:
      return {
        ...state, words: action.value
      }
  
    default:
      return state
  }
}

export default learnWords