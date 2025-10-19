'use server';

/**
 * @fileOverview Provides a summary of the portfolio, highlighting key skills and experiences.
 *
 * - portfolioSummarization - A function that generates a summary of the portfolio.
 * - PortfolioSummarizationInput - The input type for the portfolioSummarization function.
 * - PortfolioSummarizationOutput - The return type for the portfolioSummarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSummarizationInputSchema = z.object({
  heroSection: z.string().describe('The hero section content of the portfolio.'),
  aboutMeSection: z.string().describe('The about me section content of the portfolio.'),
  techStackSection: z.string().describe('The tech stack section content of the portfolio.'),
  projectsSection: z.string().describe('The projects section content of the portfolio.'),
  contactSection: z.string().describe('The contact section content of the portfolio.'),
});
export type PortfolioSummarizationInput = z.infer<typeof PortfolioSummarizationInputSchema>;

const PortfolioSummarizationOutputSchema = z.object({
  summary: z.string().describe('A summary of the portfolio, highlighting key skills and experiences.'),
});
export type PortfolioSummarizationOutput = z.infer<typeof PortfolioSummarizationOutputSchema>;

export async function portfolioSummarization(input: PortfolioSummarizationInput): Promise<PortfolioSummarizationOutput> {
  return portfolioSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSummarizationPrompt',
  input: {schema: PortfolioSummarizationInputSchema},
  output: {schema: PortfolioSummarizationOutputSchema},
  prompt: `You are an expert at summarizing portfolios for freelance developers.

You will receive the content of each section of the portfolio. You should provide a summary that highlights the key skills and experiences of the developer, and why they would be a good fit for a client's project.

Here is the portfolio content:

Hero Section: {{{heroSection}}}

About Me Section: {{{aboutMeSection}}}

Tech Stack Section: {{{techStackSection}}}

Projects Section: {{{projectsSection}}}

Contact Section: {{{contactSection}}}

Summary: `,
});

const portfolioSummarizationFlow = ai.defineFlow(
  {
    name: 'portfolioSummarizationFlow',
    inputSchema: PortfolioSummarizationInputSchema,
    outputSchema: PortfolioSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
