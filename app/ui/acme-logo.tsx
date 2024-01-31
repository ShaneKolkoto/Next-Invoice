import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row gap-1 items-center leading-none text-black hover:text-black`}
    >
      <DocumentDuplicateIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[20px] whitespace-nowrap">Simple Invoice</p>
    </div>
  );
}
