import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 p-6">
        <div id="home" className="min-h-screen bg-card flex items-center justify-center mb-4">
          <h2 className="text-3xl font-bold">Home Section</h2>
        </div>
        <div id="about" className="min-h-screen bg-background flex items-center justify-center mb-4">
          <h2 className="text-3xl font-bold">About Section</h2>
        </div>
        <div id="skills" className="min-h-screen bg-card flex items-center justify-center">
          <h2 className="text-3xl font-bold">Skills Section</h2>
        </div>
      </div>
    </div>
  );
}
