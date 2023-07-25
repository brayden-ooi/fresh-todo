import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<string | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`http://localhost:8000/api/joke`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const joke: string = await resp.text();

    return ctx.render(joke);
  },
};

export default function Page({ data }: PageProps<string | null>) {
  if (!data) {
    return <h1>Joke not found</h1>;
  }

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
