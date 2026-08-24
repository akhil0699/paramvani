"use client";
import type { Metadata } from "next";
import LegalLayout, { Section, InfoBox } from "@/components/legal/LegalLayout";
import { useLang } from "@/context/LanguageContext";

const TOC_EN = [
  { id: "our-space",   label: "Our Sacred Space" },
  { id: "do",          label: "What We Encourage" },
  { id: "prohibited",  label: "Prohibited Content" },
  { id: "ai-interact", label: "AI Interactions" },
  { id: "reporting",   label: "Reporting Abuse" },
  { id: "consequences",label: "Consequences" },
  { id: "rights",      label: "Moderator Rights" },
];

const TOC_HI = [
  { id: "our-space",   label: "हमारा पवित्र स्थान" },
  { id: "do",          label: "हम किसे प्रोत्साहित करते हैं" },
  { id: "prohibited",  label: "निषिद्ध सामग्री" },
  { id: "ai-interact", label: "AI इंटरेक्शन" },
  { id: "reporting",   label: "दुर्व्यवहार की रिपोर्ट करना" },
  { id: "consequences",label: "परिणाम" },
  { id: "rights",      label: "मॉडरेटर के अधिकार" },
];

function ContentEN() {
  return (
    <>


      <Section id="our-space">
        <h2>Our Sacred Space</h2>
        <InfoBox>Paramvani is built on a foundation of reverence, respect, and spiritual exploration. These guidelines exist to protect that space for everyone.</InfoBox>
        <p>We welcome users from all backgrounds who approach the platform with sincerity and good faith. Our AI divine personas are presented with care and cultural sensitivity — we expect users to honour that spirit in their interactions.</p>
      </Section>

      <Section id="do">
        <h2>What We Encourage</h2>
        <ul>
          <li>Asking genuine questions about dharma, spirituality, life, and wisdom.</li>
          <li>Exploring themes of devotion, peace, purpose, and self-reflection.</li>
          <li>Respectful curiosity about Hindu traditions and philosophy.</li>
          <li>Using the service for personal growth and mindful exploration.</li>
          <li>Reporting issues constructively so we can improve.</li>
        </ul>
      </Section>

      <Section id="prohibited">
        <h2>Prohibited Content &amp; Conduct</h2>
        <p>The following are strictly prohibited and will result in account suspension or termination:</p>
        <ul>
          <li><strong>Religious disrespect:</strong> Any content that mocks, demeans, or desecrates Hindu deities, scriptures, or traditions — or those of any other faith.</li>
          <li><strong>Hate speech:</strong> Content targeting individuals or groups based on religion, caste, gender, ethnicity, sexual orientation, or disability.</li>
          <li><strong>Abusive language:</strong> Profanity, threats, or harassment directed at any person, deity, or group.</li>
          <li><strong>Sexual or explicit content:</strong> Any attempt to generate inappropriate or sexual content through AI personas.</li>
          <li><strong>Misinformation:</strong> Deliberately attempting to extract or spread false religious, medical, or legal claims through the platform.</li>
          <li><strong>Jailbreaking:</strong> Attempting to manipulate the AI to override its guidelines or persona constraints.</li>
          <li><strong>Commercial abuse:</strong> Using AI responses for mass commercial distribution without written permission.</li>
          <li><strong>Illegal activities:</strong> Any use violating Indian or international law.</li>
        </ul>
      </Section>

      <Section id="ai-interact">
        <h2>AI Interaction Guidelines</h2>
        <p>When conversing with our divine personas, remember:</p>
        <ul>
          <li>Responses are AI-generated. Treat them as inspiration for reflection, not absolute spiritual authority.</li>
          <li>Do not attempt to override the persona&apos;s identity, values, or character.</li>
          <li>Do not use the personas to validate harmful, illegal, or unethical actions.</li>
          <li>If a response feels off or inappropriate, use the reporting feature immediately.</li>
        </ul>
      </Section>

      <Section id="reporting">
        <h2>Reporting Abuse &amp; Content</h2>
        <p>If you encounter content that violates these guidelines, please report it promptly:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:abuse@paramvani.com">abuse@paramvani.com</a></li>
          <li><strong>Subject line:</strong> &quot;Content Report — [brief description]&quot;</li>
          <li><strong>Include:</strong> A description of the issue, approximate time, and any relevant context.</li>
        </ul>
        <p>We take all reports seriously and will investigate within <strong>48–72 hours</strong>. Reports are treated confidentially.</p>
        <p>For grievances about the platform or our response, see our <a href="/grievance-redressal">Grievance Redressal Policy</a>.</p>
      </Section>

      <Section id="consequences">
        <h2>Consequences of Violations</h2>
        <p>Violations of these guidelines may result in:</p>
        <ul>
          <li><strong>Warning:</strong> First-time or minor violations may receive a warning.</li>
          <li><strong>Temporary suspension:</strong> Repeated or moderate violations.</li>
          <li><strong>Permanent ban:</strong> Severe violations or persistent abuse.</li>
          <li><strong>Legal action:</strong> Where violations constitute criminal offences under Indian law.</li>
        </ul>
        <p>No refunds will be issued for accounts terminated due to guideline violations.</p>
      </Section>

      <Section id="rights">
        <h2>Moderator Rights</h2>
        <p>We reserve the right to review, remove, or restrict access to any content or account at our sole discretion, even if not explicitly covered by these guidelines, if we determine it to be harmful to our community or the spirit of the platform.</p>
        <p>These guidelines may be updated at any time. Continued use of Paramvani constitutes acceptance of the current guidelines.</p>
      </Section>
    </>
  );
}

