import { FC } from "react";

// Componente reutilizable para enlaces de redes sociales
const SocialLink: FC<{ href: string; imgSrc: string; alt: string; name: string }> = ({ href, imgSrc, alt, name }) => {
  return (
    <div className="rounded-full bg-white/90 px-6 py-1 cursor-pointer transition-all hover:bg-white/80 text-black/90 w-full max-w-xl shadow-md border border-black/80">
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
        <img src={imgSrc} alt={alt} className="w-7" />
        <span className="text-lg font-medium">{name}</span>
      </a>
    </div>
  );
};


function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 text-gray-100">
      {/* Imagen principal con texto */}
      <div className="text-center">
        <img src="assets/Mica.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto border shadow-md" />
        <h1 className="text-2xl font-bold mt-4">Mica Beleni IA</h1>
      </div>

      {/* Sección de redes sociales */}
      <div className="flex flex-col gap-3 mt-6">
        <SocialLink href="https://www.instagram.com/micabeleni" imgSrc="assets/instagram.png" alt="Instagram Logo" name="Instagram" />
        <SocialLink href="https://www.youtube.com/@micabeleni" imgSrc="assets/youtube.png" alt="YouTube Logo" name="YouTube" />
        <SocialLink href="https://www.linkedin.com/in/micabeleni" imgSrc="assets/linkedin.png" alt="Linkedin Logo" name="Linkedin" />
        <SocialLink href="https://www.facebook.com/micabeleni" imgSrc="assets/facebook.png" alt="Facebook Logo" name="Facebook" />
      </div>
    </main>
  );
}

export default App;