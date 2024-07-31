import BookList from "@/components/BookList";
import SideFilter from "@/components/SideFilter";

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col gap-6 max-w-screen-2xl sm:flex-row w-full p-4">
        <SideFilter className="min-w-64 lg:min-w-80" />
        <BookList />
      </div>
    </main>
  );
};

export default Home;
