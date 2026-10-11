import { createClient, type QueryParams } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Fetch multiple items (returns array)
export async function safeFetch<T>(
  query: string,
  params?: QueryParams,
): Promise<T[]> {
  try {
    return params
      ? await sanityClient.fetch<T[]>(query, params)
      : await sanityClient.fetch<T[]>(query);
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return [];
  }
}

// Fetch single item (returns object or null)
export async function safeFetchOne<T>(
  query: string,
  params?: QueryParams,
): Promise<T | null> {
  try {
    return params
      ? await sanityClient.fetch<T>(query, params)
      : await sanityClient.fetch<T>(query);
  } catch (error) {
    console.error('Sanity fetch failed:', error);
    return null;
  }
}