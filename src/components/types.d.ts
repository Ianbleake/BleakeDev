type InfoItem = {
  icon: IconType;
  info: string;
  className?: string;
}

type InfoAction = {
  icon: IconType;
  label: string;
  action: () => void | React.ReactElement;
}

type DetailInfoCardData = {
  icon: IconType | undefined;
  title: string;
  infoItems: InfoItem[];
  actions: InfoAction[];
}