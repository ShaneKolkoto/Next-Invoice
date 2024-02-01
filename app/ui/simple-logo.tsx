import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function SimpleLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center gap-1 leading-none`}
    >
      <DocumentDuplicateIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="whitespace-nowrap text-[20px] lg:text-[30px]">
        Simple Invoice
      </p>
    </div>
  );
}
