import Main from "./components/main/page";
import Sidebar from "./components/sidebar/page";

export default function Home() {
  return (
    <div className="flex m-3">
      <Sidebar/>
      <Main />
    </div>
  );
}
