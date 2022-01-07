import { useTranslation } from "next-i18next";
import { Content } from "../../Content/Content";

export const Breadcrumps = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-200">
      <Content>
        <p className="text-xs py-2 text-gray-600">
          <span>{t("breadcrumps.home")}</span>
        </p>
      </Content>
    </nav>
  );
};
