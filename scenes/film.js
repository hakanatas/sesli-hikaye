/* ─────────────────────────────────────────────────────────────
   SESLİ HİKÂYE — BTY.6.2.6 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'sesli-hikaye', title: 'Sesli Hikâye', titleEn: 'A Story in Sound', code: 'BTY.6.2.6',
    outcomeEn: 'Building a storyline for an audio file',
    summary: 'Sesli bir ürünle çözülebilecek gerçek hayat problemleri seçilir: yaşlıların yalnızlığı, deprem hazırlığı, sahte haberler. Sesli hikâyenin unsurları (anlatıcı, diyalog, ses efekti, müzik, sessizlik ve mesaj) belirlenir; izinli müzik kullanmanın önemi hatırlatılır. "Dedemle geçmişe yolculuk" adlı bir sesli hikâyenin senaryosu dört bölüm hâlinde yazılır. Son olarak senaryo bütünlük ve kullanışlılık açısından değerlendirilir.',
    summaryEn: 'Real-life problems suited to audio are chosen; audio story elements (narrator, dialogue, sound effects, music, silence, message) are set with a note on licensed music; a four-part script, "A trip to the past with Grandpa", is written; and it is checked for coherence and usefulness.',
    blurb: 'Sesle anlatılacak problem, anlatıcı-diyalog-efekt-müzik, dört bölümlük senaryo ve değerlendirme.',
    posterAlt: 'Başlık ve Karo; çevresinde mikrofon, kulaklık, hikâye ve kalp karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'mic', c: 'mercan' }, { icon: 'story', c: 'kobalt' }, { icon: 'headphones', c: 'turkuaz' }, { icon: 'heart', c: 'mercan' }, { icon: 'chat', c: 'safran' }, { icon: 'wave', c: 'mor' }, { icon: 'clock', c: 'zumrut' }, { icon: 'rubric', c: 'kobalt' }],
      beats: [
        { tr: 'Dedem çocukluğunu anlatınca herkes susuyor', en: 'When Grandpa tells stories of his childhood, everyone listens', extra: 1,
          note: 'Karo\'nun dedesi çocukluğunu anlatırken herkes can kulağıyla dinliyor. Bu anıları bir sesli hikâyeye dönüştürebilir miyiz?' },
        { tr: 'Önce sesli hikâyemizin kurgusunu yapalım', en: 'Let\'s first plan our audio story',
          note: 'Bir ses dosyası hazırlamadan önce ne anlatacağımızı planlarız.' },
      ] },
    { type: 'columns', name: 'Problemi seç', en: 'Choose a problem', desc: 'Sesli bir ürünle anlatılacak gerçek hayat problemleri.', out: 'a',
      cols: [{ label: 'PROBLEM', c: 'mercan' }, { label: 'SESLİ ÇÖZÜM', c: 'zumrut' }],
      items: [
        { text: 'Yaşlılar kendini yalnız hissedebiliyor', col: 0, icon: 'heart', beat: 0 },
        { text: 'Deprem anında ne yapacağımızı unutuyoruz', col: 0, icon: 'warning', beat: 0 },
        { text: 'Sahte haberlere kolayca inanıyoruz', col: 0, icon: 'chat', beat: 0 },
        { text: '"Dedemle geçmişe yolculuk" sesli hikâyesi', col: 1, icon: 'story', beat: 1 },
        { text: 'Deprem çantası sesli rehberi', col: 1, icon: 'speaker', beat: 1 },
        { text: '"Haber dedektifi" podcast bölümü', col: 1, icon: 'mic', beat: 1 },
      ],
      beats: [
        { tr: 'Sesle anlatılabilecek bir problem seç', en: 'Pick a problem you can tell with sound', extra: 1,
          note: 'Önce bir gerçek hayat problemi seçeriz: yaşlıların yalnızlığı, deprem hazırlığı ya da sahte haberler.' },
        { tr: 'Sesli ürün bu probleme çözüm olsun', en: 'Let the audio answer that problem', extra: 1,
          note: 'Sonra sesli ürünümüzün bu probleme nasıl yardım edeceğini düşünürüz. Karo "Dedemle geçmişe yolculuk" hikâyesini seçti: yaşlılarımızı dinlemenin değerini anlatacak.' },
      ] },
    { type: 'cards', name: 'Sesli hikâyenin unsurları', en: 'Parts of an audio story', desc: 'Anlatıcı, diyalog, ses efekti, müzik, sessizlik ve mesaj.', out: 'b',
      cards: [
        { word: 'ANLATICI', def: 'Hikâyeyi dinleyiciye anlatan ses', icon: 'mic', c: 'kobalt' },
        { word: 'DİYALOG', def: 'Karakterlerin karşılıklı konuşması', icon: 'chat', c: 'safran' },
        { word: 'SES EFEKTİ', def: 'Mekânı canlandıran sesler: kuş, top, rüzgâr', icon: 'wave', c: 'turkuaz' },
      ],
      result: { word: 'SESLİ HİKÂYE', c: 'mercan', chips: ['müzik', 'sessizlik', 'mesaj'], line: 'İzinli ya da kendi müziğini kullan' },
      beats: [
        { tr: 'Anlatıcı: hikâyeyi anlatan ses', en: 'Narrator: the voice telling the story',
          note: 'Anlatıcı dinleyiciyi hikâyeye davet eder: Bugün dedemle geçmişe gidiyoruz!' },
        { tr: 'Diyalog: karakterler konuşur', en: 'Dialogue: characters talk',
          note: 'Karo ile dedesinin karşılıklı konuşmaları hikâyeyi canlı yapar.' },
        { tr: 'Ses efekti: mekânı gözümüzde canlandırır', en: 'Sound effects bring the place to life',
          note: 'Ses dosyasında görüntü yoktur. Kuş sesi, top sesi, rüzgâr sesi mekânı gözümüzde canlandırır.' },
        { tr: 'Müzik, sessizlik ve bir mesaj', en: 'Music, silence and a message', extra: 1.5,
          note: 'Müzik duygu katar, kısa bir sessizlik merak uyandırır. Hepsi bir mesajı taşır. Başkasının müziğini kullanacaksak izinli olmasına dikkat ederiz.' },
      ] },
    { type: 'steps', name: 'Senaryo', en: 'Script', desc: 'Unsurları kapsayan dört bölümlük sesli hikâye senaryosu.', out: 'c',
      steps: [
        { icon: 'mic', label: '1. Giriş', text: 'Müzik ve anlatıcı: "Bugün dedemle geçmişe gidiyoruz!"', c: 'kobalt' },
        { icon: 'chat', label: '2. Diyalog', text: '"Dede, çocukken ne oynardın?"', c: 'safran' },
        { icon: 'wave', label: '3. Efekt', text: 'Çocuk sesleri, top sesi, dedenin gülüşü', c: 'turkuaz' },
        { icon: 'heart', label: '4. Kapanış', text: 'Mesaj: "Büyüklerimizi dinleyelim."', c: 'mercan' },
      ],
      beats: [
        { tr: 'Giriş ve diyalog', en: 'Opening and dialogue', show: 2, extra: 1,
          note: 'Senaryoyu bölümlere ayırırız. Giriş: hafif müzik ve anlatıcı. Ardından diyalog: Dede, çocukken ne oynardın?' },
        { tr: 'Efektler ve kapanış mesajı', en: 'Sound effects and a closing message', show: 4, extra: 1,
          note: 'Dedenin anlattığı oyunu ses efektleriyle canlandırırız. Kapanışta mesajımızı söyleriz: Büyüklerimizi dinleyelim.' },
      ] },
    { type: 'judge', name: 'Senaryoyu değerlendir', en: 'Check the script', desc: 'Senaryo bütünlük ve kullanışlılık açısından değerlendirilir.', out: 'ç', labels: { ok: 'tamam', no: 'düzelt' },
      beats: [
        { tr: 'Bölümler sırayla ilerliyor mu?', en: 'Do the parts follow in order?',
          note: 'Giriş, diyalog, efekt ve kapanış sırayla ilerliyor. Hikâye bütün. Tamam.',
          row: { icon: 'story', text: 'Giriş, diyalog, efekt ve kapanış sırayla ilerliyor', ok: true, why: 'Hikâye bütün' } },
        { tr: 'Müzik konuşmayı bastırıyor mu?', en: 'Does the music drown out the voices?',
          note: 'Müzik çok yüksek olursa konuşmalar anlaşılmaz. Senaryoya "müzik alçak" notu eklemeliyiz.',
          row: { icon: 'speaker', text: 'Diyalogda müzik konuşmadan yüksek', ok: false, why: 'Müziği alçaltmalıyım' } },
        { tr: 'Müziğin izni var mı?', en: 'Is the music licensed?',
          note: 'İnternetten bulduğumuz bir şarkıyı izinsiz kullanamayız. Telifsiz ya da kendi ürettiğimiz müziği seçmeliyiz.',
          row: { icon: 'copyright', text: 'Ünlü bir şarkıyı izin almadan koydum', ok: false, why: 'Telifsiz ya da kendi müziğimi seçmeliyim' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'target', c: 'mercan', text: 'Sesle anlatılacak gerçek bir problem seç' },
        { icon: 'mic', c: 'kobalt', text: 'Anlatıcı, diyalog, efekt, müzik, mesaj' },
        { icon: 'rubric', c: 'zumrut', text: 'Senaryonu bütünlük ve izin için kontrol et' },
      ],
      beats: [
        { tr: 'Aklında kalsın: kulak da görür', en: 'Remember: ears can see too',
          note: 'Aklında kalsın: iyi bir sesli hikâyede dinleyici gözlerini kapatınca her şeyi görür.' },
        { tr: 'Senaryo hazır, sıra kayıtta!', en: 'The script is ready. Time to record!',
          note: 'Senaryomuz hazır. Bir sonraki adımda sesi kaydedip düzenleyeceğiz!' },
      ] },
  ],
});
