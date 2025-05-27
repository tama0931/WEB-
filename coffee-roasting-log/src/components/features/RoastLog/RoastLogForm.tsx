// src/components/features/RoastLog/RoastLogForm.tsx
import React from 'react'; // Reactを使うために必要です

function RoastLogForm() { // RoastLogFormという名前の部品（コンポーネント）を作ります
  return (
    // この部品の見た目を決めるHTMLの要素とTailwind CSSの見た目の言葉（クラス名）を書きます
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">新しい焙煎ログを追加</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            日付:
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="bean" className="block text-sm font-medium text-gray-700">
            豆の種類:
          </label>
          <input
            type="text"
            id="bean"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="エチオピア イルガチェフェ"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          ログを保存
        </button>
      </form>
    </div>
  );
}

export default RoastLogForm; // この部品を他のファイルで使えるように公開します