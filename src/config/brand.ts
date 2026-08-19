// 단체명·안내 문구는 이 파일에서만 바꾸면 앱 전체에 반영됩니다.
export const BRAND = {
  orgName: "우리 단체",
  tagline: "함께 일하는 보람, 당신의 참여로 시작됩니다",
  intro:
    "일자리 사업에 관심을 가져주셔서 감사합니다. 아래 양식을 작성해 주시면 담당자가 확인 후 안내 메일을 보내드립니다.",
  submitSuccess: "신청이 접수되었습니다. 감사합니다.",
  contactEmail: "hello@example.org",
  footer: "© 우리 단체 · 이 화면은 강의용 템플릿입니다.",
} as const;

export type TierId = "general" | "regular" | "lifetime";

export const TIERS: {
  id: TierId;
  label: string;
  description: string;
  hint: string;
}[] = [
  {
    id: "general",
    label: "신규 지원",
    description: "일자리 사업에 처음 참여합니다.",
    hint: "처음 신청하시는 분께 적합해요",
  },
  {
    id: "regular",
    label: "경력자 지원",
    description: "관련 경력이 있는 분들을 위한 지원입니다.",
    hint: "이전에 관련 활동 경험이 있을 때",
  },
  {
    id: "lifetime",
    label: "재참여 신청",
    description: "이전에 참여했던 사업에 다시 신청합니다.",
    hint: "꾸준히 함께하고 싶은 분께 적합해요",
  },
];

export const TIER_LABEL: Record<TierId, string> = {
  general: "신규",
  regular: "경력자",
  lifetime: "재참여",
};
