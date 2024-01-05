import { Cards } from "@/Components/Card";
export default function Home() {
  return (
    <div
      className="bg-dogImage w-[100vw]
  h-[100vh] bg-no-repeat	bg-cover flex justify-center pt-[200px]"
    >
      <div>
        <Cards />
      </div>
    </div>
  );
}
