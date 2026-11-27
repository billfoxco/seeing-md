# SEEING.md

**The perception behind intent · Version 1.8.0 · 27 November 2026**

`SEEING.md` is a portable perception specification for people and AI. The practice begins in everyday life, before it becomes an instruction to a system. It helps make visible the human assumptions, interpretations, and inherited meanings that can shape a request before they are amplified through an answer, decision, design, or system.

What if the smallest change with the greatest consequence isn't a change in what we do, but a change in how we see?

Its central question is simple:

> What shaped the intent?

The substance of the file comes largely from Bill Fox's book, *The Perception Miracle*, and the more than 500 explorations that shaped it. Its form was influenced by Brian Gardner's exploration of `DESIGN.md` as a way to make design intent legible to AI.

## Use it

No technical experience is needed. You can begin without AI: bring to mind something you feel sure you understand and ask, **What is this? What is it for?** Leave room for the first answer to be incomplete.

1. Download [SEEING.md](https://seeing.md/SEEING.md), the file linked from the homepage.
2. Attach it to an AI conversation, include it with a working brief, or add it to a project's files.
3. Tell the AI:

> Read `SEEING.md` before responding. Apply it when the work involves people, judgment, strategy, interpretation, or a consequential decision. Question what may be shaping the request, including the assumptions this file brings to the inquiry.

The file will not necessarily be read automatically. Name it explicitly when beginning important work.

For your own work, write your first take before you open AI, in your own words. Then ask the AI what you have already decided in it. The AI has something of yours to examine, and you keep sight of which thinking was yours.

For repeated project use, add this to the project's working instructions:

> Before work involving judgment, people, strategy, interpretation, or consequential decisions, read `SEEING.md`. Use it to examine what may be shaping the request, including the assumptions in SEEING.md, before acting. Apply it proportionally; do not slow straightforward technical work unnecessarily.

## The movement

**NOTICE → QUESTION → SEE AGAIN → ACT**

**Notice** the meaning that was already there when you looked. What have you decided about the people involved, including yourself, and what is holding that judgment doing to you? Pay attention to what feels at stake, what you’ve set aside, what you hear when a routine is interrupted, and which voice is answering: what you learned, or what you know.

**Question** what the interpretation depends on. What would have to be true for it to hold? What evidence could change your reading? Notice whom the plan asks to change and what you can reconsider or do from where you stand.

**See again.** If someone’s meaning could change your response, ask them and give them time to finish. Leave room for their answer to change what you see.

**Act** from what becomes clearer. When the stated purpose and the proposed action pull apart, decide what the next action should serve. Notice what keeps the old assumption in place, and make the smallest change that matches what you now see.

## What to expect

The file will not improve every output, and it does not make AI perceptive or self-aware. When the framing matters, it should help the system distinguish facts from interpretations, test consequential premises against the evidence, and make visible whose change a plan depends on. When missing information or meaning could materially change the result, the AI should ask one clear question and wait for the answer.

When a gap is minor, the AI should state its assumption briefly and continue. Routine work should remain routine. The pause is not a brake: an assumption caught while it is still one decision costs less than one corrected after it has been repeated many times.

In summaries and reviews, it should make the scope of the supplied material clear, distinguish recorded information from inference, and ground possible connections in that material. An empty field does not establish avoidance; a single snapshot does not establish progress or decline. When a result has gone wrong, it should trace the outcome to the framing and assumptions that shaped it before attributing it to a person: ask what we were all assuming before asking who got it wrong. The original understanding may remain appropriate after examination. Disagreement with the inquiry is not evidence that the inquiry is right.

When a request asks AI to make a conclusion more persuasive, the file may help examine what the person feels a need to defend, if the words support that possibility. It should not infer fear or motive from disagreement, urgency, or confidence alone. When a request arrives with its answer already in place, it may help make the source of that answer visible, without presuming whether it reflects learned habit or present knowing; a model draws only on what it has learned and can return a learned answer fluently, as agreement. When a request rests on a prediction, it may examine whether that prediction is being treated as settled. When a request is framed by alarm, blame, or pressure to act now, it should surface that framing before answering inside it; urgency is not evidence. When a request seeks to control what can only be influenced, it may make that distinction visible. When work defaults to a habitual structure, it may ask what that structure assumes before following it. When an assumption appears in its own answer, it should check whether that assumption was built into how the question was asked. When a surfaced assumption conflicts with an established plan, it should propose the smallest consequential adjustment rather than a full rewrite or a silent reversion.

Expertise, original evidence, rigorous methods, and independent verification can strengthen a result. They do not necessarily establish that the original question or criteria for success were well framed. `SEEING.md` makes those choices available for examination without replacing technical rigor. Likewise, offering several perspectives on a request is not the same as examining the one it already stands in.

The human remains responsible for supplying context, responding to questions, deciding what matters, and judging what should be acted upon. Human judgment also remains open to examination: experience, intuition, and confidence may reflect expertise or familiar conclusions. The file cannot guarantee clear seeing, eliminate bias, determine truth, or resolve every category of AI risk.

## An application: Review Now

[Perception Tools](https://perceptiontools.xyz) applies the file in Review Now, an AI review of selected workspace items. It supplies the full specification, identifies the version used, and links observations to source items. Reference notes are optional; the review does not change the workspace. A versioned saved copy is used and disclosed if the live specification cannot be reached.

This is an implementation example, not evidence of established effectiveness. See the [illustrative review case](examples/now-review.md) for the distinction between recorded content and an unsupported interpretation.

The [before-going-deeper example](examples/before-going-deeper.md) shows how scrutiny of a problem's definition and success criteria can complement expertise, original data, and external checks.

Short cases for leaders and teams show the same move in everyday requests: [resistance to change](examples/org-change.md), [the engagement score](examples/engagement.md), [the underperformer](examples/underperformer.md), [getting aligned](examples/alignment.md), and [the employment gap](examples/employment-gap.md).

## Current status

Version `1.8.0` (27 November 2026) is the current version. The project lives at [seeing.md](https://seeing.md), and its public source and history live in this repository. See the [changelog](CHANGELOG.md) for what changed.

[`SEEING.md`](SEEING.md) at the repository root is the canonical specification. The site build copies it to `public/SEEING.md`, served at [https://seeing.md/SEEING.md](https://seeing.md/SEEING.md), so the specification is maintained in only one place.

## Visual introduction

[How It Works](https://seeing.md/how-it-works/) introduces the purpose and use of SEEING.md in five sections, with two images from *The Perception Miracle* and an illustrative leadership request shown with and without SEEING.md. Click an image to expand it; close it with Escape, the close button, or the backdrop. Read it as a scrolling page or use Presentation view (arrow keys, Home/End, Escape to return). The activation instructions and release details come from the canonical specification at build time. The former address, /before-you-ask/, redirects here.

## Website maintenance

The landing page is a static Astro site designed for Cloudflare Workers with Static Assets.

```text
npm install
npm run dev
```

For a Git-connected Cloudflare Workers deployment, use:

- Build command: `npm run build`
- Deploy command: `npm run deploy`

`wrangler.jsonc` tells Cloudflare to publish the generated `dist` directory as static assets. No Worker code is required.

## Learn from a case

The most useful contributions describe what happened in practice:

- What work was being done?
- What assumption or framing, if any, did the system surface?
- Did it introduce an unsupported interpretation of its own?
- Did it ask an appropriate question, or appropriately continue without one?
- Did the interruption materially improve the result?
- Where did the file add unnecessary friction?
- What behavior should be preserved or changed?

Share a case by emailing [hello@seeing.md](mailto:hello@seeing.md). No repository account is needed.

For source contributors, see [CONTRIBUTING.md](CONTRIBUTING.md) and [examples](examples) for the contribution process, initial cases, and activation patterns.

## Foundation and practice

The ideas behind `SEEING.md` are explored more fully in *The Perception Miracle*. The Perception Space provides an ongoing practice through images, stillness, inquiry, and conversation.

The file is open. The practice is relational.

## License

© 2026 Bill Fox.

The `SEEING.md` specification, text, and documentation are licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE.md).

When sharing or adapting it, credit Bill Fox, link to [seeing.md](https://seeing.md) and the license, and indicate any changes.
