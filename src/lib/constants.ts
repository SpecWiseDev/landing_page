// IMQA Landing Page Content Constants

export const SITE_CONFIG = {
  name: "IMQA",
  tagline: "The AI that tests your code",
  description: "Write tests in plain English. Ship with confidence.",
  appUrl: "https://app.imqa.ai",
  email: "hello@imqa.ai",
  salesEmail: "sales@imqa.ai",
  github: "https://github.com/imqa-ai",
  twitter: "https://twitter.com/imqa_ai",
  linkedin: "https://linkedin.com/company/imqa-ai",
};

export const HERO = {
  badge: "AI-Powered Testing",
  headline: "The AI that tests your code",
  subheadline: "Write tests in plain English. Ship with confidence.",
  ctaPrimary: "Start free trial",
  ctaSecondary: "Watch demo",
};

export const PROBLEM_SOLUTION = {
  oldWay: [
    "Hours writing brittle Selenium scripts",
    "Flaky tests breaking CI/CD pipelines",
    "Constant maintenance as UI changes",
  ],
  imqaWay: [
    "Write tests in plain English",
    "Self-healing selectors adapt to changes",
    "AI maintains tests automatically",
  ],
};

export const FEATURES = [
  {
    id: "natural-language",
    title: "Natural Language Tests",
    description: "Write tests like you write requirements. No coding knowledge required.",
    icon: "MessageSquare",
  },
  {
    id: "self-healing",
    title: "Self-Healing",
    description: "Selectors automatically adapt to UI changes. No manual updates needed.",
    icon: "Wrench",
  },
  {
    id: "video-evidence",
    title: "Video Evidence",
    description: "Full recording of every test run. Debug failures in seconds, not hours.",
    icon: "Video",
  },
  {
    id: "ci-cd",
    title: "CI/CD Integration",
    description: "GitHub Actions, GitLab CI, Jenkins, CircleCI. Works with your stack.",
    icon: "GitBranch",
  },
  {
    id: "parallel",
    title: "Parallel Execution",
    description: "Run hundreds of tests simultaneously for faster feedback.",
    icon: "Zap",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Track test health and coverage. Identify flaky tests before they break CI.",
    icon: "BarChart3",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Describe your test in plain English",
    description: "Type what you want to test, just like writing a requirement.",
    example: "Test login flow with valid credentials",
  },
  {
    step: 2,
    title: "AI generates and runs the test",
    description: "IMQA's AI writes production-ready test code and executes it.",
    example: "Generated test code with smart element detection",
  },
  {
    step: 3,
    title: "Get video proof of every run",
    description: "See exactly what happened. Every click, every assertion recorded.",
    example: "Full video playback with timestamps",
  },
];

export const METRICS = [
  { value: "98.5%", label: "Test pass rate" },
  { value: "50,000+", label: "Tests run monthly" },
  { value: "2.3s", label: "Average test duration" },
  { value: "10x", label: "Faster than manual testing" },
];

export const TESTIMONIALS = [
  {
    quote: "IMQA cut our QA time in half. The self-healing tests are a game changer.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "TechCorp",
    avatar: "/screenshots/dashboard.png", // Placeholder
  },
  {
    quote: "Writing tests in plain English means our PMs can contribute. That's powerful.",
    author: "Mike Rodriguez",
    role: "Head of Product",
    company: "StartupXYZ",
    avatar: "/screenshots/side-nav.png", // Placeholder
  },
  {
    quote: "We went from 60% test coverage to 95% in two months. IMQA just works.",
    author: "Alex Kumar",
    role: "Senior QA Lead",
    company: "Enterprise Inc",
    avatar: "/screenshots/test-results.png", // Placeholder
  },
];

export const INTEGRATIONS = [
  { name: "GitHub Actions", icon: "github" },
  { name: "GitLab CI", icon: "gitlab" },
  { name: "Jenkins", icon: "jenkins" },
  { name: "CircleCI", icon: "circle" },
  { name: "Slack", icon: "slack" },
  { name: "Jira", icon: "jira" },
  { name: "Linear", icon: "linear" },
  { name: "Notion", icon: "notion" },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individuals and small projects",
    features: [
      "Up to 50 tests/month",
      "Basic AI test generation",
      "Video recordings",
      "Email support",
    ],
    cta: "Start free",
    href: `${SITE_CONFIG.appUrl}/signup`,
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited tests",
      "Advanced AI features",
      "Self-healing selectors",
      "Priority support",
      "CI/CD integrations",
      "Team collaboration",
    ],
    cta: "Start free trial",
    href: `${SITE_CONFIG.appUrl}/signup?plan=pro`,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "SSO & SAML",
      "Custom SLA",
      "On-premise deployment",
      "Training & onboarding",
    ],
    cta: "Contact sales",
    href: `mailto:${SITE_CONFIG.salesEmail}`,
    popular: false,
  },
];

export const FAQ_ITEMS = [
  {
    question: "How does AI test generation work?",
    answer:
      "IMQA uses advanced AI models to understand your test descriptions in plain English and generate production-ready test code. The AI analyzes your application, identifies elements, and creates robust selectors automatically.",
  },
  {
    question: "What makes IMQA's tests 'self-healing'?",
    answer:
      "When your UI changes, traditional tests break because selectors become invalid. IMQA's AI automatically detects these changes and updates selectors, so your tests keep working without manual intervention.",
  },
  {
    question: "Which testing frameworks does IMQA support?",
    answer:
      "IMQA works with Playwright, Selenium, Cypress, and Puppeteer. You can export tests in any framework or run them directly in IMQA's cloud infrastructure.",
  },
  {
    question: "Can I integrate IMQA with my CI/CD pipeline?",
    answer:
      "Yes! IMQA integrates seamlessly with GitHub Actions, GitLab CI, Jenkins, CircleCI, and other popular CI/CD platforms. Run tests automatically on every commit or pull request.",
  },
  {
    question: "What happens to my test data and recordings?",
    answer:
      "All data is encrypted at rest and in transit. Video recordings are stored securely for 30 days (configurable). Enterprise plans support on-premise deployment for complete data control.",
  },
  {
    question: "Do I need coding knowledge to use IMQA?",
    answer:
      "No! IMQA is designed for both technical and non-technical users. Write tests in plain English, and IMQA handles the code generation. Developers can also write code directly if preferred.",
  },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: `mailto:${SITE_CONFIG.email}` },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api" },
    { label: "Guides", href: "/guides" },
    { label: "Status", href: "https://status.imqa.ai" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};
