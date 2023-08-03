import { cn } from '~/utils';

export type Status = 'Public' | 'Active' | 'Acquired' | 'Inactive';

type Props = {
  status: Status;
};
export const Badge = ({ status }: Props) => {
  const styles: Record<Status, { text: string; className: string }> = {
    Public: {
      text: 'Public',
      className: 'text-indigo-1100 border-indigo-700',
    },
    Acquired: {
      text: 'Acquired',
      className: 'border-orange-700 text-orange-1100',
    },
    Active: {
      text: 'Active',
      className: 'border-green-700 text-green-1100',
    },
    Inactive: {
      text: 'Inactive',
      className: 'border-gray-700 text-gray-1100',
    },
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        styles[status].className
      )}
    >
      {styles[status].text}
      <svg
        className="-mr-0.5 ml-1.5 h-2 w-2 "
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
    </span>
  );
};
