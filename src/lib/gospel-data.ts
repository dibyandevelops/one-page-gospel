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
  image: string;
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
    title: "God's Design & Love",
    subtitle: "Made on Purpose, with Deep Love",
    summary:
      "God made our world full of beauty, wonder, and life. He created each of us in His own image so we could know Him personally, walk with Him, and live with real joy, peace, and purpose.",
    image: "/images/creation.jpg",
    themeColor: "emerald",
    iconName: "Sparkles",
    keyVerse: {
      reference: "Genesis 1:27, 31",
      translations: {
        ESV: "So God created man in his own image, in the image of God he created him; male and female he created them... And God saw everything that he had made, and behold, it was very good.",
        NIV: "So God created mankind in his own image, in the image of God he created them; male and female he created them... God saw all that he had made, and it was very good.",
        KJV: "So God created man in his own image, in the image of God created he him; male and female created he them... And God saw every thing that he had made, and, behold, it was very good.",
      },
      contextNote: "God's original design was full of peace, beauty, and close friendship with Him.",
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
      "You are not an accident; God made you on purpose.",
      "Real joy and lasting peace come from knowing your Creator.",
      "Every person is deeply valuable and loved by God.",
    ],
    reflectionQuestion: "How does it feel to know that God made you on purpose and wants to walk with you?",
  },
  {
    id: "the-fall-separation",
    number: 2,
    title: "The Broken World & The Gap",
    subtitle: "Choosing Our Own Way and Missing God",
    summary:
      "Instead of trusting God's good guidance, humanity chose to go our own way and live without Him. The Bible calls this 'sin'—turning away from God. This broke our friendship with God, bringing sadness, guilt, and the brokenness we see in our world and feel in our hearts.",
    image: "/images/chasm.jpg",
    themeColor: "crimson",
    iconName: "AlertCircle",
    keyVerse: {
      reference: "Romans 3:23",
      translations: {
        ESV: "For all have sinned and fall short of the glory of God.",
        NIV: "For all have sinned and fall short of the glory of God.",
        KJV: "For all have sinned, and come short of the glory of God.",
      },
      contextNote: "Sin isn't just big mistakes; it means missing God's standard of love and trying to run life on our own.",
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
      "No amount of good deeds or trying harder can bridge the gap to God on our own.",
      "Sin separates our hearts from God, the true source of life and peace.",
      "Being honest about our need for help is the first step toward healing.",
    ],
    reflectionQuestion: "Where do you see the urge to say, 'I want to run my life my own way without God'?",
  },
  {
    id: "the-cross-redemption",
    number: 3,
    title: "The Bridge: Jesus Christ",
    subtitle: "God's Rescue Mission of Pure Love",
    summary:
      "We could never reach up to God on our own, so God came down to us in Jesus Christ. Jesus lived a life of perfect love, willingly gave His life on the cross to take the punishment for our wrongs, and rose back to life on the third day. Because He lives, death is defeated and the way back to God is wide open!",
    image: "/images/cross-bridge.jpg",
    themeColor: "gold",
    iconName: "Cross",
    keyVerse: {
      reference: "Romans 5:8",
      translations: {
        ESV: "But God shows his love for us in that while we were still sinners, Christ died for us.",
        NIV: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
        KJV: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
      },
      contextNote: "God didn't wait for us to fix ourselves first; His love reached out to us at our lowest point.",
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
      "Jesus built the bridge across the gap between us and God.",
      "On the cross, Jesus took what we owed so we could be completely forgiven.",
      "Jesus rising from the dead is proof that God's love wins over death.",
    ],
    reflectionQuestion: "What does it mean to your heart that Jesus gave His life for you before you even asked?",
  },
  {
    id: "the-gift-faith",
    number: 4,
    title: "The Response: Faith & Grace",
    subtitle: "A Free Gift to Receive, Not Work to Earn",
    summary:
      "Being right with God is not something you earn with good deeds, religious rules, or being 'good enough.' It is a free gift given out of pure love. We receive this gift simply by trusting Jesus—turning our hearts back to God and putting our lives in His hands.",
    image: "/images/grace-gift.jpg",
    themeColor: "blue",
    iconName: "HeartHandshake",
    keyVerse: {
      reference: "Ephesians 2:8-9",
      translations: {
        ESV: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
        NIV: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
        KJV: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
      },
      contextNote: "Grace means a gift given out of pure kindness. You cannot buy a gift that is already paid for.",
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
      "Faith means placing your real, daily trust in Jesus as your Savior and Friend.",
      "You are accepted by God because of what Jesus did, not how good you perform.",
      "Anyone who calls on the name of the Lord is warmly welcomed into God's family.",
    ],
    reflectionQuestion: "Are you still trying to be 'good enough' on your own, or are you ready to rest in God's gift?",
  },
  {
    id: "new-life-restoration",
    number: 5,
    title: "New Life: Walking with God",
    subtitle: "A Fresh Start, Real Hope, and a Forever Home",
    summary:
      "Trusting Jesus is not the end; it is the start of a wonderful lifelong journey! God forgives every wrong, gives you His Holy Spirit to guide and comfort you every day, and gives you real hope today and eternal life with Him forever.",
    image: "/images/new-life.jpg",
    themeColor: "amber",
    iconName: "Compass",
    keyVerse: {
      reference: "2 Corinthians 5:17",
      translations: {
        ESV: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        NIV: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
        KJV: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
      },
      contextNote: "In Jesus, you get a clean slate, a new heart, and a safe future with God forever.",
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
      "You are never alone; God's Spirit is with you to give you peace and courage.",
      "Growing with God happens one step at a time through prayer, the Bible, and good friends.",
      "Nothing in the entire universe can ever separate you from God's love.",
    ],
    reflectionQuestion: "What is one simple step of trust you can take with God today?",
  },
];

export const SAMPLE_PRAYER = {
  title: "A Simple Prayer of Faith",
  lead: "God cares about the honesty of your heart, not fancy words. If this prayer expresses what you want, you can speak to Him right now:",
  text: "Lord Jesus, thank You for loving me. I know I have made mistakes and tried to live my own way without You. I cannot save myself. I believe You died on the cross for my sins and rose back to life. Today, I put my trust in You. Please forgive me, give me a new heart, and lead my life from this day forward. Thank You for Your free gift of new life. In Your name, Amen.",
};

export const NEXT_STEPS = [
  {
    step: 1,
    title: "Talk to God Every Day (Prayer)",
    description: "Prayer is just an honest, relaxed talk with God who loves you. You can talk to Him anytime, anywhere, about anything on your mind.",
  },
  {
    step: 2,
    title: "Read the Bible to Get to Know Jesus",
    description: "Start with the Gospel of Mark or John in the New Testament to see how Jesus loved people, what He taught, and what He did.",
  },
  {
    step: 3,
    title: "Find Good Friends at a Church",
    description: "We are meant to grow together. Find a welcoming, Bible-believing church family where you can learn, ask questions, and be encouraged.",
  },
  {
    step: 4,
    title: "Share Your Story with Someone",
    description: "Tell a friend or family member about the choice you made to follow Jesus and how He is helping you.",
  },
];
