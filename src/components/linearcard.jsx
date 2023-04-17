import { motion, animate } from "framer-motion";
import { useRef } from "react";
import{fadeIn,textVariant} from '../utils/motion'
const pattern = `
url("http://allyourhtml.club/carousel/pattern.webp") center / 75%
`;
const step = "5%";
const rainbow = (bgY) => {
  return `
  repeating-linear-gradient(
    0deg,
    rgb(255, 119, 115) calc(${step} * 1),
    rgba(255, 237, 95, 1) calc(${step} * 2),
    rgba(168, 255, 95, 1) calc(${step} * 3),
    rgba(131, 255, 247, 1) calc(${step} * 4),
    rgba(120, 148, 255, 1) calc(${step} * 5),
    rgb(216, 117, 255) calc(${step} * 6),
    rgb(255, 119, 115) calc(${step} * 7)
  )
  0% ${bgY}% / 200% 700%
  `;
};
//  0% var(--bg-y) / 200% 700%;

const diagonal = (bgX, bgY) => {
  return `
  repeating-linear-gradient(
    128deg,
    #0e152e 0%,
    hsl(180, 10%, 60%) 3.8%,
    hsl(180, 10%, 60%) 4.5%,
    hsl(180, 10%, 60%) 5.2%,
    #0e152e 10%,
    #0e152e 12%
  )
  ${bgX}%  ${bgY}% / 300%
  `;
};

const shade = (X, Y, bgX, bgY) => {
  return `
  radial-gradient(
    farthest-corner circle at ${X * 100}% ${Y * 100}%,
    rgba(255, 255, 255, 0.1) 12%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0.25) 120%
  )
  ${bgX}% ${bgY}% / 300%
  `;
};

function goToMouse(e, layer1Ref, isBack) {
  const ratio = e.nativeEvent.offsetY / e.nativeEvent.offsetX;
  animate(
    isBack ? e.nativeEvent.offsetX : 0,
    isBack ? 0 : e.nativeEvent.offsetX,
    {
      duration: 0.15,
      onUpdate: (latest) => {
        layer1Ref.current.style.background = `radial-gradient(
        farthest-corner circle at ${latest}px ${latest * ratio}px,
        rgba(255, 255, 255, 0.8) 10%,
        rgba(255, 255, 255, 0.65) 20%,
        rgba(255, 255, 255, 0) 90%
      )
      `;
      }
    }
  );
}

function combineBg(
  X = 0,
  Y = 0,
  bgX = 40,
  bgY = 40,
  pattern,
  rainbow,
  diagonal,
  shade
) {
  let allPatterns = [];
  if (shade) {
    allPatterns = [
      pattern,
      rainbow(bgY),
      diagonal(bgX, bgY),
      shade(X, Y, bgX, bgY)
    ];
  } else {
    allPatterns = [pattern, rainbow(bgY), diagonal(bgX, bgY)];
  }

  return allPatterns.join(",");
}

export function LinearCard(props) {
  const cardState = useRef({ state: "out" });
  const layer1Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);

  const layerBox = useRef(null);

  return (
    <motion.div variants={fadeIn("right","spring",0.5*props.index,0.75)} className="  drop-shadow-lg"> 
    <div
        options={{
        max:45,
        scale:1,
        speed:150
         }} 
      ref={layerBox}
      
      style={{
        width: 250,
        height: 280,
        // 三维透视效果
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
    >
      <div
        role="container"
        style={{
          // 和父级保持一致的大小
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 30,
          
          backgroundColor: "black",
          transition: "transform 0.5s ease-out",
          overflow: "hidden"
        }}
        onMouseMove={(e) => {
          // 实现卡片跟随鼠标位置倾斜旋转，最大角度为15度

          let X =
            e.nativeEvent.offsetX / parseInt(layerBox.current.style.width);
          let Y =
            e.nativeEvent.offsetY / parseInt(layerBox.current.style.height);

          let rX = -(X - 0.5) * 25;
          let rY = (Y - 0.5) * 25;

          let bgX = 40 + 20 * X;
          let bgY = 40 + 20 * Y;
          //  const x = (e.clientX - window.innerWidth / 2) / 25
          //  const y = -(e.clientY - window.innerHeight / 2) / 25
          e.target.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
          layer1Ref.current.style.background = `radial-gradient(
          farthest-corner circle at ${100 * X}% ${100 * Y}%,
          rgba(255, 255, 255, 0.8) 10%,
          rgba(255, 255, 255, 0.65) 20%,
          rgba(255, 255, 255, 0) 90%
        )
        `;

          const bg = combineBg(X, Y, bgX, bgY, pattern, rainbow, diagonal);

          layer3Ref.current.style.background = bg;

          layer4Ref.current.style.backgroundPosition = `
        center, 0% ${bgY}%, calc(${bgX}% * -1) calc(${bgY}% * -1), ${bgX}% ${bgY}%
        `;
        }}
        onMouseEnter={(e) => {
          goToMouse(e, layer1Ref, false);
          layer3Ref.current.style.opacity = 1;
        }}
        // 鼠标移出时，卡片恢复原位
        onMouseLeave={(e) => {
          layer3Ref.current.style.opacity = 0.2;
          goToMouse(e, layer1Ref, true);

          e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }}
      >
        <div
          role="layer1"
          ref={layer1Ref}
          style={{
            zIndex: 20,
            position: "absolute",
            mixBlendMode: "soft-light",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            background: `radial-gradient(
              farthest-corner circle at top left,
              rgba(255, 255, 255, 0.8) 10%,
              rgba(255, 255, 255, 0.65) 20%,
              rgba(255, 255, 255, 0) 90%
            )
            `
          }}
        ></div>
        <div
          role="layer2-img"
          style={{
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "absolute"
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%"
              
            }}
            src={props.bg}
            alt=""
          />
        </div>
        <div
          role="layer3"
          ref={layer3Ref}
          style={{
            position: "absolute",
            pointerEvents: "none",
            opacity: 0.2,
            transition: "opacity 0.5s ease",
            willChange: "background",
            mixBlendMode: "color-dodge",
            width: "100%",
            height: "100%",
            background: combineBg(0, 0, 40, 40, pattern, rainbow, diagonal),
            backgroundBlendMode: "hue, hue, hard-light, overlay",
            zIndex: 30
          }}
        >
          <div
            role="layer4"
            ref={layer4Ref}
            style={{
              position: "absolute",
              pointerEvents: "none",

              willChange: "background",
              mixBlendMode: "exclusion",
              width: "100%",
              height: "100%",
              background: combineBg(
                0,
                0,
                40,
                40,
                pattern,
                rainbow,
                diagonal,
                shade
              ),
              backgroundBlendMode: "soft-light, hue, hard-light",
              backgroundSize: " 75%, 200% 400%, 800%, 200%",
              backgroundPosition:
                "center, 0% 40%, calc(40% * -1) calc(40% * -1), ${bgX}% 40%"
              // zIndex:40
            }}
          ></div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
