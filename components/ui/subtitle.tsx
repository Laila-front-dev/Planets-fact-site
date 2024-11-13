import { antonio } from "@/app/layout";

interface SubtitleProps {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

function Subtitle({
  rotation,
  revolution,
  radius,
  temperature,
}: SubtitleProps) {
  return (
    <ul className="grid md:grid-cols-4 pt-7">
      <li className="border p-5 m-2 flex justify-between uppercase md:grid">
        <span className="opacity-50 text-base tracking-[0.73px] md:text-xs">
          rotation Time
        </span>
        <span className={`${antonio.className} text-xl`}>{rotation}</span>
      </li>
      <li className="border p-5 m-2 flex justify-between uppercase md:grid">
        <span className="opacity-50 text-base tracking-[0.73px] md:text-xs">
          revolution Time
        </span>
        <span className={`${antonio.className} text-xl`}>{revolution}</span>
      </li>
      <li className="border p-5 m-2 flex justify-between uppercase md:grid">
        <span className="opacity-50 text-base tracking-[0.73px] md:text-xs">
          radius
        </span>
        <span className={`${antonio.className} text-xl`}>{radius}</span>
      </li>
      <li className="border p-5 m-2 flex justify-between uppercase md:grid">
        <span className="opacity-50 text-base tracking-[0.73px] md:text-xs">
          average temp.
        </span>
        <span className={`${antonio.className} text-xl`}>{temperature}</span>
      </li>
    </ul>
  );
}

export default Subtitle;
