import Icon from "$store/components/ui/Icon.tsx";

export default function PoweredBy() {
  return (
    <span class="flex items-center gap-1 text-sm text-[#9A9A9A]">
      Powered by{" "}
      <a
        href="https://www.deco.cx"
        aria-label="powered by https://www.deco.cx"
      >
        <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />

      </a>
      <a
        href="https://www.wicomm.com.br/"
        aria-label="powered by https://www.wicomm.com.br/"
      >
        <Icon id="Wicomm" height={20} width={96} strokeWidth={0.01} />
      </a>
    </span>
  );
}
