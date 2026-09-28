/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.2, tr: "Dedem çocukluğunu anlatınca herkes susuyor", en: "When Grandpa tells stories of his childhood, everyone listens",
      note: "Karo'nun dedesi çocukluğunu anlatırken herkes can kulağıyla dinliyor. Bu anıları bir sesli hikâyeye dönüştürebilir miyiz?" },
    { scene: 1, start: 8.9, end: 14.9, tr: "Önce sesli hikâyemizin kurgusunu yapalım", en: "Let's first plan our audio story",
      note: "Bir ses dosyası hazırlamadan önce ne anlatacağımızı planlarız." },
    { scene: 2, start: 17.8, end: 24.5, tr: "Sesle anlatılabilecek bir problem seç", en: "Pick a problem you can tell with sound",
      note: "Önce bir gerçek hayat problemi seçeriz: yaşlıların yalnızlığı, deprem hazırlığı ya da sahte haberler." },
    { scene: 2, start: 25.3, end: 31.9, tr: "Sesli ürün bu probleme çözüm olsun", en: "Let the audio answer that problem",
      note: "Sonra sesli ürünümüzün bu probleme nasıl yardım edeceğini düşünürüz. Karo \"Dedemle geçmişe yolculuk\" hikâyesini seçti: yaşlılarımızı dinlemenin değerini anlatacak." },
    { scene: 3, start: 34.8, end: 40.4, tr: "Anlatıcı: hikâyeyi anlatan ses", en: "Narrator: the voice telling the story",
      note: "Anlatıcı dinleyiciyi hikâyeye davet eder: Bugün dedemle geçmişe gidiyoruz!" },
    { scene: 3, start: 41.3, end: 46.9, tr: "Diyalog: karakterler konuşur", en: "Dialogue: characters talk",
      note: "Karo ile dedesinin karşılıklı konuşmaları hikâyeyi canlı yapar." },
    { scene: 3, start: 47.8, end: 53.7, tr: "Ses efekti: mekânı gözümüzde canlandırır", en: "Sound effects bring the place to life",
      note: "Ses dosyasında görüntü yoktur. Kuş sesi, top sesi, rüzgâr sesi mekânı gözümüzde canlandırır." },
    { scene: 3, start: 54.5, end: 61.7, tr: "Müzik, sessizlik ve bir mesaj", en: "Music, silence and a message",
      note: "Müzik duygu katar, kısa bir sessizlik merak uyandırır. Hepsi bir mesajı taşır. Başkasının müziğini kullanacaksak izinli olmasına dikkat ederiz." },
    { scene: 4, start: 64.5, end: 71.3, tr: "Giriş ve diyalog", en: "Opening and dialogue",
      note: "Senaryoyu bölümlere ayırırız. Giriş: hafif müzik ve anlatıcı. Ardından diyalog: Dede, çocukken ne oynardın?" },
    { scene: 4, start: 72, end: 78.8, tr: "Efektler ve kapanış mesajı", en: "Sound effects and a closing message",
      note: "Dedenin anlattığı oyunu ses efektleriyle canlandırırız. Kapanışta mesajımızı söyleriz: Büyüklerimizi dinleyelim." },
    { scene: 5, start: 81.5, end: 87.2, tr: "Bölümler sırayla ilerliyor mu?", en: "Do the parts follow in order?",
      note: "Giriş, diyalog, efekt ve kapanış sırayla ilerliyor. Hikâye bütün. Tamam." },
    { scene: 5, start: 88, end: 93.7, tr: "Müzik konuşmayı bastırıyor mu?", en: "Does the music drown out the voices?",
      note: "Müzik çok yüksek olursa konuşmalar anlaşılmaz. Senaryoya \"müzik alçak\" notu eklemeliyiz." },
    { scene: 5, start: 94.5, end: 100.2, tr: "Müziğin izni var mı?", en: "Is the music licensed?",
      note: "İnternetten bulduğumuz bir şarkıyı izinsiz kullanamayız. Telifsiz ya da kendi ürettiğimiz müziği seçmeliyiz." },
    { scene: 6, start: 103, end: 108.7, tr: "Aklında kalsın: kulak da görür", en: "Remember: ears can see too",
      note: "Aklında kalsın: iyi bir sesli hikâyede dinleyici gözlerini kapatınca her şeyi görür." },
    { scene: 6, start: 109.5, end: 115.2, tr: "Senaryo hazır, sıra kayıtta!", en: "The script is ready. Time to record!",
      note: "Senaryomuz hazır. Bir sonraki adımda sesi kaydedip düzenleyeceğiz!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