function ContentHI() {
  return (
    <>
      <Section id="our-space">
        <h2>हमारा पवित्र स्थान</h2>
        <InfoBox>परमवाणी श्रद्धा, सम्मान और आध्यात्मिक अन्वेषण की नींव पर बनी है। ये दिशानिर्देश सभी के लिए उस स्थान की रक्षा करने के लिए मौजूद हैं।</InfoBox>
        <p>हम उन सभी पृष्ठभूमि के उपयोगकर्ताओं का स्वागत करते हैं जो ईमानदारी और सद्भाव के साथ मंच पर आते हैं। हमारे AI दिव्य अवतारों को देखभाल और सांस्कृतिक संवेदनशीलता के साथ प्रस्तुत किया गया है - हम उम्मीद करते हैं कि उपयोगकर्ता अपनी बातचीत में उस भावना का सम्मान करेंगे।</p>
      </Section>

      <Section id="do">
        <h2>हम किसे प्रोत्साहित करते हैं</h2>
        <ul>
          <li>धर्म, आध्यात्मिकता, जीवन और ज्ञान के बारे में वास्तविक प्रश्न पूछना।</li>
          <li>भक्ति, शांति, उद्देश्य और आत्म-प्रतिबिंब के विषयों की खोज करना।</li>
          <li>हिंदू परंपराओं और दर्शन के बारे में सम्मानजनक जिज्ञासा।</li>
          <li>व्यक्तिगत विकास और ध्यानपूर्ण अन्वेषण के लिए सेवा का उपयोग करना।</li>
          <li>मुद्दों की रचनात्मक रिपोर्ट करना ताकि हम सुधार कर सकें।</li>
        </ul>
      </Section>

      <Section id="prohibited">
        <h2>निषिद्ध सामग्री और आचरण</h2>
        <p>निम्नलिखित सख्त वर्जित हैं और इसके परिणामस्वरूप खाता निलंबित या समाप्त कर दिया जाएगा:</p>
        <ul>
          <li><strong>धार्मिक अनादर:</strong> कोई भी सामग्री जो हिंदू देवताओं, शास्त्रों या परंपराओं - या किसी अन्य धर्म का मज़ाक उड़ाती है, नीचा दिखाती है या अपवित्र करती है।</li>
          <li><strong>नफ़रत फैलाने वाला भाषण (Hate speech):</strong> धर्म, जाति, लिंग, जातीयता, यौन अभिविन्यास या विकलांगता के आधार पर व्यक्तियों या समूहों को लक्षित करने वाली सामग्री।</li>
          <li><strong>अपमानजनक भाषा:</strong> किसी भी व्यक्ति, देवता या समूह के लिए निर्देशित अपवित्रता, धमकी या उत्पीड़न।</li>
          <li><strong>यौन या स्पष्ट सामग्री:</strong> AI अवतारों के माध्यम से अनुचित या यौन सामग्री उत्पन्न करने का कोई भी प्रयास।</li>
          <li><strong>गलत सूचना:</strong> मंच के माध्यम से झूठे धार्मिक, चिकित्सा या कानूनी दावों को निकालने या फैलाने का जानबूझकर प्रयास।</li>
          <li><strong>जेलब्रेकिंग:</strong> AI के दिशानिर्देशों या व्यक्तित्व बाधाओं को ओवरराइड करने के लिए AI में हेरफेर करने का प्रयास।</li>
          <li><strong>वाणिज्यिक दुरुपयोग:</strong> लिखित अनुमति के बिना बड़े पैमाने पर वाणिज्यिक वितरण के लिए AI प्रतिक्रियाओं का उपयोग करना।</li>
          <li><strong>अवैध गतिविधियां:</strong> भारतीय या अंतर्राष्ट्रीय कानून का उल्लंघन करने वाला कोई भी उपयोग।</li>
        </ul>
      </Section>

      <Section id="ai-interact">
        <h2>AI इंटरेक्शन दिशानिर्देश</h2>
        <p>हमारे दिव्य अवतारों के साथ बातचीत करते समय, याद रखें:</p>
        <ul>
          <li>प्रतिक्रियाएं AI-जनित हैं। उन्हें पूर्ण आध्यात्मिक अधिकार के बजाय प्रतिबिंब के लिए प्रेरणा मानें।</li>
          <li>व्यक्तित्व की पहचान, मूल्यों या चरित्र को ओवरराइड करने का प्रयास न करें।</li>
          <li>हानिकारक, अवैध या अनैतिक कार्यों को मान्य करने के लिए अवतारों का उपयोग न करें।</li>
          <li>यदि कोई प्रतिक्रिया अजीब या अनुचित लगती है, तो तुरंत रिपोर्टिंग सुविधा का उपयोग करें।</li>
        </ul>
      </Section>

      <Section id="reporting">
        <h2>दुर्व्यवहार और सामग्री की रिपोर्ट करना</h2>
        <p>यदि आपको ऐसी सामग्री मिलती है जो इन दिशानिर्देशों का उल्लंघन करती है, तो कृपया तुरंत इसकी रिपोर्ट करें:</p>
        <ul>
          <li><strong>ईमेल:</strong> <a href="mailto:abuse@paramvani.com">abuse@paramvani.com</a></li>
          <li><strong>विषय पंक्ति:</strong> &quot;Content Report — [संक्षिप्त विवरण]&quot;</li>
          <li><strong>शामिल करें:</strong> समस्या का विवरण, अनुमानित समय और कोई प्रासंगिक संदर्भ।</li>
        </ul>
        <p>हम सभी रिपोर्टों को गंभीरता से लेते हैं और <strong>48-72 घंटों</strong> के भीतर जांच करेंगे। रिपोर्ट को गोपनीय रखा जाता है।</p>
        <p>मंच या हमारी प्रतिक्रिया के बारे में शिकायतों के लिए, हमारी <a href="/grievance-redressal">शिकायत निवारण नीति</a> देखें।</p>
      </Section>

      <Section id="consequences">
        <h2>उल्लंघन के परिणाम</h2>
        <p>इन दिशानिर्देशों के उल्लंघन के परिणामस्वरूप यह हो सकता है:</p>
        <ul>
          <li><strong>चेतावनी:</strong> पहली बार या मामूली उल्लंघन पर चेतावनी मिल सकती है।</li>
          <li><strong>अस्थायी निलंबन:</strong> बार-बार या मध्यम उल्लंघन।</li>
          <li><strong>स्थायी प्रतिबंध:</strong> गंभीर उल्लंघन या लगातार दुर्व्यवहार।</li>
          <li><strong>कानूनी कार्रवाई:</strong> जहां उल्लंघन भारतीय कानून के तहत आपराधिक अपराध का गठन करते हैं।</li>
        </ul>
        <p>दिशानिर्देश उल्लंघन के कारण समाप्त किए गए खातों के लिए कोई धनवापसी (रिफंड) जारी नहीं की जाएगी।</p>
      </Section>

      <Section id="rights">
        <h2>मॉडरेटर के अधिकार</h2>
        <p>हम अपने विवेकाधिकार पर किसी भी सामग्री या खाते की समीक्षा करने, उसे हटाने या उस तक पहुंच को प्रतिबंधित करने का अधिकार सुरक्षित रखते हैं, भले ही वह स्पष्ट रूप से इन दिशानिर्देशों द्वारा कवर न किया गया हो, यदि हम यह निर्धारित करते हैं कि यह हमारे समुदाय या मंच की भावना के लिए हानिकारक है।</p>
        <p>इन दिशानिर्देशों को किसी भी समय अपडेट किया जा सकता है। परमवाणी का निरंतर उपयोग वर्तमान दिशानिर्देशों की स्वीकृति माना जाता है।</p>
      </Section>
    </>
  );
}

export default function CommunityGuidelinesPage() {
  const { lang } = useLang();
  return (
    <LegalLayout
      eyebrow={lang === 'hi' ? "कानूनी · समुदाय" : "Legal · Community"}
      title={lang === 'hi' ? "समुदाय दिशानिर्देश" : "Community Guidelines"}
      lastUpdated="August 24, 2025"
      toc={lang === 'hi' ? TOC_HI : TOC_EN}
      currentHref="/community-guidelines"
    >
      {lang === 'hi' ? <ContentHI /> : <ContentEN />}
    </LegalLayout>
  );
}
