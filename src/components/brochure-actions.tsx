'use client';

import {Download, ExternalLink, Printer} from 'lucide-react';

type BrochureActionsProps = {
  href: string;
  fileName: string;
  labels: {
    open: string;
    download: string;
    print: string;
  };
};

export function BrochureActions({href, fileName, labels}: BrochureActionsProps) {
  const encodedHref = encodeURI(href);

  function handlePrint() {
    const printWindow = window.open(encodedHref, '_blank', 'noopener,noreferrer');

    if (!printWindow) {
      return;
    }

    let hasPrinted = false;

    const printWhenReady = () => {
      if (hasPrinted) {
        return;
      }

      hasPrinted = true;
      printWindow.focus();
      printWindow.print();
    };

    printWindow.addEventListener('load', printWhenReady, {once: true});
    window.setTimeout(printWhenReady, 1200);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a href={encodedHref} target="_blank" rel="noreferrer" className="btn-primary">
        <ExternalLink className="h-4 w-4" />
        {labels.open}
      </a>

      <a
        href={encodedHref}
        download={fileName}
        className="control-chip inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--text)]"
      >
        <Download className="h-4 w-4" />
        {labels.download}
      </a>

      <button
        type="button"
        onClick={handlePrint}
        className="control-chip inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--text)]"
      >
        <Printer className="h-4 w-4" />
        {labels.print}
      </button>
    </div>
  );
}
