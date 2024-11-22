import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export function useTranslation(key: string) {
  const t = useTranslations(key)

  const translator = (key: string) => (text: string) => {
    const translation = t(`${key}.${text}`)
    return translation
  }
  return { t, translator }
}

export async function getTranslation(pageKey: string) {
  const t = await getTranslations(pageKey)
  return { t }
}
