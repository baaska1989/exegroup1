import { useRouter } from 'next/router';

import en from '../locales/en';
import jp from '../locales/jp';

export default function Nav() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'jp' ? jp : en;

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <nav>
        <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-black text-shadow-sm text-lg bg-transparent tracking-wide"
        >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="jp">JP</option>
        </select>
        </nav>
    );
}