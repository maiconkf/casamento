"use client";

import { useState } from "react";

const gifts = [
  { id: 1, name: "Primeira Fatia do Bolo", price: 500, emoji: "🍰" },
  { id: 2, name: "Contribuição Lua de Mel", price: 300, emoji: "✈️" },
  { id: 3, name: "Aula de Dança pro Noivo", price: 120, emoji: "🕺" },
  { id: 4, name: "Massagem pra Noiva não surtar", price: 110, emoji: "💆‍♀️" },
  { id: 5, name: "Buquê da Noiva", price: 800, emoji: "💐" },
  { id: 6, name: "Vaquinha pro Nintendo Switch 2", price: 150, emoji: "🎮" },
  { id: 7, name: "Curso de Paciência pro Noivo", price: 99, emoji: "🧘" },
  { id: 8, name: "Pizza de Domingo à noite", price: 70, emoji: "🍕" },
  { id: 9, name: "Academia pós Lua de Mel", price: 200, emoji: "🏋️‍♂️" },
  { id: 10, name: "Ração pro Luke", price: 100, emoji: "🐶" },
  {
    id: 11,
    name: "Coletor de Fios de Cabelo da Noiva",
    price: 85,
    emoji: "🧹",
  },
  {
    id: 12,
    name: "Bebê Reborn para os Pais dos Noivos",
    price: 180,
    emoji: "👶",
  },
];

