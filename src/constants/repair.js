const RepairList = [
  "액정 및 터치 문제",
  "스피커 등 음향 문제",
  ["하우징 파손", <br key={1} />, "(뒷판, 외관 케이스)"],
  "버튼 불량",
  "카메라/후레쉬 문제",
  ["각종 잭 불량", <br key={1} />, "(충전, 아이폰)"],
  "Wifi / 블루투스 / GPS 불량",
  ["메인보드", <br key={1} />, "(전원이 켜지지 않음)"],
  ["각종 센서 불량", <br key={1} />, "(홍채, Face ID)"],
  "배터리 교체",
  "진동 문제",
  "리퍼",
];

// key -> store에 저장될 값
// text -> UI에 보여질 값
export const FIRST_REPAIR = [
  { key: "touch", text: <div>액정 및 터치 문제</div> },
  { key: "sound", text: <div>스피커 등 음향 문제</div> },
  {
    key: "housing",
    text: (
      <div>
        하우징 파손 <br /> (뒷판, 외관 케이스)
      </div>
    ),
  },
  { key: "버튼", text: <div>버튼불량</div> },
  // <div>스피커 등 음향 문제</div>,
  // <div>
  //   하우징 파손 <br /> (뒷판, 외관 케이스)
  // </div>,
  // <div>버튼 불량</div>,
  // <div>카메라/후레쉬 문제</div>,
  // <div>
  //   각종 잭 불량 <br /> (충전, 아이폰)
  // </div>,
  // <div>Wifi / 블루투스 / GPS 불량</div>,
  // <div>
  //   메인보드 <br /> (전원이 켜지지 않음)
  // </div>,
  // <div>
  //   각종 센서 불량 <br />
  //   (홍채, Face ID)
  // </div>,
  // <div>배터리 교체</div>,
  // <div>진동 문제</div>,
  // <div>리퍼</div>,
];

export const hasAdditionalQuestion = [
  "enable_touch",
  "crach_lcd_x",
  "crach_lcd_o",
];

export const SUB_LIST = {
  touch: [
    {
      key: "color",
      text: "색상 문제 / 블랙 스크린",
    },
  ],
  sound: [
    {
      key: "mic",
      text: "마이크 불량 (소리 인식 못함)",
    },
    {
      key: "speaker",
      text: "스피커 불량 (나오지 않거나 소리 작음)",
    },
  ],
  housing: ["하우징 교체", "뒷판 파손"],
  button: ["볼륨버튼 불량", "전원버튼 불량", "홈버튼 불량"],
  camera: ["후레쉬 불량", "후면카메라 불량", "전면카메라 불량"],
  jack: ["이어폰 잭 불량", "충전잭 불량"],
  remote: ["GPS 불량", "블루투스 불량", "Wifi 불량"],
  mainboard: ["전원은 들어오나 부팅 불가", "전원이 안 들어옴"],
  sensor: [
    "기타 센서",
    "홍채 센서 불량",
    "지문 센서 불량",
    "Face ID 센서 불량",
  ],
  battery: ["배터리 교체"],
  vibration: ["진동 불량", "진동 미발생"],
  reaper: ["리퍼"],
};

export const ADDITIONAL_LIST = {
  color: [
    {
      key: "enable_touch",
      text: "액정 터치 불가",
    },
    {
      key: "crach_lcd_o",
      text: "액정 파손 (LCD 번짐 있음)",
    },
    {
      key: "crach_lcd_x",
      text: "액정 파손 (LCD 번짐 없음)",
    },
  ],
  crach_lcd_o: [
    {
      key: "crach_lcd_o",
      text: "액정 파손 (LCD 번짐 있음)",
    },
    {
      key: "crach_lcd_x",
      text: "액정 파손 (LCD 번짐 없음)",
    },
  ],
  crach_lcd_x: [
    {
      key: "crach_lcd_o",
      text: "액정 파손 (LCD 번짐 있음)",
    },
    {
      key: "crach_lcd_x",
      text: "액정 파손 (LCD 번짐 없음)",
    },
  ],
};

export const getRepairTitle = () => {
  switch (process) {
    case 50:
      return (
        <div>
          어떤 항목을 수리하길
          <br /> 원하시나요?
        </div>
      );
    case 60:
      return (
        <div>
          어떤 항목을 수리하길
          <br /> 원하시나요?
        </div>
      );
    case 70:
      return (
        <div>
          어떤 항목을 수리하길
          <br /> 원하시나요?
        </div>
      );
    case 80:
      return (
        <div>
          어떤 항목을 수리하길
          <br /> 원하시나요?
        </div>
      );

    default:
      break;
  }
};
