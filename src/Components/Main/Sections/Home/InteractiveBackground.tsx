import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";

const InteractiveBackground = () => {
  const options = useMemo(() => {
    return {};
  });

  const particlesInit = useCallback((engine: any) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);

  return (
    <>
      <div>
        <Particles init={particlesInit} options={options} />
      </div>
    </>
  );
};

export default InteractiveBackground;
