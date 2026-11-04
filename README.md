# dirtysteves.com

A simple static website for comedian Steve Linehan: upcoming shows, bio, photo gallery, YouTube, and booking.
No build step, no database. Just upload these files.

## Updating the site (no coding needed)

Everything Steve will want to change lives in **`content.js`**.

- **Add a show:** copy one `{ ... }` block in `shows`, paste it, change the date (`"2026-12-31"` format), time, venue, city, and optional ticket link. Past shows hide themselves automatically.
- **Add a photo:** drop the image into the `photos/` folder, then add `{ src: "photos/your-file.jpg", caption: "Whatever" },` to the `photos` list.
- **Headshot:** put it in `photos/` and set `headshot: "photos/headshot.jpg"`.
- **Bio, tagline, email, YouTube link:** edit the matching lines at the top.

On GitHub you can do all of this in the browser: open `content.js`, click the pencil icon, edit, and click "Commit changes". To add photos, open the `photos` folder and use "Add file → Upload files". The live site updates in about a minute.

## Hosting on Netlify (free, recommended)

1. Sign up at https://app.netlify.com (free).
2. Go to https://app.netlify.com/drop and drag this whole folder (or unzip `dirtysteves-site.zip` first and drag the folder) onto the page. It goes live at a random `something.netlify.app` address.
3. In the new site: **Site configuration → Change site name** to something like `dirtysteves`.
4. **Domain management → Add a domain** → enter `dirtysteves.com` → Verify → Add domain. Netlify will also add `www.dirtysteves.com`.
5. In GoDaddy: **My Products → dirtysteves.com → DNS**:
   - Delete the existing `A` record for `@` (and any "Parked" or forwarding entries).
   - Add an `A` record: Name `@`, Value `75.2.60.5`.
   - Edit or add a `CNAME` record: Name `www`, Value `dirtysteves.netlify.app` (your site's Netlify address).
6. Wait 10 minutes to a few hours. Netlify turns on HTTPS by itself once DNS is working.

To update the site after a drag-and-drop deploy: edit `content.js` or add photos, then in Netlify open **Deploys** and drag the folder in again.

## Hosting on GitHub Pages (free)

1. Create a GitHub repo (e.g. `dirtysteves-site`) and upload all these files to it.
2. In the repo: **Settings → Pages → Build and deployment**, Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`. Save.
3. On the same page, under **Custom domain**, enter `dirtysteves.com` and save. (This creates a `CNAME` file.)
4. Once DNS works (step below), tick **Enforce HTTPS**.

## Pointing the GoDaddy domain at it

In GoDaddy: **My Products → dirtysteves.com → DNS → Manage DNS**.

1. Delete any existing `A` records for `@` (and GoDaddy "Parked"/forwarding entries).
2. Add four `A` records, Name `@`, pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Add/edit a `CNAME` record: Name `www`, Value `<your-github-username>.github.io`
4. Wait 10 minutes to a few hours for DNS to update.

(Netlify works too: drag this folder onto app.netlify.com/drop, then add the custom domain in Netlify and follow its DNS instructions.)
