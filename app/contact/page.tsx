import Link from "next/link"
import { getCategories } from "@/lib/wordpress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default async function ContactPage() {
  const categories = await getCategories();

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
              <Link href="/recent" className="text-gray-600 hover:text-pink-500">
                新着記事
              </Link>
              <Link href="/contact" className="text-pink-700 hover:text-pink-500">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-pink-700">お問い合わせ</h1>
            <p className="mt-2 text-gray-600">
              ご質問やご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。
            </p>
          </div>

          <form className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                お名前 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                件名 <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border-gray-300 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="bg-pink-500 text-white hover:bg-pink-600"
              >
                送信する
              </Button>
            </div>
          </form>
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