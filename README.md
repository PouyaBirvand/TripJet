# پروژه فروش تور

## نصب و راه‌اندازی

```bash
# نصب وابستگی‌ها
npm install

# اجرای محیط توسعه
npm run dev
```

## ساختار پروژه

توضیح مختصری از ساختار پروژه و دایرکتوری‌ها

## قراردادهای کدنویسی

- نام‌گذاری کامپوننت‌ها: PascalCase
- نام‌گذاری فایل‌های کامپوننت: PascalCase
- نام‌گذاری توابع: camelCase
- استفاده از فانکشنال کامپوننت‌ها به جای کلاس کامپوننت‌ها
- استفاده از هوک‌ها برای مدیریت state

## گردش کار Git

- هر ویژگی در یک شاخه جداگانه توسعه داده می‌شود
- نام شاخه‌ها: `feature/feature-name` یا `bugfix/bug-name`
- قبل از ارسال PR، کد خود را با شاخه اصلی همگام‌سازی کنید
- هر PR باید توسط حداقل یک نفر بررسی شود

## مستندات بیشتر

- [لینک به مستندات API]
- [لینک به طراحی UI/UX]

```

## 4. ایجاد ساختار پوشه‌ها

ساختار پوشه‌های اصلی را ایجاد کنید:

```

/app
/components
/ui
/layout
/features
/hooks
/lib
/utils
/styles

````

## 5. تنظیم Git Hooks با Husky

```bash
npm install --save-dev husky lint-staged
````

```json:package.json
{
  "scripts": {
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

```bash
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

## 6. ایجاد فایل .gitignore کامل

```text:.gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE
.idea
.vscode
```

## 7. ایجاد فایل CONTRIBUTING.md

```markdown:CONTRIBUTING.md
# راهنمای مشارکت

## گردش کار توسعه

1. یک شاخه جدید از `main` ایجاد کنید
2. تغییرات خود را اعمال کنید
3. تست‌ها را اجرا کنید
4. کد خود را با `main` همگام‌سازی کنید
5. یک Pull Request ایجاد کنید

## استانداردهای کدنویسی

- از ESLint و Prettier برای فرمت‌دهی کد استفاده کنید
- قبل از ارسال PR، `npm run lint` و `npm run format` را اجرا کنید
- کامنت‌های مناسب برای توابع پیچیده بنویسید
- از کامپوننت‌های کوچک و قابل استفاده مجدد استفاده کنید

## نام‌گذاری شاخه‌ها

- `feature/feature-name`: برای ویژگی‌های جدید
- `bugfix/bug-name`: برای رفع باگ‌ها
- `hotfix/issue-name`: برای تعمیرات فوری در محیط تولید
- `refactor/area-name`: برای بازنویسی کد بدون تغییر عملکرد

## پیام‌های Commit

پیام‌های commit باید از این الگو پیروی کنند:

```

type(scope): short description

longer description if needed

```

انواع:
- feat: ویژگی جدید
- fix: رفع باگ
- docs: تغییرات مستندات
- style: تغییرات فرمت (فاصله‌ها، کاما‌ها و غیره)
- refactor: بازنویسی کد بدون تغییر عملکرد
- test: افزودن یا اصلاح تست‌ها
- chore: بروزرسانی وظایف ساخت یا ابزارهای کمکی
```

## 8. ایجاد کامپوننت‌های پایه

چند کامپوننت پایه ایجاد کنید تا الگوی کار را نشان دهید:

```javascript:/app/components/ui/Button.js
export default function Button({ children, variant = 'primary', ...props }) {
  const baseClasses = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
```

## 9. تنظیم محیط CI/CD

ایجاد فایل GitHub Actions برای CI/CD:

```yaml:.github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Lint
      run: npm run lint

    - name: Build
      run: npm run build
```

## 10. ایجاد فایل Issue و PR Templates

```markdown:.github/ISSUE_TEMPLATE/bug_report.md
---
name: گزارش باگ
about: گزارش مشکل برای بهبود پروژه
---

**توضیح باگ**
توضیح واضح و مختصر از باگ.

**مراحل بازتولید**
1. رفتن به '...'
2. کلیک روی '....'
3. اسکرول به پایین تا '....'
4. مشاهده خطا

**رفتار مورد انتظار**
توضیح واضح و مختصر از آنچه انتظار داشتید اتفاق بیفتد.

**اسکرین‌شات‌ها**
در صورت امکان، اسکرین‌شات‌هایی برای کمک به توضیح مشکل اضافه کنید.

**محیط:**
 - سیستم عامل: [مثلاً iOS]
 - مرورگر: [مثلاً chrome, safari]
 - نسخه: [مثلاً 22]
```

```markdown:.github/PULL_REQUEST_TEMPLATE.md
## توضیح تغییرات
توضیح مختصری از تغییرات ایجاد شده.

## نوع تغییرات
- [ ] ویژگی جدید
- [ ] رفع باگ
- [ ] بهبود عملکرد
- [ ] بازنویسی کد
- [ ] بروزرسانی مستندات

## چک‌لیست:
- [ ] کد من از استانداردهای کدنویسی پروژه پیروی می‌کند
- [ ] تغییرات من نیاز به بروزرسانی مستندات ندارد
- [ ] مستندات لازم را اضافه یا بروز کرده‌ام
- [ ] تست‌های جدید یا موجود را اجرا کرده‌ام
```

## 11. تنظیم فایل‌های محیطی

```text:.env.example
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://example.com
```

## 12. ایجاد کامپوننت Layout اصلی

```javascript:/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header>
          {/* هدر سایت */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* فوتر سایت */}
        </footer>
      </body>
    </html>
  );
}
```

## 13. ایجاد یک صفحه نمونه

```javascript:/app/page.js
export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">سامانه فروش تور</h1>
      <p>به سامانه فروش تور خوش آمدید</p>
    </div>
  );
}
```

## 14. تنظیم VSCode Workspace Settings

```json:.vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ]
}
```

## 15. ایجاد فایل constants برای مقادیر ثابت

```javascript:/app/lib/constants.js
export const TOUR_TYPES = {
  DOMESTIC: 'domestic',
  INTERNATIONAL: 'international',
};

export const TOUR_CATEGORIES = [
  { id: 'beach', name: 'ساحلی' },
  { id: 'mountain', name: 'کوهستانی' },
  { id: 'desert', name: 'کویری' },
  { id: 'historical', name: 'تاریخی' },
  { id: 'religious', name: 'مذهبی' },
];

export const API_ENDPOINTS = {
  TOURS: '/tours',
  BOOKINGS: '/bookings',
  AUTH: '/auth',
  USER: '/user',
};
```

## 16. ایجاد اولین Commit و Push

پس از آماده‌سازی موارد بالا:

```bash
git init
git add .
git commit -m "initial: Project setup with basic structure and configurations"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```
