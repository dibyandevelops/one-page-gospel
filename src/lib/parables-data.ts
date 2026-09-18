export type ParableTheme = "all" | "grace" | "kingdom" | "humility" | "faithfulness";

export interface Parable {
  id: string;
  title: string;
  theme: "grace" | "kingdom" | "humility" | "faithfulness";
  scriptureReference: string;
  hookSummary: string;
  context: string;
  story: string;
  symbols: {
    symbol: string;
    meaning: string;
  }[];
  spiritualMeaning: string;
  modernApplication: string;
  reflectionQuestion: string;
}

export const PARABLES_DATA: Parable[] = [
  {
    id: "prodigal-son",
    title: "The Prodigal Son & The Waiting Father",
    theme: "grace",
    scriptureReference: "Luke 15:11–32",
    hookSummary: "A rebellious younger son wastes everything, while a loving father runs to embrace and restore him.",
    context:
      "Jesus told this story to religious Pharisees who grumbled that He welcomed sinners and ate with outcasts. In ancient Jewish culture, asking for your inheritance before your father died was equivalent to saying, 'Father, I wish you were dead.'",
    story:
      "A man had two sons. The younger son demanded his share of the estate, traveled to a distant country, and squandered all his wealth in reckless living. When a severe famine struck, he was reduced to feeding pigs—desperate enough to eat the pods the pigs ate. Coming to his senses, he thought of his father's hired hands who had plenty of food: 'I will set out and go back to my father and say: Father, I have sinned against heaven and against you. I am no longer worthy to be called your son; make me like one of your hired servants.' But while he was still a long way off, his father saw him, was filled with compassion, and ran to his son, threw his arms around him, and kissed him! The father didn't put him on probation; he called for the best robe, put a ring on his finger, sandals on his feet, and threw a lavish banquet: 'For this son of mine was dead and is alive again; he was lost and is found!'",
    symbols: [
      [
        { symbol: "The Younger Son", meaning: "Sinners and wandering humans who seek satisfaction apart from God." },
        { symbol: "The Loving Father", meaning: "God the Father, who is eagerly watching, waiting, and running to forgive." },
        { symbol: "The Robe, Ring & Sandals", meaning: "Full, immediate restoration to sonship and royal family status (slaves went barefoot)." },
        { symbol: "The Older Brother", meaning: "Self-righteous religious people who serve God for duty rather than love and resent grace given to others." },
      ],
    ][0],
    spiritualMeaning:
      "God's love is not based on your performance. You cannot out-sin God's capacity to forgive. When we repent and return, God does not lecture us or demand restitution; He runs to meet us with lavish grace and celebration.",
    modernApplication:
      "No matter how far you have wandered or what regrets fill your past, the Father is watching the horizon for you today. All it takes is turning around and coming home.",
    reflectionQuestion: "Do you see yourself more as the wandering younger son who needs to come home, or the older brother who struggles with resentment and self-righteousness?",
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan: Boundless Compassion",
    theme: "grace",
    scriptureReference: "Luke 10:25–37",
    hookSummary: "A despised foreigner stops to rescue a dying stranger when religious elites pass by on the other side.",
    context:
      "An expert in religious law asked Jesus, 'Teacher, who is my neighbor?' trying to justify limits on whom he was obligated to love. In Jesus's day, Jews and Samaritans despised each other with intense racial, religious, and political hostility.",
    story:
      "A man was traveling from Jerusalem down to Jericho when bandits stripped him, beat him, and left him half-dead in the dust. By chance, a Jewish priest happened to be going down the same road, but when he saw the man, he crossed to the other side and kept walking. Next, a Levite (temple assistant) arrived, looked at him, and also passed by on the other side. But a Samaritan came to where the man was; and when he saw him, he had deep compassion. He bandaged his wounds, pouring on soothing oil and wine. Then he put the man on his own donkey, brought him to an inn, and took care of him. The next day he gave two silver denarii to the innkeeper and said, 'Look after him, and when I return, I will reimburse you for any extra expense.' Jesus asked the lawyer, 'Which of these three proved to be a neighbor?' The lawyer replied, 'The one who had mercy on him.' Jesus said, 'Go and do likewise.'",
    symbols: [
      { symbol: "The Beaten Traveler", meaning: "Vulnerable humanity battered by sin, helpless to rescue itself." },
      { symbol: "The Priest & Levite", meaning: "Religious ritual and the law, which cannot heal a dying heart and often fosters self-protective excuses." },
      { symbol: "The Samaritan", meaning: "Jesus Himself—the despised outsider who steps into our ditch, binds our wounds at His own cost, and guarantees our restoration." },
    ],
    spiritualMeaning:
      "Genuine love has no borders, loopholes, or cultural exclusions. Real faith is proved not by religious ceremonies, but by active, self-sacrificial mercy toward those in desperate need.",
    modernApplication:
      "Who is on the 'other side of the road' in your life? Loving your neighbor means showing practical mercy across social, political, or economic barriers.",
    reflectionQuestion: "Is there someone you find difficult to love or have avoided helping because they are different from you?",
  },
  {
    id: "the-sower-and-the-soils",
    title: "The Sower and the Four Soils",
    theme: "faithfulness",
    scriptureReference: "Matthew 13:1–23",
    hookSummary: "The same seed of God's Word is scattered, but the harvest depends on the condition of the heart.",
    context:
      "Crowds of thousands were flocking to hear Jesus, yet many were only looking for miracles or political freedom. Jesus told this parable to explain why people react so differently to God's message.",
    story:
      "A farmer went out to sow seed. As he scattered the seeds: (1) Some fell along the hard footpath, and birds quickly came and ate them up. (2) Some fell on rocky ground with little soil. They sprouted quickly in the thin dirt, but when the hot sun came up, the plants withered because they had no deep roots. (3) Other seed fell among thorns, which grew up and choked the young plants so they bore no fruit. (4) Still other seed fell on good, rich soil. It produced a great crop—yielding thirty, sixty, and even a hundred times what was sown!",
    symbols: [
      { symbol: "The Sower", meaning: "Jesus and anyone who shares the message of the Gospel." },
      { symbol: "The Seed", meaning: "The Word of God and the Good News of the Kingdom." },
      { symbol: "Path Soil", meaning: "A hard, closed heart where the enemy immediately snatches away the truth." },
      { symbol: "Rocky Soil", meaning: "An emotional, shallow response that fades the moment trouble or persecution arises." },
      { symbol: "Thorny Soil", meaning: "A heart crowded and choked by the worries of life and the deceitfulness of wealth." },
      { symbol: "Good Soil", meaning: "A humble, receptive heart that hears the Word, understands it, and bears a fruitful harvest." },
    ],
    spiritualMeaning:
      "The power is in the seed, but the outcome depends on the openness and posture of the human heart. Fruitfulness requires deep roots in Christ and pulling out the weeds of worry and materialism.",
    modernApplication:
      "Examine your heart regularly: Are the worries of life, bills, or worldly pursuits crowding out your time with God?",
    reflectionQuestion: "Which of the four soils best describes your heart right now: hard, shallow, distracted, or fertile?",
  },
  {
    id: "lost-sheep-and-lost-coin",
    title: "The Lost Sheep: Leaving the Ninety-Nine",
    theme: "grace",
    scriptureReference: "Luke 15:3–10",
    hookSummary: "A shepherd leaves ninety-nine safe sheep to search tirelessly until the one lost wanderer is found.",
    context:
      "Pharisees believed God might tolerate sinners if they reformed themselves first. Jesus revealed that God is a proactive seeker who initiates the rescue of lost souls.",
    story:
      "Suppose one of you has a hundred sheep and loses one of them. Doesn't he leave the ninety-nine in the open country and go after the lost sheep until he finds it? And when he finds it, he joyfully puts it on his shoulders and goes home. Then he calls his friends and neighbors together and says, 'Rejoice with me; I have found my lost sheep.' In the same way, I tell you that there is more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
    symbols: [
      { symbol: "The Shepherd", meaning: "Jesus Christ, the Good Shepherd who lays down His life for the sheep." },
      { symbol: "The Lost Sheep", meaning: "Every individual person who has wandered away in helplessness and danger." },
      { symbol: "Carrying on Shoulders", meaning: "Jesus's gentle, tender strength carrying us when we cannot walk on our own." },
      { symbol: "The Heavenly Celebration", meaning: "The boundless joy of God and angels whenever a single human turns home." },
    ],
    spiritualMeaning:
      "You are never just a face in the crowd to God. To Him, you are individually precious. When you are lost, Jesus does not wait passively for you to find your own way; He comes searching for you.",
    modernApplication:
      "If you feel insignificant, forgotten, or too far gone, remember that the King of the universe leaves the ninety-nine to pursue you with relentless love.",
    reflectionQuestion: "Have you experienced the comforting feeling of being sought after and found by the Good Shepherd?",
  },
  {
    id: "hidden-treasure-and-pearl",
    title: "The Hidden Treasure & Pearl of Great Price",
    theme: "kingdom",
    scriptureReference: "Matthew 13:44–46",
    hookSummary: "A man happily sells everything he owns just to gain a treasure of incomparable worth.",
    context:
      "Jesus taught His disciples about the true value of belonging to God's Kingdom compared to everything the worldly culture prizes.",
    story:
      "The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field. Again, the kingdom of heaven is like a merchant looking for fine pearls. When he found one of great value, he went away and sold everything he had and bought it.",
    symbols: [
      { symbol: "The Hidden Treasure & Pearl", meaning: "Knowing Jesus Christ and having eternal life in the Kingdom of God." },
      { symbol: "Selling Everything", meaning: "Repenting and gladly releasing all worldly attachments and self-reliance." },
      { symbol: "Joy in the Sale", meaning: "Following Jesus is not a grim duty or burden; it is the happiest trade of your entire life." },
    ],
    spiritualMeaning:
      "Jesus is worth far more than all the riches, reputations, and treasures the world can offer. Giving your life completely to Him is not a sacrifice; it is gaining infinite, eternal wealth.",
    modernApplication:
      "Jim Elliot famously wrote: 'He is no fool who gives what he cannot keep to gain that which he cannot lose.'",
    reflectionQuestion: "Is Jesus your greatest treasure, or are other things still competing for first place in your heart?",
  },
  {
    id: "pharisee-and-tax-collector",
    title: "The Pharisee and the Tax Collector",
    theme: "humility",
    scriptureReference: "Luke 18:9–14",
    hookSummary: "Two men pray in the temple: one brags about his moral record, the other cries for mercy.",
    context:
      "Jesus told this parable to those who were confident of their own righteousness and looked down on everyone else.",
    story:
      "Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee stood by himself and prayed: 'God, I thank you that I am not like other people—robbers, evildoers, adulterers—or even like this tax collector. I fast twice a week and give a tenth of all I get.' But the tax collector stood at a distance. He would not even look up to heaven, but beat his chest and said: 'God, have mercy on me, a sinner!' Jesus said: 'I tell you that this man, rather than the other, went home justified before God. For all those who exalt themselves will be humbled, and those who humble themselves will be exalted.'",
    symbols: [
      { symbol: "The Pharisee", meaning: "Religious pride that trusts in moral achievement and looks down on others." },
      { symbol: "The Tax Collector", meaning: "Honest humility that acknowledges personal brokenness and throws itself on God's mercy." },
      { symbol: "Beating the Chest", meaning: "Deep grief over sin and sincere repentance from the heart." },
    ],
    spiritualMeaning:
      "God does not accept us based on our moral resume. The proud person gets no grace because their hands are already full of their own self-righteousness. God justifies the humble person who comes with empty hands asking for mercy.",
    modernApplication:
      "Check your prayers: Do you thank God that you are better than others, or do you come before Him thanking Him for unmerited mercy?",
    reflectionQuestion: "When you approach God in prayer, do you rely on how 'good' your week was, or on His unchanging grace?",
  },
  {
    id: "unforgiving-servant",
    title: "The Unforgiving Servant: Extravagant Debt",
    theme: "grace",
    scriptureReference: "Matthew 18:21–35",
    hookSummary: "A servant forgiven billions of dollars in debt refuses to forgive a fellow worker twenty bucks.",
    context:
      "Peter asked Jesus, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Peter thought seven was exceptionally generous. Jesus replied: 'Not seven times, but seventy-seven times.'",
    story:
      "A king wished to settle accounts. A servant was brought to him who owed ten thousand talents (a staggering sum equal to millions of days' wages—an unpayable national debt). Since he was unable to pay, the king ordered him, his family, and everything he had to be sold. The servant fell on his knees: 'Be patient with me, and I will pay back everything!' The master took pity on him, canceled the entire debt, and let him go free! But when that same servant went out, he found a fellow servant who owed him a hundred denarii (about a few months' pay). He grabbed him by the throat: 'Pay back what you owe me!' When his fellow servant begged for patience, he refused and threw him into prison until he could pay. When the king heard about it, he was outraged: 'You wicked servant! I canceled all that debt of yours because you begged me to. Shouldn't you have had mercy on your fellow servant just as I had on you?'",
    symbols: [
      { symbol: "The Ten Thousand Talents", meaning: "Our infinite moral debt against God which we could never pay in a million lifetimes." },
      { symbol: "The King's Cancellation", meaning: "God's lavish, unearned forgiveness through the blood of Jesus Christ." },
      { symbol: "The 100 Denarii", meaning: "The real, yet comparatively small offenses others commit against us in this life." },
    ],
    spiritualMeaning:
      "Forgiven people must be forgiving people. When we grasp how much God has forgiven our immense sins, withholding forgiveness from someone who wronged us becomes unthinkable.",
    modernApplication:
      "Forgiving someone does not mean excusing abuse or pretending it didn't hurt; it means releasing the debt to God instead of harboring bitterness.",
    reflectionQuestion: "Is there someone in your life you are holding a grudge against? How does remembering God's forgiveness toward you help you release that debt?",
  },
  {
    id: "the-talents",
    title: "The Parable of the Talents: Faithful Stewardship",
    theme: "faithfulness",
    scriptureReference: "Matthew 25:14–30",
    hookSummary: "A master entrusts his wealth to servants according to their ability before departing on a journey.",
    context:
      "Jesus told this parable right before His crucifixion to prepare His followers for the period between His resurrection and His return.",
    story:
      "A master calling his servants entrusted his wealth to them: to one he gave five talents, to another two, and to another one, each according to his ability. The servant with five talents put his money to work and gained five more. The one with two talents gained two more. But the servant who received one talent went off, dug a hole in the ground, and hid his master's money. After a long time, the master returned. To the servants who multiplied their talents, the master said: 'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master's happiness!' But the fearful servant said, 'Master, I knew you are a hard man... so I was afraid and went and hid your gold in the ground.' The master condemned his laziness, took the talent from him, and rewarded the faithful.",
    symbols: [
      { symbol: "The Master", meaning: "Jesus Christ, who has entrusted us with life, gifts, and the Gospel." },
      { symbol: "The Talents", meaning: "Our time, skills, resources, influence, and opportunities to advance God's Kingdom." },
      { symbol: "The Fearful Servant", meaning: "A distorted view of God as harsh and stingy, leading to paralyzed inactivity and wasted life." },
    ],
    spiritualMeaning:
      "God does not expect everyone to have the exact same results or gifts, but He does expect all of us to be faithful with whatever He has placed in our hands. Faith is active, trusting, and willing to take risks for God's glory.",
    modernApplication:
      "Don't compare your gifts to someone else's. Ask yourself: 'What has God given me, and how can I invest it to bless others and honor Jesus today?'",
    reflectionQuestion: "Are you using your time, talents, and resources to build God's Kingdom, or are you hiding them away out of fear?",
  },
];
