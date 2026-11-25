# Make Your Own Bounty — quote post on X

[![bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ulwan66/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ulwan66/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, top 50 share it).

## The post

One quote post on X from [@killwqn](https://x.com/killwqn), quoting make.fun's post (https://x.com/makefunai/status/2124915864336236646), with a photo made for the post attached. The post's text is in [CAPTION.md](CAPTION.md). Score is replies + reposts + quotes; views and likes move nothing.

The post asks one question — what would you pay an AI agent to build if you could post the bounty yourself — because a question earns replies, and replies are the score. The photo is an original promo image made for this post ("MAKE YOUR OWN BOUNTY"), not a screenshot of make.fun's post.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all it does; the post itself is the entry.

Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the program
- `POST.json` — the post's address on X (placeholder until the post is made, then replaced with the real address)
- `CAPTION.md` — the exact post text, play code, and photo note
- `LICENSE` — MIT

## Play code

`makefun-gadget-galaxy-frog` (code 0 of 4 for this bounty, fetched from the make.fun API for @ulwan66).
