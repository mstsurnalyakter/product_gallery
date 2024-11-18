import Categories from "@/components/Categories";
import HomePageBanner from "@/components/HomePageBanner";


export default function Home() {
  return (
    <div className="space-y-11">
      <HomePageBanner/>
      <Categories/>
    </div>
  );
}
