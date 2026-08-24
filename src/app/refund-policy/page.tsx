"use client";
import type { Metadata } from "next";
import LegalLayout, { Section, InfoBox } from "@/components/legal/LegalLayout";
import { useLang } from "@/context/LanguageContext";

const TOC_EN = [
  { id: "credits",      label: "Credits & Plans" },
  { id: "what-credits", label: "What Credits Are" },
  { id: "no-refund",    label: "No-Refund Policy" },
  { id: "exceptions",   label: "Exceptions" },
  { id: "request",      label: "How to Request" },
  { id: "cancel",       label: "Cancellation" },
  { id: "expiry",       label: "Expiry of Credits" },
  { id: "gateway",      label: "Payment Gateway" },
];

const TOC_HI = [
  { id: "credits",      label: "क्रेडिट और प्लान" },
  { id: "what-credits", label: "क्रेडिट क्या हैं" },
  { id: "no-refund",    label: "नो-रिफंड (धनवापसी नहीं) नीति" },
  { id: "exceptions",   label: "अपवाद" },
  { id: "request",      label: "अनुरोध कैसे करें" },
  { id: "cancel",       label: "रद्दीकरण (Cancellation)" },
  { id: "expiry",       label: "क्रेडिट की समाप्ति" },
  { id: "gateway",      label: "पेमेंट गेटवे" },
];

function ContentEN() {
  return (
    <>


      <Section id="credits">
        <h2>Credits &amp; Subscription Plans</h2>
        <InfoBox>Paramvani offers two subscription plans: <strong>7-Day Spark (₹79)</strong> and <strong>Monthly Devotee (₹149/month)</strong>. New users receive <strong>5 free credits</strong> to try the service.</InfoBox>
        <p>All prices are in Indian Rupees (₹) and are inclusive of applicable taxes. Prices may change; changes will be communicated with at least 7 days notice.</p>
      </Section>

      <Section id="what-credits">
        <h2>What Credits Are</h2>
        <p>Free credits are a one-time trial allowance given to new users. Each conversation turn consumes one credit. Once free credits are exhausted, a subscription is required to continue using the service.</p>
        <p>Subscription plans grant unlimited conversation turns for the plan duration. Subscriptions do not roll over — unused time is forfeited at expiry.</p>
      </Section>

      <Section id="no-refund">
        <h2>No-Refund Policy</h2>
        <p>All purchases on Paramvani — including subscription plans — are <strong>non-refundable</strong> once activated. This applies to:</p>
        <ul>
          <li>Weekly (7-Day Spark) subscriptions</li>
          <li>Monthly (Monthly Devotee) subscriptions</li>
          <li>Any future credit packs or one-time purchases</li>
        </ul>
        <p>Digital services are consumed immediately upon activation and therefore fall under the non-refundable category under applicable Indian consumer protection guidelines for digital goods.</p>
      </Section>

      <Section id="exceptions">
        <h2>Exceptions</h2>
        <p>We will consider refund requests <strong>only</strong> in the following circumstances:</p>
        <ul>
          <li><strong>Double charge:</strong> If your account was charged twice for the same subscription period, we will refund the duplicate charge.</li>
          <li><strong>Technical failure:</strong> If payment was deducted but your subscription was not activated due to a verified technical error on our end.</li>
          <li><strong>Fraudulent transaction:</strong> If you report an unauthorized transaction within 24 hours and provide supporting evidence.</li>
        </ul>
        <p>Refunds will be credited to the original payment method within <strong>5–10 business days</strong>, subject to bank processing times.</p>
      </Section>

      <Section id="request">
        <h2>How to Request a Refund</h2>
        <p>To request a refund under the exception criteria:</p>
        <ol>
          <li>Email <a href="mailto:billing@paramvani.com">billing@paramvani.com</a> within <strong>48 hours</strong> of the transaction.</li>
          <li>Include your registered email address, the Order ID (found in your payment receipt), and a clear description of the issue.</li>
          <li>We will acknowledge your request within <strong>2 business days</strong> and resolve it within <strong>7 business days</strong>.</li>
        </ol>
      </Section>

      <Section id="cancel">
        <h2>Subscription Cancellation</h2>
        <p>Paramvani subscriptions are <strong>one-time purchases</strong>, not auto-renewing. You will not be charged again unless you manually purchase a new subscription after your current one expires.</p>
        <p>There is no auto-renewal, so no cancellation action is needed to avoid future charges. Your subscription simply expires at the end of its term.</p>
        <p>You may delete your account at any time via the <a href="/profile">Profile page</a>. Account deletion does not entitle you to a refund for any remaining subscription time.</p>
      </Section>

      <Section id="expiry">
        <h2>Expiry of Credits &amp; Subscriptions</h2>
        <ul>
          <li><strong>Free credits</strong> do not expire but are limited to 5 per account (one-time gift to new users).</li>
          <li><strong>7-Day Spark</strong> expires exactly 7 days after activation.</li>
          <li><strong>Monthly Devotee</strong> expires exactly 30 days after activation.</li>
          <li>Expired subscriptions revert your account to free-credit mode. If free credits are also exhausted, you will need to purchase a new subscription.</li>
        </ul>
      </Section>

      <Section id="gateway">
        <h2>Payment Gateway</h2>
        <p>All payments are processed by a PCI-DSS compliant payment gateway. Paramvani does not store your card, UPI, or bank credentials. The payment gateway's terms apply to the payment transaction itself.</p>
        <p>For payment-related disputes that cannot be resolved by us, you may contact your bank/card issuer.</p>
      </Section>
    </>
  );
}

