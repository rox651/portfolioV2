import { useTranslation } from "react-i18next";

export const Link = ({ link }) => {
  const { t } = useTranslation();

  const { name, url } = link;

  return (
    <li className=" relative hover:-skew-x-12 transition-all before:transition-all before:w-0  before:duration-700 hover:before:w-full before:h-[2px] before:bg-palette-100 before:absolute before:-bottom-1 text-palette-50   hover:text-palette-100">
      <a href={url}>{t(name)}</a>
    </li>
  );
};
