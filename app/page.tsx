import Link from "next/link"
import { ArrowRight, Heart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
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
              <Link href="#" className="text-pink-700 hover:text-pink-500">
                ホーム
              </Link>
              <Link href="#" className="text-gray-600 hover:text-pink-500">
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
            <Button variant="ghost" size="icon" className="text-pink-500">
              <Heart className="h-5 w-5" />
            </Button>
            <Button className="hidden bg-pink-500 text-white hover:bg-pink-600 md:inline-flex">会員登録</Button>
          </div>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold text-pink-700">
                お花のある暮らしを
                <br />
                もっと素敵に
              </h1>
              <p className="text-lg text-gray-600">
                季節のお花を使ったハンドメイドアイデアや、
                <br />
                作り方のコツをご紹介します。
              </p>
              <div className="flex gap-4">
                <Button className="bg-pink-500 text-white hover:bg-pink-600">記事を見る</Button>
                <Button variant="outline" className="border-pink-200 text-pink-500">
                  カテゴリーから探す
                </Button>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="花のハンドメイド作品集"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-pink-700">カテゴリー</h2>
            <p className="text-gray-600">お好みのカテゴリーから記事を探してみましょう</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "ドライフラワー", image: "/placeholder.svg?height=200&width=200" },
              { name: "プリザーブドフラワー", image: "/placeholder.svg?height=200&width=200" },
              { name: "フラワーアレンジメント", image: "/placeholder.svg?height=200&width=200" },
              { name: "リース作り", image: "/placeholder.svg?height=200&width=200" },
            ].map((category, index) => (
              <Link
                href="#"
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-center text-lg font-medium text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 新着記事セクション */}
      <section className="bg-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-pink-700">新着記事</h2>
              <p className="text-gray-600">最新のハンドメイドアイデアをチェック</p>
            </div>
            <Button variant="link" className="flex items-center text-pink-500">
              もっと見る <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "春の花を使ったリースの作り方",
                excerpt: "桜やチューリップを使った、春らしい華やかなリースの作り方をご紹介します。",
                image: "/placeholder.svg?height=300&width=400",
                category: "リース作り",
                date: "2025年3月15日",
              },
              {
                title: "長持ちするドライフラワーの作り方のコツ",
                excerpt: "自宅で簡単にできる、色鮮やかなドライフラワーの作り方と保存方法について解説します。",
                image: "/placeholder.svg?height=300&width=400",
                category: "ドライフラワー",
                date: "2025年3月10日",
              },
              {
                title: "母の日に贈るフラワーボックスアレンジ",
                excerpt: "感謝の気持ちを込めた、特別なフラワーボックスの作り方をステップバイステップで解説します。",
                image: "/placeholder.svg?height=300&width=400",
                category: "フラワーアレンジメント",
                date: "2025年3月5日",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-700">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
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
      </section>

      {/* 人気記事セクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-pink-700">人気記事</h2>
            <p className="text-gray-600">みなさんに読まれている人気の記事です</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "100均材料で作る可愛いフラワーボックス",
                image: "/placeholder.svg?height=250&width=250",
                views: "5,234",
              },
              {
                title: "初心者でも簡単！基本のリース作り",
                image: "/placeholder.svg?height=250&width=250",
                views: "4,567",
              },
              {
                title: "プリザーブドフラワーの基本テクニック",
                image: "/placeholder.svg?height=250&width=250",
                views: "3,982",
              },
              {
                title: "季節のお花で作るスワッグの作り方",
                image: "/placeholder.svg?height=250&width=250",
                views: "3,451",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-800/70 via-pink-500/30 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mb-1 flex items-center gap-1">
                    <Heart className="h-4 w-4 text-white" />
                    <span className="text-xs text-white">{post.views}ビュー</span>
                  </div>
                  <h3 className="text-lg font-medium text-white">{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ニュースレター登録 */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold text-pink-700">ニュースレターに登録</h2>
              <p className="text-gray-600">最新のハンドメイドアイデアや特別なコンテンツをお届けします</p>
            </div>
            <form className="flex flex-col gap-4 md:flex-row">
              <Input type="email" placeholder="メールアドレスを入力" className="flex-1 border-pink-200" />
              <Button className="bg-pink-500 text-white hover:bg-pink-600">登録する</Button>
            </form>
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

