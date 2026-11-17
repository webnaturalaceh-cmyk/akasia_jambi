/**
 * AKASIA JAMBI - JAVASCRIPT LOGIC
 * Phase 1: Navigation Bar & Beranda Section
 * Bilingual Engine (ID/EN), Accessible Drawer, Native <dialog> Modal, Scrollspy
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===========================================================================
  // 1. BILINGUAL TRANSLATIONS ENGINE (ID | EN)
  // ===========================================================================
  const translations = {
    id: {
      // Document Metadata
      docTitle: 'Akasia Jambi | Konservasi Beruang Madu Sumatra',
      skipLink: 'Lewati ke konten utama',

      // Navbar
      brandTitle: 'AKASIA',
      brandSubtitle: 'JAMBI',
      navHome: 'Beranda',
      navAbout: 'Tentang Kami',
      navProgram: 'Program',
      navPartners: 'PARTNER',
      navContact: 'Kontak',
      navEdu: 'Edukasi Beruang Madu',
      btnReport: 'LAPOR',

      // Hero Banner
      heroBadge: 'KONSERVASI BERUANG MADU JAMBI',
      heroMotto: 'The forest tells its story, we protect it!',
      heroSubtitle: 'Yayasan Akasia Jambi berdedikasi menjaga kelestarian Beruang Madu Sumatra (<em>Helarctos malayanus</em>) dari ancaman kepunahan, memberantas jerat perburuan liar, dan merestorasi koridor ekosistem hutan hujan tropis di Provinsi Jambi.',
      heroCtaReport: 'LAPOR',
      heroStat1Num: '1.2 – 1.5 M',
      heroStat1Label: 'Spesies Beruang Terkecil di Dunia',
      heroStat2Num: 'VULNERABLE',
      heroStat2Label: 'Status Rentan (IUCN Red List)',
      heroStat3Num: 'UU NO. 5/1990',
      heroStat3Label: '100% Satwa Dilindungi Penuh',

      // Educational Section Header
      eduTitle: 'Mengenal Beruang Madu Sumatra (Helarctos malayanus)',
      eduSubtitle: 'Spesies payung hutan tropis Sumatra yang menyimpan rahasia keanekaragaman hayati dan keseimbangan ekosistem alami Jambi.',

      // Spotlight Card
      taxLabel1: 'Nama Ilmiah:',
      taxLabel2: 'Status IUCN:',
      taxValIucn: 'Vulnerable (Rentan Punah)',
      taxLabel3: 'Status Hukum:',
      taxValLegal: 'Dilindungi Penuh RI',
      taxLabel4: 'Sebaran Jambi:',
      taxValRegion: 'Bukit Tigapuluh & Kerinci',
      spotlightKicker: 'IKON BIODIVERSITAS SUMATRA',
      spotlightTitle: 'Penjaga Kanopi & \'Petani\' Hutan Tropis Sumatra',
      spotlightDesc1: 'Beruang Madu (Helarctos malayanus) adalah jenis beruang terkecil di muka bumi. Hewan ini memiliki ciri khas bulu hitam pekat berkilau serta corak kuning-keemasan berbentuk tapal kuda (U atau V) di dadanya yang unik pada setiap individu, berfungsi layaknya sidik jari manusia.',
      spotlightDesc2: 'Di bentang alam hutan Provinsi Jambi—mulai dari ekosistem Bukit Tigapuluh, Harapan Rainforest, hingga koridor Taman Nasional Kerinci Seblat—satwa soliter ini memegang peran krusial sebagai spesies payung (umbrella species). Menjaga ruang jelajah beruang madu secara otomatis melindungi ribuan flora-fauna hutan hujan lainnya yang bergantung pada kanopi rimba yang sama.',
      feat1Title: 'Soliter & Nokturnal',
      feat1Desc: 'Aktif mencari makan pada senja hingga malam hari di ketinggian pohon kanopi.',
      feat2Title: 'Spesies Pemanjat Ulung',
      feat2Desc: 'Cakar tajam melengkung hingga 7 cm memungkinkan tidur di sarang kanopi setinggi 10–20 meter.',
      spotlightQuote: '"Hilangnya satu individu beruang madu bukan sekadar kehilangan satwa, tetapi terputusnya rantai regenerasi puluhan jenis pohon buah liar di hutan Sumatra."',
      spotlightQuoteCite: '— Tim Konservasi Lapangan Akasia Jambi',

      // 4-Card Educational Grid
      gridHeading: 'Mengapa Beruang Madu Harus Dilindungi?',
      gridSubheading: 'Empat pilar penting memahami keunikan biologis, fungsi ekologis penting, ancaman kepunahan, dan aksi nyata mitigasi bersama masyarakat.',
      card1Title: 'Karakteristik Unik',
      card1Subtitle: 'Morfologi & Adaptasi Kanopi Khusus',
      card1P1: 'Spesies Terkecil: Panjang tubuh hanya 1,2–1,5 meter dan berat 30–65 kg, menjadikannya sangat lincah memanjat pohon rimba.',
      card1P2: 'Tanda Dada Tapal Kuda: Corak kuning keemasan di dada berbentuk huruf U atau V yang unik pada tiap individu layaknya sidik jari.',
      card1P3: 'Cakar Panjang 7 CM: Melengkung tajam dan kuat untuk merobek batang pohon lapuk serta memanjat hingga kanopi tertinggi.',
      card1P4: 'Lidah Ekstra Panjang (25 cm): Adaptasi anatomis luar biasa untuk menjilati madu lebah hutan dan rayap di rongga sempit kayu.',

      card2Title: 'Peran Penting di Hutan',
      card2Subtitle: 'Gelar Kehormatan \'Petani Hutan\'',
      card2P1: 'Penyemai Benih Alami: Memakan puluhan jenis buah hutan dan menyebarkan biji utuh berkualitas melalui kotorannya ke penjuru rimba.',
      card2P2: 'Pengendali Hama Pohon: Membongkar sarang rayap dan kumbang pengebor kayu, menjaga pohon-pohon rimba tetap sehat dan tegak.',
      card2P3: 'Arsitek Penetrasi Cahaya: Membuat sarang istirahat di cabang kanopi, membuka celah sinar matahari bagi anakan bibit di lantai hutan.',
      card2P4: 'Penyedia Rumah Satwa: Rongga pohon yang digali beruang madu kemudian dipakai bersarang oleh burung rangkong, bajing, dan lebah.',

      card3Title: 'Ancaman Kepunahan',
      card3Subtitle: 'Tekanan Kritis di Lanskap Jambi',
      card3P1: 'Jerat Kawat Babi: Ancaman paling mematikan. Jerat seling baja di perbatasan kebun kerap menjerat cakar hingga membusuk dan diamputasi.',
      card3P2: 'Deforestasi & Koridor Putus: Alih fungsi hutan primer memecah habitat alami, membatasi pasokan buah liar dan memaksa satwa keluar rimba.',
      card3P3: 'Perburuan Liar: Diburu secara ilegal untuk diambil empedu (obat tradisional), taring, kuku, serta perdagangan anak beruang eksotis.',
      card3P4: 'Konflik Manusia-Satwa: Saat sumber pangan di hutan menipis, beruang mencari buah di kebun warga dan sering kali berujung diracuni.',

      card4Title: 'Tindakan Darurat Warga',
      card4Subtitle: 'Prosedur Aman Bila Bertemu Beruang',
      card4P1: 'JANGAN Menyerang / Memojokkan: Beruang madu cenderung pemalu, namun akan menyerang agresif bila merasa terkepung atau ada anak beruang.',
      card4P2: 'JANGAN Pasang Jerat Kawat: Memasang jerat satwa liar adalah tindak pidana dengan ancaman hukuman 5 tahun penjara (UU No. 5/1990).',
      card4P3: 'Ambil Foto dari Jarak Aman: Dokumentasikan posisi dan kondisi fisik satwa tanpa menyalakan lampu kilat (flash) atau berteriak.',
      card4P4: 'Segera Lapor ke Akasia Jambi: Klik tombol LAPOR di website ini atau hubungi hotline darurat BKSDA Jambi untuk evakuasi cepat.',

      // Fact Strip
      fact1Num: '1.2 – 1.5 M',
      fact1Title: 'Panjang Tubuh Rata-Rata',
      fact1Desc: 'Spesies beruang terkecil di dunia dengan bobot dewasa 30–65 kilogram.',
      fact2Num: '25 CM',
      fact2Title: 'Panjang Lidah Fleksibel',
      fact2Desc: 'Adaptasi kanopi alami untuk menyedot sarang lebah madu liar dan koloni rayap.',
      fact3Num: 'VULNERABLE',
      fact3Title: 'IUCN Red List Global',
      fact3Desc: 'Populasi kian menyusut drastis akibat jerat kawat perburuan dan fragmentasi hutan.',
      fact4Num: 'UU NO. 5/1990',
      fact4Title: 'Dilindungi Penuh Hukum RI',
      fact4Desc: 'Perlindungan mutlak dengan sanksi pidana 5 tahun dan denda Rp 100 Juta.',

      // Sub-sections
      aboutPretitle: 'TENTANG AKASIA JAMBI',
      aboutTitle: 'Mendedikasikan Diri untuk Hutan & Satwa Sumatra',
      aboutDesc: 'Yayasan Akasia Jambi berdiri sebagai inisiatif garda depan penyelamatan Beruang Madu Sumatra (Helarctos malayanus). Kami mengintegrasikan operasi sapu jerat mandiri di perbatasan kebun, pemantauan koridor satwa liar, riset bioakustik kanopi, dan pemberdayaan masyarakat desa hutan untuk hidup berdampingan secara damai dengan satwa kunci Jambi.',
      
      // Visi & Misi
      vmBadge: 'VISI & MISI',
      visiTitle: 'Visi AKASIA',
      visiText: '“Terwujudnya ekosistem yang lestari dan terlindungi melalui konservasi keanekaragaman hayati serta pemberdayaan masyarakat yang berkelanjutan.”',
      misiTitle: 'Misi AKASIA',
      misi1Title: 'Perlindungan Satwa Liar',
      misi1Desc: 'Melaksanakan upaya perlindungan dan konservasi satwa liar, khususnya spesies terancam punah, melalui kegiatan pemantauan, mitigasi ancaman, dan perlindungan habitat.',
      misi2Title: 'Konservasi Ekosistem',
      misi2Desc: 'Mendorong pengelolaan dan pemulihan ekosistem hutan serta habitat alami untuk menjaga keseimbangan keanekaragaman hayati.',
      misi3Title: 'Pemberdayaan Masyarakat',
      misi3Desc: 'Meningkatkan keterlibatan dan kapasitas masyarakat lokal sebagai pelaku utama dalam perlindungan lingkungan dan konservasi sumber daya alam.',
      misi4Title: 'Pendidikan dan Kesadaran Lingkungan',
      misi4Desc: 'Meningkatkan pengetahuan dan kepedulian masyarakat terhadap pentingnya konservasi satwa liar, habitat, dan keberlanjutan lingkungan.',
      misi5Title: 'Kolaborasi Konservasi',
      misi5Desc: 'Membangun kemitraan dengan pemerintah, lembaga konservasi, akademisi, organisasi masyarakat sipil, dan sektor swasta untuk memperkuat upaya konservasi.',
      misi6Title: 'Penguatan Berbasis Data dan Pengetahuan',
      misi6Desc: 'Mengembangkan pemantauan, dokumentasi, penelitian, dan pengelolaan informasi sebagai dasar pengambilan keputusan konservasi.',
      progPretitle: 'PROGRAM KONSERVASI',
      progTitle: 'Inisiatif Nyata di Lanskap Hutan Jambi',
      prog1Title: 'Operasi Sapu Jerat (Snare Sweep)',
      prog1Desc: 'Patroli rutin bersama BKSDA membersihkan ribuan jerat seling baja yang mengancam beruang di zona penyangga.',
      prog2Title: 'Evakuasi & Rehabilitasi Satwa',
      prog2Desc: 'Penanganan medis darurat bagi beruang madu terluka jerat dan program pelepasliaran kembali ke habitat aman.',
      prog3Title: 'Mitigasi Konflik Manusia-Beruang',
      prog3Desc: 'Pemasangan kawat kejut ramah lingkungan dan edukasi pekebun agar panen aman tanpa meracuni beruang.',
      partnerTitle: 'PARTNER',
      contactPretitle: 'HUBUNGI KAMI',
      contactTitle: 'Sekretariat & Hotline Darurat',

      // Footer
      footerDesc: 'Lembaga konservasi independen yang bergerak dalam perlindungan Beruang Madu Sumatra dan pemulihan keutuhan ekosistem hutan hujan tropis di Provinsi Jambi.',
      footerNavTitle: 'Jelajah Halaman',
      footerEmergencyTitle: 'Bantuan Satwa Darurat',
      footerEmergencyDesc: 'Menemukan beruang madu terjerat atau terluka di sekitar kebun Anda?',

      // Modal Report
      modalTitle: 'Formulir Laporan Temuan Beruang Madu',
      modalSubtitle: 'Bantuan cepat mitigasi konflik & evakuasi satwa terjerat bersama Akasia Jambi & BKSDA Provinsi Jambi.',
      fieldName: 'Nama Lengkap Pelapor',
      fieldPhone: 'Nomor WhatsApp / Telepon Aktif',
      fieldLocation: 'Lokasi Temuan (Desa / Kecamatan / Kabupaten di Jambi)',
      fieldCondition: 'Kondisi Beruang yang Ditemukan',
      optCondition1: '-- Pilih Kondisi Satwa --',
      optCondition2: '🚨 Terjerat Kawat Seling Babi / Terperangkap (Mendesak)',
      optCondition3: '🩹 Terluka / Sakit Parah / Tidak Bisa Bergerak',
      optCondition4: '🌾 Berkeliaran di Kebun / Dekat Pemukiman Warga',
      optCondition5: '🐾 Anak Beruang Terpisah dari Induknya',
      optCondition6: '🔍 Temuan Jejak Cakar / Sarang Baru Tanpa Kontak Langsung',
      fieldDescription: 'Keterangan Tambahan & Petunjuk Menuju Lokasi',
      fieldPhoto: 'Unggah Foto / Bukti Temuan (Jika Ada)',
      photoHint: 'Ambil foto dari jarak aman tanpa menyalakan lampu kilat (flash).',
      hotlinesTitle: 'Hotline Cepat Darurat 24 Jam:',
      btnCancel: 'Batal',
      btnSubmit: 'Kirim Laporan Darurat Sekarang',
      reportSuccessAlert: 'Laporan Anda telah berhasil dicatat! Tim Reaksi Cepat Akasia Jambi dan BKSDA segera menindaklanjuti lokasi.',
      validationErrorAlert: 'Mohon lengkapi semua kolom bertanda bintang (*) sebelum mengirim.'
    },

    en: {
      // Document Metadata
      docTitle: 'Akasia Jambi | Sumatran Sun Bear Conservation',
      skipLink: 'Skip to main content',

      // Navbar
      brandTitle: 'AKASIA',
      brandSubtitle: 'JAMBI',
      navHome: 'Home',
      navAbout: 'About Us',
      navProgram: 'Programs',
      navPartners: 'Partners',
      navContact: 'Contact',
      navEdu: 'Sun Bear Education',
      btnReport: 'REPORT',

      // Hero Banner
      heroBadge: 'JAMBI SUN BEAR CONSERVATION',
      heroMotto: 'The forest tells its story, we protect it!',
      heroSubtitle: 'Akasia Jambi Foundation is dedicated to safeguarding the Sumatran Sun Bear (<em>Helarctos malayanus</em>) from extinction, dismantling illegal poaching snares, and restoring vital rainforest wildlife corridors across Jambi Province.',
      heroCtaReport: 'REPORT',
      heroStat1Num: '1.2 – 1.5 M',
      heroStat1Label: 'Smallest Bear Species on Earth',
      heroStat2Num: 'VULNERABLE',
      heroStat2Label: 'IUCN Red List Global Status',
      heroStat3Num: 'ACT NO. 5/1990',
      heroStat3Label: '100% Fully Protected by Law',

      // Educational Section Header
      eduTitle: 'Discover the Sumatran Sun Bear (Helarctos malayanus)',
      eduSubtitle: 'An umbrella species of the Sumatran rainforest sustaining the biodiversity and delicate ecological balance of Jambi.',

      // Spotlight Card
      taxLabel1: 'Scientific Name:',
      taxLabel2: 'IUCN Status:',
      taxValIucn: 'Vulnerable to Extinction',
      taxLabel3: 'Legal Status:',
      taxValLegal: 'Fully Protected (Indonesia)',
      taxLabel4: 'Jambi Range:',
      taxValRegion: 'Bukit Tigapuluh & Kerinci',
      spotlightKicker: 'SUMATRAN BIODIVERSITY ICON',
      spotlightTitle: 'Canopy Guardian & Natural Rainforest Farmer',
      spotlightDesc1: 'The Sun Bear (Helarctos malayanus) is the world\'s smallest bear species, characterized by sleek jet-black fur and a distinctive golden-orange chest crest shaped like a rising sun or crescent. Unique to each individual like a human fingerprint, this marking sets them apart in the dense canopy.',
      spotlightDesc2: 'Across Jambi\'s lush forest landscapes—spanning Bukit Tigapuluh, Harapan Rainforest, and Kerinci Seblat National Park—this solitary mammal serves as a vital umbrella species. Safeguarding the sun bear\'s habitat simultaneously guarantees the survival of Sumatran tigers, elephants, hornbills, and thousands of interconnected flora species.',
      feat1Title: 'Solitary & Nocturnal',
      feat1Desc: 'Active primarily from dusk through the night high up in the dense canopy.',
      feat2Title: 'Master Arboreal Climber',
      feat2Desc: 'Curved claws reaching 7 cm enable safe sleeping in canopy nests 10–20 meters above ground.',
      spotlightQuote: '"The loss of a single sun bear is not just the loss of one animal, but the broken thread in the natural regeneration of dozens of wild rainforest fruit trees across Sumatra."',
      spotlightQuoteCite: '— Akasia Jambi Field Conservation Team',

      // 4-Card Educational Grid
      gridHeading: 'Why Must We Protect the Sun Bear?',
      gridSubheading: 'Four essential pillars to understand their specialized biology, keystone ecological roles, severe threats, and community-led protection protocols.',
      card1Title: 'Unique Characteristics',
      card1Subtitle: 'Specialized Morphology & Canopy Adaptation',
      card1P1: 'Smallest Bear Species: Measuring only 1.2–1.5 meters and weighing 30–65 kg, allowing unmatched arboreal agility.',
      card1P2: 'Horseshoe Chest Crest: A distinctive golden-yellow crescent marking on each chest that is uniquely individual.',
      card1P3: '7 CM Curved Claws: Extremely powerful and sharp for tearing open rotten logs and scaling the tallest canopy trees.',
      card1P4: 'Extra Long Tongue (25 cm): An extraordinary evolutionary adaptation to extract wild bee honey and termites from narrow wood cavities.',

      card2Title: 'Keystone Ecological Role',
      card2Subtitle: 'Honored as the Natural \'Forest Farmer\'',
      card2P1: 'Master Seed Disperser: Feeds on rainforest figs and wild fruits, dispersing viable seeds across vast forest expanses in droppings.',
      card2P2: 'Hardwood Pest Controller: Excavates termite nests and wood-boring beetles, maintaining the vigor of ancient hardwood trees.',
      card2P3: 'Sunlight Canopy Architect: Creates sleeping nests in high tree forks, opening vital light gaps for understory seedlings.',
      card2P4: 'Habitat Provider: Tree cavities hollowed out by sun bears are adopted by hornbills, flying squirrels, and native bees for nesting.',

      card3Title: 'Major Extinction Threats',
      card3Subtitle: 'Severe Pressures in Jambi Landscapes',
      card3P1: 'Wild Boar Wire Snares: The #1 immediate killer. Steel cable snares along plantation borders indiscriminately rip and maim bear paws.',
      card3P2: 'Deforestation & Fragmentation: Forest conversion splits natural ranges, cutting wild food supplies and driving bears to edges.',
      card3P3: 'Poaching & Illegal Trade: Hunted illicitly for bear bile (traditional medicine), canine teeth, claws, and baby bear pet trafficking.',
      card3P4: 'Human-Wildlife Conflict: Deprived of natural forests, bears wander into orchards seeking fruit, frequently facing retaliatory poisoning.',

      card4Title: 'Citizen Safety & Action',
      card4Subtitle: 'Safe Rescue Protocol for Local Communities',
      card4P1: 'DO NOT Approach or Corner: Sun bears are timid, but will fight aggressively if cornered or protecting cubs.',
      card4P2: 'DO NOT Set Wire Snares: Setting wildlife snares is a severe criminal offense punishable by 5 years imprisonment (Act No. 5/1990).',
      card4P3: 'Photograph from a Safe Distance: Document the animal\'s position without using camera flashes or shouting.',
      card4P4: 'Report Promptly to Akasia Jambi: Click the REPORT button on this site or dial our joint rapid rescue hotline with Jambi BKSDA.',

      // Fact Strip
      fact1Num: '1.2 – 1.5 M',
      fact1Title: 'Average Body Length',
      fact1Desc: 'Smallest bear species on Earth with adult body weights between 30–65 kg.',
      fact2Num: '25 CM',
      fact2Title: 'Flexible Tongue Reach',
      fact2Desc: 'Specialized canopy adaptation to extract honeybee hives and subterranean termites.',
      fact3Num: 'VULNERABLE',
      fact3Title: 'IUCN Global Red List',
      fact3Desc: 'Populations rapidly declining due to illegal wire snares and forest fragmentation.',
      fact4Num: 'ACT NO. 5/1990',
      fact4Title: 'Full Legal Protection',
      fact4Desc: 'Absolute legal protection with 5 years prison sentence and IDR 100M fines.',

      // Sub-sections
      aboutPretitle: 'ABOUT AKASIA JAMBI',
      aboutTitle: 'Dedicated to the Forests & Wildlife of Sumatra',
      aboutDesc: 'Akasia Jambi Foundation stands on the frontline of Sumatran Sun Bear (Helarctos malayanus) conservation. We integrate community-led snare sweep operations along plantation buffers, wildlife corridor monitoring, canopy bioacoustics research, and forest village empowerment to foster peaceful coexistence with Jambi\'s keystone fauna.',
      
      // Vision & Mission
      vmBadge: 'VISION & MISSION',
      visiTitle: 'AKASIA Vision',
      visiText: '“To realize sustainable and protected ecosystems through biodiversity conservation and sustainable community empowerment.”',
      misiTitle: 'AKASIA Mission',
      misi1Title: 'Wildlife Protection',
      misi1Desc: 'Conduct protection and conservation efforts for wildlife, particularly endangered species, through systematic monitoring, threat mitigation, and habitat protection.',
      misi2Title: 'Ecosystem Conservation',
      misi2Desc: 'Promote the sustainable management and ecological restoration of rainforest ecosystems and natural habitats to maintain biodiversity balance.',
      misi3Title: 'Community Empowerment',
      misi3Desc: 'Enhance the active engagement and capacity of local communities as frontline stewards in environmental protection and natural resource conservation.',
      misi4Title: 'Environmental Education & Awareness',
      misi4Desc: 'Advance community knowledge and public awareness regarding the vital importance of wildlife conservation, intact habitats, and ecological sustainability.',
      misi5Title: 'Conservation Collaboration',
      misi5Desc: 'Establish multi-stakeholder partnerships with government bodies, conservation institutions, academia, civil society organizations, and the private sector to reinforce conservation action.',
      misi6Title: 'Data & Science-Based Advancement',
      misi6Desc: 'Develop rigorous monitoring, field documentation, scientific research, and data management systems as the foundation for evidence-based conservation decisions.',
      progPretitle: 'CONSERVATION INITIATIVES',
      progTitle: 'Tangible Field Action in Jambi',
      prog1Title: 'Snare Sweep Operations',
      prog1Desc: 'Regular joint patrols with BKSDA dismantling thousands of deadly steel wire snares threatening wildlife.',
      prog2Title: 'Wildlife Rescue & Rehabilitation',
      prog2Desc: 'Emergency veterinary treatment for snare-injured bears and ethical release programs back into secure habitats.',
      prog3Title: 'Human-Bear Conflict Mitigation',
      prog3Desc: 'Installing eco-friendly solar electric fences and training farmers to secure fruit crops without poisoning wildlife.',
      partnerTitle: 'Partners',
      contactPretitle: 'CONTACT US',
      contactTitle: 'Secretariat & Emergency Hotlines',

      // Footer
      footerDesc: 'An independent wildlife conservation organization dedicated to protecting the Sumatran Sun Bear and restoring rainforest integrity across Jambi.',
      footerNavTitle: 'Explore Website',
      footerEmergencyTitle: 'Wildlife Emergency Response',
      footerEmergencyDesc: 'Discovered a trapped or injured sun bear near your plantation or village?',

      // Modal Report
      modalTitle: 'Sun Bear Incident Report Form',
      modalSubtitle: 'Rapid conflict mitigation & snare rescue response dispatched by Akasia Jambi & Jambi Provincial BKSDA.',
      fieldName: 'Reporter Full Name',
      fieldPhone: 'Active WhatsApp / Phone Number',
      fieldLocation: 'Incident Location (Village / District / Regency in Jambi)',
      fieldCondition: 'Observed Bear Condition',
      optCondition1: '-- Select Bear Condition --',
      optCondition2: '🚨 Trapped in Wire Snare / Immobilized (Urgent)',
      optCondition3: '🩹 Injured / Critically Sick / Unable to Walk',
      optCondition4: '🌾 Roaming inside Orchard / Close to Village',
      optCondition5: '🐾 Bear Cub Separated from Mother',
      optCondition6: '🔍 Fresh Claw Marks / Sleeping Nest Found (No direct contact)',
      fieldDescription: 'Additional Details & Directions to Scene',
      fieldPhoto: 'Upload Photo / Evidence (If Available)',
      photoHint: 'Take photos strictly from a safe distance without using a camera flash.',
      hotlinesTitle: '24/7 Rapid Emergency Hotlines:',
      btnCancel: 'Cancel',
      btnSubmit: 'Submit Emergency Report Now',
      reportSuccessAlert: 'Your report has been successfully recorded! Akasia Jambi Rapid Response Team & BKSDA are dispatching immediately.',
      validationErrorAlert: 'Please complete all required fields marked with an asterisk (*) before submitting.'
    }
  };

  let currentLang = localStorage.getItem('akasia_lang') || 'id';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'id';
    currentLang = lang;
    localStorage.setItem('akasia_lang', lang);
    document.documentElement.lang = lang;

    // Update document title
    document.title = translations[lang].docTitle;

    // Update all [data-i18n] elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        // If element contains HTML formatting (like strong, em, or quotes)
        const text = translations[lang][key];
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update placeholders and aria-labels where relevant
    const reporterNameInput = document.getElementById('reporter-name');
    const incidentLocInput = document.getElementById('incident-location');
    const incidentDescInput = document.getElementById('incident-desc');

    if (lang === 'en') {
      if (reporterNameInput) reporterNameInput.placeholder = 'e.g. Budi Santoso';
      if (incidentLocInput) incidentLocInput.placeholder = 'e.g. Lubuk Mandarsah Village, Tengah Ilir, Tebo';
      if (incidentDescInput) incidentDescInput.placeholder = 'Include landmarks, time spotted, behavior, etc.';
    } else {
      if (reporterNameInput) reporterNameInput.placeholder = 'Contoh: Budi Santoso';
      if (incidentLocInput) incidentLocInput.placeholder = 'Contoh: Desa Lubuk Mandarsah, Kec. Tengah Ilir, Kab. Tebo';
      if (incidentDescInput) incidentDescInput.placeholder = 'Sebutkan patokan jalan, waktu terlihat, apakah satwa terlihat agresif, dll.';
    }

    // Update Language Toggle Pill Buttons
    const btnId = document.getElementById('lang-id');
    const btnEn = document.getElementById('lang-en');
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.classList.add('active');
        btnId.setAttribute('aria-pressed', 'true');
        btnEn.classList.remove('active');
        btnEn.setAttribute('aria-pressed', 'false');
      } else {
        btnEn.classList.add('active');
        btnEn.setAttribute('aria-pressed', 'true');
        btnId.classList.remove('active');
        btnId.setAttribute('aria-pressed', 'false');
      }
    }
  }

  // Language switch button click events
  const langIdBtn = document.getElementById('lang-id');
  const langEnBtn = document.getElementById('lang-en');

  if (langIdBtn) {
    langIdBtn.addEventListener('click', () => applyLanguage('id'));
  }
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => applyLanguage('en'));
  }

  // Initialize initial language
  applyLanguage(currentLang);


  // ===========================================================================
  // 2. STICKY NAVBAR SCROLL ELEVATION
  // ===========================================================================
  const siteHeader = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });


  // ===========================================================================
  // 3. ACCESSIBLE MOBILE NAVIGATION DRAWER (< 992px)
  // ===========================================================================
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mainContent = document.querySelector('main');
  const footerContent = document.querySelector('footer');

  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.removeAttribute('inert');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileOverlay.classList.add('open');
    mobileToggleBtn.setAttribute('aria-expanded', 'true');

    // Make main & footer inert to trap focus inside drawer
    if (mainContent) mainContent.setAttribute('inert', '');
    if (footerContent) footerContent.setAttribute('inert', '');

    // Focus close button inside drawer
    if (mobileCloseBtn) mobileCloseBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('inert', '');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileOverlay.classList.remove('open');
    mobileToggleBtn.setAttribute('aria-expanded', 'false');

    // Restore interactive status
    if (mainContent) mainContent.removeAttribute('inert');
    if (footerContent) footerContent.removeAttribute('inert');

    // Return focus to toggle button
    if (mobileToggleBtn) mobileToggleBtn.focus();
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileDrawer);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileDrawer);
  }

  // Close drawer on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileDrawer();
    }
  });

  // Close drawer when clicking any mobile navigation link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });


  // ===========================================================================
  // 4. ACCESSIBLE EMERGENCY REPORT MODAL (<dialog>)
  // ===========================================================================
  const modalLapor = document.getElementById('modal-lapor');
  const openLaporBtns = [
    document.getElementById('btn-open-lapor'),
    document.getElementById('btn-open-lapor-mobile'),
    document.getElementById('hero-btn-lapor'),
    document.getElementById('footer-btn-lapor')
  ].filter(Boolean);

  const closeLaporBtn = document.getElementById('modal-close-btn');
  const cancelLaporBtn = document.getElementById('btn-cancel-report');
  const reportForm = document.getElementById('emergency-report-form');
  const formFeedback = document.getElementById('form-feedback');

  function openReportModal() {
    if (!modalLapor) return;
    if (typeof modalLapor.showModal === 'function') {
      modalLapor.showModal();
    } else {
      // Fallback for older browsers
      modalLapor.setAttribute('open', '');
    }
    // Reset feedback message
    if (formFeedback) {
      formFeedback.className = 'form-feedback hidden';
      formFeedback.textContent = '';
    }
  }

  function closeReportModal() {
    if (!modalLapor) return;
    if (typeof modalLapor.close === 'function') {
      modalLapor.close();
    } else {
      modalLapor.removeAttribute('open');
    }
  }

  openLaporBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // If mobile drawer was open, close it first
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
      openReportModal();
    });
  });

  if (closeLaporBtn) {
    closeLaporBtn.addEventListener('click', closeReportModal);
  }

  if (cancelLaporBtn) {
    cancelLaporBtn.addEventListener('click', closeReportModal);
  }

  // Close when clicking directly on the backdrop of <dialog>
  if (modalLapor) {
    modalLapor.addEventListener('click', (e) => {
      const rect = modalLapor.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeReportModal();
      }
    });
  }

  // Official Contact Details
  const OFFICIAL_EMAIL = 'officeakasia@gmail.com';
  const OFFICIAL_PHONE = '+62 897-9276-758';
  const OFFICIAL_WHATSAPP_NUMBER = '628979276758';

  // Form submission handler with validation
  if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('reporter-name');
      const phoneInput = document.getElementById('reporter-phone');
      const locInput = document.getElementById('incident-location');
      const condSelect = document.getElementById('incident-condition');

      let isValid = true;

      // Simple validation helper
      function checkField(input, errorId, errorMsgId, errorMsgEn) {
        const errorEl = document.getElementById(errorId);
        if (!input.value.trim()) {
          input.classList.add('is-invalid');
          if (errorEl) {
            errorEl.textContent = currentLang === 'en' ? errorMsgEn : errorMsgId;
          }
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
          if (errorEl) errorEl.textContent = '';
        }
      }

      checkField(nameInput, 'error-name', 'Nama wajib diisi', 'Name is required');
      checkField(phoneInput, 'error-phone', 'Nomor telepon/WhatsApp wajib diisi', 'Phone/WhatsApp is required');
      checkField(locInput, 'error-location', 'Lokasi temuan wajib diisi', 'Location is required');
      checkField(condSelect, 'error-condition', 'Pilih kondisi satwa', 'Please select bear condition');

      if (!isValid) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback';
          formFeedback.style.backgroundColor = '#FFEBEE';
          formFeedback.style.color = '#C62828';
          formFeedback.style.border = '1.5px solid #EF5350';
          formFeedback.textContent = translations[currentLang].validationErrorAlert;
        }
        return;
      }

      // WhatsApp target dispatch URL
      const waText = encodeURIComponent(`Halo Akasia Jambi, saya ${nameInput.value.trim()} (${phoneInput.value.trim()}) melaporkan temuan beruang madu di ${locInput.value.trim()}.`);
      const waRedirectUrl = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${waText}`;

      // Successful simulated submission
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.style = '';
        formFeedback.textContent = translations[currentLang].reportSuccessAlert;
      }

      // Reset form after short delay
      setTimeout(() => {
        reportForm.reset();
        setTimeout(() => {
          closeReportModal();
        }, 2200);
      }, 800);
    });
  }


  // ===========================================================================
  // 5. ACTIVE NAVIGATION SPY (IntersectionObserver)
  // ===========================================================================
  const sections = document.querySelectorAll('main section[id], main > div[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            const targetNav = link.getAttribute('data-nav');
            if (targetNav === currentId || (currentId === 'edukasi-beruang' && targetNav === 'beranda')) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // Set copyright year dynamically
  const copyrightYearEl = document.getElementById('copyright-year');
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }

});
