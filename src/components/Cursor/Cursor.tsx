import { useEffect, useRef } from "react";
import walkAnimation from '../../assets/images/walk-animation.png'
import idleAnimation from '../../assets/images/idle-animation.png'

const pokemon = {
  pokedex: "0404",
  shiny: false,
  animData: {
    Walk: {
      Name: "Walk",
      Index: "0",
      FrameWidth: "32",
      FrameHeight: "40",
      Durations: { Duration: ["8", "10", "8", "10"] },
      animURL: walkAnimation,
    },
    Idle: {
      Name: "Idle",
      Index: "7",
      FrameWidth: "32",
      FrameHeight: "40",
      Durations: { Duration: ["30", "12", "2", "2", "2", "2", "2", "12"] },
      animURL: idleAnimation,
    },
  },
} as const;

function angle(cx: number, cy: number, ex: number, ey: number) {
  const dy = ey - cy;
  const dx = ex - cx;
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function angle360(cx: number, cy: number, ex: number, ey: number) {
  let theta = angle(cx, cy, ex, ey);
  if (theta < 0) theta += 360;
  return theta;
}

function distance(cx: number, cy: number, ex: number, ey: number) {
  const dx = cx - ex;
  const dy = cy - ey;
  return Math.sqrt(dx * dx + dy * dy);
}

function buildFrameArray(
  animName: keyof typeof pokemon.animData
): number[] {
  const durations = pokemon.animData[animName].Durations.Duration;
  const frames: number[] = [];
  for (let i = 0; i < durations.length; i++) {
    const count = parseInt(durations[i], 10);
    for (let j = 0; j < count; j++) {
      frames.push(i);
    }
  }
  return frames;
}

const Cursor = () => {
  const spriteRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const distancePx = useRef(0);
  const rotation = useRef(0);

  // anim state
  const animNameRef = useRef<keyof typeof pokemon.animData>("Idle");
  const frameIdxRef = useRef(0);
  const frameArrayRef = useRef<number[]>([]);

  const updateDistanceRotation = () => {
    const el = spriteRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    distancePx.current = distance(
      centerX,
      centerY,
      mousePos.current.x,
      mousePos.current.y
    );
    const ang = angle360(
      centerX,
      centerY,
      mousePos.current.x,
      mousePos.current.y
    );

    // map angle to 1 of 8 directions
    if (ang > 67.5 && ang < 112.5) rotation.current = 0;
    else if (ang > 22.5 && ang < 67.5) rotation.current = 1;
    else if (ang > 337.5 || ang < 22.5) rotation.current = 2;
    else if (ang > 292.5 && ang < 337.5) rotation.current = 3;
    else if (ang > 247.5 && ang < 292.5) rotation.current = 4;
    else if (ang > 202.5 && ang < 247.5) rotation.current = 5;
    else if (ang > 157.5 && ang < 202.5) rotation.current = 6;
    else if (ang > 112.5 && ang < 157.5) rotation.current = 7;
  };

  const setSprite = (animName: keyof typeof pokemon.animData, frame: number) => {
    const luxioSprite = spriteRef.current;
    if (!luxioSprite) return;
    const animData = pokemon.animData[animName];
    const frameCount = animData.Durations.Duration.length;
    const directions = 8;   // rotations
    const scale = 1;

    luxioSprite.style.backgroundImage = `url(${animData.animURL})`;
    luxioSprite.style.backgroundSize = `${
      parseInt(animData.FrameWidth) * scale * frameCount
    }px ${parseInt(animData.FrameHeight) * scale * directions}px`;
    luxioSprite.style.width = `${parseInt(animData.FrameWidth) * scale}px`;
    luxioSprite.style.height = `${parseInt(animData.FrameHeight) * scale}px`;
    luxioSprite.style.backgroundPosition = `${
      0 - parseInt(animData.FrameWidth) * (frame % frameCount) * scale
    }px ${0 - rotation.current * parseInt(animData.FrameHeight) * scale}px`;
    luxioSprite.style.imageRendering = "pixelated";
  };

  useEffect(() => {
    // initialise to center
    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      updateDistanceRotation();
    };
    document.addEventListener("mousemove", handleMouseMove);

    // convert % position to pixels
    const sprite = spriteRef.current;
    if (sprite) {
      const rect = sprite.getBoundingClientRect();
      sprite.style.left = rect.left + "px";
      sprite.style.top = rect.top + "px";
    }

    // initial animation
    const initialAnim: keyof typeof pokemon.animData = "Idle";
    animNameRef.current = initialAnim;
    frameArrayRef.current = buildFrameArray(initialAnim);
    frameIdxRef.current = 0;
    setSprite(initialAnim, 0);

    // main loop
    const tick = () => {
      const luxioSprite = spriteRef.current;
      if (!luxioSprite) return;

      updateDistanceRotation();

      const dist = distancePx.current;
      const desiredAnim: keyof typeof pokemon.animData =
        dist >= 55 ? "Walk" : "Idle";

      // animation changer
      if (desiredAnim !== animNameRef.current) {
        animNameRef.current = desiredAnim;
        frameArrayRef.current = buildFrameArray(desiredAnim);
        frameIdxRef.current = 0;
      } else {
        frameIdxRef.current =
          (frameIdxRef.current + 1) % frameArrayRef.current.length;
      }

      setSprite(animNameRef.current, frameArrayRef.current[frameIdxRef.current]);

      // move towards mouse when walking
      if (animNameRef.current === "Walk") {
        const rect = luxioSprite.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const ang = angle360(
          centerX,
          centerY,
          mousePos.current.x,
          mousePos.current.y
        );
        const rad = (ang * Math.PI) / 180;
        const speed = 4;
        luxioSprite.style.left = rect.left + Math.cos(rad) * speed + "px";
        luxioSprite.style.top = rect.top + Math.sin(rad) * speed + "px";
      }
    };

    const intervalId = setInterval(tick, 33);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={spriteRef}
      style={{
        position: "fixed",
        zIndex: 10000,
        width: 64,
        height: 64,
        pointerEvents: "none",
        top: "50%",
        left: "50%",
        imageRendering: "pixelated",
      }}
    />
  );
};

export default Cursor;