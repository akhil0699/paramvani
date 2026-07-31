/** Murf speaking styles the app targets based on the user's question tone. */
export type MurfStyle = 'Calm' | 'Conversational' | 'Promo' | 'Sad';

const SAD_PATTERNS = [
  'dukh', 'udaas', 'gam', 'ro raha', 'rona', 'maut', 'mar gaya', 'mar gayi',
  'kho gaya', 'kho gayi', 'akela', 'akeli', 'tanha', 'pareshan', 'musibat',
  'problem', 'tension', 'depressed', 'sad', 'grief', 'cry', 'crying', 'loss',
  'passed away', 'died', 'death', 'hurt', 'pain', 'suffer', 'hopeless',
  'दुख', 'उदास', 'गम', 'रो', 'मृत', 'मर', 'अकेला', 'अकेल', 'परेशान',
  'मुसीबत', 'तनहा', 'निराश', 'दर्द', 'पीड़ा', 'शोक',
];

const CALM_PATTERNS = [
  'shanti', 'peace', 'calm', 'relax', 'anxiety', 'stress', 'worried', 'worry',
  'fear', 'afraid', 'scared', 'sleep', 'insomnia', 'meditat', 'dhyan', 'sukoon',
  'chain', 'shaant', 'shant', 'dar lag', 'chinta', 'tension kam', 'mind',
  'शांति', 'शान्त', 'चिंता', 'डर', 'भय', 'ध्यान', 'सुकून', 'चैन', 'शान्ति',
  'anshant', 'bechain', 'बेचैन',
];

const PROMO_PATTERNS = [
  'motivat', 'inspire', 'courage', 'strength', 'power', 'success', 'win',
  'goal', 'dream', 'bless', 'ashirwad', 'shakti', 'sahas', 'himmat', 'jeet',
  'energy', 'confident', 'believe', 'achieve', 'start', 'new job', 'exam',
  'प्रेरण', 'शक्ति', 'साहस', 'हिम्मत', 'जीत', 'सफल', 'आशीर्वाद', 'उत्साह',
  'confidence', 'strong',
];

function matchesAny(text: string, patterns: string[]): boolean {
  return patterns.some((p) => text.includes(p));
}

/**
 * Infer Murf style from the user's question tone (Hindi + English keywords).
 * Priority: Sad → Calm → Promo → Conversational (default).
 */
export function detectMurfStyle(userMessage: string): MurfStyle {
  const text = userMessage.toLowerCase().normalize('NFKC');

  if (matchesAny(text, SAD_PATTERNS)) return 'Sad';
  if (matchesAny(text, CALM_PATTERNS)) return 'Calm';
  if (matchesAny(text, PROMO_PATTERNS)) return 'Promo';
  return 'Conversational';
}

/** hi-IN-shaan supports all four styles natively; Carter needs fallbacks. */
export function resolveStyleForVoice(style: MurfStyle, voiceId: string): string {
  const id = voiceId.toLowerCase();
  if (id.includes('shaan')) return style;

  if (id.includes('carter')) {
    const map: Record<MurfStyle, string> = {
      Calm: 'Calm',
      Conversational: 'Conversational',
      Promo: 'Narration',
      Sad: 'Calm',
    };
    return map[style];
  }
  return style;
}
