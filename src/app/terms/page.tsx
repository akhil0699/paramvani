"use client";
import type { Metadata } from "next";
import LegalLayout, { Section, InfoBox } from "@/components/legal/LegalLayout";
import { useLang } from "@/context/LanguageContext";

const TOC_EN = [
  { id: "agreement",   label: "Agreement to Terms" },
  { id: "eligibility", label: "Eligibility & Age" },
  { id: "account",     label: "Your Account" },
  { id: "acceptable",  label: "Acceptable Use" },
  { id: "prohibited",  label: "Prohibited Conduct" },
  { id: "ip",          label: "Intellectual Property" },
  { id: "liability",   label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "law",         label: "Governing Law" },
  { id: "access",      label: "Accessibility" },
];

const TOC_HI = [
  { id: "agreement",   label: "शर्तों की सहमति" },
  { id: "eligibility", label: "पात्रता और आयु" },
  { id: "account",     label: "आपका खाता" },
  { id: "acceptable",  label: "स्वीकार्य उपयोग" },
  { id: "prohibited",  label: "निषिद्ध आचरण" },
  { id: "ip",          label: "बौद्धिक संपदा" },
  { id: "liability",   label: "दायित्व की सीमा" },
  { id: "termination", label: "समाप्ति (Termination)" },
  { id: "law",         label: "शासकीय कानून" },
  { id: "access",      label: "अभिगम्यता (Accessibility)" },
];

function ContentEN() {
  return (
    <>


      <Section id="agreement">
        <h2>Agreement to Terms</h2>
        <InfoBox>By accessing or using <strong>Paramvani</strong>, you agree to be bound by these Terms. If you disagree, do not use the service.</InfoBox>
        <p>These Terms incorporate our <a href="/privacy-policy">Privacy Policy</a>, <a href="/refund-policy">Refund Policy</a>, <a href="/disclaimer">Disclaimer</a>, and <a href="/community-guidelines">Community Guidelines</a>.</p>
      </Section>

      <Section id="eligibility">
        <h2>Eligibility &amp; Age Policy</h2>
        <p>You must be at least <strong>18 years of age</strong> to use Paramvani. By using this service you confirm you are 18 or older. We do not knowingly allow minors. If we discover a user under 18 has an account, we will terminate it and delete their data immediately.</p>
        <p>You must be a human (not a bot or automated script) and capable of entering into a legally binding contract in your jurisdiction.</p>
      </Section>

      <Section id="account">
        <h2>Your Account</h2>
        <p>When you create an account via Google Sign-In, you are responsible for its security. You agree to:</p>
        <ul>
          <li>Provide accurate and complete information.</li>
          <li>Notify us immediately of any unauthorised use.</li>
          <li>Not share your account or create multiple accounts to bypass limits.</li>
        </ul>
      </Section>

      <Section id="acceptable">
        <h2>Acceptable Use Policy</h2>
        <p>Paramvani is a spiritual AI platform for personal exploration and reflection. You must:</p>
        <ul>
          <li>Treat the service with respect and use it only for lawful purposes.</li>
          <li>Not use automated tools, bots, or scripts to interact with the service.</li>
          <li>Not reverse engineer, copy, or commercially reproduce any part of the platform.</li>
        </ul>
      </Section>

      <Section id="prohibited">
        <h2>Prohibited Conduct</h2>
        <p>Strictly prohibited on Paramvani:</p>
        <ul>
          <li>Defamatory, obscene, hateful, or violence-inciting content.</li>
          <li>Disrespecting or mocking religious sentiments of any faith.</li>
          <li>Attempting to make AI personas act contrary to their sacred character.</li>
          <li>Harassment, threats, or abuse directed at any person or group.</li>
          <li>Fraud, impersonation, or misuse of payment systems.</li>
          <li>Any activity violating Indian law, including the IT Act 2000 and IPC.</li>
        </ul>
        <p>Violations may result in immediate termination and reporting to law enforcement.</p>
      </Section>

      <Section id="ip">
        <h2>Intellectual Property</h2>
        <p>All content, design, code, brand names and logos are owned by or licensed to us. You receive a limited, non-exclusive, non-transferable personal-use license. You may not copy, reproduce, or create derivative works without written consent. Content you submit remains yours; you grant us a limited license to process it to provide the service. We do not use your conversations to train AI models.</p>
      </Section>

      <Section id="liability">
        <h2>Limitation of Liability</h2>
        <p>Paramvani is provided &quot;AS IS&quot; without warranties of any kind. We are not liable for indirect, incidental, or consequential damages. Our total aggregate liability is limited to the amount you paid us in the 3 months prior to your claim. See our full <a href="/disclaimer">Disclaimer</a>.</p>
      </Section>

      <Section id="termination">
        <h2>Termination</h2>
        <p>We may suspend or terminate your access at any time for violations of these Terms. You may delete your account via the <a href="/profile">Profile page</a>. Unused credits are not refundable — see our <a href="/refund-policy">Refund Policy</a>.</p>
      </Section>

      <Section id="law">
        <h2>Governing Law</h2>
        <p>These Terms are governed by the laws of <strong>India</strong>. You submit to the exclusive jurisdiction of Indian courts. The Digital Personal Data Protection Act 2023 (DPDP) and IT Act 2000 apply for privacy matters.</p>
      </Section>

      <Section id="access">
        <h2>Accessibility Statement</h2>
        <p>We strive to conform to <strong>WCAG 2.1 Level AA</strong>. If you encounter accessibility barriers, contact <a href="mailto:hello@paramvani.com">hello@paramvani.com</a> and we will resolve the issue within 7 business days.</p>
      </Section>
    </>
  );
}

