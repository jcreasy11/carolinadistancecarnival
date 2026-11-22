# ASICS Carolina Distance Carnival website

Static site for carolinadistancecarnival.com. No build step: the files in the repo root are the site.

- `index.html` is the homepage (same as `Main.dc.html`), plus `Entries.dc.html` and `Records.dc.html`
- `support.js` is the page runtime the pages load. Do not edit it.
- `images/` holds logo files
- `announcement.txt` and `announcement.js` run the announcement banner (below)

## Announcement banner (weather delays, schedule changes)

The red banner at the top of every page comes from `announcement.txt`.

1. Open `announcement.txt` on github.com (or the GitHub app) and click the pencil to edit.
2. Line 1: the message. Line 2 (optional): a link. Line 3 (optional): the link text.
3. Delete the message lines to hide the banner. Lines starting with `#` are ignored.
4. Click **Commit changes**. The banner is live on all pages in about a minute.

Example:

    Weather delay: Friday events are on hold. Updated schedule is posted.
    https://carolinadistancecarnival.com/#schedule
    View the new schedule

## Hosting

Netlify is connected to this repo (publish directory: repository root, no build command). Every push to `main` redeploys the site.