function ContentHI() {
  return (
    <>
      <Section id="credits">
        <h2>क्रेडिट और सदस्यता योजनाएँ</h2>
        <InfoBox>परमवाणी दो सदस्यता योजनाएँ प्रदान करता है: <strong>7-डे स्पार्क (₹79)</strong> और <strong>मासिक भक्त (₹149/माह)</strong>। सेवा आजमाने के लिए नए उपयोगकर्ताओं को <strong>5 निःशुल्क क्रेडिट</strong> मिलते हैं।</InfoBox>
        <p>सभी कीमतें भारतीय रुपये (₹) में हैं और इनमें लागू कर शामिल हैं। कीमतें बदल सकती हैं; परिवर्तनों की सूचना कम से कम 7 दिन पहले दी जाएगी।</p>
      </Section>

      <Section id="what-credits">
        <h2>क्रेडिट क्या हैं</h2>
        <p>मुफ़्त क्रेडिट नए उपयोगकर्ताओं को दिया जाने वाला एकमुश्त परीक्षण भत्ता है। प्रत्येक वार्तालाप टर्न एक क्रेडिट की खपत करता है। एक बार निःशुल्क क्रेडिट समाप्त हो जाने के बाद, सेवा का उपयोग जारी रखने के लिए सदस्यता आवश्यक है।</p>
        <p>सदस्यता योजनाएं योजना की अवधि के लिए असीमित वार्तालाप टर्न प्रदान करती हैं। सदस्यताएँ आगे नहीं बढ़ती हैं — उपयोग न किया गया समय समाप्ति पर जब्त कर लिया जाता है।</p>
      </Section>

      <Section id="no-refund">
        <h2>नो-रिफंड (धनवापसी नहीं) नीति</h2>
        <p>परमवाणी पर सभी खरीदारी — जिसमें सदस्यता योजनाएं शामिल हैं — एक बार सक्रिय होने के बाद <strong>गैर-वापसी योग्य (non-refundable)</strong> हैं। यह लागू होता है:</p>
        <ul>
          <li>साप्ताहिक (7-डे स्पार्क) सदस्यताएँ</li>
          <li>मासिक (मासिक भक्त) सदस्यताएँ</li>
          <li>भविष्य के कोई भी क्रेडिट पैक या एकमुश्त खरीदारी</li>
        </ul>
        <p>डिजिटल सेवाओं का उपभोग सक्रियण पर तुरंत किया जाता है और इसलिए डिजिटल वस्तुओं के लिए लागू भारतीय उपभोक्ता संरक्षण दिशानिर्देशों के तहत गैर-वापसी योग्य श्रेणी में आते हैं।</p>
      </Section>

      <Section id="exceptions">
        <h2>अपवाद</h2>
        <p>हम केवल निम्नलिखित परिस्थितियों में धनवापसी अनुरोधों पर विचार करेंगे:</p>
        <ul>
          <li><strong>दोहरा शुल्क (Double charge):</strong> यदि आपसे एक ही सदस्यता अवधि के लिए दो बार शुल्क लिया गया था, तो हम डुप्लिकेट शुल्क वापस कर देंगे।</li>
          <li><strong>तकनीकी विफलता:</strong> यदि भुगतान काट लिया गया था लेकिन हमारी ओर से सत्यापित तकनीकी त्रुटि के कारण आपकी सदस्यता सक्रिय नहीं हुई थी।</li>
          <li><strong>धोखाधड़ी वाला लेनदेन:</strong> यदि आप 24 घंटे के भीतर अनधिकृत लेनदेन की रिपोर्ट करते हैं और सहायक साक्ष्य प्रदान करते हैं।</li>
        </ul>
        <p>बैंक प्रसंस्करण समय के अधीन, धनवापसी <strong>5–10 व्यावसायिक दिनों</strong> के भीतर मूल भुगतान विधि में जमा कर दी जाएगी।</p>
      </Section>

      <Section id="request">
        <h2>धनवापसी का अनुरोध कैसे करें</h2>
        <p>अपवाद मानदंडों के तहत धनवापसी का अनुरोध करने के लिए:</p>
        <ol>
          <li>लेनदेन के <strong>48 घंटों</strong> के भीतर <a href="mailto:billing@paramvani.com">billing@paramvani.com</a> पर ईमेल करें।</li>
          <li>अपना पंजीकृत ईमेल पता, ऑर्डर आईडी (आपकी भुगतान रसीद में पाया गया), और समस्या का स्पष्ट विवरण शामिल करें।</li>
          <li>हम आपके अनुरोध को <strong>2 व्यावसायिक दिनों</strong> के भीतर स्वीकार करेंगे और इसे <strong>7 व्यावसायिक दिनों</strong> के भीतर हल करेंगे।</li>
        </ol>
      </Section>

      <Section id="cancel">
        <h2>सदस्यता रद्दीकरण (Cancellation)</h2>
        <p>परमवाणी सदस्यताएं <strong>एकमुश्त खरीदारी</strong> हैं, स्वतः नवीनीकरण (auto-renewing) नहीं। आपसे तब तक दोबारा शुल्क नहीं लिया जाएगा जब तक कि आप अपनी वर्तमान सदस्यता समाप्त होने के बाद मैन्युअल रूप से नई सदस्यता नहीं खरीदते।</p>
        <p>कोई स्वतः-नवीनीकरण नहीं है, इसलिए भविष्य के शुल्कों से बचने के लिए किसी रद्दीकरण कार्रवाई की आवश्यकता नहीं है। आपकी सदस्यता बस अपनी अवधि के अंत में समाप्त हो जाती है।</p>
        <p>आप <a href="/profile">प्रोफ़ाइल पृष्ठ</a> के माध्यम से किसी भी समय अपना खाता हटा सकते हैं। खाता हटाने से आप किसी भी शेष सदस्यता समय के लिए धनवापसी के हकदार नहीं होंगे।</p>
      </Section>

      <Section id="expiry">
        <h2>क्रेडिट और सब्सक्रिप्शन की समाप्ति</h2>
        <ul>
          <li><strong>मुफ़्त क्रेडिट</strong> समाप्त नहीं होते हैं लेकिन प्रति खाते 5 तक सीमित हैं (नए उपयोगकर्ताओं के लिए एकमुश्त उपहार)।</li>
          <li><strong>7-डे स्पार्क</strong> सक्रियण के ठीक 7 दिन बाद समाप्त हो जाता है।</li>
          <li><strong>मासिक भक्त</strong> सक्रियण के ठीक 30 दिन बाद समाप्त हो जाता है।</li>
          <li>समाप्त हो चुकी सदस्यताएं आपके खाते को मुफ़्त-क्रेडिट मोड में वापस कर देती हैं। यदि निःशुल्क क्रेडिट भी समाप्त हो गए हैं, तो आपको नई सदस्यता खरीदनी होगी।</li>
        </ul>
      </Section>

      <Section id="gateway">
        <h2>पेमेंट गेटवे</h2>
        <p>सभी भुगतान एक PCI-DSS अनुरूप भुगतान गेटवे द्वारा संसाधित किए जाते हैं। परमवाणी आपके कार्ड, UPI या बैंक क्रेडेंशियल को स्टोर नहीं करता है। पेमेंट गेटवे की शर्तें भुगतान लेनदेन पर ही लागू होती हैं।</p>
        <p>भुगतान-संबंधित विवादों के लिए जिन्हें हमारे द्वारा हल नहीं किया जा सकता है, आप अपने बैंक/कार्ड जारीकर्ता से संपर्क कर सकते हैं।</p>
      </Section>
    </>
  );
}

export default function RefundPolicyPage() {
  const { lang } = useLang();
  return (
    <LegalLayout
      eyebrow={lang === 'hi' ? "कानूनी · भुगतान" : "Legal · Payments"}
      title={lang === 'hi' ? "धनवापसी और रद्दीकरण नीति" : "Refund & Cancellation Policy"}
      lastUpdated="August 24, 2025"
      toc={lang === 'hi' ? TOC_HI : TOC_EN}
      currentHref="/refund-policy"
    >
      {lang === 'hi' ? <ContentHI /> : <ContentEN />}
    </LegalLayout>
  );
}
