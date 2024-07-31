import BookList from "@/components/BookList";
import SideFilter from "@/components/SideFilter";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col gap-6 m-4 max-w-screen-2xl sm:flex-row">
        <SideFilter className="min-w-64 lg:min-w-80" />
        <Suspense fallback={<div>loading...</div>}>
          <BookList className="" />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