export default function Home() {
  const [selectedGift, setSelectedGift] = useState<{
    id: number;
    name: string;
    price: number;
    emoji: string;
  } | null>(null);

  // Exemplo de payload pix estático para visualização (sem chave real)
  const pixPayload =
    "00020126580014BR.GOV.BCB.PIX0114+5551999999995204000053039865405";

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-[#f7f7f5] selection:bg-[#a4b08d] selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center bg-[#2a3618] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for noise/texture or image */}
          <div className="absolute inset-0 bg-[#2a3618]/50 z-10" />
        </div>

        <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-sm md:text-xl font-light tracking-[0.3em] mb-6 uppercase text-[#daddd5]">
            Reserve a data
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-8 text-white drop-shadow-sm">
            Kauane{" "}
            <span className="text-[#a4b08d] block md:inline my-2 md:my-0">
              &
            </span>{" "}
            Maicon
          </h1>
          <div className="inline-block border-y border-white/20 py-4 px-12 backdrop-blur-sm bg-white/5">
            <p className="text-2xl md:text-3xl font-light tracking-widest font-serif">
              21 . 11 . 2026
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          ↓
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-5xl mb-2">⛪</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#2a3618]">
                  Cerimônia
                </h3>
                <p className="text-stone-600 mt-2 font-serif text-lg">
                  Igreja do Porto
                </p>
                <p className="text-stone-500 mt-1">Às 16:00 horas</p>
                <a
                  href="https://maps.app.goo.gl/riLoM2czSWcML83h6"
                  target="_blank"
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-[#556b2f] border-b border-[#556b2f] pb-1 hover:text-[#3a4a20] hover:border-[#3a4a20] transition-colors"
                >
                  Ver no mapa
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span className="text-5xl mb-2">🥂</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#2a3618]">
                  Recepção
                </h3>
                <p className="text-stone-600 mt-2 font-serif text-lg">
                  Salão da ASSTBM
                </p>
                <p className="text-stone-500 mt-1">Logo após a cerimônia</p>
                <a
                  href="https://maps.google.com/?q=Salao+ASSTBM"
                  target="_blank"
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-[#556b2f] border-b border-[#556b2f] pb-1 hover:text-[#3a4a20] hover:border-[#3a4a20] transition-colors"
                >
                  Ver no mapa
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <span className="text-5xl mb-2">👔</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#2a3618]">
                  Traje
                </h3>
                <p className="text-stone-600 mt-2 font-serif text-lg">
                  Esporte Fino
                </p>
                <p className="text-stone-500 mt-1">Gravata é opcional</p>
                <a
                  href="https://www.google.com/search?q=traje+esporte+fino+casamento&tbm=isch"
                  target="_blank"
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-[#556b2f] border-b border-[#556b2f] pb-1 hover:text-[#3a4a20] hover:border-[#3a4a20] transition-colors"
                >
                  Ver Inspirações
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-5xl mb-2">💌</span>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#2a3618]">
                  RSVP
                </h3>
                <p className="text-stone-600 mt-2 font-serif text-lg">
                  Até 01/11/2026
                </p>
                <p className="text-stone-500 mt-1">Convites em breve</p>
                {/* <a
                  href="https://wa.me/5553981350450?text=Ol%C3%A1%2C%20gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%21"
                  target="_blank"
                  className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-[#556b2f] border-b border-[#556b2f] pb-1 hover:text-[#3a4a20] hover:border-[#3a4a20] transition-colors"
                >
                  Confirmar
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section
        className="py-24 px-4 bg-[#f7f7f5] border-t border-[#e6e8e3]"
        id="presentes"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[#556b2f] text-sm font-bold">
              Lista de Presentes
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6 text-[#2a3618]">
              Presenteie os Noivos
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Para facilitar, criamos uma lista de presentes fictícia. Ao
              escolher um item, você fará um Pix no valor correspondente para
              nos ajudar nesta nova fase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {gifts.map((gift) => (
              <button
                key={gift.id}
                onClick={() => setSelectedGift(gift)}
                className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-[#e6e8e3] group cursor-pointer"
              >
                <div className="text-5xl mb-6 bg-[#f7f7f5] w-20 h-20 flex items-center justify-center rounded-full group-hover:bg-[#556b2f]/10 group-hover:scale-110 transition-all duration-300">
                  {gift.emoji}
                </div>
                <h3 className="font-bold text-lg text-stone-800 mb-2">
                  {gift.name}
                </h3>
                <p className="text-stone-500 font-serif text-xl border-b border-[#a4b08d]/50 pb-1">
                  R$ {gift.price.toFixed(2).replace(".", ",")}
                </p>
                <div className="mt-6 text-xs font-bold text-[#556b2f] uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Presentear
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-stone-200 pt-8">
            <p className="text-stone-600 mb-2">
              Para outros valores, você pode fazer um Pix direto para o noivo:
            </p>
            <div className="inline-flex flex-col items-center bg-white border border-dashed border-stone-300 rounded-lg p-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 mb-1">
                Chave Celular
              </span>
              <span className="text-xl font-mono text-stone-800 font-bold select-all">
                53981350450
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pix Modal */}
      {selectedGift && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2a3618]/60 backdrop-blur-md"
          onClick={() => setSelectedGift(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#f7f7f5] p-6 text-center border-b border-[#e6e8e3]">
              <div className="text-4xl mb-3">{selectedGift.emoji}</div>
              <h3 className="text-2xl font-serif text-stone-800">
                {selectedGift.name}
              </h3>
              <p className="text-stone-500">
                Valor do presente:{" "}
                <strong className="text-[#2a3618]">
                  R$ {selectedGift.price.toFixed(2).replace(".", ",")}
                </strong>
              </p>
            </div>

            <div className="p-8">
              <div className="bg-white border-2 border-stone-100 rounded-xl p-4 mb-6 relative group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs font-bold uppercase tracking-widest text-stone-400">
                  QR Code Pix
                </div>
                {/* 
                  Note: Using qrserver API for demo purposes. 
                  In production, you would generate a real EMV BR Code payload containing the specific amount.
                */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=292524&bgcolor=ffffff&data=${encodeURIComponent(pixPayload)}`} // Placeholder payload
                  alt="QR Code Pix"
                  className="w-full max-w-200 h-auto mx-auto mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-stone-500 mb-2">
                  Ou use a chave Pix:
                </p>
                <div className="bg-stone-100 p-3 rounded-lg text-xs font-mono text-stone-600 break-all select-all cursor-pointer hover:bg-stone-200 transition-colors">
                  00020126580014BR.GOV.BCB.PIX...
                </div>
                <p className="text-[10px] text-stone-400 mt-2">
                  * Este é um QR Code de exemplo. O pagamento real depende da
                  chave configurada.
                </p>
              </div>

              <button
                className="w-full mt-8 bg-[#556b2f] text-white py-4 rounded-xl font-medium hover:bg-[#3a4a20] transition-all hover:shadow-lg transform active:scale-[0.98]"
                onClick={() => setSelectedGift(null)}
              >
                Concluido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attractions Section */}
      <section className="py-24 px-4 bg-[#eceee9] border-t border-[#e6e8e3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[#556b2f] text-sm font-bold">
              Programação & Menu
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6 text-[#2a3618]">
              O que vai rolar?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Banda */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🥁</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Samba Solto
              </h3>
              <p className="text-stone-600">
                Prepare-se para muito pagode e samba no pé com a banda que vai
                agitar a festa!
              </p>
            </div>

            {/* Card 2: Buffet */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🍤</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Buffet Delicioso
              </h3>
              <p className="text-stone-600">
                Salgadinhos variados e escondidinhos para todos os gostos
                durante a festa.
              </p>
            </div>

            {/* Card 3: Fritas */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🍟</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Madrugada de Fritas
              </h3>
              <p className="text-stone-600">
                Para recarregar as energias, teremos uma rodada especial de
                batata frita!
              </p>
            </div>

            {/* Card 4: Doces */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🍰</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Doces & Bolo
              </h3>
              <p className="text-stone-600">
                Mesa de doces completa e o bolo dos noivos para adoçar a noite.
              </p>
            </div>

            {/* Card 5: Bebidas */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🍻</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Bebidas Liberadas
              </h3>
              <p className="text-stone-600">
                Cerveja gelada, frisante para brindar, além de refrigerante e
                água à vontade.
              </p>
            </div>

            {/* Card 6: Bingo */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8e3] text-center hover:shadow-md transition-all">
              <span className="text-5xl block mb-4">🎱</span>
              <h3 className="text-xl font-bold text-[#2a3618] mb-2">
                Bingo Animado
              </h3>
              <p className="text-stone-600">
                Fique atento às cartelas! Teremos um bingo surpresa valendo
                prêmios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Manual (FAQ) */}
      <section className="py-24 px-4 bg-white border-t border-[#e6e8e3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-[#556b2f] text-sm font-bold">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-6 text-[#2a3618]">
              Manual dos Convidados
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto text-lg font-light">
              Algumas regrinhas básicas para garantir que todos aproveitem ao
              máximo este dia especial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-[#2a3618] mb-6 border-b border-[#e6e8e3] pb-2 flex items-center">
                <span className="mr-3 text-green-600">✓</span> O que PODE
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">📸</span>
                  <span className="text-stone-600">
                    <strong>Tirar muitas fotos:</strong> Registre cada momento!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">💃</span>
                  <span className="text-stone-600">
                    <strong>Se acabar na pista:</strong> A banda Samba Solto não
                    vai deixar ninguém parado!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">🥂</span>
                  <span className="text-stone-600">
                    <strong>Beber e celebrar:</strong> Teremos open bar,
                    aproveite com responsabilidade.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">👗</span>
                  <span className="text-stone-600">
                    <strong>Seguir o dress code:</strong> Esporte Fino.
                    Elegante, mas confortável.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#2a3618] mb-6 border-b border-[#e6e8e3] pb-2 flex items-center">
                <span className="mr-3 text-red-500">✕</span> O que NÃO PODE
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">👰</span>
                  <span className="text-stone-600">
                    <strong>Ir de Branco:</strong> Branco e Off-White são
                    exclusivos da noiva, ok?
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">⏰</span>
                  <span className="text-stone-600">
                    <strong>Atrasar:</strong> Chegue cedo e não perca nossa
                    entrada!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">👥</span>
                  <span className="text-stone-600">
                    <strong>Levar convidados extras:</strong> A lista é restrita
                    aos convidados do convite.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">💐</span>
                  <span className="text-stone-600">
                    <strong>Levar centro de mesa:</strong> Brincadeira... ou
                    não? Melhor deixar a decoração lá! 😉
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#2a3618] text-[#a4b08d] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-2">K & M</h2>
          <div className="w-12 h-px bg-[#556b2f] mx-auto my-6" />
          <p className="text-lg mb-8 font-light">
            Estamos contando os dias para celebrar com vocês!
          </p>
          <p className="text-xs uppercase tracking-widest text-stone-600">
            Casamento Kauane & Maicon • 21 de Novembro de 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
