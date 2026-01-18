export default function WorkWithUs() {
  return (
    <div
      className="relative w-full min-h-[calc(100vh-96px)] bg-cover bg-center bg-fixed font-homenaje"
      style={{ backgroundImage: 'url(/djbg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col gap-8 p-4">
        <h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-averia text-cerulean px-1/8">
          WORK WITH US!
        </h1>
      </div>
    </div>
  );
}
