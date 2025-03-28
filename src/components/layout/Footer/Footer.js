import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"
import ThemeToggle from "./Components/ThemeToggle"

const Footer = () => {
    return (
        <footer className="bg-base-200">
            <div className="container">
                <footer className="footer lg:footer-horizontal text-base-content p-10">
                    <aside>
                        <Link href="/">
                            <Image width={130} height={45} src="/logo.svg" alt="Logo" />
                        </Link>
                        <p>
                            تلفن پشتیبانی : <Link href="tel:+02170709797">۰۲۱۷۰۷۰۹۷۹۷</Link>
                            <br />
                            <br />
                            آدرس دفتر مرکزی : تهران، سعادت آباد، خیابان کاج، پلاک ۱۶
                            <br />
                            <br />
                            آدرس ایمیل : tripjet@gmail.com
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">تریپ جت</h6>
                        <Link href="about-us" className="link link-hover">درباره ما</Link>
                        <Link href="contact-us" className="link link-hover">تماس با ما</Link>
                        <Link href="insurance" className="link link-hover">بیمه مسافرتی</Link>
                        <Link href="/" className="link link-hover">پرسش و پاسخ</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">خدمات مشتریان</h6>
                        <Link href="/" className="link link-hover">راهنمای خرید</Link>
                        <Link href="/" className="link link-hover">قوانین و مقررات</Link>
                        <Link href="/" className="link link-hover">راهنمای استرداد</Link>
                        <Link href="/" className="link link-hover">مرکز پشتیبانی آنلاین</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">تور های پرطرفدار</h6>
                        <Link href="/" className="link link-hover">تور دبی</Link>
                        <Link href="/" className="link link-hover">تور کیش</Link>
                        <Link href="/" className="link link-hover">تور آنتالیا</Link>
                        <Link href="/" className="link link-hover">تور استانبول</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">اطلاعات تکمیلی</h6>
                        <Link href="/" className="link link-hover">فروش سازمانی</Link>
                        <Link href="/" className="link link-hover">فرصت‌های شغلی</Link>
                        <Link href="/" className="link link-hover">سنجش رضایتمندی</Link>
                        <Link href="/" className="link link-hover">همکاری با آژانس ها</Link>
                    </nav>
                </footer>

                <footer className="footer sm:footer-horizontal text-base-content items-center p-10">
                    <aside className="grid-flow-col gap-5 items-center">
                        <ThemeToggle />
                        
                        <Link href="https://mail.google.com/">
                            <Mail />
                        </Link>
                        <Link href="https://www.linkedin.com/">
                            <Linkedin />
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <Instagram />
                        </Link>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link href="http://samandehi.ir">
                                <Image width={50} height={45} src="/samandehi.png" alt="samandehi" />
                            </Link>
                            <Link href="https://enamad.ir/">
                                <Image width={50} height={45} src="/enamad.png" alt="enamad" />
                            </Link>
                            <Link href="https://www.aira.ir/">
                                <Image width={50} height={45} src="/aira.png" alt="aira" />
                            </Link>
                            <Link href="http://samandehi.ir">
                                <Image width={50} height={45} src="/airPlane.png" alt="airPlane" />
                            </Link>
                        </div>
                    </nav>
                </footer>

                <footer className="text-center border-base-300 border-t py-4">
                    ©تمامی حقوق این وبگاه محفوظ و مربوط به آژانس مسافرتی تریپ جت است.
                </footer>
            </div>
        </footer>

    )
}

export default Footer