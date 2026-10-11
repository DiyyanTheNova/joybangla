// Shared helpers for listing pages (jobs, marketplace, opportunities).
// Filtering and sorting happen server-side based on URL search params, so
// views are shareable and SEO-friendly.

export type SortKey =
  | "newest"
  | "oldest"
  | "title-asc"
  | "title-desc"
  | "price-high"
  | "price-low"
  | "rating-high";

/** Lowercase helper that tolerates null/undefined. */
function str(value: unknown): string {
  return typeof value === "string" ? value.toLowerCase() : "";
}

/** Extract a leading number from a price-like string ("$1500", "৳2,000/mo"). */
function parsePrice(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return Number.NaN;
  const match = value.replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : Number.NaN;
}

function parseDate(value: unknown): number {
  if (typeof value !== "string") return 0;
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? 0 : time;
}

/**
 * Filter a list by a free-text query (matches any of the given fields) and an
 * optional category. Category matching is case-insensitive and treats "All"
 * or an empty string as "no filter".
 */
export function filterListings<T>(
  items: T[],
  query: string,
  category: string,
  searchFields: (keyof T)[],
  categoryField: keyof T,
): T[] {
  const q = query.trim().toLowerCase();
  const cat = category && category !== "All" ? category.toLowerCase() : "";

  return items.filter((item) => {
    if (cat && str(item[categoryField]) !== cat) return false;
    if (!q) return true;
    return searchFields.some((field) => str(item[field]).includes(q));
  });
}

/** Sort a list by the given key. Returns a new array. */
export function sortListings<T>(
  items: T[],
  sort: string,
  dateField: keyof T,
  titleField: keyof T,
  priceField?: keyof T,
  ratingField?: keyof T,
): T[] {
  const list = [...items];
  switch (sort as SortKey) {
    case "oldest":
      return list.sort((a, b) => parseDate(a[dateField]) - parseDate(b[dateField]));
    case "title-asc":
      return list.sort((a, b) => str(a[titleField]).localeCompare(str(b[titleField])));
    case "title-desc":
      return list.sort((a, b) => str(b[titleField]).localeCompare(str(a[titleField])));
    case "price-high":
      return list.sort((a, b) => (parsePrice(b[priceField!]) || 0) - (parsePrice(a[priceField!]) || 0));
    case "price-low":
      return list.sort((a, b) => (parsePrice(a[priceField!]) || 0) - (parsePrice(b[priceField!]) || 0));
    case "rating-high":
      return list.sort((a, b) => (Number(b[ratingField!]) || 0) - (Number(a[ratingField!]) || 0));
    case "newest":
    default:
      return list.sort((a, b) => parseDate(b[dateField]) - parseDate(a[dateField]));
  }
}