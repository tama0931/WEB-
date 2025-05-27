import './index.css'; // Tailwind CSSを使うための設定を読み込みます
import RoastLogForm from './components/features/RoastLog/RoastLogForm'; // RoastLogFormをインポート

function App() {
  return (
    // divタグにTailwind CSSの「見た目」を決める言葉（クラス名）をたくさん書きます
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* h1タグのHello, Tailwind CSS!は表示しないので削除またはコメントアウト */}
      {/* <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind CSS!
      </h1> */}

      {/* ここでRoastLogFormを表示します */}
      <RoastLogForm />
    </div>
  );
}

export default App; // このAppという名前のコードを他の場所で使えるようにします