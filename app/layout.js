import './globals.css'

export const metadata = {
  title: 'Shanghai Golden Aroma | Edmonton Chinese Cuisine',
  description: 'Shanghai Golden Aroma - Chinese restaurant in Edmonton serving dine-in, takeout, and delivery. 埃德蒙顿中餐馆，提供堂食、外卖服务。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
