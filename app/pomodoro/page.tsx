"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-pomodoro",
});

type Mode = "study" | "break";
type SessionResult = "success" | "failed";

const STUDY_MIN_OPTIONS = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90] as const;
const BREAK_OPTIONS = [1, 5, 10, 15, 20, 25, 30] as const;

const ALARM_VIDEO_ID = "AxxCT6D9bEg";
type StudyDuration = (typeof STUDY_MIN_OPTIONS)[number] | "stopwatch";
type BreakDuration = (typeof BREAK_OPTIONS)[number] | "stopwatch";

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function DurationPickerModal({
  isStudy,
  value,
  onSelect,
  onDone,
}: {
  isStudy: boolean;
  value: StudyDuration | BreakDuration;
  onSelect: (v: StudyDuration | BreakDuration) => void;
  onDone: (selectedValue: StudyDuration | BreakDuration) => void;
}) {
  const options: (StudyDuration | BreakDuration)[] = isStudy
    ? ["stopwatch", ...STUDY_MIN_OPTIONS]
    : ["stopwatch", ...BREAK_OPTIONS];
  const selectedIndex = Math.max(0, options.indexOf(value));
  const maxIndex = options.length - 1;

  const displayLabel =
    value === "stopwatch" ? "∞ Stopwatch" : `${value} min`;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1b1e] py-8 px-6">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        <p className="text-sm font-black uppercase tracking-wider text-white/80">
          {isStudy ? "Study duration" : "Break duration"}
        </p>

        {/* Selected time at top */}
        <p className="text-3xl font-black text-white tabular-nums">
          {displayLabel}
        </p>

        {/* White bar slider - 5 min intervals */}
        <div className="w-full flex flex-col gap-2">
          <input
            type="range"
            min={0}
            max={maxIndex}
            step={1}
            value={selectedIndex}
            onChange={(e) => onSelect(options[Number(e.target.value)])}
            className="w-full h-3 rounded-full appearance-none cursor-pointer bg-transparent [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-1.5 [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          />
        </div>

        <button
          onClick={() => onDone(value)}
          className="rounded-full bg-white text-[#1a1b1e] px-12 py-4 text-lg font-black shadow-lg hover:bg-gray-100 active:scale-95 transition"
        >
          Done
        </button>
      </div>
    </div>
  );
}

function useMousePosition() {
  const pos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

function useTongueTimer() {
  const [tongueOut, setTongueOut] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setTongueOut(true);
      setTimeout(() => setTongueOut(false), 600);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return tongueOut;
}

function CartoonyOrange({
  success,
  size,
  eyeOffsetX,
  eyeOffsetY,
  tongueOut,
}: {
  success: boolean;
  size?: number;
  eyeOffsetX?: number;
  eyeOffsetY?: number;
  tongueOut?: boolean;
}) {
  const bodyFill = success ? "#f97316" : "#22c55e";
  const stemFill = "#4ade80";
  const faceFill = "#1c1917";
  const ex = eyeOffsetX ?? 0;
  const ey = eyeOffsetY ?? 0;
  const s = size ?? 48;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 48 48"
      fill="none"
      className="flex-shrink-0 drop-shadow-md pointer-events-none"
      aria-hidden
    >
      <ellipse cx="24" cy="26" rx="17" ry="18" fill={bodyFill} />
      <path d="M23 11 L24 6 L25 11 Z" fill={stemFill} />
      <ellipse cx="20" cy="9" rx="3.5" ry="2" fill={stemFill} transform="rotate(-20 20 9)" />
      <ellipse cx="28" cy="9" rx="3.5" ry="2" fill={stemFill} transform="rotate(20 28 9)" />
      {/* Eye sockets */}
      <circle cx="18" cy="24" r="3" fill="white" />
      <circle cx="30" cy="24" r="3" fill="white" />
      {/* Pupils - follow mouse */}
      <circle cx={18 + ex} cy={24 + ey} r="1.6" fill={faceFill} />
      <circle cx={30 + ex} cy={24 + ey} r="1.6" fill={faceFill} />
      {/* Smile */}
      <path
        d="M18 30 Q24 35 30 30"
        stroke={faceFill}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tongue */}
      {tongueOut && (
        <ellipse cx="24" cy="34" rx="3" ry="4" fill="#ff6b8a" />
      )}
    </svg>
  );
}

