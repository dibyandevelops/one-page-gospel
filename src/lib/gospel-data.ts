export interface ScriptureVerse {
  reference: string;
  translations: {
    ESV: string;
    NIV: string;
    KJV: string;
  };
  contextNote?: string;
}

export interface GospelStep {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  summary: string;
  themeColor: "emerald" | "crimson" | "gold" | "blue" | "amber";
  iconName: "Sparkles" | "AlertCircle" | "Cross" | "HeartHandshake" | "Compass";
  keyVerse: ScriptureVerse;
  supplementaryVerses: ScriptureVerse[];
  takeawayPoints: string[];
  reflectionQuestion: string;
}

export const GOSPEL_STEPS: GospelStep[] = [
  {
    id: "creation-purpose",
    number: 1,
    title: "God's Design & Creation",
    subtitle: "Created for Purpose and Relationship",
    summary:
      "God created the universe with beauty, order, and purpose. Human beings were lovingly formed in God's own image to live in joy, purpose, and unbroken communion with their Creator.",
    themeColor: "emerald",
    iconName: "Sparkles",
    keyVerse: {
      reference: "Genesis 1:27, 31",
      translations: {
        ESV: "So God created man in his own image, in the image of God he created him; male and female he created them... And God saw everything that he had made, and behold, it was very good.",
        NIV: "So God created mankind in his own image, in the image of God he created them; male and female he created them... God saw all that he had made, and it was very good.",
        KJV: "So God created man in his own image, in the image of God created he him; male and female created he them... And God saw every thing that he had made, and, behold, it was very good.",
      },
      contextNote: "God's original design was free from suffering, decay, brokenness, and guilt.",
    },
    supplementaryVerses: [
      {
        reference: "Psalm 139:14",
        translations: {
          ESV: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
          NIV: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
          KJV: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.",
        },
      },
      {
        reference: "Revelation 4:11",
        translations: {
          ESV: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.",
          NIV: "You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.",
          KJV: "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.",
        },
      },
    ],
    takeawayPoints: [
      "You are not an accident; your existence is intentional.",
      "Life's deepest fulfillment is found in relationship with your Creator.",
      "Every person possesses inherent worth, dignity, and divine purpose.",
    ],
    reflectionQuestion: "What does knowing you were intentionally made with purpose change about how you see yourself?",
  },
  {
    id: "the-fall-separation",
    number: 2,
    title: "The Broken World & Separation",
    subtitle: "The Problem of Sin and Distance from God",
    summary:
      "Mankind turned away from God, choosing autonomy and self-will. This rebellion (called sin) fractured the harmony between humanity and God, bringing spiritual death, shame, guilt, and the brokenness we experience around us and inside ourselves.",
    themeColor: "crimson",
    iconName: "AlertCircle",
    keyVerse: {
      reference: "Romans 3:23",
      translations: {
        ESV: "For all have sinned and fall short of the glory of God.",
        NIV: "For all have sinned and fall short of the glory of God.",
        KJV: "For all have sinned, and come short of the glory of God.",
      },
      contextNote: "Sin is not just extreme misconduct; it is missing the mark of God's perfect love and righteousness.",
    },
    supplementaryVerses: [
      {
        reference: "Romans 6:23a",
        translations: {
          ESV: "For the wages of sin is death...",
          NIV: "For the wages of sin is death...",
          KJV: "For the wages of sin is death...",
        },
      },
      {
        reference: "Isaiah 59:2",
        translations: {
          ESV: "But your iniquities have made a separation between you and your God, and your sins have hidden his face from you so that he does not hear.",
          NIV: "But your iniquities have separated you from your God; your sins have hidden his face from you, so that he will not hear.",
          KJV: "But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.",
        },
      },
    ],
    takeawayPoints: [
      "No amount of human effort, moral living, or religion can bridge the infinite gap to God.",
      "Sin creates separation from the Source of life, peace, and truth.",
      "Facing our brokenness honestly is the essential first step to genuine healing.",
    ],
    reflectionQuestion: "Where do you recognize the human tendency to want to run life independently from God?",
  },
  {
    id: "the-cross-redemption",
    number: 3,
    title: "The Bridge: Jesus Christ",
    subtitle: "God's Grace and Sacrificial Love",
    summary:
      "Because humanity could not climb up to God, God came down to us in the person of Jesus Christ. Fully God and fully human, Jesus lived a sinless life, willingly died on the cross as our substitute bearing our penalty, and physically rose again on the third day, conquering death forever.",
    themeColor: "gold",
    iconName: "Cross",
    keyVerse: {
      reference: "Romans 5:8",
      translations: {
        ESV: "But God shows his love for us in that while we were still sinners, Christ died for us.",
        NIV: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
        KJV: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
      },
      contextNote: "God did not wait for us to clean ourselves up; His love met us at our lowest point.",
    },
    supplementaryVerses: [
      {
        reference: "1 Corinthians 15:3-4",
        translations: {
          ESV: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.",
          NIV: "For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures.",
          KJV: "For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures.",
        },
      },
      {
        reference: "1 Peter 3:18",
        translations: {
          ESV: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.",
          NIV: "For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God.",
          KJV: "For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God.",
        },
      },
    ],
    takeawayPoints: [
      "Jesus bridges the chasm between holy God and fallen humanity.",
      "The cross demonstrates God's perfect justice and infinite mercy in one moment.",
      "The resurrection is historical evidence of victory over sin and physical death.",
    ],
    reflectionQuestion: "What does it mean to you that Jesus died for us even before we sought Him?",
  },
  {
    id: "the-gift-faith",
    number: 4,
    title: "The Response: Faith & Grace",
    subtitle: "A Free Gift to Be Received, Not Earned",
    summary:
      "Salvation is not earned by rituals, good deeds, or family heritage. It is a free gift received through faith: turning from our self-directed ways (repentance) and trusting in Jesus Christ alone as Savior and Lord of our lives.",
    themeColor: "blue",
    iconName: "HeartHandshake",
    keyVerse: {
      reference: "Ephesians 2:8-9",
      translations: {
        ESV: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        NIV: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        KJV: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
      },
      contextNote: "Grace means unmerited favor. You cannot buy a gift that has already been fully paid for.",
    },
    supplementaryVerses: [
      {
        reference: "John 1:12",
        translations: {
          ESV: "But to all who did receive him, who believed in his name, he gave the right to become children of God.",
          NIV: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God.",
          KJV: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.",
        },
      },
      {
        reference: "Romans 10:9",
        translations: {
          ESV: "Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.",
          NIV: "If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.",
          KJV: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
        },
      },
    ],
    takeawayPoints: [
      "Faith is personal trust and allegiance, not mere intellectual agreement.",
      "You can be confident in your standing before God based on what Christ did, not your performance.",
      "The door of adoption into God's family is open to anyone who calls on His name.",
    ],
    reflectionQuestion: "Are you relying on your own efforts to be right with God, or resting in what Christ has done?",
  },
  {
    id: "new-life-restoration",
    number: 5,
    title: "New Life & Walking Forward",
    subtitle: "Transformed Heart, Eternal Hope",
    summary:
      "Trusting Christ is not the end; it is the beginning of a lifelong adventure. You receive the Holy Spirit, forgiveness of all sins past, present, and future, the assurance of eternal life, and a renewed purpose to love and serve God and others.",
    themeColor: "amber",
    iconName: "Compass",
    keyVerse: {
      reference: "2 Corinthians 5:17",
      translations: {
        ESV: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        NIV: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        KJV: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
      },
      contextNote: "A new creation receives a new identity, new desires, and a secure eternal future with God.",
    },
    supplementaryVerses: [
      {
        reference: "John 10:10b",
        translations: {
          ESV: "I came that they may have life and have it abundantly.",
          NIV: "I have come that they may have life, and have it to the full.",
          KJV: "I am come that they might have life, and that they might have it more abundantly.",
        },
      },
      {
        reference: "Romans 8:38-39",
        translations: {
          ESV: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
          NIV: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
          KJV: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.",
        },
      },
    ],
    takeawayPoints: [
      "You are sealed with the Holy Spirit and given a real, permanent hope.",
      "Growth happens gradually in community through prayer, scripture, and fellowship.",
      "Nothing can separate a child of God from His love.",
    ],
    reflectionQuestion: "What would taking your first step in faith look like today?",
  },
];

