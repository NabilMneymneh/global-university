# Global University Meta Pixel and campaign implementation handoff

**Date:** 24 August 2026  
**Repository:** [NabilMneymneh/global-university](https://github.com/NabilMneymneh/global-university)  
**Branch:** `meta-pixel-and-social-campaign`  
**Pull request:** [#1 — Add Meta Pixel tracking and evergreen admissions campaign plan](https://github.com/NabilMneymneh/global-university/pull/1)

## What was implemented

The existing Global University dataset/Pixel was verified in the connected Meta account. It is named **Global University** and uses Pixel ID **877982820870158**. Events Manager showed no integrations, no website activity in the selected period, and no websites found, so the implementation uses this existing asset and does not create a duplicate.

The code now mounts the Meta Pixel base code globally in `app/layout.tsx`. It records `PageView` on initial page load and on client-side route changes. It records `ViewContent` on the admissions overview and application pages. It records `InitiateCheckout` when visitors select primary Apply CTAs from the homepage, admissions page, and global header. The Pixel ID is read from `NEXT_PUBLIC_META_PIXEL_ID` and is validated as numeric before use.

The implementation intentionally does not fire `Lead` or `CompleteRegistration` from the current application form. The repository’s form currently simulates a successful submission in client-side code and does not write to a confirmed admissions backend. Firing a lead on that screen would produce unreliable conversion data. Once the admissions backend returns a real success response, wire `trackMetaEvent("Lead", ...)` to that response and use `CompleteRegistration` only for a confirmed completed application.

The admissions page also received two conversion-focused repairs. Its dead Apply Now button now links to `/admissions/apply`, and stale imported template copy about Bible and church-ministry study was replaced with the verified Global University program and admissions positioning. The homepage hero received the same positioning correction.

## Files changed

| File | Purpose |
|---|---|
| `components/analytics/MetaPixel.tsx` | Loads the Meta Pixel base script and noscript fallback. |
| `components/analytics/MetaPageView.tsx` | Tracks client-side route changes as `PageView`. |
| `components/analytics/MetaEvent.tsx` | Fires page-level standard events after client mount. |
| `components/analytics/TrackedLink.tsx` | Tracks high-intent link selection without blocking navigation. |
| `lib/analytics/meta-pixel.ts` | Defines the standard-event helper, numeric ID validation, and pending-event queue. |
| `app/layout.tsx` | Mounts the global Pixel and route tracker. |
| `app/admissions/page.tsx` | Adds admissions view and Apply CTA events; repairs the dead CTA and stale copy. |
| `app/admissions/apply/page.tsx` | Adds the application-page `ViewContent` event. |
| `components/layout/Header.tsx` | Tracks desktop and mobile Apply CTA selections. |
| `components/home/Hero.tsx` | Tracks the homepage admissions CTA and updates stale copy. |
| `components/home/AdmissionsCTA.tsx` | Tracks the homepage admissions banner CTA. |
| `env.example.txt` | Adds the verified Pixel ID variable. |
| `README.md` | Documents event definitions and deployment requirements. |
| `research/social_campaign_plan.md` | Contains the evergreen funnel, content system, budget scenarios, measurement rules, and comparator findings. |
| `research/gu_site_social_audit_notes.md` | Contains verified website, social, Meta, and Hostinger audit notes. |

## Validation completed

`npm ci` completed successfully. `NEXT_PUBLIC_META_PIXEL_ID=877982820870158 npm run lint` completed successfully with one Next.js advisory warning for the required `<img>` in the Meta noscript fallback. `NEXT_PUBLIC_META_PIXEL_ID=877982820870158 npm run build` completed successfully, type checking passed, and all 32 application routes generated successfully.

The standalone production server was smoke-tested on port 3001. The homepage rendered the verified Pixel ID and `PageView` markers. The admissions page rendered the verified Pixel ID, `ViewContent`, and three `InitiateCheckout` markers for its primary application CTAs.

The live website was checked before deployment and did not contain the verified Pixel ID or Meta base script. Therefore, the code is committed and pushed, but the live Hostinger site is not yet tracking until the pull request is deployed through the Hostinger workflow.

## Hostinger deployment steps

The current repository uses Next.js 14 with `output: 'standalone'`. In Hostinger hPanel, use the Node.js Web App deployment flow and connect the GitHub repository. Select the `meta-pixel-and-social-campaign` branch for a preview deployment, or merge the pull request into the branch that Hostinger currently deploys.

Set the following environment variable in the Hostinger Node.js application before building:

```text
NEXT_PUBLIC_META_PIXEL_ID=877982820870158
```

Confirm that the remaining Firebase and site environment variables are also present. Run the configured production build, deploy the application, and restart the server-side Node.js application. Hostinger’s official guidance for GitHub-based Node.js deployment is available at https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/.

## Meta verification steps after deployment

Open Meta Events Manager and select the **Global University** data source with ID **877982820870158**. In **Test events**, open the live website in the same browser session and visit the homepage, `/admissions`, and `/admissions/apply`. Confirm that `PageView`, `ViewContent`, and `InitiateCheckout` appear. Select a header or admissions Apply CTA and confirm that a single `InitiateCheckout` is received for that interaction.

After the first live visit, check the Overview and Integrations sections. The expected change is that a website is detected and event activity begins to appear. Event activity may take time to populate in summary views; use Test events for immediate verification.

## Remaining dependencies

The current application form does not persist data to a confirmed backend. Admissions should decide whether the primary conversion route is a real website application, a short request-information form, WhatsApp, or a combination. Once the real success response is available, the website should add the `Lead` event at the confirmed success point and pass only approved, non-sensitive parameters.

The campaign still needs final approval of monthly budget, intake deadline, priority faculties, target geography, approved scholarship or financial-aid language, response-hours SLA for Admissions, and student/alumni image permissions. The campaign plan provides validation and growth scenarios without assuming those values.
