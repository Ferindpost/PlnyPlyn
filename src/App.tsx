import React, { useState } from 'react';
import { MapPin, Navigation, Car, User, Flame, Trophy, ShieldAlert, ChevronRight, Zap } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'garage' | 'profile'>('map');

  return (
    <div className="flex flex-col h-screen bg-[#070709] text-white font-sans overflow-hidden select-none relative">
      {/* Background Ambient Glow Effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-violet-800/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <header className="px-6 py-4 bg-[#0F0F14]/80 backdrop-blur-xl border-b border-purple-500/10 flex justify-between items-center z-20 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <h1 className="text-xl font-black italic tracking-wider bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
            PLNYPLYN
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider bg-purple-950/60 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur-md">
            PRO EDITION
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto p-5 z-10 flex flex-col justify-between">
        {activeTab === 'map' && (
          <div className="flex flex-col h-full justify-between gap-6">
            {/* Top Info Card */}
            <div className="space-y-4">
              <div className="relative group overflow-hidden bg-gradient-to-b from-[#14141E] to-[#0D0D14] border border-purple-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
                
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                    <Flame className="w-3.5 h-3.5 text-purple-400" />
                    Vybraná Trať
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">12.4 km</span>
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight">Donovaly → Motyčky</h2>
                <p className="text-sm text-zinc-400 mt-1">Technická horská trať • Ostré zákruty</p>

                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-purple-500/10">
                  <div className="bg-[#0A0A10]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider block">REKORD TRATIE</span>
                    <span className="text-sm font-bold text-purple-300 font-mono">04:12.85</span>
                  </div>
                  <div className="bg-[#0A0A10]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider block">PODMIENKY</span>
                    <span className="text-sm font-bold text-emerald-400">Sucho • 18°C</span>
                  </div>
                </div>
              </div>

              {/* Quick Alert Card */}
              <div className="bg-[#120F1D]/80 border border-purple-900/40 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">GPS Telemetria Aktivná</h4>
                    <p className="text-xs text-zinc-400">Snímanie preťaženia a rýchlosti</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-600" />
              </div>
            </div>

            {/* Glowing Action Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
              <button className="relative w-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-2xl tracking-widest text-lg transition-all active:scale-[0.98]">
                <Navigation className="w-6 h-6 fill-white" />
                ŠTART JAZDY
              </button>
            </div>
          </div>
        )}

        {activeTab === 'garage' && (
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-white tracking-wide">MOJA GARÁŽ</h2>
                <p className="text-xs text-zinc-400">Spravuj svoje vozidlá a ich špecifikácie</p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-xl shadow-lg shadow-purple-600/30 transition">
                + Pridať Auto
              </button>
            </div>

            {/* Empty State / Car Card */}
            <div className="bg-[#12121A] border border-purple-500/20 rounded-3xl p-8 text-center space-y-4 backdrop-blur-xl">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl mx-auto flex items-center justify-center text-purple-400 shadow-inner">
                <Car className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Žiadne aktívne vozidlo</h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">
                  Pridaj svoje auto pre presnejšie výpočty telemetrie, zrýchlenia a čias.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="bg-[#12121A] border border-purple-500/20 rounded-3xl p-6 text-center space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />
              
              <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full mx-auto p-1 shadow-xl shadow-purple-500/20">
                <div className="w-full h-full bg-[#0A0A10] rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Jazdec #1</h3>
                <p className="text-xs text-purple-400 font-mono mt-0.5">Rank: STREET LEGEND</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-500/10">
                <div className="bg-[#0A0A10] p-3 rounded-xl border border-white/5">
                  <Trophy className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                  <span className="text-[10px] text-zinc-400 block">ODJAZDENÉ</span>
                  <span className="text-sm font-bold text-white">24 Tratí</span>
                </div>
                <div className="bg-[#0A0A10] p-3 rounded-xl border border-white/5">
                  <Flame className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                  <span className="text-[10px] text-zinc-400 block">CELKOVÝ ČAS</span>
                  <span className="text-sm font-bold text-white">02h 45m</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="px-6 py-3 bg-[#0F0F14]/90 backdrop-blur-2xl border-t border-purple-500/10 flex justify-around items-center z-20">
        <button
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'map' ? 'text-purple-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <div className={`p-2 rounded-xl transition-all ${activeTab === 'map' ? 'bg-purple-500/15 border border-purple-500/30' : ''}`}>
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase">Mapa</span>
        </button>

        <button
          onClick={() => setActiveTab('garage')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'garage' ? 'text-purple-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <div className={`p-2 rounded-xl transition-all ${activeTab === 'garage' ? 'bg-purple-500/15 border border-purple-500/30' : ''}`}>
            <Car className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase">Garáž</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'profile' ? 'text-purple-400 scale-110' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <div className={`p-2 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-purple-500/15 border border-purple-500/30' : ''}`}>
            <User className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase">Profil</span>
        </button>
      </nav>
    </div>
  );
}
