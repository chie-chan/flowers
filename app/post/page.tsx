import Link from "next/link"
import { ArrowLeft, Calendar, Heart, MessageSquare, Share2, User, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function PostPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F9]">
      {/* ヘッダー */}
      <header className="border-b border-pink-100 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-pink-500">Flower Craft</div>
            <span className="text-sm text-pink-400">〜お花のハンドメイドキュレーション〜</span>
          </div>
          <div className="hidden md:flex">
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-pink-500">
                ホーム
              </Link>
              <Link href="/category" className="text-gray-600 hover:text-pink-500">
                カテゴリー
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                人気記事
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                新着記事
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
                お問い合わせ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button className="hidden bg-pink-500 text-white hover:bg-pink-600 md:inline-flex">会員登録</Button>
          </div>
        </div>
      </header>

      {/* 記事ヘッダー */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 text-pink-500">
              <ArrowLeft className="h-4 w-4" />
              戻る
            </Button>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href="/category"
              className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 hover:bg-pink-200"
            >
              ドライフラワー
            </Link>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            自宅で簡単！バラのドライフラワーの作り方と長持ちさせるコツ
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025年3月15日</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>花子</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>24件のコメント</span>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* 記事本文 */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src="/placeholder.svg?height=500&width=800"
                alt="バラのドライフラワー"
                className="h-auto w-full object-cover"
              />
              <div className="p-6">
                <div className="prose prose-pink max-w-none">
                  <p className="lead">
                    バラは美しいドライフラワーになる花材の一つです。自宅で簡単に作れるバラのドライフラワーの作り方と、長く美しさを保つためのコツをご紹介します。
                  </p>

                  <h2>用意するもの</h2>
                  <ul>
                    <li>新鮮なバラの花（つぼみか半開きのもの）</li>
                    <li>はさみ</li>
                    <li>糸または細いワイヤー</li>
                    <li>吊るすためのフック</li>
                  </ul>

                  <h2>作り方</h2>
                  <h3>1. バラの選び方</h3>
                  <p>
                    ドライフラワーに適したバラは、つぼみか半開きの状態のものです。完全に開ききったバラは、乾燥すると花びらが散りやすくなります。また、花びらに傷や病気の跡がないものを選びましょう。
                  </p>

                  <div className="my-6 grid gap-4 md:grid-cols-2">
                    <img src="/placeholder.svg?height=300&width=400" alt="バラの選び方" className="rounded-lg" />
                    <img src="/placeholder.svg?height=300&width=400" alt="バラの準備" className="rounded-lg" />
                  </div>

                  <h3>2. 下準備</h3>
                  <p>
                    バラの茎を5〜10cmほどの長さに切り、余分な葉を取り除きます。茎が長すぎると乾燥に時間がかかり、短すぎるとアレンジメントに使いにくくなります。
                  </p>

                  <h3>3. 吊るして乾燥させる方法</h3>
                  <p>最も一般的な方法は、バラを逆さに吊るして乾燥させる方法です。以下の手順で行いましょう。</p>
                  <ol>
                    <li>バラの茎を糸やワイヤーで結びます</li>
                    <li>風通しが良く、直射日光の当たらない場所に吊るします</li>
                    <li>2〜3週間ほど乾燥させます</li>
                  </ol>

                  <div className="my-6">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="バラを吊るして乾燥させる様子"
                      className="rounded-lg"
                    />
                  </div>

                  <h3>4. シリカゲルを使った方法</h3>
                  <p>
                    より色鮮やかに仕上げたい場合は、シリカゲルを使う方法がおすすめです。花の形をきれいに保ちながら乾燥させることができます。
                  </p>

                  <h2>長持ちさせるコツ</h2>
                  <ul>
                    <li>直射日光を避け、風通しの良い場所に保管する</li>
                    <li>湿気の多い場所は避ける</li>
                    <li>ヘアスプレーを軽く吹きかけると、花びらが散るのを防げる</li>
                    <li>定期的に埃を払う場合は、柔らかい筆や羽根ばたきを使い、優しく行う</li>
                  </ul>

                  <h2>アレンジメントのアイデア</h2>
                  <p>
                    ドライフラワーになったバラは、様々なアレンジメントに活用できます。フレームに入れて壁掛けにしたり、ガラスドームに入れてインテリアにしたり、リースやスワッグの材料として使ったりと、アイデア次第で素敵な作品が作れます。
                  </p>

                  <div className="my-6 grid gap-4 md:grid-cols-3">
                    <img src="/placeholder.svg?height=200&width=200" alt="フレームアレンジ" className="rounded-lg" />
                    <img src="/placeholder.svg?height=200&width=200" alt="ガラスドーム" className="rounded-lg" />
                    <img src="/placeholder.svg?height=200&width=200" alt="リースアレンジ" className="rounded-lg" />
                  </div>

                  <h2>まとめ</h2>
                  <p>
                    バラのドライフラワーは、自宅で簡単に作ることができ、長く楽しむことができます。お気に入りのバラを使って、ぜひチャレンジしてみてください。季節のバラを使ったドライフラワーで、お部屋に彩りを添えましょう。
                  </p>
                </div>

                {/* シェアボタン */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">この記事をシェア：</span>
                    <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" className="gap-1 text-pink-500">
                    <Heart className="h-4 w-4" />
                    お気に入り
                  </Button>
                </div>

                {/* タグ */}
                <div className="mt-6">
                  <div className="text-sm text-gray-500">タグ：</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["ドライフラワー", "バラ", "DIY", "インテリア", "保存方法", "ハンドメイド"].map((tag, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-700 hover:bg-pink-100"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 著者情報 */}
                <div className="mt-8 rounded-lg bg-pink-50 p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="著者"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">花子</h3>
                      <p className="text-sm text-gray-600">
                        フラワーアレンジメント講師。ドライフラワー専門店を運営しています。花のある暮らしの素晴らしさを多くの人に伝えたいと思っています。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 前後の記事 */}
                <div className="mt-8 grid gap-4 border-t border-b border-gray-200 py-6 md:grid-cols-2">
                  <Link href="#" className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-pink-50">
                    <ArrowLeft className="h-4 w-4 text-pink-500" />
                    <div>
                      <div className="text-xs text-gray-500">前の記事</div>
                      <div className="text-sm font-medium text-gray-800">
                        ドライフラワーを使ったフレームアレンジの作り方
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-end gap-2 rounded-lg p-2 text-right transition-colors hover:bg-pink-50"
                  >
                    <div>
                      <div className="text-xs text-gray-500">次の記事</div>
                      <div className="text-sm font-medium text-gray-800">季節のドライフラワーで作るスワッグの基本</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-pink-500" />
                  </Link>
                </div>

                {/* コメント */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-gray-800">コメント (24)</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: "みき",
                        date: "2025年3月16日",
                        content:
                          "とても分かりやすい解説をありがとうございます！早速バラのドライフラワー作りに挑戦してみます。シリカゲルはどこで手に入りますか？",
                      },
                      {
                        name: "花子（著者）",
                        date: "2025年3月16日",
                        content:
                          "みきさん、コメントありがとうございます！シリカゲルは100均やクラフト用品店、ネットショップなどで手に入りますよ。ドライフラワー専用のものを選ぶと良いでしょう。",
                        isAuthor: true,
                      },
                      {
                        name: "ゆうこ",
                        date: "2025年3月15日",
                        content:
                          "先月バラのドライフラワーを作ってみましたが、色があせてしまいました。ヘアスプレーを使うというコツは知りませんでした！次回試してみます。",
                      },
                    ].map((comment, index) => (
                      <div key={index} className={`rounded-lg p-4 ${comment.isAuthor ? "bg-pink-50" : "bg-gray-50"}`}>
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                comment.isAuthor ? "bg-pink-200 text-pink-700" : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {comment.name.charAt(0)}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-800">{comment.name}</span>
                                {comment.isAuthor && (
                                  <span className="rounded bg-pink-200 px-1.5 py-0.5 text-xs text-pink-700">著者</span>
                                )}
                              </div>
                              <div className="text-xs text-gray-500">{comment.date}</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{comment.content}</p>
                      </div>
                    ))}
                  </div>

                  {/* コメントフォーム */}
                  <div className="mt-6">
                    <h4 className="mb-4 text-lg font-bold text-gray-800">コメントを残す</h4>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                            お名前
                          </label>
                          <Input id="name" className="border-pink-200" />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            メールアドレス（非公開）
                          </label>
                          <Input id="email" type="email" className="border-pink-200" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="comment" className="mb-1 block text-sm font-medium text-gray-700">
                          コメント
                        </label>
                        <Textarea id="comment" rows={4} className="border-pink-200" />
                      </div>
                      <Button className="bg-pink-500 text-white hover:bg-pink-600">コメントを投稿</Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* サイドバー */}
          <div className="space-y-6">
            {/* 著者プロフィール */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="text-center">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="著者"
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-800">花子</h3>
                <p className="text-sm text-gray-600">フラワーアレンジメント講師</p>
              </div>
              <p className="mt-4 text-gray-600">
                ドライフラワー専門店を運営。花のある暮らしの素晴らしさを多くの人に伝えたいと思っています。
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
              </div>
            </div>

            {/* 関連記事 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-pink-700">関連記事</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "ドライフラワーとプリザーブドフラワーの違い",
                    image: "/placeholder.svg?height=80&width=80",
                    date: "2025年2月10日",
                  },
                  {
                    title: "ドライフラワーで作る春のリースアレンジ",
                    image: "/placeholder.svg?height=80&width=80",
                    date: "2025年2月5日",
                  },
                  {
                    title: "100均材料で作るドライフラワーのガラスドーム",
                    image: "/placeholder.svg?height=80&width=80",
                    date: "2025年1月25日",
                  },
                ].map((post, index) => (
                  <div key={index} className="flex gap-3">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 hover:text-pink-500">
                        <Link href="#">{post.title}</Link>
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* カテゴリー */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-pink-700">カテゴリー</h3>
              <ul className="space-y-2">
                {[
                  { name: "ドライフラワー", count: 24 },
                  { name: "プリザーブドフラワー", count: 18 },
                  { name: "フラワーアレンジメント", count: 32 },
                  { name: "リース作り", count: 15 },
                  { name: "ブーケ", count: 12 },
                  { name: "テーブルフラワー", count: 9 },
                ].map((category, index) => (
                  <li key={index}>
                    <Link href="#" className="flex items-center justify-between text-gray-600 hover:text-pink-500">
                      <span>{category.name}</span>
                      <span className="rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-700">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* タグクラウド */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-pink-700">タグ</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "ドライフラワー",
                  "100均",
                  "DIY",
                  "インテリア",
                  "ギフト",
                  "春",
                  "バラ",
                  "保存方法",
                  "リース",
                  "スワッグ",
                  "アレンジメント",
                  "ハンドメイド",
                  "花材",
                  "シリカゲル",
                  "フレーム",
                ].map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-700 hover:bg-pink-100"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* ニュースレター登録 */}
            <div className="rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-pink-700">ニュースレター登録</h3>
              <p className="mb-4 text-sm text-gray-600">最新のハンドメイドアイデアや特別なコンテンツをお届けします</p>
              <form className="space-y-2">
                <Input type="email" placeholder="メールアドレスを入力" className="border-pink-200 bg-white/80" />
                <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">登録する</Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-pink-700">Flower Craft</h3>
              <p className="text-gray-600">お花のハンドメイドに関する情報を発信するキュレーションサイトです。</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-pink-700">カテゴリー</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    ドライフラワー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    プリザーブドフラワー
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    フラワーアレンジメント
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    リース作り
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-pink-700">リンク</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    人気記事
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    新着記事
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-pink-500">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-pink-700">フォロー</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-pink-500 hover:text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Flower Craft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

