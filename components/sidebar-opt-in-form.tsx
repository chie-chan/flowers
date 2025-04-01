import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SidebarOptInForm() {
  return (
    <div className="rounded-lg bg-gradient-to-r from-pink-100 to-purple-100 p-4">
      <h3 className="mb-2 text-sm font-bold text-pink-700">ニュースレター登録</h3>
      <p className="mb-3 text-xs text-gray-600">最新のハンドメイドアイデアをお届けします</p>
      <form className="space-y-2">
        <Input type="email" placeholder="メールアドレスを入力" className="h-8 border-pink-200 bg-white/80 text-sm" />
        <Button className="w-full bg-pink-500 text-white hover:bg-pink-600" size="sm">
          登録する
        </Button>
      </form>
    </div>
  )
}

