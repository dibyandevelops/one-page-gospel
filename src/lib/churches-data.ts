export interface ChurchDirectory {
  name: string;
  tagline: string;
  website: string;
  logoColor: string;
  description: string;
  scope: "Global" | "North America" | "International";
}

export interface ChurchEntry {
  id: string;
  name: string;
  city: string;
  region: string;
  country: string;
  tradition: "Non-denominational" | "Baptist" | "Presbyterian" | "Anglican" | "Reformed" | "Evangelical Free";
  address: string;
  website: string;
  highlight: string;
}

export interface HealthyChurchMark {
  title: string;
  scripture: string;
  explanation: string;
  whyItMatters: string;
}

export const CHURCH_DIRECTORIES: ChurchDirectory[] = [
  {
    name: "The Gospel Coalition Church Directory",
    tagline: "Gospel-Centered Churches Worldwide",
    website: "https://www.thegospelcoalition.org/churches/",
    logoColor: "text-amber-500",
    description:
      "A global directory of thousands of biblically rooted churches that hold to the historic gospel of grace and expository preaching.",
    scope: "Global",
  },
  {
    name: "9Marks Church Search",
    tagline: "Churches Committed to Biblical Health",
    website: "https://www.9marks.org/church-search/",
    logoColor: "text-sky-500",
    description:
      "Search for congregations committed to 9 biblical marks of a healthy church: expositional preaching, biblical theology, sound leadership, and meaningful community.",
    scope: "Global",
  },
  {
    name: "Acts 29 Network Directory",
    tagline: "Global Church-Planting Network",
    website: "https://www.acts29.com/find-churches/",
    logoColor: "text-emerald-500",
    description:
      "A diverse global family of church-planting churches united by theological clarity, loving brotherhood, and evangelistic fervor in dozens of nations.",
    scope: "Global",
  },
  {
    name: "EFCA Church Locator",
    tagline: "Evangelical Free Church of America",
    website: "https://www.efca.org/church-locator",
    logoColor: "text-indigo-500",
    description:
      "Connecting believers to grace-filled, Bible-grounded Evangelical Free congregations committed to multiplying transformational churches.",
    scope: "North America",
  },
  {
    name: "Calvary Chapel Association",
    tagline: "Verse-by-Verse Expository Teaching",
    website: "https://calvarycca.org/churches/",
    logoColor: "text-rose-500",
    description:
      "A worldwide fellowship of churches known for simple, verse-by-verse teaching of God's Word from Genesis to Revelation and reliance on the Holy Spirit.",
    scope: "Global",
  },
  {
    name: "Redeemer City to City Locator",
    tagline: "Gospel Movement in Global Cities",
    website: "https://redeemercitytocity.com/",
    logoColor: "text-purple-500",
    description:
      "Helping leaders plant churches in the great cities of the world, fostering deep intellectual rigor, gospel grace, and neighborhood renewal.",
    scope: "International",
  },
];

