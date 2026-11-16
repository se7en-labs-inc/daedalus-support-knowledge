# Daedalus Support Service Level Agreement

This document sets the response and resolution targets for Daedalus support cases.

## Scope

Support for Daedalus users is provided only through the support portal at https://daedalus.support.se7enlabs.com.

GitHub issues are for engineering work. They are not a support channel.

Never post wallet details, logs or other personal data in a GitHub issue.

You can write to us in English or Japanese. We reply in the language you write in.

## Priorities

The targets below are counted in business hours and business days.

| Priority    | Covers                                                                   | First response   | Resolution                 |
| ----------- | ------------------------------------------------------------------------ | ---------------- | -------------------------- |
| P1 Critical | A security vulnerability that could affect the on-chain safety of funds  | 4 business hours | 1 business day             |
| P2 High     | A core wallet function is unavailable, or another security vulnerability | 1 business day   | 3 business days            |
| P3 Medium   | Degraded functionality with a workaround available                       | 2 business days  | 10 business days           |
| P4 Low      | Cosmetic issues, documentation requests, general questions               | 5 business days  | No fixed resolution target |

### P1 Critical

A case is P1 when the report describes a security vulnerability that could affect the on-chain safety of funds.

Examples:

- A flaw that could let someone other than the owner sign or send a transaction from a wallet.
- A flaw that could expose a recovery phrase, spending password or private key.
- A report that an installer or release file has been tampered with. A changed file could run code that steals keys or signs transactions.

### P2 High

A case is P2 when a core wallet function is unavailable and the user's funds are not at risk. A security vulnerability that cannot affect the on-chain safety of funds is also P2.

When Daedalus cannot start, synchronize or show a wallet, the funds stay on the Cardano blockchain. They are not lost, and the wallet's recovery phrase restores them in any compatible wallet. Enter the recovery phrase only into wallet software you trust. These cases are P2.

Examples:

- Daedalus does not start after an upgrade.
- Daedalus does not finish connecting to the network.
- A user cannot delegate to a stake pool.
- A vulnerability that cannot reach keys, signing or transactions, such as a flaw that shows non-sensitive information.

### P3 Medium

A case is P3 when a function is degraded and a workaround is available.

Examples:

- Wallet synchronization is slow, but the wallet works.
- A hardware wallet connects only after a restart of Daedalus.
- A transaction list loads slowly or shows an old state until it is refreshed.

### P4 Low

A case is P4 when it has no effect on the use of the wallet.

Examples:

- A label or translation is wrong.
- A user asks how to find a setting.
- A user asks for a correction to a help article.

## Business hours

Business hours are 09:00 to 17:00 US Pacific Time (America/Los_Angeles), Monday to Friday. Pacific Time follows daylight saving time.

US federal holidays are not business days. When a holiday falls on a weekend, the observed date is used.

One business day is 8 business hours.

### Japan Standard Time

Japan Standard Time (JST) is UTC+9 all year. It has no daylight saving time.

| Pacific time in use   | Pacific offset | Business hours in JST | Days in Japan       |
| --------------------- | -------------- | --------------------- | ------------------- |
| Pacific Standard Time | UTC-8          | 02:00 to 10:00        | Tuesday to Saturday |
| Pacific Daylight Time | UTC-7          | 01:00 to 09:00        | Tuesday to Saturday |

### Holidays

The following dates are not business days. The dates are US Pacific Time dates. In Japan, a holiday removes business hours on the next calendar day. For example, Thanksgiving Day on 2026-11-26 falls in Pacific Standard Time, so it removes 02:00 to 10:00 JST on Friday 2026-11-27.

| Date       | Holiday                                         |
| ---------- | ----------------------------------------------- |
| 2026-01-01 | New Year's Day                                  |
| 2026-01-19 | Birthday of Martin Luther King, Jr.             |
| 2026-02-16 | Washington's Birthday                           |
| 2026-05-25 | Memorial Day                                    |
| 2026-06-19 | Juneteenth National Independence Day            |
| 2026-07-03 | Independence Day (observed)                     |
| 2026-09-07 | Labor Day                                       |
| 2026-10-12 | Columbus Day                                    |
| 2026-11-11 | Veterans Day                                    |
| 2026-11-26 | Thanksgiving Day                                |
| 2026-12-25 | Christmas Day                                   |
| 2027-01-01 | New Year's Day                                  |
| 2027-01-18 | Birthday of Martin Luther King, Jr.             |
| 2027-02-15 | Washington's Birthday                           |
| 2027-05-31 | Memorial Day                                    |
| 2027-06-18 | Juneteenth National Independence Day (observed) |
| 2027-07-05 | Independence Day (observed)                     |
| 2027-09-06 | Labor Day                                       |
| 2027-10-11 | Columbus Day                                    |
| 2027-11-11 | Veterans Day                                    |
| 2027-11-25 | Thanksgiving Day                                |
| 2027-12-24 | Christmas Day (observed)                        |
| 2027-12-31 | New Year's Day 2028 (observed)                  |
| 2028-01-17 | Birthday of Martin Luther King, Jr.             |
| 2028-02-21 | Washington's Birthday                           |
| 2028-05-29 | Memorial Day                                    |
| 2028-06-19 | Juneteenth National Independence Day            |
| 2028-07-04 | Independence Day                                |
| 2028-09-04 | Labor Day                                       |
| 2028-10-09 | Columbus Day                                    |
| 2028-11-10 | Veterans Day (observed)                         |
| 2028-11-23 | Thanksgiving Day                                |
| 2028-12-25 | Christmas Day                                   |

## The clock

The clock for a case starts when the case is created in the portal.

A case is created in one of two ways. It is created after the user verifies their email address. It is also created when a conversation with the portal's assistant is handed to a person.

## First response

The first response is the first reply from a member of the support team.

Automated messages do not count. Replies from the portal's assistant do not count.

The first-response clock never pauses.

## Priority

The support team sets the priority of a case at triage. Every case starts at P3 Medium until it is triaged.

The team may raise or lower the priority at any time. The case page shows the current priority and its targets.

Targets are counted from the time the case was created.

The first-response target is the one for the priority the case held when the first response was sent. The resolution target is the one for the priority the case held at resolution.

## Resolution

A case is resolved when the user has a working outcome. A working outcome is one of the following:

- The problem is fixed.
- A workaround or recovery path is confirmed.
- The question is answered.

For a security vulnerability, resolution has a different meaning. The team validates the report and assigns a severity. The team and the reporter agree a mitigation and a disclosure timeline. The fix itself then follows the [security disclosure policy](security-disclosure.md).

## Pauses

The resolution clock pauses in two cases:

- The team is waiting for the user's reply.
- The case is waiting on engineering work. This includes a fix in Daedalus, and a fix in a component that Daedalus depends on, such as cardano-wallet.

The case page shows when a case is paused and why.

## Document information

Version: 1.0

Effective date: 2026-11-10

### Change history

| Version | Date       | Change        |
| ------- | ---------- | ------------- |
| 1.0     | 2026-11-10 | First version |
