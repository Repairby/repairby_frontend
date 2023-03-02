const hardCalculator = number => {
  //..복잡한 계산
};

const easyCalculator = number => {
  //..간단한 계산
};

const Home = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);

  const easySum = easyCalculator(easyNumber);

  //... page component

