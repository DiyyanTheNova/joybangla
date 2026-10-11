// Fetch all published jobs, ordered by newest first
export const jobsQuery = `*[_type == "job"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  company,
  location,
  type,
  salary,
  postedAt,
  featured,
  description
}`;

// Fetch all marketplace listings
// Note: Ensure your Sanity schema type is named "listing" (or change "listing" to "marketplace" if you named it that)
export const marketplaceQuery = `*[_type == "listing"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  seller,
  category,
  price,
  rating,
  featured,
  description
}`;

// Fetch all opportunities
export const opportunitiesQuery = `*[_type == "opportunity"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  entity,
  category,
  status,
  deadline,
  description
}`;
// Fetch a single marketplace listing by ID
export const marketplaceDetailQuery = `*[_type == "listing" && _id == $id][0] {
  _id,
  _createdAt,
  title,
  seller,
  category,
  price,
  rating,
  featured,
  description,
  "imageUrl": image.asset->url
}`;