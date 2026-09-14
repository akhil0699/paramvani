export interface Shlok {
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  hindi: string;
  english: string;
}

export interface Chapter {
  number: number;
  name: string;
  nameHindi: string;
  nameEnglish: string;
  totalVerses: number; // actual Gita verse count for this chapter
  youtubeId?: string;
}

export const CHAPTERS: Chapter[] = [
  // totalVerses = actual Bhagavad Gita verse count per chapter
  { number: 1,  totalVerses: 47, name: 'अर्जुन विषाद योग',     nameHindi: 'अर्जुन विषाद योग',     nameEnglish: "Arjuna's Grief",            youtubeId: 'znsAdDFn-6U'  },
  { number: 2,  totalVerses: 72, name: 'सांख्य योग',           nameHindi: 'सांख्य योग',           nameEnglish: 'Transcendent Knowledge',    youtubeId: 'MC0J2d3lT70'  },
  { number: 3,  totalVerses: 43, name: 'कर्म योग',             nameHindi: 'कर्म योग',             nameEnglish: 'Path of Action',            youtubeId: 'gw2AbD69LB8'  },
  { number: 4,  totalVerses: 42, name: 'ज्ञान योग',            nameHindi: 'ज्ञान योग',            nameEnglish: 'Path of Knowledge',         youtubeId: 'gw2AbD69LB8'  },
  { number: 5,  totalVerses: 29, name: 'कर्म संन्यास योग',     nameHindi: 'कर्म संन्यास योग',     nameEnglish: 'Renunciation of Action',    youtubeId: 'gw2AbD69LB8'  },
  { number: 6,  totalVerses: 47, name: 'ध्यान योग',            nameHindi: 'ध्यान योग',            nameEnglish: 'Path of Meditation',        youtubeId: 'gw2AbD69LB8'  },
  { number: 7,  totalVerses: 30, name: 'ज्ञान विज्ञान योग',   nameHindi: 'ज्ञान विज्ञान योग',   nameEnglish: 'Knowledge & Wisdom',        youtubeId: 'gw2AbD69LB8'  },
  { number: 8,  totalVerses: 28, name: 'अक्षर ब्रह्म योग',    nameHindi: 'अक्षर ब्रह्म योग',    nameEnglish: 'The Eternal Brahman',       youtubeId: 'gw2AbD69LB8'  },
  { number: 9,  totalVerses: 34, name: 'राज विद्या योग',       nameHindi: 'राज विद्या योग',       nameEnglish: 'The Royal Secret',          youtubeId: 'gw2AbD69LB8'  },
  { number: 10, totalVerses: 42, name: 'विभूति योग',           nameHindi: 'विभूति योग',           nameEnglish: 'Divine Manifestations',     youtubeId: 'gw2AbD69LB8'  },
  { number: 11, totalVerses: 55, name: 'विश्वरूप दर्शन योग',  nameHindi: 'विश्वरूप दर्शन योग',  nameEnglish: 'The Universal Form',        youtubeId: 'gw2AbD69LB8'  },
  { number: 12, totalVerses: 20, name: 'भक्ति योग',            nameHindi: 'भक्ति योग',            nameEnglish: 'Path of Devotion',          youtubeId: 'gw2AbD69LB8'  },
  { number: 13, totalVerses: 35, name: 'क्षेत्र विभाग योग',   nameHindi: 'क्षेत्र विभाग योग',   nameEnglish: 'Field & Its Knower',        youtubeId: 'gw2AbD69LB8'  },
  { number: 14, totalVerses: 27, name: 'गुणत्रय विभाग योग',   nameHindi: 'गुणत्रय विभाग योग',   nameEnglish: 'The Three Gunas',           youtubeId: 'gw2AbD69LB8'  },
  { number: 15, totalVerses: 20, name: 'पुरुषोत्तम योग',       nameHindi: 'पुरुषोत्तम योग',       nameEnglish: 'The Supreme Person',        youtubeId: 'gw2AbD69LB8'  },
  { number: 16, totalVerses: 24, name: 'दैवासुर विभाग योग',   nameHindi: 'दैवासुर विभाग योग',   nameEnglish: 'Divine & Demonic',          youtubeId: 'gw2AbD69LB8'  },
  { number: 17, totalVerses: 28, name: 'श्रद्धात्रय विभाग',   nameHindi: 'श्रद्धात्रय विभाग',   nameEnglish: 'Three Types of Faith',      youtubeId: 'gw2AbD69LB8'  },
  { number: 18, totalVerses: 78, name: 'मोक्ष संन्यास योग',   nameHindi: 'मोक्ष संन्यास योग',   nameEnglish: 'Liberation & Renunciation', youtubeId: 'RBqn1wFD_pg'  },
];

