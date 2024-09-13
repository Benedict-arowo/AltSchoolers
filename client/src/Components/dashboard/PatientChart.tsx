import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Card, CardContent } from '../ui/card';

export const description = 'A bar chart';

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
  { month: 'July', desktop: 214 },
  { month: 'August', desktop: 214 },
  { month: 'September', desktop: 414 },
  { month: 'October', desktop: 254 },
  { month: 'November', desktop: 354 },
  { month: 'December', desktop: 284 },
];

export function PatientChart() {
  return (
    <Card className="col-span-4">
      <CardContent className="p-2">
        <div className="flex flex-row justify-between items-center text-xs mb-8">
          <span className="text-[#666666] text-[10px] lg:text-xs">
            Patient Overview
          </span>

          {/* <CardDescription> */}
          <select
            name="test"
            id=""
            className="text-[10px] lg:text-xs p-1 border rounded-md"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          {/* <ChartContainer config={chartConfig}> */}
          <BarChart
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            accessibilityLayer
            data={chartData}
            height={200}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1D579A" stopOpacity={1} />
                <stop offset="37.77%" stopColor="#498DDD" stopOpacity={1} />
                <stop offset="100%" stopColor="#A3C6F0" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 8, fill: 'var(--chart-label-color)' }}
              tickFormatter={(value) => value.slice(0, 3)}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 7, fill: 'var(--chart-label-color)' }}
              domain={[0, 450]}
              width={22}
            />
            <Tooltip cursor={false} />

            <Bar dataKey="desktop" fill="url(#colorGradient)" radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
