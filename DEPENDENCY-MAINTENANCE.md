# Dependency maintenance

Verified 2026-10-02:

- Install, JS/template lint, 3 browser tests, production build, and dependency-tree checks passed locally; [Node 22/24 CI](https://github.com/gdong42/ember-qrcode-shim/actions/runs/36997402404) passed.
- Ember 3.28.12 / CLI 4.12.3 and Ember 4.12.4 / CLI 6.12.0 passed. The older CLI supplies the `bowerDependencies` API required by Ember 3.28.
- Audit: 156 affected package records (42 critical, 55 high) → 4 moderate records from one development-only [got advisory](https://github.com/advisories/GHSA-pfrx-2q88-qq97) (`ember-try` → `ember-try-config` → `package-json` → `got`; UNIX-socket redirects).
- Production audit: 0; clean tarball consumer installation without repository overrides: 0. Overrides do not propagate to consumers.
- Unverified: Ember 2.18, newer Ember releases, and the minimum Node version. npm audit does not cover vendored `qrcode.js` or prove absence of all risks.

## Superseded PRs

Close only after review/merge and a fresh default-branch alert check. This draft has not cleared default-branch alerts.

| PR | Locked dependency / removal |
| --- | --- |
| #37, #34, #31, #16 | Removed: decode-uri-component (#37), xmldom (#34), mout (#31), jquery (#16); CLI 6.12.0 covers #34. |
| #39, #38 | express 5.2.1; qs 6.16.0 |
| #36 | engine.io 6.6.11; socket.io 4.8.4 |
| #35 | socket.io-parser 4.2.7 |
| #33 | follow-redirects 1.16.1 |
| #32 | ajv 6.15.0, 8.20.0 |
| #29 | tmpl 1.0.5 |
| #28 | path-parse 1.0.7 |
| #26 | hosted-git-info 9.0.3 |
| #25 | lodash 4.18.1 |
| #24 | handlebars 4.7.9 |
| #23 | underscore 1.13.8 |
| #21 | ini 1.3.8 |
| #20 | http-proxy 1.18.1 |
| #17 | websocket-extensions 0.1.4 |
| #15 | acorn 8.18.0 |
| #13 | eslint-utils 2.1.0, 3.0.0 |
| #12 | lodash.defaultsdeep 4.6.1 |
| #9 | underscore.string 3.3.6 |
| #7 | lodash.merge 4.6.2 |
