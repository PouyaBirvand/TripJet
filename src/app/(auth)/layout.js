export default function AuthLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}