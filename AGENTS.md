<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep demo content in one React context shared by public and admin routes; this allows immediate session-only updates without backend or storage.
- Keep routes in TanStack Start's file router because the project bootstrap requires it; use only React state, Tailwind styling, and no additional UI libraries or services.
