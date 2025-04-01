import Link from "next/link"
import { getCategories, getPopularPosts } from "@/lib/wordpress"
import Pagination from "@/app/components/Pagination"

interface PopularPageProps {
  searchParams: {
    after?: string;
    before?: string;
  };
}

export default async function PopularPage({ searchParams }: PopularPageProps) {
  const categories = await getCategories();
  const posts = await getPopularPosts();

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
              <Link href="/popular" className="text-pink-700 hover:text-pink-500">
                人気記事
              </Link>
              <Link href="/recent" className="text-gray-600 hover:text-pink-500">
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
          <h1 className="text-3xl font-bold text-pink-700">人気記事</h1>
          <p className="mt-2 text-gray-600">みなさんに読まれている人気の記事です</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              <Link href={`/post/${post.slug}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-800/70 via-pink-500/30 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mb-1 flex items-center gap-1">
                    <span className="text-xs text-white">{post.commentCount}コメント</span>
                  </div>
                  <h3 className="text-lg font-medium text-white">{post.title}</h3>
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