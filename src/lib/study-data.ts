export interface LexiconEntry {
  term: string;
  original: string; // Greek or Hebrew script
  language: "Hebrew" | "Greek";
  transliteration: string;
  definition: string;
  scriptureReference: string;
}

export interface StudySection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  scripturePassages: {
    reference: string;
    text: string;
    theologicalNote: string;
  }[];
  detailedExposition: string[];
  historicalContext?: string;
  keyTheologicalTerms?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const STUDY_SECTIONS: StudySection[] = [
  {
    id: "divine-origin",
    number: "01",
    title: "God's Good Creation",
    subtitle: "Made in God's Image with Purpose and Love",
    summary:
      "The Bible story starts not with guilt or fear, but with the amazing goodness, creativity, and joy of God. God didn't create people because He was lonely or needed helpers; He made us out of overflowing love. Every human being is made in God's image, designed to enjoy close friendship with Him, care for the world, and live with real meaning.",
    scripturePassages: [
      {
        reference: "Genesis 1:26–27, 31",
        text: "Then God said, 'Let us make man in our image, after our likeness... And God saw everything that he had made, and behold, it was very good.'",
        theologicalNote:
          "The words 'Let us' give an early glimpse of the Trinity: Father, Son, and Holy Spirit living in an eternal circle of love that overflows into creation.",
      },
      {
        reference: "Colossians 1:16–17",
        text: "For by him all things were created, in heaven and on earth, visible and invisible... all things were created through him and for him. And he is before all things, and in him all things hold together.",
        theologicalNote:
          "Jesus isn't just a great teacher who appeared later in history; the whole universe was made through Him and is held together by Him right now.",
      },
    ],
    detailedExposition: [
      "In ancient times, nearby nations believed the gods made humans just to be slaves and do hard labor. But the Bible tells a completely different story: the one true God lovingly shaped human beings as His honored sons, daughters, and caretakers of creation.",
      "The ancient Hebrew word for peace is 'Shalom.' It means much more than just the absence of fighting; it means total wholeness, deep peace of heart, healthy relationships, and harmony between God, people, and nature. This was the world as God made it: full of joy and free from fear or shame.",
      "Because every single person is made in God's image, your value is unconditional. You don't have to prove your worth through your job, appearance, money, or how smart you are. Your worth is a gift from God that no one can take away.",
    ],
    historicalContext:
      "Unlike ancient myths where the sun and stars were frightening gods to be worshipped, Genesis shows they are simply beautiful lights placed in the sky by a caring Creator.",
    keyTheologicalTerms: ["Made in God's Image (Imago Dei)", "Shalom (True Wholeness)", "Creation Out of Love"],
  },
  {
    id: "cosmic-rupture",
    number: "02",
    title: "What Went Wrong",
    subtitle: "How Choosing Our Own Way Broke the World",
    summary:
      "Sin is not just breaking a minor rule; it means deciding to run life our own way without God. When humanity doubted God's goodness and chose self-rule, our friendship with God was broken. This brought sadness, fear, guilt, and all the brokenness we experience in the world around us and inside our own minds.",
    scripturePassages: [
      {
        reference: "Romans 3:10–12, 23",
        text: "None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless... for all have sinned and fall short of the glory of God.",
        theologicalNote:
          "The Apostle Paul shows that everyone has missed the mark. No one can claim to have lived a completely pure life of love.",
      },
      {
        reference: "Romans 6:23a",
        text: "For the wages of sin is death...",
        theologicalNote:
          "When a branch is cut off from a tree, it slowly withers because it is cut off from the source of life. Sin cuts our hearts off from God, who is the source of all life.",
      },
      {
        reference: "Jeremiah 17:9",
        text: "The heart is deceitful above all things, and desperately sick; who can understand it?",
        theologicalNote:
          "Our inner desires tend to turn selfishly inward, which is why we cannot fix ourselves just by making resolutions.",
      },
    ],
    detailedExposition: [
      "At the root of sin is the thought: 'I know what is best for me better than God does.' When the first humans doubted God's word, trust was broken and fear took its place.",
      "Immediately, people felt shame and tried to hide. When God asked what happened, they began blaming each other. That same pattern continues today: broken relationships, self-protection, and pretending we have it all together.",
      "Because this brokenness affects every part of our lives—our thoughts, feelings, and choices—we cannot rescue ourselves. Trying to fix our standing before God with just good deeds is like trying to wipe dirt off a mirror with a muddy rag.",
      "We need something far greater than self-help advice: we need a Savior who can forgive our debt and give us a brand new heart.",
    ],
    keyTheologicalTerms: ["Missing the Mark (Hamartia)", "Separation from God", "The Need for a Savior"],
    faqs: [
      {
        question: "Why does the Bible say everyone has sinned, even nice, polite people?",
        answer:
          "Sin doesn't mean being as bad as humanly possible; it simply means falling short of God's perfect love. Think of throwing a stone across an ocean: one person might throw it 10 feet and another 50 feet, but neither can reach the other side. Compared to God's pure holiness, all of us fall short and need His mercy.",
      },
    ],
  },
  {
    id: "the-cross-atonement",
    number: "03",
    title: "The Rescue on the Cross",
    subtitle: "Why Jesus Took Our Place and How It Saves Us",
    summary:
      "The Cross is the greatest moment in history. It is where God's perfect justice and His infinite love meet. Because God loves us, Jesus took the penalty for our wrongs upon Himself. He took what we owed so that we could receive what He deserved: complete forgiveness and peace with God.",
    scripturePassages: [
      {
        reference: "2 Corinthians 5:21",
        text: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.",
        theologicalNote:
          "This is often called 'The Great Trade.' Jesus took our guilt and punishment, and in return He gives us His pure, clean standing before God.",
      },
      {
        reference: "1 Peter 3:18",
        text: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
        theologicalNote:
          "The main goal of Jesus' sacrifice wasn't just to save us from judgment, but to bring us home into close friendship with God.",
      },
      {
        reference: "Isaiah 53:5",
        text: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.",
        theologicalNote:
          "Written 700 years before Jesus was born, this prophecy described exactly how Jesus would suffer in our place to heal us.",
      },
    ],
    detailedExposition: [
      "People often wonder: 'If God is loving, why couldn't He just say 'No problem, you're forgiven' without the cross?' The answer is that true love and true justice always care about the cost.",
      "Think about real-life forgiveness: if someone damages your car and you forgive them, who pays the repair bill? You do! Forgiveness always means the forgiver absorbs the cost. On the cross, God Himself in Jesus absorbed the painful debt of our wrongdoing so we wouldn't have to carry it.",
      "When Jesus died, several amazing things happened all at once:",
      "1. He took our punishment: Jesus took the penalty for our sins as our substitute.",
      "2. He cleared our record: The debt against us was stamped 'Paid in Full.'",
      "3. He defeated evil: The power of sin, guilt, and the fear of death was broken.",
      "4. He brought us home: The distance between us and God was wiped away forever.",
    ],
    keyTheologicalTerms: ["Taking Our Place (Substitution)", "Paid in Full (Tetelestai)", "Peace with God"],
    faqs: [
      {
        question: "What did Jesus mean when He cried out 'It is finished' on the cross?",
        answer:
          "In biblical times, when someone paid off a financial debt at a shop, the merchant wrote the Greek word 'Tetelestai' on the bill, meaning 'Paid in Full.' When Jesus died, He meant the payment for our sins was 100% complete. Nothing can ever be added to it, and nothing more is owed.",
      },
    ],
  },
  {
    id: "the-resurrection",
    number: "04",
    title: "The Miracle of the Empty Tomb",
    subtitle: "Jesus Beat Death and Proved His Promises True",
    summary:
      "Christian faith is not based on wishful thinking or bedtime myths. It is grounded in a real, historical event: on the third day after being executed and buried, Jesus physically walked out of the tomb alive. Because He conquered death, we can know for sure that our sins are forgiven and that we will live forever with Him.",
    scripturePassages: [
      {
        reference: "1 Corinthians 15:3–4, 20",
        text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day... But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep.",
        theologicalNote:
          "This statement was recited by early Christians within just a few years of Jesus' resurrection as eyewitness truth.",
      },
      {
        reference: "Luke 24:39",
        text: "See my hands and my feet, that it is I myself. Touch me, and see. For a spirit does not have flesh and bones as you see that I have.",
        theologicalNote:
          "Jesus was not a ghost or an illusion; He had a real, physical body that people could touch, hear, and eat with.",
      },
    ],
    detailedExposition: [
      "The followers of Jesus didn't say, 'Jesus lives on in our memories.' They testified that the actual man who died on the cross had come back to life in power.",
      "Historians point out several powerful facts from that first Easter morning:",
      "1. Jesus really died: Roman soldiers were execution experts; crucifixion was lethal, as confirmed by both Roman and Jewish historians.",
      "2. The tomb was empty: If Jesus was still in the grave, His enemies could have easily paraded His body to stop the Christian message immediately. But they couldn't, because the tomb was empty.",
      "3. Cowards became courageous: The disciples, who had run away in panic when Jesus was arrested, suddenly stood boldly before kings and crowds, willingly dying for their eyewitness testimony.",
      "4. Skeptics were transformed: People like James (Jesus' skeptical brother) and Saul (who violently opposed Christians) became passionate believers after meeting the risen Jesus.",
      "Because Jesus is alive, death is no longer the final word. When you place your trust in Him, your future is secure forever.",
    ],
    keyTheologicalTerms: ["Resurrection (Coming Back to Life)", "Eyewitness Proof", "Eternal Hope"],
  },
  {
    id: "sola-gratia-faith",
    number: "05",
    title: "God's Free Gift: Grace & Faith",
    subtitle: "Why You Don't Have to Earn God's Love",
    summary:
      "Every other belief system says: 'Work hard, follow these rules, and maybe you will be good enough for God to accept you.' The Gospel says the exact opposite: 'Jesus already did the work; receive His gift and be accepted today!' Salvation is a gift of pure love, received through simple, honest faith.",
    scripturePassages: [
      {
        reference: "Ephesians 2:8–9",
        text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        theologicalNote:
          "A gift is something you say 'thank you' for, not something you pay for. If you paid for it, it wouldn't be a gift!",
      },
      {
        reference: "Romans 4:4–5",
        text: "Now to the one who works, his wages are not counted as a gift but as his due. And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness.",
        theologicalNote:
          "God welcomes people not because they earned it, but because they humbly trust in His kindness.",
      },
    ],
    detailedExposition: [
      "What is the difference between mercy and grace?",
      "• Mercy is not getting the punishment you deserve.",
      "• Grace is getting the wonderful blessings you could never deserve—friendship with God, a clean slate, and eternal life.",
      "What does real faith look like? It has three simple parts:",
      "1. Knowing the facts: Hearing who Jesus is and what He did.",
      "2. Agreeing it is true: Believing in your heart that Jesus really died and rose for you.",
      "3. Trusting Him personally: Like stepping onto a sturdy bridge or climbing into an airplane, faith means putting your real trust in Jesus to carry you.",
      "The moment you trust Jesus, God stamps your record clean and clothes you in the perfection of Christ. You are forever safe in His love.",
    ],
    keyTheologicalTerms: ["Grace (Unearned Kindness)", "Faith (Personal Trust)", "A Clean Record"],
  },
  {
    id: "theological-faqs",
    number: "06",
    title: "Honest Questions & Clear Answers",
    subtitle: "Real Answers to Common Doubts and Questions",
    summary:
      "God doesn't ask us to turn off our brains or ignore tough questions. The Bible invites thoughtful questions and honest examination. Here are clear, down-to-earth answers to the questions people ask most.",
    scripturePassages: [
      {
        reference: "1 Peter 3:15",
        text: "Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.",
        theologicalNote:
          "Sharing why we believe should always be done with gentle warmth, kindness, and honest care.",
      },
    ],
    detailedExposition: [
      "Faith is not taking a blind leap in the dark; it is stepping forward in the light of real evidence, honest history, and God's personal love.",
    ],
    faqs: [
      {
        question: "Why is Jesus the only way to God? Doesn't that sound narrow?",
        answer:
          "Truth by its nature is specific. If someone is trapped in a burning building and a firefighter builds a rescue ladder, saying 'That's the only way out' isn't being unkind—it's pointing out the one rescue that actually works! If any human religion could save us, Jesus wouldn't have needed to suffer and die. He came because only God Himself could cross the infinite divide. His invitation isn't about keeping people out; it's an open door welcoming everyone in.",
      },
      {
        question: "If God is good and all-powerful, why is there so much suffering?",
        answer:
          "God created a world where humans have real freedom to choose, and much of the world's pain comes from human greed, selfishness, and cruelty. If God stopped all evil tonight, none of us would be here tomorrow, because selfishness lives in our own hearts too. Instead of wiping us out, God chose to step right into our pain. On the cross, Jesus felt our deepest agony and loneliness. And because He rose again, we know that suffering is not the end of the story—God promises to one day wipe away every tear and heal all brokenness.",
      },
      {
        question: "Can I ever lose my salvation if I mess up?",
        answer:
          "When you place your trust in Jesus, you are adopted as God's child. A loving parent doesn't disown their child when they stumble or make a mistake. Jesus said: 'I give them eternal life, and they will never perish; no one will snatch them out of my hand' (John 10:28). Your salvation rests on Jesus' strong grip on you, not on your fragile grip on Him.",
      },
      {
        question: "What if I still have doubts?",
        answer:
          "Doubt isn't the opposite of faith; it is often the doorway to deeper understanding. Even in the Bible, people like John the Baptist and Thomas asked honest questions, and Jesus answered them with patience and love. You can bring your honest doubts directly to God—He is big enough to handle them.",
      },
    ],
  },
  {
    id: "biblical-lexicon",
    number: "07",
    title: "Everyday Bible Word Guide",
    subtitle: "What Key Hebrew and Greek Words Mean in Plain English",
    summary:
      "The Bible was originally written in ancient Hebrew and Greek. Looking at the root meanings of these words helps the good news shine with even greater warmth and clarity.",
    scripturePassages: [],
    detailedExposition: [
      "Here are the core Bible words explained in simple, everyday language with relatable real-world pictures.",
    ],
  },
];

