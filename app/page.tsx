import BookList from "@/components/BookList";
import SideFilter from "@/components/SideFilter";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid grid-cols-12 gap-6 my-4">
        <SideFilter className="col-span-3" />
        <Suspense fallback={<div>loading...</div>}>
          <BookList className="col-span-9" />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