function ContentHI() {
  return (
    <>
      <Section id="agreement">
        <h2>शर्तों की सहमति</h2>
        <InfoBox><strong>परमवाणी</strong> तक पहुँचने या उसका उपयोग करने से, आप इन शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप असहमत हैं, तो सेवा का उपयोग न करें।</InfoBox>
        <p>इन शर्तों में हमारी <a href="/privacy-policy">गोपनीयता नीति</a>, <a href="/refund-policy">धनवापसी नीति</a>, <a href="/disclaimer">अस्वीकरण</a>, और <a href="/community-guidelines">समुदाय दिशानिर्देश</a> शामिल हैं।</p>
      </Section>

      <Section id="eligibility">
        <h2>पात्रता और आयु नीति</h2>
        <p>परमवाणी का उपयोग करने के लिए आपकी आयु कम से कम <strong>18 वर्ष</strong> होनी चाहिए। इस सेवा का उपयोग करके आप पुष्टि करते हैं कि आपकी आयु 18 वर्ष या उससे अधिक है। हम जानबूझकर नाबालिगों को अनुमति नहीं देते हैं। यदि हमें पता चलता है कि 18 वर्ष से कम आयु के किसी उपयोगकर्ता का खाता है, तो हम उसे तुरंत समाप्त कर देंगे और उसका डेटा हटा देंगे।</p>
        <p>आपको एक इंसान होना चाहिए (बॉट्स या स्वचालित स्क्रिप्ट नहीं) और अपने अधिकार क्षेत्र में कानूनी रूप से बाध्यकारी अनुबंध में प्रवेश करने में सक्षम होना चाहिए।</p>
      </Section>

      <Section id="account">
        <h2>आपका खाता</h2>
        <p>जब आप Google साइन-इन के माध्यम से कोई खाता बनाते हैं, तो आप उसकी सुरक्षा के लिए ज़िम्मेदार होते हैं। आप सहमत हैं:</p>
        <ul>
          <li>सटीक और पूर्ण जानकारी प्रदान करने के लिए।</li>
          <li>किसी भी अनधिकृत उपयोग के बारे में हमें तुरंत सूचित करने के लिए।</li>
          <li>अपना खाता साझा न करने या सीमाओं को दरकिनार करने के लिए कई खाते न बनाने के लिए।</li>
        </ul>
      </Section>

      <Section id="acceptable">
        <h2>स्वीकार्य उपयोग नीति</h2>
        <p>परमवाणी व्यक्तिगत अन्वेषण और प्रतिबिंब के लिए एक आध्यात्मिक AI मंच है। आपको चाहिए:</p>
        <ul>
          <li>सेवा के साथ सम्मानपूर्वक व्यवहार करें और इसका उपयोग केवल वैध उद्देश्यों के लिए करें।</li>
          <li>सेवा के साथ बातचीत करने के लिए स्वचालित टूल, बॉट या स्क्रिप्ट का उपयोग न करें।</li>
          <li>मंच के किसी भी हिस्से को रिवर्स इंजीनियर, कॉपी या व्यावसायिक रूप से पुनरुत्पादित न करें।</li>
        </ul>
      </Section>

      <Section id="prohibited">
        <h2>निषिद्ध आचरण</h2>
        <p>परमवाणी पर सख्ती से प्रतिबंधित है:</p>
        <ul>
          <li>अपमानजनक, अश्लील, घृणित, या हिंसा भड़काने वाली सामग्री।</li>
          <li>किसी भी धर्म की धार्मिक भावनाओं का अनादर करना या उसका मज़ाक उड़ाना।</li>
          <li>AI अवतारों को उनके पवित्र चरित्र के विपरीत कार्य करने का प्रयास करना।</li>
          <li>किसी व्यक्ति या समूह को निर्देशित उत्पीड़न, धमकियाँ या दुर्व्यवहार।</li>
          <li>धोखाधड़ी, प्रतिरूपण, या भुगतान प्रणाली का दुरुपयोग।</li>
          <li>IT अधिनियम 2000 और IPC सहित भारतीय कानून का उल्लंघन करने वाली कोई भी गतिविधि।</li>
        </ul>
        <p>उल्लंघन के परिणामस्वरूप तत्काल समाप्ति और कानून प्रवर्तन को रिपोर्टिंग हो सकती है।</p>
      </Section>

      <Section id="ip">
        <h2>बौद्धिक संपदा</h2>
        <p>सभी सामग्री, डिज़ाइन, कोड, ब्रांड नाम और लोगो हमारे स्वामित्व में या हमारे लिए लाइसेंस प्राप्त हैं। आपको सीमित, गैर-अनन्य, गैर-हस्तांतरणीय व्यक्तिगत-उपयोग लाइसेंस प्राप्त होता है। आप लिखित सहमति के बिना कॉपी, पुनरुत्पादन, या व्युत्पन्न कार्य नहीं बना सकते हैं। आपके द्वारा सबमिट की गई सामग्री आपकी ही रहती है; आप हमें सेवा प्रदान करने के लिए इसे संसाधित करने के लिए सीमित लाइसेंस प्रदान करते हैं। हम AI मॉडल को प्रशिक्षित करने के लिए आपकी बातचीत का उपयोग नहीं करते हैं।</p>
      </Section>

      <Section id="liability">
        <h2>दायित्व की सीमा</h2>
        <p>परमवाणी किसी भी प्रकार की वारंटी के बिना "AS IS" (जैसा है) प्रदान की जाती है। हम अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान के लिए उत्तरदायी नहीं हैं। हमारी कुल कुल देयता आपके दावे से 3 महीने पहले हमें भुगतान की गई राशि तक सीमित है। हमारा पूरा <a href="/disclaimer">अस्वीकरण</a> देखें।</p>
      </Section>

      <Section id="termination">
        <h2>समाप्ति (Termination)</h2>
        <p>इन शर्तों के उल्लंघन के लिए हम किसी भी समय आपकी पहुंच को निलंबित या समाप्त कर सकते हैं। आप <a href="/profile">प्रोफ़ाइल पृष्ठ</a> के माध्यम से अपना खाता हटा सकते हैं। अप्रयुक्त क्रेडिट वापस नहीं किए जा सकते — हमारी <a href="/refund-policy">धनवापसी नीति</a> देखें।</p>
      </Section>

      <Section id="law">
        <h2>शासकीय कानून</h2>
        <p>ये शर्तें <strong>भारत</strong> के कानूनों द्वारा शासित हैं। आप भारतीय अदालतों के अनन्य अधिकार क्षेत्र में प्रस्तुत होते हैं। गोपनीयता मामलों के लिए डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम 2023 (DPDP) और IT अधिनियम 2000 लागू होते हैं।</p>
      </Section>

      <Section id="access">
        <h2>अभिगम्यता (Accessibility) विवरण</h2>
        <p>हम <strong>WCAG 2.1 Level AA</strong> के अनुरूप होने का प्रयास करते हैं। यदि आपको पहुंच संबंधी बाधाओं का सामना करना पड़ता है, तो <a href="mailto:hello@paramvani.com">hello@paramvani.com</a> पर संपर्क करें और हम 7 व्यावसायिक दिनों के भीतर समस्या का समाधान करेंगे।</p>
      </Section>
    </>
  );
}

export default function TermsPage() {
  const { lang } = useLang();
  return (
    <LegalLayout
      eyebrow={lang === 'hi' ? "कानूनी · शर्तें" : "Legal · Terms"}
      title={lang === 'hi' ? "नियम और शर्तें" : "Terms & Conditions"}
      lastUpdated="August 24, 2025"
      toc={lang === 'hi' ? TOC_HI : TOC_EN}
      currentHref="/terms"
    >
      {lang === 'hi' ? <ContentHI /> : <ContentEN />}
    </LegalLayout>
  );
}
