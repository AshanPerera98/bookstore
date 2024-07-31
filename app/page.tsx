import BookList from "@/components/BookList";
import SideFilter from "@/components/SideFilter";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col gap-6 m-4 max-w-screen-2xl sm:flex-row w-full">
        <SideFilter className="min-w-64 lg:min-w-80" />
        <BookList />
      </div>
    </main>
  );
};

export default Home;