const BASE_RADIUS = 24;
const GRAVITY = 0.22;
const RESTITUTION = 0.62;
const ORANGE_ZONE_HEIGHT = 260;
const MIN_SCALE = 1;
const MAX_SCALE = 5;

type OrangePhysics = { x: number; y: number; vx: number; vy: number; scale: number };

function BouncingOranges({ sessions }: { sessions: SessionResult[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orangeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const physicsRef = useRef<OrangePhysics[]>([]);
  const rafRef = useRef<number>(0);
  const mousePos = useMousePosition();
  const tongueOut = useTongueTimer();
  const [eyeOffsets, setEyeOffsets] = useState<{ x: number; y: number }[]>([]);
  const [scales, setScales] = useState<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const rect = container?.getBoundingClientRect();
    const w = Math.max(rect?.width ?? (typeof window !== "undefined" ? window.innerWidth : 800), 100);
    const h = ORANGE_ZONE_HEIGHT;
    const prevLen = physicsRef.current.length;
    const nextLen = sessions.length;
    if (nextLen <= prevLen) return;
    for (let i = prevLen; i < nextLen; i++) {
      const scale = MIN_SCALE + Math.random() * (MAX_SCALE - MIN_SCALE);
      const r = BASE_RADIUS * scale;
      const x = r + Math.random() * (w - 2 * r);
      const y = h - r - 16 - Math.random() * 20;
      physicsRef.current.push({ x, y, vx: (Math.random() - 0.5) * 5, vy: -Math.random() * 8 - 4, scale });
    }
    orangeRefs.current = orangeRefs.current.slice(0, nextLen);
    setScales(physicsRef.current.map((p) => p.scale));
  }, [sessions.length]);

  useEffect(() => {
    if (sessions.length === 0) return;
    const container = containerRef.current;
    if (!container) return;

    const run = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const physics = physicsRef.current;

      for (let i = 0; i < physics.length; i++) {
        const p = physics[i];
        const r = BASE_RADIUS * p.scale;
        p.vy += GRAVITY;
        p.x += p.vx;
        p.y += p.vy;

        if (p.y + r > h) { p.y = h - r; p.vy *= -RESTITUTION; p.vx *= 0.98; }
        if (p.y - r < 0) { p.y = r; p.vy *= -RESTITUTION; }
        if (p.x - r < 0) { p.x = r; p.vx *= -RESTITUTION; }
        if (p.x + r > w) { p.x = w - r; p.vx *= -RESTITUTION; }
      }

      orangeRefs.current.forEach((el, i) => {
        if (el && physics[i]) {
          const r = BASE_RADIUS * physics[i].scale;
          el.style.transform = `translate(${physics[i].x - r}px, ${physics[i].y - r}px)`;
        }
      });

      rafRef.current = requestAnimationFrame(run);
    };

    rafRef.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(rafRef.current);
  }, [sessions.length]);

  useEffect(() => {
    if (sessions.length === 0) return;
    const container = containerRef.current;
    if (!container) return;
    const id = setInterval(() => {
      const rect = container.getBoundingClientRect();
      const physics = physicsRef.current;
      const offsets = physics.map((p) => {
        const orangeCenterX = rect.left + p.x;
        const orangeCenterY = rect.top + p.y;
        const dx = mousePos.current.x - orangeCenterX;
        const dy = mousePos.current.y - orangeCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const maxOffset = 1.4;
        return { x: (dx / dist) * maxOffset, y: (dy / dist) * maxOffset };
      });
      setEyeOffsets(offsets);
    }, 60);
    return () => clearInterval(id);
  }, [sessions.length, mousePos]);

  if (sessions.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 right-0 overflow-hidden"
      style={{ height: ORANGE_ZONE_HEIGHT }}
    >
      {sessions.map((result, i) => {
        const s = scales[i] ?? 1;
        const size = 48 * s;
        return (
          <div
            key={i}
            ref={(el) => { orangeRefs.current[i] = el; }}
            className="absolute left-0 top-0 flex items-center justify-center"
            style={{ width: size, height: size, transform: `translate(0, 0)` }}
            title={result === "success" ? "Completed session" : "Paused early"}
          >
            <CartoonyOrange
              success={result === "success"}
              size={size}
              eyeOffsetX={eyeOffsets[i]?.x ?? 0}
              eyeOffsetY={eyeOffsets[i]?.y ?? 0}
              tongueOut={tongueOut}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function PomodoroPage() {
  const [mode, setMode] = useState<Mode>("study");
  const [studyDuration, setStudyDuration] = useState<StudyDuration>("stopwatch");
  const [breakDuration, setBreakDuration] = useState<BreakDuration>(5);
  const [timeLeft, setTimeLeft] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [breakElapsed, setBreakElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState<SessionResult[]>([]);
  const [hasStartedCurrentStudy, setHasStartedCurrentStudy] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [alarmPlaying, setAlarmPlaying] = useState(false);

  const isStopwatch = studyDuration === "stopwatch";
  const isBreakStopwatch = breakDuration === "stopwatch";

  const startStudy = useCallback(() => {
    setMode("study");
    if (studyDuration === "stopwatch") {
      setElapsed(0);
    } else {
      setTimeLeft(studyDuration * 60);
    }
    setHasStartedCurrentStudy(true);
    setIsRunning(true);
  }, [studyDuration]);

  const startBreak = useCallback(() => {
    setMode("break");
    if (breakDuration === "stopwatch") {
      setBreakElapsed(0);
    } else {
      setTimeLeft(breakDuration * 60);
    }
    setHasStartedCurrentStudy(false);
    setIsRunning(true);
  }, [breakDuration]);

  const currentModeIsStopwatch = mode === "study" ? isStopwatch : isBreakStopwatch;

  // When countdown hits 0: stop at 0:00, give 1 orange, and start alarm
  useEffect(() => {
    if (!isRunning || currentModeIsStopwatch) return;
    if (timeLeft > 0) return;
    setCompletedSessions((prev) => [...prev, "success"]);
    setIsRunning(false);
    setAlarmPlaying(true);
  }, [isRunning, timeLeft, currentModeIsStopwatch]);

  // Countdown tick
  useEffect(() => {
    if (!isRunning || currentModeIsStopwatch || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [isRunning, timeLeft, currentModeIsStopwatch]);

  // Study stopwatch tick
  useEffect(() => {
    if (!isRunning || mode !== "study" || !isStopwatch) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning, mode, isStopwatch]);

  // Break stopwatch tick
  useEffect(() => {
    if (!isRunning || mode !== "break" || !isBreakStopwatch) return;
    const id = setInterval(() => setBreakElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning, mode, isBreakStopwatch]);

  const handlePause = () => {
    if (mode === "study" && hasStartedCurrentStudy) {
      if (isStopwatch) {
        setCompletedSessions((prev) => [...prev, "success"]);
        setAlarmPlaying(true);
      } else if (timeLeft > 0) {
        setCompletedSessions((prev) => [...prev, "failed"]);
      }
    }
    if (mode === "break" && isBreakStopwatch) {
      setAlarmPlaying(true);
    }
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setHasStartedCurrentStudy(false);
    if (mode === "study") {
      if (isStopwatch) setElapsed(0);
      else if (typeof studyDuration === "number") setTimeLeft(studyDuration * 60);
    } else {
      if (isBreakStopwatch) setBreakElapsed(0);
      else setTimeLeft(breakDuration * 60);
    }
  };

  const handleStudyDurationChange = (value: StudyDuration) => {
    setStudyDuration(value);
    if (mode === "study" && !isRunning) {
      if (value === "stopwatch") setElapsed(0);
      else setTimeLeft(value * 60);
    }
  };

  const handleBreakDurationChange = (value: BreakDuration) => {
    setBreakDuration(value);
    if (mode === "break" && !isRunning) {
      if (value === "stopwatch") setBreakElapsed(0);
      else setTimeLeft(value * 60);
    }
  };

  const toggleMode = () => {
    if (isRunning) return;
    const nextMode = mode === "study" ? "break" : "study";
    setMode(nextMode);
    if (nextMode === "study") {
      setStudyDuration(30);
      setTimeLeft(30 * 60);
      setElapsed(0);
    } else {
      setBreakDuration(5);
      setTimeLeft(5 * 60);
      setBreakElapsed(0);
    }
  };

  const displayTime =
    mode === "study" && isStopwatch
      ? elapsed
      : mode === "break" && isBreakStopwatch
        ? breakElapsed
        : timeLeft;

  const openPicker = () => {
    if (!isRunning) setPickerOpen(true);
  };

  const handlePickerSelect = (v: StudyDuration | BreakDuration) => {
    if (mode === "study") {
      handleStudyDurationChange(v as StudyDuration);
    } else {
      handleBreakDurationChange(v as BreakDuration);
    }
  };

  // When Done is pressed, save the selected duration to the main timer display (uses value from modal so it always applies)
  const handlePickerDone = (selectedValue: StudyDuration | BreakDuration) => {
    if (mode === "study") {
      setStudyDuration(selectedValue as StudyDuration);
      if (selectedValue === "stopwatch") setElapsed(0);
      else setTimeLeft((selectedValue as number) * 60);
    } else {
      setBreakDuration(selectedValue as BreakDuration);
      if (selectedValue === "stopwatch") setBreakElapsed(0);
      else setTimeLeft((selectedValue as number) * 60);
    }
    setPickerOpen(false);
  };

  const pickerValue = mode === "study" ? studyDuration : breakDuration;

  return (
    <div className={`${nunito.className} min-h-screen bg-[#1a1b1e] flex flex-col items-center justify-center p-6 font-sans relative`}>
      <Link
        href="/"
        className="absolute top-5 left-5 flex items-center gap-2 text-white font-bold text-sm hover:opacity-80 transition"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M13 16L7 10L13 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        back to main page
      </Link>
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        <h1 className="text-4xl font-black text-white tracking-tight">
          FREAKODORO 👅 Timer
        </h1>

        {/* Mode & time display */}
        <div className="w-full rounded-[2.5rem] bg-[#25262b] shadow-2xl border-2 border-orange-500/30 px-8 py-8 flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={toggleMode}
            disabled={isRunning}
            className="text-xl font-black uppercase tracking-wider text-white hover:opacity-90 disabled:opacity-100 disabled:cursor-default transition rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#25262b]"
            aria-label={mode === "study" ? "Switch to Break" : "Switch to Study"}
          >
            {mode === "study" ? "Study" : "Break"}
          </button>
          <button
            type="button"
            onClick={openPicker}
            disabled={isRunning}
            className="text-6xl font-black text-white tabular-nums drop-shadow-md hover:opacity-90 disabled:opacity-100 disabled:cursor-default transition rounded-2xl px-4 py-2 -mx-4 -my-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#25262b]"
            aria-label="Adjust duration"
          >
            {formatTime(displayTime)}
          </button>
          <div className="flex gap-3">
            {!isRunning ? (
              <button
                onClick={mode === "study" ? startStudy : startBreak}
                className="rounded-full bg-white text-orange-600 px-8 py-4 text-lg font-black shadow-lg hover:bg-orange-100 active:scale-95 transition"
              >
                Start
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="rounded-full bg-amber-400 text-orange-900 px-8 py-4 text-lg font-black shadow-lg hover:bg-amber-300 active:scale-95 transition"
              >
                Pause
              </button>
            )}
            <button
              onClick={handleReset}
              className="rounded-full bg-[#25262b] border-2 border-white/30 px-6 py-4 text-lg font-black text-white hover:bg-[#2c2d33] transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Duration picker modal */}
      {pickerOpen && (
        <DurationPickerModal
          isStudy={mode === "study"}
          value={pickerValue}
          onSelect={handlePickerSelect}
          onDone={handlePickerDone}
        />
      )}

      {/* Alarm overlay: plays YouTube audio until Stop is pressed */}
      {alarmPlaying && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 p-6">
          <p className="text-white text-lg font-black mb-4">Time&apos;s up!</p>
          <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden bg-black mb-6">
            <iframe
              title="Alarm"
              src={`https://www.youtube.com/embed/${ALARM_VIDEO_ID}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <button
            type="button"
            onClick={() => setAlarmPlaying(false)}
            className="rounded-full bg-white text-[#1a1b1e] px-10 py-4 text-lg font-black shadow-lg hover:bg-gray-100 active:scale-95 transition"
          >
            Stop alarm
          </button>
        </div>
      )}

      {/* Bouncing oranges at bottom */}
      <BouncingOranges sessions={completedSessions} />
    </div>
  );
}
