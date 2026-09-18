export interface KidQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface KidGospelStep {
  id: string;
  number: number;
  emoji: string;
  badge: string;
  title: string;
  tagline: string;
  story: string;
  kidAnalogy: string;
  memoryVerse: {
    reference: string;
    text: string;
  };
  funFact: string;
  quiz: KidQuizQuestion;
}

export const KIDS_GOSPEL_STEPS: KidGospelStep[] = [
  {
    id: "kids-creation",
    number: 1,
    emoji: "🌍",
    badge: "God's Masterpiece",
    title: "God Made an Awesome World!",
    tagline: "You are made on purpose, with love!",
    story:
      "God created galaxies, stars, oceans, puppies, waterfalls, and best of all: YOU! God didn't create you by accident; He made you in His very own image so you could know Him, love Him, and be His best friend forever.",
    kidAnalogy:
      "🎨 Imagine the greatest artist painting their favorite picture ever. That's how God looks at you: as His special masterpiece!",
    memoryVerse: {
      reference: "Genesis 1:1, 31",
      text: "In the beginning, God created the heavens and the earth... And God saw everything that He had made, and behold, it was very good!",
    },
    funFact: "Did you know? Every single snowflake and every human fingerprint is completely unique. God loves detail!",
    quiz: {
      question: "Why did God create you?",
      options: [
        "By complete accident",
        "To know Him, love Him, and be His friend",
        "Because He was bored",
      ],
      correctIndex: 1,
      explanation: "God created you with love and purpose so you could be in a wonderful relationship with Him!",
    },
  },
  {
    id: "kids-fall",
    number: 2,
    emoji: "💔",
    badge: "The Broken Connection",
    title: "The Big Problem: Choosing Our Own Way",
    tagline: "Sin breaks things, but God had a plan!",
    story:
      "Instead of trusting God's good rules, humans decided to say: 'I want to do things my own way!' The Bible calls this sin. Sin is like a heavy wall or a giant canyon that separates us from holy God. We can't jump across by being good or cleaning our room—we need someone to rescue us!",
    kidAnalogy:
      "🔌 Imagine pulling the plug on your favorite toy or tablet. Without being plugged into power, it turns off. Sin unplugs our hearts from God, the true source of life and joy.",
    memoryVerse: {
      reference: "Romans 3:23",
      text: "For all have sinned and fall short of the glory of God.",
    },
    funFact: "Even the best, nicest people in the world make mistakes and need God's forgiveness.",
    quiz: {
      question: "Can we jump across the canyon to God just by doing good deeds?",
      options: [
        "Yes, if we try super hard",
        "No, the gap is too big; we need a Savior to rescue us",
        "Only if we never get in trouble",
      ],
      correctIndex: 1,
      explanation: "No human effort can fix sin on its own. That's why God sent someone special to bridge the gap!",
    },
  },
  {
    id: "kids-cross",
    number: 3,
    emoji: "✝️",
    badge: "The Great Rescuer",
    title: "Jesus: The Superhero Who Saved Us",
    tagline: "Love so big He gave His life for you!",
    story:
      "God loved you too much to leave you stuck! He sent His only Son, Jesus. Jesus never did anything wrong. He healed sick people, calmed stormy seas, and then willingly took our punishment on the cross. But the story didn't stop at the cross—three days later, Jesus rose back to life! Death and sin were defeated forever!",
    kidAnalogy:
      "🦸‍♂️ If a giant boulder was rolling toward you and someone pushed you out of the way and caught it for you, that's what Jesus did on the cross. He took what we owed so we could go free.",
    memoryVerse: {
      reference: "John 3:16",
      text: "For God so loved the world, that He gave His only Son, that whoever believes in Him should not perish but have eternal life.",
    },
    funFact: "Jesus is alive today! Over 500 people saw Him in person after He rose from the dead.",
    quiz: {
      question: "What happened on the third day after Jesus died on the cross?",
      options: [
        "Nothing happened",
        "He came back to life and conquered death!",
        "His friends hid Him away",
      ],
      correctIndex: 1,
      explanation: "Jesus rose from the dead! The tomb was completely empty!",
    },
  },
  {
    id: "kids-gift",
    number: 4,
    emoji: "🎁",
    badge: "The Best Birthday Gift",
    title: "It's a Free Gift: Just Receive It!",
    tagline: "You don't buy a birthday present; you just unwrap it!",
    story:
      "How do you get this rescue? You don't have to buy it or earn it on a chore chart. It's a 100% free gift called Grace. All you do is turn toward Jesus, tell Him you trust Him, and say 'Yes!' to His friendship and forgiveness.",
    kidAnalogy:
      "🎂 When someone gives you a birthday present, you don't hand them your pocket money. You say: 'Thank you so much!' Salvation is God's gift to you.",
    memoryVerse: {
      reference: "Ephesians 2:8",
      text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God!",
    },
    funFact: "Jesus promised that anyone who comes to Him will NEVER be turned away.",
    quiz: {
      question: "How do we receive God's forgiveness?",
      options: [
        "By paying money",
        "By taking a difficult test",
        "By trusting in Jesus through faith as a free gift",
      ],
      correctIndex: 2,
      explanation: "Salvation is God's free gift to anyone who believes and trusts in Jesus!",
    },
  },
  {
    id: "kids-life",
    number: 5,
    emoji: "🌟",
    badge: "Everyday Super Adventure",
    title: "New Life: You're in God's Family!",
    tagline: "A brand new start that never ends!",
    story:
      "When you trust Jesus, you become a child of God! You get a brand new heart, the Holy Spirit to help you do what's right, and a forever home in heaven where there are no tears, no pain, and endless joy!",
    kidAnalogy:
      "🌱 Like a tiny seed sprouting into a strong green tree, God helps you grow every day through prayer, reading Bible stories, and showing kindness to friends.",
    memoryVerse: {
      reference: "2 Corinthians 5:17",
      text: "Therefore, if anyone is in Christ, he is a new creation! The old has passed away; behold, the new has come!",
    },
    funFact: "Heaven is described as full of brilliant colors, laughter, love, and gold streets. It's going to be incredible!",
    quiz: {
      question: "What happens when you follow Jesus?",
      options: [
        "You become part of God's family with a brand new heart!",
        "You have to be sad forever",
        "Nothing changes at all",
      ],
      correctIndex: 0,
      explanation: "You become an adopted child of God, filled with peace, purpose, and eternal life!",
    },
  },
];

export const KIDS_PRAYER = {
  title: "A Simple Prayer for Kids",
  subtitle: "You can talk to Jesus right now in your heart or out loud:",
  text: "Dear Jesus, thank You for loving me so much. I'm sorry for the wrong things I have done. Thank You for dying on the cross for my sins and coming back to life. Today, I open my heart to You. Please forgive me, be my Savior, and help me follow You every day. In Jesus' name, Amen! ⭐",
};

export const KIDS_ACTION_STEPS = [
  {
    emoji: "🗣️",
    title: "Talk to God Anytime",
    text: "You can talk to God like your best friend—when you are happy, scared, or needing help!",
  },
  {
    emoji: "📖",
    title: "Read Kids Bible Stories",
    text: "Open up a Bible or storybook Bible to see the amazing adventures of Jesus.",
  },
  {
    emoji: "🤝",
    title: "Love & Help Others",
    text: "Share your toys, be kind to your family, and shine Jesus' love wherever you go!",
  },
  {
    emoji: "🎉",
    title: "Tell a Friend",
    text: "Tell your parents, friends, or Sunday School teacher about your love for Jesus!",
  },
];