export const BIBLICAL_LEXICON: LexiconEntry[] = [
  {
    term: "Shalom",
    original: "שָׁלוֹם",
    language: "Hebrew",
    transliteration: "shā-lōm",
    definition:
      "Deep, full peace and wholeness. It is not just quietness, but life working the way God designed it—full of joy, health, good relationships, and harmony.",
    scriptureReference: "Isaiah 53:5; Jeremiah 29:11",
  },
  {
    term: "Hesed",
    original: "חֶסֶד",
    language: "Hebrew",
    transliteration: "ḥe-seḏ",
    definition:
      "Unbreakable, loyal love. Like a parent who promises never to give up on their child, God's love stays faithful even when we stumble.",
    scriptureReference: "Psalm 136:1; Lamentations 3:22",
  },
  {
    term: "Hamartia (Sin)",
    original: "ἁμαρτία",
    language: "Greek",
    transliteration: "ha-mar-ti'-a",
    definition:
      "Originally an archery word meaning 'to miss the target.' In life, it means missing God's target of perfect love and trying to live independently from Him.",
    scriptureReference: "Romans 3:23; Romans 6:23",
  },
  {
    term: "Charis (Grace)",
    original: "χάρις",
    language: "Greek",
    transliteration: "char'-is",
    definition:
      "A generous, wonderful gift given out of pure kindness to someone who did nothing to earn it and could never repay it.",
    scriptureReference: "Ephesians 2:8; Romans 5:2",
  },
  {
    term: "Tetelestai",
    original: "τετέλεσται",
    language: "Greek",
    transliteration: "te-te'-les-tai",
    definition:
      "Paid in full! Ancient store owners stamped this word on receipts when a bill was 100% paid. Jesus shouted this on the cross to show our debt is completely cleared.",
    scriptureReference: "John 19:30",
  },
  {
    term: "Metanoia (Repentance)",
    original: "μετάνοια",
    language: "Greek",
    transliteration: "me-ta'-noy-ah",
    definition:
      "A complete change of mind and direction. Like making a safe U-turn on the highway when you realize you were driving the wrong way, turning back into God's open arms.",
    scriptureReference: "Mark 1:15; Acts 20:21",
  },
  {
    term: "Zoe (Abundant Life)",
    original: "ζωή",
    language: "Greek",
    transliteration: "zō-ē'",
    definition:
      "Real, rich, eternal life with God Himself. It is not just having a heartbeat (biological life), but living with God's joy, peace, and love in your soul.",
    scriptureReference: "John 10:10; John 17:3",
  },
  {
    term: "Hilasterion (Mercy Seat)",
    original: "ἱλαστήριον",
    language: "Greek",
    transliteration: "hil-as-tē'-ree-on",
    definition:
      "The meeting place of mercy. The place where God absorbs the hurt of our wrongdoing and pours out unconditional forgiveness and peace.",
    scriptureReference: "Romans 3:25; 1 John 2:2",
  },
];
