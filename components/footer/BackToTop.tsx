import Icon from "$store/components/ui/Icon.tsx";

export default function BackToTop({ content }: { content?: string }) {
  return (
    <>
      {content && (
        <div class="fixed bottom-[30px] right-[15px]">
          <a href="#top" class="btn bg-[#ff9601] hover:bg-[#FFC470] text-[#000000]">
            <Icon id="ChevronUp" width={24} height={24} />
          </a>
        </div>
      )}
    </>
  );
}
