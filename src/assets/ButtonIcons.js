export const PlayBtn = (
  <svg
    width="72px"
    height="72px"
    viewBox="0 0 72 72"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        x="-20.0%"
        y="-20.0%"
        width="140.0%"
        height="140.0%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset
          dx="0"
          dy="2"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.0862745098   0 0 0 0 0.031372549   0 0 0 0 0.160784314  0 0 0 0.2 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g
      id="img-/-i_play"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="icons-/-player-/-i_play_circle"
        filter="url(#filter-1)"
        transform="translate(6.000000, 6.000000)"
      >
        <path
          d="M29.999938,6.28830321e-13 C46.5599787,6.28830321e-13 60,13.4399038 60,29.999908 C60,46.5600348 46.5599787,60 29.999938,60 C13.4400833,60 -1.70530257e-13,46.5600348 -1.70530257e-13,29.999908 C-1.70530257e-13,13.4399038 13.4400833,6.28830321e-13 29.999938,6.28830321e-13 Z M22.5,19.5054199 L22.5,40.6099366 C22.5,42.2707017 23.6311367,42.8793496 25.0264646,41.9714392 L40.9186037,31.6307595 C42.3189705,30.7195704 42.3139316,29.2584865 40.9186037,28.360014 L25.0264646,18.1268283 C23.6260978,17.2251112 22.5,17.8455723 22.5,19.5054199 Z"
          id="Shape"
          fill="#FFFFFF"
        ></path>
        <path
          d="M25.0264646,41.9714392 L40.9186037,31.6307595 C42.3189705,30.7195704 42.3139316,29.2584865 40.9186037,28.360014 L25.0264646,18.1268283 C23.6260978,17.2251112 22.5,17.8455723 22.5,19.5054199 L22.5,40.6099366 C22.5,42.2707017 23.6311367,42.8793496 25.0264646,41.9714392 Z"
          id="Path"
          fill="var(--sky)"
          opacity="0.7"
        ></path>
      </g>
    </g>
  </svg>
);

export const PauseBtn = (
  <svg
    width="72px"
    height="72px"
    viewBox="0 0 72 72"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        x="-20.0%"
        y="-20.0%"
        width="140.0%"
        height="140.0%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset
          dx="0"
          dy="2"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.0862745098   0 0 0 0 0.031372549   0 0 0 0 0.160784314  0 0 0 0.2 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        ></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g
      id="img-/-i_pause"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="icons-/-player-/-i_play_circle"
        filter="url(#filter-1)"
        transform="translate(6.000000, 6.000000)"
      >
        <g id="baseline-pause_circle_filled-24px">
          <path
            d="M30,0 C46.56,0 60,13.44 60,30 C60,46.56 46.56,60 30,60 C13.44,60 0,46.56 0,30 C0,13.44 13.44,0 30,0 Z M24,18 C22.3431458,18 21,19.3431458 21,21 L21,21 L21,39 L21.0050927,39.1762728 C21.0963391,40.75108 22.4023191,42 24,42 C25.6568542,42 27,40.6568542 27,39 L27,39 L27,21 L26.9949073,20.8237272 C26.9036609,19.24892 25.5976809,18 24,18 Z M36,18 C34.3431458,18 33,19.3431458 33,21 L33,21 L33,39 L33.0050927,39.1762728 C33.0963391,40.75108 34.4023191,42 36,42 C37.6568542,42 39,40.6568542 39,39 L39,39 L39,21 L38.9949073,20.8237272 C38.9036609,19.24892 37.5976809,18 36,18 Z"
            id="Shape"
            fill="#FFFFFF"
          ></path>
          <path
            d="M24,18 C25.6568542,18 27,19.3431458 27,21 L27,21 L27,39 C27,40.6568542 25.6568542,42 24,42 C22.3431458,42 21,40.6568542 21,39 L21,39 L21,21 C21,19.3431458 22.3431458,18 24,18 Z M36,18 C37.6568542,18 39,19.3431458 39,21 L39,21 L39,39 C39,40.6568542 37.6568542,42 36,42 C34.3431458,42 33,40.6568542 33,39 L33,39 L33,21 C33,19.3431458 34.3431458,18 36,18 Z"
            id="Combined-Shape"
            fill="var(--sky)"
            opacity="0.7"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
