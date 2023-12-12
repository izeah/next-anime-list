import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";

export default async function UserActionButton() {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionIcon = user ? (
    <PiSignOutBold className="text-color-accent" />
  ) : (
    <PiSignInBold className="text-color-accent" />
  );
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between items-center gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-2 px-6 inline-block"
      >
        <div className="flex justify-center items-center gap-2">
          {actionIcon}
          {actionLabel}
        </div>
      </Link>
    </div>
  );
}
