export default function Home() {
  return (
    <>
      <main className="bg-green-400 h-16 p-4 mb-1 border-dark">
        Hello there!
      </main>
      <main className="flex">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => {
          return <div className={`bg-green-${num}00 mt-1 p-1 w-24`}>Color</div>;
        })}
      </main>
    </>
  );
}
