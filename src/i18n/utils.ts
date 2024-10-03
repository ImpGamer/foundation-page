import { ui,defaultLang } from "./ui";
import { getRelativeLocaleUrl } from "astro:i18n";

export function getLangFromURL(url:URL) {
    const [, lang] = url.pathname.split('/')
    if(lang in ui) return lang as keyof typeof ui;
    return defaultLang;  
}

export function useTranslations(lang:keyof typeof ui) {
    return function t(key:keyof typeof ui [typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function cleanURL(currentLocale:string | undefined,extra:string) {
    const urlRelative = getRelativeLocaleUrl(currentLocale??'',extra)
    return extra === '' && currentLocale === 'en' ? `/` : (urlRelative.endsWith('/') ? urlRelative.slice(0, -1) : urlRelative);
}