# cekayan.com

Personal academic site of Ceyhun Efe Kayan, built with [Astro](https://astro.build).

## Editing content

Everything (bio links, news, publications, CV entries, skills) lives in `src/data/site.ts`.
The bio paragraph is in `src/pages/index.astro`. Styles are in `src/styles/global.css`.

To update the CV PDF, replace `public/Ceyhun_Efe_Kayan_CV.pdf`.

## Commands

```sh
pnpm install
pnpm dev      # local preview at http://localhost:4321
pnpm build    # static output in dist/
```
