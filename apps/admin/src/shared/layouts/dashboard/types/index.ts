import type { ContainerProps } from '@mui/material/Container';
import type { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import type { WorkspacesPopoverProps } from '../../components/workspaces-popover';
import type { HeaderSectionProps } from '../../core/header-section';
import type { LayoutSectionProps } from '../../core/layout-section';
import type { MainSectionProps } from '../../core/main-section';
import type { NavItem } from '../../nav-config-dashboard';

export type DashboardContentProps = ContainerProps & {
  layoutQuery?: Breakpoint;
  disablePadding?: boolean;
};

export type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>;

export type DashboardLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint;
  slotProps?: {
    header?: HeaderSectionProps;
    main?: MainSectionProps;
  };
};

export type NavContentProps = {
  data: NavItem[];
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  workspaces: WorkspacesPopoverProps['data'];
  sx?: SxProps<Theme>;
};
