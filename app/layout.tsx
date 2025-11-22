import './globals.css'

export const metadata = {
  title: 'ataraxizin - Новости',
  description: 'Самые свежие новости',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}