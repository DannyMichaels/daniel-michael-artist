# Press Releases Airtable Schema

## Table Name
`PressReleases`

## Fields

| Field Name    | Field Type   | Required | Description                                      |
|---------------|--------------|----------|--------------------------------------------------|
| `title`       | Single line  | Yes      | Article/press release headline                   |
| `publication` | Single line  | Yes      | Name of outlet (e.g., "Rolling Stone", "Pitchfork") |
| `date`        | Date         | Yes      | Publication date                                 |
| `url`         | URL          | Yes      | Link to the full article                         |
| `excerpt`     | Long text    | No       | Pull quote or summary snippet (1-2 sentences)    |
| `image`       | Attachment   | No       | Publication logo or article thumbnail            |
| `order`       | Number       | No       | Display order (lower = first). Defaults to date sort if empty |
| `featured`    | Checkbox     | No       | Highlight this press item (larger display)       |
| `active`      | Checkbox     | Yes      | Toggle visibility on/off (default: checked)     |

## Example Records

| title | publication | date | url | excerpt | featured | active |
|-------|-------------|------|-----|---------|----------|--------|
| "Daniel Michael's New Single Breaks Boundaries" | Rolling Stone | 2024-03-15 | https://... | "A fresh voice in modern R&B..." | Yes | Yes |
| "Artist to Watch: Daniel Michael" | Pitchfork | 2024-02-10 | https://... | | No | Yes |
| "Interview: The Making of..." | Complex | 2024-01-20 | https://... | "I wanted to create something real..." | No | Yes |

## Gatsby Config Addition

Add this to `gatsby-config.js` in the `gatsby-source-airtable` tables array:

```javascript
{
  baseId: process.env.GATSBY_AIRTABLE_BASE,
  tableName: `PressReleases`,
  mapping: { image: `fileNode` },
}
```

## Suggested Placement

Insert the `<PressReleases />` component in `/src/pages/index.js` between Gallery and Contact:

```jsx
<Gallery />
<PageBreak />
<PressReleases />  {/* NEW */}
<PageBreak />
<Contact />
```

## Notes

- The `image` field uses `fileNode` mapping for Gatsby image optimization (same as GalleryImages)
- Use `active` checkbox to hide items without deleting them
- `featured` items could display larger or with a different style
- Sort by `order` first, then `date` descending as fallback
