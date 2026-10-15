import type { PublicTalent } from "@/lib/api";

const verificationPriority = (talent: PublicTalent) => {
  if (talent.user?.verifiedRoles?.length) return 2;
  if (talent.user?.isKycDone) return 1;
  return 0;
};

export const prioritizePublicTalents = (talents: PublicTalent[]) =>
  [...talents].sort(
    (a, b) =>
      verificationPriority(b) - verificationPriority(a) ||
      Number(Boolean(b.profilePicture?.trim())) -
        Number(Boolean(a.profilePicture?.trim())),
  );