export const SAMPLE_PRAYER = {
  title: "A Prayer of Faith & Commitment",
  lead: "God looks at the genuine posture of your heart rather than exact words. If this expresses your desire, you can pray a prayer like this:",
  text: "Lord Jesus, I acknowledge that I have lived for myself and sinned against You. I cannot save myself by my good works. I believe You died on the cross in my place and rose again to conquer sin and death. Today, I turn to You in trust. I ask You to forgive my sins, come into my life, and lead me as my Savior and Lord. Thank You for Your free gift of eternal life and new beginnings. In Your name, Amen.",
};

export const NEXT_STEPS = [
  {
    step: 1,
    title: "Talk to God Daily (Prayer)",
    description: "Prayer is simply an honest, open conversation with the God who loves you. Speak to Him anytime, anywhere.",
  },
  {
    step: 2,
    title: "Read the Scriptures (Bible)",
    description: "Start with the Gospel of John or Mark in the New Testament to discover more about Jesus' words and deeds.",
  },
  {
    step: 3,
    title: "Connect with a Healthy Church Community",
    description: "Christianity was never meant to be lived alone. Join a Christ-centered, Bible-teaching church where you can grow.",
  },
  {
    step: 4,
    title: "Share Your Faith with Others",
    description: "Tell a trusted friend, family member, or believer about the decision or discovery you have made.",
  },
];
