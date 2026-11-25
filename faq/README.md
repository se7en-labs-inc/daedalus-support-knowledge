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
On mainnet, Daedalus restores a Daedalus wallet from a 12-word or 24-word recovery phrase, a paper wallet from a 27-word recovery phrase, and a Yoroi wallet from a 15-word recovery phrase.
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

## When and how do I get help from a person?

Get help from a person through the support portal at https://daedalus.support.se7enlabs.com.
Open a case when the help article for your problem did not solve it.
A case is also the right step when Daedalus asks you to submit a support request, for example when it says it is unable to start the Cardano node.
If a receiving address in Daedalus differs from the address your hardware wallet shows, open a case and attach your logs.
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
If your computer clock differs from global time by more than 4.5 seconds, Daedalus shows Unable to sync - incorrect time, says how far off the clock is, and offers Check the time again.
To fix the clock, read the support portal article Fix Unable to sync - incorrect time.
After 20 minutes without a connection, Daedalus shows Having trouble connecting to network? with Open support ticket and Download logs.
If the Cardano node cannot be started, the same screen also shows a Retry button.
If the connection is lost after it was made, Daedalus shows Network connection lost - reconnecting.
Open support ticket takes you to the support portal.

Related knowledge: `DAE-0111`, `DAE-0117`.

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

Related knowledge: `DAE-0113`.

## How do I keep my wallet safe?

Never share your recovery phrase, spending password or private keys with anyone, including support.
Support never asks for them.
Anyone who knows your recovery phrase can spend the ada in your wallet.
Your recovery phrase is the only way to recover your wallet if your computer is lost, broken, stolen or stops working.
Write it on paper and keep it in a safe place.
The simplest way to keep it secure is never to store it digitally or online.
Keep the recovery phrase of a hardware wallet offline.
Download Daedalus only from daedaluswallet.io.
Support works only through the support portal at https://daedalus.support.se7enlabs.com, so anyone who offers help in a direct message is not support.
Do not delete or move wallet data because someone tells you to.
You do not need your recovery phrase to rebuild blockchain data, and rebuilding keeps your wallets on the computer.

Related knowledge: `DAE-0114`.

## How do I follow up on an existing support case?

Open the support portal at https://daedalus.support.se7enlabs.com and choose Open an existing case.
Enter your case number and the verified email address for the case.
Select Send access code.
The portal emails a fresh access code to the verified address for that case.
Enter that code in the Six-digit access code field and select Open case.

Related knowledge: `DAE-0115`.

## Why does Daedalus say my staking rewards are on hold?

Staking rewards cannot be withdrawn while a wallet's voting power is not delegated.
A delegation ends when its DRep retires, and Daedalus then shows Staking rewards on hold with the amount it cannot withdraw.
Payments still work and leave the rewards in place.
To release the rewards, select Delegate voting power and delegate to any registered DRep, to Abstain or to No Confidence.
The delegation form offers Abstain and No Confidence directly, and you can paste a DRep ID or browse the Directory.
Once the delegation is confirmed, select Withdraw rewards on the wallet summary, or send a payment that withdraws the rewards.
Undelegating such a wallet takes two transactions: Daedalus first delegates its voting power to Abstain, and once that is confirmed it undelegates the wallet and withdraws the rewards.

Related knowledge: `DAE-0116`.

# Japanese (ja)

## Daedalusを安全にダウンロードするには？

Daedalusはdaedaluswallet.ioからダウンロードしてください。
Daedalusは、Windows、macOS、Linux向けのデスクトップアプリケーションとしてのみ提供されています。
各インストーラーには、拡張子が.ascの署名ファイルが付属しています。ダウンロードページには、SHA256チェックサムと署名を確認する方法が記載されています。
各バージョンのDaedalusのリリースノートは、github.com/input-output-hk/daedalus/releases で公開されています。
Linuxでは、Debian、RPM、Arch向けのネイティブパッケージ、およびflakeに含まれるNixOSサービスの利用を推奨しています。
Linux用のポータブル形式の.binインストーラーは非推奨です。
復元フレーズの入力を求めるダウンロードサイトは利用しないでください。

Related knowledge: `DAE-0101`.

## Daedalusの同期が続いているのはなぜですか？

ブロックチェーンが最新の状態になるまで、Daedalusには「ディスクのブロックチェーンステータスの検証」「ディスクのブロックチェーンから台帳をリプレイ」「ブロックチェーンの同期」の3段階が表示されます。
検証では、ハッシュ値を計算してブロックチェーンの整合性を確認します。
台帳のリプレイでは、台帳スナップショットを探し、最新の状態を再計算します。
同期では、最初のチェーン選択を行い、ブロックチェーンの状態を確定します。
「ヘルプ」メニューの「Daedalus診断」では、同期率とCardanoノードが同期中かどうかを確認できます。
同期に時間がかかりすぎる場合は、「Daedalus診断」から「Mithril同期」を選択できます。検証済みのチェーンデータを復元することで、同期を高速化できます。
パソコンに保存されているブロックチェーンデータの一部が欠落している場合、Daedalusはその旨を表示し、データの再構築を提案します。

