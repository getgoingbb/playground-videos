'use server';

/**
 * @fileOverview Flow to generate video schema markup for SEO enhancement.
 *
 * - generateVideoSchema - A function that generates the video schema.
 * - GenerateVideoSchemaInput - The input type for the generateVideoSchema function.
 * - GenerateVideoSchemaOutput - The return type for the generateVideoSchema function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVideoSchemaInputSchema = z.object({
  title: z.string().describe('The title of the video.'),
  description: z.string().describe('A detailed description of the video content.'),
  uploadDate: z.string().describe('The date the video was uploaded (YYYY-MM-DD).'),
  duration: z.string().describe('The duration of the video in ISO 8601 format (e.g., PT1M30S for 1 minute 30 seconds).'),
  thumbnailUrl: z.string().url().describe('The URL of the video thumbnail image.'),
  videoUrl: z.string().url().describe('The URL where the video can be watched.'),
  keywords: z.string().optional().describe('Comma-separated keywords related to the video.'),
  category: z.string().optional().describe('The category the video belongs to.'),
});
export type GenerateVideoSchemaInput = z.infer<typeof GenerateVideoSchemaInputSchema>;

const GenerateVideoSchemaOutputSchema = z.object({
  schemaMarkup: z.string().describe('JSON-LD schema markup for the video.'),
});
export type GenerateVideoSchemaOutput = z.infer<typeof GenerateVideoSchemaOutputSchema>;

export async function generateVideoSchema(input: GenerateVideoSchemaInput): Promise<GenerateVideoSchemaOutput> {
  return generateVideoSchemaFlow(input);
}

const generateVideoSchemaPrompt = ai.definePrompt({
  name: 'generateVideoSchemaPrompt',
  input: {schema: GenerateVideoSchemaInputSchema},
  output: {schema: GenerateVideoSchemaOutputSchema},
  prompt: `You are an expert in creating JSON-LD schema markup for videos to improve SEO.

  Given the following video details, generate the complete JSON-LD schema markup.
  Ensure that all required fields are filled and the schema is valid.

  Title: {{{title}}}
  Description: {{{description}}}
  Upload Date: {{{uploadDate}}}
  Duration: {{{duration}}}
  Thumbnail URL: {{{thumbnailUrl}}}
  Video URL: {{{videoUrl}}}
  {{#if keywords}}
  Keywords: {{{keywords}}}
  {{/if}}
  {{#if category}}
  Category: {{{category}}}
  {{/if}}

  Ensure the output is a valid JSON-LD schema markup.

  Output the schema markup only.
`,
});

const generateVideoSchemaFlow = ai.defineFlow(
  {
    name: 'generateVideoSchemaFlow',
    inputSchema: GenerateVideoSchemaInputSchema,
    outputSchema: GenerateVideoSchemaOutputSchema,
  },
  async input => {
    const {output} = await generateVideoSchemaPrompt(input);
    return output!;
  }
);
