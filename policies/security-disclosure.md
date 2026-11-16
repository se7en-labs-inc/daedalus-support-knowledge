# Daedalus Security Disclosure Policy

This document explains how to report a security vulnerability in Daedalus and what happens after you report it.

## Scope

This policy covers:

- The Daedalus wallet.
- The Daedalus installers and release artifacts.
- The support portal.
- The Daedalus website.

A vulnerability may be in a component that Daedalus depends on. These components include cardano-node, cardano-wallet, the Cardano ledger and Mithril. We forward such a report to the maintainers of that project through their own security process. We tell the reporter that we did so.

You may also contact those projects directly.

## How to report

Report a vulnerability only through the private security form in the support portal. Open the form at https://daedalus.support.se7enlabs.com/support/security.

The form needs a verified email address.

Security reports do not pass through the portal's assistant.

Never include a recovery phrase, a spending password or a private key in a report. The portal rejects them.

## What not to do

- Do not open a public GitHub issue about an unfixed vulnerability.
- Do not post about an unfixed vulnerability on social media or in a forum.
- Do not test against wallets, funds or data that are not your own.
- Do not degrade any service.
- Do not use social engineering against users or staff.

## What we do

A vulnerability that could affect the on-chain safety of funds is P1 Critical under the [service levels](sla.md). The first response comes within 4 business hours.

Any other validated vulnerability is P2 High. The first response comes within 1 business day.

We validate the report and assign a severity, then agree a mitigation and a disclosure timeline with the reporter.

## Disclosure

Disclosure is coordinated with the reporter.

We disclose the vulnerability publicly within 90 days of the report. We disclose earlier when a fix is released.

Any extension of the 90 days needs the reporter's agreement. An example is a fix that depends on a release by an upstream project.

## Credit

We credit reporters publicly, in the release notes or in the advisory. We do this only if the reporter agrees.

## Document information

Version: 1.0

Effective date: 2026-11-10

### Change history

| Version | Date       | Change        |
| ------- | ---------- | ------------- |
| 1.0     | 2026-11-10 | First version |
