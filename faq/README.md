# Daedalus support FAQ

This file is generated from `faq/catalog.json`; do not edit it directly.

## Where should I download Daedalus safely?

The official Daedalus 7.1.0 release links Mainnet downloads to daedaluswallet.io and Preview and Preprod testnet downloads to docs.cardano.org. It also publishes the IOHK organizational PGP signing-key fingerprint used for installer verification. Check the newest official Daedalus release before downloading because distribution instructions can change.

Related knowledge: `DAE-0001`.

## What DRep voting functionality did Daedalus 7.0.0 introduce?

The official Daedalus 7.0.0 release says users can delegate voting power to a delegated representative (DRep), abstain, or select no confidence from the voting tab. This answer is intentionally scoped to 7.0.0; consult the release notes for the user's exact later version rather than assuming unchanged behavior.

Related knowledge: `DAE-0006`.

## Where can I safely download Daedalus?

Use the official desktop distribution. At this source review, the official release was 11.0.0; check the release page again before installing.

Related knowledge: `DAE-0101`.

## Why is Daedalus still synchronizing?

Verifying stored blocks, replaying ledger state and downloading new blocks are different stages. A slow stage alone does not prove that data is corrupt.

Related knowledge: `DAE-0102`.

## What should I check if Daedalus will not start?

Use the visible status information to describe a startup problem before trying disruptive repairs.

Related knowledge: `DAE-0103`.

## What do I need before restoring a wallet?

Restoration requires the correct private backup and wallet type. This guide is for software wallets; hardware-wallet users should use the pairing guide.

Related knowledge: `DAE-0104`.

## Why is my hardware wallet not connecting?

Pairing a device and restoring its recovery backup into desktop software are different operations. Keep hardware-wallet recovery material on its intended secure recovery path.

Related knowledge: `DAE-0105`.

## What should I check when my balance looks wrong?

An unexpected balance or pending transaction is a symptom, not proof of a specific bug. Start with non-destructive checks.

Related knowledge: `DAE-0106`.

## How does stake pool delegation work?

The delegation wizard has separate wallet selection, stake pool selection and confirmation stages. Confirmation incurs transaction fees.

Related knowledge: `DAE-0107`.

## What does an invalid DRep ID mean?

Voting-power delegation asks for a wallet and registration type. The form validates a DRep identifier when that choice needs one.

Related knowledge: `DAE-0108`.

## How can I contact a human safely?

Start with the minimal visible details that help staff identify the problem. Diagnostic archives are private evidence, not public knowledge.

Related knowledge: `DAE-0109`.
