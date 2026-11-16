/**
 * SEODilated blog: purely informational content inside the SEO and
 * link building niche. One post publishes per day (posts carry a
 * publishDate and only appear once that date arrives, Europe/London time).
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
  publishDate: string; // YYYY-MM-DD, Europe/London time
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
    "updatedDate": "2026-11-16",
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
        "a": "They overlap but they are not identical. Good indexing, clear content and trusted references help in both places. The difference is that an AI answer may cite directories, articles and review sources alongside business websites, so your wider web presence matters as much as any single page. We compare the two approaches directly in our guide to answer engine optimisation versus SEO, which covers where the work overlaps and where it parts ways.",
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
  },
  {
    "slug": "what-is-aeo-vs-seo",
    "title": "What Is Answer Engine Optimisation (AEO) vs SEO? The Real Difference",
    "seoTitle": "What Is AEO vs SEO? The Real Difference Explained",
    "metaDescription": "AEO and SEO share the same foundations but serve different results. Learn how answer engine optimisation differs from SEO, what overlaps, and where to focus.",
    "excerpt": "AEO optimises for direct answers in AI tools and voice assistants. SEO optimises for search results. Most of the work is the same, so here is where the two actually part ways.",
    "category": "AI Search",
    "keyword": "what is answer engine optimization aeo vs seo",
    "publishDate": "2026-11-22",
    "readingMinutes": 7,
    "intro": [
      "Answer engine optimisation, or AEO, is the work of making your content easy for AI systems and voice assistants to quote as a direct answer. SEO is the wider work of making your pages visible and credible in search results. The two overlap heavily: crawlable pages, clear facts and trusted mentions help both. The real difference is the result you are optimising for, a cited answer versus a ranked listing, and that difference changes how you structure a page.",
      "I have spent seven years doing SEO for clients, and AEO is best understood as a layer on top of that work rather than a replacement for it. A page that ranks well but states nothing plainly is rarely quoted. A page that states everything plainly but is never crawled is never seen at all. This guide explains where AEO and SEO agree, where they part, and what to do first if you only have time for one of them."
    ],
    "keyTakeaways": [
      "AEO optimises content so AI systems can quote it as a direct answer; SEO optimises pages to rank in search results.",
      "Both depend on crawlable pages, clear facts and trusted mentions, so most AEO work is good SEO work.",
      "AEO rewards short, direct answers near the top of the page, structured clearly under question headings.",
      "SEO also covers technical health, site structure, internal links and the wider link profile.",
      "Start with SEO foundations, then shape your best pages into answer-ready content."
    ],
    "sections": [
      {
        "heading": "What AEO actually means",
        "paragraphs": [
          "AEO means shaping content so that an AI system can lift a short, accurate statement from it and present it as the answer to a question. The systems that do this include chatbots such as ChatGPT, Google AI Overviews, and voice assistants that read out a single answer rather than a list of links. None of them offers a submission form or a paid switch. They draw on the same indexed web that search engines use, which is why AEO starts with the same foundations as SEO.",
          "The practical test is simple. Ask a question your customers actually ask, in the words they would use. If an AI system answers it and names your business, your content is doing the job. If it answers with a competitor, read the source it cites. Usually the competitor has a clearer page, a better structured answer, or a stronger mention on a third party site. That gap is the work."
        ]
      },
      {
        "heading": "What SEO covers that AEO does not",
        "paragraphs": [
          "SEO covers the whole job of making a website visible in search: technical health, crawlability, site structure, internal links, page speed, mobile experience, local profiles and the link profile that supports authority. AEO does not fix any of that. A page that search engines cannot crawl will not be quoted by an AI system either, because the system cannot read what it cannot reach.",
          "SEO also covers intent beyond direct questions. A service page must convince a visitor to enquire, a category page must help a shopper compare options, and a local page must show where a business operates. Those pages need depth, proof and calls to action that a short quoted answer never shows. AEO is a slice of the work, not the whole job."
        ]
      },
      {
        "bullets": [
          "Crawlable, indexed pages with the main facts in readable text.",
          "Clear headings that match the questions people actually ask.",
          "Accurate, consistent business details across your site and profiles.",
          "Mentions and links on relevant third party sites that build trust.",
          "Content written for readers first, with direct answers near the top."
        ],
        "heading": "Where the two overlap",
        "paragraphs": [
          "Most of what helps AEO is ordinary good SEO. A page that is easy to crawl, states its facts plainly, uses headings that match real questions, and is supported by mentions on trusted sites will perform better in both places. Google's own guidance on helpful content applies to both: write for people, answer the question properly, and show genuine experience where it matters.",
          "Structured data sits in this shared ground too. Organisation or LocalBusiness schema, and FAQ schema where the questions are genuine, help systems interpret the facts on a page. Schema does not force a citation or a ranking, but it removes ambiguity about names, services and contact details, which helps any system that tries to summarise your business."
        ]
      },
      {
        "heading": "Where they part ways in practice",
        "paragraphs": [
          "The split shows up in how a page is written. For AEO, the direct answer belongs near the top, in a short paragraph or a short list, under a heading that mirrors the question. A definition should come first, then the detail. For SEO, depth and coverage matter more: the page must also serve the visitor who wants to compare, check prices, read reviews and decide, which means longer content, supporting sections and internal links.",
          "They also split in measurement. SEO is measured in rankings, impressions, clicks and conversions. AEO is measured by asking real questions in AI tools and recording whether your business is named and which sources are cited. A page can rank first and still never be quoted if the answer is buried under marketing language. Equally, a page can be quoted for one question and never rank for it. Treat them as two scoreboards for the same website."
        ]
      },
      {
        "heading": "What to do first",
        "paragraphs": [
          "Start with the SEO foundations, because AEO cannot rescue a site that search engines struggle to read. Check that your key pages are crawlable and indexed, fix broken pages and duplicate versions, and make sure the main facts appear in plain text rather than inside images or scripts. Then pick the pages that already rank or nearly rank, and shape them into answer-ready pages: a direct answer near the top, question headings, short paragraphs, and the detail that supports the answer.",
          "After that, build the wider trust signals. Correct inconsistent listings, earn mentions on relevant sites, and keep the facts on your pages current. Then test monthly. Ask a fixed list of buyer questions in ChatGPT and in Google's AI results, note who is named and which sources are cited, and improve one gap at a time. Anyone promising a guaranteed place in AI answers is selling certainty the systems themselves do not offer."
        ]
      }
    ],
    "faqs": [
      {
        "a": "No. Search results still drive most traffic, and AI answers draw on the same indexed web that search engines use. AEO is a layer on top of SEO, not a replacement for it. A site with weak SEO foundations will struggle at AEO too, because the systems cannot cite pages they cannot find or understand.",
        "q": "Is AEO replacing SEO?"
      },
      {
        "a": "Usually not. Shape the strong pages you already have into answer-ready pages, with a direct answer near the top and question headings. Separate thin pages written only to chase AI citations rarely help, and they split your authority across more URLs than you need.",
        "q": "Do I need separate pages for AEO?"
      },
      {
        "a": "No. Structured data can make your business details easier to interpret, especially names, contact information and official profiles, but it does not force a citation. It works best as support for accurate visible content, not as a substitute for it.",
        "q": "Does structured data guarantee a citation?"
      },
      {
        "a": "Ask the same list of real buyer questions in ChatGPT and in Google's AI results on a regular schedule, and record whether your business is named and which sources are cited. Look for more frequent and more accurate mentions over weeks, not for a single appearance. Answers vary by wording, location and timing, so judge progress over several checks.",
        "q": "How do I know if AEO is working?"
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
        "label": "Google Search Central: Introduction to structured data",
        "url": "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
      },
      {
        "label": "Google Search Central: SEO Starter Guide",
        "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
      }
    ],
    "relatedService": {
      "href": "/services/aeo",
      "label": "See our AEO service"
    }
  },
  {
    "slug": "link-building-services-for-ecommerce-website",
    "title": "Link Building Services for an Ecommerce Website: How to Choose the Right One",
    "seoTitle": "Choosing a Link Building Service for Ecommerce",
    "metaDescription": "Choosing a link building service for an ecommerce website? Learn the checks that matter: site quality, content standards, reporting and replacement cover.",
    "excerpt": "Choosing a link building service for a store is mostly about process, not price. Here is the checklist I would use before signing anything.",
    "category": "Ecommerce SEO",
    "keyword": "link building services for ecommerce website",
    "publishDate": "2026-11-23",
    "readingMinutes": 7,
    "intro": [
      "The right link building service for an ecommerce website is one that understands your products, your margins and which pages make the money, then buys few, relevant links to the category pages that matter, and reports every placement with a live URL you can check yourself. Price alone tells you almost nothing. The questions you ask before signing tell you far more.",
      "I have placed links for stores for seven years, and the pattern is consistent. Stores that choose on price alone end up with links their customers would never see, on sites their market would never read. Stores that choose on process, site criteria, content quality and honest reporting get links that still work a year later. This guide is the checklist I would use if I were hiring for my own store."
    ],
    "keyTakeaways": [
      "Choose a service by its process and site criteria, not by its price per link.",
      "Category pages usually deserve links first, because they match how shoppers search.",
      "Ask to see example sites, content samples and a real report before you sign anything.",
      "Relevance and a real audience matter more than a single authority score.",
      "A small, well targeted first order tests a provider better than a large blind commitment."
    ],
    "sections": [
      {
        "heading": "Start with what your store actually needs",
        "paragraphs": [
          "Before talking to any provider, work out which pages deserve links. For most stores that means category pages first, because shoppers search for product types rather than single products. Check which categories sit just off page one, which have useful content but few links, and which carry the best margins. A provider that never asks about your products, your competitors or your margins is selling a standard package, not a service for your store.",
          "Timing matters too. A store heading into its peak season needs links live before the season, not during it, because placements take weeks to be found and assessed. Be honest about budget as well. A good provider will tell you when a small budget is better spent on fewer, better placements than on a long list of weak ones."
        ]
      },
      {
        "bullets": [
          "Real organic traffic from your market, not traffic bought or borrowed.",
          "Topical relevance: a site your customers would recognise and trust.",
          "Editorial standards: an editor who says no to weak pitches.",
          "A real audience: comments, shares, or a visible community around the content."
        ],
        "heading": "Judge the sites, not the sales pitch",
        "paragraphs": [
          "The sites matter more than anything else in the quote. Ask how sites are chosen and what checks are run before outreach. A serious provider can describe the criteria plainly: genuine traffic, topical relevance, editorial standards, and a real audience. If the answer is a secret list, a single authority score, or a promise of a set number of links for a set price with no mention of quality, walk away.",
          "Authority scores from SEO tools are a starting point, not a verdict. A site can carry a strong score and still publish thin articles on every topic for anyone who pays. A smaller, genuinely relevant site in your niche, read by the people who buy what you sell, is often the better placement. Ask to see example placements, and read the pages yourself before you judge."
        ]
      },
      {
        "heading": "How the content should work",
        "paragraphs": [
          "Guest posts for a store should read like articles for the host site's readers, not adverts for your products. The best topics come from your own customers: care guides, buying advice, honest comparisons, and the mistakes people make before they buy. A writer who understands the niche can produce that. A writer handed a keyword and a link target cannot, and the result reads like filler around a sales link.",
          "Anchor text deserves the same care. Branded and natural anchors, pointing at the most useful page for the reader, look like a genuine recommendation. Exact match commercial anchors repeated across many placements look like a campaign, because they are one. Agree the anchor approach before work starts, and insist on approving content before it goes live."
        ]
      },
      {
        "heading": "Pricing models and what they hide",
        "paragraphs": [
          "Per placement pricing is easy to understand: you pay for each agreed link that goes live. It suits a defined test, but it can reward volume over judgement, so the agreement should cover site criteria, content standards and what happens if a link is removed. A monthly retainer buys a programme: strategy, outreach, content and reporting over time. It suits competitive markets where steady growth matters more than a one off batch.",
          "Very cheap per link pricing usually saves money in one of three places: site vetting, content quality, or outreach effort. Those savings show up later as weak results, lost placements, or a profile you would not want inspected closely. Expensive work should also explain itself. A higher price should buy visible things: stricter site selection, better writing, clearer reporting and replacements when something goes wrong."
        ]
      },
      {
        "bullets": [
          "Will you see every live URL, anchor text and placement context in a report?",
          "Can you approve content and anchor text before anything goes live?",
          "What happens if a link is removed or a page is taken down?",
          "Does the provider promise rankings? A guarantee is a warning sign.",
          "Can you start with a small test order before a larger commitment?"
        ],
        "heading": "The checks before you sign",
        "paragraphs": [
          "Ask every provider the same questions and compare the answers side by side. Which sites will be targeted, and what checks are run before outreach? Who writes the content, and can you approve it? Will you see the live URLs in a report? What happens if a placement is lost? The answers reveal the real scope far better than a headline price.",
          "Start small, whatever the sales pitch says. A sensible first order tests quality, communication and reporting before a larger commitment. If the first placements are relevant, well written and properly reported, scale up. If they are not, you have learned that cheaply, and your store has not been tied to a long contract built on weak links."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Mostly category pages. They match how people search, they can carry a broader range of links naturally, and they pass value down to the products beneath them. Individual product pages earn links best through roundups, reviews and buying guides, where the product itself is the subject of the page.",
        "q": "Should links point to product pages or category pages?"
      },
      {
        "a": "There is no fixed number. Start with a small test batch on the categories that matter most, watch how your pages respond over the following weeks, and scale the placements that worked. A steady pace that matches your traffic and content growth looks natural because it is natural.",
        "q": "How many links does a new store need to start?"
      },
      {
        "a": "Placements usually take weeks to appear in rankings, because Google has to find the link, understand the page and re-evaluate the result. The effect on sales takes longer still. Judge a campaign over a quarter rather than a fortnight, and watch category rankings and organic revenue instead of counting links.",
        "q": "What is a realistic timeline for results?"
      },
      {
        "a": "No, and a guarantee should make you cautious. Rankings depend on your site, your content, your competitors and the search itself, not only on links. An honest provider promises a clear process, agreed site criteria and verifiable reporting, not a position.",
        "q": "Can a service guarantee first page rankings?"
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
      },
      {
        "label": "Google Search Central: Introduction to structured data",
        "url": "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
      }
    ],
    "relatedService": {
      "href": "/services/complete-ecommerce-management",
      "label": "See our ecommerce service"
    }
  },
  {
    "slug": "what-are-niche-edits",
    "title": "What Are Niche Edits? How Link Insertions Work in Practice",
    "seoTitle": "What Are Niche Edits? Link Insertions Explained",
    "metaDescription": "A niche edit places your link inside an article already published and ranking. Learn how link insertions work, what makes a good one, and the risks to avoid.",
    "excerpt": "A niche edit inserts your link into an article that already exists and already ranks. Here is how it works, when it beats a guest post, and what to check first.",
    "category": "Link Building",
    "keyword": "what are niche edits",
    "publishDate": "2026-11-24",
    "readingMinutes": 7,
    "intro": [
      "A niche edit, also called a link insertion, is a link placed inside an article that is already published, already indexed and often already ranking. Instead of commissioning a new article, the site owner edits an existing page, usually by adjusting a sentence or adding one, so your link joins content that search engines have already assessed.",
      "After seven years placing both guest posts and niche edits, I use niche edits when a client has a strong page sitting just short of the positions it wants. They are faster than guest posts and often cheaper, because there is nothing new to write. The trade off is control: you inherit someone else's context, so checking the page matters more than checking the price."
    ],
    "keyTakeaways": [
      "A niche edit inserts your link into an existing article rather than creating a new one.",
      "They work best for pushing a specific page that is already close to ranking.",
      "The value comes from the page itself: its relevance, history and real readers.",
      "You control less of the surrounding text, so inspect the page before paying.",
      "Both niche edits and guest posts are paid links, so relevance and quality decide the risk."
    ],
    "sections": [
      {
        "heading": "How a niche edit is arranged",
        "paragraphs": [
          "The process starts with finding pages, not sites. The outreach targets articles that already cover your topic: a guide, a comparison, a roundup or a resource page that is already indexed and, ideally, already ranking for searches your customers make. The pitch is simple: your page adds something genuinely useful to their article, and a link would help their readers.",
          "If the owner agrees, they adjust a relevant sentence or add one, and your link goes live inside the existing content. You then check the live page yourself: the link works, the anchor text is natural, and the sentence reads properly in context. Record the URL, the anchor text and the date, because every placement you buy should be traceable later."
        ]
      },
      {
        "heading": "Why existing pages carry value",
        "paragraphs": [
          "A new guest post starts from nothing. It must be written, published, crawled and assessed before it can support your page, and that takes time. An existing article already has history behind it. It has been crawled, it may already rank, and it may already receive readers who trust the site. Your link joins that existing value instead of waiting for a new page to earn it.",
          "That is also why the page itself matters so much. A niche edit on a genuine, well maintained guide is a strong placement. The same link on a forgotten page that nobody reads, or a page stuffed with unrelated outbound links, carries little value and adds risk. The format is not the asset. The page is."
        ]
      },
      {
        "bullets": [
          "The page is genuinely relevant to your product or service.",
          "The article is real, well written and still maintained by its owner.",
          "Your link fits a sentence a reader would find useful, not a forced insertion.",
          "The anchor text is branded or natural, not a commercial keyword repeated everywhere.",
          "The page links out sparingly, to sources a reader would expect."
        ],
        "heading": "What makes a good niche edit",
        "paragraphs": [
          "Judge the page the way a reader would. Would someone landing on it find it useful? Does the article read like it was written for a person, or assembled around outbound links? Is your link placed where a reader would naturally want more detail, or dropped into a paragraph that has nothing to do with your page? Those checks reveal more than any single metric.",
          "Also check that the page is still alive. A guide last updated years ago, on a site that no longer publishes, is a weaker home than a page its owner still looks after. Freshness is not the deciding factor, but a maintained page is more likely to keep its rankings, its readers and your link."
        ]
      },
      {
        "heading": "The risks, stated plainly",
        "paragraphs": [
          "Niche edits are paid links, and Google's spam policies are clear that buying links to manipulate rankings counts as link spam. Anyone who tells you the format is completely safe is selling you something. The practical question is whether the placement would still make editorial sense if rankings did not exist: a relevant link, on a genuine page, that helps the reader.",
          "The worst placements share the same signs. Insertions into hacked sites, irrelevant articles, or pages already stuffed with unrelated outbound links are the ones that cause trouble. So are sudden bursts of identical anchor text across many pages. Keep anchor text mostly branded or natural, link to pages that genuinely help the reader of the host article, and build at a pace that matches the growth of your site."
        ]
      },
      {
        "heading": "Niche edits vs guest posts",
        "paragraphs": [
          "Neither format wins outright. A guest post gives you a new article, control over the context, and a fresh referring domain, but it costs more and takes weeks. A niche edit is faster and usually cheaper, and it places your link inside a page with history, but you control far less of the text around it. The choice depends on what your site needs next.",
          "If your site is new, or the page you want to rank has thin content and no links yet, guest posts build the base. If you already have solid pages sitting just outside the positions you want, niche edits are often the smarter spend. Most mature campaigns end up using both: guest posts to widen the base, niche edits to push the specific pages that are close."
        ]
      }
    ],
    "faqs": [
      {
        "a": "No. An older page that is indexed, relevant and still maintained can be an excellent home for a link, because it has history and often rankings behind it. What matters is whether the page is real, whether it fits your topic, and whether its owner still looks after it.",
        "q": "Do niche edits pass less value because the page is older?"
      },
      {
        "a": "There is no standard price. It depends on the authority of the site, whether it has genuine traffic, how commercial your niche is, and how selective the editor is. Judge each placement on the page itself, and be cautious of bulk offers that promise many insertions for very little money.",
        "q": "How much should a niche edit cost?"
      },
      {
        "a": "Yes. The site owner controls the page, so they can edit or remove the link at any time. That is why you should check the placement is live after payment, keep a record of it, and agree in advance what happens if it disappears. A provider that replaces lost placements is worth more than one that does not.",
        "q": "Can a niche edit link be removed later?"
      },
      {
        "a": "Google's spam policies cover paid links bought to manipulate rankings, whatever the format. A relevant link on a genuine page, placed where it helps the reader, is a very different proposition from a bulk insertion into unrelated pages. Relevance, editorial quality and honest disclosure are what separate the two.",
        "q": "Are niche edits allowed by Google?"
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
      "href": "/link-building",
      "label": "See our link building service"
    }
  },
  {
    "slug": "link-building-for-ecommerce",
    "title": "Link Building for Ecommerce: A Step-by-Step Plan for a New Store",
    "seoTitle": "Link Building for Ecommerce: Step-by-Step Plan",
    "metaDescription": "Link building for ecommerce works best as a sequence: free supplier links first, then niche edits, guest posts and content worth citing. Here is the plan.",
    "excerpt": "A new store should build links in a set order: free supplier links, niche edits, guest posts, then content that earns links. Here is the plan, step by step.",
    "category": "Ecommerce SEO",
    "keyword": "link building for ecommerce",
    "publishDate": "2026-11-25",
    "readingMinutes": 7,
    "intro": [
      "Link building for ecommerce works best as a sequence: first claim the free links from suppliers, brands and partners, then place niche edits inside the buying guides your customers already read, then add guest posts on niche blogs, and finally publish content on your own store that earns links by itself. Done in that order, a modest budget reaches the pages that make the money. Done out of order, the same budget disappears.",
      "I have run this sequence for stores of every size over seven years, and the order matters more than the spend. A new store that buys guest posts before claiming its supplier links is paying for links it could have had for the price of a polite email. A store that skips content and buys only placements has nothing for other sites to cite. This is the plan I would follow for a new store, step by step."
    ],
    "keyTakeaways": [
      "Claim free supplier, brand and partner links before spending anything.",
      "Point most links at category pages, because they match how shoppers search.",
      "Niche edits in buying guides give the fastest return for a specific page.",
      "Guest posts belong on niche blogs your customers read, not on general sites.",
      "Publish useful content on your own store so links can be earned, not only bought."
    ],
    "sections": [
      {
        "bullets": [
          "Ask every brand you stock for a link from its stockist or where-to-buy page.",
          "Complete the partner, supplier and directory profiles that are missing your website link.",
          "Turn offline relationships, sponsorships and local events into online mentions where it feels natural."
        ],
        "heading": "Step 1: claim the links you have already earned",
        "paragraphs": [
          "Before spending anything, list every business relationship your store already has. The brands and manufacturers whose products you stock usually maintain stockist or where-to-buy pages, and many will add your link if you simply ask and make it easy for them. Suppliers, distributors, fulfilment partners, local business groups and even the software your store runs on all belong on the same list.",
          "These links are rarely glamorous, but they are relevant, they are free, and they come from real businesses with real websites. They also tend to be the links competitors forget to claim. One morning of polite emails here can produce more durable value than a month of cold outreach to strangers."
        ]
      },
      {
        "heading": "Step 2: fix the pages your links will point to",
        "paragraphs": [
          "A link is only as useful as the page it lands on. Before buying placements, make sure your category pages deserve them: clear titles, useful introductory content, filters that work, genuine reviews, and internal links that connect categories to the products beneath them. A thin category page with no content gives Google little reason to rank it, however many links point at it.",
          "Check the basics as well. Every category page should load quickly, work properly on a phone, and answer the questions shoppers ask before they buy. If a page would not convince a visitor, it will not convince a search engine either. Fixing the page first means every link you build afterwards lands on something worth ranking."
        ]
      },
      {
        "heading": "Step 3: buy niche edits in the guides shoppers read",
        "paragraphs": [
          "Every niche has buying guides, comparison pages and roundups that already rank for the searches your customers make before they spend money. If your product or store is a genuine fit for one of those pages, a niche edit, where the owner inserts your link into the existing content, is often the most cost-effective paid placement a small store can buy.",
          "The page already exists, it already ranks, and it is already read by people comparing options, which is precisely the audience you want. Keep the bar strict: the guide must be genuine, your product must honestly belong in it, and the link should point to the most useful page on your store, usually the category or product page the guide is actually discussing."
        ]
      },
      {
        "heading": "Step 4: add guest posts on niche blogs",
        "paragraphs": [
          "Guest posts still work for ecommerce when the host site is right. A well written article on a respected blog in your niche, read by the people who buy what you sell, is worth more than a pile of posts on general sites that publish any topic for a fee. You are buying relevance and audience, not just a link.",
          "Pitch topics that genuinely help the blog's readers and suit your experience: care guides, buying advice, honest comparisons, common mistakes to avoid. Write the article properly, link naturally to a helpful page on your store rather than forcing a product link into every paragraph, and treat each placement as a small piece of publishing rather than a transaction to rush through. One or two a month, done well, beats a burst of weak posts."
        ]
      },
      {
        "heading": "Step 5: publish content worth citing",
        "paragraphs": [
          "Links become far easier to earn when your store contains something linkable beyond product pages. Buying guides built on the questions your customers genuinely ask, sizing and care resources, comparison pages and original observations drawn from your own sales and returns all give bloggers, journalists and guide writers a reason to cite you instead of a bigger competitor.",
          "This route is slower than buying placements, so it should run alongside them rather than instead of them. The payoff compounds: the same content that earns links also answers pre-purchase questions, which helps conversion when the traffic arrives. Keep those pages clear and well structured, with sensible structured data, so search engines can understand them and surface them properly. Then measure quarterly, and let the results decide where the next links go."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Links influence rankings first and sales second, so expect a lag between the two. New placements typically take weeks to show up in rankings, and those rankings then have to meet real search demand. Judge a campaign over a quarter rather than a fortnight, and watch category rankings and organic revenue instead of counting links.",
        "q": "How long before link building affects sales?"
      },
      {
        "a": "There is no fixed number, and anyone who gives you one is guessing. A steady, small number of relevant placements each month, matched to your content and traffic growth, looks natural because it is natural. Relevance and consistency matter far more than hitting a monthly quota.",
        "q": "How many links should a new store build each month?"
      },
      {
        "a": "Mostly, no. Category pages and guides match how shoppers search, and they pass value down to the products beneath them. The homepage earns brand links naturally through directories, partnerships and press. Point deliberate link building at the pages that need to rank.",
        "q": "Should I build links to the homepage?"
      },
      {
        "a": "Look wider. Supplier and manufacturer links, trade press, local press, product roundups, resource pages and comparison sites all work. A store in a quiet niche can also earn links by publishing the guide its market is missing, then letting other sites find it. Fewer options means stricter quality, not a reason to buy weak placements.",
        "q": "What if my niche has very few blogs?"
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
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      }
    ],
    "relatedService": {
      "href": "/services/complete-ecommerce-management",
      "label": "See our ecommerce service"
    }
  },
  {
    "slug": "guest-post-outreach-email-template",
    "title": "Guest Post Outreach Email Template: One That Gets Replies",
    "seoTitle": "Guest Post Outreach Email Template That Gets Replies",
    "metaDescription": "A guest post outreach email that gets replies is short, specific and written for one editor. Copy the template and learn the mistakes that kill replies.",
    "excerpt": "Most outreach fails because it is generic. This template is short, specific and written for one editor, with the mistakes that send pitches to the bin.",
    "category": "Guest Posting",
    "keyword": "guest post outreach email template",
    "publishDate": "2026-11-26",
    "readingMinutes": 7,
    "intro": [
      "A guest post outreach email that gets replies is short, specific and written for one editor. It names the site, names a topic their readers would actually want, shows you have read the site, and asks for one clear next step. Most outreach fails because it does the opposite: a generic subject line, a template body, and a pitch that could have been sent to a thousand sites.",
      "I have sent and received outreach for seven years, and the emails I answer share the same shape. They respect the editor's time, they prove the sender knows the site, and they make the next step easy. This guide gives you that shape as a template you can copy, plus the mistakes that send most pitches straight to the bin."
    ],
    "keyTakeaways": [
      "Personalise the first two lines: the site, a recent article, and why your topic fits their readers.",
      "Pitch a topic, not a link: editors accept ideas, not requests for placement.",
      "Keep it under 150 words and ask for one clear next step.",
      "Follow up once, a week later, with something new to add.",
      "Track every reply so you never pitch the same editor twice with the same idea."
    ],
    "sections": [
      {
        "bullets": [
          "Subject: Guest post idea for [Site Name]: [Your Topic]",
          "Hi [Name], I enjoyed your recent article on [Article Topic], especially [One Specific Point].",
          "I write about [Your Niche] and I would like to contribute a piece on [Your Topic], covering [Two or Three Points] for your readers.",
          "I have written for [One Relevant Site, if true] and I can send a draft by [Date].",
          "Would you like me to send a short outline first? Thanks, [Your Name]"
        ],
        "heading": "The template",
        "paragraphs": [
          "Copy this shape and fill in the brackets for each site. Do not send it unchanged to a list. The personalisation is the point, and an editor can tell within two lines whether you have read their site or only their contact page.",
          "That is the whole email. It names the site, proves you read it, pitches one clear topic, shows a little credibility without boasting, and asks for one small next step. An editor can answer it in a minute, which is exactly why it gets answered."
        ]
      },
      {
        "heading": "Why each part works",
        "paragraphs": [
          "The subject line does two jobs: it says guest post, so the editor knows what the email is, and it names a topic, so they can judge it without opening anything else. The opening line proves you have read the site, which separates you from the bulk pitches that open with praise for a site the sender has never visited. One specific detail from a real article is worth more than a paragraph of flattery.",
          "The pitch itself is a topic, not a link. Editors accept ideas for their readers, not requests for placement on their site. The credibility line is short and honest: one relevant publication if you have one, and nothing invented if you do not. The close asks for an outline, not a yes to the whole article, because a small step is easier to agree to than a large one."
        ]
      },
      {
        "bullets": [
          "Guest post idea for [Site Name]: [Your Topic]",
          "A [Topic] guide your readers asked about?",
          "Contribution idea: [Specific Angle] for [Site Name]",
          "Quick question about a guest post on [Topic]"
        ],
        "heading": "Subject lines that get opened",
        "paragraphs": [
          "Good subject lines are specific, honest and short. They name the site or the topic, and they say what the email is. Avoid anything that hides the purpose, such as a vague question or a subject line that pretends to be a reply to an earlier thread. Editors deal with enough misleading email already, and a trick subject line is a fast way to lose trust before the email is even read.",
          "Test subject lines in small batches and keep a note of what earns replies. A change of a few words can make a real difference, but the subject line cannot rescue a generic body. The two work together: the subject earns the open, and the first two lines earn the reply."
        ]
      },
      {
        "bullets": [
          "A generic greeting with no mention of the site or its content.",
          "Pitching a link instead of a topic, in the first email.",
          "An email so long the editor has to scroll to find the point.",
          "Several asks at once: a link, a rate, a deadline and a call.",
          "Following up the next day, or following up four times."
        ],
        "heading": "The mistakes that kill replies",
        "paragraphs": [
          "Most outreach fails for simple reasons. The sender never names the site, so the editor assumes the email went to hundreds of people. The pitch is a link request dressed as a topic. The email is long enough to need scrolling. Or the sender follows up too soon, too often, or with nothing new to say. Each of those is easy to fix, and each fix raises the reply rate more than any clever trick.",
          "The other common mistake is pitching the wrong site entirely. A topic that fits your business does not always fit their readers. Read the site's recent articles, check who they write for, and only pitch where your topic genuinely belongs. A polite no from the right site is better than a placement on a site nobody in your market reads."
        ]
      },
      {
        "heading": "Follow up once, and track everything",
        "paragraphs": [
          "If there is no reply after a week, send one short follow up. Add something new: a different angle, a recent article of theirs you liked, or a note that the outline is ready. Keep it to three or four lines and make it easy to answer. Then stop. Repeated follow ups do not wear an editor down. They teach the editor to ignore you.",
          "Track every email in a simple sheet: the site, the editor, the topic pitched, the date sent, the reply, and the outcome. That record stops you pitching the same editor twice with the same idea, which is one of the fastest ways to burn a relationship. It also shows you, over time, which topics and subject lines actually earn replies, so each batch gets a little better than the last."
        ]
      }
    ],
    "faqs": [
      {
        "a": "Under 150 words is a good target. An editor should be able to read it in under a minute and answer it in the same time. If your pitch needs more space, the topic is probably too broad, or you are explaining too much before the editor has shown interest.",
        "q": "How long should an outreach email be?"
      },
      {
        "a": "No. Pitch the topic first and discuss the link once the idea is accepted. Editors accept ideas for their readers, not requests for placement. Raising the link too early changes the conversation from publishing to selling, and most editors will end it there.",
        "q": "Should I mention the link in the first email?"
      },
      {
        "a": "Small batches, properly personalised, beat large blasts. Twenty thoughtful emails will usually earn more replies than two hundred generic ones, and they will not damage your reputation with editors you may want to work with again. Personalisation takes time, so treat outreach as a weekly habit, not a one day campaign.",
        "q": "How many sites should I email at once?"
      },
      {
        "a": "Check the pitch before blaming the inbox. Read the sites again: does your topic genuinely fit their readers? Is the subject line specific? Does the first line prove you read the site? A low reply rate usually means the pitch, the targeting or both. Fix those first, then test a new subject line on the next batch.",
        "q": "What if nobody replies?"
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
        "label": "Google Search Central: Qualify your outbound links to Google",
        "url": "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
      },
      {
        "label": "Google Search Central: How to make your links crawlable",
        "url": "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      }
    ],
    "relatedService": {
      "href": "/guest-posts",
      "label": "See our guest post service"
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
  // Parse at midday UTC so the London date never shifts a day either way.
  const d = new Date(`${iso}T12:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
