/**
 * SEODilated blog: purely informational content inside the SEO and
 * link building niche. One post publishes per day (posts carry a
 * publishDate and only appear once that date arrives, Pakistan time).
 * Every post must include: an answer-first intro (AEO), key takeaways,
 * structured sections, FAQs (schema), and a Sources list of external
 * references, plus one related service for the internal link.
 */

export const BLOG_CATEGORIES = [
  "SEO",
  "Link Building",
  "Guest Posting",
  "AI Search",
  "Ecommerce SEO",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogSource {
  label: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  keyword: string;
  publishDate: string; // YYYY-MM-DD, Pakistan time
  updatedDate?: string; // YYYY-MM-DD
  readingMinutes: number;
  intro: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  sources: BlogSource[];
  relatedService: { label: string; href: string };
}

/** Today's date in Pakistan time as YYYY-MM-DD. */
export function todayLondon(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "how-to-appear-in-chatgpt-answers",
    "title": "How to Appear in ChatGPT Answers: A Practical Guide for Businesses",
    "seoTitle": "How to Appear in ChatGPT Answers: Practical Guide",
    "metaDescription": "Learn how to appear in ChatGPT answers with crawlable pages, clear facts, consistent business details, trusted mentions and simple monthly checks over time.",
    "excerpt": "ChatGPT cites businesses it can find, understand and trust. This guide covers the practical work that improves your chances, without tricks or guarantees.",
    "category": "AI Search",
    "keyword": "how to appear in chatgpt",
    "publishDate": "2026-11-15",
    "readingMinutes": 7,
    "intro": [
      "To appear in ChatGPT answers, your business needs to be easy to find, easy to understand and worth citing. In practice, that means your key pages must be crawlable and indexed, your facts must be stated plainly, and other trusted websites should mention your brand in the right context. There is no submission form and no paid switch that places you inside an answer.",
      "I treat this as an extension of ordinary SEO rather than a separate dark art. When a client asks why a competitor is named and they are not, the cause is usually mundane: the competitor has a clearer page, a more consistent business profile, or better coverage on third-party sites. Work through those basics first, because they are the parts you can control."
    ],
    "keyTakeaways": [
      "ChatGPT can only cite pages and sources its search system can reach, read and index.",
      "Clear, factual pages with direct answers are easier for AI systems to quote accurately.",
      "Consistent business names, services and contact details help systems connect mentions to one entity.",
      "Mentions and links on relevant third-party sites give AI systems more reasons to trust your brand.",
      "Nobody can guarantee inclusion, so test real questions regularly and improve the gaps you find."
    ],
    "sections": [
      {
        "bullets": [
          "Keep key facts in page text, not only in images, PDFs or pop-ups.",
          "Check that important pages are linked from your navigation or other relevant pages.",
          "Fix broken pages, redirect chains and duplicate versions of the same service page.",
          "Make sure page titles and headings describe the service in plain language."
        ],
        "heading": "Start with pages ChatGPT can actually read",
        "paragraphs": [
          "Before thinking about prompts or citations, check whether your important pages are visible to search systems at all. A page blocked by robots.txt, hidden behind a login, or published only inside an image or a script-heavy widget gives an AI system very little to work with. Your core service pages, location pages and contact page should load as normal web pages with the main information present in readable text.",
          "Use Google Search Console and a simple site search to confirm the pages are indexed. Then read each page as a stranger would. Does it say what the business does, who it helps, where it operates and how to make contact, without forcing the reader to hunt through vague claims? If a human cannot summarise the page in one sentence, an AI system will struggle to cite it accurately."
        ]
      },
      {
        "heading": "Write pages that state facts plainly",
        "paragraphs": [
          "AI answers are built from short, extractable statements. Pages that bury the answer under broad marketing language are harder to quote than pages that say, early and clearly, what is offered and who it is for. Put the direct answer near the top, then support it with detail: process, deliverables, constraints, prices where you publish them, and the questions customers ask before buying.",
          "This does not mean writing in a robotic style or repeating one keyword. It means using headings that match real questions, short paragraphs that each make one point, and specific wording instead of filler. For example, “We install heat pumps across Leeds, with surveys booked within five working days” is citable. “We deliver excellence in home comfort solutions” is not, because it contains almost no usable fact."
        ]
      },
      {
        "bullets": [
          "Use one format for your business name everywhere.",
          "Keep service descriptions aligned across your site and profiles.",
          "Add sameAs links only to profiles you control or that are genuinely yours.",
          "Remove or correct duplicate listings that show old addresses or phone numbers."
        ],
        "heading": "Make your business one consistent entity",
        "paragraphs": [
          "AI systems connect information from many places, so small inconsistencies create doubt. Your business name, trading name, phone number, address, service list and description should match across your website, Google Business Profile, LinkedIn company page, directories and trade listings. If you changed name, moved office or dropped a service, old listings need updating rather than leaving the web to guess.",
          "Structured data helps present the same facts in a machine-readable format. Organisation or LocalBusiness schema, where it genuinely applies, can include your name, logo, contact details and sameAs links to official profiles. Treat schema as a tidy label, not a ranking trick. It supports the visible content on the page; it should never claim things the page itself does not say."
        ]
      },
      {
        "heading": "Earn mentions beyond your own website",
        "paragraphs": [
          "Many ChatGPT answers lean on third-party sources, because a business describing itself is only one side of the story. Mentions in relevant trade publications, local news, partner pages, professional directories, review profiles and well-matched guest articles help establish that your business exists in a wider context. The mention does not always need to be a link to matter, although a natural link makes the source easier to follow and verify.",
          "Quality and relevance matter more than volume. Ten mentions on unrelated sites with thin articles will not build the same confidence as two solid pieces on websites your customers already read. Avoid buying bulk placements or using networks built only to sell links. Apart from the risk under Google’s spam policies, weak sources are unlikely to be the ones an AI system chooses to cite."
        ]
      },
      {
        "heading": "Test real questions and keep a record",
        "paragraphs": [
          "Choose a short list of questions your buyers would actually ask, such as “best accountant for contractors in Bristol” or “who supplies office plants in Manchester”. Ask them in ChatGPT on a regular schedule, note which businesses are named, and record the sources cited. Patterns appear quickly: perhaps rivals are cited from a directory you have neglected, or from a guide your site does not yet cover properly.",
          "Then improve one gap at a time. Update the thin page, correct the directory entry, pitch the relevant publication, or add a genuinely useful guide that answers the question better. Recheck after the changes have had time to be crawled. Answers vary by wording, location and timing, so judge progress over several checks rather than one screenshot. Anyone promising a guaranteed place in ChatGPT answers is selling certainty that the system itself does not offer."
        ]
      }
    ],
    "faqs": [
      {
        "a": "There is no general submission form that guarantees a business will be included in ChatGPT answers. The practical route is to make your site crawlable and indexed, publish clear factual pages, and build trusted mentions elsewhere, so search and AI systems can find and cite you naturally.",
        "q": "Can I submit my website directly to ChatGPT?"
      },
      {
        "a": "No. Structured data can make your business details easier to interpret, especially names, contact information and official profiles, but it does not force a citation. It works best as support for accurate visible content, not as a substitute for it.",
        "q": "Does structured data guarantee that ChatGPT will cite my site?"
      },
      {
        "a": "It varies. A page first needs to be crawled and indexed, and third-party mentions take time to publish and be discovered. In client work I judge this over weeks of repeated checks, not days, and I look for more frequent and more accurate mentions rather than a single appearance.",
        "q": "How long does it take to appear in ChatGPT answers?"
      },
      {
        "a": "They overlap but they are not identical. Good indexing, clear content and trusted references help in both places. The difference is that an AI answer may cite directories, articles and review sources alongside business websites, so your wider web presence matters as much as any single page.",
        "q": "Is this the same as ranking on Google?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: AI features and your website",
        "url": "https://developers.google.com/search/docs/appearance/ai-features"
      },
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      },
      {
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      }
    ],
    "relatedService": {
      "href": "/services/aeo",
      "label": "See our AEO service"
    }
  },
  {
    "slug": "what-is-a-toxic-backlink",
    "title": "What Is a Toxic Backlink? How to Spot One and When to Worry",
    "seoTitle": "What Is a Toxic Backlink? Signs, Risks and Fixes",
    "metaDescription": "A toxic backlink is a low quality or manipulative link that could harm trust. Learn the real warning signs, what Google ignores, and when disavow is justified.",
    "excerpt": "Most links labelled toxic by tools are harmless noise. This guide explains which backlinks genuinely deserve action and which ones you can safely leave alone.",
    "category": "Link Building",
    "keyword": "what is a toxic backlink",
    "publishDate": "2026-11-16",
    "readingMinutes": 7,
    "intro": [
      "A toxic backlink is a link from another website that looks manipulative, spammy or so irrelevant that it could damage trust in your site. The word toxic is not a Google category, though. It is a label used by SEO tools to flag links they think deserve a closer look.",
      "In client work, I see the same pattern again and again. A site owner runs a report, sees a frightening score, and wants to disavow hundreds of links by Friday. Sometimes action is needed. More often, the links are the normal mess that collects around any website that has been online for a few years: scrapers, weak directories, old blog comments and pages nobody would ever visit. The skill is telling the difference."
    ],
    "keyTakeaways": [
      "Toxic is a tool label, not an official Google penalty category.",
      "Google ignores a large amount of obvious spam without you doing anything.",
      "A link becomes a real concern when it forms part of a deliberate scheme to manipulate rankings.",
      "The disavow tool is a last resort, mainly for manual actions or clear link schemes.",
      "Judge links by pattern, placement, relevance and intent, not by one score."
    ],
    "sections": [
      {
        "heading": "What people actually mean by a toxic backlink",
        "paragraphs": [
          "When a tool calls a backlink toxic, it usually means the linking page has signals the tool does not like. The domain may have little organic traffic, publish on every topic under the sun, link out to hundreds of unrelated sites, or sit in a neighbourhood full of casinos, loans, adult pages and hacked content. None of that proves Google is counting the link against you. It only says the link is unlikely to help.",
          "That distinction matters. A useless link and a dangerous link are not the same thing. A useless link is ignored or simply carries no weight. A dangerous link is one that forms part of a pattern Google could read as an attempt to cheat: paid placements disguised as editorial links, exact match anchor text repeated at scale, sitewide links from irrelevant sites, or links built through networks that exist only to sell ranking signals."
        ]
      },
      {
        "bullets": [
          "The linking site has no real audience, no clear topic and no visible editorial standard.",
          "Your link uses money keywords as anchor text again and again.",
          "The link is sitewide, in a footer or sidebar, rather than inside relevant content.",
          "The page links out to many unrelated businesses in gambling, finance, health or adult niches.",
          "A burst of similar links appeared at the same time, often after buying a cheap package."
        ],
        "heading": "Signs a backlink deserves a closer look",
        "paragraphs": [
          "Start with the page, not the metric. Would a real reader ever land on it? Does the article read like it was written for a person, or was it assembled around your anchor text? Is your link placed naturally inside useful content, or dropped into a footer, sidebar or author box that appears across the whole site? Those human checks reveal more than a single toxicity score.",
          "Then look for patterns across the whole profile. One odd link is rarely a problem. Fifty odd links with the same commercial anchor text, created in the same month, from sites with no clear audience, tells a different story. Patterns are what turn weak links into a risk."
        ]
      },
      {
        "heading": "Why most spam links do not hurt your site",
        "paragraphs": [
          "Google has dealt with web spam for decades, and its systems are built to discount links that look automated or worthless. If every stray spam link could sink a website, competitors could damage each other at will and the whole system would collapse. In practice, the strange links that appear in every backlink report, from scraper sites in countries you have never traded with, are normally ignored before they reach your rankings.",
          "This is why experienced SEOs do not panic at a messy report. We look for evidence of harm or evidence of manipulation: a manual action in Search Console, a sudden ranking drop that matches a link building campaign, or a profile that has clearly been built rather than earned. Without that evidence, deleting or disavowing at random can remove links that were doing no harm and occasionally some that were quietly helping."
        ]
      },
      {
        "heading": "When you genuinely should worry",
        "paragraphs": [
          "Worry when the links are yours, or bought for you, and they were clearly created to manipulate rankings. Google's spam policies cover link schemes, paid links that pass ranking credit without proper qualification, large scale guest posting built for links rather than readers, and similar behaviour. If a previous agency bought hundreds of placements and the anchor text reads like a keyword list, that is a real exposure, not background noise.",
          "Also take it seriously if Google sends a manual action about unnatural links. That message changes everything, because a human reviewer has already decided the profile breaks the rules. At that point you need a proper clean up: document the links, try to remove the worst ones at source, and only then consider a disavow file for what cannot be removed."
        ]
      },
      {
        "heading": "What to do, step by step",
        "paragraphs": [
          "Export your links from Search Console and from one backlink tool, then work through them in groups rather than one by one. Group by domain, look at the anchor text, the type of page and how the link was likely obtained. Keep links from real sites with real readers, even if a tool scores them poorly. Flag links that are sitewide, paid looking, hacked, or part of an obvious network.",
          "For the worst group, contact site owners and ask for removal where that is realistic. Keep a simple record of what you asked and when. If there is a manual action, or a clear scheme that cannot be undone by outreach, prepare a careful disavow file at domain level for the clear offenders and submit it through Google's tool. Then stop. Endless disavowing becomes its own superstition, and it does not replace building links your competitors would be pleased to have."
        ]
      }
    ],
    "faqs": [
      {
        "a": "No. Toxicity scores are created by third party SEO tools using their own rules. They can be useful for sorting a long list of links, but Google does not see that score and does not rank your site by it. Treat it as a prompt to inspect, never as a verdict.",
        "q": "Does Google use a toxic link score?"
      },
      {
        "a": "No. Disavowing everything a tool dislikes is risky and usually unnecessary. Google already ignores most obvious spam. Reserve disavow for a manual action, or for a clear link scheme you cannot remove, and be precise about which domains you include.",
        "q": "Should I disavow every low quality backlink?"
      },
      {
        "a": "In most cases, no. Because Google expects spam links to appear around normal websites, isolated junk pointing at your site rarely causes damage. The exception is a large, deliberate scheme that looks like your own link building. That is uncommon, and it is judged on pattern rather than on a handful of links.",
        "q": "Can a competitor hurt my site with bad links?"
      },
      {
        "a": "For most small and mid sized sites, a review every few months is enough, plus a check after changing agencies or buying link building. Look for sudden bursts, strange anchor text and links you do not recognise. Steady attention beats occasional panic.",
        "q": "How often should I check my backlink profile?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search: Disavow links to your site",
        "url": "https://support.google.com/webmasters/answer/9044175"
      },
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      }
    ],
    "relatedService": {
      "href": "/link-building",
      "label": "See our link building service"
    }
  },
  {
    "slug": "guest-posts-vs-niche-edits",
    "title": "Guest Posts vs Niche Edits: Which Link Should You Buy First?",
    "seoTitle": "Guest Posts vs Niche Edits: Which Should You Buy First?",
    "metaDescription": "Guest posts vs niche edits compared by a working link builder: control, speed, cost and risk, plus a simple rule for which one your site should buy first.",
    "excerpt": "Guest posts give you a brand new article and control over the context. Niche edits place your link inside a page that already exists and already ranks. Here is how to choose which to buy first.",
    "category": "Guest Posting",
    "keyword": "guest posts vs niche edits",
    "publishDate": "2026-11-17",
    "readingMinutes": 7,
    "intro": [
      "For most websites buying their first links, the guest post is the safer first purchase. You get a new article written around your topic, you approve the content and the anchor text before anything goes live, and the link sits inside context you helped shape. A niche edit is the better second tool: it is faster and usually cheaper, and it places your link inside an article that already exists and is already indexed, which makes it ideal for pushing a specific page once you have something worth pushing.",
      "The confusion is understandable, because both end with the same result: a link to your site on someone else's website. The difference is everything that happens before that link appears, and that difference decides the price, the timeline and the risk. After seven years of placing both types for clients, this is the honest comparison I give people before they spend anything."
    ],
    "keyTakeaways": [
      "A guest post is a new article written for another website, with your link placed inside it.",
      "A niche edit inserts your link into an article that is already published and indexed.",
      "Guest posts usually cost more because you are paying for content production as well as the placement.",
      "Niche edits are usually faster, because there is nothing new to write or approve.",
      "Both are paid links, so relevance and editorial quality matter more than the format you choose."
    ],
    "sections": [
      {
        "heading": "What you are actually buying",
        "paragraphs": [
          "A guest post starts with a blank page. A writer produces an original article for the host website, built around a topic that suits their audience and your link. The article goes through the site's normal editorial process, it gets published, and your link appears inside it, pointing at a page you chose, with anchor text you agreed beforehand.",
          "A niche edit, also called a link insertion, skips the writing entirely. The outreach targets articles that are already live: a guide, a roundup or a resource page that is already indexed and, ideally, already ranking. The site owner adjusts a relevant sentence or adds one, and your link joins content that search engines have already crawled and assessed."
        ]
      },
      {
        "heading": "How the work differs day to day",
        "paragraphs": [
          "Guest post outreach is a content negotiation. You pitch topics, agree an angle, wait for a draft or write one yourself, then wait again for edits and a publishing slot. Two to four weeks from the first email to a live link is normal, and a good site will push back on anything that reads like an advert.",
          "Niche edit outreach is a relevance negotiation. The real work is finding pages where your link genuinely belongs: a paragraph that discusses your type of product, a list that your resource completes, a claim that your page supports with detail. Because nothing new is created, a placement can go live within days, but you control far less of the text surrounding your link.",
          "That control difference matters more than most buyers expect. With a guest post, you shape the entire context the link sits in. With a niche edit, you inherit a context written for someone else, which is exactly why the page carries value, and exactly why you have to check it carefully before paying."
        ]
      },
      {
        "bullets": [
          "Harder niches, such as finance, legal or health, cost more in both formats.",
          "A site with real readers costs more than a site built only to sell links.",
          "Rush timelines cost more, because you lose the ability to walk away from a bad deal."
        ],
        "heading": "What drives the cost of each",
        "paragraphs": [
          "A guest post bundles several costs into one price: the outreach labour, the writing, the site's placement fee and the hours spent in edits and follow-ups. You are buying a small publishing project, not just a link, and the price reflects that.",
          "A niche edit removes the writing and most of the waiting, so it usually costs less on a comparable site. What you are paying for instead is access to an existing asset: a page with history, rankings and readers that took its owner time to build. In both formats the underlying price drivers are the same: the authority of the site, whether it has genuine traffic, how commercial your niche is, and how selective the editor is."
        ]
      },
      {
        "heading": "The risks, stated plainly",
        "paragraphs": [
          "Both formats are paid links, and Google's spam policies are clear that buying links to manipulate rankings counts as link spam. Anyone who tells you either format is completely safe is selling you something. The practical question is not how to hide what you are doing, but whether the placement would still make editorial sense if rankings did not exist.",
          "For guest posts, the risk concentrates in the site: blogs that publish any topic for anyone, filled with thin articles and no real audience, add little and can form a pattern that is easy to spot. For niche edits, the risk concentrates in the page: insertions into hacked sites, irrelevant articles, or pages already stuffed with unrelated outbound links are the ones that cause trouble. A relevant link on a genuine page, with a natural anchor, is a very different proposition from either of those.",
          "Keep anchor text mostly branded or natural, link to pages that genuinely help the reader of the host article, and build at a pace that matches the growth of your site. That discipline protects you far more than the choice between the two formats."
        ]
      },
      {
        "bullets": [
          "New site or new section with no links yet: guest posts first.",
          "Good page with weak rankings: niche edits first.",
          "Tight budget: fewer, better placements in either format beat volume every time."
        ],
        "heading": "So, which one first?",
        "paragraphs": [
          "If your site is new, or the page you want to rank has thin content and no links yet, start with guest posts. They build topical coverage around your subject, they bring in referring domains that did not exist before, and they give you control at the stage when your link profile is small and easy to shape.",
          "If you already have solid pages sitting just outside the positions you want, niche edits are often the smarter spend. The host page already holds authority, the link goes live quickly, and you can point it precisely at the URL that needs help. At SEODilated, most mature campaigns end up using both: guest posts to widen the base, niche edits to push specific pages that are close."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Neither format is inherently safer. Safety comes from the quality and relevance of the site and the page, not from the mechanism. A niche edit inside a genuine, relevant article is a sound placement. A guest post on a blog that sells links on every topic is not, and the reverse is equally true.",
        "q": "Are niche edits safer than guest posts?"
      },
      {
        "a": "Age is not the issue. An older page that is indexed, relevant and still maintained can be an excellent home for a link, because it has history and often rankings behind it. What matters is whether the page is real, whether it fits your topic, and whether its owner still looks after it.",
        "q": "Do niche edits pass less value because the page is older?"
      },
      {
        "a": "Fewer than most sellers will suggest. Start with a small batch, watch how your pages respond over the following weeks, and scale the placements that worked. A steady pace that matches your traffic and content growth looks natural because it is natural.",
        "q": "How many links should I buy at once?"
      },
      {
        "a": "Yes, and most established sites do exactly that. Use guest posts to build topical coverage and new referring domains, and niche edits to support specific pages. Keep the same quality bar for both formats, and record every placement so you always know what you bought and where it sits.",
        "q": "Can I mix guest posts and niche edits in one campaign?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search Central: Qualify your outbound links to Google",
        "url": "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
      },
      {
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      },
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      }
    ],
    "relatedService": {
      "href": "/guest-posts",
      "label": "See our guest post service"
    }
  },
  {
    "slug": "how-many-backlinks-do-i-need-to-rank",
    "title": "How Many Backlinks Do You Need to Rank? An Honest Answer",
    "seoTitle": "How Many Backlinks Do I Need to Rank?",
    "metaDescription": "There is no fixed number of backlinks that guarantees a ranking. Learn how to judge the real target from competing pages, link quality and search intent.",
    "excerpt": "The honest answer is that it depends on the search, the competing pages and the quality of the links. Here is how to work out a sensible target for your own page.",
    "category": "Link Building",
    "keyword": "how many backlinks do i need to rank",
    "publishDate": "2026-11-18",
    "readingMinutes": 6,
    "intro": [
      "There is no set number of backlinks that makes a page rank. A page needs a link profile that is competitive for the exact search you want to win, and strong enough compared with the pages already ranking there. For an easy local or niche term that may mean a handful of good referring domains. For a national money term it may mean years of consistent work.",
      "That answer frustrates people, and I understand why. A number would be easier to buy, plan and report on. But rankings are relative. Your page is not judged against a universal pass mark. It is judged against ten or so rivals for one query, in one market, at one moment. Once you see it that way, the question becomes answerable: how strong are the pages ahead of you, and what would it take to belong in that company?"
    ],
    "keyTakeaways": [
      "There is no universal backlink target that fits every keyword.",
      "Judge your page against the referring domains of the pages already ranking.",
      "One relevant link from a trusted site can outweigh many weak links.",
      "Referring domains matter more than a raw count of individual links.",
      "Content, intent and on page quality decide whether links can do their job."
    ],
    "sections": [
      {
        "heading": "Why the answer is always it depends",
        "paragraphs": [
          "Two searches can look similar and behave completely differently. A new page targeting a narrow question in a small niche may rank with almost no links because few sites have answered it well. A page targeting a competitive service term in London or New York faces companies with established brands, press coverage and a decade of links. The keyword did not change the rules. The competition did.",
          "Intent matters just as much. Informational pages can sometimes win on clarity and depth because the results are mixed and Google is testing new answers. Commercial pages are usually harder, because every rival has invested in content, links and conversion. Before counting links, ask what kind of page Google wants to show and whether yours deserves to be there on merit."
        ]
      },
      {
        "bullets": [
          "Check referring domains to the ranking page, not only to the whole website.",
          "Note which results are small or specialist sites rather than national brands.",
          "Look at relevance: links from your industry count for more than random volume.",
          "Repeat the check for the UK or US version of the result you actually want to win."
        ],
        "heading": "Count your competitors, not the whole internet",
        "paragraphs": [
          "Open the search result you want to enter and list the pages ranking on page one. Ignore the obvious giants for a moment and study the ordinary sites, the ones closest to your size. Check how many referring domains point to each ranking page, not just to the whole domain. Any reputable backlink tool can show this, and the pattern is usually clear within ten minutes.",
          "Look for the weakest page that still holds its position. That page tells you the rough entry level for that result. If several smaller sites rank with modest link profiles, the door is open. If every result belongs to a national brand with deep coverage, more links alone will not save a thin page. You may need a better angle, a narrower keyword, or a longer plan."
        ]
      },
      {
        "heading": "Quality changes the maths completely",
        "paragraphs": [
          "Backlinks are not identical units. A link from a relevant publication that your customers read, placed inside an article that makes sense, carries a different weight from a link on a page built to hold fifty outbound links. This is why one campaign can move a page with a small number of placements while another adds a long list and changes nothing.",
          "Relevance is the part buyers often miss. A local trades firm gains more from links connected to its town, trade and suppliers than from generic sites with impressive scores and no relationship to the subject. A software company needs links that support its expertise. When we plan work at SEODilated, we would rather secure fewer links that a competitor would genuinely envy than chase a round number for a report."
        ]
      },
      {
        "heading": "Referring domains versus total backlinks",
        "paragraphs": [
          "A site can have thousands of backlinks and very little strength if most of them come from a small set of domains. Sitewide links, partner badges and repeated directory entries inflate the total without adding much trust. Referring domains, meaning the number of separate websites linking to you, gives a cleaner picture of how widely your site is recognised.",
          "Even that number needs context. Ten referring domains earned through useful content, partnerships and coverage usually beat ten bought in a hurry from unrelated sites. Watch the trend as well. A profile that grows steadily, with varied anchor text and relevant sources, looks natural because it is natural. Sudden spikes followed by silence look like a campaign, because they usually are one."
        ]
      },
      {
        "heading": "A practical way to set your target",
        "paragraphs": [
          "Take the ranking pages for your target search and find the middle of the pack for referring domains to the page. Use that as a planning range, not a promise. If your page sits far below it, links are probably part of the gap. If your page already matches it and still does not rank, look elsewhere first: search intent, content depth, internal links, page experience and whether your site has enough topical coverage around the subject.",
          "Then build in stages and measure honestly. Add relevant links over time, improve the page as new questions appear in Search Console, and watch whether impressions and positions respond. Rankings rarely move in a straight line. The aim is not to hit a magic total. The aim is to become one of the strongest, most credible answers for that search, and to keep earning that place."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Yes, especially for low competition searches, strong brands, local results and pages that answer a narrow question better than anything else available. Links become more important as competition rises. Having none is not an automatic barrier, but it does limit how far most commercial pages can go.",
        "q": "Can a page rank with no backlinks at all?"
      },
      {
        "a": "No. More weak or irrelevant links can add cost without adding trust, and manipulative patterns can create risk. A smaller number of relevant links from real websites is usually the better investment. Growth should look like recognition, not like a bulk order.",
        "q": "Is more always better with backlinks?"
      },
      {
        "a": "There is no fixed timetable. Google has to find the link, understand the page and re-evaluate the result, and the effect may appear gradually or alongside other changes. Judge a campaign over months, using impressions, positions and traffic together, rather than expecting movement from each individual link.",
        "q": "How long does it take for new backlinks to affect rankings?"
      },
      {
        "a": "Social links can help people discover content and can lead to coverage, but they are not a substitute for editorial links from relevant websites. Treat social as distribution. The links that support rankings most reliably are the ones other sites choose to place in their own content.",
        "q": "Do links from social media count as backlinks?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      },
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      }
    ],
    "relatedService": {
      "href": "/link-building",
      "label": "See our link building service"
    }
  },
  {
    "slug": "dofollow-vs-nofollow-links",
    "title": "Dofollow vs Nofollow Links: What the Difference Actually Means for Your Rankings",
    "seoTitle": "Dofollow vs Nofollow Links: What Actually Matters",
    "metaDescription": "Dofollow vs nofollow links explained in plain English: what each one tells Google, how they affect rankings, and when to use sponsored and ugc tags safely.",
    "excerpt": "A dofollow link is simply a normal link, while a nofollow link carries an instruction that changed meaning in 2019. Here is what that means in practice.",
    "category": "Link Building",
    "keyword": "dofollow vs nofollow links",
    "publishDate": "2026-11-19",
    "readingMinutes": 7,
    "intro": [
      "The difference between dofollow and nofollow links is simple: a dofollow link is an ordinary link that can pass ranking signals, while a nofollow link carries a rel attribute telling Google not to treat it as a straightforward vote for the target page. Since September 2019, Google has treated nofollow as a hint rather than a strict instruction, so the old black and white view no longer holds.",
      "In link building work, this distinction gets exaggerated. Clients sometimes ask for only dofollow links, as if nofollow links were worthless, or worry that a handful of nofollow links will harm a campaign. Neither view matches how real link profiles look. What matters is where the link sits, whether the page is relevant and trusted, and whether the link exists for readers or only for search engines."
    ],
    "keyTakeaways": [
      "Dofollow is not an attribute. It is the name people give to a normal link without rel=\"nofollow\".",
      "A nofollow link tells Google not to count the link as a simple endorsement, but Google may still use it as a hint.",
      "Relevance, placement and the quality of the linking page usually matter more than the label alone.",
      "Paid or sponsored links should be qualified with rel=\"sponsored\", and user-generated links with rel=\"ugc\".",
      "A natural link profile contains a mixture of followed and nofollow links."
    ],
    "sections": [
      {
        "heading": "What a dofollow link actually is",
        "paragraphs": [
          "There is no dofollow tag in HTML. A so-called dofollow link is just the default: an ordinary link with no rel attribute changing how it should be treated. Search engines can follow it, use its anchor text as context, and count it within the systems that assess which pages are authoritative on a topic. When SEOs say a guest post includes a dofollow link, they mean the publisher has not added nofollow or sponsored attributes to it.",
          "Not every followed link carries equal weight. A link inside a relevant article on a trusted site, read by the right audience, is very different from a followed link buried in a footer, a blogroll or a page built to hold hundreds of outbound links. The label is only the starting point. Editors and search engines both judge the setting around the link."
        ]
      },
      {
        "bullets": [
          "rel=\"nofollow\": a general signal that the link should not be treated as an endorsement.",
          "rel=\"sponsored\": for advertising, sponsorships and other paid placements.",
          "rel=\"ugc\": for links inside user-generated content such as comments and forum posts.",
          "Attributes can be combined, for example rel=\"nofollow sponsored\"."
        ],
        "heading": "What nofollow does, and what it does not do",
        "paragraphs": [
          "A nofollow link includes rel=\"nofollow\" in the code. It was created so site owners could link to something without endorsing it for ranking purposes, for example in comments or to an untrusted source. For years it was treated as a firm instruction to ignore the link for rankings. Google changed that approach in 2019 and now treats nofollow, sponsored and ugc as hints, which means Google may choose to use the link as a signal in some cases.",
          "Nofollow does not mean invisible or useless. People can still click the link, visit the site and become customers. Many large platforms apply nofollow to profile and user links, yet those pages can still support discovery, branded searches and referrals. A nofollow link from a respected publication may be commercially valuable even if its direct ranking effect is limited or uncertain."
        ]
      },
      {
        "heading": "Which type helps rankings more?",
        "paragraphs": [
          "For direct ranking influence, a followed editorial link from a relevant, trusted page is normally the stronger asset. That is why guest posting and digital PR campaigns aim for links placed inside genuine articles, written for readers, on sites with their own traffic and standards. The link supports the target page because the context suggests a real recommendation, not because one word in the code performs magic.",
          "The mistake is turning that into a rule that every link must be followed. Real businesses collect nofollow links naturally from social profiles, directories, news coverage, forums and platforms that apply the attribute by default. A profile made only of followed links from purchased placements can look less natural than a mixed one. When I review a site, I look at the whole pattern: relevance, anchors, growth over time and whether the referring sites are places a customer would recognise."
        ]
      },
      {
        "heading": "When you should qualify your own outbound links",
        "paragraphs": [
          "If you publish content on your own site, the rules matter in the other direction too. Links that exist because someone paid, sent a product, sponsored a post or otherwise gave something of value should be qualified with rel=\"sponsored\". Links in comments, forum posts and other user-generated areas should use rel=\"ugc\", often alongside nofollow. Ordinary editorial links to sources you genuinely recommend do not need an attribute.",
          "This is not just tidiness. Google’s spam policies cover links created mainly to manipulate rankings, including paid links that pass ranking signals without proper qualification. Clear labelling protects readers, publishers and clients. In outreach work, I would rather place a properly disclosed sponsored link on a strong site than hide a paid placement and pretend it was purely editorial."
        ]
      },
      {
        "bullets": [
          "Check whether the linking page is relevant to your market.",
          "Look at whether the link sits inside useful content or in a footer or list.",
          "Read the anchor text for signs of over-optimisation.",
          "Value traffic, trust and brand visibility as well as ranking signals."
        ],
        "heading": "How to check the links pointing to your site",
        "paragraphs": [
          "Start with the Links report in Google Search Console to see which sites link to you and which pages they point to. For detail on attributes, check a sample of the actual pages and view the link in the page source, or use your SEO tool of choice to export referring domains with their rel values. Look for relevance first, then placement, then the attribute. A relevant nofollow link is rarely a problem to solve.",
          "Be cautious with sudden spikes of exact-match anchor text, large numbers of links from unrelated sites, or placements on pages that link out to anything for a fee. Those patterns point to quality problems that the dofollow label cannot rescue. Equally, do not reject a good PR opportunity only because the publisher applies sponsored or nofollow attributes across the site. Judge the audience, the context and the business value alongside the SEO value."
        ]
      }
    ],
    "faqs": [
      {
        "a": "No. Their direct ranking effect is limited and, since 2019, Google may treat the attribute as a hint rather than an instruction to ignore the link entirely. Nofollow links can also bring referral traffic, brand visibility and discovery, which are valuable even when they are not the strongest ranking asset.",
        "q": "Are nofollow links completely useless for SEO?"
      },
      {
        "a": "No. A campaign focused only on followed links can produce an unnatural pattern and may push you towards weaker sites that sell placements without standards. Aim for relevant, trusted links in real content. Some will be followed and some will not, and that mixture is normal.",
        "q": "Should I only build dofollow links?"
      },
      {
        "a": "There is no published target ratio to aim for. Ratios vary by industry because different platforms and publishers apply attributes in different ways. Use the ratio as a rough health check if it looks extreme, not as a quota for buying or rejecting individual links.",
        "q": "Is there an ideal dofollow to nofollow ratio?"
      },
      {
        "a": "If money or anything of value changed hands for the placement, the link should be qualified appropriately, usually with rel=\"sponsored\", and the arrangement should be transparent. A genuinely earned editorial link, with no payment or consideration behind it, is a different case.",
        "q": "Do guest post links need to be marked as sponsored?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Qualify your outbound links to Google",
        "url": "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
      },
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      }
    ],
    "relatedService": {
      "href": "/link-building",
      "label": "See our link building service"
    }
  },
  {
    "slug": "link-building-strategies-for-ecommerce",
    "title": "Link Building Strategies for Ecommerce Stores That Actually Fit a Real Budget",
    "seoTitle": "Link Building Strategies for Ecommerce on a Real Budget",
    "metaDescription": "Link building strategies for ecommerce that fit a real budget: supplier links, niche edits, guest posts and product-led content, sequenced in the right order.",
    "excerpt": "Small and mid-sized stores cannot outspend the big retailers on links, and they do not need to. These are the strategies that fit a real budget, sequenced so a limited spend lands where relevance is highest.",
    "category": "Ecommerce SEO",
    "keyword": "link building strategies for ecommerce",
    "publishDate": "2026-11-20",
    "readingMinutes": 7,
    "intro": [
      "The link building strategies for ecommerce that genuinely fit a real budget are the unglamorous ones: claim the supplier and partner links you have already earned, buy a small number of niche edits inside buying guides, place guest posts on niche blogs your customers actually read, and publish product-led content that gives other sites a reason to link to you. None of that requires a big brand or a PR agency. What it does require is the right order, because a small budget spread thinly across everything achieves nothing.",
      "Big retailers win links simply by existing. A household name appears in every roundup by default, while an independent store has to earn each link deliberately. That sounds like a disadvantage, until you realise it forces the one thing that actually works: relevance. A handful of links from sites in your exact niche will do more for a small store than a long list of generic placements."
    ],
    "keyTakeaways": [
      "Start with supplier, brand and partner links: they are relevant, free and often one polite email away.",
      "Niche edits inside existing buying guides put your store where shoppers already compare options.",
      "Guest posts belong on niche blogs in your market, not on general sites that publish every topic.",
      "Product-led content, such as genuinely useful buying guides, gives other sites a reason to link to you.",
      "Sequence matters more than volume: claim the free links first, then spend on the gaps that remain."
    ],
    "sections": [
      {
        "bullets": [
          "Ask every brand you stock for a link from its stockist or where-to-buy page.",
          "Complete the partner, supplier and directory profiles that are missing your website link.",
          "Turn offline relationships, sponsorships and local events into online mentions where it feels natural."
        ],
        "heading": "Start with the links you have already earned",
        "paragraphs": [
          "Before spending anything, list every business relationship your store already has. The brands and manufacturers whose products you stock usually maintain stockist or where-to-buy pages, and many will add your link if you simply ask and make it easy for them. Suppliers, distributors, fulfilment partners, local business groups and even the software your store runs on all belong on the same list.",
          "These links are rarely glamorous, but they are relevant, they are free, and they come from real businesses with real websites. They also tend to be the links competitors forget to claim. One morning of polite emails here can produce more durable value than a month of cold outreach to strangers."
        ]
      },
      {
        "heading": "Buy niche edits on the guides shoppers already read",
        "paragraphs": [
          "Every niche has buying guides, comparison pages and roundups that already rank for the searches your customers make before they spend money. If your product or store is a genuine fit for one of those pages, a niche edit, where the owner inserts your link into the existing content, is often the most cost-effective paid placement a small store can buy.",
          "The page already exists, it already ranks, and it is already read by people comparing options, which is precisely the audience you want. Keep the bar strict: the guide must be genuine, your product must honestly belong in it, and the link should point to the most useful page on your store, usually the category or product page the guide is actually discussing."
        ]
      },
      {
        "heading": "Place guest posts on niche blogs, not everywhere blogs",
        "paragraphs": [
          "Guest posts still work for ecommerce when the host site is right. A well written article on a respected blog in your niche, read by the people who buy what you sell, is worth more than a pile of posts on general sites that publish any topic for a fee. You are buying relevance and audience, not just a link.",
          "Pitch topics that genuinely help the blog's readers and suit your experience: care guides, buying advice, honest comparisons, common mistakes to avoid. Write the article properly, link naturally to a helpful page on your store rather than forcing a product link into every paragraph, and treat each placement as a small piece of publishing rather than a transaction to rush through."
        ]
      },
      {
        "heading": "Publish product-led content worth linking to",
        "paragraphs": [
          "Links become far easier to earn when your store contains something linkable beyond product pages. Buying guides built on the questions your customers genuinely ask, sizing and care resources, comparison pages and original observations drawn from your own sales and returns all give bloggers, journalists and guide writers a reason to cite you instead of a bigger competitor.",
          "This route is slower than buying placements, so it should run alongside them rather than instead of them. The payoff compounds: the same content that earns links also answers pre-purchase questions, which helps conversion when the traffic arrives. Keep those pages clear and well structured, with sensible structured data, so search engines can understand them and surface them properly."
        ]
      },
      {
        "bullets": [
          "Free and earned links first, because they cost nothing but attention.",
          "Paid placements second, aimed at the category pages that make the money.",
          "PR last and lightest, because it is powerful but never predictable."
        ],
        "heading": "Add light digital PR, and do everything in this order",
        "paragraphs": [
          "Once the basics are running, light digital PR stretches a small budget a long way. Offer yourself as a quotable expert in your niche, respond to journalist requests for comment, share a genuinely interesting finding from your store with local and trade press, and pitch your products for seasonal gift guides well before the season starts. One strong mention in a real publication can outperform a month of small placements.",
          "Sequenced, a realistic order looks like this. In the first month, claim the supplier and partner links and fix your profiles. Next, buy a small batch of niche edits on the strongest buying guides in your niche. From there, run one or two guest posts a month on niche blogs, publish content steadily, and keep the PR efforts ticking over in the background. At SEODilated, that is the sequence we recommend to smaller stores, because it spends a limited budget where relevance is highest, first."
        ]
      }
    ],
    "faqs": [
      {
        "a": "There is no universal number, and anyone who gives you one is guessing. The honest answer is: enough relevant links to compete with the stores ranking around you for your main categories, and no more. Look at who ranks for your key searches, study the quality of their links rather than the raw count, and close the relevance gap first.",
        "q": "How many links does a small ecommerce store actually need?"
      },
      {
        "a": "Mostly category pages and guides. They match how people search, they can carry a broader range of links naturally, and they pass value down to the products beneath them. Individual product pages earn links best through roundups, reviews and buying guides, where the product itself is the subject of the page.",
        "q": "Should links point to product pages or category pages?"
      },
      {
        "a": "Paid links sit against Google's spam policies when they are bought to manipulate rankings, so the risk is real and should never be waved away. Reduce it the honest way: buy few, buy relevant, insist on real sites with real readers, keep anchor text natural, and never let a store's whole visibility rest on placements that could disappear overnight.",
        "q": "Are paid links risky for an ecommerce site?"
      },
      {
        "a": "Links influence rankings first and sales second, so expect a lag between the two. New placements typically take weeks to show up in rankings, and those rankings then have to meet real search demand. Judge a campaign over a quarter rather than a fortnight, and watch category rankings and organic revenue instead of counting links.",
        "q": "How long before link building affects sales?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      },
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search Central: Introduction to structured data",
        "url": "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
      },
      {
        "label": "Google Search Central: Qualify your outbound links to Google",
        "url": "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
      }
    ],
    "relatedService": {
      "href": "/services/complete-ecommerce-management",
      "label": "See our ecommerce service"
    }
  },
  {
    "slug": "how-much-does-link-building-cost",
    "title": "How Much Does Link Building Cost? What You Actually Pay For",
    "seoTitle": "How Much Does Link Building Cost? Pricing Explained",
    "metaDescription": "Link building cost depends on site quality, niche, content and outreach time. Learn what drives the price, how pricing models work and how to compare quotes.",
    "excerpt": "Link building quotes vary because the work behind them varies. This guide breaks down the real cost drivers and the questions to ask before you compare prices.",
    "category": "Link Building",
    "keyword": "how much does link building cost",
    "publishDate": "2026-11-21",
    "readingMinutes": 6,
    "intro": [
      "Link building costs vary because you are not buying a standard product. You are paying for access to real websites, editorial judgement, content, outreach time and the risk that some placements will fail and need replacing. A quote only makes sense when you know which of those things it actually includes.",
      "This is the conversation I have with clients before any numbers are discussed. Two agencies can use the same words, guest post or digital PR, and mean completely different work. One may have a vetted list, a writer who understands the niche and a process for checking traffic and relevance. Another may be reselling the same recycled sites to every buyer. The cheaper quote is not always the bargain it appears to be."
    ],
    "keyTakeaways": [
      "There is no standard market price for a backlink or a guest post.",
      "Site quality, niche difficulty and editorial standards are the biggest cost drivers.",
      "Per placement, retainer and hourly models buy different things, so compare the scope carefully.",
      "Very cheap offers usually save money on vetting, content or outreach effort.",
      "Ask what is checked, written, reported and replaced before you judge any quote."
    ],
    "sections": [
      {
        "heading": "What you are actually paying for",
        "paragraphs": [
          "A proper placement has several costs hidden inside it. Someone has to find suitable sites, check that they have real readers, pitch an idea an editor will accept, write or brief the content, manage revisions, and then verify that the link is live and correctly placed. If the placement later disappears, a responsible provider deals with that too. The link itself is only the visible end of the chain.",
          "You are also paying for restraint. Good outreach says no far more often than it says yes: no to sites with fake traffic, no to pages stuffed with unrelated sponsored posts, no to editors who will publish anything for anyone. That filtering takes time, and it is one of the main reasons careful work cannot be priced like bulk work."
        ]
      },
      {
        "bullets": [
          "Site quality: real traffic, topical relevance, editorial standards and a genuine audience.",
          "Niche difficulty: regulated or competitive topics need stronger content and more outreach.",
          "Content depth: research, writing quality, images and matching the publisher's style.",
          "Targeting: country, language, anchor text and page level requirements.",
          "Assurance: live link checks, reporting and replacement if a placement is lost."
        ],
        "heading": "The drivers that move the price",
        "paragraphs": [
          "The largest driver is the quality of the target site. A relevant website with genuine organic traffic, a real audience and an editor who protects their standards is harder to reach and more valuable once you are there. Niche matters too. Finance, law, health and competitive software topics usually need more outreach effort and better content than a broad lifestyle topic, because editors receive more pitches and readers expect more expertise.",
          "Content is the second driver. A short, generic article costs less to produce than a well researched piece written to a publication's style, with proper sources and a reason to exist beyond your link. Then there is control: the more specific your requirements on anchor text, placement, geography and approval, the more work each successful link takes."
        ]
      },
      {
        "heading": "How the main pricing models work",
        "paragraphs": [
          "Per placement pricing means you pay for each agreed link that goes live. It is easy to understand and suits buyers who want specific sites or a defined test. The risk is that it can reward volume over judgement, so the agreement should cover site criteria, content standards and what happens if a link is removed.",
          "A monthly retainer buys an ongoing programme: strategy, outreach, content and reporting over time. It suits competitive markets where steady growth matters more than a one off batch. Hourly or day based pricing is closer to consultancy. You pay for the specialist's time and direction, which can work well if you have writers or outreach staff in house. None of these models is automatically better. The right choice depends on whether you need placements, a programme or expertise."
        ]
      },
      {
        "heading": "Why cheap and expensive work are rarely the same work",
        "paragraphs": [
          "When a quote looks unusually cheap, ask where the saving comes from. It may be efficient systems and long standing publisher relationships, which is fair enough. Or it may be skipped checks, thin content, sites that sell to everyone, or links placed where no reader will ever see them. Those savings show up later as weak results, lost placements or a profile you would not want a competitor, or Google, to inspect closely.",
          "Expensive work should also explain itself. A higher price should buy visible things: stricter site selection, better writing, clearer reporting, honest advice about what not to target, and replacements when something goes wrong. If a provider cannot describe those things plainly, a premium price is just a premium price. Price is a clue, never the whole answer."
        ]
      },
      {
        "heading": "How to compare quotes fairly",
        "paragraphs": [
          "Ask every provider the same questions and compare the answers side by side. Which sites will be targeted, and what checks are run before outreach? Who writes the content, and can you approve it? Will you see the live URLs, anchor text and placement context in a report? What happens if a link is removed or a page is taken down? The answers reveal the real scope far better than a headline price.",
          "Start with a scope you can judge. A sensible first engagement tests quality, communication and reporting before a larger commitment. At SEODilated we would rather review a site honestly and recommend a smaller, well targeted piece of work than sell a large package that the market cannot support. Spend should follow evidence: clear targets, clean placements and reporting you can verify yourself."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Because the scope differs. Site quality, niche, content depth, targeting and replacement cover all change the amount of work behind each link. Two quotes may use the same label while buying completely different standards, which is why the details matter more than the headline figure.",
        "q": "Why do link building quotes differ so much?"
      },
      {
        "a": "It can be, if the saving comes from efficiency rather than skipped checks. Ask how sites are vetted and what the content standard is. If the offer depends on volume, secrecy about the sites, or links no reader would naturally see, the long term cost is usually higher than the saving.",
        "q": "Is cheap link building ever worth it?"
      },
      {
        "a": "Per link pricing suits a defined test or specific placements you want to approve. A monthly arrangement suits competitive markets where outreach, content and digital PR need to build over time. Choose based on the job, and make sure either model includes clear reporting and agreed site criteria.",
        "q": "Should I pay per link or monthly?"
      },
      {
        "a": "Look for the site criteria, content process, approval rights, live link reporting, and what happens if a placement is removed. It should also be honest about what cannot be promised. Rankings depend on your site and market as well as the links, so guarantees deserve scepticism.",
        "q": "What should a link building agreement include?"
      }
    ],
    "sources": [
      {
        "label": "Google Search Central: Spam policies for Google web search",
        "url": "https://developers.google.com/search/docs/essentials/spam-policies"
      },
      {
        "label": "Google Search Central: Qualify your outbound links to Google",
        "url": "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
      },
      {
        "label": "Google Search Central: Creating helpful, reliable, people-first content",
        "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      }
    ],
    "relatedService": {
      "href": "/link-building",
      "label": "See our link building service"
    }
  }
];

export function publishedPosts(): BlogPost[] {
  const today = todayLondon();
  return blogPosts
    .filter((p) => p.publishDate <= today)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getPublishedPost(slug: string): BlogPost | undefined {
  const today = todayLondon();
  return blogPosts.find((p) => p.slug === slug && p.publishDate <= today);
}

export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00+05:00`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
