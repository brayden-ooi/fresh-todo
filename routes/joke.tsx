import { RouteContext } from "$fresh/server.ts";

// export const handler: Handlers<string | null> = {
//   async GET(_, ctx) {
//     const resp = await fetch(`http://localhost:8000/api/joke`);
//     if (resp.status === 404) {
//       return ctx.render(null);
//     }
//     const joke: string = await resp.text();

//     return ctx.render(joke);
//   },
// };

// export default function Page({ data }: PageProps<string | null>) {
//   if (!data) {
//     return <h1>Joke not found</h1>;
//   }

//   return (
//     <div>
//       <p>{data}</p>
//     </div>
//   );
// }

export default async function Page(req: Request, ctx: RouteContext) {
  const resp = await fetch(`http://localhost:8000/api/joke`);

  if (resp.status === 404) {
    return <h1>Joke not found</h1>;
  }

  const joke: string = await resp.text();

  if (!joke) {
    return <h1>Joke not found</h1>;
  }

  return (
    <div>
      <p>{joke}</p>
    </div>
  );
}
