import BookList from "@/components/BookList";
import { Suspense } from "react";

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Hello World!</p>
      <Suspense fallback={<div>loading...</div>}>
        <BookList />
      </Suspense>
    </main>
  );
};

export default Home;
