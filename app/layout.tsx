import Link from "next/link";
import "./styles/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>HepAid - Liver Tumor Analysis</title>
        <link rel="stylesheet" href="/styles/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="navbar">
          <h1 className="logo">🧬 HepAid</h1>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/get-started">Get Started</Link></li>
            <li><Link href="/analyze">Analyze</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>© 2024 HepAid | Liver Tumor Segmentation & Classification</p>
        </footer>
      </body>
    </html>
  );
}

