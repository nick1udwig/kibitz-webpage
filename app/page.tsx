"use client";

import React, { useEffect, useState, ReactNode } from 'react';
import { Terminal, Code2, Smartphone, Github, MessageSquare, Sun, Moon } from 'lucide-react';
import { siDiscord, siX } from 'simple-icons';

const TwitterVideoEmbed: React.FC = () => {
  return (
    <div className="mx-auto max-w-[280px] relative">
      <div className="aspect-[9/19.5] bg-black/5 rounded-[2rem] p-3">
        <video
          className="w-full h-full rounded-[1.5rem] bg-black"
          controls
          poster="https://pbs.twimg.com/ext_tw_video_thumb/1882594204251369472/pu/img/w-iG5tUZz2uGF8yA.jpg"
        >
          <source
            src="https://github.com/user-attachments/assets/3f8df448-1c81-4ff2-8598-c48283a4dc00"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface RoadmapItemProps {
  number: string;
  children: ReactNode;
}

const KibitzPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('system');

  useEffect(() => {
    // Check system preference
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const root = document.documentElement;

    if (theme === 'system') {
      root.classList.toggle('dark', systemPreference === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'dark') return 'light';
      if (current === 'light') return 'system';
      return 'dark';
    });
  };

  const ThemeIcon: React.FC = () => {
    if (theme === 'dark') return <Sun className="w-5 h-5" />;
    if (theme === 'light') return <Moon className="w-5 h-5" />;
    return <div className="w-5 h-5 flex items-center justify-center">S</div>;
  };

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-card hover:bg-card/90 transition-colors"
          aria-label="Toggle theme"
        >
          <ThemeIcon />
        </button>
      </div>

      {/* Hero Section */}
      <header className="bg-card shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              kibitz
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your AI coding intern: Edit local files, make commits, and deploy code - all from your browser or phone.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-6">
              <div className="rounded-md">
                <a href="https://github.com/nick1udwig/kibitz" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
      </div>
            <div className="mt-6">
              <TwitterVideoEmbed />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <div className="py-6 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-foreground sm:text-4xl">
              A Better Way to Code
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <FeatureCard
                icon={<Terminal className="h-6 w-6" />}
                title="MCP Integration"
                description="Seamlessly integrates with Anthropic's Model Context Protocol, allowing your AI to interact with your development environment."
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title="Automated Workflow"
                description="Let AI handle the repetitive tasks: editing files, fixing compiler errors, and making commits - all automatically."
              />
              <FeatureCard
                icon={<Smartphone className="h-6 w-6" />}
                title="Mobile Development"
                description="Code from anywhere with Hyperware integration - control your development environment from your phone or tablet."
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6" />}
                title="Multiple AI Providers"
                description="Support for various AI providers including Anthropic, OpenAI, OpenRouter, and DeepSeek."
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-foreground sm:text-4xl">
              What is kibitz?
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative text-base mx-auto lg:row-start-1 lg:col-start-2">
              <blockquote className="mt-8 text-lg text-muted-foreground">
                &ldquo;I&apos;ve gone from a coder to a manager, but not of people: of LLM agents. Your LLM has become your coding intern.&rdquo;
              </blockquote>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base text-muted-foreground space-y-6">
                <p>
                  kibitz is the result of wanting Replit, but designed for daily software engineering work. It combines the power of AI with practical development tools, allowing you to edit local files, make commits, and handle PRs seamlessly.
                </p>
                <p>
                  With Hyperware integration, kibitz takes mobile development to the next level. Control your development environment from your phone, make changes, and deploy code &ndash; all while on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Roadmap</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-foreground sm:text-4xl">
              What&apos;s Next?
            </p>
          </div>
          <div className="mt-10">
            <ul className="space-y-4">
              <RoadmapItem number="1">
                Perfecting the &ldquo;closed loop&rdquo; for coding from mobile devices
              </RoadmapItem>
              <RoadmapItem number="2">
                Enhanced security through Docker container isolation
              </RoadmapItem>
              <RoadmapItem number="3">
                Refactoring to include a proper Hyperware process backend for better persistence and expanded features
              </RoadmapItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/nick1udwig/kibitz" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://discord.gg/KaPXX7SFTD" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">Discord</span>
              <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" fill="currentColor">
                <path d={siDiscord.path} />
              </svg>
            </a>
            <a href="https://x.com/nick1udwig" className="text-muted-foreground hover:text-primary">
              <span className="sr-only">X (Twitter)</span>
              <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" fill="currentColor">
                <path d={siX.path} />
              </svg>
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-muted-foreground">
              Available on the Hyperware App Store
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper components with TypeScript interfaces
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="relative">
    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
      {icon}
    </div>
    <div className="ml-16">
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-base text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

const RoadmapItem: React.FC<RoadmapItemProps> = ({ number, children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary text-primary-foreground text-sm">
        {number}
      </div>
    </div>
    <p className="ml-3 text-base text-muted-foreground">
      {children}
    </p>
  </li>
);

export default KibitzPage;
