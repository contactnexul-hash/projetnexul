import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import '../lib/charts';

export default function ChartClientWrapper({ type, data, options }) {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    if (type === 'Line') {
      const Line = dynamic(() => import("react-chartjs-2").then(mod => mod.Line), { ssr: false });
      setChartComponent(() => Line);
    } else if (type === 'Bar') {
      const Bar = dynamic(() => import("react-chartjs-2").then(mod => mod.Bar), { ssr: false });
      setChartComponent(() => Bar);
    }
  }, [type]);

  if (!ChartComponent) return null;
  return <ChartComponent data={data} options={options} />;
}
