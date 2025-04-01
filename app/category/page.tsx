import Link from "next/link"
import { ArrowLeft, ArrowRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CategoryPage() {
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
              <Link href="#" className="text-pink-700 hover:text-pink-500">
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
            <Button variant="ghost" size="icon" className="text-pink-500">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden bg-pink-500 text-white hover:bg-pink-600 md:inline-flex">会員登録</Button>
          </div>
        </div>
      </header>

      {/* カテゴリーヘッダー */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-pink-700">ドライフラワー</h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              ドライフラワーの作り方や、アレンジメントのアイデア、保存方法など、
              ドライフラワーに関する様々な情報をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 検索・フィルターセクション */}
      <section className="border-b border-pink-100 bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="relative w-full md:w-auto md:flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input type="search" placeholder="記事を検索..." className="border-pink-200 pl-10" />
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 md:w-auto">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Filter className="h-4 w-4" />
                <span>並び替え:</span>
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] border-pink-200">
                  <SelectValue placeholder="並び替え" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">新着順</SelectItem>
                  <SelectItem value="popular">人気順</SelectItem>
                  <SelectItem value="comments">コメント数順</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "自宅で簡単！バラのドライフラワーの作り方",
                excerpt:
                  "バラを美しく乾燥させるコツと、長持ちさせるための保存方法をご紹介します。初心者でも失敗しない方法で挑戦してみましょう。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年3月15日",
                comments: 24,
                author: "花子",
              },
              {
                title: "ドライフラワーを使ったフレームアレンジの作り方",
                excerpt:
                  "お気に入りのドライフラワーをフレームに閉じ込めて、おしゃれなインテリアに。簡単な作り方と飾り方のアイデアをご紹介します。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年3月10日",
                comments: 18,
                author: "美咲",
              },
              {
                title: "季節のドライフラワーで作るスワッグの基本",
                excerpt:
                  "壁掛けにぴったりのドライフラワースワッグの基本的な作り方と、季節ごとのアレンジアイデアをご紹介します。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年3月5日",
                comments: 15,
                author: "さくら",
              },
              {
                title: "ドライフラワーの色を長持ちさせる秘訣",
                excerpt:
                  "ドライフラワーの色あせを防ぎ、美しい状態を長く保つための方法と、保存時の注意点について解説します。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年2月28日",
                comments: 32,
                author: "花子",
              },
              {
                title: "100均材料で作るドライフラワーのガラスドーム",
                excerpt:
                  "手軽に手に入る100均の材料だけで作れる、おしゃれなドライフラワーのガラスドームアレンジメントをご紹介します。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年2月20日",
                comments: 27,
                author: "美咲",
              },
              {
                title: "ハーブのドライフラワー活用法",
                excerpt:
                  "ラベンダーやローズマリーなどのハーブを乾燥させて作るドライフラワーの作り方と、香りを活かした活用方法をご紹介します。",
                image: "/placeholder.svg?height=300&width=400",
                date: "2025年2月15日",
                comments: 21,
                author: "さくら",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {post.author}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-pink-500 hover:text-pink-600"
                    >
                      続きを読む <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ページネーション */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 bg-pink-500 text-white hover:bg-pink-600">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-pink-500">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-pink-500">
                3
              </Button>
              <span className="px-2 text-gray-500">...</span>
              <Button variant="outline" size="sm" className="h-8 w-8 text-pink-500">
                10
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 text-pink-500">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* サイドバーとコンテンツのレイアウト（デスクトップ用） */}
      <section className="hidden py-12 lg:block">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* メインコンテンツ */}
            <div className="w-2/3">
              <h2 className="mb-6 text-2xl font-bold text-pink-700">関連記事</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "ドライフラワーとプリザーブドフラワーの違い",
                    excerpt: "似ているようで異なる2つの加工方法の特徴と、それぞれの魅力について解説します。",
                    image: "/placeholder.svg?height=250&width=350",
                    date: "2025年2月10日",
                  },
                  {
                    title: "ドライフラワーで作る春のリースアレンジ",
                    excerpt: "春の花材を使ったドライフラワーリースの作り方と、季節感あふれる飾り方をご紹介します。",
                    image: "/placeholder.svg?height=250&width=350",
                    date: "2025年2月5日",
                  },
                ].map((post, index) => (
                  <article
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-gray-800">{post.title}</h3>
                      <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-pink-500 hover:text-pink-600"
                      >
                        続きを読む <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* サイドバー */}
            <div className="w-1/3">
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
                        <span className="rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-700">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-gray-200"></div>

                <h3 className="mb-4 text-xl font-bold text-pink-700">人気の記事</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "初心者でも簡単！ドライフラワーの基本",
                      image: "/placeholder.svg?height=80&width=80",
                    },
                    {
                      title: "100均材料で作るフラワーボックス",
                      image: "/placeholder.svg?height=80&width=80",
                    },
                    {
                      title: "季節のお花で作るスワッグの作り方",
                      image: "/placeholder.svg?height=80&width=80",
                    },
                  ].map((post, index) => (
                    <li key={index}>
                      <Link href="#" className="flex gap-3 hover:text-pink-500">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <span className="text-sm text-gray-600">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-gray-200"></div>

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
            </div>
          </div>
        </div>
      </section>

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

