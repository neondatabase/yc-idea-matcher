import { Badge, Status } from './badge';

export type Company = {
  id: number;
  name: string;
  slug: string;
  website: string;
  smallLogoUrl?: string;
  oneLiner: string;
  longDescription: string;
  teamSize: number;
  url: string;
  batch: string;
  tags: string[];
  status: Status;
  industries: string[];
  badges: string[];
};

export const Company = ({
  id,
  website,
  smallLogoUrl,
  name,
  oneLiner,
  longDescription,
  industries,
  batch,
  status,
}: Company) => {
  return (
    <a
      key={id}
      className="outline-none p-5 md:p-8 hover:bg-gray-400 rounded-md space-y-3 focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 transition-colors hover:border-green-800"
      href={website}
    >
      <div className="flex flex-col md:flex-row gap-10">
        {smallLogoUrl ? (
          <img
            className="w-16 h-16 rounded-md"
            src={smallLogoUrl}
            alt="Company logo"
          />
        ) : (
          <img
            className="w-16 h-16 rounded-md"
            src={`https://placehold.co/300x300/3a3f42/FFF?text=404`}
            alt="Company logo"
          />
        )}

        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-1200">
            {name}
          </h2>
          <h3 className="text-gray-1200">{oneLiner}</h3>
          <p>{longDescription}</p>
          <p className="text-sm">{batch} batch</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {industries.map((industry) => (
              <p
                className="inline-flex items-center rounded-md border-gray-700 text-gray-1100 border px-2.5 py-1 text-xs font-medium"
                key={industry}
              >
                {industry}
              </p>
            ))}
          </div>
          <Badge status={status} />
        </div>
      </div>
    </a>
  );
};
