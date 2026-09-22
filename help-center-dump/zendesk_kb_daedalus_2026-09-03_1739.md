# Daedalus Help Centre corpus — IOHK ZenDesk

Source export: `zendesk_kb_export_2026-07-03_1849.json` (pulled 2026-07-03). Filtered 2026-09-03.

**What this is.** Every substantive Daedalus support article published on the IOHK ZenDesk Help Centre as of the source export, with its screenshots. All of it was public content at that date. Release notes and version-titled articles are listed by title only at the end, since Se7en Labs holds its own release history.

**Images.** Screenshots are included as files in the accompanying `_assets` folder and referenced by relative path, so they keep working independently of our Help Centre. A few images hosted by third parties are left as remote links.

**Caveat on age.** Most of this was last edited in 2024 or earlier and describes older Daedalus builds. Supplied as raw reference material, not as current documentation.

- Substantive articles included: **121**
- Screenshots bundled: **181** (of 209 referenced; 38 are third-party and left as remote links, 9 no longer exist in ZenDesk)
- Release-notes / version-titled, titles only: **139**
- Unpublished drafts excluded (never public): **24**

---


# Basic Use

## Daedalus initialization screen

*Article ID 4894883925401 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

The initialization screen now displays detailed information, there are 3 metrics, making it easier to track the node´s start-up progress.

 

![screenshot](zendesk_kb_daedalus_assets/4894491001369_4894491001369.png)

- 
Verifying on-disk blockchain state. The node verifies the integrity of the local copy of the blockchain and calculates hashes to ensure correctness.  

- 
Replaying ledger from the on-disk blockchain. The node searches for a ledger snapshot and calculates the latest ledger state.

- 
Syncing blockchain. Performs initial chain selection and finalizes the blockchain state to start synchronization.

