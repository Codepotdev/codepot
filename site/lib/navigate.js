import { useRouter } from "next/router";

export default function navigate(url) {
  const router = useRouter();

  router.push(url);

  return;
}