Related knowledge: `DAE-0102`.

## Daedalusが起動しない場合、何を確認すればよいですか？

起動中のCardanoノードから5分間何も出力されない場合、Daedalusには「Cardanoノードを再起動」または「このまま待つ」の選択肢が表示されます。
この通知は、ノードがまだ処理を続けている可能性があることも示しています。
Cardanoノードは起動時に、ローカルのブロックチェーンデータの整合性を検証します。
「Daedalus診断」では、Cardanoノードの状態と、ノードが応答しているかどうかを確認できます。
ブロックチェーンデータの一部が欠落している場合、Cardanoノードは起動できず、Daedalusはブロックチェーンデータの再構築を提案します。
ブロックチェーンデータを再構築しても、ウォレット情報はパソコン内に保持されます。
Cardanoノードを起動できないというメッセージが表示された場合は、サポートポータルからサポートリクエストを送信してください。

Related knowledge: `DAE-0103`.

## ウォレットを復元する前に何が必要ですか？

復元するウォレットの復元フレーズが必要です。
メインネットでは、Daedalusウォレットは12語または24語、ペーパーウォレットは27語、Yoroiウォレットは15語の復元フレーズを使ってDaedalusに復元できます。
復元後のウォレットには、新しい名前と送金時パスワードを設定できます。
ウォレット名と送金時パスワードは、ブロックチェーン上ではなく、パソコン内にのみ保存されます。
Daedalusで一度に復元できるウォレットは1つだけです。
復元したウォレットが空だったり、あるはずの資金が表示されなかったりする場合は、正しい復元フレーズを使用したか確認してください。
ハードウェアウォレットを利用する場合は、復元フレーズを入力せず、デバイスをペアリングしてください。

Related knowledge: `DAE-0104`.

## ハードウェアウォレットが接続できないのはなぜですか？

Daedalusは、Ledger Nano S、Ledger Nano S Plus、Ledger Nano X、Ledger Flex、Trezor Model Tに対応しています。
デバイスのペアリングは初回の1回だけ行います。その後は、トランザクションの承認が必要なときにのみデバイスを接続します。
Daedalusから、デバイスを接続してロックを解除するよう案内されます。
続いて、デバイス上でCardanoアプリケーションを起動するよう案内されます。
接続に失敗した場合は、デバイスをいったん取り外して接続し直し、接続処理を再開してください。
Trezorを利用するには、Trezor Bridgeがインストールされている必要があります。
Ledgerのソフトウェアが古い、またはファームウェアに対応していないとDaedalusが判断した場合は、更新手順へのリンクが表示されます。
ハードウェアウォレットの復元フレーズはオフラインで保管し、Daedalusには入力しないでください。

Related knowledge: `DAE-0105`.

## 担当者からサポートを受けるには、いつ、どうすればよいですか？

担当者によるサポートは、https://daedalus.support.se7enlabs.com のサポートポータルから受けられます。
お困りの問題についてヘルプ記事の案内を試しても解決しなかった場合は、サポートケースを作成してください。
Daedalusからサポートリクエストの送信を求められた場合も、ケースを作成してください。例えば、Cardanoノードを起動できないと表示された場合が該当します。
Daedalusに表示された受取アドレスが、ハードウェアウォレットに表示されたアドレスと異なる場合は、ケースを作成してログを添付してください。
Daedalusでは、「ヘルプ」メニュー、または読み込み画面の「サポートチケットを作成する」ボタンからポータルを開けます。
ポータルでは、まず承認済みのDaedalus Walletサポート案内が提示されます。それでも支援が必要な場合は、担当者によるサポートケースの作成に進めます。
ポータルでは、メールアドレスの確認を一度行う必要があります。
「ヘルプ」メニューからポータルを開くと、リンクにはDaedalusのバージョン、ネットワーク、オペレーティングシステムの情報が含まれます。
サポートリクエストに復元フレーズを入力しないでください。
ログや個人情報を公開のIssue管理システムに投稿しないでください。

Related knowledge: `DAE-0109`.

## Mithril高速同期とは何ですか？

Mithril高速同期では、検証済みのブロックチェーンデータのスナップショットをダウンロードして、Daedalusの同期を高速化します。
読み込み画面で選択肢が表示された場合は、「Mithril高速同期を使う」を選ぶと利用できます。使用しない場合は「ジェネシスからのブロックチェーン同期」を選択してください。
後からでも、「ヘルプ」メニューの「Daedalus診断」から「Mithril同期」を開始できます。
DaedalusはCardanoノードを停止し、検証済みのチェーンデータを復元してからノードを再起動し、残りのブロックを同期します。
ダウンロードと検証にかかる時間は、ネットワーク接続とストレージの性能によって異なります。
ネットワーク接続が切れた場合は、接続が回復するとダウンロードを再開する旨がDaedalusに表示されます。
スナップショットを保存先に移動している間は、Daedalusを終了しないでください。
Mithril同期をキャンセルしても、既存のチェーンデータは変更されません。
Daedalusがブロックチェーンデータの破損を検出している間はMithril同期を利用できず、代わりに「ブロックチェーンデータを再構築」が表示されます。

