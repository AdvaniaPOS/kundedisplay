export const metadata = {
  title: "Kundedisplay",
  description: "Visning av siste transaksjon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
