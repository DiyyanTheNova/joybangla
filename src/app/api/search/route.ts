import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';
import { apiVersion } from '@/sanity/env';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion,
  useCdn: true,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // GROQ query to search across jobs, marketplace, and opportunities
  const groqQuery = `*[_type in ["job", "marketplace", "opportunity"] && (
    title match "*${query}*" || 
    description match "*${query}*" || 
    company match "*${query}*" || 
    entity match "*${query}*"
  )] {
    _type,
    _id,
    title,
    "description": coalesce(description, ""),
    "category": coalesce(category, ""),
    "company": coalesce(company, entity, ""),
    "price": coalesce(price, ""),
    "status": coalesce(status, ""),
    "postedAt": coalesce(postedAt, _createdAt)
  } | order(_createdAt desc)`;

  try {
    const results = await client.fetch(groqQuery);
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}