export const SHLOKS: Shlok[] = [
  // ═══════════════════════════════════════════════
  // Chapter 1 — Arjuna's Grief
  // ═══════════════════════════════════════════════
  {
    chapter: 1, verse: 1,
    sanskrit: 'धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥',
    transliteration: 'dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya',
    hindi: 'धृतराष्ट्र ने कहा: हे संजय! धर्मभूमि कुरुक्षेत्र में एकत्रित हुए मेरे और पाण्डु के पुत्रों ने क्या किया?',
    english: 'Dhritarashtra said: O Sanjaya! What did my sons and the sons of Pandu do, assembled on the holy field of Kurukshetra, eager to fight?',
  },
  {
    chapter: 1, verse: 47,
    sanskrit: 'एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः॥',
    transliteration: 'evam uktvārjunaḥ saṅkhye rathopastha upāviśat\nvisṛjya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ',
    hindi: 'इस प्रकार कहकर, युद्धभूमि में शोक से व्याकुल मन वाले अर्जुन ने धनुष-बाण त्यागकर रथ के पिछले भाग में बैठ गये।',
    english: 'Having said this, Arjuna cast aside his bow and arrows and sank into the chariot, his mind overwhelmed with grief.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 2 — Transcendent Knowledge (most key verses)
  // ═══════════════════════════════════════════════
  {
    chapter: 2, verse: 11,
    sanskrit: 'अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥',
    transliteration: 'aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase\ngatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ',
    hindi: 'श्रीकृष्ण ने कहा: तुम उन लोगों के लिए शोक कर रहे हो जो शोक के पात्र नहीं हैं, फिर भी ज्ञान की बातें कर रहे हो। बुद्धिमान लोग न मृत के लिए और न जीवित के लिए शोक करते हैं।',
    english: 'Krishna said: You grieve for those who are not worthy of grief, and yet speak words of wisdom. Wise men do not grieve for the dead or for the living.',
  },
  {
    chapter: 2, verse: 20,
    sanskrit: 'न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥',
    transliteration: 'na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato \'yaṁ purāṇo\nna hanyate hanyamāne śarīre',
    hindi: 'आत्मा न कभी जन्म लेती है और न कभी मरती है। यह पहले थी, अब भी है और भविष्य में भी रहेगी। यह अजन्मी, नित्य, शाश्वत और पुरातन है। शरीर के नष्ट होने पर भी यह नष्ट नहीं होती।',
    english: 'The soul is never born nor dies at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
  },
  {
    chapter: 2, verse: 22,
    sanskrit: 'वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही॥',
    transliteration: 'vāsāṁsi jīrṇāni yathā vihāya\nnavāni gṛhṇāti naro \'parāṇi\ntathā śarīrāṇi vihāya jīrṇāny\nanyāni saṁyāti navāni dehī',
    hindi: 'जैसे मनुष्य पुराने वस्त्र त्यागकर नये वस्त्र धारण करता है, वैसे ही आत्मा पुराने शरीरों को त्यागकर नये शरीर ग्रहण करती है।',
    english: 'As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.',
  },
  {
    chapter: 2, verse: 47,
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: 'karmaṇy-evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo \'stv akarmaṇi',
    hindi: 'तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। न तो तुम कर्मफल के कारण बनो और न ही अकर्म में तुम्हारी आसक्ति हो।',
    english: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results, and never be attached to not doing your duty.',
  },
  {
    chapter: 2, verse: 62,
    sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
    transliteration: 'dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho \'bhijāyate',
    hindi: 'विषयों का चिंतन करते रहने से उनमें आसक्ति उत्पन्न होती है। आसक्ति से कामना और कामना से क्रोध उत्पन्न होता है।',
    english: 'While contemplating the objects of the senses, a person develops attachment for them. From attachment comes desire, and from desire arises anger.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 3 — Path of Action
  // ═══════════════════════════════════════════════
  {
    chapter: 3, verse: 8,
    sanskrit: 'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥',
    transliteration: 'niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ\nśarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ',
    hindi: 'तुम अपना नियत कर्म करो, क्योंकि कर्म न करने से कर्म करना श्रेष्ठ है। कर्म न करने पर तुम्हारा शरीर-निर्वाह भी नहीं होगा।',
    english: 'Perform your prescribed duties, for action is better than inaction. A person cannot even maintain their physical body without work.',
  },
  {
    chapter: 3, verse: 21,
    sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥',
    transliteration: 'yad yad ācarati śreṣṭhas tat tad evetaro janaḥ\nsa yat pramāṇaṁ kurute lokas tad anuvartate',
    hindi: 'श्रेष्ठ पुरुष जो-जो आचरण करता है, सामान्य लोग भी वैसा ही करते हैं। वह जो कुछ प्रमाण स्थापित करता है, संसार उसी का अनुसरण करता है।',
    english: 'Whatever actions a great man performs, common people follow. Whatever standards he sets by exemplary acts, all the world pursues.',
  },
  {
    chapter: 3, verse: 27,
    sanskrit: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहंकारविमूढात्मा कर्ताहमिति मन्यते॥',
    transliteration: 'prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ\nahaṅkāra-vimūḍhātmā kartāham iti manyate',
    hindi: 'सभी कर्म प्रकृति के गुणों द्वारा किये जाते हैं। अहंकार से मोहित जीव सोचता है कि "मैं कर्ता हूँ।"',
    english: 'All actions are carried out by the modes of nature. The fool who is deluded by ego thinks: "I am the doer."',
  },

  // ═══════════════════════════════════════════════
  // Chapter 4 — Path of Knowledge
  // ═══════════════════════════════════════════════
  {
    chapter: 4, verse: 7,
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    transliteration: 'yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛjāmy aham',
    hindi: 'हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।',
    english: 'Whenever and wherever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself.',
  },
  {
    chapter: 4, verse: 8,
    sanskrit: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥',
    transliteration: 'paritrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge',
    hindi: 'साधुओं की रक्षा, दुष्टों के विनाश और धर्म की पुनर्स्थापना के लिए मैं युग-युग में अवतार लेता हूँ।',
    english: 'To deliver the pious and to annihilate the wicked, as well as to reestablish the principles of dharma, I appear millennium after millennium.',
  },
  {
    chapter: 4, verse: 38,
    sanskrit: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥',
    transliteration: 'na hi jñānena sadṛśaṁ pavitram iha vidyate\ntat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati',
    hindi: 'इस संसार में ज्ञान के समान पवित्र करने वाला कुछ भी नहीं है। योग से सिद्ध हुआ मनुष्य अपने भीतर स्वयं इसे प्राप्त कर लेता है।',
    english: 'In this world, there is nothing as purifying as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has achieved this enjoys the self within himself in due course of time.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 5 — Renunciation of Action
  // ═══════════════════════════════════════════════
  {
    chapter: 5, verse: 10,
    sanskrit: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥',
    transliteration: 'brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ\nlipyate na sa pāpena padma-patram ivāmbhasā',
    hindi: 'जो व्यक्ति अपने सभी कर्म ब्रह्म को समर्पित करके, आसक्ति त्यागकर कार्य करता है, वह पाप से उसी प्रकार अलिप्त रहता है जैसे कमल का पत्ता जल से।',
    english: 'One who performs his duty without attachment, surrendering the results unto the Supreme, is unaffected by sinful action, as the lotus leaf is untouched by water.',
  },
  {
    chapter: 5, verse: 18,
    sanskrit: 'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥',
    transliteration: 'vidyā-vinaya-sampanne brāhmaṇe gavi hastini\nśuni caiva śva-pāke ca paṇḍitāḥ sama-darśinaḥ',
    hindi: 'विनम्र ज्ञानी व्यक्ति एक विद्वान ब्राह्मण, एक गाय, एक हाथी, एक कुत्ते और एक चाण्डाल को समान दृष्टि से देखता है।',
    english: 'The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle Brahmin, a cow, an elephant, a dog and a dog-eater.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 6 — Path of Meditation
  // ═══════════════════════════════════════════════
  {
    chapter: 6, verse: 5,
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    transliteration: 'uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ',
    hindi: 'मनुष्य को अपने आप से अपना उद्धार करना चाहिए, अपना पतन नहीं। मन ही मनुष्य का मित्र है और मन ही शत्रु।',
    english: 'One must elevate oneself by one\'s own mind, not degrade oneself. The mind is the friend of the self, and also the enemy of the self.',
  },
  {
    chapter: 6, verse: 34,
    sanskrit: 'चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्।\nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥',
    transliteration: 'cañcalaṁ hi manaḥ kṛṣṇa pramāthi balavad dṛḍham\ntasyāhaṁ nigrahaṁ manye vāyor iva su-duṣkaram',
    hindi: 'हे कृष्ण! मन बड़ा चंचल, उद्धत, बलवान और दृढ़ है। मेरी समझ में मन को वश में करना वायु को रोकने जितना कठिन है।',
    english: 'O Krishna, the mind is restless, turbulent, obstinate and very strong. To subdue it, I think, is more difficult than controlling the wind.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 7 — Knowledge & Wisdom
  // ═══════════════════════════════════════════════
  {
    chapter: 7, verse: 7,
    sanskrit: 'मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥',
    transliteration: 'mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya\nmayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva',
    hindi: 'हे अर्जुन! मुझसे परे कुछ भी नहीं है। जैसे धागे में मोती पिरोये होते हैं, वैसे ही यह सम्पूर्ण जगत मुझमें पिरोया है।',
    english: 'O Arjuna, there is nothing that exists separate from Me. The entire cosmic manifestation is strung on Me, as pearls are strung on a thread.',
  },
  {
    chapter: 7, verse: 19,
    sanskrit: 'बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥',
    transliteration: 'bahūnāṁ janmanām ante jñānavān māṁ prapadyate\nvāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ',
    hindi: 'अनेक जन्मों के अंत में ज्ञानी पुरुष मुझे प्राप्त होता है, यह जानकर कि "वासुदेव ही सब कुछ है।" ऐसा महान आत्मा अत्यंत दुर्लभ है।',
    english: 'After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 8 — The Eternal Brahman
  // ═══════════════════════════════════════════════
  {
    chapter: 8, verse: 5,
    sanskrit: 'अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥',
    transliteration: 'anta-kāle ca mām eva smaran muktvā kalevaram\nyaḥ prayāti sa mad-bhāvaṁ yāti nāsty atra saṁśayaḥ',
    hindi: 'जो व्यक्ति अंत समय में केवल मेरा स्मरण करते हुए शरीर त्यागता है, वह मेरे भाव को प्राप्त होता है। इसमें कोई संदेह नहीं।',
    english: 'Whoever, at the time of death, gives up their body while remembering Me alone, reaches My nature. Of this there is no doubt.',
  },
  {
    chapter: 8, verse: 7,
    sanskrit: 'तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयः॥',
    transliteration: 'tasmāt sarveṣu kāleṣu mām anusmara yudhya ca\nmayy arpita-mano-buddhir mām evaiṣyasy asaṁśayaḥ',
    hindi: 'इसलिए सभी समय मेरा स्मरण करो और युद्ध भी करो। मन और बुद्धि मुझमें अर्पित करने से तुम निश्चित रूप से मुझे ही प्राप्त होगे।',
    english: 'Therefore, Arjuna, you should always think of Me and also carry out your prescribed duty of fighting. With your mind and activities always fixed on Me and everything engaged in Me, you will attain Me without doubt.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 9 — The Royal Secret
  // ═══════════════════════════════════════════════
  {
    chapter: 9, verse: 22,
    sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    transliteration: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham',
    hindi: 'जो भक्त अनन्य भाव से मेरा ध्यान करके मेरी उपासना करते हैं, उन निरंतर मुझमें लगे हुए भक्तों का योगक्षेम मैं स्वयं वहन करता हूँ।',
    english: 'But those who worship Me with devotion, meditating on My transcendental form — to them, I carry what they lack, and I preserve what they have.',
  },
  {
    chapter: 9, verse: 27,
    sanskrit: 'यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।\nयत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥',
    transliteration: 'yat karoṣi yad aśnāsi yaj juhoṣi dadāsi yat\nyat tapasyasi kaunteya tat kuruṣva mad-arpaṇam',
    hindi: 'हे अर्जुन! तुम जो भी करते हो, जो भी खाते हो, जो भी यज्ञ करते हो, जो भी दान देते हो, जो भी तप करते हो, वह सब मुझे अर्पित कर दो।',
    english: 'O Arjuna, whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that as an offering to Me.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 10 — Divine Manifestations
  // ═══════════════════════════════════════════════
  {
    chapter: 10, verse: 20,
    sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥',
    transliteration: 'aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ\naham ādiś ca madhyaṁ ca bhūtānām anta eva ca',
    hindi: 'हे अर्जुन! मैं सभी प्राणियों के हृदय में स्थित आत्मा हूँ। मैं ही सभी प्राणियों का आदि, मध्य और अंत हूँ।',
    english: 'I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.',
  },
  {
    chapter: 10, verse: 42,
    sanskrit: 'अथवा बहुनैतेन किं ज्ञातेन तवार्जुन।\nविष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत्॥',
    transliteration: 'atha vā bahunaitena kiṁ jñātena tavārjuna\nviṣṭabhyāham idaṁ kṛtsnam ekāṁśena sthito jagat',
    hindi: 'हे अर्जुन! इस विस्तृत ज्ञान की क्या आवश्यकता है? मैं अपने एक अंश मात्र से इस सम्पूर्ण जगत को धारण किये हुए हूँ।',
    english: 'But what need is there for all this detailed knowledge, O Arjuna? I pervade and support this entire universe with just a single fragment of Myself.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 11 — The Universal Form
  // ═══════════════════════════════════════════════
  {
    chapter: 11, verse: 32,
    sanskrit: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः॥',
    transliteration: 'kālo \'smi loka-kṣaya-kṛt pravṛddho\nlokān samāhartum iha pravṛttaḥ\nṛte \'pi tvāṁ na bhaviṣyanti sarve\nye \'vasthitāḥ pratyanīkeṣu yodhāḥ',
    hindi: 'मैं काल हूँ, संसारों का नाश करने वाला, यहाँ सबका संहार करने के लिए प्रवृत्त हुआ हूँ। तुम्हारे बिना भी, विपक्ष में खड़े सभी योद्धा नहीं बचेंगे।',
    english: 'I am mighty Time, the source of destruction that comes forth to annihilate the worlds. Even without your participation, the warriors arrayed in the opposing army shall cease to exist.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 12 — Path of Devotion
  // ═══════════════════════════════════════════════
  {
    chapter: 12, verse: 8,
    sanskrit: 'मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥',
    transliteration: 'mayy eva mana ādhatsva mayi buddhiṁ niveśaya\nnivasisyasi mayy eva ata ūrdhvaṁ na saṁśayaḥ',
    hindi: 'अपना मन मुझमें स्थिर करो, अपनी बुद्धि मुझमें लगाओ। इस प्रकार तुम निश्चित रूप से मुझमें ही निवास करोगे।',
    english: 'Just fix your mind upon Me and engage all your intelligence in Me. Thus you will live in Me always, without a doubt.',
  },
  {
    chapter: 12, verse: 13,
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी॥',
    transliteration: 'adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī',
    hindi: 'जो सब प्राणियों से द्वेष नहीं करता, सबका मित्र और करुणामय है, ममता और अहंकार से रहित है, सुख-दुख में समान है और क्षमाशील है — वह मुझे प्रिय है।',
    english: 'One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor, free from false ego, equal in distress and happiness, forgiving — such a devotee is very dear to Me.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 13 — Field & Its Knower
  // ═══════════════════════════════════════════════
  {
    chapter: 13, verse: 2,
    sanskrit: 'क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।\nक्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥',
    transliteration: 'kṣetra-jñaṁ cāpi māṁ viddhi sarva-kṣetreṣu bhārata\nkṣetra-kṣetrajñayor jñānaṁ yat taj jñānaṁ mataṁ mama',
    hindi: 'हे भारत! तुम सब क्षेत्रों में क्षेत्रज्ञ भी मुझे ही जानो। क्षेत्र और क्षेत्रज्ञ के ज्ञान को ही मैं ज्ञान मानता हूँ।',
    english: 'O Arjuna, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge. That is My opinion.',
  },
  {
    chapter: 13, verse: 28,
    sanskrit: 'समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥',
    transliteration: 'samaṁ sarveṣu bhūteṣu tiṣṭhantaṁ parameśvaram\nvinaśyatsv avinaśyantaṁ yaḥ paśyati sa paśyati',
    hindi: 'जो सब नश्वर प्राणियों में परमेश्वर को नित्य और समभाव से स्थित देखता है, वास्तव में वही देखता है।',
    english: 'One who sees the Supersoul equally present in all living entities, existing within each destructible being the indestructible, actually sees.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 14 — The Three Gunas
  // ═══════════════════════════════════════════════
  {
    chapter: 14, verse: 19,
    sanskrit: 'नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति।\nगुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति॥',
    transliteration: 'nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣṭānupaśyati\nguṇebhyaś ca paraṁ vetti mad-bhāvaṁ so \'dhigacchati',
    hindi: 'जब द्रष्टा यह देखता है कि गुणों के अतिरिक्त कोई कर्ता नहीं है, और जो गुणों से परे को जानता है, वह मेरे स्वभाव को प्राप्त होता है।',
    english: 'When one properly sees that in all activities no other performer is at work than these modes of nature and that the Lord is transcendental to all these modes, he attains My spiritual nature.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 15 — The Supreme Person
  // ═══════════════════════════════════════════════
  {
    chapter: 15, verse: 1,
    sanskrit: 'ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥',
    transliteration: 'ūrdhva-mūlam adhaḥ-śākham aśvatthaṁ prāhur avyayam\nchandāṁsi yasya parṇāni yas taṁ veda sa veda-vit',
    hindi: 'जिसकी जड़ें ऊपर हैं और शाखाएँ नीचे हैं, ऐसे अश्वत्थ (पीपल) को अविनाशी कहते हैं। वेद उसके पत्ते हैं। जो इसे जानता है वह वेदों का ज्ञाता है।',
    english: 'The Supreme Lord said: It is said that there is an imperishable banyan tree that has its roots upward and its branches down, whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.',
  },
  {
    chapter: 15, verse: 7,
    sanskrit: 'ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥',
    transliteration: 'mamaivāṁśo jīva-loke jīva-bhūtaḥ sanātanaḥ\nmanaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati',
    hindi: 'इस जीव-लोक में जीव मेरा ही सनातन अंश है। वह प्रकृति में स्थित मन सहित छः इन्द्रियों को आकर्षित करता है।',
    english: 'The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.',
  },
  {
    chapter: 15, verse: 15,
    sanskrit: 'सर्वस्य चाहं हृदि संनिविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम्॥',
    transliteration: 'sarvasya cāhaṁ hṛdi sanniviṣṭo\nmattaḥ smṛtir jñānam apohanaṁ ca\nvedaiś ca sarvair aham eva vedyo\nvedānta-kṛd veda-vid eva cāham',
    hindi: 'मैं सबके हृदय में विराजमान हूँ। स्मृति, ज्ञान और अपोहन (भूलना) मुझसे ही आता है। मैं सभी वेदों के द्वारा जानने योग्य हूँ। वेदांत का रचयिता और वेदों का ज्ञाता भी मैं ही हूँ।',
    english: 'I am seated in everyone\'s heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas I am to be known. Indeed I am the compiler of Vedanta, and I am the knower of the Vedas.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 16 — Divine & Demonic
  // ═══════════════════════════════════════════════
  {
    chapter: 16, verse: 1,
    sanskrit: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥',
    transliteration: 'abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ\ndānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam',
    hindi: 'निर्भयता, अंतःकरण की शुद्धि, ज्ञान-योग में स्थिति, दान, इन्द्रिय-संयम, यज्ञ, वेदाध्ययन, तप और सरलता — ये दैवी सम्पदा के लक्षण हैं।',
    english: 'Fearlessness, purification of one\'s existence, cultivation of spiritual knowledge, charity, control of the senses, performance of sacrifice, study of the Vedas, austerity, and simplicity — these transcendent qualities belong to godly men.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 17 — Three Types of Faith
  // ═══════════════════════════════════════════════
  {
    chapter: 17, verse: 3,
    sanskrit: 'सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥',
    transliteration: 'sattvānurūpā sarvasya śraddhā bhavati bhārata\nśraddhā-mayo \'yaṁ puruṣo yo yac-chraddhaḥ sa eva saḥ',
    hindi: 'हे अर्जुन! प्रत्येक मनुष्य की श्रद्धा उसके स्वभाव के अनुसार होती है। मनुष्य श्रद्धा से बना है और जैसी उसकी श्रद्धा है, वैसा ही वह है।',
    english: 'O Arjuna, the faith of each individual is in accordance with his nature. The living being is of the nature of his faith — what he believes in, he is.',
  },

  // ═══════════════════════════════════════════════
  // Chapter 18 — Liberation & Renunciation
  // ═══════════════════════════════════════════════
  {
    chapter: 18, verse: 55,
    sanskrit: 'भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः।\nततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम्॥',
    transliteration: 'bhaktyā mām abhijānāti yāvān yaś cāsmi tattvataḥ\ntato māṁ tattvato jñātvā viśate tad-anantaram',
    hindi: 'केवल भक्ति के द्वारा ही मनुष्य मुझे जैसा और जितना हूँ, वास्तव में जान सकता है। फिर मुझे तत्त्व से जानकर वह मेरे धाम में प्रवेश करता है।',
    english: 'One can understand Me as I am, as the Supreme Personality of Godhead, only by devotional service. And when one is in full consciousness of Me by such devotion, he can enter into the kingdom of God.',
  },
  {
    chapter: 18, verse: 63,
    sanskrit: 'इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया।\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥',
    transliteration: 'iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā\nvimṛśyaitad aśeṣeṇa yathecchasi tathā kuru',
    hindi: 'इस प्रकार मैंने तुम्हें सब रहस्यों से अधिक गुह्य ज्ञान बताया। इसे पूर्णतया विचार करके जैसी तुम्हारी इच्छा हो, वैसा करो।',
    english: 'Thus I have explained to you knowledge still more confidential. Deliberate on this fully, and then do what you wish to do.',
  },
  {
    chapter: 18, verse: 65,
    sanskrit: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥',
    transliteration: 'man-manā bhava mad-bhakto mad-yājī māṁ namaskuru\nmām evaiṣyasi satyaṁ te pratijāne priyo \'si me',
    hindi: 'मुझमें मन लगाओ, मेरे भक्त बनो, मेरी पूजा करो और मुझे नमस्कार करो। ऐसा करने से तुम मुझे ही प्राप्त होगे। मैं सत्य प्रतिज्ञा करता हूँ क्योंकि तुम मुझे अत्यंत प्रिय हो।',
    english: 'Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend.',
  },
  {
    chapter: 18, verse: 66,
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    transliteration: 'sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ',
    hindi: 'सभी धर्मों को त्यागकर केवल मेरी शरण में आ जाओ। मैं तुम्हें सभी पापों से मुक्त करूँगा। चिंता मत करो।',
    english: 'Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
  },
];

export function getShloksByChapter(chapter: number): Shlok[] {
  return SHLOKS.filter(s => s.chapter === chapter);
}

export function getChapter(num: number): Chapter | undefined {
  return CHAPTERS.find(c => c.number === num);
}
