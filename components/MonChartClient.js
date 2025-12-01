import ChartClientWrapper from './ChartClientWrapper';
import ChartClientWrapper from './ChartClientWrapper';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import '../lib/charts';

export default function MonChartClient(props) {
  const [ChartComponent, setChartComponent] = useState(null);
  useEffect(() => {
    const DynamicChart = dynamic(() => import("react-chartjs-2").then(mod => mod.MonChart), { ssr: false });
    setChartComponent(() => DynamicChart);
  }, []);
  if (!ChartComponent) return null;
  return <ChartComponent {...props} />;
}
