export interface ProblemSection {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  keyVerse: {
    reference: string;
    text: string;
  };
  points: {
    heading: string;
    description: string;
  }[];
  realWorldAnalogy: {
    title: string;
    analogy: string;
  };
}

export interface SelfCheckQuestion {
  question: string;
  humanThinking: string;
  biblicalReality: string;
  verse: string;
}

export const PROBLEM_SECTIONS: ProblemSection[] = [
  {
    id: "rebellion",
    title: "1. The Root Cause: Wanting to Be Our Own God",
    subtitle: "It began with trust broken and autonomy chosen over relationship",
    summary:
      "Sin is not just doing 'bad things.' At its heart, sin is declaring independence from our Creator. We say: 'God, I want your gifts, but I want to run my own life, set my own rules, and be my own lord.'",
    keyVerse: {
      reference: "Isaiah 53:6",
      text: "All we like sheep have gone astray; we have turned—every one—to his own way.",
    },
    points: [
      {
        heading: "A Broken Relationship, Not Just Broken Rules",
        description:
          "If a child runs away from loving parents, the deepest tragedy isn't that they broke house rules—it's that they severed the relationship. That is what happened between humanity and God.",
      },
      {
        heading: "The Poison of Pride",
        description:
          "Pride convinces us we are self-sufficient, leading us to compare ourselves with others rather than measuring ourselves against God's absolute holiness.",
      },
    ],
    realWorldAnalogy: {
      title: "The Unplugged Lamp",
      analogy:
        "Imagine an electric lamp that decides it no longer needs the wall outlet. When unplugged, the bulb doesn't just flicker—it has no power source at all. When we cut ourselves off from God, we lose the source of genuine spiritual life, purpose, and unconditional love.",
    },
  },
  {
    id: "good-deeds-fallacy",
    title: "2. The Fallacy of 'I'm a Good Person'",
    subtitle: "Why our good deeds cannot cancel out our moral debt",
    summary:
      "Most people believe getting to heaven is like a cosmic scale: if your good deeds outweigh your bad deeds, you're fine. But the Bible presents an entirely different standard: God is infinitely holy, and justice requires true righteousness.",
    keyVerse: {
      reference: "Isaiah 64:6",
      text: "We have all become like one who is unclean, and all our righteous deeds are like a polluted garment.",
    },
    points: [
      {
        heading: "Human Standards vs. Divine Standards",
        description:
          "We compare ourselves to criminals or bad neighbors and think, 'I'm not so bad.' But standing before the blazing purity of God, even our best moments are tainted with selfish motives.",
      },
      {
        heading: "Justice Cannot Be Bribed",
        description:
          "In a courtroom, a judge cannot let a criminal go free just because they also donated to charity or helped their grandmother. Justice demands that crimes be answered for.",
      },
    ],
    realWorldAnalogy: {
      title: "The Glass of Pure Water",
      analogy:
        "If someone hands you a tall glass of sparkling, pure water, but informs you that there is just one tiny drop of cyanide in it, would you drink it? You wouldn't say, 'Well, 99% of the water is clean!' A single drop of poison ruins the whole cup. In the same way, any sin separates us from a holy God.",
    },
  },
  {
    id: "consequences",
    title: "3. The Deep Consequences of Sin",
    subtitle: "Inner emptiness, broken relationships, and eternal separation",
    summary:
      "Sin isn't harmless fun that God disapproves of; sin is spiritually lethal. It brings guilt, shame, broken families, societal injustice, physical death, and ultimately, eternal separation from God.",
    keyVerse: {
      reference: "Romans 6:23a",
      text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    },
    points: [
      {
        heading: "Spiritual Blindness & Emptiness",
        description:
          "Without God, humans constantly chase money, status, romance, and pleasure to fill a deep void that only their Creator can satisfy.",
      },
      {
        heading: "Separation from the Author of Life",
        description:
          "God is the source of all joy, beauty, and light. Hell is not an arbitrary punishment; it is the ultimate consequence of choosing separation from God forever.",
      },
    ],
    realWorldAnalogy: {
      title: "The Severed Branch",
      analogy:
        "When a branch is snapped off an apple tree, it may still look green for a day or two, but it is already dead because it has been cut off from the sap and root. Separated from God, we may look alive outwardly, but spiritually we are cut off from true life.",
    },
  },
  {
    id: "the-cure",
    title: "4. The Ultimate Good News: A Rescuer Arrives",
    subtitle: "You cannot save yourself, but God did not leave you to perish",
    summary:
      "We must understand the bad news to truly appreciate the Good News. If you don't know you are sick, you will throw away the medicine. But once you see your need, the cross of Jesus becomes the most wonderful rescue ever accomplished.",
    keyVerse: {
      reference: "Ephesians 2:8–9",
      text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
    },
    points: [
      {
        heading: "Grace Replaces Striving",
        description:
          "Every religion says 'DO'—work harder, pray more, follow rituals. Christianity alone says 'DONE'—Jesus already paid the penalty on the cross.",
      },
      {
        heading: "A New Heart and Forgiven Past",
        description:
          "Jesus doesn't just clean up our outward behavior; He gives us a brand new heart, restores our relationship with God, and adopts us into His family forever.",
      },
    ],
    realWorldAnalogy: {
      title: "The Drowning Swimmer",
      analogy:
        "A person drowning in the middle of the ocean doesn't need swimming lessons; they need a lifeguard to dive in and pull them out. Jesus didn't just give us advice; He dove into our broken world to rescue us at the cost of His own life.",
    },
  },
];

export const SELF_CHECK_QUESTIONS: SelfCheckQuestion[] = [
  {
    question: "Do I consider myself a good person?",
    humanThinking: "I don't steal, kill, or hurt anyone on purpose. I pay my taxes and try to be kind.",
    biblicalReality:
      "Jesus taught that lust is adultery of the heart, and harboring hatred or anger is murder of the heart (Matthew 5:21–28). Measured by God's standard, everyone has fallen short.",
    verse: "Romans 3:10–12: 'None is righteous, no, not one; no one understands; no one seeks for God.'",
  },
  {
    question: "Can't God just overlook my mistakes because He is loving?",
    humanThinking: "If God is love, surely He wouldn't punish sincere people who made a few mistakes.",
    biblicalReality:
      "God is love, but He is also perfectly just. A good human judge cannot overlook crimes out of 'kindness'—that would be corrupt. God resolved both His perfect justice and His infinite love at the cross, where Jesus took our punishment upon Himself.",
    verse: "Romans 3:26: '...so that he might be just and the justifier of the one who has faith in Jesus.'",
  },
  {
    question: "Can I make up for my sins with charity, church attendance, or good deeds?",
    humanThinking: "If I do enough positive things, my good deeds will balance out my bad deeds.",
    biblicalReality:
      "Doing good today is simply what we owed God all along. Doing good today cannot erase the debt of yesterday. Only the blood of Jesus Christ can wipe our slate clean.",
    verse: "Titus 3:5: 'He saved us, not because of works done by us in righteousness, but according to his own mercy.'",
  },
  {
    question: "Is sin really that serious if nobody else got hurt?",
    humanThinking: "My private thoughts and habits don't hurt anyone else, so they shouldn't matter.",
    biblicalReality:
      "Every sin is primarily an offense against God Himself, who created us for holiness and intimacy. Secret sins rot our character and distance us from God.",
    verse: "Psalm 51:4: 'Against you, you only, have I sinned and done what is evil in your sight.'",
  },
];
