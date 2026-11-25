// A working post-x-promote-make-your-own-bounty-01 entry (Node 22, standard
// library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has
// to do. The entry is the post itself: one post of your own on X that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) or links to it, a
// photo of its own attached, make.fun or the @makefunai tag and your play
// code in its text; POST.json names the post, and the house reads its
// replies, reposts and quotes from X. Nothing this program writes about the
// post is scored.
//
// The POST.json in this repository holds a placeholder address until the
// post is made on X; replace it with the post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BOT_DIR = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const postPath = join(BOT_DIR, 'POST.json');
if (!existsSync(postPath)) {
  console.warn(`POST.json not found in ${BOT_DIR}; nothing to copy.`);
} else {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
  console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
}
