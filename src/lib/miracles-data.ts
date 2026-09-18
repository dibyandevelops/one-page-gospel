export type MiracleCategory = "all" | "healing" | "nature" | "provision" | "resurrection";

export interface Miracle {
  id: string;
  title: string;
  category: "healing" | "nature" | "provision" | "resurrection";
  scriptureReference: string;
  location: string;
  iconName: string;
  summary: string;
  story: string;
  whatItReveals: string;
  takeaway: string;
}

export const MIRACLES_DATA: Miracle[] = [
  {
    id: "calming-the-storm",
    title: "Calming the Fierce Tempest",
    category: "nature",
    scriptureReference: "Mark 4:35–41",
    location: "Sea of Galilee",
    iconName: "Wind",
    summary: "Jesus commands the roaring wind and waves with three words: 'Peace! Be still!'",
    story:
      "A furious squall broke out on the Sea of Galilee, swamping the disciples' boat. Seasoned fishermen were terrified they would drown while Jesus was asleep on a cushion in the stern. In sheer desperation they cried out, 'Teacher, don't you care if we drown?' Jesus stood up, rebuked the wind, and commanded the raging sea: 'Peace! Be still!' Immediately the gale died down and it became completely calm. Overwhelmed with awe, the disciples whispered, 'Who is this? Even the wind and the waves obey him!'",
    whatItReveals:
      "Jesus possesses absolute sovereignty over the elemental forces of nature. In Jewish scripture, only Yahweh controls the stormy seas (Psalm 107:29). By commanding the storm, Jesus demonstrated His identity as the Creator God.",
    takeaway:
      "Whatever storm is battering your life today—anxiety, grief, loss, or relational turbulence—Jesus is in your boat, and His peace is greater than the waves.",
  },
  {
    id: "walking-on-water",
    title: "Walking on the Open Sea",
    category: "nature",
    scriptureReference: "Matthew 14:22–33",
    location: "Sea of Galilee",
    iconName: "Waves",
    summary: "In the darkest hour of the night, Jesus walks across choppy waves to meet His disciples.",
    story:
      "During the fourth watch of the night (between 3 a.m. and 6 a.m.), the disciples were straining at the oars against fierce headwinds. Jesus approached them, walking on the surface of the churning water. Terrified, they cried out, 'It's a ghost!' But Jesus immediately spoke: 'Take heart; it is I. Do not be afraid.' Peter called out, 'Lord, if it is you, tell me to come to you on the water.' Jesus said, 'Come.' Peter stepped onto the waves and walked toward Jesus—until he looked at the wind and began to sink. Crying 'Lord, save me!', Jesus immediately reached out His hand and caught him.",
    whatItReveals:
      "Jesus tramples the chaos of the deep under His feet. The phrase He uses ('It is I') is the divine name 'Ego Eimi' ('I AM'), revealing that God Himself has drawn near to deliver His people.",
    takeaway:
      "When we keep our eyes fixed on Jesus, we can walk through impossible circumstances. And when our faith wavers and we begin to sink, Jesus is always swift to reach out His hand and pull us up.",
  },
  {
    id: "water-into-wine",
    title: "Turning Water into Fine Wine",
    category: "nature",
    scriptureReference: "John 2:1–11",
    location: "Cana in Galilee",
    iconName: "Sparkles",
    summary: "At a village wedding, Jesus transforms approximately 150 gallons of ceremonial washing water into rich wine.",
    story:
      "At a wedding in Cana, the wine ran out—a devastating social humiliation for the young couple in ancient Jewish culture. Mary mentioned the crisis to Jesus. Jesus directed the servants to fill six large stone water jars (used for ritual purification) to the brim with water. When the master of the feast tasted what was drawn out, he called the groom and said, 'Everyone serves the good wine first, but you have saved the best wine until now!'",
    whatItReveals:
      "This was Jesus's first public miraculous sign. By transforming the water of ceremonial purification into rich, abundant wine, Jesus demonstrated that the old covenant rituals were being fulfilled in Him, ushering in the lavish joy and grace of the Kingdom of God.",
    takeaway:
      "Jesus cares about our everyday moments and celebrations. He takes what is empty, dull, or exhausted in our lives and transforms it into superabundant joy.",
  },
  {
    id: "cleansing-the-leper",
    title: "Healing and Touching the Untouchable Leper",
    category: "healing",
    scriptureReference: "Mark 1:40–45",
    location: "Galilee",
    iconName: "HeartHandshake",
    summary: "Jesus stretches out His hand and touches a quarantined leper, restoring both his flesh and dignity.",
    story:
      "A man with leprosy fell on his knees and begged Jesus, 'If you are willing, you can make me clean.' Lepers were forced to live isolated outside city gates, crying 'Unclean! Unclean!' to warn people away. No healthy person had touched this man in years. Filled with deep compassion, Jesus reached out His hand and touched him. 'I am willing,' He said. 'Be clean!' Immediately the leprosy left him and he was completely healed.",
    whatItReveals:
      "Under Old Testament law, touching a leper made a person ceremonially defiled. But when Jesus touches the unclean, His purity overwhelms the disease! His holiness does not catch contamination; instead, His touch imparts wholeness and life.",
    takeaway:
      "No matter how broken, ashamed, or 'unclean' you feel, Jesus does not recoil from you. He reaches out, touches the deepest wounds of our lives, and makes us new.",
  },
  {
    id: "healing-the-blind-man",
    title: "Giving Sight to the Man Born Blind",
    category: "healing",
    scriptureReference: "John 9:1–41",
    location: "Jerusalem",
    iconName: "Eye",
    summary: "Jesus heals a man who had never seen daylight from birth, proving He is the Light of the World.",
    story:
      "As Jesus walked by, He saw a man blind from birth. His disciples asked whose sin caused the blindness. Jesus answered, 'Neither this man nor his parents sinned, but this happened so that the works of God might be displayed in him.' Jesus spit on the ground, made mud with the saliva, applied it to the man's eyes, and told him, 'Go, wash in the Pool of Siloam.' The man went, washed, and came home seeing! When interrogated by religious leaders trying to discredit Jesus, the healed man famously replied: 'One thing I do know: I was blind, but now I see!'",
    whatItReveals:
      "Old Testament prophets declared that opening the eyes of the blind is the undeniable signature mark of the Messiah (Isaiah 35:5). Jesus fulfills this promise as the Light of the World, giving not just physical sight, but spiritual illumination.",
    takeaway:
      "We all enter the world spiritually blind, unable to see God's truth on our own. When Jesus touches our lives, our spiritual eyes are opened to His glory and unconditional love.",
  },
  {
    id: "healing-the-paralytic",
    title: "Healing the Paralyzed Man & Forgiving Sins",
    category: "healing",
    scriptureReference: "Mark 2:1–12",
    location: "Capernaum",
    iconName: "UserCheck",
    summary: "Lowered through the roof by four faithful friends, the man receives both spiritual forgiveness and physical healing.",
    story:
      "Jesus was preaching inside a packed house in Capernaum. Four men carrying their paralyzed friend could not get through the door, so they dug an opening in the roof and lowered the man on his mat right in front of Jesus. Seeing their faith, Jesus said to the paralytic, 'Son, your sins are forgiven.' The scribes thought, 'This is blasphemy! Who can forgive sins but God alone?' Knowing their thoughts, Jesus said: 'Which is easier: to say, Your sins are forgiven, or to say, Get up, take your mat and walk? But that you may know the Son of Man has authority on earth to forgive sins...' He said to the paralytic, 'Get up, take your mat, and go home.' The man stood up in front of them all and walked out.",
    whatItReveals:
      "Jesus revealed His supreme divine authority: He has the power to forgive sin—a prerogative belonging solely to God. Physical healing was the visible proof of His invisible divine authority to cleanse souls.",
    takeaway:
      "Our greatest need is never just physical relief, financial comfort, or health—our deepest need is the forgiveness of our sins. Jesus provides both spiritual restoration and ultimate redemption.",
  },
  {
    id: "feeding-the-5000",
    title: "Multiplying Five Loaves & Two Fish",
    category: "provision",
    scriptureReference: "John 6:1–14",
    location: "Near Bethsaida",
    iconName: "Utensils",
    summary: "From a boy's lunch of five barley rolls and two small fish, Jesus satisfies over 5,000 hungry people with 12 baskets left over.",
    story:
      "A massive crowd of over 5,000 men (plus women and children) followed Jesus into a remote hillside. As evening fell, the disciples urged Jesus to send the crowd away to buy food. Jesus answered, 'You give them something to eat.' Philip protested that eight months' wages wouldn't buy enough bread. Andrew found a boy with five small barley loaves and two fish: 'But what are they among so many?' Jesus had the people sit down on the grass. Taking the loaves, He gave thanks and distributed them to the crowd. Everyone ate as much as they wanted, and 12 baskets of leftover broken pieces were gathered.",
    whatItReveals:
      "Just as God fed Israel with manna in the wilderness, Jesus provides for His people as the true 'Bread of Life.' He demonstrates that in His hands, the smallest, humblest offering can nourish multitudes.",
    takeaway:
      "Never underestimate what you have, no matter how small or inadequate it feels. When you place your time, gifts, and life into Jesus's hands, He multiplies it beyond your wildest imagination.",
  },
  {
    id: "raising-lazarus",
    title: "Raising Lazarus After Four Days in the Tomb",
    category: "resurrection",
    scriptureReference: "John 11:1–44",
    location: "Bethany",
    iconName: "Sunrise",
    summary: "Jesus stands before a sealed tomb, weeps with grieving friends, and shouts: 'Lazarus, come out!'",
    story:
      "Lazarus of Bethany fell ill and died. By the time Jesus arrived, Lazarus had been in the tomb for four days, and the family was deep in grief. Meeting Lazarus's sister Martha, Jesus declared: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live.' At the tomb, deeply moved and weeping, Jesus ordered the stone rolled away. Martha warned that there would be a terrible stench after four days. Jesus prayed aloud to the Father, then called in a loud voice: 'Lazarus, come out!' The dead man walked out of the tomb, his hands and feet wrapped with strips of linen and a cloth around his face.",
    whatItReveals:
      "Jesus holds absolute authority over death itself. Death is humanity's ultimate, undefeated enemy, but before Jesus, death is powerless. This miracle prefigured Jesus's own glorious resurrection from the dead on the third day.",
    takeaway:
      "Death does not have the final word for anyone who belongs to Jesus. In our deepest grief, Jesus weeps with us, and in our darkest despair, He speaks resurrection life.",
  },
  {
    id: "raising-jairus-daughter",
    title: "Raising Jairus's Twelve-Year-Old Daughter",
    category: "resurrection",
    scriptureReference: "Mark 5:21–43",
    location: "Capernaum",
    iconName: "HeartPulse",
    summary: "A synagogue leader's dying daughter is declared dead, but Jesus takes her hand: 'Little girl, get up!'",
    story:
      "Jairus, a ruler of the local synagogue, fell at Jesus's feet pleading for his 12-year-old daughter who was near death. While on the way, messengers came from Jairus's house: 'Your daughter is dead. Why bother the teacher any further?' Overhearing, Jesus told Jairus: 'Don't be afraid; just believe.' Entering the house where mourners were weeping loudly, Jesus said, 'The child is not dead but asleep.' They laughed at Him. Putting them all outside, Jesus took the child's father, mother, and three disciples into the room. Taking her hand, He said, 'Talitha koum!' (which means, 'Little girl, I say to you, get up!'). Immediately the girl stood up and began walking around, and He told them to give her something to eat.",
    whatItReveals:
      "Jesus treats death as nothing more difficult to awaken from than sleep. His tender, fatherly compassion for a young girl and her desperate parents shows how intimately God cares for families.",
    takeaway:
      "When human hope seems completely extinguished and everyone around us says 'it's too late,' Jesus whispers: 'Do not fear, only believe.'",
  },
];
