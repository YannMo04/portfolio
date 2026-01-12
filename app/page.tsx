"use client"
import React, { useState } from 'react';
import { Monitor, Smartphone, Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, Send, Moon, Sun } from 'lucide-react';

export default function CenteredWireframe() {
  const [viewMode, setViewMode] = useState('desktop');
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Controls Bar */}
      <div className="fixed top-0 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1 text-xs rounded ${
                viewMode === 'desktop' ? 'bg-slate-700 text-white' : 'text-slate-500'
              }`}
            >
              <Monitor size={14} className="inline mr-1" />
              Desktop
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1 text-xs rounded ${
                viewMode === 'mobile' ? 'bg-slate-700 text-white' : 'text-slate-500'
              }`}
            >
              <Smartphone size={14} className="inline mr-1" />
              Mobile
            </button>
          </div>
          <div className="text-xs text-blue-400 font-semibold">
            📐 Layout: Centré Minimaliste
          </div>
        </div>
      </div>

      <div className="pt-16">
        {/* NAVBAR COMPONENT */}
        <nav className={`sticky top-16 z-40 ${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'} transition-all`}>
          <div className={`${viewMode === 'desktop' ? 'max-w-6xl' : 'max-w-full px-6'} mx-auto`}>
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  YM
                </div>
                {viewMode === 'desktop' && (
                  <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Votre Nom
                  </span>
                )}
              </div>

              {/* Navigation Links (Desktop) */}
              {viewMode === 'desktop' ? (
                <div className="flex items-center gap-8">
                  {['À Propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className={`relative text-sm font-medium ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors group`}
                    >
                      {item}
                      <span className="absolute -bottom-6 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ))}
                  
                  {/* Theme Toggle */}
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
                  >
                    {darkMode ? (
                      <Sun size={18} className="text-yellow-400" />
                    ) : (
                      <Moon size={18} className="text-slate-700" />
                    )}
                  </button>
                </div>
              ) : (
                /* Mobile Menu Button */
                <button className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  <div className="space-y-1">
                    <div className={`w-5 h-0.5 ${darkMode ? 'bg-slate-400' : 'bg-slate-700'}`}></div>
                    <div className={`w-5 h-0.5 ${darkMode ? 'bg-slate-400' : 'bg-slate-700'}`}></div>
                    <div className={`w-5 h-0.5 ${darkMode ? 'bg-slate-400' : 'bg-slate-700'}`}></div>
                  </div>
                </button>
              )}
            </div>
          </div>
          
          {/* Annotation */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
            📐 Composant: Navbar (sticky + backdrop-blur + theme toggle)
          </div>
        </nav>

        {/* MAIN CONTENT - Centered Layout */}
        <main className={`${viewMode === 'desktop' ? 'max-w-4xl' : 'max-w-full px-6'} mx-auto`}>
          
          {/* HERO COMPONENT */}
          <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-24 relative">
            <div className="space-y-8">
              {/* Photo */}
              <div className="relative inline-block">
                <div className="w-40 h-40 rounded-full bg-linear-to-br from-blue-600 to-indigo-700 shadow-2xl flex items-center justify-center">
                  <User size={64} className="text-white/30" />
                </div>
                {/* Status Badge */}
                <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900"></div>
              </div>

              {/* Name & Title */}
              <div className="space-y-3">
                <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Votre Nom
                </h1>
                <p className="text-2xl md:text-3xl text-blue-500 font-semibold">
                  Ingénieur Logiciel
                </p>
                <div className={`max-w-2xl mx-auto space-y-2 mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  <div className="h-3 bg-slate-800 rounded"></div>
                  <div className="h-3 bg-slate-800 rounded w-3/4 mx-auto"></div>
                </div>
              </div>

              {/* Tech Stack Icons */}
              <div className="flex justify-center gap-4 flex-wrap pt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110 transition-all cursor-pointer`}
                  >
                    <Code2 size={24} className="text-blue-500" />
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center pt-6 flex-wrap">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  Voir mes projets
                  <ExternalLink size={18} />
                </button>
                <button className={`px-8 py-3 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'} rounded-lg font-semibold border-2 ${darkMode ? 'border-slate-700' : 'border-slate-300'} hover:border-blue-500 transition-all`}>
                  Télécharger CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center pt-6">
                {[
                  { Icon: Github, label: 'GitHub' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Mail, label: 'Email' }
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className={`${darkMode ? 'text-slate-600 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'} transition-colors`}
                    title={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composant: Hero (photo + nom + titre + tech + CTA + social)
            </div>
          </section>

          {/* ABOUT SECTION COMPONENT */}
          <section className="py-24 relative">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-800"></div>
                <User size={24} className="text-blue-500" />
                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  À Propos
                </h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
            </div>

            <div className={`space-y-4 text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="h-4 bg-slate-800 rounded"></div>
              <div className="h-4 bg-slate-800 rounded"></div>
              <div className="h-4 bg-slate-800 rounded w-11/12"></div>
              <div className="h-4 bg-slate-800 rounded mt-6"></div>
              <div className="h-4 bg-slate-800 rounded w-10/12"></div>
              <div className="h-4 bg-slate-800 rounded mt-6"></div>
              <div className="h-4 bg-slate-800 rounded w-9/12"></div>
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composant: AboutSection (bio en prose)
            </div>
          </section>

          {/* PROJECTS SECTION COMPONENT */}
          <section className="py-24 relative">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-800"></div>
                <Code2 size={24} className="text-blue-500" />
                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Projets Sélectionnés
                </h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
              <p className={`text-center ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                Une sélection de mes meilleurs travaux
              </p>
            </div>

            {/* Project Cards Grid */}
            <div className="space-y-16">
              {[1, 2, 3].map((project) => (
                <div key={project} className="group">
                  {/* PROJECT CARD COMPONENT */}
                  <a href="#" className="block">
                    {/* Image */}
                    <div className={`relative aspect-video rounded-xl overflow-hidden mb-6 ${darkMode ? 'bg-slate-800' : 'bg-slate-200'} border-2 ${darkMode ? 'border-slate-700' : 'border-slate-300'} group-hover:border-blue-500 transition-all shadow-lg group-hover:shadow-2xl`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 size={64} className={`${darkMode ? 'text-slate-700' : 'text-slate-400'} group-hover:text-blue-500 transition-colors`} />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all"></div>
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors flex items-center gap-2`}>
                          Nom du Projet {project}
                          <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <div className="flex gap-3 shrink-0">
                          <Github size={20} className={`${darkMode ? 'text-slate-600 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'} transition-colors cursor-pointer`} />
                          <ExternalLink size={20} className={`${darkMode ? 'text-slate-600 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'} transition-colors cursor-pointer`} />
                        </div>
                      </div>

                      <div className={`space-y-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <div className="h-3 bg-slate-800 rounded"></div>
                        <div className="h-3 bg-slate-800 rounded w-11/12"></div>
                        <div className="h-3 bg-slate-800 rounded w-9/12"></div>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-12">
              <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold group">
                Voir tous les projets
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composants: ProjectsSection + ProjectCard (image + titre + description + tags + liens)
            </div>
          </section>

          {/* SKILLS SECTION COMPONENT */}
          <section className="py-24 relative">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-800"></div>
                <Briefcase size={24} className="text-blue-500" />
                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Compétences
                </h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
            </div>

            <div className={`grid ${viewMode === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'} gap-8`}>
              {[
                { category: 'Frontend', skills: 4 },
                { category: 'Backend', skills: 4 },
                { category: 'Databases', skills: 3 },
                { category: 'DevOps & Outils', skills: 4 }
              ].map(({ category, skills }) => (
                <div key={category} className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'} hover:border-blue-500 transition-all`}>
                  <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'} flex items-center gap-2`}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {[...Array(skills)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center shrink-0">
                          <Code2 size={16} className="text-blue-500" />
                        </div>
                        <div className="h-3 bg-slate-700 rounded flex-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composant: SkillsSection (grid par catégories)
            </div>
          </section>

          {/* CONTACT SECTION COMPONENT */}
          <section className="py-24 relative">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px flex-1 bg-slate-800"></div>
                <Mail size={24} className="text-blue-500" />
                <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Contact
                </h2>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
              <p className={`text-center ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                Intéressé par une collaboration ? Envoyez-moi un message
              </p>
            </div>

            {/* CONTACT FORM COMPONENT */}
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Nom
                  </label>
                  <div className={`h-12 rounded-lg ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'} border-2 hover:border-blue-500 transition-colors`}></div>
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email
                  </label>
                  <div className={`h-12 rounded-lg ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'} border-2 hover:border-blue-500 transition-colors`}></div>
                </div>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message
                </label>
                <div className={`h-32 rounded-lg ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'} border-2 hover:border-blue-500 transition-colors`}></div>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>

            {/* Contact Info */}
            <div className="max-w-2xl mx-auto mt-12 pt-12 border-t border-slate-800">
              <div className={`grid ${viewMode === 'desktop' ? 'grid-cols-3' : 'grid-cols-1'} gap-6 text-center`}>
                {[
                  { Icon: Mail, label: 'Email', value: 'email@example.com' },
                  { Icon: Github, label: 'GitHub', value: 'github.com/username' },
                  { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/username' }
                ].map(({ Icon, label }) => (
                  <div key={label}>
                    <Icon size={24} className="text-blue-500 mx-auto mb-2" />
                    <div className={`text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {label}
                    </div>
                    <div className="h-2 bg-slate-800 rounded w-3/4 mx-auto mt-2"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composants: ContactSection + ContactForm (formulaire + infos)
            </div>
          </section>

          {/* FOOTER COMPONENT */}
          <footer className="py-12 mt-24 border-t border-slate-800 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>
                  Votre Nom
                </div>
                <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
                  Ingénieur Logiciel Full-Stack
                </div>
              </div>

              <div className="flex gap-6">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`${darkMode ? 'text-slate-600 hover:text-blue-400' : 'text-slate-400 hover:text-blue-600'} transition-colors`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className={`text-center mt-8 pt-8 border-t ${darkMode ? 'border-slate-800 text-slate-600' : 'border-slate-200 text-slate-500'} text-sm`}>
              © 2026 Votre Nom. Conçu avec Next.js et Tailwind CSS
            </div>

            {/* Annotation */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-600 bg-slate-950 px-3 py-1 rounded-full whitespace-nowrap">
              📐 Composant: Footer (copyright + social links)
            </div>
          </footer>
        </main>
      </div>

      {/* Info Panel */}
      <div className="fixed bottom-4 right-4 bg-slate-900 border border-slate-800 rounded-lg p-4 max-w-sm text-xs space-y-2 shadow-2xl">
        <div className="font-bold text-blue-400 mb-2">🎯 Composants du Portfolio</div>
        <div className="space-y-1 text-slate-400">
          <div>✅ Navbar (sticky + toggle mode)</div>
          <div>✅ Hero (photo + CTA + social)</div>
          <div>✅ AboutSection</div>
          <div>✅ ProjectsSection + ProjectCard</div>
          <div>✅ SkillsSection</div>
          <div>✅ ContactSection + ContactForm</div>
          <div>✅ Footer</div>
        </div>
      </div>
    </div>
  );
}