Related knowledge: `DAE-0110`.

## Daedalusが「ネットワークに接続しています」のまま進まないのはなぜですか？

Daedalusは、ネットワークへの接続が確立するまで、読み込み画面に「ネットワークに接続しています」と表示します。
コンピューターの時刻が基準時刻から4.5秒を超えてずれている場合、Daedalusは「同期できません - 時刻の不一致」と表示し、時刻のずれの大きさを示して、「もう一度時刻を確認する」を選べるようにします。
時刻を修正する方法については、サポートポータルの記事『「同期できません - 時刻の不一致」を解消する』をご覧ください。
20分間接続できない場合は、「接続に問題がありますか」という案内とともに、「サポートチケットを作成する」および「ログをダウンロードする」が表示されます。
Cardanoノードを起動できない場合は、同じ画面に「再試行」ボタンも表示されます。
接続が確立した後に切れた場合は、「接続失敗 - 再接続中」と表示されます。
「サポートチケットを作成する」を選択すると、サポートポータルが開きます。

Related knowledge: `DAE-0111`, `DAE-0117`.

## セキュリティソフトがDaedalusの動作を妨げることはありますか？

Daedalusは、オフチェーンメタデータサーバー（SMASH）を使用していない場合に発生する数千件のネットワークリクエストが、ウイルス対策ソフトやマルウェア対策ソフトによって悪意のある動作と判断される可能性があることを警告しています。
この警告は、「オフチェーンメタデータサーバー（SMASH）」の設定項目の横に表示されます。
Daedalusの問題を解決するために、ウイルス対策ソフトやファイアウォールを無効にしないでください。
「Daedalus診断」では、Cardanoノードが応答しているか、同期しているかを確認できます。
Daedalusに「ログをダウンロードする」が表示されている場合は、ログをダウンロードしてください。
サポートポータルでケースを作成し、使用しているセキュリティソフトの製品名を記載して、ログを添付してください。

Related knowledge: `DAE-0112`.

## サポートにログを安全に送るにはどうすればよいですか？

ログのファイルを手作業で集めるのではなく、Daedalusからダウンロードしてください。
Daedalusの設定にある「ユーザーサポート」ページからダウンロードできます。また、読み込み画面に接続の問題が表示された場合は、「ログをダウンロードする」から取得できます。
ダウンロードしたファイルを、サポートポータルの依頼に添付してください。
公開のIssue管理システム、フォーラム、チャットにログを投稿しないでください。

Related knowledge: `DAE-0113`.

## ウォレットを安全に保つにはどうすればよいですか？

復元フレーズ、送金時パスワード、秘密鍵は、サポート担当者を含め、絶対に誰にも教えないでください。
サポート担当者がこれらの情報を求めることはありません。
復元フレーズを知った人は、そのウォレット内のadaを送金できます。
パソコンの紛失、故障、盗難、動作不能などの際にウォレットを復元するための唯一の手段が、復元フレーズです。
復元フレーズは紙に書き、安全な場所に保管してください。
安全に保管する最も簡単な方法は、デジタルデータとして保存したり、オンラインに保存したりしないことです。
ハードウェアウォレットの復元フレーズはオフラインで保管してください。
Daedalusはdaedaluswallet.ioからのみダウンロードしてください。
サポートはhttps://daedalus.support.se7enlabs.com のサポートポータルでのみ提供しています。ダイレクトメッセージでサポートを申し出る相手は、正規のサポート担当者ではありません。
誰かに指示されたという理由だけで、ウォレットデータを削除したり移動したりしないでください。
ブロックチェーンデータの再構築に復元フレーズは必要ありません。また、再構築してもウォレット情報はパソコン内に保持されます。

Related knowledge: `DAE-0114`.

## 既存のサポートケースに追加で問い合わせるには？

https://daedalus.support.se7enlabs.com のサポートポータルを開き、「既存のケースを開く」を選択してください。
ケース番号と、そのケースで確認済みのメールアドレスを入力してください。
「アクセスコードを送信」を選択してください。
ポータルから、そのケースで確認済みのメールアドレスに新しいアクセスコードが送信されます。
そのコードを「6桁のアクセスコード」欄に入力し、「ケースを開く」を選択してください。

Related knowledge: `DAE-0115`.

## Locales and revisions

Items in `faq/catalog.json` carry three optional fields.

- `locale` is `en` or `ja`. An item without `locale` is English.
- `revision` is a positive integer that defaults to 1. Raise it whenever the answer changes in a way a translator must follow.
- `translates` is set only on a Japanese item, as `{"id": "<English FAQ id>", "revision": <revision>}`. It names the English item and the revision the translation was written from.

Validation fails when the named English item is missing or is not English, and when the translation records a revision older than the English item's current one. Knowledge entries use the same three fields. See `docs/versioning.md`.
