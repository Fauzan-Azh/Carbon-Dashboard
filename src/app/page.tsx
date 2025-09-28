export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Main Hello World Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-black">
          Hello World
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 font-light">
          Welcome
        </p>
      </div>
    </div>
  );
}
