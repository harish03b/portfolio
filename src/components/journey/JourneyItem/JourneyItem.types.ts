export interface JourneyItemData {
  type: "experience" | "education";

  title: string;

  subtitle: string;

  duration: string;

  location: string;

  description: readonly string[];

  tags: readonly string[];

  score: string;
}

export interface JourneyItemProps {
  item: JourneyItemData;
}