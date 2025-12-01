type InfoItem = {
  icon: IconType;
  info: string;
  className?: string;
}

type DetailInfoCardData = {
  icon: IconType | undefined;
  title: string;
  infoItems: InfoItem[];
  actions: React.ReactElement[];
}