For more information regarding the latest Daedalus release, please visit [Daedalus release notes.](https://iohk.zendesk.com/hc/en-us/articles/4579419674777-Daedalus-4-9-0-release-notes)

Daedalus is a full-node wallet and requires minimum hardware specs to work correctly. Please check the [Daedalus system requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553-Daedalus-system-requirements) article for recommended hardware specs and supported operating systems. 

It is recommended that you [enable RTS](https://iohk.zendesk.com/hc/en-us/articles/4415304990745-Enabling-RTS-Flags)to reduce memory usage if your machine does not meet the system requirements. 

For better performance it is recommended to sync Daedalus twice a week.

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new)form.

---

## Daedalus system requirements

*Article ID 360010496553 | Last updated 2025-10-30 | Category: Daedalus Mainnet*

### Operating systems

### Daedalus is available only as a PC (Microsoft Windows/Linux) and Apple Mac application, there is no mobile (Android/iOS) version of Daedalus.

- Windows 11, Windows 10 (Only 64-bit Windows is supported)

- MacOS ≥10.15, 64-bit (which includes Sequoia, Sonoma, Ventura, Monterey, Big Sur, Catalina)

- Linux OS Tested against:

- Debian-based

- Arch-based

- RPM-based

### Recommended hardware requirements

64-bit Dual core processors 
RAM: 24GB minimum (32GB of RAM is recommended)

Drive space: 250-300GB of free drive space (continuously growing)
Broadband Internet connection

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Delete a wallet

*Article ID 360016219514 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

WARNING

Before you delete a wallet, always make sure that you have your 12-word or 24-word Daedalus wallet recovery phrase.  If you don't have it you will loose access to your funds. See [Verification of the wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360035341914)

 

1. Select the wallet you want to delete. For example MyWallet1

![screenshot](zendesk_kb_daedalus_assets/900003975463_Screen_Shot_2020-10-09_at_17.59.00.png)

2. Go to the &lt;More&gt; tab of the wallet (top right) and click on settings

![screenshot](zendesk_kb_daedalus_assets/900004009546_Screen_Shot_2020-10-09_at_17.59.11.png)

3. Click on Delete wallet

![screenshot](zendesk_kb_daedalus_assets/900004009526_Screen_Shot_2020-10-09_at_17.59.56.png)

4. A pop-up window will inform you that the only way to regain access to that wallet is to restore it with the wallet recovery phrase. Tick the box, 

![screenshot](zendesk_kb_daedalus_assets/900003975443_Screen_Shot_2020-10-09_at_18.00.29.png)

5. To confirm, type the wallet's name and click on delete.

![screenshot](zendesk_kb_daedalus_assets/900003975423_Screen_Shot_2020-10-09_at_18.00.45.png)

 

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Downloading and installing Daedalus Mainnet

*Article ID 360010516793 | Last updated 2024-03-12 | Category: Daedalus Mainnet*

Never download Daedalus from non-official, untrusted sources. Scammers may create fake copies of Daedalus and attempt to trick you into downloading the wallet from a different source. If you download Daedalus from an unofficial source, you put your ada at serious risk of being stolen. Please also remember, Daedalus does NOT have a mobile application.

### Download

Please visit [https://daedaluswallet.io/en/download/](https://daedaluswallet.io/en/download/) to download and install the latest version of Daedalus wallet for the Cardano mainnet. 

For Linux installation instructions, please see [Installing Daedalus (Mainnet) on Linux](https://iohk.zendesk.com/hc/en-us/articles/900000776446)

### System requirements

### Operating Systems

- Windows 10 Windows 11 (Only 64-bit Windows is supported)

- MacOS Big Sur, MacOS Monterey

- Linux OS Tested against:

- Debian-based

- Arch-based

- RPM-based

### Recommended hardware requirements

- 64-bit Dual core processors

- RAM: 16GB

- Drive space: 100 - 200GB

- Broadband Internet connection

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to choose a stake pool

*Article ID 900002174303 | Last updated 2024-11-24 | Category: Daedalus Mainnet*

### Deciding which stake pool is the best for you

There are more than 2500 stake pools available. Choosing which stake pool(s) to delegate your stake is an important decision. There are many differences between stake pools. We can classify those differences into two broad categories:

From the protocol standpoint
Off-protocol considerations

### From a protocol standpoint

The key differentiator from the protocol point of view is the performance of the stake pools. The Daedalus Delegation Center displays relevant performance indicators for all of the available stake pools.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/900006812146)

 

Let's see what these performance indicators mean and how to interpret them to help you make the best decision about your stake delegation.

- 
Saturation : Measures the stake in the pool and indicates the point at which rewards stop increasing with increases in stake. This capping mechanism encourages decentralization by discouraging users from delegating to oversaturated pools. Delegating to a pool that is closer to saturation can lead to more rewards.

- 
Rank: A hierarchical ranking based on the potential rewards you will earn if you delegate the intended amount of stake to this pool, assuming it reaches saturation. This ranking represents a long-term expected outcome.

Live Stake: Percentage of the total stake in the system controlled by the pool. Calculated as follows: the stake pledged by the pool (stake delegated by the pool owners to their own pool) + the stake currently delegated to the pool, divided by the total stake in the system. 

Pool margin: The share that the stake pool takes from the rewards before distributing them among its delegators.

Pledge: This is the amount that the stake pool owners commit to delegate to their stake pool. One can expect that operators with higher balances delegated to their own pool have more incentives to perform well. Stake pools that do not meet their pledge requirement may produce blocks, but will not produce rewards.

Cost per epoch: The fixed fee per epoch that the stake pool charges to cover its operating costs.

Produced blocks: The total number of blocks that the stake pool has produced up to date.

The above are the key performance indicators. However, there are tools created by community members that display other useful information: ROI, number of delegators, active epochs, current reported height, involvement in adversarial forks, and their performance. It is a good idea to consider these other indicators when selecting a stake pool to delegate your stake. Some resourceful community built tools are:

- [https://adapools.org/](https://adapools.org/) 

- [https://cardanoscan.io/](https://cardanoscan.io/)

- [https://pool.pm/](https://pool.pm/)

- [https://poolstats.io](https://poolstats.io)

- [https://pooltool.io](https://pooltool.io/)

### Off-protocol considerations

There are some off-protocol factors that you might want to consider before delegating your stake. For example, you might be interested in delegating to a stake pool that:

- Is operated by someone that you trust
Is operated by an NGO
Runs on green energy
Donates part of its profit to a particular cause that you want to support
Is in a particular location you like
Is owned by more than one stakeholder
Provides you information about their performance regularly
Has an application that allows you to track your rewards easily

You can find this kind of information on the stake pools' websites. Daedalus and the Explorer provide links to the websites reported by the stake pools when they registered.

Now you know everything you should consider to choose the best stake pool to maximize your rewards. For more information on delegation, please see [How to delegate to a stake pool](https://iohk.zendesk.com/hc/en-us/articles/900005718683)

---

## How to delegate to a stake pool

*Article ID 900005718683 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

- In Daedalus, navigate to the Delegation center

- 
Select the stake pools tab to [Choose a stake pool](https://iohk.zendesk.com/hc/en-us/articles/900002174303-How-to-choose-a-stake-pool%C2%A0)

- 
Select the pool you want to delegate to, then click on "Delegate to this pool" 

![screenshot](zendesk_kb_daedalus_assets/900006658666_Screen_Shot_2021-03-03_at_8.50.24.png)

- Select the wallet you would like to delegate

![screenshot](zendesk_kb_daedalus_assets/900007566643_Screen_Shot_2021-03-03_at_8.55.50.png)

- Confirm or change your stake pool selection

![screenshot](zendesk_kb_daedalus_assets/900007566683_SELECT_POOL_CONTINUE.jpg)

-  Use your spending password or connect your hardware wallet to confirm the transaction to delegate to the selected stake pool. 

![screenshot](zendesk_kb_daedalus_assets/900007566663_CONFIRM_TRANSACTION.png)

There is a neat video that also showcases this process; [Introduction to delegation](https://www.youtube.com/watch?v=VtkjM_0k4R0&amp;t=0). 

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to send ada to a paper wallet 

*Article ID 360016049834 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Since Daedalus 0.10.0/Cardano 1.2.0, ada can be stored on a Daedalus paper wallet.

 

These are the instructions for how to send ada to a paper wallet.

1. Scan the QR code with your smartphone to obtain the address of the paper wallet.

![screenshot](zendesk_kb_daedalus_assets/360023449674_IMG_5590.jpg)

2. Send the paper wallet address to the machine where you have Daedalus wallet installed.

3. Copy the paper wallet address to your clipboard. 

4. Open the [Cardano Blockchain Explorer](https://explorer.cardano.org/) and paste the paper wallet address into the search box, click on Address and then click the search icon. 

![screenshot](zendesk_kb_daedalus_assets/360023451094_cardano_blockchain_explorer_paper_wallet.png)

5. You can check your paper wallet address and balance. At this point, if you have a new paper wallet, the balance should be 0 ada.

![screenshot](zendesk_kb_daedalus_assets/360023449254_Cardano_Blackchaine_Explorere.png)

6. Open Daedalus wallet and click Send

![screenshot](zendesk_kb_daedalus_assets/360023450154_Screen_Shot_2019-01-23_at_2.51.24_pm.png)

7. Paste the paper wallet address into the Receiver field, and input the amount of ada you want to send to the paper wallet in the Amount field, then click Next

![screenshot](zendesk_kb_daedalus_assets/360024386793_Screen_Shot_2019-01-23_at_2.56.46_pm.png)

8. Enter the spending password for your wallet click Send

![screenshot](zendesk_kb_daedalus_assets/360023450534_Daedalus_wallet_paper_wallet.png)

9. Reload the [Cardano Blockchain Explorer](https://explorer.cardano.org/) browser page to verify your transaction using the explorer.

![screenshot](zendesk_kb_daedalus_assets/360024386993_Screen_Shot_2019-01-23_at_3.09.19_pm.png)

10. You will also be able to see the transaction in your Daedalus transaction history.

![screenshot](zendesk_kb_daedalus_assets/360024387713_Screen_Shot_2019-01-23_at_3.39.17_pm.png)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to submit a feature request

*Article ID 360038148894 | Last updated 2023-07-31 | Category: Daedalus Mainnet*

We strongly encourage all users to [submit a feature request](https://iohk.zendesk.com/hc/en-us/requests/new) through our support portal if there is a feature you would like to see implemented in Daedalus. 

Once received, feature requests are immediately passed to our product team. From here, they are reviewed, prioritized, and assessed for feasibility based on a variety of factors.

---

## Installing Daedalus (Mainnet) on Linux

*Article ID 900000776446 | Last updated 2025-02-05 | Category: Daedalus Mainnet*

### Download:

Please visit [https://daedaluswallet.io/en/download/](https://daedaluswallet.io/en/download/) to download and install the latest version of Daedalus wallet for the Cardano mainnet.

 

### System requirements: 

Operating Systems

- Linux OS,  tested against:

- Ubuntu 18.04 LTS, Ubuntu 20.04 LTS

- Fedora 28

- Aimed at all Linux distributions

Recommended Hardware Requirements

- 64-bit Dual core processors

- RAM: 16GB

- Drive space: 200GB ~ 250GB

- Broadband Internet connection

### Installation: 

- Open a terminal, navigate to the folder where you saved the installer (default is Downloads) and give executable permissions to the installer.  
Note that you need to install Daedalus as an unprivileged user, not as root: 

$ chmod +x ~/daedalus/daedalus-7.0.2-71760-mainnet-331049f3e-x86_64-linux.bin

- Run the installer: 

$ ./daedalus-7.0.2-71760-mainnet-331049f3e-x86_64-linux.bin
* It may take a few seconds for the installer to start executing.

- Start Daedalus using any of these methods:

- Using the desktop Application menu

- Run ~/.local/bin/daedalus-mainnet

- Run daedalus-mainnet (works on Linux distributions that put ~/.local/bin in $PATH

There is no need to uninstall Daedalus from Linux prior to any version upgrade however if you would like to completely remove Daedalus from Linux please see the following article in our support portal: [How to uninstall Daedalus from Linux](https://iohk.zendesk.com/hc/en-us/articles/360013170694-How-to-uninstall-Daedalus-from-Linux)

Video Tutorial:

 

NOTE:

On some Linux distributions installation may initially fail and request you to run some commands as root to enable kernel.unprivileged_userns_clone. If sudo is available, running these two commands should work:

$ sudo sysctl -w kernel.unprivileged_userns_clone=1  
$ sudo sh -c "echo kernel.unprivileged_userns_clone=1 &gt; /etc/sysctl.d/nix-user-chroot.conf"

---

## Preventing loss of ada 

*Article ID 360010477234 | Last updated 2024-03-13 | Category: Daedalus Mainnet*

Keeping your ada safe is a top priority when using Daedalus wallet. Loss of access to ada in your wallet as well as the chance of unauthorized transfer from your wallet (theft/hacking) can be reduced if you follow these guidelines. 

Before we get to that though:

- You should be aware that by using ada there is a risk of theft/hacking and people do report instances of theft/hacking to us.

- It's your responsibility to become informed about the risks around using ada, and stay up to date on those risks.

- IOHK is not able to return your ada, we do not hold them, you do, and only you can control them, no one else including IOHK has control of your ada. 

Find out how to stay safe online and how to report inappropriate activity in the Cardano community: [Tips for Staying Safe Online](https://iohk.zendesk.com/hc/en-us/articles/360015295134)

### Which Wallet?

Sometimes people ask which wallet is the safest. All wallets have risks associated with them; it's good to know what the risks are so that you know what to be careful about when using each wallet. 
In general, though, funds should NEVER be stored at/on an exchange. Exchanges should be utilized only for transferring or trading funds; when at rest, all funds should be stored in a local wallet.  For short-term storage, funds should be stored in a wallet app like Daedalus wallet or Yoroi wallet. For long-term storage, funds should be stored in a hardware wallet or a paper wallet. Both Daedalus and Yoroi have hardware wallet support.
 
See also [Daedalus wallet compared to Yoroi wallet](https://iohk.zendesk.com/hc/en-us/articles/360026058573) 

See also [A Simple Explanation of Hardware Wallets and How they Work](https://forum.cardano.org/t/emurgo-a-simple-explanation-of-hardware-wallets-how-they-work-with-yoroi-and-why-they-are-important-to-keep-my-ada-safe/26133)(external link to Cardano Forum)

###  

### Daedalus wallet application

Never download Daedalus from non-official, untrusted sources. Scammers may create fake copies of Daedalus and attempt to trick you into downloading the wallet from a different source. If you download Daedalus from an unofficial source, you put your ada at serious risk of being stolen.

Always be sure to keep your Daedalus wallet recovery phrase safe and confidential. 

For example: 

Use a password for your computer and your user account to avoid unauthorized access
Lock your computer when not in use to avoid unauthorized access
Be careful about downloading and using software to avoid hacking
Have an antivirus software and perform frequent scans on your system
Be careful about clicking on links/pictures with links in emails to avoid hacking
Do not keep a record of your Daedalus wallet recovery phrase on your machine 

You can[check your Daedalus wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360038581434)to see if it is valid.

 

Import Wallets by Using Secret Folders 

The wallet import feature is reenabled in Daedalus. This feature enables you to import wallets from ‘secret.key’ files of old versions of Daedalus (Daedalus version 0.15.1 and earlier.) 

For testing this option you must have your old Daedalus application installed, or a backup of the state directory from the old Daedalus. If you still have it on your computer - please do not remove it. 

You can download the latest version of Daedalus Mainnet [here](https://daedaluswallet.io/en/download/).

For details on how to import a wallet in Daedalus, please see [Importing wallets](https://iohk.zendesk.com/hc/en-us/articles/900000623463). If your wallet was protected with a spending password on the old version, you need to use the same spending password to be able to create transactions from this wallet.

After successfully importing a wallet, please create a new wallet and transfer all funds from the old wallet to the new wallet. Please also remember to keep the wallet recovery phrase for your new wallet in a safe and secure location.

*Please note, importing wallets from state directories of Daedalus Mainnet 1.0 onwards is not supported by this method, this is done automatically by Daedalus provided the wallets are on the same state directory.

 

Safeguards for Inter-network Transactions

Note that we have implemented some safeguards to prevent accidental loss of ada due to the use of incorrect addresses. If you try to use a testnet address on mainnet your transaction will fail. Similarly, if you try to use a mainnet address in a Testnet Daedalus wallet the transaction will fail. 

 

### Daedalus paper wallet

The Daedalus paper wallet is very sensitive and should be kept in a safe and secure location.

For example: 

- Keep it physically secure in order to avoid theft

- Make sure the information on it is not visible to others to avoid theft

### Yoroi Wallet

Yoroi is a browser extension that is published by Emurgo, an organization affiliated with IOHK. In some ways, Yoroi is easier to use than Daedalus Wallet since it is not as resource intensive. 

Using a hardware wallet is similar to using a paper wallet, in that it can allow you to store your ada offline. Generally, this is much safer than keeping your ada online. 

See the [Yoroi website](https://yoroi-wallet.com/#/) for more information

 

For more information on security best practices, please refer to our [Cybersecurity guidelines for Cardano users.](https://iohk.zendesk.com/hc/en-us/articles/900005141163)

---

## Quick start guide

*Article ID 360011602173 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus 

### Section A: Install Daedalus

- Read about [System Requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553). Please note that Daedalus is a resource intensive application. If you want to manage ADA quickly and easily you can try [Yoroi](https://yoroi-wallet.com/#/) our lite wallet.

- Read about our [Cybersecurity guidelines for Cardano users.](https://iohk.zendesk.com/hc/en-us/articles/900005141163-Cybersecurity-guidelines-for-Cardano-users)

- Go to [https://daedaluswallet.io/#download](https://daedaluswallet.io/download) and download the latest version of Daedalus wallet for your operating system (MacOS, Windows or Linux). Note: Daedalus wallet DOES NOT have a mobile (Android or iOS) version.

- After the download has completed, double-click the installer package.

- The Daedalus installer package will unpack and install Daedalus wallet on your computer.

- Once the installation is complete, launch the Daedalus app using the desktop icon.

- This will start Daedalus wallet.  Select your language, number, date and time format, and click Continue.

![screenshot](zendesk_kb_daedalus_assets/900007065266_mceclip0.png)

- If you agree with the terms of service you may click Continue. Tick the box at the bottom of the popup to indicate you agree.

![screenshot](zendesk_kb_daedalus_assets/900007065386_mceclip1.png)

- Daedalus wallet will open and show you the wallet dashboard. Blockchain synchronization will begin - notice the synchronization indicator in the top right corner of the window.

![screenshot](zendesk_kb_daedalus_assets/900007065426_mceclip2.png)

 

### Section B: Create a new wallet

- From the Daedalus wallet dashboard click on Create.

- 

Give the new wallet a name.

- 

Create a spending password. The spending password will be required each time you send ADA, delegate your wallet to a stake pool or register for voting. (Note: you can reset the spending password only by restoring the wallet, using your 24 words recovery phrase)

- 

Click on Create Shelley wallet

![screenshot](zendesk_kb_daedalus_assets/900008004143_mceclip3.png)

- 

Read the instructions and make sure nobody can see your screen

![screenshot](zendesk_kb_daedalus_assets/900008004363_mceclip4.png)

- Next write down the 24-word Daedalus wallet recovery phrase, it is VERY IMPORTANT. Do not save your recovery phrase on your computer and do not take a photo of it. The safest way to store it is offline. If you lose your 24-word Daedalus wallet recovery phrase you will lose access to all your ADA. The recovery phrase cannot be changed, reset or bypassed. Read more about [Preventing loss of ada](https://iohk.zendesk.com/hc/en-us/articles/360010477234)

- You are required to verify the 24-word Daedalus wallet recovery phrase. Enter the 24 words in the exact order. Start by typing the first few characters of the word, then use the mouse to click on the chosen word.

![screenshot](zendesk_kb_daedalus_assets/900007065986_mceclip5.png)

- 

Remember that you can always verify your phrase by following the instructions in [How to check your recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360010645354)

 

### Section C: Next Steps

- Find out how to stay safe online and how to report inappropriate activity in the Cardano community here: [Tips for Staying Safe Online](https://iohk.zendesk.com/hc/en-us/articles/360015295134)

- Get some ADA into your wallet.

- The most comprehensive and up to date list of exchanges selling ADA is at [https://coinmarketcap.com/currencies/cardano/#markets](https://coinmarketcap.com/currencies/cardano/#markets)

- Check how to [Send and Receive ADA](https://iohk.zendesk.com/hc/en-us/articles/360010477394-Send-and-receive-ada)

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Restore a Yoroi wallet into Daedalus

*Article ID 900003878006 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Restoring a Yoroi wallet into Daedalus is simple:

- Click Add Wallet

![screenshot](zendesk_kb_daedalus_assets/900005115526_Screen_Shot_2020-12-11_at_10.18.01.png)

- Click Restore 

![screenshot](zendesk_kb_daedalus_assets/900006046823_Screen_Shot_2020-12-11_at_10.12.48.png)

- Select Yoroi wallet

![screenshot](zendesk_kb_daedalus_assets/900005115546_Screen_Shot_2020-12-11_at_10.13.25.png)

- Select the type of your Yoroi wallet: Byron or Shelley, and click Continue

![screenshot](zendesk_kb_daedalus_assets/900006046983_Screen_Shot_2020-12-11_at_10.14.07.png)

- Type your recovery phrase and click Check recovery phrase

![screenshot](zendesk_kb_daedalus_assets/900005115686_Screen_Shot_2020-12-11_at_10.16.27.png)

- Name your wallet and set a spending password. This only affects this instance of your wallet, your spending password in Yoroi doesn't change if you use a different password in Daedalus. 

![screenshot](zendesk_kb_daedalus_assets/900005115746_Screen_Shot_2020-12-11_at_10.30.20.png)

- Click Continue

![screenshot](zendesk_kb_daedalus_assets/900005115806_Screen_Shot_2020-12-11_at_10.30.29.png)

- Wait for your wallet to synchronize with the blockchain. It may take several minutes depending on your internet connection. 

![screenshot](zendesk_kb_daedalus_assets/900005115826_Screen_Shot_2020-12-11_at_10.36.26.png)

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Restore a wallet

*Article ID 360010961274 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

1. Click on the wallet icon on the top left if you do not see Add wallet on the bottom left. 

2. Click on Add wallet

![screenshot](zendesk_kb_daedalus_assets/900006051686_1.2.PNG)

3. Click on Restore

![screenshot](zendesk_kb_daedalus_assets/900006051706_2.2.PNG)

4. Select your wallet type and continue

![screenshot](zendesk_kb_daedalus_assets/900006962043_3.3.PNG)

- 12-word (Byron Legacy wallet) recovery phrase.

- 24-word (Shelley wallet) recovery phrase.

- 27-word (Paper wallet) recovery phrase.

![screenshot](zendesk_kb_daedalus_assets/900006051726_4.4.PNG)

If you have trouble entering your recovery phrase, please check this article in our Support Portal here for [help](https://iohk.zendesk.com/hc/en-us/articles/360024879594).

5. Name your wallet and set your Spending password

![screenshot](zendesk_kb_daedalus_assets/900006962063_5.5.PNG)

6. Allow for your wallet to Synchronize. You will see your wallet`s current balance once the wallet is fully synced. 

![screenshot](zendesk_kb_daedalus_assets/900006962083_6.6.PNG)

 

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new)form.

---

## Send and receive ADA

*Article ID 360010477394 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Send ADA from Daedalus wallet

1. Select the wallet you would like to send funds from.

2. Click on the Send tab in Daedalus, you will have a form to input the receiving address along with the amount you would like to send. 

(Always double check that the receiving address and the amount to send are correct.)

![screenshot](zendesk_kb_daedalus_assets/900004054643_Screen_Shot_2020-10-14_at_12.11.00.png)

3. Click Next,

4. Type your spending password, and click send to confirm the transaction.

![screenshot](zendesk_kb_daedalus_assets/900004086846_Screen_Shot_2020-10-14_at_12.14.43.png)

6. Back to the Summary tab, a green flag indicates that the transaction has been confirmed on the blockchain. 

![screenshot](zendesk_kb_daedalus_assets/900005667363_Screen_Shot_2020-11-19_at_18.43.28.png)

###  

### Receive ADA to Daedalus wallet

1. On your wallet, click the Receive tab. 

![screenshot](zendesk_kb_daedalus_assets/900004126106_2222222.PNG)

2. Select the address that you want to use to receive funds. Grayed addresses are addresses that have been used before. For ease of use you can click on Copy address to add the selected address to your clipboard.

3. Share the address with the person that will send funds to you, or use it yourself to send ADA from other wallet to Daedalus.

###  

### Send ADA from Daedalus paper Wallet

1. Restore your Daedalus paper wallet to Daedalus wallet. (see [Restoring a paper wallet](https://iohk.zendesk.com/hc/en-us/articles/360010587413))

2. Send ADA as per the instructions above. This process is the same whether using a paper wallet or standard Daedalus wallet.

3. If you want to keep using the paper wallet (i.e. you did not send full balance of the paper wallet or you plan to send more ADA to the paper wallet in future) then delete the paper wallet from Daedalus wallet. This means that any funds left in the paper wallet address are offline and should be at a lower risk from online attacks. 

### Receive ADA to Daedalus paper wallet

1. Restore your Daedalus paper wallet to Daedalus wallet. (see [Restoring a paper wallet](https://iohk.zendesk.com/hc/en-us/articles/360010587413))

2. Receive ADA to your Daedalus paper wallet by following the instructions above. This process is the same whether using a paper wallet or standard Daedalus wallet.

 

For support, please be sure to submit a ticket to the IOHK Technical Service Desk from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---


# Daedalus PreProd

## Copying chain folder from Daedalus Mainnet to Daedalus Flight

*Article ID 900004403866 | Last updated 2023-03-13 | Category: Daedalus Mainnet*

If you just installed Daedalus flight, syncing the entire blockchain may take up to a few hours. To circumvent this, you can copy the chain database from your Daedalus Mainnet wallet to Daedalus Flight, assuming that your Mainnet wallet is in sync. 

 

 

### MacOS 

- Close both Mainnet and Flight versions.

- Open a terminal 

- Run 

cp -rv ~/Library/Application\ Support/Daedalus\ Mainnet/chain ~/Library/Application\ Support/Daedalus\ Flight/

### Linux 

- Close both Mainnet and Flight versions.

- Open a terminal 

- Run

cp -rv .local/share/Daedalus/mainnet/chain .local/share/Daedalus/flight 

 

Windows

- Close both Mainnet and Flight versions.

- Open Powershell 

- Run

xcopy "AppData\Roaming\Daedalus Mainnet\chain" "AppData\Roaming\Daedalus Flight\chain" /s /e /h /y

 

 

NOTE: The commands used assume you are on the  home directory on the Terminal or Powershell

---

## Installation over previous Daedalus version while Daedalus is running on macOS and Linux

*Article ID 900000836306 | Last updated 2024-02-28 | Category: Daedalus Mainnet*

Problem

Possible performance issues on macOS and Linux resulting from a previous version of Daedalus which is still running. 

Cause

On macOS and Linux, the Daedalus installer is not properly checking if the previous version of Daedalus is still running, allowing users to unintentionally install over a running copy of Daedalus. 

Solution

If this happens, users are recommended to do the following. Delete the Daedalus application and keep the state directory, then attempt installation again. Users should manually check that Daedalus is not running when performing installation on macOS and Linux operating systems until this issue is fixed.

---

## No recent transaction history on Mainnet Daedalus wallet after restoring wallet in Daedalus Flight

*Article ID 900000558426 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

After restoring the wallet in Daedalus Flight wallet, the recent transaction history in Mainnet Daedalus wallet disappeared.

### Cause

This is caused by an address format change, the transactions actually happened, but are not showing in the UI.

![screenshot](/attachments/token/M8GrnSBDIdy7saGCgiO0n5nlh/?name=Screen+Shot+2020-04-03+at+2.33.18+pm.png)

### Solution

When we release a new version of Mainnet Daedalus based on Daedalus Flight, this issue will be resolved.

If you continue to experience an issue, please be patient and remember that our support team is here to assist.

To submit a ticket to IOHK support, you can do so from the Help menu in Daedalus.

---

## Possible network disconnection on Windows

*Article ID 900000452483 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

On a Windows computer, Daedalus Flight may lose connection to the Cardano network if the internet connection is lost.

### Cause

Possible causes are removing the network cable, or if the WiFi network is changed while Daedalus is running.

### Solution

This issue can be resolved by opening ‘Daedalus Diagnostics' from the Help menu (or by clicking on any of the status icons on the loading screen) and clicking on ‘Restart Cardano node’.

![screenshot](zendesk_kb_daedalus_assets/900000675806_image14.png)

![screenshot](zendesk_kb_daedalus_assets/900000675826_image3.png)

If you continue to experience an issue, please be patient and remember that our support team is here to assist.

To submit a ticket to IOHK support, you can do so from the Help menu in Daedalus.

---

## Unexpectedly slow synchronization speeds

*Article ID 900000452523 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

Daedalus Flight offers synchronization speeds that are generally much faster than previous versions of Daedalus. However, since this is a pre-release build, some users may experience unexpected variations in synchronization speeds when starting Daedalus Flight for the first time.

### Solution

If this happens, you can reset the connection by opening ‘Daedalus Diagnostics’ from the Help menu (or by clicking on any of the status icons on the loading screen) and clicking on ‘Restart Cardano node’.

Note: This should be done sparingly: repeated node restarts are unlikely to improve synchronization speeds.

![screenshot](zendesk_kb_daedalus_assets/900000690643_image14.png)

![screenshot](zendesk_kb_daedalus_assets/900000690663_image3.png)

If you continue to experience an issue, please be patient and remember that our support team is here to assist.

To submit a ticket to IOHK support, you can do so from the Help menu in Daedalus.

---

## Wallet migration leftovers

*Article ID 900002932323 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

When migrating funds from a Byron wallet to a Shelley wallet, on some occasions, depending on a combination of transaction inputs and outputs, a very small amount of ada cannot be transferred due to a Cardano protocol restriction of 1 ADA as a minimum transaction output.

Although the migration tries to preserve the UTxO shape of a wallet, it has to sometimes resort to combining some small UTxOs together but there are still some rare cases where it could fail combining many dust coins to a value that is big enough. 

This ada is a leftover that will remain in the source wallet. Daedalus displays the amount leftover in the source wallet when transferring funds.

 

![screenshot](zendesk_kb_daedalus_assets/900003886046_Screen_Shot_2020-09-30_at_13.48.21.png)

---

## Wallets unable to completely sync after reconnecting

*Article ID 900000830383 | Last updated 2024-03-27 | Category: Daedalus Mainnet*

Problem

When the internet connection is lost and restored and Daedalus reconnects to the Cardano network, wallet synchronization can sometimes get stuck at a high percentage.

Cause

This is a known issue and is being investigated by our team.

Solution

This issue is currently being investigated and fixed. In the meantime, a temporary workaround for this issue is to restart Daedalus.

---


# Daedalus wallet for the Cardano testnets

## Downloading Daedalus wallet for the Cardano testnet

*Article ID 900001538486 | Last updated 2022-11-06 | Category: Cardano Testnets*

Please visit [https://developers.cardano.org/en/testnets/cardano/get-started/wallet/](https://developers.cardano.org/en/testnets/cardano/get-started/wallet/) to download the latest version of Daedalus wallet for the Cardano testnet. This wallet is for testing purposes only. It may not be fully-featured and may contain bugs. Please note, Daedalus does NOT have a mobile application.

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Installing Daedalus Shelley Testnet in Linux

*Article ID 900001621566 | Last updated 2020-07-06 | Category: Cardano Testnets*

### Installation instructions

 

These steps assume you are comfortable running scripts in a Linux terminal and are logged into a graphical desktop session as a user other than root.

- 

Download the installer: [Linux Installer](https://testnets.cardano.org/en/shelley/get-started/wallet/)

- Give executable permissions with: 

chmod +x daedalus-1.1.0-STN1-shelley_testnet-13418.bin

- Run the installer* (for example):

~/Downloads/daedalus-1.1.0-STN1-shelley_testnet-13418.bin

- 

Start Daedalus using any of these methods:

a.Using the desktop Application menu
b.Run ~/.local/bin/daedalus-shelley_testnet

         c.Run daedalus-shelley_testnet (works on Linux distributions that put ~/.local/bin in $PATH)

  

* On some Linux distributions this may initially fail and request you to run some commands as root to enable kernel.unprivileged_userns_clone. If sudo is available, running these two commands should work:

- 

sudo sysctl -w kernel.unprivileged_userns_clone=1

- 

sudo sh -c "echo kernel.unprivileged_userns_clone=1 &gt; /etc/sysctl.d/nix-user-chroot.conf"

- Continue running the Installer

Note: There is no need to uninstall Daedalus from Linux prior to any version upgrade however if you would like to completely remove Daedalus from Linux please see the following article in our support portal: [How to uninstall Daedalus from Linux](https://iohk.zendesk.com/hc/en-us/articles/360013170694-How-to-uninstall-Daedalus-from-Linux)

---


# Features

## Basic Use, Feature Template

*Article ID 360035155813 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Notes: 

This is for TSD team use with the Zendesk Knowledge Capture App. 

Delete this comment before publishing an article based on this template. 

This article is not visible to the public.

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): [specify Daedalus edition(s)] this is only for articles in Mainnet Daedalus Wallet category

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000038406):[specify Ada Holder Component(s)] this is only for articles in Incentivized Testnet Ada Holders category.

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000029423):[specify Stake Pool Operator Component(s)] this is only for articles in Incentivized Testnet Stake Pool Operators category.

### Navigation

### How to navigate to this feature using the Menu

None​

### How to navigate to this feature using the User Interface

None

 

### Feature Description

Blah blah blah

### Release

This feature was added in [release notes link]

---

## Blockchain storage consolidation

*Article ID 360016060314 | Last updated 2021-10-28 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus

Background 

- Daedalus wallet stores a copy of the blockchain on your local machine. These Blocks are continuously being consolidated.

- The Cardano blockchain continuously grows at a steady rate. New blocks are created every 20 seconds. Blocks are grouped together in Epochs which are 5 days long.

- Prior to Daedalus wallet version 0.12.0 blocks were downloaded and stored as individual files, this caused technical problems because the number of files was greater than 1.5 million.

Consolidation process

In Daedalus wallet version 0.12.0 blocks are still downloaded as individual files but then a consolidation process converts them to epoch files.

The most recent two epochs are stored as blocks, not as epochs for technical reasons.

Once consolidation takes place the number of files used to store the blockchain data is not more than 50000.

Benefits

Storing the blockchain in Epoch files reduces the number of files and hard drive space needed to store the blockchain. It also can improve the performance of the wallet in many ways.

Monitoring the consolidation process

We have a new screen designed to help users understand and monitor the consolidation process coming in Daedalus wallet version 0.13.0

See also [Blockchain Storage Consolidation Status screen](https://iohk.zendesk.com/hc/en-us/articles/360033733594)

---

## Blockchain storage consolidation status screen

*Article ID 360033733594 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus

The Blockchain Storage Consolidation Status screen is designed to give users of Daedalus wallet an overview of the consolidation process that runs in the background from time to time on their machine. See [Blockchain storage consolidation](https://iohk.zendesk.com/hc/en-us/articles/360016060314) for more details on why we have this process and how it works. 

![screenshot](zendesk_kb_daedalus_assets/360043422834_Screen_Shot_2019-08-11_at_1.50.00_PM.png)

The screen has several pieces of useful information

- At the top of the screen, there is a text description of the consolidation process including a description of the blocks that have NOT been consolidated.

- Below the text description is a graphic indication of the number of blocks that have already been consolidated. 

- Below the graphic overview, there is a progress bar showing the genesis block (block 0) and indicating the percentage progress. Most of the time the progress bar will look like the screenshot above (though the numbers will be different) unless you have just installed Daedalus wallet and consolidation of older blocks is still underway. 

- There is a button leading to an article explaining [Blockchain storage consolidation](https://iohk.zendesk.com/hc/en-us/articles/360016060314)

---

## Change address

*Article ID 360010477374 | Last updated 2020-10-14 | Category: Daedalus Mainnet*

Sometimes you only need to send a smaller amount than you have stored in your address. All funds must be spent from the address when a transaction is placed so two transactions are made. One to the receiving address and one back to your wallet. This is done to an unused address in your wallet for security reasons.

---

## Enabling RTS Flags

*Article ID 4415304990745 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Cardano-node is linked to a runtime system (RTS) that can handle storage management, thread scheduling, profiling, memory usage, and so on. 

On Daedalus 4.8.0 we introduce the [cardano-node 1.33.0](https://github.com/input-output-hk/cardano-node/releases) and the ability to run it with preconfigured RTS flags that reduce the RAM usage. Note that it is possible to experience slightly higher CPU utilization when using  RTS flags.

How to enable RTS flags

If your machine has less than 16GB in RAM, Daedalus 4.8.0 will show a warning at startup and gives you the option to run Daedalus using the RTS flags.

 

![screenshot](zendesk_kb_daedalus_assets/4416838302361_image__8_.png)

-  Click on Enable and quit to enable RTS flags. Daedalus will quit and will run the node with RTS settings the next time you open it.  

-  Click on Decide later to postpone your decision and close the warning, Daedalus will run the node without RTS and start synchronization right away. 

You can enable or disable RTS at any time from the main menu. Note that the node needs to restart when you change the settings. 

1. Go to Help in the main menu

2. Click Using RTS flags to enable/disable

![screenshot](zendesk_kb_daedalus_assets/4415329668505_Screenshot_20220120_165800.png)

3. Confirm your selection

![screenshot](zendesk_kb_daedalus_assets/4416824416921_Screen_Shot_2022-02-03_at_10.50.18.png)

The diagnostics screen shows an evaluation of your machine against the system requirements and the status of RTS mode. 

![screenshot](zendesk_kb_daedalus_assets/4416824793113_Screen_Shot_2022-02-03_at_11.28.47.png)

---

## Guided manual updates

*Article ID 360034257513 | Last updated 2021-02-25 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

Users who are not running the latest Daedalus version and are experiencing connection or blockchain synchronization issues will now be notified when a new Daedalus version is available and will be guided through the process of downloading and installing the update.

![screenshot](zendesk_kb_daedalus_assets/360043465853_mceclip0.png)

Release

[Testnet: Cardano 1.6.0: Daedalus 0.14.0 with Cardano SL 3.0.3](https://iohk.zendesk.com/hc/en-us/articles/360033778753)

---

## Importing wallets

*Article ID 900000623463 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

The wallet import feature has been reenabled in Daedalus. This feature enables you to import wallets from ‘secret.key’ files of old versions of Daedalus (Daedalus version 0.15.1 and before.) Please note, importing wallets from state directories of Daedalus 1.0 onwards is not supported by this method, this is done automatically by Daedalus 3.3.0 or newer versions, provided the wallets are on the same state directory.

### Daedalus state directory

The state directory is where Daedalus stores a user’s wallets, their settings and preferences, and a copy of the Cardano blockchain. The location of the state directory varies depending on the operating system:

Windows:

C:\Users\YOUR_USERNAME\AppData\Roaming\Daedalus

macOS:

/Users/YOUR_USERNAME/Library/Application Support/Daedalus

Linux:

~/.local/share/Daedalus/mainnet

### The secret.key file

The secret.key file contains the private keys for all of a user’s Daedalus wallets. If users have lost their wallet recovery phrases, they can still use the secret.key file to import wallets, even without a full state directory backup. Without the full state directory, however, Daedalus will not be able to import wallet names, making it harder to match wallets with spending passwords. Users importing from just a secret.key file will need to try their known spending passwords against all imported wallets to correctly identify them.

The secret.key file is located in a subdirectory named Secrets-1.0 on Windows and macOS platforms, and a Secrets subdirectory on Linux, within the state directory location for each operating system.

### Using the import feature

### 
1. Initiating wallet import 

The wallet import feature can also be used at any time by clicking the Add wallet button and then clicking the Import button.

Windows users must close all other versions of Daedalus before importing wallets. Attempting to import a wallet while other versions of Daedalus are still running will cause an error message to appear.

![screenshot](zendesk_kb_daedalus_assets/900006052046_900006052046.png)

### 2. Selecting a state directory or a secret.key file

Daedalus will automatically select the default state directory location, based on the operating system. Click the pencil icon to choose a different location if the state directory backup is elsewhere. 

If you have backed up the state directory on a USB drive or other external device, choose Import from Daedalus secret.key file and click on the pencil icon to select the secret.key file. 

![screenshot](zendesk_kb_daedalus_assets/900006052066_900006052066.png)

Please be sure to select a state directory which contains the Secrets or Secrets-1.0 folder with a secret.key file inside, and make sure that the old version of Daedalus is not running, or else you will experience the error message shown below.

![screenshot](zendesk_kb_daedalus_assets/900006962363_900006962363.png)

Users with just the secret.key file should use the ‘Select Daedalus ‘secret.key’ file’ option and click the pencil icon to select the file they want to import from. Please be sure to select a valid 'secret key' file, and make sure that the old version of Daedalus is not running, or you will experience the error message below.

![screenshot](zendesk_kb_daedalus_assets/900006962343_900006962343.png)

Click Import wallets to continue. 

### 3. Selecting wallets

Select wallets to import and edit wallet names if desired. Unnamed wallets will require a name to import them. 

Click Import selected wallets. Wallets can be selected and imported individually, or all at once.

![screenshot](zendesk_kb_daedalus_assets/900006962403_900006962403.png)

If the wallet you are trying to import is already in the state directory, Daedalus will display that the wallet already exists.

![screenshot](zendesk_kb_daedalus_assets/900006052166_900006052166.png)

### 4. Setting spending passwords

Users will need to set a spending password for any imported wallets which do not already have one. If your wallet was protected with a spending password on the old version, you need to use the same spending password to be able to create transactions from this wallet. In other words, spending passwords are mandatory and wallet functionality is locked until a spending password is set. Daedalus will prompt users to set a spending password and provide step-by-step instructions when users try to access a wallet without a spending password.

![screenshot](zendesk_kb_daedalus_assets/900000973806_900000973806.png)

### 5. Moving funds from a wallet with lost recovery phrase

Important: after importing a wallet for which you have lost your wallet recovery phrase, please create a new wallet and transfer all funds from the old wallet to the new wallet. Please remember that to move funds from the imported wallet, you will need to use your old spending password. Please also remember to keep the wallet recovery phrase for your new wallet in a safe and secure location.

### 

Troubleshooting 

File name must be secret.key

When trying to run the import always make sure the secret file is named correctly - the name MUST match: secret.keyAny other name will cause the feature to fail.

 

No wallets found.  File size 203 bytes

If you try to import wallets from the secret.key get the errorNo wallets found. Make sure you have selected a valid 'secret.key' file. Please check the size of your secret.key file. A file size of 203 bytes means that the file is empty and does not contain data of any wallet. In this case the only way for you to restore your wallet is using the recovery phrase.

 

### Need help? 

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form. 

For timely resolution, please be sure to send your logs with your request. Please see also [How to download log files](https://iohk.zendesk.com/hc/en-us/articles/360009819834)

---

## Loading screen status icons

*Article ID 360034035394 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

![screenshot](zendesk_kb_daedalus_assets/360043960974_Screen_Shot_2019-08-19_at_4.37.38_PM.png)

This is the loading screen, at the bottom of the loading screen are 5 status icons. These icons are green if everything is OK but if there is a problem these icons will turn red to help you understand what's wrong. The icons are ordered according to the sequence that Daedalus starts up. When Daedalus starts all the icons will be red but they should change to green as Daedalus progresses through its startup sequence. Normally the 'Node is running' icon on the far left should turn green first, and the 'Node is Syncing' icon on the far right should turn green last. If the first 4 icons are green then the 'Node is syncing' (last Icon).

Daedalus is a full-node wallet. It connects to Cardano network and becomes a part of Cardano network and it downloads and stores a full copy of the blockchain because it is participating in Cardano protocol and independently validating all transactions. For this reason, Daedalus includes Cardano node which runs in the background while Daedalus is running. This is important for maximum security and for fully trustless and fully decentralized operation, without any centrally hosted servers. 

![screenshot](zendesk_kb_daedalus_assets/360044824693_mceclip0.png)

 'Node is running' icon tells you that the Cardano node is running in the background when it is green. If it is red, the node is not running. 

 

![screenshot](zendesk_kb_daedalus_assets/360043961154_mceclip1.png)

 'Node is responding' icon tells you that the Cardano node is responding when it is green. If it is red that means the node is not responding to Daedalus. 

 

![screenshot](zendesk_kb_daedalus_assets/360043961334_mceclip2.png)

 'Node is subscribed' icon tells you that the node is connected to Cardano network and subscribed to receive network messages. If it is red that means that Cardano node is not connected and subscribed to the Cardano network and doesn't is not receiving blocks. 

![screenshot](zendesk_kb_daedalus_assets/360044825513_mceclip3.png)

 'Node time is correct' icon tells you if the local computer time is correct. If it is red that means that the local computer time is not correct. 

See [Machine clock out of sync with Cardano network](https://iohk.zendesk.com/hc/en-us/articles/360010230873)for more help if this is red.  

![screenshot](zendesk_kb_daedalus_assets/360043962214_mceclip4.png)

'Node is syncing' icon tells you that Cardano node is syncing with the Cardano network. This means that Cardano node is downloading blocks to get a full copy of the blockchain on your local machine.  If it is red that means that Cardano node is not syncing. Note that this icon does not indicate that Daedalus is actually in sync, only that synchronization is in progress. 

 

Daedalus Diagnostics screen

Clicking on any of the icons takes you to the 'Daedalus diagnostics' screen where more diagnostics data is available. If there are issues with connecting to the Cardano network or synchronizing with the blockchain some of the items on this screen will be in red color. A screenshot of this screen can be sent to the technical support desk as an attachment when creating a support request ticket.

![screenshot](zendesk_kb_daedalus_assets/360043962554_Screen_Shot_2019-08-19_at_5.18.47_PM.png)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Log file submission - what's included and what's not

*Article ID 360024614114 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

Security 

Submitting log files is safe, there are no secrets and no personal information in the log files. 

Included in the Log file submission

When you generate a log file from Daedalus here is what is included in the resulting .zip file. 

- Only latest 3 node.json logs are included. 

- Only the latest 3 launcher logs are included

- System Info file

- Daedalus log file

Included in the Pub folder submission

The name of the Pub folder stands for Public, all the information in this folder is safe to send via email which is an insecure communications channel unless the email is encrypted.

Here is what's in the Pub folder: (this list may change as versions change, not everyone is on the same release so things may vary slightly) 

System-info.json
Daedalus.json
Daedalus.old.json
Daedalus.json.log
Daedalus.json.old.log
Daedalus.log
Daedalus.old.log
launcher
launcher-20190320130437
There are usually many of these Launcher- log files with different timestamps
node.json
node.json-20190604041741
There are usually many of these node.jason log files with different timestamps

The difference between the Pub folder and the Log file submission

As you can see in the above descriptions of the Log file Submission and the Pub folder there is more information in the Pub folder. We do not usually request it for support purposes because the maximum file size for our support system is 20Mb and the Pub folder is often bigger than this. 

Reading the System Info file.

The easiest way to read the System Info file is: 

- Go to [https://jqplay.org/](https://jqplay.org/) and paste the contents of the System-info.json file into the JSON field.

- Select Raw Output

- Paste the fiollowing text (including ") into the Filter field

"\(.at)\ncardano version:\(.data.cardanoVersion)\ndaedalus version:\(.data.daedalusVersion)\nplatform version: \(.data.platformVersion)\nram: \((.data.ram | tonumber)/1024/1024/1024)gig\nnetwork: \(.data.network)\nos: \(.data.osName)"

You should see something like the following result. 

![screenshot](zendesk_kb_daedalus_assets/360038035554_Screen_Shot_2019-06-14_at_4.42.11_PM.png)

Z

---

## Open the state directory

*Article ID 360039391494 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

Before doing anything with the state directory, please be sure that you have the correct recovery phrase. To validate your recovery phrase, please see [Recovery Phrase Validation](https://iohk.zendesk.com/hc/en-us/articles/360038581434)

See also [Preventing loss of ada](https://iohk.zendesk.com/hc/en-us/articles/360010477234)

1. Open Daedalus

2. Navigate to the Help menu on the top left of the application. Select Daedalus Diagnostics

![screenshot](zendesk_kb_daedalus_assets/29864349742105_29864349742105.png)

3. The Daedalus Diagnostics screen will appear.

![screenshot](zendesk_kb_daedalus_assets/360051973074_360051973074.png)

4. Here, you can open the state directory. To do this, in the CORE INFO section, next to Daedalus State Directory, click OPEN. A file system window will open with your state directory. 

This is an example of the contents of the state directory, your state directory may look slightly different depending on which of the [Daedalus wallet editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074) you are using. 

![screenshot](zendesk_kb_daedalus_assets/4408893338137_4408893338137.png)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Recommended decimal places for Cardano native tokens

*Article ID 4415092787481 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Beneath your ada balance you can view your native tokens.

If any of the tokens display an exclamation mark, in example; 

![screenshot](zendesk_kb_daedalus_assets/4415092701721_first8.PNG)

The exclamation mark means that Daedalus is using the recommended settings from the Cardano Token Registry and you need to confirm that selection.

 

1. Begin by selecting the token which has the exclamation mark, then click on Settings.

![screenshot](zendesk_kb_daedalus_assets/4415088823321_first3.PNG)

2. Select the recommended decimal places.

![screenshot](zendesk_kb_daedalus_assets/4415092626073_first4.PNG)

3. Your tokens will refresh and load for a few seconds.

![screenshot](zendesk_kb_daedalus_assets/4415088906393_first7.PNG)

 

The exclamation mark is removed. Daedalus will continue to use the recommended settings.

![screenshot](zendesk_kb_daedalus_assets/4415092629657_first6.PNG)

 

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new)form.

---

## Rename the wallet

*Article ID 360011102854 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

There are two ways for you to rename your wallet:

1. Rename your wallet through Settings 

2. Rename your wallet through restoration - you will be prompted to name your wallet when you restore it. 

Note that 

1. Rename your wallet through Settings.

1. Chose the wallet you want to change.

2. Go to the Settings and update the name in the name field.

![screenshot](zendesk_kb_daedalus_assets/360017311053_mceclip1.png)

2. Rename your wallet through restoration.

Note: In order to restore your wallet you must have your 12-word Daedalus wallet recovery phrase. If you do not have your 12-word Daedalus wallet recovery phrase you will lose all your ada.

You can [check your 12-word Daedalus wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360010645354-How-to-check-your-12-word-Daedalus-wallet-recovery-phrase) to see if it is valid.

1. If your wallet is open in Daedalus, on the machine you are using, you will have to delete it before you restore it.

2. Click on Add Wallet in the Daedalus application (Click the wallet Icon in the top left if you do not see Add Wallet in the bottom left) 

3. Then click Restore

![screenshot](zendesk_kb_daedalus_assets/360017311353_mceclip2.png)

4. In the Restore a Wallet popup, select the Backup recovery phrase tab. You will see the Wallet name field where you may name your wallet.

![screenshot](zendesk_kb_daedalus_assets/360017311593_mceclip3.png)

---

## Reset wallet spending password

*Article ID 360011102114 | Last updated 2025-02-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus Mainnet, Daedalus Rewards

If you have lost your spending password that is not a big problem but a bit of an inconvenience to you. Your ADA is always safe because they are stored in the blockchain and as long as you have your wallet passphrase then you can access your ADA.

To reset your password, please make sure you have your wallet recovery phrase and then delete and restore your wallet (the restore may take an hour or two depending on your machine). When you restore you can choose a new spending password. 

[Recovery Phrase Validation](https://iohk.zendesk.com/hc/en-us/articles/360038581434) (For Daedalus Mainnet)

Reset wallet spending password 

- Check that you have your wallet recovery phrase, if you do not, you will lose all your ADA.

- Go to Settings and find Delete Wallet at the bottom in red text.

- Enter the name of the wallet and then delete the wallet.

![screenshot](zendesk_kb_daedalus_assets/900001385286_900001385286.png)

   4. After wallet has been deleted you can [restore your wallet](https://iohk.zendesk.com/hc/en-us/articles/360010961274) using your wallet recovery phrase.

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Restart the Cardano Node

*Article ID 360034630394 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Navigation

### How to navigate to this feature using the Menu

Click Help menu then Daedalus Diagnostics

​

![screenshot](/attachments/token/zkOmJr0DXDwwOPsj5t7unJr18/?name=Screen+Shot+2019-08-16+at+11.34.06+am.png)

​​

### How to navigate to this feature using the User Interface

If the Start Screen is visible, clicking on any of the icons at the bottom will take you to the Daedalus Diagnostics screen.

![screenshot](zendesk_kb_daedalus_assets/360045006114_Screen_Shot_2019-08-30_at_8.29.24_AM.png)

### Feature Description

Click the  Restart Cardano Node button to restart the Cardano node which is running in the background.

​​​

![screenshot](/attachments/token/Ep1fx34nxkuHS5fdJWhPoZGlH/?name=Screen+Shot+2019-08-16+at+11.46.48+am.png)

​

After a few seconds, the node will start.

This feature is useful if you are having trouble with your network connection. Sometimes using this can resolve network issues. Restarting the node is not necessary if Daedalus is functioning properly. Restarting the node at any time will not cause any problems. 

See also ['Cannot Connect to Network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913)

See also [Network Connection Lost..Reconnecting](https://iohk.zendesk.com/hc/en-us/articles/360034502833)

### Release

This feature was introduced in [Cardano 1.3.0: Daedalus 0.11.0 and Cardano SL 1.3.0 - Release Notes](https://iohk.zendesk.com/hc/en-us/articles/360010672754)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Restoring a paper wallet

*Article ID 360010587413 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Restore a paper wallet

Click the Add Wallet icon on the bottom left of the Daedalus screen. (Click the wallet Icon on the top left of the Daedalus screen if you don't see it.)

![screenshot](zendesk_kb_daedalus_assets/360039275993_360039275993.png)

 

Click the Restore tile

 

![screenshot](zendesk_kb_daedalus_assets/360038443434_360038443434.png)

 

Select Daedalus wallet

![screenshot](zendesk_kb_daedalus_assets/33994768624281_33994768624281.png)

 

Select the 27 words - paper wallet (Byron legacy wallet)

![screenshot](zendesk_kb_daedalus_assets/33994768633369_33994768633369.png)

 

Enter your 27-word Daedalus paper wallet recovery phrase in the Paper wallet recovery phrase field. (tip: click on the word below the field to add it.)

![screenshot](zendesk_kb_daedalus_assets/33994768643481_33994768643481.png)

- Enter a wallet name (you do not have to use the old name)

- Enter a spending password (you do not have to use the old password)

- Click on Restore wallet

- You will see your restored wallet in the list of wallets on the left of the Daedalus screen

---

## Transaction assurance security level

*Article ID 360033969174 | Last updated 2021-09-16 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards
 
In the Settings screen,  you can set the Transaction Assurance Security Level to be Normal or Strict.
 
This will affect when the 3 confirmation states are shown for any transaction in your wallet. This table shows the Assurance Levels in Detail
 

 | Assurance Level
 | State
 | Colour
 | Number of Confirmations*

 | Normal
 | Low
 | Red
 | 0-2

 |  
 | Medium
 | Yellow
 | 3-8

 |  
 | High
 | Green
 | 9+

 | Strict
 | Low
 | Red
 | 0-4

 |  
 | Medium
 | Yellow
 |  5-14

 |  
 |  High
 | Green 
 |  15+

 
These values are just for information purposes, they show the "assurance" that a transaction is considered permanently part of the blockchain and cannot be cancelled or reversed. High assurance means little to no risk to be cancelled. Cancellation might happen, for example in the case of a temporary fork on the Cardano network. Under normal circumstances, cancellation is not a common occurrence.
 
If you change this setting in Daedalus it won't affect anything else other than the presentation of your transactions in your Daedalus wallet. There is no impact on the way transactions are executed on the blockchain or anything else. The different assurance increases/decreases the number of confirmation needed to show the transaction in one of these 3 confirmation states.
 
Why have two levels? It depends on your personal view of what is a risk vis-a-vis cancellation of transactions in the Cardano blockchain. 
 
*Note that the number of confirmations for each confirmation status will change with Shelley. They will no longer be static and they will be hard to calculate.

---

## User Interface Themes

*Article ID 360034571933 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

### Navigation

### How to navigate to this feature using the Menu

None

### How to navigate to this feature using the User Interface

1. Click on Preferences

![screenshot](zendesk_kb_daedalus_assets/360044827673_Screen_Shot_2019-08-19_at_5.57.57_PM.png)

2. Select Themes

![screenshot](zendesk_kb_daedalus_assets/360043964314_Screen_Shot_2019-08-19_at_5.58.43_PM.png)

### Feature Description

Themes allow the users to customize the look and feel of Daedalus wallet. Currently, there are 6 predefined themes available. Dark Blue is the Default theme for Mainnet and Light Blue is the Default Theme for testnet. Dark Cardano is the theme that is closest to the Cardano official branding. 

Themes do not affect the way that Daedalus wallet operates, it's functionality or security. 

### Release

This feature was added in [Cardano 1.6.0: Daedalus 0.14.0 with Cardano SL 3.0.3 - Release Notes](https://iohk.zendesk.com/hc/en-us/articles/360033778753)

---

## Verification of the wallet recovery phrase

*Article ID 360035341914 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

### Navigation

### How to navigate to this feature using the User Interface

 

![screenshot](zendesk_kb_daedalus_assets/360049607713_Untitled.png)

Select the Wallet that you are interested in checking the recovery phrase for and then go to Wallet Toolbar &gt; More &gt; Settings &gt; Verify wallet recovery phrase

### Feature Description

### Problem

Sometimes Daedalus users are not sure if they have the correct wallet recovery phrase for their wallets. 

A wallet can be recovered only with the correct wallet recovery phrase so it is crucial for users to be sure that they have the correct wallet recovery phrase for wallets that they are currently using to store ada.

IOHK does not have any way to help users to recover a lost wallet recovery phrase. A significant number of users made us aware of this issue by submitting support portal tickets when they needed to delete or restore their wallets and find that the recovery phrase they have does not work.

### Cause

Some users have multiple wallets and are unsure of which wallet recovery phrase belongs to which wallet. There may be many other reasons that users do not have the correct recovery phrase for the wallet they want to access. 

### Solution

The wallet recovery phrase verification feature solves this problem in two ways.

First, this feature will warn users if their recovery phrase has not been verified for a long period of time.

Second, users can check what they think is the correct phrase against the wallet that they think the recovery phrase is matched to. This helps users to maintain their wallet recovery phrases over time because they are prompted to use them more frequently. Previously you only needed to use your recovery phrase when you needed to restore your wallet on another machine. 

Note that you can check your phrase using this feature at any time regardless if there is a warning or not. 

### 1. Warnings

Six months after the creation or restoration of the wallet, users will get a yellow warning if the recovery phrase has not been verified. After a year, they will get a red warning. The warning shows as a small red dot on the wallet name in the left side of the Daedalus User Interface. Note that users don’t need to verify their recovery phrase if they are sure it is correct.

### 2. Verify wallet recovery phrase

It can be accessed from the wallet settings screen by clicking the “Verify wallet recovery phrase” and following simple instructions on the following screens.

1. Navigate to the wallet for which you want to check the wallet recovery phrase by clicking the relevant wallet in the wallet list in the left part of the Daedalus user interface.

2. Click on the "More" tab in the wallet toolbar and select Settings.

3. Click the Verify wallet recovery phrase button.

![screenshot](zendesk_kb_daedalus_assets/360048674214_Screenshot_2019-10-21_at_14.11.02.png)

4. Tick the checkbox on the Wallet Recovery Phrase Verification screen to confirm that nobody can see you screen before you proceed. Then click on Continue.

![screenshot](zendesk_kb_daedalus_assets/360048674114_Screenshot_2019-10-21_at_14.03.20.png)

5. Enter your Daedalus wallet recovery phrase.

![screenshot](zendesk_kb_daedalus_assets/360048674134_Screenshot_2019-10-21_at_14.04.02.png)

6. If the phrase you entered is correct you will see the Verification Successful screen.

7. After returning your wallet recovery phrase to its usual place for safekeeping, click on the tickbox to confirm this is done and then click on Continue. 

![screenshot](zendesk_kb_daedalus_assets/360049575033_Screenshot_2019-10-21_at_14.04.38.png)

### Release

This feature was added in [Cardano 1.7.0: Daedalus 0.15.0 and Cardano SL 3.1.0](https://iohk.zendesk.com/hc/en-us/articles/360037127154)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## View Transaction Details

*Article ID 360011323434 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

To view transaction details, click on the transaction in your transaction list which can be found on the Summary tab

![screenshot](zendesk_kb_daedalus_assets/360017819733_Screen_Shot_2018-10-27_at_3.22.51_PM.png)

 

or the Transactions tab.

![screenshot](zendesk_kb_daedalus_assets/360017091154_Screen_Shot_2018-10-27_at_3.23.12_PM.png)

 

For Recieve transactions you will see:

- The date of the transaction

- 
ada received: the time the transaction was received

- The amount of ada received

- Transaction assurance level indicator 

- 
From addresses: The address in your wallet the transaction was sent from.

- 
To addresses: Here you will see two addresses. One is the address you sent to, and the other is the [Change address](https://iohk.zendesk.com/hc/en-us/articles/360010477374).

- 
Transaction assurance level: Indications of how trustworthy the transaction is showing the assurance level and the number of confirmations.

- 
Transaction ID: This number can be used in the [Cardano Blockchain Explorer](https://cardanoexplorer.com/) to find your transaction. If you don’t see your transaction in the Cardano explorer, then your transaction was probably not completed. (Our sister company Emurgo has also created an explorer [https://seiza.com/home](https://seiza.com/home) it's very user-friendly, see that web site for more info.)

![screenshot](zendesk_kb_daedalus_assets/360017819953_Screen_Shot_2018-10-27_at_3.24.15_PM.png)

For Send transactions you will see:

[[needs improvement]](https://iohk.zendesk.com/hc/en-us/articles/360011618953)

---


# Help

## "Error opening the file for writing" when installing on Windows

*Article ID 360018712193 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Problem

Installation aborts on Windows operating systems with messages similar to this:

![screenshot](zendesk_kb_daedalus_assets/360026539474_Untitled1.png)

 

![screenshot](zendesk_kb_daedalus_assets/360026539454_Untitled.png)

Causes

1. There is version of Daedalus already running in your system 

2. Controlled folder access is turned on

 

Solution

1. Make sure close any other version of Daedalus  while you execute the installer.

2. Turn off controlled folder access as shown in [Allow an app to access controlled folders](https://support.microsoft.com/en-us/windows/allow-an-app-to-access-controlled-folders-b5b6627a-b008-2ca2-7931-7e51e912b034)

---

## 'Cannot Connect to Network' message after automatic update

*Article ID 360010660474 | Last updated 2022-01-26 | Category: Daedalus Mainnet*

Problem

Daedalus wallet prompted you to upgrade and you did upgrade, but after the upgrade you are getting a Cannot Connect to Network message, and you cannot use Daedalus any more. 

Cause

Something has gone wrong with the installation during the automatic update so Daedalus is not installed properly on your Machine. 

Solution

You need to reinstall Daedalus.

---

## 'Connecting to network' message

*Article ID 360010522913 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Problem

Daedalus is displaying a 'Connecting to network...' message for an extended period of time.

 

Cause

There is likely a problem or a misconfiguration on the user's machine or network. (Many times what looks like a connection issue on Daedalus, is actually a performance or configuration issue on the host computer or network.)

 

Solutions

Note:  For a targeted solution, take a look to your node log files ([Get to know your node logs](https://iohk.zendesk.com/hc/en-us/articles/4406070442137)) to determine what could be causing the issue, then try the suggested solution. Alternatively, you can try steps below in order: 

 

1.  Make sure that your computer meets the [System Requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553)

2. Wait a few minutes! Often there is not a problem, if you wait up to 20-25 minutes the issue may be resolved. The time it takes to prepare the Ledger state, open databases, and connect to the network depends on your machine RAM and CPU as well as network performance.

![screenshot](zendesk_kb_daedalus_assets/4402963712025_Capture1111.PNG)

If nothing has improved after waiting, you will see the "Having trouble connecting to the network?" message and a link prompting you to read the article or open a support ticket. 

3.  Check the hardware

Check the modem, router, and cables to make sure everything is connected, turned on, and in working order.  Restart modem, router, and computer. Power cycling your modem, router, and PC can solve simple issues. Leave each device off for at least 1 minute before you turn it back on.

4. Optimize for performance 

Before starting any connections, the node performs a resource-intensive and time-consuming task: Calculate the Ledger state and open blockchain databases, this task can take from a few minutes to several hours, depending on your database state, CPU, and RAM: 

Windows

- [Improve PC performance in Windows 10](https://support.microsoft.com/en-us/windows/tips-to-improve-pc-performance-in-windows-10-b3b3ef5b-5953-fb6a-2528-4bbed82fba96)

macOS

- [Optimize macOS to work with Daedalus and Cardano-Node](https://iohk.zendesk.com/hc/en-us/articles/4407094790681)

5. Perform a deep antivirus scan in your system

Apart from the evident security risk, malware can cause your system to perform poorly.

6.  Check your local firewall settings

Try to connect with another computer on the same network that is causing issues. It is better if you can use an ethernet connection. If one of your other devices can connect, you can rule out ISP issues and a network firewall blocking the connection. In this scenario, the issue must lie at your machine configurations, probably the local firewall. See [Get to know your node logs](https://iohk.zendesk.com/hc/en-us/articles/4406070442137) to learn how to identify this issue in your log files. 

- Windows: [Verify the outgoing rules for the ACTIVE network profile.](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/best-practices-configuring) 

- 
macOS: macOS firewall allows all outgoing connections by default. If you are using macOS firewall, it should not be causing any problems. If you are using an alternative firewall, allow outgoing connections for Daedalus, cardano-node, and cardano-wallet. 

- 
Linux: Allow outgoing connections. 

7. External firewall blocking connection  

Contact your network administrator or check your modem firewall settings. See [Get to know your node logs](https://iohk.zendesk.com/hc/en-us/articles/4406070442137) to learn how to identify this issue in your log files. 

8. Rule out ISP issues,

Try connecting to the internet using a different network. If the same computer works on a different network, the issue must be related to a network firewall or something deeper on the network outside of your LAN. 

9. [Check your DNS](https://iohk.zendesk.com/hc/en-us/articles/900004638323) 

10. Disable your VPN if you are using one

11. Check if your machine clock is out of sync: [Machine clock out of sync with Cardano network](https://iohk.zendesk.com/hc/en-us/articles/360010230873)

12. Check if your ISP is blocking the Cardano network: [Cardano network blocked by ISP](https://iohk.zendesk.com/hc/en-us/articles/360011408873)

[13. Reinstall Daedalus wallet](https://iohk.zendesk.com/hc/en-us/articles/360010106234)

14. Check etc/hosts (Linux users only) 

Make sure localhost is correctly set in your etc/hosts file:

 | 

IPAddress     Hostname    

127.0.0.1       localhost

 

See other [Known Issues - all Daedalus wallet editions](https://iohk.zendesk.com/hc/en-us/articles/360011451693) 

 

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form. For timely resolution, please be sure to send your logs with your request. Please see also [How to download log files](https://iohk.zendesk.com/hc/en-us/articles/360009819834)

---

## Anti virus software is blocking download of Daedalus

*Article ID 360010559453 | Last updated 2021-08-03 | Category: Daedalus Mainnet*

Problem

The anti-virus software on your machine identified the Daedalus software installable as unsafe and blocks the download.

This is similar but different to [Anti-virus software is blocking installation of Daedalus](https://iohk.zendesk.com/hc/en-us/articles/900000127226)

Solution

- Make sure you are downloading the software from our official download sites: [daedaluswallet.io](https://daedaluswallet.io/) if you are running Daedalus mainnet or [testnets.cardano.org](https://testnets.cardano.org/en/testnets/cardano/get-started/wallet/) if you are running Daedalus Testnet.

- Please submit a support request with the name of your anti-virus software to let us know, we will contact the anti-virus software maker and ask them to include Daedalus on their list of safe software.

- Create an exception for Daedalus in your anti-virus software application. You should be able to download the Daedalus wallet application from our official web site by adding [daedaluswallet.io](https://daedaluswallet.io/)  or [testnets.cardano.org](https://testnets.cardano.org/en/testnets/cardano/get-started/wallet/)to the virus checker’s exception list.

---

## Anti-virus software is blocking installation of Daedalus

*Article ID 900000127226 | Last updated 2021-08-09 | Category: Daedalus Mainnet*

The anti-virus software on your machine identified Daedalus as unsafe for some reason and blocks installation of the software.

This is different from [Anti virus software is blocking download of Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360010559453)

Solution

- Make sure you are downloading the software from our official downloads:

- 
[https://daedaluswallet.io/](https://daedaluswallet.io/)  Mainnet and Flight versions,

- 
[https://testnets.cardano.org/](https://testnets.cardano.org/) Testnet version. 

- Please submit a support request with the name of your anti-virus software to let us know about this issue, we will contact the anti-virus software maker and ask them to include Daedalus on their list of safe software.

- Check that the software you downloaded and are trying to install is genuine by verifying it. There are two ways to verify our software one is using the Signature and the other is using the CheckSum. Both of these methods are described in detail on the download sites right where you download the software.  

- If you have validated that our software is genuine then you may want to create an exception for Daedalus in your anti-virus software application. You should be able to create the exception for the error that the anti-virus software reports. We cannot support you doing that though.

---

## Available disk space UNKNOWN

*Article ID 360035654533 | Last updated 2023-05-13 | Category: Daedalus Mainnet*

The unknown disk space error can happen on Windows machines when:

[wmic.exe](https://docs.microsoft.com/en-us/windows/win32/wmisdk/wmic) does not exists on your pc or it is restricted
The disk check is not returning any data OR the response time is too slow because of slow machine

---

## Cannot Connect to Network - Certificate Signature Failure

*Article ID 360026832113 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus

Problem

You cannot connect to the network when attempting to access Daedalus. The Network Status screen displays Local Time Difference in red and the Connection error message certificate signature failure. 

![screenshot](zendesk_kb_daedalus_assets/360043600514_Screen_Shot_2019-08-14_at_1.50.23_PM.png)

Cause

The TLS certificate failed to generate due to a potential issue with your machine clock.

Solutions

1. Restart Daedalus

2. Check if your [machine clock is out of sync with the Cardano network](https://iohk.zendesk.com/hc/en-us/articles/360010230873)

3. Restart your machine

---

## Cardano network blocked by ISP

*Article ID 360011408873 | Last updated 2021-11-19 | Category: Daedalus Mainnet*

Problem

Daedalus is displaying a 'Cannot Connect to Network' message. 

Cause

Daedalus cannot reach the Cardano network due to network censorship. Your Internet Service Provider (ISP) may be blocking this kind of traffic. 

Note that the 'Cannot Connect to Network' message can be caused by a number of problems. See ['Cannot Connect to Network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913) article for more information. 

Solution

The solution may be to use a different ISP or to consider using a VPN. Note that VPN use is restricted in some countries. This may be helpful with regards VPN restrictions: [https://thebestvpn.com/are-vpns-legal-banned-countries/](https://thebestvpn.com/are-vpns-legal-banned-countries/)

See other [Known Issues](https://iohk.zendesk.com/hc/en-us/articles/360011451693)

---

## Cardano wallet recovery phrase compatibility chart

*Article ID 29444432935705 | Last updated 2024-04-16 | Category: Daedalus Mainnet*

### Desktop &amp; Online wallets compatibility chart

 |  
 | To Daedalus
 | To Yoroi 
 | To Adalite 
 | To lace
 | To Nami
 | To Ledger nano 
 | To Trezor T

 | From Daedalus 12-word (Byron) 
 | ☑️
 | x 
 | 

 (*2)

 | x 
 | x 
 | x 
 | x 

 | From Daedalus 24-word (Shelley)
 | ☑️
 | ☑️
 | ☑️
 | ☑️
 | x
 | x 
 | x 

 | From Daedalus 27-word paper wallet (Byron) 
 | ☑️
 | x
 | (*2)
 | x
 | x
 | x 
 | x 

 | From Yoroi 15-word (Byron) 
 | ☑️
 | ☑️
 |  (*2)
 | x
 | x
 | x 
 | x 

 | From Yoroi 15-word (Shelley)
 | ☑️
 | ☑️
 | ☑️
 | ☑️
 | x
 | x 
 | x 

 | From Yoroi 21-word paper wallet (Byron) 
 | x
 | ☑️
 | x
 | x 
 | x
 | x 
 | x 

 | From lace 24-word (Shelley)
 | ☑️
 | ☑️
 | ☑️
 | ☑️
 | (*3)
 | x 
 | x 

 | From Nami 24-word (Shelley)
 | (*1 )
 | (*1 )
 | (*1 )
 | (*1 )
 | ☑️
 | x 
 | x 

 | From Ledger nano S and X 24-word 
 | x 
 | x 
 | x 
 | x 
 | x 
 | ☑️
 | x 

 | From Trezor T 24-word 
 | x 
 | x 
 | x 
 | x 
 | x 
 | x 
 | ☑️

*1  You can only restore the Nami main account (Sub-accounts are not able to restore). 

*2  If you don't see your correct balance, please use Daedalus.

*3 The Nami wallet supports only a single address. If your lace wallet has a balance in multiple addresses you won't be able to see the correct balance. 

 

 

### Hardware wallet compatibility chart

 |  
 | Daedalus 
 | 

Yoroi

 | 

Adalite

 | 

Lace

 | Nami
 | Ledger live
 | Trezor suite 

 | Ledger nano S（S plus) and X 
 | ☑️
 | ☑️
 | ☑️
 | ☑️ (*4)
 | x
 | ☑️
 | x

 | Trezor T
 | ☑️
 | ☑️
 | ☑️
 | x
 | x
 | x
 | ☑️

*4 Limited support for DApp connection. The current version 1.8.2 does not support signing transactions through the DApp connection feature with hardware wallets. Please stay tuned for upcoming releases and new features through @lace on Twitter.

 

Important

You can not use your hardware wallet recovery phrase to restore your wallet directly on a software wallet or online wallet. Your hardware wallet recovery phrase is only able to restore your equivalent hardware wallet. 

 

Also please check the following articles. 

- [Types of wallet](https://docs.cardano.org/new-to-cardano/types-of-wallets/)

- [How to use Ledger and Trezor HW with Daedalus](https://iohk.zendesk.com/hc/en-us/articles/900004722083-How-to-use-Ledger-and-Trezor-HW-with-Daedalus)

- [Cybersecurity guidelines for Cardano users](https://iohk.zendesk.com/hc/en-us/articles/900005141163)

- [Preventing loss of ada](https://iohk.zendesk.com/hc/en-us/articles/360010477234)

---

## Connectivity -  Check DNS

*Article ID 900004638323 | Last updated 2021-10-14 | Category: Daedalus Mainnet*

Check if your DNS resolves relays-new.cardano-mainnet.iohk.io This method works on the three supported operating systems: macOS, Linux, Windows.

 

1. Open CMD on Windows or Terminal on macOS and Linux
2. Run the command

nslookup [relays-new.cardano-mainnet.iohk.io](http://relays-new.cardano-mainnet.iohk.io/)

 

Successful output looks like below. A successful output indicates that the problem is most likely in a Firewall, not DNS. 

Server: 8.8.8.8
Address: 8.8.8.8#53

Non-authoritative answer:
Name: relays-new.cardano-mainnet.iohk.io
Address: 18.188.75.201
Name: relays-new.cardano-mainnet.iohk.io
Address: 54.150.68.245
Name: relays-new.cardano-mainnet.iohk.io
Address: 18.180.136.78
Name: relays-new.cardano-mainnet.iohk.io
Address: 3.129.177.185
Name: relays-new.cardano-mainnet.iohk.io
Address: 52.9.197.120
Name: relays-new.cardano-mainnet.iohk.io
Address: 18.158.187.73
Name: relays-new.cardano-mainnet.iohk.io
Address: 18.158.41.187
Name: relays-new.cardano-mainnet.iohk.io
Address: 54.176.88.111

 

If it fails: 
Change DNS server on your machine: 

 

### Change DNS MacOS 

- 

On your Mac, choose Apple menu 

![screenshot](https://help.apple.com/assets/5E3B07C0094622B541F026E3/5E3B07C3094622B541F026EA/en_US/2f77cc85238452e25cb517130188bf99.png)

 &gt; System Preferences, then click Network.

- 

In the list at the left, select the network connection service you want to use (such as Wi-Fi or Ethernet), then click Advanced.

- 

Click DNS, then click the Add button 

![screenshot](https://help.apple.com/assets/5E3B07C0094622B541F026E3/5E3B07C3094622B541F026EA/en_US/a2ef32e34a5573d192b10d340a4f46b1.png)

 at the bottom of the DNS Servers list. Enter the IPv4 or IPv6 address for the DNS server.

Click the Add button 

![screenshot](https://help.apple.com/assets/5E3B07C0094622B541F026E3/5E3B07C3094622B541F026EA/en_US/a2ef32e34a5573d192b10d340a4f46b1.png)

 at the bottom of the Search Domain list, then enter the search domain—for example, apple.com.

- 

When you’re finished, click OK.

 

Change DNS Linux

- Right click on the network manager icon in the panel and choose "Edit connections..."

- Select your connection from the wired or wireless tab, choose "Edit"

- (Enter your password if the connection is set as "system-wide available")

- Choose IPv4 settings tab

- Switch method to "Automatic (DHCP)"

- Enter the name server you want in the box "Additional DNS servers" and press "Apply"

###  

### Change DNS on Windows 10

[Try Flush DNS Cache first.](https://iohk.zendesk.com/hc/en-us/articles/360021447393)If it does not work:

- Go to the Control Panel

- 
Click on Network and Internet
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-1-1024x522.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-1.jpg?x33107)

- 
Click on Network and Sharing Center
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-2-1024x715.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-2.jpg?x33107)

- 
Go to Change Adapter Settings.
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-3.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-3.jpg?x33107)

- 
You will see some network icons here. Select the network you are currently connected to and right click on it. Select Properties.
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step5.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step5.jpg?x33107)

- 
Click on IPv4 and select Properties.
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-4.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-4.jpg?x33107)

- 
If “Obtain DNS server address automatically” is selected, click the radio button next to “Use the following DNS server addresses:”
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step7.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step7.jpg?x33107)

- 
Now enter the DNS addresses you want to use. For example Preferred 8.8.8.8 and Alternate 8.8.4.4 to use Google's DNS. 
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step8.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step8.jpg?x33107)

- 
Click on OK and Close.
[![screenshot](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step9.jpg?x33107)](https://www.privateinternetaccess.com/blog/wp-content/uploads/2019/01/update-dns-settings-windows-10-step9.jpg?x33107)

---

## Connectivity - Node crash - Unexpected error following the chain. 

*Article ID 900004638783 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Version: Any

Symptoms: Daedalus cannot connect to network, Node crash

Operating system: MacOS, Linux, Windows

Cause: Corrupted database 

 

Agent steps to investigate: 

1. Request log files

2. Search under wallet.log for: 

Unexpected error following the chain: user error (restoreBlocks: given chain isn't a valid continuation. Wallet is at:

Solution:

Use Macro 177

[Delete and re-sync blockchain data](https://iohk.zendesk.com/hc/en-us/articles/360009484874)

---

## Daedalus Mainnet - Known Issues

*Article ID 360038741393 | Last updated 2025-08-15 | Category: Daedalus Mainnet*

Issue:When clicking on Wallets from Settings, the screen turns blank.

![screenshot](zendesk_kb_daedalus_assets/49806983018777_49806983018777.png)

![screenshot](zendesk_kb_daedalus_assets/49806951249945_49806951249945.png)

Workaround:None.

Notes:If you accidentally click on it, please close Daedalus completely and restart the application.

 

### If your problem is not listed here...

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Daedalus Wallet Cardano Node Crashed Error

*Article ID 360018034013 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

Cardano Node does not shut down gracefully as expected but is killed forcefully by Daedalus potentially causing data corruption.

 

You would see one or both of these screens:

![screenshot](zendesk_kb_daedalus_assets/360026028134_Screen_Shot_2019-02-15_at_11.20.28_AM.png)

![screenshot](zendesk_kb_daedalus_assets/360026898373_Screen_Shot_2019-02-15_at_11.20.51_AM.png)

### Cause

Daedalus is designed to force the Cardano node to shut down with a 10-second delay. 10 seconds is not long enough in many instances so Cardano node is forcefully killed. 

 

### Solution

a) Restart your computer (to kill all Daedalus processes)

- Launch Daedalus again and if the issue still persists go on to b) below

b) Uninstall Daedalus application (no need to delete DB or Wallet folder)

- Download latest version of Daedalus wallet from [https://daedaluswallet.io/#download](https://daedaluswallet.io/#download)

- Install Daedalus wallet this is much simpler and faster than deleting all data and starting again which is what you do in c) below

c) [Delete the contents of the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039511853)

d) If a to c does not work... delete everything and start all over again see:

[Reinstallation - normal method](https://iohk.zendesk.com/hc/en-us/articles/360011407033)

 

See other [Known Issues](https://iohk.zendesk.com/hc/en-us/articles/360011451693)

---

## Daedalus Yoroi Integration

*Article ID 360011705393 | Last updated 2021-12-11 | Category: Daedalus Mainnet*

Yoroi and Daedalus are designed to play nicely together, here is some more info about how the two wallets are related. 
 
What is the difference between Daedalus and Yoroi?
Yoroi is a light wallet, which means it does not download the full copy of the blockchain. It connects to trusted servers which have the full copy of the blockchain. Daedalus is a full-node wallet which means that it downloads, stores and validates the full copy of the blockchain so it can operate in a trustless manner and it does not rely on centrally hosted servers.

 
How can I move from Daedalus to Yoroi?
There is a migration feature in Yoroi that you can use to move from Daedalus to Yoroi. 
 
Can I send ada from a Daedalus wallet to my Yoroi wallet?
Yes, but if this is your wallet, consider restoring your account on Yoroi instead as this will ensure your total balance is transferred.

 
Can I transfer my account back to Daedalus?
Yes, but new addresses created for the wallet in Daedalus will not appear in Yoroi. It is best to create a new wallet in Daedalus and send your ada to this new wallet.
 
For more information on Yoroi please visit the [Yoroi web site](https://yoroi-wallet.com/#/) and also check out the [Yoroi FAQ](https://yoroi-wallet.com/#/faq/1)

---

## Daedalus troubleshooting 

*Article ID 900003035306 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

### CONNECTIVITY ISSUES 

User could report: 

- Node crashing

- Wallet won't connect

- Stuck at connecting to network

- Unable to start cardano-node

PROCESS TO INVESTIGATE THE ISSUE: 

- Check node.log for any errors:

- What errors are logged? 

- If all you see is shutdown request, that means node is being killed instead of being what at's fault.

- Check cardano-wallet.log. you'll probably see some error here:

- disk corruption failied databese 

- if no errors in cardano-wallet, you should check the deadalus.log and see if there's anything pointing to why it's crashing, for example: 

wallet exited:

{"at":"2020-08-28T13:12:59.301Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{"exe":"cardano-wallet","code":1,"signal":null,"err":null},"app":["daedalus"]," msg":"wallet: Service onStopped","pid":"","sev":"info","thread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"wallet: setStatus Started -&gt; Stopped","pid":"","se v":"info","thread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"wallet exited","pid":"","sev":"info","thread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"Launcher.stop: stopping wallet and node","pid":"", "sev":"info","thread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"wallet: Service.stop: already stopped","pid":"","sev":"info","thread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{"command":"cardano-node","args":["run","--socket-path","\\\\.\\pipe\\cardano-node-mainnet","--shutdown-ipc","3","--topology","C:\\Program Files\\Daedalus Mainnet\\topology.yaml",
"--database-path","chain","--port","3047","--config","C:\\Program Files\\Daedalus Mainnet\\co nfig.yaml"],"shutdownMethod":2,"cwd":"C:\\Users\\Darren\\AppData\\Roaming\\Daedalus Mainnet"},"app":["daedalus"],"msg":"node: Service.stop: trying to stop cardano-node","pid":"","sev":"info","t hread":""}
{"at":"2020-08-28T13:12:59.302Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"node: setStatus Started -&gt; Stopping","pid":"","sev ":"info","thread":""} 
{"at":"2020-08-28T13:12:59.303Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{},"app":["daedalus"],"msg":"node: Service.stop: waiting for ServiceStatus.Stopped","pid":"","sev":"info","thread":""} 
{"at":"2020-08-28T13:12:59.353Z","env":"mainnet:Windows:10.0.17134","ns":["daedalus","v2.2.0","*mainnet*"],"data":{"state":"starting"},"app":["daedalus"],"msg":"NetworkStatusStore: handling cardano-node state &lt;starting&gt;","pid":"","sev":"info","thread":""}

### 

Known issue file N in ledger  (cardano node.log)

cardano-node: ImmutableDB incorrectly used, indicative of a bug[35m[DESKTOP-:cardano.node.release:Notice:3][0m [2020-10-03 12:43:42.00 UTC] CardanoProtocol
[35m[DESKTOP-:cardano.node.networkMagic:Notice:3][0m [2020-10-03 12:43:42.00 UTC] NetworkMagic 764824073
[35m[DESKTOP-:cardano.node.version:Notice:3][0m [2020-10-03 12:43:42.00 UTC] 1.20.0
[35m[DESKTOP-:cardano.node.commit:Notice:3][0m [2020-10-03 12:43:42.00 UTC] 1f2f51164b53b9b775c03ac9f1e23e7b70c74b05
[34m[DESKTOP-:cardano.node.ChainDB:Info:19][0m [2020-10-03 12:43:42.94 UTC] Opened imm db with immutable tip at 3b534fb888b0d32252e6c2e7325caf32357dc34e2b2ec42e98ede793f5dbcce4 at slot 10081487 and chunk 466
[34m[DESKTOP-:cardano.node.ChainDB:Info:19][0m [2020-10-03 12:43:43.14 UTC] Opened vol db
[34m[DESKTOP-:cardano.node.ChainDB:Info:19][0m [2020-10-03 12:43:46.96 UTC] Replaying ledger from snapshot DiskSnapshot 69 at 87fb878d8cbd05f162f30692802c0cc720188200ee967071ce0d9c98ec8349cb at slot 10081518
ApiMisuse (InvalidIteratorRangeError (StreamFromExclusive (At (Block {blockPointSlot = SlotNo 10081518, blockPointHash = 87fb878d8cbd05f162f30692802c0cc720188200ee967071ce0d9c98ec8349cb}))) (StreamToInclusive (RealPoint (SlotNo 10081487) 3b534fb888b0d32252e6c2e7325caf32357dc34e2b2ec42e98ede793f5dbcce4))) CallStack (from HasCallStack):
  prettyCallStack, called at src/Ouroboros/Consensus/Storage/ImmutableDB/API.hs:350:41 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ImmutableDB.API
  throwApiMisuse, called at src/Ouroboros/Consensus/Storage/ImmutableDB/Impl/Iterator.hs:129:16 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ImmutableDB.Impl.Iterator
  streamImpl, called at src/Ouroboros/Consensus/Storage/ImmutableDB/Impl.hs:271:34 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ImmutableDB.Impl
  stream_, called at src/Ouroboros/Consensus/Storage/ImmutableDB/API.hs:160:7 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ImmutableDB.API
  stream, called at src/Ouroboros/Consensus/Storage/ImmutableDB/API.hs:517:19 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ImmutableDB.API
  streamAfterPoint, called at src/Ouroboros/Consensus/Storage/ChainDB/Impl/LgrDB.hs:447:11 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ChainDB.Impl.LgrDB
  streamAfter, called at src/Ouroboros/Consensus/Storage/ChainDB/Impl/LgrDB.hs:439:35 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ChainDB.Impl.LgrDB
  streamAfter, called at src/Ouroboros/Consensus/Storage/LedgerDB/OnDisk.hs:100:5 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.LedgerDB.OnDisk
  streamAll, called at src/Ouroboros/Consensus/Storage/LedgerDB/OnDisk.hs:255:5 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.LedgerDB.OnDisk
  initStartingWith, called at src/Ouroboros/Consensus/Storage/LedgerDB/OnDisk.hs:244:27 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.LedgerDB.OnDisk
  initFromSnapshot, called at src/Ouroboros/Consensus/Storage/LedgerDB/OnDisk.hs:194:28 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.LedgerDB.OnDisk
  initLedgerDB, called at src/Ouroboros/Consensus/Storage/ChainDB/Impl/LgrDB.hs:233:7 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ChainDB.Impl.LgrDB
  initFromDisk, called at src/Ouroboros/Consensus/Storage/ChainDB/Impl/LgrDB.hs:204:23 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ChainDB.Impl.LgrDB
  openDB, called at src/Ouroboros/Consensus/Storage/ChainDB/Impl.hs:129:26 in ouroboros-consensus-0.1.0.0-3kfayVcYo6l8SMn0puo8Z0:Ouroboros.Consensus.Storage.ChainDB.Implcardano-node: ImmutableDB incorrectly used, indicative of a bug

### Solution: 

Open  State Directory &gt; chain &gt; ledger 

Delete the file named N (in the example is 69). 

We have a fix for this issue in the upcoming release. 

 

DAEDALUS HAS SYNCHRONIZATION ISSUES:

Cause: Damaged or failed database

Solution: 

- Open the state directory,

- Navigate to the "chain" folder

- Delete its content. 

- Restart Daedalus. 

NOTE: This will force Daedalus to build the entire database again, so it will take a few hours to reach the tip of the blockchain. But this methods does not require the user to restore the wallet again, as when they delete the state directory. 

 

### DAEDALUS DOES NOT LOAD ENTIRE LIST OF POOLS

Cause: unknown

Solution: 

- Open the state directory,

- Navigate to the "Wallets" folder

- Delete these files:

- stake-pools.sqlite

- stake-pools.sqlite-shm

- stake-pools.sqlite-wal

- Restart Daedalus

- It will take between 30-40 minutes for Daedalus to reload the entire list of pools. 

NOTE: Be careful to not delete the other files or user will need to restore the wallet with the recovery phrase. 

 

### ITN REWARDS WALLET EMPTY AFTER CANCELLING A PENDING TRANSACTION (REDEMPTION FAILED) 

Cause: unknown

Solution: 

- 
[Uninstall Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360013170694-Uninstall-Daedalus) 

- Reinstall Daedalus

- Restore a shelley wallet that has some funds

- Try redeeming rewards again

---

## Delete and re-sync blockchain data

*Article ID 360009484874 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

This help article shows you how to delete the blockchain data on your machine to get a new copy. When deleting blockchain data you should also delete your wallet data to make sure you do not have data inconsistencies in Daedalus wallet.

What happens when I delete the Blockchain data and my wallet?

When you start Daedalus it will sync as normal because Daedalus needs an up-to-date copy of the blockchain to work.  When it does not find the blockchain on your machine it will download it (syncing). Syncing the whole blockchain takes about an hour with a newer machine and a good broadband internet connection; as of June 2022, the Cardano blockchain is 65Gb on disk. When the sync is done Daedalus will look for a wallet, and when it does not find your wallet (wallets folder) it will prompt you to create a new wallet or restore. You can restore your wallet with your wallet recovery phrase. The restore process on a newer machine usually takes an hour. During restore, Daedalus is looking through the whole blockchain for transactions that belong to your wallet.

Important: Make sure you have your wallet recovery phrase before you uninstall. If you do not have a correct wallet recovery phrase you will lose all your ada.

You can [check your wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360038581434) to see if it is valid.

### Delete the chain folder and the wallets folder

### Windows

- Reboot your machine to ensure Daedalus is not running

- 
[Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494) 

- Delete all files contained within folder chain 

- Once the folder is deleted, empty the trash.

- Locate the wallets folder and delete it.

- Reboot your machine

- Start Daedalus and allow it to Sync.

- 
[Restore your wallets](https://iohk.zendesk.com/hc/en-us/articles/360010961274) 

 

### macOS

- Reboot your machine to ensure Daedalus is not running.

- Make sure that Reopen windows when logging back in is NOT selected.

![screenshot](zendesk_kb_daedalus_assets/360022001194_Screen_Shot_2019-01-14_at_8.26.43_AM.png)

- 
[Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494) 

- Delete all files contained within folder chain.

- Once the folder is deleted, empty the trash.

- Locate the wallets folder and delete it.

- Reboot your machine

- Start Daedalus and allow it to Sync.

- 
[Restore your wallets](https://iohk.zendesk.com/hc/en-us/articles/360010961274) 

### Linux

- 
[Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494) 

- Delete all files contained within folder chain (Note on older versions of Daedalus this folder contains over 1.5 million files so this delete operation could take hours)

- Once the folder is deleted, empty the trash.

- Locate the wallets folder and delete it.

- Reboot your machine

- Start Daedalus and allow it to Sync.

- 
[Restore your wallets](https://iohk.zendesk.com/hc/en-us/articles/360010961274)

---

## Delete the contents of the state directory

*Article ID 360039511853 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Before deleting the state directory, please be sure that you have the correct recovery phrase. 

Note: Deleting the contents of your state directory does not delete your ada. Your ada are stored on the blockchain, not on your machine.

See also

[Verify wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360038581434)

[Preventing loss of ada](https://iohk.zendesk.com/hc/en-us/articles/360010477234)

### Delete the contents of the state directory

### Windows and macOS

1. [Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494)

2. Close the Daedalus application.

3. Delete everything in the state directory, leaving the directory empty.

![screenshot](zendesk_kb_daedalus_assets/4403255917849_Screen_Shot_2021-07-06_at_3.53.16_pm.png)

4. Open Daedalus again.

### Linux

1. [Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494)

2. Close the Daedalus application.

3. Delete Folders : 
blockchain -&gt; ~/.local/share/Daedalus/itn_rewards_v1/chain
wallets -&gt; ~/.local/share/Daedalus/itn_rewards_v1/wallets

4. Open Daedalus again

### Next Steps

Your wallets will be gone. You must [Restore your wallets](https://iohk.zendesk.com/hc/en-us/articles/360010961274) from your recovery phrase again.

---

## Deleting and restoring wallet data

*Article ID 360011321094 | Last updated 2025-07-23 | Category: Daedalus Mainnet*

### Overview

This article is for troubleshooting issues in Daedalus wallet. See these [Delete a wallet](https://iohk.zendesk.com/hc/en-us/articles/360016219514) and [Restore a wallet](https://iohk.zendesk.com/hc/en-us/articles/360010961274) articles for normal wallet use.

Sometimes wallet data can become corrupted, causing Daedalus wallet to stop working properly, but deleting and restoring all wallets can resolve these issues. This help article explains how to delete and restore wallet data on your machine. 

Note: Deleting your wallet does not delete your ada. Your ada are stored on the blockchain, not on your machine. 

Deleting the wallet folder will mean your local installation of Daedalus no longer knows about your wallet(s). You will need to restore all your wallet(s) to regain access to them, which will require the wallet recovery phrase. If you do not have your correct wallet recovery phrase you will lose all your ada.

See also: [Recovery Phrase Validation](https://iohk.zendesk.com/hc/en-us/articles/360038581434)

 

### Deleting the Wallets folder

- 
[Open the state directory](https://iohk.zendesk.com/hc/en-us/articles/360039391494) 

- Locate the Wallets folder and delete it.

- Start Daedalus and allow it to sync.

- [Restore your wallets](https://iohk.zendesk.com/hc/en-us/articles/360010961274)

---

## Exchange transaction does not show in wallet

*Article ID 360010559773 | Last updated 2021-10-14 | Category: Daedalus Mainnet*

Problem

You have made a transfer from an exchange to your wallet, the exchange shows the transaction is complete but it does not show up in your wallet. 

 

Cause

This problem can have several causes:

1. Daedalus wallet is not functioning correctly:

2. The exchange is not functioning properly

3. The address you used is not associated with your wallet

 

Solution

One thing that you can always do regardless of the cause of the problem is to check the [Cardano Block Explorer](https://cardanoexplorer.com/) to see if the funds are at the address that you sent them to. 

 

This problem can have several causes:

1. Daedalus wallet is not functioning correctly:

[Daedalus data is corrupt](https://iohk.zendesk.com/hc/en-us/articles/360011321094)

2. The exchange is not functioning properly

From time to time exchanges may experience technical difficulties, often transactions will show up if you wait. How long to wait is hard to say, but we have heard of transactions taking a few days. This is not normal, and transactions on the Cardano network normally take 5 minutes or less to complete to a high degree of certainty.

3. The address you used is not associated with your wallet

If you make a mistake and use an incorrect address naturally this transaction will not show up in your wallet. It's not uncommon for this to happen. When this happens often the result is that you lose your funds. You can contact the exchange for support in this case.

---

## Fees Explained

*Article ID 900001987323 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

We've received a few questions from Daedalus users regarding fees. Here are some important points to consider:

- There is a transaction fee when transferring funds from Byron wallets to Shelley wallets. This is because transferring funds requires a transaction, and every transaction pays a fee, this protects the network against some attacks. 

- There is a refundable deposit of 2 ada for registering a stake address. So, the first time you delegate to a pool you register your stake keys, by the protocol parameters this incurs in a KeyDeposit of 2 ada which you get back when you undelegate your wallet. 

How minUTxOvalue impacts fees: 

There is another factor playing a roll when calculating fees, namely: minUTXOvalue.  This is a parameter that determines the minimum size of a UTXO for it to be created. Currently it is set to 1 ADA and it is to be revised frequently depending on ADA market value. 

minUTXOvalue is a security parameter that prevents "flood attacks" making them costly. A flood attack is where malicious users could exploit the block size limit to overwhelm the blockchain with low-valued spam transactions, and cause delay in the verification of legitimate transactions.

So, at this moment and for the security of the network, the output of a transaction cannot be less than 1 ADA. This may impact what users pay as transaction fees. If the UTXO to be created as an output of a transaction is less than 1 ADA, this UTXO cannot be created and then that output is included as transaction fee. 

For example: 

A transaction of exactly 9 ADA that uses a UTXO containing exactly 10 ADA, pays a transaction fee of ~0.18 ADA. However, the output of such a transaction (the change of the transaction) would involve creating a new UTXO of roughly 0.82 ADA. This is not possible given the current minUTXOvalue. Therefore, this output is also included as transaction fee,  and this particular transaction would pay 0.18 + 0.82 as transaction fees.

In contrast, If instead of 9 ADA, this transaction is of 8.81 ADA and spends a UTXO containing 10 ADA, the transaction fee is also of ~0.18 ADA. But this time, the new UTXO that this transaction creates is greater than 1 ADA, a valid UTXO value. So this transaction only pays an effective transaction fee of ~0.18 ADA.

So, depending on the UTXOs used in a transaction and the new UTXO that the transaction creates, small increments or decrements on the amount to send may have an impact on the actual transaction fees paid.

You can check your wallet's UTXO distribution in Daedalus going to  More &gt; Wallet UTXO distribution. 

 ​

![screenshot](/attachments/token/kQUlwUXGLSwOAxcBZM7m1EG72/?name=Screen+Shot+2020-08-11+at+06.48.52.png)

For more information about Wallet UTXO Distribution, please see [Wallet UTXO distribution ​](https://iohk.zendesk.com/hc/en-us/articles/360034118013)

For more information about fees, please see [Cardano fee structure.](https://docs.cardano.org/explore-cardano/fee-structure#gatsby-focus-wrapper)

---

## Flush DNS Cache (Windows) 

*Article ID 360021447393 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Flushing the DNS cache removes all the information stored in the cache and forces the computer to fetch new DNS information.

Open your “Windows Command” prompt.

Click “Start” and type the word “Command” in the Start search field. Finally, right-click the command prompt icon and select the option to “Run as Administrator”.
At the command prompt, type the command ipconfig /flushdns

You should receive a message of your success as confirmation when the cache is cleared.

[![screenshot](zendesk_kb_daedalus_assets/360033706473_Screen_Shot_2019-04-25_at_12.58.45_PM.png)](http://dc9wlm4wphap8.cloudfront.net/support/wp-content/uploads/2013/04/flush1.png)

 

This video explains how to flush the DNS cache on Windows

For those who are technically inclined, flushing the DNS cache gets a new random relay from the round-robin.

```relays.cardano-mainnet.iohk.io. 39 IN A 13.229.186.195
relays.cardano-mainnet.iohk.io. 39 IN A 52.199.179.146
relays.cardano-mainnet.iohk.io. 39 IN A 13.112.75.209
relays.cardano-mainnet.iohk.io. 39 IN A 13.250.124.239
relays.cardano-mainnet.iohk.io. 39 IN A 52.68.71.200
relays.cardano-mainnet.iohk.io. 39 IN A 13.112.180.247
relays.cardano-mainnet.iohk.io. 39 IN A 13.229.162.6
relays.cardano-mainnet.iohk.io. 39 IN A 13.230.166.230```

If one of those IP's was blocked but not another one, you'd experience the "Cannot Connect to Network" message.

---

## Get to know your node logs

*Article ID 4406070442137 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Daedalus is a full node wallet. This means that there is a cardano-node running under the hood on your machine when you use Daedalus. Understanding the logs from the node can be helpful, in particular when there is an issue with your wallet.

 

To see your logs in real time:

Open PowerShell (Windows) or a Terminal (macOS and Linux) 

Copy/paste the following command: 

- 
on Windows

Get-Content -tail 0  .\AppData\Roaming\”Daedalus Mainnet”\Logs\pub\node.log -Wait

 

- 
on macOS

tail -fn 0 ~/Library/Application\ Support/Daedalus\ Mainnet/Logs/pub/node.log 

 

- 
on Linux

tail -fn 0 ~/.local/share/Daedalus/mainnet/Logs/pub/node.log

Prompt will blink until you
Open Daedalus

 

### This is what a well-functioning node looks like:

### 1. Node initialization

When you launch Daedalus, logs show the network you are connecting to, node version, node startup time, and blockchain parameters:

[cardano.node.networkMagic:Notice:5] [Date Time] NetworkMagic 764824073
[cardano.node.basicInfo.protocol:Notice:5] [Date Time] Byron; Shelley
[cardano.node.basicInfo.protocol:Notice:5] [Date Time] 1.27.0
[cardano.node.basicInfo.protocol:Notice:5] [Date Time] 8fe46140a52810b6ca456be01d652ca08fe730bf
[cardano.node.basicInfo.nodeStartTime:Notice:5] [Date Time] 2021-09-07 02:36:29.124891 UTC
[cardano.node.basicInfo.systemStartTime:Notice:5] [Date Time] 2017-09-23 21:44:51 UTC
[cardano.node.basicInfo.slotLengthByron:Notice:5] [Date Time] 20s
[cardano.node.basicInfo.epochLengthByron:Notice:5] [Date Time] 21600
[cardano.node.basicInfo.slotLengthShelley:Notice:5] [Date Time] 1s
[cardano.node.basicInfo.epochLengthShelley:Notice:5] [Date Time] 432000
[cardano.node.basicInfo.slotsPerKESPeriodShelley:Notice:5] [Date Time] 129600
[cardano.node.basicInfo.slotLengthAllegra:Notice:5] [Date Time] 1s
[cardano.node.basicInfo.epochLengthAllegra:Notice:5] [Date Time] 432000
[cardano.node.basicInfo.slotsPerKESPeriodAllegra:Notice:5] [Date Time] 129600
[cardano.node.basicInfo.slotLengthMary:Notice:5] [Date Time] 1s
[cardano.node.basicInfo.epochLengthMary:Notice:5] [Date Time] 432000
[cardano.node.basicInfo.slotsPerKESPeriodMary:Notice:5] [Date Time] 129600

### 2. Network setup

Then, the node gets ready to connect to the network: sets a port for the node socket, the diffusion mode, and gets all the IPs or DNS of the nodes it will attempt to connect to.

[cardano.node.addresses:Notice:5] ... [SocketInfo 0.0.0.0:59155,SocketInfo [::]:59155]
[cardano.node.diffusion-mode:Notice:5] ... InitiatorAndResponderDiffusionMode
[cardano.node.dns-producers:Notice:5] ... [DnsSubscriptionTarget {dstDomain = "relays-new.cardano-mainnet.iohk.io", dstPort = 3001, dstValency = 1}]
[cardano.node.ip-producers:Notice:5] ... IPSubscriptionTarget {ispIps = [], ispValency = 0}

### 3. Construct LedgerState and opening databases

Before starting any connection attempts, the node performs a resource-intensive and time-consuming task: constructing a LedgerState that corresponds to the LedgerState at the tip of the ImmutableDB (the part of the blockchain that cannot change.) This task can take from a few minutes to several hours, depending on many factors such as: Database state, when the last time it was in sync, whether it was closed cleanly or not,  CPU and RAM. This process is not logged at the default configuration level, but logs show when the databases are finally opened. 

The node opens the immutable DB, volatileDB, and LedgerDB: 

[cardano.node.ChainDB:Info:31] ... Opened imm db with immutable tip at
  a6c63f8f8230ad0aaa1d9086655a4d10740e94d18ae34584169e95dac78065b0 at slot 39371215 and chunk 1822
[cardano.node.ChainDB:Info:31] ... Opened vol db
[cardano.node.ChainDB:Info:31] ... Replaying ledger from snapshot DiskSnapshot {dsNumber = 39367150, dsSuffix = Nothing}
  at f81ff147dd36ab19a63b58c70e2cad3764c309579431655da347a046d9cb108a at slot 39367150
[cardano.node.ChainDB:Info:31] ... Replayed block: slot SlotNo 39367187 of At (SlotNo 39371215)
[cardano.node.ChainDB:Info:31] ... before next, messages elided = 39367224
[cardano.node.ChainDB:Info:31] ... Replayed block: slot SlotNo 39371215 of At (SlotNo 39371215)
[cardano.node.ChainDB:Info:31] ... Opened lgr db
[cardano.node.ChainDB:Info:31] ... Opened db with immutable tip at 
  a6c63f8f8230ad0aaa1d9086655a4d10740e94d18ae34584169e95dac78065b0 at slot 39371215 

### 3. Connection attempt

Once the node has a LedgerState ready and databases opened, it is ready to establish connections with other nodes and update its copy of the blockchain. By default, Daedalus is configured to connect to the relays at relays-new.cardano-mainnet.iohk.io We have several servers behind this DNS, the node attempts to connect to all of them, when it establishes a good connection with one of the relay nodes, you see ConnectSuccessLast and the connection attempts to the other relays are cancelled SubscriberParallelConnectionCancelled

[cardano.node.DnsSubscription:Notice:73] ... Domain: "relays-new.cardano-mainnet.iohk.io" 
  Connection Attempt Start, destination 18.223.202.44:3001
[cardano.node.DnsSubscription:Notice:74] ... Domain: "relays-new.cardano-mainnet.iohk.io" 
  Connection Attempt Start, destination 18.157.126.47:3001
[cardano.node.DnsSubscription:Notice:75] ... Domain: "relays-new.cardano-mainnet.iohk.io" 
  Connection Attempt Start, destination 18.133.40.48:3001
[cardano.node.DnsSubscription:Notice:73] ... Domain: "relays-new.cardano-mainnet.iohk.io" 
  Connection Attempt End, destination 18.223.202.44:3001 outcome: ConnectSuccessLast
[cardano.node.ErrorPolicy:Notice:56] ... IP 18.157.126.47:3001 ErrorPolicySuspendConsumer 
  (Just (ConnectionExceptionTrace (SubscriberError {seType = SubscriberParallelConnectionCancelled, 
  seMessage = "Parallel connection cancelled", seStack = []}))) 1s
[cardano.node.ErrorPolicy:Notice:56] ... IP 18.133.40.48:3001 ErrorPolicySuspendConsumer 
  (Just (ConnectionExceptionTrace (SubscriberError {seType = SubscriberParallelConnectionCancelled, 
  seMessage = "Parallel connection cancelled", seStack = []}))) 1s

### 4. Synchronization

Finally the node starts fetching new blocks and applying the ledger rules to each of them to create its copy of the blockchain. 

[cardano.node.ChainDB:Notice:37] ... Chain extended, new tip: 681662266157c173b580ce3c0d5aadfb4bf09c40bef39bdc3e12fc849e4cd61e at slot 39415881
[cardano.node.ChainDB:Notice:37] ... Chain extended, new tip: cef28288211af3a2549a1fdf89c233798ee6fc94ad497b3f9c96f694cb55c2e2 at slot 39415962

 

### Use your node logs to diagnose problems:

Connecting to network is, perhaps, one of the most frequent problems you can encounter.

![screenshot](zendesk_kb_daedalus_assets/4406078361625_Screen_Shot_2021-09-07_at_3.17.29.png)

There can be several reasons for this, below we explore the most common:

 

1. The node is still calculating the LedgerState, and it has not reached the point where it can open the blockchain databases. When this is the case, typically the last line you see in the log file from a running node is as follows:

[cardano.node.ip-producers:Notice:5] [Date Time] IPSubscriptionTarget {ispIps = [], ispValency = 0}

It can remain like this for a very long time, even a few hours, depending on the DB state, CPU and RAM of your system. 

Solution:

Make sure your machine meets the [System Requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553-Daedalus-system-requirements)
Optimize your machine performance (see: ['Connecting to network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913))
Wait for the process to complete.  
To prevent this, always close Daedalus correctly (i.e. Do not close your laptop with Daedalus opened.)

2. Verifying the blockchain when starting Daedalus you might see: "Verifying the blockchain (%complete)". It can start from 0% or from a more recent point in time, i.e. 80%.

![screenshot](zendesk_kb_daedalus_assets/4406070844697_Screen_Shot_2021-09-07_at_0.41.48.png)

The node.log says:

[iMac:cardano.node.ChainDB:Info:31] [Date Time] Replayed block: slot SlotNo 32767193 of At (SlotNo 39074363)
[iMac:cardano.node.ChainDB:Info:31] [Date Time] block replay progress (%) = 83.9

 

Other times you might see your node "stuck" in

[cardano.node.ChainDB:Info:31] ... Opened lgr db

When the Ledger state snapshot stored in your disk is older than the immutable tip, the node has to reapply the blocks after the snapshot to obtain the ledger state at the immutable tip.

If there is no valid snapshot to try, the node has to reapply all blocks starting from genesis to obtain the ledger state at the immutable tip.

Taking long time frequently means some data corruption has occurred the last time you closed Daedalus. i.e. it was not closed cleanly, was shutdown in the middle of a blockchain verification process, etc. 

 

Solution:

- Make sure your machine meets the [System Requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553-Daedalus-system-requirements)

- Optimize your machine performance (see: ['Connecting to network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913))

- No workaround, the process needs to complete

- It can take several hours, so it is a good idea to let Daedalus run overnight if it started from 0%

- Make sure to disable sleep mode so that the process does not get interrupted

- Do not restart Daedalus or the node during the process

- Synchronizing your wallet frequently can prevent this

3. Failed to start all required subscriptions.  When the node fails to start the required subscriptions, and the logs do not show any other error message, it is likely that there is a local firewall rule blocking cardano-node. This rule might not affect any other services or applications. 

node.log

[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription

 

Solution:

Check your firewall rules to ensure cardano-node outgoing connections are allowed.

- Windows: [Verify the outgoing rules for the ACTIVE network profile.](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/best-practices-configuring) If needed, [create an OUTBOUND rule](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-outbound-program-or-service-rule) for cardano-node and cardano-wallet 

- 
macOS: macOS firewall allows all outgoing connections by default. If you are using macOS firewall, it should not be causing any problems. If you are using an alternative firewall, allow outgoing connections for Daedalus, cardano-node, and cardano-wallet. 

- 
Linux: Allow outgoing connections. 

4. NTP Servers unreachable + Failed to start all required subscriptions. Similar to the one above, but this time Daedalus also shows a red screen saying that NTP servers are unreachable. It is likely that there is a local firewall rule blocking cardano-node and cardano-wallet or a failure in the internet connection. 

node.log

[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription
[cardano.node.DnsSubscription...] Domain: "relays-new.cardano-mainnet.iohk.io"
Failed to start all required subscription

![screenshot](zendesk_kb_daedalus_assets/4406192565913_Screen_Shot_2021-09-09_at_10.25.46.png)

Solution:

- Check your internet connection, it might be off.

- Check your firewall rules to ensure cardano-node AND cardano-wallet outgoing connections are allowed. Note that there might be a broader rule in your firewall that blocks them both. 

- Less frequently, an ISP might have some restrictive rules in place. Try using a different ISP. 

5. Connection timed out (WSAETIMEDOUT) This error message usually means that a network firewall (not your local firewall) is blocking the connection. Usually happens when you are connecting at a corporate network (company or office network) or a public network (hotel, airports, etc.)

node.log

[cardano.node.ErrorPolicy:Notice:44]... IP 204.236.187.238:3001 ErrorPolicySuspendConsumer 
(Just (ConnectionExceptionTrace Network.Socket.connect: &lt;socket: 900&gt;: failed 
(Connection timed out (WSAETIMEDOUT)))) 20s

Solution:

- Use a different network, or

- Talk to the network administrator.

6. Exceeded time limit.  The servers failed to reply on time over the chainsync protocol. The server has 10 seconds in which it must either reply with a roll forward/backward message, or tell the client to wait longer.

node.log

[cardano.node.IpSubscription:Error:77882]IPs: ...  Application Exception: ...
ExceededTimeLimit (ChainSync (Header (HardForkBlock (': * ByronBlock (': * ...

Solution:

- Wait a few minutes, the node will try to connect to a different relay node (peer) 

 

See other [Known Issues - all Daedalus wallet editions](https://iohk.zendesk.com/hc/en-us/articles/360011451693) 

 

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form. For timely resolution, please be sure to send your logs with your request. Please see also [How to download log files](https://iohk.zendesk.com/hc/en-us/articles/360009819834)

---

## Getting help with Daedalus open source code

*Article ID 360021173934 | Last updated 2021-08-03 | Category: Daedalus Mainnet*

This support portal is for end-user support only.

For development support, please open a GitHub issue on the Daedalus repo here: [https://github.com/input-output-hk/daedalus/issues](https://github.com/input-output-hk/daedalus/issues)

If you are curious for a quick guide on how creating a Github issue works, this is a [concise video from Github](https://youtu.be/TJlYiMp8FuY)

---

## Help Article Template

*Article ID 360016406974 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Notes: 

This is for TSD team use with the Zendesk Knowledge Capture App. 

Delete this comment before publishing an article based on this template.

 This article is not visible to the public.  

 [Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): [specify Daedalus edition(s)] this is only for articles in Mainnet Daedalus Wallet category

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000038406):[specify Ada Holder Component(s)] this is only for articles in Incentivized Testnet Ada Holders category.

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000029423):[specify Stake Pool Operator Component(s)] this is only for articles in Incentivized Testnet Stake Pool Operators category.

### Problem

Blah Blah

### 
Cause 

Blah Blah

### Solution

Blah Blah

---

## High CPU and RAM utilization

*Article ID 900000780843 | Last updated 2021-10-06 | Category: Daedalus Mainnet*

Daedalus is a full-node wallet. It runs cardano-node which is a resource intensive application responsible for executing the Ouroboros protocol making all the chain-selection and block-processing decisions locally on your system.

The expected resources utilization for cardano-node is as follows:

- CPU: 1 core at ~100%

- RAM: 6 to 7 GB

Make sure that your system meets the [Daedalus System Requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553)to ensure successful operation.

---

## How to Redeem Incentivized Testnet (ITN) Rewards

*Article ID 900001656586 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

If you participated in the Incentivized Testnet (ITN) and earned rewards by running a stake pool or delegating your stake, you can now redeem your rewards as ada on the Cardano mainnet. 

Daedalus Mainnet has a “Redeem Incentivized Testnet rewards” feature which allows the redemption of ITN rewards to a Shelley wallet. 

To redeem your ITN rewards in the latest version of Daedalus, you must have the following:

- The 15-word ITN wallet recovery phrase (from the Daedalus Rewards wallet that contains the rewards.)

- A Shelley wallet with enough funds to pay the transaction fees. 

NOTE: You can not redeem your ada if you lost your 15-word ITN wallet recovery phrase, even you can access to your rewards balance from your ITN wallet.

 

### How to redeem ITN rewards. Daedalus users and stake pools with a recovery phrase.

1. Have a Shelley wallet restored on Daedalus, you need it to have funds to pay for the transaction fee. 

2. On the main menu, click on the Daedalus Mainnet &gt; Redeem ITN rewards

![screenshot](zendesk_kb_daedalus_assets/900008592426_Screen_Shot_2021-05-19_at_12.40.43.png)

Input the Recovery phrase from your ITN wallet, and select the Shelley wallet that will receive the funds and pay for the transaction fee. 

![screenshot](zendesk_kb_daedalus_assets/900004054763_Screen_Shot_2020-10-14_at_12.53.28.png)

Next, enter your Shelley-wallet spending password, and click "Confirm rewards redemption."

![screenshot](zendesk_kb_daedalus_assets/900004054903_Screen_Shot_2020-10-14_at_12.55.07.png)

You will then see a message confirming your redemption, similar to the one below.

![screenshot](zendesk_kb_daedalus_assets/900004087086_Screen_Shot_2020-10-14_at_12.55.47.png)

 

### For stake pools without a recovery phrase.

Stake pool that operated on ITN and only have ITN Key pair (Not a recovery phrase) please see: 

[Redeeming rewards from ITN with private/public keys](https://iohk.zendesk.com/hc/en-us/articles/900002480686)

 

 

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to change your Spending password

*Article ID 900000905723 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus Mainnet, Daedalus Rewards

Click from More &gt; Settings &gt; change (in the Password box) 

![screenshot](zendesk_kb_daedalus_assets/900001279346_Daedalus_Mainnet_Password_ENG.gif)

 The Spending password needs to be at least 10 characters long, and have at leat 1 uppercase letter, 1 lowercase letter and 1 number. 

See also:

[Reset wallet spending password](https://iohk.zendesk.com/hc/en-us/articles/360011102114)

---

## How to check Daedalus installer integrity

*Article ID 360038792814 | Last updated 2023-06-28 | Category: Daedalus Mainnet*

### Windows PGP signature verification instructions

- Obtain both the Daedalus installer .exe file, and its corresponding .exe.asc signature file -- put them in the same directory.

- Obtain the GnuPG package from [https://www.gpg4win.org/](https://www.gpg4win.org/)

- Proceed with installation and launch the Kleopatra component.

- 

Unless you already have a personal GPG key, you will have to create one (which is required for step 6):

- Select the menu item File -&gt; New keypair -&gt; Create a personal OpenPGP key pair.

- Enter a name and an email address that suit you personally.

- Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not recommended if you intend to use GNUPG in future).

- 

Import the IOHK key:

- File -&gt; Lookup on Server

- Allow network access to 'dirmngr', if the prompt arises

- Search for signing.authority@iohk.io

- If you cannot find the key, please make sure hkp://Keys.Openpgp.org (or any other maintained PGP key server of your choice) is used as Kleopatra's default key server.

- Import the key

- Do not certify the key just yet

- Right-click on the key, and choose "Details"

- Ensure that the fingerprint is 53D0FA8DA2B8D1FF4975AECBF99D6C70C2B3FB43

- If it's not, the wrong key was imported, right click and delete

- If it is, we are good to go

- 

Certify the IOHK key (this designates trust and is required for the next step):

- Once you have a personal GPG key, right-click on the imported IOHK key and choose Certify

- Enable the IOHK user ID

- Tick the I have verified the fingerprint checkbox (since you did, as per step 5), and proceed.

- You should receive a message saying Certification successful

- 

Verify the installer binary:

- Click the Decrypt/Verify button on the Kleopatra toolbar

- Choose the Daedalus installer .exe file in the file dialog (the .asc signature file must reside in the same directory)

- 

If the verification is successful, you will receive a green-tinted message box saying:

- Valid signature by signing.authority@iohk.io

- Date of signature

- With certificate 53D0 FA8D A2B8 D1FF 4975 AECB F99D 6C70 C2B3 FB43

- Anything else would constitute a signature verification failure.

###  

### 
macOS PGP signature verification instructions

- Obtain both the Daedalus installer .pkg file and its corresponding .pkg.asc signature file – put them in the same directory.

- If you already have the GPG Suite installed, and a personal key generated, please skip to step 5, and if not, proceed with the next step.

- Go to [https://gpgtools.org](https://gpgtools.org/), head to the GPG Suite section, download the .dmg file and install it:

- Right-click the .dmg file, then Open, which will open a new window with two icons: Install and Uninstall

- Right-click the Install icon, and choose Open with.. -&gt; Installer, which should start the GPG Suite installer

- Follow through the installation wizard

- Once GPG Suite installation completes, it will ask you to create a new key pair (this is required for step 6, so please don’t skip it):

- Enter a name and an email that suit you personally.

- Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not recommended if you intend to use this key and GPG Suite in future).

- Import the IOHK key using the GPG Keychain application:

- Select Key -&gt; Lookup Key on Key Server in the application menu

- Search for signing.authority@iohk.io

- Choose the key with fingerprint C2B3FB43 with the user ID “IOHK Signing Authority &lt;signing.authority@iohk.io&gt;”, then click Retrieve Key

- 

Verify (right-click the imported key, then Details) that the fingerprint of the imported key is 53D0 FA8D A2B8 D1FF 4975 AECB F99D 6C70 C2B3 FB43

- if it’s not, the wrong key was imported, right-click and delete

- if it is, we are good to proceed with the next step.

- Sign the imported IOHK key (this designates trust and is required for the next step):

- Right-click on the imported IOHK key, then “Sign”.

- Verify the installer binary:

- Right-click the Daedalus installer (.pkg file) in Finder (do NOT right click on the .asc file, that will not work), then select Services -&gt; OpenPGP: Verify Signature of File (the .asc signature file must reside in the same directory)

- The Verification Results dialog will then appear with the verdict:

Trusted signature
IOHK Signing Authority &lt;signing.authority@iohk.io&gt;
1429 962A 8C47 A3F9 24AE D49F D7B2 E172 D11C 4B3C
Anything different means there was no valid signature for the installer.

###  

### 
Linux PGP signature verification instructions

1. Obtain both the Daedalus installer .bin file, and its corresponding .bin.asc signature file and put them in the same directory.
2. Ensure that the gpg2 is available (assuming Ubuntu Linux) in your shell, and if not, install it with:

apt-get install gnupg2

3. Generate your GPG keys if you don't have them already.

gpg2 --generate-key

Provide a user ID (real name and email)
Choose a passphrase to protect your personal key (NOTE: the passphrase can be empty, but it is not recommended if you intend to use this key and GNUPG in future)

4. Import the IOHK key:

gpg2 --keyserver hkp://Keys.Openpgp.org --search-keys [signing.authority@iohk.io](mailto:signing.authority@iohk.io)

In the selection dialogue, choose the key with fingerprint F99D6C70C2B3FB43 

5. Sign the IOHK key (this designates trust and is required for the next step):

gpg2 --lsign 53D0FA8DA2B8D1FF4975AECBF99D6C70C2B3FB43

6. Verify the installer binary using the .asc signature (the .asc signature file must reside in the same directory of the installer binary):

gpg2 --verify daedalus-5.2.0-mainnet-22505-x86_64-linux.bin.asc

7. Successful verification should produce a message like follows:

gpg: assuming signed data in daedalus-4.2.0-mainnet-18540.bin.pkggpg: Signature made 
...DATE...gpg: using RSA key 1429962A8C47A3F924AED49FD7B2E172D11C4B3Cgpg: checking 
the trustdbgpg: marginals needed: 3 completes needed: 1 trust model: pgpgpg: depth:
 0 valid: 1 signed: 1 trust: 0-, 0q, 0n, 0m, 0f, 1ugpg: depth: 1 valid: 1 signed: 0 
trust: 1-, 0q, 0n, 0m, 0f, 0ugpg: next trustdb check due at ...DATE...gpg: 
Good signature from IOHK Signing Authority

---

## How to check your 27-word Daedalus paper wallet recovery phrase

*Article ID 360024924334 | Last updated 2021-08-31 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus paper wallet

Problem

You are worried that your all-important 27-word Daedalus paper wallet recovery phrase is correct, and would like to verify it. 

Cause

The 27-word Daedalus paper wallet recovery phrase is the most important piece of information related to controlling ada via the Daedalus wallet and it is difficult to remember so it may be necessary to validate it from time to time for piece-of-mind.  

Solution

You have to restore a Paper wallet to check the 27-word Daedalus paper wallet recovery phrase. By design, and for the security of your ada, there is no other way to check your 27-word Daedalus paper wallet recovery phrase
 
Please see the article [Restoring a paper wallet](https://iohk.zendesk.com/hc/en-us/articles/360010587413) for more details.

---

## How to download log files

*Article ID 360009819834 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### If Daedalus does start

If Daedalus starts but you experience syncing or connectivity issues, you should be able to use this method.

1. Navigate to the Download Logs menu item in the Help menu. 

![screenshot](zendesk_kb_daedalus_assets/360043598014_Screen_Shot_2019-08-14_at_12.46.48_PM.png)

2. Save the logs in your desired location

![screenshot](zendesk_kb_daedalus_assets/360044451213_Screen_Shot_2019-08-14_at_12.50.41_PM.png)

 

3. Send your logs to the Technical Support Desk 

### If Daedalus will not start

This option is only if Daedalus will not start at all. 

Windows

- Type %appdata% in the Windows Explorer search bar

- Open the Daedalus Mainnet folder

- Open the Logs folder

- Find the Pub folder

- Zip the Pub folder

macOS

On the Finder’s menu bar select Go

Click Go to Folder…

Type ~/Library/Application Support/Daedalus Mainnet

Note that if you cannot find the Daedalus folder your Library folder may be hidden. You will need to [Unhide the Library folder](https://iohk.zendesk.com/hc/en-us/articles/360011496773).

- Open the Logs folder

- Find the Pub folder

- Zip the Pub folder

Linux

Navigate to ~/.local/share/Daedalus/mainnet

- Zip the Logs folder

---

## How to get help for Daedalus

*Article ID 360015359294 | Last updated 2021-11-12 | Category: Daedalus Mainnet*

Self Help

We encouraged the community to refer to the [IOHK Support Portal.](https://iohk.zendesk.com/hc/en-us)Here, you will find the answers to many commonly asked questions.

IOHK Support

For additional assistance, please be sure to submit a ticket to the IOHK Technical Service Desk from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to get wallet public key from Daedalus wallet 

*Article ID 900002934603 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

1. Go to Wallet&gt;More&gt;Settings

![screenshot](zendesk_kb_daedalus_assets/4404002541081_Screen_Shot_2021-07-22_at_16.22.25.png)

2. Click on Wallet public key &gt; Reveal  

![screenshot](zendesk_kb_daedalus_assets/4404002547225_Screen_Shot_2021-07-22_at_16.30.34.png)

3. Enter your spending password to authorize 

![screenshot](zendesk_kb_daedalus_assets/4404002550297_Screen_Shot_2021-07-22_at_16.22.38.png)

 

4. Your wallet's public key is displayed

![screenshot](zendesk_kb_daedalus_assets/4404002552473_Screen_Shot_2021-07-22_at_16.23.49.png)

 

5. Follow similar steps to get your wallet multi-signature public key

![screenshot](zendesk_kb_daedalus_assets/4404002562201_Screen_Shot_2021-07-22_at_16.21.58_copy.png)

---

## How to pair Ledger wallets with Daedalus

*Article ID 900004729203 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Ledger pre-requisites

- Ledger is currently available on MacOS, Linux, and Windows;

- Start by installing [Ledger Live.](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true)

- Ensure your hardware wallet's firmware is up to date by connecting your device to the official [update Ledger Nano firmware](https://support.ledger.com/hc/en-us/articles/360013349800-Update-Ledger-Nano-X-firmware?docs=true) application.

- Install the latest version of the Cardano App on your ledger device using [installing Cardano (ADA) app.](https://support.ledger.com/hc/en-us/articles/360020095874-Cardano-ADA-?docs=true)

![screenshot](zendesk_kb_daedalus_assets/900005954343_a57f1eb2f6e32b329a917f7bbc695ee.png)

###  

### Pairing your Ledger hardware wallet with Daedalus

In Daedalus, go to ‘Add wallet’ and click the ‘Pair’ button.

![screenshot](zendesk_kb_daedalus_assets/900005018446_d0ebd376a0bcb1b426bad2f4ac3af54.png)

Connect your device to your computer and follow the on-screen instructions to:

1. Connect your device and unlock it by entering the PIN

2. Launch Cardano ADA app on your Ledger device

![screenshot](zendesk_kb_daedalus_assets/900005023526_76668a9d3d9660afbdf889c74da0971.png)

3. Export your public key

![screenshot](zendesk_kb_daedalus_assets/900005953403_ae7a47ba56a4869a7627ea865135d27.png)

Your Ledger device will show this notification, press two buttons to continue.

![screenshot](zendesk_kb_daedalus_assets/900005019166_mceclip6.png)

Confirm export public key by pressing two buttons.

![screenshot](zendesk_kb_daedalus_assets/900005953723_mceclip4.png)

Your Ledger hardware wallet is successfully paired with Daedalus and the wallet restoration will start.

![screenshot](zendesk_kb_daedalus_assets/900005954003_mceclip7.png)

Once your Ledger wallet is synced with the blockchain, you will be able to make transactions and delegate your Ledger hardware wallet to stake pools. 

 

Troubleshooting pairing issues

You may encounter connection issues when trying to connect your Ledger Nano X or Nano S device. If this occurs, try the solutions in this [article.](https://support.ledger.com/hc/en-us/articles/360023518653)

For feedback or support, please be sure to submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new)form.

---

## How to pair Trezor T with Daedalus 

*Article ID 900004828803 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Trezor pre-requisites

- Install Trezor Suite from [https://suite.trezor.io/](https://suite.trezor.io/) and setup your Trezor device

- Ensure your hardware wallet's firmware is up to date. 

- Install [Trezor BRIDGE](https://suite.trezor.io/web/bridge/) 

### Pairing your Trezor hardware wallet with Daedalus

1. Connect and unlock your Trezor device before opening Daedalus.

![screenshot](zendesk_kb_daedalus_assets/900005176006_900005176006.png)

2. Open Daedalus.

3. Ensure Trezor BRIDGE is running.

![screenshot](zendesk_kb_daedalus_assets/21886205505049_21886205505049.png)

3. In Daedalus, go to ‘Add wallet’ and click the ‘Pair’ button.

![screenshot](zendesk_kb_daedalus_assets/900005175966_900005175966.png)

4. Export your public key

![screenshot](zendesk_kb_daedalus_assets/900005175986_900005175986.png)

5. Your Trezor T device will show this notification, confirm to continue: 

![screenshot](zendesk_kb_daedalus_assets/900006104823_900006104823.png)

6. Your Trezor hardware wallet is successfully paired with Daedalus and the wallet restoration starts.

![screenshot](zendesk_kb_daedalus_assets/900006104843_900006104843.png)

7. Once your Trezor wallet is synced with the blockchain, you will be able to make transactions and delegate your wallet to stake pools.

---

## How to restore Byron wallets in Adalite (Daedalus inaccessible)

*Article ID 4414103909913 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

When Daedalus is too heavy to function on your machine and Yoroi doesn't support the restoration of Byron legacy wallets with 12-word recovery phrase. 

 

### Solution

Please use Adalite([https://adalite.io/](https://adalite.io/)) wallet to access your funds that were stored in a Byron legacy wallet with 12-word recovery phrase.

1. Visit Adalite wallet website from here: [https://adalite.io/.](https://adalite.io/)

2. Choose Fastest - Mnemonic(Recovery phrase).

![screenshot](https://iohk.zendesk.com/hc/article_attachments/4414093864089/blobid0.png)

 

3. Enter the 12-word recovery phrase for your Byron legacy wallet. Then click Unlock.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/4414093913113/blobid1.png)

 

4. Your Byron wallet will be restored after a few seconds. 

 

Note: After your wallet is restored in Adalite wallet, you will see a warning says: You are accessing Shelley incompatible wallet. This is because we are in the Shelley era and all wallets should be updated to Shelley wallets. We highly suggest you create a Shelley wallet to store your funds.

---

## How to symlink Daedalus chain folder

*Article ID 900004340586 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

There are various reasons why one might wish to symlink the Daedalus chain folder to another location (e.g. lack of storage space, convenience, etc.)

 

Follow the steps below to create a symlink on Windows, Ubuntu or Mac:

 

### Locate the Daedalus chain folder

Find the chain folder according to your chosen platform. On Daedalus Mainnet it is located at:

### Windows

"C:\Users\&lt;username&gt;\AppData\Roaming\Daedalus Mainnet"

###  

### Ubuntu

“/home/&lt;username&gt;/.local/share/Daedalus/mainnet”

 

### Mac

“/Users/&lt;username&gt;/Library/Application\ Support/Daedalus\ Mainnet“ 

 

![screenshot](zendesk_kb_daedalus_assets/4415146620441_4415146620441.png)

### Create a symlink to an external drive on Windows

### 
Windows:

a) Move the “chain” folder and its content to the desired location, in this example we moved it to the  D:\chain folder. Make sure that the chain folder has been removed from the original location or the next step will fail. 

b) Run command prompt as administrator

c) At the prompt, type

mklink /d "C:\Users\&lt;username&gt;\AppData\Roaming\Daedalus Mainnet\chain" "D:\chain"

 

In the above example, we moved the Daedalus chain folder to the D:\chain folder and created a symlink.

 

### Create a symlink to an external drive on Ubuntu &amp; Mac

If you are symlinking to an external drive or partition on Ubuntu &amp; Mac, mount the external drive or partition to the user's home directory before symlinking. 

### Mac:

        a) Plug in the external drive and open a terminal window

        b) At the prompt, type: 

diskutil list

![screenshot](zendesk_kb_daedalus_assets/12254729623193_12254729623193.png)

For example, if the external drive you want to use is called DAGU, you can find its identifier is disk2s1.    

c) Create a new directory inside the home directory to mount the external drive:

mkdir /Users/&lt;username&gt;/mount

        d) Choose the external drive or partition by using the identifier to mount inside the user's home directory:

diskutil mount /dev/disk2s1 /Users/&lt;username&gt;/mount

Obs: If you are using MacOS 10 or newer, you will need to run this command with a different syntax:

diskutil mount -mountPoint /Users/&lt;username&gt;/mount /dev/disk2s1

        e) Move the “chain” folder and its content to the desired location, in this example we moved it to the  /Users/&lt;username&gt;/mount folder. Make sure that the chain folder has been removed from the original location or the next step will fail. 

        f) To create a symlink, type the following at the command prompt:

ln -s /Users/&lt;username&gt;/mount/chain /Users/&lt;username&gt;/Library/Application\ Support/Daedalus\ Mainnet/

 

### Ubuntu:

        a) Plug in the external drive       

        b) Find the drive information

sudo fdisk -l       

         c) Create a new directory inside the home directory to mount the external drive

  sudo mkdir /home/user/mount

         d) Mount the ext drive inside the home for example:

sudo mount /dev/sdb1 /home/user/mount

         e) Move the “chain” folder and its content to the desired location, in this example we moved it to the /home/user/mount folder. Make sure that the chain folder has been removed from the original location or the next step will fail. 

         f) To create a symlink, type the following at the command prompt:

ln -s /home/user/mount/chain /home/&lt;username&gt;/.local/share/Daedalus/mainnet

---

## How to use Ledger and Trezor HW with Daedalus

*Article ID 900004722083 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Trezor prerequisites

- Trezor support is available on MacOS, Windows and Linux devices

- Install Trezor Suite from [https://suite.trezor.io/](https://suite.trezor.io/) and setup your Trezor device

- Ensure your hardware wallet's firmware is up to date by connecting your device to the official [Trezor wallet web interface](https://trezor.io/start/)

- Install [Trezor BRIDGE](https://suite.trezor.io/web/bridge/)

### Ledger prerequisites 

- Ledger support is available on MacOS, Windows and Linux devices

- Start by installing [Ledger Live](https://www.ledger.com/ledger-live)

- Ensure your hardware wallet's firmware is up to date by connecting your device to the official [Ledger Live](https://www.ledger.com/ledger-live) application

- Install the latest version of the Cardano App in your ledger device using [Ledger Live](https://www.ledger.com/ledger-live).

### Linux + Ledger prerequisites 

- Linux users pairing a Ledger HW need to create a set of udev rules to allow device access, please refer to [https://support.ledger.com/hc/en-us/articles/115005165269](https://support.ledger.com/hc/en-us/articles/115005165269)

 

### Pairing your hardware wallet with Daedalus

In Daedalus, go to ‘Add wallet’ and click the ‘Pair’ button.

![screenshot](zendesk_kb_daedalus_assets/900005004426_900005004426.png)

Connect your device to your computer and follow the on-screen instructions. If your device is PIN-locked, you will need to unlock it and confirm your public key.

![screenshot](zendesk_kb_daedalus_assets/900005004446_900005004446.png)

Your hardware wallet will now be displayed in the list of wallets on the left side. An icon next to the wallet's name will identify this device as a hardware wallet. 

![screenshot](zendesk_kb_daedalus_assets/900005937543_900005937543.png)

![screenshot](zendesk_kb_daedalus_assets/900005937583_900005937583.png)

For specific instructions on how to pair each hardware wallet model, please see: [How to pair Ledger Nano X or Ledger Nano S with Daedalus](https://iohk.zendesk.com/hc/en-us/articles/900004729203) or [How to pair Trezor T with Daedalus](https://iohk.zendesk.com/hc/en-us/articles/900004828803)

### Sending ada

Once your wallet’s transaction history and balance are synchronized with the blockchain, you will be able to start making new transactions.

Sending ada using hardware wallets is similar to sending ada using regular (software) wallets. The only difference is the confirmation of the transaction, which happens on the hardware wallet device instead of Daedalus, using a spending password. Hardware wallets do not require a spending password since these  devices are designed to protect your private keys.

To confirm your transaction, make sure the correct hardware wallet is connected to your computer, and follow the on-screen instructions. 

After confirming the transaction on the hardware wallet, the Send button will be enabled. Press this button to send the transaction to the Cardano network.

![screenshot](zendesk_kb_daedalus_assets/900005937603_900005937603.png)

![screenshot](zendesk_kb_daedalus_assets/900005004466_900005004466.png)

![screenshot](zendesk_kb_daedalus_assets/900005937623_900005937623.png)

### Delegating hardware wallets

You can see the current delegation preferences for your hardware wallets on the Delegation center.

![screenshot](zendesk_kb_daedalus_assets/900005937643_900005937643.png)

To delegate or re-delegate your hardware wallet, launch the Delegation Wizard and follow the on-screen instructions.

Make sure you have selected a hardware wallet during the wallet selection step. You can identify hardware wallets from regular (software) wallets by the icon displayed on the right side of the wallet’s name.

![screenshot](zendesk_kb_daedalus_assets/900005937683_900005937683.png)

After selecting a stake pool, you will need to confirm the delegation using your hardware wallet device in the last step of the Delegation Wizard.

![screenshot](zendesk_kb_daedalus_assets/900005937723_900005937723.png)

Once you have confirmed the delegation choice, the Confirm button will become enabled. Press the  button to finish the process and publish your delegation preferences on the Cardano blockchain.

![screenshot](zendesk_kb_daedalus_assets/900005004506_900005004506.png)

![screenshot](zendesk_kb_daedalus_assets/900005937763_900005937763.png)

### Viewing balance and transaction history

You don’t need to have your hardware wallet connected to your computer to see your wallet’s up-to-date balance and transaction history. The hardware wallet icon will be grayed out when your device is disconnected.

While Daedalus is running, your hardware wallet will be synchronized with the Cardano blockchain.

Connect your hardware wallet to your computer and follow the on-screen instructions when sending ada or delegating your wallet.

![screenshot](zendesk_kb_daedalus_assets/900005937783_900005937783.png)

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## How to verify your spending password

*Article ID 900000970126 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Problem

You are worried if your spending password is correct, and would like to verify it. 

Cause

For users who updated from Daedalus 0.15.1 (or earlier versions) to Daedalus 1.0.0 or newer versions, they might not be sure about their spending password. Resetting the spending password requires them to delete the wallets and restore it by using their recovery phrase. This might be considered risky for some users.

Note: If you don't have the recovery phrase, you'll lose access to your Ada forever!

Solution

Within the Daedalus interface, click on More &gt; Settings &gt; change (in the Password box) 

Enter the same spending password you have for three times in the password boxes below.

![screenshot](zendesk_kb_daedalus_assets/28342878565401_28342878565401.png)

If you can change the password successfully, then it means your spending password is correct.

If it shows your password is incorrect, then your original spending password is wrong, you may need to [Reset wallet spending password](https://iohk.zendesk.com/hc/en-us/articles/360011102114).

 

Please see also

[How to change your Spending password](https://iohk.zendesk.com/hc/en-us/articles/900000905723)

---

## Installing Daedalus Testnet wallet

*Article ID 360013271313 | Last updated 2021-08-11 | Category: Daedalus Mainnet*

Download the installers from the official source at [https://testnets.cardano.org](https://testnets.cardano.org/en/testnets/cardano/get-started/wallet/)

On macOS and Windows you just need to execute the installer as you do with any other application. 

 

### LINUX installation instructions

These steps assume you are comfortable running scripts in a Linux terminal and are logged into a graphical desktop session as a user other than root.

- 

Download [Daedalus testnet installer](https://testnets.cardano.org/en/testnets/cardano/get-started/wallet/)

- Give executable permissions with: 

chmod +x daedalus-4.2.0-testnet-18540.bin

- Run the installer* (for example):

~/Downloads/daedalus-4.2.0-testnet-18540.bin

- 

Start Daedalus using any of these methods:

a. Using the desktop Application menu
b. Run ~/.local/bin/daedalus-testnet
c. Run daedalus-testnet (works on Linux distributions that put ~/.local/bin in $PATH)

  

* Some Linux distributions might ask you to run some commands as root to enable kernel.unprivileged_userns_clone. If sudo is available, running these two commands should work:

- 

sudo sysctl -w kernel.unprivileged_userns_clone=1

- 

sudo sh -c "echo kernel.unprivileged_userns_clone=1 &gt; /etc/sysctl.d/nix-user-chroot.conf"

- Continue running the Installer

Note: There is no need to uninstall Daedalus from Linux prior to any version upgrade however if you would like to completely remove Daedalus from Linux please see the following article in our support portal: [How to uninstall Daedalus from Linux](https://iohk.zendesk.com/hc/en-us/articles/360013170694-How-to-uninstall-Daedalus-from-Linux)

---

## Lost or damaged Hardware Wallet

*Article ID 900007272203 | Last updated 2021-08-24 | Category: Daedalus Mainnet*

If your Hardware Wallet gets damaged or lost, it is important for you to know that you CANNOT use your recovery phrase from the Hardware wallet directly on Daedalus to access your funds, instead you need to restore the wallet using another device of the same brand and model to restore your wallet recovery phrase and regain access to your funds. See the relevant procedure for your brand and model:

 

- LEDGER Nano X and Nano S: [Restore from recovery phrase](https://support.ledger.com/hc/en-us/articles/4404382560913?support=true)

- TREZOR T: [Restore from recovery phrase](https://wiki.trezor.io/User_manual:Emergency_situations)

---

## Machine clock out of sync with Cardano network

*Article ID 360010230873 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Problem

Daedalus is displaying a red screen message related to your machine time being out of sync. 

![screenshot](zendesk_kb_daedalus_assets/360043602314_Screen_Shot_2019-08-14_at_1.33.01_PM.png)

### Cause

The time on your computer is not in sync with the network. If the time on your computer is off by more than 1 second from Network Time (used by Daedalus wallet), Daedalus wallet will not be able to connect to the network.

Note that the 'Connecting to Network' message can be caused by a number of problems. See ['Connecting to Network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913) article for more information. 

### Solution

To fix this issue, you will need to synchronize the time on your computer with a Network Time Protocol (NTP) server. To do this you will need to update the settings of your operating system as shown below.  

### Using the Daedalus Diagnostics Screen

Navigate to the Daedalus Diagnostics screen:

![screenshot](zendesk_kb_daedalus_assets/360044450333_Screen_Shot_2019-08-14_at_12.23.03_PM.png)

Click on the Check time button in the Daedalus Status group. 

![screenshot](zendesk_kb_daedalus_assets/360044450373_Screen_Shot_2019-08-14_at_12.22.05_PM.png)

 

### Manual Update Method:

Windows

- Press the Windows key +S (⊞+S)

- Type in Settings

- Go to Additional date, time &amp; regional settings

- Select Date and time settings. A new window will pop up.

![screenshot](zendesk_kb_daedalus_assets/360014338674_clock_sync_win.gif)

- Go to the Internet time tab

- Select Change settings

- Select Update now

- Back to Daedalus, click on Check the time again

![screenshot](zendesk_kb_daedalus_assets/4402142409369_Capture.PNG)

Note: there should be a message such as "The clock was successfully synchronized." If there's an error, try selecting Update now again or select a different server from the drop-down menu. 

macOS

- Click the clock that is located on the top right of the screen

- Select Open Date &amp; Time Preferences

- Check the lock icon in the lower-left of the settings window. If the lock is closed, click on the lock and enter your computer login password to unlock settings. 

- Check the Set date and time automatically box

![screenshot](zendesk_kb_daedalus_assets/360014469113_dateandtimewin.gif)

      5. Back to Daedalus, click on Check time again

          

![screenshot](zendesk_kb_daedalus_assets/4402142415769_Capture.PNG)

Linux

- Enable Automatic Date &amp; Time
 

![screenshot](zendesk_kb_daedalus_assets/4402149485337_Screen_Shot_2021-06-10_at_10.01.05.png)

- Back to Daedalus, click on Check the time again

![screenshot](zendesk_kb_daedalus_assets/4402142421785_Capture.PNG)

 

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## My transaction is not visible 

*Article ID 360011329914 | Last updated 2021-08-23 | Category: Daedalus Mainnet*

Problem

My transaction isn’t showing in Daedalus wallet where I normally [view transaction details](https://iohk.zendesk.com/hc/en-us/articles/360011323434). Where did my Ada go?

Cause

1. Exchanges have a requirement for a number of blocks to confirm before approving the ada transaction for trading. It will take some time for the transaction to be confirmed on the Cardano blockchain.

2. Sometimes a transaction is not seen in the network for various reasons.

Solution

If you do not see your transaction in Daedalus,

1. Check the [Cardano Blockchain Explorer](https://cardanoexplorer.com) to see if the transaction is present in the Cardano network. 

2. If the transaction is visible in the Cardano Explorer but not in Daedalus wallet, then you may have to wait for the transaction to show up. Exchanges can sometimes take a while to process transactions.

---

## Not enough disk space

*Article ID 360010560353 | Last updated 2023-11-22 | Category: Daedalus Mainnet*

Problem

Daedalus is not working

Cause

The blockchain is 13GB on disk as of August 2021.  If you do not have enough disk space to store it Daedalus will stop working. Also, you may have problems with other applications if you do not have enough disc space. 

 

Solution 

Free up disk space, you need a minimum of 15GB.  

 

Windows: [Free up drive space in Windows 10](https://support.microsoft.com/en-us/windows/free-up-drive-space-in-windows-10-a18fae02-a0fa-8df9-9838-8970f9939de4)

macOS: [Free up storage space on your Mac](https://support.apple.com/en-us/HT206996)

---

## Notification of Software Update

*Article ID 360023850634 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

You can find the latest release of [Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360039403833) wallet on the [https://daedaluswallet.io/en/download](https://daedaluswallet.io/en/download/)site. 

Please download the proper version of Daedalus for your platform MacOS, Windows or Linux andrun the installer.

See also[Installing Daedalus on Linux](https://iohk.zendesk.com/hc/en-us/articles/900000776446)

---

## Optimize macOS to work with Daedalus and Cardano-Node

*Article ID 4407094790681 | Last updated 2023-08-09 | Category: Daedalus Mainnet*

If your machine is in the edge of the [Daedalus system requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553), it is extremely important to follow the tips below to ensure Daedalus will run fine in your machine:

1. Keep your operating system updated:  [Update macOS](https://support.apple.com/en-us/HT201541)

2. Check system use with Activity Monitor and close unneeded processes:

- 
Open Activity Monitor, use the CPU and Memory Tabs to find which processes are taking more resources. Close processes that you don’t need. [View memory usage in Activity Monitor on Mac](https://support.apple.com/en-in/guide/activity-monitor/actmntr1004/mac) 

Close other applications. Seriously, close them, for example, Chrome uses about 1GB of your RAM when opened with a single tab, close it to allow the cardano-node to have the resources it needs. 

3. Reduce visual effects:

[Reduce screen motion on Mac](https://support.apple.com/en-in/guide/mac-help/mchlc03f57a1/mac)

Open up System Preferences from the Apple menu, go to Dock menu, uncheck the boxes for [Animate opening applications and Automatically hide and show the doc](https://support.apple.com/en-in/guide/mac-help/mchlp1119/mac)

4. Free up storage on your Mac:

Ideally you should aim for at least 75GB of free disk space. [Manage storage on your Mac](https://support.apple.com/en-in/HT206996)

5. Scan your Mac for viruses and malware

Apart from the security implications, malware can have a severe impact on your machine’s performance  

6. Restart your Mac

7. Add more RAM to your Mac:

Open Apple Menu, click About this Mac, select the Memory tab, click Memory upgrade instructions or visit: How to install memory on  [MacBook](https://support.apple.com/en-us/HT201165) and [iMac](https://support.apple.com/en-us/HT201191)

---

## Reinstall Daedalus on Windows 10 and Windows 11

*Article ID 28787755339801 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Steps to fully uninstall Daedalus on Windows 10 and Windows 11

These steps will completely remove Daedalus from your system including the chain folder meaning you will need to restore your wallet using your recovery phrase and start syncing again from 0%

 

Note: We recommend verifying your recovery phrase in [Lace](https://www.lace.io/) before removing Daedalus

 

Steps to follow:

 

1. In Windows go to Control Panel and select Uninstall a program

 

![screenshot](/attachments/token/ABwVPsbb11rzq7JQnxEh2EzQl/?name=image.png)

 

 

 

2. Locate "Daedalus mainnet"

 

![screenshot](/attachments/token/ZXpV3kpoVGRvpMTWtb1b0IPI6/?name=image.png)

 

 

3. After you uninstall Daedalus via the control panel please make sure to delete the ”Daedalus Mainnet" folder located in C:\Users\{replace with local user account}\AppData\Roaming  directory

 

If you cannot see C:\Users\{replace with local user account}\AppData\Roaming

 

a. Launch Windows Explorer 

 

![screenshot](/attachments/token/PFQWJKzWrmlmHpcRE8r5hDGIJ/?name=image.png)

 

b. Select the view tab - make sure the Hidden items checkbox is selected

 

![screenshot](/attachments/token/ebBJLXinZgLNhwHUWzQg3N218/?name=image.png)

 

c. Once Hidden Items is enabled you should see C:\Users\{replace with local user account}\AppData\Roaming

 

*********GO AHEAD AND DELETE DAEDALUS MAINNET FOLDER**************

 

![screenshot](https://iohk.zendesk.com/hc/article_attachments/28787755336857)

 

4. Download the latest installer from here [https://daedaluswallet.io/en/download/](https://daedaluswallet.io/en/download/) then install it.

 

5. Launch Daedalus for the first time and verify sync. Wait until it reaches 100%

 

![screenshot](https://iohk.zendesk.com/hc/article_attachments/28788091052057)

---

## Removing failed transactions

*Article ID 360038113814 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Transactions on the Cardano network have a time-to-live (ttl) attribute. When you submit a transaction and the ttl (a given slot number) is reached before the transaction gets processed by the network the transactions expires and fails. 

 

In this scenario, the transaction status indicator shows 

![screenshot](zendesk_kb_daedalus_assets/900006024943_Screen_Shot_2020-12-10_at_10.24.06.png)

 

 

To create a new transaction, you first need to remove that failed transaction. This  releases the funds (UTXOs) used by the failed transaction and makes them available for a new transaction. 

 

1. Go to the Transactions tab

2. Open the failed transaction details

2. Click on Remove failed transaction

### 

![screenshot](zendesk_kb_daedalus_assets/900005095426_Screen_Shot_2020-12-10_at_10.17.17.png)

4. Create and send a new transaction.

---

## Restore wallet from a backup of the state directory.

*Article ID 360019834293 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Problem

Lost your recovery phrase.

 

If your wallet was created on version Daedalus 0.15.x or older AND still have that old version installed on your computer, please try [Importing wallets](https://iohk.zendesk.com/hc/en-us/articles/900000623463)

If your wallet was created on a Daedalus 1.0.0 or older AND still have a backup of the state directory of Daedalus with the wallet data on it. 

 

Your backup state directory should look something tike this, you will use the wallets folder and it should not be empty.

![screenshot](zendesk_kb_daedalus_assets/900008658906_Screen_Shot_2021-05-21_at_14.40.02.png)

 

### How to:

1. Install the latest version of Daedalus from [https://daedaluswallet.io/en/download/](https://daedaluswallet.io/en/download/)

2. Open Daedalus and let it run until it is in sync. 

![screenshot](zendesk_kb_daedalus_assets/900009615243_Screen_Shot_2021-05-21_at_13.30.59.png)

3. Press Command +D or CMD + D to open the Diagnostics screen 

4. Click on Open state directory

![screenshot](zendesk_kb_daedalus_assets/900008658946_Screen_Shot_2021-05-21_at_14.53.32.png)

 

A window of the CURRENT state directory will open

![screenshot](zendesk_kb_daedalus_assets/900008658966_Screen_Shot_2021-05-21_at_14.58.19.png)

 

5. Close Daedalus. 

6. On a new File explorer or Finder window,  navigate to your Backup of the old state directory and access the wallets folder  

7. Copy the contents of the wallets folder

![screenshot](zendesk_kb_daedalus_assets/900008658986_Screen_Shot_2021-05-21_at_15.01.01.png)

8. Paste the files into the wallets folder CURRENT state directory. 

9. Open Daedalus and wait for it to load the transaction history

![screenshot](zendesk_kb_daedalus_assets/900008659006_Screen_Shot_2021-05-21_at_13.33.04.png)

10. Your wallet is restored.

Note that it is still ENCRYPTED with your old spending password, you will need it to create transactions.

11. Create a new wallet and send your funds to it immediately,

12. Be careful with the recovery phrase. =) 

 

For assistance, please reach out to  [Technical Service Desk](https://iohk.zendesk.com/hc/en-us/requests/new)

---

## Synchronization - Cannot restore wallet - Wallet doesn't sync - An error occurred

*Article ID 900004639223 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Problem: 

Users may report it as:

-  Cannot restore wallet

- An error occurred when restoring a wallet

- Wallet doesn't sync 

Version: 2.3.0 (please update this field if you see it happen on later versions)

Symptom: User sees an error message "An error occurred" when restoring a wallet. 

Operating system: MacOS, Linux, Windows

Cause: Corrupt wallet database

 

### Steps to investigate

Search in wallet.log 

rnd_state_address table does not contain required field 'account_ix'. Adding this field with a default value of 2147483648.
SQLite3 returned ErrorNotFound while attempting to perform step: database disk image is malformed

 

### Solution

Delete state directory. Restart Daedalus and restore wallet  from the recovery phrase

---

## Synchronization - Node validating blockchain from 0% on every start

*Article ID 900003878226 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Version: Seen on 2.3.0 (please update this field if you see the issue in later versions) 

Symptom: Daedalus validating blockchain from 0% on every start. 

Operating system: Windows (please update this field if you see it in other platform)

Cause: Unclear if it is node or hardware/os issue

 

To confirm the issue 

Request logs

node.log example:

Invalid snapshot DiskSnapshot 1InitFailureRead 
(ReadFailed (DeserialiseFailure &lt;number&gt; "end of input"))

 

Solution

1. Deleting state directory and restoring wallet again from recovery phrase would normally solve the issue.

2. Advise the user to check the health of their disk using the OS facilities (it may have a bad block, for example).

---

## Synchronization will not complete

*Article ID 360011536933 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Problem

Synchronization stops for an extended period of time.

Cause

Daedalus wallet is a full node wallet. This means it creates a copy of the entire Cardano blockchain on your machine. Sometimes this blockchain data becomes corrupted causing Daedalus wallet to stop working properly. Deleting the blockchain data and syncing it again is a solution to this problem.

 

Solution

1. Verify that your machines meets [Daedalus system requirements](https://iohk.zendesk.com/hc/en-us/articles/360010496553)

2. Verify if it is synchronizing.

Press Ctrl+D (windows/linux)  or CMD+D (macos) to access the Diagnostics screen.
Check that "Last synchronized block" is increasing on your machine (see image below).
If it increases constantly, please WAIT for it to complete!
 

![screenshot](zendesk_kb_daedalus_assets/4407803885977_Screen_Shot_2021-10-13_at_10.50.21.png)

 

3. If synchronization is not progressing, you need to[delete and restore blockchain data](https://iohk.zendesk.com/hc/en-us/articles/360009484874). 

See other [Known Issues](https://iohk.zendesk.com/hc/en-us/articles/360011451693)

---

## Total rewards /  Unspent rewards Explained 

*Article ID 4713031253273 | Last updated 2026-06-15 | Category: Daedalus Mainnet*

From Daedalus 4.9.0 users are able to see the Total Rewards balance and Unspent Rewards balance from the Rewards tab. 

![screenshot](zendesk_kb_daedalus_assets/4711234156185_4711234156185.png)

Total Rewards Balance 

Total rewards balance is total rewards that you earned since you first delegated the wallet till now.

Unspent Rewards Balance 

Unspent Rewards balance is your Rewards balance that your rewards address has currently. 

 

Note:

- When you create a transaction from Daedalus to a different wallet, Daedalus automatically consumes your rewards balance from the Rewards address first. This is desirable because rewards balance cannot be used to pay fees, therefore, it will prevent the wallet to have rewards balance only

- After you created a transaction from Daedalus, the Unspent rewards balance will be all withdrawn and become 0 balance. 

- The difference will be sent to your payment address so the total wallet balance is still the same. 

- Your Daedalus wallet balance contains Rewards balance. (Rewards earned by delegating your stake are automatically collected into your reward account and added to your wallet balance)

 

For example:

Please imagine if you have 100 ADA in Total Rewards and 100 ADA in (Unspent) in your wallet.

If you create a 30 ADA transaction (sending) from your wallet, this process happens on the transaction. 

1. All your rewards get withdrawn from your rewards address

2. 30 ADA is sent out. 

3. 70 ADA will be sent to your payment address.

 

 FAQ: 

Q. I have 43.4 unspent rewards in my Daedalus wallet. where did they come from?

A.  It must be rewarded distribution from the recent epoch(s). This balance is your current rewards balance in your rewards address.  If this is the same rewards balance from the last epoch, it means you have not created any send transaction from this wallet since you distributed this rewards balance. 

 

Q. How can I transfer my unspent balance to my main total?

A.  Unspent balance is already contained in your main balance. You don't need to do anything but if you want to withdraw your Unspent balance, please create a small transaction to the same wallet address. Please understand that your main balance will be still the same as before. 

Also please check More information from 
[Understanding Cardano transactions and the Cardano Explorer](https://iohk.zendesk.com/hc/en-us/articles/900005930046)

---

## Unhiding the Library folder on macOS

*Article ID 360011496773 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Some troubleshooting steps for Daedalus wallet on macOS require access to the Library folder, which is hidden by default. This support article explains several ways to unhide the Library folder so that you can find the Daedalus Mainnet folder in the Application Support folder and proceed with troubleshooting.

### Solution:

1. Directly select the Library folder via the "Go" option in Finder:

- Open a new Finder window.

- From the Finder menu bar, select the Go drop-down menu.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/360024134254)

- While the Go menu is expanded, hold down the Option key.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/360025068213)

- The Library folder should appear. Select the Library folder.

2. Unhide the Library folder using the Finder view options:

- Open a new Finder window.

- Navigate to Macintosh HD &gt; Users &gt; [your login].

- Select View &gt; Show View Options from the Finder menu bar.

- In the View Options dialog box, check the box next to Show Library Folder.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/360017195734)

- Once the Show Library Folder option is selected, you will be able to see the Library folder from the Go drop-down menu in the Finder menu bar.

3. Navigate directly to /Library/Application Support/Daedalus Mainnet:

- Open a new Finder window.

- From the Finder menu bar, select the Go drop-down menu.

- Select Go to Folder... from the drop-down menu.

- Type /Library/Application Support/Daedalus Mainnet into the input box.

![screenshot](https://iohk.zendesk.com/hc/article_attachments/360017196414)

- Click Go.

---

## Uninstall Daedalus and remove wallet's data

*Article ID 360013170694 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Before you uninstall the Daedalus,  please [Verify you have your wallet recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360038581434)

Note: Deleting the contents of your state directory does not delete your ada. Your ada are stored on the blockchain, not on your machine.

### Windows

- Open the instance of Daedalus you want to uninstall

- Access to Help - Daedalus Diagnostics (or press Ctrl + D)

- On Daedalus state directory click the path to copy

- Close Daedalus

- Go to Control Panel and select Uninstall a program

- Search for the corresponding instance of Daedalus and uninstall it

- Access the path copied on step 3 and delete it (the folder too, not only the content)

- Empty the recycle bin

### macOS

- Go to Finder - Applications

- Search for the corresponding instance of Daedalus and move it to the trash

- On finder, press CMD + SHIFT + G to access "Go to folder"

- Paste the following path: ~/Library/Application Support/  

- Delete the folder corresponding to the instance you are uninstalling by moving it to trash. (i.e Daedalus Mainnet, Daedalus Flight) 

- Remove the icon from the dock by dragging it to the trash

- Empty the trash can

### Linux 

1 - Access to the terminal
2 - Run the group of commands for the instance of Daedalus you want to uninstall:

 

Important: Running the following commands will remove all Daedalus wallet data. Please make sure you have a copy of your Daedalus wallet pass phrase(s).

 

Mainnnet

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus-mainnet
rm -f ~/.local/share/applications/Daedalus-mainnet.desktop
rm -rf ~/.config/Daedalus\ Mainnet
rm -rf ~/.local/share/Daedalus/mainnet

 

Flight

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus-mainnet_flight
rm -f ~/.local/share/applications/Daedalus-mainnet_flight.desktop
rm -rf ~/.config/Daedalus\ Flight
rm -rf ~/.local/share/Daedalus/mainnet_flight

 

Testnet

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus-testnet
rm -f ~/.local/share/applications/Daedalus-testnet.desktop
rm -rf ~/.config/Daedalus\ Testnet
rm -rf ~/.local/share/Daedalus/testnet

 

Preview 

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus-preview
rm -f ~/.local/share/applications/Daedalus-preview.desktop
rm -rf ~/.config/Daedalus\ Preview
rm -rf ~/.local/share/Daedalus/preview

 

Pre-Production

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus-preprod
rm -f ~/.local/share/applications/Daedalus-preprod.desktop
rm -rf ~/.config/Daedalus\ Pre-Prod
rm -rf ~/.local/share/Daedalus/preprod

 

All Networks at once

chmod -R +w ~/.daedalus
rm -rf ~/.local/bin/daedalus* ~/.daedalus
rm -f ~/.local/share/applications/Daedalus*.desktop
rm -rf ~/.config/Daedalus*
rm -rf ~/.local/share/Daedalus

---

## Using the BIP39 Wordlist to Check Your Recovery Phrase

*Article ID 360024879594 | Last updated 2025-06-01 | Category: Daedalus Mainnet*

Problems

The following problems may be resolved with this solution:

- Your 12-word/24-word wallet recovery phrase is not allowing you to restore your wallet properly, so you would like to check that the words that you have are valid for a recovery phrase. 

- You are unable to access Daedalus or Lace to [check your recovery phrase](https://iohk.zendesk.com/hc/en-us/articles/360010645354)

- You are also unable or unwilling to migrate to other Cardano wallets to check the validity of your recovery phrase. 

Cause 

A correct recovery phrase is necessary to:

- Maintain access to your ADA

- Restore your wallet

- Migrate your wallet to other Cardano wallets.

Solution

You can cross-reference your recovery phrase with the list of words that were used to generate your phrase: [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt). This method will allow you to check if your list of words have been spelled and recorded correctly, but this does not offer a way to ensure the correct order of the words.

---

## Verify wallet recovery phrase

*Article ID 360038581434 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

You can verify that you have the correct recovery phrase for your wallet using the built-in tool in Daedalus.

 

1. At the top right, go to More &gt; Settings

2. Click Verify wallet recovery phrase

![screenshot](zendesk_kb_daedalus_assets/900004171983_900004171983.png)

 

3. Make sure that no one is watching at your screen, tick the check box and click Continue.

![screenshot](zendesk_kb_daedalus_assets/900004209386_900004209386.png)

4. Enter your recovery phrase and click Verify

![screenshot](zendesk_kb_daedalus_assets/900004172223_900004172223.png)

5. If your recovery phrase is correct for the wallet you are verifying you will se a message like this: 

![screenshot](zendesk_kb_daedalus_assets/900004172263_900004172263.png)

 

6. The green checkmark shows when was the last time you verified your recovery phrase

![screenshot](zendesk_kb_daedalus_assets/900004172283_900004172283.png)

---

## Wallet Balance is 0 After Restoration

*Article ID 360026429093 | Last updated 2025-05-20 | Category: Daedalus Mainnet*

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): Daedalus, Daedalus Rewards

Problem

After restoring a wallet using the 24-word wallet recovery phrase, the wallet balance is showing as 0 ada and the wallet is not showing any transaction history either. 

Cause 

An incorrect recovery phrase will restore a different wallet which has a 0 balance and no transaction history. 

Solution 

1. There are many, many possible combinations of the 24 words used in the 24-word Daedalus wallet recovery phrase. The order and the words both have to be an exact match with the original 24-word Daedalus wallet recovery prase in order to get access to that same wallet.  

You must use the correct 24-word Daedalus wallet recovery phrase words in the correct order. Although this sounds obvious, based on experience at the Technical Support Desk people make mistakes with this frequently, with disastrous results.  

2.  Wallet name and spending password have nothing to do with restoration. Wallet name &amp; Spending passwords are not stored on the blockchain and play no role in the process of restoration. The wallet name and spending password that you enter in the recovery process are applied to your wallet after it has been restored and they are applied only on that very instance of Daedalus (on that machine). If you install Daedalus on another machine you can restore the same wallet (same 24-word Daedalus wallet recovery phrase) and give it a completely different name and spending password.

3. If you enter your 24-word wallet recovery phrase in reverse order, for example, it could still be a valid 24-word wallet recovery phrase (BIP-39 mnemonic) and thus Daedalus or Lace will be able to restore it BUT this will not be the same wallet as this is a completely different 24-word wallet recovery phrase.

Tips:

It is a common mistake that a user created more than 1 wallet and have different recovery phrases.
If you remember the day you created the wallet you are trying to access, you could search in the trash on your machine or pictures on your smartphone just in case you kept a screenshot. Many of our users find that they can access their wallet this way.  
You can check the words that you have against the list of words that Daedalus &amp; the Lace wallet uses, see [Using the BIP39 Wordlist to Check Your Recovery Phrase](https://iohk.zendesk.com/hc/en-us/articles/360024879594)

See also: [Importing wallets](https://iohk.zendesk.com/hc/en-us/articles/900000623463)

---

## White, Blank Screen

*Article ID 360010889854 | Last updated 2025-08-12 | Category: Daedalus Mainnet*

Problem

When you launch Daedalus wallet the application opens but the user interface is not visible. Only a white screen / blank screen appears. 

Cause

Some graphics card drivers were rendering a blank white screen instead of the user interface. 

Solution

There is an option to restart Daedalus without graphics acceleration, which resolves this issue. You can find this item in the Daedalus wallet help menu. 

![screenshot](zendesk_kb_daedalus_assets/360043726653_Screen_Shot_2019-08-02_at_9.03.25_PM.png)

See other [Known Issues](https://iohk.zendesk.com/hc/en-us/articles/360011451693)

---

## Why does it take so long to sync my Daedalus Wallet?

*Article ID 360010554794 | Last updated 2024-03-21 | Category: Daedalus Mainnet*

Problem

After installing Daedalus wallet for the first time it will take some time to sync the entire blockchain with your Daedalus wallet. For some users, this may take many hours. 

Cause

Daedalus is a full node wallet and requires a copy of the Cardano blockchain on your machine to operate. The blockchain is now over 16Gb in size on disk as of October 2021 so if your internet speed is quite slow it could take many hours. For most users with broadband connections and a relatively new machine, a full sync should take about six hours. 

Solution

If the sync process is not working the most likely reason is either a 1) a network issue or 2) blockchain data on your local machine is corrupt. 

1. See our article on ['Cannot Connect to Network' message](https://iohk.zendesk.com/hc/en-us/articles/360010522913)

2. See our article on [Delete and re-sync blockchain data](https://iohk.zendesk.com/hc/en-us/articles/360009484874)

---


# Overview

## Cardano community resources

*Article ID 360015384493 | Last updated 2022-06-04 | Category: Daedalus Mainnet*

Join the ever-growing, global Cardano community! Thousands of people like you are engaging in an open discussion about the Cardano project. Why not register and say hello?
 

- [Cardano Forum](https://forum.cardano.org/signup)

- [Cardano Community Facebook group](https://www.facebook.com/groups/Cardanocommunity)

- [Cardano Meetups](https://www.meetup.com/pro/cardano/)

- [Telegram](https://t.me/CardanoAnnouncements)

- [Reddit](https://www.reddit.com/r/cardano/)

What are the benefits of joining?

- Getting to know people

- Learning what’s happening first

- Getting incredible knowledge and value from other members

- Getting answers to your questions

- Contributing yourself and helping others

You can also sign up for the Cardano Foundation newsletter! We publish a bi-weekly email newsletter full of updates and upcoming events that you can receive right into your inbox. Fill in the subscription form at the bottom of [the Cardano website](https://www.cardano.org/en/home/).

Finally, follow us on social media! You can find us on across a multitude of platforms: 

- [Cardano Foundation Twitter](https://twitter.com/CardanoStiftung)

- [Cardano Community Twitter](https://twitter.com/Cardano)

- [Cardano Foundation Facebook Page](https://facebook.com/cardanofoundation/)

- [Cardano Community Facebook Group](https://www.facebook.com/groups/314766098947855)

- [Cardano Foundation LinkedIn](https://www.linkedin.com/company/cardano-foundation/)

---

## Changes on k parameter on epoch 234

*Article ID 900004671183 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

At the start of Cardano epoch 234 on December 6th, we updated a network parameter that may have affected your rewards. 

We increased the k parameter - which affects the 'optimal' number of pools in the Cardano network - from 150 to 500. This change lowered the saturation point for stake pools from 220 million to just under 64 million, which means you could be missing out on some rewards if you stayed in an oversaturated pool. 

Oversaturated pools earn lower rewards than pools below the saturation limit. If you are currently delegating to a stake pool that is over 30% saturation, If you have not done so already, you may want to redelegate your ada to a less saturated pool to avoid missing out on rewards. 

To learn more about k, please read our blog post: [Parameters and decentralization: the way ahead](https://iohk.io/en/blog/posts/2020/11/05/parameters-and-decentralization-the-way-ahead/)

You may also find this video useful: [Delegating ADA](https://youtu.be/DCMX1wFgrJY%C2%A0)

---

## Daedalus overview

*Article ID 360039403833 | Last updated 2023-11-01 | Category: Daedalus Mainnet*

### Overview

Daedalus wallet is one of several [Daedalus wallet editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074) that is used on the Cardano blockchain. It is a software application for use on computers, there is no mobile version. Daedalus is the original wallet released for the launch of the Cardano blockchain in 2017. 

### Download 

Daedalus is only available for download at [https://daedaluswallet.io/#download](https://daedaluswallet.io/#download). Please also see [Downloading and Installing Daedalus Mainnet](https://iohk.zendesk.com/hc/en-us/articles/360010516793)

### Pros &amp; Cons

Software wallets are convenient since they give immediate access to your ada, however, like all software they can be susceptible to risks such as hacking and malware. On the other hand, paper wallets and hardware wallets are less convenient but generally regarded as safer in terms of managing your ada. 

### More Information

Daedalus is a full node wallet, developed by IOHK, which will allow you to store ada, the native cryptocurrency of the Cardano blockchain. 

Daedalus is a hierarchical deterministic (HD) wallet, allowing you to create an infinite set of keys from a single seed (we call the seed the Daedalus wallet recovery phrase.)

---

## Daedalus wallet and Yoroi wallet overview

*Article ID 360026058573 | Last updated 2026-06-27 | Category: Daedalus Mainnet*

### Overview

### Daedalus Wallet

[Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360039403833) wallet is a desktop, full-node hierarchical deterministic (HD) wallet for ada cryptocurrency, bundled with a full Cardano node. It stores the entire history of the Cardano blockchain and validates all blocks and transactions for fully trustless and autonomous operation. Daedalus runs on Windows, Mac, and Linux operating systems. Daedalus takes some time to download, and the blockchain takes some time to synchronize (create a local copy of the blockchain). It occupies about 80GB of space on your machine as of 2022.

### Yoroi

[Yoroi](https://yoroi-wallet.com/#/) is a lite hierarchical deterministic (HD) wallet for ada cryptocurrency, running as a browser extension or mobile application. It connects to a full Cardano node hosted by a third party (Emurgo). Yoroi allows for instant initial setup, quick and easy operation with minimum usage of system resources. Runs on Windows, Mac, and Linux, as well as iOS and Android. 

 

### Key Features

### [Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360039403833)

Easy installation with one-click setup of bundled Cardano node
Locally stored wallets and encrypted private keys, not shared with third-party servers
Trustless operation with a locally running full Cardano node which independently validates full transaction history of the blockchain
Supports Cardano network by participating in Cardano protocol
Wallet backup and restoration using mnemonics phrases
Support for delegation
Complete autonomy without reliance on third-party servers and services
Hardware wallet support

### [Yoroi](https://yoroi-wallet.com/#/)

Instant initial setup
Locally stored wallets and encrypted private keys, not shared with third-party servers
No blockchain synchronization needed for quick and easy operation
Wallet backup and restoration using mnemonics phrases
Low system resource consumption, minimal usage of storage space and bandwidth
Support for delegation
Paper wallet generator for offline storage of funds
Hardware wallet support

### Side by Side Feature Comparison

 | 

### Feature

 | 

### [Daedalus](https://iohk.zendesk.com/hc/en-us/articles/360039403833)

 | 

### [Yoroi](https://yoroi-wallet.com/#/)

 | 

Supported platforms

 | 

Windows, macOS, and Linux [no mobile]

 | 

Windows, macOS, Linux iOS, Android

 | Initial setup
 | 1 to 2 hours
 | Instant

 | Full node downloads the entire blockchain and validates full transaction history.
 | Connects to a full node hosted by Emurgo.

 | Locally stored wallet and private keys
 | Yes
 |  Yes

 | Private keys stored encrypted on a user's machine, not shared with third-party servers.

 | Resource consumption
 | Significant usage of storage space and bandwidth.
 | Minimal usage of storage space and bandwidth.

 | Trustless operation
 | Yes
 | No

 | Fully trustless operation with locally running full-node.
 | Trusts full-node hosted by EMURGO.

 | Staking and delegation
 | Staking and delegation features.
 | Staking and delegation features.

 | Managing multiple wallets
 | Yes
 | Yes

 | Up to 20 wallets supported.

 | Backup and restoration
 | 

 

Backup and restoration using recovery phrase:

- 12-word (Byron wallet)

- 15-word Yoroi (Byron/Shelley wallet)

- 24-word (Shelley wallet)

- 27-word (Byron) paper wallet

 | 

Backup and restoration using recovery phrase:

- 12-word (Byron wallet)

- 15-word Yoroi (Byron/Shelley wallet)

- 24-word (Shelley wallet)

- 21-word (Byron) paper wallet

 | Sending and receiving ada
 | Sending and receiving ada with full transaction history.

 | ada redemption
 | N/A
 | N/A

 | Privacy
 | Advanced privacy
 | Basic privacy

 | Supported languages
 | English, Japanese
 | English, Japanese, Simplified  Chinese, Traditional Chinese, Korean, Russian, Spanish, Indonesian, French, German and Italian

 | Submission of support request
 | Built into product

 | Smart contracts support
 | Yes
 | Yes

 | Full node
 | Yes
 | No

 | Space Required
 | 70GB or higher
 | 6.5MB

 | Cardano Native Tokens
 | Yes
 | Yes

 | Integration with Ledger Nano S &amp; X
 | Yes
 | Yes

 | Integration with Trezor T
 | Yes
 | Yes

 | Paper wallets supported*
 | Restoration only
 | Yes

 | Migration 
 | Yoroi wallet &gt;Daedalus wallet = No
 | Daedalus wallet &gt; Yoroi wallet = Yes

 | Yoroi paper wallet &gt;Daedalus wallet = No
 | Daedalus paper wallet &gt; Yoroi wallet = No

For assistance, please submit a ticket to the IOHK support team from the Help menu in Daedalus, or by using the [submit a request](https://iohk.zendesk.com/hc/en-us/requests/new) form.

---

## Daedalus wallet editions

*Article ID 360038186074 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

### Overview

The Cardano ecosystem has grown to become a more complex environment. As a result, the Daedalus wallet has now been adapted and released in different editions.  

### Functional Differences

Here are some of the basic functional differences between each edition of Daedalus.

- 
Daedalus wallet on the Cardano mainnet. This wallet is intended for real ada.

- 
Daedalus Flight is the pre-production version of Daedalus wallet. Transactions made using Daedalus Flight will be real ada transactions.

- 
Daedalus Testnet (previously Daedalus Shelley Testnet) on Cardano testnet. This wallet is intended for testing features and functionality.

- 
Daedalus Rewards wallet on the Incentivized Testnet - This wallet was intended to allow users to earn real rewards in a testnet environment prior to Shelley. It supported staking and delegation of ada, along with the accumulation of real rewards. The ITN rewards period has ended and there is now a dedicated "redeem incentivized tesntet rewards" feature available in Daedalus mainnet. [How to Redeem Incentivized Testnet (ITN) Rewards](https://iohk.zendesk.com/hc/en-us/articles/900001656586)

*It is important to note that you cannot send ada from Daedalus mainnet to Daedalus testnet, or vice versa. 

 

### Visual Differences 

Visually the software Daedalus editions look very similar, but they have different color schemes and some other design elements that will help users to be clear about which edition they are using. Also, the icons for the application are different (see table above). You can always check which edition you are using by checking the top of the application window:

![screenshot](zendesk_kb_daedalus_assets/360050972434_Screenshot_2019-11-22_at_10.59.55.png)

---

## How safe is it to delegate to a stake pool?

*Article ID 900002046123 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

Delegating your stake to a stake pool is 100% secure.

1) You should never transfer ADA to a stake pool. If a stake pool asks you to send them funds in a transaction, please DO NOT PROCEED and report that to us. 

2) The delegation mechanism allows you to have full control over your funds. You delegate ONLY your right to participate in the protocol producing blocks. Thus, when you delegate to a stake pool, you only allow them to produce blocks on your behalf, but you NEVER give up control of your funds. 

3) When you delegate, your funds are NEVER locked, you retain full spending power over your funds at any time. 

4) To delegate your stake to a stake pool you need to do it from the Delegation Center in Daedalus app. 

![screenshot](zendesk_kb_daedalus_assets/900002869246_Screen_Shot_2020-08-06_at_08.28.06.png)

5) If the stake pool that you were delegating to, disappears, gets retired, stops working, or has any other bad performance issue, you can just re-delegate your stake to another stake pool.  Your funds are always secure under your control. 

6) Stake pools do not have any control over the rewards distribution amongst its delegators. Any rewards earned by delegating your stake are distributed automatically by the protocol. Stake pool operators have no control over this process. 

7) Delegating is secure and does not put your funds at risk. 

8) Rewards from a given Epoch are distributed 2 Epochs later and those are added to your wallet balance and it is automatically delegated to the stake pool that your wallet is delegating to. 

See also: [The delegation cycle](https://iohk.zendesk.com/hc/en-us/articles/900002874843)

9) Once rewards are added, you can always spend those rewards too as part of your wallet's balance.

---

## IO is coming to Asia!

*Article ID 51034691892121 | Last updated 2025-09-26 | Category: Daedalus Mainnet*

Join Input | Output CEO Charles Hoskinson and the team in Ho Chi Minh City and Osaka. Connect with builders, fellow community members, and dive into Cardano and Midnight to help shape the future of blockchain.
 
👉 Register now via Luma to secure your spot!
 
Saturday, September 27, 2025
[Ho Chi Minh City, Vietnam](https://luma.com/2o93sm3s) 
Saturday, October 4, 2025 
[Osaka governance workshop](https://luma.com/5p589eh6)
[Osaka community event](https://luma.com/lpn92ne5)

---

## Rewards calculations

*Article ID 900003023526 | Last updated 2022-11-22 | Category: Daedalus Mainnet*

Rewards are calculated and distributed automatically by the protocol at every epoch. Stake pools have no control of the process. See [Delegation Cycle](https://iohk.zendesk.com/knowledge/articles/900002874843) to learn when rewards are distributed.

 

Rewards come from two sources:

- Transaction fees: All transaction fees from all transactions from all blocks created during the epoch will be added to the rewards pot of that epoch.

- 

Monetary expansion: Every epoch, the total amount of ada in circulation is increased by adding ada to the rewards pot. These funds come from the Ada Reserve.

Calculations follow this steps:

- A fraction (20%) of the rewards pot for each epoch goes to the treasury. 

The protocol calculates pool rewards, taking the rewards pot collected for an epoch and splitting them among pools that created blocks in that epoch. This calculation considers the pool's stake as proportion of the total stake, the pool's apparent performance and pool's owner pledge.

- Pool Rewards are then split in pool operator rewards and pool member rewards as follows:

- The protocol first pays the fixed costs of the stake pool. A minimum of 340 ADA provided that the pool rewards are sufficient to cover that amount. If pool rewards are less than 340 ADA, the resulting amount is paid to the stake pool to cover part of the costs and no rewards are distributed among pool members.

- After paying the fixed costs, the protocol pays the margin to the stake pool as per the pool parameters set at registration (from 0 to 100%).

- Finally, the remaining rewards are distributed among pool members (including the pool owner) in proportion to their contribution to the pool's stake. 

Definitions:

Rewards pot: Total rewards collected for a given epoch

Treasury: Funds in the treasury are made available for decentralized development of the system (See Project Catalyst).

Total stake: Circulating stake including stake that is not delegate.

Apparent Performance: The slot leader schedule is not public, therefore it is impossible to know the real performance of a stake pool. As a proxy for the performance, the protocol uses:

Fraction of blocks produced by the stake pool in a given epoch

β = Blocks by stake pool / Total number of blocks for an epoch
Fraction of the Active stake controlled by the stake pool

σ = Pool stake / Active Stake
Apparent Performance

P = β / σ

Pledge: Pool owner's stake delegated to its own pool

Pool Operator Rewards: Rewards paid to the stake pool for producing blocks

Pool Members Rewards: Rewards distributed among pool members

---

## Shelley wallets 

*Article ID 900002873923 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

To take advantage of the [Shelley era](https://iohk.zendesk.com/knowledge/articles/900002918686), users must transfer their funds to a Shelley wallet.  Before the Shelley Hard Fork, all wallets were Byron-era wallets, these have a 12-word recovery phrase and are fully compatible with the new code base, so users can still send and receive transactions using their old Byron wallets, but do not support stake delegation.

Shelley wallets have 24-word recovery phrases and are the only type of wallet that support stake delegation and rewards-earning.

As a Daedalus user, you can identify you Byron wallets by the flag shown next to the wallet's name. Shelley wallets, do not have that flag. Another difference is that Byron addresses start with the prefix DdzFFz while Shelley addresses start with the addr1 prefix.  

![screenshot](zendesk_kb_daedalus_assets/900003749046_Screen_Shot_2020-09-23_at_11.53.45.png)

![screenshot](zendesk_kb_daedalus_assets/900003749106_Screen_Shot_2020-09-23_at_12.04.55.png)

### Delegating doesn't mean giving up control of your funds

Shelley wallets separate the control over the funds from the control of the rights to participate in the protocol, we achieve this by making each wallet to have two sets of keys:

- 

Payment keys: Give to users the control over their funds, allowing them to create addresses to receive and hold funds and to sign transactions when they want to send funds to other addresses.

- 

Stake keys. Allow users to sign delegation certificates and to create a stake address, used by the protocol to pay out rewards earned from stake delegation.

Note: For ease of use, all keys and addresses are automatically generated by Daedalus when a new Shelley wallet is created. 

### How to Delegate your stake using Daedalus:

Please see the video below to learn the process of delegating your wallet. 

Note that delegating incurs:

- Transaction fees for submitting the delegation certificate to the blockchain.

- Stake Key registration deposit of 2 ADA. This deposit is only made the first time you delegate your wallet. You get this deposit back when you unregister your key.

---

## The delegation cycle 

*Article ID 900002874843 | Last updated 2024-08-23 | Category: Daedalus Mainnet*

The delegation cycle comprises four (4) epochs: 

The cycle starts when the stakeholder delegates his stake to a stake pool. This involves the creation of a Delegation Certificate that is then embedded in a transaction and registered in the blockchain.  In our example below, this happens at any slot of Epoch N. 

Then,  the protocol captures a stake snapshot (stakedist) at the last slot of Epoch N, recording among other things, 3 important pieces of information: 

- The balance of each stake key registered in the blockchain,

- To which stake pool each stake key is delegated, 

- The parameters (pool cost, margin, pledge, etc) that each stake pool has set. 

This snapshot is then used at the end of Epoch N+1 to randomly select the slot leaders for Epoch N+2. This process is the essence of Ouroboros as a Proof-of-Stake consensus algorithm:  the bigger the stake, the more chances to be slot leader.   

During Epoch N+2 the stake pools produce the blocks they are entitled to as per the slot leader election. Naturally, stake pools that control more stake will be entitled to more blocks.

In the transition between Epoch N+2 and Epoch N+3, a new snapshot registers the rewards collected. And the protocol uses the stake distribution recorded at the end of Epoch N  to calculate how much of the rewards belongs to each stake key,

Finally, at the transition between Epoch N+3 and Epoch N+4  the protocol distributes the rewards to all stake keys. Which show up in Daedalus Shelley wallets at the very start of Epoch N+4 and credited to the wallet's balance and will count as part of the stake for the snapshot to be taken at the last slot of Epoch N+4

![screenshot](zendesk_kb_daedalus_assets/31232205508249_31232205508249.png)

---

## Understanding Shelley: Network decentralization

*Article ID 900002918686 | Last updated 2023-03-10 | Category: Daedalus Mainnet*

Blockchains require a consensus protocol that allows the network participants to agree on how to add transactions to the ledger and its state at any given time. In the Cardano blockchain, the consensus protocol is [Ouroboros](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/), a proof of stake protocol developed by IOHK that has proven to achieve the same levels of security of Bitcoin while being more energy efficient. 

### The Byron Era

During the Byron era Cardano ran on Ouroboros BFT, a protocol that allowed only three entities to produce blocks: IOHK, Emurgo and Cardano Foundation. During this period, stake delegation was not yet possible and therefore producing blocks was not generating rewards.

### Shelley Era: Network decentralization

Shelley means the decentralization of the network, passing from three entities producing blocks to more than a thousand, making Cardano the most decentralized blockchain.  

Shelley era started on epoch 208 with the Shelley Hard Fork, which in simple terms means switching from the protocol Ouroboros BFT used in Byron to the new [Ouroboros Praos,](https://iohk.io/en/research/library/papers/ouroboros-praosan-adaptively-securesemi-synchronous-proof-of-stake-protocol/) the protocol that enables stake delegation and stake pools. 

With Shelley, every stakeholder has the right to participate in the protocol producing blocks. You can choose to run your own node (a private stake pool), or alternatively delegate your stake to a stake pool which will act on your behalf when you are elected slot leader.

Since the start of Shelley, more than 1,000 pools have been registered and are already producing blocks and generating rewards for their delegators and themselves. 

### Further Development

The following steps in Cardano's development are Goguen (Smart contracts), Basho (Scaling) and Voltaire (Governance.)

Learn more in [Cardano Roadmap](https://roadmap.cardano.org/en/goguen/)

---


# Security

## Cybersecurity guidelines for Cardano users

*Article ID 900005141163 | Last updated 2023-01-18 | Category: Daedalus Mainnet*

Keeping your computer secure from threats is critical for keeping your cryptocurrencies safe.  Always be sure to take preventive measures to mitigate the risk of having your computer compromised and prevent financial losses.

Proper recovery phrase management is also especially important when using cryptocurrency wallets.  Please review the guidelines below to strengthen your system and improve your security practices to make better use of cryptocurrency wallets.

 

### Security measures when using Daedalus

1. Download Daedalus ONLY from the official website 

Download from: [https://daedaluswallet.io/](https://daedaluswallet.io/)

Never download software from non-official, untrusted sources. Scammers may create fake copies of Daedalus and attempt to trick you into downloading the wallet from a different source. If you download Daedalus from an unofficial source, you put your ada at risk of being stolen. 

 

Daedalus is a full node wallet, therefore it DOES NOT HAVE A MOBILE VERSION. If you see one, it is a scam, DON'T DOWNLOAD IT, DON'T USE IT! 

 

2. We never do Giveaways.

If you find a website announcing an ADA giveaway it is always a SCAM. You will loose your ADA.

 

3. Always verify Daedalus installer’s signature and checksum listed on the official website. 

You can find instructions on how to do it on your favorite operating system [here](https://daedaluswallet.io/en/download/)

 

4. Keep your recovery phrase in a secure offline location

When you create a wallet on Daedalus you will receive a recovery phrase, this is a list of 24-words that are used to generate the private key to access your funds. Anyone who has your recovery phrase can access your funds and create transactions, so you must keep it safe and secure. This is of crucial importance!

Create your wallets ONLY on a trusted system (See below, Security measures for your system) 
Write your recovery phrase on a piece of PAPER and store it in a safe place
NEVER take a photo of your recovery phrase or store your recovery phrase digitally on your devices or in cloud-based services
NEVER share your recovery phrase with anyone. Not even with IOHK.
NEVER input your recovery phrase on a website
Make sure that NOBODY IS LOOKING at your screen when you use your recovery phrase to restore your wallet

IF YOU LOSE YOUR RECOVERY PHRASE, create a new wallet and transfer your funds immediately. You should not be using a wallet for which you do not have the recovery phrase.
 

5. Never use Daedalus on a shared or public computer

Shared computers might be already compromised. Using Daedalus in a shared or public computer carries several threats to your information and funds. Just don’t do it.

 

6. If possible, have a dedicated machine for your cryptocurrency activities. 

Having a dedicated machine for your cryptocurrency activities can be of great help to keep your assets secure. Ideally, you won’t use that machine to surf the web, read emails, download software, etc. 

 

7. Use a strong spending password or a Hardware Wallet. 

When creating and restoring wallets you are required to set a spending password. This password is used to encrypt/decrypt your private key, Daedalus asks for it when you send transactions. We encourage you to:

Have a password that uses a combination of words, numbers, symbols, spaces, and both upper- and lower-case letters. 
Have a password of at least 10 characters, Daedalus can take up to 255 characters, use it. If your computer gets compromised, a strong password might be your last line of defense. 
Using an encrypted password manager is a good idea. These tools, apart from generating strong and random passwords, can help to protect you against keyloggers since you will never need to type your password on the keyboard.
Or use a hardware wallet in combination with Daedalus. This way the confirmation process happens on the device, which is a safer place than your computer. You still need to use a PIN or passphrase on your device but it is out of the reach of any malware installed on your computer. 

Note that this password ONLY works to encrypt/decrypt your private key on the computer where your wallet is restored. Anyone with access to the recovery phrase can restore the wallet on a different machine and set a different spending password on that. So keeping your recovery phrase secure is vital. 

 

### Security measures for your system

8. Keep your system updated. 

Install all software and security updates for your operating system. 

Turn on Automatic Updates for your operating system.
Use web browsers that receive frequent, automatic security updates.
Make sure to keep browser plug-ins (LastPass, UBlock Origin, Java, etc.) up-to-date.
Uninstall any browser plugins that are not absolutely necessary.
It is very easy to get unintended plugins installed on your computer.  Make sure to routinely review which plugins are installed and immediately remove any that you do not recognize.

9. Firewall 

A firewall is your first line of defense against cybercriminals and various online scams and attacks. Familiarize yourself with your firewall tools to better protect your computer from malware, cookies, viruses, and other threats. 

 

10. Install antivirus/anti-malware protection

Malware is always ahead. It can take days, weeks, or even months before a threat is first detected by antivirus companies and update their definitions. So the fact that your antivirus doesn’t detect a threat doesn't mean that it does not exist, however, a good antivirus can keep you protected against known threats. Fair enough!

Install these programs from a known and trusted source. Keep virus definitions, engines, and software up-to-date to ensure your programs work at their best. 

Run deep scans frequently, at least once per month. 

 

11. Be careful where you click

Avoid untrusted and unknown websites. Dangerous websites can host malware that automatically installs on your computer and compromises it. 

If attachments or links in email messages are unexpected or suspicious for any reason, don't click on them.

 

12. Be careful of phishing 

Cyber-criminals will attempt to make you reveal information using a variety of social engineering tricks. Never disclose any private information by phone, text, social networks, email, or apps.

Usually, a phishing scam is initiated by an email that has the appearance of official business and requests that you perform an urgent action, such as “Download the latest version now”, “You have 5 minutes to register for a giveaway“, “Urgent, you need to validate your wallet’s data”.  

Do not fall for these types of scams. IOHK, EMURGO, or the CARDANO FOUNDATION will never send these emails.

 

13. Never leave your computer unattended

If you need to leave your computer temporarily, lock it up so no one else can use it. For desktop computers, lock your screen or shut-down the system when not in use. 

Have your computer password protected.  

Always remember your system is most secure when it is completely shutdown.

 

14. Never discuss your cryptocurrency holdings 
Never talk about your crypto holdings with anyone that does not specifically have a need-to-know (spouse, taxes, etc.).  Advertising this only makes you a bigger target.

 

15. Computer repairs 

If you need to have your device repaired, verify that you have your wallet recovery phrase(s), then completely remove/uninstall all Cryptocurrency wallets from your device (phone, laptop, tablet, or desktop machine) before allowing the service provider access to it.  It is also good practice to remove/lock/logout of any password manager on the device.

While nothing is foolproof, and new malware, viruses, and scams are developed every day, following these guidelines as well as having a general awareness of the threats that are out there enable you to use cryptocurrency with more peace of mind and less risk of being a victim of fraud, theft, and scams.

---

## Daedalus security when using computer repair services

*Article ID 360015360154 | Last updated 2021-11-16 | Category: Daedalus Mainnet*

Problem/Risk

If I give my machine to a repair service how do I secure my wallet?

Cause/Vulnerability

Unauthorized access to your wallet and unauthorized ada transfers

Solution/Mitigation
Never keep your password or your 12-word Daedalus wallet recovery phrase on your computer unencrypted (this applies to all users at all times, not just to this repair scenario).

An unauthorized person like a technical support technician cannot spend money in Daedalus without knowing your spending password. They cannot reset your password without knowing your 12-word Daedalus wallet recovery phrase. 

If you do have your password or passphrase on your computer unencrypted then you should encrypt it or remove it (and ensure it is also removed from your trash) before allowing anyone to access your computer.

As a final note, once you get your computer back from the repair shop you should always check to make sure no unauthorized changes have been made to your system.  After logging into the computer the first time after repair, you should perform a full scan of your computer using antivirus and malware detectors prior to performing any actions requiring you to enter sensitive information (e.g. online banking, initiating a transaction in your Daedalus Wallet, etc).

---

## How to generate a system information report. Windows and MacOS 

*Article ID 900006970763 | Last updated 2021-08-24 | Category: Daedalus Mainnet*

### Windows:

- [Microsoft System Information (Msinfo32.exe) Tool](https://support.microsoft.com/en-us/topic/description-of-microsoft-system-information-msinfo32-exe-tool-10d335d8-5834-90b4-8452-42c58e61f9fc)

### MacOS

- Get [System Report](https://support.apple.com/guide/system-information/get-system-information-syspr35536/mac)

---

## My machine may be compromised

*Article ID 360024233894 | Last updated 2022-07-26 | Category: Daedalus Mainnet*

If you had a virus or another attack on your machine, and you believe the integrity of your wallet is compromised, then we recommend the following.

- Download and install Daedalus on a new machine. You can download the Daedalus wallet here: [https://daedaluswallet.io/#download](https://daedaluswallet.io/#download)

- Write down and store your recovery phrase in a safe and secure location.

- Use your Daedalus wallet recovery phrase from the compromised wallet, to restore your wallet on the new Daedalus on the new machine.

- Discontinue using the old wallet.

It would be best if you did this as soon as possible to reduce the chances of losing your ADA.

See also [Tips for Staying Safe Online](https://iohk.zendesk.com/hc/en-us/articles/360015295134)

---

## Security Article Template

*Article ID 360022573273 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Notes: 

This is for TSD team use with the Zendesk Knowledge Capture App. 

Delete this comment before publishing an article based on this template.

This article is not visible to the public. 

[Editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074): [specify Daedalus edition(s)] this is only for articles in Mainnet Daedalus Wallet category

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000038406):[specify Ada Holder Component(s)] this is only for articles in Incentivized Testnet Ada Holders category.

[Components](https://iohk.zendesk.com/hc/en-us/articles/900000029423):[specify Stake Pool Operator Component(s)] this is only for articles in Incentivized Testnet Stake Pool Operators category.

### Problem/Risk

Blah Blah

### Cause/Vulnerability

Blah Blah

### Solution/Mitigation

Blah Blah

---

## Tips for Staying Safe Online

*Article ID 360015295134 | Last updated 2024-03-13 | Category: Daedalus Mainnet*

Being vigilant and safe online is very important especially in the cryptocurrency and blockchain space. 

### Stay Safe

We will never ask you for money, your password, your passphrase or your secret folders. Official partnerships/affiliations will always be announced through official channels. 

Use caution and do your own research before transferring funds. 

### Security Tips

- Do not share your password, passphrase, or secrets folders with anyone. Report people who ask you to do this to [report@Cardano.org.](mailto:report@Cardano.org)

- Use good judgment and critical thinking when using a site/service - if it looks too good to be true, it probably is and always check the URL address! Please see below for a list of our websites.

- Use the IOHK Daedalus wallets for Windows Mac and Linux, Download them from [https://daedaluswallet.io](https://daedaluswallet.io/) See [Daedalus wallet editions](https://iohk.zendesk.com/hc/en-us/articles/360038186074) for more info on the different editions of Daedalus. 

- See Cardano Foundation's great [Cardano Stay Safe Content [UPDATED]](https://forum.cardano.org/t/cardano-stay-safe-content-updated/28037)

- Please be aware of fake/scam smartphone apps. There are currently no Android or iOS versions of Daedalus wallet.

- We, or any of the Cardano affiliated organizations/personnel,  will never ask you to send us ada or other cryptocurrencies. Please be aware of scams like this that have appeared on Facebook, Twitter, LINE and other social platforms.

- Beware of anyone claiming to have a collaboration/partnership with one of the Cardano ecosystem entities: Cardano Foundation, IOHK, Emurgo. Partnerships or collaborative efforts are always announced by the official accounts.

- Do not disclose your balance or portfolio details online. This can make you a target for hackers.

- Do not rush into anything, doing a little online research which can reveal a scam or something which has been flagged as negative by the community.

- See [Preventing Loss of ada](https://iohk.zendesk.com/hc/en-us/articles/360010477234) for more safety tips.

### Reporting Suspicious Activities, Social Accounts or Sites

Finally, if you have suspicions or would like to report a scam, please email us immediately at [report@Cardano.org](mailto:report@Cardano.org) As the official Cardano organisation, we can often put pressure on 3rd parties to take down scams. Our first action will be to contact the hosting provider, domain registrant or social media platform directly. We also rely on the community reporting these directly to 3rd parties, so please do report any scams directly with the relevant party as well as to [report@Cardano.org.](mailto:report@Cardano.org)

When reporting something you have seen, please add in the social channel in the email subject line. For example:

Telegram - reporting someone spamming

Or

Fake website looks like a scam

Or

Reddit - someone is posting scam links

Or

[@Username] - on Telegram asked me to share my secrets folder

This will help us to deal with the issue efficiently.

We are grateful for the vigilant and diligent community.

Please let other community members know about the [report@Cardano.org](mailto:report@Cardano.org)email address

### Do not get scammed - official web sites and channels

### [Social Media Sites](https://forum.cardano.org/t/cardano-official-community-channel-list/20046)

### Cardano official communities/sites

- [https://www.cardano.org](https://www.cardano.org/)

- [https://whycardano.com](https://whycardano.com/)

- [https://cardanodocs.com](https://cardanodocs.com/)

- [https://cardanoroadmap.com](https://cardanoroadmap.com/)

- [https://cardanoexplorer.com](https://cardanoexplorer.com/)

- [https://staking.cardano.org](https://staking.cardano.org/)

- [https://feedback.cardano.org](https://feedback.cardano.org/)

- [https://cardanolaunch.com](https://cardanolaunch.com/)

- [https://daedaluswallet.io](https://daedaluswallet.io/)

- 
[Cardano Official Community Channel List](https://forum.cardano.org/t/cardano-official-community-channel-list/20046) (list of official community channels)

### Cardano Foundation official communities/sites

- [https://cardanofoundation.org](https://cardanofoundation.org/)

- [https://twitter.com/CardanoStiftung](https://twitter.com/CardanoStiftung)

- [https://www.facebook.com/CardanoFoundation](https://www.facebook.com/CardanoFoundation)

- [https://www.linkedin.com/company/11195856/](https://www.linkedin.com/company/11195856/)

- [http://www.youtube.com/c/CardanoFoundation](https://www.youtube.com/c/CardanoFoundation)

### IOHK official communities/sites

- [https://iohk.io](https://iohk.io/)

- [https://static.iohk.io](https://static.iohk.io)

- [http://btl.iohk.io](http://btl.iohk.io/)

- [http://symphony.iohk.io](http://symphony.iohk.io)

- [https://twitter.com/InputOutputHK](https://twitter.com/InputOutputHK)

- [https://www.facebook.com/iohk.io](https://www.facebook.com/iohk.io)

- [https://www.linkedin.com/company/6385405](https://www.linkedin.com/company/6385405)

- [https://github.com/input-output-hk](https://github.com/input-output-hk)

- [https://www.youtube.com/c/IohkIo](https://www.youtube.com/c/IohkIo)

- [https://testnet.iohkdev.io](https://testnet.iohkdev.io/)

- [https://cardanorust.iohkdev.io](https://cardanorust.iohkdev.io/)

- [http://plutusfest.io](http://plutusfest.io/)

- [https://blockchainfoundations.org](https://blockchainfoundations.org)

- [https://iohksummit.io/](https://iohksummit.io/)

- [https://cardanoroadmap.com/](https://cardanoroadmap.com/)

- [https://cardanodocs.com](https://cardanodocs.com)

- [https://whycardano.com/](https://whycardano.com/)

- [https://daedaluswallet.io/](https://daedaluswallet.io/)

- [https://cardanoexplorer.com/](https://cardanoexplorer.com/)

- [https://staking.cardano.org/](https://staking.cardano.org/)

### Emurgo official communities/sites

- [https://emurgo.io](https://emurgo.io/)

- [https://www.facebook.com/emurgo.io](https://www.facebook.com/emurgo.io)

- [https://twitter.com/emurgo_io](https://twitter.com/emurgo_io)

- [https://www.youtube.com/c/EMURGO](https://www.youtube.com/c/EMURGO)

- [https://www.linkedin.com/company/emurgo_io/](https://www.linkedin.com/company/emurgo_io/)

- [https://medium.com/@emurgo_io](https://medium.com/@emurgo_io)

- [https://yoroi-wallet.com/#/](https://yoroi-wallet.com/#/)

- [https://www.facebook.com/YoroiWallet/](https://www.facebook.com/YoroiWallet/)

- [https://www.instagram.com/emurgo_io/](https://www.instagram.com/emurgo_io/)

- [https://seiza.com/home](https://seiza.com/home)

---

## Tools To Help Secure Your Computer

*Article ID 360015516893 | Last updated 2023-10-30 | Category: Daedalus Mainnet*

Problem/Risk

What are some of the recommended tools to use to help keep my computer secure?

Cause/Vulnerability

Viruses, malware and key-loggers are common ways that people lose control of the personal information stored on or accessed by their computer.  This affects online banking, your Daedalus Wallet, personal photos, financial documents, etc...

Solution/Mitigation

1. You can use tools ([antivirus](https://en.wikipedia.org/wiki/Antivirus_software) and [malware](https://en.wikipedia.org/wiki/Malware) detectors) that provide good detection of potential security issues on your computer. 

2. You can make sure that what you download from the internet is safe to install.  You can run a scan on your intended download using the website [VirusTotal](https://www.virustotal.com/#/home/upload) This will scan the installation file(s) using over 60 different commercial-grade tools and give you easy to understand results. 

3. You can scan email attachments sent to you before you open them using the website [VirusTotal](https://www.virustotal.com/#/home/upload).

4. You can avoid downloading and installing something you didn't go looking for; for example:

If you visit a website and it gives you a message saying you need to update or install something and you weren't specifically going to that site to get the updated version of the software DO NOT DOWNLOAD AND INSTALL IT FROM THE LINK PROVIDED more than likely it is a virus-infected file or malware.  If you do actually have that software on your computer (e.g. Adobe Flash) go to the software manufacturer's website to update it.

5. Below is a list of some recommended tools for scanning your computer and keeping it virus/malware free:

FREE TOOLS

Windows

[Microsoft Security Essentials](https://support.microsoft.com/en-us/help/14210/security-essentials-download) (This is the BEST solution for all versions of Windows)

[MalwareBytes](https://www.malwarebytes.com/) 
[Avast AntiVirus](https://www.avast.com/en-us/free-antivirus-download)

Mac OSX

[Avast AntiVirus](https://www.avast.com/en-us/download-thank-you.php?product=MAC-FREE-ONLINE&amp;locale=en-us)
[MalwareBytes](https://www.malwarebytes.com/)
[Sophos Home](https://home.sophos.com/en-us/download-mac-anti-virus.aspx)

Linux

[Sophos](https://www.sophos.com/en-us/products/free-tools/sophos-antivirus-for-linux.aspx)
[Comodo](https://www.comodo.com/home/internet-security/antivirus-for-linux.php)
[ClamAV](https://www.clamav.net/downloads)
[ChkRootKit](http://www.chkrootkit.org/download/)

Commercial (Paid) Tools

Windows

[Sophos Home Premium](https://home.sophos.com/en-us/download-antivirus-pc.aspx)
[BitDefender](https://www.bitdefender.com/solutions/internet-security.html)
[Avast Premier AntiVirus](https://www.avast.com/premier)

Mac OSX

[Intego](https://www.intego.com/antivirus-mac-internet-security) 
[BitDefender](https://www.bitdefender.com/solutions/antivirus-for-mac.html)
[Sophos Home Premium](https://home.sophos.com/en-us/download-mac-anti-virus.aspx)

---

## ZIP  Daedalus application folder for security analysis

*Article ID 900004632466 | Last updated 2021-10-08 | Category: Daedalus Mainnet*

### Windows

1. Open your file browser

2. Go to:

C:\Program Files

3. Find and select the Daedalus Mainnet folder

4. Right-click 

5. In the drop-down menu, choose "Send to" and then click "Compressed (zipped) folder."  

6. Windows might warn: "Windows cannot create the compressed folder here. Do you want it to be placed on the desktop instead"

7. Click YES.

 

### MacOS

1. Open Finder

2. Go to:  

~/Library/Application Support

3. Find and select the Daedalus Mainnet folder

4. Right-click or control-click on the file to bring up the pop-up menu.

5. Select Compress Daedalus Mainnet

 

### Linux

1. Open your file manager 

2. Go to:

~/.local/share

3. Select the folder Daedalus Mainnet 

4. Right-click and select Compress

---


# Stake Pool Operators Overview

## Stake pool is not shown in Daedalus

*Article ID 900004680423 | Last updated 2026-02-10 | Category: Cardano Mainnet *

Problem: 

Stake pool is not shown in Daedalus

 

Possible causes:

- SPO changed metadata

- Pool has set margin to 100% so it is filtered out. 

- Pool has been retired.

- Pool has been delisted from SMASH 

- Problems with metadata.json file.

If the SPO changed the pool's metadata: 

Assuming pool's metadata hash is correct, after the re-registration certificate is submitted to the blockchain, it may take a few  hours for SMASH to cache the new metadata and for Daedalus to fetch the updated metadata from SMASH.  This is expected behavior. Please be patient. 

Check if your pool is delisted:

 

$ curl --silent "https://smash.cardano-mainnet.iohk.io/api/v1/delisted" | grep -o &lt;HEX POOL ID&gt;

 

Check if your pool is retired:

$ curl --silent "https://smash.cardano-mainnet.iohk.io/api/v1/retired" | grep -o &lt;HEX POOL ID&gt;

 

Check the errors endpoint to see if there are metadata errors: 

 

Daedalus fetches stake-pools' metadata from the Stake pool Metadata Aggregation Server (SMASH); SMASH verifies that the metadata registered on the blockchain (pool registration certificate) matches with the hash of the file it gets from your metadata.json URL.  If hashes don't match, it flags it with an error and the pool is not loaded in Daedalus. 

 

A quick way to investigate if there is a problem with your metadata is to query the errors endpoint in SMASH: 

 

$ curl "https://smash.cardano-mainnet.iohk.io/api/v1/errors/&lt;HEX_POOL_ID&gt;"

 

If there is a problem with your metadata, you will get a response like: 

[{"time":"01.12.2020. 13:12:22","retryCount":11,"poolHash":"&lt;METADATA_HASH&gt;","cause":
"Hash mismatch from poolId '&lt;HEX_POOL_ID&gt;' when fetching metadata from 'https://poolmetadata.json'. 
Expected &lt;METADATA_HASH&gt; but got &lt;METADATA_HASH&gt;","poolId":"&lt;HEX_POOL_ID&gt;",
"utcTime":"1606828342.497326s"}]

where EXPECTED is the hash registered in the blockchain, and GOT is what SMASH gets from computing the hash from the file at url [https://poolmetadata.json](https://poolmetadata.json). 

 

This shows all the errors for the pool from a day ago. However, you can filter just the ones you want by using a date you want to filter from, like this (using DD.MM.YYYY):

 

$ curl "https://smash.cardano-mainnet.iohk.io/api/v1/errors/&lt;HEX_POOL_ID&gt;?fromDate=DD.MM.YYYY"

 

To ensure that you register with the correct metadata hash, first upload your file to its final url, then hash it: 

$ wget https://poolmetadata.json

&gt; --2020-12-01 20:47:17--  https://poolmetadata.json. 
&gt; Resolving ...
&gt; Connecting to... connected.
&gt; HTTP request sent, awaiting response... 200 OK
&gt; Length: 247 [application/json]
&gt; Saving to: ‘poolmetadata.json’
&gt; poolmetadata.json                        100%[==================================
&gt; ================================================================&gt;]  247--.-KB/s  in 0s      
&gt; 2020-12-01 20:47:17 (32.2 MB/s) - ‘poolmetadata.json’ saved [247/247]

$ cardano-cli shelley stake-pool metadata-hash --pool-metadata-file poolmetadata.json
&gt; POOL_METADATA_HASH

 

The above is opposed to first hashing the file and then uploading it. This is more relevant if you are using some json storage service like jsonbin.io, npoint.io, etc.. These services reformat your file, removing spaces and line breaks, with the consequence of changing the hash of the file without you noticing it. 

After you have hashed the file at its URL, submit a new registration certificate for your pool using the correct metadata hash as shown here: [Register a stake pool with metadata](https://docs.cardano.org/projects/cardano-node/en/latest/stake-pool-operations/register_stakepool.html)

---


# Appendix: release notes and version-titled articles (titles only)

-  Daedalus 4.0.0-RC1 release notes (ID 900005652263, updated 2024-08-23)
- Cardano 1.1.0: Daedalus 0.9.0 and Cardano SL 1.1.0 - Release Notes (ID 360010748293, updated 2021-11-15)
- Cardano 1.1.1: Daedalus 0.9.1 and Cardano SL 1.1.1 - Release Notes (ID 360010748053, updated 2022-04-19)
- Cardano 1.2.0: Daedalus 0.10.0 and Cardano SL 1.2.0 - Release Notes (ID 360010747773, updated 2019-08-28)
- Cardano 1.2.1: Daedalus 0.10.1 and Cardano SL 1.2.1 - Release Notes (ID 360010674154, updated 2020-08-07)
- Cardano 1.3.0: Daedalus 0.11.0 and Cardano SL 1.3.0 - Release Notes (ID 360010672754, updated 2019-11-30)
- Cardano 1.3.1: Daedalus 0.11.1 and Cardano SL 1.3.1 - Release Notes (ID 360010745993, updated 2019-08-28)
- Cardano 1.3.2: Daedalus 0.11.2 and Cardano SL 1.3.2 - Release Notes (ID 360012366073, updated 2019-08-28)
- Cardano 1.4.0:  Daedalus 0.12.0 and Cardano SL 2.0.0 - Release Notes (ID 360013915513, updated 2024-08-23)
- Cardano 1.4.1: Daedalus 0.12.1 and Cardano SL 2.0.1 - Release notes (ID 360016116514, updated 2019-08-28)
- Cardano 1.5.0: Daedalus 0.13.0 and Cardano SL 3.0.0 - Release Notes (ID 360019847434, updated 2024-08-23)
- Cardano 1.5.1: Daedalus 0.13.1 and Cardano SL 3.0.1 - Release Notes (ID 360020031454, updated 2020-12-30)
- Cardano 1.6.0:   Daedalus 0.14.0 and Cardano SL 3.0.3  - Release Notes (ID 360033778753, updated 2024-08-23)
- Cardano 1.7.0:  Daedalus 0.15.0 and Cardano SL 3.1.0 - Release Notes (ID 360037127154, updated 2024-08-23)
- Cardano 1.7.1:  Daedalus 0.15.1 with Cardano SL 3.1.0 - Release Notes (ID 360038144454, updated 2024-08-23)
- Daedalus 1.0.0 - Release Notes (ID 900000690906, updated 2024-08-23)
- Daedalus 1.1.0 - Release Notes (ID 900000886483, updated 2024-08-23)
- Daedalus 2.0.0 - Release Notes (ID 900001965026, updated 2024-08-23)
- Daedalus 2.0.1 - Release Notes (ID 900002019226, updated 2024-08-23)
- Daedalus 2.1.0 - Release Notes (ID 900002056866, updated 2024-08-23)
- Daedalus 2.2.0 - Release Notes (ID 900002374526, updated 2020-10-06)
- Daedalus 2.3.0 - Release Notes (ID 900003056566, updated 2021-09-27)
- Daedalus 2.4.0 - Release Notes (ID 900003316886, updated 2024-08-23)
- Daedalus 2.4.1 - Release Notes (ID 900004328383, updated 2024-08-23)
- Daedalus 2.5.0 release notes (ID 900004647363, updated 2020-12-04)
- Daedalus 2.6.0 - Release notes (ID 900003806006, updated 2021-03-28)
- Daedalus 3.0.0 - Release notes (ID 900004720863, updated 2024-08-23)
- Daedalus 3.0.0 release notes (ID 900003804546, updated 2024-08-23)
- Daedalus 3.1.0 release notes (ID 900004061886, updated 2024-08-23)
- Daedalus 3.1.0 release notes (ID 900004061766, updated 2024-08-23)
- Daedalus 3.2.0 release notes (ID 900004264486, updated 2024-08-23)
- Daedalus 3.2.0-FC1 release notes (ID 900004213906, updated 2024-08-23)
- Daedalus 3.2.1 release notes (ID 900004355486, updated 2021-02-17)
- Daedalus 3.3.0 release notes (ID 900004500746, updated 2024-08-23)
- Daedalus 3.3.0 release notes (ID 900004500086, updated 2024-08-23)
- Daedalus 3.3.1 release notes (ID 900005572723, updated 2021-03-03)
- Daedalus 3.3.1 release notes (ID 900004620266, updated 2021-03-01)
- Daedalus 3.3.2 release notes (ID 900005717963, updated 2024-08-23)
- Daedalus 4.0.0-FC1 release notes (ID 900004725846, updated 2024-08-23)
- Daedalus 4.0.2-FC3 release notes (ID 900004913206, updated 2024-08-23)
- Daedalus 4.0.3 release notes (ID 900006373223, updated 2024-08-23)
- Daedalus 4.0.3 release notes (ID 900006372483, updated 2024-08-23)
- Daedalus 4.0.4 release notes (ID 900005458606, updated 2024-08-23)
- Daedalus 4.0.4 release notes (ID 900005456506, updated 2024-08-23)
- Daedalus 4.0.5 release notes (ID 900006675083, updated 2024-08-23)
- Daedalus 4.0.5 release notes (ID 900005731806, updated 2024-08-23)
- Daedalus 4.1.0 release notes (ID 900006759746, updated 2024-08-23)
- Daedalus 4.1.0 release notes (ID 900006756946, updated 2024-08-23)
- Daedalus 4.1.0-FC1 release notes (ID 900006731666, updated 2024-08-23)
- Daedalus 4.10.0 release notes (ID 6515425656089, updated 2024-08-23)
- Daedalus 4.10.0 release notes (ID 6515228479385, updated 2024-08-23)
- Daedalus 4.11.0 release notes (ID 7330921186201, updated 2022-09-08)
- Daedalus 4.11.0 release notes (ID 7329096881177, updated 2022-08-12)
- Daedalus 4.12.0 release notes (ID 8255827813273, updated 2022-08-12)
- Daedalus 4.12.1 release notes (ID 9401338275609, updated 2022-11-03)
- Daedalus 4.2.0 release notes (ID 4403359397401, updated 2024-08-23)
- Daedalus 4.2.0 release notes (ID 4403366717465, updated 2024-08-23)
- Daedalus 4.2.0-FC1 release notes (ID 4403040354969, updated 2024-08-23)
- Daedalus 4.2.1 release notes (ID 4404885323289, updated 2021-09-17)
- Daedalus 4.3.0 release notes (ID 4405701089561, updated 2024-08-23)
- Daedalus 4.3.1 release notes (ID 4406192725913, updated 2024-08-23)
- Daedalus 4.3.1 release notes (ID 4406171869977, updated 2021-10-04)
- Daedalus 4.3.2 release notes (ID 4407402122521, updated 2021-10-18)
- Daedalus 4.4.0 release notes (ID 4407754202393, updated 2024-08-23)
- Daedalus 4.4.0 release notes (ID 4407760962969, updated 2024-08-23)
- Daedalus 4.4.1 release notes (ID 4408131224089, updated 2021-11-19)
- Daedalus 4.4.1 release notes (ID 4408131023129, updated 2021-11-26)
- Daedalus 4.5.0 release notes (ID 4409360119449, updated 2024-08-23)
- Daedalus 4.5.0 release notes (ID 4409360006425, updated 2024-08-23)
- Daedalus 4.5.1 release notes (ID 4409944350489, updated 2024-08-23)
- Daedalus 4.5.1 release notes (ID 4409928851737, updated 2024-08-23)
- Daedalus 4.5.2 release notes (ID 4410461856537, updated 2021-12-13)
- Daedalus 4.5.2 release notes (ID 4410447354777, updated 2021-12-13)
- Daedalus 4.6.0 release notes (ID 4411930212761, updated 2024-08-23)
- Daedalus 4.6.0 release notes (ID 4411929983385, updated 2024-08-23)
- Daedalus 4.7.0 release notes (ID 4414649608345, updated 2022-02-03)
- Daedalus 4.7.0 release notes (ID 4414649555481, updated 2022-02-03)
- Daedalus 4.8.0 release notes (ID 4416804490393, updated 2024-08-23)
- Daedalus 4.8.0 release notes (ID 4416804042009, updated 2024-08-23)
- Daedalus 4.9.0 release notes (ID 4579419674777, updated 2024-08-23)
- Daedalus 4.9.0 release notes (ID 4579183412505, updated 2024-08-23)
- Daedalus 4.9.1 release notes (ID 5532611987609, updated 2022-06-10)
- Daedalus 4.9.1 release notes (ID 5532493090585, updated 2022-06-10)
- Daedalus 5.0.0 release notes (ID 10279881048985, updated 2023-03-09)
- Daedalus 5.0.0 release notes (ID 10077195591833, updated 2024-08-23)
- Daedalus 5.0.0 release notes (ID 10076873966617, updated 2024-08-23)
- Daedalus 5.1.0 release notes (ID 11204361405849, updated 2023-03-09)
- Daedalus 5.1.0 release notes (ID 11204342274329, updated 2022-10-24)
- Daedalus 5.1.0 release notes (ID 11204285075993, updated 2023-01-16)
- Daedalus 5.1.1 release notes (ID 12074707538713, updated 2023-03-09)
- Daedalus 5.1.1 release notes (ID 11812844819993, updated 2023-01-16)
- Daedalus 5.2.0 release notes (ID 14431962342553, updated 2023-07-17)
- Daedalus 5.2.0 release notes (ID 14431901065113, updated 2023-07-17)
- Daedalus 5.2.0 release notes (ID 14431839009049, updated 2023-07-17)
- Daedalus 5.3.0 release notes (ID 20421748935065, updated 2024-06-13)
- Daedalus 5.3.0 release notes (ID 20421573998489, updated 2024-06-13)
- Daedalus 5.3.0 release notes (ID 20420365134233, updated 2024-06-13)
- Daedalus 5.3.1 release notes (ID 32506884750873, updated 2024-06-13)
- Daedalus 5.3.1 release notes (ID 32506832995993, updated 2024-06-13)
- Daedalus 5.3.1 release notes (ID 32506631415449, updated 2024-06-13)
- Daedalus 5.4.0 release notes (ID 33695971091097, updated 2024-08-20)
- Daedalus 5.4.0 release notes (ID 33695910813337, updated 2024-08-20)
- Daedalus 5.4.0 release notes (ID 33695756801817, updated 2024-07-31)
- Daedalus 5.5.0 release notes (ID 35764730116633, updated 2024-08-20)
- Daedalus 6.0.0 release notes (ID 36568246873241, updated 2024-09-03)
- Daedalus 6.0.0 release notes (ID 36568075767961, updated 2024-09-03)
- Daedalus 6.0.0 release notes (ID 36567511627801, updated 2024-09-03)
- Daedalus 6.0.1 release notes (ID 37188014124697, updated 2024-10-04)
- Daedalus 6.0.1 release notes (ID 37187923531161, updated 2024-10-04)
- Daedalus 6.0.1 release notes (ID 37187861315481, updated 2024-10-04)
- Daedalus 6.0.2 release notes (ID 38432188287641, updated 2024-10-04)
- Daedalus 6.0.2 release notes (ID 38432077376025, updated 2024-10-04)
- Daedalus 6.0.2 relese notes (ID 38432234574617, updated 2024-12-12)
- Daedalus 7.0.0 release notes (ID 40999593125657, updated 2024-12-10)
- Daedalus 7.0.0 release notes (ID 40999458768153, updated 2024-12-10)
- Daedalus 7.0.0 release notes (ID 40968665483929, updated 2024-12-10)
- Daedalus 7.0.1 release notes (ID 41075694076697, updated 2024-12-13)
- Daedalus 7.0.1 release notes (ID 41075586623385, updated 2024-12-13)
- Daedalus 7.0.1 release notes (ID 41075414043801, updated 2024-12-13)
- Daedalus 7.0.2 release notes (ID 41138755700633, updated 2024-12-13)
- Daedalus 7.0.2 release notes (ID 41138680497433, updated 2024-12-13)
- Daedalus 7.0.2 release notes (ID 41138636940825, updated 2024-12-13)
- Daedalus 7.1.0 release notes (ID 43887209008025, updated 2025-02-26)
- Daedalus 7.1.0 release notes (ID 43885605379865, updated 2025-02-26)
- Daedalus 7.1.0リリースノート (ID 43887244786457, updated 2025-02-26)
- Daedalus 7.2.0 release notes (ID 49820200823065, updated 2025-08-28)
- Daedalus 7.2.0 release notes (ID 49820184752281, updated 2025-08-28)
- Daedalus 7.2.0 release notes (ID 49820147340825, updated 2025-08-28)
- Daedalus Shelley Testnet 1.1.0-STN1 - Release Notes and balance check instructions (ID 900001606746, updated 2024-08-23)
- Daedalus Shelley Testnet 1.2.0-STN1 - Release Notes (ID 900001633763, updated 2024-08-23)
- Daedalus Shelley Testnet 1.3.0-STN2 - Release Notes (ID 900001801446, updated 2024-08-23)
- Daedalus Shelley Testnet 1.6.0-STN5 - Release Notes (ID 900001845366, updated 2024-08-23)
- Daedalus Testnet 2.4.0 - Release Notes (ID 900004241943, updated 2024-08-23)
- Daedalus Testnet 2.4.1 - Release Notes (ID 900004306923, updated 2024-08-23)
- Daedalus Testnet 2.5.0 - Release notes (ID 900003745366, updated 2020-12-04)
- Daedalus Testnet 2.6.0 - Release notes (ID 900004721983, updated 2024-08-23)
- Daedalus Testnet 3.2.0 release notes (ID 900004264246, updated 2024-08-23)
- Discontinuing Daedalus support for Windows 7 and 8.0 (ID 900001248006, updated 2024-08-23)
- Release Notes Template (ID 360022389214, updated 2023-10-30)
