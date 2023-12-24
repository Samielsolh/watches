import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    // Using Tailwind CSS to create a vertical gradient background
    // Starts darker at the top and becomes lighter towards the bottom
    <div className="min-h-screen bg-gradient-to-b from-[#010f33] to-[#323c57] text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          welcome to watch list
        </h1>
        <p className="text-lg md:text-xl font-extrabold text-white mb-6">
          your personal space to curate and manage a wishlist of your favorite watches. 
          <br />sign in to create, view, edit, and delete items from your watchlist.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
