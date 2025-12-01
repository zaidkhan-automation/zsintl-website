// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "LeatherBrand",
  description: "Export-ready leather manufacturing website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050814] text-white antialiased">
        {/* whole app lives inside a flex column so nothing gets weird vertically */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
