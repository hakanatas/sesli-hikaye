/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "sesli-hikaye",
    "title": "Sesli Hikâye",
    "titleEn": "A Story in Sound",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.6",
    "outcome": "Ses dosyası için kurgu oluşturabilme",
    "outcomeEn": "Building a storyline for an audio file",
    "duration": 116.6,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.3,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.3,
      "t1": 33.3,
      "name": "Problemi seç",
      "en": "Choose a problem",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 33.3,
      "t1": 63.1,
      "name": "Sesli hikâyenin unsurları",
      "en": "Parts of an audio story",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 63.1,
      "t1": 80.1,
      "name": "Senaryo",
      "en": "Script",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 80.1,
      "t1": 101.6,
      "name": "Senaryoyu değerlendir",
      "en": "Check the script",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 101.6,
      "t1": 116.6,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
