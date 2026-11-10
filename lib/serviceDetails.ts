export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  included: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  deliverables: { title: string; text: string }[];
  faqs: ServiceFaq[];
  ctaLine: string;
}

/**
 * Turn a service title (as stored in the database) into the slug used by
 * the detail pages, e.g. "Complete Ecommerce Management" becomes
 * "complete-ecommerce-management".
 */
export function slugifyServiceTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "seo",
    title: "SEO",
    tagline:
      "Full search engine optimisation for your whole site, not just one page of it.",
    summary:
      "The complete search picture in one service: keyword research, on-page and technical fixes, and the guest posts and link building that build authority. Led by a specialist with 7 years of experience, starting with an honest review of your site and reported in full.",
    metaDescription:
      "SEO services from SEODilated: on-page, technical and off-page SEO backed by 7 years of experience, an honest site review first, and full reporting on every piece of work.",
    intro: [
      "SEO is the umbrella everything else sits under. It covers how your pages are built and written, how search engines crawl and understand your site, and how the rest of the web links to you. When one of those three is weak, the other two cannot carry the site on their own.",
      "This service is led by a specialist with 7 years of hands-on SEO experience across on-page, off-page and technical work. Every engagement starts with an honest review of your site, so the plan is built on what your site actually needs, not on a fixed package we sell to everyone.",
    ],
    included: [
      {
        title: "Honest site review first",
        text: "We review your site, your content and your current link profile before quoting, and tell you plainly what is holding you back.",
      },
      {
        title: "Keyword research",
        text: "Search terms mapped to the pages that should target them, based on relevance and intent rather than volume alone.",
      },
      {
        title: "On-page SEO",
        text: "Titles, headings, internal linking and content structure tightened up page by page, so each page has one clear job.",
      },
      {
        title: "Technical SEO",
        text: "Crawl issues, indexing problems, duplicate content and site structure checked and fixed in priority order.",
      },
      {
        title: "Off-page SEO and link building",
        text: "Guest posts and manual link building on real, vetted websites. This is our core strength and the engine behind most results.",
      },
      {
        title: "Full reporting",
        text: "Every piece of work is reported back to you, including the exact URL of every link placed, so you can verify it yourself.",
      },
    ],
    steps: [
      {
        title: "Review and research",
        text: "We audit your site, research your keywords and look at what competitors in your niche are doing differently.",
      },
      {
        title: "Plan and priorities",
        text: "You receive a clear plan that separates quick fixes from long term work, with an honest view of what matters most.",
      },
      {
        title: "Implementation",
        text: "On-page and technical changes are made or briefed in detail, and the off-page campaign runs in parallel.",
      },
      {
        title: "Report and refine",
        text: "Delivered work is reported in full. We review what changed and agree the next round of priorities with you.",
      },
    ],
    deliverables: [
      {
        title: "Site review findings",
        text: "A plain language summary of the issues found on your site and what we recommend fixing first.",
      },
      {
        title: "Keyword and page map",
        text: "The target terms for your site, matched to the pages that should rank for them.",
      },
      {
        title: "Completed on-page and technical work",
        text: "The agreed changes carried out, or supplied as a detailed brief your own developer can follow.",
      },
      {
        title: "Full live-link report",
        text: "The exact URL, host page and anchor text of every link placed for you during the engagement.",
      },
    ],
    faqs: [
      {
        q: "Do you guarantee first page rankings?",
        a: "No, and you should be wary of anyone who does. Rankings depend on your niche, your competitors and factors no agency controls. What we guarantee is the work itself: a proper review, honest priorities, links on real websites and a full report you can check line by line.",
      },
      {
        q: "Which part of SEO does my site need most?",
        a: "That is exactly what the opening review answers. Some sites need technical fixes before anything else can work, others have sound pages and simply need authority from links. We will tell you which situation you are in before you spend anything.",
      },
      {
        q: "Can I take just the link building part?",
        a: "Yes. Guest posts and link building are available as a standalone service, and many clients start there. If the review shows an on-page or technical problem that would waste those links, we will flag it honestly first.",
      },
    ],
    ctaLine:
      "Start with a free, honest review of your site. We will tell you what your SEO actually needs, in what order, before you commit to anything.",
  },
  {
    slug: "aeo",
    title: "AEO",
    tagline:
      "Answer Engine Optimization: be the answer AI assistants and answer boxes give, not just a blue link below them.",
    summary:
      "Answer engines and AI assistants now reply to your customers directly. AEO structures your content, brand facts and mentions so your business is the source they quote, led by a Semrush certified AI Search specialist.",
    metaDescription:
      "AEO (Answer Engine Optimization) from SEODilated: question-led content, structured answers and brand mentions that help AI assistants and answer engines surface your business.",
    intro: [
      "More searches now end with a direct answer instead of a click. Answer engines and AI assistants read the web, pick out the clearest and most trusted source, and present that as the answer. AEO is the work of making sure that source is you.",
      "The service is led by a specialist certified by Semrush in AI Search Essentials and Off-Page SEO, so the advice you get is grounded in how these systems actually select and cite answers, not in guesswork or recycled SEO tips.",
    ],
    included: [
      {
        title: "Question research",
        text: "The real questions your customers ask, gathered from your niche and mapped to the pages that should answer them.",
      },
      {
        title: "Structured answer content",
        text: "Pages rewritten so answers are stated clearly and early, in a format answer engines can lift and cite with confidence.",
      },
      {
        title: "Entity and brand clarity",
        text: "Your business name, services and facts made consistent across your site, so engines connect the answer to the right brand.",
      },
      {
        title: "Brand mentions",
        text: "Mentions of your brand on relevant third party sites, building the wider web presence that answer engines draw on.",
      },
      {
        title: "Existing content upgrades",
        text: "Your current key pages reviewed and reworked for answer visibility, rather than starting everything from scratch.",
      },
      {
        title: "Plain language reporting",
        text: "A clear summary of what was changed, which questions each page now targets, and where your brand is being mentioned.",
      },
    ],
    steps: [
      {
        title: "Question and visibility audit",
        text: "We list the questions that matter in your niche and check how answer engines currently respond to them.",
      },
      {
        title: "Content plan",
        text: "Questions are mapped to existing pages or new ones, with the answer structure each page needs.",
      },
      {
        title: "Rewrite and publish",
        text: "Content is reworked into clear, structured answers aligned with your brand voice and checked before it goes live.",
      },
      {
        title: "Mentions and review",
        text: "Supporting brand mention work runs alongside, and we review how the answers are being surfaced and refine from there.",
      },
    ],
    deliverables: [
      {
        title: "Question map",
        text: "The prioritised list of customer questions your site should be the answer to.",
      },
      {
        title: "Optimised pages",
        text: "Your key pages rewritten with structured, quotable answers in place.",
      },
      {
        title: "Brand mention placements",
        text: "A report of the third party mentions secured, with the live URL of each one.",
      },
      {
        title: "Visibility summary",
        text: "A short report on what was delivered and how your brand appears in answer results at handover.",
      },
    ],
    faqs: [
      {
        q: "How is AEO different from normal SEO?",
        a: "SEO focuses on ranking your pages in a list of results. AEO focuses on being the source an answer engine quotes when it replies directly. The two overlap heavily: clear structure, trusted content and brand presence feed both, which is why this service builds on solid SEO rather than replacing it.",
      },
      {
        q: "Can you guarantee my brand will appear in AI answers?",
        a: "No. AI assistants choose their sources dynamically and nobody can promise a mention. What we can do is remove the reasons you are currently overlooked: unclear answers, inconsistent brand facts and a thin presence on the sites these systems read.",
      },
      {
        q: "Does my existing content need to be replaced?",
        a: "Usually not. Most engagements start by restructuring and strengthening pages you already have. New pages are only recommended where a valuable question has no page that could answer it.",
      },
    ],
    ctaLine:
      "Ask us which questions your customers are putting to AI assistants today, and whether your site is the one answering them.",
  },
  {
    slug: "geo",
    title: "GEO",
    tagline:
      "Generative Engine Optimization: visibility inside AI-generated answers like AI Overviews and ChatGPT results.",
    summary:
      "AI Overviews and ChatGPT style results generate an answer and cite the sources behind it. GEO makes your brand a clear, consistent entity and builds the mentions and citations that give those systems a reason to include you.",
    metaDescription:
      "GEO (Generative Engine Optimization) from SEODilated: entity and citation focused work, brand mentions for LLMs and AI Overviews, led by a Semrush certified AI Search specialist.",
    intro: [
      "AI Overviews and ChatGPT style results do not just rank pages, they generate an answer and cite the sources behind it. If your brand is not part of the material those systems trust, you are invisible in the fastest growing part of search.",
      "GEO works on the two things generative systems rely on: entities and citations. We make your brand a clear, consistent entity, and we build the mentions and references across the web that give AI systems a reason to include you. The service draws on the same Semrush AI Search training behind our AEO work.",
    ],
    included: [
      {
        title: "Entity audit",
        text: "How your brand, services and key facts currently appear across the web, and where the picture is muddled or missing.",
      },
      {
        title: "Citation focused content",
        text: "Pages structured so their facts, definitions and comparisons are easy for generative systems to extract and cite.",
      },
      {
        title: "Brand mentions for LLMs",
        text: "Placements that put your brand name into relevant articles and discussions across the sites AI systems commonly draw from.",
      },
      {
        title: "Consistency clean up",
        text: "Conflicting names, descriptions and service details aligned, so the entity behind the mentions is unmistakably you.",
      },
      {
        title: "Topical authority building",
        text: "Content clusters that establish your site as a genuine source on your subject, not a single page hoping to be quoted.",
      },
      {
        title: "Citation and mention reporting",
        text: "A full report of every mention placed, with live URLs, plus a summary of where your brand shows up in AI answers.",
      },
    ],
    steps: [
      {
        title: "Baseline check",
        text: "We test the prompts and questions that matter in your niche and record how AI systems answer them today.",
      },
      {
        title: "Entity and content plan",
        text: "We fix the entity picture first, then plan the content and mention work that supports it.",
      },
      {
        title: "Build and place",
        text: "Content is created or reworked, and brand mentions are placed on relevant third party sites.",
      },
      {
        title: "Recheck and report",
        text: "The same questions are tested again, changes are reported honestly, and the next round is agreed with you.",
      },
    ],
    deliverables: [
      {
        title: "Entity audit summary",
        text: "What the web currently says about your brand, and the inconsistencies we found and fixed.",
      },
      {
        title: "Optimised source content",
        text: "Pages built or reworked to be clean, citable sources for generative answers.",
      },
      {
        title: "Brand mention report",
        text: "Every mention placed for you, with the live URL and the page it appears on.",
      },
      {
        title: "AI visibility recap",
        text: "A straightforward before and after view of your brand in AI generated answers for your target questions.",
      },
    ],
    faqs: [
      {
        q: "Is GEO just AEO with a different name?",
        a: "They are close cousins. AEO centres on direct answers and featured responses, while GEO centres on being cited inside fully generated answers from systems like AI Overviews and ChatGPT. In practice the work overlaps, and we will tell you honestly which label fits your situation.",
      },
      {
        q: "How quickly does GEO work show an effect?",
        a: "Mentions and entity fixes are delivered on a normal campaign timeline, but AI systems refresh their sources on their own schedule. Anyone promising instant inclusion is guessing. We report what we placed and what we observe, and let the evidence speak.",
      },
      {
        q: "Do I still need normal SEO and links?",
        a: "Yes. Generative systems lean on the same signals of trust and authority as traditional search. GEO strengthens your position in AI answers, but it works best on top of sound pages and a credible link profile, both of which we can handle in the same engagement.",
      },
    ],
    ctaLine:
      "Tell us your niche and we will show you what AI answers in your market currently say, and who they cite instead of you.",
  },
  {
    slug: "complete-ecommerce-management",
    title: "Complete Ecommerce Management",
    tagline:
      "Your whole store handled in one place: SEO, content, links, development and day to day management.",
    summary:
      "One team for the whole store: ecommerce SEO, Shopify and WooCommerce work, product descriptions, technical fixes, link building and day to day management, coordinated as a single service with one point of contact.",
    metaDescription:
      "Complete Ecommerce Management from SEODilated and team: ecommerce SEO for Shopify and WooCommerce, product descriptions, technical SEO for stores, ecommerce link building, store development and management.",
    intro: [
      "Running an online store means five jobs at once: getting found, describing products well, keeping the site technically sound, earning links and keeping everything running. Most store owners end up juggling freelancers for each one, and the gaps between them are where growth leaks away.",
      "This package brings the whole job under one roof. Our team covers ecommerce SEO, Shopify and WooCommerce work, product copy, technical fixes, link building and ongoing store management, coordinated as one service with one point of contact.",
    ],
    included: [
      {
        title: "Ecommerce SEO",
        text: "Category and product pages optimised around how shoppers actually search, with internal linking that supports your money pages.",
      },
      {
        title: "Shopify and WooCommerce SEO",
        text: "Platform specific work on collections, product structure, duplicate content and the settings that quietly hold stores back.",
      },
      {
        title: "Product descriptions",
        text: "Human written descriptions that sell the product and carry the right search terms, in a consistent voice across your range.",
      },
      {
        title: "Technical SEO for stores",
        text: "Crawl and indexing clean up, faceted navigation issues, site speed basics and structured data for products.",
      },
      {
        title: "Ecommerce link building",
        text: "Guest posts and links from relevant sites in your niche, pointing at the categories and products you need to move.",
      },
      {
        title: "Store development and management",
        text: "Build changes, updates and day to day store care handled by the same team that does your SEO, so nothing fights anything else.",
      },
    ],
    steps: [
      {
        title: "Store review",
        text: "We review your store, platform, products and current search visibility, and agree where the biggest wins sit.",
      },
      {
        title: "One combined plan",
        text: "SEO, content, technical and store tasks are sequenced into a single plan, so you always know what is happening and why.",
      },
      {
        title: "Team delivery",
        text: "Our team works through the plan: copy written, fixes applied, links placed and store changes shipped.",
      },
      {
        title: "Reporting and next steps",
        text: "You receive a clear report of everything delivered, including every live link, plus the agreed priorities for the next period.",
      },
    ],
    deliverables: [
      {
        title: "Store review and plan",
        text: "The findings from your store review and the prioritised plan built from them.",
      },
      {
        title: "Optimised categories and products",
        text: "Pages reworked for search and for shoppers, live on your store.",
      },
      {
        title: "Published product descriptions",
        text: "The new copy written for your range, in your store's voice.",
      },
      {
        title: "Full live-link report",
        text: "Every link placed for the store, with its exact live URL and anchor text.",
      },
      {
        title: "Management summary",
        text: "A plain report of store changes, fixes and updates carried out in the period.",
      },
    ],
    faqs: [
      {
        q: "Which platforms do you cover?",
        a: "Shopify and WooCommerce are the core of this service, covering the large majority of stores we are asked about. If your store runs on something else, tell us what it is and we will be honest about whether we are the right fit.",
      },
      {
        q: "Can I take only part of the package?",
        a: "Yes. Many store owners start with one piece, usually product descriptions or ecommerce SEO, and widen the scope once they see the work. The package exists for owners who would rather hand over the whole job.",
      },
      {
        q: "Who does the actual work?",
        a: "Our own team. The same people handle your store development, content and SEO, which is the point of the package: no handovers between strangers, and no task falling between two freelancers.",
      },
    ],
    ctaLine:
      "Send us your store URL. We will review it and lay out exactly what we would take off your plate, and what it would cost, before you decide.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline:
      "Business websites and landing pages built properly by our team, with the SEO basics in place from day one.",
    summary:
      "Business websites and landing pages built by our own team, with clean structure, mobile first layouts and the SEO foundations set up as part of the build. The same team stays on hand for changes after launch.",
    metaDescription:
      "Web Development from SEODilated's team: business websites and landing pages built with SEO basics in place, and ongoing changes handled by the same team afterwards.",
    intro: [
      "A website that looks good but cannot be found is only half a website. Because we are an SEO practice first, every site our team builds starts with the search basics already handled: clean structure, sensible page hierarchy and pages that load without a fight.",
      "We build business websites and landing pages for clients who want one team accountable for the result. And when you need changes later, you come back to the same team that built it, not to a stranger reading someone else's code.",
    ],
    included: [
      {
        title: "Business websites",
        text: "Complete sites for service businesses and agencies, structured around the pages your customers actually look for.",
      },
      {
        title: "Landing pages",
        text: "Focused pages for campaigns and offers, built to load fast and make the next step obvious to the visitor.",
      },
      {
        title: "SEO basics built in",
        text: "Clean URLs, proper heading structure, metadata and internal linking set up as part of the build, not sold as an extra.",
      },
      {
        title: "Mobile first build",
        text: "Designed and tested for phones first, since that is where most of your visitors will meet you.",
      },
      {
        title: "Content placement",
        text: "Your copy and images laid out properly on the page. If you need the words written too, our content service can handle them.",
      },
      {
        title: "Ongoing changes",
        text: "Updates, new pages and fixes after launch, handled by the same team that built the site.",
      },
    ],
    steps: [
      {
        title: "Brief and structure",
        text: "We agree what the site must do, which pages it needs and what each page is for, before anything is designed.",
      },
      {
        title: "Build",
        text: "The site is built by our team with the agreed structure, your content and the SEO foundations in place.",
      },
      {
        title: "Review round",
        text: "You review the site, we work through your feedback together, and the details are polished before launch.",
      },
      {
        title: "Launch and handover",
        text: "The site goes live, we run final checks, and you know exactly who to contact when you need changes.",
      },
    ],
    deliverables: [
      {
        title: "The finished website",
        text: "Your site live on your domain, built to the agreed structure and page list.",
      },
      {
        title: "SEO foundation setup",
        text: "Titles, metadata, heading structure and internal linking configured across the site.",
      },
      {
        title: "Launch checklist",
        text: "A short summary of the checks run at launch, covering mobile, speed basics and links.",
      },
      {
        title: "A team that knows your site",
        text: "Ongoing changes quoted quickly because the builders and the support are the same people.",
      },
    ],
    faqs: [
      {
        q: "Can you rebuild or improve my existing site?",
        a: "Yes. Many projects are rebuilds. We review what you have, keep what works, and will tell you honestly if a partial improvement makes more sense than starting again.",
      },
      {
        q: "Do you only build sites for SEO clients?",
        a: "No. Development is a standalone service. Plenty of clients start with a website and add SEO or link building later, and plenty of SEO clients never use the development side at all.",
      },
      {
        q: "What do you need from me to start?",
        a: "A short brief: what the business does, the pages you think you need, and any sites you like the feel of. Logos and copy can be supplied by you, or our content team can help produce them as part of the project.",
      },
    ],
    ctaLine:
      "Tell us what the site needs to do for your business. We will come back with a structure, a scope and an honest price.",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    tagline:
      "WordPress sites built, customised and looked after by our team, including WooCommerce stores.",
    summary:
      "WordPress builds, theme customisation and WooCommerce from our team, set up cleanly and kept manageable. Speed and security basics are handled as standard, and maintenance is available so the site stays healthy.",
    metaDescription:
      "WordPress Development from SEODilated's team: WordPress builds, theme customisation, WooCommerce, speed and security basics, and ongoing maintenance.",
    intro: [
      "WordPress powers a huge share of business websites because it is flexible and you own it outright. It also drifts easily: plugin pile ups, neglected updates and themes bent out of shape are the usual reasons a WordPress site slows down or breaks.",
      "Our team builds WordPress sites properly from the start, customises themes to fit your business rather than the demo, and keeps sites maintained afterwards. WooCommerce builds are covered too, for stores that want WordPress flexibility.",
    ],
    included: [
      {
        title: "WordPress builds",
        text: "New WordPress sites set up cleanly, with a sensible structure you can actually manage day to day.",
      },
      {
        title: "Themes and customisation",
        text: "Themes selected, configured and customised to your brand, without the fragile workarounds that break on the next update.",
      },
      {
        title: "WooCommerce",
        text: "Store setup and customisation on WordPress, from product structure to checkout details.",
      },
      {
        title: "Speed basics",
        text: "The practical speed work: image weight, caching setup and plugin discipline, so pages stop dragging.",
      },
      {
        title: "Security basics",
        text: "Sensible hardening, updates kept current and the common entry points closed off.",
      },
      {
        title: "Maintenance",
        text: "Ongoing updates, small changes and fixes from the team that knows your setup.",
      },
    ],
    steps: [
      {
        title: "Review or brief",
        text: "For existing sites we review the current setup first. For new builds we agree pages, features and design direction.",
      },
      {
        title: "Build or rework",
        text: "The site is built or cleaned up by our team, with plugins kept to what the site genuinely needs.",
      },
      {
        title: "Checks and polish",
        text: "Forms, checkout where relevant, mobile layouts and speed basics are checked before anything goes live.",
      },
      {
        title: "Launch and upkeep",
        text: "The site goes live with updates and security basics in order, and a maintenance route agreed if you want one.",
      },
    ],
    deliverables: [
      {
        title: "Your WordPress site, live",
        text: "The finished build or reworked site, on your own hosting and domain, fully yours.",
      },
      {
        title: "Setup summary",
        text: "A short record of the theme, key plugins and settings used, so nothing about your site is a mystery.",
      },
      {
        title: "Speed and security pass",
        text: "The baseline speed and security work completed and noted at handover.",
      },
      {
        title: "Maintenance option",
        text: "A clear offer for ongoing updates and changes, from the same team, if you want the site looked after.",
      },
    ],
    faqs: [
      {
        q: "Can you fix or speed up my existing WordPress site?",
        a: "Yes. We start with a review of the current setup, tell you honestly what is causing the problem, and quote the fix. Sometimes that is a clean up, sometimes a theme is the real problem and we will say so.",
      },
      {
        q: "Will I be able to update the site myself?",
        a: "That is the aim. WordPress is chosen so owners can edit pages and publish content without a developer. We keep the setup straightforward and avoid locking simple tasks behind custom code.",
      },
      {
        q: "Do you work with page builders?",
        a: "Where a builder genuinely suits the project, yes. Where it is the reason a site is slow or fragile, we will recommend a leaner route and explain the trade off before you decide.",
      },
    ],
    ctaLine:
      "Whether it is a new build or a WordPress site that needs rescuing, send us the URL and we will tell you plainly what it needs.",
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    tagline:
      "Human written content for guest posts, websites and blogs, matched to the publisher and to your brand voice.",
    summary:
      "Human written guest post articles, website copy, blog content and product descriptions. Every piece is matched to the publisher's guidelines and your brand voice, and checked editorially before it is submitted anywhere.",
    metaDescription:
      "Content Writing from SEODilated: human written guest post articles, website content, blog content and product descriptions, matched to publisher guidelines and checked before submission.",
    intro: [
      "Content is where link building campaigns quietly succeed or fail. Good publishers reject weak articles, and readers ignore them even when they slip through. Every article we place or publish is written by a human, for the specific site it is going to.",
      "The writing follows the rules that matter: the publisher's own editorial guidelines, your brand voice, and the reader the page is actually for. Everything is checked editorially before it is submitted anywhere, so your brand is never attached to copy you would not put your name to.",
    ],
    included: [
      {
        title: "Guest post articles",
        text: "Articles written for specific publisher sites in your niche, with your link placed naturally in relevant copy.",
      },
      {
        title: "Website content",
        text: "Service pages, about pages and landing page copy that explain what you do in language your customers use.",
      },
      {
        title: "Blog content",
        text: "Articles for your own site that answer real customer questions and support the pages you want to rank.",
      },
      {
        title: "Product descriptions",
        text: "Descriptions that sell benefits, not just specifications, written consistently across a whole range.",
      },
      {
        title: "Guideline matching",
        text: "Word count, tone, linking rules and formatting matched to each publisher's requirements before submission.",
      },
      {
        title: "Editorial check",
        text: "Every piece is read and checked before it goes out: structure, accuracy, flow and your anchor text in context.",
      },
    ],
    steps: [
      {
        title: "Brief and voice",
        text: "We agree topics, target pages, anchor text and tone, and look at examples of your existing content.",
      },
      {
        title: "Writing",
        text: "The content is written by hand for its destination, whether that is a publisher's site or your own.",
      },
      {
        title: "Editorial review",
        text: "Drafts are checked against the guidelines and your brief. Anything that misses the mark is fixed before you see it.",
      },
      {
        title: "Delivery or placement",
        text: "Content is delivered to you, or placed directly as part of a guest post order with the live link reported back.",
      },
    ],
    deliverables: [
      {
        title: "Finished articles",
        text: "Complete, ready to publish pieces written to the agreed brief and word count.",
      },
      {
        title: "Publisher ready files",
        text: "For guest posts, articles formatted to the individual publisher's guidelines.",
      },
      {
        title: "Live placement links",
        text: "When content is part of a placement order, the exact live URL of each published piece.",
      },
      {
        title: "A consistent voice",
        text: "Copy that reads like one business wrote it, across your site, your blog and your guest posts.",
      },
    ],
    faqs: [
      {
        q: "Is the content really written by humans?",
        a: "Yes. Articles are written and edited by people, for a specific reader and a specific site. That is slower than bulk generation and it is also why publishers accept the work and why it protects your brand.",
      },
      {
        q: "Can I see or approve content before it is placed?",
        a: "Yes. If you want approval before submission, we build it into the process. Many clients approve the first pieces and then let the agreed pattern run, but the choice is yours.",
      },
      {
        q: "Can you match my existing tone of voice?",
        a: "That is part of the brief. Send us pages or documents that sound like you, and the writing follows them. If you do not have a defined voice yet, we will agree a straightforward one with you first.",
      },
    ],
    ctaLine:
      "Send us a page that sounds like your business, or just tell us the topics. We will quote the writing per piece, with no surprises.",
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    tagline:
      "Page speed and Core Web Vitals work by our team, measured before and after so you can see exactly what changed.",
    summary:
      "Speed and Core Web Vitals work measured before and after with standard tools. Image and script weight, caching and mobile performance are fixed in order of impact, and the improvement is shown in a comparison report.",
    metaDescription:
      "Performance Optimization from SEODilated's team: page speed and Core Web Vitals improvements covering image and script weight, caching and mobile performance, measured before and after.",
    intro: [
      "Slow pages cost you twice: visitors leave before the page finishes loading, and search engines treat speed and stability as part of quality. The causes are usually mundane: heavy images, bloated scripts, no caching and layouts built for desktop and squeezed onto phones.",
      "Our team works through those causes in order of impact. Everything is measured before we touch it and measured again afterwards with standard tools, so the improvement is a fact in a report, not a claim in a sales pitch. We will never promise a perfect score; we promise real, measured improvement.",
    ],
    included: [
      {
        title: "Speed audit",
        text: "Your key pages measured with standard tools, and the specific bottlenecks identified rather than guessed at.",
      },
      {
        title: "Image optimisation",
        text: "Oversized images resized, compressed and delivered in modern formats, usually the single biggest win on a slow site.",
      },
      {
        title: "Script and plugin weight",
        text: "Unnecessary scripts and plugins trimmed, deferred or removed, so pages stop loading things visitors never use.",
      },
      {
        title: "Caching setup",
        text: "Browser and page caching configured properly, so repeat visits and page to page moves feel instant.",
      },
      {
        title: "Core Web Vitals focus",
        text: "Loading speed, responsiveness and layout stability worked on directly, the three measures search engines report on.",
      },
      {
        title: "Mobile performance",
        text: "Pages checked and tuned on real mobile conditions, where most visitors and most speed problems actually are.",
      },
    ],
    steps: [
      {
        title: "Measure the baseline",
        text: "We record current scores and timings for your key pages, so there is a honest starting point to compare against.",
      },
      {
        title: "Fix in impact order",
        text: "The team works through the bottlenecks, biggest wins first: images, scripts, caching, then the finer details.",
      },
      {
        title: "Measure again",
        text: "The same pages are measured with the same tools, and the before and after figures are put side by side.",
      },
      {
        title: "Report and advise",
        text: "You get the comparison report plus honest advice on anything that would need a rebuild rather than optimisation.",
      },
    ],
    deliverables: [
      {
        title: "Before and after report",
        text: "Baseline and final measurements for your key pages, from the same standard tools, in one clear document.",
      },
      {
        title: "Completed optimisation work",
        text: "The image, script, caching and layout fixes applied directly to your live site.",
      },
      {
        title: "Bottleneck summary",
        text: "A plain explanation of what was slowing the site down and what was done about each item.",
      },
      {
        title: "Honest next steps",
        text: "If a limit is structural, we say so and explain what a deeper fix would involve, with no obligation attached.",
      },
    ],
    faqs: [
      {
        q: "Can you get my site to a perfect 100 score?",
        a: "We will not promise that, and you should doubt anyone who does. Scores move with hosting, third party scripts and the test itself. What we commit to is measurable improvement on the things that affect real visitors: load time, responsiveness and stability.",
      },
      {
        q: "Will optimisation break my site's design?",
        a: "The work is done carefully and checked page by page. If a fix would change how something looks or works, we flag it and agree it with you before applying it, rather than surprising you afterwards.",
      },
      {
        q: "Does my hosting limit what is possible?",
        a: "It can. Very cheap or overloaded hosting sets a ceiling no optimisation can break through. If we hit that ceiling, the report will show it clearly and we will tell you what a hosting change would unlock.",
      },
    ],
    ctaLine:
      "Send us your URL and we will measure it first. The baseline costs you nothing, and it tells us both whether this service is worth your money.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function hasServiceDetail(slug: string): boolean {
  return serviceDetails.some((s) => s.slug === slug);
}
