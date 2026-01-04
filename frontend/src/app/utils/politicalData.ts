// Mock political news data
// Replace with actual News API calls filtered for politics

export interface PoliticalArticle {
  title: string;
  source: string;
  url: string;
  quote: string;
  publishedAt: string;
}

export interface PoliticalIssue {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  articles: PoliticalArticle[];
  category: string;
}

export const mockPoliticalIssues: PoliticalIssue[] = [
  {
    id: "1",
    title: "Climate Policy Stalls in Congress",
    description: "Major environmental legislation faces resistance despite growing pressure from constituents and scientific community. Key provisions for renewable energy subsidies and carbon emission limits remain in debate.",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80",
    category: "Environment",
    articles: [
      {
        title: "Senate Committee Delays Vote on Green Energy Bill",
        source: "Political Wire",
        url: "https://example.com/article1",
        quote: "Despite overwhelming public support, the committee has pushed the vote to next session, citing 'economic concerns' that experts have debunked.",
        publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Youth Climate Activists Rally at Capitol",
        source: "Democracy Now",
        url: "https://example.com/article2",
        quote: "Thousands gathered demanding immediate action, with organizers stating 'our future cannot wait for political convenience.'",
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Coal Industry Lobbying Reaches Record Levels",
        source: "The Intercept",
        url: "https://example.com/article3",
        quote: "Fossil fuel companies have spent $47 million this quarter alone on lobbying efforts to block climate legislation.",
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: "2",
    title: "Student Debt Relief Program Faces Legal Challenges",
    description: "Federal student loan forgiveness initiative encounters opposition from multiple state attorneys general. Millions of borrowers remain in limbo as courts deliberate the program's future.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    category: "Education",
    articles: [
      {
        title: "Supreme Court Hears Arguments on Loan Forgiveness",
        source: "NPR Politics",
        url: "https://example.com/article4",
        quote: "Legal experts suggest the decision could impact 43 million Americans currently holding federal student debt.",
        publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Students Organize National Day of Action",
        source: "Campus Reform",
        url: "https://example.com/article5",
        quote: "We're drowning in debt for degrees we were told were necessary. This is about economic justice.",
        publishedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "GOP Governors Challenge Federal Authority",
        source: "Politico",
        url: "https://example.com/article6",
        quote: "Six states have filed suits claiming the executive branch overstepped its authority in implementing the relief program.",
        publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: "3",
    title: "Housing Affordability Crisis Deepens",
    description: "Rent prices surge 40% in major cities over three years while wages remain stagnant. Local governments struggle to implement affordable housing solutions amid zoning and funding challenges.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    category: "Housing",
    articles: [
      {
        title: "Median Rent Hits All-Time High in 50 Cities",
        source: "Housing Wire",
        url: "https://example.com/article7",
        quote: "Young professionals are spending over 50% of their income on rent, making homeownership a distant dream.",
        publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "City Council Votes Down Zoning Reform",
        source: "Local News Network",
        url: "https://example.com/article8",
        quote: "NIMBYism triumphs again as proposed multi-family housing developments face rejection despite urgent need.",
        publishedAt: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Homelessness Increases 20% Year-Over-Year",
        source: "Urban Institute",
        url: "https://example.com/article9",
        quote: "The affordable housing shortage has created a humanitarian crisis in American cities.",
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: "4",
    title: "Voting Rights Legislation Remains Deadlocked",
    description: "Proposed reforms to expand ballot access and combat voter suppression fail to advance. Advocates warn of erosion of democratic participation, particularly among young and minority voters.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    category: "Democracy",
    articles: [
      {
        title: "New State Laws Restrict Early Voting Access",
        source: "Voting Rights Monitor",
        url: "https://example.com/article10",
        quote: "Fourteen states have passed legislation making it harder to vote, disproportionately affecting communities of color.",
        publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Youth Voter Registration Drops Amid Barriers",
        source: "Democracy Docket",
        url: "https://example.com/article11",
        quote: "Complex registration requirements and limited polling locations deter first-time voters from participating.",
        publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Activists Launch Counter-Campaign for Ballot Access",
        source: "Fair Vote",
        url: "https://example.com/article12",
        quote: "We're mobilizing to ensure every eligible voter can exercise their constitutional right without obstruction.",
        publishedAt: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: "5",
    title: "Healthcare Access Debate Intensifies",
    description: "Universal healthcare proposals gain traction among younger voters while insurance industry pushes back. Rising costs and coverage gaps fuel public demand for systemic reform.",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80",
    category: "Healthcare",
    articles: [
      {
        title: "Medical Bankruptcy Affects 500,000 Americans Annually",
        source: "Health Affairs",
        url: "https://example.com/article13",
        quote: "Even insured individuals face financial ruin from unexpected medical bills and coverage denials.",
        publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Medicare for All Poll Shows 70% Support Among Under-35s",
        source: "Kaiser Health News",
        url: "https://example.com/article14",
        quote: "Younger generations overwhelmingly support government-guaranteed healthcare as a human right.",
        publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Pharma Spending on Congressional Campaigns Doubles",
        source: "OpenSecrets",
        url: "https://example.com/article15",
        quote: "The pharmaceutical lobby has invested $89 million this cycle to influence healthcare policy decisions.",
        publishedAt: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString()
      }
    ]
  },
  {
    id: "6",
    title: "Criminal Justice Reform Proposals Gain Momentum",
    description: "Bipartisan support emerges for ending cash bail and reducing mandatory minimum sentences. Advocates push for comprehensive police accountability measures while facing institutional resistance.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    category: "Justice",
    articles: [
      {
        title: "Cash Bail System Challenged in Federal Courts",
        source: "Equal Justice Initiative",
        url: "https://example.com/article16",
        quote: "Criminalizing poverty through cash bail violates equal protection and due process guarantees.",
        publishedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Police Reform Bill Passes House, Uncertain in Senate",
        source: "Congress Today",
        url: "https://example.com/article17",
        quote: "The legislation includes qualified immunity reforms and national use-of-force standards.",
        publishedAt: new Date(Date.now() - 19 * 60 * 60 * 1000).toISOString()
      },
      {
        title: "Community Leaders Propose Alternative Public Safety Models",
        source: "Reform Now",
        url: "https://example.com/article18",
        quote: "Investing in mental health services and community programs proves more effective than incarceration.",
        publishedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString()
      }
    ]
  }
];

export interface CivicAction {
  type: 'call' | 'email' | 'attend' | 'share' | 'donate' | 'vote';
  title: string;
  description: string;
  actionText?: string;
  link?: string;
}

export const generateCivicActions = (issue: PoliticalIssue): CivicAction[] => {
  const baseActions: Record<string, CivicAction[]> = {
    "Environment": [
      {
        type: 'call',
        title: 'Call Your Representative',
        description: 'Demand they support renewable energy legislation',
        actionText: 'Hi, my name is [NAME] and I\'m calling to urge [REP NAME] to vote YES on the Clean Energy Act. Climate change affects my future and I need action now, not later.'
      },
      {
        type: 'email',
        title: 'Email Your Senator',
        description: 'Send a message about climate urgency',
        actionText: 'Subject: Support Climate Action Now\n\nDear Senator [NAME],\n\nAs your constituent, I\'m writing to demand immediate action on climate change. The science is clear and delay is unacceptable. Please vote YES on all climate legislation and reject fossil fuel industry influence.\n\nSincerely,\n[YOUR NAME]',
        link: 'https://www.senate.gov/senators/senators-contact.htm'
      },
      {
        type: 'attend',
        title: 'Join Local Climate Action Meeting',
        description: 'Connect with organizers in your area',
        link: 'https://www.climatereality.com/get-involved'
      },
      {
        type: 'share',
        title: 'Amplify on Social Media',
        description: 'Share: "My generation will inherit the climate crisis. We need our representatives to act NOW. Call your reps and demand climate action. #ClimateAction #YouthVote"'
      }
    ],
    "Education": [
      {
        type: 'call',
        title: 'Contact Your Representative',
        description: 'Support student debt relief',
        actionText: 'Hi, I\'m [NAME], a constituent. I\'m calling about student debt relief. Millions of us are drowning in debt that prevents us from buying homes and starting families. Support the relief program.'
      },
      {
        type: 'email',
        title: 'Email Education Committee Members',
        description: 'Demand action on student debt',
        link: 'https://edlabor.house.gov/'
      },
      {
        type: 'share',
        title: 'Share Your Story',
        description: 'Post: "Student debt isn\'t just numbers. It\'s delayed lives, mental health struggles, and economic inequality. Share your story with #StudentDebtCrisis and tag your reps."'
      },
      {
        type: 'vote',
        title: 'Check Candidates\' Positions',
        description: 'Vote for representatives who support debt relief',
        link: 'https://www.vote.org/'
      }
    ],
    "Housing": [
      {
        type: 'attend',
        title: 'Show Up to City Council Meetings',
        description: 'Public comment on zoning and housing policy',
        link: 'https://www.usa.gov/local-governments'
      },
      {
        type: 'call',
        title: 'Call Your City Council Rep',
        description: 'Demand affordable housing development',
        actionText: 'Hi, I\'m [NAME] from [DISTRICT]. I\'m calling about the housing crisis. We need more affordable units and zoning reform. Please support dense, mixed-use development.'
      },
      {
        type: 'share',
        title: 'Combat NIMBY Narratives',
        description: 'Post: "Housing is a human right. Supporting affordable housing development isn\'t radical—it\'s necessary. #HousingJustice #YIMBYMovement"'
      },
      {
        type: 'email',
        title: 'Email Your Mayor',
        description: 'Push for rent control and tenant protections'
      }
    ],
    "Democracy": [
      {
        type: 'vote',
        title: 'Register to Vote + Help Others',
        description: 'Ensure you and friends are registered',
        link: 'https://vote.gov'
      },
      {
        type: 'call',
        title: 'Demand Voting Rights Protection',
        description: 'Contact your senators',
        actionText: 'Hi, I\'m [NAME]. I\'m calling to urge Senator [NAME] to pass the Freedom to Vote Act. Voter suppression is un-American. Expand access, don\'t restrict it.'
      },
      {
        type: 'attend',
        title: 'Volunteer as Poll Worker',
        description: 'Help ensure free and fair elections',
        link: 'https://www.eac.gov/help-america-vote'
      },
      {
        type: 'share',
        title: 'Spread Voter Registration',
        description: 'Post: "Voting is your power. Check your registration status at vote.gov and make sure your voice is heard. Every. Single. Election. #VoteReady"'
      }
    ],
    "Healthcare": [
      {
        type: 'call',
        title: 'Call About Healthcare Reform',
        description: 'Demand universal coverage',
        actionText: 'Hi, I\'m [NAME]. Healthcare should be a right, not a privilege. I\'m calling to ask [REP NAME] to support Medicare for All. No one should go bankrupt from medical bills.'
      },
      {
        type: 'email',
        title: 'Email Health Committee Members',
        description: 'Push for drug price negotiation',
        link: 'https://energycommerce.house.gov/'
      },
      {
        type: 'share',
        title: 'Challenge Big Pharma Lobbying',
        description: 'Post: "Pharma companies spend millions lobbying against YOUR healthcare. Demand your reps reject pharma money and fight for us. #HealthcareIsARight"'
      },
      {
        type: 'donate',
        title: 'Support Healthcare Advocacy Groups',
        description: 'Organizations fighting for universal coverage',
        link: 'https://www.healthcare-now.org/'
      }
    ],
    "Justice": [
      {
        type: 'call',
        title: 'Support Criminal Justice Reform',
        description: 'Contact your representative',
        actionText: 'Hi, I\'m [NAME]. I\'m calling about criminal justice reform. End cash bail, demilitarize police, invest in communities. These aren\'t radical ideas—they\'re necessary.'
      },
      {
        type: 'attend',
        title: 'Join Community Safety Meetings',
        description: 'Advocate for alternative public safety models'
      },
      {
        type: 'email',
        title: 'Email Judiciary Committee',
        description: 'Demand police accountability legislation',
        link: 'https://judiciary.house.gov/'
      },
      {
        type: 'share',
        title: 'Amplify Reform Efforts',
        description: 'Post: "Mass incarceration destroys communities. Cash bail criminalizes poverty. We need reform NOW. Call your reps. #JusticeReform #EndCashBail"'
      }
    ]
  };

  return baseActions[issue.category] || baseActions["Environment"];
};
