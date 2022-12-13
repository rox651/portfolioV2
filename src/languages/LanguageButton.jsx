import clsx from "clsx";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

export const LanguageButton = ({ lng, keyLng }) => {
  const { text, image } = lng;
  const { t } = useTranslation();

  return (
    <li
      onClick={() => i18n.changeLanguage(keyLng)}
      className={clsx(
        i18n.resolvedLanguage == keyLng && " bg-palette-50 text-palette-900 font-bold ",
        " cursor-pointer flex justify-evenly py-2  items-center w-full text-palette-50",
      )}
    >
      <img src={image} alt={`${text} - image`} />
      <span className="hidden lg:block"> {t(text)}</span>
    </li>
  );
};
