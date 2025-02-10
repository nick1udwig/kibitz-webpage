import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kibitz - Coding Agent for Professionals",
  description: "Kibitz - Coding Agent for Professionals",
};

const PATH_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${PATH_PREFIX}/favicon.svg`} type="image/svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = 'light';
                try {
                  if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    theme = 'dark';
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    theme = 'dark';
                  }
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                document.documentElement.style.backgroundColor = theme === 'dark' ? 'hsl(0 0% 12%)' : 'hsl(44 80% 94%)';
                document.documentElement.style.setProperty('color-scheme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
