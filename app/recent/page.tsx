import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getCategories, getRecentPosts } from "@/lib/wordpress"

export default async function RecentPage() {
  const categories = await getCategories();
  const posts = await getRecentPosts();

  return (
    <div className="min-h-screen bg-[#FFF9F9]">
      {/* ヘッダー */}
      <header className="border-b border-pink-100 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold text-pink-500">Flower Craft</Link>
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
              <Link href="/popular" className="text-gray-600 hover:text-pink-500">
                人気記事
              </Link>
              <Link href="/recent" className="text-pink-700 hover:text-pink-500">
                新着記事
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pink-500">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pink-700">新着記事</h1>
          <p className="mt-2 text-gray-600">最新のハンドメイドアイデアをチェック</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
            >
              <Link href={`/post/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    {post.categories?.nodes && post.categories.nodes.length > 0 && (
                      <span className="rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-700">
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                    {post.date && (
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('ja-JP')}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{post.title}</h3>
                  <p className="mb-4 line-clamp-2 text-gray-600">
                    {post.content.replace(/<[^>]*>/g, '')}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-pink-500 hover:text-pink-600">
                    続きを読む <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

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
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/category/${category.slug}`} className="hover:text-pink-500">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-pink-700">リンク</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-pink-500">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/popular" className="hover:text-pink-500">
                    人気記事
                  </Link>
                </li>
                <li>
                  <Link href="/recent" className="hover:text-pink-500">
                    新着記事
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-pink-500">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
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
  );
} 