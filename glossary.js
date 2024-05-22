// glossaryファイル Node
`use strict`
const glossary = [
{target:`CommonJS modules`, content:`モジュールの分割方法。比較的早く普及したため、npm等ですでに公開されているモジュールの多くで採用。拡張子に.js、.cjsを使用。<br>const fs = require('fs');`},
{target:`exports`, content:`CommonJS modulesのキーワード。ファイル単位に自動的に生成される変数に代入することで、関数や変数を外部に公開可能。module.exportsと併用できない。<br>calc.js<br>***.num = 1;<br>***.add = (a, b) => a + b;<br>index.js<br>const calc = require('./calc');<br>console.log(calc.num); → 1<br>let res = calc.add(3, 1); → 4 `},
{target:`require`, content:`CommonJS modulesのキーワード。モジュールを読み込む。パスを指定して読み込む場合.jsを省略可能。分割代入も可能。<br>calc.js<br>exports.num = 1;<br>exports.add = (a, b) => a + b;<br>index.js<br>const calc = ***('./calc');<br>console.log(calc.num); → 1<br>let res = calc.add(3, 1); → 4<br>const { add } = ***('./calc'); → 分割代入 `},
{target:`module.exports`, content:`CommonJS modulesのキーワード。他のファイルに公開したい変数や関数を指定する。複数の関数や変数をエクスポートしたい場合、オブジェクトを使ってまとめてエクスポートできる。exportsと併用できない。<br>const add = (a, b) => a + b;<br>const subtract = (a, b) => a - b;<br>***.*** = {<br>&emsp;add: add,<br>&emsp;subtract: subtract<br>};`},
{target:`ECMAScript modules`, content:`モジュールの分割方法。JavaScriptの標準として策定されたモジュールの方式。拡張子に.mjsを使用。<br>import fs from 'fs';`},
{target:`export`, content:`ECMAScript modulesのキーワード。変数や関数を外部に公開できる。export defaultと共存できる。<br>calc.mjs<br>*** const num = 1;<br>*** const add = (a, b) => a + b;<br>index.mjs<br>import { num, add } from './calc.mjs';<br>console.log(num); → 1<br>let res = add(3, 1); → 4 `},
{target:`import`, content:`ECMAScript modulesのキーワード。モジュールを読み込む。拡張子まで指定が必要。すべてのモジュールを読み込む場合は、asキーワードでモジュールに名前を付与した新しいオブジェクトとして読み込み可能。<br>calc.mjs<br>export const num = 1;<br>export const add = (a, b) => a + b;<br>index.mjs<br>*** { num, add } from './calc.mjs';<br>console.log(num); → 1<br>let res = add(3, 1); → 4<br>*** * as calc from './calc.mjs'; → すべてのモジュールを読み込む`},
{target:`as`, content:`ECMAScript modulesのキーワード。すべてのモジュールを読み込む。拡張子まで指定が必要。<br>calc.mjs<br>export const num = 1;<br>export const add = (a, b) => a + b;<br>index.mjs<br>import * *** calc from './calc.mjs'; → すべてのモジュールを読み込む`},
{target:`export default`, content:`ECMAScript modulesのキーワード。他のファイルに公開したい変数や関数を指定する。複数の関数や変数をエクスポートしたい場合、オブジェクトを使ってまとめてエクスポートできる。exportと共存が可能。<br>calc.mjs<br>*** *** function(){<br>&emsp;console.log('calc');<br>}<br>index.mjs<br>import defaultCalc from './calc.mjs';<br>defaultCalc(); → calcと表示`},
{target:`動的読込み（Dynamic Imports）`, content:`ECMAScript modulesの機能で、import()式にモジュールのパスを指定すると、import()式を読みだしたタイミングで初めてモジュールの読み込みが可能になる。<br>import('./calc.mjs)<br>&emsp;.then(module) => {<br>&emsp;&emsp;console.log(module.add(1, 2))<br>&emsp;})<br>document.querySelector('.addbutton').addEventListener('click', () => {<br>&emsp;import('./calc.mjs')<br>&emsp;&emsp;.then(module) => {<br>&emsp;&emsp;&emsp;const result = module.add(1, 2);<br>&emsp;&emsp;&emsp;document.querySelector('.result').innerText = result;<br>&emsp;&emsp;});<br>});`},
{target:`package.json`, content:`Node.jsプロジェクトの設定ファイル。プロジェクトに関する基本情報や依存関係、スクリプトなどを記述。プロジェクトを管理しやすくし、他の開発者がプロジェクトを簡単に理解・利用できるようにする。<br>***.***<br>{<br>&emsp;'type': 'module'<br>}<br>{<br>&emsp;'name': 'my-project', → プロジェクトの名前<br>&emsp;'version': '1.0.0', → プロジェクトのバージョン<br>&emsp;'description': 'これはサンプルのプロジェクトです', → プロジェクトの説明<br>&emsp;'main': 'index.js', → エントリーポイントとなるファイル<br>&emsp;'scripts': { → コマンドのスクリプト<br>&emsp;&emsp;'start': 'node index.js',<br>&emsp;&emsp;'test': 'echo \'No tests specified\' && exit 1'<br>&emsp;},<br>&emsp;'author': '名前', → プロジェクトの作者<br>&emsp;'license': 'ISC', → プロジェクトのライセンス<br>&emsp;'dependencies': { → プロジェクトが依存しているパッケージ<br>&emsp;&emsp;'express': '^4.17.1'<br>&emsp;}<br>}`},
{target:`デュアルパッケージ`, content:`同じパッケージが異なる環境の両方で利用できるように設計されたもの。パッケージを1つだけ用意すれば、両方の環境で再利用できる。<br>package.json<br>{<br>&emsp;'exports': {<br>&emsp;&emsp;'import': './index.mjs',<br>&emsp;&emsp;'require': './index.cjs'<br>&emsp;}<br>}`},
{target:`npm（node package manager）`, content:`Node.jsのパッケージマネージャー。コードをホスティングするレジストリとそれを操作するCLIからなる。モジュールを利用・管理するためにはpackage.jsonが必要。例：private: trueとなるようなjsonファイルをディレクトリのルートに作成し、undiciをインストール。<br>$ mkdir test_npm<br>cd test_npm<br>$ echo '{ 'private': true }' >> package.json → package.jsonの作成<br>cat package.json → package.jsonの内容表示<br>$ *** install undici --save → undiciのインストール<br>package.jsonの自動更新<br>{<br>&emsp;'private': true,<br>&emsp;'dependencies': {<br>&emsp;&emsp;'undici': '^5.14.0'<br>&emsp;}<br>}`},
{target:`npm install`, content:`npmのインストールコマンドを入力することで、package.jsonを参照し、アプリケーションが必要としているモジュールを一括で取得可能。`},
{target:`npm private`, content:`package.jsonのプロパティ。trueを設定することで、そのパッケージがプライベートであり、パブリックなリポジトリに公開されないようにすることができる。<br>$ echo '{ '***': true }' >> package.json → package.jsonの作成`},
{target:`リポジトリ`, content:`ソフトウェア開発においてソースコードや関連ファイルを管理するための場所やシステム。ソースコードのバージョン管理、共同開発、コードのバックアップなどのために使用。`},
{target:`undici`, content:`高性能なHTTPクライアントライブラリ。イタリア語で'11'の意味。`},
{target:`package-lock.json`, content:`node_modulesディレクトリを復元するために必要なファイル。npmが依存パッケージをインストールする際に生成される。`},
{target:`依存ツリー`, content:`ソフトウェアプロジェクトの依存関係を木構造で表したもの。プロジェクトが直接依存しているパッケージやライブラリ（一次依存）だけでなく、それらのパッケージがさらに依存しているパッケージ（二次依存）なども含めて視覚的に示す。`},
{target:`npm scripts`, content:`package.jsonのプロパティ。プロジェクト内で共通して利用されるタスクなどをまとめる。タスクは、npm run xxxのようにnpm経由で呼び出すことが可能。また、preをつけたスクリプトはタスク直前に、postをつけたスクリプトはタスク直後に自動的に実行される。preinstallやpostinstallでモジュールのインストール前後に初期化処理を行うなど、プロジェクト内で共通の処理がある場合、ここに記述しておくと便利。<br>package.json<br>{<br>&emsp;'private': true,<br>&emsp;'***': {<br>&emsp;&emsp;'prebuild': 'echo 'pre build'',<br>&emsp;&emsp;'build': 'echo 'build'',<br>&emsp;&emsp;'postbuild': 'echo 'post build'',<br>&emsp;}<br>}`},
{target:`セマンティックバージョニング（Semantic Versioning, semver）`, content:`ソフトウェアのバージョン番号に意味を持たせる規則。バージョン番号を MAJOR.MINOR.PATCH の形式で表現し、それぞれに以下の意味を持たせる。<br>MAJOR: 後方互換性が壊れる変更<br>MINOR: 後方互換性のある機能追加<br>PATCH: 後方互換性のあるバグ修正`},
{target:`バージョニング`, content:`ソフトウェアやドキュメントの異なるバージョンを識別するための方法。`},
{target:`undici request`, content:`undiciモジュールの関数。HTTPリクエストを送信し、レスポンスを処理できる。例：undiciを使用してYahooのウェブサイトからデータを取得するための非同期処理<br>const { *** } = require('undici');<br>***('https://www.yahoo.co.jp')<br>&emsp;.then((res) => {<br>&emsp;&emsp;return res.body.text()<br>&emsp;})<br>&emsp;.then((bodyText) => {<br>&emsp;&emsp;console.log(bodyText);<br>&emsp;})<br>&emsp;.catch((error) => {<br>&emsp;&emsp;console.error('Request failed:', error);<br>&emsp;});`},
{target:`イベントハンドリング`, content:`JavaScriptでイベント（ユーザーのアクションやシステムの状態変化など）が発生したときに、それに対する処理を記述する方法。`},
{target:`Callback`, content:`非同期処理を扱うための一般的な手法。関数を引数として渡し、処理が完了したときにその関数を呼び出す方法。ネストが深くなりがち、包括的なエラーハンドリングが行えない弱点がある。第一引数がエラーオブジェクトのため、エラーハンドリングは必ず第一引数のnullチェックが必要。try-cathでエラーを補足できないため、処理をネストしていく場合は、必ずそれぞれのネストでエラーのnullチェックが必要。この処理をPromiseオブジェクトでラップすることで、Promise化が可能。<br>const { readFile } = require('fs');<br>readFile(__filename, (err, data) => {<br>&emsp;if (err) {<br>&emsp;&emsp;console.error(err);<br>&emsp;&emsp;return;<br>&emsp;}<br>&emsp;console.log(data);<br>});`},
{target:`Callback Hell`, content:`非同期処理を扱う際に、コールバック関数を多重にネストしてしまうことで発生する問題。可読性が低下し、デバッグやメンテナンスが難しくなる。Promise、Async/Awaitなどを利用することで、コードをより読みやすく、メンテナンスしやすくする。`},
{target:`Promise`, content:`非同期処理を扱うオブジェクトで、処理の成功・失敗を返す。resolve（成功）とreject（失敗）時に呼び出す関数を引数にもつ関数をコンストラクタとして生成。成功した場合はthenメソッドの成功時のハンドラーを呼び出し、失敗した場合はchatchメソッドのハンドラーが呼び出される。<br>thenメソッド: 成功した場合の処理を定義。成功した結果を受け取り、処理を行う。<br>catchメソッド:失敗した場合の処理を定義。エラーを受け取り、エラーハンドリングを行う。<br>thenやcatchをつなぐこと（チェイン）が可能で、ネストが深くなることを防ぎ、包括的なエラーハンドリングが可能。<br>const fetchData = new ***((resolve, reject) => {<br>&emsp;setTimeout(() => {<br>&emsp;&emsp;const data = 'This is some data';<br>&emsp;&emsp;resolve(data); → thenメソッドの引数<br>&emsp;}, 1000);<br>});<br>fetchData<br>&emsp;.then(data => data + '!!'); → 'This is some data!!'が次のthenメソッドの引数に受け継がれる<br>&emsp;.then(data2 => {<br>&emsp;&emsp;console.log('Data received:', data2); → 'Data received: This is some data!!'を表示<br>&emsp;})<br>&emsp;.catch(error => {<br>&emsp;&emsp;console.error('Error occurred:', error);<br>&emsp;});`},
{target:`Promise then`, content:`JavaScriptのPromiseオブジェクトで非同期処理の結果を処理するために使うメソッド。`},
{target:`Promiseのインターフェース`, content:`非同期操作の結果を表現するためのAPI。fsなどの標準モジュールは最初からPromiseのインターフェースが実装されている。Promiseは次の3つの状態を持つ。<br>Pending（保留中）: 非同期操作がまだ完了していない状態。<br>Fulfilled（達成済み）: 非同期操作が成功した状態。<br>Rejected（拒否された）: 非同期操作が失敗した状態。<br>then()、catch()、finally()などのメソッドを持ち、これらを使用して非同期操作の結果を処理する。<br>const fs = require('fs').promises;<br>fs.readFile('example.txt', 'utf8')<br>&emsp;.then(data => {<br>&emsp;&emsp;console.log('ファイルの内容:', data);<br>&emsp;})<br>&emsp;.catch(error => {<br>&emsp;&emsp;console.error('ファイルの読み込みエラー:', error);<br>&emsp;});<br><br>const { readFile, writeFile, chmod } = require('fs/promises');<br>const backupFile = __filename + '-' +Date.now();<br>readFile(__filename)<br>&emsp;.then((data) => {<br>&emsp;&emsp;return writeFile(backupFile, data);<br>&emsp;})<br>&emsp;.then(() => {<br>&emsp;&emsp;return chmod(backupFile, 0o400);<br>&emsp;})<br>&emsp;.catch((err) => {<br>&emsp;&emsp;console.error(err);<br>&emsp;});`},
{target:`コンストラクタ`, content:`オブジェクト指向プログラミングでクラスをインスタンス化する際に呼び出される特別なメソッド。`},
{target:`async/await`, content:`非同期処理を扱うためのキーワードで、より直感的で同期的なコードを書くことができる。Promiseを利用した非同期処理を同期的な見た目で記述でき、可能な限り推奨。asyncをつけた関数を宣言すると、その中にawaitを記述できる。awaitは続く式から返されたPromiseの結果が判明するまで、その部分の実行を中止する。そのため非同期処理をasync関数内では同期処理のように、順次、簡潔に記述できる。<br>async関数: 非同期処理を含む関数を定義。関数の前に async キーワードを付ける。<br>awaitキーワード: 非同期処理の実行を待つ。await キーワードを使うことで、非同期処理が完了するまで次の行の実行を待機。<br>try/catchブロック: try ブロックで非同期処理を試行し、catch ブロックでエラーをキャッチしエラーハンドリングを行う。<br>Promiseとasync/awaitは相互に呼び出しが可能。また、ループや条件分岐も同期コードのように直感的な記述が可能。また、async関数中ではtry-catchによるエラーハンドリングも可能。<br>const { readFile, writeFile, chmod } = require('fs/promises');<br>const main = async () => {<br>&emsp;const backupFile = __filename + '-' +Date.now();<br>&emsp;const data = await readFile(__filename)<br>&emsp;await writeFile(backupFile, data);<br>&emsp;await chmod(backupFile, 0o400);<br>&emsp;return 'done';<br>};<br>main()<br>&emsp;.then((data) => {<br>&emsp;&emsp;console.log(data);<br>&emsp;})<br>&emsp;.catch((err) => {<br>&emsp;&emsp;console.error(err);<br>&emsp;});`},
{target:`イベント駆動型非同期フロー制御`, content:`非同期操作が完了したときに特定の処理を実施。コールバック関数やイベントリスナーを使用。「処理の開始」「処理の途中」「処理の終了」「エラー発生時」などさまざまなタイミングで処理を実施。ﾃﾞｰﾀを逐次処理することで目盛りを効率的に利用でき、イベントループを長時間停止させていしまう処理を分割したいといったケースで有効。`},
{target:`ストリーム処理`, content:`大きなデータを小さな塊に分割し、逐次的に処理する方法。これにより、メモリの使用量を最適化し、高速で効率的なデータ処理が可能。`},
{target:`EventEmitter`, content:`イベント駆動型プログラミングを実現するためのクラスで、イベントの発行とリスナーの登録を管理。on メソッドで特定のイベントにリスナーを登録し、emit メソッドでイベントを発行。ストリーム処理が必要な場合に推奨。代表的な処理には、HTTPリクエスト/レスポンス、TCP、標準入出力などがある。<br>const *** = require('events');<br>const myEmitter = new ***();<br>myEmitter.on('event', () => {<br>&emsp;console.log('イベントが発生しました！');<br>});<br>myEmitter.emit('event');`},
{target:`Stream`, content:`データをストリームとして扱うためのインターフェースで、非同期処理や大量のデータの処理に適している。ファイルやHTTPリクエストなどの入出力ストリームを扱う。createReadStream メソッドで読み取り可能なストリームを作成し、data イベントでデータを取得。エラー処理は error イベントで行う。EventEmitterにデータをため込む内部バッファを組み込んだもので、内部バッファに一定量のデータがたまると、イベントが発生。目盛りの使用量を抑えやすい。イベントのつなぎあわせ、データの流量の調整、変換処理など連続するデータの流れを効率的に扱うことが可能で、ストリーム処理が必要な場合に推奨。<br>const fs = require('fs');<br>const readableStream = fs.createReadStream('example.txt', 'utf8');<br>readableStream.on('data', (chunk) => {<br>&emsp;console.log('読み込んだデータ:', chunk);<br>});<br>readableStream.on('error', (error) => {<br>&emsp;console.error('エラーが発生しました:', error);<br>});<br>const main = async () => {<br>&emsp;for (let i = 0; i < 10; i++) {<br>&emsp;&emsp;const flag = await asyncFunction();<br>&emsp;&emsp;if (flag) {<br>&emsp;&emsp;&emsp;break;<br>&emsp;&emsp;}<br>&emsp;}<br>};`},
{target:`Stream Writable`, content:`Streamの種別。データの書き込みに利用（例：fs.createWriteStream()、output.txtファイルに書き込む）。<br>const fs = require('fs');<br>const writeStream = fs.createWriteStream('output.txt');<br>writeStream.write('Hello, world!');<br>writeStream.write('This is a test.');<br>writeStream.end();<br>writeStream.on('finish', () => {<br>&emsp;console.log('ファイルへの書き込みが完了しました。');<br>});<br>writeStream.on('error', (err) => {<br>&emsp;console.error('エラーが発生しました:', err);<br>});<br>`},
{target:`Stream Readable`, content:`Streamの種別。データの読み取りに利用（例：fs.createReadStream()、input.txtファイルからデータを読み取る）<br>const fs = require('fs');<br>const readStream = fs.createReadStream('input.txt', 'utf8');<br>readStream.on('data', (chunk) => {<br>&emsp;console.log('読み取ったデータ:', chunk);<br>});<br>readStream.on('end', () => {<br>&emsp;console.log('ファイルの読み取りが完了しました。');<br>});<br>readStream.on('error', (err) =>{<br>&emsp;console.error('エラーが発生しました:', err);<br>});`},
{target:`Stream Duplex`, content:`Streamの種別。書き込み/読み取りの両方に対応（例：net.Stocket、TCPソケットを作成し、読み取りと書き込みの両方を行う。ローカルホストの3000番ポートに接続するソケットを作成し、write()メソッドを使用してデータをサーバーに送信し、dataイベントを使用してサーバーからのデータを受信。また、endイベントとerrorイベントのハンドリング）。<br>const net = require('net');<br>const socket = net.connect({ port: 3000, host: 'localhost' });<br>socket.write('Hello, server!');<br>socket.on('data', (data) => {<br>&emsp;console.log('サーバーからのデータ:', data.toString());<br>});<br>socket.on('end', () => {<br>&emsp;console.log('接続が終了しました。');<br>});<br>socket.on('error', (err) => {<br>&emsp;console.error('エラーが発生しました:', err);<br>});`},
{target:`Stream Transform`, content:`Streamの種別。Duplexを継承し、読み書きしたデータを変換する（例：zlib.createDeflate、データを圧縮するためのTransform Streamを作成。Deflateストリームを作成し、入力データを圧縮。dataイベントで圧縮されたデータを取得し、endイベントで圧縮が完了したことを検知。圧縮されたデータはBase64形式でログに出力）。<br>const zlib = require('zlib');<br>const input = 'Hello, world!';<br>const deflateStream = zlib.createDeflate();<br>deflateStream.write(input); → データを圧縮し、出力ストリームに書き込む<br>deflateStream.end();<br>let compressedData = Buffer.from(''); → 出力ストリームのデータを取得<br>deflateStream.on('data', (chunk) => {<br>&emsp;compressedData = Buffer.concat([compressedData, chunk]);<br>});<br>deflateStream.on('end', () => {<br>&emsp;console.log('圧縮されたデータ:', compressedData.toString('base64'));<br>});<br>deflateStream.on('error', (err) => { → 圧縮終了時の処理<br>&emsp;console.error('エラーが発生しました:', err);<br>});`},
{target:`libuv`, content:`バックエンドで使われるクロスプラットフォームの非同期I/Oライブラリ。libuvは、非同期イベントループ、ファイルシステムアクセス、ネットワーク通信などの機能を提供し、Node.jsの非同期処理やイベント駆動型のプログラミングを可能にする。また、libuvはマルチスレッド環境での効率的なイベントループの実装をサポート。`},
{target:`クロスプラットフォーム`, content:`複数の異なるプラットフォーム（オペレーティングシステムやデバイス）で動作するソフトウェアやツール。ソフトウェアは、1つのコードベースから複数のプラットフォームに対応し、異なる環境での動作を可能にする。これにより、開発者は効率的にソフトウェアを開発し、ユーザーは様々なプラットフォームで同じ機能を利用することができる。`},
{target:`fs`, content:`標準モジュール。ファイル作成/削除などの操作。<br>index.js<br>const fs = require('***');<br>***.readFile(__filename, (err, data) => {<br>&emsp;console.log(data);<br>});`},
{target:`__filename`, content:`fsモジュール内の特殊な変数。自身のファイル名を参照。<br>index.js<br>const fs = require('fs');<br>fs.readFile(***, (err, data) => {<br>&emsp;console.log(data);<br>});`},
{target:`AsyncIterator`, content:`非同期操作を逐次的に処理するためのインターフェース。複数回登場するイベント（dataなど）の非同期操作をfor...await...ofループで扱うことが可能。async/awaitとストリーム処理の相性を劇的に向上（例：readFileLines関数がファイルを読み込み、各行を非同期に生成。for await...ofループを使って、各行を逐次処理）。<br>const fs = require('fs').promises;<br>async function* readFileLines(filePath) {<br>&emsp;const data = await fs.readFile(filePath, 'utf8');<br>&emsp;const lines = data.split('\n');<br>&emsp;for (const line of lines) {<br>&emsp;&emsp;yield line;<br>&emsp;}<br>}<br>(async () => {<br>&emsp;for await (const line of readFileLines('example.txt')) {<br>&emsp;&emsp;console.log(line);<br>&emsp;}<br>})();<br><br>function* generator() {<br>&emsp;yield 'Hello';<br>&emsp;yield 'Generator';<br>}<br>const gen = generator();<br>console.log(gen.next().value); → Hello<br>console.log(gen.next().value); → Generator`},
{target:`ジェネレータ関数`, content:`yieldキーワードを使って複数の値を逐次的に返す。さらに、asyncと組み合わせることで、非同期ジェネレータ関数を定義し、非同期に複数の値を返すことができる。本来非同期のStreamを順次処理できるため（async/awaitにStreamを持ち込む）、try-catchなどのエラーハンドリングが可能。<br>yield: ジェネレータ関数や非同期ジェネレータ関数で、複数の値を逐次的に返すために使用<br>await: 非同期操作を待機するために使用し、非同期ジェネレータ関数の中で使用<br>for await...ofループ: 非同期イテレータを反復処理するために使用し、非同期ジェネレータ関数の値を逐次的に処理<br>async function* asyncGenerator() {<br>&emsp;yield await Promise.resolve('Hello');<br>&emsp;yield await Promise.resolve('Async');<br>&emsp;yield await Promise.resolve('Generator');<br>}<br>(async () => {<br>&emsp;for await (const value of asyncGenerator()) {<br>&emsp;&emsp;console.log(value);<br>&emsp;}<br>})();<br>`},
{target:`エラーハンドリング`, content:`プログラム中で発生する可能性のあるエラーを適切に処理するための方法。プログラムのクラッシュを防ぎ、エラーの情報を提供して対処できる。<br>同期処理：try-catchで囲う、async/awaitでラップ<br>Callback：if (err)<br>EventEmitter(Stream)：emitter.on('error')<br>async/await：try-catch, .catch()<br>AsyncIterator：try-catch, .catch()`},
{target:`Top-Level Await`, content:`ECMAScript modulesのみ。モジュールのトップレベルスコープでawaitを記述でき、非同期操作を簡単に行える。CLIツールなどで効果を発揮。<br>import { readFile } from 'fs/promises';<br>try {<br>&emsp;const data = await readFile('example.txt', 'utf8');<br>&emsp;console.log(data);<br>} catch (error) {<br>&emsp;console.error('ファイルの読み込みエラー:', error);<br>}`},
{target:`CLI（Command line interface）`, content:`コマンドラインインターフェースを通じて操作するツール。ユーザーがコマンドを入力して操作を実行。開発者がスクリプトを実行したり、システム管理者がタスクを自動化したりする際に利用。<br>特徴<br>コマンド入力: キーボードからコマンドを入力して操作。<br>スクリプト実行: 簡単なコマンドから複雑なスクリプトまで実行可能。<br>自動化: 繰り返しのタスクを自動化できる。`},
{target:`Markdownファイル`, content:`軽量マークアップ言語で書かれたテキストファイルで、.md拡張子を持ち、シンプルな書式で文書を記述し、HTMLに変換できる。<br>特徴<br>簡単な書式: プレーンテキストに記述、直感的な書式設定。<br>可読性: 生のテキストが読みやすく、編集が容易。<br>変換可能: HTMLやPDFなどに簡単に変換。`},
{target:`processオブジェクト`, content:`グローバルオブジェクトで、現在のNode.jsプロセスに関する情報や制御を提供。<br>主なプロパティとメソッド<br>process.argv: コマンドライン引数の配列。<br>process.env: 環境変数のオブジェクト。<br>process.cwd(): 現在の作業ディレクトリを取得。<br>process.exit([code]): プロセスを終了。終了コードを指定可能。<br>process.stdin: 標準入力のストリーム。<br>process.stdout: 標準出力のストリーム。<br>process.stderr: 標準エラー出力のストリーム。<br><br>argv.js<br>console.log(process.argv);<br><br>$ node argv.js one two=three --four → argv.jsに'one'、'two=three'、'--four'の引数を渡す<br>[ → process.argvの内容を表示<br>&emsp;'/usr/local/bin/node',<br>&emsp;'/home/xxx/dev/cli_test/argv.js',<br>&emsp;'one',<br>&emsp;'two=three',<br>&emsp;'--four'<br>]`},
{target:`yargs`, content:`CLIツールを簡単に作成するためのモジュール。コマンドライン引数の解析やコマンドの定義をサポートする。<br>主な機能<br>引数解析: コマンドライン引数を簡単に解析。<br>コマンド定義: 複数のコマンドを定義し、個別に処理。<br>オプションとフラグ: 短縮形と長い形のオプションをサポート。<br>ヘルプとバージョン: 自動的にヘルプとバージョン情報を生成。<br>index.js<br>const path = require('path');<br>const fs = require('fs');<br>const yargs = require('yargs/yargs');<br>const { hideBin } = require('yargs/helpers'); → コマンドライン引数をパースするためのヘルパー関数<br>const { argv } = yargs(hideBin(process.argv)); → 3つ目以降の引数を取得<br>console.og(argv) → 引数を表示<br>const packageStr = fs.readFileSync(path.resolve(__dirname, 'package.json'), encoding: 'utf-8' });<br>const package = JSON.parse(packageStr); →  読み込んだファイルの内容をJSONオブジェクトに変換<br>const nameOption = process.argv.includes('--name'); → nameオプションのチェック<br>if (nameOption){<br>&emsp;console.log(package.name);<br>} else {<br>&emsp;console.log('オプションがありません');<br>}<br><br>$ node index.js --name → nameオプション取得確認<br>{ _:[], name: true, '$0': 'index.js'}<br>$ node index.js --version → package.jsonのバージョンを確認<br>1.0.0<br>`},
{target:`AAAAAAAAAAAA`, content:`AAAAAAAAAAAAAAAA`},
{target:`path`, content:`標準モジュール。ファイルやディレクトリパスなどのユーティリティ機能。`},
{target:`http/https`, content:`標準モジュール。http/httpsサーバーやクライアントの機能。<br>const http = require('http');<br>http → httpサーバーの生成（例：3000番ポートをlistenするHTTPサーバー）。<br>&emsp;.createServer((req, res) => {<br>&emsp;&emsp;res.write('hello world');<br>&emsp;&emsp;res.end();<br>&emsp;})<br>&emsp;.listen(3000) `},
{target:`os`, content:`標準モジュール。CPUの数やホスト名などOS関連情報の取得。`},
{target:`child_process`, content:`標準モジュール。子プロセス関連の機能。`},
{target:`cluster.worker_threads`, content:`標準モジュール。マルチコア、プロセスを利用するための機能。`},
{target:`crypto`, content:`標準モジュール。OpenSSLのハッシュや暗号・署名や検証などの暗号化の機能。`},
{target:`assert`, content:`標準モジュール。アサーション（変数や関数の検証）の機能。`},
{target:`コンテキスト`, content:`実行される場所。thisの値に影響を与える。`},
{target:`関数コンテキスト`, content:`関数内での this の値は、関数の呼び出し方によって異なる。関数の呼び出し時に this の値を特定の値に設定するには、call() またはapply()を使用する。`},
{target:`ランタイム`, content:`実行環境`},
{target:`フロントエンド`, content:`面表示や入力・操作の受け付けなど、主に利用者が直接触れる部分。`},
{target:`バックエンド`, content:`フロントエンドから受け取ったデータを処理・保存したり、フロントエンドの要求に応じてデータや機能を提供する構成要素。`},
{target:`同期処理`, content:`同時に1つのタスクしか実行されない。`},
{target:`非同期処理`, content:`同時に複数のタスクを処理する。`},
{target:`イベント駆動形`, content:`発行されるイベントを下敷きにさまざまな処理を行う特徴。`},
{target:`Non-Blocking I/O`, content:`I/O（入出力）をブロッキングしないこと。`},
{target:`I/O（Input/Output）`, content:`出力。`},
{target:`キュー`, content:`先頭が常に最も古い要素になるデータ構造で、新しい要素は必ず末尾に追加される。取り出すときは常に先頭の最も古い要素から取り出される。`},
{target:`イベントループ`, content:`プログラムが新たなイベントを待ち続ける状態。`},
{target:`アイドル`, content:`使用されていない、何の処理も行っていない、すぐ使用できるよう待機などの状態。`},
{target:`スレッド`, content:`並行処理に対応したマイクロプロセッサ（CPU/MPU）およびオペレーティングシステム（OS）におけるプログラムの最小の実行単位。`},
{target:`シングルスレッド`, content:`プログラムの処理の流れが一本のみである状態。`},
{target:`マルチスレッド`, content:`一つのコンピュータプログラムを実行する際に、複数の処理の流れを並行して進めること。また、そのような複数の処理の流れ。`},
{target:`プロセス`, content:`実行されているプログラムを管理する単位。`},
{target:`C10K問題`, content:`Apache HTTP ServerなどのWebサーバソフトウェアとクライアントの通信において、クライアントが約1万台に達すると、Webサーバーのハードウェア性能に余裕があるにもかかわらず、レスポンス性能が大きく下がる問題。Apacheはクライアントの接続一つ一つに対してプロセスを生成する仕様となっている。そのため大量のクライアントから接続があった場合、その数だけプロセスを生成しなければならない。しかし、WindowsあるいはLinuxなどのUNIX系OSでは、同時に起動できるプロセスに32767(2^15-1)個の制限がある。この制限を超えるとプロセスを新規生成することができなくなるため、既にあるリクエストの処理が終わるまで新たな接続は待たなければならない。回避には、サーバーサイドでNode.jsなどの駆動方式を持ったソフトウェアを使用する。`},
{target:`バンドル`, content:`複数のファイルを一つにまとめること。単体でも提供可能な製品やサービスを、複数組み合わせてセットで販売したり、別の製品やサービスに付属して販売、提供すること。`},
{target:`バンドラー`, content:`ファイルをバンドルするツールやソフト。`},
{target:`nan`, content:`nan`},
{target:`パッケージ`, content:`一つのソフトウェアを構成する実行プログラムやソースコード、設定ファイル、データファイル、ドキュメントなどを特定の形式の圧縮ファイルなどにまとめたもの。`},
{target:`パッケージマネージャー`, content:`リポジトリに接続してパッケージの一覧を取得し、利用者が指示したパッケージを取り寄せて自動的に展開、導入（インストール）して実行可能な状態にする。`},
{target:`リポジトリ`, content:`ソフトウェア開発などに用いるバージョン管理システムやプロジェクト管理システムなどで、プロジェクトを構成するプログラムのソースコードやドキュメント、関連する各種のデータやファイルなどを一元的に管理する格納場所。`},
{target:`ホスティング`, content:`通信事業者やインターネットサービスプロバイダが提供するサーバーのレンタルサービス。`},
{target:`レジストリ`, content:`Windowsでシステム（OS）やアプリケーションソフトの設定データなどを一元管理するデータベース。ストレージ内のシステムドライブに保管されている。各項目はキー（key、項目名）と値（value）を一対一に対応付けたセットとして記録されている。値にはいくつかのデータ型が用意されており、文字列を格納できる文字列値や、任意のバイト列を格納できるバイナリ値、32ビットのビット列を格納できるDWORD値などが利用できる。`},
{target:`トランスパイル`, content:`あるプログラミング言語で書かれたプログラムを、別のプログラミング言語のプログラムに変換すること。`},
{target:`SSR（Server Side Rendering）`, content:`フロントエンドで生成されるページを、サーバーサイドで事前にレンダリングしてHTMLとして準備する。`},
{target:`レンダリング`, content:`何らかのデータ形式やデータ構造で記述された描画内容を表すデータ群をソフトウェアが読み込み、内容を解釈して画像や動画、音声などを生成する。結果をそのまま即座に画面に表示することを指すが、生成結果を何らかのデータ形式でファイルなどに記録・保存したり、ネットワークを介して別のコンピュータに送信・配信することを含む場合もある。`},
{target:`BFF（Backend For Frontend）`, content:`フロントエンドのために複数のAPIなどを束ねる役割を持つバックエンド。`},
{target:`コンテキストスイッチ`, content:`コンピュータの処理装置（CPU）が現在実行している処理の流れ（プロセス、スレッド）を一時停止し、別のものに切り替えて実行を再開すること。あるプロセスを実行している最中に、処理を中断してCPU内部のレジスタの状態などを特定のメモリ領域などに保存し、同じように途中で中断されていた別のプロセスの実行状態を読み込んで処理を再開する。複数のプロセスを並行に実行することができる。`},
{target:`モジュール`, content:`機能単位、交換可能な構成部分などを意味する。機器やシステムの一部を構成するひとまとまりの機能を持った部品で、システム中核部や他の部品への接合部（インターフェース）の仕様が明確に定義され、容易に追加や交換ができるようなもののことを指す。`},
{target:`シングルトン`, content:`オブジェクト指向プログラミングにおけるクラスのデザインパターンの一つで、実行時に一つしかインスタンスを作ることができないように設計。プログラム上では常に同一のインスタンスを参照するように強制することができる。`},
]
