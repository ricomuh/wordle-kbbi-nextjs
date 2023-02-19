import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="w-4/12 my-4 flex-col justify-between gap-10">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">Wordle KBBI</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
