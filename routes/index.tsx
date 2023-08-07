import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Todos from "../islands/Todos.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>fresh-todo</title>
      </Head>
      <body className="bg-gray-200">
        <div className="mt-10 px-5 rounded bg-white mx-auto flex max-w-screen-md flex-col justify-center py-12">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-5 text-center">
              Fresh Todos!
            </h2>
            <img src="/logo.svg" alt="fresh logo" className="mx-auto" />
          </div>
          <Todos />
        </div>
      </body>
    </>
  );
}
