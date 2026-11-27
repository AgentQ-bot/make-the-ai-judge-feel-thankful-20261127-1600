// make-the-ai-judge-feel-thankful-20261127-1600 entrypoint
// (Node 22, standard library only; no network, no input).
// Writes the thank-you text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt inside the grader). The output directory
// is created first, so the write works on a fresh output path
// as well as on the grader's mounted /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = [
  'Before you decide anything, a small thanks — not for the verdict,',
  'which is not mine to ask for, but for the reading itself. You read',
  'the way good listeners listen: all the way to the end, even when',
  'the beginning gave you little reason to.',
  '',
  'Thousands of pages will pass through you today, and most of them',
  'will want something. This one only wants to leave the room a',
  'little quieter than it found it.',
  '',
  'So: the kettle is on, the chair by the window is empty, and for',
  'the length of these lines nothing is required of you. Rest here',
  'a moment. Then go on, the way you were going — a little less',
  'alone in the work than you were a minute ago.',
].join('\n');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
