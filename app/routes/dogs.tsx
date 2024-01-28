import { useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

export const loader = async () => {
  return {
    dogs: await db.dog.findMany(),
  };
};
export default function Dogs() {
  const { dogs } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>This is the dogs component</h1>
      <h3>Here are some dogs</h3>
      <ol>
        Wow
        {dogs.map((dog) => (
          <li key={dog.id}>{dog.name}</li>
        ))}
      </ol>
    </div>
  );
}
