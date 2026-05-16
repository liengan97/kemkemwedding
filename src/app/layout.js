import "./globals.css";

export const metadata = {
  title: "Tiến & Hân Wedding",
  description: "Save the Date - Tiến & Hân",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
