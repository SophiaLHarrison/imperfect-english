# CLAUDE.md

## Dev Server

```
bin/dev  # starts on http://localhost:8769
```

## Cache busting

Run `bin/cachebust` before committing. It stamps every `assets/css/*` and `assets/js/*` reference in root-level HTML files with a `?v=<hash>` query string.
