type InfoItem = {
  icon: IconType;
  info: string;
  className?: string;
}

type InfoActions = {
  icon: IconType;
  label: string;
  action: () => void;
}

type DetailInfoCardData = {
  icon: IconType | undefined;
  title: string;
  infoItems: InfoItem[];
  actions: InfoActions[];
}