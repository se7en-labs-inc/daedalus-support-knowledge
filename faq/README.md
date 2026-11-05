# Daedalus support FAQ

This file is generated from `faq/catalog.json`; do not edit it directly.

## Where should I download Daedalus safely?

Download Daedalus from daedaluswallet.io.
Daedalus is available only as a desktop application for Windows, macOS and Linux.
Each installer comes with a signature file ending in .asc, and the download page explains how to check the SHA256 checksum and the signature.
Release notes for every Daedalus version are published at github.com/input-output-hk/daedalus/releases.
On Linux, the preferred installation options are the native Debian, RPM and Arch packages and the NixOS service included in the flake.
The portable .bin installer for Linux is deprecated.
Do not use any download site that asks for your recovery phrase.

Related knowledge: `DAE-0101`.

## Why is Daedalus still synchronizing?

Before the blockchain is up to date, Daedalus shows three stages: verifying on-disk blockchain state, replaying the ledger from the on-disk blockchain, and syncing the blockchain.
Verifying checks the integrity of the blockchain by calculating hashes.
Replaying looks for a ledger snapshot and recomputes the latest state.
Syncing performs the initial chain selection and finalizes the blockchain state.
Daedalus Diagnostics, in the Help menu, shows the sync percentage and whether the Cardano node is syncing.
If syncing takes longer than you want, Daedalus Diagnostics offers Mithril Sync, which restores verified chain data to speed it up.
If part of the blockchain data stored on the computer is missing, Daedalus says so and offers to rebuild it.

Related knowledge: `DAE-0102`.

## What should I check if Daedalus will not start?

If the Cardano node writes nothing for five minutes while starting, Daedalus offers Restart Cardano node or Keep waiting.
That notice says the node may still be working.
While it starts, the Cardano node validates the integrity of the local blockchain data.
Daedalus Diagnostics shows the state of the Cardano node and whether it is responding.
If part of the blockchain data is missing, the Cardano node cannot start and Daedalus offers to rebuild the blockchain data.
Rebuilding the blockchain data keeps your wallets on the computer.
If Daedalus says it is unable to start the Cardano node, submit a support request through the support portal.

Related knowledge: `DAE-0103`.

## What do I need before restoring a wallet?

You need the recovery phrase of the wallet you want to restore.
For a standard wallet Daedalus asks for a 12, 18 or 24-word recovery phrase, and for a paper wallet a 27-word recovery phrase.
You can give the restored wallet a new name and a new spending password.
Wallet names and spending passwords are stored only on the computer, not on the blockchain.
Daedalus allows one restoration at a time.
If a restored wallet is empty or lacks funds you expected, check that you used the correct recovery phrase.
To use a hardware wallet, pair the device instead of entering its recovery phrase.

Related knowledge: `DAE-0104`.

## Why is my hardware wallet not connecting?

Daedalus supports Ledger Nano S, Ledger Nano S Plus, Ledger Nano X, Ledger Flex and Trezor Model T.
You pair a device once, and after that you connect it only when you need to confirm a transaction.
Daedalus asks you to connect the device and unlock it.
Daedalus asks you to launch the Cardano application on the device.
If the connection fails, disconnect and reconnect the device to restart the process.
A Trezor needs Trezor Bridge to be installed.
If Daedalus reports outdated Ledger software or unsupported firmware, it links to update instructions.
Keep the recovery phrase of a hardware wallet offline and do not enter it in Daedalus.

Related knowledge: `DAE-0105`.

## How do I get help from a person?

Get help from a person through the support portal at https://daedalus.support.se7enlabs.com.
Daedalus opens the portal from the Help menu and from the Open support ticket button on the loading screen.
The portal first offers approved Daedalus Wallet support guidance and can prepare a human support case if you still need help.
The portal asks you to verify your email address once.
Opening the portal from the Help menu puts your Daedalus version, network and operating system in the link.
Do not put your recovery phrase in a support request.
Do not post logs or personal details in a public issue tracker.

Related knowledge: `DAE-0109`.

