import { Comment } from "@/lib/wordpress";

interface CommentsProps {
  comments: Comment[];
  postId: string;
}

export default function Comments({ comments, postId }: CommentsProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-8 text-2xl font-bold text-pink-700">コメント</h2>
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {comment.author.node.name}
                </span>
                <time className="text-sm text-gray-500" dateTime={comment.date}>
                  {new Date(comment.date).toLocaleDateString('ja-JP')}
                </time>
              </div>
              <div
                className="prose prose-sm max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">まだコメントはありません。</p>
      )}
      <div className="mt-8">
        <a
          href={`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-comments-post.php`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-pink-500 px-6 py-2 text-white hover:bg-pink-600"
        >
          コメントを投稿する
        </a>
      </div>
    </div>
  );
} 