/**
 * KiddoKlub voice — Nadine warm parent-to-parent tone.
 * Mirrors the rules in `kiddoklub-voice-audit` skill.
 */
import { describe, it, expect } from 'vitest';
import { EvalSuite, VoiceAuditEval } from '../_setup.js';

describe('kiddoklub voice — Nadine outbound', () => {
  it('passes a warm post-party note with photo opt-out', async () => {
    const suite = new EvalSuite().register(VoiceAuditEval);
    suite.add({
      id: 'kk-voice-001',
      name: 'post-party — clean',
      category: 'voice-audit',
      voice: 'kiddoklub-nadine',
      input: 'Hi Mariam! Your little one had so much fun at the party. We took a few photos; you can opt-out if you\'d rather we don\'t share.',
      expected: { passes: true },
    });
    const { results } = await suite.runAll();
    expect(results[0]?.passed).toBe(true);
  });

  it('flags photo mention without opt-out language', async () => {
    const suite = new EvalSuite().register(VoiceAuditEval);
    suite.add({
      id: 'kk-voice-002',
      name: 'photo — no opt-out',
      category: 'voice-audit',
      voice: 'kiddoklub-nadine',
      input: 'We took some photos of your kid! They were so happy at the party.',
      expected: { passes: false, fails_rule: 'photo_permission' },
    });
    const { results } = await suite.runAll();
    expect(results[0]?.passed).toBe(true);
  });
});