## What is Mithril fast sync?

Mithril fast sync downloads a verified snapshot of the blockchain data so that Daedalus can sync faster.
When Daedalus offers it on the loading screen, choose Use Mithril fast sync to use it, or Blockchain Sync from Genesis to sync without it.
Later, you can start Mithril Sync from Daedalus Diagnostics in the Help menu.
Daedalus stops the Cardano node, restores verified chain data and then restarts the node to sync the remaining blocks.
Download and verification time depends on your network connection and storage performance.
If the network drops, Daedalus shows that the download will continue when the network returns.
Do not close Daedalus while it moves the snapshot to storage.
If you cancel Mithril Sync, your existing chain data is unchanged.
Mithril Sync is unavailable while Daedalus detects damaged blockchain data, and Rebuild blockchain data is offered instead.

Related knowledge: `DAE-0110`.

## Why is Daedalus stuck on Connecting to network?

Daedalus shows Connecting to network on the loading screen until it is connected.
If your computer clock is off by more than the allowed number of seconds, Daedalus cannot connect to the network.
To fix the clock, read the article at daedaluswallet.io/clock-sync.
After 20 minutes without a connection, Daedalus shows Having trouble connecting to network? with Open support ticket and Download logs.
If the Cardano node cannot be started, the same screen also shows a Retry button.
If the connection is lost after it was made, Daedalus shows Network connection lost - reconnecting.
Open support ticket takes you to the support portal.

Related knowledge: `DAE-0111`.

## Can security software stop Daedalus from working?

Daedalus warns that antivirus or antimalware software could treat the thousands of network requests it makes when the Off-chain metadata server (SMASH) is not used as malicious behavior.
Daedalus shows that warning next to the Off-chain metadata server (SMASH) setting.
Do not turn off your antivirus or firewall to try to fix a Daedalus problem.
Daedalus Diagnostics shows whether the Cardano node is responding and syncing.
If Daedalus offers Download logs, download your logs.
Open a support case in the support portal, name your security software and attach the logs.

Related knowledge: `DAE-0112`.

## How do I send my logs to support safely?

Download your logs from Daedalus instead of collecting files by hand.
You can do this from the Support page in Daedalus settings, or with Download logs on the loading screen when it shows connection trouble.
Attach the downloaded file to your request in the support portal.
Do not post logs in a public issue tracker, forum or chat.
Do not type or paste your recovery phrase into a support request.

Related knowledge: `DAE-0113`.

## Should I ever share my recovery phrase?

Never share your recovery phrase with anyone, including support.
Anyone who knows your recovery phrase can spend the ada in your wallet.
Your recovery phrase is the only way to recover your wallet if your computer is lost, broken, stolen or stops working.
Write it on paper and keep it in a safe place.
The simplest way to keep it secure is never to store it digitally or online.
Daedalus asks for your recovery phrase only when you restore a wallet.
You do not need your recovery phrase to rebuild blockchain data, and rebuilding keeps your wallets on the computer.
Keep the recovery phrase of a hardware wallet offline.

Related knowledge: `DAE-0114`.

## How do I follow up on an existing support case?

Open the support portal at https://daedalus.support.se7enlabs.com and choose Open an existing case.
Enter your case number and the verified email address for the case.
Select Send access code.
The portal emails a fresh code to the verified address for that case.
The portal asks you to verify your email address once before you start.
Do not put your recovery phrase in a case.

Related knowledge: `DAE-0115`.

## Locales and revisions

Items in `faq/catalog.json` carry three optional fields.

- `locale` is `en` or `ja`. An item without `locale` is English.
- `revision` is a positive integer that defaults to 1. Raise it whenever the answer changes in a way a translator must follow.
- `translates` is set only on a Japanese item, as `{"id": "<English FAQ id>", "revision": <revision>}`. It names the English item and the revision the translation was written from.

Validation fails when the named English item is missing or is not English, and when the translation records a revision older than the English item's current one. Knowledge entries use the same three fields. See `docs/versioning.md`.