export const SAMPLE_CHURCHES: ChurchEntry[] = [
  {
    id: "redeemer-nyc",
    name: "Redeemer Presbyterian Church",
    city: "New York",
    region: "NY",
    country: "USA",
    tradition: "Presbyterian",
    address: "150 W 83rd St, New York, NY 10024",
    website: "https://www.redeemer.com",
    highlight: "Gospel-centered worship, neighborhood outreach, and thoughtful engagement with culture.",
  },
  {
    id: "the-village-dallas",
    name: "The Village Church",
    city: "Flower Mound",
    region: "TX",
    country: "USA",
    tradition: "Baptist",
    address: "2100 Highland Village Rd, Highland Village, TX 75077",
    website: "https://www.thevillagechurch.net",
    highlight: "Warm community, gospel-saturated preaching, and vibrant family discipleship.",
  },
  {
    id: "all-souls-london",
    name: "All Souls Langham Place",
    city: "London",
    region: "Greater London",
    country: "UK",
    tradition: "Anglican",
    address: "2 All Souls Pl, London W1B 3DA",
    website: "https://www.allsouls.org",
    highlight: "International congregation with clear Bible exposition in central London.",
  },
  {
    id: "grace-community-la",
    name: "Grace Community Church",
    city: "Los Angeles",
    region: "CA",
    country: "USA",
    tradition: "Non-denominational",
    address: "13248 Roscoe Blvd, Sun Valley, CA 91352",
    website: "https://www.gracechurch.org",
    highlight: "Renowned for in-depth verse-by-verse Bible exposition and local evangelism.",
  },
  {
    id: "cityonahill-melbourne",
    name: "City on a Hill",
    city: "Melbourne",
    region: "VIC",
    country: "Australia",
    tradition: "Evangelical Free",
    address: "Docklands, Melbourne VIC 3008",
    website: "https://cityonahill.com.au",
    highlight: "Passionate about reaching modern secular cities with the radical grace of Jesus Christ.",
  },
  {
    id: "tiberias-singapore",
    name: "The Crossing Church",
    city: "Singapore",
    region: "Singapore",
    country: "Singapore",
    tradition: "Non-denominational",
    address: "50 Stadium Blvd, Singapore 397796",
    website: "https://thecrossing.com.sg",
    highlight: "Expository Bible teaching, diverse international fellowship, and young adult groups.",
  },
  {
    id: "grace-toronto",
    name: "Grace Toronto Church",
    city: "Toronto",
    region: "ON",
    country: "Canada",
    tradition: "Presbyterian",
    address: "383 Jarvis St, Toronto, ON M5B 2C7",
    website: "https://gracetoronto.ca",
    highlight: "Centrally located urban church pursuing the peace and renewal of Toronto.",
  },
];

export const HEALTHY_CHURCH_MARKS: HealthyChurchMark[] = [
  {
    title: "1. Biblical, Expository Preaching",
    scripture: "2 Timothy 4:2",
    explanation:
      "The pastors open the Bible and preach the main point of the biblical text in context, letting God's Word shape the church rather than personal agendas or worldly fads.",
    whyItMatters:
      "God's Word is the source of spiritual life. If a church preaches only self-help or moral advice, your soul will remain hungry.",
  },
  {
    title: "2. The Gospel at the Center",
    scripture: "1 Corinthians 2:2",
    explanation:
      "Jesus Christ, His life, His sacrificial death for our sins, and His bodily resurrection are the hero of every sermon, not human achievement or moral striving.",
    whyItMatters:
      "Without the Gospel of grace, a church becomes either legalistic (guilt-driven) or liberal (godless). The Gospel keeps our hearts alive in gratitude.",
  },
  {
    title: "3. Genuine, Sacrificial Community",
    scripture: "John 13:34–35",
    explanation:
      "Members don't just attend an entertainment show on Sunday; they love, bear one another's burdens, pray together, and share meals as a real family.",
    whyItMatters:
      "You were never meant to follow Jesus alone. A healthy church is a spiritual home where you are known, loved, and encouraged.",
  },
  {
    title: "4. Humble, Qualified Leadership",
    scripture: "1 Peter 5:2–3; 1 Timothy 3",
    explanation:
      "Pastors and elders shepherd the congregation with gentleness, transparency, and personal integrity, not authoritarian control or celebrity culture.",
    whyItMatters:
      "Healthy leaders protect the flock from abuse and point everyone's eyes to Jesus, the Chief Shepherd.",
  },
  {
    title: "5. Active Mission & Discipleship",
    scripture: "Matthew 28:18–20",
    explanation:
      "The church equips believers to grow in Christlikeness, serve the needy, care for the poor, and share the Good News with their friends, coworkers, and neighbors.",
    whyItMatters:
      "A healthy church doesn't exist for itself; it is a beacon of light sending disciples into a hurting world.",
  },
];
