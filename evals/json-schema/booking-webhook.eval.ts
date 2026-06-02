/**
 * Cal.com booking webhook payload contract.
 * Locks the field shape that `kiddoklub-booking-intake` skill INSERTs into
 * Supabase `bookings` — so a Cal.com schema drift is caught in CI, not at 2am.
 */
import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { EvalSuite, JsonSchemaEval, registerSchema } from '../_setup.js';

const BookingWebhookSchema = z.object({
  triggerEvent: z.literal('BOOKING_CREATED'),
  payload: z.object({
    uid: z.string().min(1),
    title: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    attendees: z.array(z.object({ name: z.string(), email: z.string().email() })).min(1),
    metadata: z.record(z.string(), z.unknown()).optional(),
  }),
});

registerSchema('kk-booking-webhook', BookingWebhookSchema);

describe('kiddoklub Cal.com booking webhook contract', () => {
  it('accepts a real-shape payload', async () => {
    const suite = new EvalSuite().register(JsonSchemaEval);
    suite.add({
      id: 'kk-bk-001',
      name: 'standard booking',
      category: 'json-schema',
      schema_id: 'kk-booking-webhook',
      input: {
        triggerEvent: 'BOOKING_CREATED',
        payload: {
          uid: 'cal_abc123',
          title: 'Klub Signature party — Mariam',
          startTime: '2026-05-03T15:00:00Z',
          endTime: '2026-05-03T17:00:00Z',
          attendees: [{ name: 'Mariam K', email: 'mariam@example.com' }],
          metadata: { kidName: 'Layla', headCount: 12 },
        },
      },
      expected: { valid: true },
    });
    const { results } = await suite.runAll();
    expect(results[0]?.passed).toBe(true);
  });

  it('rejects payload missing attendees', async () => {
    const suite = new EvalSuite().register(JsonSchemaEval);
    suite.add({
      id: 'kk-bk-002',
      name: 'no attendees',
      category: 'json-schema',
      schema_id: 'kk-booking-webhook',
      input: {
        triggerEvent: 'BOOKING_CREATED',
        payload: {
          uid: 'cal_xyz',
          title: 't',
          startTime: '2026-05-03T15:00:00Z',
          endTime: '2026-05-03T17:00:00Z',
          attendees: [],
        },
      },
      expected: { valid: false },
    });
    const { results } = await suite.runAll();
    expect(results[0]?.passed).toBe(true);
  });
});
