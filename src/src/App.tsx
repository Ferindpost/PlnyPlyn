import React, { useState } from 'react';
import { MapPin, Navigation, Car, User } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white font-sans overflow-hidden">
      <header className="p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
        <h1 className="text-xl font-black italic tracking-wider text-red-500">PLNYPLYN</h1>
        <div className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-400">Demo</div>
      </header>

      <main className="flex-1 p-4 flex flex-col justify-between">
        {activeTab === 'map' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-center">
              <p className="text-sm text-zinc-400">Úsek: Donovaly → Motyčky</p>
              <h2 className="text-lg font-bold mt-1 text-red-500">Pripravený na štart</h2>
            </div>
            <button className="w-full bg-red-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
              <Navigation className="w-5 h-5" /> ŠTART JAZDY
            </button>
          </>
        )}
        {activeTab === 'garage' && <div className="text-center p-8">Moja Garáž</div>}
        {activeTab === 'profile' && <div className="text-center p-8">Profil</div>}
      </main>

      <nav className="bg-zinc-900 border-t border-zinc-800 p-3 flex justify-around">
        <button onClick={() => setActiveTab('map')} className={activeTab === 'map' ? 'text-red-500' : 'text-zinc-500'}>
          <MapPin className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('garage')} className={activeTab === 'garage' ? 'text-red-500' : 'text-zinc-500'}>
          <Car className="w-6 h-6" />
        </button>
        <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'text-red-500' : 'text-zinc-500'}>
          <User className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}
