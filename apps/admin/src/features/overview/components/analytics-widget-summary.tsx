import type { CardProps } from '@mui/material/Card';
import type { PaletteColorKey } from 'src/core/theme/core';
import type { ChartOptions } from 'src/shared/components/chart';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import { varAlpha } from 'minimal-shared/utils';
import { Chart, useChart } from 'src/shared/components/chart';
import { Iconify } from 'src/shared/components/iconify';
import { SvgColor } from 'src/shared/components/svg-color';
import { fNumber, fPercent, fShortenNumber } from 'src/shared/utils/format-number';

import * as styles from './analytics-widget-summary.styles';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  color?: PaletteColorKey;
  icon: React.ReactNode;
  chart: {
    series: number[];
    categories: string[];
    options?: ChartOptions;
  };
};

export function AnalyticsWidgetSummary({
  sx,
  icon,
  title,
  total,
  chart,
  percent,
  color = 'primary',
  ...other
}: Props) {
  const theme = useTheme();

  const chartColors = [theme.palette[color].dark];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    xaxis: { categories: chart.categories },
    grid: {
      padding: {
        top: 6,
        left: 6,
        right: 6,
        bottom: 6,
      },
    },
    tooltip: {
      y: { formatter: (value: number) => fNumber(value), title: { formatter: () => '' } },
    },
    markers: {
      strokeWidth: 0,
    },
    ...chart.options,
  });

  const renderTrending = () => (
    <Box sx={styles.trendingBoxStyle}>
      <Iconify width={20} icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'} />
      <Box component="span" sx={styles.trendingTextStyle}>
        {percent > 0 && '+'}
        {fPercent(percent)}
      </Box>
    </Box>
  );

  return (
    <Card
      sx={styles.cardStyle(color, sx)}
      {...other}
    >
      <Box sx={styles.iconBoxStyle}>{icon}</Box>

      {renderTrending()}

      <Box sx={styles.contentBoxStyle}>
        <Box sx={styles.textBoxStyle}>
          <Box sx={styles.titleStyle}>{title}</Box>

          <Box sx={styles.totalStyle}>{fShortenNumber(total)}</Box>
        </Box>

        <Chart
          type="line"
          series={[{ data: chart.series }]}
          options={chartOptions}
          sx={styles.chartStyle}
        />
      </Box>

      <SvgColor
        src="/assets/background/shape-square.svg"
        sx={styles.bgShapeStyle(color)}
      />
    </Card>
  );
}
