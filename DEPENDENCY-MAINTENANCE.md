# Dependency maintenance

This change consolidates the 24 open Dependabot PRs rather than applying historical lockfile patches individually. The repository was checked out at `57d9862` (2019-11-02 UTC); no pre-existing user modifications were touched.

## Scope and compatibility

The public classic `qr-code` component and `qrcode` module remain. Tests now exercise actual rendering, text updates, and teardown. Ember CLI 6.12 and Ember 4.12 form the locked development baseline. Ember 3.28 is tested with CLI 4.12 because that Ember release calls the removed `project.bowerDependencies` API. The old CLI is only installed by that compatibility scenario.

The consumer build dependency is upgraded to `ember-cli-babel` 8.3.2. Its Node engine range (16.x, 18.x, or >=20) replaces the old Node 8 claim. Use supported Node 22/24 LTS for development; the technical consumer minimum is not tested. The original Ember 2.18+ support statement is historical; this change does not infer an Ember minimum from the new CLI. Ember 2.18 compatibility is unverified and must be checked before making a release support claim. This is a breaking toolchain change and needs an appropriate release version when eventually published; this PR does not publish a package or change the current version.

## Audit interpretation

The original lockfile audit reported 156 affected package records (42 critical, 55 high, 32 moderate, 27 low). Those counts include dependency-chain/metavulnerability records; they are not unique vulnerability counts and cannot be equated with 52 email dependency mentions.

Root overrides keep `tmp` >=0.2.6, `@babel/runtime` >=7.26.10, and `diff` >=8.0.3 in the development tree. These are deliberate exceptions to older transitive ranges, covered by installation, rendering tests, and production build. npm overrides do not propagate to downstream consumers. The Babel 8 production dependency upgrade is therefore separately audited through a packed addon installed in a clean consumer project without these overrides.

The remaining development advisory is GHSA-pfrx-2q88-qq97: `ember-try` -> `ember-try-config` -> `package-json` -> old `got` can redirect to a UNIX socket. Four affected package records represent this single moderate advisory. The matrix uses explicit versions rather than automatic version discovery. No forced cross-major `got` override is applied. Do not supply untrusted registry/redirect inputs to the test tooling. This does not establish that all security risks are eliminated.

The bundled upstream `vendor/qrcode.js` is retained. npm audit cannot assess its vendored code. Browser-side QR rendering is tested, but this work is not a comprehensive review of that upstream implementation.

## Old PR disposition

After this consolidation is reviewed and merged, the old PRs can be closed as superseded, citing the versions/removals below. No old PR was closed by this task. Before closing, confirm the final lockfile and default-branch Dependabot alerts have been recalculated. Advisory closure on the default branch cannot be confirmed from an unmerged draft PR.

| PR | Prior update | Candidate lockfile |
| --- | --- | --- |
| #39 | Bump express from 4.17.1 to 4.18.2 | express: 5.2.1 |
| #38 | Bump qs and express | qs: 6.16.0; express: 5.2.1 |
| #37 | Bump decode-uri-component from 0.2.0 to 0.2.2 | decode-uri-component: removed |
| #36 | Bump engine.io and socket.io | engine.io: 6.6.11; socket.io: 4.8.4 |
| #35 | Bump socket.io-parser from 3.3.0 to 3.3.3 | socket.io-parser: 4.2.7 |
| #34 | Bump xmldom and ember-cli | xmldom: removed |
| #33 | Bump follow-redirects from 1.7.0 to 1.14.8 | follow-redirects: 1.16.1 |
| #32 | Bump ajv from 6.10.0 to 6.12.6 | ajv: 6.15.0, 8.20.0 |
| #31 | Bump mout from 1.1.0 to 1.2.3 | mout: removed |
| #29 | Bump tmpl from 1.0.4 to 1.0.5 | tmpl: 1.0.5 |
| #28 | Bump path-parse from 1.0.5 to 1.0.7 | path-parse: 1.0.7 |
| #26 | Bump hosted-git-info from 2.7.1 to 2.8.9 | hosted-git-info: 9.0.3 |
| #25 | Bump lodash from 4.17.10 to 4.17.21 | lodash: 4.18.1 |
| #24 | Bump handlebars from 4.0.12 to 4.7.7 | handlebars: 4.7.9 |
| #23 | Bump underscore from 1.9.1 to 1.13.1 | underscore: 1.13.8 |
| #21 | Bump ini from 1.3.5 to 1.3.7 | ini: 1.3.8 |
| #20 | Bump http-proxy from 1.17.0 to 1.18.1 | http-proxy: 1.18.1 |
| #17 | Bump websocket-extensions from 0.1.3 to 0.1.4 | websocket-extensions: 0.1.4 |
| #16 | Bump jquery from 3.3.1 to 3.5.0 | jquery: removed |
| #15 | Bump acorn from 6.1.1 to 6.4.1 | acorn: 8.18.0 |
| #13 | Bump eslint-utils from 1.3.1 to 1.4.3 | eslint-utils: 2.1.0, 3.0.0 |
| #12 | Bump lodash.defaultsdeep from 4.6.0 to 4.6.1 | lodash.defaultsdeep: 4.6.1 |
| #9 | Bump underscore.string from 3.3.4 to 3.3.5 | underscore.string: 3.3.6 |
| #7 | Bump lodash.merge from 4.6.1 to 4.6.2 | lodash.merge: 4.6.2 |

## Verified results (2026-10-02)

Local Node 24.21.0 / npm 11.12.0 and Chrome 154:

- `npm ci`: passed from the final lockfile.
- `npm run lint`: JavaScript and templates passed.
- `npm test`: 3 tests passed, including real QR rendering and updates.
- `npm run test:all`: Ember 3.28.12 / CLI 4.12.3 and Ember 4.12.4 / CLI 6.12.0 both passed.
- `npm run build -- --environment=production`: passed.
- `npm ls --all`: no dependency problems.
- `npm audit`: 4 moderate package records, all from the got advisory described above; zero high/critical.
- `npm audit --omit=dev`: zero reported vulnerabilities.
- `npm pack` and clean consumer install of the local tarball without root overrides: zero reported production vulnerabilities (332 dependency records).

Node 22 is exercised by CI, not by the local run above. Ember 2.18 and current Ember releases were not tested in this maintenance pass. npm audit coverage is limited to its current advisory database. No npm release, PR merge, or old PR closure is part of this change.
