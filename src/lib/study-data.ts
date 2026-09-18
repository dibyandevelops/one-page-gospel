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
    title: "The Divine Origin & Original Shalom",
    subtitle: "Ontology, The Imago Dei, and Cosmic Harmony",
    summary:
      "The Christian narrative begins not with sin or human guilt, but with the boundless goodness, sovereignty, and creative joy of the Triune God. Humanity was formed not out of divine loneliness or necessity, but as the pinnacle of creation, bestowed with dignity as image-bearers to govern, cultivate, and enjoy unbroken fellowship with the Creator.",
    scripturePassages: [
      {
        reference: "Genesis 1:26–27, 31",
        text: "Then God said, 'Let us make man in our image, after our likeness... And God saw everything that he had made, and behold, it was very good.'",
        theologicalNote:
          "The plural pronoun ('Let us') foreshadows the Trinitarian nature of God: an eternal community of mutual love flowing outwards into creation.",
      },
      {
        reference: "Colossians 1:16–17",
        text: "For by him all things were created, in heaven and on earth, visible and invisible... all things were created through him and for him. And he is before all things, and in him all things hold together.",
        theologicalNote:
          "Creation is fundamentally Christocentric. The cosmos is not an autonomous machine, but continually sustained by the eternal Son.",
      },
    ],
    detailedExposition: [
      "In the ancient Near Eastern context, the creation accounts of surrounding cultures (such as Enuma Elish) portrayed human beings as created out of divine conflict, manufactured merely to serve as slave labor for capricious deities. In stark and revolutionary contrast, the Genesis narrative reveals a God whose speech alone forms existence, creating humans as royal stewards, covenant partners, and honored reflections of His character.",
      "The Hebrew concept of 'Shalom' denotes far more than the modern Western definition of peace as the mere absence of conflict. Shalom encompasses complete, universal flourishing, holistic wholeness, moral integrity, ecological balance, and transparent harmony between God, humanity, and creation. This was the primordial state of existence: an ecology of joy with zero alienation.",
      "Because every human being bears the Imago Dei (Image of God), human worth is intrinsic and unconditional. It does not fluctuate based on utility, social status, intellect, or physical strength. To harm a human is to strike at the mirror of the living God.",
    ],
    historicalContext:
      "Written against the backdrop of Babylonian and Egyptian polytheism, Genesis establishes radical monotheism: the sun, moon, and stars are not deities to be feared, but fixtures of light created by the one true God.",
    keyTheologicalTerms: ["Imago Dei", "Original Shalom", "Creatio Ex Nihilo"],
  },
  {
    id: "cosmic-rupture",
    number: "02",
    title: "The Anatomy of the Fall & Cosmic Rupture",
    subtitle: "Autonomy, Hamartia, and the Total Inability of Self-Justification",
    summary:
      "Sin is not merely a legal infraction or poor behavioral choice; it is cosmic treason and an epistemological rupture. In grasping for autonomous moral supremacy ('you will be like God, knowing good and evil'), humanity fractured the covenant relationship, severing themselves from the Source of Life and introducing corruption, shame, death, and systemic brokenness into the universe.",
    scripturePassages: [
      {
        reference: "Romans 3:10–12, 23",
        text: "None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless... for all have sinned and fall short of the glory of God.",
        theologicalNote:
          "Paul quotes Psalm 14 and Psalm 53 to demonstrate that spiritual brokenness is universal. The disease infects mind, heart, and will.",
      },
      {
        reference: "Romans 6:23a",
        text: "For the wages of sin is death...",
        theologicalNote:
          "Death in biblical theology is threefold: spiritual (alienation from God's presence), physical (bodily decay), and eternal (final judicial separation).",
      },
      {
        reference: "Jeremiah 17:9",
        text: "The heart is deceitful above all things, and desperately sick; who can understand it?",
        theologicalNote:
          "The inner compass of human affection is curved inward upon itself (incurvatus in se), rendering humanity unable to cure its own malady.",
      },
    ],
    detailedExposition: [
      "The essence of the Fall in Genesis 3 was the desire for moral autonomy: deciding what is good and evil independently of divine revelation. When the serpent whispered, 'Did God really say?', doubt was cast upon God's goodness, and mistrust took root in the human soul.",
      "The immediate consequences were psychological and relational: Adam and Eve felt shame, sewed fig leaves to conceal their vulnerability, and hid in the trees when God drew near. When confronted, defensive blame-shifting instantly fractured the marriage covenant ('The woman whom you gave to be with me...').",
      "Theologians term humanity's predicament 'Total Depravity' or 'Total Inability'. This does not mean every human is as evil as they could possibly be; rather, it means every dimension of human existence—intellect, emotions, volition, culture, and nature—has been distorted by sin. Just as a drop of poison diffuses through a glass of water, no part of human nature remains untainted.",
      "Consequently, human religion, morality, philanthropy, and philosophical systems—while often noble—can never bridge the infinite ethical chasm. One cannot extinguish a fire while standing in the flames.",
    ],
    keyTheologicalTerms: ["Hamartia (Missing the Mark)", "Incurvatus in Se", "Original Sin", "Depravity"],
    faqs: [
      {
        question: "Why does an inherited condition hold us accountable?",
        answer:
          "In biblical covenant theology, Adam acted as the federal head (representative) of all humanity. Furthermore, each individual ratifies Adam's rebellion through their own personal, willing defiance of God's holy standard. We are sinners both by inheritance and by daily choice.",
      },
    ],
  },
  {
    id: "the-cross-atonement",
    number: "03",
    title: "The Cross & The Mechanics of Atonement",
    subtitle: "Substitutionary Atonement, Propitiation, and Christus Victor",
    summary:
      "The Cross is the apex of redemptive history. It is the place where God's uncompromising justice and His infinite love meet and kiss. In the person of Jesus of Nazareth—truly God and truly man—God entered human misery, took the curse of our rebellion onto Himself, satisfied the demands of holy justice, and disarmed the cosmic powers of darkness.",
    scripturePassages: [
      {
        reference: "2 Corinthians 5:21",
        text: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God.",
        theologicalNote:
          "Often called 'The Great Exchange'. Christ assumes our guilt and punishment; we receive His spotless, perfect righteousness.",
      },
      {
        reference: "1 Peter 3:18",
        text: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
        theologicalNote:
          "The purpose of atonement is not merely escaping judgment, but restoring direct, intimate access to the presence of the Father.",
      },
      {
        reference: "Isaiah 53:5",
        text: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.",
        theologicalNote:
          "Written seven centuries before Jesus, the Suffering Servant prophecy in Isaiah 53 details vicarious, substitutionary suffering.",
      },
    ],
    detailedExposition: [
      "A common misconception asks: 'If God is all-powerful and loving, why didn't He just say 'I forgive you' without the gruesome execution of His Son?' The answer lies in the nature of true justice. If a human judge forgives a serial criminal with a wave of the hand without restitution or sentence, he is corrupt and unjust. For God to sweep sin under the rug would be to deny His own holiness and declare that the suffering of victims and the desecration of creation do not matter.",
      "In all genuine forgiveness, the forgiver always absorbs the debt. If someone smashes your window and you forgive them, you absorb the financial cost of replacing it. On the Cross, God Himself in Christ absorbed the catastrophic moral debt of the universe into His own being, drinking the cup of judgment so that mercy could be poured out freely.",
      "The classical Christian church recognizes multiple complementary facets of the Atonement:",
      "1. Penal Substitution: Christ bore our legal penalty as our substitute (Isaiah 53, Galatians 3:13).",
      "2. Propitiation: Divine wrath against evil is turned away, transformed into grace (Romans 3:25, 1 John 2:2).",
      "3. Christus Victor: The Cross and Resurrection broke the tyrannical grip of Satan, sin, and fear of death (Colossians 2:15, Hebrews 2:14–15).",
      "4. Reconciliation: The hostility between holy God and alienated humanity was definitively put to death (Romans 5:10, Ephesians 2:16).",
    ],
    keyTheologicalTerms: ["Penal Substitution", "Propitiation (Hilasterion)", "Christus Victor", "Expiation"],
    faqs: [
      {
        question: "What did Jesus mean on the cross when He cried 'Tetelestai' ('It is finished')?",
        answer:
          "In first-century Greco-Roman commerce, the Greek word 'Tetelestai' was stamped across promissory notes and bills of debt when the final payment was completed, meaning 'Paid in Full'. Nothing can be added, and nothing remains owed on the sinner's account.",
      },
    ],
  },
  {
    id: "the-resurrection",
    number: "04",
    title: "The Historical Resurrection & Vindication",
    subtitle: "The Empty Tomb, Bodily Hope, and The Destruction of Death",
    summary:
      "Christianity does not stand on philosophical abstractions or mystical allegories; it stands or falls upon a concrete, historical, space-time event: the physical bodily resurrection of Jesus of Nazareth from the dead on the third day.",
    scripturePassages: [
      {
        reference: "1 Corinthians 15:3–4, 14, 17",
        text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day... And if Christ has not been raised, then our preaching is in vain and your faith is in vain... and you are still in your sins.",
        theologicalNote:
          "Paul preserved one of the earliest oral creeds in Christian history, dated by critical scholars to within 2 to 5 years of the crucifixion.",
      },
      {
        reference: "Luke 24:39",
        text: "See my hands and my feet, that it is I myself. Touch me, and see. For a spirit does not have flesh and bones as you see that I have.",
        theologicalNote:
          "The resurrection was bodily and physical, not a mere ghostly hallucination or metaphorical spiritual survival.",
      },
    ],
    detailedExposition: [
      "The Apostles did not proclaim that Jesus lived on in their memories or that His teachings were immortal. They proclaimed that the dead corpse that was wrapped in linen and buried under a Roman seal had been miraculously animated, transformed, and walked out of the tomb.",
      "Historical scholars, both Christian and skeptical, recognize several foundational historical facts regarding the events of Easter:",
      "1. The Death of Jesus: Roman executioners were professional killers; crucifixion guaranteed asphyxiation and death, corroborated by Roman historians Tacitus and Josephus.",
      "2. The Empty Tomb: Discovered first by women (whose testimony was not legally recognized in ancient courts—a detail no ancient fabulist would invent).",
      "3. The Transformation of the Disciples: Cowardly men who fled in terror at the arrest suddenly risked torture, beating, and execution boldly proclaiming Christ's resurrection in Jerusalem itself.",
      "4. The Conversion of Skeptics: James, the cynical half-brother of Jesus, and Saul of Tarsus, a rabbinic persecutor of the church, were both radically transformed by encounters with the risen Christ.",
      "The Resurrection is the supreme validation of Christ's claims. If Jesus remained in the grave, He was at best a tragic martyr and at worst a deceiver. Because He rose, His sacrifice is approved by the Father, and death itself has been given an expiration date.",
    ],
    keyTheologicalTerms: ["Anastasis (Resurrection)", "Minimal Facts Argument", "Firstfruits of the New Creation"],
  },
  {
    id: "sola-gratia-faith",
    number: "05",
    title: "Justification by Grace Through Faith",
    subtitle: "Sola Gratia, Sola Fide, and the Imputation of Righteousness",
    summary:
      "Salvation is fundamentally an act of unconditional divine grace received solely through faith in the person and work of Jesus Christ. It cannot be bought, bartered, earned through ascetism, or supplemented by human merit. Righteousness is legally imputed to the believer.",
    scripturePassages: [
      {
        reference: "Ephesians 2:8–9",
        text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        theologicalNote:
          "Salvation is monergistic in its origin and accomplishment. Human boasting is excluded because the entire rescue is unmerited gift.",
      },
      {
        reference: "Romans 4:4–5",
        text: "Now to the one who works, his wages are not counted as a gift but as his due. And to the one who does not work but believes in him who justifies the ungodly, his faith is counted as righteousness.",
        theologicalNote:
          "God justifies not the righteous, but the 'ungodly' who cast themselves upon His mercy.",
      },
    ],
    detailedExposition: [
      "Every world religion and human moral system operates on the principle of performance: 'If I obey, if I chant, if I purify myself, if my good deeds outweigh my bad deeds, then God may accept me.' The Gospel of Jesus Christ reverses this completely: 'Because Christ has obeyed and died for me, I am accepted; therefore, I joyfully obey.'",
      "Grace (Greek: Kharis) is not merely leniency; it is unmerited, counter-conditional favor given to those who deserve the exact opposite. Mercy is not getting what you deserve (judgment); Grace is getting what you could never deserve (sonship, righteousness, eternal life).",
      "Saving faith involves three classical Latin elements:",
      "1. Notitia: Knowledge of the truth of the Gospel (who Jesus is and what He accomplished).",
      "2. Assensus: Intellectual assent (believing these historical facts to be true).",
      "3. Fiducia: Personal, wholehearted trust and reliance upon Christ alone as Savior and Lord.",
      "Justification is a forensic (legal) declaration by God. The moment a person places faith in Christ, God cancels their guilt, clothes them in the moral perfection of Jesus, and declares them forever righteous in His sight.",
    ],
    keyTheologicalTerms: ["Justification", "Imputation", "Sola Fide (Faith Alone)", "Sola Gratia (Grace Alone)"],
  },
  {
    id: "theological-faqs",
    number: "06",
    title: "Theological Apologetics & Hard Questions",
    subtitle: "Rigorous Answers to Contemporary Intellectual Inquiries",
    summary:
      "The Christian faith invites honest questions, intellectual inquiry, and rigorous testing. Here we address the most common and difficult theological objections encountered by seekers and thinkers.",
    scripturePassages: [
      {
        reference: "1 Peter 3:15",
        text: "Always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.",
        theologicalNote:
          "Apologetics ('apologia') is the reasoned defense of Christian truth, commanded to be conducted with meekness, love, and intellectual integrity.",
      },
    ],
    detailedExposition: [
      "Faith in Christ is not a blind leap into the dark; it is a step of reasoned trust based on the light of historical evidence, moral conscience, and the self-authenticating truth of Scripture.",
    ],
    faqs: [
      {
        question: "Why is Jesus the only way? Isn't that narrow-minded and intolerant?",
        answer:
          "Truth by definition is narrow: 2 + 2 equals 4, not 5 or 7. If Christianity's core premise is true—that humanity's problem is an infinite moral separation from a holy God that no human effort can heal—then only an infinite God becoming man to die as substitute could solve it. If any other religion or moral system could save us, then Jesus' brutal execution on the cross was a grotesque, pointless tragedy. Jesus did not say 'I am one of many helpful options'; He declared, 'I am the way, and the truth, and the life. No one comes to the Father except through me' (John 14:6). The narrowness is not borne out of exclusion, but out of the radical uniqueness of the rescue.",
      },
      {
        question: "If God is all-powerful and all-loving, why is there so much suffering and evil?",
        answer:
          "God did not create evil; evil is a parasite—a privation and corruption of good that entered creation through the rebellion of free creatures. If God were to eradicate all evil tonight at midnight, none of us would survive past 12:01 AM, because evil resides in our own hearts as well. Instead of destroying the universe, God chose to redeem it. On the cross, God did not remain distant from our pain; He entered into human suffering Himself. In Christ, God took the worst evil in history (the crucifixion of the spotless Son) and turned it into the greatest good (the salvation of the world). The Resurrection proves that suffering is temporary and that God will one day wipe away every tear, making all things new.",
      },
      {
        question: "Can someone lose their salvation once they have genuinely trusted Christ?",
        answer:
          "True saving faith is persevering faith. Jesus said in John 10:28: 'I give them eternal life, and they will never perish, and no one will snatch them out of my hand.' Salvation does not depend on our feeble grip on God, but on God's almighty grip on us. While believers may stumble and experience seasons of doubt or discipline, the Holy Spirit guarantees and seals them until the day of final redemption (Ephesians 1:13–14, Romans 8:38–39).",
      },
      {
        question: "What about those who have never heard the name of Jesus?",
        answer:
          "God is infinitely just, righteous, and fair. In Genesis 18:25, Abraham asks: 'Shall not the Judge of all the earth do what is just?' Romans 1–2 teaches that all humans possess knowledge of God through creation and conscience, and are held accountable to the light they have received. No one will be condemned unjustly or on a technicality; anyone who perishes does so because of their own rebellion against the light revealed to them.",
      },
    ],
  },
  {
    id: "biblical-lexicon",
    number: "07",
    title: "Lexicon of Key Biblical Terms",
    subtitle: "Original Hebrew and Greek Vocabulary of the Gospel",
    summary:
      "A deeper appreciation of the Gospel emerges when examining the rich original languages of the Old and New Testaments.",
    scripturePassages: [],
    detailedExposition: [
      "The following vocabulary entries unpack the root definitions, nuances, and scriptural contexts of key terms across redemptive history.",
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
      "Universal wholeness, completeness, sound health, societal harmony, and unbroken communion with God. Far more than passive quietness, it is active flourishing under divine reign.",
    scriptureReference: "Isaiah 53:5; Jeremiah 29:11",
  },
  {
    term: "Hesed",
    original: "חֶסֶד",
    language: "Hebrew",
    transliteration: "ḥe-seḏ",
    definition:
      "Steadfast, loyal, covenantal love. The persistent, unfailing devotion of God to His people that refuses to abandon them, even when they are unfaithful.",
    scriptureReference: "Psalm 136:1; Lamentations 3:22",
  },
  {
    term: "Hamartia",
    original: "ἁμαρτία",
    language: "Greek",
    transliteration: "ha-mar-ti'-a",
    definition:
      "Literally 'to miss the mark' (originally an archery term). In theology, missing the standard of God's perfect holiness, falling into rebellion and moral error.",
    scriptureReference: "Romans 3:23; Romans 6:23",
  },
  {
    term: "Kharis",
    original: "χάρις",
    language: "Greek",
    transliteration: "char'-is",
    definition:
      "Grace. Unmerited, generous, benevolent favor bestowed without regard to the worth or merit of the receiver, and operating contrary to what is deserved.",
    scriptureReference: "Ephesians 2:8; Romans 5:2",
  },
  {
    term: "Tetelestai",
    original: "τετέλεσται",
    language: "Greek",
    transliteration: "te-te'-les-tai",
    definition:
      "Perfect passive of teleo: 'It is finished, accomplished, fulfilled, paid in full.' Stamped across ancient receipt vouchers when a debt was fully liquidated.",
    scriptureReference: "John 19:30",
  },
  {
    term: "Metanoia",
    original: "μετάνοια",
    language: "Greek",
    transliteration: "me-ta'-noy-ah",
    definition:
      "A transformative change of mind, perspective, and core allegiance. Turning away from self-sovereignty and toward God in wholehearted submission.",
    scriptureReference: "Mark 1:15; Acts 20:21",
  },
  {
    term: "Zoe",
    original: "ζωή",
    language: "Greek",
    transliteration: "zō-ē'",
    definition:
      "The divine, uncreated, indestructible life of God Himself, distinct from mere biological existence (bios). It denotes the quality and eternity of God's own communion.",
    scriptureReference: "John 10:10; John 17:3",
  },
  {
    term: "Hilasterion",
    original: "ἱλαστήριον",
    language: "Greek",
    transliteration: "hil-as-tē'-ree-on",
    definition:
      "Propitiation, the mercy seat. The place or sacrifice by which holy divine wrath against evil is turned away and replaced with mercy and pardon.",
    scriptureReference: "Romans 3:25; 1 John 2:2",
  },
];
