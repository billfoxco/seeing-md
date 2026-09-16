# SEEING.md

**The perception behind intent · Version 0.2.1**

`SEEING.md` is a portable perception specification for people and AI. It helps make visible the human assumptions, interpretations, and inherited meanings that can shape a request before they are amplified through an answer, decision, design, or system.

Its central question is simple:

> What shaped the intent?

The substance of the file comes largely from Bill Fox's book, *The Perception Miracle*, and the more than 500 explorations that shaped it. Its form was influenced by Brian Gardner's exploration of `DESIGN.md` as a way to make design intent legible to AI.

## Use it

No technical experience is needed.

1. Download [SEEING.md](https://seeing.md/SEEING.md).
2. Attach it to an AI conversation, include it with a working brief, or add it to a project's files.
3. Tell the AI:

> Read `SEEING.md` before responding. Apply it when the work involves people, judgment, strategy, interpretation, or a consequential decision.

The file will not necessarily be read automatically. Name it explicitly when beginning important work.

For repeated project use, add this to the project's working instructions:

> Before work involving judgment, people, strategy, interpretation, or consequential decisions, read `SEEING.md`. Use it to examine the framing and surface relevant assumptions before acting. Apply it proportionally; do not slow straightforward technical work unnecessarily.

## The movement

**NOTICE → QUESTION → SEE AGAIN → ACT**

Notice the first meaning that appeared. Question what may be shaping it. Remain open long enough to see again. Act from what becomes clearer. This is an orientation, not a formula.

## What to expect

The file will not improve every output, and it does not make AI perceptive or self-aware. When the framing matters, it should help the system distinguish facts from interpretations, surface consequential assumptions, and ask one clear question when missing information or meaning could materially change the result.

When a gap is minor, the AI should state its assumption briefly and continue. Routine work should remain routine.

The human remains responsible for supplying context, responding to questions, deciding what matters, and judging what should be acted upon. The file cannot guarantee clear seeing, eliminate bias, determine truth, or resolve every category of AI risk.

## Current status

Version `0.2.1` is experimental. The project lives at [seeing.md](https://seeing.md), and its public source and history live in this repository.

`SEEING.md` at the repository root is the canonical file. The site build copies it into the public download path automatically, so the specification is maintained in only one place.

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
- What assumption or framing did the system surface?
- Did it ask an appropriate question?
- Did the interruption materially improve the result?
- Where did the file add unnecessary friction?
- What behavior should be preserved or changed?

Share a case by emailing [hello@seeing.md](mailto:hello@seeing.md). No repository account is needed.

For source contributors, see [CONTRIBUTING.md](CONTRIBUTING.md) and [examples](examples) for the contribution process, initial cases, and activation patterns.

## Foundation and practice

The ideas behind `SEEING.md` are explored more fully in *The Perception Miracle*. The Perception Space provides an ongoing practice through images, stillness, inquiry, and conversation.

The file is open. The practice is relational.

## License

The text and documentation are licensed under [Creative Commons Attribution 4.0 International](LICENSE.md).
