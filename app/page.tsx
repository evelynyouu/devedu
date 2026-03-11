import Link from "next/link";

const VINE_VIDEOS = [
  "https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1", // nyan cat
  "https://www.youtube.com/watch?v=MtN1YnoL46Q&list=RD2yJgwwDcgV8&index=2", // duck song
  "https://www.youtube.com/watch?v=7jjcAuEYW9M&list=RD2yJgwwDcgV8&index=3", // duck song 2
  "https://www.youtube.com/watch?v=qRC4Vk6kisY&list=RD2yJgwwDcgV8&index=4", // pink flfufy unicorns
  "https://www.youtube.com/watch?v=Ct6BUPvE2sM&list=RD2yJgwwDcgV8&index=5", // ppap
  "https://youtu.be/W-3DWBv0CvU?si=xF_c1O4bdAT8E7zO", // its raining tacos
  "https://youtu.be/PKQPey6L42M?si=MMEWowXWY3g1WpIB", // I coulda dropped my croissant
  "https://youtu.be/QvsQ9hYKq7c?si=dXyrI3Z8pgu4IhAS", // Road work ahead? I sure hope it does
  "https://youtu.be/cE0wfjsybIQ?si=ehGNakG2xfErtUx4", // Hi welcome to Chili's
  "https://youtu.be/jofNR_WkoCE?si=Fa9Ojep-tHQQY7cy", // It's an avocado! Thanks
  "https://youtu.be/mBw3qzf4s18?si=NIUDuwgyPMgoiiDR", // Hi my name is Trey, basketball game tomorrow
  "https://youtu.be/dQw4w9WgXcQ?si=kovgrdZ6UjFQIqII", // Deez nuts
  "https://www.youtube.com/watch?v=-xqEABqaEuo", // wigs
  "https://www.youtube.com/watch?v=2XhVg38cDTU", // I'm in me mum's car broom broom
  "https://www.youtube.com/watch?v=m5vcmRh--e4", // Why you always lyin
  "https://www.youtube.com/watch?v=LDU_Txk06tM&list=RDLDU_Txk06tM&start_radio=1", // Hurricane tortilla
  "https://www.youtube.com/watch?v=SfT4FMkh1-w", // Hurricane tortilla (alt)
];

const CELL_COUNT = 200;
const MIDDLE_INDEX = Math.floor(CELL_COUNT / 2);

const RAINBOW = [
  "#ff0000",
  "#ff4400",
  "#ff8800",
  "#ffbb00",
  "#ffff00",
  "#88ff00",
  "#00ff00",
  "#00ff88",
  "#00ffff",
  "#0088ff",
  "#0000ff",
  "#4400ff",
  "#8800ff",
  "#ff00ff",
  "#ff0088",
];

function SmallSixtySevenGrid({ count, offset }: { count: number; offset: number }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] gap-2 sm:grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] items-center justify-items-center">
      {Array.from({ length: count }, (_, i) => {
        const idx = offset + i;
        const color = RAINBOW[idx % RAINBOW.length];
        return (
          <a
            key={idx}
            href={VINE_VIDEOS[idx % VINE_VIDEOS.length]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-2xl font-black transition hover:scale-110 sm:text-3xl md:text-4xl"
            style={{ color }}
          >
            67
          </a>
        );
      })}
    </div>
  );
}

export default function Home() {
  const topCount = MIDDLE_INDEX;
  const bottomCount = CELL_COUNT - MIDDLE_INDEX - 2;
  const lastIdx = CELL_COUNT - 1;
  const lastColor = RAINBOW[lastIdx % RAINBOW.length];

  return (
    <div className="min-h-screen bg-zinc-50 p-4 font-sans dark:bg-black flex flex-col">
      {/* Small 67s */}
      <SmallSixtySevenGrid count={bottomCount} offset={MIDDLE_INDEX + 1} />

      <p className="text-white text-2xl sm:text-3xl md:text-4xl font-black text-center py-4">
        hella touse meme page
      </p>

      {/* Last 67: warped and stretched wide, fills bottom half, links to pomodoro */}
      <Link
        href="/pomodoro"
        className="flex-1 min-h-[50vh] w-full flex items-center justify-center font-black transition hover:opacity-90 overflow-hidden"
        style={{ color: lastColor }}
      >
        <span
          className="text-[14rem] sm:text-[18rem] md:text-[22rem] leading-none select-none"
          style={{ transform: "scaleX(4) scaleY(1.8)", display: "inline-block" }}
        >
          67
        </span>
      </Link>
    </div>
  );
}
