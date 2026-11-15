export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  headline: string;
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
    headline: "SEO Services That Start With an Honest Audit",
    tagline:
      "Full search engine optimisation for your whole site, not just one page of it.",
    summary:
      "The complete search picture in one service: keyword research, on-page and technical fixes, and the guest posts and link building that build authority. Led by a specialist with 7 years of experience, starting with an honest review of your site and reported in full.",
    metaDescription:
      "SEO services from SEODilated: on-page, technical and off-page SEO backed by 7 years of experience, an honest site review first and full reporting.",
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
    slug: "advance-seo",
    title: "Advance SEO",
    headline: "Advance SEO Services: Rank in Google, Get Cited by AI",
    tagline:
      "SEO for how search works now: Google, AI Overviews, ChatGPT, and every answer engine your buyers ask.",
    summary:
      "Advance SEO is our full search visibility service for the AI era. It combines advanced technical and content SEO with AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization), so your brand ranks in Google and gets cited in AI answers.",
    metaDescription:
      "Advance SEO services from SEODilated: technical depth with AEO and GEO built in, so your site ranks in Google and gets cited in AI answers.",
    intro: [
      "Search has changed. Your buyers still use Google, but they also ask ChatGPT, Gemini and Perplexity, and they read the AI Overview at the top of the results before any blue link. A site can rank well and still be invisible in the answers that are actually being read. Classic SEO on its own no longer covers the whole picture.",
      "Advance SEO is the service we built for that reality. It brings three disciplines into one plan: advanced SEO for rankings, AEO (Answer Engine Optimization) so answer engines can quote your business accurately, and GEO (Generative Engine Optimization) so AI systems recognise your brand as an entity worth citing. The work is led by a Semrush certified specialist, including AI Search Essentials, and our own agency site runs on exactly this setup.",
    ],
    included: [
      {
        title: "Everything in core SEO, taken further",
        text: "Advanced keyword and intent mapping, deep technical audits and content structure work, on top of the full foundation our SEO service covers.",
      },
      {
        title: "AEO: Answer Engine Optimization",
        text: "Answer-first content structure, question-led sections and FAQ and schema markup, so answer engines and AI assistants can lift your content and cite your business as the source.",
      },
      {
        title: "GEO: Generative Engine Optimization",
        text: "Entity clarity for your brand, consistent business facts across the web, and mentions on the sites AI models read and learn from, so generative answers include you.",
      },
      {
        title: "AI visibility baseline and tracking",
        text: "We check where your brand appears today in AI Overviews, ChatGPT, Gemini and Perplexity answers for your key topics, and re-check on a rhythm, reporting exactly what we find, good or bad.",
      },
      {
        title: "Structured data and entity work",
        text: "Organization and service schema, sameAs connections and author and entity signals that help search engines and AI systems understand who you are and what you do.",
      },
      {
        title: "Authority links and digital PR for citations",
        text: "Guest posts and mentions on real, vetted websites in your niche, the raw material both rankings and AI citations are built from, with a full live-link report.",
      },
    ],
    steps: [
      {
        title: "Audit and AI baseline",
        text: "We audit your site and record your starting point in Google and in AI answers for the topics that matter to your business.",
      },
      {
        title: "One unified strategy",
        text: "A single plan that sequences the technical fixes, the content and entity work, and the link and citation building, with honest priorities.",
      },
      {
        title: "Build and publish",
        text: "Content restructured for answers, schema and entity work implemented, and outreach for links and mentions running in parallel.",
      },
      {
        title: "Track and refine",
        text: "Rankings and AI visibility are re-checked and reported together, and the plan is adjusted to what the evidence shows.",
      },
    ],
    deliverables: [
      {
        title: "Advance SEO audit",
        text: "Findings across your technical base, content and link profile, plus your AI visibility baseline, in plain language with priorities.",
      },
      {
        title: "Unified strategy document",
        text: "The agreed plan covering SEO, AEO and GEO work in sequence, so you always know what is being done and why.",
      },
      {
        title: "Implemented answer and entity work",
        text: "The content restructuring, schema and entity changes carried out on your site, or supplied as a detailed brief for your developer.",
      },
      {
        title: "Combined monthly report",
        text: "Rankings, traffic signals and AI answer presence reported side by side, with the exact URL of every link and mention placed.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between SEO, AEO and GEO?",
        a: "SEO earns rankings in search results. AEO, Answer Engine Optimization, structures your content so answer engines and AI assistants can quote it directly. GEO, Generative Engine Optimization, builds your brand's entity presence and citations so AI-generated answers mention you. Advance SEO runs all three as one plan, because your buyers now meet you in all three places.",
      },
      {
        q: "How is Advance SEO different from your SEO service?",
        a: "The SEO service covers the complete Google foundation: keywords, on-page, technical and links. Advance SEO adds the AI layer on top: AEO content structuring, GEO entity and citation work, and AI visibility tracking across AI Overviews, ChatGPT, Gemini and Perplexity. If AI answers matter in your market, and they now do in most, Advance SEO is the right level.",
      },
      {
        q: "Can you guarantee my brand will be cited by AI assistants?",
        a: "No, and nobody honestly can. AI answers change constantly and are controlled by the platforms, not by any agency. What we guarantee is the work itself: the audit, the structuring, the entity and citation building, and honest tracking that shows you exactly where you stand.",
      },
    ],
    ctaLine:
      "Start with an honest review of your site and your current AI visibility. We will show you where you appear, where you are missing, and what to fix first.",
  },
  {
    slug: "aeo",
    title: "AEO",
    headline: "AEO Services for Brands That Want to Be the Answer",
    tagline:
      "Answer Engine Optimization as a standalone service: be the answer AI assistants give, even if your SEO is already handled.",
    summary:
      "Already have SEO running, with us or with someone else? AEO adds the answer layer on its own: your content structured so AI Overviews, ChatGPT, Gemini and voice assistants can quote your business accurately, with your AI answer presence tracked and reported.",
    metaDescription:
      "AEO services from SEODilated: answer engine optimization that structures your content so ChatGPT and AI Overviews surface and cite your business.",
    intro: [
      "Plenty of sites have their SEO handled, by an in-house team, another agency, or a project that is already running, and still have a gap: when a buyer asks an AI assistant instead of reading ten blue links, the business never appears in the answer. That gap is exactly what AEO closes, and it does not require you to move your whole SEO programme to get it.",
      "This standalone service audits how answer engines currently treat your brand, restructures your key content so it can be quoted, and tracks your presence in AI answers over time. It runs cleanly alongside an existing SEO setup, and we are happy to coordinate with whoever runs yours.",
    ],
    included: [
      {
        title: "AI answer baseline audit",
        text: "We record where your brand stands today in AI Overviews, ChatGPT, Gemini and Perplexity for the questions your buyers actually ask.",
      },
      {
        title: "Answer-first content restructuring",
        text: "Your key pages restructured so answers come first, in clear, quotable sections an engine can lift without mangling your meaning.",
      },
      {
        title: "FAQ and schema work",
        text: "Question-led sections and the structured data that helps answer engines understand and attribute your content correctly.",
      },
      {
        title: "Entity and fact consistency",
        text: "Your business facts, name, services, locations and contact details, made consistent across your site and profiles so engines repeat them correctly.",
      },
      {
        title: "Citations and mentions",
        text: "Guest posts and brand mentions on real websites in your niche, the sources AI answers are built from, with a full live-link report.",
      },
      {
        title: "AI presence tracking",
        text: "Your presence in AI answers re-checked and reported on a rhythm, showing plainly where you appear, where competitors appear instead, and what changed.",
      },
    ],
    steps: [
      {
        title: "Baseline",
        text: "We audit your current AI answer presence and your content's quotability, and agree the questions and topics that matter most.",
      },
      {
        title: "Plan",
        text: "A focused plan for the pages, facts and citations to fix first, sized to sit alongside your existing SEO work without clashing with it.",
      },
      {
        title: "Restructure and publish",
        text: "Content and schema changes are implemented, or supplied as detailed briefs your own team or developer can apply.",
      },
      {
        title: "Track and report",
        text: "AI answer presence is re-checked and reported, and the next round of improvements is agreed from the evidence.",
      },
    ],
    deliverables: [
      {
        title: "AEO baseline report",
        text: "Where your brand appears in AI answers today, topic by topic, with the gaps worth closing first.",
      },
      {
        title: "Answer-content plan",
        text: "The pages and questions to restructure, in priority order, with the reasoning for each.",
      },
      {
        title: "Implemented changes or briefs",
        text: "The restructuring, FAQ and schema work done on your site, or written up precisely for your existing team.",
      },
      {
        title: "AI presence reports",
        text: "Repeat checks of your AI answer presence, reported plainly alongside every link and mention placed.",
      },
    ],
    faqs: [
      {
        q: "Can I buy AEO without moving my SEO to you?",
        a: "Yes, that is exactly who this standalone service is for. If your SEO is already running and working, AEO sits on top of it. We will coordinate with your in-house team or your current agency wherever that helps, and if you later want everything under one roof, Advance SEO combines SEO, AEO and GEO in one plan.",
      },
      {
        q: "Which answer engines do you cover?",
        a: "Google AI Overviews and featured answers, ChatGPT, Gemini and Perplexity are the main ones buyers use today. The baseline and tracking focus on those, and the content and entity work itself improves how any answer engine can treat your brand.",
      },
      {
        q: "Can you guarantee my brand will appear in AI answers?",
        a: "No, and nobody honestly can. The platforms control their answers and change them constantly. What we guarantee is the work: the audit, the restructuring, the citations, and tracking that shows you exactly where you stand at each check.",
      },
    ],
    ctaLine:
      "Ask us for an AI answer baseline on your site. It shows where you appear in AI answers today, and whether standalone AEO is worth it for you.",
  },
  {
    slug: "geo",
    title: "GEO",
    headline: "GEO Services: Get Your Brand Cited in AI Answers",
    tagline:
      "Generative Engine Optimization as a standalone service: get your brand recognised and cited in AI-generated answers.",
    summary:
      "Already have SEO running, with us or with someone else? GEO adds the generative layer on its own: entity work, consistent brand facts and citations on the sites AI models read, so systems like ChatGPT, Gemini and Perplexity know your brand and cite it.",
    metaDescription:
      "GEO services from SEODilated: generative engine optimization that builds the citations and entity clarity AI engines use to cite brands.",
    intro: [
      "AI systems do not just read your website. They build a picture of your brand from everything published about you: directories, articles, reviews, mentions and the sites in your niche that carry authority. If that picture is thin or inconsistent, generative answers leave you out or describe you wrongly, no matter how good your own pages are.",
      "This standalone service builds that picture deliberately: your entity clarified, your facts made consistent everywhere they appear, and citations earned on the websites AI models actually read. It is designed to bolt onto a running SEO project, whoever runs it, without disturbing what already works.",
    ],
    included: [
      {
        title: "Entity audit",
        text: "How AI systems currently understand your brand: what they say about you, what they get wrong, and which sources they appear to trust.",
      },
      {
        title: "Brand fact consistency",
        text: "Your name, services, locations and key facts aligned across your site, profiles and major directories, so every source tells the same story.",
      },
      {
        title: "Citation building",
        text: "Guest posts, mentions and digital PR on real, vetted websites in your niche, placed where AI models read, with a full live-link report.",
      },
      {
        title: "Content AI can extract",
        text: "Definitions, comparisons and quotable passages on your key pages, written so a generative system can lift them accurately with your brand attached.",
      },
      {
        title: "Structured data and llms.txt",
        text: "Organization schema, sameAs connections and an llms.txt file that presents your business to AI crawlers in a clean, factual form.",
      },
      {
        title: "Generative answer tracking",
        text: "Your brand's presence and accuracy in ChatGPT, Gemini and Perplexity answers re-checked and reported on a rhythm.",
      },
    ],
    steps: [
      {
        title: "Entity baseline",
        text: "We record how AI systems describe and cite your brand today, and which competitors they prefer for your topics.",
      },
      {
        title: "Fix the facts",
        text: "Inconsistencies in your brand facts across the web are corrected first, because citations built on wrong facts do harm.",
      },
      {
        title: "Build citations",
        text: "Outreach and placement work earns mentions on authoritative sites in your niche, reported link by link.",
      },
      {
        title: "Track and refine",
        text: "Generative answers are re-checked, accuracy is corrected where it drifts, and the citation plan is refined from the evidence.",
      },
    ],
    deliverables: [
      {
        title: "GEO entity report",
        text: "How AI systems understand your brand today, what they get wrong, and the sources shaping that picture.",
      },
      {
        title: "Corrected fact base",
        text: "Your brand facts aligned across your site, profiles and directories, with a record of what was fixed.",
      },
      {
        title: "Full citation report",
        text: "The exact URL of every mention and link placed for you, ready for you to verify yourself.",
      },
      {
        title: "Generative presence reports",
        text: "Repeat checks of how AI answers describe and cite your brand, reported plainly at each check.",
      },
    ],
    faqs: [
      {
        q: "Can I buy GEO without moving my SEO to you?",
        a: "Yes. GEO is offered standalone precisely for running projects: your existing SEO keeps doing its job, and this service builds the entity and citation layer AI systems rely on. If you would rather have one team run everything, Advance SEO combines SEO, AEO and GEO in a single plan.",
      },
      {
        q: "How is GEO different from AEO?",
        a: "AEO works mainly on your own content, structuring it so answer engines can quote it. GEO works mainly on the wider web's picture of your brand: entity clarity, consistent facts and citations on other sites, so generative systems know you and cite you. They overlap, and many clients take both, but each can be bought on its own.",
      },
      {
        q: "How long before AI answers change?",
        a: "Honestly, it varies and anyone promising a date is guessing. AI systems update their sources on their own schedules. What you will see from us is the work itself, delivered and reported, and tracking that shows movement as it happens rather than a promise made in advance.",
      },
    ],
    ctaLine:
      "Ask us how AI systems describe your brand today. The entity report costs you nothing to request, and it tells us both whether standalone GEO is worth your money.",
  },
  {
    slug: "complete-ecommerce-management",
    title: "Complete Ecommerce Management",
    headline: "Ecommerce SEO Services With Complete Store Management",
    tagline:
      "Your whole store handled in one place: SEO, content, links, development and day to day management across Shopify, WooCommerce, Amazon and eBay.",
    summary:
      "One team for the whole store: ecommerce SEO, Shopify and WooCommerce work, Amazon and eBay marketplace management, product descriptions, technical fixes, link building and day to day management, coordinated as a single service with one point of contact.",
    metaDescription:
      "Ecommerce SEO services from SEODilated: Shopify and WooCommerce SEO, marketplace management, product descriptions and complete store management.",
    intro: [
      "Running an online store means five jobs at once: getting found, describing products well, keeping the site technically sound, earning links and keeping everything running. When you also sell through Amazon and eBay, each marketplace adds its own listings, rules and daily upkeep on top of that.",
      "This package brings the whole job under one roof. Our team covers ecommerce SEO, Shopify and WooCommerce stores, and Amazon and eBay marketplace stores, including listings, optimisation and the day to day running, coordinated as one service with one point of contact.",
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
        title: "Amazon and eBay marketplace management",
        text: "Listings created and optimised on Amazon and eBay, with the day to day running of your marketplace stores handled alongside your own website.",
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
        q: "Do you manage Amazon and eBay stores as well?",
        a: "Yes. Alongside your Shopify or WooCommerce web store, we manage Amazon and eBay marketplace stores too: listings written and optimised, and the day to day running handled by the same team, so every channel sits with one point of contact.",
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
    headline: "Web Development Services Built With SEO in Place",
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
    headline: "WordPress Development Services, Built and Secured Properly",
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
    headline: "Content Writing Services by Writers Who Understand SEO",
    tagline:
      "Human written content for guest posts, websites and blogs, matched to the publisher and to your brand voice.",
    summary:
      "Human written guest post articles, website copy, blog content and product descriptions. Every piece is matched to the publisher's guidelines and your brand voice, and checked editorially before it is submitted anywhere.",
    metaDescription:
      "Content writing services from SEODilated: human-written guest post articles, website content, blogs and product descriptions, checked before submission.",
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
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    headline: "Social Media Marketing Services for Consistent, Professional Pages",
    tagline:
      "Social media handled properly: strategy, content and consistent posting that builds a brand people recognise and trust.",
    summary:
      "Our team plans and runs your social media end to end: platform strategy, a monthly content calendar, posts written and designed in your voice, pages kept active and professional, and paid social campaigns planned alongside the organic work, all reported honestly every month.",
    metaDescription:
      "Social media marketing services from SEODilated: strategy, content calendars and page management for LinkedIn, Facebook, Instagram and X.",
    intro: [
      "Most businesses know they should be active on social media and most are not, because posting well takes a plan, a writer, a designer and consistency week after week. So the pages sit quiet, and quiet pages quietly cost trust: a prospect who checks your LinkedIn or Facebook and finds nothing recent assumes the business itself is inactive.",
      "Our team runs social media the way we run our own. SEODilated's LinkedIn and Facebook pages publish planned content every day, built from a written calendar, not from whatever someone remembered that morning. This service gives your business the same system: a strategy tied to your goals, content made in advance, and reporting that shows exactly what went out and what it did.",
    ],
    included: [
      {
        title: "Platform strategy",
        text: "Which platforms deserve your effort, LinkedIn, Facebook, Instagram, X or a focused subset, decided from where your buyers actually spend attention, not from habit.",
      },
      {
        title: "Monthly content calendar",
        text: "A written calendar of posts planned a month ahead, mixing expertise, proof of work, offers and conversation starters, approved by you before anything is scheduled.",
      },
      {
        title: "Post writing and design",
        text: "Captions written in your voice and clean branded visuals for every post, in the formats each platform rewards, including carousels and short-form copy.",
      },
      {
        title: "Scheduling and page management",
        text: "Posts scheduled and published on rhythm, profiles and pages kept complete and current, and the basics of comments and messages handled to an agreed standard.",
      },
      {
        title: "Paid social campaigns",
        text: "Paid campaigns on the social platforms planned and managed alongside the organic work by our paid ads specialist, with budgets agreed in writing before any spend.",
      },
      {
        title: "Monthly reporting",
        text: "A plain report of what was published, how it performed, and what we are changing next month. No vanity screenshots, no inflated claims.",
      },
    ],
    steps: [
      {
        title: "Audit and strategy",
        text: "We review your current profiles and your competitors' presence, then agree the platforms, the voice and the content pillars.",
      },
      {
        title: "Calendar and approval",
        text: "The first month of content is written, designed and sent to you for approval before a single post is scheduled.",
      },
      {
        title: "Publish and manage",
        text: "Approved content goes out on schedule, pages are kept active, and paid campaigns run to the agreed budgets.",
      },
      {
        title: "Report and refine",
        text: "Each month closes with an honest performance report and a refined calendar based on what your audience actually responded to.",
      },
    ],
    deliverables: [
      {
        title: "Social media strategy document",
        text: "Platforms, audience, voice and content pillars, agreed in writing before content work begins.",
      },
      {
        title: "Monthly content calendar",
        text: "Every post for the month, written and designed in advance, in one document you approve.",
      },
      {
        title: "Published, managed pages",
        text: "Your profiles active and professional, posting on the agreed rhythm without you having to chase anyone.",
      },
      {
        title: "Monthly performance report",
        text: "Reach, engagement and growth reported plainly, with the next month's adjustments explained.",
      },
    ],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "LinkedIn, Facebook, Instagram and X are the platforms our team works on daily, including our own agency pages. We will recommend the subset that fits your buyers rather than spreading you thinly across all of them, and if a platform does not suit your market we will say so.",
      },
      {
        q: "Can you guarantee follower growth or sales from social media?",
        a: "No, and nobody honestly can. What we guarantee is the system: a real strategy, content produced and published consistently, paid spend only to agreed budgets, and honest monthly reporting. Consistent, professional presence is what turns social profiles into trust, and trust is what turns into enquiries over time.",
      },
      {
        q: "Do I approve the posts before they go out?",
        a: "Yes. Content is prepared a month ahead and nothing is scheduled until you have approved the calendar. Once a rhythm is established and you are comfortable, many clients approve in batches, but the approval step stays yours for as long as you want it.",
      },
    ],
    ctaLine:
      "Send us your current social profiles and we will tell you honestly what we would fix first, and whether a managed service is worth it for you yet.",
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    headline: "Performance Optimization Services for Core Web Vitals",
    tagline:
      "Page speed and Core Web Vitals work by our team, measured before and after so you can see exactly what changed.",
    summary:
      "Speed and Core Web Vitals work measured before and after with standard tools. Image and script weight, caching and mobile performance are fixed in order of impact, and the improvement is shown in a comparison report.",
    metaDescription:
      "Performance optimization services from SEODilated: page speed and Core Web Vitals improvements, measured before and after on every change.",
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
  {
    slug: "application-development",
    title: "Application Development",
    headline: "Application Development Services, Scoped Before We Build",
    tagline:
      "Web and mobile applications planned, built and shipped by the same team that grows your traffic.",
    summary:
      "From internal tools to customer-facing products, we scope and build applications around what your business actually needs: a clear specification, clean code, milestone reporting, and a proper handover at launch.",
    metaDescription:
      "Application development services from SEODilated: web, mobile and custom apps, scoped honestly, built in stages and handed over with documentation.",
    intro: [
      "Plenty of businesses outgrow spreadsheets, off-the-shelf tools and patched-together plugins. When that happens, a purpose-built application stops being a luxury and becomes the thing that lets the business run properly: one system that does exactly what your team needs, in the way your team actually works.",
      "Our development team builds web and mobile applications end to end, from the first scoping conversation to launch and handover. You deal with one team throughout, the scope is agreed in writing before building starts, and progress is reported at every milestone, the same discipline we bring to our SEO work.",
    ],
    included: [
      {
        title: "Discovery and written scope",
        text: "We map what the application must do, who uses it and what it connects to, then agree a written scope before any building starts. No vague briefs, no surprise extras.",
      },
      {
        title: "UX and interface design",
        text: "Screens designed around the people who will use the app every day, so the finished product is simple to learn and hard to misuse.",
      },
      {
        title: "Web application development",
        text: "Dashboards, portals, booking systems, internal tools and customer platforms, built on modern, maintainable technology.",
      },
      {
        title: "Mobile application development",
        text: "Mobile apps for your customers or your team, built from the same specification as your web platform so everything stays in sync.",
      },
      {
        title: "Testing and launch",
        text: "The application is tested against the agreed scope before launch, and launch itself is planned with you so there are no surprises on the day.",
      },
      {
        title: "Handover and documentation",
        text: "You receive the working application, full access, and clear documentation of how it is built and how to run it. Your product stays yours.",
      },
    ],
    steps: [
      {
        title: "Discovery",
        text: "We learn your process, your users and the problem the application has to solve, and flag anything in the idea that would be expensive or risky before it costs you anything.",
      },
      {
        title: "Scope and design",
        text: "You receive a written scope, a fixed structure for the build, and designs for the main screens to approve before development begins.",
      },
      {
        title: "Build in milestones",
        text: "Development runs in agreed milestones. You see working software at each stage and can comment while changes are still cheap to make.",
      },
      {
        title: "Test, launch and hand over",
        text: "Final testing against the scope, a planned launch, and a full handover with documentation and access to everything.",
      },
    ],
    deliverables: [
      {
        title: "The working application",
        text: "Your application, live and tested against the agreed scope, ready for your team or your customers.",
      },
      {
        title: "Full access and source code",
        text: "Admin access, accounts and the source code handed over to you. You are never locked in to us to keep your own product running.",
      },
      {
        title: "Documentation",
        text: "A clear record of how the application is structured, how it is deployed, and how routine tasks are done.",
      },
      {
        title: "Launch support",
        text: "We stay close through launch and the first bedding-in period, fixing anything that does not match the agreed scope.",
      },
    ],
    faqs: [
      {
        q: "What kinds of applications do you build?",
        a: "Web applications such as dashboards, client portals, booking and management systems, internal business tools, and mobile apps for customers or staff. If your idea sits outside that, tell us about it and you will get a straight answer on whether we are the right team for it.",
      },
      {
        q: "How is the price worked out?",
        a: "Every application is different, so pricing follows the written scope: features, integrations and platforms all change the build. You receive a clear quote against that scope before work starts, and the price only changes if the scope changes, with your agreement first.",
      },
      {
        q: "Do you look after the app after launch?",
        a: "Yes, ongoing maintenance and further development are available after handover, and many clients keep building in phases. Equally, because you receive the source code and documentation, you are free to take the product elsewhere. It is yours.",
      },
    ],
    ctaLine:
      "Tell us what you want to build. We will scope it honestly, quote it clearly, and tell you plainly if something in the plan will not work.",
  },
  {
    slug: "advance-ai-software-development",
    title: "Advance AI Software Development",
    headline: "AI Software Development Services Built Around Your Workflows",
    tagline:
      "Practical AI software built around your workflows: assistants, automation and tools your team will actually use.",
    summary:
      "We build AI-powered software for real business use: chatbots and assistants trained on your own material, workflow automation, content and data tools, and AI features integrated into the systems you already run.",
    metaDescription:
      "AI software development services from SEODilated: custom AI tools, chatbots and automation planned around your real workflows, scoped honestly first.",
    intro: [
      "AI is genuinely useful when it is pointed at a specific job: answering customer questions from your own documentation, drafting and sorting the work your team repeats every day, or pulling answers out of data nobody has time to read. It is a waste of money when it is bought as a buzzword. We build the first kind.",
      "Our team designs and builds AI software around your workflows, using leading AI models through their official APIs and connecting them to your website, your data and your existing tools. Every project starts with an honest scoping conversation about what AI can and cannot do well in your case, before you spend anything on a build.",
    ],
    included: [
      {
        title: "AI chatbots and assistants",
        text: "Assistants for your website or your team, answering from your own content and documentation, with clear limits on what they should and should not answer.",
      },
      {
        title: "Workflow automation",
        text: "The repetitive steps in your operation, drafting, sorting, summarising, routing and data entry, automated with AI where it is reliable and kept human where it is not.",
      },
      {
        title: "Content and data tools",
        text: "Internal tools that generate, check and organise content and data at a scale your team cannot do by hand, with human review built into the process.",
      },
      {
        title: "Integration with your systems",
        text: "AI features connected to the software you already use, your website, CRM, store or internal dashboards, through official APIs.",
      },
      {
        title: "Testing against real cases",
        text: "Before launch, the system is tested on your real questions and real data, including the awkward cases, so you know where it is strong and where it needs a human.",
      },
      {
        title: "Training and handover",
        text: "Your team is shown how the system works, what it costs to run, and how to manage it, with documentation handed over at launch.",
      },
    ],
    steps: [
      {
        title: "Use-case scoping",
        text: "We identify the specific jobs AI could do in your business and judge each one honestly: value, reliability and running cost, before recommending what to build first.",
      },
      {
        title: "Prototype",
        text: "A small working version is built against your real content or data, so you can judge the quality yourself before committing to the full build.",
      },
      {
        title: "Build and integrate",
        text: "The full system is built and connected to your website, data and tools, in agreed milestones with progress reported as we go.",
      },
      {
        title: "Test, launch and hand over",
        text: "Testing on real cases, a planned launch, and a handover with documentation, access and training for your team.",
      },
    ],
    deliverables: [
      {
        title: "The working AI software",
        text: "Your AI system, live, integrated and tested against the agreed scope and your real use cases.",
      },
      {
        title: "Full access and documentation",
        text: "Accounts, API connections and code handed over, with documentation covering how the system works and how to run it.",
      },
      {
        title: "Running-cost breakdown",
        text: "A plain summary of what the system costs to run, including model API usage, so there are no surprises after launch.",
      },
      {
        title: "Team training session",
        text: "A walkthrough for the people who will use and manage the system day to day, including its limits.",
      },
    ],
    faqs: [
      {
        q: "What can AI software actually do for my business?",
        a: "The reliable wins today are assistants that answer from your own material, automation of repetitive drafting, sorting and summarising work, and tools that search and summarise your data. In the scoping step we will tell you honestly which of your ideas fall into that category and which are not ready yet.",
      },
      {
        q: "Which AI models do you build on?",
        a: "Leading models from providers such as OpenAI and Anthropic, accessed through their official APIs and chosen per use case, based on quality, cost and the type of task. If a model changes or a better option appears, the integration is built so the model can be swapped without rebuilding the product.",
      },
      {
        q: "Will the AI ever make things up?",
        a: "It can, and any builder who promises otherwise is not being straight with you. We reduce the risk by grounding answers in your own content, restricting what the system may answer, and testing on your real cases, and we will show you exactly where human review stays in the loop.",
      },
    ],
    ctaLine:
      "Tell us the job you want AI to do. We will tell you honestly whether it is ready to build, what it would cost to run, and where a human still needs to stay in charge.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function hasServiceDetail(slug: string): boolean {
  return serviceDetails.some((s) => s.slug === slug);
}
