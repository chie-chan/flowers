import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPost, getCategories, getRelatedPosts, getComments } from "@/lib/wordpress"
import { notFound } from "next/navigation"
import SocialShare from "@/app/components/SocialShare"
import Comments from "@/app/components/Comments"

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  const categories = await getCategories();
  const comments = await getComments(post?.id || "");

  if (!post) {
    notFound();
  }

  const categoryIds = post.categories?.nodes.map(category => category.id) || [];
  const relatedPosts = await getRelatedPosts(categoryIds, post.id);

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
              <Link href="/" className="text-pink-700 hover:text-pink-500">
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
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-pink-500 hover:text-pink-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </div>

        <article className="mx-auto max-w-3xl">
          {post.featuredImage?.node?.sourceUrl && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                className="h-[400px] w-full object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-pink-700">{post.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {post.date && (
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('ja-JP')}
                  </time>
                )}
                {post.author?.node?.name && (
                  <span>by {post.author.node.name}</span>
                )}
              </div>
              <SocialShare
                title={post.title}
                url={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              />
            </div>
          </div>

          {post.categories?.nodes && post.categories.nodes.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-2 text-lg font-semibold text-pink-700">カテゴリー</h2>
              <div className="flex flex-wrap gap-2">
                {post.categories.nodes.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 hover:bg-pink-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-pink-700">関連記事</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/post/${relatedPost.slug}`}
                  className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {relatedPost.featuredImage?.node?.sourceUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.featuredImage.node.sourceUrl}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* コメント */}
        <Comments comments={comments} postId={post.id} />
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